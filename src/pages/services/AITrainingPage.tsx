
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, BrainCircuit, BookOpen, Award, Users, Globe, Zap, Target, Badge, Check, FileText, Briefcase, GraduationCap, Video, MessageSquare, Rocket, Star, Clock, Calendar, DollarSign, Send, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge as UIBadge } from "@/components/ui/badge";
import PageContainer from '../../components/layout/PageContainer';

// SEO metadata
const pageTitle = "Formation IA | Dominiqk Mendy | Expert Intelligence Artificielle";
const pageDescription = "Formations professionnelles en intelligence artificielle par Dominiqk Mendy. Apprenez à maîtriser l'IA, le machine learning et la data science avec notre expert international.";
const keywords = "formation IA, cours intelligence artificielle, apprentissage machine learning, data science, formation professionnelle IA, expert IA Afrique, formation tech Sénégal, cours IA Dakar";

// Types for our course data
type CourseLevel = "Débutant" | "Intermédiaire" | "Avancé" | "Expert";

interface CourseModule {
  title: string;
  description: string;
  duration: string;
}

interface Course {
  id: string;
  title: string;
  description: string;
  level: CourseLevel;
  duration: string;
  price: string;
  icon: React.ReactNode;
  modules: CourseModule[];
  benefits: string[];
  image: string;
}

const AITrainingPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeTab, setActiveTab] = React.useState("formations");

  // Animation for stars in the canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Stars properties
    const stars: { x: number; y: number; radius: number; color: string; velocity: number }[] = [];
    const generateStars = () => {
      for (let i = 0; i < 200; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 1.5;
        const color = `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`;
        const velocity = Math.random() * 0.05;
        stars.push({ x, y, radius, color, velocity });
      }
    };

    generateStars();

    // Technical particles (representing data nodes)
    const nodes: { x: number; y: number; radius: number; connections: number[]; color: string }[] = [];
    const generateNodes = () => {
      const nodeCount = 25; // Increased for more visual impact
      for (let i = 0; i < nodeCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 2.5 + 1; // Slightly larger nodes
        const connections = [];
        
        // Enhanced color palette with theme colors
        const colors = [
          'rgba(155, 135, 245, 0.6)', // Primary purple
          'rgba(14, 165, 233, 0.6)', // Ocean blue
          'rgba(217, 70, 239, 0.6)', // Magenta pink
          'rgba(124, 58, 237, 0.6)', // Vivid purple
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Each node connects to 1-3 other random nodes
        const connectionCount = Math.floor(Math.random() * 3) + 1;
        for (let j = 0; j < connectionCount; j++) {
          const connectTo = Math.floor(Math.random() * nodeCount);
          if (connectTo !== i && !connections.includes(connectTo)) {
            connections.push(connectTo);
          }
        }
        
        nodes.push({ x, y, radius, connections, color });
      }
    };

    generateNodes();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars with enhanced glow effect
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
        
        // Add subtle glow effect
        ctx.shadowBlur = star.radius * 2;
        ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
        
        // Move stars slightly
        star.y += star.velocity;
        
        // Reset star position if it goes off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      // Reset shadow properties
      ctx.shadowBlur = 0;
      
      // Draw nodes and connections with enhanced visual effects
      nodes.forEach((node, index) => {
        // Draw connections first (so they appear behind nodes)
        node.connections.forEach(connIndex => {
          if (connIndex < nodes.length) {
            const connectedNode = nodes[connIndex];
            
            // Create gradient for connection lines
            const gradient = ctx.createLinearGradient(
              node.x, node.y, 
              connectedNode.x, connectedNode.y
            );
            gradient.addColorStop(0, node.color);
            gradient.addColorStop(1, connectedNode.color);
            
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(connectedNode.x, connectedNode.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8; // Slightly thicker lines
            ctx.stroke();
            
            // Add data pulse effect on connections occasionally
            if (Math.random() < 0.005) {
              const dataPulse = {
                x: node.x,
                y: node.y,
                targetX: connectedNode.x,
                targetY: connectedNode.y,
                progress: 0,
                speed: 0.01 + Math.random() * 0.02,
                color: node.color
              };
              
              // Animate data pulse
              const animatePulse = () => {
                dataPulse.progress += dataPulse.speed;
                
                if (dataPulse.progress <= 1) {
                  const currentX = node.x + (connectedNode.x - node.x) * dataPulse.progress;
                  const currentY = node.y + (connectedNode.y - node.y) * dataPulse.progress;
                  
                  ctx.beginPath();
                  ctx.arc(currentX, currentY, 2, 0, Math.PI * 2);
                  ctx.fillStyle = dataPulse.color;
                  ctx.fill();
                  
                  requestAnimationFrame(animatePulse);
                }
              };
              
              animatePulse();
            }
          }
        });
        
        // Draw the node with glow effect
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        
        // Add glow effect to nodes
        ctx.shadowBlur = 10;
        ctx.shadowColor = node.color;
        
        ctx.fill();
        
        // Reset shadow
        ctx.shadowBlur = 0;
        
        // More dynamic movement
        const time = Date.now() * 0.001;
        node.x += Math.sin(time + index * 0.5) * 0.3;
        node.y += Math.cos(time + index * 0.5) * 0.3;
      });
      
      requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      stars.length = 0;
      nodes.length = 0;
      generateStars();
      generateNodes();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Course data
  const courses: Course[] = [
    {
      id: "ia-fondamentaux",
      title: "Fondamentaux de l'Intelligence Artificielle",
      description: "Une introduction complète aux concepts de base de l'IA, au machine learning et à la data science pour débutants. Apprenez les fondements théoriques et commencez à créer vos premiers modèles simples.",
      level: "Débutant",
      duration: "3 jours (21 heures)",
      price: "450.000 FCFA",
      icon: <BrainCircuit size={40} />,
      modules: [
        {
          title: "Introduction à l'intelligence artificielle",
          description: "Histoire, concepts fondamentaux et applications actuelles de l'IA",
          duration: "3 heures"
        },
        {
          title: "Principes du Machine Learning",
          description: "Apprentissage supervisé, non supervisé et par renforcement",
          duration: "6 heures"
        },
        {
          title: "Initiation à Python pour l'IA",
          description: "Bases de programmation Python et bibliothèques essentielles (NumPy, Pandas)",
          duration: "6 heures"
        },
        {
          title: "Premier modèle de ML avec scikit-learn",
          description: "Création et évaluation d'un modèle simple de classification",
          duration: "6 heures"
        }
      ],
      benefits: [
        "Compréhension solide des concepts fondamentaux de l'IA",
        "Capacité à manipuler des données avec Python",
        "Création de votre premier modèle de machine learning",
        "Certificat de formation reconnu internationalement"
      ],
      image: "/placeholder.svg"
    },
    {
      id: "deep-learning",
      title: "Deep Learning & Neural Networks",
      description: "Plongez dans le monde des réseaux de neurones et du deep learning. Apprenez à concevoir, entraîner et déployer des modèles sophistiqués pour résoudre des problèmes complexes.",
      level: "Intermédiaire",
      duration: "5 jours (35 heures)",
      price: "750.000 FCFA",
      icon: <Zap size={40} />,
      modules: [
        {
          title: "Architecture des réseaux de neurones",
          description: "Perceptrons, couches, fonctions d'activation et propagation avant",
          duration: "7 heures"
        },
        {
          title: "TensorFlow & Keras",
          description: "Maîtrise des frameworks de deep learning les plus populaires",
          duration: "7 heures"
        },
        {
          title: "CNN pour Computer Vision",
          description: "Traitement d'images et reconnaissance d'objets",
          duration: "7 heures"
        },
        {
          title: "RNN, LSTM et applications NLP",
          description: "Traitement du langage naturel et analyse de séquences",
          duration: "7 heures"
        },
        {
          title: "Déploiement de modèles DL",
          description: "Optimisation et mise en production de modèles de deep learning",
          duration: "7 heures"
        }
      ],
      benefits: [
        "Maîtrise des architectures de réseaux de neurones avancées",
        "Compétences pratiques en TensorFlow et Keras",
        "Capacité à développer des solutions de vision par ordinateur et NLP",
        "Expérience de déploiement de modèles en production"
      ],
      image: "/placeholder.svg"
    },
    {
      id: "ia-generative",
      title: "IA Générative & LLMs",
      description: "Découvrez les technologies révolutionnaires derrière ChatGPT, DALL-E et autres modèles génératifs. Apprenez à les utiliser, les adapter et les déployer dans vos projets.",
      level: "Avancé",
      duration: "4 jours (28 heures)",
      price: "850.000 FCFA",
      icon: <Rocket size={40} />,
      modules: [
        {
          title: "Fondements des modèles de langage",
          description: "Architectures Transformer, attention et GPT",
          duration: "7 heures"
        },
        {
          title: "Fine-tuning et prompt engineering",
          description: "Techniques d'adaptation de LLMs et conception de prompts efficaces",
          duration: "7 heures"
        },
        {
          title: "Modèles génératifs multimodaux",
          description: "Génération de texte, images et audio avec IA",
          duration: "7 heures"
        },
        {
          title: "Intégration d'IA générative en production",
          description: "APIs, optimisation et considérations éthiques",
          duration: "7 heures"
        }
      ],
      benefits: [
        "Maîtrise des dernières technologies d'IA générative",
        "Capacité à adapter des LLMs pour des besoins spécifiques",
        "Compétences en prompt engineering avancé",
        "Création d'applications innovantes combinant texte et images"
      ],
      image: "/placeholder.svg"
    },
    {
      id: "ia-business",
      title: "IA pour Dirigeants & Décideurs",
      description: "Formation executive spécialement conçue pour les leaders et décideurs souhaitant comprendre les implications stratégiques de l'IA et son potentiel de transformation business.",
      level: "Expert",
      duration: "2 jours (14 heures)",
      price: "950.000 FCFA",
      icon: <Briefcase size={40} />,
      modules: [
        {
          title: "Panorama stratégique de l'IA",
          description: "État de l'art, tendances et impact business de l'IA",
          duration: "3.5 heures"
        },
        {
          title: "Transformation digitale par l'IA",
          description: "Cas d'usage et retours sur investissement par secteur",
          duration: "3.5 heures"
        },
        {
          title: "Framework de gouvernance IA",
          description: "Éthique, réglementation et gestion des risques",
          duration: "3.5 heures"
        },
        {
          title: "Feuille de route d'adoption de l'IA",
          description: "Méthodologie pour implémenter l'IA dans votre organisation",
          duration: "3.5 heures"
        }
      ],
      benefits: [
        "Vision stratégique claire de l'impact de l'IA sur votre secteur",
        "Capacité à identifier les opportunités d'innovation par l'IA",
        "Compréhension des enjeux éthiques et réglementaires",
        "Plan d'action personnalisé pour votre organisation"
      ],
      image: "/placeholder.svg"
    }
  ];

  // Set page metadata
  useEffect(() => {
    document.title = pageTitle;

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageDescription);
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = "description";
      newMetaDescription.content = pageDescription;
      document.head.appendChild(newMetaDescription);
    }

    // Set keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = "keywords";
      newMetaKeywords.content = keywords;
      document.head.appendChild(newMetaKeywords);
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  // Testimonials data
  const testimonials = [
    {
      name: "Dr. Amadou Diallo",
      role: "Directeur R&D, Dakar Digital Hub",
      image: "/placeholder.svg",
      text: "La formation Deep Learning dispensée par Dominiqk a transformé notre approche de l'innovation produit. Son expertise et sa pédagogie sont remarquables. Nous avons immédiatement pu appliquer les concepts dans nos projets."
    },
    {
      name: "Fatou Ndiaye",
      role: "Data Science Manager, Orange Sénégal",
      image: "/placeholder.svg",
      text: "Formation exceptionnelle qui a permis à mon équipe de monter en compétence rapidement sur les technologies d'IA générative. La qualité des supports et l'approche pratique nous ont particulièrement séduits."
    },
    {
      name: "Emmanuel Koné",
      role: "CEO, Abidjan Tech Solutions",
      image: "/placeholder.svg",
      text: "En tant que dirigeant, la formation 'IA pour Décideurs' m'a fourni exactement ce dont j'avais besoin : une vision claire et stratégique sans m'égarer dans les détails techniques. Je recommande vivement."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Canvas background for space theme */}
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
      />
      
      <Navbar />
      
      <main className="flex-grow relative z-10">
        {/* Hero Section with enhanced gradient */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse-slow"></div>
          
          <PageContainer className="relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block mb-4">
                  <div className="p-4 bg-primary/20 rounded-full backdrop-blur-sm border border-primary/30">
                    <GraduationCap size={48} className="text-primary animate-pulse" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  Formations en <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">Intelligence Artificielle</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Développez votre expertise en IA auprès d'un consultant international reconnu. 
                  Des formations sur mesure pour tous les niveaux, du débutant à l'expert.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105" asChild>
                    <Link to="/contact" className="flex items-center gap-2">
                      <span>Demander un devis</span>
                      <ArrowRight className="h-4 w-4 animate-pulse" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <a href="#formations" className="flex items-center gap-2">
                      <span>Découvrir les formations</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </PageContainer>
        </section>
        
        {/* Expert Section - NEW */}
        <section className="py-16 relative">
          <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
          <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
          
          <PageContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="order-2 md:order-1"
              >
                <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                    Une Expertise IA Constamment Mise à Jour
                  </h2>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      En tant qu'expert de pointe en intelligence artificielle, <strong className="text-white">Dominiqk Mendy</strong> reste 
                      quotidiennement à la fine pointe de l'innovation en IA. Sa passion pour les avancées technologiques 
                      se traduit par une veille technologique permanente et une formation continue.
                    </p>
                    <p>
                      <strong className="text-white">Chaque jour</strong>, il consacre du temps à :
                    </p>
                    <ul className="space-y-2">
                      <li className="flex gap-3">
                        <Sparkles className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <span>Analyser les publications scientifiques des laboratoires de recherche leaders (DeepMind, OpenAI, Stanford AI Lab)</span>
                      </li>
                      <li className="flex gap-3">
                        <Sparkles className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <span>Expérimenter les derniers modèles et architectures d'IA</span>
                      </li>
                      <li className="flex gap-3">
                        <Sparkles className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <span>Participer à des communautés d'experts internationaux en IA et échanges avec des chercheurs</span>
                      </li>
                      <li className="flex gap-3">
                        <Sparkles className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                        <span>Développer des projets concrets utilisant les technologies émergentes</span>
                      </li>
                    </ul>
                    <p className="italic text-gray-400 mt-4">
                      "L'IA évolue à un rythme sans précédent. Ma mission est de maîtriser ces avancées 
                      pour les rendre accessibles et applicables aux défis concrets de mes clients."
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="order-1 md:order-2"
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-1 rounded-2xl backdrop-blur-sm">
                  <div className="bg-black/50 backdrop-blur-md p-8 rounded-xl border border-white/10 h-full">
                    <h3 className="text-2xl font-bold mb-6 text-white">Pourquoi Apprendre l'IA avec Dominiqk?</h3>
                    
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 border border-primary/30">
                          <BrainCircuit className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-1">Expertise Scientifique & Pratique</h4>
                          <p className="text-gray-300">Alliance unique de connaissances théoriques avancées et d'expérience pratique sur des projets internationaux</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 border border-primary/30">
                          <BookOpen className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-1">Pédagogie Adaptée</h4>
                          <p className="text-gray-300">Capacité à rendre accessibles les concepts les plus complexes à tous les publics, du débutant à l'expert</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 border border-primary/30">
                          <Globe className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white mb-1">Perspective Internationale</h4>
                          <p className="text-gray-300">Vision globale des enjeux de l'IA avec adaptation spécifique au contexte et besoins locaux</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </PageContainer>
        </section>
        
        {/* Statistics Section with enhanced card styling */}
        <section className="py-16 bg-black/30 backdrop-blur-md border-t border-b border-white/10">
          <PageContainer>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "1200+", label: "Professionnels formés", delay: 0.1, icon: <Users size={24} /> },
                { value: "15+", label: "Pays touchés", delay: 0.2, icon: <Globe size={24} /> },
                { value: "98%", label: "Taux de satisfaction", delay: 0.3, icon: <Star size={24} /> },
                { value: "45+", label: "Entreprises partenaires", delay: 0.4, icon: <Briefcase size={24} /> }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(155,135,245,0.3)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: stat.delay }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-primary font-bold text-4xl mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </PageContainer>
        </section>
        
        {/* Why Choose Us Section with enhanced cards */}
        <section id="pourquoi" className="py-20">
          <PageContainer>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">Pourquoi Choisir Nos Formations ?</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 mx-auto mb-6 rounded-full"></div>
                <p className="text-gray-300">Des formations d'excellence en IA conçues par un expert international reconnu, adaptées au contexte africain et aux enjeux globaux.</p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Award size={32} />,
                  title: "Expertise Internationale",
                  description: "Bénéficiez de l'expertise d'un consultant qui a formé et conseillé des organisations en France, au Royaume-Uni, aux États-Unis et dans toute l'Afrique.",
                  delay: 0.1
                },
                {
                  icon: <BookOpen size={32} />,
                  title: "Pédagogie Pratique",
                  description: "Nos formations privilégient la pratique avec 70% du temps consacré à des projets concrets, des études de cas réels et des workshops interactifs.",
                  delay: 0.2
                },
                {
                  icon: <Users size={32} />,
                  title: "Formations Sur Mesure",
                  description: "Chaque formation peut être adaptée aux besoins spécifiques de votre équipe ou organisation, avec des cas d'usage pertinents pour votre secteur.",
                  delay: 0.3
                },
                {
                  icon: <Globe size={32} />,
                  title: "Contexte Africain",
                  description: "Nos formations intègrent des exemples et cas d'usage adaptés aux réalités africaines, avec une attention particulière aux défis et opportunités du continent.",
                  delay: 0.4
                },
                {
                  icon: <Video size={32} />,
                  title: "Formats Flexibles",
                  description: "Choisissez entre formations présentielles, distancielles ou hybrides selon vos contraintes géographiques et organisationnelles.",
                  delay: 0.5
                },
                {
                  icon: <MessageSquare size={32} />,
                  title: "Suivi Post-Formation",
                  description: "Accès à une communauté d'apprenants, sessions de questions-réponses et accompagnement personnalisé après la formation.",
                  delay: 0.6
                }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  className="bg-black/20 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-500 group hover:shadow-[0_0_20px_rgba(155,135,245,0.2)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: feature.delay }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-primary mb-4 p-3 bg-white/5 rounded-lg inline-block group-hover:bg-primary/10 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </PageContainer>
        </section>
        
        {/* Courses Section with enhanced card design */}
        <section id="formations" className="py-20 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          <PageContainer className="relative z-10">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">Nos Formations IA</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 mx-auto mb-6 rounded-full"></div>
                <p className="text-gray-300">Du niveau débutant à expert, découvrez nos formations spécialisées en intelligence artificielle</p>
              </motion.div>
              
              {/* Filter tabs with enhanced styling */}
              <div className="mt-8">
                <Tabs defaultValue="tout" className="w-full">
                  <TabsList className="grid grid-cols-4 w-full max-w-lg mx-auto bg-black/30 backdrop-blur-md p-1 rounded-lg border border-white/10">
                    <TabsTrigger 
                      value="tout"
                      className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary hover:text-primary/80 transition-all duration-300"
                    >
                      Toutes
                    </TabsTrigger>
                    <TabsTrigger 
                      value="debutant"
                      className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary hover:text-primary/80 transition-all duration-300"
                    >
                      Débutant
                    </TabsTrigger>
                    <TabsTrigger 
                      value="intermediaire"
                      className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary hover:text-primary/80 transition-all duration-300"
                    >
                      Intermédiaire
                    </TabsTrigger>
                    <TabsTrigger 
                      value="avance"
                      className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary hover:text-primary/80 transition-all duration-300"
                    >
                      Avancé/Expert
                    </TabsTrigger>
                  </TabsList>
                  
                  {/* Course cards with course object mapping */}
                  <TabsContent value="tout" className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {courses.map((course, index) => (
                        <motion.div
                          key={course.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ y: -5 }}
                        >
                          <Card className="bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-md border border-white/10 h-full flex flex-col overflow-hidden hover:shadow-[0_0_25px_rgba(155,135,245,0.15)] hover:border-primary/30 transition-all duration-300 group">
                            <CardHeader>
                              <div className="text-primary mb-3 p-3 bg-white/5 rounded-lg w-fit group-hover:bg-primary/10 transition-all duration-300">{course.icon}</div>
                              <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{course.title}</CardTitle>
                              <div className="flex items-center gap-2 mt-2 text-sm">
                                <UIBadge variant="outline" className="font-normal border-primary/30 text-primary">
                                  {course.level}
                                </UIBadge>
                                <div className="flex items-center gap-1 text-gray-400">
                                  <Clock size={14} />
                                  <span>{course.duration}</span>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                              <p className="text-sm text-gray-400 mb-4">{course.description}</p>
                              <div className="mt-4">
                                <p className="font-medium">Modules inclus:</p>
                                <ul className="mt-2 space-y-2">
                                  {course.modules.slice(0, 3).map((module, idx) => (
                                    <li key={idx} className="text-sm flex items-start gap-2">
                                      <Check size={16} className="text-primary shrink-0 mt-1" />
                                      <span className="text-gray-300">{module.title}</span>
                                    </li>
                                  ))}
                                  {course.modules.length > 3 && (
                                    <li className="text-sm text-gray-500 italic">
                                      + {course.modules.length - 3} autres modules
                                    </li>
                                  )}
                                </ul>
                              </div>
                            </CardContent>
                            <CardFooter className="flex flex-col items-start border-t border-white/10 pt-4 bg-black/20">
                              <div className="text-lg font-semibold text-primary mb-3">{course.price}</div>
                              <Button 
                                variant="default" 
                                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/10" 
                                asChild
                              >
                                <Link to={`/contact?formation=${course.id}`} className="flex justify-between items-center">
                                  <span>Plus d'informations</span>
                                  <ArrowRight size={16} />
                                </Link>
                              </Button>
                            </CardFooter>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  {/* Similar pattern for other tabs but with filtered courses */}
                  <TabsContent value="debutant" className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {courses.filter(c => c.level === "Débutant").map((course, index) => (
                        <motion.div
                          key={course.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ y: -5 }}
                        >
                          <Card className="bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-md border border-white/10 h-full flex flex-col overflow-hidden hover:shadow-[0_0_25px_rgba(155,135,245,0.15)] hover:border-primary/30 transition-all duration-300 group">
                            <CardHeader>
                              <div className="text-primary mb-3 p-3 bg-white/5 rounded-lg w-fit group-hover:bg-primary/10 transition-all duration-300">{course.icon}</div>
                              <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{course.title}</CardTitle>
                              <div className="flex items-center gap-2 mt-2 text-sm">
                                <UIBadge variant="outline" className="font-normal border-primary/30 text-primary">
                                  {course.level}
                                </UIBadge>
                                <div className="flex items-center gap-1 text-gray-400">
                                  <Clock size={14} />
                                  <span>{course.duration}</span>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                              <p className="text-sm text-gray-400 mb-4">{course.description}</p>
                              <div className="mt-4">
                                <p className="font-medium">Modules inclus:</p>
                                <ul className="mt-2 space-y-2">
                                  {course.modules.slice(0, 3).map((module, idx) => (
                                    <li key={idx} className="text-sm flex items-start gap-2">
                                      <Check size={16} className="text-primary shrink-0 mt-1" />
                                      <span className="text-gray-300">{module.title}</span>
                                    </li>
                                  ))}
                                  {course.modules.length > 3 && (
                                    <li className="text-sm text-gray-500 italic">
                                      + {course.modules.length - 3} autres modules
                                    </li>
                                  )}
                                </ul>
                              </div>
                            </CardContent>
                            <CardFooter className="flex flex-col items-start border-t border-white/10 pt-4 bg-black/20">
                              <div className="text-lg font-semibold text-primary mb-3">{course.price}</div>
                              <Button 
                                variant="default" 
                                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/10" 
                                asChild
                              >
                                <Link to={`/contact?formation=${course.id}`} className="flex justify-between items-center">
                                  <span>Plus d'informations</span>
                                  <ArrowRight size={16} />
                                </Link>
                              </Button>
                            </CardFooter>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="intermediaire" className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {courses.filter(c => c.level === "Intermédiaire").map((course, index) => (
                        <motion.div
                          key={course.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ y: -5 }}
                        >
                          <Card className="bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-md border border-white/10 h-full flex flex-col overflow-hidden hover:shadow-[0_0_25px_rgba(155,135,245,0.15)] hover:border-primary/30 transition-all duration-300 group">
                            <CardHeader>
                              <div className="text-primary mb-3 p-3 bg-white/5 rounded-lg w-fit group-hover:bg-primary/10 transition-all duration-300">{course.icon}</div>
                              <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{course.title}</CardTitle>
                              <div className="flex items-center gap-2 mt-2 text-sm">
                                <UIBadge variant="outline" className="font-normal border-primary/30 text-primary">
                                  {course.level}
                                </UIBadge>
                                <div className="flex items-center gap-1 text-gray-400">
                                  <Clock size={14} />
                                  <span>{course.duration}</span>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                              <p className="text-sm text-gray-400 mb-4">{course.description}</p>
                              <div className="mt-4">
                                <p className="font-medium">Modules inclus:</p>
                                <ul className="mt-2 space-y-2">
                                  {course.modules.slice(0, 3).map((module, idx) => (
                                    <li key={idx} className="text-sm flex items-start gap-2">
                                      <Check size={16} className="text-primary shrink-0 mt-1" />
                                      <span className="text-gray-300">{module.title}</span>
                                    </li>
                                  ))}
                                  {course.modules.length > 3 && (
                                    <li className="text-sm text-gray-500 italic">
                                      + {course.modules.length - 3} autres modules
                                    </li>
                                  )}
                                </ul>
                              </div>
                            </CardContent>
                            <CardFooter className="flex flex-col items-start border-t border-white/10 pt-4 bg-black/20">
                              <div className="text-lg font-semibold text-primary mb-3">{course.price}</div>
                              <Button 
                                variant="default" 
                                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/10" 
                                asChild
                              >
                                <Link to={`/contact?formation=${course.id}`} className="flex justify-between items-center">
                                  <span>Plus d'informations</span>
                                  <ArrowRight size={16} />
                                </Link>
                              </Button>
                            </CardFooter>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="avance" className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {courses.filter(c => c.level === "Avancé" || c.level === "Expert").map((course, index) => (
                        <motion.div
                          key={course.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ y: -5 }}
                        >
                          <Card className="bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-md border border-white/10 h-full flex flex-col overflow-hidden hover:shadow-[0_0_25px_rgba(155,135,245,0.15)] hover:border-primary/30 transition-all duration-300 group">
                            <CardHeader>
                              <div className="text-primary mb-3 p-3 bg-white/5 rounded-lg w-fit group-hover:bg-primary/10 transition-all duration-300">{course.icon}</div>
                              <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{course.title}</CardTitle>
                              <div className="flex items-center gap-2 mt-2 text-sm">
                                <UIBadge variant="outline" className="font-normal border-primary/30 text-primary">
                                  {course.level}
                                </UIBadge>
                                <div className="flex items-center gap-1 text-gray-400">
                                  <Clock size={14} />
                                  <span>{course.duration}</span>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                              <p className="text-sm text-gray-400 mb-4">{course.description}</p>
                              <div className="mt-4">
                                <p className="font-medium">Modules inclus:</p>
                                <ul className="mt-2 space-y-2">
                                  {course.modules.slice(0, 3).map((module, idx) => (
                                    <li key={idx} className="text-sm flex items-start gap-2">
                                      <Check size={16} className="text-primary shrink-0 mt-1" />
                                      <span className="text-gray-300">{module.title}</span>
                                    </li>
                                  ))}
                                  {course.modules.length > 3 && (
                                    <li className="text-sm text-gray-500 italic">
                                      + {course.modules.length - 3} autres modules
                                    </li>
                                  )}
                                </ul>
                              </div>
                            </CardContent>
                            <CardFooter className="flex flex-col items-start border-t border-white/10 pt-4 bg-black/20">
                              <div className="text-lg font-semibold text-primary mb-3">{course.price}</div>
                              <Button 
                                variant="default" 
                                className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/10" 
                                asChild
                              >
                                <Link to={`/contact?formation=${course.id}`} className="flex justify-between items-center">
                                  <span>Plus d'informations</span>
                                  <ArrowRight size={16} />
                                </Link>
                              </Button>
                            </CardFooter>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </PageContainer>
        </section>
        
        {/* Research & Innovation Section - NEW */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          <PageContainer className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">Recherche & Innovation en IA</h2>
                
                <div className="space-y-6 text-gray-300">
                  <p>
                    En tant que chercheur passionné et praticien de l'IA, <strong className="text-white">Dominiqk Mendy</strong> ne se 
                    contente pas de suivre les tendances - il contribue activement à l'écosystème de l'IA par :
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <FileText size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Publications & Articles</h4>
                        <p className="text-gray-400">Contributions régulières à des revues technologiques et plateformes spécialisées sur les avancées en IA</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <Target size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Projets de Recherche</h4>
                        <p className="text-gray-400">Collaboration avec des laboratoires et universités sur des applications innovantes de l'IA dans divers secteurs</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <Award size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Développement de Solutions</h4>
                        <p className="text-gray-400">Conception d'architectures IA avancées pour résoudre des problèmes complexes dans les secteurs public et privé</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 rounded-lg bg-white/5 border border-white/10">
                    <p className="italic">
                      "Mon engagement dans la recherche me permet d'intégrer les avancées les plus récentes 
                      de l'IA dans mes formations, offrant ainsi aux participants une longueur d'avance 
                      dans ce domaine en constante évolution."
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-0.5 rounded-2xl backdrop-blur-sm">
                  <div className="bg-black/50 backdrop-blur-md p-6 rounded-2xl h-full border border-white/10">
                    <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">Domaines d'Expertise & Recherche</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { name: "Deep Learning", level: 95 },
                        { name: "Traitement du Langage Naturel", level: 90 },
                        { name: "Vision par Ordinateur", level: 85 },
                        { name: "IA Générative", level: 92 },
                        { name: "Transformation Digitale", level: 96 },
                        { name: "Machine Learning", level: 94 },
                        { name: "Edge AI & IoT", level: 82 },
                        { name: "Éthique de l'IA", level: 88 }
                      ].map((skill, idx) => (
                        <motion.div 
                          key={idx}
                          className="p-4 rounded-lg bg-black/30 border border-white/5 hover:border-primary/20 transition-all duration-300"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                          whileHover={{ y: -3 }}
                        >
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-xs text-primary">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-1.5">
                            <div 
                              className="bg-gradient-to-r from-blue-400 to-purple-400 h-1.5 rounded-full" 
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </PageContainer>
        </section>
        
        {/* Testimonials Section with improved styling */}
        <section className="py-20 bg-black/30 backdrop-blur-md border-t border-b border-white/10">
          <PageContainer>
            <div className="max-w-2xl mx-auto text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">Ce Qu'ils En Disent</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 mx-auto mb-6 rounded-full"></div>
                <p className="text-gray-300">Témoignages de participants à nos formations IA</p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(155,135,245,0.2)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 rounded-full overflow-hidden mr-4 bg-primary/20 flex items-center justify-center">
                        <Star className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 italic flex-grow">{testimonial.text}</p>
                    <div className="flex mt-4">
                      {Array(5).fill(0).map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-500 mr-1" fill="#EAB308" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </PageContainer>
        </section>
        
        {/* CTA Section with enhanced design */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-600/5 to-blue-600/5 opacity-50"></div>
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          
          <PageContainer className="relative z-10">
            <div className="max-w-3xl mx-auto">
              <motion.div
                className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-lg p-8 md:p-12 rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(155,135,245,0.15)]"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
                    Prêt à Développer Votre Expertise en IA?
                  </h2>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 mx-auto mb-6 rounded-full"></div>
                  <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                    Contactez-nous pour une formation sur mesure adaptée à vos besoins, 
                    ou pour recevoir notre catalogue détaillé de formations.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105" asChild>
                      <Link to="/contact" className="flex items-center gap-2">
                        <span>Demander un devis</span>
                        <Send className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                      asChild
                    >
                      <Link to="/contact" className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>Planifier un appel</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </PageContainer>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AITrainingPage;

