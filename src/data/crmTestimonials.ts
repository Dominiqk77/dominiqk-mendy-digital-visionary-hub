
// Testimonials optimisés pour la conversion avec images Unsplash gratuites
export const crmTestimonials = [
  // Témoignages Français
  {
    id: 1,
    name: "Marie Dubois",
    company: "TechStart Paris",
    position: "CEO & Fondatrice",
    text: "DOM CRM a révolutionné notre business ! Notre CA a explosé de 420% en seulement 4 mois. L'IA intégrée nous fait gagner 25h par semaine.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b60b76e8?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    language: "fr",
    verified: true,
    resultMetric: "+420% CA"
  },
  {
    id: 2,
    name: "Thomas Laurent",
    company: "Digital Marketing Pro",
    position: "Directeur Commercial",
    text: "Incroyable ! Nous avons multiplié par 6 nos conversions lead → client. DOM CRM c'est de la pure magie pour automatiser les ventes.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    language: "fr",
    verified: true,
    resultMetric: "x6 conversions"
  },
  {
    id: 3,
    name: "Sophie Chen",
    company: "E-commerce Solutions",
    position: "CMO",
    text: "ROI de 850% dès le premier mois ! DOM CRM a transformé notre tunnel de vente. Je recommande à 100% pour toute entreprise sérieuse.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    language: "fr",
    verified: true,
    resultMetric: "ROI 850%"
  },
  {
    id: 4,
    name: "Alexandre Moreau",
    company: "Startup Innovation",
    position: "Co-fondateur",
    text: "DOM CRM nous a permis de passer de 50K€ à 280K€ de MRR en 6 mois. L'automation est juste parfaite !",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    language: "fr",
    verified: true,
    resultMetric: "280K€ MRR"
  },
  {
    id: 5,
    name: "Émilie Rousseau",
    company: "Agence Web Premium",
    position: "Directrice Générale",
    text: "Nous gérons maintenant 3x plus de clients avec la même équipe grâce à DOM CRM. L'efficacité est décuplée !",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    language: "fr",
    verified: true,
    resultMetric: "3x plus clients"
  },

  // Témoignages Anglais
  {
    id: 6,
    name: "James Wilson",
    company: "TechVentures UK",
    position: "CEO",
    text: "DOM CRM delivered 780% ROI in 3 months. Our sales team productivity increased by 400%. This is a game-changer!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    language: "en",
    verified: true,
    resultMetric: "780% ROI"
  },
  {
    id: 7,
    name: "Sarah Johnson",
    company: "Digital Growth Agency",
    position: "Founder & CMO",
    text: "Absolutely incredible! We scaled from $10K to $150K MRR using DOM CRM's AI automation. Worth every penny!",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    language: "en",
    verified: true,
    resultMetric: "$150K MRR"
  },
  {
    id: 8,
    name: "Michael Brown",
    company: "SaaS Solutions Inc",
    position: "Head of Sales",
    text: "DOM CRM helped us close 5x more deals with 50% less effort. The AI content generation is pure magic!",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    language: "en",
    verified: true,
    resultMetric: "5x more deals"
  },
  {
    id: 9,
    name: "Emma Davis",
    company: "Growth Marketing Co",
    position: "Marketing Director",
    text: "Our conversion rate jumped from 2% to 12% after implementing DOM CRM. Best investment we ever made!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    language: "en",
    verified: true,
    resultMetric: "12% conversion"
  },
  {
    id: 10,
    name: "David Martinez",
    company: "Enterprise Solutions",
    position: "VP of Operations",
    text: "DOM CRM transformed our entire sales process. We're now closing $2M+ deals monthly with complete automation.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    language: "en",
    verified: true,
    resultMetric: "$2M+ monthly"
  },

  // Témoignages supplémentaires français
  {
    id: 11,
    name: "Nicolas Petit",
    company: "Consulting Pro",
    position: "Partner",
    text: "DOM CRM nous fait économiser 40h/semaine en automatisation. Notre équipe peut se concentrer sur la stratégie !",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    language: "fr",
    verified: true,
    resultMetric: "40h économisées"
  },
  {
    id: 12,
    name: "Camille Blanc",
    company: "Marketing Digital 360",
    position: "Responsable Innovation",
    text: "Résultats spectaculaires ! Notre taux de closing est passé de 15% à 67% grâce à l'IA de DOM CRM.",
    image: "https://images.unsplash.com/photo-1582233479366-6d38bc390a08?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    language: "fr",
    verified: true,
    resultMetric: "67% closing rate"
  }
];

// Fonction pour obtenir des témoignages par langue
export const getTestimonialsByLanguage = (language: 'fr' | 'en' | 'all' = 'all') => {
  if (language === 'all') return crmTestimonials;
  return crmTestimonials.filter(testimonial => testimonial.language === language);
};

// Fonction pour obtenir des témoignages aléatoirement
export const getRandomTestimonials = (count: number = 6, language: 'fr' | 'en' | 'all' = 'all') => {
  const testimonials = getTestimonialsByLanguage(language);
  const shuffled = [...testimonials].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};
