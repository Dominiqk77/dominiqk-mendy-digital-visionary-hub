
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Globe, Palette, Lightbulb, Users, Layout, Blocks, Target, Award, FileText, BookOpen, Rocket, Headphones, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import EnhancedSpaceBackground from '@/components/space/EnhancedSpaceBackground';

// Consulting space background animation component with enhanced space effects
const ConsultingSpaceBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Abstract connections representing strategy networks */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {Array.from({ length: 12 }).map((_, i) => {
          const startX = Math.random() * 100;
          const startY = Math.random() * 100;
          const endX = Math.random() * 100;
          const endY = Math.random() * 100;
          const midX1 = startX + (Math.random() * 20 - 10);
          const midY1 = startY + (Math.random() * 20 - 10);
          const midX2 = endX + (Math.random() * 20 - 10);
          const midY2 = endY + (Math.random() * 20 - 10);
          
          return (
            <motion.path 
              key={i}
              d={`M${startX},${startY} C${midX1},${midY1} ${midX2},${midY2} ${endX},${endY}`}
              stroke={i % 2 === 0 ? "rgba(155, 135, 245, 0.2)" : "rgba(14, 165, 233, 0.2)"}
              strokeWidth={i % 3 === 0 ? "3" : "2"}
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3 + (i % 3), repeat: Infinity, repeatType: "loop", delay: i * 0.3, repeatDelay: 1 }}
            />
          );
        })}
      </svg>
      
      {/* Space particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            background: 'white',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      {/* Strategic thinking bubbles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`thought-${i}`}
          className="absolute bg-black/30 backdrop-blur-md rounded-lg border border-white/10 p-3 shadow-cosmic"
          style={{
            width: `${140 + (i * 20)}px`,
            left: `${10 + (i * 15)}%`,
            top: `${15 + (i * 12)}%`,
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            y: [-5, 5, -5]
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: i * 0.8
          }}
        >
          <div className="w-full h-3 bg-gradient-to-r from-portfolio-purple/30 to-portfolio-blue/30 rounded-full mb-2"></div>
          <div className="flex justify-between items-center mb-1">
            <div className="w-1/2 h-2 bg-white/20 rounded-full"></div>
            <div className="w-5 h-5 rounded-full bg-portfolio-purple/30"></div>
          </div>
          <div className="w-3/4 h-2 bg-white/15 rounded-full"></div>
          
          {/* Strategy diagram */}
          <div className="mt-3 flex items-center justify-center">
            {i % 3 === 0 ? (
              <svg viewBox="0 0 60 30" width="60" height="30">
                <rect x="5" y="5" width="20" height="20" fill="rgba(155, 135, 245, 0.2)" rx="2" />
                <rect x="35" y="5" width="20" height="20" fill="rgba(14, 165, 233, 0.2)" rx="2" />
                <motion.path 
                  d="M25,15 L35,15" 
                  stroke="rgba(255,255,255,0.3)" 
                  strokeWidth="1" 
                  strokeDasharray="3,3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "loop", delay: i * 0.2 }}
                />
              </svg>
            ) : i % 3 === 1 ? (
              <svg viewBox="0 0 60 40" width="60" height="40">
                <circle cx="30" cy="20" r="15" fill="rgba(155, 135, 245, 0.1)" stroke="rgba(155, 135, 245, 0.3)" strokeWidth="1" />
                <motion.circle 
                  cx="30" 
                  cy="20" 
                  r="10" 
                  fill="none" 
                  stroke="rgba(14, 165, 233, 0.3)" 
                  strokeWidth="1" 
                  strokeDasharray="3,3"
                  initial={{ rotateZ: 0 }}
                  animate={{ rotateZ: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
              </svg>
            ) : (
              <svg viewBox="0 0 60 40" width="60" height="40">
                <motion.path 
                  d="M10,30 L30,10 L50,30" 
                  stroke="rgba(217, 70, 239, 0.3)" 
                  strokeWidth="2" 
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", delay: i * 0.1 }}
                />
                <circle cx="10" cy="30" r="3" fill="rgba(155, 135, 245, 0.3)" />
                <circle cx="30" cy="10" r="3" fill="rgba(14, 165, 233, 0.3)" />
                <circle cx="50" cy="30" r="3" fill="rgba(217, 70, 239, 0.3)" />
              </svg>
            )}
          </div>
        </motion.div>
      ))}
      
      {/* Dynamic orbs representing strategic nodes */}
      {Array.from({ length: 12 }).map((_, i) => {
        const size = 10 + (i % 3) * 8;
        return (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full shadow-cosmic-lg"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              background: i % 3 === 0 ? 'rgba(155, 135, 245, 0.3)' : 
                        i % 3 === 1 ? 'rgba(14, 165, 233, 0.3)' : 
                        'rgba(217, 70, 239, 0.3)',
              right: `${5 + (i * 8)}%`,
              bottom: `${10 + (i * 6)}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              boxShadow: [
                '0 0 0 rgba(155, 135, 245, 0)',
                '0 0 10px rgba(155, 135, 245, 0.5)',
                '0 0 0 rgba(155, 135, 245, 0)'
              ]
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        );
      })}
    </div>
  );
};

const ConsultingServices = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Consulting Stratégique Digital | Dominique Mendy | Consultant Tech International';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Services de consulting stratégique par Dominique Mendy: transformation digitale, e-gouvernance, innovation et stratégie tech pour institutions et entreprises en France, UK, USA et Afrique.'
      );
    }
    
    // Set meta keywords for SEO
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 
        'consulting digital Sénégal, e-gouvernance Afrique, transformation numérique, innovation technologique, stratégie digitale, conseil tech entreprise, Dominique Mendy consultant, expert numérique international'
      );
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Consulting service categories
  const consultingCategories = [
    { id: "all", name: "Tous les services" },
    { id: "strategy", name: "Stratégie" },
    { id: "government", name: "E-Gouvernance" },
    { id: "innovation", name: "Innovation" },
    { id: "training", name: "Formation" }
  ];

  // Comprehensive consulting services
  const consultingServices = [
    {
      icon: <Globe size={40} />,
      title: "E-Gouvernance & Services Publics",
      description: "Conseils et implémentation de solutions numériques pour moderniser les services gouvernementaux africains et créer des administrations plus transparentes et efficientes.",
      features: ["Transformation numérique des administrations", "Dématérialisation des procédures", "Open data et transparence", "Formation des fonctionnaires"],
      price: "À partir de 5M FCFA",
      category: "government",
      gradient: "from-emerald-600 to-teal-400"
    },
    {
      icon: <Palette size={40} />,
      title: "Transformation Digitale",
      description: "Accompagnement stratégique pour digitaliser vos processus et adapter votre entreprise aux enjeux du numérique. Approche centrée sur les résultats business et l'humain.",
      features: ["Diagnostic de maturité numérique", "Roadmap de transformation", "Accompagnement au changement", "Mesure d'impact"],
      price: "À partir de 3M FCFA",
      category: "strategy",
      gradient: "from-blue-600 to-cyan-400"
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Innovation & R&D Numérique",
      description: "Exploration des technologies émergentes et développement de prototypes innovants pour votre entreprise. Approche d'innovation ouverte et collaborative.",
      features: ["Veille technologique avancée", "Création de labs d'innovation", "Développement de POCs", "Open innovation"],
      price: "À partir de 2.5M FCFA",
      category: "innovation",
      gradient: "from-amber-500 to-yellow-300"
    },
    {
      icon: <Users size={40} />,
      title: "Formation Executive Digital",
      description: "Programmes sur mesure pour les dirigeants africains souhaitant maîtriser les enjeux de la révolution numérique et transformer leurs organisations.",
      features: ["Masterclass innovation", "Learning expeditions", "Digital leadership", "Workshops pratiques"],
      price: "À partir de 1.5M FCFA/session",
      category: "training",
      gradient: "from-rose-500 to-orange-400"
    },
    {
      icon: <Layout size={40} />,
      title: "Stratégie Data & IA",
      description: "Élaboration de feuilles de route pour valoriser vos données et implémenter l'IA dans votre organisation de façon éthique et pragmatique.",
      features: ["Gouvernance des données", "Use cases IA à impact", "Éthique et conformité", "Architecture data"],
      price: "À partir de 3M FCFA",
      category: "strategy",
      gradient: "from-indigo-600 to-violet-400"
    },
    {
      icon: <Blocks size={40} />,
      title: "Écosystème Tech Africain",
      description: "Conseils pour naviguer et tirer parti de l'écosystème technologique africain en pleine expansion, développer des partenariats et accélérer votre croissance.",
      features: ["Cartographie écosystème", "Identification partenaires", "Accès aux financements", "Go-to-market stratégique"],
      price: "À partir de 1.8M FCFA",
      category: "strategy",
      gradient: "from-purple-700 to-pink-400"
    },
    {
      icon: <Target size={40} />,
      title: "Audit Digital & Technologique",
      description: "Analyse approfondie de votre maturité digitale et recommandations stratégiques personnalisées pour une évolution progressive et maîtrisée.",
      features: ["Assessment technologique", "Benchmark concurrentiel", "Gap analysis", "Recommandations priorisées"],
      price: "À partir de 2M FCFA",
      category: "strategy",
      gradient: "from-teal-500 to-green-400"
    },
    {
      icon: <Award size={40} />,
      title: "Mentorat & Coaching Numérique",
      description: "Accompagnement personnalisé des leaders pour développer une vision et des compétences digitales adaptées aux enjeux de votre secteur et organisation.",
      features: ["Sessions one-to-one", "Plan de développement", "Coaching situationnel", "Suivi d'objectifs"],
      price: "À partir de 1M FCFA/mois",
      category: "training",
      gradient: "from-sky-500 to-blue-400"
    },
    {
      icon: <FileText size={40} />,
      title: "Stratégie & Gouvernance Numérique",
      description: "Définition et mise en œuvre de politiques et processus de gouvernance numérique adaptés pour sécuriser et rentabiliser vos investissements tech.",
      features: ["Comitologie et processus", "Gestion de portefeuille", "Mesure ROI tech", "IT governance"],
      price: "À partir de 3.5M FCFA",
      category: "strategy",
      gradient: "from-purple-500 to-indigo-400"
    },
    {
      icon: <BookOpen size={40} />,
      title: "Recherche & Publications Tech",
      description: "Études et publications spécialisées sur les tendances technologiques et leur impact en Afrique pour positionner votre organisation comme thought leader.",
      features: ["White papers sectoriels", "Études de marché tech", "Rapports de tendances", "Content marketing avancé"],
      price: "À partir de 2.5M FCFA",
      category: "innovation",
      gradient: "from-orange-500 to-amber-300"
    },
    {
      icon: <Rocket size={40} />,
      title: "Accompagnement Startups Tech",
      description: "Support stratégique pour les startups africaines: business model, levée de fonds, scaling et développement commercial en Afrique et à l'international.",
      features: ["Refinement business model", "Pitch deck & fundraising", "Scaling strategy", "Market expansion"],
      price: "À partir de 1.2M FCFA",
      category: "innovation",
      gradient: "from-red-500 to-orange-400"
    },
    {
      icon: <Headphones size={40} />,
      title: "Conférences & Keynotes Tech",
      description: "Interventions inspirantes lors d'événements sur l'innovation, l'IA et la transformation digitale en Afrique et à l'international.",
      features: ["Keynotes personnalisés", "Panels d'experts", "Animation ateliers", "Webinars thématiques"],
      price: "À partir de 500K FCFA/intervention",
      category: "training",
      gradient: "from-cyan-500 to-blue-400"
    }
  ];

  // Success cases
  const successCases = [
    {
      title: "Transformation E-Gouvernance",
      client: "Ministère Africain",
      results: "Réduction de 70% des délais administratifs",
      description: "Implémentation d'une stratégie nationale de numérisation des services publics avec formation de 120+ fonctionnaires et mise en place d'une roadmap de transformation sur 3 ans.",
      image: "/case-studies/e-governance.jpg",
      gradient: "from-emerald-600 to-teal-400"
    },
    {
      title: "Innovation Lab Corporate",
      client: "Groupe Bancaire International",
      results: "5 nouveaux produits digitaux lancés en 18 mois",
      description: "Création et accompagnement d'un laboratoire d'innovation interne, avec méthodologies agiles et connexion à l'écosystème startup africain et international.",
      image: "/case-studies/innovation-lab.jpg",
      gradient: "from-blue-600 to-indigo-400"
    },
    {
      title: "Digital Leadership Program",
      client: "Conglomérat Multinational",
      results: "Transformation culturelle et +30% d'initiatives digitales",
      description: "Programme de formation digital leadership pour 25 cadres dirigeants, incluant learning expedition dans des hubs technologiques et coaching personnalisé.",
      image: "/case-studies/leadership.jpg",
      gradient: "from-purple-500 to-pink-400"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col relative bg-portfolio-deepspace text-white overflow-hidden">
      <Navbar />
      
      {/* Enhanced Space Background */}
      <EnhancedSpaceBackground />
      
      {/* Consulting space background with strategic elements */}
      <ConsultingSpaceBackground />
      
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Consulting <span className="bg-gradient-to-r from-portfolio-purple via-portfolio-blue to-portfolio-nebula bg-clip-text text-transparent">Stratégique</span> Digital
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Accompagnement expert pour votre transformation digitale, innovation technologique et excellence opérationnelle en Afrique et à l'international
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue hover:opacity-90 shadow-cosmic" asChild>
                    <Link to="/contact">
                      Consultation stratégique
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10" asChild>
                    <Link to="/expertise">
                      Découvrir notre expertise
                    </Link>
                  </Button>
                </div>
              </motion.div>
              
              {/* Value Proposition Blocks */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                {[
                  { 
                    title: "Vision Stratégique", 
                    description: "Conseil personnalisé pour transformer votre vision en réalité numérique",
                    icon: <Lightbulb size={28} />,
                    color: "blue",
                    gradient: "from-blue-600 to-cyan-400"
                  },
                  { 
                    title: "Excellence Opérationnelle", 
                    description: "Optimisation des processus et implémentation de solutions tech efficaces",
                    icon: <Target size={28} />,
                    color: "purple",
                    gradient: "from-purple-600 to-pink-400"
                  },
                  { 
                    title: "Innovation Durable", 
                    description: "Création d'avantages compétitifs durables par l'innovation technologique",
                    icon: <Rocket size={28} />,
                    color: "pink",
                    gradient: "from-pink-500 to-rose-400"
                  }
                ].map((block, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-6 overflow-hidden relative hover:shadow-cosmic transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + (idx * 0.2) }}
                  >
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${block.gradient} opacity-10`}></div>
                    
                    {/* Background glow */}
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-portfolio-purple opacity-10 blur-3xl"></div>
                    
                    <div className="relative z-10">
                      <div className={`bg-gradient-to-br ${block.gradient} w-12 h-12 flex items-center justify-center rounded-lg shadow-lg mb-4 text-white`}>
                        {block.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">{block.title}</h3>
                      <p className="text-gray-300">{block.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Tabs Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Nos Services de Consulting</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-portfolio-purple to-portfolio-blue mx-auto mb-6"></div>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Des services de conseil stratégique pour vous accompagner dans toutes les étapes de votre transformation numérique et maximiser votre impact
              </p>
              
              <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-4xl mx-auto">
                <TabsList className="w-full flex flex-wrap justify-center bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-1 mb-10">
                  {consultingCategories.map(cat => (
                    <TabsTrigger 
                      key={cat.id} 
                      value={cat.id} 
                      className="flex-grow data-[state=active]:bg-gradient-to-r data-[state=active]:from-portfolio-purple data-[state=active]:to-portfolio-blue data-[state=active]:text-white rounded-md text-gray-300"
                    >
                      {cat.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {consultingCategories.map(category => (
                  <TabsContent key={category.id} value={category.id} className="mt-6 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {consultingServices
                        .filter(service => category.id === 'all' || service.category === category.id)
                        .map((service, idx) => (
                          <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group"
                          >
                            <Card className="h-full flex flex-col bg-black/40 backdrop-blur-md border border-white/10 overflow-hidden cosmic-hover relative">
                              {/* Gradient overlay */}
                              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                              
                              {/* Glowing border on hover */}
                              <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-white/30 group-hover:shadow-cosmic transition-all duration-300"></div>
                              
                              {/* Content */}
                              <div className="relative z-10 flex flex-col h-full">
                                <CardHeader>
                                  <div className={`text-white bg-gradient-to-br ${service.gradient} p-3 rounded-xl w-16 h-16 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {service.icon}
                                  </div>
                                  <CardTitle className="text-white">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                  <p className="text-gray-300 mb-4">{service.description}</p>
                                  <ul className="space-y-2 mb-4">
                                    {service.features.map((feature, i) => (
                                      <li key={i} className="flex items-start gap-2">
                                        <div className="text-portfolio-purple mt-1">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 6L9 17l-5-5"></path>
                                          </svg>
                                        </div>
                                        <span className="text-sm text-gray-300">{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                  <p className="text-sm font-medium text-portfolio-purple">{service.price}</p>
                                </CardContent>
                                <CardFooter>
                                  <Button variant="ghost" className="w-full justify-between hover:bg-white/10 text-white group" asChild>
                                    <Link to="/contact">
                                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-blue to-portfolio-purple group-hover:text-white transition-colors">En savoir plus</span>
                                      <ArrowRight size={16} className="text-portfolio-purple group-hover:translate-x-1 transition-transform" />
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
            </div>
          </div>
        </section>
        
        {/* Methodology Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Notre Méthodologie</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-portfolio-purple to-portfolio-blue mx-auto mb-6"></div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Une approche consultative structurée et centrée sur vos objectifs business et la création de valeur durable
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 relative">
                {/* Connection lines between phases */}
                <div className="absolute hidden md:block top-20 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-portfolio-purple to-portfolio-blue z-0"></div>
                
                {[
                  {
                    phase: "Phase 1",
                    title: "Diagnostic & Vision",
                    description: "Analyse approfondie de votre situation actuelle, identification des enjeux clés et définition d'une vision stratégique partagée.",
                    steps: ["Analyse de maturité digitale", "Benchmark sectoriel", "Identification des opportunités", "Définition des objectifs"],
                    icon: <Target size={40} />,
                    gradient: "from-blue-600 to-cyan-400"
                  },
                  {
                    phase: "Phase 2",
                    title: "Stratégie & Roadmap",
                    description: "Élaboration d'une stratégie digitale alignée avec vos objectifs business et d'une feuille de route opérationnelle.",
                    steps: ["Définition des axes stratégiques", "Priorisation des initiatives", "Allocation des ressources", "Governance model"],
                    icon: <Layout size={40} />,
                    gradient: "from-purple-600 to-violet-400"
                  },
                  {
                    phase: "Phase 3",
                    title: "Exécution & Suivi",
                    description: "Accompagnement dans l'implémentation, renforcement des capacités internes et mesure d'impact continue.",
                    steps: ["Implémentation des solutions", "Change management", "Coaching des équipes", "Évaluation des résultats"],
                    icon: <Rocket size={40} />,
                    gradient: "from-pink-500 to-rose-400"
                  }
                ].map((phase, idx) => (
                  <motion.div
                    key={phase.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    className="flex flex-col items-center relative z-10"
                  >
                    <div className={`relative w-20 h-20 bg-gradient-to-br ${phase.gradient} rounded-full flex items-center justify-center mb-6 shadow-cosmic-lg`}>
                      <div className="text-white">
                        {phase.icon}
                      </div>
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-to-br from-portfolio-purple to-portfolio-blue text-white flex items-center justify-center text-sm font-bold shadow-cosmic">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="text-center bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-6 h-full w-full">
                      <div className="text-sm font-medium text-portfolio-purple mb-1">{phase.phase}</div>
                      <h3 className="text-xl font-bold mb-3 text-white">{phase.title}</h3>
                      <p className="text-gray-300 mb-4">{phase.description}</p>
                      <ul className="space-y-2 text-left">
                        {phase.steps.map((step, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="text-portfolio-purple mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 6L9 17l-5-5"></path>
                              </svg>
                            </div>
                            <span className="text-sm text-gray-300">{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Continuous Improvement Cycle */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-black/40 backdrop-blur-xl p-10 rounded-2xl border border-white/10 text-center relative overflow-hidden"
              >
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-portfolio-deepspace via-portfolio-space to-portfolio-deepspace opacity-70"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-portfolio-purple opacity-10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-portfolio-blue opacity-10 blur-3xl rounded-full"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-white">Cycle d'Amélioration Continue</h3>
                  <p className="text-gray-300 mb-10 max-w-3xl mx-auto">
                    Notre approche intègre un cycle d'amélioration continue pour assurer l'évolution et l'adaptation de votre stratégie digitale
                  </p>
                  
                  <div className="relative w-64 h-64 mx-auto">
                    {/* Outer rotating circle */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-4 border-dashed border-portfolio-purple/30"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    ></motion.div>
                    
                    {/* Inner cycle elements */}
                    {['Mesurer', 'Analyser', 'Ajuster', 'Implémenter'].map((step, idx) => {
                      const angle = (idx * 90) * (Math.PI / 180);
                      const x = Math.cos(angle) * 85;
                      const y = Math.sin(angle) * 85;
                      
                      return (
                        <motion.div
                          key={step}
                          className="absolute w-16 h-16 bg-black/70 backdrop-blur-xl border border-white/20 rounded-full shadow-cosmic flex items-center justify-center"
                          style={{
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                            transform: "translate(-50%, -50%)",
                          }}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                          whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(155, 135, 245, 0.5)" }}
                        >
                          <div className="text-center">
                            <div className="text-xs font-medium text-portfolio-purple">{step}</div>
                          </div>
                        </motion.div>
                      );
                    })}
                    
                    {/* Center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-28 h-28 rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-blue flex items-center justify-center text-white font-bold shadow-cosmic-lg"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        Excellence<br/>Continue
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Success Cases Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Cas de Succès</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-portfolio-purple to-portfolio-blue mx-auto mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Des transformations réussies pour des organisations à travers l'Afrique et l'Europe
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {successCases.map((case_, idx) => (
                <motion.div
                  key={case_.title}
                  className="bg-black/40 backdrop-blur-xl rounded-xl overflow-hidden border border-white/10 shadow-md relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${case_.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <div className="w-full h-48 relative">
                    <AspectRatio ratio={16/9}>
                      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple/30 to-portfolio-blue/30 flex items-center justify-center group-hover:from-portfolio-purple/40 group-hover:to-portfolio-blue/40 transition-colors">
                        <motion.div 
                          className="text-6xl font-bold text-white opacity-80"
                          animate={{ rotate: [0, 5, 0, -5, 0], scale: [1, 1.05, 1, 1.05, 1] }}
                          transition={{ duration: 6, repeat: Infinity }}
                        >
                          {case_.title.substring(0, 1)}
                        </motion.div>
                      </div>
                    </AspectRatio>
                    <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-portfolio-purple border border-portfolio-purple/30 shadow-cosmic">
                      {case_.client}
                    </div>
                  </div>
                  <div className="p-6 relative z-10">
                    <h3 className="text-xl font-bold mb-2 text-white">{case_.title}</h3>
                    <div className="bg-portfolio-purple/20 text-portfolio-purple px-3 py-1 rounded-full text-sm font-medium inline-block mb-3 border border-portfolio-purple/30">
                      {case_.results}
                    </div>
                    <p className="text-gray-300">{case_.description}</p>
                  </div>
                  
                  {/* Glowing effect on hover */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ 
                      boxShadow: ["0 0 0px rgba(155, 135, 245, 0)", "0 0 15px rgba(155, 135, 245, 0.3)", "0 0 0px rgba(155, 135, 245, 0)"] 
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  ></motion.div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue hover:opacity-90 shadow-cosmic" asChild>
                <Link to="/portfolio">
                  Voir tous nos cas clients
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Expertise Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Notre Expertise Internationale</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-portfolio-purple to-portfolio-blue mx-auto mb-6"></div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Une perspective globale avec une compréhension approfondie des contextes locaux
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {[
                  {
                    region: "Afrique",
                    description: "Expertise approfondie des marchés africains et de leurs spécificités, avec une compréhension des enjeux de développement et d'innovation propres au continent.",
                    countries: ["Sénégal", "Côte d'Ivoire", "Nigeria", "Maroc", "Kenya"],
                    expertise: ["E-gouvernance et services publics", "Transformation digitale des institutions", "Inclusion financière et mobile money", "Formation tech leadership"],
                    gradient: "from-purple-600 to-indigo-400"
                  },
                  {
                    region: "Europe",
                    description: "Connaissance des standards européens et des meilleures pratiques en matière de transformation digitale et d'innovation technologique.",
                    countries: ["France", "Royaume-Uni", "Allemagne", "Portugal"],
                    expertise: ["Stratégie d'innovation corporate", "Digitalisation des processus métier", "Conformité RGPD/cybersécurité", "Création de centres R&D"],
                    gradient: "from-blue-600 to-cyan-400"
                  }
                ].map((region, idx) => (
                  <motion.div
                    key={region.region}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-xl p-8 relative hover:shadow-cosmic transition-all duration-300 overflow-hidden"
                  >
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${region.gradient} opacity-10`}></div>
                    
                    {/* Background glow */}
                    <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-portfolio-purple opacity-10 blur-3xl"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${region.gradient} flex items-center justify-center text-white font-bold shadow-cosmic`}>
                          {region.region.substring(0, 1)}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{region.region}</h3>
                      </div>
                      
                      <p className="text-gray-300 mb-6">{region.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-bold mb-2 text-portfolio-purple">Pays clés</h4>
                        <div className="flex flex-wrap gap-2">
                          {region.countries.map(country => (
                            <span key={country} className="inline-block bg-black/30 border border-white/10 px-3 py-1 rounded-full text-sm text-white">
                              {country}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-bold mb-2 text-portfolio-purple">Expertises spécifiques</h4>
                        <ul className="space-y-2">
                          {region.expertise.map((exp, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="text-portfolio-purple mt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                              </div>
                              <span className="text-gray-300">{exp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Global approach */}
              <motion.div
                className="mt-16 p-8 md:p-12 bg-black/50 backdrop-blur-xl border border-white/10 text-white rounded-2xl relative overflow-hidden shadow-cosmic"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Abstract shapes */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-portfolio-purple opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-portfolio-blue opacity-20 blur-3xl rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient-cosmic">Approche Globale, Impact Local</h3>
                    <p className="text-gray-300 max-w-3xl mx-auto">
                      Notre capacité à combiner les meilleures pratiques internationales avec une compréhension approfondie des réalités locales 
                      nous permet de créer des stratégies véritablement adaptées à votre contexte spécifique.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Standards Globaux",
                        description: "Application des meilleures pratiques internationales adaptées à votre contexte",
                        icon: <Globe size={28} />,
                        gradient: "from-blue-600 to-cyan-400"
                      },
                      {
                        title: "Adaptation Locale",
                        description: "Solutions tenant compte des spécificités et contraintes des marchés locaux",
                        icon: <Target size={28} />,
                        gradient: "from-purple-600 to-violet-400"
                      },
                      {
                        title: "Transfert de Compétences",
                        description: "Renforcement des capacités locales pour une autonomie durable",
                        icon: <Users size={28} />,
                        gradient: "from-pink-600 to-rose-400"
                      }
                    ].map((item, idx) => (
                      <motion.div 
                        key={idx} 
                        className="bg-black/30 backdrop-blur-xl rounded-lg p-6 border border-white/10 relative overflow-hidden hover:shadow-cosmic transition-all duration-300"
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                      >
                        {/* Gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-10`}></div>
                        
                        <div className="relative z-10">
                          <div className={`bg-gradient-to-r ${item.gradient} w-12 h-12 flex items-center justify-center rounded-lg shadow-lg text-white mb-4`}>
                            {item.icon}
                          </div>
                          <h4 className="text-lg font-bold mb-2 text-white">{item.title}</h4>
                          <p className="text-gray-300 text-sm">{item.description}</p>
                        </div>
                        
                        {/* Corner decorations */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/10 opacity-50 rounded-tl-lg"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/10 opacity-50 rounded-br-lg"></div>
                      </motion.div>
                    ))}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Questions Fréquentes</h2>
                <div className="h-1 w-24 bg-gradient-to-r from-portfolio-purple to-portfolio-blue mx-auto mb-6"></div>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    question: "Comment se déroule une mission de consulting avec vous ?",
                    answer: "Chaque mission commence par une phase de cadrage pour comprendre précisément vos besoins et objectifs. Nous élaborons ensuite une proposition détaillée avec périmètre, méthodologie, livrables et planning. Après validation, nous entamons la mission selon les phases définies, avec des points d'avancement réguliers et des livrables intermédiaires. Un transfert de compétences est systématiquement inclus pour assurer l'autonomie de vos équipes."
                  },
                  {
                    question: "Quels types d'organisations accompagnez-vous ?",
                    answer: "Nous accompagnons une grande diversité d'organisations: entreprises privées (de la startup à la multinationale), institutions gouvernementales (ministères, agences publiques), organisations internationales (ONU, Banque Mondiale), et ONGs. Notre approche est adaptée à chaque type d'organisation, en tenant compte de ses spécificités, de sa culture et de ses contraintes."
                  },
                  {
                    question: "Comment assurez-vous le succès des projets de transformation digitale ?",
                    answer: "Notre approche combine trois facteurs clés de succès: 1) Une méthode éprouvée d'accompagnement au changement qui intègre les dimensions humaines et organisationnelles, 2) Un focus sur les quick wins pour créer une dynamique positive dès le début, et 3) Un transfert de compétences systématique pour développer l'autonomie des équipes internes. Nous mesurons également les résultats de façon continue pour ajuster la stratégie si nécessaire."
                  },
                  {
                    question: "Comment gérez-vous les projets impliquant plusieurs pays ?",
                    answer: "Pour les projets multi-pays, nous utilisons une approche hybride: une équipe centrale pour assurer la cohérence globale, complétée par des experts locaux connaissant les spécificités de chaque marché. Notre méthodologie permet de standardiser ce qui peut l'être tout en adaptant l'exécution aux contextes locaux. Nous utilisons également des outils collaboratifs permettant un travail efficace malgré les distances et les fuseaux horaires."
                  },
                  {
                    question: "Quelle est votre expertise spécifique en e-gouvernance pour l'Afrique ?",
                    answer: "Notre expertise en e-gouvernance pour l'Afrique repose sur: 1) Une connaissance approfondie des administrations africaines et de leurs défis spécifiques, 2) Une méthodologie adaptée aux contraintes locales (connectivité, électricité, alphabétisation numérique), 3) Une approche progressive et pragmatique pour digitaliser les services publics, et 4) Des partenariats avec des acteurs technologiques internationaux spécialisés dans l'e-gouvernance."
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="group"
                  >
                    <Card className="bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/30 hover:shadow-cosmic transition-all duration-300 overflow-hidden relative">
                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple/10 to-portfolio-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <CardHeader>
                        <CardTitle className="text-xl text-white flex items-center">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-blue mr-3 flex-shrink-0 flex items-center justify-center text-xs font-bold">
                            Q
                          </div>
                          {item.question}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 pl-9">{item.answer}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Button className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue hover:opacity-90 shadow-cosmic text-white" size="lg" asChild>
                  <Link to="/contact">
                    Prendre rendez-vous pour une consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-black/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 shadow-cosmic">
              <div className="p-12 md:p-16 relative">
                {/* Background particles */}
                {Array.from({ length: 25 }).map((_, i) => (
                  <motion.div
                    key={`cta-particle-${i}`}
                    className="absolute rounded-full"
                    style={{
                      width: `${Math.random() * 4 + 1}px`,
                      height: `${Math.random() * 4 + 1}px`,
                      background: i % 2 === 0 ? '#9b87f5' : '#0EA5E9',
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 3,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
                
                {/* Background effects */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-portfolio-blue opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-portfolio-purple opacity-20 blur-3xl rounded-full"></div>
                
                <div className="relative z-10 text-center">
                  <motion.h2 
                    className="text-3xl md:text-4xl font-bold mb-6 text-gradient-cosmic"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                  >
                    Prêt à transformer votre organisation ?
                  </motion.h2>
                  <motion.p 
                    className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                  >
                    Prenez contact pour un échange stratégique sur vos défis et opportunités de transformation digitale.
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-wrap justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue hover:opacity-90 transition-opacity shadow-cosmic" 
                      asChild
                    >
                      <Link to="/contact">
                        Consultation stratégique
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-white/50 hover:bg-white/10 text-white" asChild>
                      <Link to="/services">
                        Explorer d'autres services
                      </Link>
                    </Button>
                  </motion.div>
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

export default ConsultingServices;
