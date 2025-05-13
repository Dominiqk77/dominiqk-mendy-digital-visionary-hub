
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BrainCircuit,
  Globe,
  LineChart,
  Building2,
  Code2,
  Layers,
  Rocket,
  Image as ImageIcon,
  TrendingUp,
  MessageCircle,
  BadgeCheck,
  ArrowRight,
  Users,
  BarChart3,
  Database,
  FileText
} from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';

const Services = () => {
  // Page metadata
  useEffect(() => {
    document.title = "Nos Services | Dominiqk Mendy | Expert Numérique & IA";
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Découvrez notre gamme complète de services numériques: IA, développement web, marketing digital, ' +
        'e-gouvernance et conseil stratégique. Solutions innovantes sur mesure par Dominiqk Mendy.'
      );
    }
    
    // Set keywords for SEO
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 
        'services numériques, intelligence artificielle, développement web, marketing digital, ' +
        'e-gouvernance, conseil stratégique, transformation digitale, expertise numérique, innovation technologique'
      );
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Service categories with detailed information
  const serviceCategories = [
    {
      id: "ai",
      title: "Solutions d'Intelligence Artificielle",
      description: "Exploitez le potentiel de l'IA pour automatiser vos processus, générer des insights data et créer des expériences intelligentes.",
      icon: <BrainCircuit size={40} className="text-primary" />,
      link: "/services/ai-solutions",
      background: "bg-gradient-to-br from-purple-900/30 to-blue-900/30",
      services: [
        "Développement de modèles de machine learning",
        "Intégration de Large Language Models (LLM)",
        "IA générative pour contenu multimédia",
        "Chatbots et assistants virtuels",
        "Computer Vision et traitement d'images",
        "Analyse prédictive et prescriptive"
      ]
    },
    {
      id: "web",
      title: "Développement Web & Mobile",
      description: "Création d'applications web et mobiles performantes, intuitives et sécurisées pour transformer vos idées en réalité digitale.",
      icon: <Code2 size={40} className="text-primary" />,
      link: "/services/web-development",
      background: "bg-gradient-to-br from-blue-900/30 to-cyan-900/30",
      services: [
        "Applications web progressives (PWA)",
        "Sites web corporate et e-commerce",
        "Applications mobiles natives et hybrides",
        "Interfaces utilisateur UX/UI avancées",
        "Systèmes de gestion de contenu sur mesure",
        "APIs et intégrations tierces"
      ]
    },
    {
      id: "egov",
      title: "E-Gouvernance & Services Publics Numériques",
      description: "Transformation numérique des administrations publiques pour simplifier les procédures, réduire les délais et améliorer l'expérience citoyenne.",
      icon: <Building2 size={40} className="text-primary" />,
      link: "/services/egouvernance", 
      background: "bg-gradient-to-br from-indigo-900/30 to-blue-900/30",
      services: [
        "Plateformes de services administratifs en ligne",
        "Digitalisation des procédures gouvernementales",
        "Systèmes de gestion des identités numériques",
        "Interfaces administratives et tableaux de bord",
        "Interopérabilité entre services publics",
        "Sécurisation des données gouvernementales"
      ],
      featured: true
    },
    {
      id: "marketing",
      title: "Marketing Digital & Growth",
      description: "Stratégies de marketing digital axées sur les résultats pour accroître votre visibilité, générer des leads et convertir vos prospects.",
      icon: <TrendingUp size={40} className="text-primary" />,
      link: "/services/digital-marketing",
      background: "bg-gradient-to-br from-orange-900/30 to-red-900/30",
      services: [
        "SEO & Content Marketing",
        "Campagnes publicitaires (Google, Meta, LinkedIn)",
        "Marketing automation et Lead nurturing",
        "Social Media Management",
        "Email Marketing et CRM",
        "Analytics et optimisation des conversions"
      ]
    },
    {
      id: "consulting",
      title: "Conseil Stratégique & Innovation",
      description: "Accompagnement stratégique pour définir et exécuter votre transformation digitale, innover et rester compétitif dans l'économie numérique.",
      icon: <Layers size={40} className="text-primary" />,
      link: "/services/consulting",
      background: "bg-gradient-to-br from-gray-900/30 to-slate-900/30",
      services: [
        "Diagnostic digital et roadmap stratégique",
        "Innovation digitale et idéation",
        "Optimisation des processus métier",
        "Gestion de la transformation numérique",
        "Définition d'architecture technologique",
        "Accompagnement aux startups et scale-ups"
      ]
    },
    {
      id: "training",
      title: "Formation & Transfert de Compétences",
      description: "Programmes de formation personnalisés pour renforcer les compétences numériques et IA de vos équipes et accélérer votre autonomie digitale.",
      icon: <Users size={40} className="text-primary" />,
      link: "/services/ai-training",
      background: "bg-gradient-to-br from-green-900/30 to-emerald-900/30",
      services: [
        "Formations techniques en IA et développement",
        "Ateliers de product management digital",
        "Formations marketing digital avancé",
        "Programmes executive de leadership digital",
        "Coaching et mentorat tech personnalisé",
        "Certification et évaluation des compétences"
      ]
    }
  ];

  // Container variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Item variants for fade-in animation
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <PageContainer className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-block p-2 bg-primary/10 rounded-lg mb-4">
                <Globe size={32} className="text-primary animate-pulse" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h1>
              <p className="text-xl text-muted-foreground mb-8 mx-auto max-w-2xl">
                Des solutions numériques innovantes et personnalisées 
                pour répondre à vos défis business et technologiques.
              </p>
            </motion.div>
          </PageContainer>
        </section>
        
        {/* Main services section */}
        <section className="py-8 md:py-16 relative">
          <PageContainer className="relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {serviceCategories.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className={`rounded-xl border backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    service.featured 
                      ? "border-primary/30 shadow-md shadow-primary/10" 
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className={`${service.background} p-8`}>
                    <div className="mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <ul className="mb-8 space-y-2">
                      {service.services.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="shrink-0 text-primary">
                            <BadgeCheck size={16} />
                          </div>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={service.featured ? "bg-primary hover:bg-primary/90" : "bg-white/10 hover:bg-white/20"} 
                      asChild
                    >
                      <Link to={service.link} className="w-full flex justify-between items-center">
                        <span>Découvrir</span>
                        <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </PageContainer>
        </section>
        
        {/* Approach section */}
        <section className="py-16 md:py-24 bg-black/30 backdrop-blur-md border-t border-b border-white/10 relative">
          <PageContainer className="relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Notre Approche</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-muted-foreground">
                Une méthodologie robuste et éprouvée pour vous garantir des résultats concrets et mesurables.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  icon: <FileText size={28} />,
                  title: "Analyse & Découverte",
                  description: "Compréhension approfondie de vos besoins, objectifs et contraintes pour définir la solution optimale."
                },
                {
                  icon: <Layers size={28} />,
                  title: "Stratégie & Conception",
                  description: "Élaboration d'une stratégie sur mesure et conception détaillée de la solution technique."
                },
                {
                  icon: <Code2 size={28} />,
                  title: "Développement & Test",
                  description: "Mise en œuvre agile de la solution avec cycles itératifs et tests rigoureux à chaque étape."
                },
                {
                  icon: <Rocket size={28} />,
                  title: "Déploiement & Évolution",
                  description: "Lancement contrôlé, formation des utilisateurs et amélioration continue de votre solution."
                }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 relative"
                >
                  <div className="text-primary mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  
                  {idx < 3 && (
                    <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight size={20} className="text-primary" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </PageContainer>
        </section>
        
        {/* Featured project section */}
        <section className="py-16 md:py-24 relative">
          <PageContainer>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 opacity-30 blur-lg rounded-lg"></div>
                    <div className="relative rounded-lg overflow-hidden border border-white/20">
                      <img 
                        src="/lovable-uploads/e991c404-fa68-4476-bad5-65316d44cf46.png"
                        alt="SenServices E-Gouvernance" 
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary mb-6">
                    Projet À La Une
                  </div>
                  <h2 className="text-3xl font-bold mb-4">SenServices: Plateforme Nationale d'E-Gouvernance</h2>
                  <p className="text-muted-foreground mb-6">
                    Transformation numérique complète des services administratifs pour faciliter l'accès aux démarches publiques et 
                    moderniser l'État grâce à une plateforme centralisée innovante.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      "Digitalisation de plus de 500 démarches administratives",
                      "Réduction des délais de traitement de 96%",
                      "Interface citoyenne intuitive et dashboard administratif avancé",
                      "Sécurisation complète des données et transactions"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <BadgeCheck size={18} className="text-primary shrink-0 mt-1" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-gradient-primary hover:opacity-90" asChild>
                      <Link to="/projects/senservices" className="flex items-center gap-2">
                        <span>Découvrir le projet</span>
                        <ArrowRight size={16} />
                      </Link>
                    </Button>
                    <Button variant="outline" className="border-white/20 hover:bg-white/10" asChild>
                      <Link to="/services/egouvernance" className="flex items-center gap-2">
                        <span>Services E-Gouvernance</span>
                        <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </PageContainer>
        </section>
        
        {/* CTA section */}
        <section className="py-16 md:py-24 bg-black/30 backdrop-blur-md border-t border-b border-white/10">
          <PageContainer>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à donner vie à votre projet?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 mx-auto max-w-2xl">
                Discutons de vos besoins et voyons comment je peux vous aider à atteindre vos objectifs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-lg shadow-primary/20" asChild>
                  <Link to="/start-project" className="flex items-center gap-2">
                    <span>Démarrer un projet</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    <span>Prendre contact</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </PageContainer>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
