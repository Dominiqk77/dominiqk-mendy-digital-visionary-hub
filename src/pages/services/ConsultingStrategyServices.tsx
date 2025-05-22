
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Layout, ArrowRight, Lightbulb, Users, Globe, Clock, BookOpen, Zap } from 'lucide-react';
import EnhancedSpaceBackground from '@/components/space/EnhancedSpaceBackground';

const ConsultingStrategyServices = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Consulting Stratégique Tech | Dominiqk Mendy';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Conseils stratégiques pour orienter votre transformation digitale et optimiser votre infrastructure technologique existante.'
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
              <div className="inline-block px-4 py-1.5 bg-purple-800/10 backdrop-blur-sm rounded-full text-purple-400 border border-purple-800/20 text-sm font-medium mb-4">
                <div className="flex items-center gap-2">
                  <Layout className="h-4 w-4" />
                  <span>Consulting</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Consulting <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-500 to-purple-800">Stratégique Tech</span>
              </h1>
              
              <div className="h-1 w-24 bg-gradient-to-r from-purple-800 to-violet-500 mx-auto mb-6"></div>
              
              <p className="text-xl text-gray-200 mb-8">
                Conseils stratégiques pour orienter votre transformation digitale et 
                optimiser votre infrastructure technologique existante avec une vision d'avenir.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-800 to-violet-500 hover:opacity-90 text-white">
                  <Link to="/contact?service=free-consultation" className="flex items-center">
                    Consultation gratuite 30min
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
                <Button size="lg" variant="outline" className="text-white border-white border hover:bg-white/10">
                  <Link to="/expertise">Découvrir notre expertise</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Notre approche de consulting</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-800 to-violet-500 mx-auto mb-6"></div>
              <p className="text-gray-300">
                Un accompagnement personnalisé qui combine expertise technologique, 
                vision stratégique et connaissance approfondie du contexte africain.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: <Lightbulb className="h-10 w-10" />,
                  title: "Vision Stratégique",
                  description: "Définition d'une feuille de route digitale alignée avec vos objectifs business"
                },
                {
                  icon: <Users className="h-10 w-10" />,
                  title: "Approche Collaborative",
                  description: "Co-construction des solutions avec vos équipes pour une meilleure adoption"
                },
                {
                  icon: <Globe className="h-10 w-10" />,
                  title: "Expertise Locale & Internationale",
                  description: "Connaissance des marchés africains combinée aux meilleures pratiques globales"
                },
                {
                  icon: <Clock className="h-10 w-10" />,
                  title: "Résultats Concrets",
                  description: "Focus sur des livrables tangibles et un ROI mesurable à court et moyen terme"
                },
                {
                  icon: <BookOpen className="h-10 w-10" />,
                  title: "Transfert de Compétences",
                  description: "Formation et montée en compétence de vos équipes tout au long de l'accompagnement"
                },
                {
                  icon: <Zap className="h-10 w-10" />,
                  title: "Agilité & Adaptabilité",
                  description: "Approche flexible pour s'ajuster à l'évolution de vos besoins et du marché"
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
                      <div className="rounded-full p-3 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-800 to-violet-500 mb-4">
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
                Nos Services <span className="text-gradient-cosmic">Consulting</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-purple-800 to-violet-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-300">
                Un accompagnement stratégique à chaque étape de votre transformation digitale
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Lightbulb size={40} />,
                  title: "Transformation Digitale",
                  description: "Accompagnement stratégique pour digitaliser vos processus et adapter votre entreprise aux enjeux du numérique.",
                  link: "/services/consulting/digital-transformation",
                  gradient: "from-blue-700 to-cyan-500",
                  highlight: "Évolution optimisée"
                },
                {
                  icon: <Blocks size={40} />,
                  title: "Consultation Expert 30min Gratuite",
                  description: "Première séance de consultation gratuite pour identifier vos défis et opportunités. Suite de l'accompagnement personnalisé selon vos besoins.",
                  link: "/contact?service=free-consultation",
                  gradient: "from-purple-700 to-pink-600",
                  highlight: "Offre spéciale",
                  featured: true
                },
                {
                  icon: <Layout size={40} />,
                  title: "Stratégie Data & IA",
                  description: "Élaboration de feuilles de route pour valoriser vos données et implémenter l'IA dans votre organisation.",
                  link: "/services/consulting/data-strategy",
                  gradient: "from-indigo-700 to-violet-500",
                  highlight: "Intelligence augmentée"
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
              <Button size="lg" className="bg-gradient-to-r from-purple-800 to-violet-500 hover:opacity-90 text-white">
                <Link to="/contact">Planifier une consultation</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-gradient-to-r from-purple-900/40 to-violet-900/40 rounded-2xl overflow-hidden border border-white/10">
              <div className="p-12 md:p-16 relative">
                <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500 opacity-20 blur-3xl rounded-full"></div>
                
                <div className="relative z-10 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Prêt à transformer votre vision en stratégie ?
                  </h2>
                  <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                    Réservez dès maintenant votre consultation gratuite de 30 minutes pour discuter de vos défis et opportunités.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="bg-gradient-to-r from-purple-800 to-violet-500 hover:opacity-90 transition-opacity text-white" asChild>
                      <Link to="/contact?service=free-consultation">
                        Réserver ma consultation gratuite
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="text-white border-white/50 hover:bg-white/10" asChild>
                      <Link to="/expertise">
                        Explorer mon expertise
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

export default ConsultingStrategyServices;
