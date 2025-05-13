import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, BrainCircuit, BookOpen, Award, Users, Globe, Zap, Target, Badge, Check, FileText, Briefcase, GraduationCap, Video, MessageSquare, Rocket, Star, Clock, Calendar, DollarSign, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge as UIBadge } from "@/components/ui/badge";

// SEO metadata
const pageTitle = "Formation IA | Dominique Mendy | Expert Intelligence Artificielle";
const pageDescription = "Formations professionnelles en intelligence artificielle par Dominique Mendy. Apprenez à maîtriser l'IA, le machine learning et la data science avec notre expert international.";
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
      text: "La formation Deep Learning dispensée par Dominique a transformé notre approche de l'innovation produit. Son expertise et sa pédagogie sont remarquables. Nous avons immédiatement pu appliquer les concepts dans nos projets."
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
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block mb-4">
                  <div className="p-4 bg-primary/10 rounded-full backdrop-blur-sm border border-primary/20">
                    <GraduationCap size={48} className="text-primary animate-pulse-glow" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Formations <span className="animate-gradient-slow">Intelligence Artificielle</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Développez votre expertise en IA auprès d'un consultant international reconnu. 
                  Des formations sur mesure pour tous les niveaux, du débutant à l'expert.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105" asChild>
                    <Link to="/contact" className="flex items-center gap-2">
                      <span>Demander un devis</span>
                      <ArrowRight className="h-4 w-4 animate-float" />
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
          </div>
        </section>
        
        {/* Statistics Section with enhanced card styling */}
        <section className="py-12 bg-black/30 backdrop-blur-md border-t border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "1200+", label: "Professionnels formés", delay: 0.1 },
                { value: "12", label: "Pays africains", delay: 0.2 },
                { value: "98%", label: "Taux de satisfaction", delay: 0.3 },
                { value: "45+", label: "Entreprises partenaires", delay: 0.4 }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  className="text-center p-6 rounded-xl bg-black/20 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(155,135,245,0.3)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: stat.delay }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="text-primary font-bold text-4xl mb-2 animate-gradient-slow">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section with enhanced cards */}
        <section id="pourquoi" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Pourquoi Choisir Nos Formations ?</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-muted-foreground">Des formations d'excellence en IA conçues par un expert international reconnu, adaptées au contexte africain et aux enjeux globaux.</p>
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
                  className="bg-black/20 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(155,135,245,0.2)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: feature.delay }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-primary mb-4 p-3 bg-white/5 rounded-lg inline-block group-hover:bg-primary/10 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Courses Section with enhanced card design */}
        <section id="formations" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Nos Formations IA</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-muted-foreground">Du niveau débutant à expert, découvrez nos formations spécialisées en intelligence artificielle</p>
              
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
                          <Card className="bg-black/30 backdrop-blur-md border border-white/10 h-full flex flex-col overflow-hidden hover:shadow-[0_0_25px_rgba(155,135,245,0.15)] hover:border-primary/30 transition-all duration-300 group">
                            <CardHeader>
                              <div className="text-primary mb-3 p-3 bg-white/5 rounded-lg w-fit group-hover:bg-primary/10 transition-all duration-300">{course.icon}</div>
                              <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{course.title}</CardTitle>
                              <div className="flex items-center gap-2 mt-2 text-sm">
                                <UIBadge variant="outline" className="font-normal border-primary/30 text-primary">
                                  {course.level}
                                </UIBadge>
                                <div className="flex items-center gap-1 text-muted-foreground">
                                  <Clock size={14} />
                                  <span>{course.duration}</span>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                              <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                              <div className="mt-4">
                                <p className="font-medium">Modules inclus:</p>
                                <ul className="mt-2 space-y-2">
                                  {course.modules.slice(0, 3).map((module, idx) => (
                                    <li key={idx} className="text-sm flex items-start gap-2">
                                      <Check size={16} className="text-primary shrink-0 mt-1" />
                                      <span>{module.title}</span>
                                    </li>
                                  ))}
                                  {course.modules.length > 3 && (
                                    <li className="text-sm text-muted-foreground italic">
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
                                className="w-full bg-primary/80 hover:bg-primary transition-all duration-300" 
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
                          <Card className="bg-black/30 backdrop-blur-md border border-white/10 h-full flex flex-col overflow-hidden hover:shadow-[0_0_25px_rgba(155,135,245,0.15)] hover:border-primary/30 transition-all duration-300 group">
                            <CardHeader>
                              <div className="text-primary mb-3 p-3 bg-white/5 rounded-lg w-fit group-hover:bg-primary/10 transition-all duration-300">{course.icon}</div>
                              <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{course.title}</CardTitle>
                              <div className="flex items-center gap-2 mt-2 text-sm">
                                <UIBadge variant="outline" className="font-normal border-primary/30 text-primary">
                                  {course.level}
                                </UIBadge>
                                <div className="flex items-center gap-1 text-muted-foreground">
