
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Share2, Rocket, Layout, BookOpen, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import FloatingElements from '../../components/animations/FloatingElements';
import CosmicDivider from '../../components/animations/CosmicDivider';

const MarketingServices = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    // Set page title for SEO
    document.title = 'Marketing Digital | Dominique Mendy | Expert Marketing Digital Sénégal';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Services de marketing digital par Dominique Mendy: SEO, social media, tunnels de vente, publicité et growth hacking pour entreprises africaines.'
      );
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const marketingServices = [
    {
      icon: <LineChart size={40} />,
      title: "SEO/SEA/SMO Avancé",
      description: "Optimisation multi-canaux pour améliorer votre visibilité sur les moteurs de recherche et réseaux sociaux avec des stratégies avancées de référencement naturel et payant.",
      benefits: ["Augmentation du trafic organique", "Meilleur positionnement sur les mots-clés stratégiques", "Analyse et optimisation continue"]
    },
    {
      icon: <Rocket size={40} />,
      title: "Growth Hacking & Acquisition",
      description: "Stratégies innovantes pour accélérer votre croissance avec un budget optimisé et des résultats rapides grâce à des techniques d'acquisition non conventionnelles.",
      benefits: ["Croissance rapide et mesurable", "Optimisation du coût d'acquisition client", "Tests A/B et itérations rapides"]
    },
    {
      icon: <Share2 size={40} />,
      title: "Social Media Marketing",
      description: "Gestion professionnelle de vos réseaux sociaux et campagnes publicitaires pour maximiser votre engagement et développer votre communauté.",
      benefits: ["Augmentation de l'engagement", "Création de contenu personnalisé", "Gestion de communauté professionnelle"]
    },
    {
      icon: <Zap size={40} />,
      title: "Tunnels de Vente Optimisés",
      description: "Création de parcours d'achat stratégiques pour convertir vos visiteurs en clients fidèles grâce à des séquences d'emails et pages de vente optimisées.",
      benefits: ["Augmentation du taux de conversion", "Personnalisation du parcours client", "Automatisation des suivis"]
    },
    {
      icon: <Layout size={40} />,
      title: "Content Marketing & Storytelling",
      description: "Production de contenu stratégique et narratif pour engager votre audience et renforcer votre autorité dans votre secteur d'activité.",
      benefits: ["Renforcement de votre expertise", "Contenu engageant et partageable", "Stratégie éditoriale cohérente"]
    },
    {
      icon: <BookOpen size={40} />,
      title: "Formation & Coaching Marketing",
      description: "Programmes de formation personnalisés pour renforcer les compétences digitales de votre équipe et vous rendre autonome dans votre stratégie marketing.",
      benefits: ["Montée en compétence de vos équipes", "Accompagnement personnalisé", "Transfert de connaissances"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="relative overflow-hidden py-20 md:py-28">
          {/* Animated background elements */}
          <FloatingElements count={12} variant="mixed" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient-cosmic">
                Marketing Digital <span className="block">360°</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Propulsez votre entreprise avec des stratégies marketing innovantes 
                <span className="block mt-2">adaptées au marché africain et international</span>
              </p>
            </motion.div>

            {/* Animated stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              {[
                { value: "89%", label: "Taux de satisfaction" },
                { value: "3.4x", label: "ROI moyen" },
                { value: "47%", label: "Augmentation du trafic" },
                { value: "250+", label: "Projets réussis" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + (index * 0.2) }}
                  className="bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-primary/20 text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold text-gradient-primary animate-gradient-slow">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 mt-2 text-sm md:text-base">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CosmicDivider variant="wave" className="text-gray-900" />
        
        {/* Services section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-900/90 relative">
          <FloatingElements count={6} variant="data" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Nos Services <span className="text-gradient-primary">Marketing Digital</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-primary animate-gradient-pulse mx-auto mb-6"></div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Des solutions complètes pour vous démarquer dans l'univers digital 
                et accélérer la croissance de votre entreprise
              </p>
            </div>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {marketingServices.map((service, index) => (
                <motion.div 
                  key={index} 
                  variants={item}
                  whileHover={{ 
                    scale: 1.03, 
                    transition: { duration: 0.3 } 
                  }}
                  className="h-full"
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                >
                  <Card className="cosmic-card h-full border-gray-800/40 hover:border-primary/40 bg-black/20 backdrop-blur-sm overflow-hidden transition-all duration-500">
                    <CardHeader>
                      <div className={`text-primary ${activeService === index ? 'animate-pulse-slow' : ''}`}>
                        {service.icon}
                      </div>
                      <CardTitle className="mt-4 text-xl text-white">{service.title}</CardTitle>
                      <CardDescription className="text-gray-300 text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="mr-2 mt-1 text-primary">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            <span className="text-gray-400">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <CosmicDivider variant="curve" className="text-gray-900" />
        
        {/* CTA section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          <FloatingElements count={4} variant="tech" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center bg-black/30 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-primary/20"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Prêt à <span className="text-gradient-cosmic">transformer</span> votre 
                <span className="text-gradient-cosmic"> stratégie digitale</span>?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Contactez-moi pour une consultation personnalisée et découvrez comment 
                mes services de marketing digital peuvent propulser votre entreprise.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-primary rounded-lg font-medium text-white hover:opacity-90 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  Demander un devis gratuit
                </motion.a>
                <motion.a 
                  href="/services" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-primary/50 rounded-lg font-medium text-white hover:bg-primary/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  Explorer tous les services
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MarketingServices;
