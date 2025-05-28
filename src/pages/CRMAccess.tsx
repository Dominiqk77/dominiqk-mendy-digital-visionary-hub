
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SenServicesBackground from '@/components/space/SenServicesBackground';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  FolderOpen, 
  Zap, 
  Search, 
  BarChart3, 
  Settings,
  CheckCircle,
  Star,
  ArrowRight,
  Shield,
  Cpu,
  Globe,
  Target,
  TrendingUp,
  Clock,
  Database,
  Bot,
  Mail,
  Phone,
  MessageSquare,
  Calendar,
  DollarSign,
  Award,
  Rocket,
  Lock,
  Headphones,
  BookOpen,
  ChevronRight,
  BrainCircuit,
  Code,
  X,
  Crown,
  Infinity
} from 'lucide-react';

const CRMAccess = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = 'DOM CRM - Solution CRM Révolutionnaire | Dominiqk Mendy';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Découvrez DOM CRM, la plateforme CRM tout-en-un qui révolutionne votre business grâce à l\'Intelligence Artificielle. Automatisez vos ventes, générez du contenu illimité.'
      );
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const crmFeatures = [
    {
      icon: LayoutDashboard,
      title: "Dashboard Intelligent",
      description: "Tableau de bord complet avec analytics en temps réel, KPIs personnalisables et insights automatiques pour piloter votre business.",
      details: "• Métriques business avancées\n• Alertes personnalisées\n• Rapports automatisés\n• Prédictions IA",
      gradient: "from-indigo-600 to-purple-500"
    },
    {
      icon: Users,
      title: "Gestion Leads Avancée",
      description: "Qualification automatique des prospects avec scoring IA et pipeline de conversion optimisé pour maximiser vos ventes.",
      details: "• Lead scoring intelligent\n• Segmentation automatique\n• Nurturing workflows\n• Attribution multi-touch",
      gradient: "from-blue-600 to-sky-400"
    },
    {
      icon: Bot,
      title: "Générateur de Contenu IA",
      description: "Création automatique de textes, emails, posts sociaux et contenu marketing avec 10+ modèles IA intégrés.",
      details: "• Rédaction automatique\n• Génération d'images\n• Optimisation SEO\n• Personnalisation avancée",
      gradient: "from-green-600 to-teal-500"
    },
    {
      icon: FolderOpen,
      title: "Gestion de Projets Pro",
      description: "Suivi complet des projets clients avec planification automatique et collaboration d'équipe en temps réel.",
      details: "• Timeline interactive\n• Gestion des ressources\n• Facturation automatique\n• Collaboration temps réel",
      gradient: "from-purple-600 to-pink-500"
    },
    {
      icon: Zap,
      title: "Centre d'Automation",
      description: "Workflows intelligents pour automatiser vos processus marketing, ventes et support client avec 50+ triggers.",
      details: "• 50+ triggers disponibles\n• Actions conditionnelles\n• Intégrations natives\n• Tests A/B automatiques",
      gradient: "from-orange-600 to-red-500"
    },
    {
      icon: Search,
      title: "SEO Analyzer Pro",
      description: "Analyse SEO complète avec recommandations automatiques et suivi de performance pour booster votre visibilité.",
      details: "• Audit technique complet\n• Recherche de mots-clés\n• Suivi des positions\n• Optimisations suggérées",
      gradient: "from-cyan-600 to-blue-500"
    }
  ];

  const keyBenefits = [
    {
      icon: TrendingUp,
      title: "ROI Exceptionnel",
      metric: "+250%",
      description: "Augmentation moyenne du chiffre d'affaires en 6 mois"
    },
    {
      icon: Clock,
      title: "Gain de Temps",
      metric: "15h/sem",
      description: "Temps économisé par automatisation des tâches répétitives"
    },
    {
      icon: Target,
      title: "Conversion Optimisée",
      metric: "+180%",
      description: "Amélioration des taux de conversion leads → clients"
    },
    {
      icon: Shield,
      title: "Sécurité Maximale",
      metric: "99.9%",
      description: "Uptime garanti avec chiffrement de bout en bout"
    }
  ];

  const integrations = [
    {
      name: "Hugging Face",
      type: "IA Générative",
      description: "Modèles de génération de texte et traitement du langage naturel"
    },
    {
      name: "Stability AI",
      type: "Génération d'Images",
      description: "Création d'images et visuels marketing automatique"
    },
    {
      name: "Hunter.io",
      type: "Prospection",
      description: "Recherche et vérification d'emails professionnels"
    },
    {
      name: "ScrapingBee",
      type: "Data Collection",
      description: "Extraction de données web pour la veille concurrentielle"
    },
    {
      name: "Google APIs",
      type: "SEO & Analytics",
      description: "Search Console, Analytics et outils de référencement"
    },
    {
      name: "Facebook Graph",
      type: "Social Media",
      description: "Gestion et automation des campagnes sociales"
    }
  ];

  const plans = [
    {
      name: "Découverte",
      price: "Gratuit",
      originalPrice: null,
      period: "À vie",
      description: "Pour tester DOM CRM une seule fois",
      features: [
        "1 projet uniquement",
        "5 leads maximum (une fois)",
        "Intégrations basiques",
        "Support communautaire",
        "Accès limité aux fonctionnalités"
      ],
      limitations: [
        "Pas de renouvellement",
        "Fonctionnalités limitées",
        "Sans automation avancée"
      ],
      popular: false,
      cta: "Essayer Gratuitement",
      highlight: "LIMITÉ"
    },
    {
      name: "Professionnel",
      price: "99€",
      originalPrice: "149€",
      period: "par mois",
      description: "Pour les entrepreneurs sérieux",
      features: [
        "5 projets actifs",
        "100 leads/mois",
        "Toutes les intégrations IA",
        "Automation avancée complète",
        "Génération de contenu illimitée",
        "Analytics et rapports détaillés",
        "Support prioritaire 24/7",
        "Formation personnalisée incluse"
      ],
      limitations: [],
      popular: true,
      cta: "Démarrer Maintenant",
      highlight: "POPULAIRE",
      savings: "Économisez 50€/mois"
    },
    {
      name: "Enterprise",
      price: "Sur mesure",
      originalPrice: null,
      period: "Contact",
      description: "Solutions sur-mesure pour grandes entreprises",
      features: [
        "Projets illimités",
        "Leads illimités",
        "API privée dédiée",
        "Développements personnalisés",
        "Infrastructure dédiée",
        "Account manager personnel",
        "SLA garantie 99.99%",
        "Formation équipe complète"
      ],
      limitations: [],
      popular: false,
      cta: "Nous Contacter",
      highlight: "SUR-MESURE"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-portfolio-space relative">
      <Navbar />
      
      {/* Space background - using SenServicesBackground like AI Training page */}
      <SenServicesBackground />
      
      <main className="flex-grow z-10 relative">
        {/* Hero Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={animationVariants}
              transition={{ duration: 0.7 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-block px-4 py-1.5 bg-portfolio-purple/10 backdrop-blur-sm rounded-full text-portfolio-purple border border-portfolio-purple/20 text-sm font-medium mb-4">
                <div className="flex items-center gap-2">
                  <BrainCircuit className="h-4 w-4" />
                  <span>CRM Révolutionnaire</span>
                  <Badge className="bg-emerald-500 text-white text-xs px-2 py-0.5 animate-pulse">
                    NOUVEAU
                  </Badge>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600">DOM CRM</span>
              </h1>
              
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
              
              <p className="text-xl text-gray-200 mb-8">
                La plateforme CRM tout-en-un qui révolutionne votre business grâce à l'Intelligence Artificielle.
                Automatisez vos ventes, générez du contenu illimité et multipliez votre chiffre d'affaires.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white">
                  <Link to="/auth" className="flex items-center">
                    Démarrer Gratuitement
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
                <Button size="lg" variant="outline" className="text-white border-white border hover:bg-white/10">
                  <Link to="/contact">Voir la Démo Live</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Row */}
        <section className="py-8 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { number: "500+", label: "Entreprises Actives" },
                { number: "250%", label: "ROI Moyen" },
                { number: "15h", label: "Économisées/Semaine" },
                { number: "99.9%", label: "Uptime Garanti" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-indigo-400 mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Pourquoi choisir DOM CRM</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
              <p className="text-gray-300">
                Notre CRM révolutionnaire est conçu pour répondre aux défis spécifiques 
                des entreprises modernes, en offrant des résultats concrets et mesurables.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: <BrainCircuit className="h-10 w-10" />,
                  title: "IA Intégrée",
                  description: "Intelligence artificielle native pour automatiser et optimiser tous vos processus"
                },
                {
                  icon: <Code className="h-10 w-10" />,
                  title: "Intégration Transparente",
                  description: "Solution conçue pour s'intégrer parfaitement à votre infrastructure existante"
                },
                {
                  icon: <Shield className="h-10 w-10" />,
                  title: "Sécurité Maximale",
                  description: "Protection des données et respect des normes RGPD et standards internationaux"
                },
                {
                  icon: <Cpu className="h-10 w-10" />,
                  title: "Performance Optimisée",
                  description: "Plateforme optimisée pour fonctionner efficacement même avec des ressources limitées"
                },
                {
                  icon: <Database className="h-10 w-10" />,
                  title: "Évolutivité",
                  description: "Capacité à évoluer et à s'adapter à mesure que votre entreprise se développe"
                },
                {
                  icon: <ArrowRight className="h-10 w-10" />,
                  title: "Support 24/7",
                  description: "Assistance technique et commerciale disponible en permanence pour vous accompagner"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full bg-black/50 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all overflow-hidden cosmic-hover">
                    <CardHeader>
                      <div className="rounded-full p-3 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-500 mb-4">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 backdrop-blur-sm bg-black/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                6 Modules <span className="text-gradient-cosmic">Révolutionnaires</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-300">
                Découvrez les outils qui transformeront votre façon de gérer votre business et vos relations clients
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {crmFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full border-none overflow-hidden cosmic-hover relative bg-black/40 backdrop-blur-md">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                    <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-white/30 group-hover:shadow-[0_0_15px_rgba(155,135,245,0.3)] transition-all duration-300"></div>
                    
                    <div className="relative z-10 p-6">
                      <div className={`text-white bg-gradient-to-br ${feature.gradient} p-3 rounded-xl w-16 h-16 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-8 h-8" />
                      </div>
                      <h3 className="mt-4 text-xl text-white font-bold mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg p-4 border border-indigo-500/20">
                        <div className="text-sm text-gray-300 whitespace-pre-line">
                          {feature.details}
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-white/10 opacity-50 rounded-tl-xl"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-white/10 opacity-50 rounded-br-xl"></div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Résultats <span className="text-gradient-cosmic">Mesurables</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-300">
                Des performances qui parlent d'elles-mêmes. Voici ce que DOM CRM apporte concrètement à votre business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-indigo-400 mb-2">{benefit.metric}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-16 backdrop-blur-sm bg-black/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                APIs <span className="text-gradient-cosmic">Intégrées</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-300">
                Plus de 10 APIs premium intégrées nativement pour décupler les capacités de votre CRM
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-black/40 border-white/10 backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-white">{integration.name}</h3>
                        <Badge className="bg-indigo-500/20 text-indigo-400 border-indigo-500/30">
                          {integration.type}
                        </Badge>
                      </div>
                      <p className="text-gray-300 text-sm">{integration.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Tarifs <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Transparents</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choisissez le plan qui correspond à vos ambitions. Commencez gratuitement, 
                évoluez selon vos besoins, sans engagement ni coûts cachés.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                        <Crown className="w-4 h-4" />
                        {plan.highlight}
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    </div>
                  )}

                  {/* Other Badges */}
                  {!plan.popular && plan.highlight && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <Badge className={`${
                        plan.name === 'Découverte' 
                          ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' 
                          : 'bg-purple-500/20 text-purple-400 border-purple-500/30'
                      } px-4 py-1 font-medium`}>
                        {plan.highlight}
                      </Badge>
                    </div>
                  )}
                  
                  <Card className={`h-full relative overflow-hidden transition-all duration-500 ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-teal-500/10 border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/20 scale-105' 
                      : plan.name === 'Découverte'
                      ? 'bg-black/40 border border-orange-500/20 hover:border-orange-500/40'
                      : 'bg-black/40 border border-white/10 hover:border-purple-500/30'
                  } backdrop-blur-lg group-hover:scale-105 group-hover:shadow-2xl`}>
                    
                    {/* Card Header */}
                    <CardHeader className="text-center pb-8 relative">
                      {plan.popular && (
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-teal-500/5 rounded-t-lg"></div>
                      )}
                      
                      <div className="relative z-10">
                        <CardTitle className={`text-2xl font-bold mb-3 ${
                          plan.popular ? 'text-white' : 'text-gray-100'
                        }`}>
                          {plan.name}
                        </CardTitle>
                        
                        {/* Pricing */}
                        <div className="mb-4">
                          {plan.originalPrice && (
                            <div className={`text-lg line-through mb-1 ${
                              plan.popular ? 'text-cyan-300' : 'text-gray-400'
                            }`}>
                              {plan.originalPrice}/mois
                            </div>
                          )}
                          <div className={`text-5xl font-bold mb-2 ${
                            plan.popular 
                              ? 'bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent' 
                              : 'text-indigo-400'
                          }`}>
                            {plan.price}
                          </div>
                          <div className={`text-sm ${
                            plan.popular ? 'text-cyan-200' : 'text-gray-400'
                          }`}>{plan.period}</div>
                          {plan.savings && (
                            <div className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium mt-2">
                              {plan.savings}
                            </div>
                          )}
                        </div>
                        
                        <CardDescription className={`text-base ${
                          plan.popular ? 'text-cyan-100' : 'text-gray-300'
                        }`}>
                          {plan.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    
                    {/* Card Content */}
                    <CardContent className="relative">
                      {/* Features */}
                      <div className="space-y-4 mb-8">
                        <h4 className={`font-semibold text-lg mb-4 flex items-center ${
                          plan.popular ? 'text-white' : 'text-white'
                        }`}>
                          <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                          Inclus dans ce plan
                        </h4>
                        <ul className="space-y-3">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className={`flex items-start ${
                              plan.popular ? 'text-cyan-100' : 'text-gray-300'
                            }`}>
                              <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                              <span className="text-sm leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        {/* Limitations */}
                        {plan.limitations.length > 0 && (
                          <div className="mt-6 pt-4 border-t border-gray-700">
                            <h4 className="text-gray-400 font-medium text-sm mb-3 flex items-center">
                              <X className="w-4 h-4 text-red-400 mr-2" />
                              Limitations
                            </h4>
                            <ul className="space-y-2">
                              {plan.limitations.map((limitation, limitIndex) => (
                                <li key={limitIndex} className="flex items-start text-gray-500">
                                  <X className="w-4 h-4 text-red-400 mr-3 flex-shrink-0 mt-0.5" />
                                  <span className="text-xs">{limitation}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      
                      {/* CTA Button */}
                      <Button 
                        className={`w-full h-14 text-lg font-semibold transition-all duration-300 ${
                          plan.popular 
                            ? 'bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 hover:from-blue-600 hover:via-cyan-600 hover:to-teal-600 text-white shadow-lg hover:shadow-xl' 
                            : plan.name === 'Découverte'
                            ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white'
                            : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40'
                        }`}
                        size="lg"
                        asChild
                      >
                        <Link to={plan.name === 'Enterprise' ? "/contact" : "/auth"} className="flex items-center justify-center">
                          {plan.cta}
                          {plan.name === 'Enterprise' ? (
                            <MessageSquare className="ml-2 h-5 w-5" />
                          ) : (
                            <ArrowRight className="ml-2 h-5 w-5" />
                          )}
                        </Link>
                      </Button>
                      
                      {/* Additional Info */}
                      {plan.popular && (
                        <div className="text-center mt-4">
                          <p className="text-xs text-cyan-300">
                            ✨ Le choix de 85% de nos clients
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {/* Money Back Guarantee */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center mt-12"
            >
              <div className="inline-flex items-center bg-green-500/10 border border-green-500/20 rounded-full px-6 py-3">
                <Shield className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-green-400 font-medium">
                  Garantie Satisfait ou Remboursé 30 jours
                </span>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-900/40 to-purple-900/40 rounded-2xl overflow-hidden border border-white/10">
              <div className="p-12 md:p-16 relative">
                <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500 opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
                
                <div className="relative z-10 text-center">
                  <Rocket className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Prêt à Révolutionner Votre Business ?
                  </h2>
                  <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                    Rejoignez les centaines d'entrepreneurs qui ont transformé leur activité grâce à DOM CRM. 
                    Configuration en 5 minutes, résultats garantis dès le premier mois.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 transition-opacity text-white" asChild>
                      <Link to="/auth">
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Démarrer Gratuitement
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="text-white border-white/50 hover:bg-white/10" asChild>
                      <Link to="/contact">
                        <Calendar className="mr-2 h-4 w-4" />
                        Réserver une Démo
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-center gap-8 text-sm text-gray-400 mt-8">
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 mr-2" />
                      Sécurisé & RGPD
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Support 24/7
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      Garantie Satisfait
                    </div>
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

export default CRMAccess;
