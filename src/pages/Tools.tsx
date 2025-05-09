
import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Database, Server, CircuitBoard, Cpu, Zap, Atom, Loader } from 'lucide-react';

const ToolsPage = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Outils IA Gratuits | Dominique Mendy | Innovation IA Sénégal';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Outils IA gratuits par Dominique Mendy: générateurs de contenu, analyseurs SEO, planificateurs de contenu et autres solutions automatisées pour entrepreneurs africains.'
      );
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Simulated real-time stats
  const [toolsStats, setToolsStats] = useState({
    activeUsers: 347,
    apiRequests: 1843,
    modelAccuracy: 97.4,
    availableTools: 8
  });

  // Simulate real-time data updates
  useEffect(() => {
    const statsInterval = setInterval(() => {
      setToolsStats(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 3) - 1, // -1, 0, or +1
        apiRequests: prev.apiRequests + Math.floor(Math.random() * 10) + 3,
        modelAccuracy: parseFloat((prev.modelAccuracy + (Math.random() * 0.2 - 0.1)).toFixed(1)),
        availableTools: prev.availableTools
      }));
    }, 3000);
    
    return () => clearInterval(statsInterval);
  }, []);

  // Mock tools for the placeholder
  const futureTool = [
    {
      id: 1,
      name: "IA Content Generator",
      description: "Générateur de contenu optimisé SEO avec adaptation aux spécificités culturelles africaines.",
      icon: <Atom className="h-8 w-8 text-portfolio-purple" />,
      tags: ["Contenu", "SEO", "Marketing"],
      status: "Coming Soon"
    },
    {
      id: 2,
      name: "Market Analyzer Pro",
      description: "Analyseur de marché alimenté par l'IA pour identifier les tendances et opportunités sur les marchés africains.",
      icon: <Server className="h-8 w-8 text-portfolio-blue" />,
      tags: ["Analyse", "Business", "Intelligence"],
      status: "Coming Soon"
    },
    {
      id: 3,
      name: "AfriLang NLP",
      description: "Traitement du langage naturel optimisé pour les langues africaines et dialectes locaux.",
      icon: <Database className="h-8 w-8 text-portfolio-pink" />,
      tags: ["NLP", "Langues", "Localisation"],
      status: "Coming Soon"
    },
    {
      id: 4,
      name: "Social Media Scheduler",
      description: "Planificateur de contenu pour les réseaux sociaux avec suggestions d'optimisation basées sur l'IA.",
      icon: <CircuitBoard className="h-8 w-8 text-portfolio-purple" />,
      tags: ["Social Media", "Planning", "Automation"],
      status: "Coming Soon"
    },
    {
      id: 5,
      name: "E-Commerce Optimizer",
      description: "Analyseur et optimiseur de parcours client pour boutiques en ligne et marketplaces africaines.",
      icon: <Cpu className="h-8 w-8 text-portfolio-blue" />,
      tags: ["E-Commerce", "UX", "Conversion"],
      status: "Coming Soon"
    },
    {
      id: 6,
      name: "Mobile Payment Integrator",
      description: "Solution d'intégration simplifiée pour les systèmes de paiement mobile africains.",
      icon: <Zap className="h-8 w-8 text-portfolio-pink" />,
      tags: ["Fintech", "Mobile Money", "Integration"],
      status: "Coming Soon"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Navbar />
      
      <main className="flex-grow bg-portfolio-darkblue text-white">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(30)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute rounded-full bg-portfolio-blue"
                  style={{
                    width: `${Math.random() * 4 + 1}px`,
                    height: `${Math.random() * 4 + 1}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `pulse ${Math.random() * 4 + 3}s infinite`,
                    opacity: Math.random() * 0.7 + 0.3
                  }}
                />
              ))}
            </div>
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-portfolio-purple opacity-10 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 bg-portfolio-pink opacity-10 rounded-full blur-[80px]" />
          </div>
          
          {/* Grid overlay */}
          <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none opacity-5">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-full w-px bg-gradient-to-b from-transparent via-portfolio-blue to-transparent"></div>
            ))}
            {[...Array(12)].map((_, i) => (
              <div key={i} className="absolute h-px w-full bg-gradient-to-r from-transparent via-portfolio-blue to-transparent" style={{ top: `${i * 8.33}%` }}></div>
            ))}
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-6 relative"
              >
                <span className="relative inline-block">
                  Outils
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-portfolio-blue to-transparent"></span>
                </span>
                {" "}
                <span className="text-gradient">IA Gratuits</span>
              </motion.h1>
              
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-1 w-24 mx-auto mb-8 bg-gradient-to-r from-portfolio-purple via-portfolio-blue to-portfolio-pink"
              />
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
              >
                Suite d'outils propulsés par l'intelligence artificielle pour entrepreneurs et professionnels africains
              </motion.p>
            </div>
          </div>
          
          {/* Real-time stats display */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="container mx-auto px-4 relative z-10 mt-8"
          >
            <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 border border-gray-800/40 backdrop-blur-sm rounded-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-portfolio-purple to-transparent"></div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-400">USERS</span>
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                </div>
                <div className="text-2xl font-bold text-gradient">{toolsStats.activeUsers}</div>
                <div className="text-xs text-gray-500">utilisateurs actifs</div>
              </div>
              
              <div className="p-4 border border-gray-800/40 backdrop-blur-sm rounded-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-portfolio-blue to-transparent"></div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-400">API</span>
                  <span className="h-2 w-2 rounded-full bg-portfolio-blue animate-pulse"></span>
                </div>
                <div className="text-2xl font-bold text-gradient">{toolsStats.apiRequests}</div>
                <div className="text-xs text-gray-500">requêtes aujourd'hui</div>
              </div>
              
              <div className="p-4 border border-gray-800/40 backdrop-blur-sm rounded-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-portfolio-pink to-transparent"></div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-400">PRECISION</span>
                  <span className="h-2 w-2 rounded-full bg-portfolio-pink animate-pulse"></span>
                </div>
                <div className="text-2xl font-bold text-gradient">{toolsStats.modelAccuracy}%</div>
                <div className="text-xs text-gray-500">précision des modèles</div>
              </div>
              
              <div className="p-4 border border-gray-800/40 backdrop-blur-sm rounded-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-400">OUTILS</span>
                  <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse"></span>
                </div>
                <div className="text-2xl font-bold text-gradient">{toolsStats.availableTools}</div>
                <div className="text-xs text-gray-500">solutions disponibles</div>
              </div>
            </div>
          </motion.div>
        </section>
        
        {/* Coming Soon Section */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Coming Soon Notice */}
              <Card className="mb-12 border-gradient border-gradient-strong backdrop-blur-sm bg-black/40 p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4">Nos outils sont en développement</h2>
                    <p className="text-gray-300 mb-6">
                      Notre suite d'outils IA gratuits sera bientôt disponible pour vous aider à optimiser votre présence en ligne, automatiser vos tâches marketing et générer du contenu engageant adapté au marché africain.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                        S'inscrire à la bêta
                      </Button>
                      <Button variant="outline" className="border-gray-700 hover:border-white">
                        En savoir plus
                      </Button>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="h-32 w-32 flex items-center justify-center border-2 border-portfolio-purple rounded-full relative">
                      <div className="absolute inset-2 border border-portfolio-blue rounded-full animate-pulse opacity-75"></div>
                      <div className="absolute inset-4 border border-portfolio-pink rounded-full animate-spin opacity-50" style={{ animationDuration: '10s' }}></div>
                      <Loader className="h-10 w-10 text-white animate-spin" style={{ animationDuration: '3s' }} />
                    </div>
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-primary opacity-25 rounded-full blur-xl"></div>
                  </div>
                </div>
              </Card>
              
              {/* Tool Cards */}
              <h2 className="text-2xl font-bold mb-8 flex items-center">
                <Server className="h-5 w-5 text-portfolio-blue mr-2" />
                <span>Outils à venir</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {futureTool.map((tool, index) => (
                  <motion.div 
                    key={tool.id}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    className="border border-gray-800/40 rounded-lg backdrop-blur-sm relative overflow-hidden"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(155, 135, 245, 0.15)" }}
                  >
                    {/* Tech decoration line top */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-portfolio-purple to-transparent"></div>
                    
                    <div className="p-6 relative">
                      <div className="absolute top-3 right-3 px-2 py-1 text-xs rounded-full border border-gray-700 bg-black/30 text-gray-400 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-portfolio-blue animate-pulse mr-1.5"></span>
                        {tool.status}
                      </div>
                      
                      <div className="mb-4 p-3 bg-black/30 rounded-lg inline-block">
                        {tool.icon}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3">{tool.name}</h3>
                      <p className="text-gray-400 mb-4 text-sm">{tool.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {tool.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="text-xs px-2 py-1 rounded-full bg-gray-800/50 text-gray-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <Button 
                        disabled 
                        className="w-full bg-black/30 border border-gray-700 text-gray-400 hover:border-gray-600"
                      >
                        Bientôt disponible
                      </Button>
                    </div>
                    
                    {/* Tech background pattern */}
                    <div className="absolute bottom-2 right-2 w-16 h-16 opacity-5">
                      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="32" cy="32" r="16" stroke="currentColor" strokeWidth="1" />
                        <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="0.5" />
                        <circle cx="32" cy="32" r="32" stroke="currentColor" strokeWidth="0.25" />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-gradient-to-b from-portfolio-darkblue to-black/90 relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-portfolio-purple rounded-full blur-[150px]"></div>
            <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 bg-portfolio-pink rounded-full blur-[120px]"></div>
          </div>
          
          {/* Grid overlay */}
          <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none opacity-5">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-full w-px bg-gradient-to-b from-transparent via-portfolio-blue to-transparent"></div>
            ))}
            {[...Array(12)].map((_, i) => (
              <div key={i} className="absolute h-px w-full bg-gradient-to-r from-transparent via-portfolio-blue to-transparent" style={{ top: `${i * 8.33}%` }}></div>
            ))}
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-4"
              >
                Soyez le premier à découvrir nos outils
              </motion.h2>
              
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                className="h-1 w-24 mx-auto mb-6 bg-gradient-to-r from-portfolio-purple via-portfolio-blue to-portfolio-pink"
              />
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 mb-8"
              >
                Inscrivez-vous à notre liste d'attente pour être informé du lancement de nos outils et bénéficier d'un accès anticipé à notre plateforme.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input 
                  type="email"
                  placeholder="Votre adresse email"
                  className="px-4 py-3 bg-black/50 border border-gray-700 rounded-lg flex-1 text-white"
                />
                <Button className="bg-gradient-primary hover:opacity-90">
                  S'inscrire
                </Button>
              </motion.div>
              
              {/* Tech decoration */}
              <div className="flex justify-center space-x-8 mt-12">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div 
                      className="w-1 h-12 bg-gradient-to-b from-transparent via-portfolio-blue to-transparent opacity-50"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ToolsPage;
