import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, LineChart, BrainCircuit, Database, Layout, Globe, Rocket, Lightbulb, Palette, FileCode, Monitor, Share2, Blocks, BookOpen, Users, Phone, ShoppingCart, BadgeCheck, Zap, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from 'framer-motion';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("featured");
  const isMobile = useIsMobile();
  const tabsListRef = useRef<HTMLDivElement>(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);

  // Featured services
  const featuredServices = [
    {
      icon: <BrainCircuit size={40} />,
      title: "Solutions IA Personnalisées",
      description: "Développement de solutions d'intelligence artificielle sur mesure pour automatiser vos processus, analyser vos données et créer des expériences clients uniques.",
      link: "/services/ai-solutions",
      gradient: "from-indigo-600 to-purple-500"
    },
    {
      icon: <Code size={40} />,
      title: "Développement Web & Mobile",
      description: "Création de sites web professionnels et applications mobiles performantes avec les dernières technologies et une approche centrée sur l'utilisateur.",
      link: "/services/web-development",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      icon: <LineChart size={40} />,
      title: "Marketing Digital 360°",
      description: "Stratégies de marketing digital complètes pour augmenter votre visibilité en ligne et générer des leads qualifiés pour votre entreprise.",
      link: "/services/digital-marketing",
      gradient: "from-orange-500 to-amber-400"
    },
    {
      icon: <Globe size={40} />,
      title: "E-Gouvernance & Innovation",
      description: "Solutions numériques pour les administrations et services publics Africains afin d'améliorer l'efficacité, la transparence et l'accessibilité.",
      link: "/services/e-governance",
      gradient: "from-emerald-600 to-green-500"
    },
    {
      icon: <Database size={40} />,
      title: "Big Data & Analytics",
      description: "Collecte, analyse et visualisation de données massives pour vous aider à prendre des décisions stratégiques basées sur des insights concrets.",
      link: "/services/data-analysis",
      gradient: "from-blue-800 to-blue-500"
    },
    {
      icon: <Layout size={40} />,
      title: "Consulting Stratégique Tech",
      description: "Conseils stratégiques pour orienter votre transformation digitale et optimiser votre infrastructure technologique existante.",
      link: "/services/consulting",
      gradient: "from-purple-800 to-violet-500"
    },
  ];

  // AI services
  const aiServices = [
    {
      icon: <BrainCircuit size={40} />,
      title: "Développement IA sur Mesure",
      description: "Création d'algorithmes et modèles d'IA entièrement personnalisés pour répondre à vos défis business spécifiques.",
      link: "/services/ai/custom-development",
      gradient: "from-indigo-600 to-purple-500"
    },
    {
      icon: <Users size={40} />,
      title: "Chatbots & Assistants IA",
      description: "Conception d'assistants virtuels intelligents pour améliorer votre service client et automatiser les interactions utilisateurs.",
      link: "/services/ai/chatbots",
      gradient: "from-blue-600 to-sky-400"
    },
    {
      icon: <Database size={40} />,
      title: "Machine Learning & Prédiction",
      description: "Développement de modèles prédictifs pour anticiper les tendances du marché et optimiser vos prises de décision.",
      link: "/services/ai/machine-learning",
      gradient: "from-green-600 to-teal-500"
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Intelligence Artificielle Générative",
      description: "Création de contenu automatisé (texte, image, audio) avec les dernières technologies d'IA générative.",
      link: "/services/ai/generative",
      gradient: "from-amber-600 to-yellow-400"
    },
    {
      icon: <Monitor size={40} />,
      title: "Vision par Ordinateur",
      description: "Implémentation de solutions de reconnaissance d'images et de vidéos pour l'automatisation de processus visuels.",
      link: "/services/ai/computer-vision",
      gradient: "from-rose-600 to-pink-500"
    },
    {
      icon: <Rocket size={40} />,
      title: "Automatisation IA des Processus",
      description: "Optimisation des flux de travail grâce à l'automatisation intelligente basée sur l'apprentissage machine.",
      link: "/services/ai/process-automation",
      gradient: "from-violet-800 to-purple-600"
    },
  ];

  // Web & Mobile Services
  const webServices = [
    {
      icon: <Code size={40} />,
      title: "Développement Web Full Stack",
      description: "Création de sites et applications web complexes avec les technologies front-end et back-end les plus performantes.",
      link: "/services/web/full-stack",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      icon: <Phone size={40} />,
      title: "Applications Mobiles Native/Hybride",
      description: "Développement d'applications iOS et Android performantes, intuitives et parfaitement adaptées à vos besoins.",
      link: "/services/web/mobile-apps",
      gradient: "from-indigo-600 to-blue-500"
    },
    {
      icon: <ShoppingCart size={40} />,
      title: "E-Commerce & Marketplaces",
      description: "Création de boutiques en ligne et places de marché optimisées pour la conversion et l'expérience utilisateur.",
      link: "/services/web/ecommerce",
      gradient: "from-green-600 to-teal-500"
    },
    {
      icon: <FileCode size={40} />,
      title: "SaaS & Applications Cloud",
      description: "Conception d'applications métier en mode SaaS pour transformer votre idée en produit évolutif.",
      link: "/services/web/saas",
      gradient: "from-cyan-600 to-sky-500"
    },
    {
      icon: <Blocks size={40} />,
      title: "Développement No-Code/Low-Code",
      description: "Solutions rapides et économiques avec des plateformes comme Webflow, Bubble ou Adalo pour accélérer votre time-to-market.",
      link: "/services/web/nocode",
      gradient: "from-amber-600 to-orange-500"
    },
    {
      icon: <BadgeCheck size={40} />,
      title: "Audits Techniques & Optimisation",
      description: "Analyse approfondie de vos plateformes existantes pour améliorer les performances et la sécurité.",
      link: "/services/web/audit",
      gradient: "from-rose-600 to-red-500"
    },
  ];

  // Marketing services with enhanced design for "Canaux Marketing Intégrés"
  const marketingServices = [
    {
      icon: <LineChart size={40} />,
      title: "SEO/SEA/SMO Avancé",
      description: "Optimisation multi-canaux pour améliorer votre visibilité sur les moteurs de recherche et réseaux sociaux.",
      link: "/services/marketing/seo",
      gradient: "from-blue-600 to-indigo-500",
      highlight: "Visibilité maximale"
    },
    {
      icon: <Rocket size={40} />,
      title: "Growth Hacking & Acquisition",
      description: "Stratégies innovantes pour accélérer votre croissance avec un budget optimisé et des résultats rapides.",
      link: "/services/marketing/growth",
      gradient: "from-purple-600 to-violet-500",
      highlight: "ROI exceptionnel"
    },
    {
      icon: <Share2 size={40} />,
      title: "Social Media Marketing",
      description: "Gestion professionnelle de vos réseaux sociaux et campagnes publicitaires pour maximiser votre engagement.",
      link: "/services/marketing/social",
      gradient: "from-sky-600 to-blue-500",
      highlight: "Engagement optimal"
    },
    {
      icon: <Zap size={40} />,
      title: "Tunnels de Vente Optimisés",
      description: "Création de parcours d'achat stratégiques pour convertir vos visiteurs en clients fidèles.",
      link: "/services/marketing/funnels",
      gradient: "from-amber-600 to-yellow-500",
      highlight: "Conversions amplifiées"
    },
    {
      icon: <Layout size={40} />,
      title: "Content Marketing & Storytelling",
      description: "Production de contenu stratégique et narratif pour engager votre audience et renforcer votre autorité.",
      link: "/services/marketing/content",
      gradient: "from-emerald-600 to-green-500",
      highlight: "Autorité renforcée"
    },
    {
      icon: <BookOpen size={40} />,
      title: "Formation & Coaching Marketing",
      description: "Programmes de formation personnalisés pour renforcer les compétences digitales de votre équipe.",
      link: "/services/marketing/training",
      gradient: "from-rose-600 to-pink-500",
      highlight: "Expertise partagée"
    },
  ];

  // Consulting services with highlighted 30-min free consultation
  const consultingServices = [
    {
      icon: <Globe size={40} />,
      title: "E-Gouvernance & Services Publics",
      description: "Conseils et implémentation de solutions numériques pour moderniser les services gouvernementaux Africains.",
      link: "/services/consulting/e-governance",
      gradient: "from-emerald-600 to-teal-500",
      highlight: "Transformation publique"
    },
    {
      icon: <Palette size={40} />,
      title: "Transformation Digitale",
      description: "Accompagnement stratégique pour digitaliser vos processus et adapter votre entreprise aux enjeux du numérique.",
      link: "/services/consulting/digital-transformation",
      gradient: "from-blue-700 to-cyan-500",
      highlight: "Évolution optimisée"
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Innovation & R&D Numérique",
      description: "Exploration des technologies émergentes et développement de prototypes innovants pour votre entreprise.",
      link: "/services/consulting/innovation",
      gradient: "from-amber-600 to-yellow-500",
      highlight: "Avantage compétitif"
    },
    {
      icon: <Users size={40} />,
      title: "Formation Executive Digital",
      description: "Programmes sur mesure pour les dirigeants Africains souhaitant maîtriser les enjeux de la révolution numérique.",
      link: "/services/consulting/executive-training",
      gradient: "from-rose-600 to-orange-500",
      highlight: "Leadership numérique"
    },
    {
      icon: <Layout size={40} />,
      title: "Stratégie Data & IA",
      description: "Élaboration de feuilles de route pour valoriser vos données et implémenter l'IA dans votre organisation.",
      link: "/services/consulting/data-strategy",
      gradient: "from-indigo-700 to-violet-500",
      highlight: "Intelligence augmentée"
    },
    {
      icon: <Blocks size={40} />,
      title: "Consultation Expert 30min Gratuite",
      description: "Première séance de consultation gratuite pour identifier vos défis et opportunités. Suite de l'accompagnement personnalisé selon vos besoins.",
      link: "/contact?service=free-consultation",
      gradient: "from-purple-700 to-pink-600",
      highlight: "Offre spéciale",
      featured: true
    },
  ];

  const allCategoriesMap: {
    [key: string]: Array<{
      icon: JSX.Element;
      title: string;
      description: string;
      link: string;
      gradient?: string;
      highlight?: string;
      featured?: boolean;
    }>;
  } = {
    "featured": featuredServices,
    "ai": aiServices,
    "web": webServices, 
    "marketing": marketingServices,
    "consulting": consultingServices
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  // Optimized scroll position check
  const checkScrollPosition = () => {
    if (tabsListRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsListRef.current;
      setShowLeftScroll(scrollLeft > 20);
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  // Optimized scroll function
  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsListRef.current) {
      const scrollAmount = 150;
      const currentScroll = tabsListRef.current.scrollLeft;
      
      tabsListRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Optimized tab scrolling effect
  useEffect(() => {
    if (isMobile && tabsListRef.current) {
      const selectedTab = document.querySelector(`[data-state="active"][data-value="${selectedCategory}"]`);
      if (selectedTab) {
        const container = tabsListRef.current;
        const tabElement = selectedTab as HTMLElement;
        
        const scrollLeft = tabElement.offsetLeft - (container.clientWidth / 2) + (tabElement.offsetWidth / 2);
        
        container.scrollTo({
          left: Math.max(0, scrollLeft),
          behavior: 'smooth'
        });
      }
    }
    
    // Update scroll indicators
    setTimeout(checkScrollPosition, 100);
  }, [selectedCategory, isMobile]);

  // Simplified scroll event handling
  useEffect(() => {
    const tabsListElement = tabsListRef.current;
    if (tabsListElement) {
      tabsListElement.addEventListener('scroll', checkScrollPosition, { passive: true });
      checkScrollPosition();
    }
    
    return () => {
      if (tabsListElement) {
        tabsListElement.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, []);

  return (
    <section className="py-20 backdrop-blur-sm bg-black/20 prevent-scroll-conflicts">
      <div className="container mx-auto px-4 no-horizontal-overflow">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Mes <span className="text-gradient-cosmic">Services</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Des solutions numériques innovantes pour propulser votre entreprise vers de nouveaux sommets
          </p>
        </div>

        <Tabs defaultValue="featured" value={selectedCategory} onValueChange={handleCategoryChange} className="w-full mb-12">
          <div className="relative flex justify-center mb-8 no-horizontal-overflow">
            {/* Left scroll indicator - only on mobile */}
            {isMobile && showLeftScroll && (
              <button 
                onClick={() => scrollTabs('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-portfolio-purple/70 text-white rounded-r-md shadow-lg flex items-center justify-center backdrop-blur-sm"
                aria-label="Défiler à gauche"
              >
                <ChevronLeft size={16} />
              </button>
            )}
            
            <TabsList 
              ref={tabsListRef}
              className="bg-black/30 border border-white/10 backdrop-blur-md flex w-full md:w-auto p-1 rounded-lg relative services-tabs-list no-horizontal-overflow"
            >
              <TabsTrigger 
                value="featured" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white px-4 py-2 flex-1 md:flex-none whitespace-nowrap transition-all duration-200"
              >
                Services Phares
              </TabsTrigger>
              <TabsTrigger 
                value="ai" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white px-4 py-2 flex-1 md:flex-none whitespace-nowrap transition-all duration-200"
              >
                Intelligence Artificielle
              </TabsTrigger>
              <TabsTrigger 
                value="web" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white px-4 py-2 flex-1 md:flex-none whitespace-nowrap transition-all duration-200"
              >
                Web & Mobile
              </TabsTrigger>
              <TabsTrigger 
                value="marketing" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white px-4 py-2 flex-1 md:flex-none whitespace-nowrap transition-all duration-200"
              >
                Marketing Digital
              </TabsTrigger>
              <TabsTrigger 
                value="consulting" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white px-4 py-2 flex-1 md:flex-none whitespace-nowrap transition-all duration-200"
              >
                Consulting
              </TabsTrigger>
            </TabsList>
            
            {/* Right scroll indicator - only on mobile */}
            {isMobile && showRightScroll && (
              <button 
                onClick={() => scrollTabs('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-portfolio-purple/70 text-white rounded-l-md shadow-lg flex items-center justify-center backdrop-blur-sm"
                aria-label="Défiler à droite"
              >
                <ChevronRight size={16} />
              </button>
            )}
          </div>

          {Object.keys(allCategoriesMap).map((category) => (
            <TabsContent key={category} value={category} className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 no-horizontal-overflow">
                {allCategoriesMap[category].map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className={`group gpu-accelerated ${service.featured ? 'lg:col-span-3 md:col-span-2' : ''}`}
                  >
                    <Card className={`h-full border-none overflow-hidden cosmic-hover relative ${service.featured ? 'bg-black/60' : 'bg-black/40'} reduce-blur-mobile backdrop-blur-md`}>
                      {/* Gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient || 'from-blue-600 to-purple-600'} opacity-20 group-hover:opacity-30 transition-opacity duration-200`}></div>
                      
                      {/* Border glow effect */}
                      <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-white/30 group-hover:shadow-[0_0_15px_rgba(155,135,245,0.3)] transition-all duration-200"></div>
                      
                      {service.highlight && (
                        <div className="absolute -right-8 top-6 transform rotate-45 bg-gradient-to-r from-portfolio-blue to-portfolio-purple text-white text-xs font-medium py-1 px-8 shadow-lg">
                          {service.highlight}
                        </div>
                      )}
                      
                      <div className="relative z-10">
                        <CardHeader className="pb-0">
                          <div className={`text-white bg-gradient-to-br ${service.gradient || 'from-blue-600 to-purple-600'} p-3 rounded-xl w-16 h-16 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-200 gpu-accelerated`}>
                            {service.icon}
                          </div>
                          <CardTitle className="mt-4 text-xl text-white">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <CardDescription className="text-base text-gray-300">{service.description}</CardDescription>
                        </CardContent>
                        <CardFooter>
                          <Button variant="ghost" className="p-0 text-white hover:text-portfolio-blue hover:bg-transparent group transition-colors duration-200" asChild>
                            <Link to={service.link} className="flex items-center">
                              <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-blue to-portfolio-purple">En savoir plus</span>
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-portfolio-purple duration-200" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </div>
                      
                      {/* Corner decorations */}
                      <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-white/10 opacity-50 rounded-tl-xl"></div>
                      <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-white/10 opacity-50 rounded-br-xl"></div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <p className="text-lg mb-6 text-gray-300">Découvrez plus de 100 services personnalisables pour répondre à vos besoins spécifiques</p>
          <Button size="lg" className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue hover:opacity-90 text-white transition-opacity duration-200" asChild>
            <Link to="/services">Explorer tous les services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
