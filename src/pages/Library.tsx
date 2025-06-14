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
import { Search, Star, Download, Eye, BookOpen, Users, TrendingUp, Sparkles, Award, Clock, Shield, Target, Zap, Crown, Rocket, Brain, Trophy, Heart, Fire, Gift, Lightbulb, ChevronRight, CheckCircle, BarChart3, Gem, Infinity, Globe, Cpu } from 'lucide-react';
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
  const iaMasteryBook = ebooks?.find(ebook => ebook.title.includes("IA Business Mastery"));

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
      "IA Business Mastery": {
        headline: "IA Business Mastery",
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
        coverImage: "/lovable-uploads/11b48a7f-d009-4592-abd1-daf20806a4e9.png"
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
        coverImage: "/lovable-uploads/5e73d42f-03d3-4e51-a53a-ba5db570a87d.png"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Background animé ultra-créatif */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradients animés multiples */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-bl from-pink-400/25 to-red-500/25 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-gradient-to-tr from-green-400/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-bl from-yellow-400/15 to-orange-500/15 rounded-full blur-xl animate-float-subtle"></div>
        
        {/* Particules flottantes colorées */}
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-blue-400 rounded-full animate-twinkle opacity-60"></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-pink-400 rounded-full animate-pulse opacity-70"></div>
        <div className="absolute bottom-1/4 left-1/4 w-5 h-5 bg-green-400 rounded-full animate-float opacity-50"></div>
        <div className="absolute top-1/2 right-1/5 w-6 h-6 bg-yellow-400 rounded-full animate-twinkle opacity-40"></div>
        
        {/* Lignes de connexion animées */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          <path d="M100,200 Q400,100 700,300 T1200,200" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" className="animate-pulse">
            <animate attributeName="opacity" values="0.1;0.3;0.1" dur="4s" repeatCount="indefinite" />
          </path>
          <path d="M200,500 Q600,300 1000,600 T1400,400" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" className="animate-pulse-slow">
            <animate attributeName="opacity" values="0.1;0.4;0.1" dur="6s" repeatCount="indefinite" />
          </path>
        </svg>
        
        {/* Grid pattern futuriste */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <Navbar />
      
      {/* Banner d'urgence ultra-design */}
      <div className="bg-gradient-to-r from-red-500 via-pink-500 to-red-600 text-white py-4 px-4 text-center text-sm font-bold shadow-2xl mt-16 relative z-30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6">
          <div className="flex items-center">
            <Fire className="w-5 h-5 mr-2 animate-pulse" />
            <span>OFFRE LIMITÉE: -50% sur tous les livres premium</span>
          </div>
          <div className="flex items-center bg-black/20 px-3 py-1 rounded-full">
            <Clock className="w-4 h-4 mr-2" />
            <span>Expire dans {urgencyTimer.hours}h {urgencyTimer.minutes}m {urgencyTimer.seconds}s</span>
          </div>
          <div className="flex items-center">
            <Gem className="w-4 h-4 mr-2 animate-pulse" />
            <span>Plus que 47 exemplaires disponibles</span>
          </div>
        </div>
      </div>
      
      {/* Hero Section ultra-créatif */}
      <div className="relative z-10">
        <PageContainer className="pt-20 md:pt-32 pb-10 md:pb-20">
          <div className="text-center max-w-6xl mx-auto px-4">
            {/* Badge animé premium */}
            <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/30 rounded-full px-6 md:px-8 py-3 md:py-4 mb-8 md:mb-12 animate-fade-in shadow-2xl">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Crown className="w-6 md:w-7 h-6 md:h-7 text-yellow-400 animate-pulse" />
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-lg animate-pulse"></div>
                </div>
                <span className="text-white font-bold text-sm md:text-base bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  E-Bibliothèque Premium d'Excellence
                </span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 font-semibold text-xs md:text-sm">
                    {visitorCount.toLocaleString()}+ Entrepreneurs Équipés
                  </span>
                </div>
              </div>
            </div>
            
            {/* Titre principal ultra-impactant */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 md:mb-12 leading-tight">
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-text">
                Révolutionnez
              </span>
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-gradient-text" style={{animationDelay: '0.5s'}}>
                Votre Business
              </span>
              <span className="block bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient-text" style={{animationDelay: '1s'}}>
                avec l'IA
              </span>
            </h1>
            
            {/* Sous-titre enrichi */}
            <div className="text-xl md:text-3xl lg:text-4xl text-center mb-10 md:mb-16 max-w-5xl mx-auto">
              <p className="text-blue-100 mb-4 leading-relaxed">
                Les <span className="text-yellow-400 font-bold">stratégies secrètes</span> qui ont généré
                <span className="text-green-400 font-bold"> +250% de ROI</span> pour 500+ entreprises
              </p>
              <p className="text-lg md:text-2xl text-purple-200">
                <span className="text-pink-400 font-semibold">15+ ans d'expertise</span> • 
                <span className="text-cyan-400 font-semibold"> Résultats documentés</span> • 
                <span className="text-yellow-400 font-semibold"> Méthodes éprouvées</span>
              </p>
            </div>

            {/* Badges de valeur ultra-créatifs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/30 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-4 md:p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-glow-blue">
                <Rocket className="w-8 md:w-10 h-8 md:h-10 text-blue-400 mx-auto mb-3 animate-float" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-blue-200 text-xs md:text-sm">Entreprises Transformées</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/30 backdrop-blur-xl border border-green-400/30 rounded-2xl p-4 md:p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-glow-blue" style={{animationDelay: '0.2s'}}>
                <BarChart3 className="w-8 md:w-10 h-8 md:h-10 text-green-400 mx-auto mb-3 animate-float-subtle" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">+250%</div>
                <div className="text-green-200 text-xs md:text-sm">ROI Moyen Documenté</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/30 backdrop-blur-xl border border-purple-400/30 rounded-2xl p-4 md:p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-glow-purple" style={{animationDelay: '0.4s'}}>
                <Brain className="w-8 md:w-10 h-8 md:h-10 text-purple-400 mx-auto mb-3 animate-pulse" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-purple-200 text-xs md:text-sm">Années d'Expertise IA</div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/30 backdrop-blur-xl border border-yellow-400/30 rounded-2xl p-4 md:p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-glow-blue" style={{animationDelay: '0.6s'}}>
                <Trophy className="w-8 md:w-10 h-8 md:h-10 text-yellow-400 mx-auto mb-3 animate-bounce" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">2.5B€</div>
                <div className="text-yellow-200 text-xs md:text-sm">Opportunités Identifiées</div>
              </div>
            </div>

            {/* Social proof temps réel enrichi */}
            <div className="bg-gradient-to-r from-white/10 via-white/15 to-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl p-6 md:p-8 mb-12 md:mb-16 max-w-4xl mx-auto shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div className="flex items-center justify-center space-x-3 text-green-300">
                  <div className="relative">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 bg-green-400/30 rounded-full animate-ping"></div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">{Math.floor(visitorCount * 0.12)}</div>
                    <div className="text-xs">Achats cette semaine</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-yellow-300">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current animate-twinkle" style={{animationDelay: `${i * 0.1}s`}} />
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-lg">4.9/5</div>
                    <div className="text-xs">1,247+ avis</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-2 text-blue-300">
                  <Shield className="w-5 h-5 animate-pulse" />
                  <div className="text-center">
                    <div className="font-bold text-lg">100%</div>
                    <div className="text-xs">Sécurisé</div>
                  </div>
                </div>
              </div>
              
              {/* Testimonials en temps réel */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-sm">
                  <div className="flex items-center text-green-300 animate-fade-in">
                    <Heart className="w-4 h-4 mr-2 text-red-400 animate-pulse" />
                    <span>"ROI +320% en 6 mois" - Laurent B. (il y a 2 min)</span>
                  </div>
                  <div className="flex items-center text-blue-300 animate-fade-in" style={{animationDelay: '1s'}}>
                    <Lightbulb className="w-4 h-4 mr-2 text-yellow-400 animate-pulse" />
                    <span>"Transformation complète de mon business" - Sophie R.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </div>

      {/* Section IA Business Mastery ultra-premium */}
      {iaMasteryBook && (
        <PageContainer className="py-16 md:py-24">
          {(() => {
            const optimized = getOptimizedBookData(iaMasteryBook);
            return (
              <div className="text-center mb-16 md:mb-20 px-4">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-500/30 via-purple-600/30 to-indigo-600/30 backdrop-blur-2xl text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-bold mb-8 md:mb-10 shadow-cosmic-lg animate-pulse-glow border border-blue-400/30">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Cpu className="w-6 md:w-7 h-6 md:h-7 animate-spin-slow" />
                      <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg animate-pulse"></div>
                    </div>
                    <span className="text-base md:text-lg">GUIDE EXPERT N°1 - STRATÉGIES IA ULTRA-RENTABLES</span>
                    <div className="relative">
                      <Sparkles className="w-6 md:w-7 h-6 md:h-7 text-yellow-400 animate-twinkle" />
                      <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-lg animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-gradient-text">
                    {optimized.headline}
                  </span>
                </h2>
                
                <p className="text-xl md:text-3xl lg:text-4xl text-center mb-8 md:mb-10 max-w-5xl mx-auto leading-relaxed">
                  <span className="text-blue-200">{optimized.subtitle.split('(')[0]}</span>
                  <span className="text-green-400 font-bold">({optimized.subtitle.split('(')[1]}</span>
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
                  <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/30 backdrop-blur-xl border border-green-400/30 rounded-2xl p-4 text-center">
                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3 animate-pulse" />
                    <p className="text-green-300 font-semibold text-sm md:text-base">{optimized.social}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-500/20 to-orange-600/30 backdrop-blur-xl border border-yellow-400/30 rounded-2xl p-4 text-center">
                    <Star className="w-8 h-8 text-yellow-400 mx-auto mb-3 animate-twinkle" />
                    <p className="text-yellow-300 font-semibold text-sm md:text-base">{optimized.proof}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/30 backdrop-blur-xl border border-purple-400/30 rounded-2xl p-4 text-center">
                    <Gift className="w-8 h-8 text-purple-400 mx-auto mb-3 animate-bounce" />
                    <p className="text-purple-300 font-semibold text-sm md:text-base">Bonus Templates + ROI Calculator</p>
                  </div>
                </div>
              </div>
            );
          })()}
          
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl overflow-hidden shadow-cosmic-lg relative">
              {/* Effets visuels de fond */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-float"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-float-subtle"></div>
                <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-400/10 rounded-full blur-xl animate-pulse"></div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-0 relative z-10">
                <div className="p-8 md:p-12 lg:p-16 space-y-8 md:space-y-10">
                  {(() => {
                    const optimized = getOptimizedBookData(iaMasteryBook);
                    return (
                      <div>
                        {/* Badges premium */}
                        <div className="flex flex-wrap gap-3 mb-6 md:mb-8">
                          <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 text-sm font-bold animate-pulse shadow-glow-blue">
                            <Brain className="w-4 h-4 mr-2" />
                            EXPERTISE IA EXCLUSIVE
                          </Badge>
                          <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 text-sm border-0 animate-bounce">
                            <Zap className="w-4 h-4 mr-2" />
                            -50% Prix Lancement
                          </Badge>
                          <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 text-sm border-0 animate-pulse">
                            <Clock className="w-4 h-4 mr-2" />
                            {urgencyTimer.hours}h {urgencyTimer.minutes}m
                          </Badge>
                        </div>
                        
                        <h3 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">
                          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            {optimized.headline}
                          </span>
                        </h3>
                        
                        {/* Benefits ultra-visuels */}
                        <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                          {optimized.benefits.map((benefit: string, index: number) => (
                            <div key={index} className="flex items-start space-x-4 group">
                              <div className="relative">
                                <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                  <CheckCircle className="w-4 h-4 text-white" />
                                </div>
                                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-md animate-pulse"></div>
                              </div>
                              <p className="text-blue-100 text-base md:text-lg leading-relaxed group-hover:text-white transition-colors">{benefit}</p>
                            </div>
                          ))}
                        </div>

                        {/* Garantie premium ultra-design */}
                        <div className="bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 border border-green-400/40 rounded-2xl p-6 md:p-8 mb-8 md:mb-10 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent animate-shimmer"></div>
                          <div className="relative z-10 text-center">
                            <div className="flex items-center justify-center mb-4">
                              <Shield className="w-8 h-8 text-green-400 mr-3 animate-pulse" />
                              <Gem className="w-8 h-8 text-green-400 animate-twinkle" />
                            </div>
                            <p className="text-green-300 font-bold text-lg md:text-xl">{optimized.guarantee}</p>
                          </div>
                        </div>

                        {/* Section prix ultra-premium */}
                        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 mb-8 md:mb-10 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-orange-400/5 to-red-400/5 animate-pulse"></div>
                          <div className="relative z-10">
                            <div className="flex flex-col md:flex-row items-center justify-between mb-6 space-y-4 md:space-y-0">
                              <div className="text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start space-x-4 mb-3">
                                  <span className="text-4xl md:text-5xl font-bold text-green-400">{iaMasteryBook.price}€</span>
                                  <span className="text-2xl md:text-3xl text-gray-400 line-through">{Math.round(iaMasteryBook.price * 2)}€</span>
                                  <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-2 font-bold animate-bounce shadow-lg">
                                    <Fire className="w-4 h-4 mr-1" />
                                    -50%
                                  </Badge>
                                </div>
                                <p className="text-sm text-blue-300">
                                  Offre limitée - Expire dans {urgencyTimer.hours}h {urgencyTimer.minutes}m {urgencyTimer.seconds}s
                                </p>
                              </div>
                              
                              <div className="text-center bg-red-500/20 border border-red-400/30 rounded-2xl px-4 py-3 animate-pulse">
                                <div className="text-red-400 font-bold text-sm mb-1">⚠️ STOCK LIMITÉ</div>
                                <div className="text-red-300 text-xs">Plus que 47 exemplaires</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Caractéristiques premium */}
                        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
                          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/30 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-4 text-center transform hover:scale-105 transition-all">
                            <BookOpen className="w-6 h-6 text-blue-400 mx-auto mb-2 animate-float" />
                            <div className="text-white font-semibold text-sm">{iaMasteryBook.pages} pages</div>
                            <div className="text-blue-200 text-xs">d'expertise pure</div>
                          </div>
                          
                          <div className="bg-gradient-to-br from-green-500/20 to-green-600/30 backdrop-blur-xl border border-green-400/30 rounded-2xl p-4 text-center transform hover:scale-105 transition-all">
                            <Download className="w-6 h-6 text-green-400 mx-auto mb-2 animate-bounce" />
                            <div className="text-white font-semibold text-sm">Téléchargement</div>
                            <div className="text-green-200 text-xs">immédiat</div>
                          </div>
                          
                          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/30 backdrop-blur-xl border border-purple-400/30 rounded-2xl p-4 text-center transform hover:scale-105 transition-all">
                            <Infinity className="w-6 h-6 text-purple-400 mx-auto mb-2 animate-pulse" />
                            <div className="text-white font-semibold text-sm">Accès à vie</div>
                            <div className="text-purple-200 text-xs">+ mises à jour</div>
                          </div>
                          
                          <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 backdrop-blur-xl border border-yellow-400/30 rounded-2xl p-4 text-center transform hover:scale-105 transition-all">
                            <Users className="w-6 h-6 text-yellow-400 mx-auto mb-2 animate-twinkle" />
                            <div className="text-white font-semibold text-sm">Support expert</div>
                            <div className="text-yellow-200 text-xs">inclus</div>
                          </div>
                        </div>

                        {/* Boutons d'action ultra-premium */}
                        <div className="space-y-4 md:space-y-6">
                          <Button 
                            onClick={() => handleBookAccess(iaMasteryBook)}
                            disabled={isProcessingPayment}
                            className="w-full bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-600 hover:from-blue-600 hover:via-purple-700 hover:to-indigo-700 text-white py-4 md:py-6 text-lg md:text-xl font-bold shadow-cosmic-lg transition-all duration-300 hover:shadow-cosmic-lg hover:scale-105 relative overflow-hidden group"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            <div className="relative z-10 flex items-center justify-center">
                              <Rocket className="w-6 h-6 mr-3 animate-bounce" />
                              {isProcessingPayment ? 'Traitement...' : 'Accès Immédiat - Acheter Maintenant'}
                              <ChevronRight className="w-6 h-6 ml-3 animate-pulse" />
                            </div>
                          </Button>
                          
                          <Button 
                            variant="outline" 
                            className="w-full border-2 border-white/40 text-white hover:bg-white/10 py-4 md:py-6 text-base md:text-lg backdrop-blur-xl bg-white/5 hover:border-blue-400/60 transition-all duration-300 transform hover:scale-105"
                            onClick={() => handlePreviewRequest(iaMasteryBook)}
                          >
                            <Eye className="w-5 h-5 mr-3 animate-pulse" />
                            Aperçu Gratuit (15 premières pages)
                            <Sparkles className="w-5 h-5 ml-3 animate-twinkle" />
                          </Button>
                        </div>

                        {/* Social proof en temps réel */}
                        <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 md:p-6 mt-6 md:mt-8">
                          <div className="space-y-3">
                            <div className="flex items-center text-green-300 animate-fade-in">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                              <span className="text-sm">🟢 Laurent B. vient d'acheter ce livre (il y a 2 min) - "ROI +320% en 6 mois"</span>
                            </div>
                            <div className="flex items-center text-blue-300 animate-fade-in" style={{animationDelay: '1s'}}>
                              <Heart className="w-4 h-4 mr-3 text-pink-400 animate-pulse" />
                              <span className="text-sm">💬 "Le guide qui a transformé mon business IA" - Sophie R., Entrepreneur</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>
                
                {/* Colonne droite avec l'image ultra-stylée */}
                <div className="relative min-h-[500px] md:min-h-[700px] lg:min-h-[900px] flex items-center justify-center p-6 bg-transparent">
                  {/* Background décoratif ultra-créatif */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl animate-float"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl animate-float-subtle" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-yellow-400/15 to-orange-400/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
                    
                    {/* Particules flottantes */}
                    <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-twinkle"></div>
                    <div className="absolute bottom-1/3 left-1/5 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-float"></div>
                  </div>
                  
                  <div className="relative z-10 w-full flex justify-center">
                    <div className="relative group">
                      <img 
                        src="/lovable-uploads/11b48a7f-d009-4592-abd1-daf20806a4e9.png" 
                        alt="IA Business Mastery"
                        className="w-[400px] md:w-[550px] lg:w-[650px] xl:w-[750px] h-auto shadow-2xl rounded-xl transform hover:scale-105 transition-all duration-500 group-hover:shadow-[0_0_80px_rgba(59,130,246,0.8)] object-contain mix-blend-normal relative z-10"
                        style={{ 
                          backgroundColor: 'transparent',
                          filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))'
                        }}
                      />
                      
                      {/* Glow effects multiples */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-cyan-400/20 rounded-xl blur-2xl -z-10 transform scale-110 opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                      <div className="absolute inset-0 bg-gradient-to-tl from-pink-400/15 via-purple-500/15 to-blue-400/15 rounded-xl blur-xl -z-20 transform scale-125 opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
                      
                      {/* Badge de réduction ultra-design */}
                      <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-4 rounded-full font-bold text-lg animate-bounce shadow-2xl z-20 border-2 border-white/30">
                        <div className="flex items-center">
                          <Cpu className="w-5 h-5 mr-2 animate-spin" />
                          <span>-50%</span>
                          <Sparkles className="w-5 h-5 ml-2 animate-pulse" />
                        </div>
                      </div>
                      
                      {/* Indicateurs de valeur flottants */}
                      <div className="absolute -left-8 top-1/4 bg-green-500/90 backdrop-blur-xl text-white px-4 py-2 rounded-full text-sm font-bold animate-float shadow-lg border border-green-400/50">
                        <Target className="w-4 h-4 inline mr-2" />
                        ROI +250%
                      </div>
                      
                      <div className="absolute -right-8 bottom-1/3 bg-yellow-500/90 backdrop-blur-xl text-black px-4 py-2 rounded-full text-sm font-bold animate-float-subtle shadow-lg border border-yellow-400/50" style={{animationDelay: '1s'}}>
                        <Award className="w-4 h-4 inline mr-2" />
                        Bestseller
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      )}

      {/* Section NEW DEAL ultra-premium */}
      {featuredEbook && (
        <PageContainer className="py-16 md:py-24">
          {(() => {
            const optimized = getOptimizedBookData(featuredEbook);
            return (
              <div className="text-center mb-16 md:mb-20 px-4">
                <div className="inline-flex items-center bg-gradient-to-r from-yellow-500/30 via-orange-500/30 to-red-500/30 backdrop-blur-2xl text-black px-8 md:px-12 py-4 md:py-6 rounded-full font-bold mb-8 md:mb-10 shadow-cosmic-lg animate-pulse-glow border border-yellow-400/40">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Globe className="w-6 md:w-7 h-6 md:h-7 animate-spin-slow" />
                      <div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-lg animate-pulse"></div>
                    </div>
                    <span className="text-base md:text-lg font-black">BESTSELLER EXCLUSIF - INTELLIGENCE ÉCONOMIQUE</span>
                    <div className="relative">
                      <Fire className="w-6 md:w-7 h-6 md:h-7 text-red-500 animate-bounce" />
                      <div className="absolute inset-0 bg-red-400/20 rounded-full blur-lg animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8">
                  <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-gradient-text">
                    {optimized.headline}
                  </span>
                </h2>
                
                <p className="text-xl md:text-3xl lg:text-4xl text-center mb-8 md:mb-10 max-w-5xl mx-auto leading-relaxed">
                  <span className="text-blue-200">{optimized.subtitle.split('(')[0]}</span>
                  <span className="text-yellow-400 font-bold">({optimized.subtitle.split('(')[1]}</span>
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
                  <div className="bg-gradient-to-br from-orange-500/20 to-red-600/30 backdrop-blur-xl border border-orange-400/30 rounded-2xl p-4 text-center">
                    <BarChart3 className="w-8 h-8 text-orange-400 mx-auto mb-3 animate-pulse" />
                    <p className="text-orange-300 font-semibold text-sm md:text-base">{optimized.social}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-yellow-500/20 to-orange-600/30 backdrop-blur-xl border border-yellow-400/30 rounded-2xl p-4 text-center">
                    <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3 animate-bounce" />
                    <p className="text-yellow-300 font-semibold text-sm md:text-base">{optimized.proof}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-red-500/20 to-pink-600/30 backdrop-blur-xl border border-red-400/30 rounded-2xl p-4 text-center">
                    <Gem className="w-8 h-8 text-red-400 mx-auto mb-3 animate-twinkle" />
                    <p className="text-red-300 font-semibold text-sm md:text-base">Analyse Terrain 11 Ans</p>
                  </div>
                </div>
              </div>
            );
          })()}
          
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl overflow-hidden shadow-cosmic-lg relative">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl animate-float"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-500/10 rounded-full blur-2xl animate-float-subtle"></div>
                <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-red-400/10 rounded-full blur-xl animate-pulse"></div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-0 relative z-10">
                <div className="p-8 md:p-12 lg:p-16 space-y-8 md:space-y-10">
                  {(() => {
                    const optimized = getOptimizedBookData(featuredEbook);
                    return (
                      <div>
                        <div className="flex flex-wrap gap-3 mb-6 md:mb-8">
                          <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 text-sm font-bold animate-pulse shadow-glow-blue">
                            <Rocket className="w-4 h-4 mr-2" />
                            LANCEMENT EXCLUSIF
                          </Badge>
                          <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 text-sm border-0 animate-bounce">
                            <Zap className="w-4 h-4 mr-2" />
                            -50% Prix Lancement
                          </Badge>
                          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2 text-sm border-0 animate-pulse">
                            <Clock className="w-4 h-4 mr-2" />
                            {urgencyTimer.hours}h {urgencyTimer.minutes}m
                          </Badge>
                        </div>
                        
                        <h3 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">
                          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                            {optimized.headline}
                          </span>
                        </h3>
                        
                        <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                          {optimized.benefits.map((benefit: string, index: number) => (
                            <div key={index} className="flex items-start space-x-4 group">
                              <div className="relative">
                                <div className="w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                                  <CheckCircle className="w-4 h-4 text-white" />
                                </div>
                                <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-md animate-pulse"></div>
                              </div>
                              <p className="text-blue-100 text-base md:text-lg leading-relaxed group-hover:text-white transition-colors">{benefit}</p>
                            </div>
                          ))}
                        </div>

                        <div className="bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 border border-green-400/40 rounded-2xl p-6 md:p-8 mb-8 md:mb-10 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent animate-shimmer"></div>
                          <div className="relative z-10 text-center">
                            <div className="flex items-center justify-center mb-4">
                              <Shield className="w-8 h-8 text-green-400 mr-3 animate-pulse" />
                              <Gem className="w-8 h-8 text-green-400 animate-twinkle" />
                            </div>
                            <p className="text-green-300 font-bold text-lg md:text-xl">{optimized.guarantee}</p>
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 mb-8 md:mb-10 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-orange-400/5 to-red-400/5 animate-pulse"></div>
                          <div className="relative z-10">
                            <div className="flex flex-col md:flex-row items-center justify-between mb-6 space-y-4 md:space-y-0">
                              <div className="text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start space-x-4 mb-3">
                                  <span className="text-4xl md:text-5xl font-bold text-green-400">{featuredEbook.price}€</span>
                                  <span className="text-2xl md:text-3xl text-gray-400 line-through">{Math.round(featuredEbook.price * 2)}€</span>
                                  <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-2 font-bold animate-bounce shadow-lg">
                                    <Fire className="w-4 h-4 mr-1" />
                                    -50%
                                  </Badge>
                                </div>
                                <p className="text-sm text-blue-300">
                                  Offre limitée - Expire dans {urgencyTimer.hours}h {urgencyTimer.minutes}m {urgencyTimer.seconds}s
                                </p>
                              </div>
                              
                              <div className="text-center bg-red-500/20 border border-red-400/30 rounded-2xl px-4 py-3 animate-pulse">
                                <div className="text-red-400 font-bold text-sm mb-1">⚠️ STOCK LIMITÉ</div>
                                <div className="text-red-300 text-xs">Plus que 47 exemplaires</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
                          <div className="bg-gradient-to-br from-yellow-500/20 to-orange-600/30 backdrop-blur-xl border border-yellow-400/30 rounded-2xl p-4 text-center transform hover:scale-105 transition-all">
                            <BookOpen className="w-6 h-6 text-yellow-400 mx-auto mb-2 animate-float" />
                            <div className="text-white font-semibold text-sm">{featuredEbook.pages} pages</div>
                            <div className="text-yellow-200 text-xs">d'expertise pure</div>
                          </div>
                          
                          <div className="bg-gradient-to-br from-green-500/20 to-green-600/30 backdrop-blur-xl border border-green-400/30 rounded-2xl p-4 text-center transform hover:scale-105 transition-all">
                            <Download className="w-6 h-6 text-green-400 mx-auto mb-2 animate-bounce" />
                            <div className="text-white font-semibold text-sm">Téléchargement</div>
                            <div className="text-green-200 text-xs">immédiat</div>
                          </div>
                          
                          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/30 backdrop-blur-xl border border-purple-400/30 rounded-2xl p-4 text-center transform hover:scale-105 transition-all">
                            <Shield className="w-6 h-6 text-purple-400 mx-auto mb-2 animate-pulse" />
                            <div className="text-white font-semibold text-sm">Accès à vie</div>
                            <div className="text-purple-200 text-xs">+ mises à jour</div>
                          </div>
                          
                          <div className="bg-gradient-to-br from-orange-500/20 to-red-600/30 backdrop-blur-xl border border-orange-400/30 rounded-2xl p-4 text-center transform hover:scale-105 transition-all">
                            <Users className="w-6 h-6 text-orange-400 mx-auto mb-2 animate-twinkle" />
                            <div className="text-white font-semibold text-sm">Support expert</div>
                            <div className="text-orange-200 text-xs">inclus</div>
                          </div>
                        </div>

                        <div className="space-y-4 md:space-y-6">
                          <Button 
                            onClick={() => handleBookAccess(featuredEbook)}
                            disabled={isProcessingPayment}
                            className="w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-black py-4 md:py-6 text-lg md:text-xl font-bold shadow-cosmic-lg transition-all duration-300 hover:shadow-cosmic-lg hover:scale-105 relative overflow-hidden group"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            <div className="relative z-10 flex items-center justify-center">
                              <Fire className="w-6 h-6 mr-3 animate-bounce" />
                              {isProcessingPayment ? 'Traitement...' : 'Accès Immédiat - Acheter Maintenant'}
                              <ChevronRight className="w-6 h-6 ml-3 animate-pulse" />
                            </div>
                          </Button>
                          
                          <Button 
                            variant="outline" 
                            className="w-full border-2 border-white/40 text-white hover:bg-white/10 py-4 md:py-6 text-base md:text-lg backdrop-blur-xl bg-white/5 hover:border-yellow-400/60 transition-all duration-300 transform hover:scale-105"
                            onClick={() => handlePreviewRequest(featuredEbook)}
                          >
                            <Eye className="w-5 h-5 mr-3 animate-pulse" />
                            Aperçu Gratuit (15 premières pages)
                            <Sparkles className="w-5 h-5 ml-3 animate-twinkle" />
                          </Button>
                        </div>

                        <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 md:p-6 mt-6 md:mt-8">
                          <div className="space-y-3">
                            <div className="flex items-center text-green-300 animate-fade-in">
                              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                              <span className="text-sm">🟢 Sarah M. vient d'acheter ce livre (il y a 3 min) - ROI +347% confirmé</span>
                            </div>
                            <div className="flex items-center text-blue-300 animate-fade-in" style={{animationDelay: '1s'}}>
                              <Heart className="w-4 h-4 mr-3 text-pink-400 animate-pulse" />
                              <span className="text-sm">💬 "Investissement rentabilisé dès la première semaine" - Marc L., CEO</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </div>
                
                <div className="relative min-h-[500px] md:min-h-[700px] lg:min-h-[900px] flex items-center justify-center p-6 bg-transparent">
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-2xl animate-float"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-2xl animate-float-subtle" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-red-400/15 to-pink-400/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
                  </div>
                  
                  <div className="relative z-10 w-full flex justify-center">
                    <div className="relative group">
                      <img 
                        src="/lovable-uploads/5e73d42f-03d3-4e51-a53a-ba5db570a87d.png" 
                        alt="NEW DEAL TECHNOLOGIQUE SÉNÉGAL"
                        className="w-[400px] md:w-[550px] lg:w-[650px] xl:w-[750px] h-auto shadow-2xl rounded-xl transform hover:scale-105 transition-all duration-500 group-hover:shadow-[0_0_80px_rgba(251,191,36,0.8)] object-contain mix-blend-normal relative z-10"
                        style={{ 
                          backgroundColor: 'transparent',
                          filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))'
                        }}
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-orange-500/20 to-red-400/20 rounded-xl blur-2xl -z-10 transform scale-110 opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                      <div className="absolute inset-0 bg-gradient-to-tl from-red-400/15 via-orange-500/15 to-yellow-400/15 rounded-xl blur-xl -z-20 transform scale-125 opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
                      
                      <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-black px-6 py-4 rounded-full font-bold text-lg animate-bounce shadow-2xl z-20 border-2 border-white/30">
                        <div className="flex items-center">
                          <Fire className="w-5 h-5 mr-2 animate-pulse" />
                          <span>-50%</span>
                          <Gem className="w-5 h-5 ml-2 animate-twinkle" />
                        </div>
                      </div>
                      
                      <div className="absolute -left-8 top-1/4 bg-green-500/90 backdrop-blur-xl text-white px-4 py-2 rounded-full text-sm font-bold animate-float shadow-lg border border-green-400/50">
                        <Globe className="w-4 h-4 inline mr-2" />
                        2.5B€ Opport.
                      </div>
                      
                      <div className="absolute -right-8 bottom-1/3 bg-yellow-500/90 backdrop-blur-xl text-black px-4 py-2 rounded-full text-sm font-bold animate-float-subtle shadow-lg border border-yellow-400/50" style={{animationDelay: '1s'}}>
                        <Trophy className="w-4 h-4 inline mr-2" />
                        Exclusif
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      )}

      {/* Section de recherche ultra-stylée */}
      <PageContainer className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 md:p-12 mb-12 md:mb-16 shadow-cosmic-lg relative overflow-hidden">
            {/* Background animé */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-float"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-float-subtle"></div>
              <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-pink-400/10 rounded-full blur-lg animate-pulse"></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-8 md:mb-12">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-500/30 to-purple-600/30 backdrop-blur-xl text-white px-6 py-3 rounded-full font-bold mb-6 border border-blue-400/30">
                  <Search className="w-5 h-5 mr-3 animate-pulse" />
                  <span className="text-lg">Explorez Notre Collection Premium</span>
                  <Sparkles className="w-5 h-5 ml-3 animate-twinkle" />
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Trouvez Votre Prochaine
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    Opportunité Business
                  </span>
                </h3>
                
                <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                  Accédez aux stratégies secrètes des leaders mondiaux et transformez votre entreprise avec l'IA
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                <div className="flex-1 relative group">
                  <Search className="absolute left-6 top-6 h-6 w-6 text-blue-400 animate-pulse" />
                  <Input
                    placeholder="Rechercher votre prochaine révolution business..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-16 py-6 text-lg bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white placeholder:text-blue-300 focus:border-blue-400 focus:ring-blue-400/20 rounded-2xl group-hover:border-purple-400/50 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-80 py-6 text-lg bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white rounded-2xl hover:border-yellow-400/50 transition-all duration-300">
                    <SelectValue placeholder="Filtrer par expertise" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800/95 backdrop-blur-xl border-slate-600 rounded-2xl">
                    <SelectItem value="all" className="text-white text-lg py-3 hover:bg-blue-500/20 rounded-xl">
                      🌟 Toutes les expertises
                    </SelectItem>
                    {categories?.map((category) => (
                      <SelectItem key={category.id} value={category.name} className="text-white text-lg py-3 hover:bg-purple-500/20 rounded-xl">
                        🎯 {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Grid des livres ultra-stylé */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredEbooks?.map((ebook, index) => {
              const optimized = getOptimizedBookData(ebook);
              return (
                <Card key={ebook.id} className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-2xl border border-white/30 hover:border-blue-400/60 transition-all duration-500 hover:shadow-cosmic-lg hover:scale-105 group relative overflow-hidden rounded-3xl" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Background animé pour chaque carte */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-float opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-pink-400/10 to-yellow-400/10 rounded-full blur-lg animate-float-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>
                  
                  <CardHeader className="space-y-4 md:space-y-6 relative z-10">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <Badge className="bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-xl text-blue-300 border border-blue-400/40 text-sm px-3 py-1 rounded-full">
                        <Brain className="w-3 h-3 mr-1" />
                        {ebook.category}
                      </Badge>
                      {ebook.featured && (
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-sm px-3 py-1 rounded-full animate-pulse shadow-lg">
                          <Crown className="w-3 h-3 mr-1" />
                          Bestseller
                        </Badge>
                      )}
                    </div>
                    
                    <CardTitle className="text-xl md:text-2xl text-white group-hover:text-blue-300 transition-colors leading-tight">
                      {optimized.headline}
                    </CardTitle>
                    
                    <CardDescription className="text-blue-200 text-base leading-relaxed">
                      Par <span className="text-blue-300 font-semibold">{ebook.author}</span> • Expert International
                    </CardDescription>
                    
                    {optimized.social && (
                      <div className="bg-green-500/20 backdrop-blur-xl border border-green-400/30 rounded-xl p-3 animate-fade-in">
                        <p className="text-green-300 font-medium text-sm flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 animate-pulse" />
                          {optimized.social}
                        </p>
                      </div>
                    )}
                  </CardHeader>
                  
                  <CardContent className="space-y-6 md:space-y-8 relative z-10">
                    <p className="text-blue-200 text-base line-clamp-3 leading-relaxed group-hover:text-blue-100 transition-colors">
                      {optimized.subtitle}
                    </p>
                    
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-3 md:space-y-0">
                      <div className="space-y-2">
                        <div className="flex items-baseline space-x-3">
                          <span className="text-2xl md:text-3xl font-bold text-green-400">
                            {ebook.price}€
                          </span>
                          <span className="text-lg text-gray-400 line-through">
                            {Math.round(ebook.price * 2)}€
                          </span>
                          <Badge className="bg-red-500 text-white px-2 py-1 font-bold text-xs animate-pulse">
                            -50%
                          </Badge>
                        </div>
                        {optimized.urgency && (
                          <p className="text-red-400 text-sm font-medium animate-pulse">{optimized.urgency}</p>
                        )}
                      </div>
                      
                      {ebook.pages && (
                        <div className="bg-white/10 backdrop-blur-xl text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                          <BookOpen className="w-4 h-4 inline mr-2" />
                          {ebook.pages} pages
                        </div>
                      )}
                    </div>
                    
                    <Button 
                      onClick={() => handleBookAccess(ebook)}
                      className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white py-4 text-base md:text-lg font-bold transition-all duration-300 hover:shadow-cosmic-lg hover:scale-105 relative overflow-hidden group rounded-2xl"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      <div className="relative z-10 flex items-center justify-center">
                        <Rocket className="w-5 h-5 mr-3 animate-bounce" />
                        {optimized.cta}
                        <ChevronRight className="w-5 h-5 ml-3 animate-pulse" />
                      </div>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* États de chargement ultra-stylés */}
          {ebooksLoading && (
            <div className="text-center py-20 md:py-32">
              <div className="relative mb-8">
                <div className="animate-spin rounded-full h-20 md:h-24 w-20 md:w-24 border-b-4 border-blue-400 mx-auto mb-8"></div>
                <div className="absolute inset-0 animate-ping rounded-full h-20 md:h-24 w-20 md:w-24 border border-blue-400/30 mx-auto"></div>
                <div className="absolute inset-0 animate-pulse rounded-full h-20 md:h-24 w-20 md:w-24 bg-blue-400/10 mx-auto"></div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Chargement de votre bibliothèque premium...
                </span>
              </h3>
              
              <p className="text-lg text-blue-300 mb-4">Préparation des contenus ultra-rentables</p>
              
              <div className="flex items-center justify-center space-x-4 text-sm text-blue-400">
                <div className="flex items-center">
                  <Brain className="w-4 h-4 mr-2 animate-pulse" />
                  <span>IA Business Mastery</span>
                </div>
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="flex items-center">
                  <Globe className="w-4 h-4 mr-2 animate-pulse" />
                  <span>Opportunités Sénégal</span>
                </div>
              </div>
            </div>
          )}

          {filteredEbooks?.length === 0 && !ebooksLoading && (
            <div className="text-center py-20 md:py-32">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-12 md:p-16 max-w-2xl mx-auto border border-white/20 shadow-cosmic">
                <div className="relative mb-8">
                  <BookOpen className="w-24 md:w-32 h-24 md:h-32 text-blue-400 mx-auto opacity-60 animate-float" />
                  <div className="absolute inset-0 bg-blue-400/10 rounded-full blur-2xl animate-pulse"></div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Aucune Opportunité Trouvée
                  </span>
                </h3>
                
                <p className="text-blue-200 mb-8 text-lg leading-relaxed">
                  Essayez de modifier vos critères de recherche ou explorez d'autres expertises pour découvrir des stratégies révolutionnaires
                </p>
                
                <Button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-bold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-cosmic-lg"
                >
                  <Search className="w-5 h-5 mr-3" />
                  Réinitialiser les filtres
                  <Sparkles className="w-5 h-5 ml-3 animate-twinkle" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </PageContainer>

      {/* Modals conservés */}
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
