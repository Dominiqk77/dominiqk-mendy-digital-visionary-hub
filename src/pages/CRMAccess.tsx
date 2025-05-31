import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
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
  Infinity,
  Timer,
  Gift
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
      price: "GRATUIT",
      originalPrice: null,
      period: "À vie",
      description: "Testez DOM CRM gratuitement",
      features: [
        "1 projet de test",
        "5 leads maximum",
        "50 appels API/mois",
        "Templates IA basiques",
        "Support communautaire",
        "Analytics de base",
        "Essai 7 jours complet"
      ],
      limitations: [
        "Fonctionnalités limitées",
        "Pas de support prioritaire"
      ],
      popular: false,
      cta: "Essayer Gratuitement",
      highlight: "🎁 GRATUIT",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      name: "Formule Pro",
      price: "99€",
      originalPrice: "149€",
      period: "par mois",
      description: "Pour entrepreneurs ambitieux",
      features: [
        "10 projets actifs",
        "500 leads qualifiés",
        "10 000 appels API/mois",
        "IA GPT-4 + tous templates premium",
        "Automatisations complètes",
        "Support prioritaire 24/7",
        "Analytics avancées + prédictions",
        "Intégrations premium illimitées",
        "Formation personnalisée incluse",
        "ROI garanti +200% ou remboursé"
      ],
      limitations: [],
      popular: true,
      cta: "Démarrer Maintenant",
      highlight: "🔥 PLUS POPULAIRE",
      savings: "Économisez 50€/mois - PROMO FLASH !",
      gradient: "from-orange-500 to-red-600"
    },
    {
      name: "Formule Business",
      price: "299€",
      originalPrice: "399€",
      period: "par mois",
      description: "Pour équipes et agences",
      features: [
        "50 projets actifs",
        "2 000 leads illimités",
        "50 000 appels API/mois",
        "IA sur-mesure + White-label",
        "Automatisations avancées",
        "Account manager dédié",
        "Analytics prédictives",
        "API complète + webhooks",
        "Multi-utilisateurs (5 comptes)",
        "Onboarding VIP personnalisé",
        "SLA 99.9% garanti",
        "Consulting stratégique inclus"
      ],
      limitations: [],
      popular: false,
      cta: "Choisir Business",
      highlight: "👑 MEILLEURE VALEUR",
      savings: "Économisez 100€/mois",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      name: "Enterprise VIP",
      price: "999€",
      originalPrice: "1499€",
      period: "par mois",
      description: "Solution complète enterprise",
      features: [
        "Projets ILLIMITÉS",
        "Leads ILLIMITÉS",
        "500 000 appels API/mois",
        "IA personnalisée + développements",
        "Infrastructure dédiée",
        "Équipe support dédiée 24/7",
        "Consulting stratégique premium",
        "Développements sur-mesure",
        "Utilisateurs illimités",
        "Formation équipe complète",
        "ROI garanti +500%",
        "Accès direct au fondateur",
        "Priorité absolue support"
      ],
      limitations: [],
      popular: false,
      cta: "Nous Contacter",
      highlight: "💎 EXCLUSIF VIP",
      savings: "Économisez 500€/mois",
      gradient: "from-indigo-600 to-purple-800"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      
      {/* Dark Modern Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-slate-950 to-black z-0">
        {/* Subtle animated gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-purple-900/10 to-slate-900/10 animate-pulse"></div>
        
        {/* Darker geometric shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Darker grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Dimmer floating particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/15 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <main className="flex-grow z-10 relative">
        {/* Hero Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={animationVariants}
              transition={{ duration: 0.7 }}
              className="max-w-5xl mx-auto text-center"
            >
              {/* Flash Promo Banner */}
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-lg font-bold mb-6 animate-pulse shadow-lg">
                <Timer className="w-5 h-5 mr-2" />
                🔥 PROMO FLASH -33% - Plus que 24h !
              </div>
              
              <div className="inline-block px-4 py-1.5 bg-portfolio-purple/10 backdrop-blur-sm rounded-full text-portfolio-purple border border-portfolio-purple/20 text-sm font-medium mb-4">
                <div className="flex items-center gap-2">
                  <BrainCircuit className="h-4 w-4" />
                  <span>CRM Révolutionnaire #1 en France</span>
                  <Badge className="bg-emerald-500 text-white text-xs px-2 py-0.5 animate-bounce">
                    +1000 CLIENTS
                  </Badge>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-orange-500">DOM CRM</span>
              </h1>
              
              <div className="h-1 w-32 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6"></div>
              
              <p className="text-2xl text-gray-200 mb-8 leading-relaxed">
                La machine à cash ultime qui transforme vos visiteurs en clients 24/7.
                <br />
                <span className="text-orange-400 font-bold">ROI moyen +300% garanti ou remboursé !</span>
              </p>
              
              <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-6 border-2 border-green-300 mb-8">
                <div className="text-2xl font-bold text-green-800 mb-2">
                  🎯 GARANTIE ROI 300% ou REMBOURSÉ INTÉGRAL
                </div>
                <div className="text-green-700 text-lg">
                  + de 1000 entrepreneurs ont multiplié leur CA grâce à DOM CRM
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-600 hover:opacity-90 text-white text-xl px-8 py-4 h-16 animate-pulse shadow-xl">
                  <Link to="/auth" className="flex items-center">
                    <Rocket className="mr-2 h-6 w-6" />
                    COMMENCER MAINTENANT
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Link>
                </Button>
                
                <Button size="lg" variant="outline" className="text-white border-white/50 hover:bg-white/10 text-lg px-6 py-4 h-16">
                  <Link to="/contact" className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Voir Démo Live
                  </Link>
                </Button>
              </div>
              
              <div className="flex justify-center items-center space-x-8 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Gift className="w-5 h-5 text-green-400" />
                  <span className="font-semibold">✨ Essai GRATUIT 14 jours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="font-semibold">🛡️ Garantie 60 jours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-green-400" />
                  <span className="font-semibold">🚀 Sans engagement</span>
                </div>
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
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Tarifs qui <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Explosent</span> votre CA
              </h2>
              <div className="h-1 w-40 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Choisissez le plan qui transformera votre business en machine à cash. 
                Plus de 1000 entrepreneurs ont déjà multiplié leur revenus grâce à DOM CRM.
              </p>
              
              {/* Flash Sale Banner */}
              <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-6 mt-8 border-2 border-red-400">
                <div className="text-2xl font-bold text-white mb-2 animate-pulse">
                  ⚡ FLASH SALE - 50% DE RÉDUCTION ⚡
                </div>
                <div className="text-red-100 text-lg">
                  Offre limitée - Plus que 24h pour en profiter !
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
                      <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg animate-bounce">
                        <Star className="w-4 h-4 fill-current" />
                        {plan.highlight}
                        <Crown className="w-4 h-4" />
                      </div>
                    </div>
                  )}

                  {/* Other Badges */}
                  {!plan.popular && plan.highlight && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <Badge className={`${
                        plan.name === 'Découverte' 
                          ? 'bg-green-500/90 text-white border-green-400' 
                          : plan.name === 'Enterprise VIP'
                          ? 'bg-purple-600/90 text-white border-purple-400'
                          : 'bg-blue-500/90 text-white border-blue-400'
                      } px-4 py-2 font-bold text-sm`}>
                        {plan.highlight}
                      </Badge>
                    </div>
                  )}

                  {/* Savings Badge */}
                  {plan.savings && (
                    <div className="absolute -top-2 -right-2 z-20">
                      <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse shadow-lg">
                        {plan.savings.split(' ')[0]} {plan.savings.split(' ')[1]}
                      </div>
                    </div>
                  )}
                  
                  <Card className={`h-full relative overflow-hidden transition-all duration-500 group-hover:scale-105 ${
                    plan.popular 
                      ? 'border-4 border-orange-400 shadow-2xl shadow-orange-500/30 bg-gradient-to-br from-orange-50/10 to-red-50/10 backdrop-blur-lg' 
                      : plan.name === 'Enterprise VIP'
                      ? 'border-4 border-purple-400 shadow-2xl shadow-purple-500/30 bg-gradient-to-br from-purple-50/10 to-indigo-50/10 backdrop-blur-lg'
                      : plan.name === 'Découverte'
                      ? 'border-2 border-green-400 shadow-xl shadow-green-500/20 bg-gradient-to-br from-green-50/10 to-emerald-50/10 backdrop-blur-lg'
                      : 'border-2 border-blue-400 shadow-xl shadow-blue-500/20 bg-gradient-to-br from-blue-50/10 to-purple-50/10 backdrop-blur-lg'
                  }`}>
                    
                    {/* Animated Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-5 group-hover:opacity-15 transition-opacity`}></div>
                    
                    {/* Card Header */}
                    <CardHeader className="text-center pb-8 relative z-10">
                      <div className="relative z-10">
                        <CardTitle className="text-2xl font-bold mb-4 text-white">
                          {plan.name}
                        </CardTitle>
                        
                        {/* Pricing */}
                        <div className="mb-6">
                          {plan.originalPrice && (
                            <div className="text-xl line-through mb-2 text-gray-400">
                              {plan.originalPrice}/mois
                            </div>
                          )}
                          <div className={`text-6xl font-black mb-2 ${
                            plan.popular ? 'text-orange-400' : 
                            plan.name === 'Enterprise VIP' ? 'text-purple-400' :
                            plan.name === 'Découverte' ? 'text-green-400' :
                            'text-blue-400'
                          }`}>
                            {plan.price}
                          </div>
                          <div className="text-sm text-gray-300 font-medium">
                            {plan.period}
                          </div>
                          {plan.originalPrice && (
                            <div className="inline-block bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-bold mt-3 border border-red-400">
                              -{Math.round(((parseInt(plan.originalPrice.replace('€', '')) - parseInt(plan.price.replace('€', '') || '0')) / parseInt(plan.originalPrice.replace('€', ''))) * 100)}% AUJOURD'HUI !
                            </div>
                          )}
                        </div>
                        
                        <CardDescription className="text-base text-gray-200 font-medium">
                          {plan.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    
                    {/* Card Content */}
                    <CardContent className="relative z-10">
                      {/* Features */}
                      <div className="space-y-6 mb-8">
                        <h4 className="font-bold text-lg mb-4 flex items-center text-white">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                          Tout inclus
                        </h4>
                        <ul className="space-y-4">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start text-gray-200">
                              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-3 mt-0.5">
                                <Check className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-sm leading-relaxed font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        {/* Limitations */}
                        {plan.limitations.length > 0 && (
                          <div className="mt-6 pt-4 border-t border-gray-600">
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
                        className={`w-full h-16 text-lg font-bold transition-all duration-300 shadow-xl hover:shadow-2xl ${
                          plan.popular 
                            ? 'bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white animate-pulse' 
                            : plan.name === 'Enterprise VIP'
                            ? 'bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white'
                            : plan.name === 'Découverte'
                            ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'
                            : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                        }`}
                        size="lg"
                        asChild
                      >
                        <Link to={plan.name === 'Enterprise VIP' ? "/contact" : "/auth"} className="flex items-center justify-center">
                          {plan.cta}
                          {plan.name === 'Enterprise VIP' ? (
                            <MessageSquare className="ml-2 h-5 w-5" />
                          ) : (
                            <ArrowRight className="ml-2 h-5 w-5" />
                          )}
                        </Link>
                      </Button>
                      
                      {/* Special Offers */}
                      {plan.popular && (
                        <div className="text-center mt-4 bg-orange-500/20 rounded-lg p-4 border border-orange-400">
                          <p className="text-orange-200 font-bold text-sm">
                            🎁 BONUS : Formation 1-on-1 OFFERTE (valeur 497€)
                          </p>
                        </div>
                      )}
                      
                      {plan.name === 'Enterprise VIP' && (
                        <div className="text-center mt-4 bg-purple-500/20 rounded-lg p-4 border border-purple-400">
                          <p className="text-purple-200 font-bold text-sm">
                            👑 VIP : Accès direct au fondateur + consulting premium
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {/* Guarantee Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-16"
            >
              <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border-2 border-green-400 rounded-2xl p-8 backdrop-blur-lg">
                <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <div className="text-2xl font-bold text-white mb-4">
                  🔒 GARANTIE SATISFAIT OU REMBOURSÉ 60 JOURS
                </div>
                <div className="text-green-200 text-lg max-w-2xl mx-auto">
                  Testez DOM CRM sans aucun risque. Si vous n'obtenez pas au minimum +200% de ROI, 
                  nous vous remboursons intégralement, sans questions.
                </div>
                <div className="mt-6 flex justify-center space-x-8 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    <span>Note 4.9/5 (1000+ avis)</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
                    <span>ROI moyen +300%</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-blue-400 mr-2" />
                    <span>+1000 clients satisfaits</span>
                  </div>
                </div>
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
