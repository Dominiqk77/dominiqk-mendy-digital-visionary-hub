
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { email, name, ebookTitle, downloadUrl, company } = await req.json();
    
    console.log('Sending ebook confirmation to:', email);

    const emailHtml = `
      <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
        <!-- Header premium -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center; position: relative; overflow: hidden;">
          <div style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);"></div>
          <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700; position: relative; z-index: 2;">🚀 Votre Livre Premium Est Prêt !</h1>
          <p style="color: #e3f2fd; margin: 10px 0 0 0; font-size: 16px; position: relative; z-index: 2;">Accès immédiat à votre expertise exclusive</p>
        </div>

        <!-- Contenu principal -->
        <div style="padding: 40px 30px; background: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h2 style="color: #1a1a1a; font-size: 24px; font-weight: 600; margin: 0 0 15px 0;">Félicitations ${name || 'Leader Digital'} ! 🎉</h2>
            <p style="color: #4a5568; font-size: 16px; line-height: 1.6; margin: 0;">
              Votre exemplaire de <strong style="color: #667eea;">"${ebookTitle}"</strong> vous attend.<br>
              Plus de 2,500+ leaders digitaux nous font déjà confiance.
            </p>
          </div>
          
          <!-- CTA Principal -->
          <div style="text-align: center; margin: 40px 0;">
            <a href="${downloadUrl || 'https://dominiqkmendy.com/library'}" 
               style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                      color: #ffffff; padding: 18px 35px; text-decoration: none; 
                      border-radius: 12px; font-weight: 700; font-size: 16px;
                      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
                      transition: all 0.3s ease;">
              📖 TÉLÉCHARGER MAINTENANT
            </a>
            <p style="color: #718096; font-size: 12px; margin: 10px 0 0 0;">Lien sécurisé - Accès à vie</p>
          </div>
          
          <!-- Valeur ajoutée -->
          <div style="background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%); 
                      padding: 25px; border-radius: 12px; margin: 30px 0;
                      border-left: 4px solid #667eea;">
            <h3 style="color: #2d3748; font-size: 18px; font-weight: 600; margin: 0 0 15px 0;">
              🎯 Prochaines Étapes Pour Maximiser Votre ROI :
            </h3>
            <ul style="color: #4a5568; margin: 0; padding-left: 20px; line-height: 1.8;">
              <li><strong>Dans les 24h :</strong> Implémentez la stratégie #1 (page 12)</li>
              <li><strong>Semaine 1 :</strong> Lancez votre premier projet IA rentable</li>
              <li><strong>Mois 1 :</strong> Mesurez votre ROI et optimisez (objectif +150%)</li>
              <li><strong>Bonus :</strong> Rejoignez notre communauté de 2,500+ leaders</li>
            </ul>
          </div>
          
          <!-- Urgence consultation -->
          <div style="background: linear-gradient(135deg, #e6fffa 0%, #b2f5ea 100%); 
                      padding: 25px; border-radius: 12px; margin: 30px 0; text-align: center;
                      border: 2px solid #38b2ac;">
            <h3 style="color: #234e52; font-size: 20px; font-weight: 700; margin: 0 0 10px 0;">
              🔥 OFFRE EXCLUSIVE - 48H SEULEMENT
            </h3>
            <p style="color: #2c7a7b; font-size: 16px; margin: 0 0 20px 0; font-weight: 500;">
              Consultation stratégique personnalisée<br>
              <span style="text-decoration: line-through; color: #718096;">Valeur : 500€</span> 
              <span style="color: #e53e3e; font-weight: 700; font-size: 18px;">→ GRATUITE</span>
            </p>
            <a href="https://dominiqkmendy.com/contact" 
               style="display: inline-block; background: linear-gradient(135deg, #38b2ac 0%, #319795 100%); 
                      color: #ffffff; padding: 15px 30px; text-decoration: none; 
                      border-radius: 8px; font-weight: 600; font-size: 16px;
                      box-shadow: 0 6px 20px rgba(56, 178, 172, 0.3);">
              💼 RÉSERVER MA CONSULTATION
            </a>
          </div>
          
          <!-- Social proof -->
          <div style="text-align: center; margin: 30px 0; padding: 20px; 
                      background: #f8f9fa; border-radius: 8px;">
            <p style="color: #6c757d; font-size: 14px; margin: 0; font-style: italic;">
              "Grâce aux stratégies de Dominiqk, notre ROI IA a bondi de +347% en 3 mois. 
              Un investissement qui se rentabilise dès la première semaine !"
            </p>
            <p style="color: #495057; font-size: 12px; margin: 10px 0 0 0; font-weight: 600;">
              — Sarah M., CEO TechInnovate (Cliente depuis 2023)
            </p>
          </div>
          
          <!-- Signature -->
          <div style="margin-top: 40px; padding-top: 30px; border-top: 1px solid #e2e8f0;">
            <p style="color: #2d3748; font-size: 16px; margin: 0; line-height: 1.6;">
              À votre succès exponential,<br>
              <strong style="color: #667eea;">Dominiqk Mendy</strong><br>
              <span style="color: #718096; font-size: 14px;">
                Expert International en IA & Transformation Digitale<br>
                🏆 15+ ans d'expertise | 500+ entreprises transformées | ROI moyen +250%
              </span>
            </p>
          </div>
        </div>
        
        <!-- Footer -->
        <div style="background: #f7fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="color: #718096; font-size: 12px; margin: 0;">
            🔒 Vos données sont protégées | 📧 Support: contact@dominiqkmendy.com<br>
            © 2024 Dominiqk Mendy - Expert IA International
          </p>
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Dominiqk Mendy <noreply@dominiqkmendy.com>',
      to: [email],
      subject: `🚀 ${ebookTitle} - Votre Guide Premium Est Prêt !`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend error:', error);
      throw error;
    }

    console.log('Email sent successfully:', data);

    return new Response(JSON.stringify({ 
      success: true, 
      messageId: data?.id 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in send-ebook-confirmation:', error);
    return new Response(JSON.stringify({ 
      error: error.message || 'Failed to send email' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
