
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import EnhancedSpaceBackground from '@/components/space/EnhancedSpaceBackground';
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
  ChevronRight
} from 'lucide-react';

const CRMAccess = () => {
  const crmFeatures = [
    {
      icon: LayoutDashboard,
      title: "Dashboard Intelligent",
      description: "Tableau de bord complet avec analytics en temps réel, KPIs personnalisables et insights automatiques",
      details: "• Métriques business avancées\n• Alertes personnalisées\n• Rapports automatisés\n• Prédictions IA"
    },
    {
      icon: Users,
      title: "Gestion Leads Avancée",
      description: "Qualification automatique des prospects avec scoring IA et pipeline de conversion optimisé",
      details: "• Lead scoring intelligent\n• Segmentation automatique\n• Nurturing workflows\n• Attribution multi-touch"
    },
    {
      icon: Bot,
      title: "Générateur de Contenu IA",
      description: "Création automatique de textes, emails, posts sociaux et contenu marketing avec 10+ modèles IA",
      details: "• Rédaction automatique\n• Génération d'images\n• Optimisation SEO\n• Personnalisation avancée"
    },
    {
      icon: FolderOpen,
      title: "Gestion de Projets Pro",
      description: "Suivi complet des projets clients avec planification automatique et collaboration d'équipe",
      details: "• Timeline interactive\n• Gestion des ressources\n• Facturation automatique\n• Collaboration temps réel"
    },
    {
      icon: Zap,
      title: "Centre d'Automation",
      description: "Workflows intelligents pour automatiser vos processus marketing, ventes et support client",
      details: "• 50+ triggers disponibles\n• Actions conditionnelles\n• Intégrations natives\n• Tests A/B automatiques"
    },
    {
      icon: Search,
      title: "SEO Analyzer Pro",
      description: "Analyse SEO complète avec recommandations automatiques et suivi de performance",
      details: "• Audit technique complet\n• Recherche de mots-clés\n• Suivi des positions\n• Optimisations suggérées"
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
      name: "Starter",
      price: "Gratuit",
      description: "Perfect pour tester DOM CRM",
      features: [
        "5 projets",
        "1000 leads/mois",
        "Intégrations basiques",
        "Support email"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "47€/mois",
      description: "Pour les entrepreneurs ambitieux",
      features: [
        "Projets illimités",
        "10 000 leads/mois",
        "Toutes les intégrations",
        "Automation avancée",
        "Support prioritaire"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Sur mesure",
      description: "Solutions personnalisées",
      features: [
        "Volume personnalisé",
        "API privée",
        "Développements custom",
        "Account manager dédié"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-portfolio-space relative">
      <Navbar />
      <EnhancedSpaceBackground />
      
      <main className="flex-grow z-10 relative">
        {/* Hero Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto text-center"
            >
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm rounded-full text-emerald-400 border border-emerald-500/20 text-sm font-medium mb-6">
                <div className="flex items-center gap-2">
                  <Rocket className="h-4 w-4" />
                  <span>CRM Révolutionnaire Powered by AI</span>
                  <Badge className="bg-emerald-500 text-white text-xs px-2 py-0.5 animate-pulse">
                    NOUVEAU
                  </Badge>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600">
                  DOM CRM
                </span>
              </h1>
              
              <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed">
                La plateforme CRM tout-en-un qui révolutionne votre business grâce à l'Intelligence Artificielle
              </p>
              
              <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
                Automatisez vos ventes, générez du contenu illimité, qualifiez vos leads automatiquement 
                et multipliez votre chiffre d'affaires avec notre suite d'outils IA intégrés.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:opacity-90 transform hover:scale-105 transition-all text-lg px-8 py-3"
                >
                  <Link to="/auth" className="flex items-center">
                    <LayoutDashboard className="mr-2 h-5 w-5" />
                    Démarrer Gratuitement
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-3"
                >
                  <Link to="#demo" className="flex items-center">
                    <Star className="mr-2 h-4 w-4" />
                    Voir la Démo Live
                  </Link>
                </Button>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
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
                    <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                6 Modules <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">Révolutionnaires</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Découvrez les outils qui transformeront votre façon de gérer votre business et vos relations clients
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {crmFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="h-full bg-black/40 border-white/10 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300 cosmic-hover">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <feature.icon className="w-8 h-8 text-emerald-400" />
                      </div>
                      <CardTitle className="text-xl text-white mb-3">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300 mb-4 text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                      <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-lg p-4 border border-emerald-500/20">
                        <div className="text-sm text-gray-300 whitespace-pre-line">
                          {feature.details}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Résultats <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">Mesurables</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Des performances qui parlent d'elles-mêmes. Voici ce que DOM CRM apporte concrètement à votre business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">{benefit.metric}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                APIs <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">Intégrées</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Plus de 10 APIs premium intégrées nativement pour décupler les capacités de votre CRM
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations.map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-black/40 border-white/10 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-white">{integration.name}</h3>
                        <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
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
        <section className="py-20 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Tarifs <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">Transparents</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Des plans adaptés à chaque étape de votre croissance, sans engagement ni coûts cachés
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-1">
                        <Star className="w-3 h-3 mr-1" />
                        Plus Populaire
                      </Badge>
                    </div>
                  )}
                  
                  <Card className={`h-full ${plan.popular ? 'bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border-emerald-500/30' : 'bg-black/40 border-white/10'} backdrop-blur-sm transition-all duration-300 hover:scale-105`}>
                    <CardHeader className="text-center pb-8">
                      <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                      <div className="text-4xl font-bold text-emerald-400 mb-2">{plan.price}</div>
                      <CardDescription className="text-gray-300">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className={`w-full ${plan.popular ? 'bg-gradient-to-r from-emerald-500 to-blue-500 hover:opacity-90' : 'bg-white/10 hover:bg-white/20'} transition-all`}
                        size="lg"
                      >
                        <Link to="/auth" className="flex items-center justify-center w-full">
                          {plan.name === 'Enterprise' ? 'Nous Contacter' : 'Commencer Maintenant'}
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto"
            >
              <Card className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border-emerald-500/30 backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
                
                <CardContent className="p-12 md:p-16 relative z-10 text-center">
                  <Rocket className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Prêt à Révolutionner Votre Business ?
                  </h3>
                  <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Rejoignez les centaines d'entrepreneurs qui ont transformé leur activité grâce à DOM CRM. 
                    Configuration en 5 minutes, résultats garantis dès le premier mois.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:opacity-90 transform hover:scale-105 transition-all text-lg px-8 py-3"
                    >
                      <Link to="/auth" className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Démarrer Gratuitement
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-3"
                    >
                      <Link to="/contact" className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        Réserver une Démo
                      </Link>
                    </Button>
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
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CRMAccess;
