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

// Web Development animated background component
const WebDevBackground = () => {
  const [stars, setStars] = useState<{
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    speed: number;
  }[]>([]);
  const [codeLines, setCodeLines] = useState<{
    id: number;
    x: number;
    startY: number;
    length: number;
    opacity: number;
    speed: number;
    color: string;
  }[]>([]);
  const [htmlElements, setHtmlElements] = useState<{
    id: number;
    element: string;
    x: number;
    y: number;
    rotation: number;
    scale: number;
    opacity: number;
  }[]>([]);
  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars = Array.from({
        length: 180
      }, (_, i) => ({
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
      const colors = ['#61dafb', '#3b82f6', '#4f46e5', '#a855f7', '#ec4899', '#10b981', '#f59e0b'];
      const newCodeLines = Array.from({
        length: 35
      }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        startY: -20 - Math.random() * 100,
        length: 5 + Math.random() * 20,
        opacity: 0.1 + Math.random() * 0.3,
        speed: 0.2 + Math.random() * 0.8,
        color: colors[Math.floor(Math.random() * colors.length)]
      }));
      setCodeLines(newCodeLines);
    };

    // Generate HTML elements
    const generateHtmlElements = () => {
      const elements = ['<div>', '</div>', '<span>', '</span>', '<h1>', '</h1>', '<p>', '</p>', '{', '}', '()', '[]', '<!-- -->', '</>'];
      const newElements = Array.from({
        length: 15
      }, (_, i) => ({
        id: i,
        element: elements[Math.floor(Math.random() * elements.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 40 - 20,
        scale: 0.7 + Math.random() * 1.3,
        opacity: 0.1 + Math.random() * 0.3
      }));
      setHtmlElements(newElements);
    };
    generateStars();
    generateCodeLines();
    generateHtmlElements();
  }, []);
  return <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-gray-900 via-[#0a1723] to-black pointer-events-none">
      {/* Stars background with animation */}
      {stars.map(star => <motion.div key={`star-${star.id}`} className="absolute rounded-full bg-white" style={{
      left: `${star.x}%`,
      top: `${star.y}%`,
      width: `${star.size}px`,
      height: `${star.size}px`,
      opacity: star.opacity
    }} animate={{
      opacity: [star.opacity, star.opacity * 1.5, star.opacity],
      scale: [1, 1.2, 1],
      y: [`${star.y}%`, `${star.y + star.speed * 10}%`, `${star.y}%`]
    }} transition={{
      repeat: Infinity,
      duration: 3 + Math.random() * 7,
      ease: "easeInOut"
    }} />)}
      
      {/* Animated code lines */}
      {codeLines.map(line => <motion.div key={`line-${line.id}`} className="absolute" style={{
      left: `${line.x}%`,
      top: `${line.startY}%`,
      width: '1px',
      height: `${line.length}%`,
      opacity: line.opacity,
      background: line.color
    }} animate={{
      y: ["0vh", "120vh"]
    }} transition={{
      duration: 20 / line.speed,
      repeat: Infinity,
      ease: "linear",
      delay: Math.random() * 10
    }} />)}

      {/* HTML/CSS/JS elements floating */}
      {htmlElements.map(el => <motion.div key={`element-${el.id}`} className="absolute text-xs sm:text-sm md:text-base font-mono" style={{
      left: `${el.x}%`,
      top: `${el.y}%`,
      opacity: el.opacity,
      color: ['#61dafb', '#3b82f6', '#10b981', '#a855f7'][Math.floor(Math.random() * 4)],
      transform: `rotate(${el.rotation}deg) scale(${el.scale})`
    }} animate={{
      y: [`${el.y}%`, `${el.y - 10}%`, `${el.y}%`],
      x: [`${el.x}%`, `${el.x + (Math.random() * 6 - 3)}%`, `${el.x}%`],
      opacity: [el.opacity, el.opacity * 1.5, el.opacity]
    }} transition={{
      repeat: Infinity,
      duration: 10 + Math.random() * 20,
      ease: "easeInOut"
    }}>
          {el.element}
        </motion.div>)}
      
      {/* Tech grid patterns */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2MywgNjMsIDI1NSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-20"></div>
      
      {/* Floating digital elements */}
      <div className="absolute top-1/4 left-1/3 w-16 h-16 border border-blue-500/20 rounded-lg rotate-12 animate-float-slow">
        <div className="absolute inset-0.5 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 rounded-lg"></div>
      </div>
      <div className="absolute bottom-1/3 right-1/5 w-24 h-12 border border-purple-500/20 rounded-lg -rotate-6 animate-float">
        <div className="absolute inset-0.5 bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-lg"></div>
      </div>
      
      {/* Browser window mockup */}
      <div className="absolute top-[15%] right-[10%] w-64 h-36 bg-gray-900/20 backdrop-blur-sm rounded-lg border border-blue-500/20 overflow-hidden opacity-30">
        <div className="h-5 bg-gray-800/50 flex items-center px-2">
          <div className="w-2 h-2 rounded-full bg-red-500/50 mr-1"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500/50 mr-1"></div>
          <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
        </div>
        <div className="p-2">
          <div className="h-2 w-full bg-blue-500/20 rounded mb-1"></div>
          <div className="h-2 w-3/4 bg-blue-500/20 rounded mb-1"></div>
          <div className="h-2 w-5/6 bg-blue-500/20 rounded mb-1"></div>
          <div className="h-2 w-2/3 bg-blue-500/20 rounded mb-1"></div>
        </div>
      </div>
      
      {/* Mobile device mockup */}
      <div className="absolute bottom-[20%] left-[5%] w-20 h-36 bg-gray-900/20 backdrop-blur-sm rounded-xl border border-purple-500/20 overflow-hidden opacity-30">
        <div className="h-2 w-8 bg-gray-800/50 rounded-b mx-auto"></div>
        <div className="mt-3 px-2">
          <div className="h-2 w-full bg-purple-500/20 rounded mb-1"></div>
          <div className="h-2 w-4/5 bg-purple-500/20 rounded mb-1"></div>
          <div className="h-8 w-full bg-purple-500/10 rounded mb-2"></div>
          <div className="h-2 w-full bg-purple-500/20 rounded mb-1"></div>
          <div className="h-2 w-3/4 bg-purple-500/20 rounded"></div>
        </div>
      </div>
      
      {/* Digital glow effects */}
      <div className="absolute top-1/3 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-2/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
    </div>;
};
const WebServices = () => {
  const [activeTab, setActiveTab] = useState("all");
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Développement Web & Mobile Premium | Dominique Mendy | Développeur Full Stack International';

    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Services de développement web et mobile par Dominique Mendy: sites web professionnels, applications mobile, e-commerce et solutions SaaS pour entreprises internationales. Expert reconnu en France, UK, USA et à travers le monde.');
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Web service categories
  const webCategories = [{
    id: "all",
    name: "Tous les services"
  }, {
    id: "websites",
    name: "Sites Web"
  }, {
    id: "applications",
    name: "Applications"
  }, {
    id: "ecommerce",
    name: "E-Commerce"
  }, {
    id: "maintenance",
    name: "Support & Maintenance"
  }];

  // Web services with icons and details
  const webServices = [{
    icon: <FileCode className="text-blue-500" size={40} strokeWidth={1.5} />,
    title: "Développement Web Full Stack",
    description: "Création de sites et applications web complexes avec les technologies front-end et back-end les plus performantes. Solutions sur mesure parfaitement adaptées à vos besoins business et techniques.",
    features: ["Architectures modernes et évolutives", "Performance et sécurité optimisées", "Compatibilité multi-navigateurs et responsive", "Intégration d'API tierces"],
    price: "À partir de 2.5M FCFA",
    category: "websites",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"]
  }, {
    icon: <Phone className="text-indigo-500" size={40} strokeWidth={1.5} />,
    title: "Applications Mobiles Native/Hybride",
    description: "Développement d'applications iOS et Android performantes, intuitives et parfaitement adaptées à vos besoins. Expérience utilisateur fluide et fonctionnalités avancées pour satisfaire vos utilisateurs.",
    features: ["Développement iOS et Android", "Applications hybrides avec React Native", "Design UI/UX mobile premium", "Intégration avec les services natifs (caméra, GPS, etc.)"],
    price: "À partir de 3M FCFA",
    category: "applications",
    technologies: ["React Native", "Flutter", "Kotlin", "Swift", "Firebase"]
  }, {
    icon: <ShoppingCart className="text-purple-500" size={40} strokeWidth={1.5} />,
    title: "E-Commerce & Marketplaces",
    description: "Création de boutiques en ligne et places de marché optimisées pour la conversion et l'expérience utilisateur. Solutions complètes intégrant paiement, gestion des stocks et livraison.",
    features: ["Intégration de multiples moyens de paiement internationaux", "Gestion avancée des produits et stocks", "Optimisation pour le SEO et le mobile", "Tableau de bord administrateur complet"],
    price: "À partir de 2M FCFA",
    category: "ecommerce",
    technologies: ["WooCommerce", "Shopify", "Magento", "Stripe", "PayPal"]
  }, {
    icon: <BrainCircuit className="text-cyan-500" size={40} strokeWidth={1.5} />,
    title: "SaaS & Applications Cloud",
    description: "Conception d'applications métier en mode SaaS pour transformer votre idée en produit évolutif. Architecture cloud robuste permettant une mise à l'échelle rapide et efficace.",
    features: ["Conception d'architecture multi-tenant", "Modèles d'abonnement et gestion des utilisateurs", "Déploiement sur AWS, Azure ou GCP", "Solutions extensibles et évolutives"],
    price: "À partir de 4M FCFA",
    category: "applications",
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Microservices"]
  }, {
    icon: <Globe className="text-blue-400" size={40} strokeWidth={1.5} />,
    title: "Sites Web Institutionnels Premium",
    description: "Conception de sites corporate haut de gamme reflétant l'identité et les valeurs de votre marque. Design sur mesure et stratégie de contenu pour renforcer votre image professionnelle.",
    features: ["Design unique et premium", "Rédaction web SEO", "Multilingue et adapté à l'international", "Intégration CMS sur mesure"],
    price: "À partir de 1.5M FCFA",
    category: "websites",
    technologies: ["WordPress", "Webflow", "Strapi", "Sanity", "Contentful"]
  }, {
    icon: <Layout className="text-purple-400" size={40} strokeWidth={1.5} />,
    title: "Refonte & Migration Technique",
    description: "Modernisation de vos plateformes existantes vers des architectures plus performantes et sécurisées. Migration sans perte de données et avec un minimum d'interruption de service.",
    features: ["Audit technique préalable", "Plan de migration progressif", "Conservation du SEO et des URLs", "Formation des équipes aux nouvelles technologies"],
    price: "À partir de 2M FCFA",
    category: "maintenance",
    technologies: ["React", "Vue.js", "Angular", "Node.js", "PostgreSQL"]
  }, {
    icon: <Database className="text-indigo-400" size={40} strokeWidth={1.5} />,
    title: "API & Intégrations Backend",
    description: "Développement d'APIs robustes et évolutives pour connecter vos systèmes et applications tierces. Architecture RESTful ou GraphQL selon vos besoins spécifiques.",
    features: ["Documentation complète (Swagger)", "Authentification et sécurisation", "Tests automatisés", "Monitoring et maintenance"],
    price: "À partir de 1.8M FCFA",
    category: "applications",
    technologies: ["GraphQL", "REST API", "Express", "NestJS", "FastAPI"]
  }, {
    icon: <BadgeCheck className="text-green-500" size={40} strokeWidth={1.5} />,
    title: "Audit, Optimisation & Maintenance",
    description: "Services d'audit technique, d'optimisation de performance et de maintenance continue pour garder vos plateformes web et mobile en parfait état de fonctionnement.",
    features: ["Analyse de performance", "Correction de bugs et vulnérabilités", "Mises à jour régulières", "Support technique réactif"],
    price: "À partir de 500K FCFA / trimestre",
    category: "maintenance",
    technologies: ["Lighthouse", "WebPageTest", "Google Analytics", "Sentry", "New Relic"]
  }];

  // Projects showcase with enhanced visuals
  const projectShowcase = [{
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
  }, {
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
  }, {
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
  }, {
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
  }];

  // Methodology steps with visual enhancements
  const methodologySteps = [{
    title: "Discovery & Analyse",
    description: "Nous commençons par comprendre vos objectifs, votre marché et vos besoins spécifiques pour définir la vision du projet.",
    icon: <Hexagon size={24} className="text-blue-500" />,
    details: "Utilisation de workshops structurés, interviews des parties prenantes et analyse concurrentielle pour établir une compréhension approfondie de vos besoins."
  }, {
    title: "Conception & Wireframing",
    description: "Création des maquettes et prototypes interactifs pour valider l'ergonomie et l'expérience utilisateur avant le développement.",
    icon: <Layout size={24} className="text-indigo-500" />,
    details: "Utilisation d'outils comme Figma et Adobe XD pour concevoir des interfaces attrayantes et fonctionnelles qui répondent à vos objectifs business."
  }, {
    title: "Développement Agile",
    description: "Développement itératif avec des sprints réguliers et des démonstrations pour vous permettre de suivre l'avancement et d'ajuster en continu.",
    icon: <Code size={24} className="text-purple-500" />,
    details: "Mise en place de méthodes agiles adaptées à la taille de votre projet avec des cycles courts de 1-2 semaines pour maximiser la flexibilité."
  }, {
    title: "Tests & Assurance Qualité",
    description: "Tests rigoureux sur différentes plateformes et appareils pour garantir la fiabilité et la performance optimale.",
    icon: <CheckCircle size={24} className="text-green-500" />,
    details: "Combinaison de tests automatisés (unit, integration, e2e) et manuels pour garantir une qualité irréprochable avant la mise en production."
  }, {
    title: "Déploiement & Formation",
    description: "Mise en production sur les infrastructures adaptées et formation de vos équipes pour une prise en main efficace.",
    icon: <Rocket size={24} className="text-cyan-500" />,
    details: "Déploiement progressif avec monitoring en temps réel et sessions de formation personnalisées pour assurer une transition en douceur."
  }, {
    title: "Support & Évolution",
    description: "Accompagnement post-lancement avec support technique et évolutions régulières pour adapter votre solution aux nouvelles exigences.",
    icon: <Users size={24} className="text-blue-500" />,
    details: "Offre de contrats de maintenance flexibles et développement continu pour garantir que votre solution reste à la pointe de la technologie."
  }];

  // Front-end technologies with descriptions
  const frontendTech = [{
    name: "React",
    desc: "Bibliothèque JavaScript pour des interfaces utilisateurs modernes et réactives"
  }, {
    name: "Vue.js",
    desc: "Framework progressif pour construire des interfaces utilisateurs interactives"
  }, {
    name: "Next.js",
    desc: "Framework React avec rendu côté serveur et génération statique"
  }, {
    name: "TypeScript",
    desc: "Superset typé de JavaScript pour un code plus robuste et maintenable"
  }, {
    name: "Tailwind CSS",
    desc: "Framework CSS utilitaire pour un développement rapide et personnalisé"
  }, {
    name: "GSAP",
    desc: "Bibliothèque d'animations avancées pour des interfaces dynamiques"
  }];

  // Back-end technologies with descriptions
  const backendTech = [{
    name: "Node.js",
    desc: "Environnement d'exécution JavaScript côté serveur pour des applications scalables"
  }, {
    name: "Express",
    desc: "Framework minimaliste pour applications Node.js et APIs REST"
  }, {
    name: "NestJS",
    desc: "Framework Node.js progressif pour applications serveur scalables"
  }, {
    name: "GraphQL",
    desc: "Langage de requête pour APIs offrant plus de précision et de flexibilité"
  }, {
    name: "PostgreSQL",
    desc: "Base de données relationnelle robuste, performante et extensible"
  }, {
    name: "MongoDB",
    desc: "Base de données NoSQL orientée documents pour une flexibilité maximale"
  }];

  // Mobile technologies with descriptions
  const mobileTech = [{
    name: "React Native",
    desc: "Framework pour applications mobiles multiplateformes avec une base de code commune"
  }, {
    name: "Flutter",
    desc: "SDK Google pour créer des applications mobiles natives avec une UI fluide"
  }, {
    name: "Swift",
    desc: "Langage moderne pour applications iOS offrant performance et sécurité"
  }, {
    name: "Kotlin",
    desc: "Langage moderne pour applications Android, concis et expressif"
  }, {
    name: "Firebase",
    desc: "Plateforme de développement d'applications mobiles avec BaaS intégré"
  }, {
    name: "Expo",
    desc: "Plateforme pour React Native simplifiant le développement et le déploiement"
  }];

  // Technical excellence features
  const technicalExcellence = [{
    title: "Architecture Évolutive",
    icon: <Server className="text-indigo-500" size={32} />,
    description: "Conceptions modulaires qui s'adaptent à votre croissance et permettent des extensions fluides sans refonte complète."
  }, {
    title: "Performance Optimisée",
    icon: <ChevronsUp className="text-cyan-500" size={32} />,
    description: "Techniques avancées d'optimisation garantissant des temps de chargement rapides et une expérience utilisateur fluide."
  }, {
    title: "Sécurité Renforcée",
    icon: <Lock className="text-green-500" size={32} />,
    description: "Implémentation des meilleures pratiques de sécurité pour protéger vos données et celles de vos utilisateurs."
  }, {
    title: "Code Maintenable",
    icon: <Code className="text-purple-500" size={32} />,
    description: "Architecture propre et documentée permettant une maintenance facile et des évolutions futures sans friction."
  }, {
    title: "Expérience Cross-Platform",
    icon: <Monitor className="text-blue-500" size={32} />,
    description: "Développement responsive garantissant une expérience cohérente sur tous les appareils et navigateurs."
  }, {
    title: "Délais Respectés",
    icon: <Timer className="text-amber-500" size={32} />,
    description: "Méthodologie éprouvée pour livrer vos projets dans les temps et le budget impartis, sans compromis sur la qualité."
  }];
  return <div className="min-h-screen flex flex-col relative">
      <Navbar />
      
      {/* Custom web space background */}
      <WebDevBackground />
      
      <main className="flex-grow relative z-10">
        {/* Hero Section - innovative digital code theme */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 via-transparent to-transparent"></div>
          
          <PageContainer>
            <div className="max-w-4xl mx-auto relative">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.7
            }} className="text-center mb-12 relative">
                <Badge variant="outline" className="bg-blue-500/10 text-blue-400 border-blue-500/30 mb-4 text-sm py-1.5 px-5 tracking-wider">
                  DÉVELOPPEMENT WEB & MOBILE
                </Badge>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                  L'Art du <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">Code</span>
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 opacity-60 rounded-full"></span>
                  </span> au Service de Votre Vision
                </h1>
                
                <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Transformez vos idées en applications performantes, intuitives et évolutives grâce à 
                  mon expertise technique et mon approche centrée sur vos objectifs business.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white border border-white/10 shadow-lg shadow-blue-500/20" asChild>
                    <Link to="/contact">
                      <Rocket className="mr-2 h-5 w-5" /> Lancer votre projet
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white backdrop-blur-sm" asChild>
                    <Link to="/portfolio">
                      Voir mes réalisations
                    </Link>
                  </Button>
                </div>

                {/* Animated code snippet */}
                <motion.div className="absolute -bottom-12 -right-24 hidden lg:block" initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 0.7,
                x: 0
              }} transition={{
                duration: 0.8,
                delay: 0.5
              }}>
                  <div className="bg-gray-950/60 backdrop-blur-md rounded-lg border border-blue-500/20 p-4 w-56 font-mono text-xs text-left overflow-hidden">
                    <div className="text-gray-400">// Your vision in code</div>
                    <div className="text-pink-400">function <span className="text-cyan-400">createAmazingWebsite</span>() {'{'}</div>
                    <div className="pl-4 text-indigo-300">const <span className="text-orange-300">design</span> = <span className="text-green-300">'stunning'</span>;</div>
                    <div className="pl-4 text-indigo-300">const <span className="text-orange-300">performance</span> = <span className="text-green-300">'lightning-fast'</span>;</div>
                    <div className="pl-4 text-purple-300">return <span className="text-blue-300">createMagic</span>(design, performance);</div>
                    <div className="text-pink-400">{'}'}</div>
                  </div>
                </motion.div>

                {/* Animated browser mockup */}
                <motion.div className="absolute -bottom-12 -left-16 hidden lg:block" initial={{
                opacity: 0,
                x: -20
              }} animate={{
                opacity: 0.7,
                x: 0
              }} transition={{
                duration: 0.8,
                delay: 0.7
              }}>
                  <div className="bg-gray-950/60 backdrop-blur-md rounded-lg border border-indigo-500/20 w-44 overflow-hidden">
                    <div className="h-5 bg-gray-800/60 flex items-center px-2 gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500/60"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500/60"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500/60"></div>
                      <div className="ml-2 h-2 w-full bg-gray-700/50 rounded-full"></div>
                    </div>
                    <div className="p-3">
                      <div className="h-3 w-full rounded bg-blue-500/20 mb-2"></div>
                      <div className="h-10 w-full rounded bg-indigo-500/10 mb-2"></div>
                      <div className="flex gap-1 mb-2">
                        <div className="h-4 w-4 rounded bg-cyan-500/20"></div>
                        <div className="h-4 flex-grow rounded bg-gray-500/20"></div>
                      </div>
                      <div className="h-2 w-3/4 rounded bg-gray-500/20 mb-1"></div>
                      <div className="h-2 w-5/6 rounded bg-gray-500/20"></div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Tech Stack Icons - dynamic tech showcase */}
              <motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              delay: 0.6,
              duration: 1
            }} className="mt-24 sm:mt-28 relative z-10">
                <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl py-8 px-4">
                  <p className="text-center text-gray-300 mb-8 text-sm uppercase tracking-wider font-medium">MAÎTRISE TECHNIQUE DES TECHNOLOGIES MODERNES</p>
                  
                  <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                    {["react", "nextjs", "vue", "nodejs", "typescript", "mongodb", "postgresql", "graphql", "docker", "aws"].map((tech, idx) => <motion.div key={tech} className="w-14 h-14 bg-gray-900/80 backdrop-blur-sm rounded-lg p-3 flex items-center justify-center border border-white/10 hover:border-blue-500/50 transition-all relative group" whileHover={{
                    y: -5,
                    scale: 1.1
                  }} initial={{
                    opacity: 0,
                    y: 20
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    delay: 0.7 + idx * 0.05
                  }}>
                        <img src={`/icons/${tech}.svg`} alt={tech} className="w-8 h-8 object-contain" />
                        <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs text-blue-300 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-medium">
                          {tech}
                        </span>
                        <span className="absolute inset-0 rounded-lg bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      </motion.div>)}
                  </div>
                </div>
              </motion.div>
            </div>
          </PageContainer>
        </section>
        
        {/* Our Web Expertise Section - visual cards with enhanced design */}
        <section className="py-20 relative z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none -z-10"></div>
          
          <PageContainer>
            <div className="text-center mb-16">
              <motion.h2 className="text-3xl md:text-4xl font-bold mb-4 text-white inline-flex flex-col items-center" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5
            }}>
                <span className="text-blue-400 uppercase text-sm font-semibold tracking-wider mb-3">Expertise complète</span>
                Notre Éventail de Services Web & Mobile
                <span className="block h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mt-6"></span>
              </motion.h2>
              
              <motion.p className="text-lg text-gray-300 max-w-3xl mx-auto mt-6" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }}>
                De la conception à la maintenance, je vous accompagne à chaque étape du cycle de développement 
                pour créer des solutions digitales performantes et parfaitement adaptées à vos besoins spécifiques.
              </motion.p>
            </div>
            
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-7xl mx-auto">
              <TabsList className="w-full flex flex-wrap justify-center bg-gray-900/50 border border-white/10 p-1.5 mb-10 rounded-xl backdrop-blur-sm">
                {webCategories.map((cat, idx) => <TabsTrigger key={cat.id} value={cat.id} className="flex-grow data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-800/50 data-[state=active]:to-indigo-800/50 data-[state=active]:text-white data-[state=active]:border-white/20 text-gray-300 rounded-lg transition-all py-2.5">
                    {cat.name}
                  </TabsTrigger>)}
              </TabsList>
              
              {webCategories.map(category => <TabsContent key={category.id} value={category.id} className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {webServices.filter(service => category.id === 'all' || service.category === category.id).map((service, idx) => <motion.div key={service.title} initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.5,
                  delay: idx * 0.1
                }} whileHover={{
                  y: -5
                }}>
                          <Card className="h-full flex flex-col bg-gray-900/70 backdrop-blur-md border border-white/10 hover:border-blue-500/30 hover:shadow-[0_5px_30px_rgba(59,130,246,0.2)] transition-all duration-300 overflow-hidden group">
                            <CardHeader className="pb-4 relative">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-full"></div>
                              <div className="text-primary mb-4 bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-3 rounded-lg inline-flex border border-white/10 group-hover:border-blue-500/30 transition-colors relative z-10">
                                {service.icon}
                              </div>
                              <CardTitle className="text-white text-xl relative z-10">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow pb-5">
                              <p className="text-gray-300 mb-5">{service.description}</p>
                              <ul className="space-y-2.5 mb-5">
                                {service.features.map((feature, i) => <li key={i} className="flex items-start gap-3">
                                    <div className="text-blue-400 shrink-0 mt-1">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 6L9 17l-5-5"></path>
                                      </svg>
                                    </div>
                                    <span className="text-sm text-gray-300">{feature}</span>
                                  </li>)}
                              </ul>
                              <div className="flex flex-wrap gap-2 mb-4">
                                {service.technologies.map((tech, index) => <span key={index} className="text-xs px-2.5 py-1 bg-blue-900/20 border border-blue-500/20 rounded-full text-blue-300">
                                    {tech}
                                  </span>)}
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
                        </motion.div>)}
                  </div>
                </TabsContent>)}
            </Tabs>
          </PageContainer>
        </section>
        
        {/* Development Technology Stacks */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm -z-10"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2MywgNjMsIDI1NSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-15 -z-10"></div>
          
          <PageContainer>
            <div className="text-center mb-16">
              <motion.h2 className="text-3xl md:text-4xl font-bold mb-4 text-white inline-block" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5
            }}>
                <span className="text-blue-400 uppercase text-sm font-semibold tracking-wider block mb-3">Technologies maîtrisées</span>
                Stack Technologique Complète
                <span className="block h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6"></span>
              </motion.h2>
              
              <motion.p className="text-lg text-gray-300 max-w-3xl mx-auto mt-6" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }}>
                Je maîtrise les technologies les plus modernes et performantes du marché, me permettant d'implémenter
                la solution optimale pour chaque projet, de l'interface utilisateur aux systèmes backend.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Frontend Stack */}
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }}>
                <Card className="h-full bg-gradient-to-br from-blue-900/20 to-blue-900/10 backdrop-blur-md border border-blue-500/20">
                  <CardHeader className="pb-4">
                    <Badge variant="outline" className="w-fit bg-blue-900/30 text-blue-300 border-blue-400/30 uppercase">
                      Frontend
                    </Badge>
                    <CardTitle className="text-white mt-2 flex items-center gap-3">
                      <Monitor size={22} className="text-blue-400" />
                      Développement Frontend
                    </CardTitle>
                    <CardDescription className="text-gray-950">
                      Interfaces utilisateurs modernes et réactives avec animations fluides
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {frontendTech.map((tech, idx) => <div key={idx} className="flex items-center gap-3 group">
                        <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform"></div>
                        <div>
                          <h4 className="text-white font-medium">{tech.name}</h4>
                          <p className="text-sm text-zinc-950">{tech.desc}</p>
                        </div>
                      </div>)}
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Backend Stack */}
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }}>
                <Card className="h-full bg-gradient-to-br from-purple-900/20 to-purple-900/10 backdrop-blur-md border border-purple-500/20">
                  <CardHeader className="pb-4">
                    <Badge variant="outline" className="w-fit bg-purple-900/30 text-purple-300 border-purple-400/30 uppercase">
                      Backend
                    </Badge>
                    <CardTitle className="text-white mt-2 flex items-center gap-3">
                      <Server size={22} className="text-purple-400" />
                      Développement Backend
                    </CardTitle>
                    <CardDescription className="text-zinc-950">
                      APIs robustes et bases de données optimisées pour des performances maximales
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {backendTech.map((tech, idx) => <div key={idx} className="flex items-center gap-3 group">
                        <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:scale-150 transition-transform"></div>
                        <div>
                          <h4 className="text-white font-medium">{tech.name}</h4>
                          <p className="text-sm text-gray-950">{tech.desc}</p>
                        </div>
                      </div>)}
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Mobile Stack */}
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.4
            }}>
                <Card className="h-full bg-gradient-to-br from-cyan-900/20 to-cyan-900/10 backdrop-blur-md border border-cyan-500/20">
                  <CardHeader className="pb-4">
                    <Badge variant="outline" className="w-fit bg-cyan-900/30 text-cyan-300 border-cyan-400/30 uppercase">
                      Mobile
                    </Badge>
                    <CardTitle className="text-white mt-2 flex items-center gap-3">
                      <Phone size={22} className="text-cyan-400" />
                      Développement Mobile
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      Applications mobiles natives et hybrides pour iOS et Android
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {mobileTech.map((tech, idx) => <div key={idx} className="flex items-center gap-3 group">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform"></div>
                        <div>
                          <h4 className="text-white font-medium">{tech.name}</h4>
                          <p className="text-sm text-gray-400">{tech.desc}</p>
                        </div>
                      </div>)}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </PageContainer>
        </section>
        
        {/* Project Showcase with enhanced cards and animations */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 -z-10"></div>
          <PageContainer>
            <div className="text-center mb-16">
              <motion.h2 className="text-3xl md:text-4xl font-bold mb-4 text-white inline-flex flex-col items-center" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5
            }}>
                <span className="text-blue-400 uppercase text-sm font-semibold tracking-wider mb-3">Portfolio sélectionné</span>
                Projets Web & Mobile À Succès
                <span className="block h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mt-6"></span>
              </motion.h2>
              
              <motion.p className="text-lg text-gray-300 max-w-3xl mx-auto mt-6" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }}>
                Des solutions sur mesure pour des clients internationaux, parfaitement adaptées 
                à leurs contextes spécifiques et générant des résultats mesurables.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
              {projectShowcase.map((project, idx) => <motion.div key={project.title} initial={{
              opacity: 0,
              y: 40
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.7,
              delay: idx * 0.2
            }} whileHover={{
              y: -7,
              transition: {
                duration: 0.3
              }
            }} className="group">
                  <Card className="h-full overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-900/60 backdrop-blur-sm border border-white/10 hover:border-blue-500/40 hover:shadow-[0_5px_30px_rgba(59,130,246,0.25)] transition-all duration-300">
                    <div className="relative">
                      <AspectRatio ratio={16 / 9} className="overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                        <img src={project.image} alt={project.title} className="object-cover w-full h-full brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" />
                      </AspectRatio>
                      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                        <p className="inline-block px-2.5 py-1 bg-blue-900/50 backdrop-blur-sm border border-blue-500/30 rounded-md text-sm text-blue-300 font-medium mb-3">
                          {project.client}
                        </p>
                        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      </div>
                    </div>
                    <CardContent className="pt-5">
                      <p className="text-gray-300 mb-5">{project.description}</p>
                      
                      {/* Key metrics section with improved design */}
                      <div className="grid grid-cols-3 gap-4 mb-5">
                        {Object.entries(project.metrics).map(([key, value], i) => <div key={key} className="text-center p-3 rounded-lg relative overflow-hidden group">
                            <div className="absolute inset-0 bg-blue-900/20 border border-blue-500/20 rounded-lg group-hover:bg-blue-900/30 transition-colors"></div>
                            <div className="relative z-10">
                              <p className="text-xl font-bold text-blue-300">{value}</p>
                              <p className="text-xs text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                            </div>
                          </div>)}
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => <span key={tech} className="text-xs px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-full text-gray-300">
                            {tech}
                          </span>)}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </div>
            
            <div className="text-center mt-14">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white border border-white/10 shadow-lg shadow-blue-500/10 px-8" size="lg" asChild>
                <Link to="/portfolio">
                  Découvrir tous mes projets <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </PageContainer>
        </section>
        
        {/* Technical Excellence Section with interactive cards */}
        <section className="py-20 relative bg-black/20 backdrop-blur-sm">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2MywgNjMsIDI1NSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-10 -z-10"></div>
          <PageContainer>
            <div className="text-center mb-16">
              <motion.h2 className="text-3xl md:text-4xl font-bold mb-4 text-white inline-flex flex-col items-center" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5
            }}>
                <span className="text-blue-400 uppercase text-sm font-semibold tracking-wider mb-3">Pourquoi me choisir</span>
                Excellence Technique & Méthodologique
                <span className="block h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mt-6"></span>
              </motion.h2>
              
              <motion.p className="text-lg text-gray-300 max-w-3xl mx-auto mt-6" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }}>
                Mon expertise technique garantit des solutions performantes, sécurisées et parfaitement 
                adaptées à vos enjeux business.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {technicalExcellence.map((feature, idx) => <motion.div key={feature.title} initial={{
              opacity: 0,
              y: 25
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: idx * 0.1
            }} whileHover={{
              y: -7
            }} className="group">
                  <Card className="h-full bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 hover:shadow-[0_5px_30px_rgba(59,130,246,0.2)] transition-all overflow-hidden">
                    <CardHeader>
                      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-4 rounded-lg inline-flex border border-white/10 group-hover:border-blue-500/30 transition-colors mb-3 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:-translate-y-1 transition-all">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-300">
                      {feature.description}
                    </CardContent>
                  </Card>
                </motion.div>)}
            </div>
          </PageContainer>
        </section>
        
        {/* Development Methodology Section with visual timeline */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent -z-10"></div>
          <PageContainer>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <motion.h2 className="text-3xl md:text-4xl font-bold mb-4 text-white inline-flex flex-col items-center" initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5
              }}>
                  <span className="text-blue-400 uppercase text-sm font-semibold tracking-wider mb-3">Processus éprouvé</span>
                  Notre Méthodologie de Développement
                  <span className="block h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mt-6"></span>
                </motion.h2>
                
                <motion.p className="text-lg text-gray-300 max-w-3xl mx-auto mt-6" initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: 0.2
              }}>
                  Une approche structurée et agile pour délivrer des solutions qui répondent parfaitement 
                  à vos besoins, dans les délais et le budget impartis.
                </motion.p>
              </div>
              
              <div className="relative">
                {/* Timeline connector with gradient */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500"></div>
                
                {/* Timeline items with enhanced design */}
                {methodologySteps.map((step, idx) => <motion.div key={step.title} className={`flex items-stretch mb-20 lg:mb-24 ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col`} initial={{
                opacity: 0,
                y: 30
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.8,
                delay: idx * 0.15
              }}>
                    <div className={`w-full lg:w-1/2 ${idx % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'} mb-6 lg:mb-0`}>
                      <div className="mb-2 inline-flex items-center">
                        <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-900/30 text-blue-300 border border-blue-500/30 ${idx % 2 === 0 ? 'lg:ml-auto' : ''}`}>
                          Étape {idx + 1}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                      <p className="text-gray-300 mb-3 text-lg">{step.description}</p>
                      <p className="text-sm text-gray-400">{step.details}</p>
                    </div>
                    
                    <div className="relative z-10 flex items-center justify-center mx-auto lg:mx-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-black rounded-full shadow-lg border-4 border-blue-500 flex items-center justify-center transform transition-transform hover:scale-110">
                        <div className="text-blue-400">
                          {step.icon}
                        </div>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute -z-10 w-24 h-24 bg-blue-500/5 rounded-full blur-md animate-pulse"></div>
                    </div>
                    
                    <div className="w-full lg:w-1/2"></div>
                  </motion.div>)}
              </div>
            </div>
          </PageContainer>
        </section>
        
        {/* FAQ Section with enhanced accordions */}
        <section className="py-20 relative bg-black/20 backdrop-blur-sm">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2MywgNjMsIDI1NSwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-10 -z-10"></div>
          <PageContainer>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <motion.h2 className="text-3xl md:text-4xl font-bold mb-4 text-white inline-flex flex-col items-center" initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5
              }}>
                  <span className="text-blue-400 uppercase text-sm font-semibold tracking-wider mb-3">Pour en savoir plus</span>
                  Questions Fréquentes
                  <span className="block h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-500 mt-6"></span>
                </motion.h2>
              </div>
              
              <div className="space-y-5">
                {[{
                question: "Quels types de technologies utilisez-vous pour le développement web ?",
                answer: "J'utilise les technologies les plus modernes et performantes selon les besoins spécifiques de chaque projet. Pour le front-end : React.js, Vue.js, Angular, Next.js. Pour le back-end : Node.js, Django, Laravel, .NET Core. Pour les bases de données : PostgreSQL, MongoDB, MySQL. J'adapte ma stack technologique aux exigences de performance, d'évolutivité et de maintenance de votre projet."
              }, {
                question: "Comment assurez-vous la compatibilité de mes applications avec les marchés internationaux ?",
                answer: "Je prends en compte les spécificités des marchés internationaux : optimisation pour différentes qualités de connexion internet, intégration des moyens de paiement locaux et internationaux, adaptation au multilinguisme, compatibilité avec une large gamme d'appareils, et optimisation des performances. Mon expérience dans de nombreux pays me permet de créer des solutions parfaitement adaptées aux réalités de chaque marché."
              }, {
                question: "Quels sont les délais typiques pour le développement d'un site ou d'une application ?",
                answer: "Les délais varient selon la complexité du projet : un site vitrine professionnel peut être livré en 2-4 semaines, un e-commerce personnalisé en 1-3 mois, et une application mobile ou web complexe en 3-6 mois. J'établis un planning précis avec des jalons clairs dès le début du projet et travaille en méthode agile pour vous livrer des versions fonctionnelles régulièrement."
              }, {
                question: "Proposez-vous des services de maintenance après le lancement ?",
                answer: "Oui, j'offre plusieurs formules de maintenance : technique (mises à jour de sécurité, corrections de bugs), évolutive (ajout de fonctionnalités), et support utilisateur. Mes contrats de maintenance garantissent la pérennité de votre solution et son adaptation continue aux évolutions technologiques et à vos besoins business."
              }, {
                question: "Comment gérez-vous les projets avec des clients internationaux ?",
                answer: "J'ai une forte expérience de collaboration avec des clients en Europe (France, UK), aux USA et dans de nombreux pays à travers le monde. J'utilise des outils collaboratifs efficaces (Slack, Jira, GitHub) et organise des réunions régulières par visioconférence. Je suis habitué aux projets internationaux et peux m'adapter à différents fuseaux horaires pour assurer une communication fluide."
              }].map((item, idx) => <motion.div key={idx} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: idx * 0.1
              }}>
                    <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-md border border-white/10 hover:border-blue-500/20 transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl text-white flex items-start">
                          <span className="inline-block text-blue-400 mr-3">Q:</span>
                          {item.question}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex">
                          <span className="inline-block text-blue-400 mr-3">R:</span>
                          <p className="text-gray-300">{item.answer}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>)}
              </div>
              
              <div className="mt-12 text-center">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white border border-white/10 shadow-lg shadow-blue-500/10" size="lg" asChild>
                  <Link to="/contact">
                    Discuter de votre projet web ou mobile
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </PageContainer>
        </section>
        
        {/* CTA Section with enhanced visual impact */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-indigo-900/10 -z-10"></div>
          <PageContainer>
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10">
              <div className="p-12 md:p-16 relative">
                {/* Background effects */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 opacity-70 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/5 opacity-70 blur-3xl rounded-full"></div>
                
                {/* Code brackets decoration */}
                <div className="absolute top-8 left-8 text-blue-500/10 text-7xl font-mono transform -rotate-12">{"{}"}</div>
                <div className="absolute bottom-8 right-8 text-indigo-500/10 text-7xl font-mono transform rotate-12">{"</>"}</div>
                
                {/* Browser window mockup */}
                <div className="absolute right-12 top-12 w-32 h-20 bg-gray-900/30 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden opacity-40 rotate-6 hidden lg:block">
                  <div className="h-4 bg-gray-800/70 flex items-center px-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/70 mr-1"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/70 mr-1"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/70"></div>
                  </div>
                  <div className="p-2">
                    <div className="h-1 w-full bg-blue-500/20 rounded mb-1"></div>
                    <div className="h-1 w-2/3 bg-blue-500/20 rounded mb-1"></div>
                    <div className="h-3 w-full bg-blue-500/10 rounded mb-1"></div>
                  </div>
                </div>
                
                {/* Mobile mockup */}
                <div className="absolute left-14 bottom-10 w-16 h-28 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden opacity-40 -rotate-6 hidden lg:block">
                  <div className="h-1.5 w-4 bg-gray-800/70 rounded-b mx-auto"></div>
                  <div className="mt-1.5 px-1.5">
                    <div className="h-1 w-full bg-indigo-500/20 rounded mb-1"></div>
                    <div className="h-4 w-full bg-indigo-500/10 rounded mb-1"></div>
                    <div className="h-1 w-2/3 bg-indigo-500/20 rounded"></div>
                  </div>
                </div>
                
                <div className="relative z-10 text-center">
                  <motion.h2 className="text-3xl md:text-4xl font-bold mb-6 text-white" initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.5
                }}>
                    Prêt à lancer votre projet digital ?
                  </motion.h2>
                  <motion.p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto" initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.5,
                  delay: 0.1
                }}>
                    Contactez-moi pour discuter de vos besoins et obtenir une proposition 
                    adaptée à votre contexte et à vos objectifs.
                  </motion.p>
                  
                  <motion.div className="flex flex-wrap justify-center gap-4" initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.5,
                  delay: 0.2
                }}>
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition-opacity text-white border border-white/10 shadow-lg shadow-blue-500/20" asChild>
                      <Link to="/contact">
                        <Rocket className="mr-2 h-5 w-5" /> Lancer votre projet
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white backdrop-blur-sm" asChild>
                      <Link to="/services">
                        Explorer d'autres services
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </PageContainer>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default WebServices;