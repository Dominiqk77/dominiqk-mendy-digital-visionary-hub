
import React from 'react';
import { Shield, Award, Clock, Users, CheckCircle, Lock } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Paiement 100% Sécurisé",
      subtitle: "Cryptage SSL 256 bits",
      color: "green"
    },
    {
      icon: Award,
      title: "Expert Certifié",
      subtitle: "15 ans d'expérience",
      color: "yellow"
    },
    {
      icon: Clock,
      title: "Accès Immédiat",
      subtitle: "Téléchargement instantané",
      color: "blue"
    },
    {
      icon: Users,
      title: "2,500+ Clients",
      subtitle: "Satisfaits dans le monde",
      color: "purple"
    },
    {
      icon: CheckCircle,
      title: "Garantie 30 jours",
      subtitle: "Satisfait ou remboursé",
      color: "cyan"
    },
    {
      icon: Lock,
      title: "Données Protégées",
      subtitle: "Conformité RGPD",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: "text-green-400 bg-green-500/20 border-green-500/30",
      yellow: "text-yellow-400 bg-yellow-500/20 border-yellow-500/30",
      blue: "text-blue-400 bg-blue-500/20 border-blue-500/30",
      purple: "text-purple-400 bg-purple-500/20 border-purple-500/30",
      cyan: "text-cyan-400 bg-cyan-500/20 border-cyan-500/30",
      indigo: "text-indigo-400 bg-indigo-500/20 border-indigo-500/30"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Votre <span className="text-cyan-400">confiance</span> est notre priorité
        </h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {badges.map((badge, index) => {
          const Icon = badge.icon;
          return (
            <div 
              key={index} 
              className={`${getColorClasses(badge.color)} border rounded-xl p-4 text-center hover:scale-105 transition-all duration-300 backdrop-blur-sm`}
            >
              <Icon className="w-8 h-8 mx-auto mb-2" />
              <div className="text-white text-sm font-semibold mb-1">{badge.title}</div>
              <div className="text-xs opacity-80">{badge.subtitle}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrustBadges;
