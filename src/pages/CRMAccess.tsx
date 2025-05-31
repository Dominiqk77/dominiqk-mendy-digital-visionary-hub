
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useAuth } from '@/hooks/useAuth';
import { useSubscription } from '@/hooks/useSubscription';
import { formatTime } from '@/utils/formatTime';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { 
  Rocket, 
  Zap, 
  Crown, 
  Shield, 
  Star, 
  Target,
  BarChart3,
  Users,
  MessageSquare,
  TrendingUp,
  Globe,
  Smartphone,
  Mail,
  CheckCircle,
  Check,
  Sparkles,
  Timer,
  Award,
  Lock,
  Unlock,
  ArrowRight,
  Plus,
  X,
  Heart,
  Brain,
  Eye,
  Layers,
  Code,
  Database,
  Cloud,
  LayoutDashboard,
  Bot,
  FolderOpen,
  Search,
  Clock
} from 'lucide-react';

const CRMAccess = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const { subscription, loading: subscriptionLoading } = useSubscription();
  const [timeLeft, setTimeLeft] = useState(72 * 60 * 60); // 72 heures en secondes
  const [selectedPlan, setSelectedPlan] = useState('pro');
  
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

  const subscriptionPlans = [
    {
      id: 'free',
      name: 'Découverte',
      price: 0,
      period: 'Gratuit',
      badge: '🎁 GRATUIT',
      badgeColor: 'bg-green-500',
      description: 'Parfait pour découvrir le potentiel de notre CRM',
      features: [
        '1 projet actif',
        '5 leads maximum',
        '100 API calls/mois',
        'Support communautaire',
        'Templates de base',
        'Exports CSV limités'
      ],
      limitations: [
        'Fonctionnalités IA limitées',
        'Pas d\'automatisation',
        'Pas de support prioritaire'
      ],
      cta: 'Commencer gratuitement',
      highlight: false,
      gradient: 'from-gray-500 to-gray-600'
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 99,
      period: '/mois',
      badge: '🚀 PLUS POPULAIRE',
      badgeColor: 'bg-blue-500',
      description: 'La solution complète pour entrepreneurs ambitieux',
      features: [
        '10 projets actifs',
        'Leads illimités',
        '5000 API calls/mois',
        'IA Content Generator',
        'Automatisations avancées',
        'Analytics en temps réel',
        'Support prioritaire 24/7',
        'Templates premium',
        'Intégrations tierces',
        'Exports illimités'
      ],
      bonusFeatures: [
        '🎁 1 mois d\'IA gratuit (valeur 50€)',
        '🔥 Templates exclusifs',
        '⚡ Onboarding personnalisé'
      ],
      cta: 'Démarrer Pro maintenant',
      highlight: true,
      gradient: 'from-blue-500 to-purple-600',
      discount: 50,
      originalPrice: 199
    },
    {
      id: 'business',
      name: 'Business',
      price: 299,
      period: '/mois',
      badge: '👑 PREMIUM',
      badgeColor: 'bg-purple-500',
      description: 'Pour les équipes qui veulent dominer leur marché',
      features: [
        'Projets illimités',
        'Leads illimités',
        '20000 API calls/mois',
        'IA avancée multi-modèles',
        'Workflows personnalisés',
        'White-label complet',
        'API privée',
        'Support dédié',
        'Formation équipe incluse',
        'Intégrations sur mesure'
      ],
      bonusFeatures: [
        '🎁 Setup gratuit (valeur 500€)',
        '🔥 Formation équipe complète',
        '⚡ Account manager dédié',
        '💎 Accès beta features'
      ],
      cta: 'Accéder au Business',
      highlight: false,
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 999,
      period: '/mois',
      badge: '💎 ENTERPRISE',
      badgeColor: 'bg-gradient-to-r from-amber-500 to-orange-600',
      description: 'Solution sur mesure pour les organisations d\'envergure',
      features: [
        'Infrastructure dédiée',
        'Tout illimité',
        'IA propriétaire custom',
        'Développements sur mesure',
        'SLA 99.9% garanti',
        'Support 24/7/365',
        'Sécurité enterprise',
        'Conformité RGPD++',
        'Formations illimitées',
        'Consulting stratégique'
      ],
      bonusFeatures: [
        '🎁 Développement custom inclus',
        '🔥 Infrastructure dédiée',
        '⚡ Support white-glove',
        '💎 Roadmap prioritaire'
      ],
      cta: 'Contacter notre équipe',
      highlight: false,
      gradient: 'from-amber-500 to-orange-600'
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      company: "TechStartup Pro",
      role: "CEO",
      comment: "Le CRM a transformé notre business ! +300% de conversions en 3 mois.",
      avatar: "MD",
      rating: 5,
      revenue: "+150K€"
    },
    {
      name: "Thomas Laurent",
      company: "Digital Agency",
      role: "Directeur Commercial",
      comment: "Incroyable ! L'IA nous fait gagner 15h/semaine sur la prospection.",
      avatar: "TL",
      rating: 5,
      revenue: "+85K€"
    },
    {
      name: "Sophie Martin", 
      company: "E-commerce Plus",
      role: "CMO",
      comment: "ROI de 400% dès le premier mois. Un investissement qui change tout !",
      avatar: "SM",
      rating: 5,
      revenue: "+200K€"
    }
  ];

  const handleGetStarted = async (planId: string) => {
    if (!user) {
      navigate('/auth');
      return;
    }

    if (planId === 'free') {
      navigate('/crm');
      return;
    }

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: getPriceId(planId),
          userId: user.id
        })
      });

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Erreur lors de la création de la session:', error);
    }
  };

  const getPriceId = (planId: string) => {
    const priceIds = {
      pro: 'price_pro_monthly',
      business: 'price_business_monthly', 
      enterprise: 'price_enterprise_monthly'
    };
    return priceIds[planId as keyof typeof priceIds];
  };

  if (authLoading || subscriptionLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto"></div>
          <div className="text-blue-600 font-medium">Chargement...</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 pt-20">
          {/* Hero Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-4xl mx-auto mb-16"
              >
                <div className="mb-6">
                  <Badge className="bg-red-500/20 text-red-300 border-red-500/30 mb-4">
                    🔥 PROMOTION LIMITÉE - {formatTime(timeLeft)}
                  </Badge>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  DOM CRM PRO
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  La première plateforme CRM <span className="text-blue-400 font-semibold">propulsée par l'IA</span> qui transforme vos visiteurs en clients et multiplie vos revenus par <span className="text-green-400 font-bold text-3xl">3x minimum</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                    <div className="text-3xl font-bold text-green-400 mb-2">+284%</div>
                    <div className="text-gray-300">Augmentation moyenne des conversions</div>
                  </div>
                  <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                    <div className="text-3xl font-bold text-blue-400 mb-2">15min</div>
                    <div className="text-gray-300">Temps de setup complet</div>
                  </div>
                  <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                    <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                    <div className="text-gray-300">IA qui travaille pour vous</div>
                  </div>
                </div>

                <Button 
                  onClick={() => handleGetStarted('pro')}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-6 text-xl font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <Rocket className="mr-3 h-6 w-6" />
                  Démarrer maintenant - 50% de réduction
                </Button>
                
                <p className="text-sm text-gray-400 mt-4">
                  ✅ Essai gratuit 14 jours • ✅ Sans engagement • ✅ Support 24/7
                </p>
              </motion.div>
            </div>
          </section>

          {/* Pricing Plans */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Choisissez votre <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">machine à revenus</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Des plans conçus pour transformer votre business, quel que soit votre niveau
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {subscriptionPlans.map((plan, index) => (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative rounded-2xl p-8 ${
                      plan.highlight 
                        ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-2 border-blue-400/50 shadow-2xl shadow-blue-500/20 scale-105' 
                        : 'bg-black/40 border border-white/10'
                    } backdrop-blur-sm hover:border-white/20 transition-all duration-300 hover:scale-105 group`}
                  >
                    {plan.highlight && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 text-sm font-bold">
                          ⚡ OFFRE LIMITÉE
                        </Badge>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <Badge className={`${plan.badgeColor} text-white mb-4`}>
                        {plan.badge}
                      </Badge>
                      
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                      
                      <div className="mb-6">
                        {plan.originalPrice && (
                          <div className="text-sm text-gray-500 line-through mb-1">
                            {plan.originalPrice}€{plan.period}
                          </div>
                        )}
                        <div className="text-4xl font-bold">
                          {plan.price}€<span className="text-lg text-gray-400">{plan.period}</span>
                        </div>
                        {plan.discount && (
                          <Badge className="bg-red-500 text-white mt-2">
                            -{plan.discount}% PROMO
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                      
                      {plan.bonusFeatures && (
                        <div className="border-t border-white/10 pt-4 mt-6">
                          <p className="text-sm font-semibold text-yellow-400 mb-3">🎁 Bonus exclusifs :</p>
                          {plan.bonusFeatures.map((bonus, bonusIndex) => (
                            <div key={bonusIndex} className="flex items-start space-x-3 mb-2">
                              <Sparkles className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-yellow-300">{bonus}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {plan.limitations && (
                        <div className="border-t border-white/10 pt-4 mt-4">
                          <p className="text-sm font-semibold text-red-400 mb-3">⚠️ Limitations :</p>
                          {plan.limitations.map((limitation, limitIndex) => (
                            <div key={limitIndex} className="flex items-start space-x-3 mb-2">
                              <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-red-300">{limitation}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <Button 
                      onClick={() => handleGetStarted(plan.id)}
                      className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                        plan.highlight
                          ? `bg-gradient-to-r ${plan.gradient} hover:shadow-lg hover:shadow-blue-500/30 transform hover:scale-105`
                          : 'bg-white/10 hover:bg-white/20 border border-white/20'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Ils ont <span className="text-green-400">multiplié leurs revenus</span> avec DOM CRM
                </h2>
                <p className="text-xl text-gray-300">Des résultats concrets, des entrepreneurs satisfaits</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                        <p className="text-xs text-blue-400">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-gray-300 mb-4 italic">"{testimonial.comment}"</p>
                    
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      Revenue: {testimonial.revenue}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-sm rounded-2xl p-12 border border-white/10 text-center max-w-4xl mx-auto"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Prêt à <span className="text-green-400">transformer</span> votre business ?
                </h2>
                
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Rejoignez plus de <span className="text-blue-400 font-bold">2,847 entrepreneurs</span> qui génèrent déjà des revenus automatisés 24/7 avec DOM CRM
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <Button 
                    onClick={() => handleGetStarted('pro')}
                    className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-12 py-6 text-xl font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <Crown className="mr-3 h-6 w-6" />
                    Accéder au CRM Pro maintenant
                  </Button>
                  
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400">⏰ {formatTime(timeLeft)}</div>
                    <div className="text-sm text-gray-400">Temps restant pour la promo -50%</div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-300">
                  <div className="flex items-center justify-center">
                    <Shield className="w-4 h-4 mr-2 text-green-400" />
                    Garantie 60 jours
                  </div>
                  <div className="flex items-center justify-center">
                    <Zap className="w-4 h-4 mr-2 text-blue-400" />
                    Setup en 15 minutes
                  </div>
                  <div className="flex items-center justify-center">
                    <Heart className="w-4 h-4 mr-2 text-red-400" />
                    Support 24/7 inclus
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CRMAccess;
