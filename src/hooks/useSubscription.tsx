
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface SubscriptionData {
  subscribed: boolean;
  subscription_tier: string | null;
  subscription_end: string | null;
  trial_ends_at: string | null;
  plan_limits: any;
  usage_current: any;
}

export const useSubscription = () => {
  const { user, loading: authLoading } = useAuth();
  const { toast } = useToast();
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null);
  const [loading, setLoading] = useState(true);

  const checkSubscription = async () => {
    if (!user) {
      setSubscription(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      console.log('Checking subscription status...');
      
      const { data, error } = await supabase.functions.invoke('check-subscription', {
        headers: {
          Authorization: `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`,
        },
      });

      if (error) throw error;

      console.log('Subscription check result:', data);
      
      // Also fetch local subscription data
      const { data: localData, error: localError } = await supabase
        .from('subscribers')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (!localError && localData) {
        setSubscription({
          subscribed: data.subscribed || false,
          subscription_tier: data.subscription_tier || localData.subscription_tier,
          subscription_end: data.subscription_end || localData.subscription_end,
          trial_ends_at: localData.trial_ends_at,
          plan_limits: localData.plan_limits,
          usage_current: localData.usage_current,
        });
      } else {
        setSubscription({
          subscribed: data.subscribed || false,
          subscription_tier: data.subscription_tier,
          subscription_end: data.subscription_end,
          trial_ends_at: null,
          plan_limits: { projects: 1, leads: 5, api_calls: 100 },
          usage_current: { projects: 0, leads: 0, api_calls: 0 },
        });
      }
    } catch (error: any) {
      console.error('Error checking subscription:', error);
      toast({
        title: "Erreur",
        description: "Impossible de vérifier le statut de l'abonnement",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const createCheckoutSession = async (priceId: string) => {
    if (!user) {
      toast({
        title: "Erreur",
        description: "Vous devez être connecté pour vous abonner",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { priceId },
        headers: {
          Authorization: `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`,
        },
      });

      if (error) throw error;

      window.location.href = data.url;
    } catch (error: any) {
      console.error('Error creating checkout session:', error);
      toast({
        title: "Erreur",
        description: "Impossible de créer la session de paiement",
        variant: "destructive",
      });
    }
  };

  const openCustomerPortal = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase.functions.invoke('customer-portal', {
        headers: {
          Authorization: `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`,
        },
      });

      if (error) throw error;

      window.location.href = data.url;
    } catch (error: any) {
      console.error('Error opening customer portal:', error);
      toast({
        title: "Erreur",
        description: "Impossible d'ouvrir le portail client",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    if (!authLoading) {
      checkSubscription();
    }
  }, [user, authLoading]);

  // Auto-refresh every 30 seconds
  useEffect(() => {
    if (!user || authLoading) return;

    const interval = setInterval(() => {
      checkSubscription();
    }, 30000);

    return () => clearInterval(interval);
  }, [user, authLoading]);

  return {
    subscription,
    loading: loading || authLoading,
    checkSubscription,
    createCheckoutSession,
    openCustomerPortal,
  };
};
