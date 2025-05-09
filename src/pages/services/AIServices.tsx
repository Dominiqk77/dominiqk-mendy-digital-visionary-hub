
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BrainCircuit, 
  Sparkles, 
  Bot, 
  Database, 
  LineChart, 
  Eye, 
  Code, 
  Zap, 
  Star, 
  BarChart, 
  User, 
  Users, 
  Building, 
  AudioWaveform,
  ArrowRight,
  CircleDashed,
  MessageSquare
} from 'lucide-react';

// Neural Network Animation
const NeuralNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationFrameId = useRef<number>();
  
  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current?.parentElement) {
        const { width, height } = canvasRef.current.parentElement.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
    
    window.addEventListener('resize', updateDimensions);
    updateDimensions();
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  
  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    
    // Create nodes
    const layerSizes = [6, 10, 8, 6];
    const totalLayers = layerSizes.length;
    const layerSpacing = dimensions.width / (totalLayers + 1);
    const layerYOffset = dimensions.height * 0.2;
    const layerHeight = dimensions.height * 0.6;
    
    const nodes: { x: number, y: number, layer: number, index: number }[] = [];
    
    layerSizes.forEach((size, layerIdx) => {
      const nodeSpacing = layerHeight / (size + 1);
      
      for (let i = 0; i < size; i++) {
        nodes.push({
          x: layerSpacing * (layerIdx + 1),
          y: layerYOffset + nodeSpacing * (i + 1),
          layer: layerIdx,
          index: i
        });
      }
    });
    
    // Animation loop
    const connections = [];
    for (let i = 0; i < nodes.length; i++) {
      const node1 = nodes[i];
      for (let j = 0; j < nodes.length; j++) {
        const node2 = nodes[j];
        if (node2.layer === node1.layer + 1) {
          connections.push({
            from: node1,
            to: node2,
            progress: Math.random(),
            speed: 0.003 + Math.random() * 0.003,
            opacity: 0.1 + Math.random() * 0.2,
            color: Math.random() > 0.8 ? '#845ADF' : '#6366F1'
          });
        }
      }
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections with moving data
      connections.forEach(conn => {
        const gradient = ctx.createLinearGradient(
          conn.from.x, conn.from.y, conn.to.x, conn.to.y
        );
        gradient.addColorStop(0, 'rgba(99, 102, 241, 0)');
        gradient.addColorStop(conn.progress, conn.color);
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
        
        ctx.beginPath();
        ctx.moveTo(conn.from.x, conn.from.y);
        ctx.lineTo(conn.to.x, conn.to.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Update data packet movement
        conn.progress += conn.speed;
        if (conn.progress > 1) {
          conn.progress = 0;
          conn.speed = 0.003 + Math.random() * 0.003;
          conn.color = Math.random() > 0.8 ? '#845ADF' : '#6366F1';
        }
      });
      
      // Draw nodes
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2, false);
        ctx.fillStyle = node.layer === 0 || node.layer === totalLayers - 1 ? 
          'rgba(132, 90, 223, 0.8)' : 
          'rgba(99, 102, 241, 0.6)';
        ctx.fill();
      });
      
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [dimensions]);
  
  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20" />;
};

