
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
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
  FileText,
  Star,
  CheckCircle2,
  Trophy,
  Award,
  Clock,
  Infinity,
  Sparkles
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
      background: "bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-blue-900/40",
      services: [
        "Développement de modèles de machine learning",
        "Intégration de Large Language Models (LLM)",
        "IA générative pour contenu multimédia",
        "Chatbots et assistants virtuels",
        "Computer Vision et traitement d'images",
        "Analyse prédictive et prescriptive"
      ],
      stats: "94% de nos clients ont constaté une réduction des coûts opérationnels après l'implémentation de nos solutions IA"
    },
    {
      id: "web",
      title: "Développement Web & Mobile",
      description: "Création d'applications web et mobiles performantes, intuitives et sécurisées pour transformer vos idées en réalité digitale.",
      icon: <Code2 size={40} className="text-primary" />,
      link: "/services/web-development",
      background: "bg-gradient-to-br from-blue-900/40 via-cyan-900/30 to-teal-900/40",
      services: [
        "Applications web progressives (PWA)",
        "Sites web corporate et e-commerce",
        "Applications mobiles natives et hybrides",
        "Interfaces utilisateur UX/UI avancées",
        "Systèmes de gestion de contenu sur mesure",
        "APIs et intégrations tierces"
      ],
      stats: "Temps de chargement moyen de nos sites web: 1,2 secondes, 3x plus rapide que la moyenne du secteur"
    },
    {
      id: "egov",
      title: "E-Gouvernance & Services Publics Numériques",
      description: "Transformation numérique des administrations publiques pour simplifier les procédures, réduire les délais et améliorer l'expérience citoyenne.",
      icon: <Building2 size={40} className="text-primary" />,
      link: "/services/egouvernance", 
      background: "bg-gradient-to-br from-violet-900/40 via-indigo-900/30 to-blue-900/40",
      services: [
        "Plateformes de services administratifs en ligne",
        "Digitalisation des procédures gouvernementales",
        "Systèmes de gestion des identités numériques",
        "Interfaces administratives et tableaux de bord",
        "Interopérabilité entre services publics",
        "Sécurisation des données gouvernementales"
      ],
      stats: "15+ millions de citoyens servis par nos plateformes d'e-gouvernance en Afrique",
      featured: true
    },
    {
      id: "marketing",
      title: "Marketing Digital & Growth",
      description: "Stratégies de marketing digital axées sur les résultats pour accroître votre visibilité, générer des leads et convertir vos prospects.",
      icon: <TrendingUp size={40} className="text-primary" />,
      link: "/services/digital-marketing",
      background: "bg-gradient-to-br from-fuchsia-900/40 via-pink-900/30 to-orange-900/40",
      services: [
        "SEO & Content Marketing",
        "Campagnes publicitaires (Google, Meta, LinkedIn)",
        "Marketing automation et Lead nurturing",
        "Social Media Management",
        "Email Marketing et CRM",
        "Analytics et optimisation des conversions"
      ],
      stats: "Augmentation moyenne du taux de conversion de 127% pour nos clients en 6 mois"
    },
    {
      id: "consulting",
      title: "Conseil Stratégique & Innovation",
      description: "Accompagnement stratégique pour définir et exécuter votre transformation digitale, innover et rester compétitif dans l'économie numérique.",
      icon: <Layers size={40} className="text-primary" />,
      link: "/services/consulting",
      background: "bg-gradient-to-br from-slate-900/40 via-gray-900/30 to-zinc-900/40",
      services: [
        "Diagnostic digital et roadmap stratégique",
        "Innovation digitale et idéation",
        "Optimisation des processus métier",
        "Gestion de la transformation numérique",
        "Définition d'architecture technologique",
        "Accompagnement aux startups et scale-ups"
      ],
      stats: "ROI moyen de 300% sur les investissements technologiques guidés par nos consultants"
    },
    {
      id: "training",
      title: "Formation & Transfert de Compétences",
      description: "Programmes de formation personnalisés pour renforcer les compétences numériques et IA de vos équipes et accélérer votre autonomie digitale.",
      icon: <Users size={40} className="text-primary" />,
      link: "/services/ai-training",
      background: "bg-gradient-to-br from-emerald-900/40 via-green-900/30 to-teal-900/40",
      services: [
        "Formations techniques en IA et développement",
        "Ateliers de product management digital",
        "Formations marketing digital avancé",
        "Programmes executive de leadership digital",
        "Coaching et mentorat tech personnalisé",
        "Certification et évaluation des compétences"
      ],
      stats: "5000+ professionnels formés aux dernières technologies numériques"
    }
  ];

  // Client success metrics
  const successMetrics = [
    { value: "98%", label: "Taux de satisfaction client", icon: <Star size={24} /> },
    { value: "142", label: "Projets livrés en 2023", icon: <Trophy size={24} /> },
    { value: "86%", label: "Clients fidélisés", icon: <Award size={24} /> },
    { value: "-40%", label: "Réduction des coûts moyens", icon: <TrendingUp size={24} /> }
  ];

  // Industry recognition badges
  const recognitionBadges = [
    "Top 10 des fournisseurs de solutions IA en Afrique",
    "Meilleure agence digitale innovante 2023",
    "Prix excellence e-gouvernance",
    "Partenaire certifié AWS & Google"
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
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Space-themed background elements */}
      <div className="fixed inset-0 bg-[#060817] z-[-2]"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
        {/* Stars background */}
        <div className="absolute inset-0 bg-[url('/lovable-uploads/60c23356-ad17-4782-854f-87572465f4f9.png')] bg-repeat opacity-70"></div>
        
        {/* Animated nebulae and galaxies */}
        <div className="absolute top-[5%] right-[10%] w-[40rem] h-[40rem] rounded-full bg-indigo-900/10 filter blur-[10rem] animate-pulse"></div>
        <div className="absolute bottom-[15%] left-[5%] w-[30rem] h-[30rem] rounded-full bg-purple-900/10 filter blur-[8rem] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[25%] w-[25rem] h-[25rem] rounded-full bg-blue-900/10 filter blur-[6rem] animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <Navbar />
      
      <main className="flex-grow pt-20 relative z-10">
        {/* Hero section avec une typographie améliorée */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-transparent pointer-events-none"></div>
          
          <PageContainer className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center justify-center p-6 rounded-full bg-primary/10 backdrop-blur-lg border border-primary/20 mb-6 animate-pulse">
                <Globe size={44} className="text-primary" />
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-white via-purple-100 to-blue-200 bg-clip-text text-transparent drop-shadow-sm">
                  Services Numériques
                </span>
              </h1>
              
              <div className="flex justify-center mb-8">
                <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
              </div>
              
              <p className="text-xl md:text-2xl text-white/90 mb-8 mx-auto max-w-3xl leading-relaxed font-light">
                Des solutions numériques innovantes et personnalisées 
                pour propulser votre entreprise vers de nouveaux horizons.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white text-lg py-6 px-8 rounded-xl shadow-lg shadow-indigo-700/20" asChild>
                  <Link to="/start-project" className="flex items-center gap-2">
                    <Rocket className="h-5 w-5 mr-1" />
                    <span>Lancer votre projet</span>
                  </Link>
                </Button>
                
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 text-lg py-6 px-8 rounded-xl" asChild>
                  <a href="#services-list">
                    <span>Découvrir nos services</span>
                    <ArrowRight className="h-5 w-5 ml-1" />
                  </a>
                </Button>
              </div>
              
              {/* Recognition badges */}
              <div className="mt-16">
                <p className="text-sm text-white/60 mb-4">Reconnu par l'industrie</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {recognitionBadges.map((badge, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/5 backdrop-blur-md border border-white/10 text-white/80"
                    >
                      <BadgeCheck size={14} className="mr-1 text-indigo-400" />
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </PageContainer>
          
          {/* Animated scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-white/60 text-sm mb-2">Découvrir</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
              <div className="w-1.5 h-1.5 bg-white/80 rounded-full animate-pulse"></div>
            </div>
          </div>
        </section>
        
        {/* Success metrics */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10"></div>
          
          <PageContainer className="relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                  Des résultats qui parlent d'eux-mêmes
                </h2>
                <p className="text-white/70 max-w-2xl mx-auto">
                  Notre engagement envers l'excellence se traduit par des métriques concrètes et des clients satisfaits
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {successMetrics.map((metric, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 flex flex-col items-center text-center"
                  >
                    <div className="mb-3 p-3 bg-indigo-500/20 rounded-full">
                      <span className="text-indigo-400">
                        {metric.icon}
                      </span>
                    </div>
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-white/70">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </PageContainer>
        </section>
        
        {/* Main services section avec cartes plus lisibles */}
        <section id="services-list" className="py-20 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 via-purple-900/5 to-transparent"></div>
          
          <PageContainer className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge className="mb-4 px-3 py-1.5 border-indigo-500/30 text-indigo-400 bg-indigo-950/30">Nos Services</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Des solutions cosmiques pour chaque besoin
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                De l'intelligence artificielle à l'e-gouvernance, découvrez notre galaxie de services conçus pour propulser votre organisation vers de nouveaux sommets
              </p>
            </div>
            
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
                  className={`rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    service.featured 
                      ? "shadow-md shadow-primary/10" 
                      : ""
                  }`}
                >
                  <div className={`${service.background} p-8 border border-white/10 backdrop-blur-sm h-full flex flex-col`}>
                    {/* Icon with glowing effect */}
                    <div className="mb-6 flex justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg animate-pulse"></div>
                        <div className="w-20 h-20 flex items-center justify-center bg-black/20 rounded-full backdrop-blur-md border border-white/10 relative z-10">
                          {service.icon}
                        </div>
                        
                        {service.featured && (
                          <div className="absolute -top-2 -right-2">
                            <div className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs rounded-full shadow-lg">
                              Populaire
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Title and description */}
                    <h3 className="text-2xl font-bold mb-3 text-center text-white">{service.title}</h3>
                    <p className="text-white/80 mb-6 leading-relaxed text-center">{service.description}</p>
                    
                    {/* Service features */}
                    <ul className="mb-8 space-y-3 flex-grow">
                      {service.services.map((item, index) => (
                        <li key={index} className="flex items-center gap-3 bg-black/20 p-3 rounded-md backdrop-blur-sm hover:bg-black/30 transition-colors border border-white/5">
                          <div className="shrink-0 text-primary">
                            <BadgeCheck size={20} />
                          </div>
                          <span className="text-white/90 text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Stats highlight */}
                    {service.stats && (
                      <div className="mb-6 p-4 bg-indigo-950/30 border border-indigo-500/20 rounded-lg">
                        <div className="flex items-center">
                          <Sparkles size={18} className="text-yellow-400 mr-2 flex-shrink-0" />
                          <p className="text-sm text-white/80 italic">{service.stats}</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Action button */}
                    <Button 
                      className={`w-full py-6 ${service.featured ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 shadow-lg shadow-indigo-900/30" : "bg-white/10 hover:bg-white/15"}`}
                      asChild
                    >
                      <Link to={service.link} className="w-full flex justify-between items-center">
                        <span className="text-base font-medium">Découvrir</span>
                        <ArrowRight size={18} />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </PageContainer>
        </section>
        
        {/* Approach section avec des étapes plus évidentes */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-indigo-900/10 to-purple-900/10 backdrop-blur-sm"></div>
          
          <PageContainer className="relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 px-3 py-1.5 border-indigo-500/30 text-indigo-400 bg-indigo-950/30">Notre Approche</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Votre voyage vers l'excellence numérique
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Une méthodologie robuste et éprouvée pour vous garantir des résultats concrets et mesurables
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
              {/* Connection lines between steps (desktop only) */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 hidden lg:block"></div>
              
              {[
                {
                  icon: <FileText size={32} />,
                  title: "Analyse & Découverte",
                  description: "Compréhension approfondie de vos besoins, objectifs et contraintes pour définir la solution optimale.",
                  duration: "1-2 semaines"
                },
                {
                  icon: <Layers size={32} />,
                  title: "Stratégie & Conception",
                  description: "Élaboration d'une stratégie sur mesure et conception détaillée de la solution technique.",
                  duration: "2-3 semaines"
                },
                {
                  icon: <Code2 size={32} />,
                  title: "Développement & Test",
                  description: "Mise en œuvre agile de la solution avec cycles itératifs et tests rigoureux à chaque étape.",
                  duration: "4-12 semaines"
                },
                {
                  icon: <Rocket size={32} />,
                  title: "Déploiement & Évolution",
                  description: "Lancement contrôlé, formation des utilisateurs et amélioration continue de votre solution.",
                  duration: "En continu"
                }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 relative h-full flex flex-col bg-gradient-to-b from-indigo-900/20 to-purple-900/10"
                >
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg z-10">
                    {idx + 1}
                  </div>
                  
                  <div className="flex items-center justify-center mb-6">
                    <div className="text-indigo-400 p-4 bg-white/5 rounded-lg inline-block">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-white text-center">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed text-center mb-6">{step.description}</p>
                  
                  <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-center">
                    <Clock size={16} className="text-indigo-400 mr-2" />
                    <span className="text-sm text-white/60">{step.duration}</span>
                  </div>
                  
                  {idx < 3 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight size={24} className="text-indigo-400" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Process benefits */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Transparence totale",
                  description: "Suivi en temps réel de l'avancement de votre projet via notre dashboard client",
                  icon: <Globe size={24} />
                },
                {
                  title: "Agilité & Flexibilité",
                  description: "Adaptations rapides aux changements et aux nouvelles exigences tout au long du projet",
                  icon: <Infinity size={24} />
                },
                {
                  title: "Excellence technique",
                  description: "Technologies de pointe et meilleures pratiques pour des solutions durables et évolutives",
                  icon: <CheckCircle2 size={24} />
                }
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + (idx * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-start p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
                >
                  <div className="p-3 bg-indigo-900/40 rounded-lg mr-4 text-indigo-400">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                    <p className="text-white/70">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </PageContainer>
        </section>
        
        {/* Featured project section avec design amélioré */}
        <section className="py-24 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-indigo-900/10"></div>
          
          <PageContainer>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-violet-600/20 opacity-70 blur-xl rounded-2xl"></div>
                    <div className="relative rounded-xl overflow-hidden border border-white/20 shadow-2xl">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src="/lovable-uploads/e991c404-fa68-4476-bad5-65316d44cf46.png"
                          alt="SenServices E-Gouvernance" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <Badge className="mb-2 px-3 py-1 border-indigo-500/30 text-indigo-400 bg-black/40 backdrop-blur-sm">
                            Projet Phare
                          </Badge>
                          <h3 className="text-xl font-bold text-white">SenServices</h3>
                        </div>
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
                  <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-indigo-900/40 text-indigo-300 backdrop-blur-sm border border-indigo-500/30 mb-6">
                    <Star size={16} className="mr-2 text-yellow-400" />
                    Projet à la Une
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">
                    SenServices: Plateforme Nationale d'E-Gouvernance
                  </h2>
                  
                  <p className="text-white/80 mb-6 leading-relaxed text-lg">
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
                      <div key={idx} className="flex items-start gap-3 bg-white/5 p-5 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-colors border border-white/10">
                        <CheckCircle2 size={20} className="text-green-400 shrink-0 mt-0.5" />
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 py-6 px-8 shadow-lg shadow-indigo-900/20 rounded-xl" asChild>
                      <Link to="/projects/senservices" className="flex items-center gap-2">
                        <span className="text-base">Découvrir le projet</span>
                        <ArrowRight size={18} />
                      </Link>
                    </Button>
                    <Button variant="outline" className="border-white/20 hover:bg-white/10 py-6 px-8 rounded-xl" asChild>
                      <Link to="/services/egouvernance" className="flex items-center gap-2">
                        <span className="text-base">Services E-Gouvernance</span>
                        <ArrowRight size={18} />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </PageContainer>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 to-purple-900/10"></div>
          
          <PageContainer className="relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 px-3 py-1.5 border-indigo-500/30 text-indigo-400 bg-indigo-950/30">FAQ</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                  Questions fréquentes
                </h2>
                <p className="text-white/70 text-lg">
                  Nos réponses aux questions les plus courantes sur nos services
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    question: "Comment démarrer un projet avec vous ?",
                    answer: "Le processus est simple : prenez contact via notre formulaire ou par téléphone, nous organisons une consultation gratuite pour comprendre vos besoins, puis nous vous proposons une solution et un devis personnalisés sous 48h."
                  },
                  {
                    question: "Quels sont vos délais moyens de livraison ?",
                    answer: "Nos délais varient selon la complexité du projet : de 2-3 semaines pour les projets simples à 3-6 mois pour les solutions complexes. Nous définissons toujours un calendrier précis avec des jalons mesurables."
                  },
                  {
                    question: "Comment assurez-vous la qualité de vos livrables ?",
                    answer: "Nous appliquons une méthodologie rigoureuse avec des tests à chaque étape, des revues de code régulières, et un processus d'assurance qualité complet. Nous offrons également une période de garantie sur tous nos développements."
                  },
                  {
                    question: "Proposez-vous un support après la mise en production ?",
                    answer: "Absolument ! Nous offrons différentes formules de maintenance et support, de l'assistance ponctuelle aux contrats de maintenance complets avec temps de réponse garantis et monitoring proactif."
                  }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="backdrop-blur-sm rounded-xl p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
                  >
                    <h3 className="text-xl font-bold mb-3 text-white flex items-center">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 mr-3">Q</span>
                      {item.question}
                    </h3>
                    <p className="text-white/80 pl-9">
                      {item.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-10 text-center">
                <p className="text-white/70 mb-6">
                  Vous avez d'autres questions ? Contactez-nous directement
                </p>
                <Button variant="outline" className="border-white/20 hover:bg-white/10" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    <MessageCircle size={18} />
                    <span>Contacter notre équipe</span>
                  </Link>
                </Button>
              </div>
            </div>
          </PageContainer>
        </section>
        
        {/* Testimonials section */}
        <section className="py-20 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 via-purple-900/5 to-blue-900/10"></div>
          
          <PageContainer className="relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 px-3 py-1.5 border-indigo-500/30 text-indigo-400 bg-indigo-950/30">Témoignages</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Ce que disent nos clients
              </h2>
              <p className="text-white/70 text-lg">
                Découvrez les expériences de ceux qui nous ont fait confiance
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "L'équipe de Dominiqk a complètement transformé notre présence numérique avec une solution sur mesure qui a dépassé toutes nos attentes.",
                  author: "Mariama Diallo",
                  position: "Directrice Marketing, TechSenegal",
                  rating: 5
                },
                {
                  quote: "Le professionnalisme et l'expertise technique ont fait toute la différence. Notre application IA est devenue un avantage concurrentiel majeur.",
                  author: "Pierre Ndiaye",
                  position: "CEO, FinTech Solutions",
                  rating: 5
                }
              ].map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="backdrop-blur-sm rounded-xl p-8 border border-white/10 bg-gradient-to-br from-indigo-900/20 to-purple-900/10"
                >
                  <div className="mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={20} className="inline-block text-yellow-400 fill-yellow-400 mr-1" />
                    ))}
                  </div>
                  
                  <p className="text-white/90 text-lg mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-white">{testimonial.author}</p>
                      <p className="text-white/60 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Button variant="outline" className="border-white/20 hover:bg-white/10" asChild>
                <Link to="/testimonials" className="flex items-center gap-2">
                  <span>Voir plus de témoignages</span>
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </PageContainer>
        </section>
        
        {/* Process table */}
        <section className="py-20 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-indigo-900/10"></div>
          
          <PageContainer className="relative z-10">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 px-3 py-1.5 border-indigo-500/30 text-indigo-400 bg-indigo-950/30">Notre processus</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Comment nous travaillons
              </h2>
              <p className="text-white/70 text-lg">
                Un processus structuré et transparent pour mener votre projet au succès
              </p>
            </div>
            
            <div className="overflow-hidden rounded-xl border border-white/10">
              <div className="overflow-x-auto">
                <table className="w-full text-white/90">
                  <thead>
                    <tr className="bg-indigo-900/30 border-b border-white/10">
                      <th className="py-4 px-6 text-left">Phase</th>
                      <th className="py-4 px-6 text-left">Activités clés</th>
                      <th className="py-4 px-6 text-left">Livrables</th>
                      <th className="py-4 px-6 text-left">Votre participation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {[
                      {
                        phase: "Découverte",
                        activities: "Analyse des besoins, étude de l'existant, benchmark",
                        deliverables: "Document de vision, cahier des charges",
                        participation: "Moyenne"
                      },
                      {
                        phase: "Conception",
                        activities: "Architecture technique, design UX/UI, planning",
                        deliverables: "Maquettes, spécifications fonctionnelles",
                        participation: "Haute"
                      },
                      {
                        phase: "Développement",
                        activities: "Programmation, intégration, tests unitaires",
                        deliverables: "Code source, rapports de tests",
                        participation: "Faible à moyenne"
                      },
                      {
                        phase: "Déploiement",
                        activities: "Installation, formation, mise en production",
                        deliverables: "Application opérationnelle, documentation",
                        participation: "Moyenne"
                      },
                      {
                        phase: "Maintenance",
                        activities: "Support, corrections, améliorations",
                        deliverables: "Mises à jour, rapports de performance",
                        participation: "Variable"
                      }
                    ].map((row, idx) => (
                      <tr key={idx} className="bg-white/5 hover:bg-white/10 transition-colors">
                        <td className="py-4 px-6 font-medium">{row.phase}</td>
                        <td className="py-4 px-6">{row.activities}</td>
                        <td className="py-4 px-6">{row.deliverables}</td>
                        <td className="py-4 px-6">{row.participation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </PageContainer>
        </section>
        
        {/* CTA section avec un design plus engageant */}
        <section className="py-24 md:py-32 bg-gradient-to-b from-indigo-900/30 to-purple-900/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/60c23356-ad17-4782-854f-87572465f4f9.png')] bg-repeat opacity-30"></div>
          
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/30 rounded-full filter blur-[128px] animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/30 rounded-full filter blur-[128px] animate-pulse"></div>
          </div>
          
          <PageContainer className="relative z-10">
            <div className="max-w-4xl mx-auto backdrop-blur-lg p-12 rounded-2xl border border-white/10 bg-indigo-950/20 shadow-2xl shadow-indigo-500/10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center p-3 rounded-full bg-indigo-500/20 mb-6">
                  <Rocket size={32} className="text-indigo-400" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Prêt à explorer de nouveaux horizons?
                </h2>
                <p className="text-xl text-white/80 mb-10 mx-auto max-w-3xl leading-relaxed">
                  Discutons de vos besoins et voyons comment nous pouvons vous aider à atteindre vos objectifs. Premier rendez-vous sans engagement.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 shadow-lg shadow-indigo-600/20 px-10 py-7 rounded-xl" asChild>
                    <Link to="/start-project" className="flex items-center gap-3 text-lg">
                      <Rocket size={20} />
                      <span>Démarrer un projet</span>
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 px-10 py-7 rounded-xl" asChild>
                    <Link to="/contact" className="flex items-center gap-3 text-lg">
                      <MessageCircle size={20} />
                      <span>Prendre contact</span>
                    </Link>
                  </Button>
                </div>
                <p className="mt-8 text-white/60">
                  Réponse garantie sous 24h ouvrables
                </p>
              </div>
              
              {/* Trust indicators */}
              <div className="border-t border-white/10 pt-8 mt-8">
                <div className="flex flex-wrap justify-center gap-6 items-center">
                  <div className="flex items-center">
                    <CheckCircle2 size={20} className="text-green-400 mr-2" />
                    <span className="text-white/80">Confidentialité garantie</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 size={20} className="text-green-400 mr-2" />
                    <span className="text-white/80">Devis transparent</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 size={20} className="text-green-400 mr-2" />
                    <span className="text-white/80">Expertise reconnue</span>
                  </div>
                </div>
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
