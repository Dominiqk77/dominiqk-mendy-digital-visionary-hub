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
  BookOpen, 
  Code, 
  Zap, 
  Star, 
  Award,
  Users, 
  Building, 
  Layers,
  ArrowRight,
  CircleDashed,
  MessageSquare,
  CheckCircle,
  Clock,
  Calendar,
  GraduationCap,
  User,
  ScrollText,
  Rocket
} from 'lucide-react';

// Neural Network Animation Component - Similar to the one in AIServices.tsx
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

// AtomIcon component
const AtomIcon = ({ className }: { className?: string }) => {
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
      <circle cx="12" cy="12" r="1" />
      <path d="M12 12v.01" />
      <path d="M19.071 4.929c-1.738-1.738-6.293 1.222-10.142 5.071s-6.809 8.404-5.071 10.142c1.738 1.738 6.293-1.222 10.142-5.071s6.809-8.404 5.071-10.142Z" />
      <path d="M4.929 4.929c-1.738 1.738 1.222 6.293 5.071 10.142s8.404 6.809 10.142 5.071c1.738-1.738-1.222-6.293-5.071-10.142S6.667 3.19 4.929 4.929Z" />
    </svg>
  );
};

// LightbulbIcon component
const LightbulbIcon = ({ className }: { className?: string }) => {
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
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
};

