
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AspectRatio } from "@/components/ui/aspect-ratio";
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
      background: "bg-gradient-to-br from-purple-900/40 to-blue-900/40",
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
      background: "bg-gradient-to-br from-blue-900/40 to-cyan-900/40",
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
      background: "bg-gradient-to-br from-indigo-900/40 to-blue-900/40",
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
      background: "bg-gradient-to-br from-orange-900/40 to-red-900/40",
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
      background: "bg-gradient-to-br from-gray-900/40 to-slate-900/40",
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
      background: "bg-gradient-to-br from-green-900/40 to-emerald-900/40",
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
        {/* Hero section avec une typographie améliorée */}
        <section className="py-20 md:py-24 relative overflow-hidden">
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
              <div className="inline-block p-4 bg-primary/10 rounded-lg mb-5">
                <Globe size={36} className="text-primary animate-pulse" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Nos Services</h1>
              <p className="text-xl text-muted-foreground mb-8 mx-auto max-w-2xl leading-relaxed">
                Des solutions numériques innovantes et personnalisées 
                pour répondre à vos défis business et technologiques.
              </p>
            </motion.div>
          </PageContainer>
        </section>
        
        {/* Main services section avec cartes plus lisibles */}
        <section className="py-12 md:py-20 relative">
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
                    <div className="mb-5">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                    
                    <ul className="mb-8 space-y-3">
                      {service.services.map((item, index) => (
                        <li key={index} className="flex items-center gap-3 bg-black/20 p-2 rounded-md backdrop-blur-sm">
                          <div className="shrink-0 text-primary">
                            <BadgeCheck size={18} />
                          </div>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full py-6 ${service.featured ? "bg-primary hover:bg-primary/90" : "bg-white/10 hover:bg-white/20"}`}
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
        
        {/* Approach section avec des étapes plus évidentes */}
        <section className="py-20 md:py-28 bg-black/40 backdrop-blur-md border-t border-b border-white/10 relative">
          <PageContainer className="relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-5">Notre Approche</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Une méthodologie robuste et éprouvée pour vous garantir des résultats concrets et mesurables.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  icon: <FileText size={32} />,
                  title: "Analyse & Découverte",
                  description: "Compréhension approfondie de vos besoins, objectifs et contraintes pour définir la solution optimale."
                },
                {
                  icon: <Layers size={32} />,
                  title: "Stratégie & Conception",
                  description: "Élaboration d'une stratégie sur mesure et conception détaillée de la solution technique."
                },
                {
                  icon: <Code2 size={32} />,
                  title: "Développement & Test",
                  description: "Mise en œuvre agile de la solution avec cycles itératifs et tests rigoureux à chaque étape."
                },
                {
                  icon: <Rocket size={32} />,
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
                  className="bg-black/30 backdrop-blur-sm p-7 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 relative"
                >
                  <div className="text-primary mb-5 p-3 bg-white/5 rounded-lg inline-block">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  
                  {idx < 3 && (
                    <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight size={24} className="text-primary" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </PageContainer>
        </section>
        
        {/* Featured project section avec design amélioré */}
        <section className="py-20 md:py-28 relative">
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
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 opacity-40 blur-lg rounded-lg"></div>
                    <div className="relative rounded-lg overflow-hidden border border-white/20">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src="/lovable-uploads/e991c404-fa68-4476-bad5-65316d44cf46.png"
                          alt="SenServices E-Gouvernance" 
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-primary/20 text-primary mb-6">
                    Projet À La Une
                  </div>
                  <h2 className="text-3xl font-bold mb-5 tracking-tight">SenServices: Plateforme Nationale d'E-Gouvernance</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Transformation numérique complète des services administratifs pour faciliter l'accès aux démarches publiques et 
                    moderniser l'État grâce à une plateforme centralisée innovante.
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {[
                      "Digitalisation de plus de 500 démarches administratives",
                      "Réduction des délais de traitement de 96%",
                      "Interface citoyenne intuitive et dashboard administratif avancé",
                      "Sécurisation complète des données et transactions"
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-white/5 p-3 rounded-md backdrop-blur-sm">
                        <BadgeCheck size={18} className="text-primary shrink-0 mt-1" />
                        <span className="text-sm md:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-gradient-primary hover:opacity-90 py-6" asChild>
                      <Link to="/projects/senservices" className="flex items-center gap-2">
                        <span>Découvrir le projet</span>
                        <ArrowRight size={16} />
                      </Link>
                    </Button>
                    <Button variant="outline" className="border-white/20 hover:bg-white/10 py-6" asChild>
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
        
        {/* CTA section avec un design plus engageant */}
        <section className="py-20 md:py-28 bg-black/40 backdrop-blur-md border-t border-b border-white/10">
          <PageContainer>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Prêt à donner vie à votre projet?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 mx-auto max-w-2xl leading-relaxed">
                Discutons de vos besoins et voyons comment je peux vous aider à atteindre vos objectifs.
              </p>
              <div className="flex flex-wrap justify-center gap-5">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-lg shadow-primary/20 px-8 py-6" asChild>
                  <Link to="/start-project" className="flex items-center gap-3 text-base">
                    <span>Démarrer un projet</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 px-8 py-6" asChild>
                  <Link to="/contact" className="flex items-center gap-3 text-base">
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
