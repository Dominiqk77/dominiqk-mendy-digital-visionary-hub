
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface LeadData {
  name?: string;
  email: string;
  company?: string;
  source: string;
  campaign?: string;
}

interface BookDownloadData {
  book_id: string;
  book_title: string;
  lead_id?: string;
}

interface EngagementData {
  lead_id?: string;
  event_type: string;
  page_url: string;
  event_data?: any;
}

interface CheckoutData {
  ebookId: string;
  customerEmail: string;
  customerName?: string;
  bookTitle: string;
  bookPrice: string;
}

export const useDominiqkLibrary = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const { toast } = useToast();

  const addLead = async (leadData: LeadData) => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from('leads')
        .insert([{
          name: leadData.name,
          email: leadData.email,
          company: leadData.company,
          source: leadData.source,
          campaign: leadData.campaign,
          status: 'new'
        }])
        .select()
        .single();

      if (error) throw error;

      // Track engagement pour le nouveau lead
      await trackEngagement({
        lead_id: data.id,
        event_type: 'lead_captured',
        page_url: window.location.href,
        event_data: { source: leadData.source }
      });

      return data;
    } catch (error) {
      console.error('Erreur lors de l\'ajout du lead:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'enregistrement",
        variant: "destructive",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const createCheckout = async (checkoutData: CheckoutData) => {
    try {
      setIsProcessingPayment(true);
      
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: checkoutData
      });

      if (error) throw error;

      if (data?.url) {
        // Ouvrir Stripe Checkout dans un nouvel onglet
        window.open(data.url, '_blank');
        
        toast({
          title: "Redirection vers le paiement",
          description: "Vous allez être redirigé vers notre plateforme de paiement sécurisée",
        });

        return data;
      } else {
        throw new Error('URL de checkout non reçue');
      }
    } catch (error) {
      console.error('Erreur lors de la création du checkout:', error);
      toast({
        title: "Erreur de paiement",
        description: "Impossible de créer la session de paiement. Veuillez réessayer.",
        variant: "destructive",
      });
      return null;
    } finally {
      setIsProcessingPayment(false);
    }
  };

  const verifyPayment = async (sessionId: string, ebookId: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('verify-payment', {
        body: { sessionId, ebookId }
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Erreur lors de la vérification du paiement:', error);
      return null;
    }
  };

  const sendConfirmationEmail = async (email: string, name: string, ebookTitle: string, downloadUrl?: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('send-ebook-confirmation', {
        body: {
          email,
          name,
          ebookTitle,
          downloadUrl
        }
      });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      return null;
    }
  };

  const trackDownload = async (downloadData: BookDownloadData) => {
    try {
      const { error } = await supabase
        .from('book_downloads')
        .insert([{
          book_id: downloadData.book_id,
          book_title: downloadData.book_title,
          lead_id: downloadData.lead_id,
          ip_address: null,
          user_agent: navigator.userAgent
        }]);

      if (error) throw error;

      // Track aussi dans engagement_tracking
      if (downloadData.lead_id) {
        await trackEngagement({
          lead_id: downloadData.lead_id,
          event_type: 'book_download',
          page_url: window.location.href,
          event_data: { 
            book_id: downloadData.book_id,
            book_title: downloadData.book_title
          }
        });
      }

      return true;
    } catch (error) {
      console.error('Erreur lors du tracking de téléchargement:', error);
      return false;
    }
  };

  const trackEngagement = async (engagementData: EngagementData) => {
    try {
      const { error } = await supabase
        .from('engagement_tracking')
        .insert([{
          lead_id: engagementData.lead_id,
          event_type: engagementData.event_type,
          page_url: engagementData.page_url,
          event_data: engagementData.event_data,
          session_id: sessionStorage.getItem('session_id') || 'anonymous'
        }]);

      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Erreur lors du tracking d\'engagement:', error);
      return false;
    }
  };

  const findLeadByEmail = async (email: string) => {
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .eq('email', email)
        .single();

      if (error && error.code !== 'PGRST116') throw error;
      return data;
    } catch (error) {
      console.error('Erreur lors de la recherche du lead:', error);
      return null;
    }
  };

  return {
    addLead,
    createCheckout,
    verifyPayment,
    sendConfirmationEmail,
    trackDownload,
    trackEngagement,
    findLeadByEmail,
    isLoading,
    isProcessingPayment
  };
};
