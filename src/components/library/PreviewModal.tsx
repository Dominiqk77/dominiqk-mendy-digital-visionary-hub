
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Download, Star, Clock, Users, Shield, ArrowRight, Sparkles } from 'lucide-react';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPurchase: () => void;
  bookTitle: string;
  bookPrice: string;
  previewPages?: string[];
}

const PreviewModal: React.FC<PreviewModalProps> = ({
  isOpen,
  onClose,
  onPurchase,
  bookTitle,
  bookPrice,
  previewPages = []
}) => {
  const sampleContent = [
    {
      page: 1,
      title: "Introduction - La Révolution IA",
      content: "L'Intelligence Artificielle n'est plus une technologie du futur, c'est LE levier de croissance d'aujourd'hui. Dans ce guide, vous découvrirez les stratégies exactes que j'ai développées en 15 ans d'expertise pour transformer 500+ entreprises..."
    },
    {
      page: 2,
      title: "Chapitre 1 - Diagnostic Business IA",
      content: "Avant d'implémenter l'IA, vous devez identifier vos 3 leviers de croissance prioritaires. Cette méthode en 5 étapes vous permettra de cartographier précisément où l'IA peut générer le plus de valeur dans votre organisation..."
    },
    {
      page: 3,
      title: "Étude de Cas - ROI +347% en 90 jours",
      content: "TechInnovate, PME de 50 collaborateurs, a multiplié son chiffre d'affaires par 3.5 en automatisant intelligemment ses processus commerciaux. Voici la stratégie exacte étape par étape..."
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border border-white/20 text-white overflow-hidden">
        {/* Background cosmique */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-indigo-900/30"></div>
          <div className="nebula-glow-purple w-32 h-32 -top-10 -right-10 opacity-20 animate-pulse-slow"></div>
          <div className="nebula-glow-blue w-24 h-24 top-10 -left-10 opacity-30 animate-float"></div>
        </div>
        
        <div className="relative z-10 max-h-[80vh] overflow-y-auto">
          <DialogHeader className="text-center space-y-4 mb-6 sticky top-0 bg-gradient-to-br from-slate-900/90 via-purple-900/90 to-slate-900/90 backdrop-blur-sm pb-4">
            <div className="mx-auto w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-4 shadow-glow-purple">
              <Eye className="h-6 w-6 text-white" />
            </div>
            
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Aperçu Gratuit - 15 Premières Pages
            </DialogTitle>
            
            <div className="space-y-2">
              <p className="text-blue-300 font-bold text-lg">{bookTitle}</p>
              <div className="flex items-center justify-center space-x-3">
                <Badge className="bg-green-500/20 text-green-400 border border-green-500/30">
                  <Star className="w-3 h-3 mr-1" />
                  Aperçu Exclusif
                </Badge>
                <Badge className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                  <Clock className="w-3 h-3 mr-1" />
                  Lecture 5 min
                </Badge>
              </div>
            </div>
          </DialogHeader>

          {/* Contenu de prévisualisation */}
          <div className="space-y-6 mb-8">
            {sampleContent.map((sample, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-400 font-bold text-sm">{sample.page}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{sample.title}</h3>
                </div>
                <p className="text-blue-200 leading-relaxed">{sample.content}</p>
                {index < sampleContent.length - 1 && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-xs text-blue-300 italic">... suite dans le livre complet</p>
                  </div>
                )}
              </div>
            ))}
            
            {/* Teaser pour la suite */}
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl p-6 text-center">
              <h4 className="text-xl font-bold text-yellow-300 mb-3">🔥 Et ce n'est que le début !</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="text-sm">
                  <p className="text-white font-semibold">📊 Dans le livre complet :</p>
                  <ul className="text-blue-200 text-left mt-2 space-y-1">
                    <li>• 15 études de cas détaillées</li>
                    <li>• Templates prêts à l'emploi</li>
                    <li>• Calculateur ROI exclusif</li>
                  </ul>
                </div>
                <div className="text-sm">
                  <p className="text-white font-semibold">🎯 Bonus inclus :</p>
                  <ul className="text-blue-200 text-left mt-2 space-y-1">
                    <li>• Webinar privé (valeur 200€)</li>
                    <li>• Accès communauté VIP</li>
                    <li>• Support expert 6 mois</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Footer sticky avec CTA */}
          <div className="sticky bottom-0 bg-gradient-to-br from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-sm pt-6 border-t border-white/10">
            <div className="space-y-4">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="flex items-center text-sm text-green-300">
                    <Users className="w-4 h-4 mr-1" />
                    <span>2,547+ leaders équipés</span>
                  </div>
                  <div className="flex items-center text-sm text-blue-300">
                    <Shield className="w-4 h-4 mr-1" />
                    <span>ROI garanti +150%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <span className="text-3xl font-bold text-green-400">{bookPrice}</span>
                  <Badge className="bg-red-500 text-white px-3 py-1 font-bold">
                    🔥 -50% Lancement
                  </Badge>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button 
                  onClick={onPurchase}
                  className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-3 transition-all duration-300 hover:scale-105 shadow-cosmic-lg"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Accès Complet Maintenant
                </Button>
                <Button 
                  onClick={onClose}
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 py-3"
                >
                  Plus tard
                </Button>
              </div>

              <p className="text-xs text-blue-300 text-center">
                🔒 Paiement sécurisé • 30 jours satisfait ou remboursé • Accès à vie
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PreviewModal;
