import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BrainCircuit, ArrowRight, Code, Shield, Cpu, Database, Zap, Target, Users, Sparkles } from 'lucide-react';
import CosmicBackground from '@/components/space/CosmicBackground';
import NeuralNetworkBackground from '@/components/space/NeuralNetworkBackground';

const AISolutions = () => {
  useEffect(() => {
    document.title = 'Solutions IA Personnalisées | Dominiqk Mendy';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Développement de solutions d\'intelligence artificielle sur mesure pour automatiser vos processus, analyser vos données et créer des expériences clients uniques.'
      );
    }
    
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <Navbar />
      
      {/* Cosmic background */}
      <CosmicBackground />
      <NeuralNetworkBackground />
      
      <main className="flex-grow relative z-10">
        {/* Hero Section */}
        <section className="py-20 md:py-28 relative">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="max-w-7xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div variants={itemVariants} className="text-left space-y-8">
                  <div className="space-y-4">
                    <Badge className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border-indigo-500/30 hover:border-indigo-400/50 transition-colors">
                      <BrainCircuit className="w-4 h-4 mr-2" />
                      Intelligence Artificielle
                    </Badge>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      <span className="text-white">Solutions</span> <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">IA</span>
                      <br />
                      <span className="text-white">Personnalisées</span>
                    </h1>
                    
                    <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                      Développement de solutions d'intelligence artificielle sur mesure pour automatiser vos processus, 
                      analyser vos données et créer des expériences clients uniques adaptées aux marchés africains.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg" asChild>
                      <Link to="/contact">
                        <Sparkles className="mr-2 h-5 w-5" />
                        Demander un devis gratuit
                      </Link>
                    </Button>
                    
                    <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm" asChild>
                      <Link to="/portfolio">
                        Voir nos réalisations
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>

                {/* Right Visual */}
                <motion.div variants={itemVariants} className="relative">
                  <div className="relative">
                    {/* Central orb */}
                    <div className="relative mx-auto w-80 h-80 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-60 h-60 rounded-full bg-gradient-to-br from-indigo-600/30 to-purple-600/30 flex items-center justify-center"
                      >
                        <BrainCircuit className="w-24 h-24 text-white" />
                      </motion.div>
                    </div>
                    
                    {/* Floating stats */}
                    {[
                      { icon: Target, label: "98% Précision", position: "top-4 left-4" },
                      { icon: Users, label: "50+ Clients", position: "top-4 right-4" },
                      { icon: Zap, label: "24/7 Support", position: "bottom-4 left-4" },
                      { icon: Database, label: "Big Data", position: "bottom-4 right-4" }
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className={`absolute ${stat.position} bg-black/40 backdrop-blur-md border border-white/20 rounded-xl p-4 min-w-[120px]`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg">
                            <stat.icon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-white text-sm font-medium">{stat.label}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-16">
                <motion.div variants={itemVariants}>
                  <Badge className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-500/30 mb-4">
                    Avantages Concurrentiels
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Pourquoi choisir nos <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">solutions IA</span>
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Nos solutions d'intelligence artificielle sont conçues pour répondre aux défis spécifiques 
                    des entreprises africaines et internationales, en offrant des résultats concrets et mesurables.
                  </p>
                </motion.div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <BrainCircuit className="h-8 w-8" />,
                    title: "IA Adaptative",
                    description: "Nos modèles s'adaptent automatiquement à vos données et à votre contexte d'entreprise",
                    color: "from-indigo-500 to-purple-500"
                  },
                  {
                    icon: <Code className="h-8 w-8" />,
                    title: "Intégration Transparente",
                    description: "Solutions conçues pour s'intégrer parfaitement à votre infrastructure existante",
                    color: "from-blue-500 to-cyan-500"
                  },
                  {
                    icon: <Shield className="h-8 w-8" />,
                    title: "Sécurité Maximale",
                    description: "Protection des données et respect des normes RGPD et standards internationaux",
                    color: "from-emerald-500 to-teal-500"
                  },
                  {
                    icon: <Cpu className="h-8 w-8" />,
                    title: "Performance Optimisée",
                    description: "Modèles optimisés pour fonctionner efficacement même avec des ressources limitées",
                    color: "from-orange-500 to-red-500"
                  },
                  {
                    icon: <Database className="h-8 w-8" />,
                    title: "Adaptation Locale",
                    description: "Solutions spécialement calibrées pour les contextes et marchés africains",
                    color: "from-pink-500 to-rose-500"
                  },
                  {
                    icon: <ArrowRight className="h-8 w-8" />,
                    title: "Évolutivité",
                    description: "Capacité à évoluer et à s'adapter à mesure que votre entreprise se développe",
                    color: "from-violet-500 to-purple-500"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Card className="h-full bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden">
                      <CardHeader className="relative">
                        <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-4 w-fit`}>
                          {feature.icon}
                        </div>
                        <CardTitle className="text-xl text-white group-hover:text-indigo-300 transition-colors">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="max-w-6xl mx-auto"
            >
              <div className="text-center mb-16">
                <motion.div variants={itemVariants}>
                  <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30 mb-4">
                    Nos Expertises
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Solutions <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">IA</span> Innovantes
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Des solutions d'intelligence artificielle innovantes pour propulser votre entreprise vers de nouveaux sommets
                  </p>
                </motion.div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <BrainCircuit className="w-12 h-12" />,
                    title: "Développement IA sur Mesure",
                    description: "Création d'algorithmes et modèles d'IA entièrement personnalisés pour répondre à vos défis business spécifiques.",
                    gradient: "from-indigo-600 to-purple-500",
                    link: "/services/ai/custom-development"
                  },
                  {
                    icon: <Cpu className="w-12 h-12" />,
                    title: "Chatbots & Assistants IA",
                    description: "Conception d'assistants virtuels intelligents pour améliorer votre service client et automatiser les interactions utilisateurs.",
                    gradient: "from-blue-600 to-cyan-500",
                    link: "/services/ai/chatbots"
                  },
                  {
                    icon: <Database className="w-12 h-12" />,
                    title: "Machine Learning & Prédiction",
                    description: "Développement de modèles prédictifs pour anticiper les tendances du marché et optimiser vos prises de décision.",
                    gradient: "from-emerald-600 to-teal-500",
                    link: "/services/ai/machine-learning"
                  }
                ].map((solution, index) => (
                  <motion.div
                    key={solution.title}
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    className="group"
                  >
                    <Card className="h-full bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                      
                      <CardHeader className="relative z-10">
                        <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${solution.gradient} mb-6 w-fit group-hover:scale-110 transition-transform`}>
                          {solution.icon}
                        </div>
                        <CardTitle className="text-xl text-white group-hover:text-indigo-300 transition-colors mb-4">
                          {solution.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="relative z-10">
                        <p className="text-gray-300 leading-relaxed mb-6">{solution.description}</p>
                        <Button variant="ghost" className="p-0 text-indigo-400 hover:text-indigo-300 hover:bg-transparent group" asChild>
                          <Link to={solution.link} className="flex items-center">
                            En savoir plus
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              <motion.div variants={itemVariants} className="text-center mt-12">
                <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg" asChild>
                  <Link to="/contact">
                    <BrainCircuit className="mr-2 h-5 w-5" />
                    Discuter de votre projet IA
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="max-w-5xl mx-auto relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
                {/* Background effects */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500 opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
                
                <div className="relative z-10 p-12 md:p-16 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Prêt à révolutionner votre entreprise avec l'<span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">IA</span> ?
                  </h2>
                  <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                    Contactez-moi pour discuter de vos besoins et obtenir une proposition adaptée à votre contexte et à vos objectifs.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg" asChild>
                      <Link to="/contact">
                        <Sparkles className="mr-2 h-5 w-5" />
                        Discuter avec un expert
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm" asChild>
                      <Link to="/start-project">
                        Démarrer un projet
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AISolutions;
