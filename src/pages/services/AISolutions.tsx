import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BrainCircuit, ArrowRight, Code, Shield, Cpu, Database } from 'lucide-react';
import CosmicBackground from '@/components/space/CosmicBackground';

const AISolutions = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Solutions IA Personnalisées | Dominiqk Mendy';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Développement de solutions d\'intelligence artificielle sur mesure pour automatiser vos processus, analyser vos données et créer des expériences clients uniques.'
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
      
      {/* Cosmic background */}
      <CosmicBackground />
      
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
              <div className="inline-block px-4 py-1.5 bg-portfolio-purple/10 backdrop-blur-sm rounded-full text-portfolio-purple border border-portfolio-purple/20 text-sm font-medium mb-4">
                <div className="flex items-center gap-2">
                  <BrainCircuit className="h-4 w-4" />
                  <span>Intelligence Artificielle</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Solutions <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600">IA Personnalisées</span>
              </h1>
              
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
              
              <p className="text-xl text-gray-200 mb-8">
                Développement de solutions d'intelligence artificielle sur mesure pour automatiser vos processus, 
                analyser vos données et créer des expériences clients uniques adaptées aux marchés africains.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white">
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
              <h2 className="text-3xl font-bold mb-4 text-white">Pourquoi choisir nos solutions IA</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
              <p className="text-gray-300">
                Nos solutions d'intelligence artificielle sont conçues pour répondre aux défis spécifiques 
                des entreprises africaines et internationales, en offrant des résultats concrets et mesurables.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: <BrainCircuit className="h-10 w-10" />,
                  title: "IA Adaptative",
                  description: "Nos modèles s'adaptent automatiquement à vos données et à votre contexte d'entreprise"
                },
                {
                  icon: <Code className="h-10 w-10" />,
                  title: "Intégration Transparente",
                  description: "Solutions conçues pour s'intégrer parfaitement à votre infrastructure existante"
                },
                {
                  icon: <Shield className="h-10 w-10" />,
                  title: "Sécurité Maximale",
                  description: "Protection des données et respect des normes RGPD et standards internationaux"
                },
                {
                  icon: <Cpu className="h-10 w-10" />,
                  title: "Performance Optimisée",
                  description: "Modèles optimisés pour fonctionner efficacement même avec des ressources limitées"
                },
                {
                  icon: <Database className="h-10 w-10" />,
                  title: "Adaptation Locale",
                  description: "Solutions spécialement calibrées pour les contextes et marchés africains"
                },
                {
                  icon: <ArrowRight className="h-10 w-10" />,
                  title: "Évolutivité",
                  description: "Capacité à évoluer et à s'adapter à mesure que votre entreprise se développe"
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
                      <div className="rounded-full p-3 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-500 mb-4">
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

        {/* Solutions Section */}
        <section className="py-16 backdrop-blur-sm bg-black/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Nos Solutions <span className="text-gradient-cosmic">IA</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-300">
                Des solutions d'intelligence artificielle innovantes pour propulser votre entreprise vers de nouveaux sommets
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <BrainCircuit size={40} />,
                  title: "Développement IA sur Mesure",
                  description: "Création d'algorithmes et modèles d'IA entièrement personnalisés pour répondre à vos défis business spécifiques.",
                  link: "/services/ai/custom-development",
                  gradient: "from-indigo-600 to-purple-500"
                },
                {
                  icon: <Cpu size={40} />,
                  title: "Chatbots & Assistants IA",
                  description: "Conception d'assistants virtuels intelligents pour améliorer votre service client et automatiser les interactions utilisateurs.",
                  link: "/services/ai/chatbots",
                  gradient: "from-blue-600 to-sky-400"
                },
                {
                  icon: <Database size={40} />,
                  title: "Machine Learning & Prédiction",
                  description: "Développement de modèles prédictifs pour anticiper les tendances du marché et optimiser vos prises de décision.",
                  link: "/services/ai/machine-learning",
                  gradient: "from-green-600 to-teal-500"
                }
              ].map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full border-none overflow-hidden cosmic-hover relative bg-black/40 backdrop-blur-md">
                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                    <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-white/30 group-hover:shadow-[0_0_15px_rgba(155,135,245,0.3)] transition-all duration-300"></div>
                    
                    <div className="relative z-10 p-6">
                      <div className={`text-white bg-gradient-to-br ${solution.gradient} p-3 rounded-xl w-16 h-16 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {solution.icon}
                      </div>
                      <h3 className="mt-4 text-xl text-white font-bold mb-3">{solution.title}</h3>
                      <p className="text-gray-300 mb-6">{solution.description}</p>
                      <Button variant="ghost" className="p-0 text-white hover:text-portfolio-blue hover:bg-transparent group" asChild>
                        <Link to={solution.link} className="flex items-center">
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
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white">
                <Link to="/contact">Discuter de votre projet IA</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-900/40 to-purple-900/40 rounded-2xl overflow-hidden border border-white/10">
              <div className="p-12 md:p-16 relative">
                <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500 opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
                
                <div className="relative z-10 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Prêt à révolutionner votre entreprise avec l'IA ?
                  </h2>
                  <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                    Contactez-moi pour discuter de vos besoins et obtenir une proposition adaptée à votre contexte et à vos objectifs.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 transition-opacity text-white" asChild>
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

export default AISolutions;
