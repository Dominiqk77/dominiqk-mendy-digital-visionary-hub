
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
      const nodeCount = 20;
      for (let i = 0; i < nodeCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 2 + 1;
        const connections = [];
        const color = `rgba(64, 179, 255, ${Math.random() * 0.5 + 0.3})`;
        
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
      
      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
        
        // Move stars slightly
        star.y += star.velocity;
        
        // Reset star position if it goes off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      // Draw nodes and connections
      nodes.forEach((node, index) => {
        // Draw connections first (so they appear behind nodes)
        node.connections.forEach(connIndex => {
          if (connIndex < nodes.length) {
            const connectedNode = nodes[connIndex];
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(connectedNode.x, connectedNode.y);
            ctx.strokeStyle = `rgba(64, 179, 255, 0.2)`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
        
        // Draw the node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
        
        // Subtle movement
        node.x += Math.sin(Date.now() * 0.001 + index) * 0.2;
        node.y += Math.cos(Date.now() * 0.001 + index) * 0.2;
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
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block text-primary mb-4">
                  <GraduationCap size={48} />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Formations <span className="text-gradient">Intelligence Artificielle</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Développez votre expertise en IA auprès d'un consultant international reconnu. 
                  Des formations sur mesure pour tous les niveaux, du débutant à l'expert.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90" asChild>
                    <Link to="/contact" className="flex items-center gap-2">
                      <span>Demander un devis</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
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
        
        {/* Statistics Section */}
        <section className="py-12 bg-black/30 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-primary font-bold text-4xl mb-2">1200+</div>
                <div className="text-muted-foreground">Professionnels formés</div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-primary font-bold text-4xl mb-2">12</div>
                <div className="text-muted-foreground">Pays africains</div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-primary font-bold text-4xl mb-2">98%</div>
                <div className="text-muted-foreground">Taux de satisfaction</div>
              </motion.div>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="text-primary font-bold text-4xl mb-2">45+</div>
                <div className="text-muted-foreground">Entreprises partenaires</div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section id="pourquoi" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Pourquoi Choisir Nos Formations ?</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground">Des formations d'excellence en IA conçues par un expert international reconnu, adaptées au contexte africain et aux enjeux globaux.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-black/20 backdrop-blur-sm p-8 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="text-primary mb-4">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expertise Internationale</h3>
                <p className="text-muted-foreground">Bénéficiez de l'expertise d'un consultant qui a formé et conseillé des organisations en France, au Royaume-Uni, aux États-Unis et dans toute l'Afrique.</p>
              </motion.div>
              
              <motion.div 
                className="bg-black/20 backdrop-blur-sm p-8 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="text-primary mb-4">
                  <BookOpen size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Pédagogie Pratique</h3>
                <p className="text-muted-foreground">Nos formations privilégient la pratique avec 70% du temps consacré à des projets concrets, des études de cas réels et des workshops interactifs.</p>
              </motion.div>
              
              <motion.div 
                className="bg-black/20 backdrop-blur-sm p-8 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="text-primary mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Formations Sur Mesure</h3>
                <p className="text-muted-foreground">Chaque formation peut être adaptée aux besoins spécifiques de votre équipe ou organisation, avec des cas d'usage pertinents pour votre secteur.</p>
              </motion.div>
              
              <motion.div 
                className="bg-black/20 backdrop-blur-sm p-8 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="text-primary mb-4">
                  <Globe size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Contexte Africain</h3>
                <p className="text-muted-foreground">Nos formations intègrent des exemples et cas d'usage adaptés aux réalités africaines, avec une attention particulière aux défis et opportunités du continent.</p>
              </motion.div>
              
              <motion.div 
                className="bg-black/20 backdrop-blur-sm p-8 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="text-primary mb-4">
                  <Video size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Formats Flexibles</h3>
                <p className="text-muted-foreground">Choisissez entre formations présentielles, distancielles ou hybrides selon vos contraintes géographiques et organisationnelles.</p>
              </motion.div>
              
              <motion.div 
                className="bg-black/20 backdrop-blur-sm p-8 rounded-xl border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="text-primary mb-4">
                  <MessageSquare size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Suivi Post-Formation</h3>
                <p className="text-muted-foreground">Accès à une communauté d'apprenants, sessions de questions-réponses et accompagnement personnalisé après la formation.</p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Courses Section */}
        <section id="formations" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Nos Formations IA</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground">Du niveau débutant à expert, découvrez nos formations spécialisées en intelligence artificielle</p>
              
              {/* Filter tabs */}
              <div className="mt-8">
                <Tabs defaultValue="tout" className="w-full">
                  <TabsList className="grid grid-cols-4 w-full max-w-lg mx-auto">
                    <TabsTrigger value="tout">Toutes</TabsTrigger>
                    <TabsTrigger value="debutant">Débutant</TabsTrigger>
                    <TabsTrigger value="intermediaire">Intermédiaire</TabsTrigger>
                    <TabsTrigger value="avance">Avancé/Expert</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="tout" className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {courses.map((course, index) => (
                        <motion.div
                          key={course.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Card className="bg-black/30 backdrop-blur-md border border-white/10 h-full flex flex-col overflow-hidden">
                            <CardHeader>
                              <div className="text-primary mb-3">{course.icon}</div>
                              <CardTitle className="text-xl">{course.title}</CardTitle>
                              <div className="flex items-center gap-2 mt-2 text-sm">
                                <UIBadge variant="outline" className="font-normal">
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
                            <CardFooter className="flex flex-col items-start border-t border-white/10 pt-4">
                              <div className="text-lg font-semibold text-primary mb-3">{course.price}</div>
                              <Button variant="default" className="w-full" asChild>
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
                  
                  <TabsContent value="debutant" className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {courses.filter(c => c.level === "Débutant").map((course, index) => (
                        <motion.div
                          key={course.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Card className="bg-black/30 backdrop-blur-md border border-white/10 h-full flex flex-col overflow-hidden">
                            {/* Card content same as above */}
                            <CardHeader>
                              <div className="text-primary mb-3">{course.icon}</div>
                              <CardTitle className="text-xl">{course.title}</CardTitle>
                              <div className="flex items-center gap-2 mt-2 text-sm">
                                <UIBadge variant="outline" className="font-normal">
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
                            <CardFooter className="flex flex-col items-start border-t border-white/10 pt-4">
                              <div className="text-lg font-semibold text-primary mb-3">{course.price}</div>
                              <Button variant="default" className="w-full" asChild>
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
                  
                  {/* Similar structure for other tabs */}
                  <TabsContent value="intermediaire" className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {courses.filter(c => c.level === "Intermédiaire").map((course, index) => (
                        <motion.div
                          key={course.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <Card className="bg-black/30 backdrop-blur-md border border-white/10 h-full flex flex-col overflow-hidden">
                            {/* Same card structure as above */}
                            <CardHeader>
                              <div className="text-primary mb-3">{course.icon}</div>
                              <CardTitle className="text-xl">{course.title}</CardTitle>
                              <div className="flex items-center gap-2 mt-2 text-sm">
                                <UIBadge variant="outline" className="font-normal">
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
                            <CardFooter className="flex flex-col items-start border-t border-white/10 pt-4">
                              <div className="text-lg font-semibold text-primary mb-3">{course.price}</div>
                              <Button variant="default" className="w-full" asChild>
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
                        >
                          <Card className="bg-black/30 backdrop-blur-md border border-white/10 h-full flex flex-col overflow-hidden">
                            {/* Same card structure as above */}
                            <CardHeader>
                              <div className="text-primary mb-3">{course.icon}</div>
                              <CardTitle className="text-xl">{course.title}</CardTitle>
                              <div className="flex items-center gap-2 mt-2 text-sm">
                                <UIBadge variant="outline" className="font-normal">
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
                            <CardFooter className="flex flex-col items-start border-t border-white/10 pt-4">
                              <div className="text-lg font-semibold text-primary mb-3">{course.price}</div>
                              <Button variant="default" className="w-full" asChild>
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
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-20 bg-black/30 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Ce Qu'en Disent Nos Participants</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground">Découvrez les témoignages de professionnels et organisations qui ont suivi nos formations</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black/20 backdrop-blur-sm p-8 rounded-xl border border-white/10 relative"
                >
                  <div className="absolute -top-3 -left-3 text-primary opacity-30">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 11H6C4.89543 11 4 10.1046 4 9V6.5C4 5.39543 4.89543 4.5 6 4.5H9C10.1046 4.5 11 5.39543 11 6.5V17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19 11H15C13.8954 11 13 10.1046 13 9V6.5C13 5.39543 13.8954 4.5 15 4.5H18C19.1046 4.5 20 5.39543 20 6.5V17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 mt-4 italic">"{testimonial.text}"</p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Clients/Partners Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Ils Nous Font Confiance</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground">Organisations et institutions qui ont bénéficié de nos formations en IA</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {/* Placeholder logos - would be replaced with actual client logos */}
              {Array.from({ length: 12 }).map((_, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ opacity: 1 }}
                  className="flex items-center justify-center h-20"
                >
                  <img src="/placeholder.svg" alt={`Client ${idx + 1}`} className="max-h-full max-w-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Custom Training Section */}
        <section className="py-20 bg-black/30 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4">Formation Sur Mesure</h2>
                <div className="h-1 w-24 bg-gradient-primary mb-6"></div>
                <p className="text-muted-foreground mb-6">
                  Besoin d'une formation adaptée aux défis spécifiques de votre organisation ? 
                  Je conçois des programmes sur mesure qui répondent précisément à vos objectifs et au niveau de vos équipes.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-primary shrink-0 mt-1" />
                    <span>Analyse préalable de vos besoins et objectifs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-primary shrink-0 mt-1" />
                    <span>Contenu adapté à votre secteur d'activité et vos cas d'usage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-primary shrink-0 mt-1" />
                    <span>Flexibilité des formats et durées de formation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check size={20} className="text-primary shrink-0 mt-1" />
                    <span>Suivi post-formation et accompagnement dans la mise en pratique</span>
                  </li>
                </ul>
                
                <Button size="lg" className="bg-gradient-primary hover:opacity-90" asChild>
                  <Link to="/contact?sujet=formation-sur-mesure" className="flex items-center gap-2">
                    <span>Demander un programme personnalisé</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-black/40 backdrop-blur-lg p-8 rounded-xl border border-white/10"
              >
                <h3 className="text-xl font-semibold mb-6">Demande d'information</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">Nom</label>
                      <Input id="name" placeholder="Votre nom" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                      <Input id="email" type="email" placeholder="Votre email" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-1">Entreprise</label>
                    <Input id="company" placeholder="Nom de votre entreprise" />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">Thématique d'intérêt</label>
                    <Input id="subject" placeholder="Ex: Intelligence Artificielle Générative" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <Textarea id="message" placeholder="Précisez vos besoins de formation" rows={4} />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    Envoyer ma demande
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Questions Fréquentes</h2>
                <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
              </div>
              
              <div className="space-y-6">
                <Card className="bg-black/20 backdrop-blur-sm border border-white/10">
                  <CardHeader>
                    <CardTitle className="text-xl">Quel niveau technique est requis pour suivre vos formations ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Nos formations sont adaptées à différents niveaux. Pour les formations débutantes, aucun prérequis technique n'est nécessaire, juste une bonne culture numérique. Pour les niveaux intermédiaires et avancés, des connaissances préalables en programmation (Python) sont recommandées. Pour les formations destinées aux dirigeants, aucune compétence technique n'est requise.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-black/20 backdrop-blur-sm border border-white/10">
                  <CardHeader>
                    <CardTitle className="text-xl">Les formations peuvent-elles être dispensées en anglais ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Absolument. Toutes nos formations peuvent être dispensées en français ou en anglais, selon vos préférences. Le matériel pédagogique est disponible dans les deux langues. Nous pouvons également proposer des formations bilingues si votre équipe comprend des collaborateurs francophones et anglophones.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-black/20 backdrop-blur-sm border border-white/10">
                  <CardHeader>
                    <CardTitle className="text-xl">Proposez-vous des certifications reconnues ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Oui, tous les participants reçoivent une attestation de suivi de formation. Pour certaines formations techniques avancées, nous proposons également une préparation aux certifications internationales comme TensorFlow Developer Certificate ou AWS Machine Learning Specialty. Ces certifications font l'objet d'examens séparés auprès des organismes certificateurs.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-black/20 backdrop-blur-sm border border-white/10">
                  <CardHeader>
                    <CardTitle className="text-xl">Quelles sont les modalités pratiques des formations ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Les formations peuvent être dispensées en présentiel dans vos locaux, dans nos centres partenaires à Dakar, Paris, Abidjan ou Londres, ou à distance via des outils de visioconférence. Pour les formations techniques, chaque participant doit disposer d'un ordinateur. Des environnements cloud préconfigurés sont fournis pour les travaux pratiques, évitant ainsi les problèmes d'installation locale.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-black/20 backdrop-blur-sm border border-white/10">
                  <CardHeader>
                    <CardTitle className="text-xl">Combien de participants par session de formation ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Pour garantir une qualité pédagogique optimale, nos formations sont limitées à 12 participants maximum. Pour les formations très techniques ou les workshops intensifs, nous recommandons des groupes de 6 à 8 personnes pour favoriser l'interaction et l'accompagnement personnalisé. Des tarifs dégressifs sont proposés pour les groupes.</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-12 text-center">
                <Button variant="outline" className="font-medium" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>Une autre question ? Contactez-moi</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-gradient-to-r from-gray-900 to-black rounded-2xl overflow-hidden border-gradient border-gradient-strong">
              <div className="p-12 md:p-16 relative">
                {/* Background effects */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary opacity-20 blur-3xl rounded-full"></div>
                
                {/* Senegal flag stripe with very low opacity */}
                <div className="absolute inset-0 opacity-5 senegal-flag-gradient"></div>
                
                <div className="relative z-10 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Prêt à développer vos compétences en IA ?
                  </h2>
                  <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
                    Donnez à votre équipe ou votre organisation les clés pour maîtriser l'intelligence artificielle et transformer votre approche business grâce à l'expertise de pointe.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity font-medium text-white" asChild>
                      <Link to="/contact" className="flex items-center gap-2">
                        <span>Contacter un expert</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                      <Link to="/services" className="flex items-center gap-2">
                        <span>Explorer tous nos services</span>
                        <ArrowRight className="h-4 w-4" />
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

export default AITrainingPage;

