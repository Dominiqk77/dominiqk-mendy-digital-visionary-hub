import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Search, BrainCircuit, Code, LineChart, Globe, Database, Layout, Rocket, Lightbulb, Palette, FileCode, Monitor, Share2, Blocks, BookOpen, Users, Phone, ShoppingCart, BadgeCheck, Zap, Briefcase, Target, BarChart3, MessageSquare, FileText, DollarSign, Award, Headphones, Video, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SpaceBackground from '../components/backgrounds/SpaceBackground';
import DataVisualization from '../components/backgrounds/DataVisualization';

// SEO metadata
const pageTitle = "Services de Consultation Tech & IA | Dominique Mendy | Expert Digital Sénégalais";
const pageDescription = "Découvrez plus de 100 services d'expertise en IA, développement web, marketing digital et e-gouvernance par Dominique Mendy, consultant digital leader en Afrique";
const keywords = "consultant IA Afrique, développement web Sénégal, marketing digital Dakar, e-gouvernance Afrique, expert tech africain, solutions d'intelligence artificielle, transformation digitale, innovation technologique";

// Services categories and their services
const allServices = {
  ai: {
    title: "Intelligence Artificielle",
    description: "Solutions IA innovantes et sur mesure pour transformer votre business",
    icon: <BrainCircuit size={30} />,
    services: [{
      icon: <BrainCircuit size={40} />,
      title: "Développement IA sur Mesure",
      description: "Création d'algorithmes et modèles d'IA entièrement personnalisés pour répondre à vos défis business spécifiques.",
      price: "À partir de 5M FCFA",
      link: "/services/ai/custom-development"
    }, {
      icon: <Users size={40} />,
      title: "Chatbots & Assistants IA",
      description: "Conception d'assistants virtuels intelligents pour améliorer votre service client et automatiser les interactions utilisateurs.",
      price: "À partir de 1.5M FCFA",
      link: "/services/ai/chatbots"
    }, {
      icon: <Database size={40} />,
      title: "Machine Learning & Prédiction",
      description: "Développement de modèles prédictifs pour anticiper les tendances du marché et optimiser vos prises de décision.",
      price: "À partir de 3M FCFA",
      link: "/services/ai/machine-learning"
    }, {
      icon: <Lightbulb size={40} />,
      title: "Intelligence Artificielle Générative",
      description: "Création de contenu automatisé (texte, image, audio) avec les dernières technologies d'IA générative.",
      price: "À partir de 2M FCFA",
      link: "/services/ai/generative"
    }, {
      icon: <Monitor size={40} />,
      title: "Vision par Ordinateur",
      description: "Implémentation de solutions de reconnaissance d'images et de vidéos pour l'automatisation de processus visuels.",
      price: "À partir de 4M FCFA",
      link: "/services/ai/computer-vision"
    }, {
      icon: <Rocket size={40} />,
      title: "Automatisation IA des Processus",
      description: "Optimisation des flux de travail grâce à l'automatisation intelligente basée sur l'apprentissage machine.",
      price: "À partir de 2.5M FCFA",
      link: "/services/ai/process-automation"
    }, {
      icon: <Target size={40} />,
      title: "IA pour Personnalisation Client",
      description: "Implémentation de systèmes de recommandation et de personnalisation basés sur le comportement utilisateur.",
      price: "À partir de 2M FCFA",
      link: "/services/ai/personalization"
    }, {
      icon: <MessageSquare size={40} />,
      title: "Traitement du Langage Naturel",
      description: "Analyse de sentiments, extraction d'informations et classification automatique de textes en langues africaines et internationales.",
      price: "À partir de 3M FCFA",
      link: "/services/ai/nlp"
    }, {
      icon: <Briefcase size={40} />,
      title: "IA pour Finance & Business",
      description: "Solutions d'analyse prédictive et de détection de fraude pour optimiser vos opérations financières.",
      price: "À partir de 4M FCFA",
      link: "/services/ai/fintech"
    }, {
      icon: <BarChart3 size={40} />,
      title: "IA pour Analyse Prédictive",
      description: "Anticipation des tendances et comportements futurs basée sur l'analyse de données historiques.",
      price: "À partir de 3.5M FCFA",
      link: "/services/ai/predictive-analytics"
    }, {
      icon: <FileText size={40} />,
      title: "Audit & Stratégie IA",
      description: "Évaluation de vos besoins en IA et élaboration d'une feuille de route d'implémentation progressive.",
      price: "À partir de 1M FCFA",
      link: "/services/ai/audit"
    }, {
      icon: <Award size={40} />,
      title: "Formation IA pour Décideurs",
      description: "Programme intensif pour comprendre les enjeux stratégiques de l'IA pour votre organisation.",
      price: "À partir de 800K FCFA",
      link: "/services/ai/executive-training"
    }]
  },
  web: {
    title: "Web & Mobile",
    description: "Développement d'applications et sites web performants et évolutifs",
    icon: <Code size={30} />,
    services: [{
      icon: <Code size={40} />,
      title: "Développement Web Full Stack",
      description: "Création de sites et applications web complexes avec les technologies front-end et back-end les plus performantes.",
      price: "À partir de 2.5M FCFA",
      link: "/services/web/full-stack"
    }, {
      icon: <Phone size={40} />,
      title: "Applications Mobiles Native/Hybride",
      description: "Développement d'applications iOS et Android performantes, intuitives et parfaitement adaptées à vos besoins.",
      price: "À partir de 3M FCFA",
      link: "/services/web/mobile-apps"
    }, {
      icon: <ShoppingCart size={40} />,
      title: "E-Commerce & Marketplaces",
      description: "Création de boutiques en ligne et places de marché optimisées pour la conversion et l'expérience utilisateur.",
      price: "À partir de 2M FCFA",
      link: "/services/web/ecommerce"
    }, {
      icon: <FileCode size={40} />,
      title: "SaaS & Applications Cloud",
      description: "Conception d'applications métier en mode SaaS pour transformer votre idée en produit évolutif.",
      price: "À partir de 4M FCFA",
      link: "/services/web/saas"
    }, {
      icon: <Blocks size={40} />,
      title: "Développement No-Code/Low-Code",
      description: "Solutions rapides et économiques avec des plateformes comme Webflow, Bubble ou Adalo pour accélérer votre time-to-market.",
      price: "À partir de 800K FCFA",
      link: "/services/web/nocode"
    }, {
      icon: <BadgeCheck size={40} />,
      title: "Audits Techniques & Optimisation",
      description: "Analyse approfondie de vos plateformes existantes pour améliorer les performances et la sécurité.",
      price: "À partir de 500K FCFA",
      link: "/services/web/audit"
    }, {
      icon: <Globe size={40} />,
      title: "Sites Web Institutionnels Premium",
      description: "Conception de sites corporate haut de gamme reflétant l'identité et les valeurs de votre marque.",
      price: "À partir de 1.5M FCFA",
      link: "/services/web/corporate"
    }, {
      icon: <Palette size={40} />,
      title: "UI/UX Design & Prototypage",
      description: "Création d'interfaces utilisateur intuitives et esthétiques avec une approche centrée sur l'expérience utilisateur.",
      price: "À partir de 1M FCFA",
      link: "/services/web/ui-ux"
    }, {
      icon: <DollarSign size={40} />,
      title: "Fintech & Solutions de Paiement",
      description: "Implémentation de systèmes de paiement sécurisés et adaptés au contexte africain (Mobile Money, cartes, etc.).",
      price: "À partir de 2.5M FCFA",
      link: "/services/web/fintech"
    }, {
      icon: <Headphones size={40} />,
      title: "PWA & Applications Web Progressives",
      description: "Développement d'applications web progressives offrant une expérience proche des applications natives.",
      price: "À partir de 1.8M FCFA",
      link: "/services/web/pwa"
    }, {
      icon: <Layout size={40} />,
      title: "Refonte & Migration Technique",
      description: "Modernisation de vos plateformes existantes vers des architectures plus performantes et sécurisées.",
      price: "À partir de 2M FCFA",
      link: "/services/web/refactoring"
    }, {
      icon: <PenTool size={40} />,
      title: "Design System & Charte Graphique",
      description: "Création de systèmes de design cohérents pour unifier l'expérience utilisateur sur l'ensemble de vos plateformes.",
      price: "À partir de 1.2M FCFA",
      link: "/services/web/design-system"
    }]
  },
  marketing: {
    title: "Marketing Digital",
    description: "Stratégies marketing innovantes pour booster votre croissance",
    icon: <LineChart size={30} />,
    services: [{
      icon: <LineChart size={40} />,
      title: "SEO/SEA/SMO Avancé",
      description: "Optimisation multi-canaux pour améliorer votre visibilité sur les moteurs de recherche et réseaux sociaux.",
      price: "À partir de 800K FCFA/mois",
      link: "/services/marketing/seo"
    }, {
      icon: <Rocket size={40} />,
      title: "Growth Hacking & Acquisition",
      description: "Stratégies innovantes pour accélérer votre croissance avec un budget optimisé et des résultats rapides.",
      price: "À partir de 1.2M FCFA/mois",
      link: "/services/marketing/growth"
    }, {
      icon: <Share2 size={40} />,
      title: "Social Media Marketing",
      description: "Gestion professionnelle de vos réseaux sociaux et campagnes publicitaires pour maximiser votre engagement.",
      price: "À partir de 600K FCFA/mois",
      link: "/services/marketing/social"
    }, {
      icon: <Zap size={40} />,
      title: "Tunnels de Vente Optimisés",
      description: "Création de parcours d'achat stratégiques pour convertir vos visiteurs en clients fidèles.",
      price: "À partir de 1M FCFA",
      link: "/services/marketing/funnels"
    }, {
      icon: <Layout size={40} />,
      title: "Content Marketing & Storytelling",
      description: "Production de contenu stratégique et narratif pour engager votre audience et renforcer votre autorité.",
      price: "À partir de 700K FCFA/mois",
      link: "/services/marketing/content"
    }, {
      icon: <BookOpen size={40} />,
      title: "Formation & Coaching Marketing",
      description: "Programmes de formation personnalisés pour renforcer les compétences digitales de votre équipe.",
      price: "À partir de 500K FCFA/session",
      link: "/services/marketing/training"
    }, {
      icon: <PenTool size={40} />,
      title: "Personal Branding Executive",
      description: "Développement de votre image de marque personnelle pour vous positionner comme leader d'opinion dans votre secteur.",
      price: "À partir de 1.5M FCFA",
      link: "/services/marketing/personal-branding"
    }, {
      icon: <Video size={40} />,
      title: "Marketing Vidéo & Motion Design",
      description: "Création de contenus vidéo engageants pour renforcer votre présence digitale et augmenter vos conversions.",
      price: "À partir de 800K FCFA/projet",
      link: "/services/marketing/video"
    }, {
      icon: <DollarSign size={40} />,
      title: "Publicité Digitale (Google, Meta, TikTok)",
      description: "Gestion optimisée de vos campagnes publicitaires sur toutes les plateformes majeures avec un ROAS maximisé.",
      price: "À partir de 15% du budget média",
      link: "/services/marketing/ads"
    }, {
      icon: <BarChart3 size={40} />,
      title: "Analytics & Attribution Marketing",
      description: "Mise en place de systèmes de mesure avancés pour optimiser votre ROI marketing en temps réel.",
      price: "À partir de 900K FCFA",
      link: "/services/marketing/analytics"
    }, {
      icon: <Target size={40} />,
      title: "E-mail Marketing Automation",
      description: "Création de séquences d'emails personnalisées et automatisées pour nurturing et conversion de vos prospects.",
      price: "À partir de 600K FCFA",
      link: "/services/marketing/email"
    }, {
      icon: <MessageSquare size={40} />,
      title: "Influence & Relations Publiques Digitales",
      description: "Stratégies de collaboration avec des influenceurs et médias pour amplifier votre visibilité.",
      price: "À partir de 1M FCFA/campagne",
      link: "/services/marketing/influence"
    }]
  },
  consulting: {
    title: "Consulting Stratégique",
    description: "Accompagnement expert pour votre transformation digitale",
    icon: <Briefcase size={30} />,
    services: [{
      icon: <Globe size={40} />,
      title: "E-Gouvernance & Services Publics",
      description: "Conseils et implémentation de solutions numériques pour moderniser les services gouvernementaux africains.",
      price: "À partir de 5M FCFA",
      link: "/services/consulting/e-governance"
    }, {
      icon: <Palette size={40} />,
      title: "Transformation Digitale",
      description: "Accompagnement stratégique pour digitaliser vos processus et adapter votre entreprise aux enjeux du numérique.",
      price: "À partir de 3M FCFA",
      link: "/services/consulting/digital-transformation"
    }, {
      icon: <Lightbulb size={40} />,
      title: "Innovation & R&D Numérique",
      description: "Exploration des technologies émergentes et développement de prototypes innovants pour votre entreprise.",
      price: "À partir de 2.5M FCFA",
      link: "/services/consulting/innovation"
    }, {
      icon: <Users size={40} />,
      title: "Formation Executive Digital",
      description: "Programmes sur mesure pour les dirigeants africains souhaitant maîtriser les enjeux de la révolution numérique.",
      price: "À partir de 1.5M FCFA/session",
      link: "/services/consulting/executive-training"
    }, {
      icon: <Layout size={40} />,
      title: "Stratégie Data & IA",
      description: "Élaboration de feuilles de route pour valoriser vos données et implémenter l'IA dans votre organisation.",
      price: "À partir de 3M FCFA",
      link: "/services/consulting/data-strategy"
    }, {
      icon: <Blocks size={40} />,
      title: "Écosystème Tech Africain",
      description: "Conseils pour naviguer et tirer parti de l'écosystème technologique africain en pleine expansion.",
      price: "À partir de 1.8M FCFA",
      link: "/services/consulting/african-tech"
    }, {
      icon: <Target size={40} />,
      title: "Audit Digital & Technologique",
      description: "Analyse approfondie de votre maturité digitale et recommandations stratégiques personnalisées.",
      price: "À partir de 2M FCFA",
      link: "/services/consulting/digital-audit"
    }, {
      icon: <Award size={40} />,
      title: "Mentorat & Coaching Numérique",
      description: "Accompagnement personnalisé des leaders pour développer une vision et des compétences digitales.",
      price: "À partir de 1M FCFA/mois",
      link: "/services/consulting/mentoring"
    }, {
      icon: <FileText size={40} />,
      title: "Stratégie & Gouvernance Numérique",
      description: "Définition et mise en œuvre de politiques et processus de gouvernance numérique adaptés.",
      price: "À partir de 3.5M FCFA",
      link: "/services/consulting/governance"
    }, {
      icon: <BookOpen size={40} />,
      title: "Recherche & Publications Tech",
      description: "Études et publications spécialisées sur les tendances technologiques et leur impact en Afrique.",
      price: "À partir de 2.5M FCFA",
      link: "/services/consulting/research"
    }, {
      icon: <Rocket size={40} />,
      title: "Accompagnement Startups Tech",
      description: "Support stratégique pour les startups africaines: business model, levée de fonds, scaling.",
      price: "À partir de 1.2M FCFA",
      link: "/services/consulting/startup-advisory"
    }, {
      icon: <Headphones size={40} />,
      title: "Conférences & Keynotes Tech",
      description: "Interventions inspirantes lors d'événements sur l'innovation, l'IA et la transformation digitale.",
      price: "À partir de 500K FCFA/intervention",
      link: "/services/consulting/speaking"
    }]
  }
};

