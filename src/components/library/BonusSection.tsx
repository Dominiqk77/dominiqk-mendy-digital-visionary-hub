
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gift, Calculator, FileText, Video, MessageCircle, Zap } from 'lucide-react';

const BonusSection = () => {
  const bonuses = [
    {
      icon: Calculator,
      title: "Calculateur ROI IA",
      value: "200€",
      description: "Outil exclusif pour calculer le retour sur investissement de vos projets IA",
      color: "cyan"
    },
    {
      icon: FileText,
      title: "Templates Business",
      value: "150€",
      description: "50+ modèles prêts à l'emploi pour lancer vos projets rapidement",
      color: "purple"
    },
    {
      icon: Video,
      title: "Masterclass Privée",
      value: "300€",
      description: "Accès exclusif à 3h de formation vidéo avec études de cas",
      color: "yellow"
    },
    {
      icon: MessageCircle,
      title: "Support Expert 6 mois",
      value: "500€",
      description: "Accompagnement personnalisé par email pour vos questions",
      color: "green"
    },
    {
      icon: Zap,
      title: "Mises à jour à vie",
      value: "100€",
      description: "Toutes les futures éditions et mises à jour incluses gratuitement",
      color: "blue"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: "text-cyan-400 bg-cyan-500/20 border-cyan-500/30",
      purple: "text-purple-400 bg-purple-500/20 border-purple-500/30",
      yellow: "text-yellow-400 bg-yellow-500/20 border-yellow-500/30",
      green: "text-green-400 bg-green-500/20 border-green-500/30",
      blue: "text-blue-400 bg-blue-500/20 border-blue-500/30"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const totalValue = bonuses.reduce((sum, bonus) => sum + parseInt(bonus.value.replace('€', '')), 0);

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-3 rounded-full font-bold mb-6 animate-pulse">
          <Gift className="w-5 h-5 mr-2" />
          BONUS EXCLUSIFS INCLUS
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          <span className="text-yellow-400">{totalValue}€</span> de bonus offerts
        </h3>
        <p className="text-lg text-blue-200 max-w-2xl mx-auto">
          Obtenez ces outils premium en plus de votre achat, sans frais supplémentaires
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bonuses.map((bonus, index) => {
          const Icon = bonus.icon;
          return (
            <Card key={index} className="bg-white/10 backdrop-blur-xl border border-white/20 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 group relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold">
                  {bonus.value}
                </Badge>
              </div>
              
              <CardHeader>
                <div className={`${getColorClasses(bonus.color)} border rounded-full p-3 w-fit mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-white group-hover:text-yellow-300 transition-colors">
                  {bonus.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-blue-200 leading-relaxed">{bonus.description}</p>
              </CardContent>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Card>
          );
        })}
      </div>
      
      <div className="text-center mt-8">
        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl p-6 max-w-2xl mx-auto">
          <p className="text-yellow-300 font-bold text-lg mb-2">
            🎁 VALEUR TOTALE: {totalValue}€ - OFFERT AUJOURD'HUI
          </p>
          <p className="text-yellow-200 text-sm">
            Ces bonus exclusifs sont offerts uniquement pendant la période de lancement
          </p>
        </div>
      </div>
    </div>
  );
};

export default BonusSection;
