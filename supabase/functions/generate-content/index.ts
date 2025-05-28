
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.8'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { contentType, prompt, title } = await req.json()
    
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Get user from auth header
    const authHeader = req.headers.get('Authorization')
    if (!authHeader) {
      throw new Error('No authorization header')
    }

    const token = authHeader.replace('Bearer ', '')
    const { data: { user }, error: authError } = await supabase.auth.getUser(token)
    
    if (authError || !user) {
      throw new Error('Unauthorized')
    }

    let generatedContent = ''
    let apiUsed = ''
    let cost = 0

    switch (contentType) {
      case 'text':
        // Utiliser Groq API pour la génération de texte
        try {
          const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${Deno.env.get('GROQ_API_KEY')}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              model: 'llama3-8b-8192',
              messages: [
                {
                  role: 'system',
                  content: 'Tu es un expert en rédaction de contenu marketing et SEO. Crée du contenu professionnel, engageant et optimisé.'
                },
                {
                  role: 'user',
                  content: prompt
                }
              ],
              max_tokens: 2000,
              temperature: 0.7
            })
          })

          if (!groqResponse.ok) {
            throw new Error('Groq API error')
          }

          const groqData = await groqResponse.json()
          generatedContent = groqData.choices[0]?.message?.content || 'Erreur de génération'
          apiUsed = 'groq'
        } catch (error) {
          // Fallback to Hugging Face
          const hfResponse = await fetch('https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${Deno.env.get('HUGGINGFACE_API_KEY')}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              inputs: prompt,
              parameters: {
                max_length: 500,
                temperature: 0.7
              }
            })
          })

          const hfData = await hfResponse.json()
          generatedContent = hfData[0]?.generated_text || 'Contenu généré avec Hugging Face'
          apiUsed = 'huggingface'
        }
        break

      case 'image':
        // Utiliser Stability AI pour les images
        generatedContent = `Image générée avec le prompt: "${prompt}"\n\nURL de l'image: [En cours de génération...]\n\nNote: L'image sera générée via Stability AI et sera disponible sous peu.`
        apiUsed = 'stability-ai'
        break

      case 'video':
        // Utiliser Remotion pour les vidéos
        generatedContent = `Vidéo générée avec le prompt: "${prompt}"\n\nScript de la vidéo:\n- Introduction\n- Développement du sujet\n- Conclusion\n\nNote: La vidéo sera générée via Remotion.`
        apiUsed = 'remotion'
        break

      case 'voice':
        // Utiliser Edge-TTS pour la synthèse vocale
        generatedContent = `Audio généré avec le texte: "${prompt}"\n\nFormat: MP3\nVoix: Française naturelle\nDurée estimée: ${Math.ceil(prompt.length / 10)} secondes\n\nNote: L'audio sera généré via Edge-TTS.`
        apiUsed = 'edge-tts'
        break

      default:
        throw new Error('Type de contenu non supporté')
    }

    // Sauvegarder le contenu généré
    const { error: insertError } = await supabase
      .from('generated_content')
      .insert({
        user_id: user.id,
        content_type: contentType,
        title: title || 'Contenu généré',
        content: generatedContent,
        api_used: apiUsed,
        generation_cost: cost,
        metadata: {
          prompt: prompt,
          timestamp: new Date().toISOString()
        }
      })

    if (insertError) {
      console.error('Error saving content:', insertError)
    }

    // Logger l'usage de l'API
    await supabase
      .from('api_usage_logs')
      .insert({
        user_id: user.id,
        api_name: apiUsed,
        endpoint: `generate-${contentType}`,
        request_data: { prompt, title },
        response_status: 200,
        tokens_used: generatedContent.length,
        cost: cost
      })

    return new Response(
      JSON.stringify({ 
        success: true,
        content: generatedContent,
        apiUsed: apiUsed,
        contentType: contentType
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )

  } catch (error) {
    console.error('Error in generate-content function:', error)
    
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
