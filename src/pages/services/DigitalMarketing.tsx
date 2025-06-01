import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowRight, Target, BarChart, Megaphone, Users, Search, Eye, Rocket, Zap } from 'lucide-react';
import AdvancedCosmicBackground from '@/components/space/AdvancedCosmicBackground';

const DigitalMarketing = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Marketing Digital 360° | Dominiqk Mendy';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Stratégies de marketing digital complètes pour augmenter votre visibilité en ligne et générer des leads qualifiés pour votre entreprise.'
      );
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col bg-portfolio-space relative">
      <Navbar />
      
      {/* Advanced cosmic background */}
      <AdvancedCosmicBackground />
      
      <main className="flex-grow z-10 relative">
        {/* Hero Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={animationVariants}
              transition={{ duration: 0.7 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-block px-4 py-1.5 bg-orange-500/10 backdrop-blur-sm rounded-full text-orange-400 border border-orange-500/20 text-sm font-medium mb-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>Marketing Digital</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Marketing Digital <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600">360°</span>
              </h1>
              
              <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-amber-400 mx-auto mb-6"></div>
              
              <p className="text-xl text-gray-200 mb-8">
                Stratégies de marketing digital complètes pour augmenter votre visibilité en ligne 
                et générer des leads qualifiés pour votre entreprise en Afrique et à l'international.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-400 hover:opacity-90 text-white">
                  <Link to="/contact" className="flex items-center">
                    Demander un audit gratuit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
                <Button size="lg" variant="outline" className="text-white border-white border hover:bg-white/10">
                  <Link to="/portfolio">Voir nos résultats</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Notre approche marketing</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-amber-400 mx-auto mb-6"></div>
              <p className="text-gray-300">
                Nous créons des stratégies digitales personnalisées qui combinent différents canaux 
                pour maximiser votre visibilité, engagement et conversion.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: <TrendingUp className="h-10 w-10" />,
                  title: "SEO/SEA Avancé",
                  description: "Optimisation pour les moteurs de recherche et publicités ciblées pour une visibilité maximale"
                },
                {
                  icon: <Target className="h-10 w-10" />,
                  title: "Social Media Marketing",
                  description: "Gestion de vos réseaux sociaux et campagnes publicitaires ciblées pour engager votre audience"
                },
                {
                  icon: <BarChart className="h-10 w-10" />,
                  title: "Content Marketing",
                  description: "Création de contenu stratégique pour renforcer votre autorité et engager votre audience"
                },
                {
                  icon: <Megaphone className="h-10 w-10" />,
                  title: "Conversion Optimization",
                  description: "Optimisation des parcours utilisateurs pour maximiser les taux de conversion"
                },
                {
                  icon: <Users className="h-10 w-10" />,
                  title: "Analytics & Reporting",
                  description: "Suivi précis des performances et rapports détaillés pour mesurer les résultats"
                },
                {
                  icon: <Search className="h-10 w-10" />,
                  title: "Growth Hacking",
                  description: "Stratégies innovantes pour accélérer votre croissance avec un budget optimisé"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full bg-black/50 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all overflow-hidden cosmic-hover">
                    <CardHeader>
                      <div className="rounded-full p-3 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-orange-500 to-amber-400 mb-4">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 backdrop-blur-sm bg-black/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Nos Services <span className="text-gradient-cosmic">Marketing</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-amber-400 mx-auto mb-6"></div>
              <p className="text-lg text-gray-300">
                Des solutions marketing complètes pour booster votre présence en ligne
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <TrendingUp size={40} />,
                  title: "SEO/SEA/SMO Avancé",
                  description: "Optimisation multi-canaux pour améliorer votre visibilité sur les moteurs de recherche et réseaux sociaux.",
                  link: "/services/marketing/seo",
                  gradient: "from-blue-600 to-indigo-500",
                  highlight: "Visibilité maximale"
                },
                {
                  icon: <Rocket size={40} />,
                  title: "Growth Hacking & Acquisition",
                  description: "Stratégies innovantes pour accélérer votre croissance avec un budget optimisé et des résultats rapides.",
                  link: "/services/marketing/growth",
                  gradient: "from-purple-600 to-violet-500",
                  highlight: "ROI exceptionnel"
                },
                {
                  icon: <Zap size={40} />,
                  title: "Tunnels de Vente Optimisés",
                  description: "Création de parcours d'achat stratégiques pour convertir vos visiteurs en clients fidèles.",
                  link: "/services/marketing/funnels",
                  gradient: "from-amber-600 to-yellow-500",
                  highlight: "Conversions amplifiées"
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full border-none overflow-hidden cosmic-hover relative bg-black/40 backdrop-blur-md">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                    <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-white/30 group-hover:shadow-[0_0_15px_rgba(155,135,245,0.3)] transition-all duration-300"></div>
                    
                    {service.highlight && (
                      <div className="absolute -right-8 top-6 transform rotate-45 bg-gradient-to-r from-portfolio-blue to-portfolio-purple text-white text-xs font-medium py-1 px-8 shadow-lg">
                        {service.highlight}
                      </div>
                    )}
                    
                    <div className="relative z-10 p-6">
                      <div className={`text-white bg-gradient-to-br ${service.gradient} p-3 rounded-xl w-16 h-16 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      <h3 className="mt-4 text-xl text-white font-bold mb-3">{service.title}</h3>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      <Button variant="ghost" className="p-0 text-white hover:text-portfolio-blue hover:bg-transparent group" asChild>
                        <Link to={service.link} className="flex items-center">
                          <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-blue to-portfolio-purple">En savoir plus</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-portfolio-purple" />
                        </Link>
                      </Button>
                    </div>
                    
                    <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-white/10 opacity-50 rounded-tl-xl"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-white/10 opacity-50 rounded-br-xl"></div>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-400 hover:opacity-90 text-white">
                <Link to="/contact">Optimiser votre marketing</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-gradient-to-r from-orange-900/40 to-amber-900/40 rounded-2xl overflow-hidden border border-white/10">
              <div className="p-12 md:p-16 relative">
                <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500 opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 opacity-20 blur-3xl rounded-full"></div>
                
                <div className="relative z-10 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Prêt à booster votre présence digitale ?
                  </h2>
                  <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                    Contactez-moi pour un audit gratuit de votre stratégie marketing et découvrez comment optimiser votre présence en ligne.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-400 hover:opacity-90 transition-opacity text-white" asChild>
                      <Link to="/contact">
                        Demander un audit gratuit
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="text-white border-white/50 hover:bg-white/10" asChild>
                      <Link to="/start-project">
                        Démarrer une campagne
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DigitalMarketing;
