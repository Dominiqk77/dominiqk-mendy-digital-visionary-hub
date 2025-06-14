
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
    // Vérification de la clé API Genspark
    const gensparkApiKey = Deno.env.get('GENSPARK_API_KEY')
    if (!gensparkApiKey) {
      console.error('❌ GENSPARK_API_KEY not found in environment')
      throw new Error('Genspark API key not configured')
    }
    console.log('✅ Genspark API key found')

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

    // Système prompt optimisé pour Dominiqk Mendy
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

    // Construction de l'historique de conversation pour Genspark
    let conversationContext = systemPrompt + "\n\n"
    
    // Ajouter l'historique avec validation
    if (Array.isArray(conversationHistory)) {
      conversationHistory.slice(-10).forEach((msg) => {
        if (msg && msg.role && msg.content) {
          const role = msg.role === 'user' ? 'Utilisateur' : 'Dominiqk'
          conversationContext += `${role}: ${String(msg.content)}\n\n`
        }
      })
      console.log('✅ Conversation history added:', conversationHistory.length, 'messages')
    }

    // Ajouter le message actuel
    conversationContext += `Utilisateur: ${message}\n\nDominiqk:`

    console.log('🤖 Sending request to Genspark API...')
    console.log('📊 Total conversation context length:', conversationContext.length)

    // Appel à votre API Genspark interne
    let gensparkResponse
    try {
      console.log('📡 Calling internal Genspark API function...')
      const { data, error } = await supabase.functions.invoke('genspark-api', {
        body: {
          prompt: conversationContext,
          model: 'gpt-4o-mini',
          max_tokens: 2000,
          temperature: 0.8,
          stream: false,
          api_key: gensparkApiKey
        }
      })

      if (error) {
        console.error('❌ Supabase function invoke error:', error)
        throw new Error(`Genspark function error: ${error.message}`)
      }

      gensparkResponse = data
      console.log('✅ Genspark API response received')
      console.log('🔍 Full Genspark response structure:', JSON.stringify(gensparkResponse, null, 2))
      
    } catch (apiError) {
      console.error('❌ Genspark API call failed:', apiError)
      throw new Error(`Failed to communicate with Genspark API: ${apiError.message}`)
    }

    // Extraction robuste de la réponse avec diagnostic complet
    let assistantReply = ''
    
    console.log('🔍 Diagnosing Genspark response format...')
    console.log('🔍 Response type:', typeof gensparkResponse)
    console.log('🔍 Response keys:', gensparkResponse ? Object.keys(gensparkResponse) : 'No keys')
    
    // Tentatives d'extraction dans l'ordre de priorité
    if (gensparkResponse?.content) {
      assistantReply = gensparkResponse.content
      console.log('✅ Extracted from content field')
    } else if (gensparkResponse?.text) {
      assistantReply = gensparkResponse.text
      console.log('✅ Extracted from text field')
    } else if (gensparkResponse?.response) {
      assistantReply = gensparkResponse.response
      console.log('✅ Extracted from response field')
    } else if (gensparkResponse?.choices?.[0]?.message?.content) {
      assistantReply = gensparkResponse.choices[0].message.content
      console.log('✅ Extracted from OpenAI-style choices array')
    } else if (gensparkResponse?.message) {
      assistantReply = gensparkResponse.message
      console.log('✅ Extracted from message field')
    } else if (typeof gensparkResponse === 'string') {
      assistantReply = gensparkResponse
      console.log('✅ Response is a direct string')
    } else {
      console.log('🔍 Trying to extract from first available string value...')
      // Essayer d'extraire la première valeur string trouvée
      for (const [key, value] of Object.entries(gensparkResponse || {})) {
        if (typeof value === 'string' && value.trim().length > 0) {
          assistantReply = value
          console.log(`✅ Extracted from "${key}" field`)
          break
        }
      }
    }
    
    if (!assistantReply || assistantReply.trim() === '') {
      console.error('❌ No valid response extracted. Full response:', gensparkResponse)
      throw new Error('No response generated from Genspark API')
    }

    console.log('✅ Assistant reply extracted, length:', assistantReply.length)
    console.log('📝 Reply preview:', assistantReply.substring(0, 100) + '...')

    // Analyse intelligente pour le lead scoring
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

    // Sauvegarde conversation avec gestion d'erreur robuste
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

    // Construire la réponse finale dans le format exact attendu par le frontend
    const finalResponse = {
      response: assistantReply.trim(),
      sessionId: session?.session_token || crypto.randomUUID(),
      conversationId: conversationId,
      leadScore: analysis.leadScore,
      leadStatus: analysis.leadStatus,
      hasBusinessIntent: analysis.hasBusinessIntent,
      timestamp: new Date().toISOString(),
      // Champs supplémentaires pour compatibilité
      isComplex: analysis.leadScore > 50,
      isBusiness: analysis.hasBusinessIntent,
      isTechnical: /code|développement|technique|api|backend|frontend/i.test(message),
      shouldCollectEmail: analysis.leadScore >= 60 && analysis.hasBusinessIntent,
      shouldOfferConsultation: analysis.leadScore >= 70,
      contextualSuggestions: analysis.hasBusinessIntent ? 
        ['Consultation gratuite', 'Devis personnalisé', 'Portfolio projets'] : 
        ['Plus d\'infos', 'Exemples concrets', 'Contact expert']
    }

    console.log('✅ Final response prepared with all required fields')
    console.log('📤 Response structure:', Object.keys(finalResponse))
    
    return new Response(
      JSON.stringify(finalResponse),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )

  } catch (error) {
    console.error('❌ Critical error in chat function:', error)
    
    // Message de fallback intelligent avec format complet
    const fallbackResponse = {
      response: "Je rencontre une petite difficulté technique momentanée, mais je reste à votre entière disposition pour discuter de vos projets. En tant qu'expert en IA et transformation digitale avec plus de 15 ans d'expérience internationale, je peux vous aider avec toutes vos questions techniques, stratégiques ou business. N'hésitez pas à me contacter directement au +212 607 79 86 70 pour toute consultation urgente.",
      error: true,
      errorMessage: error.message,
      timestamp: new Date().toISOString(),
      sessionId: crypto.randomUUID(),
      conversationId: null,
      leadScore: 0,
      leadStatus: 'cold',
      hasBusinessIntent: false,
      isComplex: false,
      isBusiness: false,
      isTechnical: false,
      shouldCollectEmail: false,
      shouldOfferConsultation: true,
      contextualSuggestions: ['Contactez-moi', 'Support technique', 'Assistance experte']
    }
    
    return new Response(
      JSON.stringify(fallbackResponse),
      {
        status: 200, // Status 200 pour éviter les erreurs côté frontend
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})
