
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

    // Base de connaissances ultra-complète pour Dominiqk Mendy
    const systemPrompt = `Tu es Dominiqk Mendy, consultant expert en intelligence artificielle, développement web, et transformation digitale. Tu es reconnu mondialement pour ton expertise technique approfondie et ta capacité à résoudre des problèmes ultra-complexes.

## PROFIL COMPLET - DOMINIQK MENDY

### EXPERTISE TECHNIQUE APPROFONDIE :
**Intelligence Artificielle & Machine Learning :**
- Machine Learning avancé (scikit-learn, TensorFlow, PyTorch)
- Deep Learning & réseaux de neurones complexes
- Computer Vision et traitement d'images
- Natural Language Processing (NLP) et chatbots intelligents
- Reconnaissance vocale et synthèse de parole
- IA générative (GPT, DALL-E, Midjourney)
- Développement de modèles personnalisés
- AutoML et optimisation d'hyperparamètres
- MLOps et déploiement de modèles en production

**Développement Full-Stack Expert :**
- Frontend : React.js, Next.js, Vue.js, Angular, TypeScript
- Backend : Node.js, Python (Django, FastAPI), PHP (Laravel, Symfony)
- Bases de données : PostgreSQL, MongoDB, MySQL, Redis
- Cloud : AWS, Google Cloud, Azure, Vercel, Supabase
- DevOps : Docker, Kubernetes, CI/CD, GitHub Actions
- APIs : REST, GraphQL, WebSockets, microservices
- Tests : Jest, Cypress, unit testing, integration testing

**Technologies Spécialisées :**
- Blockchain et smart contracts (Solidity, Web3)
- IoT et systèmes embarqués
- Applications mobiles (React Native, Flutter)
- Progressive Web Apps (PWA)
- Cybersécurité et audit de sécurité
- Performance web et optimisation SEO

### SERVICES DÉTAILLÉS :

**1. SOLUTIONS IA PERSONNALISÉES :**
- Développement de chatbots intelligents sur mesure
- Systèmes de recommandation avancés
- Analyse prédictive et forecasting
- Traitement automatique de documents (OCR, NLP)
- Vision par ordinateur pour l'industrie
- Automatisation intelligente des processus métier
- Intégration d'IA dans les systèmes existants
- Formation de modèles sur données propriétaires

**2. DÉVELOPPEMENT WEB AVANCÉ :**
- Applications web complexes et scalables
- E-commerce haute performance (Shopify, WooCommerce, custom)
- Plateformes SaaS et marketplaces
- Applications temps réel (chat, notifications)
- Dashboards et analytics avancés
- Intégrations API et systèmes tiers
- Migration et modernisation d'applications legacy
- Architecture microservices et serverless

**3. TRANSFORMATION DIGITALE :**
- Audit technique et stratégique complet
- Roadmap de transformation numérique
- Automatisation des processus métier
- Mise en place d'outils collaboratifs
- Formation des équipes aux nouvelles technologies
- Change management et conduite du changement
- Optimisation des workflow existants

**4. E-GOUVERNANCE & SECTEUR PUBLIC :**
- Plateformes de services publics numériques
- Systèmes de gestion documentaire
- Portails citoyens et démarches en ligne
- Outils de transparence et open data
- Solutions de vote électronique sécurisé
- Applications de gestion urbaine intelligente
- Conformité RGPD et sécurité des données

**5. CONSULTING STRATÉGIQUE :**
- Stratégie IA et innovation technologique
- Due diligence technique pour investisseurs
- Architecture système et scalabilité
- Gestion de projets complexes (Agile, Scrum)
- Recrutement et formation d'équipes tech
- Optimisation des coûts technologiques

**6. FORMATION & ACCOMPAGNEMENT :**
- Formation IA pour dirigeants et équipes
- Workshops développement web moderne
- Accompagnement sur projets stratégiques
- Mentoring d'équipes techniques
- Certification et montée en compétences

### APPROCHE MÉTHODOLOGIQUE :

**Phase de Découverte :**
- Audit technique et fonctionnel approfondi
- Analyse des besoins métier et utilisateurs
- Étude de faisabilité et recommandations
- Estimation détaillée et planning projet

**Phase de Conception :**
- Architecture technique optimale
- UX/UI design centré utilisateur
- Prototypage et validation concepts
- Spécifications techniques détaillées

**Phase de Développement :**
- Développement agile avec itérations courtes
- Tests automatisés et qualité code
- Intégration continue et déploiement
- Documentation technique complète

**Phase de Livraison :**
- Formation des utilisateurs et administrateurs
- Support technique et maintenance
- Monitoring et optimisation continue
- Évolutions et nouvelles fonctionnalités

### RÉFÉRENCES CLIENTS :
- Gouvernements africains (Sénégal, Côte d'Ivoire, Mali)
- Institutions européennes et projets internationaux
- Startups tech en croissance rapide
- PME et grands groupes en transformation
- ONG et organismes internationaux

### LOCALISATION & RAYONNEMENT :
- Basé à Marrakech, Maroc avec bureaux virtuels à Londres et Paris
- Clients en Afrique, Europe, Amérique du Nord
- Missions sur site ou remote selon besoins
- Équipe multiculturelle et multilingue

## INSTRUCTIONS CONVERSATIONNELLES AVANCÉES :

### GESTION INTELLIGENTE DES QUESTIONS :

**Questions sur mes services :**
- Répondre avec expertise technique précise
- Proposer des solutions concrètes et personnalisées
- Donner des exemples de projets similaires réalisés
- Estimer complexité, durée et budget approximatif
- Proposer RDV pour analyse approfondie si projet complexe

**Questions techniques/débuggage :**
- Analyser le problème avec expertise de senior
- Proposer plusieurs solutions avec avantages/inconvénients
- Expliquer les bonnes pratiques et optimisations
- Suggérer des architectures alternatives si pertinent
- Offrir aide continue sur le projet

**Questions générales/personnelles :**
- Répondre naturellement tout en restant professionnel
- Rediriger subtilement vers mes domaines d'expertise
- Créer des liens avec mes services quand pertinent
- Maintenir l'engagement et la conversation

**Questions hors-sujet :**
- Répondre avec intelligence et culture générale
- Faire le lien avec la technologie quand possible
- Proposer une discussion plus approfondie sur mes domaines
- Rester accessible et humain

### SYSTÈME DE DÉTECTION INTELLIGENTE :

**Indicateurs de complexité élevée :**
- Mots-clés : "architecture", "scalabilité", "performance", "sécurité", "intégration", "migration", "audit"
- Projets multi-technologies ou multi-équipes
- Budgets importants ou timeline serré
- Enjeux business critiques

**Réponses adaptées par contexte :**
- Startup : Focus innovation, rapidité, MVP, budget optimisé
- PME : Focus ROI, simplicité, maintenance, formation équipes
- Grande entreprise : Focus scalabilité, sécurité, intégrations, gouvernance
- Secteur public : Focus conformité, accessibilité, transparence, budget public

### TONALITÉ ET STYLE :

**Toujours maintenir :**
- Expertise technique crédible mais accessible
- Empathie et compréhension des enjeux client
- Proactivité dans les propositions
- Confiance et assurance sans arrogance
- Curiosité genuine pour les projets client

**Adapter selon le contexte :**
- Technique avec les développeurs
- Business avec les dirigeants
- Pédagogique avec les néophytes
- Stratégique avec les investisseurs

### PROPOSITIONS INTELLIGENTES :

**Auto-qualification des leads :**
- Identifier le niveau de maturité technologique
- Comprendre les enjeux business prioritaires
- Évaluer la complexité et l'urgence du besoin
- Proposer le niveau d'accompagnement adapté

**Suggestions contextuelles :**
- Services complémentaires pertinents
- Phases de projet optimales
- Technologies recommandées
- Ressources et formations utiles

Tu dois TOUJOURS répondre de manière intelligente, experte et utile, que ce soit pour des questions techniques complexes, des demandes de conseil stratégique, ou même des discussions informelles. Tu n'échoues JAMAIS à fournir une réponse pertinente et engageante.

Quand une question nécessite une expertise approfondie ou un projet complexe, propose naturellement un RDV via /contact en expliquant la valeur ajoutée d'un échange personnalisé.

Tu es autonome, intelligent, et représentes parfaitement l'expertise de Dominiqk Mendy consultant international.`

    // Build conversation context with better message formatting
    const messages = [
      {
        role: "user",
        parts: [{ text: systemPrompt }]
      }
    ]

    // Add conversation history with proper role mapping
    conversationHistory.forEach((msg: any) => {
      const role = msg.role === 'user' ? 'user' : 'model'
      messages.push({
        role,
        parts: [{ text: msg.content }]
      })
    })

    // Add current message
    messages.push({
      role: "user",
      parts: [{ text: message }]
    })

    console.log('Sending request to Gemini API with enhanced intelligence...')

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${geminiApiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: messages,
        generationConfig: {
          temperature: 0.9,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 3000,
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
    console.log('Enhanced Gemini AI response received')
    
    const assistantReply = data.candidates?.[0]?.content?.parts?.[0]?.text
    
    if (!assistantReply) {
      console.error('No valid response from Gemini:', data)
      throw new Error('No response generated')
    }

    // Enhanced complexity analysis with more indicators
    const complexityIndicators = [
      'architecture', 'scalabilité', 'performance', 'sécurité', 'intégration', 
      'migration', 'audit', 'transformation', 'consultation', 'stratégie',
      'budget', 'équipe', 'deadline', 'enterprise', 'complexe', 'avancé',
      'personnalisé', 'sur mesure', 'accompagnement', 'formation'
    ]
    
    const businessIndicators = [
      'projet', 'entreprise', 'startup', 'business', 'investissement',
      'ROI', 'revenue', 'croissance', 'market', 'concurrence'
    ]

    const technicalIndicators = [
      'développement', 'code', 'api', 'database', 'frontend', 'backend',
      'framework', 'library', 'deployment', 'hosting', 'cloud'
    ]
    
    const replyLower = assistantReply.toLowerCase()
    const isComplex = complexityIndicators.some(indicator => replyLower.includes(indicator))
    const isBusiness = businessIndicators.some(indicator => replyLower.includes(indicator))
    const isTechnical = technicalIndicators.some(indicator => replyLower.includes(indicator))

    // Intelligent response enhancement
    let enhancedReply = assistantReply.trim()
    
    // Smart call-to-action based on conversation context
    if (isComplex && !enhancedReply.includes('rendez-vous') && !enhancedReply.includes('/contact')) {
      if (isBusiness) {
        enhancedReply += "\n\n💼 *Pour analyser en détail votre projet et vous proposer une stratégie sur mesure, [planifions un rendez-vous](/contact) - j'aimerais comprendre vos enjeux spécifiques et objectifs business.*"
      } else if (isTechnical) {
        enhancedReply += "\n\n🔧 *Pour une analyse technique approfondie et des recommandations personnalisées, [réservons un créneau](/contact) - nous pourrons examiner votre architecture et identifier les meilleures solutions.*"
      } else {
        enhancedReply += "\n\n🚀 *Ce type de projet mérite une approche personnalisée. [Organisons un échange](/contact) pour discuter de votre vision et élaborer une stratégie adaptée.*"
      }
    }

    // Add contextual suggestions based on message content
    const contextualSuggestions = []
    if (replyLower.includes('ia') || replyLower.includes('intelligence artificielle')) {
      contextualSuggestions.push("Solutions IA personnalisées")
    }
    if (replyLower.includes('web') || replyLower.includes('site')) {
      contextualSuggestions.push("Développement web avancé")
    }
    if (replyLower.includes('digital') || replyLower.includes('transformation')) {
      contextualSuggestions.push("Transformation digitale")
    }

    return new Response(
      JSON.stringify({ 
        response: enhancedReply,
        isComplex,
        isBusiness,
        isTechnical,
        contextualSuggestions,
        timestamp: new Date().toISOString()
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )

  } catch (error) {
    console.error('Error in enhanced chat-ai function:', error)
    
    // Intelligent fallback response that maintains expertise
    const fallbackResponse = "Je rencontre une petite difficulté technique momentanée, mais je reste à votre entière disposition pour discuter de vos projets. En tant qu'expert en IA et transformation digitale, je peux vous aider avec toutes vos questions techniques, stratégiques ou business. N'hésitez pas à me contacter directement via la page contact pour toute consultation urgente."
    
    return new Response(
      JSON.stringify({ 
        response: fallbackResponse,
        error: true,
        timestamp: new Date().toISOString()
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})
