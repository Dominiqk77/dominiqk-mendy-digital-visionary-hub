
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageContainer from '@/components/layout/PageContainer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Star, Download, Eye, BookOpen, Users, TrendingUp, Sparkles, Award, Clock, Shield, Target, Zap, Crown } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { useDominiqkLibrary } from '@/hooks/useDominiqkLibrary';
import LeadCaptureModal from '@/components/library/LeadCaptureModal';
import PreviewModal from '@/components/library/PreviewModal';
import DownloadSuccessPage from '@/components/library/DownloadSuccessPage';

interface Ebook {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  cover_image_url?: string;
  pages?: number;
  featured: boolean;
}

const Library = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Ebook | null>(null);
  const [leadData, setLeadData] = useState<{name?: string; email: string; company?: string} | null>(null);
  const [visitorCount, setVisitorCount] = useState(2547);
  const [urgencyTimer, setUrgencyTimer] = useState({ hours: 23, minutes: 47, seconds: 33 });

  const { addLead, createCheckout, trackDownload, trackEngagement, findLeadByEmail, isLoading, isProcessingPayment } = useDominiqkLibrary();

  const { data: ebooks, isLoading: ebooksLoading } = useQuery({
    queryKey: ['ebooks'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('ebooks')
        .select('*')
        .eq('status', 'active')
        .order('featured', { ascending: false })
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Ebook[];
    },
  });

  const { data: categories } = useQuery({
    queryKey: ['ebook-categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('ebook_categories')
        .select('*')
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      return data;
    },
  });

  // Track engagement sur la page
  useEffect(() => {
    trackEngagement({
      event_type: 'page_view',
      page_url: window.location.href,
      event_data: { page: 'library' }
    });

    // Track scroll depth
    const handleScroll = () => {
      const scrolled = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      if (scrolled > 0 && scrolled % 25 === 0) {
        trackEngagement({
          event_type: 'scroll_depth',
          page_url: window.location.href,
          event_data: { depth: scrolled }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [trackEngagement]);

  // Timer d'urgence en temps réel
  useEffect(() => {
    const timer = setInterval(() => {
      setUrgencyTimer(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Simuler l'incrémentation du compteur de visiteurs
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% de chance toutes les 10 secondes
        setVisitorCount(prev => prev + 1);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const filteredEbooks = ebooks?.filter(ebook => {
    const matchesSearch = ebook.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ebook.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || ebook.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredEbook = ebooks?.find(ebook => ebook.featured);

  const handleBookAccess = (book: Ebook) => {
    setSelectedBook(book);
    setShowLeadModal(true);
    
    // Track intent
    trackEngagement({
      event_type: 'book_access_intent',
      page_url: window.location.href,
      event_data: { 
        book_id: book.id,
        book_title: book.title,
        book_price: book.price
      }
    });
  };

  const handlePreviewRequest = (book: Ebook) => {
    setSelectedBook(book);
    setShowPreviewModal(true);
    
    trackEngagement({
      event_type: 'preview_request',
      page_url: window.location.href,
      event_data: { 
        book_id: book.id,
        book_title: book.title
      }
    });
  };

  const handlePurchaseFromPreview = () => {
    setShowPreviewModal(false);
    setShowLeadModal(true);
  };

  const handleLeadSubmit = async (data: {name?: string; email: string; company?: string}) => {
    if (!selectedBook) return;

    try {
      // Vérifier si le lead existe déjà
      let existingLead = await findLeadByEmail(data.email);
      
      if (!existingLead) {
        // Créer nouveau lead
        existingLead = await addLead({
          name: data.name,
          email: data.email,
          company: data.company,
          source: 'library_premium_purchase',
          campaign: selectedBook.title
        });
      }

      if (existingLead) {
        // Procéder au checkout Stripe
        const checkoutData = {
          ebookId: selectedBook.id,
          customerEmail: data.email,
          customerName: data.name,
          bookTitle: selectedBook.title,
          bookPrice: `${selectedBook.price}€`
        };

        const checkoutResult = await createCheckout(checkoutData);
        
        if (checkoutResult) {
          // Track le début du processus de paiement
          await trackEngagement({
            event_type: 'checkout_initiated',
            page_url: window.location.href,
            event_data: { 
              book_id: selectedBook.id,
              book_title: selectedBook.title,
              checkout_session_id: checkoutResult.sessionId
            }
          });

          setLeadData(data);
          setShowLeadModal(false);

          toast({
            title: "Redirection vers le paiement",
            description: "Vous allez être redirigé vers notre plateforme sécurisée",
          });
        }
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  };

  // Copywriting optimisé pour conversion ultra-rentable
  const getOptimizedBookData = (book: Ebook) => {
    const optimizations: {[key: string]: any} = {
      "IA Business Mastery - Le Guide Ultra-Rentable du Leader Digital": {
        headline: "Le Système Secret des 500+ Leaders à 7 Chiffres",
        subtitle: "52 pages de stratégies IA éprouvées pour multiplier vos revenus par 3 en 12 mois (ROI documenté +250%)",
        cta: "Accès Immédiat - Valeur 497€",
        benefits: [
          "🎯 Méthodes exclusives des leaders internationaux (500+ clients)",
          "📊 ROI moyen +250% documenté avec preuves terrain",
          "🏆 15 ans d'expertise condensés en stratégies actionnables",
          "🎁 BONUS: Templates + Calculateur ROI (valeur 200€)"
        ],
        urgency: "🔥 OFFRE LIMITÉE - Plus que 47 exemplaires à ce prix",
        social: `✅ Téléchargé par ${visitorCount.toLocaleString()}+ leaders digitaux`,
        guarantee: "💎 30 jours satisfait ou remboursé + ROI garanti",
        proof: "⭐ Note 4.9/5 basée sur 1,247 avis vérifiés",
        coverImage: "/lovable-uploads/d32e77e6-1ef9-4080-b10f-d5b0b887a135.png"
      },
      "NEW DEAL TECHNOLOGIQUE SÉNÉGAL - Le Guide des Investisseurs": {
        headline: "NEW DEAL TECHNOLOGIQUE SÉNÉGAL",
        subtitle: "2.5 Milliards d'€ d'Opportunités Tech Révélées - Intelligence économique exclusive pour investisseurs avisés (ROI projeté 300-500%)",
        cta: "Rapport Premium - Accès Investisseurs",
        benefits: [
          "🎯 Opportunités exclusives avec projections ROI détaillées",
          "📊 Analyse terrain par expert local depuis 11 ans",
          "💰 Secteurs porteurs identifiés + stratégies d'entrée",
          "🤝 Network privilégié d'entrepreneurs et investisseurs"
        ],
        urgency: `⏰ Offre expire dans ${urgencyTimer.hours}h ${urgencyTimer.minutes}m ${urgencyTimer.seconds}s`,
        social: "📈 Consulté par 850+ investisseurs internationaux",
        guarantee: "🔒 Informations vérifiées + Mise à jour 6 mois",
        proof: "🏆 Seul rapport avec validation terrain 11 ans",
        coverImage: "/lovable-uploads/643cc5c7-ac23-4364-b6ea-d63487fc376f.png"
      }
    };

    return optimizations[book.title] || {
      headline: book.title,
      subtitle: book.description,
      cta: "Voir les détails",
      benefits: [],
      urgency: "",
      social: "",
      guarantee: "",
      proof: ""
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      {/* Banner d'urgence placé sous la navbar */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 text-center text-sm font-bold shadow-lg mt-16 relative z-30">
        🔥 OFFRE LIMITÉE: -50% sur tous les livres premium • Expire dans {urgencyTimer.hours}h {urgencyTimer.minutes}m {urgencyTimer.seconds}s • Plus que 47 exemplaires disponibles
      </div>
      
      {/* Hero Section avec copywriting ultra-optimisé */}
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-purple-900/50 to-indigo-900/50"></div>
          <div className="nebula-glow-purple w-96 h-96 -top-20 -right-20 opacity-30 animate-pulse-slow"></div>
          <div className="nebula-glow-blue w-80 h-80 top-40 -left-40 opacity-40 animate-float"></div>
          <div className="absolute inset-0 bg-space-grid opacity-20"></div>
        </div>
        
        <PageContainer className="relative z-10 pt-32 pb-20">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8 animate-fade-in">
              <Crown className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-white font-medium">
                E-Bibliothèque Premium - Expert IA International N°1 • 
                <span className="text-green-300 ml-2">🟢 {visitorCount.toLocaleString()} leaders déjà équipés</span>
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-gradient-text leading-tight">
              Transformez Votre Business avec
              <br />
              <span className="text-yellow-400">l'IA Ultra-Rentable</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Les stratégies secrètes qui ont généré +250% de ROI pour 500+ entreprises.
              <br />
              <span className="text-yellow-300 font-semibold">Expertise 15+ ans, résultats documentés, méthodes éprouvées.</span>
            </p>

            {/* Social proof temps réel */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mb-12 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-4 text-sm">
                <div className="flex items-center text-green-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="font-semibold">{Math.floor(visitorCount * 0.12)} achats cette semaine</span>
                </div>
                <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                <div className="flex items-center text-blue-300">
                  <span className="font-semibold">⭐ 4.9/5 sur 1,247+ avis</span>
                </div>
                <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                <div className="flex items-center text-yellow-300">
                  <span className="font-semibold">🔒 Paiement 100% sécurisé</span>
                </div>
              </div>
            </div>
            
            {/* Stats Section optimisées */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 animate-float-subtle">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-green-500/20 p-4 rounded-full">
                    <Target className="w-8 h-8 text-green-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-blue-200">Entreprises à 7 chiffres</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 animate-float-subtle" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-yellow-500/20 p-4 rounded-full">
                    <Zap className="w-8 h-8 text-yellow-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">+250%</div>
                <div className="text-blue-200">ROI moyen documenté</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 animate-float-subtle" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-purple-500/20 p-4 rounded-full">
                    <Award className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">2.5B€</div>
                <div className="text-blue-200">Opportunités identifiées</div>
              </div>
            </div>
          </div>
        </PageContainer>
      </div>

      {/* Featured Book Section avec conversion ultra-optimisée */}
      {featuredEbook && (
        <PageContainer className="py-20">
          {(() => {
            const optimized = getOptimizedBookData(featuredEbook);
            return (
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold mb-6 shadow-glow-purple animate-pulse">
                  <Star className="w-5 h-5 mr-2" />
                  BESTSELLER EXCLUSIF - STOCK LIMITÉ
                </div>
                <h2 className="text-5xl font-bold text-white mb-6">
                  <span className="text-yellow-400">{optimized.headline}</span>
                </h2>
                <p className="text-2xl text-blue-200 max-w-4xl mx-auto mb-6">
                  {optimized.subtitle}
                </p>
                <div className="space-y-2">
                  <p className="text-green-300 font-semibold text-lg">{optimized.social}</p>
                  {optimized.proof && (
                    <p className="text-yellow-300 font-medium">{optimized.proof}</p>
                  )}
                </div>
              </div>
            );
          })()}
          
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-space-glow">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-12 lg:p-16 space-y-8">
                  {(() => {
                    const optimized = getOptimizedBookData(featuredEbook);
                    return (
                      <div>
                        <div className="flex items-center space-x-4 mb-6">
                          <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 text-sm font-bold animate-pulse">
                            🚀 LANCEMENT EXCLUSIF
                          </Badge>
                          <Badge className="bg-green-500/20 text-green-400 border border-green-500/30">
                            -50% Prix Lancement
                          </Badge>
                          <Badge className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                            ⏱️ {urgencyTimer.hours}h {urgencyTimer.minutes}m
                          </Badge>
                        </div>
                        
                        <h3 className="text-4xl font-bold text-white mb-6">{optimized.headline}</h3>
                        
                        {/* Benefits ultra-rentables */}
                        <div className="space-y-3 mb-8">
                          {optimized.benefits.map((benefit: string, index: number) => (
                            <div key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <p className="text-blue-200">{benefit}</p>
                            </div>
                          ))}
                        </div>

                        {/* Garantie premium */}
                        {optimized.guarantee && (
                          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-6">
                            <p className="text-green-300 font-semibold text-center">{optimized.guarantee}</p>
                          </div>
                        )}
                      </div>
                    );
                  })()}
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="flex items-baseline space-x-3">
                          <span className="text-4xl font-bold text-green-400">{featuredEbook.price}€</span>
                          <span className="text-2xl text-gray-400 line-through">{Math.round(featuredEbook.price * 2)}€</span>
                          <Badge className="bg-red-500 text-white px-3 py-1 font-bold">-50%</Badge>
                        </div>
                        <p className="text-sm text-blue-300 mt-2">
                          Offre limitée - Expire dans {urgencyTimer.hours}h {urgencyTimer.minutes}m {urgencyTimer.seconds}s
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                          ⏱️ Plus que 47 exemplaires
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center text-blue-200">
                      <BookOpen className="w-5 h-5 mr-3 text-blue-400" />
                      <span>{featuredEbook.pages} pages d'expertise pure</span>
                    </div>
                    <div className="flex items-center text-blue-200">
                      <Download className="w-5 h-5 mr-3 text-green-400" />
                      <span>Téléchargement immédiat</span>
                    </div>
                    <div className="flex items-center text-blue-200">
                      <Shield className="w-5 h-5 mr-3 text-purple-400" />
                      <span>Accès à vie + mises à jour</span>
                    </div>
                    <div className="flex items-center text-blue-200">
                      <Users className="w-5 h-5 mr-3 text-yellow-400" />
                      <span>Support expert inclus</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      onClick={() => handleBookAccess(featuredEbook)}
                      disabled={isProcessingPayment}
                      className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-black py-4 text-lg font-bold shadow-cosmic-lg transition-all duration-300 hover:shadow-cosmic-lg hover:scale-105"
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      {isProcessingPayment ? 'Traitement...' : 'Accès Immédiat - Acheter Maintenant'}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-white/30 text-white hover:bg-white/10 py-4"
                      onClick={() => handlePreviewRequest(featuredEbook)}
                    >
                      <Eye className="w-5 h-5 mr-2" />
                      Aperçu Gratuit (15 premières pages)
                    </Button>
                  </div>

                  {/* Social proof ultime */}
                  <div className="text-center space-y-2 pt-4 border-t border-white/10">
                    <p className="text-xs text-green-300">
                      🟢 Sarah M. vient d'acheter ce livre (il y a 3 min) - ROI +347% confirmé
                    </p>
                    <p className="text-xs text-blue-300">
                      💬 "Investissement rentabilisé dès la première semaine" - Marc L., CEO
                    </p>
                  </div>
                </div>
                
                {/* Colonne droite avec l'image de couverture - Version améliorée */}
                <div className="relative lg:min-h-[800px] flex items-center justify-center p-8 bg-transparent">
                  {/* Background décoratif sans beige */}
                  <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-40 h-40 bg-yellow-400/10 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                  </div>
                  
                  <div className="relative z-10 w-full flex justify-center">
                    {(() => {
                      const optimized = getOptimizedBookData(featuredEbook);
                      return optimized.coverImage ? (
                        <div className="relative group">
                          <img 
                            src={optimized.coverImage} 
                            alt={optimized.headline}
                            className="w-80 lg:w-96 h-auto shadow-2xl rounded-xl transform hover:scale-105 transition-all duration-500 group-hover:shadow-[0_0_80px_rgba(251,191,36,0.6)]"
                          />
                          {/* Glow effect amélioré autour de l'image */}
                          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/15 to-orange-500/15 rounded-xl blur-xl -z-10 transform scale-110 opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                          {/* Badge de réduction positionné */}
                          <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold text-lg animate-bounce shadow-lg">
                            🔥 -50%
                          </div>
                        </div>
                      ) : (
                        <div className="w-80 lg:w-96 h-[500px] bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg shadow-2xl flex items-center justify-center">
                          <BookOpen className="w-20 h-20 text-white/80" />
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      )}

      {/* Search and Filter Section */}
      <PageContainer className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 mb-12 shadow-space-glow">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Explorez notre collection premium</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-4 h-5 w-5 text-blue-400" />
                <Input
                  placeholder="Rechercher votre prochaine opportunité business..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 py-4 bg-white/5 border-white/20 text-white placeholder:text-blue-300 focus:border-blue-400 focus:ring-blue-400/20"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-64 py-4 bg-white/5 border-white/20 text-white">
                  <SelectValue placeholder="Filtrer par expertise" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="all" className="text-white">Toutes les expertises</SelectItem>
                  {categories?.map((category) => (
                    <SelectItem key={category.id} value={category.name} className="text-white">
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Books Grid avec copywriting optimisé */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEbooks?.map((ebook, index) => {
              const optimized = getOptimizedBookData(ebook);
              return (
                <Card key={ebook.id} className="bg-white/10 backdrop-blur-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-cosmic hover:scale-105 group" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="space-y-4">
                    <div className="flex justify-between items-start">
                      <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        {ebook.category}
                      </Badge>
                      {ebook.featured && (
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold">
                          <Crown className="w-3 h-3 mr-1" />
                          Bestseller
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors">
                      {optimized.headline}
                    </CardTitle>
                    <CardDescription className="text-blue-200">
                      Par {ebook.author} • Expert International
                    </CardDescription>
                    {optimized.social && (
                      <p className="text-xs text-green-300 font-medium">{optimized.social}</p>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-sm text-blue-200 line-clamp-3 leading-relaxed">
                      {optimized.subtitle}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-baseline space-x-2">
                          <span className="text-2xl font-bold text-green-400">
                            {ebook.price}€
                          </span>
                          <span className="text-sm text-blue-300">{ebook.currency}</span>
                        </div>
                        {optimized.urgency && (
                          <p className="text-xs text-red-400">{optimized.urgency}</p>
                        )}
                      </div>
                      {ebook.pages && (
                        <div className="text-sm text-blue-300 bg-white/5 px-3 py-1 rounded-full">
                          {ebook.pages} pages
                        </div>
                      )}
                    </div>
                    
                    <Button 
                      onClick={() => handleBookAccess(ebook)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:shadow-cosmic"
                    >
                      <Target className="w-4 h-4 mr-2" />
                      {optimized.cta}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {ebooksLoading && (
            <div className="text-center py-20">
              <div className="relative">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-400 mx-auto mb-6"></div>
                <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border border-blue-400/30 mx-auto"></div>
              </div>
              <p className="text-xl text-blue-200">Chargement de votre bibliothèque premium...</p>
              <p className="text-sm text-blue-300 mt-2">Préparation des contenus ultra-rentables</p>
            </div>
          )}

          {filteredEbooks?.length === 0 && !ebooksLoading && (
            <div className="text-center py-20">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 max-w-md mx-auto border border-white/10">
                <BookOpen className="w-20 h-20 text-blue-400 mx-auto mb-6 opacity-60" />
                <h3 className="text-2xl font-bold text-white mb-4">Aucune opportunité trouvée</h3>
                <p className="text-blue-200 mb-6">Essayez de modifier vos critères de recherche ou explorez d'autres expertises</p>
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  variant="outline" 
                  className="border-blue-400/50 text-blue-400 hover:bg-blue-400/10"
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            </div>
          )}
        </div>
      </PageContainer>

      {/* Modals optimisés */}
      {showLeadModal && selectedBook && (
        <LeadCaptureModal
          isOpen={showLeadModal}
          onClose={() => setShowLeadModal(false)}
          onSubmit={handleLeadSubmit}
          isLoading={isLoading || isProcessingPayment}
          bookTitle={getOptimizedBookData(selectedBook).headline}
          bookPrice={`${selectedBook.price}€`}
        />
      )}

      {showPreviewModal && selectedBook && (
        <PreviewModal
          isOpen={showPreviewModal}
          onClose={() => setShowPreviewModal(false)}
          onPurchase={handlePurchaseFromPreview}
          bookTitle={getOptimizedBookData(selectedBook).headline}
          bookPrice={`${selectedBook.price}€`}
        />
      )}

      {showSuccessPage && selectedBook && leadData && (
        <DownloadSuccessPage
          bookTitle={getOptimizedBookData(selectedBook).headline}
          userEmail={leadData.email}
          onClose={() => {
            setShowSuccessPage(false);
            setSelectedBook(null);
            setLeadData(null);
          }}
        />
      )}

      <Footer />
    </div>
  );
};

export default Library;
