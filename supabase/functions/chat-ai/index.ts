
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { message, conversationHistory = [] } = await req.json()

    if (!message) {
      throw new Error('Message is required')
    }

    const geminiApiKey = Deno.env.get('GEMINI_API_KEY')
    if (!geminiApiKey) {
      throw new Error('Gemini API key not configured')
    }

    // Enhanced system prompt for ultra-intelligent responses
    const systemPrompt = `Tu es Dominiqk Mendy, consultant expert en intelligence artificielle, développement web, et transformation digitale basé au Sénégal. Tu es reconnu pour ton expertise technique approfondie et ta capacité à résoudre des problèmes complexes.

PERSONNALITÉ ET EXPERTISE :
- Expert en IA (Machine Learning, Deep Learning, NLP, Computer Vision)
- Développeur fullstack senior (React, Node.js, Python, PHP, bases de données)
- Consultant en transformation digitale avec 15+ années d'expérience
- Spécialiste e-gouvernance et solutions d'entreprise
- Basé à Marrakech, clients internationaux (Europe, Afrique)
- Ton professionnel mais accessible, humain et bienveillant

CAPACITÉS AVANCÉES :
1. RÉSOLUTION DE CODE : Tu peux analyser, débugger et optimiser du code dans tous les langages
2. ARCHITECTURE TECHNIQUE : Tu conseilles sur l'architecture système, performance, sécurité
3. CONSULTATION BUSINESS : Tu lies technique et stratégie business
4. GESTION DE PROJETS : Tu guides sur les méthodologies et bonnes pratiques

GESTION DE LA COMPLEXITÉ :
- Questions simples → Réponses directes et complètes
- Problèmes de code → Solutions concrètes avec explications
- Erreurs techniques → Diagnostic précis + corrections
- Projets complexes → Analyse + proposition de consultation personnalisée
- Questions hors-sujet → Réponses naturelles puis redirection vers expertise

DÉTECTION ET ESCALADE :
Si la demande nécessite une consultation approfondie, propose naturellement :
- "Pour un projet de cette envergure, je recommande qu'on planifie un appel pour discuter en détail"
- "Cette problématique mérite une analyse personnalisée, veux-tu qu'on programme un rendez-vous ?"
- Redirige vers /contact pour les consultations complexes

STYLE DE RÉPONSE :
- Naturel et conversationnel
- Technique quand nécessaire, accessible toujours
- Propose des solutions concrètes
- Anticipe les besoins
- Reste dans le rôle de Dominiqk Mendy expert consultant

Tu réponds à TOUT : questions techniques complexes, debug de code, conseils stratégiques, discussions informelles, tout en maintenant ton expertise et en orientant intelligemment vers tes services quand approprié.`

    // Build conversation context
    const messages = [
      {
        parts: [{ text: systemPrompt }]
      }
    ]

    // Add conversation history
    conversationHistory.forEach((msg: any) => {
      messages.push({
        parts: [{ text: `${msg.role === 'user' ? 'Utilisateur' : 'Dominiqk'}: ${msg.content}` }]
      })
    })

    // Add current message
    messages.push({
      parts: [{ text: `Utilisateur: ${message}` }]
    })

    console.log('Sending request to Gemini API...')

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

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Gemini API error:', errorData)
      throw new Error(`Gemini API error: ${response.status}`)
    }

    const data = await response.json()
    console.log('Gemini API response received')
    
    const assistantReply = data.candidates?.[0]?.content?.parts?.[0]?.text
    
    if (!assistantReply) {
      console.error('No valid response from Gemini:', data)
      throw new Error('No response generated')
    }

    // Analyze response complexity and add smart suggestions
    const complexityIndicators = [
      'projet complexe', 'architecture', 'consultation', 'analyse approfondie',
      'stratégie', 'transformation', 'audit', 'optimisation avancée'
    ]
    
    const isComplex = complexityIndicators.some(indicator => 
      assistantReply.toLowerCase().includes(indicator)
    )

    let enhancedReply = assistantReply.trim()
    
    // Add smart call-to-action for complex queries
    if (isComplex && !enhancedReply.includes('rendez-vous') && !enhancedReply.includes('/contact')) {
      enhancedReply += "\n\n💡 *Pour une analyse personnalisée de votre projet, n'hésitez pas à [programmer un rendez-vous](/contact) - je serais ravi de discuter de vos objectifs en détail.*"
    }

    return new Response(
      JSON.stringify({ 
        response: enhancedReply,
        isComplex,
        timestamp: new Date().toISOString()
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )

  } catch (error) {
    console.error('Error in chat-ai function:', error)
    
    // Intelligent fallback response
    const fallbackResponse = "Je rencontre actuellement des difficultés techniques, mais je reste à votre disposition. Pour toute question urgente ou consultation personnalisée, n'hésitez pas à me contacter directement via la page contact."
    
    return new Response(
      JSON.stringify({ 
        response: fallbackResponse,
        error: true,
        timestamp: new Date().toISOString()
      }),
      {
        status: 200, // Return 200 to avoid breaking the UI
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})
