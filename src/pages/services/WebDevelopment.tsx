
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code, ArrowRight, Globe, Smartphone, ShoppingCart, FileCode, Blocks, BadgeCheck } from 'lucide-react';
import EnhancedSpaceBackground from '@/components/space/EnhancedSpaceBackground';

const WebDevelopment = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Développement Web & Mobile | Dominiqk Mendy';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Création de sites web professionnels et applications mobiles performantes avec les dernières technologies et une approche centrée sur l\'utilisateur.'
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
      
      {/* Space background */}
      <EnhancedSpaceBackground />
      
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
              <div className="inline-block px-4 py-1.5 bg-blue-500/10 backdrop-blur-sm rounded-full text-blue-400 border border-blue-500/20 text-sm font-medium mb-4">
                <div className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  <span>Web & Mobile</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Développement <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-600">Web & Mobile</span>
              </h1>
              
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
              
              <p className="text-xl text-gray-200 mb-8">
                Création de sites web professionnels et applications mobiles performantes avec les dernières technologies 
                et une approche centrée sur l'utilisateur pour maximiser votre impact digital.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white">
                  <Link to="/contact" className="flex items-center">
                    Demander un devis gratuit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
                <Button size="lg" variant="outline" className="text-white border-white border hover:bg-white/10">
                  <Link to="/portfolio">Voir nos réalisations</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Notre approche de développement</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
              <p className="text-gray-300">
                Nous créons des solutions web et mobiles performantes qui combinent esthétique moderne, 
                fonctionnalités avancées et expérience utilisateur optimale.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: <Globe className="h-10 w-10" />,
                  title: "Responsive Design",
                  description: "Sites web adaptatifs optimisés pour tous les appareils et toutes les tailles d'écran"
                },
                {
                  icon: <Smartphone className="h-10 w-10" />,
                  title: "Applications Mobiles",
                  description: "Applications natives et hybrides pour iOS et Android avec expérience utilisateur fluide"
                },
                {
                  icon: <Code className="h-10 w-10" />,
                  title: "Performance Optimisée",
                  description: "Code optimisé pour des temps de chargement rapides et une expérience fluide"
                },
                {
                  icon: <ShoppingCart className="h-10 w-10" />,
                  title: "E-Commerce",
                  description: "Boutiques en ligne sécurisées avec gestion des paiements et expérience d'achat optimisée"
                },
                {
                  icon: <BadgeCheck className="h-10 w-10" />,
                  title: "SEO Friendly",
                  description: "Sites optimisés pour les moteurs de recherche pour une meilleure visibilité en ligne"
                },
                {
                  icon: <FileCode className="h-10 w-10" />,
                  title: "Technologies Modernes",
                  description: "Utilisation des frameworks et technologies les plus récents et performants"
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
                      <div className="rounded-full p-3 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 mb-4">
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
                Nos Services <span className="text-gradient-cosmic">Web & Mobile</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-300">
                Des solutions web et mobile complètes pour tous vos besoins numériques
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code size={40} />,
                  title: "Développement Web Full Stack",
                  description: "Création de sites et applications web complexes avec les technologies front-end et back-end les plus performantes.",
                  link: "/services/web/full-stack",
                  gradient: "from-blue-600 to-cyan-500"
                },
                {
                  icon: <Smartphone size={40} />,
                  title: "Applications Mobiles Native/Hybride",
                  description: "Développement d'applications iOS et Android performantes, intuitives et parfaitement adaptées à vos besoins.",
                  link: "/services/web/mobile-apps",
                  gradient: "from-indigo-600 to-blue-500"
                },
                {
                  icon: <ShoppingCart size={40} />,
                  title: "E-Commerce & Marketplaces",
                  description: "Création de boutiques en ligne et places de marché optimisées pour la conversion et l'expérience utilisateur.",
                  link: "/services/web/ecommerce",
                  gradient: "from-green-600 to-teal-500"
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
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white">
                <Link to="/contact">Discuter de votre projet web</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-900/40 to-cyan-900/40 rounded-2xl overflow-hidden border border-white/10">
              <div className="p-12 md:p-16 relative">
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500 opacity-20 blur-3xl rounded-full"></div>
                
                <div className="relative z-10 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Prêt à donner vie à votre projet web ?
                  </h2>
                  <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                    Contactez-moi pour discuter de votre vision et obtenir une proposition adaptée à votre contexte et à votre budget.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 transition-opacity text-white" asChild>
                      <Link to="/contact">
                        Discuter avec un expert
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="text-white border-white/50 hover:bg-white/10" asChild>
                      <Link to="/start-project">
                        Démarrer un projet
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

export default WebDevelopment;
