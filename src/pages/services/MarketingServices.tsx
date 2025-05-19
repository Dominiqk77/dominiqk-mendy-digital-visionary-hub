
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, LineChart, Share2, Rocket, Zap, Layout, BookOpen, Video, Target, BarChart3, MessageSquare, DollarSign, BadgeCheck, Briefcase, PenTool, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import SpaceBackground from '@/components/space/SpaceBackground';

// Marketing space theme animation
const MarketingSpaceBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dynamic chart lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          d="M0,200 C150,100 300,300 450,150 S600,200 800,100" 
          stroke="rgba(155, 135, 245, 0.15)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop" }}
        />
        <motion.path 
          d="M0,250 C200,280 350,180 550,250 S750,220 1000,300" 
          stroke="rgba(14, 165, 233, 0.15)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "loop", delay: 0.5 }}
        />
      </svg>
      
      {/* Floating analytics elements */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`analytics-${i}`}
          className="absolute rounded-lg bg-black/40 backdrop-blur-sm border border-portfolio-purple/20 shadow-lg p-3"
          style={{
            width: `${120 + (i * 30)}px`,
            height: `${80 + (i * 10)}px`,
            left: `${10 + (i * 18)}%`,
            top: `${15 + (i * 12)}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            y: [0, -10, 0],
            rotate: [-1, 1, -1]
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: i * 0.7
          }}
        >
          <div className="w-full h-3 bg-gradient-to-r from-portfolio-purple/30 to-portfolio-blue/30 rounded-full mb-2"></div>
          <div className="w-2/3 h-2 bg-white/20 rounded-full mb-1.5"></div>
          <div className="w-1/2 h-2 bg-white/15 rounded-full"></div>
          
          {/* Mini chart */}
          <svg className="absolute bottom-2 right-2 w-12 h-8" viewBox="0 0 50 25">
            <motion.path 
              d="M0,20 L10,15 L20,18 L30,10 L40,5 L50,12" 
              stroke={i % 2 === 0 ? "rgba(155, 135, 245, 0.6)" : "rgba(14, 165, 233, 0.6)"}
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.3 }}
            />
          </svg>
        </motion.div>
      ))}
      
      {/* Social media floating icons */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`icon-${i}`}
          className="absolute flex items-center justify-center"
          style={{
            width: '40px',
            height: '40px',
            right: `${8 + (i * 10)}%`,
            top: `${10 + (i * 10)}%`,
            opacity: 0.2,
          }}
          initial={{ scale: 0 }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: i * 0.5
          }}
        >
          {i % 4 === 0 ? (
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" className="text-portfolio-blue"></path>
            </svg>
          ) : i % 4 === 1 ? (
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" className="text-portfolio-blue"></path>
            </svg>
          ) : i % 4 === 2 ? (
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" className="text-portfolio-pink"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" fill="none">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" className="text-portfolio-purple"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          )}
        </motion.div>
      ))}
      
      {/* Data streams */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute w-0.5 bg-gradient-to-b from-transparent via-portfolio-purple/30 to-transparent"
          style={{
            height: `${Math.random() * 200 + 100}px`,
            left: `${Math.random() * 90 + 5}%`,
            opacity: 0,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            top: ["-20%", "120%"],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Nebula glows */}
      <div className="nebula-glow-purple w-96 h-96 -top-20 -left-20"></div>
      <div className="nebula-glow-blue w-96 h-96 bottom-0 right-0"></div>
      
      {/* Stars */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 1 + Math.random() * 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

const MarketingServices = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Marketing Digital Premium | Dominique Mendy | Expert Marketing Digital International';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Services de marketing digital par Dominique Mendy: SEO, social media, tunnels de vente, publicité et growth hacking pour entreprises africaines et internationales. Expert reconnu en France, UK, USA et Afrique.'
      );
    }
    
    // Set meta keywords for SEO
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 
        'marketing digital Sénégal, SEO Afrique, social media Dakar, growth hacking, publicité digitale, content marketing, stratégie digitale, tunnels de vente, expert marketing France, consultant digital UK, Dominique Mendy'
      );
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Marketing service categories
  const marketingCategories = [
    { id: "all", name: "Tous les services" },
    { id: "acquisition", name: "Acquisition" },
    { id: "content", name: "Contenu" },
    { id: "social", name: "Social Media" },
    { id: "analytics", name: "Analytics & Data" }
  ];

  // Comprehensive marketing services with updated value propositions instead of prices
  const marketingServices = [
    {
      icon: <LineChart size={40} />,
      title: "SEO/SEA/SMO Avancé",
      description: "Optimisation multi-canaux pour améliorer votre visibilité sur les moteurs de recherche et réseaux sociaux, avec une stratégie adaptée au contexte africain et international.",
      features: ["Audit SEO complet et technique", "Optimisation on-page et off-page", "Stratégie de contenu SEO", "Campagnes Google Ads optimisées"],
      valueProposition: "ROI mesurable et croissance organique durable",
      color: "from-indigo-600 to-blue-500",
      category: "acquisition",
      bgColor: "from-indigo-600/70 to-blue-500/60",
      iconBg: "bg-indigo-600"
    },
    {
      icon: <Rocket size={40} />,
      title: "Growth Hacking & Acquisition",
      description: "Stratégies innovantes pour accélérer votre croissance avec un budget optimisé et des résultats rapides. Techniques d'acquisition disruptives adaptées à votre marché.",
      features: ["Tests A/B multicanaux", "Optimisation des conversions", "Automatisation marketing", "Stratégies de viralité"],
      valueProposition: "Croissance accélérée et optimisation des coûts d'acquisition",
      color: "from-purple-600 to-pink-500",
      category: "acquisition",
      bgColor: "from-purple-600/70 to-pink-500/60", 
      iconBg: "bg-purple-600"
    },
    {
      icon: <Share2 size={40} />,
      title: "Social Media Marketing",
      description: "Gestion professionnelle de vos réseaux sociaux et campagnes publicitaires pour maximiser votre engagement et toucher vos audiences cibles, en français et en anglais.",
      features: ["Création de contenus engageants", "Community management multilingue", "Campagnes Facebook & Instagram Ads", "Stratégie organique et payante"],
      valueProposition: "Communauté engagée et image de marque renforcée",
      color: "from-blue-500 to-cyan-400",
      category: "social",
      bgColor: "from-blue-500/70 to-cyan-400/60",
      iconBg: "bg-blue-500"
    },
    {
      icon: <Zap size={40} />,
      title: "Tunnels de Vente Optimisés",
      description: "Création de parcours d'achat stratégiques pour convertir vos visiteurs en clients fidèles. Optimisation continue basée sur les données pour améliorer vos taux de conversion.",
      features: ["Architecture de conversion", "Pages de vente optimisées", "Emailings de nurturing", "Systèmes de relance automatisés"],
      valueProposition: "Taux de conversion doublés et revenus multipliés",
      color: "from-green-500 to-emerald-400",
      category: "acquisition",
      bgColor: "from-green-500/70 to-emerald-400/60",
      iconBg: "bg-green-500"
    },
    {
      icon: <Layout size={40} />,
      title: "Content Marketing & Storytelling",
      description: "Production de contenu stratégique et narratif pour engager votre audience et renforcer votre autorité dans votre secteur, en français, anglais et langues locales.",
      features: ["Stratégie éditoriale multicanale", "Création de contenus premium", "Calendrier éditorial", "Distribution et promotion"],
      valueProposition: "Visibilité accrue et autorité thématique établie",
      color: "from-amber-500 to-yellow-400",
      category: "content",
      bgColor: "from-amber-500/70 to-yellow-400/60",
      iconBg: "bg-amber-500"
    },
    {
      icon: <BookOpen size={40} />,
      title: "Formation & Coaching Marketing",
      description: "Programmes de formation personnalisés pour renforcer les compétences digitales de votre équipe et vous rendre autonome dans votre stratégie marketing.",
      features: ["Ateliers pratiques", "Coaching personnalisé", "Supports sur mesure", "Suivi post-formation"],
      valueProposition: "Équipe autonome et compétences internes développées",
      color: "from-teal-500 to-cyan-400",
      category: "content",
      bgColor: "from-teal-500/70 to-cyan-400/60",
      iconBg: "bg-teal-500"
    },
    {
      icon: <PenTool size={40} />,
      title: "Personal Branding Executive",
      description: "Développement de votre image de marque personnelle pour vous positionner comme leader d'opinion dans votre secteur et attirer naturellement les opportunités.",
      features: ["Audit d'image", "Stratégie de positionnement", "Création de contenu de leadership", "Placement média"],
      valueProposition: "Notoriété établie et opportunités business amplifiées",
      color: "from-fuchsia-600 to-purple-500",
      category: "content",
      bgColor: "from-fuchsia-600/70 to-purple-500/60", 
      iconBg: "bg-fuchsia-600"
    },
    {
      icon: <Video size={40} />,
      title: "Marketing Vidéo & Motion Design",
      description: "Création de contenus vidéo engageants pour renforcer votre présence digitale et augmenter vos conversions. Formats adaptés à chaque plateforme.",
      features: ["Vidéos promotionnelles", "Motion design", "Animation 2D/3D", "Editing professionnel"],
      valueProposition: "Engagement x3 et mémorisation de marque renforcée",
      color: "from-red-500 to-rose-400",
      category: "content",
      bgColor: "from-red-500/70 to-rose-400/60",
      iconBg: "bg-red-500"
    },
    {
      icon: <DollarSign size={40} />,
      title: "Publicité Digitale (Google, Meta, TikTok)",
      description: "Gestion optimisée de vos campagnes publicitaires sur toutes les plateformes majeures avec un ROAS maximisé et des audiences parfaitement ciblées.",
      features: ["Stratégie multi-plateforme", "Ciblage précis des audiences", "Optimisation continue", "Rapports de performance détaillés"],
      valueProposition: "ROAS optimisé et budget publicitaire maximisé",
      color: "from-blue-600 to-indigo-500",
      category: "acquisition",
      bgColor: "from-blue-600/70 to-indigo-500/60",
      iconBg: "bg-blue-600"
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Analytics & Attribution Marketing",
      description: "Mise en place de systèmes de mesure avancés pour optimiser votre ROI marketing en temps réel et prendre des décisions basées sur les données.",
      features: ["Implementation Google Analytics 4", "Dashboards personnalisés", "Attribution multi-touch", "DataStudio / Looker"],
      valueProposition: "Décisions data-driven et optimisation continue du ROI",
      color: "from-violet-600 to-purple-500",
      category: "analytics",
      bgColor: "from-violet-600/70 to-purple-500/60",
      iconBg: "bg-violet-600"
    },
    {
      icon: <Target size={40} />,
      title: "E-mail Marketing Automation",
      description: "Création de séquences d'emails personnalisées et automatisées pour nurturing et conversion de vos prospects, avec segmentation avancée.",
      features: ["Architecture de séquences", "Copywriting persuasif", "A/B testing", "Analyse de performance"],
      valueProposition: "Revenus récurrents et relation client renforcée",
      color: "from-orange-500 to-amber-400",
      category: "acquisition",
      bgColor: "from-orange-500/70 to-amber-400/60",
      iconBg: "bg-orange-500"
    },
    {
      icon: <MessageSquare size={40} />,
      title: "Influence & Relations Publiques Digitales",
      description: "Stratégies de collaboration avec des influenceurs et médias pour amplifier votre visibilité et bâtir votre crédibilité en Afrique et à l'international.",
      features: ["Identification des influenceurs", "Conception de campagnes", "Relations presse digitale", "Mesure d'impact"],
      valueProposition: "Portée démultipliée et crédibilité instantanée",
      color: "from-pink-500 to-rose-400",
      category: "social",
      bgColor: "from-pink-500/70 to-rose-400/60",
      iconBg: "bg-pink-500"
    }
  ];

  // Case studies
  const caseStudies = [
    {
      title: "Campagne Acquisition E-commerce",
      client: "Marketplace Panafricaine",
      results: "+127% de trafic qualifié, +85% de taux de conversion",
      description: "Stratégie multi-canal combinant SEO, publicité sociale et marketing de contenu pour accélérer la croissance d'une marketplace opérant dans 5 pays africains.",
      image: "/case-studies/ecommerce-campaign.jpg"
    },
    {
      title: "Lancement Produit Digital",
      client: "Fintech Franco-Sénégalaise",
      results: "15K+ inscriptions en 30 jours, CPA réduit de 40%",
      description: "Campagne de lancement intégrée pour une nouvelle application fintech, avec stratégie d'influence, marketing de contenu et acquisition payante optimisée.",
      image: "/case-studies/fintech-launch.jpg"
    },
    {
      title: "Stratégie Social Media B2B",
      client: "Cabinet de Conseil International",
      results: "+210% d'engagement, +15 leads qualifiés/mois",
      description: "Refonte complète de la stratégie social media d'un cabinet de conseil, avec production de contenu de thought leadership et campagnes LinkedIn ciblées.",
      image: "/case-studies/b2b-social.jpg"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col relative bg-portfolio-space">
      <Navbar />
      
      {/* Custom Space Background with Marketing elements */}
      <MarketingSpaceBackground />
      
      <main className="flex-grow relative z-10">
        {/* Hero Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center mb-12"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white relative">
                  Stratégies Marketing{" "}
                  <span className="bg-gradient-to-r from-portfolio-purple via-portfolio-blue to-portfolio-neon bg-clip-text text-transparent shadow-[0_0_25px_rgba(155,135,245,0.3)] animate-gradient-text">
                    Performantes
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Boost de votre croissance grâce à des stratégies marketing digitales innovantes et data-driven pour captiver vos audiences en Afrique et à l'international
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue hover:opacity-90 shadow-[0_0_25px_rgba(155,135,245,0.3)] text-white" asChild>
                    <Link to="/contact">
                      <Rocket className="mr-2 h-5 w-5" /> Booster votre croissance
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white backdrop-blur-sm" asChild>
                    <Link to="/portfolio">
                      Voir nos case studies
                    </Link>
                  </Button>
                </div>
              </motion.div>
              
              {/* Key Metrics Animation */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                {[
                  { value: "38%", label: "Augmentation moyenne du trafic web", color: "from-portfolio-blue/20 to-portfolio-blue/10" },
                  { value: "157%", label: "Hausse moyenne du ROI publicitaire", color: "from-portfolio-purple/20 to-portfolio-purple/10" },
                  { value: "+5.2x", label: "Amplification de votre audience sociale", color: "from-portfolio-pink/20 to-portfolio-pink/10" }
                ].map((metric, idx) => (
                  <motion.div
                    key={idx}
                    className={`glass-space bg-gradient-to-br ${metric.color} p-6 flex flex-col items-center cosmic-hover`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + (idx * 0.2) }}
                  >
                    <motion.div 
                      className="text-4xl font-bold mb-2 text-white glow-text"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    >
                      {metric.value}
                    </motion.div>
                    <div className="text-center text-gray-300">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Consulting Offer - NEW HIGHLIGHTED SECTION */}
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <motion.div 
                className="relative overflow-hidden rounded-2xl border border-portfolio-purple/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple/30 via-black/80 to-portfolio-blue/30 backdrop-blur-xl"></div>
                <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-portfolio-purple/20 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-portfolio-blue/20 blur-3xl"></div>
                
                {/* Content */}
                <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-portfolio-purple to-portfolio-blue flex items-center justify-center shadow-[0_0_25px_rgba(155,135,245,0.5)]">
                    <div className="text-white text-center">
                      <div className="text-5xl md:text-6xl font-bold">30</div>
                      <div className="text-sm md:text-base font-medium">minutes</div>
                      <div className="text-xs md:text-sm mt-1">gratuites</div>
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white glow-text">
                      Consultation Stratégique <span className="text-portfolio-purple">Personnalisée</span>
                    </h2>
                    <p className="text-gray-300 mb-6 md:text-lg">
                      Bénéficiez d'une consultation stratégique de <span className="font-bold text-white">30 minutes gratuites</span> avec un expert marketing international. Analysez vos défis actuels, identifiez des opportunités cachées, et repartez avec des recommandations actionnables pour transformer votre présence digitale.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-2 mb-6">
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                        <div className="h-2 w-2 rounded-full bg-portfolio-purple"></div>
                        <span className="text-sm text-white">Analyse de votre situation actuelle</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                        <div className="h-2 w-2 rounded-full bg-portfolio-blue"></div>
                        <span className="text-sm text-white">Recommandations stratégiques</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                        <div className="h-2 w-2 rounded-full bg-portfolio-cyan"></div>
                        <span className="text-sm text-white">Solutions adaptées à votre budget</span>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-gray-400 italic mb-6">
                      Au-delà des 30 minutes gratuites, nos consultations sont facturées 150€/heure. Nos plans d'accompagnement personnalisés sont établis sur mesure selon vos objectifs et votre budget.
                    </p>
                    <Button size="lg" className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue hover:opacity-90 shadow-[0_0_25px_rgba(155,135,245,0.3)] text-white" asChild>
                      <Link to="/contact">
                        Réserver ma consultation gratuite <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Services Tabs Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white glow-text">Nos Services Marketing Digital</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-portfolio-purple to-portfolio-blue mx-auto mb-6"></div>
              <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
                Des stratégies marketing intégrées pour assurer une croissance durable et mesurable de votre business, adaptées aux réalités africaines et standards internationaux
              </p>
              
              <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-4xl mx-auto">
                <TabsList className="w-full flex flex-wrap justify-center bg-black/40 backdrop-blur-md border border-white/10 p-1 mb-10">
                  {marketingCategories.map(cat => (
                    <TabsTrigger key={cat.id} value={cat.id} className="flex-grow data-[state=active]:bg-white/10 data-[state=active]:text-white rounded-md text-gray-300">
                      {cat.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {marketingCategories.map(category => (
                  <TabsContent key={category.id} value={category.id} className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {marketingServices
                        .filter(service => category.id === 'all' || service.category === category.id)
                        .map((service, idx) => (
                          <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                          >
                            <Card className="h-full overflow-hidden rounded-xl border-0 transition-all duration-300">
                              {/* Card with proper colored background */}
                              <div className={`h-full flex flex-col bg-gradient-to-br ${service.bgColor} backdrop-blur-xl`}>
                                
                                <CardHeader className="relative border-b border-white/10">
                                  <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-lg ${service.iconBg} bg-opacity-80 text-white shadow-lg`}>
                                      {service.icon}
                                    </div>
                                    <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                                  </div>
                                </CardHeader>
                                
                                <CardContent className="flex-grow pt-6 text-white">
                                  <p className="text-gray-100 mb-4">{service.description}</p>
                                  <ul className="space-y-2 mb-6">
                                    {service.features.map((feature, i) => (
                                      <li key={i} className="flex items-start gap-2">
                                        <div className="text-white mt-1 bg-white/20 rounded-full p-0.5">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 6L9 17l-5-5"></path>
                                          </svg>
                                        </div>
                                        <span className="text-sm text-white">{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                  
                                  {/* Value proposition badge */}
                                  <div className={`bg-black/40 border border-white/20 text-white px-4 py-2 rounded-md text-sm font-medium inline-flex items-center gap-2 mb-4 shadow-lg backdrop-blur-sm`}>
                                    <BadgeCheck className="inline-block h-4 w-4" /> 
                                    {service.valueProposition}
                                  </div>
                                </CardContent>
                                
                                <CardFooter className="border-t border-white/10 pt-4">
                                  <Button variant="ghost" className="w-full justify-between text-white hover:bg-black/20 group" asChild>
                                    <Link to="/contact">
                                      <span>En savoir plus</span>
                                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                  </Button>
                                </CardFooter>
                              </div>
                            </Card>
                          </motion.div>
                        ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* Our Approach Section */}
        <section className="py-20 relative z-10 bg-black/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white glow-text">Notre Approche Data-Driven</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-portfolio-purple to-portfolio-blue mx-auto mb-6"></div>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Une méthodologie basée sur l'analyse de données et l'optimisation continue pour maximiser votre retour sur investissement
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12">
                {[
                  {
                    icon: <BarChart3 size={36} />,
                    title: "Analyse Approfondie",
                    description: "Audit complet de votre présence digitale, analyse de votre audience et de votre marché, benchmark concurrentiel pour établir une base solide.",
                    color: "portfolio-blue"
                  },
                  {
                    icon: <Target size={36} />,
                    title: "Stratégie Sur Mesure",
                    description: "Élaboration d'une stratégie omnicanale alignée avec vos objectifs business, votre budget et votre contexte marché spécifique.",
                    color: "portfolio-purple"
                  },
                  {
                    icon: <Rocket size={36} />,
                    title: "Exécution Optimisée",
                    description: "Déploiement tactique de vos campagnes avec une approche test & learn, optimisation continue basée sur les premiers résultats.",
                    color: "portfolio-pink"
                  },
                  {
                    icon: <LineChart size={36} />,
                    title: "Mesure & Ajustement",
                    description: "Reporting transparent et régulier, analyse de performance, ajustements stratégiques pour maximiser votre ROI marketing.",
                    color: "portfolio-neon"
                  }
                ].map((step, idx) => (
                  <motion.div
                    key={step.title}
                    className="flex gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-${step.color}/20 backdrop-blur-md flex items-center justify-center text-${step.color} border border-${step.color}/30`}>
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Marketing Channels Diagram */}
              <motion.div
                className="mt-20 p-10 glass-space border-portfolio-purple/20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <h3 className="text-2xl font-bold text-center mb-8 text-white glow-text">Canaux Marketing Intégrés</h3>
                
                <div className="relative h-[300px] max-w-3xl mx-auto">
                  {/* Center circle */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-blue flex items-center justify-center text-white font-bold shadow-lg z-10">
                    Votre Business
                  </div>
                  
                  {/* Orbiting channels */}
                  {[
                    { name: "SEO", angle: 0, icon: <Globe size={20} /> },
                    { name: "Paid Ads", angle: 45, icon: <DollarSign size={20} /> },
                    { name: "Social", angle: 90, icon: <Share2 size={20} /> },
                    { name: "Content", angle: 135, icon: <BookOpen size={20} /> },
                    { name: "Email", angle: 180, icon: <Target size={20} /> },
                    { name: "Analytics", angle: 225, icon: <BarChart3 size={20} /> },
                    { name: "PR", angle: 270, icon: <MessageSquare size={20} /> },
                    { name: "Video", angle: 315, icon: <Video size={20} /> }
                  ].map((channel, idx) => {
                    const radius = 120;
                    const angleRad = (channel.angle * Math.PI) / 180;
                    const x = Math.cos(angleRad) * radius;
                    const y = Math.sin(angleRad) * radius;
                    
                    return (
                      <motion.div
                        key={channel.name}
                        className="absolute flex items-center justify-center w-16 h-16 glass-space border-portfolio-purple/30 z-10"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          transform: "translate(-50%, -50%)",
                        }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 + (idx * 0.1) }}
                        whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(155,135,245,0.3)" }}
                      >
                        <div className="flex flex-col items-center">
                          <div className="text-portfolio-blue mb-1">{channel.icon}</div>
                          <span className="text-xs font-medium text-gray-300">{channel.name}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                  
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
                      const radius = 120;
                      const angleRad = (angle * Math.PI) / 180;
                      const x = Math.cos(angleRad) * radius;
                      const y = Math.sin(angleRad) * radius;
                      
                      return (
                        <motion.line
                          key={angle}
                          x1="50%" 
                          y1="50%" 
                          x2={`calc(50% + ${x}px)`} 
                          y2={`calc(50% + ${y}px)`}
                          stroke="rgba(155, 135, 245, 0.3)"
                          strokeWidth="2"
                          strokeDasharray="5,5"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.5 + (idx * 0.05) }}
                        />
                      );
                    })}
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Case Studies Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white glow-text">Case Studies</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-portfolio-purple to-portfolio-blue mx-auto mb-6"></div>
              <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
                Découvrez comment nous avons aidé des entreprises à travers l'Afrique et l'Europe à atteindre leurs objectifs marketing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {caseStudies.map((study, idx) => (
                <motion.div
                  key={study.title}
                  className="space-card overflow-hidden cosmic-hover"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                >
                  <div className="w-full h-48 relative">
                    <AspectRatio ratio={16/9}>
                      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple/30 to-portfolio-blue/30 flex items-center justify-center">
                        <div className="text-4xl font-bold text-white glow-text">{study.title.substring(0, 1)}</div>
                      </div>
                    </AspectRatio>
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-portfolio-purple">
                      {study.client}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white">{study.title}</h3>
                    <div className="bg-portfolio-purple/20 text-portfolio-purple px-3 py-1 rounded-full text-sm font-medium inline-block mb-3 backdrop-blur-sm">
                      {study.results}
                    </div>
                    <p className="text-gray-300">{study.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue hover:opacity-90 shadow-lg" asChild>
                <Link to="/portfolio">
                  Voir tous nos case studies
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* International Expertise Section */}
        <section className="py-20 relative z-10 bg-black/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white glow-text">Expertise Internationale</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-portfolio-purple to-portfolio-blue mx-auto mb-6"></div>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Notre connaissance des marchés africains et internationaux nous permet de créer des stratégies marketing adaptées à chaque contexte
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  className="glass-space p-8 border-portfolio-blue/30"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-white">Marchés Africains</h3>
                  <ul className="space-y-4">
                    {[
                      { country: "Sénégal", expertise: "Marketing digital omnicanal avec intégration des spécificités locales et mobile money" },
                      { country: "Côte d'Ivoire", expertise: "Stratégies d'acquisition et de fidélisation adaptées au marché ivoirien émergent" },
                      { country: "Maroc", expertise: "Campagnes bilingues et stratégies e-commerce pour le marché maghrébin" },
                      { country: "Nigeria", expertise: "Growth hacking et stratégies de scaling pour startups et scale-ups" }
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-portfolio-blue/20 rounded-full flex items-center justify-center text-portfolio-blue border border-portfolio-blue/30">
                          <Briefcase size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">{item.country}</h4>
                          <p className="text-gray-300 text-sm">{item.expertise}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                
                <motion.div
                  className="glass-space p-8 border-portfolio-purple/30"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-white">Marchés Internationaux</h3>
                  <ul className="space-y-4">
                    {[
                      { country: "France", expertise: "Stratégies marketing multi-canal pour entreprises françaises et francophonie" },
                      { country: "Royaume-Uni", expertise: "Content marketing et SEO pour marchés anglophones" },
                      { country: "États-Unis", expertise: "Campagnes paid media et stratégies d'acquisition évolutives" },
                      { country: "Canada", expertise: "Marketing bilingue et stratégies adaptées au marché nord-américain" }
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-portfolio-purple/20 rounded-full flex items-center justify-center text-portfolio-purple border border-portfolio-purple/30">
                          <Globe size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">{item.country}</h4>
                          <p className="text-gray-300 text-sm">{item.expertise}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              
              {/* Quote */}
              <motion.div
                className="mt-16 p-8 md:p-12 bg-cosmic-gradient rounded-2xl relative overflow-hidden border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Abstract shapes */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-portfolio-blue opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-portfolio-purple opacity-20 blur-3xl rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="text-5xl text-white/30 mb-4">"</div>
                  <p className="text-xl md:text-2xl font-light mb-6 max-w-3xl text-white">
                    Notre approche du marketing digital combine la <span className="text-portfolio-purple font-medium">data science avec la créativité</span>, 
                    l'expertise des marchés africains avec les <span className="text-portfolio-blue font-medium">standards internationaux</span>, pour créer des 
                    stratégies qui résonnent authentiquement avec vos audiences tout en générant des résultats mesurables.
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-blue mr-4"></div>
                    <div>
                      <p className="font-bold text-white">Dominiqk Mendy</p>
                      <p className="text-sm text-gray-300">Expert Marketing Digital</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white glow-text">Questions Fréquentes</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-portfolio-purple to-portfolio-blue mx-auto mb-6"></div>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    question: "Comment mesurez-vous le ROI de vos campagnes marketing ?",
                    answer: "Nous établissons des KPIs clairs dès le départ et mettons en place des systèmes de tracking complets (Google Analytics, pixels de conversion, UTM parameters). Nous produisons des rapports réguliers avec analyse des métriques clés : CAC, LTV, ROAS, taux de conversion. Notre approche data-driven nous permet d'attribuer précisément les résultats business à chaque canal et tactique marketing.",
                    color: "from-indigo-600/60 to-blue-500/50"
                  },
                  {
                    question: "Comment adaptez-vous vos stratégies aux spécificités du marché africain ?",
                    answer: "Nous prenons en compte les particularités des marchés africains : préférence pour le mobile, adoption des moyens de paiement locaux (Mobile Money), contraintes de connectivité, multilinguisme. Notre équipe inclut des experts locaux dans chaque marché clé pour garantir des messages culturellement pertinents et des tactiques adaptées au contexte local tout en maintenant des standards internationaux.",
                    color: "from-purple-600/60 to-pink-500/50"
                  },
                  {
                    question: "Quelle est votre approche pour les entreprises qui visent à la fois les marchés africains et internationaux ?",
                    answer: "Nous développons des stratégies hybrides avec un socle commun (brand identity, messaging principal) et des déclinaisons spécifiques par marché. Nous utilisons des plateformes qui permettent une gestion centralisée mais une exécution localisée. Notre expertise cross-culturelle nous permet de créer des campagnes qui résonnent à la fois localement et globalement.",
                    color: "from-blue-600/60 to-cyan-500/50"
                  },
                  {
                    question: "Comment structurez-vous vos contrats de service marketing ?",
                    answer: "Nous proposons trois modèles : retainer mensuel (pour un accompagnement continu), projet ponctuel (pour des campagnes spécifiques) ou commission au résultat (particulièrement pour l'acquisition). Chaque contrat inclut des objectifs clairs, un planning détaillé et des KPIs mesurables. Nous privilégions la transparence et la flexibilité pour nous adapter aux besoins spécifiques de chaque client.",
                    color: "from-teal-600/60 to-green-500/50"
                  },
                  {
                    question: "Travaillez-vous avec des entreprises de toutes tailles ?",
                    answer: "Oui, nous adaptons nos services aux besoins et budgets des startups, PME et grandes entreprises. Pour les startups, nous privilégions des approches growth hacking à coût optimisé. Pour les PME, nous proposons des stratégies marketing intégrées avec un bon équilibre coût/efficacité. Pour les grandes entreprises, nous développons des stratégies omnicanales sophistiquées avec reporting avancé.",
                    color: "from-amber-600/60 to-yellow-500/50"
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Card className="overflow-hidden rounded-xl border-0">
                      <div className={`h-full bg-gradient-to-br ${item.color} backdrop-blur-xl border border-white/10`}>
                        <CardHeader className="border-b border-white/10">
                          <CardTitle className="text-xl text-white">{item.question}</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <p className="text-gray-100">{item.answer}</p>
                        </CardContent>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Button className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue hover:opacity-90 shadow-lg text-white" size="lg" asChild>
                  <Link to="/contact">
                    Discuter de votre stratégie marketing
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative">
          {/* Nebula background effects */}
          <div className="absolute inset-0">
            <div className="nebula-glow-purple w-96 h-96 top-10 right-10 opacity-30"></div>
            <div className="nebula-glow-blue w-96 h-96 bottom-10 left-10 opacity-30"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto glass-space border-white/10">
              <div className="p-12 md:p-16 relative">
                {/* Background effects */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-portfolio-pink opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-portfolio-blue opacity-20 blur-3xl rounded-full"></div>
                
                <div className="relative z-10 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white glow-text">
                    Prêt à booster votre croissance ?
                  </h2>
                  <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                    Contactez-nous pour un audit gratuit de votre stratégie marketing actuelle et découvrez comment nous pouvons vous aider à atteindre vos objectifs.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue hover:opacity-90 shadow-lg" asChild>
                      <Link to="/contact">
                        Audit marketing gratuit
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white backdrop-blur-sm" asChild>
                      <Link to="/services">
                        Explorer d'autres services
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

export default MarketingServices;
