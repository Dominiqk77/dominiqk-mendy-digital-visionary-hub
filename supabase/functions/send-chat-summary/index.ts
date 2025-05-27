
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.49.8'
import { Resend } from "npm:resend@2.0.0"

const resend = new Resend(Deno.env.get("RESEND_API_KEY"))

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
    const { conversationId, userEmail, userName } = await req.json()

    if (!conversationId || !userEmail) {
      throw new Error('ConversationId and userEmail are required')
    }

    // Récupérer les détails de la conversation
    const { data: conversation } = await supabase
      .from('chat_conversations')
      .select('*')
      .eq('id', conversationId)
      .single()

    if (!conversation) {
      throw new Error('Conversation not found')
    }

    // Récupérer les analytics
    const { data: analytics } = await supabase
      .from('chat_analytics')
      .select('*')
      .eq('conversation_id', conversationId)
      .single()

    // Préparer le résumé de conversation
    const messages = conversation.messages || []
    const conversationSummary = messages
      .filter((msg: any) => msg.role === 'assistant')
      .map((msg: any) => msg.content)
      .join('\n\n')

    // Générer les recommandations personnalisées
    const recommendations = generatePersonalizedRecommendations(conversation, analytics)

    // Template email professionnel
    const emailHTML = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
            .section { margin-bottom: 30px; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .cta-button { display: inline-block; background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 10px 0; }
            .highlight { background: #e3f2fd; padding: 15px; border-left: 4px solid #2196f3; margin: 15px 0; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 14px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🚀 Résumé de notre consultation technique</h1>
                <p>Dominiqk Mendy - Expert IA & Transformation Digitale</p>
            </div>
            
            <div class="content">
                <div class="section">
                    <h2>👋 Bonjour ${userName || 'Cher prospect'},</h2>
                    <p>Merci pour cet échange enrichissant ! Voici un résumé personnalisé de notre discussion avec mes recommandations d'expert.</p>
                </div>

                <div class="section">
                    <h3>📊 Analyse de votre projet</h3>
                    <div class="highlight">
                        <strong>Complexité identifiée :</strong> ${conversation.project_complexity || 'À définir'}<br>
                        <strong>Score de qualité :</strong> ${conversation.lead_score}/100<br>
                        <strong>Technologies discutées :</strong> ${analytics?.technologies_mentioned?.join(', ') || 'Diverses technologies'}
                    </div>
                </div>

                <div class="section">
                    <h3>💡 Mes recommandations personnalisées</h3>
                    ${recommendations}
                </div>

                <div class="section">
                    <h3>🎯 Prochaines étapes suggérées</h3>
                    <p>Basé sur votre profil et vos besoins, voici ce que je vous recommande :</p>
                    
                    <div style="text-align: center; margin: 25px 0;">
                        <a href="tel:+212607798670" class="cta-button">
                            📞 Consultation gratuite 30min<br>
                            <small>+212 607 79 86 70 (Marrakech)</small>
                        </a>
                    </div>

                    <ul>
                        <li>Audit technique gratuit de votre infrastructure actuelle</li>
                        <li>Roadmap personnalisée de transformation digitale</li>
                        <li>Estimation détaillée avec options de financement</li>
                        <li>Présentation de références clients similaires</li>
                    </ul>
                </div>

                <div class="section">
                    <h3>🏆 Pourquoi choisir mon expertise ?</h3>
                    <ul>
                        <li><strong>15+ ans d'expérience internationale</strong> - Projets en Afrique, Europe, Amérique</li>
                        <li><strong>Expertise technique pointue</strong> - IA, Cloud, Développement, Transformation</li>
                        <li><strong>Approche business</strong> - ROI mesurable et impact sur votre croissance</li>
                        <li><strong>Support continu</strong> - Accompagnement long terme et formation équipes</li>
                    </ul>
                </div>

                <div class="section">
                    <h3>📈 Offre spéciale pour vous</h3>
                    <div class="highlight">
                        <p><strong>🎁 BONUS EXCLUSIF :</strong> Consultation technique gratuite de 30 minutes (valeur 200€) pour analyser votre projet et vous proposer une stratégie sur mesure.</p>
                        <p>Créneaux disponibles cette semaine - Réservez maintenant !</p>
                    </div>
                </div>
            </div>

            <div class="footer">
                <p>
                    <strong>Dominiqk Mendy</strong><br>
                    Expert en Intelligence Artificielle & Transformation Digitale<br>
                    📧 contact@dominiqk-mendy.com | 📱 +212 607 79 86 70<br>
                    🌐 Basé à Marrakech - Clients internationaux
                </p>
                <p style="font-size: 12px; margin-top: 20px;">
                    Cet email a été envoyé automatiquement suite à votre demande de consultation.<br>
                    Si vous ne souhaitez plus recevoir nos communications, répondez avec "STOP".
                </p>
            </div>
        </div>
    </body>
    </html>
    `

    // Envoyer l'email
    const emailResponse = await resend.emails.send({
      from: "Dominiqk Mendy <contact@dominiqk-mendy.com>",
      to: [userEmail],
      subject: `🚀 Résumé de notre consultation - Prochaines étapes pour votre projet`,
      html: emailHTML,
    })

    // Marquer l'email comme envoyé
    await supabase
      .from('chat_conversations')
      .update({
        email_sent: true,
        email_sent_at: new Date().toISOString()
      })
      .eq('id', conversationId)

    console.log('Email de suivi envoyé avec succès:', emailResponse)

    return new Response(
      JSON.stringify({ 
        success: true, 
        emailId: emailResponse.data?.id,
        message: 'Email de suivi envoyé avec succès'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email de suivi:', error)
    
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

function generatePersonalizedRecommendations(conversation: any, analytics: any) {
  const complexity = conversation.project_complexity
  const score = conversation.lead_score || 0
  const technologies = analytics?.technologies_mentioned || []
  
  let recommendations = '<ul>'
  
  if (complexity === 'enterprise') {
    recommendations += '<li><strong>Architecture Enterprise :</strong> Mise en place d\'une architecture scalable et sécurisée pour supporter votre croissance</li>'
    recommendations += '<li><strong>Gouvernance IA :</strong> Framework de governance pour vos initiatives d\'intelligence artificielle</li>'
    recommendations += '<li><strong>Accompagnement stratégique :</strong> Support C-level pour la transformation digitale</li>'
  } else if (complexity === 'complex') {
    recommendations += '<li><strong>Solutions intégrées :</strong> Développement de plateformes connectées à vos systèmes existants</li>'
    recommendations += '<li><strong>Automatisation intelligente :</strong> IA pour optimiser vos processus métier</li>'
    recommendations += '<li><strong>Formation équipes :</strong> Montée en compétences de vos développeurs</li>'
  } else if (complexity === 'medium') {
    recommendations += '<li><strong>Applications métier :</strong> Solutions sur mesure pour digitaliser vos processus</li>'
    recommendations += '<li><strong>Intégrations API :</strong> Connexion avec vos outils existants</li>'
    recommendations += '<li><strong>Dashboard analytics :</strong> Tableaux de bord pour piloter votre activité</li>'
  } else {
    recommendations += '<li><strong>Démarrage digital :</strong> Présence en ligne professionnelle et efficace</li>'
    recommendations += '<li><strong>Automatisations simples :</strong> Gains de productivité immédiats</li>'
    recommendations += '<li><strong>Formation digitale :</strong> Accompagnement de votre équipe</li>'
  }
  
  if (technologies.includes('ai') || technologies.includes('ia')) {
    recommendations += '<li><strong>Intelligence Artificielle :</strong> Intégration d\'IA générative et prédictive dans vos processus</li>'
  }
  
  if (score >= 70) {
    recommendations += '<li><strong>Package Premium :</strong> Accompagnement VIP avec support prioritaire et livrables express</li>'
  }
  
  recommendations += '</ul>'
  
  return recommendations
}
