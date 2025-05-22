
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, FileCode, Globe, Database, Layout, Rocket, Users, Phone, ShoppingCart, BadgeCheck, BrainCircuit, Hexagon, CheckCircle, Timer, Monitor, Server, ChevronsUp, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import PageContainer from '@/components/layout/PageContainer';

// Animated space background component
const WebSpaceBackground = () => {
  const [stars, setStars] = useState<{id: number, x: number, y: number, size: number, opacity: number, speed: number}[]>([]);
  const [codeLines, setCodeLines] = useState<{id: number, x: number, startY: number, length: number, opacity: number, speed: number, color: string}[]>([]);
  
  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars = Array.from({ length: 150 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.05 + 0.01
      }));
      setStars(newStars);
    };

    // Generate animated code lines
    const generateCodeLines = () => {
      const colors = ['#61dafb', '#3b82f6', '#4f46e5', '#a855f7', '#ec4899'];
      const newCodeLines = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        startY: -20 - Math.random() * 100,
        length: 5 + Math.random() * 15,
        opacity: 0.1 + Math.random() * 0.4,
        speed: 0.2 + Math.random() * 0.8,
        color: colors[Math.floor(Math.random() * colors.length)]
      }));
      setCodeLines(newCodeLines);
    };

    generateStars();
    generateCodeLines();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-gray-900 via-[#0a1930] to-black pointer-events-none">
      {/* Stars background with animation */}
      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 1.5, star.opacity],
            scale: [1, 1.2, 1],
            y: [`${star.y}%`, `${star.y + star.speed * 10}%`, `${star.y}%`]
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + Math.random() * 7,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Animated code lines */}
      {codeLines.map((line) => (
        <motion.div
          key={`line-${line.id}`}
          className="absolute bg-opacity-30"
          style={{
            left: `${line.x}%`,
            top: `${line.startY}%`,
            width: '1px',
            height: `${line.length}%`,
            opacity: line.opacity,
            background: line.color
          }}
          animate={{
            y: ["0vh", "120vh"],
          }}
          transition={{
            duration: 20 / line.speed,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10
          }}
        />
      ))}
      
      {/* Tech grid patterns */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2MywgNjMsIDI1NSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-20"></div>
      
      {/* Floating digital elements */}
      <div className="absolute top-1/4 left-1/3 w-16 h-16 border border-blue-500/20 rounded-lg rotate-12 animate-float-slow">
        <div className="absolute inset-0.5 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 rounded-lg"></div>
      </div>
      <div className="absolute bottom-1/3 right-1/5 w-24 h-12 border border-purple-500/20 rounded-lg -rotate-6 animate-float">
        <div className="absolute inset-0.5 bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-lg"></div>
      </div>
      
      {/* Code brackets */}
      <div className="absolute top-1/2 left-10 text-blue-500/20 text-7xl font-mono animate-float-slow">{"{"}</div>
      <div className="absolute bottom-1/4 right-20 text-purple-500/20 text-7xl font-mono animate-float">{"}"}</div>
      <div className="absolute top-1/4 right-32 text-cyan-500/20 text-5xl font-mono animate-float-slow">{"<>"}</div>
      <div className="absolute bottom-1/2 left-32 text-indigo-500/20 text-5xl font-mono animate-float">{"</>"}</div>
      
      {/* Digital glow effects */}
      <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-2/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
    </div>
  );
};

