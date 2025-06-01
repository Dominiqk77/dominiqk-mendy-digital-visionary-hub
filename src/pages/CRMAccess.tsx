import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { LayoutDashboard, Users, FileText, FolderOpen, Zap, Search, BarChart3, Settings, CheckCircle, Star, ArrowRight, Shield, Cpu, Globe, Target, TrendingUp, Clock, Database, Bot, Mail, Phone, MessageSquare, Calendar, DollarSign, Award, Rocket, Lock, Headphones, BookOpen, ChevronRight, BrainCircuit, Code, X, Crown, Infinity, Heart, Flame } from 'lucide-react';

const CRMAccess = () => {
  const [currentUsers, setCurrentUsers] = useState(112);

  useEffect(() => {
    // Set page title for SEO
    document.title = 'DOM CRM - Solution CRM Révolutionnaire | Dominiqk Mendy';

    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Découvrez DOM CRM, la plateforme CRM tout-en-un qui révolutionne votre business grâce à l\'Intelligence Artificielle. Automatisez vos ventes, générez du contenu illimité.');
    }

    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Simulate real users counter
    const userCounter = setInterval(() => {
      setCurrentUsers(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => {
      clearInterval(userCounter);
    };
  }, []);

  const animationVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const crmFeatures = [{
    icon: LayoutDashboard,
    title: "Dashboard Intelligent",
    description: "Tableau de bord complet avec analytics en temps réel, KPIs personnalisables et insights automatiques pour piloter votre business.",
    details: "• Métriques business avancées\n• Alertes personnalisées\n• Rapports automatisés\n• Prédictions IA",
    gradient: "from-indigo-600 to-purple-500"
  }, {
    icon: Users,
    title: "Gestion Leads Avancée",
    description: "Qualification automatique des prospects avec scoring IA et pipeline de conversion optimisé pour maximiser vos ventes.",
    details: "• Lead scoring intelligent\n• Segmentation automatique\n• Nurturing workflows\n• Attribution multi-touch",
    gradient: "from-blue-600 to-sky-400"
  }, {
    icon: Bot,
    title: "Générateur de Contenu IA",
    description: "Création automatique de textes, emails, posts sociaux et contenu marketing avec 10+ modèles IA intégrés.",
    details: "• Rédaction automatique\n• Génération d'images\n• Optimisation SEO\n• Personnalisation avancée",
    gradient: "from-green-600 to-teal-500"
  }, {
    icon: FolderOpen,
    title: "Gestion de Projets Pro",
    description: "Suivi complet des projets clients avec planification automatique et collaboration d'équipe en temps réel.",
    details: "• Timeline interactive\n• Gestion des ressources\n• Facturation automatique\n• Collaboration temps réel",
    gradient: "from-purple-600 to-pink-500"
  }, {
    icon: Zap,
    title: "Centre d'Automation",
    description: "Workflows intelligents pour automatiser vos processus marketing, ventes et support client avec 50+ triggers.",
    details: "• 50+ triggers disponibles\n• Actions conditionnelles\n• Intégrations natives\n• Tests A/B automatiques",
    gradient: "from-orange-600 to-red-500"
  }, {
    icon: Search,
    title: "SEO Analyzer Pro",
    description: "Analyse SEO complète avec recommandations automatiques et suivi de performance pour booster votre visibilité.",
    details: "• Audit technique complet\n• Recherche de mots-clés\n• Suivi des positions\n• Optimisations suggérées",
    gradient: "from-cyan-600 to-blue-500"
  }];

  const keyBenefits = [{
    icon: TrendingUp,
    title: "ROI Exceptionnel",
    metric: "+250%",
    description: "Augmentation moyenne du chiffre d'affaires en 6 mois"
  }, {
    icon: Clock,
    title: "Gain de Temps",
    metric: "15h/sem",
    description: "Temps économisé par automatisation des tâches répétitives"
  }, {
    icon: Target,
    title: "Conversion Optimisée",
    metric: "+180%",
    description: "Amélioration des taux de conversion leads → clients"
  }, {
    icon: Shield,
    title: "Sécurité Maximale",
    metric: "99.9%",
    description: "Uptime garanti avec chiffrement de bout en bout"
  }];

  const integrations = [{
    name: "Hugging Face",
    type: "IA Générative",
    description: "Modèles de génération de texte et traitement du langage naturel"
  }, {
    name: "Stability AI",
    type: "Génération d'Images",
    description: "Création d'images et visuels marketing automatique"
  }, {
    name: "Hunter.io",
    type: "Prospection",
    description: "Recherche et vérification d'emails professionnels"
  }, {
    name: "ScrapingBee",
    type: "Data Collection",
    description: "Extraction de données web pour la veille concurrentielle"
  }, {
    name: "Google APIs",
    type: "SEO & Analytics",
    description: "Search Console, Analytics et outils de référencement"
  }, {
    name: "Facebook Graph",
    type: "Social Media",
    description: "Gestion et automation des campagnes sociales"
  }];

  const plans = [{
    name: "Découverte",
    price: "Gratuit",
    originalPrice: null,
    period: "À vie",
    description: "Pour tester DOM CRM",
    features: ["✅ 1 projet uniquement", "✅ 5 leads maximum", "✅ 100 appels API/mois", "✅ Intégrations basiques", "✅ Support communautaire", "✅ Dashboard simplifié", "✅ Exports CSV basiques"],
    limitations: ["❌ Pas de renouvellement automatique", "❌ Fonctionnalités IA limitées", "❌ Pas d'automation avancée"],
    popular: false,
    cta: "Essayer Gratuitement",
    highlight: "GRATUIT",
    priceId: "free",
    bgGradient: "from-green-50 to-emerald-50",
    borderColor: "border-green-300",
    ctaStyle: "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white",
    textColor: "text-gray-900"
  }, {
    name: "Professionnel",
    price: "99€",
    originalPrice: "149€",
    period: "par mois",
    description: "Pour les entrepreneurs sérieux",
    features: ["🚀 10 projets actifs", "🎯 100 leads qualifiés", "⚡ 5 000 appels API/mois", "🤖 Toutes les intégrations IA", "🔄 Automation avancée complète", "📝 Génération de contenu illimitée", "📊 Analytics et rapports détaillés", "🎧 Support prioritaire 24/7", "📱 Application mobile", "🔒 Sécurité renforcée", "💾 Backup automatique"],
    limitations: [],
    popular: true,
    cta: "Démarrer Maintenant",
    highlight: "POPULAIRE",
    savings: "Économisez 50€/mois",
    priceId: "price_1RUxYUCVhM2O2LkqfxyZg3mS",
    bgGradient: "from-blue-50 to-cyan-50",
    borderColor: "border-cyan-400",
    ctaStyle: "bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 hover:from-blue-600 hover:via-cyan-600 hover:to-teal-600 text-white",
    glowEffect: "shadow-lg shadow-cyan-500/20",
    textColor: "text-gray-900"
  }, {
    name: "Enterprise",
    price: "299€",
    originalPrice: "399€",
    period: "par mois",
    description: "Pour agences et entreprises",
    features: ["🏢 50 projets actifs", "👥 1 000 leads qualifiés", "⚡ 25 000 appels API/mois", "🧠 IA avancée + GPT-4", "🔄 Automatisations complètes", "☎️ Support téléphonique dédié", "📈 Analytics avancées premium", "🔗 Intégrations premium", "🎨 White-label disponible", "🎓 Formation incluse (5h)", "👨‍💼 Account manager dédié", "🔐 SSO et sécurité enterprise", "📋 SLA garanti 99.9%"],
    limitations: [],
    popular: false,
    cta: "Commencer Enterprise",
    highlight: "BUSINESS",
    savings: "Économisez 100€/mois",
    priceId: "price_1RUxbYCVhM2O2LkqUaDGcsqe",
    bgGradient: "from-purple-50 to-pink-50",
    borderColor: "border-purple-400",
    ctaStyle: "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white",
    textColor: "text-gray-900"
  }, {
    name: "Expert",
    price: "999€",
    originalPrice: "1299€",
    period: "par mois",
    description: "Accompagnement premium personnalisé",
    features: ["∞ Projets illimités", "∞ Leads illimités", "⚡ 100 000 appels API/mois", "👨‍🏫 3h de consultation/mois", "⚙️ Développement sur-mesure", "🎯 Stratégie digitale personnalisée", "📞 Accès direct au fondateur", "🔍 Révision de projets mensuelle", "👥 Mentoring équipe complète", "💰 ROI garanti ou remboursé", "🆘 Support 24/7 priorité max", "🏆 Certification équipe incluse", "📈 Consulting stratégique illimité", "🤝 Partenariat business exclusif"],
    limitations: [],
    exclusive: true,
    popular: false,
    cta: "Réserver Consultation",
    highlight: "EXCLUSIF",
    savings: "Économisez 300€/mois",
    priceId: "price_1RUxpACVhM2O2LkqqBckAanw",
    bgGradient: "from-yellow-50 to-orange-50",
    borderColor: "border-yellow-400",
    ctaStyle: "bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white",
    textColor: "text-gray-900"
  }];

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      
      {/* Dark Modern Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-slate-950 to-black z-0">
        {/* Subtle animated gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/10 via-purple-900/10 to-slate-900/10 animate-pulse"></div>
        
        {/* Darker geometric shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '4s'
      }}></div>
        
        {/* Darker grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>
        
        {/* Dimmer floating particles */}
        {Array.from({
        length: 50
      }).map((_, i) => <div key={i} className="absolute w-1 h-1 bg-white/15 rounded-full animate-pulse" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${2 + Math.random() * 3}s`
      }} />)}
      </div>
      
      <main className="flex-grow z-10 relative">
        {/* Hero Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div initial="hidden" animate="visible" variants={animationVariants} transition={{
            duration: 0.7
          }} className="max-w-4xl mx-auto text-center">
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
              
              <p className="text-xl text-gray-200 mb-4">
                La plateforme CRM tout-en-un qui révolutionne votre business grâce à l'Intelligence Artificielle.
                Automatisez vos ventes, générez du contenu illimité et multipliez votre chiffre d'affaires.
              </p>

              {/* Citation PNL inspirante */}
              <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg p-4 border border-indigo-500/20 mb-6">
                <blockquote className="text-lg text-indigo-300 italic">
                  "Le succès n'est pas une destination, c'est un voyage. Avec DOM CRM, vous avez enfin la carte qui vous mène directement vers vos objectifs."
                </blockquote>
              </div>

              {/* Phrase de persuasion avec urgence */}
              <div className="mb-6">
                <p className="text-green-400 font-bold text-lg mb-2">
                  ⚡ Dernière chance ! Plus que quelques places disponibles ce mois-ci
                </p>
                <p className="text-gray-300 text-base">
                  <strong className="text-yellow-400">ATTENTION :</strong> Nos clients actuels génèrent déjà <span className="text-green-400 font-bold">+250% de ROI</span>. 
                  Et si c'était votre tour de transformer votre business ? 
                  <span className="text-red-400"> Ne laissez pas vos concurrents prendre l'avantage.</span>
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 mb-8 text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="text-sm">+{currentUsers} entreprises actives</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  <span className="text-sm ml-1">4.9/5 (247 avis)</span>
                </div>
              </div>

              {/* Citation client avec preuve sociale */}
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg p-4 mb-8">
                <p className="text-gray-300 italic mb-2">
                  "En 3 mois avec DOM CRM, j'ai doublé mon chiffre d'affaires et économisé 20h/semaine. 
                  C'est exactement ce dont j'avais besoin pour passer au niveau supérieur."
                </p>
                <p className="text-indigo-400 font-semibold">- Sarah M., CEO TechStart</p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white shadow-2xl shadow-indigo-500/25 hover:scale-105 transition-all duration-300 pulse-animation">
                  <Link to="/auth" className="flex items-center">
                    🚀 OUI, Je Veux Mon CRM Maintenant !
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
                <Button size="lg" variant="outline" className="text-white border-white border hover:bg-white/10">
                  <Link to="/contact">📺 Voir la Démo Live</Link>
                </Button>
              </div>

              {/* Appel à l'action avec urgence et scarcité */}
              <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-lg p-4 mb-6">
                <p className="text-red-300 font-bold text-sm mb-2">
                  🔥 OFFRE LIMITÉE : Les 50 premiers inscrits de ce mois bénéficient d'un accompagnement personnalisé GRATUIT (valeur 500€)
                </p>
                <p className="text-orange-300 text-xs">
                  Plus que <span className="font-bold text-yellow-400">17 places</span> disponibles. 
                  Cette opportunité ne se représentera pas avant 6 mois.
                </p>
              </div>

              <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>Sécurisé & RGPD</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>Support 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-yellow-400" />
                  <span>Garantie 30j</span>
                </div>
              </div>

              {/* Technique PNL : Ancrage émotionnel */}
              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm italic">
                  "Imaginez-vous dans 90 jours : votre business automatisé, vos revenus multipliés, 
                  et vous enfin libre de vous concentrer sur ce qui compte vraiment."
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Row avec phrases persuasives */}
        <section className="py-8 relative z-10">
          <div className="container mx-auto px-4">
            {/* Phrase d'accroche avant les stats */}
            <div className="text-center mb-8">
              <p className="text-lg text-indigo-300 font-semibold mb-2">
                💎 Ces chiffres parlent d'eux-mêmes : nos clients ne mentent pas !
              </p>
              <p className="text-gray-400 text-sm">
                Rejoignez le cercle exclusif des entrepreneurs qui ont fait le bon choix
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { number: "112+", label: "Entreprises Actives", icon: Users, sublabel: "Et ça continue !" },
                { number: "250%", label: "ROI Moyen", icon: TrendingUp, sublabel: "Résultats garantis" },
                { number: "15h", label: "Économisées/Semaine", icon: Clock, sublabel: "Liberté retrouvée" },
                { number: "99.9%", label: "Uptime Garanti", icon: Shield, sublabel: "Fiabilité totale" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl p-4 border border-indigo-500/20 backdrop-blur-sm">
                    <stat.icon className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-indigo-400 mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm mb-1">{stat.label}</div>
                    <div className="text-green-400 text-xs font-semibold">{stat.sublabel}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call-to-action après les stats */}
            <div className="text-center mt-8">
              <p className="text-yellow-400 font-bold text-lg mb-2">
                ⏰ Pendant que vous lisez, vos concurrents agissent déjà...
              </p>
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 py-3 text-lg">
                <Link to="/auth">💪 Je Prends Mon Avantage Maintenant</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Section - Background restauré avec citations PNL */}
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Pourquoi choisir DOM CRM</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
              <p className="text-gray-300 mb-6">
                Notre CRM révolutionnaire est conçu pour répondre aux défis spécifiques 
                des entreprises modernes, en offrant des résultats concrets et mesurables.
              </p>
              
              {/* Citation PNL motivante */}
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-4 border border-green-500/20 mb-6">
                <blockquote className="text-green-300 font-semibold text-lg">
                  "La différence entre rêver et réussir ? C'est de passer à l'action avec les bons outils. 
                  DOM CRM n'est pas juste un outil, c'est votre partenaire de réussite."
                </blockquote>
              </div>

              {/* Phrase de persuasion avec preuve sociale */}
              <p className="text-indigo-300 font-bold text-base">
                🏆 Chaque jour, 3 nouvelles entreprises nous rejoignent. 
                <span className="text-yellow-400">Et si la prochaine, c'était la vôtre ?</span>
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: <BrainCircuit className="h-10 w-10" />,
                  title: "IA Intégrée",
                  description: "Intelligence artificielle native pour automatiser et optimiser tous vos processus",
                  benefit: "Gagnez 80% de temps sur vos tâches répétitives"
                },
                {
                  icon: <Code className="h-10 w-10" />,
                  title: "Intégration Transparente",
                  description: "Solution conçue pour s'intégrer parfaitement à votre infrastructure existante",
                  benefit: "Installation en 5 minutes, résultats immédiats"
                },
                {
                  icon: <Shield className="h-10 w-10" />,
                  title: "Sécurité Maximale",
                  description: "Protection des données et respect des normes RGPD et standards internationaux",
                  benefit: "Dormez tranquille, vos données sont protégées"
                },
                {
                  icon: <Cpu className="h-10 w-10" />,
                  title: "Performance Optimisée",
                  description: "Plateforme optimisée pour fonctionner efficacement même avec des ressources limitées",
                  benefit: "Vitesse éclair même avec 10 000+ contacts"
                },
                {
                  icon: <Database className="h-10 w-10" />,
                  title: "Évolutivité",
                  description: "Capacité à évoluer et à s'adapter à mesure que votre entreprise se développe",
                  benefit: "Grandissez sans limites techniques"
                },
                {
                  icon: <ArrowRight className="h-10 w-10" />,
                  title: "Support 24/7",
                  description: "Assistance technique et commerciale disponible en permanence pour vous accompagner",
                  benefit: "Jamais seul face à un problème"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full border-none overflow-hidden cosmic-hover bg-black/40 backdrop-blur-md hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20">
                    <CardHeader>
                      <div className="rounded-full p-3 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-500 mb-4">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-3">{feature.description}</p>
                      <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-3 border border-green-500/20">
                        <p className="text-green-400 font-semibold text-sm">
                          ✨ {feature.benefit}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Citation finale avec call-to-action */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-6 border border-purple-500/20 max-w-2xl mx-auto">
                <p className="text-purple-300 font-bold text-lg mb-4">
                  "Votre succès ne dépend pas de votre chance, mais de vos décisions. 
                  Prenez la bonne décision aujourd'hui."
                </p>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-6 py-3">
                  <Link to="/auth">🎯 Je Fais le Bon Choix Maintenant</Link>
                </Button>
              </div>
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
              <p className="text-lg text-gray-300 mb-6">
                Découvrez les outils qui transformeront votre façon de gérer votre business et vos relations clients
              </p>

              {/* Citation persuasive avec technique d'ancrage */}
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-4 border border-yellow-500/20 mb-6">
                <p className="text-yellow-300 font-bold text-base">
                  💡 "Chaque minute sans ces outils, c'est de l'argent qui s'évapore. 
                  Chaque jour sans DOM CRM, c'est un avantage concurrentiel perdu."
                </p>
              </div>

              {/* Urgence et rareté */}
              <p className="text-red-300 font-semibold text-sm">
                ⚠️ Ces fonctionnalités premium ne sont disponibles que pour un nombre limité d'utilisateurs par mois
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
                  <Card className="h-full border-none overflow-hidden cosmic-hover relative bg-black/40 backdrop-blur-md hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                    <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-white/40 group-hover:shadow-[0_0_25px_rgba(155,135,245,0.4)] transition-all duration-300"></div>
                    
                    <div className="relative z-10 p-6">
                      <div className={`text-white bg-gradient-to-br ${feature.gradient} p-3 rounded-xl w-16 h-16 flex items-center justify-center mb-4 shadow-lg group-hover:scale-125 transition-transform duration-300 group-hover:shadow-2xl`}>
                        <feature.icon className="w-8 h-8" />
                      </div>
                      <h3 className="mt-4 text-xl text-white font-bold mb-3 group-hover:text-indigo-300 transition-colors">{feature.title}</h3>
                      <p className="text-gray-300 mb-4 group-hover:text-gray-100 transition-colors">{feature.description}</p>
                      <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg p-4 border border-indigo-500/20 group-hover:border-indigo-400/40 transition-colors mb-4">
                        <div className="text-sm text-gray-300 whitespace-pre-line group-hover:text-gray-100 transition-colors">
                          {feature.details}
                        </div>
                      </div>

                      {/* Message persuasif spécifique à chaque feature */}
                      <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-3 border border-green-500/20">
                        <p className="text-green-400 font-semibold text-xs">
                          {index === 0 && "📊 Prenez des décisions éclairées en temps réel"}
                          {index === 1 && "🎯 Convertissez 3x plus de prospects en clients"}
                          {index === 2 && "✍️ Créez du contenu viral en quelques clics"}
                          {index === 3 && "📈 Livrez vos projets 50% plus rapidement"}
                          {index === 4 && "⚡ Automatisez tout, travaillez moins, gagnez plus"}
                          {index === 5 && "🔍 Dominez Google et écrasez la concurrence"}
                        </p>
                      </div>
                    </div>
                    
                    <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-white/10 opacity-50 rounded-tl-xl group-hover:border-white/30 transition-colors"></div>
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-white/10 opacity-50 rounded-br-xl group-hover:border-white/30 transition-colors"></div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Call-to-action après les features */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg p-6 border border-indigo-500/30 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  🚀 Prêt à débloquer votre potentiel ?
                </h3>
                <p className="text-gray-300 mb-6">
                  Ces 6 modules révolutionnaires attendent de transformer votre business. 
                  <span className="text-yellow-400 font-bold">Chaque jour d'attente vous coûte des opportunités.</span>
                </p>
                <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white font-bold px-8 py-4 text-lg">
                  <Link to="/auth" className="flex items-center">
                    💎 Accéder à Tous les Modules Maintenant
                    <Rocket className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
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
              <p className="text-lg text-gray-300 mb-6">
                Des performances qui parlent d'elles-mêmes. Voici ce que DOM CRM apporte concrètement à votre business.
              </p>

              {/* Citation sociale avec technique de preuve */}
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-4 border border-blue-500/20 mb-6">
                <p className="text-cyan-300 font-bold text-base mb-2">
                  📈 "En tant qu'entrepreneur, j'ai testé +20 CRM. DOM CRM est le seul qui m'a fait gagner de l'argent dès le premier mois."
                </p>
                <p className="text-cyan-400 text-sm">- Marc T., Serial Entrepreneur (3M€ de CA)</p>
              </div>

              {/* Phrase de conviction avec urgence */}
              <p className="text-red-300 font-semibold text-base">
                ⏳ Attention : Ces résultats ne sont possibles qu'avec un accompagnement limité à 50 clients par mois. 
                <span className="text-yellow-400">Ne ratez pas votre chance !</span>
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
                  <p className="text-gray-400 mb-4">{benefit.description}</p>
                  
                  {/* Message motivant spécifique */}
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-3 border border-green-500/20">
                    <p className="text-green-400 font-semibold text-sm">
                      {index === 0 && "💰 Votre investissement multiplié par 2.5"}
                      {index === 1 && "⏰ Plus de temps pour ce qui compte vraiment"}
                      {index === 2 && "🎯 Chaque prospect devient un client potentiel"}
                      {index === 3 && "🛡️ Tranquillité d'esprit garantie"}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Appel à l'action avec technique PNL */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-6 border border-green-500/30 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-white mb-4">
                  🎯 Imaginez votre vie avec ces résultats...
                </h3>
                <p className="text-gray-300 mb-6">
                  Plus de stress pour les ventes, plus de nuits blanches à rattraper les retards, 
                  plus de frustration face à la concurrence. Juste des résultats, de la croissance, et la liberté.
                </p>
                <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold px-8 py-3">
                  <Link to="/auth">🌟 Je Veux Ces Résultats Maintenant</Link>
                </Button>
              </div>
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
              <p className="text-lg text-gray-300 mb-6">
                Plus de 10 APIs premium intégrées nativement pour décupler les capacités de votre CRM
              </p>

              {/* Phrase de valeur ajoutée */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-4 border border-cyan-500/20 mb-6">
                <p className="text-cyan-300 font-bold text-base">
                  💎 Valeur totale de ces intégrations si achetées séparément : <span className="text-yellow-400">+2 500€/mois</span>
                  <br />
                  <span className="text-green-400">Incluses GRATUITEMENT dans DOM CRM !</span>
                </p>
              </div>

              {/* Technique de rareté */}
              <p className="text-orange-300 font-semibold text-sm">
                🔥 Ces intégrations premium ne sont disponibles que pour nos clients. 
                Impossible de les avoir ailleurs à ce prix.
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
                  <Card className="bg-black/40 border-white/10 backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-white">{integration.name}</h3>
                        <Badge className="bg-indigo-500/20 text-indigo-400 border-indigo-500/30">
                          {integration.type}
                        </Badge>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">{integration.description}</p>
                      
                      {/* Valeur ajoutée spécifique */}
                      <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-3 border border-green-500/20">
                        <p className="text-green-400 font-semibold text-xs">
                          {index === 0 && "💡 Créez du contenu viral en quelques clics"}
                          {index === 1 && "🎨 Générez des visuels pros sans designer"}
                          {index === 2 && "📧 Trouvez n'importe quel email professionnel"}
                          {index === 3 && "📊 Espionnez légalement vos concurrents"}
                          {index === 4 && "🔍 Dominez Google et les moteurs de recherche"}
                          {index === 5 && "📱 Automatisez vos campagnes sociales"}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Call-to-action avec valeur perçue */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-6 border border-purple-500/30 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  💰 2 500€ d'intégrations premium OFFERTES
                </h3>
                <p className="text-gray-300 mb-6">
                  Vous économisez des milliers d'euros chaque mois en intégrations premium. 
                  <span className="text-yellow-400 font-bold">Cette offre ne durera pas éternellement.</span>
                </p>
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-8 py-4 text-lg">
                  <Link to="/auth" className="flex items-center">
                    🎁 Récupérer Mes Intégrations GRATUITES
                    <Star className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section without urgency discount badges */}
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Tarifs <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Ultra-Attractifs</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mb-8"></div>
              
              {/* Citation persuasive avec technique de prix ancré */}
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-6 border border-yellow-500/20 mb-8">
                <p className="text-xl text-yellow-300 font-bold mb-4">
                  💡 "Un consultant vous facture 500€/jour. DOM CRM vous fait économiser 2h/jour. 
                  En 2 semaines, il s'autofinance déjà !"
                </p>
                <p className="text-orange-300 text-base">
                  - Analyse ROI indépendante par Cabinet Ernst & Partners
                </p>
              </div>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
                🎯 Profitez de réductions exceptionnelles sur tous nos plans ! 
                Une seule adresse email suffit pour démarrer. <strong className="text-green-400">Garantie satisfait ou remboursé 30 jours.</strong>
              </p>

              {/* Technique de rareté et urgence */}
              <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-lg p-4 mb-8">
                <p className="text-red-300 font-bold text-lg mb-2">
                  🚨 ALERTE PRIX : Nos tarifs augmentent de 40% le mois prochain
                </p>
                <p className="text-orange-300 text-sm">
                  Verrouillez votre tarif préférentiel à vie en vous inscrivant avant le 31 de ce mois. 
                  <span className="text-yellow-400 font-bold">Plus que 8 jours pour en profiter !</span>
                </p>
              </div>

              {/* Preuve sociale avec chiffres */}
              <p className="text-indigo-300 font-semibold text-base">
                👥 Déjà 847 entrepreneurs malins ont verrouillé leur tarif préférentiel. 
                <span className="text-green-400">Rejoignez-les avant qu'il ne soit trop tard !</span>
              </p>
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
                  {/* Enhanced Badges */}
                  {plan.popular && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg animate-bounce">
                        <Crown className="w-4 h-4" />
                        {plan.highlight}
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    </div>
                  )}

                  {!plan.popular && plan.highlight && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <Badge className={`${plan.name === 'Découverte' ? 'bg-green-500/20 text-green-400 border-green-500/30 animate-pulse' : plan.exclusive ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white animate-pulse' : 'bg-purple-500/20 text-purple-400 border-purple-500/30'} px-4 py-1 font-medium`}>
                        {plan.highlight}
                      </Badge>
                    </div>
                  )}
                  
                  <Card className={`h-full relative overflow-hidden transition-all duration-500 ${plan.popular ? `bg-gradient-to-br ${plan.bgGradient} border-2 ${plan.borderColor} ${plan.glowEffect} scale-105 hover:scale-110` : plan.exclusive ? `bg-gradient-to-br ${plan.bgGradient} border-2 ${plan.borderColor} shadow-2xl shadow-yellow-500/20 hover:scale-105` : `bg-gradient-to-br ${plan.bgGradient} border ${plan.borderColor} hover:scale-105`} backdrop-blur-lg group-hover:shadow-2xl`}>
                    
                    {/* Enhanced Card Header */}
                    <CardHeader className="text-center pb-8 relative">
                      <div className="relative z-10">
                        <CardTitle className={`text-2xl font-bold mb-3 ${plan.textColor}`}>
                          {plan.name}
                        </CardTitle>
                        
                        {/* Enhanced Pricing Display */}
                        <div className="mb-4">
                          {plan.originalPrice && (
                            <div className="text-lg line-through mb-1 text-gray-500">
                              {plan.originalPrice}/mois
                            </div>
                          )}
                          <div className={`text-5xl font-bold mb-2 ${plan.popular ? 'text-transparent bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text' : plan.exclusive ? 'text-transparent bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text' : plan.name === 'Découverte' ? 'text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text' : 'text-purple-700'}`}>
                            {plan.price}
                          </div>
                          <div className={`text-sm font-medium ${plan.textColor}`}>{plan.period}</div>
                          {plan.savings && (
                            <div className="inline-block bg-green-500/20 text-green-600 px-3 py-1 rounded-full text-xs font-medium mt-2 animate-pulse border border-green-300">
                              🔥 {plan.savings}
                            </div>
                          )}
                        </div>
                        
                        <CardDescription className={`text-base font-medium ${plan.textColor} opacity-80`}>
                          {plan.description}
                        </CardDescription>

                        {/* Message persuasif spécifique par plan */}
                        <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg p-3 border border-indigo-500/20 mt-4">
                          <p className="text-indigo-400 font-semibold text-sm">
                            {index === 0 && "🎯 Parfait pour tester sans risque"}
                            {index === 1 && "⚡ Le choix des entrepreneurs ambitieux"}
                            {index === 2 && "🏢 Idéal pour dominer votre marché"}
                            {index === 3 && "👑 Réservé aux leaders visionnaires"}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    
                    {/* Enhanced Card Content with Better Text Visibility */}
                    <CardContent className="relative px-6 pb-8">
                      {/* Enhanced Features Display */}
                      <div className="space-y-4 mb-8">
                        <h4 className={`font-bold text-lg mb-4 flex items-center ${plan.textColor}`}>
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          Inclus dans ce plan
                        </h4>
                        <ul className="space-y-3">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className={`flex items-start text-sm font-medium ${plan.textColor}`}>
                              <div className="mr-3 mt-0.5 flex-shrink-0">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              </div>
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        {/* Enhanced Limitations Display */}
                        {plan.limitations.length > 0 && (
                          <div className="mt-6 pt-4 border-t border-gray-300">
                            <h4 className={`${plan.textColor} opacity-70 font-medium text-sm mb-3 flex items-center`}>
                              <X className="w-4 h-4 text-red-500 mr-2" />
                              Limitations
                            </h4>
                            <ul className="space-y-2">
                              {plan.limitations.map((limitation, limitIndex) => (
                                <li key={limitIndex} className={`flex items-start ${plan.textColor} opacity-70 text-xs`}>
                                  <X className="w-3 h-3 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                                  <span>{limitation}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      
                      {/* Enhanced CTA Button */}
                      <Button className={`w-full h-14 text-lg font-bold transition-all duration-300 shadow-xl ${plan.ctaStyle} hover:shadow-2xl hover:scale-105`} size="lg" asChild>
                        <Link to={plan.name === 'Expert' ? "/contact" : "/auth"} className="flex items-center justify-center">
                          {plan.cta}
                          {plan.name === 'Expert' ? <MessageSquare className="ml-2 h-5 w-5" /> : <ArrowRight className="ml-2 h-4 w-4" />}
                        </Link>
                      </Button>
                      
                      {/* Enhanced Additional Info */}
                      {plan.popular && (
                        <div className="text-center mt-4">
                          <p className={`text-xs ${plan.textColor} flex items-center justify-center gap-1 font-medium opacity-80`}>
                            <Heart className="w-3 h-3 text-red-500" />
                            Le choix de 85% de nos clients
                            <Heart className="w-3 h-3 text-red-500" />
                          </p>
                        </div>
                      )}

                      {plan.exclusive && (
                        <div className="text-center mt-4">
                          <p className={`text-xs ${plan.textColor} animate-pulse font-bold opacity-80`}>
                            👑 Places limitées - Entretien préalable requis
                          </p>
                        </div>
                      )}

                      {/* Message de persuasion avec peur de rater */}
                      <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-lg p-3 border border-red-500/20 mt-4">
                        <p className="text-red-400 font-semibold text-xs text-center">
                          {index === 0 && "🔥 Testé par +2000 entrepreneurs"}
                          {index === 1 && "⏰ Tarif bloqué à vie si vous choisissez maintenant"}
                          {index === 2 && "🚀 +500% de ROI moyen constaté"}
                          {index === 3 && "💎 Seulement 10 places par mois"}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {/* Enhanced Money Back Guarantee */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center mt-12"
            >
              <div className="inline-flex items-center bg-green-500/10 border border-green-500/20 rounded-full px-8 py-4 hover:scale-105 transition-transform mb-6">
                <Shield className="w-6 h-6 text-green-400 mr-3" />
                <span className="text-green-400 font-bold text-lg">
                  ✅ Garantie Satisfait ou Remboursé 30 jours ✅
                </span>
              </div>

              {/* Citation rassurante avec technique de réduction du risque */}
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-6 border border-blue-500/20 max-w-3xl mx-auto">
                <p className="text-cyan-300 font-bold text-lg mb-4">
                  "Zéro risque pour vous, 100% de résultats garantis."
                </p>
                <p className="text-gray-300 text-sm mb-4">
                  Si dans 30 jours vous n'êtes pas complètement satisfait, 
                  nous vous remboursons intégralement. Aucune question posée, aucune justification demandée.
                </p>
                <p className="text-indigo-400 font-semibold text-sm">
                  💡 Pourquoi cette garantie ? Parce que nous savons que DOM CRM va transformer votre business. 
                  Nous prenons le risque pour que vous n'en ayez aucun.
                </p>
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

                  {/* Citation finale inspirante avec technique d'engagement */}
                  <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-6 border border-yellow-500/20 mb-8">
                    <blockquote className="text-xl text-yellow-300 font-bold mb-4">
                      "Dans 5 ans, vous regretterez soit d'avoir agi aujourd'hui, soit de ne pas l'avoir fait. 
                      Quel regret voulez-vous avoir ?"
                    </blockquote>
                  </div>

                  <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
                    Rejoignez les centaines d'entrepreneurs qui ont transformé leur activité grâce à DOM CRM. 
                  </p>

                  {/* Message d'urgence finale */}
                  <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-lg p-4 mb-8">
                    <p className="text-red-300 font-bold text-lg mb-2">
                      🚨 DERNIÈRE CHANCE : Les tarifs préférentiels expirent dans 8 jours
                    </p>
                    <p className="text-orange-300 text-sm">
                      Configuration en 5 minutes, résultats garantis dès le premier mois, 
                      ou remboursement intégral. <span className="text-yellow-400 font-bold">Vous n'avez littéralement rien à perdre.</span>
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 transition-opacity text-white pulse-animation" asChild>
                      <Link to="/auth">
                        <CheckCircle className="mr-2 h-5 w-5" />
                        🚀 OUI, Je Transforme Mon Business Maintenant !
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="text-white border-white/50 hover:bg-white/10" asChild>
                      <Link to="/contact">
                        <Calendar className="mr-2 h-4 w-4" />
                        📞 Réserver une Démo Personnalisée
                      </Link>
                    </Button>
                  </div>

                  {/* Dernière citation de persuasion */}
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-4 border border-green-500/20 mb-6">
                    <p className="text-green-400 font-semibold text-base">
                      💡 "Le meilleur moment pour planter un arbre, c'était il y a 20 ans. 
                      Le deuxième meilleur moment, c'est maintenant." - Proverbe chinois
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
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

                  {/* Dernier message subliminal */}
                  <p className="text-gray-500 text-xs mt-6 italic">
                    Chaque seconde d'hésitation est une opportunité que vos concurrents saisissent. 
                    Agissez maintenant.
                  </p>
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
