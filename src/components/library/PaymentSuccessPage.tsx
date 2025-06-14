
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Download, Sparkles, ArrowRight, Calendar, Users, Star, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDominiqkLibrary } from '@/hooks/useDominiqkLibrary';

const PaymentSuccessPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const ebookId = searchParams.get('ebook_id');
  const [paymentVerified, setPaymentVerified] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string>('');
  const [ebook, setEbook] = useState<any>(null);
  const { verifyPayment } = useDominiqkLibrary();

  useEffect(() => {
    if (sessionId && ebookId) {
      const verifyAndSetup = async () => {
        const result = await verifyPayment(sessionId, ebookId);
        if (result?.success) {
          setPaymentVerified(true);
          setDownloadUrl(result.downloadUrl);
          setEbook(result.ebook);
        }
      };
      verifyAndSetup();
    }
  }, [sessionId, ebookId, verifyPayment]);

  if (!paymentVerified) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 text-white">
          <CardContent className="p-8 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
            <p className="text-blue-200">Vérification de votre paiement...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border border-white/20 text-white relative overflow-hidden">
        {/* Background cosmique */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="nebula-glow-purple w-64 h-64 -top-20 -right-20 opacity-20 animate-pulse-slow"></div>
          <div className="nebula-glow-blue w-48 h-48 top-20 -left-20 opacity-30 animate-float"></div>
        </div>

        <div className="relative z-10">
          <CardHeader className="text-center space-y-6 pb-4">
            <div className="mx-auto w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-glow-purple animate-scale-in">
              <CheckCircle className="h-14 w-14 text-white" />
            </div>
            
            <div>
              <CardTitle className="text-4xl font-bold bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent mb-4">
                🎉 Paiement Confirmé !
              </CardTitle>
              <p className="text-2xl text-green-300 font-semibold">
                Votre expertise premium vous attend !
              </p>
            </div>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Livre acheté */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Trophy className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">Livre Acheté avec Succès</h3>
              </div>
              <h4 className="text-xl text-yellow-300 font-semibold mb-4">{ebook?.title}</h4>
              <p className="text-blue-200 mb-6">
                Un email de confirmation avec le lien de téléchargement sécurisé a été envoyé à votre adresse.
              </p>
              
              {downloadUrl && (
                <Button 
                  asChild
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-8 text-lg transition-all duration-300 hover:scale-105 shadow-cosmic-lg"
                >
                  <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="w-5 h-5 mr-2" />
                    Télécharger Maintenant
                  </a>
                </Button>
              )}
            </div>

            {/* Valeur ajoutée premium */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <Star className="w-6 h-6 text-blue-400 mr-2" />
                  <h4 className="font-semibold text-white">Garantie Excellence</h4>
                </div>
                <p className="text-blue-200 text-sm">
                  15+ ans d'expertise • ROI moyen +250% • Support expert inclus
                </p>
              </div>

              <div className="bg-purple-500/20 border border-purple-500/30 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <Users className="w-6 h-6 text-purple-400 mr-2" />
                  <h4 className="font-semibold text-white">Communauté Exclusive</h4>
                </div>
                <p className="text-purple-200 text-sm">
                  Rejoignez 2,500+ leaders digitaux qui transforment déjà leur business
                </p>
              </div>
            </div>

            {/* Prochaines étapes premium */}
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-yellow-300 mb-6">
                🚀 Maximisez Votre Investissement
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">Semaine 1</h4>
                  <p className="text-sm text-blue-200">Implémentez la stratégie #1</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">Mois 1</h4>
                  <p className="text-sm text-blue-200">Premier ROI mesurable +150%</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h4 className="font-bold text-white mb-2">Mois 3</h4>
                  <p className="text-sm text-blue-200">Transformation complète</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold transition-all duration-300 hover:scale-105">
                    <Calendar className="w-4 h-4 mr-2" />
                    Consultation Stratégique GRATUITE
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Découvrir Nos Services IA
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats de confiance */}
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-8 text-sm text-blue-200">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  <span>500+ entreprises transformées</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  <span>ROI moyen +250%</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  <span>15+ ans d'expertise</span>
                </div>
              </div>

              <Link to="/library">
                <Button 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Retour à la Bibliothèque
                </Button>
              </Link>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default PaymentSuccessPage;
