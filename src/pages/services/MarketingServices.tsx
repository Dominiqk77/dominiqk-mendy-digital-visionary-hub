import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Progress } from '../../components/ui/progress';
import { Separator } from '../../components/ui/separator';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';
import PageContainer from '../../components/layout/PageContainer';
import {
  BarChart,
  Target,
  TrendingUp,
  Search,
  Globe,
  Zap,
  MessageSquare,
  Smartphone,
  Users,
  BarChart2,
  Share,
  Instagram,
  Mail,
  PieChart,
  BellRing,
  Code,
  Layers,
  Eye,
  Star,
  FileText
} from 'lucide-react';

// Marketing Analytics Animation Component
const MarketingDataAnimation = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/20 backdrop-blur-sm z-10"></div>
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-space-grid opacity-20"></div>
      
      {/* Nebula Effects */}
      <div className="nebula-glow-purple w-[600px] h-[600px] -left-[100px] top-[10%]"></div>
      <div className="nebula-glow-blue w-[500px] h-[500px] -right-[100px] top-[40%]"></div>
      
      {/* Marketing Data Points */}
      <div className="absolute left-[10%] top-[15%] tech-node"></div>
      <div className="absolute left-[25%] top-[30%] tech-node"></div>
      <div className="absolute left-[20%] top-[50%] tech-node"></div>
      <div className="absolute left-[15%] top-[70%] tech-node"></div>
      <div className="absolute left-[40%] top-[80%] tech-node"></div>
      <div className="absolute right-[30%] top-[20%] tech-node"></div>
      <div className="absolute right-[15%] top-[40%] tech-node"></div>
      <div className="absolute right-[25%] top-[60%] tech-node"></div>
      <div className="absolute right-[10%] top-[75%] tech-node"></div>
      
      {/* Connection Lines */}
      <div className="connection-line top-[20%] left-[10%] w-[15%] rotate-[30deg]"></div>
      <div className="connection-line top-[32%] left-[25%] w-[20%] -rotate-[20deg]"></div>
      <div className="connection-line top-[55%] left-[15%] w-[25%] rotate-[10deg]"></div>
      <div className="connection-line top-[75%] left-[15%] w-[25%] rotate-[30deg]"></div>
      <div className="connection-line top-[25%] right-[15%] w-[15%] -rotate-[20deg]"></div>
      <div className="connection-line top-[45%] right-[15%] w-[10%] rotate-[40deg]"></div>
      <div className="connection-line top-[65%] right-[25%] w-[15%] -rotate-[15deg]"></div>
      
      {/* Animated Data Flows */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="data-flow-line"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: 0.3 + Math.random() * 0.4
          }}
        ></div>
      ))}
    </div>
  );
};

// Marketing Metrics Component
const MarketingMetrics = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  const metrics = [
    { 
      label: "Augmentation du trafic",
      value: 85,
      icon: <TrendingUp className="h-5 w-5 text-blue-400" />,
      color: "bg-blue-500"
    },
    { 
      label: "Taux de conversion",
      value: 75,
      icon: <Target className="h-5 w-5 text-indigo-400" />,
      color: "bg-indigo-500" 
    },
    { 
      label: "Visibilité sur les moteurs",
      value: 92,
      icon: <Search className="h-5 w-5 text-purple-400" />,
      color: "bg-purple-500"
    },
    { 
      label: "Engagement sur réseaux sociaux",
      value: 88,
      icon: <Share className="h-5 w-5 text-pink-400" />,
      color: "bg-pink-500"
    },
  ];
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
          }}
          className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="bg-black/30 p-2 rounded-md">
                {metric.icon}
              </div>
              <h3 className="text-lg font-medium text-white">{metric.label}</h3>
            </div>
            <span className="text-xl font-semibold text-white">{metric.value}%</span>
          </div>
          <Progress value={metric.value} className="h-2" indicatorColor={metric.color} />
        </motion.div>
      ))}
    </motion.div>
  );
};

