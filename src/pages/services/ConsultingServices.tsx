
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

// Consulting space background animation component
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
              stroke={i % 2 === 0 ? "rgba(155, 135, 245, 0.1)" : "rgba(14, 165, 233, 0.1)"}
              strokeWidth={i % 3 === 0 ? "3" : "2"}
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3 + (i % 3), repeat: Infinity, repeatType: "loop", delay: i * 0.3, repeatDelay: 1 }}
            />
          );
        })}
      </svg>
      
      {/* Strategic thinking bubbles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`thought-${i}`}
          className="absolute bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-3"
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
          <div className="w-full h-3 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full mb-2"></div>
          <div className="flex justify-between items-center mb-1">
            <div className="w-1/2 h-2 bg-white/20 rounded-full"></div>
            <div className="w-5 h-5 rounded-full bg-purple-500/30"></div>
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
            className="absolute rounded-full"
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
      category: "government"
    },
    {
      icon: <Palette size={40} />,
      title: "Transformation Digitale",
      description: "Accompagnement stratégique pour digitaliser vos processus et adapter votre entreprise aux enjeux du numérique. Approche centrée sur les résultats business et l'humain.",
      features: ["Diagnostic de maturité numérique", "Roadmap de transformation", "Accompagnement au changement", "Mesure d'impact"],
      price: "À partir de 3M FCFA",
      category: "strategy"
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Innovation & R&D Numérique",
      description: "Exploration des technologies émergentes et développement de prototypes innovants pour votre entreprise. Approche d'innovation ouverte et collaborative.",
      features: ["Veille technologique avancée", "Création de labs d'innovation", "Développement de POCs", "Open innovation"],
      price: "À partir de 2.5M FCFA",
      category: "innovation"
    },
    {
      icon: <Users size={40} />,
      title: "Formation Executive Digital",
      description: "Programmes sur mesure pour les dirigeants africains souhaitant maîtriser les enjeux de la révolution numérique et transformer leurs organisations.",
      features: ["Masterclass innovation", "Learning expeditions", "Digital leadership", "Workshops pratiques"],
      price: "À partir de 1.5M FCFA/session",
      category: "training"
    },
    {
      icon: <Layout size={40} />,
      title: "Stratégie Data & IA",
      description: "Élaboration de feuilles de route pour valoriser vos données et implémenter l'IA dans votre organisation de façon éthique et pragmatique.",
      features: ["Gouvernance des données", "Use cases IA à impact", "Éthique et conformité", "Architecture data"],
      price: "À partir de 3M FCFA",
      category: "strategy"
    },
    {
      icon: <Blocks size={40} />,
      title: "Écosystème Tech Africain",
      description: "Conseils pour naviguer et tirer parti de l'écosystème technologique africain en pleine expansion, développer des partenariats et accélérer votre croissance.",
      features: ["Cartographie écosystème", "Identification partenaires", "Accès aux financements", "Go-to-market stratégique"],
      price: "À partir de 1.8M FCFA",
      category: "strategy"
    },
    {
      icon: <Target size={40} />,
      title: "Audit Digital & Technologique",
      description: "Analyse approfondie de votre maturité digitale et recommandations stratégiques personnalisées pour une évolution progressive et maîtrisée.",
      features: ["Assessment technologique", "Benchmark concurrentiel", "Gap analysis", "Recommandations priorisées"],
      price: "À partir de 2M FCFA",
      category: "strategy"
    },
    {
      icon: <Award size={40} />,
      title: "Mentorat & Coaching Numérique",
      description: "Accompagnement personnalisé des leaders pour développer une vision et des compétences digitales adaptées aux enjeux de votre secteur et organisation.",
      features: ["Sessions one-to-one", "Plan de développement", "Coaching situationnel", "Suivi d'objectifs"],
      price: "À partir de 1M FCFA/mois",
      category: "training"
    },
    {
      icon: <FileText size={40} />,
      title: "Stratégie & Gouvernance Numérique",
      description: "Définition et mise en œuvre de politiques et processus de gouvernance numérique adaptés pour sécuriser et rentabiliser vos investissements tech.",
      features: ["Comitologie et processus", "Gestion de portefeuille", "Mesure ROI tech", "IT governance"],
      price: "À partir de 3.5M FCFA",
      category: "strategy"
    },
    {
      icon: <BookOpen size={40} />,
      title: "Recherche & Publications Tech",
      description: "Études et publications spécialisées sur les tendances technologiques et leur impact en Afrique pour positionner votre organisation comme thought leader.",
      features: ["White papers sectoriels", "Études de marché tech", "Rapports de tendances", "Content marketing avancé"],
      price: "À partir de 2.5M FCFA",
      category: "innovation"
    },
    {
      icon: <Rocket size={40} />,
      title: "Accompagnement Startups Tech",
      description: "Support stratégique pour les startups africaines: business model, levée de fonds, scaling et développement commercial en Afrique et à l'international.",
      features: ["Refinement business model", "Pitch deck & fundraising", "Scaling strategy", "Market expansion"],
      price: "À partir de 1.2M FCFA",
      category: "innovation"
    },
    {
      icon: <Headphones size={40} />,
      title: "Conférences & Keynotes Tech",
      description: "Interventions inspirantes lors d'événements sur l'innovation, l'IA et la transformation digitale en Afrique et à l'international.",
      features: ["Keynotes personnalisés", "Panels d'experts", "Animation ateliers", "Webinars thématiques"],
      price: "À partir de 500K FCFA/intervention",
      category: "training"
    }
  ];

  // Success cases
  const successCases = [
    {
      title: "Transformation E-Gouvernance",
      client: "Ministère Africain",
      results: "Réduction de 70% des délais administratifs",
      description: "Implémentation d'une stratégie nationale de numérisation des services publics avec formation de 120+ fonctionnaires et mise en place d'une roadmap de transformation sur 3 ans.",
      image: "/case-studies/e-governance.jpg"
    },
    {
      title: "Innovation Lab Corporate",
      client: "Groupe Bancaire International",
      results: "5 nouveaux produits digitaux lancés en 18 mois",
      description: "Création et accompagnement d'un laboratoire d'innovation interne, avec méthodologies agiles et connexion à l'écosystème startup africain et international.",
      image: "/case-studies/innovation-lab.jpg"
    },
    {
      title: "Digital Leadership Program",
      client: "Conglomérat Multinational",
      results: "Transformation culturelle et +30% d'initiatives digitales",
      description: "Programme de formation digital leadership pour 25 cadres dirigeants, incluant learning expedition dans des hubs technologiques et coaching personnalisé.",
      image: "/case-studies/leadership.jpg"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      
      {/* Consulting space background with strategic elements */}
      <ConsultingSpaceBackground />
      
      <main className="flex-grow relative z-10">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center mb-12"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Consulting <span className="text-gradient">Stratégique</span> Digital
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Accompagnement expert pour votre transformation digitale, innovation technologique et excellence opérationnelle en Afrique et à l'international
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90" asChild>
                    <Link to="/contact">
                      Consultation stratégique
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white" asChild>
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
                    color: "blue"
                  },
                  { 
                    title: "Excellence Opérationnelle", 
                    description: "Optimisation des processus et implémentation de solutions tech efficaces",
                    icon: <Target size={28} />,
                    color: "purple"
                  },
                  { 
                    title: "Innovation Durable", 
                    description: "Création d'avantages compétitifs durables par l'innovation technologique",
                    icon: <Rocket size={28} />,
                    color: "pink"
                  }
                ].map((block, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + (idx * 0.2) }}
                  >
                    <div className={`text-${block.color}-500 mb-4`}>
                      {block.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{block.title}</h3>
                    <p className="text-gray-300">{block.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Tabs Section */}
        <section className="py-20 bg-gray-50 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services de Consulting</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
                Des services de conseil stratégique pour vous accompagner dans toutes les étapes de votre transformation numérique et maximiser votre impact
              </p>
              
              <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-4xl mx-auto">
                <TabsList className="w-full flex flex-wrap justify-center bg-gray-100 p-1 mb-10">
                  {consultingCategories.map(cat => (
                    <TabsTrigger key={cat.id} value={cat.id} className="flex-grow data-[state=active]:bg-white rounded-md">
                      {cat.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {consultingCategories.map(category => (
                  <TabsContent key={category.id} value={category.id} className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {consultingServices
                        .filter(service => category.id === 'all' || service.category === category.id)
                        .map((service, idx) => (
                          <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                          >
                            <Card className="h-full flex flex-col hover:border-primary/50 transition-colors">
                              <CardHeader>
                                <div className="text-primary mb-4">{service.icon}</div>
                                <CardTitle>{service.title}</CardTitle>
                              </CardHeader>
                              <CardContent className="flex-grow">
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <ul className="space-y-2 mb-4">
                                  {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <div className="text-primary mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                          <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                      </div>
                                      <span className="text-sm">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                                <p className="text-sm font-medium text-primary">{service.price}</p>
                              </CardContent>
                              <CardFooter>
                                <Button variant="ghost" className="w-full justify-between hover:bg-gray-100" asChild>
                                  <Link to="/contact">
                                    <span>En savoir plus</span>
                                    <ArrowRight size={16} />
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
            </div>
          </div>
        </section>
        
        {/* Methodology Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Méthodologie</h2>
                <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Une approche consultative structurée et centrée sur vos objectifs business et la création de valeur durable
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                {[
                  {
                    phase: "Phase 1",
                    title: "Diagnostic & Vision",
                    description: "Analyse approfondie de votre situation actuelle, identification des enjeux clés et définition d'une vision stratégique partagée.",
                    steps: ["Analyse de maturité digitale", "Benchmark sectoriel", "Identification des opportunités", "Définition des objectifs"],
                    icon: <Target size={40} />,
                    color: "blue"
                  },
                  {
                    phase: "Phase 2",
                    title: "Stratégie & Roadmap",
                    description: "Élaboration d'une stratégie digitale alignée avec vos objectifs business et d'une feuille de route opérationnelle.",
                    steps: ["Définition des axes stratégiques", "Priorisation des initiatives", "Allocation des ressources", "Governance model"],
                    icon: <Layout size={40} />,
                    color: "purple"
                  },
                  {
                    phase: "Phase 3",
                    title: "Exécution & Suivi",
                    description: "Accompagnement dans l'implémentation, renforcement des capacités internes et mesure d'impact continue.",
                    steps: ["Implémentation des solutions", "Change management", "Coaching des équipes", "Évaluation des résultats"],
                    icon: <Rocket size={40} />,
                    color: "pink"
                  }
                ].map((phase, idx) => (
                  <motion.div
                    key={phase.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    className="flex flex-col items-center"
                  >
                    <div className={`relative w-20 h-20 bg-${phase.color}-100 rounded-full flex items-center justify-center mb-6`}>
                      <div className={`text-${phase.color}-500`}>
                        {phase.icon}
                      </div>
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gradient-primary text-white flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-primary mb-1">{phase.phase}</div>
                      <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                      <p className="text-gray-600 mb-4">{phase.description}</p>
                      <ul className="space-y-2 text-left">
                        {phase.steps.map((step, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="text-primary mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 6L9 17l-5-5"></path>
                              </svg>
                            </div>
                            <span className="text-sm text-gray-600">{step}</span>
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
                className="bg-gray-50 p-10 rounded-2xl border border-gray-100 text-center"
              >
                <h3 className="text-xl font-bold mb-4">Cycle d'Amélioration Continue</h3>
                <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
                  Notre approche intègre un cycle d'amélioration continue pour assurer l'évolution et l'adaptation de votre stratégie digitale
                </p>
                
                <div className="relative w-64 h-64 mx-auto">
                  {/* Outer rotating circle */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-dashed border-purple-300/30"
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
                        className="absolute w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          transform: "translate(-50%, -50%)",
                        }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                      >
                        <div className="text-center">
                          <div className="text-xs font-medium text-primary">{step}</div>
                        </div>
                      </motion.div>
                    );
                  })}
                  
                  {/* Center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-28 h-28 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold shadow-lg"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      Excellence<br/>Continue
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Success Cases Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Cas de Succès</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Des transformations réussies pour des organisations à travers l'Afrique et l'Europe
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {successCases.map((case_, idx) => (
                <motion.div
                  key={case_.title}
                  className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="w-full h-48 relative">
                    <AspectRatio ratio={16/9}>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center">
                        <div className="text-4xl font-bold text-white">{case_.title.substring(0, 1)}</div>
                      </div>
                    </AspectRatio>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary">
                      {case_.client}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{case_.title}</h3>
                    <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium inline-block mb-3">
                      {case_.results}
                    </div>
                    <p className="text-gray-600">{case_.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link to="/portfolio">
                  Voir tous nos cas clients
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Expertise Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Expertise Internationale</h2>
                <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Une perspective globale avec une compréhension approfondie des contextes locaux
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {[
                  {
                    region: "Afrique",
                    description: "Expertise approfondie des marchés africains et de leurs spécificités, avec une compréhension des enjeux de développement et d'innovation propres au continent.",
                    countries: ["Sénégal", "Côte d'Ivoire", "Nigeria", "Maroc", "Kenya"],
                    expertise: ["E-gouvernance et services publics", "Transformation digitale des institutions", "Inclusion financière et mobile money", "Formation tech leadership"]
                  },
                  {
                    region: "Europe",
                    description: "Connaissance des standards européens et des meilleures pratiques en matière de transformation digitale et d'innovation technologique.",
                    countries: ["France", "Royaume-Uni", "Allemagne", "Portugal"],
                    expertise: ["Stratégie d'innovation corporate", "Digitalisation des processus métier", "Conformité RGPD/cybersécurité", "Création de centres R&D"]
                  }
                ].map((region, idx) => (
                  <motion.div
                    key={region.region}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                        {region.region.substring(0, 1)}
                      </div>
                      <h3 className="text-2xl font-bold">{region.region}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{region.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-bold mb-2 text-primary">Pays clés</h4>
                      <div className="flex flex-wrap gap-2">
                        {region.countries.map(country => (
                          <span key={country} className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm">
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold mb-2 text-primary">Expertises spécifiques</h4>
                      <ul className="space-y-2">
                        {region.expertise.map((exp, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="text-primary mt-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 6L9 17l-5-5"></path>
                              </svg>
                            </div>
                            <span className="text-gray-600">{exp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Global approach */}
              <motion.div
                className="mt-16 p-8 md:p-12 bg-gradient-to-r from-gray-900 to-black text-white rounded-2xl relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {/* Abstract shapes */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Approche Globale, Impact Local</h3>
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
                        icon: <Globe size={28} />
                      },
                      {
                        title: "Adaptation Locale",
                        description: "Solutions tenant compte des spécificités et contraintes des marchés locaux",
                        icon: <Target size={28} />
                      },
                      {
                        title: "Transfert de Compétences",
                        description: "Renforcement des capacités locales pour une autonomie durable",
                        icon: <Users size={28} />
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                        <div className="text-primary mb-4">{item.icon}</div>
                        <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                        <p className="text-gray-300 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions Fréquentes</h2>
                <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
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
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">{item.question}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{item.answer}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Button className="bg-gradient-primary hover:opacity-90" size="lg" asChild>
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
        <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-2xl overflow-hidden border border-white/10">
              <div className="p-12 md:p-16 relative">
                {/* Background effects */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
                
                <div className="relative z-10 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Prêt à transformer votre organisation ?
                  </h2>
                  <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                    Prenez contact pour un échange stratégique sur vos défis et opportunités de transformation digitale.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity" asChild>
                      <Link to="/contact">
                        Consultation stratégique
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-white/50 hover:bg-white/10" asChild>
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

export default ConsultingServices;