const WebServices = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Services Web & Mobile Premium | Dominique Mendy | Développeur Full Stack International';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Services de développement web et mobile par Dominique Mendy: sites web professionnels, applications mobile, e-commerce et solutions SaaS pour entreprises internationales. Expert reconnu en France, UK, USA et à travers le monde.'
      );
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Web service categories
  const webCategories = [
    { id: "all", name: "Tous les services" },
    { id: "websites", name: "Sites Web" },
    { id: "applications", name: "Applications" },
    { id: "ecommerce", name: "E-Commerce" },
    { id: "maintenance", name: "Support & Maintenance" }
  ];

  // Web services with icons and details
  const webServices = [
    {
      icon: <FileCode className="text-blue-500" size={40} strokeWidth={1.5} />,
      title: "Développement Web Full Stack",
      description: "Création de sites et applications web complexes avec les technologies front-end et back-end les plus performantes. Solutions sur mesure parfaitement adaptées à vos besoins business et techniques.",
      features: ["Architectures modernes et évolutives", "Performance et sécurité optimisées", "Compatibilité multi-navigateurs et responsive", "Intégration d'API tierces"],
      price: "À partir de 2.5M FCFA",
      category: "websites",
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: <Phone className="text-indigo-500" size={40} strokeWidth={1.5} />,
      title: "Applications Mobiles Native/Hybride",
      description: "Développement d'applications iOS et Android performantes, intuitives et parfaitement adaptées à vos besoins. Expérience utilisateur fluide et fonctionnalités avancées pour satisfaire vos utilisateurs.",
      features: ["Développement iOS et Android", "Applications hybrides avec React Native", "Design UI/UX mobile premium", "Intégration avec les services natifs (caméra, GPS, etc.)"],
      price: "À partir de 3M FCFA",
      category: "applications",
      technologies: ["React Native", "Flutter", "Kotlin", "Swift", "Firebase"]
    },
    {
      icon: <ShoppingCart className="text-purple-500" size={40} strokeWidth={1.5} />,
      title: "E-Commerce & Marketplaces",
      description: "Création de boutiques en ligne et places de marché optimisées pour la conversion et l'expérience utilisateur. Solutions complètes intégrant paiement, gestion des stocks et livraison.",
      features: ["Intégration de multiples moyens de paiement internationaux", "Gestion avancée des produits et stocks", "Optimisation pour le SEO et le mobile", "Tableau de bord administrateur complet"],
      price: "À partir de 2M FCFA",
      category: "ecommerce",
      technologies: ["WooCommerce", "Shopify", "Magento", "Stripe", "PayPal"]
    },
    {
      icon: <BrainCircuit className="text-cyan-500" size={40} strokeWidth={1.5} />,
      title: "SaaS & Applications Cloud",
      description: "Conception d'applications métier en mode SaaS pour transformer votre idée en produit évolutif. Architecture cloud robuste permettant une mise à l'échelle rapide et efficace.",
      features: ["Conception d'architecture multi-tenant", "Modèles d'abonnement et gestion des utilisateurs", "Déploiement sur AWS, Azure ou GCP", "Solutions extensibles et évolutives"],
      price: "À partir de 4M FCFA",
      category: "applications",
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Microservices"]
    },
    {
      icon: <Globe className="text-blue-400" size={40} strokeWidth={1.5} />,
      title: "Sites Web Institutionnels Premium",
      description: "Conception de sites corporate haut de gamme reflétant l'identité et les valeurs de votre marque. Design sur mesure et stratégie de contenu pour renforcer votre image professionnelle.",
      features: ["Design unique et premium", "Rédaction web SEO", "Multilingue et adapté à l'international", "Intégration CMS sur mesure"],
      price: "À partir de 1.5M FCFA",
      category: "websites",
      technologies: ["WordPress", "Webflow", "Strapi", "Sanity", "Contentful"]
    },
    {
      icon: <Layout className="text-purple-400" size={40} strokeWidth={1.5} />,
      title: "Refonte & Migration Technique",
      description: "Modernisation de vos plateformes existantes vers des architectures plus performantes et sécurisées. Migration sans perte de données et avec un minimum d'interruption de service.",
      features: ["Audit technique préalable", "Plan de migration progressif", "Conservation du SEO et des URLs", "Formation des équipes aux nouvelles technologies"],
      price: "À partir de 2M FCFA",
      category: "maintenance",
      technologies: ["React", "Vue.js", "Angular", "Node.js", "PostgreSQL"]
    },
    {
      icon: <Database className="text-indigo-400" size={40} strokeWidth={1.5} />,
      title: "API & Intégrations Backend",
      description: "Développement d'APIs robustes et évolutives pour connecter vos systèmes et applications tierces. Architecture RESTful ou GraphQL selon vos besoins spécifiques.",
      features: ["Documentation complète (Swagger)", "Authentification et sécurisation", "Tests automatisés", "Monitoring et maintenance"],
      price: "À partir de 1.8M FCFA",
      category: "applications",
      technologies: ["GraphQL", "REST API", "Express", "NestJS", "FastAPI"]
    },
    {
      icon: <BadgeCheck className="text-green-500" size={40} strokeWidth={1.5} />,
      title: "Audit, Optimisation & Maintenance",
      description: "Services d'audit technique, d'optimisation de performance et de maintenance continue pour garder vos plateformes web et mobile en parfait état de fonctionnement.",
      features: ["Analyse de performance", "Correction de bugs et vulnérabilités", "Mises à jour régulières", "Support technique réactif"],
      price: "À partir de 500K FCFA / trimestre",
      category: "maintenance",
      technologies: ["Lighthouse", "WebPageTest", "Google Analytics", "Sentry", "New Relic"]
    }
  ];

  // Projects showcase with enhanced visuals
  const projectShowcase = [
    {
      title: "Plateforme E-commerce Omnicanal",
      client: "Commerce International (Sénégal)",
      description: "Développement d'une plateforme e-commerce complète avec intégration mobile money, carte bancaire et livraison dans toute l'Afrique de l'Ouest.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      metrics: {
        conversion: "+32%",
        mobileSales: "+47%",
        userRetention: "+29%"
      }
    },
    {
      title: "Application Mobile de Logistique",
      client: "Entreprise de Transport (France/Sénégal)",
      description: "Application mobile de suivi de livraison en temps réel pour une entreprise opérant entre la France et le Sénégal.",
      technologies: ["React Native", "Firebase", "Google Maps API"],
      image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      metrics: {
        efficiency: "+41%",
        deliveryTime: "-28%",
        customerSatisfaction: "+35%"
      }
    },
    {
      title: "Portail Intranet Enterprise",
      client: "Multinationale (UK)",
      description: "Développement d'un portail intranet sécurisé pour faciliter la communication et la gestion documentaire d'une entreprise internationale.",
      technologies: ["Angular", "ASP.NET Core", "SQL Server", "Azure"],
      image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      metrics: {
        productivity: "+38%",
        documentRetrieval: "-65%",
        collaborationIndex: "+44%"
      }
    },
    {
      title: "Application SaaS FinTech",
      client: "Startup FinTech (USA)",
      description: "Développement d'une solution SaaS pour l'analyse de risques financiers, intégrant l'IA pour fournir des insights précis et personnalisés.",
      technologies: ["Next.js", "Python", "AWS", "TensorFlow"],
      image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      metrics: {
        riskAccuracy: "+27%",
        decisionSpeed: "-43%",
        customerGrowth: "+56%"
      }
    }
  ];

  // Methodology steps with visual enhancements
  const methodologySteps = [
    {
      title: "Discovery & Analyse",
      description: "Nous commençons par comprendre vos objectifs, votre marché et vos besoins spécifiques pour définir la vision du projet.",
      icon: <Hexagon size={24} className="text-blue-500" />,
      details: "Utilisation de workshops structurés, interviews des parties prenantes et analyse concurrentielle pour établir une compréhension approfondie de vos besoins."
    },
    {
      title: "Conception & Wireframing",
      description: "Création des maquettes et prototypes interactifs pour valider l'ergonomie et l'expérience utilisateur avant le développement.",
      icon: <Layout size={24} className="text-indigo-500" />,
      details: "Utilisation d'outils comme Figma et Adobe XD pour concevoir des interfaces attrayantes et fonctionnelles qui répondent à vos objectifs business."
    },
    {
      title: "Développement Agile",
      description: "Développement itératif avec des sprints réguliers et des démonstrations pour vous permettre de suivre l'avancement et d'ajuster en continu.",
      icon: <Code size={24} className="text-purple-500" />,
      details: "Mise en place de méthodes agiles adaptées à la taille de votre projet avec des cycles courts de 1-2 semaines pour maximiser la flexibilité."
    },
    {
      title: "Tests & Assurance Qualité",
      description: "Tests rigoureux sur différentes plateformes et appareils pour garantir la fiabilité et la performance optimale.",
      icon: <CheckCircle size={24} className="text-green-500" />,
      details: "Combinaison de tests automatisés (unit, integration, e2e) et manuels pour garantir une qualité irréprochable avant la mise en production."
    },
    {
      title: "Déploiement & Formation",
      description: "Mise en production sur les infrastructures adaptées et formation de vos équipes pour une prise en main efficace.",
      icon: <Rocket size={24} className="text-cyan-500" />,
      details: "Déploiement progressif avec monitoring en temps réel et sessions de formation personnalisées pour assurer une transition en douceur."
    },
    {
      title: "Support & Évolution",
      description: "Accompagnement post-lancement avec support technique et évolutions régulières pour adapter votre solution aux nouvelles exigences.",
      icon: <Users size={24} className="text-blue-500" />,
      details: "Offre de contrats de maintenance flexibles et développement continu pour garantir que votre solution reste à la pointe de la technologie."
    }
  ];

  // Tech stack with modern web technologies
  const techStack = [
    { name: "React/Next.js", category: "Frontend", icon: "/icons/react.svg", description: "Pour des interfaces modernes et performantes" },
    { name: "Vue.js", category: "Frontend", icon: "/icons/vue.svg", description: "Framework progressif pour des UIs réactives" },
    { name: "Angular", category: "Frontend", icon: "/icons/angular.svg", description: "Framework complet pour applications enterprise" },
    { name: "Node.js", category: "Backend", icon: "/icons/nodejs.svg", description: "Runtime JavaScript côté serveur performant" },
    { name: "TypeScript", category: "Language", icon: "/icons/typescript.svg", description: "Typage statique pour un code plus robuste" },
    { name: "MongoDB", category: "Database", icon: "/icons/mongodb.svg", description: "Base NoSQL flexible et évolutive" },
    { name: "PostgreSQL", category: "Database", icon: "/icons/postgresql.svg", description: "Base relationnelle robuste et performante" },
    { name: "GraphQL", category: "API", icon: "/icons/graphql.svg", description: "Requêtes flexibles et performances optimisées" },
    { name: "AWS", category: "Cloud", icon: "/icons/aws.svg", description: "Infrastructure cloud scalable et sécurisée" },
    { name: "Docker", category: "DevOps", icon: "/icons/docker.svg", description: "Conteneurisation pour déploiement cohérent" },
    { name: "React Native", category: "Mobile", icon: "/icons/react.svg", description: "Apps mobiles cross-platform natives" },
    { name: "Flutter", category: "Mobile", icon: "/icons/flutter.svg", description: "SDK Google pour apps mobiles performantes" }
  ];

  // Why choose us features - technical excellence showcase
  const technicalExcellence = [
    {
      title: "Architecture Évolutive",
      icon: <Server className="text-indigo-500" size={32} />,
      description: "Conceptions modulaires qui s'adaptent à votre croissance et permettent des extensions fluides sans refonte complète."
    },
    {
      title: "Performance Optimisée",
      icon: <ChevronsUp className="text-cyan-500" size={32} />,
      description: "Techniques avancées d'optimisation garantissant des temps de chargement rapides et une expérience utilisateur fluide."
    },
    {
      title: "Sécurité Renforcée",
      icon: <Lock className="text-green-500" size={32} />,
      description: "Implémentation des meilleures pratiques de sécurité pour protéger vos données et celles de vos utilisateurs."
    },
    {
      title: "Code Maintenable",
      icon: <Code className="text-purple-500" size={32} />,
      description: "Architecture propre et documentée permettant une maintenance facile et des évolutions futures sans friction."
    },
    {
      title: "Expérience Cross-Platform",
      icon: <Monitor className="text-blue-500" size={32} />,
      description: "Développement responsive garantissant une expérience cohérente sur tous les appareils et navigateurs."
    },
    {
      title: "Délais Respectés",
      icon: <Timer className="text-amber-500" size={32} />,
      description: "Méthodologie éprouvée pour livrer vos projets dans les temps et le budget impartis, sans compromis sur la qualité."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      
      {/* Custom web space background */}
      <WebSpaceBackground />
      
      <main className="flex-grow relative z-10">
        {/* Hero Section - innovative digital code theme */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <PageContainer>
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center mb-12"
              >
                <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30 mb-4 text-sm py-1 px-3">
                  FULL-STACK WEB & MOBILE
                </Badge>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                  Solutions Web & Mobile <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Innovantes</span>
                </h1>
                
                <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                  Transformez vos idées en applications performantes, intuitives et évolutives grâce à notre expertise technique de pointe et notre approche centrée utilisateur.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white" asChild>
                    <Link to="/contact">
                      <Rocket className="mr-2 h-5 w-5" /> Lancer votre projet
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white" asChild>
                    <Link to="/portfolio">
                      Voir nos réalisations
                    </Link>
                  </Button>
                </div>
              </motion.div>
              
              {/* Tech Stack Icons - dynamic tech showcase */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-16"
              >
                <p className="text-center text-gray-300 mb-6 text-sm uppercase tracking-wider">TECHNOLOGIES DE POINTE</p>
                <div className="flex flex-wrap justify-center gap-6">
                  {["react", "nextjs", "vue", "angular", "nodejs", "typescript", "mongodb", "postgresql", "graphql", "aws", "docker", "flutter"].map((tech) => (
                    <motion.div 
                      key={tech}
                      className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-lg p-3 flex items-center justify-center border border-white/10 hover:border-blue-500/50 transition-all"
                      whileHover={{ y: -5, scale: 1.1, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <img src={`/icons/${tech}.svg`} alt={tech} className="w-8 h-8 object-contain" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </PageContainer>
        </section>
        
        {/* Our Web Expertise Section - visual cards */}
        <section className="py-20 relative z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 -z-10"></div>
          <PageContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Notre Expertise Web & Mobile</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                De la conception à la maintenance, notre équipe vous accompagne à chaque étape du cycle de développement pour créer des solutions digitales performantes et adaptées à vos besoins spécifiques.
              </p>
            </div>
            
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-6xl mx-auto">
              <TabsList className="w-full flex flex-wrap justify-center bg-gray-900/50 border border-white/10 p-1 mb-10 rounded-lg">
                {webCategories.map(cat => (
                  <TabsTrigger key={cat.id} value={cat.id} className="flex-grow data-[state=active]:bg-white/10 data-[state=active]:text-white text-gray-300 rounded-md transition-all">
                    {cat.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {webCategories.map(category => (
                <TabsContent key={category.id} value={category.id} className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {webServices
                      .filter(service => category.id === 'all' || service.category === category.id)
                      .map((service, idx) => (
                        <motion.div
                          key={service.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                          <Card className="h-full flex flex-col bg-gray-900/70 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all overflow-hidden group">
                            <CardHeader className="pb-4">
                              <div className="text-primary mb-4 bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-lg inline-flex border border-white/10">
                                {service.icon}
                              </div>
                              <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow pb-5">
                              <p className="text-gray-300 mb-4">{service.description}</p>
                              <ul className="space-y-2 mb-6">
                                {service.features.map((feature, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <div className="text-blue-500 mt-1">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 6L9 17l-5-5"></path>
                                      </svg>
                                    </div>
                                    <span className="text-sm text-gray-300">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {service.technologies.map((tech, index) => (
                                  <span key={index} className="text-xs px-2 py-1 bg-blue-900/30 border border-blue-500/20 rounded-full text-blue-300">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                              <p className="text-sm font-medium text-blue-400">{service.price}</p>
                            </CardContent>
                            <CardFooter className="pt-0">
                              <Button variant="ghost" className="w-full justify-between hover:bg-white/5 text-gray-300 group-hover:text-blue-400 transition-colors" asChild>
                                <Link to="/contact">
                                  <span>En savoir plus</span>
                                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                              </Button>
                            </CardFooter>
                          </Card>
                        </motion.div>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </PageContainer>
        </section>
        
        {/* Technical Excellence Section */}
        <section className="py-20 relative bg-black/30 backdrop-blur-sm">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2MywgNjMsIDI1NSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-10 -z-10"></div>
          <PageContainer>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Excellence Technique</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Notre expertise technique garantit des solutions performantes, sécurisées et parfaitement adaptées à vos enjeux business.
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {technicalExcellence.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group"
                >
                  <Card className="h-full bg-gray-900/70 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all overflow-hidden">
                    <CardHeader>
                      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg inline-flex border border-white/10 group-hover:border-blue-500/30 transition-colors">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-white">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-300">
                      {feature.description}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </PageContainer>
        </section>
        
        {/* Project Showcase with Key Metrics */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent -z-10"></div>
          <PageContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Réalisations Marquantes</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Des solutions sur mesure pour des clients internationaux, parfaitement adaptées à leurs contextes spécifiques et générant des résultats mesurables.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {projectShowcase.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden bg-gray-900/70 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
                    <div className="relative">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="object-cover w-full h-full brightness-75 group-hover:brightness-90 transition-all"
                        />
                      </AspectRatio>
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-sm text-blue-300 font-medium mb-2">{project.client}</p>
                        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      </div>
                    </div>
                    <CardContent>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      
                      {/* Key metrics section */}
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        {Object.entries(project.metrics).map(([key, value], i) => (
                          <div key={key} className="text-center p-2 bg-blue-900/20 border border-blue-500/20 rounded-lg">
                            <p className="text-xl font-bold text-blue-400">{value}</p>
                            <p className="text-xs text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                          <span key={tech} className="text-xs px-2 py-1 bg-blue-900/30 border border-blue-500/20 rounded-full text-blue-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white" asChild>
                <Link to="/portfolio">
                  Voir tous nos projets <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </PageContainer>
        </section>
        
        {/* Development Methodology Section */}
        <section className="py-20 relative bg-black/30 backdrop-blur-sm">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2MywgNjMsIDI1NSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-10 -z-10"></div>
          <PageContainer>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Notre Méthodologie</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Une approche structurée et agile pour délivrer des solutions qui répondent parfaitement à vos besoins, dans les délais et le budget impartis.
                </p>
              </div>
              
              <div className="relative">
                {/* Timeline connector */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500"></div>
                
                {/* Timeline items */}
                {methodologySteps.map((step, idx) => (
                  <motion.div
                    key={step.title}
                    className={`flex items-center mb-16 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.15 }}
                  >
                    <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                      <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                      <p className="text-gray-300 mb-3">{step.description}</p>
                      <p className="text-sm text-gray-400">{step.details}</p>
                    </div>
                    
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gray-900 rounded-full shadow-lg border-4 border-blue-500">
                      <div className="text-blue-500">
                        {step.icon}
                      </div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </PageContainer>
        </section>
        
        {/* Tech Stack Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent -z-10"></div>
          <PageContainer>
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Notre Stack Technologique</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Nous utilisons les technologies les plus modernes et performantes pour créer des solutions robustes, évolutives et pérennes.
                </p>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {techStack.map((tech, idx) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full bg-gray-900/70 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all overflow-hidden">
                    <CardHeader className="pb-3">
                      <div className="w-14 h-14 mb-3 bg-gray-800 rounded-lg p-3 flex items-center justify-center border border-white/10 group-hover:border-blue-500/30 transition-all">
                        <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                      </div>
                      <CardTitle className="text-white text-lg">{tech.name}</CardTitle>
                      <Badge variant="outline" className="mt-1 bg-blue-900/20 text-blue-300 border-blue-500/30">
                        {tech.category}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-400">{tech.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </PageContainer>
        </section>
        
        {/* FAQ Section with updated international references */}
        <section className="py-20 relative bg-black/30 backdrop-blur-sm">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2MywgNjMsIDI1NSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-10 -z-10"></div>
          <PageContainer>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Questions Fréquentes</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    question: "Quels types de technologies utilisez-vous pour le développement web ?",
                    answer: "Nous utilisons les technologies les plus modernes et performantes selon les besoins spécifiques de chaque projet. Pour le front-end : React.js, Vue.js, Angular, Next.js. Pour le back-end : Node.js, Django, Laravel, .NET Core. Pour les bases de données : PostgreSQL, MongoDB, MySQL. Nous adaptons notre stack technologique aux exigences de performance, d'évolutivité et de maintenance de votre projet."
                  },
                  {
                    question: "Comment assurez-vous la compatibilité de mes applications avec les marchés internationaux ?",
                    answer: "Nous prenons en compte les spécificités des marchés internationaux : optimisation pour différentes qualités de connexion internet, intégration des moyens de paiement locaux et internationaux, adaptation au multilinguisme, compatibilité avec une large gamme d'appareils, et optimisation des performances. Notre expérience dans de nombreux pays nous permet de créer des solutions parfaitement adaptées aux réalités de chaque marché."
                  },
                  {
                    question: "Quels sont les délais typiques pour le développement d'un site ou d'une application ?",
                    answer: "Les délais varient selon la complexité du projet : un site vitrine professionnel peut être livré en 2-4 semaines, un e-commerce personnalisé en 1-3 mois, et une application mobile ou web complexe en 3-6 mois. Nous établissons un planning précis avec des jalons clairs dès le début du projet et travaillons en méthode agile pour vous livrer des versions fonctionnelles régulièrement."
                  },
                  {
                    question: "Proposez-vous des services de maintenance après le lancement ?",
                    answer: "Oui, nous offrons plusieurs formules de maintenance : technique (mises à jour de sécurité, corrections de bugs), évolutive (ajout de fonctionnalités), et support utilisateur. Nos contrats de maintenance garantissent la pérennité de votre solution et son adaptation continue aux évolutions technologiques et à vos besoins business."
                  },
                  {
                    question: "Comment gérez-vous les projets avec des clients internationaux ?",
                    answer: "Nous avons une forte expérience de collaboration avec des clients en Europe (France, UK), aux USA et dans de nombreux pays à travers le monde. Nous utilisons des outils collaboratifs efficaces (Slack, Jira, GitHub) et organisons des réunions régulières par visioconférence. Notre équipe est habituée aux projets internationaux et peut s'adapter à différents fuseaux horaires pour assurer une communication fluide."
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Card className="bg-gray-900/70 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all">
                      <CardHeader>
                        <CardTitle className="text-xl text-white">{item.question}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300">{item.answer}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white" size="lg" asChild>
                  <Link to="/contact">
                    Discuter de votre projet web ou mobile
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </PageContainer>
        </section>
        
        {/* Testimonial Section with international references */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent -z-10"></div>
          <PageContainer>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ce que nos clients disent</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  quote: "Dominique a transformé notre vision en une plateforme e-commerce moderne qui répond parfaitement aux besoins de nos clients au Sénégal et à l'international. La solution intègre parfaitement les moyens de paiement locaux et internationaux.",
                  author: "Amadou N.",
                  position: "Directeur Commercial, Retail Company",
                  location: "Dakar, Sénégal"
                },
                {
                  quote: "Notre application mobile développée par l'équipe de Dominique a multiplié par 3 notre engagement client. Le travail a été livré dans les délais avec une qualité exceptionnelle et un support continu après le lancement.",
                  author: "Claire T.",
                  position: "CEO, Startup Fintech",
                  location: "Paris, France"
                },
                {
                  quote: "La refonte de notre plateforme SaaS par Dominique a permis d'améliorer significativement nos performances et de réduire nos coûts d'infrastructure. Sa compréhension des spécificités des marchés internationaux a été déterminante.",
                  author: "Michael O.",
                  position: "CTO, Tech Company",
                  location: "Londres, UK"
                }
              ].map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  className="bg-gray-900/70 backdrop-blur-sm p-8 rounded-xl shadow-md border border-white/10 hover:border-blue-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                >
                  <div className="text-4xl text-blue-500/20 mb-4">"</div>
                  <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                    <p className="text-xs text-blue-400">{testimonial.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </PageContainer>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 -z-10"></div>
          <PageContainer>
            <div className="max-w-5xl mx-auto bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10">
              <div className="p-12 md:p-16 relative">
                {/* Background effects */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500 opacity-10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 opacity-10 blur-3xl rounded-full"></div>
                
                {/* Code brackets decoration */}
                <div className="absolute top-8 left-12 text-blue-500/20 text-5xl font-mono">{"{}"}</div>
                <div className="absolute bottom-8 right-12 text-indigo-500/20 text-5xl font-mono">{"</>"}</div>
                
                <div className="relative z-10 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Prêt à lancer votre projet digital ?
                  </h2>
                  <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                    Contactez-moi pour discuter de vos besoins et obtenir une proposition adaptée à votre contexte et à vos objectifs.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition-opacity text-white" asChild>
                      <Link to="/contact">
                        <Rocket className="mr-2 h-5 w-5" /> Lancer votre projet
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-white/50 hover:bg-white/10 text-white" asChild>
                      <Link to="/services">
                        Explorer d'autres services
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </PageContainer>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default WebServices;

