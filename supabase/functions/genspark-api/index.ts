
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Interface pour la requête entrante
interface ChatRequest {
  prompt: string
  sessionId?: string
  conversationId?: string
  userContext?: any
  apiKey: string  // API key dans le body au lieu du header
}

// Interface pour la réponse formatée
interface ChatResponse {
  response: string
  sessionId: string
  conversationId: string
  leadScore: number
  leadStatus: "hot" | "warm" | "cold"
  hasBusinessIntent: boolean
  timestamp: string
  isComplex: boolean
  isBusiness: boolean
  isTechnical: boolean
  shouldCollectEmail: boolean
  shouldOfferConsultation: boolean
  contextualSuggestions: string[]
}

// Fonction pour analyser le contenu et calculer les métriques
function analyzePrompt(prompt: string, response: string): Partial<ChatResponse> {
  const businessKeywords = ['business', 'entreprise', 'consulting', 'stratégie', 'ROI', 'revenus', 'vente', 'client', 'projet', 'budget', 'investissement']
  const technicalKeywords = ['IA', 'intelligence artificielle', 'développement', 'web', 'API', 'database', 'cloud', 'automatisation', 'ML', 'machine learning']
  const complexKeywords = ['architecture', 'infrastructure', 'scalabilité', 'sécurité', 'performance', 'optimisation', 'intégration']
  
  const promptLower = prompt.toLowerCase()
  const responseLower = response.toLowerCase()
  const combinedText = promptLower + ' ' + responseLower
  
  const businessScore = businessKeywords.filter(keyword => combinedText.includes(keyword)).length
  const technicalScore = technicalKeywords.filter(keyword => combinedText.includes(keyword)).length
  const complexScore = complexKeywords.filter(keyword => combinedText.includes(keyword)).length
  
  const isBusiness = businessScore >= 2
  const isTechnical = technicalScore >= 2
  const isComplex = complexScore >= 1 || prompt.length > 200
  
  // Calcul du lead score (0-100)
  let leadScore = 10 // Score de base
  leadScore += businessScore * 10
  leadScore += technicalScore * 8
  leadScore += complexScore * 5
  leadScore += Math.min(prompt.length / 10, 20) // Longueur du prompt
  
  leadScore = Math.min(leadScore, 100)
  
  // Détermination du statut de lead
  let leadStatus: "hot" | "warm" | "cold" = "cold"
  if (leadScore >= 70) leadStatus = "hot"
  else if (leadScore >= 40) leadStatus = "warm"
  
  const hasBusinessIntent = isBusiness || businessScore > 0
  const shouldCollectEmail = leadScore >= 50 || hasBusinessIntent
  const shouldOfferConsultation = leadScore >= 60 || (isBusiness && isTechnical)
  
  return {
    leadScore,
    leadStatus,
    hasBusinessIntent,
    isComplex,
    isBusiness,
    isTechnical,
    shouldCollectEmail,
    shouldOfferConsultation
  }
}

// Fonction pour générer des suggestions contextuelles
function generateSuggestions(prompt: string, analysis: Partial<ChatResponse>): string[] {
  const suggestions: string[] = []
  
  if (analysis.isBusiness) {
    suggestions.push("Découvrez mes services de transformation digitale")
    suggestions.push("Planifiez une consultation stratégique gratuite")
  }
  
  if (analysis.isTechnical) {
    suggestions.push("Explorez mes solutions IA personnalisées")
    suggestions.push("Consultez mes projets de développement web")
  }
  
  if (analysis.shouldOfferConsultation) {
    suggestions.push("Réservez un appel découverte (+212 607 79 86 70)")
    suggestions.push("Téléchargez mon guide IA Business Mastery")
  }
  
  if (analysis.isComplex) {
    suggestions.push("Analysons votre cas d'usage spécifique")
    suggestions.push("Étudions l'architecture optimale pour votre projet")
  }
  
  // Suggestions par défaut si aucune spécifique
  if (suggestions.length === 0) {
    suggestions.push("En savoir plus sur mon expertise")
    suggestions.push("Découvrir mes réalisations")
  }
  
  return suggestions.slice(0, 3) // Maximum 3 suggestions
}

// Prompt système pour Genspark
const SYSTEM_PROMPT = `Tu es Dominiqk Mendy, consultant expert en intelligence artificielle, développement web, et transformation digitale avec plus de 15 ans d'expérience internationale. Tu es reconnu mondialement pour ton expertise technique approfondie et ta capacité à résoudre des problèmes ultra-complexes.

EXPERTISE TECHNIQUE APPROFONDIE :

Intelligence Artificielle & Machine Learning :
- Machine Learning avancé (scikit-learn, TensorFlow, PyTorch)
- Deep Learning & réseaux de neurones complexes
- Computer Vision et traitement d'images
- Natural Language Processing (NLP) et chatbots intelligents
- Reconnaissance vocale et synthèse de parole
- IA générative (GPT, DALL-E, Midjourney)

Développement Full-Stack Expert :
- Frontend : React.js, Next.js, Vue.js, Angular, TypeScript
- Backend : Node.js, Python (Django, FastAPI), PHP (Laravel, Symfony)
- Bases de données : PostgreSQL, MongoDB, MySQL, Redis
- Cloud : AWS, Google Cloud, Azure, Vercel, Supabase
- DevOps : Docker, Kubernetes, CI/CD, GitHub Actions

Services :
- Solutions IA personnalisées et chatbots intelligents
- Développement web avancé et applications complexes
- Transformation digitale et automatisation
- E-gouvernance et secteur public
- Consulting stratégique et formation

Instructions conversationnelles :
- Réponds de manière experte et professionnelle
- Propose toujours des solutions concrètes
- Mentionne tes 15+ ans d'expérience internationale
- Pour les projets complexes, propose une consultation gratuite
- Numéro direct Marrakech : +212 607 79 86 70
- Sois proactif dans tes recommandations`

