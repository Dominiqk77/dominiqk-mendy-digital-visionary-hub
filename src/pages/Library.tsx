import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageContainer from '@/components/layout/PageContainer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Crown, Sparkles, Target, Zap, BookOpen } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { useDominiqkLibrary } from '@/hooks/useDominiqkLibrary';
import LeadCaptureModal from '@/components/library/LeadCaptureModal';
import PreviewModal from '@/components/library/PreviewModal';
import DownloadSuccessPage from '@/components/library/DownloadSuccessPage';
import AnimatedBackground from '@/components/library/AnimatedBackground';
import RealTimeStats from '@/components/library/RealTimeStats';
import TestimonialsSection from '@/components/library/TestimonialsSection';
import TrustBadges from '@/components/library/TrustBadges';
import BonusSection from '@/components/library/BonusSection';
import FAQSection from '@/components/library/FAQSection';
import EnhancedBookCard from '@/components/library/EnhancedBookCard';
import PremiumPreviewModal from '@/components/library/PremiumPreviewModal';

interface Ebook {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  pages?: number;
  featured: boolean;
  cover_image_url: string;
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

  useEffect(() => {
    trackEngagement({
      event_type: 'page_view',
      page_url: window.location.href,
      event_data: { page: 'library' }
    });

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

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
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

  const featuredEbooks = ebooks?.filter(ebook => ebook.featured) || [];
  const iaMasteryBook = ebooks?.find(ebook => ebook.title.includes("IA Business Mastery"));

  const handleBookAccess = (book: Ebook) => {
    setSelectedBook(book);
    setShowLeadModal(true);
    
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
      let existingLead = await findLeadByEmail(data.email);
      
      if (!existingLead) {
        existingLead = await addLead({
          name: data.name,
          email: data.email,
          company: data.company,
          source: 'library_premium_purchase',
          campaign: selectedBook.title
        });
      }

      if (existingLead) {
        const checkoutData = {
          ebookId: selectedBook.id,
          customerEmail: data.email,
          customerName: data.name,
          bookTitle: selectedBook.title,
          bookPrice: `${selectedBook.price}€`
        };

        const checkoutResult = await createCheckout(checkoutData);
        
        if (checkoutResult) {
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

  const getOptimizedBookData = (book: Ebook) => {
    console.log('getOptimizedBookData called for book:', book.title);
    console.log('Book cover_image_url:', book.cover_image_url);
    
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
        coverImage: "/lovable-uploads/dbdfc6e9-fdbf-449b-8513-b785afbb1367.png"
      },
      "IA Business Mastery - Le Guide Ultra-Rentable du Leader Digital": {
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
        coverImage: "/lovable-uploads/dbdfc6e9-fdbf-449b-8513-b785afbb1367.png"
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

    const result = optimizations[book.title] || {
      headline: book.title,
      subtitle: book.description,
      cta: "Voir les détails",
      benefits: [],
      urgency: "",
      social: "",
      guarantee: "",
      proof: "",
      coverImage: book.cover_image_url || "/placeholder.svg"
    };
    
    console.log('Final coverImage for', book.title, ':', result.coverImage);
    return result;
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10">
        <Navbar />
        
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-4 text-center text-sm font-bold shadow-lg mt-16 relative z-30">
          🔥 OFFRE LIMITÉE: -50% sur tous les livres premium • Expire dans {urgencyTimer.hours}h {urgencyTimer.minutes}m {urgencyTimer.seconds}s • Plus que 47 exemplaires disponibles
        </div>
        
        <div className="relative">
          <PageContainer className="pt-20 md:pt-32 pb-10 md:pb-20">
            <div className="text-center max-w-6xl mx-auto px-4">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 md:px-6 py-2 mb-6 md:mb-8 animate-fade-in">
                <Crown className="w-4 md:w-5 h-4 md:h-5 text-yellow-400 mr-2" />
                <span className="text-white font-medium text-xs md:text-sm">
                  E-Bibliothèque Premium - Expert IA International N°1 • 
                  <span className="text-green-300 ml-2">🟢 {visitorCount.toLocaleString()} leaders déjà équipés</span>
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent animate-gradient-text leading-tight">
                Transformez Votre Business avec
                <br />
                <span className="text-yellow-400">l'IA Ultra-Rentable</span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed">
                Les stratégies secrètes qui ont généré +250% de ROI pour 500+ entreprises.
                <br />
                <span className="text-yellow-300 font-semibold">Expertise 15+ ans, résultats documentés, méthodes éprouvées.</span>
              </p>

              <RealTimeStats />
            </div>
          </PageContainer>
        </div>

        {iaMasteryBook && (
          <PageContainer className="py-10 md:py-20">
            {(() => {
              const optimized = getOptimizedBookData(iaMasteryBook);
              return (
                <div className="text-center mb-12 md:mb-16 px-4">
                  <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold mb-4 md:mb-6 shadow-glow-blue animate-pulse text-sm md:text-base">
                    <Sparkles className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                    GUIDE EXPERT N°1 - STRATÉGIES IA ULTRA-RENTABLES
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
                    <span className="text-blue-400">{optimized.headline}</span>
                  </h2>
                  <p className="text-lg md:text-2xl text-blue-200 max-w-4xl mx-auto mb-4 md:mb-6">
                    {optimized.subtitle}
                  </p>
                  <div className="space-y-2">
                    <p className="text-green-300 font-semibold text-base md:text-lg">{optimized.social}</p>
                    {optimized.proof && (
                      <p className="text-yellow-300 font-medium text-sm md:text-base">{optimized.proof}</p>
                    )}
                  </div>
                </div>
              );
            })()}
          </PageContainer>
        )}

        {featuredEbooks.length > 0 && (
          <PageContainer className="py-10 md:py-20">
            <div className="text-center mb-16 px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
                📚 <span className="text-cyan-400">Livres Vedettes</span>
              </h2>
              <div className="space-y-12 max-w-8xl mx-auto">
                {featuredEbooks.slice(0, 2).map((ebook, index) => (
                  <div 
                    key={ebook.id} 
                    className="transform hover:scale-[1.02] transition-transform duration-500"
                  >
                    <EnhancedBookCard
                      ebook={ebook}
                      optimizedData={getOptimizedBookData(ebook)}
                      onAccess={() => handleBookAccess(ebook)}
                      onPreview={() => handlePreviewRequest(ebook)}
                      index={index}
                    />
                  </div>
                ))}
              </div>
            </div>
          </PageContainer>
        )}

        <PageContainer className="py-10 md:py-20">
          <TestimonialsSection />
          <TrustBadges />
          <BonusSection />
        </PageContainer>

        <PageContainer className="py-10 md:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 mb-8 md:mb-12 shadow-space-glow">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">Explorez notre collection premium</h3>
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-4 h-5 w-5 text-cyan-400" />
                  <Input
                    placeholder="Rechercher votre prochaine opportunité business..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 py-4 bg-white/5 border-white/20 text-white placeholder:text-blue-300 focus:border-cyan-400 focus:ring-cyan-400/20"
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredEbooks?.map((ebook, index) => (
                <EnhancedBookCard
                  key={ebook.id}
                  ebook={ebook}
                  optimizedData={getOptimizedBookData(ebook)}
                  onAccess={() => handleBookAccess(ebook)}
                  onPreview={() => handlePreviewRequest(ebook)}
                  index={index}
                />
              ))}
            </div>

            {ebooksLoading && (
              <div className="text-center py-12 md:py-20">
                <div className="relative">
                  <div className="animate-spin rounded-full h-12 md:h-16 w-12 md:w-16 border-b-2 border-cyan-400 mx-auto mb-4 md:mb-6"></div>
                  <div className="absolute inset-0 animate-ping rounded-full h-12 md:h-16 w-12 md:w-16 border border-cyan-400/30 mx-auto"></div>
                </div>
                <p className="text-lg md:text-xl text-blue-200">Chargement de votre bibliothèque premium...</p>
                <p className="text-sm text-blue-300 mt-2">Préparation des contenus ultra-rentables</p>
              </div>
            )}

            {filteredEbooks?.length === 0 && !ebooksLoading && (
              <div className="text-center py-12 md:py-20">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-md mx-auto border border-white/10">
                  <BookOpen className="w-16 md:w-20 h-16 md:h-20 text-cyan-400 mx-auto mb-4 md:mb-6 opacity-60" />
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Aucune opportunité trouvée</h3>
                  <p className="text-blue-200 mb-4 md:mb-6 text-sm md:text-base">Essayez de modifier vos critères de recherche ou explorez d'autres expertises</p>
                  <Button 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    variant="outline" 
                    className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 text-sm md:text-base"
                  >
                    Réinitialiser les filtres
                  </Button>
                </div>
              </div>
            )}
          </div>
        </PageContainer>

        <PageContainer className="py-10 md:py-20">
          <FAQSection />
        </PageContainer>

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
          <PremiumPreviewModal
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
    </div>
  );
};

export default Library;
