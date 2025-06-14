
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
    const { ebookId, customerEmail, customerName, bookTitle, bookPrice } = await req.json();
    
    console.log('Creating checkout for:', { ebookId, customerEmail, bookTitle, bookPrice });

    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
      apiVersion: '2023-10-16',
    });

    // Créer ou récupérer le customer Stripe
    let customer;
    const existingCustomers = await stripe.customers.list({
      email: customerEmail,
      limit: 1,
    });

    if (existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0];
    } else {
      customer = await stripe.customers.create({
        email: customerEmail,
        name: customerName,
        metadata: {
          source: 'library_ebook_purchase'
        }
      });
    }

    // Convertir le prix en centimes pour Stripe
    const priceInCents = Math.round(parseFloat(bookPrice.replace('€', '')) * 100);

    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: bookTitle,
              description: `Livre numérique premium par Dominiqk Mendy - Expert IA International`,
              images: ['https://dominiqkmendy.com/lovable-uploads/63f9776c-5d90-4669-8666-21456fed58f0.png'],
              metadata: {
                type: 'ebook',
                author: 'Dominiqk Mendy',
                category: 'Business & IA'
              }
            },
            unit_amount: priceInCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/library/success?session_id={CHECKOUT_SESSION_ID}&ebook_id=${ebookId}`,
      cancel_url: `${req.headers.get('origin')}/library?cancelled=true`,
      metadata: {
        ebook_id: ebookId,
        customer_email: customerEmail,
        book_title: bookTitle,
      },
      payment_intent_data: {
        metadata: {
          ebook_id: ebookId,
          book_title: bookTitle,
        }
      },
      customer_update: {
        shipping: 'auto',
      },
      billing_address_collection: 'required',
    });

    console.log('Checkout session created:', session.id);

    return new Response(JSON.stringify({ 
      url: session.url,
      sessionId: session.id 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in create-checkout:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'Failed to create checkout session' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
