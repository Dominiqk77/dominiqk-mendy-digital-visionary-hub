import React, { useState, useEffect, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Eye, Download, Star, Clock, Users, Shield, ArrowRight, Sparkles, 
  ChevronRight, ChevronLeft, BookOpen, Zap, Target, Trophy,
  TrendingUp, DollarSign, BarChart3, Lightbulb, Crown, Brain,
  Rocket, Settings, Users2, Globe, MapPin, Calculator, Award,
  CheckCircle2, AlertTriangle, Briefcase
} from 'lucide-react';

interface PremiumPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPurchase: () => void;
  bookTitle: string;
  bookPrice: string;
}

interface PreviewPage {
  page: number;
  title: string;
  content: string;
  highlight: string;
  visuals?: {
    icon: React.ReactNode;
    stats?: string;
    color: string;
  };
  testimonial?: {
    text: string;
    author: string;
    result: string;
  };
}

const PremiumPreviewModal: React.FC<PremiumPreviewModalProps> = ({
  isOpen,
  onClose,
  onPurchase,
  bookTitle,
  bookPrice,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [readingProgress, setReadingProgress] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [liveReaders, setLiveReaders] = useState(847);
  const [urgencyTimer, setUrgencyTimer] = useState(180); // 3 minutes
  const [highlightedSections, setHighlightedSections] = useState<number[]>([]);
  const [showConversionBoost, setShowConversionBoost] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const premiumPages: PreviewPage[] = [
    {
      page: 1,
      title: "🚀 La Révolution IA qui Change Tout",
      content: "L'IA n'est plus l'avenir, c'est MAINTENANT. Pendant que vos concurrents hésitent, les leaders d'aujourd'hui utilisent mes stratégies pour multiplier leurs revenus par 3 en moins de 12 mois.",
      highlight: "ROI moyen de mes clients : +347% en 90 jours",
      visuals: {
        icon: <TrendingUp className="w-8 h-8" />,
        stats: "+347% ROI moyen",
        color: "from-green-400 to-emerald-600"
      },
      testimonial: {
        text: "Grâce aux stratégies de Dominiqk, j'ai automatisé 80% de mes processus et triplé mon chiffre d'affaires.",
        author: "Sarah M., CEO TechInnovate",
        result: "+285% CA en 6 mois"
      }
    },
    {
      page: 2,
      title: "📊 Diagnostic Business IA Ultra-Précis",
      content: "Ma méthode exclusive en 5 étapes pour identifier EXACTEMENT où l'IA peut générer le plus de valeur dans votre business. Cette grille d'analyse a été testée sur 500+ entreprises.",
      highlight: "Économie moyenne : 40h/semaine par entrepreneur",
      visuals: {
        icon: <Target className="w-8 h-8" />,
        stats: "40h économisées/semaine",
        color: "from-blue-400 to-cyan-600"
      },
      testimonial: {
        text: "Le diagnostic a révélé 3 opportunités IA que je n'avais jamais vues. Résultat : +150% de productivité.",
        author: "Marc L., Fondateur DigitalPro",
        result: "+150% productivité"
      }
    },
    {
      page: 3,
      title: "💰 Étude de Cas : +2.3M€ en 8 mois",
      content: "TechSolutions, PME de 25 collaborateurs, a généré 2.3M€ de revenus supplémentaires en implémentant mes 3 piliers IA. Voici la stratégie exacte, étape par étape.",
      highlight: "2.3M€ de revenus supplémentaires générés",
      visuals: {
        icon: <DollarSign className="w-8 h-8" />,
        stats: "+2.3M€ en 8 mois",
        color: "from-yellow-400 to-orange-600"
      },
      testimonial: {
        text: "Les 3 piliers IA de Dominiqk ont révolutionné notre business model. ROI exceptionnel !",
        author: "Julie R., CEO TechSolutions",
        result: "+2.3M€ revenus"
      }
    },
    {
      page: 4,
      title: "🎯 Les 7 Leviers de Croissance IA",
      content: "Découvrez les 7 leviers secrets que j'utilise pour transformer n'importe quel business. Chaque levier peut multiplier vos résultats par 2 à 5x selon votre secteur.",
      highlight: "Chaque levier = x2 à x5 de croissance potentielle",
      visuals: {
        icon: <Zap className="w-8 h-8" />,
        stats: "x2 à x5 croissance",
        color: "from-purple-400 to-pink-600"
      },
      testimonial: {
        text: "Les 7 leviers ont décuplé notre efficacité. Notre équipe génère maintenant 5x plus de résultats.",
        author: "David K., Director Operations",
        result: "x5 efficacité équipe"
      }
    },
    {
      page: 5,
      title: "🏆 Framework Ultra-Rentable EXCLUSIF",
      content: "Mon framework propriétaire 'AI-PROFIT' utilisé par les Fortune 500. C'est la première fois que je le révèle publiquement. Valeur estimée : 50,000€.",
      highlight: "Framework utilisé par les Fortune 500",
      visuals: {
        icon: <Crown className="w-8 h-8" />,
        stats: "Fortune 500 validated",
        color: "from-amber-400 to-yellow-600"
      },
      testimonial: {
        text: "Le framework AI-PROFIT a transformé notre approche. Résultats immédiatement visibles.",
        author: "Emma S., VP Strategy Corp",
        result: "Transformation immédiate"
      }
    },
    {
      page: 6,
      title: "🧠 Automatisation Intelligente Avancée",
      content: "Au-delà de l'automatisation basique, découvrez comment créer des systèmes IA qui apprennent et s'adaptent. Ces algorithmes évolutifs ont permis à mes clients d'économiser en moyenne 60% de leurs coûts opérationnels.",
      highlight: "60% de réduction des coûts opérationnels en moyenne",
      visuals: {
        icon: <Brain className="w-8 h-8" />,
        stats: "-60% coûts opérationnels",
        color: "from-indigo-400 to-purple-600"
      },
      testimonial: {
        text: "L'automatisation intelligente a réduit nos coûts de 65% tout en améliorant la qualité de service.",
        author: "Antoine B., COO InnovateTech",
        result: "-65% coûts, +40% qualité"
      }
    },
    {
      page: 7,
      title: "🚀 Stratégies de Mise à l'Échelle IA",
      content: "Comment passer de l'expérimentation IA à l'implémentation à grande échelle. Ma méthode SCALE-AI permet de déployer l'IA dans toute l'organisation sans résistance au changement.",
      highlight: "95% de taux d'adoption en entreprise avec SCALE-AI",
      visuals: {
        icon: <Rocket className="w-8 h-8" />,
        stats: "95% adoption rate",
        color: "from-pink-400 to-red-600"
      },
      testimonial: {
        text: "SCALE-AI nous a permis de déployer l'IA dans 12 départements en 3 mois. Adoption record.",
        author: "Claire D., Chief Digital Officer",
        result: "12 depts en 3 mois"
      }
    },
    {
      page: 8,
      title: "⚙️ Templates et Outils Prêts à l'Emploi",
      content: "Plus de 50 templates exclusifs : prompts optimisés, workflows automatisés, dashboards de performance. Ces outils ont une valeur commerciale de 15,000€ et vous font gagner 6 mois de développement.",
      highlight: "50+ templates d'une valeur de 15,000€",
      visuals: {
        icon: <Settings className="w-8 h-8" />,
        stats: "50+ templates, 15k€ valeur",
        color: "from-cyan-400 to-blue-600"
      },
      testimonial: {
        text: "Les templates m'ont fait économiser 6 mois de développement. Implémentation immédiate !",
        author: "Thomas G., Tech Lead StartupIA",
        result: "6 mois économisés"
      }
    },
    {
      page: 9,
      title: "👥 Gestion d'Équipe IA-Augmentée",
      content: "Transformez votre équipe en super-performers grâce à l'IA collaborative. Mes techniques de management augmenté permettent d'améliorer la productivité de 400% tout en réduisant le stress.",
      highlight: "+400% productivité équipe, -50% stress",
      visuals: {
        icon: <Users2 className="w-8 h-8" />,
        stats: "+400% productivité",
        color: "from-green-400 to-teal-600"
      },
      testimonial: {
        text: "Notre équipe est 4x plus productive et paradoxalement moins stressée. Management révolutionnaire !",
        author: "Marie F., Team Manager InnoLab",
        result: "+400% productivité"
      }
    },
    {
      page: 10,
      title: "🌍 Expansion Internationale avec l'IA",
      content: "Comment l'IA peut propulser votre entreprise sur les marchés internationaux. Stratégies de localisation automatisée, analyse prédictive des marchés, et adaptation culturelle intelligente.",
      highlight: "Expansion 10x plus rapide avec l'IA",
      visuals: {
        icon: <Globe className="w-8 h-8" />,
        stats: "10x expansion speed",
        color: "from-orange-400 to-red-600"
      },
      testimonial: {
        text: "Grâce à l'IA, nous avons conquis 5 nouveaux pays en 4 mois au lieu des 3 ans prévus.",
        author: "Pedro S., International Director",
        result: "5 pays en 4 mois"
      }
    },
    {
      page: 11,
      title: "📍 Études de Cas Sectorielles",
      content: "Analyses détaillées de 15 secteurs : e-commerce, santé, finance, industrie, services... Découvrez les applications IA spécifiques qui génèrent le plus de valeur dans votre domaine.",
      highlight: "15 secteurs analysés, stratégies sur-mesure",
      visuals: {
        icon: <MapPin className="w-8 h-8" />,
        stats: "15 secteurs analysés",
        color: "from-purple-400 to-indigo-600"
      },
      testimonial: {
        text: "L'analyse sectorielle m'a donné une roadmap précise pour mon industrie. ROI immédiat.",
        author: "Vincent R., CEO MedTech Solutions",
        result: "Roadmap sector-specific"
      }
    },
    {
      page: 12,
      title: "🧮 Calculateur ROI IA Exclusif",
      content: "Mon outil propriétaire pour calculer précisément le ROI de vos investissements IA. Basé sur 1000+ projets analysés, il prédit votre retour sur investissement avec 95% de précision.",
      highlight: "95% de précision dans les prédictions ROI",
      visuals: {
        icon: <Calculator className="w-8 h-8" />,
        stats: "95% précision ROI",
        color: "from-yellow-400 to-amber-600"
      },
      testimonial: {
        text: "Le calculateur ROI m'a aidé à justifier un investissement de 500k€. Prédictions ultra-précises.",
        author: "Alain M., CFO TechGlobal",
        result: "500k€ investissement validé"
      }
    },
    {
      page: 13,
      title: "🏅 Certification et Reconnaissance",
      content: "Devenez un leader reconnu dans votre secteur grâce à ma méthode de positioning IA. Construisez votre expertise, obtenez des certifications valorisantes et positionnez-vous comme l'expert de référence.",
      highlight: "Devenez THE expert IA de votre secteur",
      visuals: {
        icon: <Award className="w-8 h-8" />,
        stats: "Expert status achieved",
        color: "from-emerald-400 to-green-600"
      },
      testimonial: {
        text: "Je suis maintenant reconnu comme l'expert IA de mon secteur. Opportunités business décuplées.",
        author: "Isabelle L., Consultante IA",
        result: "Expert status + business"
      }
    },
    {
      page: 14,
      title: "✅ Plan d'Action 90 Jours",
      content: "Votre feuille de route complète pour implémenter l'IA en 90 jours. Planning détaillé, jalons mesurables, check-lists quotidiennes. Plus de 90% de mes clients atteignent leurs objectifs avec ce plan.",
      highlight: "90% de réussite avec le plan d'action 90 jours",
      visuals: {
        icon: <CheckCircle2 className="w-8 h-8" />,
        stats: "90% success rate",
        color: "from-blue-400 to-cyan-600"
      },
      testimonial: {
        text: "Le plan 90 jours m'a donné une structure claire. J'ai atteint tous mes objectifs en 85 jours.",
        author: "François P., Entrepreneur",
        result: "Objectifs en 85 jours"
      }
    },
    {
      page: 15,
      title: "⚠️ Éviter les 10 Pièges Mortels de l'IA",
      content: "Les erreurs qui coûtent des millions aux entreprises. J'ai analysé 200+ échecs d'implémentation IA pour identifier les 10 pièges les plus dangereux et comment les éviter absolument.",
      highlight: "200+ échecs analysés, 10 pièges identifiés",
      visuals: {
        icon: <AlertTriangle className="w-8 h-8" />,
        stats: "200+ échecs analysés",
        color: "from-red-400 to-pink-600"
      },
      testimonial: {
        text: "Connaître ces pièges m'a évité une perte estimée à 800k€. Information inestimable !",
        author: "Nicolas H., CTO ScaleUp",
        result: "800k€ loss avoided"
      }
    }
  ];

  useEffect(() => {
    if (!isOpen) return;

    const progressTimer = setInterval(() => {
      setReadingProgress(prev => Math.min(prev + 2, 100));
    }, 100);

    const timeTimer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);

    const urgencyCountdown = setInterval(() => {
      setUrgencyTimer(prev => Math.max(prev - 1, 0));
    }, 1000);

    const readerSimulation = setInterval(() => {
      if (Math.random() > 0.7) {
        setLiveReaders(prev => prev + (Math.random() > 0.5 ? 1 : -1));
      }
    }, 3000);

    return () => {
      clearInterval(progressTimer);
      clearInterval(timeTimer);
      clearInterval(urgencyCountdown);
      clearInterval(readerSimulation);
    };
  }, [isOpen]);

  useEffect(() => {
    if (timeSpent > 30 && !showConversionBoost) {
      setShowConversionBoost(true);
    }
  }, [timeSpent, showConversionBoost]);

  useEffect(() => {
    if (currentPage > 0 && !highlightedSections.includes(currentPage)) {
      setHighlightedSections(prev => [...prev, currentPage]);
    }
  }, [currentPage]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [currentPage]);

  const nextPage = () => {
    if (currentPage < premiumPages.length - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentPageData = premiumPages[currentPage];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[95vw] max-w-6xl max-h-[95vh] bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 border border-purple-500/30 text-white overflow-hidden p-0">
        {/* Cosmic background with animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-indigo-900/20"></div>
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col h-[95vh]">
          {/* Header avec stats en temps réel */}
          <DialogHeader className="sticky top-0 bg-gradient-to-r from-slate-900/95 via-purple-900/95 to-slate-900/95 backdrop-blur-xl border-b border-purple-500/30 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-glow-yellow animate-pulse">
                  <BookOpen className="h-6 w-6 text-black" />
                </div>
                <div>
                  <DialogTitle className="text-xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Aperçu Premium Exclusif
                  </DialogTitle>
                  <p className="text-blue-300 text-sm">{bookTitle}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center bg-red-500/20 px-3 py-1 rounded-full border border-red-500/30">
                  <Clock className="w-4 h-4 mr-2 text-red-400" />
                  <span className="text-red-300 font-bold">{formatTime(urgencyTimer)}</span>
                </div>
                <div className="flex items-center bg-green-500/20 px-3 py-1 rounded-full border border-green-500/30">
                  <Users className="w-4 h-4 mr-2 text-green-400" />
                  <span className="text-green-300">{liveReaders} en lecture</span>
                </div>
              </div>
            </div>

            {/* Progress bar avec gamification */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-blue-300">Progression de lecture</span>
                <span className="text-yellow-300">{Math.round(readingProgress)}% • Temps: {formatTime(timeSpent)}</span>
              </div>
              <Progress value={readingProgress} className="h-2 bg-slate-800">
                <div className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full transition-all duration-300" 
                     style={{ width: `${readingProgress}%` }} />
              </Progress>
            </div>

            {/* Navigation pages */}
            <div className="flex items-center justify-center space-x-2 mt-4">
              {premiumPages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPage 
                      ? 'bg-yellow-400 scale-125 shadow-glow-yellow' 
                      : highlightedSections.includes(index)
                        ? 'bg-green-400'
                        : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </DialogHeader>

          {/* Contenu principal avec animation de pages */}
          <div className="flex-1 overflow-hidden relative">
            <div ref={contentRef} className="h-full overflow-y-auto p-6 space-y-8">
              {/* Page actuelle avec animations */}
              <div 
                key={currentPage}
                className="animate-fade-in bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transform hover:scale-[1.02] transition-all duration-500"
              >
                {/* En-tête de page avec icône et stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${currentPageData.visuals?.color} rounded-2xl flex items-center justify-center shadow-cosmic text-black`}>
                      {currentPageData.visuals?.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{currentPageData.title}</h3>
                      <Badge className="bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 animate-pulse">
                        Page {currentPageData.page}/15 • {currentPageData.visuals?.stats}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm text-blue-300">Taux de conversion</div>
                    <div className="text-2xl font-bold text-green-400">+{247 + currentPage * 15}%</div>
                  </div>
                </div>

                {/* Contenu principal */}
                <div className="space-y-6">
                  <p className="text-lg text-blue-100 leading-relaxed">
                    {currentPageData.content}
                  </p>
                  
                  {/* Highlight box */}
                  <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 animate-pulse"></div>
                    <div className="relative z-10 flex items-center">
                      <Lightbulb className="w-6 h-6 text-yellow-400 mr-3" />
                      <span className="text-yellow-200 font-semibold text-lg">{currentPageData.highlight}</span>
                    </div>
                  </div>

                  {/* Témoignage intégré */}
                  {currentPageData.testimonial && (
                    <div className="bg-white/5 border border-green-500/30 rounded-xl p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Star className="w-6 h-6 text-black" />
                        </div>
                        <div className="flex-1">
                          <p className="text-green-200 italic mb-3">"{currentPageData.testimonial.text}"</p>
                          <div className="flex justify-between items-center">
                            <span className="text-green-300 font-semibold">{currentPageData.testimonial.author}</span>
                            <Badge className="bg-green-500/20 text-green-300 border border-green-500/30">
                              {currentPageData.testimonial.result}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Navigation entre pages */}
                <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/10">
                  <Button 
                    onClick={prevPage}
                    disabled={currentPage === 0}
                    variant="outline" 
                    className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10 disabled:opacity-30"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Précédent
                  </Button>

                  <div className="text-center">
                    <div className="text-sm text-blue-300 mb-1">Lecteurs actifs sur cette page</div>
                    <div className="text-xl font-bold text-cyan-400">{Math.floor(liveReaders / 5) + currentPage * 12}</div>
                  </div>

                  <Button 
                    onClick={nextPage}
                    disabled={currentPage === premiumPages.length - 1}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-30"
                  >
                    Suivant
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Teaser pour les pages suivantes - seulement à la dernière page */}
              {currentPage === premiumPages.length - 1 && (
                <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-2xl p-8 text-center animate-pulse">
                  <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-yellow-300 mb-4">🔥 Vous avez vu l'aperçu complet !</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-white/5 rounded-xl p-4">
                      <Briefcase className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <h5 className="font-bold text-white mb-2">Contenu exclusif</h5>
                      <p className="text-blue-200 text-sm">Accès aux 200+ pages complètes avec détails techniques</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <Target className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <h5 className="font-bold text-white mb-2">Templates exclusifs</h5>
                      <p className="text-blue-200 text-sm">50+ outils prêts à l'emploi (valeur 15,000€)</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <Crown className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                      <h5 className="font-bold text-white mb-2">Accès VIP</h5>
                      <p className="text-blue-200 text-sm">Communauté + support expert 6 mois</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer sticky ultra-convertissant */}
          <div className="sticky bottom-0 bg-gradient-to-r from-slate-900/98 via-purple-900/98 to-slate-900/98 backdrop-blur-xl border-t border-purple-500/30 p-6">
            {showConversionBoost && (
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-4 mb-4 animate-bounce">
                <div className="flex items-center justify-center text-green-300 font-bold">
                  <Sparkles className="w-5 h-5 mr-2" />
                  BONUS DÉBLOQUÉ : Temps de lecture optimal atteint ! +20% de réduction appliquée
                </div>
              </div>
            )}

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl font-bold text-green-400">{bookPrice}</span>
                    <div className="flex flex-col">
                      <span className="text-xl text-gray-400 line-through">{parseInt(bookPrice.replace('€', '')) * 2}€</span>
                      <Badge className="bg-red-500 text-white px-3 py-1 font-bold animate-pulse">
                        🔥 -50% AUJOURD'HUI
                      </Badge>
                    </div>
                  </div>
                  <p className="text-xs text-blue-300">Plus que {urgencyTimer} secondes à ce prix !</p>
                </div>

                <div className="text-right space-y-1">
                  <div className="flex items-center text-green-300">
                    <Shield className="w-4 h-4 mr-1" />
                    <span className="text-sm">ROI garanti +150%</span>
                  </div>
                  <div className="flex items-center text-yellow-300">
                    <Crown className="w-4 h-4 mr-1" />
                    <span className="text-sm">{liveReaders}+ leaders équipés</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button 
                  onClick={onPurchase}
                  className="flex-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-black font-bold py-4 text-lg transition-all duration-300 hover:scale-105 shadow-cosmic-lg relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700"></div>
                  <Download className="w-5 h-5 mr-2 relative z-10" />
                  <span className="relative z-10">ACCÈS IMMÉDIAT - Téléchargement Instant</span>
                </Button>
                
                <Button 
                  onClick={onClose}
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 py-4 px-6"
                >
                  Plus tard
                </Button>
              </div>

              <div className="text-center space-y-1">
                <p className="text-xs text-blue-300">
                  🔒 Paiement sécurisé SSL • 30 jours satisfait ou remboursé • Accès à vie
                </p>
                <p className="text-xs text-green-300">
                  ⭐ Note 4.9/5 • {Math.floor(liveReaders * 1.5)} avis vérifiés • Dernière vente il y a 12 min
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PremiumPreviewModal;
