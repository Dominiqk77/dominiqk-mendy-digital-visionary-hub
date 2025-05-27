
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.8'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
)

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Récupérer toutes les conversations terminées qui n'ont pas encore reçu d'email
    const twentyMinutesAgo = new Date(Date.now() - 20 * 60 * 1000).toISOString()

    const { data: conversations, error } = await supabase
      .from('chat_conversations')
      .select('*')
      .eq('email_sent', false)
      .not('user_email', 'is', null)
      .not('conversation_ended_at', 'is', null)
      .lt('conversation_ended_at', twentyMinutesAgo)

    if (error) {
      console.error('Erreur récupération conversations:', error)
      throw error
    }

    let emailsSent = 0

    for (const conversation of conversations || []) {
      try {
        // Envoyer l'email de suivi
        const { data: emailResult, error: emailError } = await supabase.functions.invoke('send-chat-summary', {
          body: {
            conversationId: conversation.id,
            userEmail: conversation.user_email,
            userName: conversation.user_name
          }
        })

        if (emailError) {
          console.error(`Erreur envoi email pour conversation ${conversation.id}:`, emailError)
          continue
        }

        console.log(`Email envoyé avec succès pour conversation ${conversation.id}`)
        emailsSent++

      } catch (error) {
        console.error(`Erreur traitement conversation ${conversation.id}:`, error)
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        emailsSent: emailsSent,
        totalConversations: conversations?.length || 0,
        message: `${emailsSent} emails de suivi envoyés avec succès`
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )

  } catch (error) {
    console.error('Erreur dans la fonction de programmation d\'emails:', error)
    
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})
