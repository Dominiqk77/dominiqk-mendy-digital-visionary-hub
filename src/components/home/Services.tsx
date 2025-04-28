
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, LineChart, BrainCircuit, Database, Layout, Globe, Rocket, Lightbulb, Palette, FileCode, Monitor, Share2, Blocks, BookOpen, Users, Phone, ShoppingCart, BadgeCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("featured");

  // Featured services
  const featuredServices = [
    {
      icon: <BrainCircuit size={40} />,
      title: "Solutions IA Personnalisées",
      description: "Développement de solutions d'intelligence artificielle sur mesure pour automatiser vos processus, analyser vos données et créer des expériences clients uniques.",
      link: "/services/ai-solutions"
    },
    {
      icon: <Code size={40} />,
      title: "Développement Web & Mobile",
      description: "Création de sites web professionnels et applications mobiles performantes avec les dernières technologies et une approche centrée sur l'utilisateur.",
      link: "/services/web-development"
    },
    {
      icon: <LineChart size={40} />,
      title: "Marketing Digital 360°",
      description: "Stratégies de marketing digital complètes pour augmenter votre visibilité en ligne et générer des leads qualifiés pour votre entreprise.",
      link: "/services/digital-marketing"
    },
    {
      icon: <Globe size={40} />,
      title: "E-Gouvernance & Innovation",
      description: "Solutions numériques pour les administrations et services publics Africains afin d'améliorer l'efficacité, la transparence et l'accessibilité.",
      link: "/services/e-governance"
    },
    {
      icon: <Database size={40} />,
      title: "Big Data & Analytics",
      description: "Collecte, analyse et visualisation de données massives pour vous aider à prendre des décisions stratégiques basées sur des insights concrets.",
      link: "/services/data-analysis"
    },
    {
      icon: <Layout size={40} />,
      title: "Consulting Stratégique Tech",
      description: "Conseils stratégiques pour orienter votre transformation digitale et optimiser votre infrastructure technologique existante.",
      link: "/services/consulting"
    },
  ];

  // AI services
  const aiServices = [
    {
      icon: <BrainCircuit size={40} />,
      title: "Développement IA sur Mesure",
      description: "Création d'algorithmes et modèles d'IA entièrement personnalisés pour répondre à vos défis business spécifiques.",
      link: "/services/ai/custom-development"
    },
    {
      icon: <Users size={40} />,
      title: "Chatbots & Assistants IA",
      description: "Conception d'assistants virtuels intelligents pour améliorer votre service client et automatiser les interactions utilisateurs.",
      link: "/services/ai/chatbots"
    },
    {
      icon: <Database size={40} />,
      title: "Machine Learning & Prédiction",
      description: "Développement de modèles prédictifs pour anticiper les tendances du marché et optimiser vos prises de décision.",
      link: "/services/ai/machine-learning"
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Intelligence Artificielle Générative",
      description: "Création de contenu automatisé (texte, image, audio) avec les dernières technologies d'IA générative.",
      link: "/services/ai/generative"
    },
    {
      icon: <Monitor size={40} />,
      title: "Vision par Ordinateur",
      description: "Implémentation de solutions de reconnaissance d'images et de vidéos pour l'automatisation de processus visuels.",
      link: "/services/ai/computer-vision"
    },
    {
      icon: <Rocket size={40} />,
      title: "Automatisation IA des Processus",
      description: "Optimisation des flux de travail grâce à l'automatisation intelligente basée sur l'apprentissage machine.",
      link: "/services/ai/process-automation"
    },
  ];

  // Web & Mobile Services
  const webServices = [
    {
      icon: <Code size={40} />,
      title: "Développement Web Full Stack",
      description: "Création de sites et applications web complexes avec les technologies front-end et back-end les plus performantes.",
      link: "/services/web/full-stack"
    },
    {
      icon: <Phone size={40} />,
      title: "Applications Mobiles Native/Hybride",
      description: "Développement d'applications iOS et Android performantes, intuitives et parfaitement adaptées à vos besoins.",
      link: "/services/web/mobile-apps"
    },
    {
      icon: <ShoppingCart size={40} />,
      title: "E-Commerce & Marketplaces",
      description: "Création de boutiques en ligne et places de marché optimisées pour la conversion et l'expérience utilisateur.",
      link: "/services/web/ecommerce"
    },
    {
      icon: <FileCode size={40} />,
      title: "SaaS & Applications Cloud",
      description: "Conception d'applications métier en mode SaaS pour transformer votre idée en produit évolutif.",
      link: "/services/web/saas"
    },
    {
      icon: <Blocks size={40} />,
      title: "Développement No-Code/Low-Code",
      description: "Solutions rapides et économiques avec des plateformes comme Webflow, Bubble ou Adalo pour accélérer votre time-to-market.",
      link: "/services/web/nocode"
    },
    {
      icon: <BadgeCheck size={40} />,
      title: "Audits Techniques & Optimisation",
      description: "Analyse approfondie de vos plateformes existantes pour améliorer les performances et la sécurité.",
      link: "/services/web/audit"
    },
  ];

  // Marketing services
  const marketingServices = [
    {
      icon: <LineChart size={40} />,
      title: "SEO/SEA/SMO Avancé",
      description: "Optimisation multi-canaux pour améliorer votre visibilité sur les moteurs de recherche et réseaux sociaux.",
      link: "/services/marketing/seo"
    },
    {
      icon: <Rocket size={40} />,
      title: "Growth Hacking & Acquisition",
      description: "Stratégies innovantes pour accélérer votre croissance avec un budget optimisé et des résultats rapides.",
      link: "/services/marketing/growth"
    },
    {
      icon: <Share2 size={40} />,
      title: "Social Media Marketing",
      description: "Gestion professionnelle de vos réseaux sociaux et campagnes publicitaires pour maximiser votre engagement.",
      link: "/services/marketing/social"
    },
    {
      icon: <Zap size={40} />,
      title: "Tunnels de Vente Optimisés",
      description: "Création de parcours d'achat stratégiques pour convertir vos visiteurs en clients fidèles.",
      link: "/services/marketing/funnels"
    },
    {
      icon: <Layout size={40} />,
      title: "Content Marketing & Storytelling",
      description: "Production de contenu stratégique et narratif pour engager votre audience et renforcer votre autorité.",
      link: "/services/marketing/content"
    },
    {
      icon: <BookOpen size={40} />,
      title: "Formation & Coaching Marketing",
      description: "Programmes de formation personnalisés pour renforcer les compétences digitales de votre équipe.",
      link: "/services/marketing/training"
    },
  ];

  // Consulting services
  const consultingServices = [
    {
      icon: <Globe size={40} />,
      title: "E-Gouvernance & Services Publics",
      description: "Conseils et implémentation de solutions numériques pour moderniser les services gouvernementaux Africains.",
      link: "/services/consulting/e-governance"
    },
    {
      icon: <Palette size={40} />,
      title: "Transformation Digitale",
      description: "Accompagnement stratégique pour digitaliser vos processus et adapter votre entreprise aux enjeux du numérique.",
      link: "/services/consulting/digital-transformation"
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Innovation & R&D Numérique",
      description: "Exploration des technologies émergentes et développement de prototypes innovants pour votre entreprise.",
      link: "/services/consulting/innovation"
    },
    {
      icon: <Users size={40} />,
      title: "Formation Executive Digital",
      description: "Programmes sur mesure pour les dirigeants Africains souhaitant maîtriser les enjeux de la révolution numérique.",
      link: "/services/consulting/executive-training"
    },
    {
      icon: <Layout size={40} />,
      title: "Stratégie Data & IA",
      description: "Élaboration de feuilles de route pour valoriser vos données et implémenter l'IA dans votre organisation.",
      link: "/services/consulting/data-strategy"
    },
    {
      icon: <Blocks size={40} />,
      title: "Écosystème Tech Africain",
      description: "Conseils pour naviguer et tirer parti de l'écosystème technologique Africain en pleine expansion.",
      link: "/services/consulting/african-tech"
    },
  ];

  const allCategoriesMap: {
    [key: string]: Array<{
      icon: JSX.Element;
      title: string;
      description: string;
      link: string;
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

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Services</h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Des solutions numériques innovantes pour propulser votre entreprise vers de nouveaux sommets
          </p>
        </div>

        <Tabs defaultValue="featured" value={selectedCategory} onValueChange={handleCategoryChange} className="w-full mb-12">
          <div className="flex justify-center mb-8 overflow-x-auto pb-2">
            <TabsList className="bg-muted/50 flex-nowrap">
              <TabsTrigger 
                value="featured" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white px-4"
                onClick={() => handleCategoryChange("featured")}
              >
                Services Phares
              </TabsTrigger>
              <TabsTrigger 
                value="ai" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white px-4"
                onClick={() => handleCategoryChange("ai")}
              >
                Intelligence Artificielle
              </TabsTrigger>
              <TabsTrigger 
                value="web" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white px-4"
                onClick={() => handleCategoryChange("web")}
              >
                Web & Mobile
              </TabsTrigger>
              <TabsTrigger 
                value="marketing" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white px-4"
                onClick={() => handleCategoryChange("marketing")}
              >
                Marketing Digital
              </TabsTrigger>
              <TabsTrigger 
                value="consulting" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white px-4"
                onClick={() => handleCategoryChange("consulting")}
              >
                Consulting
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.keys(allCategoriesMap).map((category) => (
            <TabsContent key={category} value={category} className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allCategoriesMap[category].map((service, index) => (
                  <Card key={index} className="service-card border-gradient border-gradient-light overflow-hidden group">
                    <CardHeader className="pb-0">
                      <div className="text-primary group-hover:text-secondary transition-colors duration-300">
                        {service.icon}
                      </div>
                      <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-primary group">
                        <Link to={service.link} className="flex items-center">
                          En savoir plus
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-lg mb-6 text-muted-foreground">Découvrez plus de 100 services personnalisables pour répondre à vos besoins spécifiques</p>
          <Button size="lg" className="bg-gradient-primary hover:opacity-90">
            <Link to="/services">Explorer tous les services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
