
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Download, Sparkles, ArrowRight, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DownloadSuccessPageProps {
  bookTitle: string;
  userEmail: string;
  onClose: () => void;
}

const DownloadSuccessPage: React.FC<DownloadSuccessPageProps> = ({
  bookTitle,
  userEmail,
  onClose
}) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border border-white/20 text-white relative overflow-hidden">
        {/* Background cosmique */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="nebula-glow-purple w-64 h-64 -top-20 -right-20 opacity-20 animate-pulse-slow"></div>
          <div className="nebula-glow-blue w-48 h-48 top-20 -left-20 opacity-30 animate-float"></div>
        </div>

        <div className="relative z-10">
          <CardHeader className="text-center space-y-6 pb-4">
            <div className="mx-auto w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-glow-purple animate-scale-in">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            
            <div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-white via-green-200 to-emerald-200 bg-clip-text text-transparent mb-4">
                🎉 Félicitations !
              </CardTitle>
              <p className="text-xl text-green-300 font-semibold">
                Votre livre premium est en route !
              </p>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">📚 Livre téléchargé :</h3>
              <p className="text-yellow-300 font-semibold">{bookTitle}</p>
              <p className="text-blue-200 text-sm mt-2">
                Un email de confirmation a été envoyé à : <span className="font-semibold">{userEmail}</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <Download className="w-5 h-5 text-blue-400 mr-2" />
                  <h4 className="font-semibold text-white">Accès immédiat</h4>
                </div>
                <p className="text-blue-200 text-sm">
                  Téléchargement sécurisé disponible dans votre email
                </p>
              </div>

              <div className="bg-purple-500/20 border border-purple-500/30 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <Sparkles className="w-5 h-5 text-purple-400 mr-2" />
                  <h4 className="font-semibold text-white">Bonus inclus</h4>
                </div>
                <p className="text-purple-200 text-sm">
                  Ressources complémentaires et templates
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-yellow-300 mb-4">
                🚀 Prêt pour l'étape suivante ?
              </h3>
              <p className="text-white mb-4">
                Découvrez comment appliquer ces stratégies avec un accompagnement personnalisé
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold transition-all duration-300 hover:scale-105">
                    <Calendar className="w-4 h-4 mr-2" />
                    Consultation Gratuite
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    <Users className="w-4 h-4 mr-2" />
                    Nos Services IA
                  </Button>
                </Link>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-6 text-sm text-blue-200">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  <span>500+ entreprises accompagnées</span>
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

              <Button 
                onClick={onClose}
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10"
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                Continuer l'exploration
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default DownloadSuccessPage;
