
import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription } from '@/hooks/useSubscription';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SubscriptionPlans } from '@/components/subscription/SubscriptionPlans';
import { SubscriptionStatus } from '@/components/subscription/SubscriptionStatus';
import { Navbar } from '@/components/layout/Navbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Subscription = () => {
  const { user, loading } = useAuth();
  const { checkSubscription } = useSubscription();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
      return;
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    if (sessionId) {
      toast({
        title: "Paiement réussi !",
        description: "Votre abonnement a été activé avec succès.",
      });
      checkSubscription();
      // Clean up URL
      window.history.replaceState({}, '', '/subscription');
    }
  }, [searchParams, toast, checkSubscription]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <div className="pt-16 px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Gestion des abonnements
            </h1>
            <p className="text-gray-600">
              Choisissez le plan qui correspond à vos besoins
            </p>
          </div>

          <Tabs defaultValue="plans" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="plans">Plans disponibles</TabsTrigger>
              <TabsTrigger value="status">Mon abonnement</TabsTrigger>
            </TabsList>
            
            <TabsContent value="plans" className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Choisissez votre plan</CardTitle>
                  <CardDescription>
                    Tous les plans incluent un accès complet aux outils IA et APIs gratuites
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <SubscriptionPlans />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="status" className="space-y-8">
              <div className="max-w-2xl mx-auto">
                <SubscriptionStatus />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
