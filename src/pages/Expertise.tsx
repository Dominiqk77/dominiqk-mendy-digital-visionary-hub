import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Check, Award, Bookmark, Zap, 
  BookOpen, Lightbulb, Server, Database, 
  CircuitBoard, Atom, Star, Layers,
  Code, Globe, PieChart, BarChart3, 
  LineChart, TrendingUp, BrainCircuit, 
  Cpu, Network, ShieldCheck, Smartphone, 
  LucideIcon, Monitor, Palette, Users,
  MessageSquare, Share2, FileText, Rocket,
  Building, PenTool, Briefcase, TreePine
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';

// Space particles background component
const SpaceBackground = () => {
  const [stars, setStars] = useState<{id: number, x: number, y: number, size: number, opacity: number}[]>([]);
  
  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 150 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 0.5,
        opacity: Math.random() * 0.7 + 0.3
      }));
      setStars(newStars);
    };
    
    generateStars();
    
    // Regenerate some stars periodically for subtle animation
    const interval = setInterval(() => {
      setStars(prev => {
        const newStars = [...prev];
        for (let i = 0; i < 10; i++) {
          const randomIndex = Math.floor(Math.random() * newStars.length);
          newStars[randomIndex] = {
            ...newStars[randomIndex],
            opacity: Math.random() * 0.7 + 0.3
          };
        }
        return newStars;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0">
        {stars.map(star => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-blue-100"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              boxShadow: `0 0 ${star.size * 2}px rgba(147, 197, 253, ${star.opacity})`,
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 1.5, star.opacity],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Moving nebula component
const NebulaBg = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-[10%] left-[10%] w-[70%] h-[60%] rounded-full bg-indigo-500/30 blur-[120px] animate-float" style={{ animationDuration: '15s' }}></div>
        <div className="absolute top-[30%] right-[20%] w-[40%] h-[50%] rounded-full bg-purple-500/20 blur-[100px] animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-[10%] left-[30%] w-[60%] h-[40%] rounded-full bg-blue-500/20 blur-[150px] animate-float" style={{ animationDuration: '25s', animationDelay: '5s' }}></div>
      </div>
    </div>
  );
};

// Technology nodes animation component
const TechNodes = () => {
  // Points for the tech nodes
  const [points, setPoints] = useState<{id: number, x: number, y: number, size: number}[]>([]);
  
  // Generate random points
  useEffect(() => {
    const newPoints = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2
    }));
    setPoints(newPoints);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-25">
        {points.map((point) => (
          <motion.div 
            key={point.id}
            className="absolute w-2 h-2 bg-portfolio-blue rounded-full"
            style={{ 
              left: `${point.x}%`, 
              top: `${point.y}%`, 
              width: `${point.size}px`,
              height: `${point.size}px`
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
              boxShadow: ['0 0 0px rgba(14, 165, 233, 0)', '0 0 10px rgba(14, 165, 233, 0.5)', '0 0 0px rgba(14, 165, 233, 0)'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: point.id * 0.2
            }}
          />
        ))}
        
        {/* Connect some nodes with lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {points.slice(0, 18).map((point, i) => {
            const nextPoint = points[(i + 1) % points.length];
            if (Math.abs(point.x - nextPoint.x) < 30 && Math.abs(point.y - nextPoint.y) < 30) {
              return (
                <motion.line 
                  key={`line-${i}`}
                  x1={`${point.x}%`}
                  y1={`${point.y}%`}
                  x2={`${nextPoint.x}%`}
                  y2={`${nextPoint.y}%`}
                  stroke="#0EA5E9"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.15 }}
                  transition={{ duration: 2, delay: i * 0.2 }}
                />
              );
            }
            return null;
          })}
        </svg>
      </div>
    </div>
  );
};

// Futuristic grid component
const FuturisticGrid = () => {
  return (
    <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none"></div>
  );
};

// Data flow animation component
const DataFlowAnimation = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 data-grid">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-portfolio-blue/0 via-portfolio-blue/30 to-portfolio-blue/0"
            style={{
              left: `${10 + i * 8}%`,
              top: '0%',
              animation: `data-flow ${3 + i * 0.5}s infinite linear`,
              animationDelay: `${i * 0.7}s`
            }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-portfolio-purple/0 via-portfolio-purple/20 to-portfolio-purple/0"
            style={{
              right: `${15 + i * 9}%`,
              top: '0%',
              animation: `data-flow ${4 + i * 0.3}s infinite linear`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Expertise Category interface
interface ExpertiseCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: ExpertiseItem[];
}

// Expertise Item interface
interface ExpertiseItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  points: string[];
  techStat: string;
  category: string;
}

const Expertise = () => {
  // Ref for scroll animations
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  // State for category filter
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedDescriptions, setExpandedDescriptions] = useState<Record<string, boolean>>({});
  const [visibleCount, setVisibleCount] = useState<number>(12);

  useEffect(() => {
    // Set page title for SEO
    document.title = 'Expertise | Dominiqk Mendy | Compétences Numériques & IA';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Découvrez l\'expertise de Dominiqk Mendy en innovation numérique, intelligence artificielle, développement web, marketing digital et transformation digitale pour entreprises Africaines.'
      );
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Toggle description expansion
  const toggleDescription = (id: string) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Load more items
  const loadMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  // Reset filters
  const resetFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
  };

  // Simulated real-time tech stats
  const [techStats, setTechStats] = useState({
    aiAccuracy: 97.8,
    serverUptime: 99.95,
    projectCompletion: 94.2,
    clientSatisfaction: 98.6,
    apiPerformance: 96.3,
    dataQuality: 95.7
  });

  // Simulate real-time data updates
  useEffect(() => {
    const statInterval = setInterval(() => {
      setTechStats(prev => ({
        aiAccuracy: parseFloat((prev.aiAccuracy + (Math.random() * 0.2 - 0.1)).toFixed(1)),
        serverUptime: parseFloat((prev.serverUptime + (Math.random() * 0.1 - 0.05)).toFixed(2)),
        projectCompletion: parseFloat((prev.projectCompletion + (Math.random() * 0.3 - 0.15)).toFixed(1)),
        clientSatisfaction: parseFloat((prev.clientSatisfaction + (Math.random() * 0.2 - 0.1)).toFixed(1)),
        apiPerformance: parseFloat((prev.apiPerformance + (Math.random() * 0.3 - 0.15)).toFixed(1)),
        dataQuality: parseFloat((prev.dataQuality + (Math.random() * 0.2 - 0.1)).toFixed(1))
      }));
    }, 5000);
    
    return () => clearInterval(statInterval);
  }, []);

  // Define expertise categories
  const expertiseCategories: ExpertiseCategory[] = [
    {
      id: 'ai',
      title: 'Intelligence Artificielle',
      icon: <BrainCircuit className="h-6 w-6 text-primary" />,
      skills: []
    },
    {
      id: 'dev',
      title: 'Développement',
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: []
    },
    {
      id: 'digital',
      title: 'Marketing Digital',
      icon: <PieChart className="h-6 w-6 text-primary" />,
      skills: []
    },
    {
      id: 'data',
      title: 'Data Science',
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      skills: []
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: []
    },
    {
      id: 'design',
      title: 'Design & UX',
      icon: <Palette className="h-6 w-6 text-primary" />,
      skills: []
    },
    {
      id: 'business',
      title: 'Business & Consulting',
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      skills: []
    },
    {
      id: 'sustainable',
      title: 'Développement Durable',
      icon: <TreePine className="h-6 w-6 text-primary" />,
      skills: []
    }
  ];

  // Define all expertise areas
  const expertiseAreas: ExpertiseItem[] = [
    {
      id: 'ai-ml',
      title: "Intelligence Artificielle",
      icon: <Atom className="h-8 w-8 text-primary" />,
      description: "Développement de solutions IA personnalisées, machine learning, chatbots et systèmes de recommandation adaptés aux besoins spécifiques du marché africain et international.",
      points: [
        "Modèles prédictifs et analytiques",
        "Traitement du langage naturel (NLP)",
        "Vision par ordinateur",
        "Systèmes de recommandation",
        "Optimisation par IA"
      ],
      techStat: `${techStats.aiAccuracy}% précision`,
      category: 'ai'
    },
    {
      id: 'web-dev',
      title: "Développement Web & Mobile",
      icon: <CircuitBoard className="h-8 w-8 text-primary" />,
      description: "Création d'applications web et mobile performantes, évolutives et sécurisées utilisant les technologies modernes adaptées aux infrastructures locales et internationales.",
      points: [
        "Applications web progressives (PWA)",
        "Applications mobiles natives et hybrides",
        "Sites e-commerce et marchés virtuels",
        "Systèmes de paiement mobile",
        "Architectures cloud et serverless"
      ],
      techStat: `${techStats.serverUptime}% uptime`,
      category: 'dev'
    },
    {
      id: 'digital-marketing',
      title: "Marketing Numérique",
      icon: <Bookmark className="h-8 w-8 text-primary" />,
      description: "Stratégies digitales sur mesure pour accroître la visibilité, générer des leads qualifiés et fidéliser votre clientèle en Afrique et à l'international.",
      points: [
        "SEO/SEM adapté aux marchés africains",
        "Campagnes publicitaires multicanales",
        "Stratégies de contenu et d'influence",
        "Marketing d'automation et CRM",
        "Analyse de données et optimisation"
      ],
      techStat: `${techStats.clientSatisfaction}% satisfaction`,
      category: 'digital'
    },
    {
      id: 'egovernance',
      title: "E-Gouvernance",
      icon: <Award className="h-8 w-8 text-primary" />,
      description: "Accompagnement des institutions publiques dans leur transformation numérique pour améliorer les services aux citoyens et l'efficacité administrative.",
      points: [
        "Portails de services citoyens",
        "Systèmes de gestion documentaire",
        "Solutions de participation citoyenne",
        "Sécurisation des données publiques",
        "Formation des fonctionnaires"
      ],
      techStat: `${techStats.projectCompletion}% réussite`,
      category: 'business'
    },
    {
      id: 'training',
      title: "Formation & Transfert de Compétences",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      description: "Programmes de formation et mentorat pour développer les compétences numériques locales et favoriser l'autonomie technologique.",
      points: [
        "Bootcamps technologiques intensifs",
        "Formations IA pour décideurs",
        "Programmes d'accompagnement startup",
        "Certification en développement web",
        "Ateliers design thinking"
      ],
      techStat: `${techStats.clientSatisfaction}% satisfaction`,
      category: 'business'
    },
    {
      id: 'consulting',
      title: "Consulting Stratégique",
      icon: <Star className="h-8 w-8 text-primary" />,
      description: "Conseil en transformation digitale pour entreprises et startups africaines avec une approche centrée sur les spécificités du continent.",
      points: [
        "Audit et stratégie numérique",
        "Accompagnement à la transformation",
        "Innovation technologique adaptée",
        "Développement de produits digitaux",
        "Internationalisation et scaling"
      ],
      techStat: `${techStats.projectCompletion}% complétion`,
      category: 'business'
    },
    {
      id: 'deep-learning',
      title: "Deep Learning",
      icon: <Network className="h-8 w-8 text-primary" />,
      description: "Conception et implémentation de réseaux de neurones profonds pour résoudre des problèmes complexes dans divers domaines.",
      points: [
        "Réseaux de neurones convolutifs (CNN)",
        "Réseaux de neurones récurrents (RNN)",
        "Apprentissage par renforcement",
        "Transformers et BERT",
        "Transfer learning"
      ],
      techStat: `${techStats.aiAccuracy}% précision`,
      category: 'ai'
    },
    {
      id: 'nlp',
      title: "Traitement du Langage Naturel",
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      description: "Développement de solutions linguistiques intelligentes, adaptées aux langues africaines et au contexte multiculturel.",
      points: [
        "Chatbots multilingues",
        "Analyse de sentiment",
        "Extraction d'informations",
        "Traduction automatique",
        "Résumé automatique de texte"
      ],
      techStat: `${(techStats.aiAccuracy - 2.1).toFixed(1)}% précision`,
      category: 'ai'
    },
    {
      id: 'frontend',
      title: "Développement Frontend",
      icon: <Monitor className="h-8 w-8 text-primary" />,
      description: "Création d'interfaces utilisateur modernes, réactives et accessibles avec les frameworks JavaScript les plus récents.",
      points: [
        "React, Vue.js, Angular",
        "Interfaces mobiles réactives",
        "State management avancé",
        "Animations et transitions",
        "Tests unitaires et d'intégration"
      ],
      techStat: `${techStats.projectCompletion}% qualité`,
      category: 'dev'
    },
    {
      id: 'backend',
      title: "Développement Backend",
      icon: <Database className="h-8 w-8 text-primary" />,
      description: "Conception d'architectures serveur robustes, évolutives et sécurisées pour supporter des applications complexes.",
      points: [
        "Node.js, Python, Java",
        "API REST et GraphQL",
        "Microservices et serverless",
        "Bases de données SQL et NoSQL",
        "Performance et sécurité"
      ],
      techStat: `${techStats.apiPerformance}% performance`,
      category: 'dev'
    },
    {
      id: 'mobile-dev',
      title: "Développement Mobile",
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      description: "Création d'applications mobiles natives et multiplateformes optimisées pour les marchés africains et internationaux.",
      points: [
        "React Native et Flutter",
        "iOS et Android natif",
        "Optimisation pour faible connectivité",
        "Intégration avec API locales",
        "Mode hors ligne"
      ],
      techStat: `${techStats.projectCompletion}% satisfaction`,
      category: 'dev'
    },
    {
      id: 'devops',
      title: "DevOps & Cloud",
      icon: <Server className="h-8 w-8 text-primary" />,
      description: "Mise en place de pipelines CI/CD, solutions cloud et pratiques DevSecOps pour optimiser le développement et le déploiement.",
      points: [
        "AWS, Azure, GCP",
        "Docker et Kubernetes",
        "CI/CD avec GitHub Actions/Jenkins",
        "Infrastructure as Code",
        "Monitoring et observabilité"
      ],
      techStat: `${techStats.serverUptime}% uptime`,
      category: 'cloud'
    },
    {
      id: 'data-science',
      title: "Data Science",
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      description: "Analyse de données complexes pour extraire des insights stratégiques et transformer les données en valeur commerciale.",
      points: [
        "Analyse prédictive",
        "Segmentation client",
        "Détection d'anomalies",
        "Modélisation statistique",
        "Data mining"
      ],
      techStat: `${techStats.dataQuality}% précision`,
      category: 'data'
    },
    {
      id: 'big-data',
      title: "Big Data",
      icon: <Database className="h-8 w-8 text-primary" />,
      description: "Solutions pour collecter, stocker, traiter et analyser des volumes massifs de données à grande échelle.",
      points: [
        "Hadoop et Spark",
        "Streaming de données en temps réel",
        "Data warehousing",
        "ETL et pipelines de données",
        "Data lakes"
      ],
      techStat: `${techStats.apiPerformance}% performance`,
      category: 'data'
    },
    {
      id: 'digital-strategy',
      title: "Stratégie Digitale",
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      description: "Élaboration de feuilles de route digitales alignées sur les objectifs commerciaux et les spécificités du marché africain.",
      points: [
        "Audit digital et benchmarking",
        "Roadmap de transformation",
        "Stratégie multicanale",
        "Indicateurs de performance",
        "Gouvernance digitale"
      ],
      techStat: `${techStats.projectCompletion}% efficacité`,
      category: 'business'
    },
    {
      id: 'seo-sem',
      title: "SEO & SEM",
      icon: <Globe className="h-8 w-8 text-primary" />,
      description: "Optimisation pour les moteurs de recherche et gestion de campagnes publicitaires pour maximiser la visibilité en ligne.",
      points: [
        "SEO technique et on-page",
        "SEO local pour marchés africains",
        "Campagnes Google Ads",
        "Référencement multilingue",
        "Analytics et reporting"
      ],
      techStat: `${techStats.clientSatisfaction}% ROI`,
      category: 'digital'
    },
    {
      id: 'content-marketing',
      title: "Marketing de Contenu",
      icon: <FileText className="h-8 w-8 text-primary" />,
      description: "Création et diffusion de contenu de valeur pour attirer, engager et fidéliser une audience ciblée.",
      points: [
        "Stratégie de contenu",
        "Production multiformat",
        "Calendrier éditorial",
        "Distribution et amplification",
        "Mesure de performance"
      ],
      techStat: `${techStats.clientSatisfaction - 1.2}% engagement`,
      category: 'digital'
    },
    {
      id: 'social-media',
      title: "Social Media",
      icon: <Share2 className="h-8 w-8 text-primary" />,
      description: "Stratégies de présence sur les réseaux sociaux adaptées aux spécificités des plateformes populaires en Afrique.",
      points: [
        "Community management",
        "Social ads ciblées",
        "Contenu engageant",
        "Social selling",
        "Social listening"
      ],
      techStat: `${techStats.clientSatisfaction}% engagement`,
      category: 'digital'
    },
    {
      id: 'cyber-security',
      title: "Cybersécurité",
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      description: "Protection des actifs numériques contre les menaces avec des solutions adaptées au contexte africain.",
      points: [
        "Audit de sécurité",
        "Implémentation RGPD/GDPR",
        "Sécurisation des applications",
        "Gestion des identités",
        "Formation et sensibilisation"
      ],
      techStat: `${techStats.serverUptime}% sécurité`,
      category: 'cloud'
    },
    {
      id: 'ui-ux',
      title: "UI/UX Design",
      icon: <Palette className="h-8 w-8 text-primary" />,
      description: "Conception d'interfaces utilisateur intuitives et d'expériences adaptées aux usages et préférences locales.",
      points: [
        "Design centré utilisateur",
        "Tests d'utilisabilité",
        "Design systems",
        "Wireframing et prototypage",
        "Interfaces accessibles"
      ],
      techStat: `${techStats.clientSatisfaction}% satisfaction`,
      category: 'design'
    },
    {
      id: 'fintech',
      title: "Solutions FinTech",
      icon: <Zap className="h-8 w-8 text-primary" />,
      description: "Développement de solutions financières digitales adaptées au contexte africain et à l'inclusion financière.",
      points: [
        "Mobile banking",
        "Paiements électroniques",
        "Micro-finance digitale",
        "Transferts d'argent",
        "KYC et conformité"
      ],
      techStat: `${techStats.serverUptime}% fiabilité`,
      category: 'dev'
    },
    {
      id: 'blockchain',
      title: "Blockchain & Web3",
      icon: <CircuitBoard className="h-8 w-8 text-primary" />,
      description: "Développement d'applications décentralisées et utilisation de la blockchain pour résoudre des problèmes spécifiques.",
      points: [
        "Smart contracts",
        "DeFi et tokenisation",
        "NFT et actifs numériques",
        "Solutions de traçabilité",
        "Identité décentralisée"
      ],
      techStat: `${techStats.apiPerformance}% performance`,
      category: 'dev'
    },
    {
      id: 'sustainable-tech',
      title: "Technologies Durables",
      icon: <TreePine className="h-8 w-8 text-primary" />,
      description: "Solutions technologiques pour le développement durable et la lutte contre les défis environnementaux en Afrique.",
      points: [
        "Suivi environnemental par IA",
        "Applications d'agriculture de précision",
        "Solutions d'énergie propre",
        "Gestion intelligente des ressources",
        "Économie circulaire digitale"
      ],
      techStat: `${techStats.projectCompletion}% impact`,
      category: 'sustainable'
    },
    {
      id: 'chatbots',
      title: "Chatbots & Assistants Virtuels",
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      description: "Conception d'agents conversationnels intelligents pour automatiser le service client et l'assistance.",
      points: [
        "Chatbots multilingues",
        "Intégration WhatsApp/Messenger",
        "IA conversationnelle",
        "Workflows automatisés",
        "Analytics conversationnels"
      ],
      techStat: `${techStats.aiAccuracy - 1.3}% précision`,
      category: 'ai'
    },
    {
      id: 'elearning',
      title: "Plateformes E-Learning",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      description: "Développement de solutions d'apprentissage en ligne adaptées aux contraintes d'infrastructure africaines.",
      points: [
        "LMS sur mesure",
        "Contenu interactif",
        "Mobile learning",
        "Évaluation automatisée",
        "Certification blockchain"
      ],
      techStat: `${techStats.clientSatisfaction}% satisfaction`,
      category: 'dev'
    },
    {
      id: 'ecommerce',
      title: "E-commerce & Marketplace",
      icon: <Building className="h-8 w-8 text-primary" />,
      description: "Création de plateformes de vente en ligne et places de marché adaptées aux réalités logistiques africaines.",
      points: [
        "Solutions e-commerce sur mesure",
        "Marketplaces B2B et B2C",
        "Intégration paiement mobile",
        "Logistique et livraison du dernier km",
        "Multicanalité"
      ],
      techStat: `${techStats.projectCompletion}% conversion`,
      category: 'dev'
    },
    {
      id: 'startup',
      title: "Startup Studio",
      icon: <Rocket className="h-8 w-8 text-primary" />,
      description: "Accompagnement de startups africaines de l'idéation au scaling, avec une méthodologie adaptée à l'écosystème local.",
      points: [
        "Idéation et validation",
        "MVP et prototypage rapide",
        "Business model canvas",
        "Levée de fonds",
        "Stratégie de croissance"
      ],
      techStat: `${techStats.projectCompletion}% réussite`,
      category: 'business'
    },
    {
      id: 'agile',
      title: "Méthodologies Agiles",
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      description: "Implémentation et coaching en méthodologies agiles adaptées au contexte des équipes africaines.",
      points: [
        "Scrum et Kanban",
        "Product Ownership",
        "Management visuel",
        "Équipes distribuées",
        "Culture de l'amélioration continue"
      ],
      techStat: `${techStats.projectCompletion}% efficacité`,
      category: 'business'
    },
    {
      id: 'data-viz',
      title: "Data Visualization",
      icon: <PieChart className="h-8 w-8 text-primary" />,
      description: "Création de visualisations de données interactives et tableaux de bord pour faciliter la prise de décision.",
      points: [
        "Dashboards interactifs",
        "Storytelling visuel",
        "Infographies personnalisées",
        "Reportings automatisés",
        "KPI et métriques"
      ],
      techStat: `${techStats.dataQuality}% clarté`,
      category: 'data'
    },
    {
      id: 'api-dev',
      title: "API & Intégrations",
      icon: <Code className="h-8 w-8 text-primary" />,
      description: "Conception et développement d'API robustes et d'intégrations entre systèmes hétérogènes.",
      points: [
        "API REST et GraphQL",
        "Documentation OpenAPI",
        "Intégrations tierces",
        "API Gateway et sécurité",
        "Webhooks et événements"
      ],
      techStat: `${techStats.apiPerformance}% performance`,
      category: 'dev'
    },
    {
      id: 'iot',
      title: "Internet des Objets (IoT)",
      icon: <Cpu className="h-8 w-8 text-primary" />,
      description: "Solutions IoT innovantes pour relever les défis spécifiques au contexte africain.",
      points: [
        "Capteurs et dispositifs connectés",
        "Edge computing",
        "Plateformes IoT",
        "Protocoles de communication",
        "Analytics IoT"
      ],
      techStat: `${techStats.apiPerformance - 1.3}% fiabilité`,
      category: 'cloud'
    }
  ];

  // Filter expertise areas based on category and search query
  const filteredExpertise = expertiseAreas
    .filter(item => activeCategory === 'all' || item.category === activeCategory)
    .filter(item => 
      searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.points.some(point => point.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  // Assign expertise to categories
  expertiseCategories.
