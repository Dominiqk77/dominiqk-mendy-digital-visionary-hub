
import { useState, useEffect } from 'react';

interface UrgencyData {
  discount: string;
  message: string;
  color: string;
  badge: string;
  icon: string;
}

const urgencyRotations: UrgencyData[] = [
  {
    discount: "-33%",
    message: "OFFRE FLASH - Se termine à minuit !",
    color: "from-red-600 via-orange-500 to-red-600",
    badge: "🔥 FLASH",
    icon: "⚡"
  },
  {
    discount: "-40%", 
    message: "SUPER PROMO - Dernières 24h !",
    color: "from-purple-600 via-pink-500 to-purple-600",
    badge: "💎 SUPER",
    icon: "🚀"
  },
  {
    discount: "-25%",
    message: "WEEKEND SPÉCIAL - Offre exclusive !",
    color: "from-blue-600 via-cyan-500 to-blue-600", 
    badge: "🎯 WEEKEND",
    icon: "⭐"
  },
  {
    discount: "-50%",
    message: "MÉGA DEAL - Plus que quelques heures !",
    color: "from-green-600 via-emerald-500 to-green-600",
    badge: "💥 MÉGA",
    icon: "💎"
  },
  {
    discount: "-35%",
    message: "PROMO LIMITÉE - Profitez-en maintenant !",
    color: "from-yellow-600 via-orange-500 to-red-600",
    badge: "⚡ PROMO",
    icon: "🔥"
  }
];

export const useDynamicUrgency = () => {
  const [currentUrgency, setCurrentUrgency] = useState<UrgencyData>(urgencyRotations[0]);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45, 
    seconds: 30
  });

  useEffect(() => {
    // Rotation basée sur le jour de l'année pour cohérence
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    const rotationIndex = dayOfYear % urgencyRotations.length;
    setCurrentUrgency(urgencyRotations[rotationIndex]);

    // Timer countdown
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return { currentUrgency, timeLeft };
};
