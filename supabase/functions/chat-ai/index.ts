
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
  console.log('🚀 Chat AI function called - Method:', req.method)
  
  if (req.method === 'OPTIONS') {
    console.log('✅ CORS preflight request handled')
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Vérification de la clé API Gemini
    const geminiApiKey = Deno.env.get('GEMINI_API_KEY')
    if (!geminiApiKey) {
      console.error('❌ GEMINI_API_KEY not found in environment')
      throw new Error('Gemini API key not configured')
    }
    console.log('✅ Gemini API key found')

    // Parse du body avec gestion d'erreur
    let requestBody
    try {
      requestBody = await req.json()
      console.log('📝 Request body parsed successfully')
    } catch (parseError) {
      console.error('❌ Failed to parse request body:', parseError)
      throw new Error('Invalid JSON in request body')
    }

    const { message, conversationHistory = [], sessionId, userAgent } = requestBody

    if (!message || typeof message !== 'string' || message.trim() === '') {
      console.error('❌ Invalid message:', message)
      throw new Error('Message is required and must be a non-empty string')
    }
    console.log('✅ Message validated:', message.substring(0, 50) + '...')

    // Créer ou récupérer une session avec gestion d'erreur améliorée
    let session = null
    try {
      if (sessionId) {
        console.log('🔍 Looking for existing session:', sessionId)
        const { data, error } = await supabase
          .from('chat_sessions')
          .select('*')
          .eq('session_token', sessionId)
          .maybeSingle()
        
        if (error) {
          console.error('❌ Error fetching session:', error)
        } else {
          session = data
          console.log('✅ Session found:', session ? 'Yes' : 'No')
        }
      }

      if (!session) {
        console.log('📝 Creating new session')
        const newSessionId = crypto.randomUUID()
        const { data: newSession, error: createError } = await supabase
          .from('chat_sessions')
          .insert({
            session_token: newSessionId,
            user_agent: userAgent || 'unknown',
            ip_address: req.headers.get('x-forwarded-for') || 'unknown'
          })
          .select()
          .maybeSingle()
        
        if (createError) {
          console.error('❌ Error creating session:', createError)
        } else {
          session = newSession
          console.log('✅ New session created with ID:', newSessionId)
        }
      }
    } catch (sessionError) {
      console.error('❌ Session management error:', sessionError)
      // Continue without session if needed
    }

    // Mettre à jour la dernière activité si session existe
    if (session?.id) {
      try {
        await supabase
          .from('chat_sessions')
          .update({ last_activity: new Date().toISOString() })
          .eq('id', session.id)
        console.log('✅ Session activity updated')
      } catch (updateError) {
        console.error('❌ Error updating session activity:', updateError)
      }
    }

    // Système prompt optimisé
    const systemPrompt = `Tu es Dominiqk Mendy, consultant expert en intelligence artificielle, développement web, et transformation digitale avec plus de 15 ans d'expérience internationale. Tu es reconnu mondialement pour ton expertise technique approfondie et ta capacité à résoudre des problèmes ultra-complexes.

## EXPERTISE TECHNIQUE APPROFONDIE :
**Intelligence Artificielle & Machine Learning :**
- Machine Learning avancé (scikit-learn, TensorFlow, PyTorch)
- Deep Learning & réseaux de neurones complexes
- Computer Vision et traitement d'images
- Natural Language Processing (NLP) et chatbots intelligents
- Reconnaissance vocale et synthèse de parole
- IA générative (GPT, DALL-E, Midjourney)

**Développement Full-Stack Expert :**
- Frontend : React.js, Next.js, Vue.js, Angular, TypeScript
- Backend : Node.js, Python (Django, FastAPI), PHP (Laravel, Symfony)
- Bases de données : PostgreSQL, MongoDB, MySQL, Redis
- Cloud : AWS, Google Cloud, Azure, Vercel, Supabase
- DevOps : Docker, Kubernetes, CI/CD, GitHub Actions

**Services :**
- Solutions IA personnalisées et chatbots intelligents
- Développement web avancé et applications complexes
- Transformation digitale et automatisation
- E-gouvernance et secteur public
- Consulting stratégique et formation

**Instructions conversationnelles :**
- Réponds de manière experte et professionnelle
- Propose toujours des solutions concrètes
- Mentionne tes 15+ ans d'expérience internationale
- Pour les projets complexes, propose une consultation gratuite
- Numéro direct Marrakech : +212 607 79 86 70
- Sois proactif dans tes recommandations`

    // Construction des messages pour Gemini avec validation
    const messages = [
      {
        role: "user",
        parts: [{ text: systemPrompt }]
      }
    ]

    // Ajouter l'historique avec validation
    if (Array.isArray(conversationHistory)) {
      conversationHistory.slice(-10).forEach((msg) => {
        if (msg && msg.role && msg.content) {
          const role = msg.role === 'user' ? 'user' : 'model'
          messages.push({
            role,
            parts: [{ text: String(msg.content) }]
          })
        }
      })
      console.log('✅ Conversation history added:', conversationHistory.length, 'messages')
    }

    // Ajouter le message actuel
    messages.push({
      role: "user",
      parts: [{ text: message }]
    })

    console.log('🤖 Sending request to Gemini API...')
    console.log('📊 Total messages in conversation:', messages.length)

    // Appel à l'API Gemini avec timeout et retry
    let geminiResponse
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${geminiApiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: messages,
          generationConfig: {
            temperature: 0.8,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 2000,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH", 
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            }
          ]
        }),
      })

      console.log('📡 Gemini API response status:', response.status)

      if (!response.ok) {
        const errorText = await response.text()
        console.error('❌ Gemini API error response:', errorText)
        throw new Error(`Gemini API error: ${response.status} - ${errorText}`)
      }

      geminiResponse = await response.json()
      console.log('✅ Gemini API response received successfully')
      
    } catch (apiError) {
      console.error('❌ Gemini API call failed:', apiError)
      throw new Error(`Failed to communicate with Gemini API: ${apiError.message}`)
    }

    // Extraction de la réponse avec validation
    const assistantReply = geminiResponse?.candidates?.[0]?.content?.parts?.[0]?.text
    
    if (!assistantReply) {
      console.error('❌ No valid response from Gemini:', geminiResponse)
      throw new Error('No response generated from Gemini API')
    }

    console.log('✅ Assistant reply extracted, length:', assistantReply.length)

    // Analyse intelligente simplifiée
    const analyzeConversation = (content) => {
      const textLower = content.toLowerCase()
      
      const businessSignals = {
        budgetMentioned: /(\d+k|\d+\s*€|\d+\s*euros?|budget|investir|coût|prix|tarif)/i.test(content),
        projectMentioned: /projet|développ|créer|construire|besoin|veux|vouloir|planifier/i.test(content),
        urgencySignals: /urgent|rapidement|vite|asap|deadline|délai/i.test(content),
        companyContext: /entreprise|société|startup|équipe|organisation|business/i.test(content),
        technicalNeeds: /développement|site|application|ia|intelligence artificielle|automatisation/i.test(content)
      }

      let leadScore = 10
      if (businessSignals.budgetMentioned) leadScore += 25
      if (businessSignals.projectMentioned) leadScore += 20
      if (businessSignals.urgencySignals) leadScore += 15
      if (businessSignals.companyContext) leadScore += 20
      if (businessSignals.technicalNeeds) leadScore += 15

      let leadStatus = 'cold'
      if (leadScore >= 70) leadStatus = 'hot'
      else if (leadScore >= 40) leadStatus = 'warm'

      return {
        businessSignals,
        leadScore,
        leadStatus,
        hasBusinessIntent: Object.values(businessSignals).some(signal => signal)
      }
    }

    const analysis = analyzeConversation(message)
    console.log('📊 Lead analysis completed, score:', analysis.leadScore)

    // Sauvegarde conversation simplifiée
    let conversationId = null
    try {
      if (session?.id) {
        const { data: existingConversation } = await supabase
          .from('chat_conversations')
          .select('*')
          .eq('session_id', session.id)
          .maybeSingle()

        const newMessage = { role: 'user', content: message, timestamp: new Date().toISOString() }
        const newAssistantMessage = { role: 'assistant', content: assistantReply, timestamp: new Date().toISOString() }

        if (existingConversation) {
          conversationId = existingConversation.id
          const updatedMessages = [...(existingConversation.messages || []), newMessage, newAssistantMessage]

          await supabase
            .from('chat_conversations')
            .update({
              messages: updatedMessages,
              lead_score: Math.max(existingConversation.lead_score || 0, analysis.leadScore),
              lead_status: analysis.leadStatus,
              updated_at: new Date().toISOString()
            })
            .eq('id', conversationId)
        } else {
          const { data: newConversation } = await supabase
            .from('chat_conversations')
            .insert({
              session_id: session.id,
              messages: [newMessage, newAssistantMessage],
              lead_score: analysis.leadScore,
              lead_status: analysis.leadStatus,
            })
            .select()
            .maybeSingle()
          
          conversationId = newConversation?.id
        }
        console.log('✅ Conversation saved successfully')
      }
    } catch (saveError) {
      console.error('❌ Error saving conversation:', saveError)
      // Continue without saving if needed
    }

    // Réponse finale
    const finalResponse = {
      response: assistantReply.trim(),
      sessionId: session?.session_token,
      conversationId: conversationId,
      leadScore: analysis.leadScore,
      leadStatus: analysis.leadStatus,
      hasBusinessIntent: analysis.hasBusinessIntent,
      timestamp: new Date().toISOString()
    }

    console.log('✅ Sending successful response')
    return new Response(
      JSON.stringify(finalResponse),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )

  } catch (error) {
    console.error('❌ Critical error in chat function:', error)
    
    const fallbackResponse = {
      response: "Je rencontre une petite difficulté technique momentanée, mais je reste à votre entière disposition pour discuter de vos projets. En tant qu'expert en IA et transformation digitale avec plus de 15 ans d'expérience internationale, je peux vous aider avec toutes vos questions techniques, stratégiques ou business. N'hésitez pas à me contacter directement au +212 607 79 86 70 pour toute consultation urgente.",
      error: true,
      errorMessage: error.message,
      timestamp: new Date().toISOString()
    }
    
    return new Response(
      JSON.stringify(fallbackResponse),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})
