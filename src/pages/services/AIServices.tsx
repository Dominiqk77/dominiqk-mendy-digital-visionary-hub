
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import PageContainer from '@/components/layout/PageContainer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
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
  MessageSquare,
  BookOpen,
  Trophy,
  CheckCircle,
  Clock,
  Layers,
  Terminal,
  Microchip,
  Atom,
  Rocket
} from 'lucide-react';

// Neural Network Animation Component
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
    document.title = 'Services IA | Dominiqk Mendy | Expert en Intelligence Artificielle';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Découvrez mon expertise en Intelligence Artificielle: développement sur mesure, modèles prédictifs, computer vision, IA générative et plus encore - Des solutions innovantes adaptées aux besoins de votre entreprise.'
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
      title: "Développement IA sur Mesure",
      description: "Création de solutions IA adaptées à vos défis spécifiques, de la conception à l'implémentation.",
      icon: <BrainCircuit className="h-10 w-10 text-purple-400" />,
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
      icon: <Bot className="h-10 w-10 text-blue-400" />,
      features: [
        "Support multilingue (français, arabe, langues africaines)",
        "Intégration site web et réseaux sociaux",
        "Adaptabilité contextuelle",
        "Analyse des conversations"
      ],
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Machine Learning & Prédiction",
      description: "Exploitez vos données pour anticiper les tendances et optimiser vos décisions business.",
      icon: <Database className="h-10 w-10 text-violet-400" />,
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
      icon: <Eye className="h-10 w-10 text-pink-400" />,
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
      icon: <Sparkles className="h-10 w-10 text-amber-400" />,
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
      icon: <Zap className="h-10 w-10 text-green-400" />,
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
      icon: <MessageSquare className="h-10 w-10 text-sky-400" />,
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
      icon: <LineChart className="h-10 w-10 text-purple-400" />,
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

  // Expert credentials - NEW
  const expertCredentials = [
    {
      title: "Formation continue",
      description: "Je me forme quotidiennement aux dernières avancées en IA via des cours spécialisés, documentation technique et participation à des conférences internationales.",
      icon: <BookOpen className="h-6 w-6 text-blue-400" />
    },
    {
      title: "Veille technologique",
      description: "Analyse quotidienne des publications scientifiques et innovations majeures dans le domaine de l'intelligence artificielle et du machine learning.",
      icon: <Microchip className="h-6 w-6 text-purple-400" />
    },
    {
      title: "Expérimentation constante",
      description: "Développement régulier de prototypes utilisant les derniers frameworks et modèles d'IA pour rester à la pointe de l'innovation.",
      icon: <Atom className="h-6 w-6 text-cyan-400" />
    },
    {
      title: "Réseau d'experts",
      description: "Collaboration active avec un réseau international de chercheurs et professionnels spécialisés en intelligence artificielle.",
      icon: <Users className="h-6 w-6 text-green-400" />
    }
  ];

  // Tech stack - NEW
  const aiTechStack = [
    { name: "TensorFlow", level: 95 },
    { name: "PyTorch", level: 90 },
    { name: "OpenAI API", level: 98 },
    { name: "Hugging Face", level: 92 },
    { name: "Computer Vision", level: 88 },
    { name: "NLP", level: 94 },
    { name: "LangChain", level: 91 },
    { name: "MLOps", level: 85 }
  ];

  // Latest AI trends - NEW
  const latestTrends = [
    {
      title: "IA Générative Multimodale",
      description: "Combinaison de texte, image et audio pour des créations contextuelles plus riches",
      icon: <Layers className="h-5 w-5 text-indigo-400" />
    },
    {
      title: "Agents Autonomes",
      description: "Systèmes IA capables d'agir indépendamment pour résoudre des tâches complexes",
      icon: <Robot className="h-5 w-5 text-purple-400" />
    },
    {
      title: "LLMs Spécialisés",
      description: "Modèles de langage fine-tunés pour des domaines d'expertise spécifiques",
      icon: <Terminal className="h-5 w-5 text-blue-400" />
    },
    {
      title: "IA Frugale",
      description: "Algorithmes optimisés pour fonctionner avec des ressources limitées",
      icon: <Zap className="h-5 w-5 text-green-400" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Cosmic background */}
      <div className="fixed inset-0 bg-black z-[-2]">
        <div className="absolute inset-0">
          {Array.from({ length: 200 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                backgroundColor: 'white',
                opacity: Math.random() * 0.7 + 0.3,
                animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite`
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 via-purple-900/10 to-black"></div>
      </div>
      <div className="fixed inset-0 tech-grid z-[-1] opacity-20"></div>
      
      <Navbar />
      
      <main className="flex-grow pt-20 relative">
        {/* Hero Section - ENHANCED */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          {/* Neural network background animation */}
          <div className="absolute inset-0 z-0">
            <NeuralNetwork />
          </div>
          
          <PageContainer className="relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="md:w-1/2 mb-8 md:mb-0 md:pr-8"
              >
                <div className="relative w-16 h-16 mb-6 group">
                  <div className="absolute inset-0 bg-indigo-600/20 rounded-full animate-ping"></div>
                  <div className="relative flex items-center justify-center w-full h-full bg-indigo-600/30 backdrop-blur-sm rounded-full border border-indigo-500/50 group-hover:border-indigo-400 transition-colors">
                    <BrainCircuit className="h-8 w-8 text-indigo-400" />
                  </div>
                </div>
                
                <Badge className="mb-4 border-indigo-500/30 text-indigo-400 bg-indigo-950/30">Expert Intelligence Artificielle</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Solutions IA Innovantes <br/> & Sur Mesure
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Des solutions d'intelligence artificielle avancées adaptées à vos enjeux spécifiques, développées par un expert qui maîtrise les dernières innovations technologiques.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
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
                    <Link to="/contact">Consultation gratuite</Link>
                  </Button>
                </div>
              </motion.div>
              
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
                        <div className="bg-black/40 backdrop-blur-lg border border-indigo-500/30 p-3 rounded-xl shadow-lg shadow-indigo-500/20">
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
                        <div className="bg-black/40 backdrop-blur-lg border border-indigo-500/30 p-3 rounded-xl shadow-lg shadow-indigo-500/20">
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
                        <div className="bg-black/40 backdrop-blur-lg border border-indigo-500/30 p-3 rounded-xl shadow-lg shadow-indigo-500/20">
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
                        <div className="bg-black/40 backdrop-blur-lg border border-indigo-500/30 p-3 rounded-xl shadow-lg shadow-indigo-500/20">
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
          </PageContainer>
        </section>
        
        {/* NEW SECTION: Expert Profile */}
        <section className="py-16 relative">
          <div className="absolute left-0 top-0 w-1/3 h-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500 to-indigo-500/0"></div>
          <PageContainer>
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-black/40 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 md:p-10"
              >
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="md:w-1/2">
                    <Badge className="mb-4 border-purple-500/30 text-purple-400 bg-purple-950/30">Expert IA</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                      Une expertise IA en évolution constante
                    </h2>
                    <p className="text-gray-300 mb-8">
                      En tant qu'expert en Intelligence Artificielle, je me tiens quotidiennement informé des dernières avancées technologiques. Ma veille constante, ma formation continue et mes expérimentations régulières me permettent de maîtriser les outils et techniques les plus récents pour développer des solutions IA innovantes adaptées à vos besoins spécifiques.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {expertCredentials.map((credential, idx) => (
                        <div key={idx} className="flex gap-4">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-10 h-10 rounded-lg bg-black/50 border border-purple-500/30 flex items-center justify-center">
                              {credential.icon}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white mb-2">{credential.title}</h3>
                            <p className="text-sm text-gray-300">{credential.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="md:w-1/2">
                    <h3 className="text-xl font-bold mb-6 text-white">Maîtrise des technologies IA</h3>
                    
                    <div className="space-y-5">
                      {aiTechStack.map((tech, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between mb-1">
                            <span className="text-white">{tech.name}</span>
                            <span className="text-indigo-400">{tech.level}%</span>
                          </div>
                          <div className="h-2 rounded-full bg-indigo-900/40">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${tech.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: idx * 0.1 }}
                              className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                            ></motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-10">
                      <h3 className="text-xl font-bold mb-6 text-white flex items-center">
                        <Sparkles className="h-5 w-5 mr-2 text-yellow-400" />
                        Dernières tendances IA maîtrisées
                      </h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {latestTrends.map((trend, idx) => (
                          <div key={idx} className="bg-black/30 border border-indigo-500/20 rounded-lg p-4">
                            <div className="flex items-center mb-2">
                              {trend.icon}
                              <h4 className="text-white font-medium ml-2">{trend.title}</h4>
                            </div>
                            <p className="text-sm text-gray-400">{trend.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </PageContainer>
        </section>
        
        {/* AI Services Grid - ENHANCED */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute top-0 left-0 w-1 h-40 bg-gradient-to-b from-indigo-500/0 via-indigo-500/30 to-indigo-500/0"></div>
          <div className="absolute bottom-0 right-0 w-1 h-40 bg-gradient-to-b from-indigo-500/0 via-indigo-500/30 to-indigo-500/0"></div>
          
          <PageContainer>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 border-indigo-500/30 text-indigo-400 bg-indigo-950/30">Services IA Professionnels</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Solutions IA Adaptées à Votre Business
              </h2>
              <p className="text-gray-300 text-lg">
                Découvrez notre gamme complète de services d'intelligence artificielle conçus pour relever vos défis business spécifiques et vous donner un avantage concurrentiel décisif.
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
                  className="bg-black/40 backdrop-blur-md border border-indigo-500/20 rounded-xl overflow-hidden group hover:border-indigo-500/40 transition-colors"
                >
                  <div className="p-6">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-lg bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center group-hover:border-indigo-500 transition-colors">
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
                            <CheckCircle className="h-4 w-4 text-indigo-400" />
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
          </PageContainer>
        </section>
        
        {/* Case Studies Section - ENHANCED */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-indigo-950/20 to-black/0"></div>
          
          <PageContainer className="relative">
            <div className="flex flex-col lg:flex-row gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:w-1/2"
              >
                <Badge className="mb-4 border-indigo-500/30 text-indigo-400 bg-indigo-950/30">Résultats Prouvés</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  Études de Cas & Impacts Mesurables
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Découvrez comment mes solutions d'IA ont transformé les opérations de mes clients et créé une valeur mesurable pour leur activité. Des résultats concrets qui démontrent l'efficacité de mon expertise.
                </p>
                
                <div className="space-y-6">
                  {caseStudies.map((study, idx) => (
                    <div key={idx} className="bg-black/40 backdrop-blur-md border border-indigo-500/20 rounded-lg p-5 hover:border-indigo-500/40 transition-colors">
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
                <div className="bg-black/40 backdrop-blur-md border border-indigo-500/20 rounded-xl p-8">
                  <div className="mb-6 flex items-center">
                    <Star className="h-8 w-8 text-yellow-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Témoignages clients</h3>
                  </div>
                  
                  <div className="space-y-8">
                    {testimonials.map((testimonial, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-lg">
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

                {/* NEW: TIMELINE OF MY IA EXPERTISE JOURNEY */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-8 bg-black/40 backdrop-blur-md border border-indigo-500/20 rounded-xl p-8"
                >
                  <div className="mb-6 flex items-center">
                    <Clock className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">Mon parcours en IA</h3>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute top-0 bottom-0 left-[18px] w-0.5 bg-gradient-to-b from-indigo-500/40 via-purple-500/40 to-blue-500/40"></div>
                    <div className="space-y-8">
                      <div className="relative pl-10">
                        <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                        </div>
                        <div>
                          <p className="text-indigo-400 text-sm">2023 - Présent</p>
                          <h4 className="text-white font-medium">Expert IA et Recherche Avancée</h4>
                          <p className="text-gray-400 text-sm mt-1">
                            Développement de solutions IA de pointe avec les derniers modèles d'intelligence artificielle générative et recherche en IA explicable.
                          </p>
                        </div>
                      </div>
                      
                      <div className="relative pl-10">
                        <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-purple-900/40 border border-purple-500/30 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                        </div>
                        <div>
                          <p className="text-purple-400 text-sm">2020 - 2022</p>
                          <h4 className="text-white font-medium">Spécialisation Deep Learning et Vision</h4>
                          <p className="text-gray-400 text-sm mt-1">
                            Maîtrise des réseaux de neurones profonds et développement de solutions de computer vision pour le secteur industriel.
                          </p>
                        </div>
                      </div>
                      
                      <div className="relative pl-10">
                        <div className="absolute left-0 top-0 w-9 h-9 rounded-full bg-blue-900/40 border border-blue-500/30 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        </div>
                        <div>
                          <p className="text-blue-400 text-sm">2017 - 2019</p>
                          <h4 className="text-white font-medium">Premiers projets IA et Formation</h4>
                          <p className="text-gray-400 text-sm mt-1">
                            Développement des premières applications ML et formation continue auprès des experts du domaine.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </PageContainer>
        </section>
        
        {/* NEW SECTION: Why Choose Me for your AI Needs */}
        <section className="py-16 md:py-20 relative">
          <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500 to-indigo-500/0"></div>
          <PageContainer>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 border-purple-500/30 text-purple-400 bg-purple-950/30">Pourquoi Me Choisir</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                Une Expertise IA au Service de Votre Réussite
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-black/40 backdrop-blur-md border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center mb-6">
                  <Trophy className="h-6 w-6 text-yellow-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Expertise Prouvée</h3>
                <p className="text-gray-400">
                  Plus de 8 ans d'expérience dans le développement de solutions IA avec des résultats quantifiables pour des clients variés.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-black/40 backdrop-blur-md border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center mb-6">
                  <Rocket className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Innovation Continue</h3>
                <p className="text-gray-400">
                  Formation constante aux dernières avancées en IA et test régulier des technologies émergentes pour vous offrir le meilleur.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-black/40 backdrop-blur-md border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center mb-6">
                  <Code className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Solutions Sur Mesure</h3>
                <p className="text-gray-400">
                  Des solutions IA adaptées à vos besoins spécifiques, loin des approches génériques qui ne correspondent pas à votre réalité.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-black/40 backdrop-blur-md border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">Accompagnement Complet</h3>
                <p className="text-gray-400">
                  Un support continu, de l'analyse des besoins à la formation de vos équipes, pour une adoption réussie de vos solutions IA.
                </p>
              </motion.div>
            </div>
          </PageContainer>
        </section>
        
        {/* FAQ Section - ENHANCED */}
        <section className="py-16 md:py-20 relative">
          <PageContainer>
            <div className="text-center mb-12">
              <Badge className="mb-4 border-indigo-500/30 text-indigo-400 bg-indigo-950/30">FAQ</Badge>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Questions Fréquentes sur nos Services IA
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-black/40 backdrop-blur-md border border-indigo-500/20 rounded-lg p-6"
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
                className="bg-black/40 backdrop-blur-md border border-indigo-500/20 rounded-lg p-6"
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
                className="bg-black/40 backdrop-blur-md border border-indigo-500/20 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-3 text-white">Quelles compétences techniques sont nécessaires pour utiliser vos solutions IA ?</h3>
                <p className="text-gray-300">
                  Nos solutions sont conçues pour être accessibles aux utilisateurs de tous niveaux techniques. Nous développons des interfaces intuitives et fournissons une formation complète à votre équipe. Pour les solutions plus avancées, nous pouvons former votre personnel technique ou proposer un accompagnement continu.
                </p>
              </motion.div>
            </div>
          </PageContainer>
        </section>
        
        {/* CTA Section - ENHANCED */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-black"></div>
          
          <PageContainer className="relative z-10">
            <div className="max-w-4xl mx-auto bg-black/60 backdrop-blur-xl border border-indigo-500/20 rounded-xl p-8 md:p-12 shadow-xl shadow-indigo-500/10">
              <div className="absolute -top-14 -left-14 w-40 h-40 bg-indigo-600 rounded-full opacity-20 filter blur-[80px]"></div>
              <div className="absolute -bottom-14 -right-14 w-40 h-40 bg-purple-600 rounded-full opacity-20 filter blur-[80px]"></div>
              
              <div className="text-center mb-8">
                <Badge className="mb-4 border-indigo-500/30 text-indigo-400 bg-indigo-950/30 mx-auto">Prêt à Innover ?</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Transformez votre Business avec l'IA
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Prenez rendez-vous pour une consultation gratuite et découvrez comment mes solutions d'IA peuvent propulser votre entreprise vers de nouveaux sommets.
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
          </PageContainer>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Define the Robot component for the latest trends section
const Robot = ({ className }: { className?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
      <path d="M8 4H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2" />
      <rect x="4" y="12" width="16" height="8" rx="2" />
      <path d="M9 16h.01" />
      <path d="M15 16h.01" />
    </svg>
  );
};

export default AIServices;
