import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import PageContainer from '@/components/layout/PageContainer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Lightbulb,
  TrendingUp,
  Layers,
  BarChart,
  Target,
  Users,
  Briefcase,
  Compass,
  Shuffle,
  PieChart,
  LineChart,
  ArrowRight,
  CheckCircle,
  Award,
  Repeat,
  Globe,
  Zap,
  BookOpen,
  Rocket,
  MessageCircle,
  UserCheck,
  Clock,
  Inbox,
  Star
} from 'lucide-react';

// Consulting Process Canvas Animation Component
const ConsultingProcessCanvas = () => {
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
    
    // Process phases as nodes
    const phases = [
      { name: "Discovery", x: dimensions.width * 0.2, y: dimensions.height * 0.5 },
      { name: "Analysis", x: dimensions.width * 0.4, y: dimensions.height * 0.3 },
      { name: "Strategy", x: dimensions.width * 0.6, y: dimensions.height * 0.6 },
      { name: "Implementation", x: dimensions.width * 0.8, y: dimensions.height * 0.4 }
    ];
    
    // Create connections
    const connections = [];
    for (let i = 0; i < phases.length - 1; i++) {
      connections.push({
        from: phases[i],
        to: phases[i + 1],
        progress: 0,
        speed: 0.005 + Math.random() * 0.005
      });
    }
    
    // Add diagonal connections for complexity
    connections.push({
      from: phases[0],
      to: phases[2],
      progress: 0,
      speed: 0.003
    });
    connections.push({
      from: phases[1],
      to: phases[3],
      progress: 0,
      speed: 0.004
    });
    
    // Insight nodes - smaller connecting nodes
    const insights = [];
    for (let i = 0; i < 15; i++) {
      insights.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 2 + 1,
        connections: []
      });
    }
    
    // Connect insights to nearest phases
    insights.forEach(insight => {
      let nearestPhase = phases[0];
      let minDistance = Number.MAX_VALUE;
      
      phases.forEach(phase => {
        const distance = Math.sqrt(
          Math.pow(phase.x - insight.x, 2) + 
          Math.pow(phase.y - insight.y, 2)
        );
        
        if (distance < minDistance) {
          minDistance = distance;
          nearestPhase = phase;
        }
      });
      
      if (minDistance < dimensions.width * 0.3) {
        insight.connections.push({
          to: nearestPhase,
          progress: 0,
          speed: 0.002 + Math.random() * 0.004
        });
      }
    });
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw main process connections
      connections.forEach(conn => {
        const gradient = ctx.createLinearGradient(
          conn.from.x, conn.from.y, conn.to.x, conn.to.y
        );
        gradient.addColorStop(0, 'rgba(99, 102, 241, 0)');
        gradient.addColorStop(conn.progress, 'rgba(139, 92, 246, 0.6)');
        gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
        
        ctx.beginPath();
        ctx.moveTo(conn.from.x, conn.from.y);
        ctx.lineTo(conn.to.x, conn.to.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Update data packet movement
        conn.progress += conn.speed;
        if (conn.progress > 1) conn.progress = 0;
      });
      
      // Draw insight connections
      insights.forEach(insight => {
        insight.connections.forEach(conn => {
          const gradient = ctx.createLinearGradient(
            insight.x, insight.y, conn.to.x, conn.to.y
          );
          gradient.addColorStop(0, 'rgba(99, 102, 241, 0)');
          gradient.addColorStop(conn.progress, 'rgba(139, 92, 246, 0.4)');
          gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
          
          ctx.beginPath();
          ctx.moveTo(insight.x, insight.y);
          ctx.lineTo(conn.to.x, conn.to.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.stroke();
          
          conn.progress += conn.speed;
          if (conn.progress > 1) conn.progress = 0;
        });
      });
      
      // Draw phase nodes
      phases.forEach(phase => {
        ctx.beginPath();
        ctx.arc(phase.x, phase.y, 5, 0, Math.PI * 2, false);
        ctx.fillStyle = 'rgba(139, 92, 246, 0.8)';
        ctx.fill();
      });
      
      // Draw insights nodes
      insights.forEach(insight => {
        ctx.beginPath();
        ctx.arc(insight.x, insight.y, insight.size, 0, Math.PI * 2, false);
        ctx.fillStyle = 'rgba(129, 140, 248, 0.5)';
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
  
  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-30" />;
};

const ConsultingServices = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Services de Conseil Stratégique | Dominiqk Mendy';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Découvrez nos services de conseil stratégique en transformation digitale, innovation et croissance. Une approche sur mesure pour propulser votre entreprise vers l\'excellence.'
      );
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Animation tracking metrics that update over time
  const [consultingMetrics, setConsultingMetrics] = useState({
    projectSuccess: 97,
    clientSatisfaction: 99.2,
    avgROI: 342, // percentage
    transformationSpeed: 68 // percentage improvement
  });

  useEffect(() => {
    // Update metrics slightly every 4 seconds to simulate real-time data
    const interval = setInterval(() => {
      setConsultingMetrics(prev => ({
        projectSuccess: Number((prev.projectSuccess + (Math.random() * 0.4 - 0.2)).toFixed(1)),
        clientSatisfaction: Number((prev.clientSatisfaction + (Math.random() * 0.2 - 0.1)).toFixed(1)),
        avgROI: Math.floor(prev.avgROI + (Math.random() * 6 - 3)),
        transformationSpeed: Number((prev.transformationSpeed + (Math.random() * 1.5 - 0.75)).toFixed(1))
      }));
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  // Consulting services data
  const consultingServices = [
    {
      title: "Stratégie de Transformation Digitale",
      description: "Élaboration de feuilles de route sur mesure pour transformer votre organisation grâce au numérique et répondre aux défis d'un environnement en constante évolution.",
      icon: <Shuffle className="h-10 w-10 text-blue-400" />,
      features: [
        "Audit de maturité digitale",
        "Vision stratégique personnalisée",
        "Roadmap d'implémentation",
        "Accompagnement au changement"
      ],
      color: "from-blue-600 to-indigo-600",
      badge: "Populaire"
    },
    {
      title: "Conseil en Innovation",
      description: "Catalysez l'innovation au sein de votre organisation en exploitant les dernières technologies et méthodologies pour créer de nouveaux produits, services et modèles d'affaires.",
      icon: <Lightbulb className="h-10 w-10 text-amber-400" />,
      features: [
        "Exploration des technologies émergentes",
        "Design thinking et idéation",
        "Validation de concept et prototypage",
        "Stratégie de déploiement"
      ],
      color: "from-amber-600 to-orange-600",
    },
    {
      title: "Optimisation des Processus",
      description: "Identifiez et éliminez les inefficacités opérationnelles pour améliorer la productivité, réduire les coûts et augmenter la satisfaction client.",
      icon: <TrendingUp className="h-10 w-10 text-green-400" />,
      features: [
        "Cartographie et analyse des processus",
        "Réingénierie orientée valeur",
        "Automatisation intelligente",
        "Mesure continue des performances"
      ],
      color: "from-green-600 to-emerald-600",
    },
    {
      title: "Intelligence d'Affaires & Analytique",
      description: "Transformez vos données en insights actionnables pour une prise de décision éclairée et une compréhension approfondie de votre marché et de vos opérations.",
      icon: <BarChart className="h-10 w-10 text-purple-400" />,
      features: [
        "Architectures de données décisionnelles",
        "Dashboards stratégiques",
        "Analytique prédictive",
        "Formation à la culture data-driven"
      ],
      color: "from-purple-600 to-fuchsia-600",
      badge: "Avancé"
    },
    {
      title: "Accompagnement à la Croissance",
      description: "Stratégies de croissance adaptées à votre stade de développement, votre marché et vos ambitions, avec un focus sur l'exécution et les résultats mesurables.",
      icon: <Rocket className="h-10 w-10 text-blue-400" />,
      features: [
        "Identification d'opportunités de marché",
        "Stratégies d'expansion et diversification",
        "Optimisation des canaux de vente",
        "Partenariats stratégiques"
      ],
      color: "from-blue-600 to-sky-600",
    },
    {
      title: "Conduite du Changement",
      description: "Facilitez l'adoption des transformations au sein de votre organisation en impliquant vos équipes et en développant une culture d'amélioration continue.",
      icon: <Users className="h-10 w-10 text-violet-400" />,
      features: [
        "Analyse d'impact et résistances",
        "Communication stratégique",
        "Formation et accompagnement",
        "Mesure de l'adoption"
      ],
      color: "from-violet-600 to-indigo-600",
    }
  ];

  // Methodologies that differentiate our consulting approach
  const methodologies = [
    {
      title: "Design Thinking",
      description: "Une approche centrée sur l'utilisateur final, combinant empathie, créativité et rationalité pour résoudre des problèmes complexes.",
      icon: <Layers className="h-6 w-6 text-indigo-400" />
    },
    {
      title: "Agile Strategic Planning",
      description: "Méthode hybride alliant vision à long terme et adaptation rapide aux changements du marché et aux feedbacks.",
      icon: <Shuffle className="h-6 w-6 text-green-400" />
    },
    {
      title: "Data-Driven Decision Making",
      description: "L'analyse de données au cœur de chaque recommandation, pour des stratégies basées sur des insights objectifs.",
      icon: <PieChart className="h-6 w-6 text-blue-400" />
    },
    {
      title: "Contextual Innovation",
      description: "Approche d'innovation tenant compte des réalités spécifiques de votre marché, votre culture et vos contraintes.",
      icon: <Compass className="h-6 w-6 text-amber-400" />
    }
  ];

  // Case studies showcasing successful consulting projects
  const caseStudies = [
    {
      title: "Transformation digitale d'une banque régionale",
      result: "Augmentation de 164% de l'acquisition client digital",
      description: "Élaboration et implémentation d'une stratégie digitale complète, incluant modernisation des systèmes, refonte de l'expérience client et développement d'une culture data-driven.",
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      title: "Optimisation des opérations d'un groupe agroalimentaire",
      result: "Réduction des coûts opérationnels de 32%",
      description: "Cartographie complète de la chaîne de valeur, identification des inefficiences et implémentation d'automatisations stratégiques, accompagnées d'une transformation des processus clés.",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "Stratégie d'innovation pour une entreprise tech",
      result: "Lancement de 3 nouveaux produits à fort impact",
      description: "Organisation d'ateliers d'innovation structurés, exploration de technologies émergentes et développement de MVPs, suivis par une stratégie de mise sur le marché optimisée.",
      icon: <Lightbulb className="h-6 w-6" />
    }
  ];

  // Client testimonials
  const testimonials = [
    {
      quote: "L'approche méthodique et les insights stratégiques de Dominiqk ont transformé notre vision de la croissance digitale, avec des résultats qui ont dépassé nos projections les plus optimistes.",
      author: "Sarah K.",
      position: "Directrice Générale, Groupe financier",
      avatar: <Users className="h-10 w-10" />
    },
    {
      quote: "La capacité de Dominiqk à combiner vision stratégique et exécution pragmatique a été déterminante dans la réussite de notre transformation. Un partenaire de conseil exceptionnel.",
      author: "Michel T.",
      position: "VP Transformation, Entreprise industrielle",
      avatar: <Users className="h-10 w-10" />
    }
  ];

  // Areas of expertise
  const expertiseAreas = [
    {
      domain: "Industries",
      expertise: [
        "Services financiers",
        "Retail & E-commerce",
        "Manufacturier & Logistique",
        "Télécommunications",
        "Éducation & Formation"
      ],
      icon: <Briefcase className="h-8 w-8 text-indigo-400" />
    },
    {
      domain: "Technologies",
      expertise: [
        "Intelligence Artificielle",
        "Automatisation des processus",
        "Cloud & Edge Computing",
        "IoT & Systèmes embarqués",
        "Blockchain & Web3"
      ],
      icon: <Zap className="h-8 w-8 text-blue-400" />
    },
    {
      domain: "Stratégies",
      expertise: [
        "Transformation digitale",
        "Innovation de rupture",
        "Analyse concurrentielle",
        "Planification stratégique",
        "Gestion du changement"
      ],
      icon: <Target className="h-8 w-8 text-amber-400" />
    }
  ];

  // Consulting framework - our structured approach
  const consultingFramework = [
    {
      phase: "Découverte",
      description: "Immersion profonde dans votre organisation, compréhension des enjeux et opportunités spécifiques à votre contexte.",
      activities: [
        "Entretiens avec parties prenantes",
        "Analyse documentaire approfondie",
        "Benchmarking sectoriel",
        "Cartographie des défis et opportunités"
      ],
      icon: <Globe className="h-10 w-10 text-indigo-400" />
    },
    {
      phase: "Analyse",
      description: "Traitement structuré des données collectées pour dégager des insights actionnables et prioriser les axes d'intervention.",
      activities: [
        "Analyse SWOT contextualisée",
        "Modélisation des scénarios",
        "Évaluation des impacts potentiels",
        "Priorisation stratégique"
      ],
      icon: <LineChart className="h-10 w-10 text-blue-400" />
    },
    {
      phase: "Stratégie",
      description: "Élaboration collaborative d'une feuille de route sur mesure avec objectifs, initiatives et indicateurs clairs.",
      activities: [
        "Co-création de la vision cible",
        "Définition des initiatives prioritaires",
        "Élaboration de la roadmap détaillée",
        "Construction du modèle de gouvernance"
      ],
      icon: <BookOpen className="h-10 w-10 text-purple-400" />
    },
    {
      phase: "Implémentation",
      description: "Accompagnement actif dans l'exécution pour garantir des résultats tangibles et l'acquisition de nouvelles capacités.",
      activities: [
        "Mise en place des équipes projet",
        "Coaching des leaders clés",
        "Gestion des risques proactive",
        "Mesure continue des progrès"
      ],
      icon: <Rocket className="h-10 w-10 text-amber-400" />
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
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 via-blue-900/10 to-black"></div>
      </div>
      <div className="fixed inset-0 tech-grid z-[-1] opacity-20"></div>
      
      <Navbar />
      
      <main className="flex-grow pt-20 relative">
        {/* Hero Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          {/* Abstract consulting process animation background */}
          <div className="absolute inset-0 z-0">
            <ConsultingProcessCanvas />
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
                  <div className="absolute inset-0 bg-blue-600/20 rounded-full animate-ping"></div>
                  <div className="relative flex items-center justify-center w-full h-full bg-blue-600/30 backdrop-blur-sm rounded-full border border-blue-500/50 group-hover:border-blue-400 transition-colors">
                    <Briefcase className="h-8 w-8 text-blue-400" />
                  </div>
                </div>
                
                <Badge className="mb-4 border-blue-500/30 text-blue-400 bg-blue-950/30">Expert en Conseil Stratégique</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Conseil Stratégique <br/> & Transformation
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Guidez votre organisation vers l'excellence avec des stratégies sur mesure qui combinent vision ambitieuse et exécution pragmatique, adaptées à vos défis spécifiques et objectifs de croissance.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white"
                    size="lg"
                    asChild
                  >
                    <Link to="/start-project" className="flex items-center gap-2">
                      <span>Discuter de votre projet</span>
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
                  <div className="absolute inset-0 bg-blue-600 rounded-full filter blur-[100px] opacity-30"></div>
                  
                  <div className="relative h-full w-full flex items-center justify-center">
                    <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] relative">
                      <div className="absolute inset-0 rounded-full border-4 border-dashed border-blue-500/30 animate-[spin_40s_linear_infinite]"></div>
                      
                      {/* Strategic Success Metrics */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-black/40 backdrop-blur-lg border border-blue-500/30 p-3 rounded-xl shadow-lg shadow-blue-500/20">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-blue-400 animate-pulse" />
                            <div>
                              <div className="text-xs text-gray-400">Taux de succès</div>
                              <div className="text-white font-bold">{consultingMetrics.projectSuccess}%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                        <div className="bg-black/40 backdrop-blur-lg border border-blue-500/30 p-3 rounded-xl shadow-lg shadow-blue-500/20">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-green-400" />
                            <div>
                              <div className="text-xs text-gray-400">ROI moyen</div>
                              <div className="text-white font-bold">+{consultingMetrics.avgROI}%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="bg-black/40 backdrop-blur-lg border border-blue-500/30 p-3 rounded-xl shadow-lg shadow-blue-500/20">
                          <div className="flex items-center gap-2">
                            <UserCheck className="h-5 w-5 text-amber-400" />
                            <div>
                              <div className="text-xs text-gray-400">Satisfaction client</div>
                              <div className="text-white font-bold">{consultingMetrics.clientSatisfaction}%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                        <div className="bg-black/40 backdrop-blur-lg border border-blue-500/30 p-3 rounded-xl shadow-lg shadow-blue-500/20">
                          <div className="flex items-center gap-2">
                            <Clock className="h-5 w-5 text-purple-400" />
                            <div>
                              <div className="text-xs text-gray-400">Vitesse transformation</div>
                              <div className="text-white font-bold">+{consultingMetrics.transformationSpeed}%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Central Strategy Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-32 h-32">
                          <div className="absolute inset-0 bg-blue-600/20 rounded-full animate-ping"></div>
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-40"></div>
                          <div className="relative flex items-center justify-center w-full h-full bg-blue-900/70 backdrop-blur-sm rounded-full border border-blue-500">
                            <Target className="h-16 w-16 text-blue-300" />
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

        {/* Expertise Areas Section */}
        <section className="py-16 relative">
          <div className="absolute left-0 top-0 w-1/3 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0"></div>
          <PageContainer>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <Badge className="mb-4 border-blue-500/30 text-blue-400 bg-blue-950/30">Notre Expertise</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  Une expertise diversifiée et spécialisée
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Notre connaissance approfondie de multiples industries et technologies nous permet d'apporter des perspectives uniques et des solutions innovantes adaptées à votre contexte spécifique.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={area.domain}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black/40 backdrop-blur-md border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-colors"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-lg bg-blue-900/40 border border-blue-500/30 flex items-center justify-center mr-4">
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{area.domain}</h3>
                  </div>
                  <ul className="space-y-2">
                    {area.expertise.map(item => (
                      <li key={item} className="flex items-start">
                        <div className="flex-shrink-0 mr-2 mt-1">
                          <CheckCircle className="h-4 w-4 text-blue-400" />
                        </div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </PageContainer>
        </section>
        
        {/* Services Section */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute top-0 left-0 w-1 h-40 bg-gradient-to-b from-blue-500/0 via-blue-500/30 to-blue-500/0"></div>
          <div className="absolute bottom-0 right-0 w-1 h-40 bg-gradient-to-b from-blue-500/0 via-blue-500/30 to-blue-500/0"></div>
          
          <PageContainer>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 border-blue-500/30 text-blue-400 bg-blue-950/30">Services de Conseil</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                Solutions Stratégiques pour Votre Croissance
              </h2>
              <p className="text-gray-300 text-lg">
                Découvrez notre gamme complète de services de conseil stratégique conçus pour répondre aux défis uniques de votre organisation et créer un avantage compétitif durable.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {consultingServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-black/40 backdrop-blur-md border border-blue-500/20 rounded-xl overflow-hidden group hover:border-blue-500/40 transition-colors"
                >
                  <div className="p-6">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-lg bg-blue-900/40 border border-blue-500/30 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                        {service.icon}
                      </div>
                      {service.badge && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs px-2 py-0.5 rounded">
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
                            <CheckCircle className="h-4 w-4 text-blue-400" />
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
                        <Link to="/contact" className="flex items-center justify-center gap-2">
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

        {/* Our Approach / Framework Section */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-blue-950/10 to-black/0"></div>
          
          <PageContainer className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 border-blue-500/30 text-blue-400 bg-blue-950/30">Notre Méthodologie</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                Cadre Méthodologique Éprouvé
              </h2>
              <p className="text-gray-300 text-lg">
                Notre approche structurée garantit des résultats concrets et durables, en combinant rigueur analytique et vision stratégique adaptées à votre contexte spécifique.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultingFramework.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-black/40 backdrop-blur-md border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-colors"
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-blue-900/40 border border-blue-500/30 flex items-center justify-center">
                      {phase.icon}
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm border-2 border-black">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-white">{phase.phase}</h3>
                  <p className="text-gray-300 mb-5 text-sm">{phase.description}</p>
                  
                  <ul className="space-y-2">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="flex-shrink-0 mr-2 mt-1">
                          <CheckCircle className="h-4 w-4 text-blue-400" />
                        </div>
                        <span className="text-gray-300 text-xs">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link to="/contact">
                  <span>Découvrir comment notre méthodologie s'adapte à votre contexte</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </PageContainer>
        </section>
        
        {/* Methodologies Section */}
        <section className="py-16 relative">
          <PageContainer>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <Badge className="mb-4 border-blue-500/30 text-blue-400 bg-blue-950/30">Approches Distinctives</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Méthodologies innovantes adaptées à vos défis
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Nos méthodologies exclusives combinent les meilleures pratiques globales et une adaptation contextuelle pour répondre précisément à vos enjeux spécifiques et maximiser votre succès.
                </p>
                
                <div className="bg-black/40 backdrop-blur-md border border-blue-500/20 rounded-xl p-6 mb-8">
                  <div className="flex items-center mb-4">
                    <Award className="h-8 w-8 text-amber-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">Notre différence</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Notre capacité à adapter nos méthodologies à votre contexte unique tout en maintenant une rigueur analytique constante garantit des résultats exceptionnels et durables.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mr-2 mt-1">
                        <CheckCircle className="h-4 w-4 text-blue-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Focus sur les résultats mesurables</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mr-2 mt-1">
                        <CheckCircle className="h-4 w-4 text-blue-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Transfert continu de compétences</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mr-2 mt-1">
                        <CheckCircle className="h-4 w-4 text-blue-400" />
                      </div>
                      <span className="text-gray-300 text-sm">Approche collaborative et pragmatique</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center lg:text-left">
                  <Button variant="default" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white" asChild>
                    <Link to="/start-project">
                      Discuter de votre projet <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {methodologies.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-black/40 backdrop-blur-md border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-blue-900/40 border border-blue-500/30 flex items-center justify-center mb-4">
                      {method.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-white">{method.title}</h3>
                    <p className="text-gray-300 text-sm">{method.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </PageContainer>
        </section>

        {/* Case Studies Section */}
        <section className="py-16 relative">
          <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0"></div>
          <PageContainer>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 border-blue-500/30 text-blue-400 bg-blue-950/30">Résultats Prouvés</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                Études de Cas & Succès Clients
              </h2>
              <p className="text-gray-300 text-lg">
                Découvrez comment notre approche de conseil stratégique a transformé des organisations et créé un impact mesurable sur leur performance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-black/40 backdrop-blur-md border border-blue-500/20 rounded-xl overflow-hidden hover:border-blue-500/40 transition-colors"
                >
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                      {study.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-sm">Étude de cas</h3>
                      <p className="text-blue-100 text-xs">{study.result}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-white">{study.title}</h3>
                    <p className="text-gray-300 text-sm">{study.description}</p>
                    
                    <div className="mt-6">
                      <Button variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-transparent p-0 flex items-center gap-2">
                        <span>Voir le cas complet</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link to="/portfolio">
                  Découvrir tous nos cas clients <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </PageContainer>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-blue-950/10 to-black/0"></div>
          
          <PageContainer className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <Badge className="mb-4 border-blue-500/30 text-blue-400 bg-blue-950/30">Témoignages</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Ce que nos clients disent
                </h2>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="bg-black/40 backdrop-blur-md border border-blue-500/20 p-6 rounded-xl"
                >
                  <div className="mb-4 flex">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 mr-1" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic mb-6 text-lg">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-900/40 border border-blue-500/30 flex items-center justify-center mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-white">{testimonial.author}</p>
                      <p className="text-sm text-gray-300">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </PageContainer>
        </section>

        {/* Next Steps / CTA Section */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500 to-blue-500/0"></div>
          <PageContainer>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="bg-black/60 backdrop-blur-xl border border-blue-500/20 rounded-xl p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-600 rounded-full opacity-20 filter blur-[80px]"></div>
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-600 rounded-full opacity-20 filter blur-[80px]"></div>
                  
                  <div className="relative z-10">
                    <Badge className="mb-4 border-blue-500/30 text-blue-400 bg-blue-950/30">Commençons</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                      Prêt à transformer votre entreprise?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                      Nos experts en conseil stratégique sont prêts à vous accompagner dans votre parcours de transformation et de croissance.
                    </p>
                    
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="bg-black/40 backdrop-blur-md border border-blue-500/20 rounded-lg p-6">
                        <div className="w-12 h-12 rounded-full bg-blue-900/40 border border-blue-500/30 flex items-center justify-center mb-4">
                          <MessageCircle className="h-6 w-6 text-blue-400" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 text-white">Consultation gratuite</h3>
                        <p className="text-gray-300 text-sm mb-4">
                          Discutons de vos défis et objectifs lors d'une session de consultation sans engagement.
                        </p>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90" asChild>
                          <Link to="/contact">Réserver un créneau</Link>
                        </Button>
                      </div>
                      
                      <div className="bg-black/40 backdrop-blur-md border border-blue-500/20 rounded-lg p-6">
                        <div className="w-12 h-12 rounded-full bg-blue-900/40 border border-blue-500/30 flex items-center justify-center mb-4">
                          <Inbox className="h-6 w-6 text-blue-400" />
                        </div>
                        <h3 className="text-lg font-bold mb-3 text-white">Proposition sur mesure</h3>
                        <p className="text-gray-300 text-sm mb-4">
                          Recevez une proposition détaillée adaptée à vos besoins spécifiques et à votre contexte.
                        </p>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90" asChild>
                          <Link to="/start-project">Demander une proposition</Link>
                        </Button>
                      </div>
                    </div>
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

export default ConsultingServices;