const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof allServices>("ai");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter services based on search term
  const filteredServices = searchTerm ? Object.values(allServices).flatMap(category => category.services.filter(service => service.title.toLowerCase().includes(searchTerm.toLowerCase()) || service.description.toLowerCase().includes(searchTerm.toLowerCase()))) : [];

  // Animation variants for motion components
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

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

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Global space background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SpaceBackground />
      </div>
      
      <Navbar />
      
      <main className="flex-grow relative z-10">
        {/* Hero Section with data visualization */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900/90 to-black/90 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30">
            <DataVisualization />
          </div>
          
          {/* Tech grid overlay */}
          <div className="absolute inset-0 tech-grid z-0 opacity-20"></div>
          
          {/* Glowing orbs */}
          <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-portfolio-purple opacity-10 rounded-full blur-[100px] planet-glow"></div>
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-portfolio-blue opacity-10 rounded-full blur-[100px] planet-glow"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Solutions Numériques <span className="text-gradient">Innovantes</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-300 mb-10"
              >
                Plus de 100 services d'expertise pour propulser votre transformation digitale et votre croissance en Afrique et à l'international
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative max-w-xl mx-auto mb-10"
              >
                <Input 
                  type="text" 
                  placeholder="Rechercher un service..." 
                  className="pl-12 bg-black/40 backdrop-blur-sm border-gray-700 text-white placeholder:text-gray-400 pr-4 py-6 text-lg" 
                  value={searchTerm} 
                  onChange={e => setSearchTerm(e.target.value)} 
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </motion.div>
              
              {searchTerm && (
                <div className="max-w-xl mx-auto bg-black/60 backdrop-blur-md rounded-lg border border-gray-800 mb-8 max-h-80 overflow-y-auto">
                  {filteredServices.length > 0 ? (
                    <ul className="divide-y divide-gray-800">
                      {filteredServices.map((service, index) => (
                        <motion.li 
                          key={index} 
                          className="p-4 hover:bg-gray-800/40"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <Link to={service.link} className="flex items-center gap-3">
                            <div className="text-primary">{service.icon}</div>
                            <div>
                              <h3 className="font-medium">{service.title}</h3>
                              <p className="text-sm text-gray-400">{service.price}</p>
                            </div>
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  ) : (
                    <div className="p-4 text-center">
                      <p>Aucun service ne correspond à votre recherche</p>
                    </div>
                  )}
                </div>
              )}
              
              <motion.div 
                className="flex flex-wrap justify-center gap-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {Object.entries(allServices).map(([key, category], index) => (
                  <motion.div key={key} variants={itemVariants}>
                    <Button 
                      variant={selectedCategory === key ? "default" : "outline"} 
                      className={selectedCategory === key ? "bg-primary text-white font-medium" : "text-white border-gray-600 hover:bg-gray-800/40 font-medium"} 
                      onClick={() => setSelectedCategory(key as keyof typeof allServices)}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.title}
                    </Button>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 data-grid z-0 opacity-10"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                {allServices[selectedCategory].title}
              </motion.h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground"
              >
                {allServices[selectedCategory].description}
              </motion.p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {allServices[selectedCategory].services.map((service, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                >
                  <Card className="service-card border-gradient border-gradient-cosmic h-full flex flex-col backdrop-blur-sm bg-white/5 hover:bg-white/10">
                    <CardHeader className="pb-0">
                      <div className="text-primary technology-icon">
                        {service.icon}
                      </div>
                      <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4 flex-grow">
                      <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                      <p className="text-sm font-medium text-gradient-cosmic">{service.price}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-primary group w-full" asChild>
                        <Link to={service.link} className="flex items-center justify-between w-full">
                          <span className="text-foreground font-medium">En savoir plus</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gray-50/80 backdrop-blur-sm relative">
          <div className="absolute inset-0 star-bg z-0 opacity-30"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto bg-gradient-to-r from-gray-900 to-black rounded-2xl overflow-hidden border-gradient border-gradient-glow">
              <div className="p-12 md:p-16 relative">
                {/* Background effects */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary opacity-20 blur-3xl rounded-full"></div>
                
                {/* Senegal flag stripe with very low opacity */}
                <div className="absolute inset-0 opacity-5 senegal-flag-gradient"></div>
                
                {/* Floating data points */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(10)].map((_, i) => (
                    <div 
                      key={i}
                      className="data-line" 
                      style={{
                        width: `${Math.random() * 30 + 20}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.5}s`
                      }}
                    ></div>
                  ))}
                </div>
                
                <div className="relative z-10 text-center">
                  <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-6 text-white"
                  >
                    Besoin d'un service personnalisé ?
                  </motion.h2>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto"
                  >
                    Chaque entreprise et chaque projet est unique. Contactez-moi pour discuter de vos besoins spécifiques et obtenir une proposition adaptée à votre contexte.
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity font-medium text-white" asChild>
                      <Link to="/contact" className="flex items-center gap-2">
                        <span>Demander un devis gratuit</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 tech-bg-gradient z-0 opacity-70"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <motion.h2 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  Questions Fréquentes
                </motion.h2>
                <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
              </div>
              
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Keep existing FAQ items, but wrapped in motion.div */}
                <motion.div variants={itemVariants}>
                  <Card className="border-gradient border-gradient-light backdrop-blur-sm bg-white/80">
                    <CardHeader>
                      <CardTitle className="text-xl">Comment se déroule une collaboration ?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Notre collaboration débute par une phase de découverte pour comprendre vos besoins, suivie d'une proposition détaillée. Après validation, nous entrons dans les phases de conception, développement et déploiement avec des points de validation réguliers. Un suivi post-déploiement est assuré pour garantir votre satisfaction.</p>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Card className="border-gradient border-gradient-light backdrop-blur-sm bg-white/80">
                    <CardHeader>
                      <CardTitle className="text-xl">Quels sont les délais de réalisation ?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Les délais varient selon la complexité du projet. Un site vitrine peut être livré en 2-4 semaines, une application plus complexe en 2-6 mois. Chaque projet bénéficie d'un calendrier détaillé avec des jalons clairement définis pour assurer le respect des échéances.</p>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Card className="border-gradient border-gradient-light backdrop-blur-sm bg-white/80">
                    <CardHeader>
                      <CardTitle className="text-xl">Proposez-vous des services de maintenance ?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Oui, je propose différentes formules de maintenance adaptées à vos besoins : maintenance technique (mises à jour, sécurité), maintenance évolutive (ajout de fonctionnalités) et support utilisateur. Ces services garantissent la pérennité et l'évolution de vos solutions numériques.</p>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Card className="border-gradient border-gradient-light backdrop-blur-sm bg-white/80">
                    <CardHeader>
                      <CardTitle className="text-xl">Travaillez-vous avec des clients internationaux ?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Absolument. Je collabore avec des clients dans toute l'Afrique et à l'international. Les réunions peuvent se tenir à distance via visioconférence, et je me déplace régulièrement pour des workshops ou des formations en présentiel quand nécessaire.</p>
                    </CardContent>
                  </Card>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <Card className="border-gradient border-gradient-light backdrop-blur-sm bg-white/80">
                    <CardHeader>
                      <CardTitle className="text-xl">Comment sont structurés vos tarifs ?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Mes tarifs sont structurés en fonction de la complexité du projet, des technologies utilisées et du niveau d'expertise requis. Je propose des forfaits projet, des contrats à temps partiel ou des formules d'abonnement mensuel selon vos besoins. Chaque proposition commerciale détaille précisément le périmètre et les livrables.</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="mt-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Button variant="outline" className="font-medium" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>Une autre question ? Contactez-moi</span>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
