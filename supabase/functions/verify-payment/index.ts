
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { sessionId, ebookId } = await req.json();
    
    console.log('Verifying payment for session:', sessionId);

    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
      apiVersion: '2023-10-16',
    });

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      { auth: { persistSession: false } }
    );

    // Vérifier le statut du paiement Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    
    if (session.payment_status === 'paid') {
      console.log('Payment confirmed for session:', sessionId);
      
      // Récupérer les détails de l'ebook
      const { data: ebook } = await supabase
        .from('ebooks')
        .select('*')
        .eq('id', ebookId)
        .single();

      if (!ebook) {
        throw new Error('Ebook not found');
      }

      // Créer l'enregistrement de purchase
      const { data: purchase, error: purchaseError } = await supabase
        .from('ebook_purchases')
        .insert({
          user_id: null, // Pas d'authentification requise
          ebook_id: ebookId,
          stripe_session_id: sessionId,
          stripe_payment_intent_id: session.payment_intent,
          amount: session.amount_total / 100,
          currency: session.currency.toUpperCase(),
          status: 'completed',
        })
        .select()
        .single();

      if (purchaseError) {
        console.error('Error creating purchase record:', purchaseError);
      }

      // Envoyer l'email de confirmation avec le lien de téléchargement
      const downloadUrl = `https://dominiqkmendy.com/library/download/${ebookId}?purchase_id=${purchase?.id}`;
      
      await fetch(`${req.headers.get('origin')?.replace('http://localhost:8080', 'https://rohwyheclmjmiuoksvuc.supabase.co')}/functions/v1/send-ebook-confirmation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Deno.env.get('SUPABASE_ANON_KEY')}`,
        },
        body: JSON.stringify({
          email: session.customer_details?.email,
          name: session.customer_details?.name,
          ebookTitle: ebook.title,
          downloadUrl: downloadUrl,
        }),
      });

      return new Response(JSON.stringify({ 
        success: true,
        downloadUrl: downloadUrl,
        ebook: ebook
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ 
        success: false, 
        status: session.payment_status 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

  } catch (error) {
    console.error('Error in verify-payment:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'Failed to verify payment' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