serve(async (req) => {
  // Configuration CORS
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-genspark-api-key',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  }

  // Gestion des requêtes OPTIONS (preflight)
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Vérification de la méthode
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { 
          status: 405, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Parsing du body
    let requestBody: ChatRequest
    try {
      requestBody = await req.json()
    } catch (error) {
      console.error('Erreur parsing JSON:', error)
      return new Response(
        JSON.stringify({ error: 'Invalid JSON body' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Validation des paramètres requis
    if (!requestBody.prompt || !requestBody.apiKey) {
      return new Response(
        JSON.stringify({ error: 'Missing required parameters: prompt and apiKey' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Génération des IDs si non fournis
    const sessionId = requestBody.sessionId || crypto.randomUUID()
    const conversationId = requestBody.conversationId || crypto.randomUUID()

    console.log('Appel API Genspark avec prompt:', requestBody.prompt.substring(0, 100) + '...')

    // Appel à l'API Genspark
    const gensparkResponse = await fetch('https://api.genspark.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${requestBody.apiKey}`,
        'User-Agent': 'Dominiqk-Chatbot/1.0'
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: SYSTEM_PROMPT
          },
          {
            role: 'user',
            content: requestBody.prompt
          }
        ],
        max_tokens: 2000,
        temperature: 0.8,
        stream: false
      })
    })

    console.log('Statut réponse Genspark:', gensparkResponse.status)

    let aiResponse: string
    
    if (!gensparkResponse.ok) {
      console.error('Erreur API Genspark:', gensparkResponse.status, await gensparkResponse.text())
      
      // Fallback en cas d'erreur API
      aiResponse = `Bonjour ! Je suis Dominiqk Mendy, expert en IA et transformation digitale avec 15+ ans d'expérience internationale. 

Je vous aide à résoudre vos défis technologiques et business. Actuellement, je rencontre un petit problème technique pour traiter votre demande, mais je peux vous assister directement.

Pour une réponse immédiate et personnalisée, contactez-moi au +212 607 79 86 70 ou visitez dominiqkmendy.com.

Comment puis-je vous accompagner dans votre projet ?`
    } else {
      const gensparkData = await gensparkResponse.json()
      aiResponse = gensparkData.choices?.[0]?.message?.content || 'Désolé, je ne peux pas traiter votre demande actuellement.'
    }

    console.log('Réponse IA générée:', aiResponse.substring(0, 100) + '...')

    // Analyse du prompt et de la réponse
    const analysis = analyzePrompt(requestBody.prompt, aiResponse)
    
    // Génération des suggestions contextuelles
    const contextualSuggestions = generateSuggestions(requestBody.prompt, analysis)

    // Construction de la réponse finale au format exact requis
    const finalResponse: ChatResponse = {
      response: aiResponse,
      sessionId,
      conversationId,
      leadScore: analysis.leadScore || 10,
      leadStatus: analysis.leadStatus || "cold",
      hasBusinessIntent: analysis.hasBusinessIntent || false,
      timestamp: new Date().toISOString(),
      isComplex: analysis.isComplex || false,
      isBusiness: analysis.isBusiness || false,
      isTechnical: analysis.isTechnical || false,
      shouldCollectEmail: analysis.shouldCollectEmail || false,
      shouldOfferConsultation: analysis.shouldOfferConsultation || false,
      contextualSuggestions
    }

    console.log('Réponse finale générée avec leadScore:', finalResponse.leadScore)

    return new Response(
      JSON.stringify(finalResponse),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Erreur générale dans genspark-api:', error)
    
    // Réponse d'erreur avec format cohérent
    const errorResponse: ChatResponse = {
      response: `Bonjour ! Je suis Dominiqk Mendy, expert en IA et transformation digitale. 

Je rencontre actuellement un problème technique temporaire, mais je suis disponible pour vous aider directement.

Contactez-moi au +212 607 79 86 70 ou via dominiqkmendy.com pour une assistance immédiate et personnalisée.

Avec 15+ ans d'expérience internationale, je peux vous accompagner sur tous vos projets IA et digitaux.`,
      sessionId: crypto.randomUUID(),
      conversationId: crypto.randomUUID(),
      leadScore: 25,
      leadStatus: "warm",
      hasBusinessIntent: true,
      timestamp: new Date().toISOString(),
      isComplex: false,
      isBusiness: true,
      isTechnical: false,
      shouldCollectEmail: true,
      shouldOfferConsultation: true,
      contextualSuggestions: [
        "Contactez-moi directement au +212 607 79 86 70",
        "Visitez dominiqkmendy.com",
        "Planifiez une consultation gratuite"
      ]
    }

    return new Response(
      JSON.stringify(errorResponse),
      { 
        status: 200, // Retour 200 car on fournit une réponse valide même en cas d'erreur
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
