
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
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
    const { ebookId, priceId, currency = 'EUR' } = await req.json();
    
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    );

    // Get user from request
    const authHeader = req.headers.get('Authorization')!;
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser(
      authHeader.replace('Bearer ', '')
    );

    if (userError || !user) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Get ebook details
    const { data: ebook, error: ebookError } = await supabaseClient
      .from('ebooks')
      .select('*')
      .eq('id', ebookId)
      .single();

    if (ebookError || !ebook) {
      return new Response(JSON.stringify({ error: 'Ebook not found' }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Check if user already purchased this ebook
    const { data: existingPurchase } = await supabaseClient
      .from('ebook_purchases')
      .select('id')
      .eq('user_id', user.id)
      .eq('ebook_id', ebookId)
      .eq('status', 'completed')
      .single();

    if (existingPurchase) {
      return new Response(JSON.stringify({ error: 'Already purchased' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Create Stripe checkout session
    const stripe = new (await import('https://esm.sh/stripe@13.5.0')).default(
      Deno.env.get('STRIPE_SECRET_KEY') ?? '',
      { apiVersion: '2023-10-16' }
    );

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: currency.toLowerCase(),
            product_data: {
              name: ebook.title,
              description: ebook.description,
              images: ebook.cover_image_url ? [ebook.cover_image_url] : [],
            },
            unit_amount: Math.round(ebook.price * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/library/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/library/${ebookId}`,
      customer_email: user.email,
      metadata: {
        user_id: user.id,
        ebook_id: ebookId,
      },
    });

    // Create pending purchase record
    await supabaseClient
      .from('ebook_purchases')
      .insert({
        user_id: user.id,
        ebook_id: ebookId,
        stripe_session_id: session.id,
        amount: ebook.price,
        currency: currency,
        status: 'pending',
      });

    return new Response(JSON.stringify({ sessionId: session.id }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
