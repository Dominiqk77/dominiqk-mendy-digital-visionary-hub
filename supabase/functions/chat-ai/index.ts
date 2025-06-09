
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
    const { message, conversationHistory = [], sessionId, userAgent } = await req.json()

    if (!message) {
      throw new Error('Message is required')
    }

    const geminiApiKey = Deno.env.get('GEMINI_API_KEY')
    if (!geminiApiKey) {
      throw new Error('Gemini API key not configured')
    }

    // Créer ou récupérer une session
    let session = null
    if (sessionId) {
      const { data } = await supabase
        .from('chat_sessions')
        .select('*')
        .eq('session_token', sessionId)
        .single()
      session = data
    }

    if (!session) {
      const newSessionId = crypto.randomUUID()
      const { data: newSession } = await supabase
        .from('chat_sessions')
        .insert({
          session_token: newSessionId,
          user_agent: userAgent,
          ip_address: req.headers.get('x-forwarded-for') || 'unknown'
        })
        .select()
        .single()
      session = newSession
    }

    // Mettre à jour la dernière activité
    await supabase
      .from('chat_sessions')
      .update({ last_activity: new Date().toISOString() })
      .eq('id', session.id)

    // Système prompt ultra-intelligent avec négociation et collecte de leads
    const systemPrompt = `Tu es Dominiqk Mendy, consultant expert en intelligence artificielle, développement web, et transformation digitale avec plus de 15 ans d'expérience internationale. Tu es reconnu mondialement pour ton expertise technique approfondie et ta capacité à résoudre des problèmes ultra-complexes.

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

### SYSTÈME DE GÉNÉRATION DE LEADS INTELLIGENT :

**COLLECTE NATURELLE DES COORDONNÉES :**
- Demander naturellement l'email en expliquant : "Pour vous envoyer un résumé détaillé de nos échanges et des recommandations personnalisées"
- Proposer de recevoir des ressources exclusives : guides, templates, études de cas
- Mentionner l'envoi d'un devis détaillé ou d'une proposition technique
- Utiliser des formulations comme : "Puis-je avoir votre email pour vous faire parvenir...?"

**DÉTECTION ET SCORING DES PROSPECTS :**
- Analyser les signaux d'achat : budget mentionné, urgence, autorité décisionnelle
- Identifier les mots-clés business : "budget", "équipe", "deadline", "projet", "entreprise"
- Scorer selon la complexité : simple (10-20pts), medium (20-40pts), complex (40-70pts), enterprise (70-100pts)
- Détecter les objections pour les gérer intelligemment

**STRATÉGIES DE NÉGOCIATION AVANCÉES :**
- Ancrage de prix : commencer par mentionner des projets premium pour contextualiser
- Valeur perçue : expliquer le ROI et les bénéfices business concrets
- Urgence artificielle : mentionner les créneaux limités pour le consulting gratuit
- Social proof : partager des success stories similaires
- Techniques de closing : alternatives fermées, assumptive close

**OFFRES INTELLIGENTES ADAPTÉES :**
- **Starter (5K-15K€)** : Sites vitrine, applications simples, automatisations basiques
- **Professional (15K-50K€)** : Plateformes métier, intégrations API, IA basique
- **Enterprise (50K-150K€)** : Systèmes complexes, IA avancée, transformations complètes
- **Strategic (150K+)** : Programmes multi-projets, accompagnement long terme

**CONSULTATION GRATUITE STRATÉGIQUE :**
- Proposer systématiquement : "consultation technique gratuite de 30 minutes"
- Mentionner la valeur : "audit personnalisé de vos besoins et recommandations"
- Donner le numéro direct Marrakech : "+212 607 79 86 70"
- Créer de l'urgence : "créneaux limités cette semaine"

### INSTRUCTIONS CONVERSATIONNELLES ULTRA-AVANCÉES :

**PHASES DE CONVERSATION INTELLIGENTE :**

1. **Phase Découverte (0-3 messages) :**
   - Identifier rapidement le profil : startup, PME, grand groupe
   - Comprendre le contexte business et technique
   - Détecter le niveau de maturité technologique

2. **Phase Qualification (3-7 messages) :**
   - Creuser les besoins spécifiques et les enjeux
   - Identifier le budget approximatif et l'urgence
   - Comprendre les contraintes et objectifs business

3. **Phase Proposition (7-10 messages) :**
   - Proposer des solutions concrètes et personnalisées
   - Ancrer la valeur et le ROI potentiel
   - Introduire la consultation gratuite naturellement

4. **Phase Closing (10+ messages) :**
   - Gérer les objections avec expertise
   - Proposer des alternatives et packages adaptés
   - Orienter vers l'appel ou consultation

**GESTION INTELLIGENTE DES OBJECTIONS :**
- **Budget** : "Commençons par optimiser votre existant pour générer du ROI avant d'investir plus"
- **Timing** : "Une consultation rapide peut vous faire gagner des mois de développement"
- **Confiance** : Partager des références clients et garanties
- **Complexité** : "C'est exactement mon domaine d'expertise depuis 15 ans"

**DÉCLENCHEURS DE LEAD CHAUD :**
- Mention d'un budget spécifique
- Demande de devis ou proposition
- Questions sur délais de livraison
- Évocation d'une équipe ou d'une entreprise
- Urgence exprimée ("rapidement", "urgent", "asap")

**TECHNIQUES DE COLLECTE EMAIL AVANCÉES :**
- "Pour vous envoyer une étude de cas similaire à votre projet..."
- "Je vais vous préparer un audit technique personnalisé à recevoir par email..."
- "Puis-je vous faire parvenir une proposition détaillée avec tarifs préférentiels ?"
- "Votre email pour recevoir mon guide exclusif de transformation digitale ?"

Tu dois TOUJOURS :
- Détecter et scorer les opportunités commerciales
- Collecter naturellement les coordonnées
- Proposer la consultation gratuite de manière intelligente
- Négocier avec finesse et professionnalisme
- Orienter vers l'appel Marrakech pour les prospects qualifiés
- Être autonome dans la gestion commerciale tout en restant expert technique

Adapte ton approche selon le profil détecté et sois proactif dans la génération de leads qualifiés.`

    // Construction des messages pour Gemini
    const messages = [
      {
        role: "user",
        parts: [{ text: systemPrompt }]
      }
    ]

    // Ajouter l'historique de conversation
    conversationHistory.forEach((msg: any) => {
      const role = msg.role === 'user' ? 'user' : 'model'
      messages.push({
        role,
        parts: [{ text: msg.content }]
      })
    })

    // Ajouter le message actuel
    messages.push({
      role: "user",
      parts: [{ text: message }]
    })

    console.log('Sending request to Gemini API with lead generation intelligence...')

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

    // Analyse intelligente du contenu pour génération de leads
    const analyzeConversation = (content: string, conversationHistory: any[]) => {
      const textLower = content.toLowerCase()
      
      // Détection des signaux d'affaires
      const businessSignals = {
        budgetMentioned: /(\d+k|\d+\s*€|\d+\s*euros?|budget|investir|coût|prix|tarif)/i.test(content),
        projectMentioned: /projet|développ|créer|construire|besoin|veux|vouloir|planifier/i.test(content),
        urgencySignals: /urgent|rapidement|vite|asap|deadline|délai/i.test(content),
        companyContext: /entreprise|société|startup|équipe|organisation|business/i.test(content),
        decisionMaker: /décision|budget|investissement|responsable|directeur|ceo|cto/i.test(content),
        technicalNeeds: /développement|site|application|ia|intelligence artificielle|automatisation/i.test(content)
      }

      // Détection des coordonnées dans les messages
      const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g
      const phonePattern = /(\+\d{1,3}[-.\s]?)?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g
      
      const extractedEmails = content.match(emailPattern) || []
      const extractedPhones = content.match(phonePattern) || []

      // Scoring du lead
      let leadScore = 0
      if (businessSignals.budgetMentioned) leadScore += 25
      if (businessSignals.projectMentioned) leadScore += 20
      if (businessSignals.urgencySignals) leadScore += 15
      if (businessSignals.companyContext) leadScore += 20
      if (businessSignals.decisionMaker) leadScore += 30
      if (businessSignals.technicalNeeds) leadScore += 15
      if (extractedEmails.length > 0) leadScore += 25
      if (extractedPhones.length > 0) leadScore += 20
      if (conversationHistory.length > 5) leadScore += 10

      // Détermination du statut du lead
      let leadStatus = 'cold'
      if (leadScore >= 70) leadStatus = 'hot'
      else if (leadScore >= 40) leadStatus = 'warm'

      // Détection de la complexité du projet
      let projectComplexity = 'unknown'
      if (/enterprise|complexe|système|architecture|scalabilité/i.test(content)) projectComplexity = 'enterprise'
      else if (/plateforme|intégration|api|base de données/i.test(content)) projectComplexity = 'complex'
      else if (/application|dashboard|automatisation/i.test(content)) projectComplexity = 'medium'
      else if (/site|page|simple/i.test(content)) projectComplexity = 'simple'

      return {
        businessSignals,
        extractedEmails,
        extractedPhones,
        leadScore,
        leadStatus,
        projectComplexity,
        hasBusinessIntent: Object.values(businessSignals).some(signal => signal)
      }
    }

    const analysis = analyzeConversation(message, conversationHistory)

    // Gestion intelligente des conversations et leads
    let conversationId = null

    // Récupérer ou créer une conversation
    const { data: existingConversation } = await supabase
      .from('chat_conversations')
      .select('*')
      .eq('session_id', session.id)
      .single()

    if (existingConversation) {
      conversationId = existingConversation.id
      
      // Mettre à jour la conversation existante
      const updatedMessages = [...(existingConversation.messages || []), 
        { role: 'user', content: message, timestamp: new Date().toISOString() },
        { role: 'assistant', content: assistantReply, timestamp: new Date().toISOString() }
      ]

      await supabase
        .from('chat_conversations')
        .update({
          messages: updatedMessages,
          lead_score: Math.max(existingConversation.lead_score || 0, analysis.leadScore),
          lead_status: analysis.leadStatus,
          project_complexity: analysis.projectComplexity !== 'unknown' ? analysis.projectComplexity : existingConversation.project_complexity,
          user_email: analysis.extractedEmails[0] || existingConversation.user_email,
          user_phone: analysis.extractedPhones[0] || existingConversation.user_phone,
          has_requested_consultation: /consultation|rdv|rendez-vous|appel|contact/i.test(message) || existingConversation.has_requested_consultation,
          updated_at: new Date().toISOString()
        })
        .eq('id', conversationId)
    } else {
      // Créer une nouvelle conversation
      const { data: newConversation } = await supabase
        .from('chat_conversations')
        .insert({
          session_id: session.id,
          messages: [
            { role: 'user', content: message, timestamp: new Date().toISOString() },
            { role: 'assistant', content: assistantReply, timestamp: new Date().toISOString() }
          ],
          lead_score: analysis.leadScore,
          lead_status: analysis.leadStatus,
          project_complexity: analysis.projectComplexity,
          user_email: analysis.extractedEmails[0] || null,
          user_phone: analysis.extractedPhones[0] || null,
          has_requested_consultation: /consultation|rdv|rendez-vous|appel|contact/i.test(message)
        })
        .select()
        .single()
      
      conversationId = newConversation.id
    }

    // Créer ou mettre à jour les analytics
    await supabase
      .from('chat_analytics')
      .upsert({
        conversation_id: conversationId,
        total_messages: conversationHistory.length + 1,
        conversation_duration: Math.floor((Date.now() - new Date(session.created_at).getTime()) / 1000),
        technologies_mentioned: extractTechnologies(message + ' ' + assistantReply),
        services_discussed: extractServices(message + ' ' + assistantReply),
        consultation_offered: /consultation|rdv|rendez-vous|gratuit|30|minutes/i.test(assistantReply),
        consultation_accepted: /oui|d'accord|ok|aceept|intéressé|parfait/i.test(message) && /consultation/i.test(conversationHistory.slice(-2).map(m => m.content).join(' ')),
        negotiation_attempts: (assistantReply.match(/prix|tarif|budget|coût|€|euros/gi) || []).length
      }, {
        onConflict: 'conversation_id'
      })

    // Créer un lead si les coordonnées sont disponibles
    if (analysis.extractedEmails.length > 0 && analysis.leadScore >= 30) {
      const { data: existingLead } = await supabase
        .from('chat_leads')
        .select('*')
        .eq('email', analysis.extractedEmails[0])
        .eq('conversation_id', conversationId)
        .single()

      if (!existingLead) {
        await supabase
          .from('chat_leads')
          .insert({
            conversation_id: conversationId,
            email: analysis.extractedEmails[0],
            phone: analysis.extractedPhones[0] || null,
            project_type: analysis.projectComplexity,
            qualification_score: analysis.leadScore,
            urgency_level: analysis.businessSignals.urgencySignals ? 'high' : 'medium',
            status: analysis.leadScore >= 70 ? 'qualified' : 'new'
          })
      }
    }

    // Amélioration intelligente de la réponse
    let enhancedReply = assistantReply.trim()

    // Ajouter des call-to-action intelligents basés sur l'analyse
    if (analysis.leadScore >= 50 && !enhancedReply.includes('consultation') && !enhancedReply.includes('+212')) {
      if (analysis.businessSignals.urgencySignals) {
        enhancedReply += "\n\n🚀 **Vu l'urgence de votre projet, je vous propose une consultation technique gratuite de 30 minutes dès aujourd'hui. Appelez-moi directement à Marrakech : +212 607 79 86 70 pour un diagnostic immédiat.**"
      } else if (analysis.businessSignals.budgetMentioned) {
        enhancedReply += "\n\n💼 **Pour vous proposer une solution optimale dans votre budget, [réservons un créneau de consultation gratuite](/contact) ou appelez directement : +212 607 79 86 70**"
      } else if (analysis.projectComplexity === 'enterprise') {
        enhancedReply += "\n\n🏢 **Votre projet enterprise nécessite une approche stratégique. Je vous offre une consultation technique gratuite de 30 minutes pour analyser vos besoins spécifiques : +212 607 79 86 70**"
      }
    }

    // Suggestions contextuelles intelligentes
    const contextualSuggestions = []
    if (analysis.businessSignals.technicalNeeds) {
      contextualSuggestions.push("Audit technique gratuit", "Architecture sur mesure", "ROI et performances")
    }
    if (analysis.businessSignals.urgencySignals) {
      contextualSuggestions.push("Livraison rapide", "Équipe dédiée", "Support prioritaire")
    }
    if (analysis.businessSignals.budgetMentioned) {
      contextualSuggestions.push("Devis personnalisé", "Options de financement", "Packages adaptés")
    }

    // Fonctions utilitaires pour l'extraction
    function extractTechnologies(text: string): string[] {
      const techKeywords = ['react', 'nodejs', 'python', 'ai', 'ia', 'machine learning', 'blockchain', 'cloud', 'docker', 'api', 'database', 'postgresql', 'mongodb']
      return techKeywords.filter(tech => text.toLowerCase().includes(tech))
    }

    function extractServices(text: string): string[] {
      const serviceKeywords = ['développement', 'consultation', 'audit', 'formation', 'support', 'maintenance', 'intégration', 'migration']
      return serviceKeywords.filter(service => text.toLowerCase().includes(service))
    }

    return new Response(
      JSON.stringify({ 
        response: enhancedReply,
        sessionId: session.session_token,
        conversationId: conversationId,
        leadScore: analysis.leadScore,
        leadStatus: analysis.leadStatus,
        projectComplexity: analysis.projectComplexity,
        hasBusinessIntent: analysis.hasBusinessIntent,
        contextualSuggestions: contextualSuggestions,
        shouldCollectEmail: analysis.leadScore >= 30 && analysis.extractedEmails.length === 0,
        shouldOfferConsultation: analysis.leadScore >= 50,
        timestamp: new Date().toISOString()
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )

  } catch (error) {
    console.error('Error in enhanced lead generation chat function:', error)
    
    const fallbackResponse = "Je rencontre une petite difficulté technique momentanée, mais je reste à votre entière disposition pour discuter de vos projets. En tant qu'expert en IA et transformation digitale, je peux vous aider avec toutes vos questions techniques, stratégiques ou business. N'hésitez pas à me contacter directement via la page contact ou appelez-moi à Marrakech : +212 607 79 86 70 pour toute consultation urgente."
    
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