const AITrainingPage = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Formation IA | Dominiqk Mendy | Expert en Intelligence Artificielle';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Formations en Intelligence Artificielle personnalisées pour professionnels et entreprises - Apprenez les fondamentaux de l\'IA et développez des compétences pratiques avec un expert du domaine.'
      );
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Sample training stats that change over time
  const [trainingStats, setTrainingStats] = useState({
    satisfaction: 97.4,
    completion: 93.8,
    practical: 95.2,
    knowledge: 98.1
  });

  useEffect(() => {
    // Update stats slightly every 3 seconds to simulate real-time data
    const interval = setInterval(() => {
      setTrainingStats(prev => ({
        satisfaction: Number((prev.satisfaction + (Math.random() * 0.4 - 0.2)).toFixed(1)),
        completion: Number((prev.completion + (Math.random() * 0.3 - 0.1)).toFixed(1)),
        practical: Number((prev.practical + (Math.random() * 0.3 - 0.1)).toFixed(1)),
        knowledge: Number((prev.knowledge + (Math.random() * 0.2 - 0.1)).toFixed(1))
      }));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Training programs
  const trainingPrograms = [
    {
      title: "Fondamentaux de l'IA",
      description: "Maîtrisez les concepts essentiels de l'intelligence artificielle et du machine learning dans ce programme complet.",
      icon: <BrainCircuit className="h-10 w-10 text-purple-400" />,
      features: [
        "Introduction aux concepts clés de l'IA",
        "Compréhension des algorithmes fondamentaux",
        "Vision d'ensemble des applications pratiques",
        "Exercices pratiques et études de cas"
      ],
      color: "from-indigo-600 to-purple-600",
      badge: "Populaire"
    },
    {
      title: "Machine Learning Avancé",
      description: "Approfondissez votre connaissance des modèles de machine learning et apprenez à les implémenter efficacement.",
      icon: <Database className="h-10 w-10 text-blue-400" />,
      features: [
        "Modèles supervisés et non supervisés",
        "Techniques d'optimisation et d'évaluation",
        "Feature engineering et sélection de modèles",
        "Projets pratiques sur des datasets réels"
      ],
      color: "from-blue-600 to-cyan-600"
    },
    {
      title: "Deep Learning & Réseaux de Neurones",
      description: "Explorez en profondeur les architectures de réseaux de neurones et leurs applications avancées.",
      icon: <Layers className="h-10 w-10 text-violet-400" />,
      features: [
        "Architectures CNN, RNN, LSTM, Transformers",
        "Transfer learning et fine-tuning",
        "Entraînement sur GPU et optimisation",
        "Projets pratiques en vision et NLP"
      ],
      color: "from-violet-600 to-indigo-600",
      badge: "Avancé"
    },
    {
      title: "IA Générative & LLMs",
      description: "Découvrez les dernières avancées en IA générative et modèles de langage à grande échelle.",
      icon: <MessageSquare className="h-10 w-10 text-pink-400" />,
      features: [
        "Fondamentaux des modèles génératifs",
        "Prompting avancé et ingénierie de prompts",
        "Fine-tuning et RAG pour applications spécifiques",
        "Intégration des LLMs dans des solutions business"
      ],
      color: "from-fuchsia-600 to-pink-600"
    },
    {
      title: "IA pour Managers & Décideurs",
      description: "Formation conçue spécifiquement pour les dirigeants et managers souhaitant comprendre et exploiter le potentiel de l'IA.",
      icon: <Building className="h-10 w-10 text-amber-400" />,
      features: [
        "Stratégie d'adoption de l'IA en entreprise",
        "Évaluation des opportunités et des risques",
        "Cadre éthique et réglementaire",
        "Conduite du changement et gestion des talents"
      ],
      color: "from-amber-600 to-orange-600"
    },
    {
      title: "MLOps & Déploiement IA",
      description: "Apprenez à industrialiser vos modèles d'IA et à mettre en place des pipelines robustes.",
      icon: <Code className="h-10 w-10 text-green-400" />,
      features: [
        "Infrastructure et pipeline CI/CD pour l'IA",
        "Monitoring et maintenance des modèles",
        "Gestion de versions et reproductibilité",
        "Optimisation des performances en production"
      ],
      color: "from-green-600 to-emerald-600"
    },
    {
      title: "IA & Business Intelligence",
      description: "Intégrez efficacement l'IA dans votre stratégie d'analyse de données et de business intelligence.",
      icon: <LineChart className="h-10 w-10 text-sky-400" />,
      features: [
        "Analyse prédictive avancée",
        "Automatisation des insights business",
        "Visualisation intelligente des données",
        "Création de tableaux de bord dynamiques"
      ],
      color: "from-sky-600 to-blue-600",
      badge: "Spécialité"
    },
    {
      title: "IA Responsable & Éthique",
      description: "Développez et déployez des solutions d'IA éthiques, transparentes et conformes aux réglementations.",
      icon: <Award className="h-10 w-10 text-purple-400" />,
      features: [
        "Biais, équité et transparence algorithmique",
        "Confidentialité et sécurité des données",
        "Gouvernance et conformité réglementaire",
        "Conception responsable des systèmes d'IA"
      ],
      color: "from-purple-600 to-indigo-600"
    }
  ];

  // Training formats
  const trainingFormats = [
    {
      title: "Formation en entreprise",
      description: "Programmes sur mesure délivrés directement dans vos locaux",
      icon: <Building className="h-6 w-6" />,
      details: "De 1 à 5 jours selon les besoins"
    },
    {
      title: "Ateliers pratiques intensifs",
      description: "Sessions hands-on pour maîtriser des compétences spécifiques",
      icon: <Code className="h-6 w-6" />,
      details: "Sessions de 1 à 2 jours, groupes de 5-15 personnes"
    },
    {
      title: "Bootcamp IA complet",
      description: "Programme immersif pour une transformation digitale complète",
      icon: <Rocket className="h-6 w-6" />,
      details: "2 semaines intensives, suivi personnalisé"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "La formation délivrée par Dominiqk a transformé notre approche de l'IA. Son expertise et sa pédagogie ont permis à notre équipe de développer rapidement des compétences concrètes.",
      author: "Sarah M.",
      position: "Directrice Innovation, Groupe Bancaire International",
      avatar: <User className="h-10 w-10" />
    },
    {
      quote: "Une formation exceptionnelle qui allie parfaitement théorie et pratique. Les concepts complexes sont rendus accessibles grâce à des exemples concrets adaptés à notre secteur.",
      author: "Karim D.",
      position: "CTO, Startup EdTech",
      avatar: <User className="h-10 w-10" />
    }
  ];

  // Expert credentials
  const expertCredentials = [
    {
      title: "Formation continue",
      description: "Je me forme quotidiennement aux dernières avancées en IA via des cours spécialisés, documentation technique et participation à des conférences internationales.",
      icon: <BookOpen className="h-6 w-6 text-blue-400" />
    },
    {
      title: "Veille technologique",
      description: "Analyse quotidienne des publications scientifiques et innovations majeures dans le domaine de l'intelligence artificielle et du machine learning.",
      icon: <AtomIcon className="h-6 w-6 text-purple-400" />
    },
    {
      title: "Expérimentation constante",
      description: "Développement régulier de prototypes utilisant les derniers frameworks et modèles d'IA pour rester à la pointe de l'innovation.",
      icon: <LightbulbIcon className="h-6 w-6 text-cyan-400" />
    },
    {
      title: "Réseau d'experts",
      description: "Collaboration active avec un réseau international de chercheurs et professionnels spécialisés en intelligence artificielle.",
      icon: <Users className="h-6 w-6 text-green-400" />
    }
  ];

  // Upcoming training sessions
  const upcomingTrainings = [
    {
      title: "Bootcamp IA Générative",
      date: "15-19 Juin 2025",
      location: "Marrakech",
      spots: "8 places disponibles"
    },
    {
      title: "MLOps Fondamentaux",
      date: "8-9 Juillet 2025",
      location: "En ligne",
      spots: "15 places disponibles"
    },
    {
      title: "IA pour Managers",
      date: "25 Août 2025",
      location: "Casablanca",
      spots: "12 places disponibles"
    }
  ];

  // Learning outcomes
  const learningOutcomes = [
    {
      title: "Compétences techniques",
      description: "Maîtrise des frameworks IA, développement de modèles, optimisation d'algorithmes",
      icon: <Code className="h-5 w-5 text-blue-400" />
    },
    {
      title: "Vision stratégique",
      description: "Capacité à identifier les opportunités d'application de l'IA dans votre contexte business",
      icon: <LineChart className="h-5 w-5 text-purple-400" />
    },
    {
      title: "Autonomie opérationnelle",
      description: "Aptitude à concevoir, développer et déployer des solutions IA de bout en bout",
      icon: <Rocket className="h-5 w-5 text-pink-400" />
    },
    {
      title: "Évaluation critique",
      description: "Compétences pour évaluer l'efficacité et la pertinence des solutions IA proposées",
      icon: <Star className="h-5 w-5 text-amber-400" />
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
        {/* Hero Section */}
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
                    <GraduationCap className="h-8 w-8 text-indigo-400" />
                  </div>
                </div>
                
                <Badge className="mb-4 border-indigo-500/30 text-indigo-400 bg-indigo-950/30">Expert Formateur IA</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Formations IA <br/> Sur Mesure
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Des programmes de formation en intelligence artificielle conçus par un expert qui se forme quotidiennement aux dernières avancées technologiques pour transmettre les compétences les plus pertinentes.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white"
                    size="lg"
                    asChild
                  >
                    <Link to="/contact" className="flex items-center gap-2">
                      <span>Demander un programme personnalisé</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-white/10 text-white hover:bg-white/5"
                    asChild
                  >
                    <Link to="/start-project">Planifier un appel gratuit</Link>
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
                      
                      {/* Training Stats Orbs */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-black/40 backdrop-blur-lg border border-indigo-500/30 p-3 rounded-xl shadow-lg shadow-indigo-500/20">
                          <div className="flex items-center gap-2">
                            <Star className="h-5 w-5 text-yellow-400" />
                            <div>
                              <div className="text-xs text-gray-400">Satisfaction</div>
                              <div className="text-white font-bold">{trainingStats.satisfaction}%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                        <div className="bg-black/40 backdrop-blur-lg border border-indigo-500/30 p-3 rounded-xl shadow-lg shadow-indigo-500/20">
                          <div className="flex items-center gap-2">
                            <Award className="h-5 w-5 text-indigo-400" />
                            <div>
                              <div className="text-xs text-gray-400">Complétion</div>
                              <div className="text-white font-bold">{trainingStats.completion}%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-black/40 backdrop-blur-lg border border-indigo-500/30 p-3 rounded-xl shadow-lg shadow-indigo-500/20">
                          <div className="flex items-center gap-2">
                            <Code className="h-5 w-5 text-green-400" />
                            <div>
                              <div className="text-xs text-gray-400">Pratique</div>
                              <div className="text-white font-bold">{trainingStats.practical}%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                        <div className="bg-black/40 backdrop-blur-lg border border-indigo-500/30 p-3 rounded-xl shadow-lg shadow-indigo-500/20">
                          <div className="flex items-center gap-2">
                            <BrainCircuit className="h-5 w-5 text-blue-400" />
                            <div>
                              <div className="text-xs text-gray-400">Savoirs</div>
                              <div className="text-white font-bold">{trainingStats.knowledge}%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Central Graduation Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-32 h-32">
                          <div className="absolute inset-0 bg-indigo-600/20 rounded-full animate-ping"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full opacity-40"></div>
                          <div className="relative flex items-center justify-center w-full h-full bg-indigo-900/70 backdrop-blur-sm rounded-full border border-indigo-500">
                            <GraduationCap className="h-16 w-16 text-indigo-300" />
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
        
        {/* Expert Profile Section */}
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
                      Expertise et apprentissage continu
                    </h2>
                    <p className="text-gray-300 mb-8">
                      En tant qu'expert en Intelligence Artificielle, je me forme quotidiennement aux dernières avancées technologiques. Ma veille constante, ma formation continue et mes expérimentations régulières me permettent de maîtriser les outils et techniques les plus récents pour développer des programmes de formation à la pointe de l'innovation.
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
                    <h3 className="text-xl font-bold mb-6 text-white">Approche pédagogique unique</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-black/30 border border-indigo-500/20 rounded-lg p-5">
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 rounded-full bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center mr-4">
                            <Layers className="h-5 w-5 text-indigo-400" />
                          </div>
                          <h3 className="font-semibold text-white">Expertise théorique et pratique</h3>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Mes formations combinent fondements théoriques solides et applications pratiques concrètes, permettant une compréhension profonde et applicable immédiatement.
                        </p>
                      </div>
                      
                      <div className="bg-black/30 border border-indigo-500/20 rounded-lg p-5">
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 rounded-full bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center mr-4">
                            <Users className="h-5 w-5 text-purple-400" />
                          </div>
                          <h3 className="font-semibold text-white">Personnalisation complète</h3>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Chaque programme de formation est adapté aux besoins spécifiques, au niveau technique et aux objectifs business de votre équipe ou organisation.
                        </p>
                      </div>
                      
                      <div className="bg-black/30 border border-indigo-500/20 rounded-lg p-5">
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 rounded-full bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center mr-4">
                            <ArrowRight className="h-5 w-5 text-blue-400" />
                          </div>
                          <h3 className="font-semibold text-white">Accompagnement post-formation</h3>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Un suivi personnalisé après la formation garantit que les connaissances sont correctement appliquées et que votre équipe continue à progresser.
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:opacity-90" asChild>
                        <Link to="/start-project">
                          Discuter de vos besoins en formation <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </PageContainer>
        </section>
        
        {/* Training Programs Grid */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute top-0 left-0 w-1 h-40 bg-gradient-to-b from-indigo-500/0 via-indigo-500/30 to-indigo-500/0"></div>
          <div className="absolute bottom-0 right-0 w-1 h-40 bg-gradient-to-b from-indigo-500/0 via-indigo-500/30 to-indigo-500/0"></div>
          
          <PageContainer>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 border-indigo-500/30 text-indigo-400 bg-indigo-950/30">Programmes de Formation</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Formations IA Adaptées à Vos Besoins
              </h2>
              <p className="text-gray-300 text-lg">
                Découvrez notre gamme complète de formations en intelligence artificielle conçues pour développer les compétences nécessaires à l'exploitation réussie des technologies IA.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {trainingPrograms.map((program, index) => (
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
                        {program.icon}
                      </div>
                      {program.badge && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs px-2 py-0.5 rounded">
                          {program.badge}
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white">{program.title}</h3>
                    <p className="text-gray-300 mb-6 h-[80px]">{program.description}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {program.features.map((feature, idx) => (
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
                        className={`w-full bg-gradient-to-r ${program.color} text-white hover:opacity-90`}
                        asChild
                      >
                        <Link to="/start-project" className="flex items-center justify-center gap-2">
                          <span>Demander plus d'infos</span>
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
        
        {/* Training Formats Section */}
        <section className="py-16 md:py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-indigo-950/10 to-black/0"></div>
          
          <PageContainer>
            <div className="max-w-5xl mx-auto relative">
              <div className="mb-12 text-center">
                <Badge className="mb-4 border-indigo-500/30 text-indigo-400 bg-indigo-950/30">Formats Adaptés</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Des formats de formation flexibles
                </h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Choisissez le format qui correspond le mieux à vos contraintes organisationnelles et aux objectifs d'apprentissage de votre équipe.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {trainingFormats.map((format, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-black/40 backdrop-blur-md border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/40 transition-colors"
                  >
                    <div className="w-14 h-14 mb-6 rounded-lg bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center">
                      {format.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{format.title}</h3>
                    <p className="text-gray-300 mb-4">{format.description}</p>
                    <div className="flex items-center text-indigo-400">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{format.details}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </PageContainer>
        </section>
        
        {/* Testimonials and Upcoming Trainings Section */}
        <section className="py-16 relative">
          <PageContainer>
            <div className="flex flex-col lg:flex-row gap-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:w-1/2"
              >
                <div className="mb-8">
                  <Badge className="mb-4 border-indigo-500/30 text-indigo-400 bg-indigo-950/30">Témoignages</Badge>
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    Ce que disent nos participants
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {testimonials.map((testimonial, idx) => (
                    <div key={idx} className="bg-black/40 backdrop-blur-md border border-indigo-500/20 rounded-xl p-6">
                      <div className="mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="inline-block h-4 w-4 text-yellow-400 mr-1" />
                        ))}
                      </div>
                      <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
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
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:w-1/2"
              >
                <div className="mb-8">
                  <Badge className="mb-4 border-purple-500/30 text-purple-400 bg-purple-950/30">Calendrier</Badge>
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    Prochaines formations programmées
                  </h2>
                </div>
                
                <div className="space-y-4">
                  {upcomingTrainings.map((training, idx) => (
                    <div key={idx} className="bg-black/40 backdrop-blur-md border border-indigo-500/20 rounded-lg p-5 hover:border-indigo-500/40 transition-colors">
                      <h3 className="text-white font-bold text-lg mb-2">{training.title}</h3>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-indigo-400 mr-2" />
                          <span className="text-gray-300 text-sm">{training.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Building className="h-4 w-4 text-indigo-400 mr-2" />
                          <span className="text-gray-300 text-sm">{training.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-indigo-400 text-sm">{training.spots}</span>
                        <Button size="sm" variant="outline" className="border-indigo-500/30 text-indigo-400 hover:bg-indigo-950/30" asChild>
                          <Link to="/start-project">S'inscrire</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <div className="bg-black/40 backdrop-blur-md border border-purple-500/20 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <ScrollText className="h-6 w-6 text-purple-400 mr-3" />
                      <h3 className="text-white font-bold">Formation sur mesure</h3>
                    </div>
                    <p className="text-gray-300 mb-6">
                      Vous ne trouvez pas la formation qui répond parfaitement à vos besoins ? Je propose des programmes entièrement personnalisés, adaptés à votre secteur d'activité et à vos objectifs spécifiques.
                    </p>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90" asChild>
                      <Link to="/contact">
                        Demander un programme sur mesure <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </PageContainer>
        </section>
        
        {/* Learning Outcomes Section */}
        <section className="py-16 relative">
          <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500 to-indigo-500/0"></div>
          <PageContainer>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="mb-4 border-indigo-500/30 text-indigo-400 bg-indigo-950/30">Résultats</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                Ce que vous apprendrez
              </h2>
              <p className="text-gray-300 text-lg">
                Développez des compétences concrètes et applicables immédiatement dans votre contexte professionnel.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningOutcomes.map((outcome, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-black/40 backdrop-blur-md border border-indigo-500/20 rounded-xl p-6 hover:border-indigo-500/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center mb-6">
                    {outcome.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{outcome.title}</h3>
                  <p className="text-gray-400">
                    {outcome.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </PageContainer>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-black"></div>
          
          <PageContainer className="relative z-10">
            <div className="max-w-4xl mx-auto bg-black/60 backdrop-blur-xl border border-indigo-500/20 rounded-xl p-8 md:p-12 shadow-xl shadow-indigo-500/10">
              <div className="absolute -top-14 -left-14 w-40 h-40 bg-indigo-600 rounded-full opacity-20 filter blur-[80px]"></div>
              <div className="absolute -bottom-14 -right-14 w-40 h-40 bg-purple-600 rounded-full opacity-20 filter blur-[80px]"></div>
              
              <div className="text-center mb-8">
                <Badge className="mb-4 border-indigo-500/30 text-indigo-400 bg-indigo-950/30 mx-auto">Prêt à vous former ?</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Investissez dans les compétences IA de demain
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Contactez-moi pour discuter de vos besoins en formation et découvrir comment mes programmes peuvent transformer les compétences de votre équipe.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white"
                  asChild
                >
                  <Link to="/start-project" className="flex items-center gap-2">
                    <span>Planifier une formation</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/10 text-white hover:bg-white/5"
                  asChild
                >
                  <Link to="/contact">Demander une documentation</Link>
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

export default AITrainingPage;