// Marketing Service Card Component
const MarketingServiceCard = ({ title, description, icon, gradient }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
      }}
      className="ai-feature-card group relative h-full"
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500 ${gradient}`}></div>
      <div className="relative z-10 h-full flex flex-col">
        <div className="mb-4 p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20 w-fit">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
          {title}
        </h3>
        <p className="text-gray-300 flex-grow">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

// Future Marketing Trend Card Component
const FutureMarketingCard = ({ title, description, icon }) => {
  return (
    <Card className="bg-black/40 border-portfolio-purple/20 overflow-hidden h-full cosmic-hover">
      <CardContent className="p-6">
        <div className="flex flex-col h-full">
          <div className="mb-5 p-2 bg-portfolio-cosmic/10 rounded-md w-fit">
            {icon}
          </div>
          <h3 className="text-lg font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            {title}
          </h3>
          <p className="text-gray-300 text-sm">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

// Case Study Component
const CaseStudy = ({ title, metrics, description, bgClass }) => {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-white/10 backdrop-blur-md p-8 h-full ${bgClass}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/20 z-0"></div>
      <div className="relative z-10">
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">{title}</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-black/40 backdrop-blur-sm rounded-lg p-4">
              <p className="text-gray-400 text-sm">{metric.label}</p>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-white">{metric.value}</span>
                <TrendingUp className="h-4 w-4 text-green-400" />
              </div>
            </div>
          ))}
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

// Channel Strategy Component
const ChannelStrategy = ({ title, icon, description }) => {
  return (
    <div className="bg-black/20 border border-white/10 rounded-lg p-6 hover:border-portfolio-purple/30 transition-all">
      <div className="flex items-start gap-4">
        <div className="bg-portfolio-cosmic/20 p-3 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2 text-white">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

// Testimonial Component
const TestimonialCard = ({ quote, author, position, avatar }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black/30 backdrop-blur-md border border-white/10 rounded-lg p-6 space-y-4"
    >
      <div className="flex gap-2 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-gray-300 italic">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="bg-portfolio-purple/20 p-1 rounded-full">
          {avatar}
        </div>
        <div>
          <p className="font-medium text-white">{author}</p>
          <p className="text-gray-400 text-sm">{position}</p>
        </div>
      </div>
    </motion.div>
  );
};

const MarketingServices = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef);
  const heroControls = useAnimation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    if (heroInView) {
      heroControls.start("visible");
    }
  }, [heroControls, heroInView]);
  
  const marketingServices = [
    {
      title: "SEO & Référencement naturel",
      description: "Optimisez votre visibilité sur les moteurs de recherche avec des stratégies SEO avancées basées sur l'analyse de données et l'IA prédictive.",
      icon: <Search className="h-7 w-7 text-blue-400" />,
      gradient: "bg-gradient-to-br from-blue-600 to-cyan-600"
    },
    {
      title: "Marketing de contenu",
      description: "Création de contenus engageants et stratégiques qui résonnent avec votre audience cible et génèrent des conversions mesurables.",
      icon: <FileText className="h-7 w-7 text-indigo-400" />,
      gradient: "bg-gradient-to-br from-indigo-600 to-purple-600"
    },
    {
      title: "Social Media Marketing",
      description: "Stratégies de présence sur les réseaux sociaux basées sur l'engagement communautaire et l'analyse comportementale.",
      icon: <Share className="h-7 w-7 text-purple-400" />,
      gradient: "bg-gradient-to-br from-purple-600 to-pink-600"
    },
    {
      title: "Publicité digitale (SEM/PPC)",
      description: "Campagnes publicitaires ciblées avec optimisation continue basée sur l'IA pour maximiser votre retour sur investissement.",
      icon: <Target className="h-7 w-7 text-pink-400" />,
      gradient: "bg-gradient-to-br from-pink-600 to-red-600"
    },
    {
      title: "Email Marketing Avancé",
      description: "Campagnes d'emailing personnalisées exploitant l'analyse prédictive pour des taux d'ouverture et de conversion optimisés.",
      icon: <Mail className="h-7 w-7 text-blue-400" />,
      gradient: "bg-gradient-to-br from-blue-600 to-indigo-600"
    },
    {
      title: "Marketing Automation",
      description: "Automatisez vos processus marketing avec des workflows intelligents qui nurturent vos prospects et convertissent efficacement.",
      icon: <Zap className="h-7 w-7 text-yellow-400" />,
      gradient: "bg-gradient-to-br from-amber-600 to-yellow-600"
    }
  ];

  const futureMarketingTrends = [
    {
      title: "Marketing Conversationnel IA",
      description: "Exploitez les chatbots IA avancés et les assistants virtuels pour des conversations personnalisées et engageantes avec vos clients.",
      icon: <MessageSquare className="h-6 w-6 text-portfolio-blue" />
    },
    {
      title: "Contenu Généré par IA",
      description: "Créez du contenu optimisé et personnalisé à grande échelle grâce aux technologies d'IA générative adaptées à votre marque.",
      icon: <Layers className="h-6 w-6 text-portfolio-purple" />
    },
    {
      title: "Marketing Prédictif",
      description: "Anticipez les comportements de vos clients avec des modèles prédictifs avancés pour des stratégies toujours un pas en avant.",
      icon: <BarChart className="h-6 w-6 text-portfolio-cyan" />
    },
    {
      title: "Réalité Augmentée Marketing",
      description: "Offrez des expériences immersives à vos clients grâce à l'intégration de la réalité augmentée dans vos stratégies marketing.",
      icon: <Eye className="h-6 w-6 text-portfolio-blue" />
    }
  ];
  
  const channelStrategies = [
    {
      title: "Moteurs de recherche",
      icon: <Globe className="h-6 w-6 text-blue-400" />,
      description: "Optimisation SEO avancée, recherche vocale et stratégies SEM pour dominer les résultats de recherche."
    },
    {
      title: "Réseaux sociaux",
      icon: <Instagram className="h-6 w-6 text-pink-400" />,
      description: "Stratégies sur mesure pour chaque plateforme sociale, combinant contenu organique et publicitaire."
    },
    {
      title: "Marketing mobile",
      icon: <Smartphone className="h-6 w-6 text-green-400" />,
      description: "Expériences optimisées pour mobile, notifications push et stratégies d'app marketing."
    },
    {
      title: "Email & Marketing direct",
      icon: <Mail className="h-6 w-6 text-purple-400" />,
      description: "Segmentation avancée, personnalisation et automation pour des campagnes d'email marketing performantes."
    }
  ];
  
  const testimonials = [
    {
      quote: "Les stratégies de marketing digital mises en place ont véritablement transformé notre visibilité en ligne. L'approche data-driven nous a permis d'atteindre des segments de marché que nous pensions inaccessibles.",
      author: "Claire M.",
      position: "Directrice Marketing, E-commerce",
      avatar: <Users className="h-10 w-10" />
    },
    {
      quote: "L'expertise en SEO et contenu a propulsé notre site dans les premiers résultats de recherche. Nos conversions ont augmenté de 140% en seulement 6 mois de collaboration.",
      author: "Thomas R.",
      position: "CEO, Startup SaaS",
      avatar: <Users className="h-10 w-10" />
    }
  ];
  
  const caseStudies = [
    {
      title: "Transformation digitale pour un leader du retail",
      metrics: [
        { label: "Augmentation du trafic", value: "+175%" },
        { label: "Taux de conversion", value: "+86%" },
        { label: "Coût par acquisition", value: "-42%" },
        { label: "ROI", value: "+210%" }
      ],
      description: "Refonte complète de la stratégie marketing digitale, combinant SEO technique, content marketing et campagnes social media ciblées.",
      bgClass: "bg-[url('/placeholder.svg')] bg-cover bg-center"
    },
    {
      title: "Campagne de lancement pour une startup tech",
      metrics: [
        { label: "Nouvelles inscriptions", value: "+12K" },
        { label: "Engagement", value: "+320%" },
        { label: "Mentions presse", value: "45+" },
        { label: "Coût d'acquisition", value: "-65%" }
      ],
      description: "Stratégie de lancement multi-canal avec contenu viral, influenceurs stratégiques et campagnes PPC optimisées par IA.",
      bgClass: "bg-[url('/placeholder.svg')] bg-cover bg-center"
    }
  ];

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen bg-portfolio-space text-white pt-20 overflow-hidden">
        {/* Background Animation */}
        <MarketingDataAnimation />
        
        {/* Hero Section */}
        <section className="relative z-10 py-20">
          <PageContainer>
            <motion.div
              ref={heroRef}
              initial="hidden"
              animate={heroControls}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <motion.div variants={animationVariants}>
                  <Badge className="mb-4 border-blue-500/30 text-blue-400 bg-blue-950/30">
                    Marketing Digital
                  </Badge>
                </motion.div>
                <motion.h1 
                  variants={animationVariants}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400">
                    Stratégies Marketing
                  </span>{" "}
                  à l'ère de l'Intelligence Artificielle
                </motion.h1>
                <motion.p 
                  variants={animationVariants}
                  className="text-xl text-gray-300 mb-8"
                >
                  Propulsez votre présence digitale avec des stratégies marketing innovantes combinant data science, créativité et technologies d'IA avancées.
                </motion.p>
                <motion.div variants={animationVariants} className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => navigate("/start-project")}
                    className="space-button px-8 py-6 text-lg"
                  >
                    Démarrer votre projet
                    <Zap className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    onClick={() => navigate("/contact")}
                    variant="outline"
                    className="border-white/20 hover:border-white/40 bg-black/30 px-8 py-6 text-lg"
                  >
                    Discuter de votre stratégie
                  </Button>
                </motion.div>
              </div>
              
              <motion.div
                variants={animationVariants}
                className="relative"
              >
                <MarketingMetrics />
              </motion.div>
            </motion.div>
          </PageContainer>
        </section>
        
        {/* Services Section */}
        <section className="relative z-10 py-20 bg-gradient-to-b from-transparent to-black/40">
          <PageContainer>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
            >
              <div className="text-center mb-16">
                <Badge className="mb-4 border-blue-500/30 text-blue-400 bg-blue-950/30">Nos Services</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  Solutions Marketing Complètes
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Des stratégies digitales sur mesure qui combinent créativité, data science et technologies de pointe pour maximiser votre impact et votre ROI.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {marketingServices.map((service, index) => (
                  <MarketingServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    gradient={service.gradient}
                  />
                ))}
              </div>
            </motion.div>
          </PageContainer>
        </section>
        
        {/* Methodology Section */}
        <section className="relative z-10 py-20">
          <PageContainer>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.6 } }
              }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <Badge className="mb-4 border-pink-500/30 text-pink-400 bg-pink-950/30">Notre Méthodologie</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Une approche data-driven et créative
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Notre méthodologie unique combine analyse de données avancée et créativité stratégique pour développer des campagnes marketing qui délivrent des résultats mesurables.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-black/30 p-3 rounded-full h-12 w-12 flex items-center justify-center border border-white/10">
                      <Search className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Analyse & Discovery</h3>
                      <p className="text-gray-400">Audit complet de votre écosystème digital et analyse concurrentielle avec outils IA.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-black/30 p-3 rounded-full h-12 w-12 flex items-center justify-center border border-white/10">
                      <Target className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Planification Stratégique</h3>
                      <p className="text-gray-400">Élaboration de stratégies sur mesure basées sur les insights data et vos objectifs business.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-black/30 p-3 rounded-full h-12 w-12 flex items-center justify-center border border-white/10">
                      <Zap className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Execution & Optimisation</h3>
                      <p className="text-gray-400">Déploiement agile avec optimisation continue basée sur l'analyse en temps réel.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-black/30 p-3 rounded-full h-12 w-12 flex items-center justify-center border border-white/10">
                      <BarChart2 className="h-5 w-5 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Analyse & Reporting</h3>
                      <p className="text-gray-400">Dashboards personnalisés et insights actionnables pour une transparence totale.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative bg-black/20 backdrop-blur-md rounded-xl p-8 border border-white/10">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-20 blur"></div>
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-6">Canaux stratégiques</h3>
                  <div className="grid grid-cols-1 gap-6">
                    {channelStrategies.map((strategy, index) => (
                      <ChannelStrategy 
                        key={index}
                        title={strategy.title}
                        icon={strategy.icon}
                        description={strategy.description}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </PageContainer>
        </section>
        
        {/* Case Studies Section */}
        <section className="relative z-10 py-20 bg-gradient-to-b from-black/40 to-transparent">
          <PageContainer>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.6 } }
              }}
            >
              <div className="text-center mb-16">
                <Badge className="mb-4 border-purple-500/30 text-purple-400 bg-purple-950/30">Études de cas</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Résultats prouvés & mesurables
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
                  Découvrez comment nos stratégies marketing ont généré des résultats exceptionnels pour nos clients à travers différents secteurs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {caseStudies.map((study, index) => (
                  <CaseStudy
                    key={index}
                    title={study.title}
                    metrics={study.metrics}
                    description={study.description}
                    bgClass={study.bgClass}
                  />
                ))}
              </div>
            </motion.div>
          </PageContainer>
        </section>
        
        {/* Future of Marketing Section */}
        <section className="relative z-10 py-20">
          <PageContainer>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.6 } }
              }}
            >
              <div className="text-center mb-16">
                <Badge className="mb-4 border-cyan-500/30 text-cyan-400 bg-cyan-950/30">Le Futur du Marketing</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Marketing à l'ère de l'IA
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
                  Explorez les tendances émergentes qui façonnent l'avenir du marketing digital, avec un focus sur l'intelligence artificielle et les technologies avancées.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {futureMarketingTrends.map((trend, index) => (
                  <FutureMarketingCard
                    key={index}
                    title={trend.title}
                    description={trend.description}
                    icon={trend.icon}
                  />
                ))}
              </div>
              
              <div className="mt-16 bg-black/20 backdrop-blur-md rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-center">Notre vision du marketing de demain</h3>
                <div className="space-y-6">
                  <p className="text-gray-300">
                    Le marketing digital évolue à une vitesse sans précédent, propulsé par les avancées technologiques et l'intelligence artificielle. Notre approche consiste à rester à la pointe de ces innovations tout en maintenant l'humain au centre de toute stratégie.
                  </p>
                  <p className="text-gray-300">
                    Nous croyons en un marketing qui combine harmonieusement la puissance de l'IA pour l'analyse, la personnalisation et l'optimisation avec la créativité humaine indispensable pour créer des connexions émotionnelles authentiques avec vos audiences.
                  </p>
                  <p className="text-gray-300">
                    Notre rôle est de vous guider à travers cette transformation digitale en intégrant intelligemment les nouvelles technologies dans vos stratégies marketing, tout en préservant l'ADN unique de votre marque.
                  </p>
                </div>
              </div>
            </motion.div>
          </PageContainer>
        </section>
        
        {/* Testimonials Section */}
        <section className="relative z-10 py-20 bg-gradient-to-b from-transparent to-black/40">
          <PageContainer>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.6 } }
              }}
            >
              <div className="text-center mb-16">
                <Badge className="mb-4 border-amber-500/30 text-amber-400 bg-amber-950/30">Témoignages</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">
                  Ce qu'en disent nos clients
                </h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    quote={testimonial.quote}
                    author={testimonial.author}
                    position={testimonial.position}
                    avatar={testimonial.avatar}
                  />
                ))}
              </div>
            </motion.div>
          </PageContainer>
        </section>
        
        {/* CTA Section */}
        <section className="relative z-10 py-20">
          <PageContainer>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.6 } }
              }}
              className="bg-gradient-to-r from-blue-900/30 via-indigo-900/30 to-purple-900/30 backdrop-blur-md rounded-xl p-12 border border-white/10 relative overflow-hidden"
            >
              <div className="nebula-glow-purple w-[300px] h-[300px] -right-[10%] top-[10%]"></div>
              <div className="nebula-glow-blue w-[250px] h-[250px] -left-[5%] bottom-[10%]"></div>
              
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Prêt à transformer votre stratégie marketing?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Prenez rendez-vous pour une consultation stratégique et découvrez comment nous pouvons propulser votre présence digitale.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button
                    onClick={() => navigate("/start-project")}
                    className="glow-button px-8 py-6 text-lg"
                  >
                    Démarrer votre projet
                  </Button>
                  <Button
                    onClick={() => navigate("/contact")}
                    variant="outline"
                    className="border-white/20 hover:border-white/40 bg-black/30 px-8 py-6 text-lg"
                  >
                    Discuter avec un expert
                  </Button>
                </div>
              </div>
            </motion.div>
          </PageContainer>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default MarketingServices;
