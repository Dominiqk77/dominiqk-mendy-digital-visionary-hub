import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProjectViewDialog from '../components/portfolio/ProjectViewDialog';
import { ExternalLink, ArrowRight, Star, Code, Database, Globe, BarChart3, BookOpen, Rocket, Eye, TrendingUp, Shield, Zap, Users, Brain, Smartphone, Mountain, Utensils, Package, Palette, Microscope, Heart, Lightbulb, Settings } from 'lucide-react';

// Star background component
const StarBackground = () => {
  const [stars, setStars] = useState<{id: number, x: number, y: number, size: number, delay: number}[]>([]);
  
  useEffect(() => {
    const starCount = 50;
    const newStars = Array.from({ length: starCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 3
    }));
    setStars(newStars);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div 
          key={star.id}
          className="space-dot"
          style={{ 
            left: `${star.x}%`, 
            top: `${star.y}%`, 
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}
    </div>
  );
};

const Portfolio = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    document.title = 'Portfolio | Dominiqk Mendy | Projets & Réalisations Innovation';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Découvrez les projets innovants de Dominiqk Mendy : plateformes IA, solutions blockchain, applications fintech et systèmes de gestion avancés pour entreprises internationales.'
      );
    }
    
    window.scrollTo(0, 0);
  }, []);
  
  const handleProjectClick = () => {
    setIsDialogOpen(true);
  };
  
  const projects = [
    {
      id: 24,
      title: "Sen'Services - Administration Numérique Sénégalaise",
      category: "platform",
      image: "/lovable-uploads/5b00c06a-f156-4ccd-9a85-3139d5c0bcb1.png",
      description: "Plateforme digitale révolutionnaire pour simplifier les services administratifs sénégalais. Solution complète avec plus de 500 services accessibles en ligne, sécurisation des données et interface intuitive pour tous les citoyens.",
      tags: ["E-Government", "Digital Services", "Public Administration", "Citizen Platform"],
      metrics: { services: "500+", users: "Citizens", security: "Garantie" },
      link: "#",
      icon: <Settings className="h-6 w-6" />,
      color: "from-green-600 to-yellow-600"
    },
    {
      id: 25,
      title: "AVC Prévention - Détection Intelligente des Risques",
      category: "health",
      image: "/lovable-uploads/f634965a-a21c-495b-b715-8319ed907034.png",
      description: "Plateforme intelligente de détection précoce des risques d'AVC grâce à l'analyse ECG. Solution médicale innovante avec dépistage en 60 secondes, interface moderne et technologie de pointe pour sauver des vies.",
      tags: ["HealthTech", "Medical AI", "ECG Analysis", "Prevention"],
      metrics: { detection: "60s", accuracy: "Medical-grade", lives: "Saved" },
      link: "#",
      icon: <Heart className="h-6 w-6" />,
      color: "from-red-600 to-pink-600"
    },
    {
      id: 26,
      title: "M2N Energie Solutions - Transition Énergétique",
      category: "energy",
      image: "/lovable-uploads/b732f5ba-1fb0-4ba9-92a8-48f5180dbfab.png",
      description: "Solutions énergétiques innovantes pour économiser énergie et eau sans investissement initial. Plateforme complète de transition énergétique avec audit gratuit, technologies durables et accompagnement expert personnalisé.",
      tags: ["Energy Solutions", "Sustainability", "Green Tech", "Cost Reduction"],
      metrics: { savings: "No upfront", audit: "Free", transition: "Complete" },
      link: "#",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "from-blue-600 to-green-600"
    },
    {
      id: 27,
      title: "Sen'Services Portal - Révolution Administrative",
      category: "platform",
      image: "/lovable-uploads/f6876651-4092-479b-8d72-e137f55f059b.png",
      description: "La révolution de l'administration sénégalaise développée par des experts locaux. Plateforme pour simplifier, accélérer et sécuriser l'accès aux services publics avec solution 100% développée au Sénégal.",
      tags: ["Government Portal", "Local Development", "Public Services", "Digital Transformation"],
      metrics: { development: "100% Local", access: "Simplified", security: "Advanced" },
      link: "#",
      icon: <Globe className="h-6 w-6" />,
      color: "from-orange-600 to-green-600"
    },
    {
      id: 1,
      title: "KAYEXSA - Plateforme Maritime Intelligente",
      category: "maritime",
      image: "/lovable-uploads/64a065b7-85a3-4637-89bd-531ed0075053.png",
      description: "Solution complète d'innovation maritime avec IA pour l'optimisation des routes offshore, procurement automatisé et services techniques ETS. Intégration de technologies prédictives pour améliorer l'efficacité opérationnelle de 40%.",
      tags: ["Maritime Tech", "IA Prédictive", "Offshore", "Automation"],
      metrics: { users: "50K+", efficiency: "+40%", savings: "$2.5M" },
      link: "#",
      icon: <Globe className="h-6 w-6" />,
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 2,
      title: "Cracker - Fintech Révolutionnaire",
      category: "fintech",
      image: "/lovable-uploads/29518682-e2b1-4152-8f5f-5835f92623ca.png",
      description: "Plateforme fintech next-gen avec cartes virtuelles personnalisables, cashback intelligent et design unique. Interface ultra-moderne avec gestion financière simplifiée et sécurité blockchain intégrée.",
      tags: ["Fintech", "Blockchain", "Virtual Cards", "UX Design"],
      metrics: { transactions: "1M+", satisfaction: "4.9/5", growth: "+180%" },
      link: "#",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 3,
      title: "Flup - Système de Tracking Intelligent",
      category: "logistics",
      image: "/lovable-uploads/330d9ea3-62fb-444d-b8cf-eb53399e13fb.png",
      description: "Plateforme de suivi logistique en temps réel avec IA prédictive, optimisation des routes et interface intuitive. Révolutionne la gestion de flotte avec analyse prédictive des délais et optimisation automatique.",
      tags: ["Logistics", "Real-time Tracking", "Fleet Management", "IoT"],
      metrics: { deliveries: "500K+", accuracy: "99.8%", time_saved: "35%" },
      link: "#",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "from-green-600 to-emerald-600"
    },
    {
      id: 4,
      title: "Dashboard Analytics E-commerce",
      category: "analytics",
      image: "/lovable-uploads/ae402755-b91a-4100-8883-17b8e2e43254.png",
      description: "Interface de gestion e-commerce avec analytics avancés, visualisation en temps réel des performances et insights IA. Intégration complète pour optimiser les ventes et l'expérience client avec prédictions comportementales.",
      tags: ["E-commerce", "Analytics", "Business Intelligence", "Dashboard"],
      metrics: { revenue_boost: "+250%", conversion: "+45%", insights: "Real-time" },
      link: "#",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "from-orange-600 to-red-600"
    },
    {
      id: 5,
      title: "Skyline - Platform Automotive Premium",
      category: "automotive",
      image: "/lovable-uploads/0b3cfab2-48ff-4eb9-af9c-380116ba7735.png",
      description: "Plateforme digitale premium pour l'industrie automobile avec design ultra-moderne, configurateur 3D et expérience immersive. Interface révolutionnaire combinant performance, sécurité et innovation technologique de pointe.",
      tags: ["Automotive", "3D Experience", "Premium Design", "Innovation"],
      metrics: { engagement: "+300%", leads: "390K+", satisfaction: "Ultimate" },
      link: "#",
      icon: <Zap className="h-6 w-6" />,
      color: "from-red-600 to-orange-600"
    },
    {
      id: 6,
      title: "Support Chat IA Multiplateforme",
      category: "ai",
      image: "/lovable-uploads/495ed398-4979-4ac1-a88d-1786a29d5039.png",
      description: "Système de support client intelligent avec IA conversationnelle, gestion des réclamations automatisée et interface mobile optimisée. Solution omnicanale avec apprentissage automatique pour améliorer continuellement l'expérience.",
      tags: ["Customer Support", "IA Conversationnelle", "Mobile App", "Automation"],
      metrics: { response_time: "-80%", satisfaction: "4.8/5", resolution: "95%" },
      link: "#",
      icon: <Brain className="h-6 w-6" />,
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 7,
      title: "Flup Analytics - Business Intelligence",
      category: "business",
      image: "/lovable-uploads/1eba62b9-3add-4465-92bd-a402eb846093.png",
      description: "Suite complète d'analytics business avec tableaux de bord interactifs, KPIs en temps réel et intelligence artificielle. Plateforme de prise de décision stratégique avec visualisations avancées et prédictions marché.",
      tags: ["Business Intelligence", "Data Visualization", "Strategic Analytics", "Predictive AI"],
      metrics: { decisions: "10x faster", accuracy: "98%", roi: "+400%" },
      link: "#",
      icon: <Users className="h-6 w-6" />,
      color: "from-blue-600 to-indigo-600"
    },
    {
      id: 8,
      title: "Fleet Management - Tracking Avancé",
      category: "logistics",
      image: "/lovable-uploads/cd949f4d-b32f-4fbf-8e24-afb25fcb418a.png",
      description: "Système de gestion de flotte avec tracking GPS en temps réel, optimisation des itinéraires par IA et monitoring complet. Solution enterprise pour optimiser les coûts logistiques et améliorer l'efficacité opérationnelle.",
      tags: ["Fleet Management", "GPS Tracking", "Route Optimization", "Enterprise"],
      metrics: { vehicles: "10K+", fuel_savings: "25%", efficiency: "+60%" },
      link: "#",
      icon: <Shield className="h-6 w-6" />,
      color: "from-green-600 to-blue-600"
    },
    {
      id: 9,
      title: "SellBoard - E-commerce Dashboard Pro",
      category: "ecommerce",
      image: "/lovable-uploads/aae010a5-5f6a-4bd0-a13c-495fc113b702.png",
      description: "Dashboard e-commerce professionnel avec analytics complets, gestion des commandes intelligente et insights comportementaux. Interface moderne pour optimiser les ventes avec IA prédictive et automatisation marketing.",
      tags: ["E-commerce Dashboard", "Sales Analytics", "Order Management", "Marketing AI"],
      metrics: { sales_boost: "+180%", orders: "50K+", automation: "90%" },
      link: "#",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "from-purple-600 to-blue-600"
    },
    {
      id: 10,
      title: "CAMPEX - Plateforme Aventure Mobile",
      category: "mobile",
      image: "/lovable-uploads/b2e4c07b-35d8-465d-bc89-55b26816f6c6.png",
      description: "Application mobile immersive pour les aventuriers avec géolocalisation avancée, communauté intégrée et planification d'expéditions. Interface dark premium avec fonctionnalités offline et partage d'expériences en temps réel.",
      tags: ["Mobile App", "Adventure Tech", "Community", "Geolocation"],
      metrics: { users: "100K+", expeditions: "5K+", engagement: "+85%" },
      link: "#",
      icon: <Mountain className="h-6 w-6" />,
      color: "from-green-600 to-teal-600"
    },
    {
      id: 11,
      title: "KAYEXSA Services - Solution Maritime B2B",
      category: "maritime",
      image: "/lovable-uploads/9a7d079f-f990-4e17-9513-6fed72402776.png",
      description: "Plateforme B2B spécialisée dans les services maritimes avec gestion des techniciens offshore, planning automatisé et certification digitale. Solution complète pour l'industrie pétrolière et gazière avec conformité internationale.",
      tags: ["Maritime B2B", "Offshore Services", "Certification", "Compliance"],
      metrics: { technicians: "2K+", compliance: "100%", efficiency: "+50%" },
      link: "#",
      icon: <Shield className="h-6 w-6" />,
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: 12,
      title: "EduWorks - Plateforme E-learning Futuriste",
      category: "education",
      image: "/lovable-uploads/968156fa-6795-4790-9b90-3ed31a13468d.png",
      description: "Plateforme éducative révolutionnaire avec design 3D immersif, apprentissage adaptatif par IA et collaboration en temps réel. Interface futuriste pour débloquer le potentiel éducatif avec gamification avancée.",
      tags: ["E-learning", "3D Design", "Adaptive AI", "Gamification"],
      metrics: { students: "50K+", completion: "+70%", satisfaction: "4.9/5" },
      link: "#",
      icon: <BookOpen className="h-6 w-6" />,
      color: "from-purple-600 to-pink-600"
    },
    {
      id: 13,
      title: "Web3 Platform - Solutions Blockchain",
      category: "blockchain",
      image: "/lovable-uploads/3579282a-3333-4ce8-abab-282c84f97950.png",
      description: "Plateforme Web3 complète avec smart contracts optimisés, interface utilisateur intuitive et sécurité avancée. Solution blockchain enterprise pour l'avenir digital avec intégration DeFi et gouvernance décentralisée.",
      tags: ["Web3", "Blockchain", "Smart Contracts", "DeFi"],
      metrics: { transactions: "1M+", security: "Military-grade", adoption: "+200%" },
      link: "#",
      icon: <Code className="h-6 w-6" />,
      color: "from-indigo-600 to-purple-600"
    },
    {
      id: 14,
      title: "Mokala - Plateforme Food Delivery",
      category: "food",
      image: "/lovable-uploads/6b23b8da-70d6-4410-9bc2-ddbf9c2b1562.png",
      description: "Application de livraison alimentaire avec interface moderne, géolocalisation précise et système de commande intuitif. Plateforme multi-restaurants avec algorithmes d'optimisation des livraisons et expérience utilisateur exceptionnelle.",
      tags: ["Food Delivery", "Mobile App", "Logistics", "User Experience"],
      metrics: { orders: "200K+", delivery_time: "-30%", restaurants: "500+" },
      link: "#",
      icon: <Utensils className="h-6 w-6" />,
      color: "from-orange-600 to-red-600"
    },
    {
      id: 15,
      title: "Travel Geography - App Mobile Premium",
      category: "travel",
      image: "/lovable-uploads/095c1671-4572-4f06-bce8-e5159882efdc.png",
      description: "Application mobile premium pour voyageurs avec tracking géographique, statistiques personnalisées et interface dark élégante. Solution complète pour documenter et analyser ses aventures avec fonctionnalités sociales intégrées.",
      tags: ["Travel App", "Geography", "Statistics", "Social Features"],
      metrics: { travelers: "75K+", countries: "190+", memories: "1M+" },
      link: "#",
      icon: <Globe className="h-6 w-6" />,
      color: "from-blue-600 to-indigo-600"
    },
    {
      id: 16,
      title: "MEK Meats - Brand Identity & Packaging",
      category: "branding",
      image: "/lovable-uploads/95717288-57dd-409e-8c3d-37d902eb910a.png",
      description: "Design de marque premium pour produits carnés avec packaging innovant, identité visuelle forte et positionnement haut de gamme. Solution complète de branding avec stratégie marketing et design produit exceptionnel.",
      tags: ["Brand Design", "Packaging", "Premium Products", "Visual Identity"],
      metrics: { brand_value: "+300%", recognition: "95%", sales: "+150%" },
      link: "#",
      icon: <Package className="h-6 w-6" />,
      color: "from-red-600 to-orange-600"
    },
    {
      id: 17,
      title: "Transport Dashboard - Logistique Avancée",
      category: "logistics",
      image: "/lovable-uploads/493845e4-3560-4bf5-894b-4e72c6e84493.png",
      description: "Dashboard logistique professionnel avec tracking multi-modal, analytics prédictifs et gestion client intégrée. Interface claire pour optimiser les opérations de transport avec KPIs en temps réel et automatisation intelligente.",
      tags: ["Transport Management", "Logistics Dashboard", "Predictive Analytics", "Client Management"],
      metrics: { shipments: "100K+", efficiency: "+45%", costs: "-25%" },
      link: "#",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "from-green-600 to-blue-600"
    },
    {
      id: 18,
      title: "Visionaries - Agence Créative Premium",
      category: "creative",
      image: "/lovable-uploads/4adf4e96-6afe-4e4c-85c8-135485ae11d5.png",
      description: "Site web premium pour agence créative avec design innovant, portfolio immersif et expérience utilisateur exceptionnelle. Plateforme digitale révolutionnaire mettant en valeur les services créatifs avec animations fluides.",
      tags: ["Creative Agency", "Premium Web", "Portfolio", "Immersive Design"],
      metrics: { projects: "640+", rating: "5.0/5", clients: "Top-tier" },
      link: "#",
      icon: <Palette className="h-6 w-6" />,
      color: "from-blue-600 to-purple-600"
    },
    {
      id: 19,
      title: "Digital Transformation - FAQ Platform",
      category: "platform",
      image: "/lovable-uploads/6a72c200-8a33-4855-a021-3e45542a662e.png",
      description: "Plateforme de transformation digitale avec FAQ intelligente, onboarding guidé et interface moderne. Solution complète pour accompagner les entreprises dans leur digitalisation avec support IA et documentation interactive.",
      tags: ["Digital Transformation", "FAQ Platform", "AI Support", "Enterprise"],
      metrics: { companies: "1K+", satisfaction: "98%", automation: "85%" },
      link: "#",
      icon: <Rocket className="h-6 w-6" />,
      color: "from-indigo-600 to-blue-600"
    },
    {
      id: 20,
      title: "Brand Guidelines - Système de Design",
      category: "design",
      image: "/lovable-uploads/817831b0-e154-4b05-b402-526b9831b448.png",
      description: "Système de design complet avec guidelines de marque, palette de couleurs professionnelle et typographie moderne. Solution complète pour maintenir la cohérence visuelle avec documentation détaillée et assets organisés.",
      tags: ["Design System", "Brand Guidelines", "Typography", "Color Palette"],
      metrics: { consistency: "100%", adoption: "95%", efficiency: "+60%" },
      link: "#",
      icon: <Palette className="h-6 w-6" />,
      color: "from-gray-600 to-red-600"
    },
    {
      id: 21,
      title: "Xefag Health - App Wellness Premium",
      category: "health",
      image: "/lovable-uploads/e3332c99-48c7-48d6-8810-086a6aaaeaf5.png",
      description: "Application santé premium avec design coloré, tracking personnalisé et e-commerce intégré. Interface moderne pour produits wellness avec expérience d'achat fluide et suivi de consommation intelligent.",
      tags: ["Health App", "Wellness", "E-commerce", "Tracking"],
      metrics: { users: "200K+", sales: "+180%", retention: "85%" },
      link: "#",
      icon: <Brain className="h-6 w-6" />,
      color: "from-pink-600 to-purple-600"
    },
    {
      id: 22,
      title: "NexusSci - Plateforme Recherche IA",
      category: "research",
      image: "/lovable-uploads/c6409c45-9923-466e-ba45-a592b037df63.png",
      description: "Plateforme de recherche scientifique avancée avec IA partenaire, découvertes automatisées et collaboration internationale. Interface moderne pour accélérer la recherche avec 1500+ projets et outils d'analyse révolutionnaires.",
      tags: ["Scientific Research", "AI Partner", "Collaboration", "Discovery"],
      metrics: { researchers: "1.5K+", discoveries: "500+", impact: "Global" },
      link: "#",
      icon: <Microscope className="h-6 w-6" />,
      color: "from-blue-600 to-green-600"
    },
    {
      id: 23,
      title: "Campex Desktop - Plateforme Voyage",
      category: "travel",
      image: "/lovable-uploads/3490d9cc-cadd-4942-a270-81ffbc7c7dc8.png",
      description: "Plateforme de voyage complète avec interface desktop immersive, planification d'aventures et tracking de véhicules. Solution ultimate pour compagnons de voyage avec fonctionnalités avancées de géolocalisation et partage d'expériences.",
      tags: ["Travel Platform", "Adventure Planning", "Vehicle Tracking", "Desktop App"],
      metrics: { adventures: "10K+", travelers: "50K+", satisfaction: "Premium" },
      link: "#",
      icon: <Mountain className="h-6 w-6" />,
      color: "from-orange-600 to-yellow-600"
    }
  ];

  const categories = [
    { id: "all", name: "Tous les Projets", icon: <Star className="h-4 w-4" /> },
    { id: "fintech", name: "Fintech & Finance", icon: <BarChart3 className="h-4 w-4" /> },
    { id: "ai", name: "Intelligence Artificielle", icon: <Brain className="h-4 w-4" /> },
    { id: "logistics", name: "Logistique & Transport", icon: <TrendingUp className="h-4 w-4" /> },
    { id: "maritime", name: "Maritime & Offshore", icon: <Globe className="h-4 w-4" /> },
    { id: "mobile", name: "Applications Mobile", icon: <Smartphone className="h-4 w-4" /> },
    { id: "education", name: "Éducation & E-learning", icon: <BookOpen className="h-4 w-4" /> },
    { id: "blockchain", name: "Blockchain & Web3", icon: <Code className="h-4 w-4" /> },
    { id: "branding", name: "Branding & Design", icon: <Palette className="h-4 w-4" /> }
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 z-[-2]"></div>
      <div className="fixed inset-0 tech-grid z-[-1]"></div>
      <StarBackground />
      
      <Navbar />
      
      <main className="flex-grow pt-20 relative z-10">
        {/* Hero Section Ultra Moderne */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '2s'}}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mb-8"
              >
                <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-blue-500/30 rounded-full text-blue-300 font-medium mb-6">
                  🚀 Portfolio Innovation • 27+ Projets Présentés
                </span>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Projets qui
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Transforment
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
                  Des solutions technologiques révolutionnaires qui redéfinissent 
                  <br className="hidden md:block" />
                  l'expérience digitale et génèrent des résultats exceptionnels
                </p>

                <div className="flex flex-wrap justify-center gap-6 mb-12">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">2K+</div>
                    <div className="text-blue-400">Projets Livrés</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">50+</div>
                    <div className="text-purple-400">Secteurs d'Activité</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">20+</div>
                    <div className="text-pink-400">Pays Impactés</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Categories Filter Ultra Design */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-md border ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-blue-500 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/30'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.icon}
                  <span className="font-medium">{category.name}</span>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid Ultra Creative - Modified to 2 columns */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group relative"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <Card className="relative overflow-hidden bg-black/80 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500 h-full shadow-2xl">
                    <div className="relative h-80 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                      
                      {/* Hover Overlay */}
                      <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
                        hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                      }`}>
                        <Button 
                          size="lg"
                          className="bg-white/20 border border-white/40 backdrop-blur-md hover:bg-white/30 text-white shadow-lg"
                          onClick={handleProjectClick}
                        >
                          <Eye className="mr-2 h-5 w-5" />
                          Voir le Projet
                        </Button>
                      </div>

                      {/* Project Icon */}
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                        {project.icon}
                      </div>
                    </div>

                    <CardContent className="p-6 relative bg-black/90 backdrop-blur-md">
                      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`}></div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center p-2 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
                            <div className="text-sm font-bold text-white">{value}</div>
                            <div className="text-xs text-gray-300 capitalize">{key.replace('_', ' ')}</div>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-white/20 border border-white/30 px-2 py-1 rounded-full text-blue-200 backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-blue-300 hover:text-blue-200 p-0 hover:bg-transparent"
                          onClick={handleProjectClick}
                        >
                          Découvrir
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <ExternalLink 
                          className="h-4 w-4 text-gray-400 hover:text-white transition-colors cursor-pointer" 
                          onClick={handleProjectClick}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* CTA Section Ultra Design */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Votre Projet, Notre Innovation
                </h2>
                
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                  Transformons ensemble votre vision en solution technologique révolutionnaire
                  <br className="hidden md:block" />
                  qui marquera votre secteur d'activité
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg shadow-lg shadow-blue-500/25"
                    asChild
                  >
                    <Link to="/contact" className="flex items-center gap-2">
                      <Rocket className="h-5 w-5" />
                      Démarrer un Projet
                    </Link>
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-md hover:border-white/50"
                    asChild
                  >
                    <Link to="/services" className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Nos Services
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Project View Dialog */}
      <ProjectViewDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
    </div>
  );
};

export default Portfolio;