const AIServices = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Services IA | Dominiqk Mendy | Solutions Intelligence Artificielle';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Découvrez les solutions d\'Intelligence Artificielle sur mesure proposées par Dominiqk Mendy: modèles prédictifs, chatbots, computer vision et plus pour entreprises africaines.'
      );
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Sample AI stats that change over time
  const [aiStats, setAiStats] = useState({
    accuracy: 97.8,
    efficiency: 99.3,
    response: 149, // ms
    uptime: 99.99
  });

  useEffect(() => {
    // Update stats slightly every 3 seconds to simulate real-time data
    const interval = setInterval(() => {
      setAiStats(prev => ({
        accuracy: Number((prev.accuracy + (Math.random() * 0.4 - 0.2)).toFixed(1)),
        efficiency: Number((prev.efficiency + (Math.random() * 0.2 - 0.1)).toFixed(1)),
        response: Math.floor(prev.response + (Math.random() * 6 - 3)),
        uptime: Number((prev.uptime + (Math.random() * 0.02 - 0.01)).toFixed(2))
      }));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const aiServices = [
    {
      title: "Development IA sur Mesure",
      description: "Création de solutions IA adaptées à vos défis spécifiques, de la conception à l'implémentation.",
      icon: <BrainCircuit className="h-10 w-10 text-indigo-400" />,
      features: [
        "Analyse des besoins spécifiques",
        "Développement d'algorithmes sur mesure",
        "Intégration avec vos systèmes existants",
        "Formation de votre équipe"
      ],
      color: "from-indigo-600 to-purple-600",
      badge: "Populaire"
    },
    {
      title: "Chatbots & Assistants IA",
      description: "Automatisez vos interactions client avec des assistants conversationnels intelligents et adaptés au contexte africain.",
      icon: <Bot className="h-10 w-10 text-indigo-400" />,
      features: [
        "Support multilingue (français, wolof, etc.)",
        "Intégration site web et réseaux sociaux",
        "Adaptabilité contextuelle",
        "Analyse des conversations"
      ],
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Machine Learning & Prédiction",
      description: "Exploitez vos données pour anticiper les tendances et optimiser vos décisions business.",
      icon: <Database className="h-10 w-10 text-indigo-400" />,
      features: [
        "Modèles prédictifs personnalisés",
        "Analyse de données structurées/non-structurées",
        "Détection d'anomalies",
        "Recommandations et insights"
      ],
      color: "from-violet-600 to-indigo-600",
      badge: "Avancé"
    },
    {
      title: "Vision par Ordinateur",
      description: "Donnez à vos systèmes la capacité de voir et d'interpréter les images et vidéos.",
      icon: <Eye className="h-10 w-10 text-indigo-400" />,
      features: [
        "Reconnaissance d'objets et de personnes",
        "Classification d'images",
        "Analyse vidéo en temps réel",
        "Sécurité et surveillance intelligente"
      ],
      color: "from-fuchsia-600 to-pink-600"
    },
    {
      title: "Intelligence Artificielle Générative",
      description: "Créez automatiquement du contenu de qualité avec les dernières avancées en IA générative.",
      icon: <Sparkles className="h-10 w-10 text-indigo-400" />,
      features: [
        "Génération de texte contextuel",
        "Création d'images sur mesure",
        "Adaptation au style de votre marque",
        "Contenu multilingue"
      ],
      color: "from-amber-600 to-orange-600"
    },
    {
      title: "Automatisation IA des Processus",
      description: "Optimisez vos opérations grâce à l'automatisation intelligente pilotée par l'IA.",
      icon: <Zap className="h-10 w-10 text-indigo-400" />,
      features: [
        "Workflow intelligent",
        "Traitement automatisé des documents",
        "Extraction de données non structurées",
        "Optimisation des ressources"
      ],
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "Traitement du Langage Naturel",
      description: "Analysez et comprenez le langage humain pour extraire des insights pertinents.",
      icon: <MessageSquare className="h-10 w-10 text-indigo-400" />,
      features: [
        "Analyse de sentiment multilingue",
        "Classification de texte automatique",
        "Extraction d'entités et de relations",
        "Traitement des langues africaines"
      ],
      color: "from-sky-600 to-blue-600",
      badge: "Spécialité"
    },
    {
      title: "IA pour Analyse Prédictive",
      description: "Anticipez les tendances futures et prenez des décisions data-driven pour votre business.",
      icon: <LineChart className="h-10 w-10 text-indigo-400" />,
      features: [
        "Prévision des ventes et de la demande",
        "Segmentation client avancée",
        "Détection de fraude",
        "Maintenance prédictive"
      ],
      color: "from-purple-600 to-indigo-600"
    }
  ];

  const caseStudies = [
    {
      title: "Chatbot FinTech multilingue",
      client: "Banque Panafricaine",
      result: "Réduction de 78% du temps de traitement des demandes clients",
      icon: <Building className="h-6 w-6" />
    },
    {
      title: "Système de prédiction agricole",
      client: "Coopérative Agricole",
      result: "Augmentation de 32% des rendements grâce aux recommandations IA",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Reconnaissance vocale en langues locales",
      client: "Service Public National",
      result: "Accessibilité améliorée pour 3M+ de citoyens",
      icon: <AudioWaveform className="h-6 w-6" />
    }
  ];

  const testimonials = [
    {
      quote: "L'IA développée par Dominiqk a révolutionné notre approche client et optimisé nos processus internes de façon spectaculaire.",
      author: "Amadou N.",
      position: "CTO, Entreprise E-commerce",
      avatar: <User className="h-10 w-10" />
    },
    {
      quote: "La solution de prédiction que Dominiqk a conçue pour nous est parfaitement adaptée au contexte africain et a dépassé nos attentes.",
      author: "Marie K.",
      position: "Directrice Innovation, Secteur Agricole",
      avatar: <User className="h-10 w-10" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="fixed inset-0 bg-black z-[-2]"></div>
      <div className="fixed inset-0 tech-grid z-[-1] opacity-20"></div>
      
      <Navbar />
      
      <main className="flex-grow pt-20 relative">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <NeuralNetwork />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-16 h-16 mb-6"
                >
                  <div className="absolute inset-0 bg-indigo-600/20 rounded-full animate-ping"></div>
                  <div className="relative flex items-center justify-center w-full h-full bg-indigo-600/30 backdrop-blur-sm rounded-full border border-indigo-500/50">
                    <BrainCircuit className="h-8 w-8 text-indigo-400" />
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="mb-6"
                >
                  <Badge className="mb-4 border-indigo-500/30 text-indigo-400 bg-indigo-950/30">Intelligence Artificielle</Badge>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    <span className="text-gradient-cosmic">Solutions IA</span> pour l'Afrique de demain
                  </h1>
                </motion.div>
                
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-xl text-gray-300 mb-8"
                >
                  Des solutions d'intelligence artificielle innovantes et adaptées au contexte africain pour transformer votre business et créer un impact durable.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button 
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white"
                    size="lg"
                    asChild
                  >
                    <Link to="/start-project" className="flex items-center gap-2">
                      <span>Démarrer un projet IA</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-white/10 text-white hover:bg-white/5"
                    asChild
                  >
                    <Link to="/contact">Discuter avec un expert</Link>
                  </Button>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ delay: 0.4, duration: 0.8 }}
                className="md:w-1/2 flex justify-center"
              >
                <div className="relative w-full h-[400px] md:h-[500px]">
                  <div className="absolute inset-0 bg-indigo-600 rounded-full filter blur-[100px] opacity-30"></div>
                  
                  <div className="relative h-full w-full flex items-center justify-center">
                    <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative">
                      <div className="absolute inset-0 rounded-full border-4 border-dashed border-indigo-500/30 animate-[spin_40s_linear_infinite]"></div>
                      
                      {/* AI Stats Orbs */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="cosmic-card p-3 rounded-xl">
                          <div className="flex items-center gap-2">
                            <CircleDashed className="h-5 w-5 text-indigo-400 animate-pulse" />
                            <div>
                              <div className="text-xs text-gray-400">Précision IA</div>
                              <div className="text-white font-bold">{aiStats.accuracy}%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                        <div className="cosmic-card p-3 rounded-xl">
                          <div className="flex items-center gap-2">
                            <Zap className="h-5 w-5 text-yellow-400" />
                            <div>
                              <div className="text-xs text-gray-400">Efficacité</div>
                              <div className="text-white font-bold">{aiStats.efficiency}%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="cosmic-card p-3 rounded-xl">
                          <div className="flex items-center gap-2">
                            <LineChart className="h-5 w-5 text-green-400" />
                            <div>
                              <div className="text-xs text-gray-400">Temps réponse</div>
                              <div className="text-white font-bold">{aiStats.response} ms</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                        <div className="cosmic-card p-3 rounded-xl">
                          <div className="flex items-center gap-2">
                            <Database className="h-5 w-5 text-blue-400" />
                            <div>
                              <div className="text-xs text-gray-400">Disponibilité</div>
                              <div className="text-white font-bold">{aiStats.uptime}%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Central Brain Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-32 h-32">
                          <div className="absolute inset-0 bg-indigo-600/20 rounded-full animate-ping"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full opacity-40"></div>
                          <div className="relative flex items-center justify-center w-full h-full bg-indigo-900/70 backdrop-blur-sm rounded-full border border-indigo-500">
                            <BrainCircuit className="h-16 w-16 text-indigo-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* AI Services Grid */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute top-0 left-0 w-1 h-40 bg-gradient-to-b from-indigo-500/0 via-indigo-500/30 to-indigo-500/0"></div>
          <div className="absolute bottom-0 right-0 w-1 h-40 bg-gradient-to-b from-indigo-500/0 via-indigo-500/30 to-indigo-500/0"></div>
          
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 border-indigo-500/30 text-indigo-400 bg-indigo-950/30">Nos services</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Des solutions IA <span className="text-gradient-cosmic">adaptées à vos besoins</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Découvrez notre gamme complète de services d'intelligence artificielle conçus pour relever vos défis business spécifiques.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {aiServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="cosmic-card rounded-xl overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-lg bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center">
                        {service.icon}
                      </div>
                      {service.badge && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs px-2 py-0.5 rounded">
                          {service.badge}
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                    <p className="text-gray-300 mb-6 h-[80px]">{service.description}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="flex-shrink-0 mr-2 mt-1">
                            <div className="w-4 h-4 rounded-full bg-indigo-900/40 border border-indigo-500/50 flex items-center justify-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                            </div>
                          </div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div>
                      <Button 
                        className={`w-full bg-gradient-to-r ${service.color} text-white hover:opacity-90`}
                        asChild
                      >
                        <Link to="/start-project" className="flex items-center justify-center gap-2">
                          <span>En savoir plus</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Case Studies Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-indigo-950/20 to-black/0"></div>
          
          <div className="container mx-auto px-4 max-w-6xl relative">
            <div className="flex flex-col lg:flex-row gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:w-1/2"
              >
                <Badge className="mb-4 border-indigo-500/30 text-indigo-400 bg-indigo-950/30">Études de cas</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  <span className="text-gradient-cosmic">Résultats</span> concrets et impacts mesurables
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Découvrez comment nos solutions d'IA ont transformé les opérations de nos clients et créé une valeur mesurable pour leur activité.
                </p>
                
                <div className="space-y-6">
                  {caseStudies.map((study, idx) => (
                    <div key={idx} className="cosmic-card rounded-lg p-5">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center mr-4">
                          {study.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{study.title}</h3>
                          <p className="text-sm text-gray-400">{study.client}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        <p className="text-green-400 font-medium">{study.result}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <Button variant="outline" className="border-white/10 text-white hover:bg-white/5" asChild>
                    <Link to="/portfolio">
                      Voir tous nos projets IA <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:w-1/2"
              >
                <div className="cosmic-card rounded-xl p-8">
                  <div className="mb-6 flex items-center">
                    <Star className="h-8 w-8 text-yellow-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Témoignages clients</h3>
                  </div>
                  
                  <div className="space-y-8">
                    {testimonials.map((testimonial, idx) => (
                      <div key={idx} className="cosmic-card bg-white/5 p-6 rounded-lg">
                        <div className="mb-4">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="inline-block h-4 w-4 text-yellow-400 mr-1" />
                          ))}
                        </div>
                        <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center mr-3">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <p className="font-semibold text-white">{testimonial.author}</p>
                            <p className="text-sm text-gray-400">{testimonial.position}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Button variant="ghost" className="text-indigo-400 hover:text-indigo-300 hover:bg-transparent" asChild>
                      <Link to="/testimonials">Voir plus de témoignages <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 md:py-20 relative">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <Badge className="mb-4 border-indigo-500/30 text-indigo-400 bg-indigo-950/30">FAQ</Badge>
              <h2 className="text-3xl font-bold text-white mb-6">Questions fréquentes sur nos services IA</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
            </div>
            
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="cosmic-card rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-3 text-white">Quelle est la différence entre l'IA générative et le machine learning ?</h3>
                <p className="text-gray-300">
                  Le machine learning permet aux systèmes d'apprendre à partir de données pour faire des prédictions ou prendre des décisions. L'IA générative est une branche du ML qui se concentre sur la création de nouveaux contenus (textes, images, vidéos) à partir des données d'entraînement. Nos solutions peuvent utiliser ces deux approches selon vos besoins spécifiques.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="cosmic-card rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-3 text-white">Comment garantissez-vous que vos solutions IA sont adaptées au contexte africain ?</h3>
                <p className="text-gray-300">
                  Nous utilisons des données locales pertinentes, intégrons des connaissances spécifiques aux marchés africains et adaptons nos modèles aux réalités linguistiques et culturelles du continent. Notre approche combine expertise technique et compréhension profonde des enjeux locaux pour des solutions vraiment adaptées.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="cosmic-card rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-3 text-white">Quelles compétences techniques sont nécessaires pour utiliser vos solutions IA ?</h3>
                <p className="text-gray-300">
                  Nos solutions sont conçues pour être accessibles aux utilisateurs de tous niveaux techniques. Nous développons des interfaces intuitives et fournissons une formation complète à votre équipe. Pour les solutions plus avancées, nous pouvons former votre personnel technique ou proposer un accompagnement continu.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-black"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto cosmic-card rounded-xl p-8 md:p-12">
              <div className="absolute -top-14 -left-14 w-40 h-40 bg-indigo-600 rounded-full opacity-20 filter blur-[80px]"></div>
              <div className="absolute -bottom-14 -right-14 w-40 h-40 bg-purple-600 rounded-full opacity-20 filter blur-[80px]"></div>
              
              <div className="text-center mb-8">
                <Badge className="mb-4 border-indigo-500/30 text-indigo-400 bg-indigo-950/30 mx-auto">Prêt à démarrer ?</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Propulsez votre organisation avec l'IA
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Prenez rendez-vous pour une consultation gratuite et découvrez comment nos solutions d'IA peuvent transformer votre entreprise.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white"
                  asChild
                >
                  <Link to="/start-project" className="flex items-center gap-2">
                    <span>Démarrer votre projet IA</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/10 text-white hover:bg-white/5"
                  asChild
                >
                  <Link to="/contact">Contacter notre équipe</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIServices;

