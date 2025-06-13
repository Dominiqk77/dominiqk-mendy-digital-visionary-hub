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
  const [selectedBook, setSelectedBook] = useState<Ebook | null>(null);
  const [leadData, setLeadData] = useState<{name?: string; email: string; company?: string} | null>(null);

  const { addLead, trackDownload, trackEngagement, findLeadByEmail, isLoading } = useDominiqkLibrary();

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
          source: 'library_download',
          campaign: selectedBook.title
        });
      }

      if (existingLead) {
        // Track le téléchargement
        await trackDownload({
          book_id: selectedBook.id,
          book_title: selectedBook.title,
          lead_id: existingLead.id
        });

        setLeadData(data);
        setShowLeadModal(false);
        setShowSuccessPage(true);

        toast({
          title: "Accès accordé !",
          description: "Votre livre premium vous attend dans votre email",
        });
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  };

  // Copywriting optimisé pour les livres
  const getOptimizedBookData = (book: Ebook) => {
    const optimizations: {[key: string]: any} = {
      "IA Business Mastery - Le Guide Ultra-Rentable du Leader Digital": {
        headline: "Le Guide Secret des 500+ Entreprises à 7 Chiffres",
        subtitle: "52 pages de stratégies IA éprouvées pour multiplier vos revenus par 3 en 12 mois",
        cta: "Accès Immédiat - Valeur 197€",
        benefits: [
          "Méthodes exclusives utilisées par les leaders internationaux",
          "ROI moyen +250% documenté sur 500+ clients",
          "Stratégies d'expert avec 15 ans d'expérience terrain",
          "Templates et outils prêts à l'emploi inclus"
        ],
        urgency: "🔥 Prix de lancement - Économisez 50€",
        social: "Téléchargé par 2,547+ leaders digitaux"
      },
      "New Deal Technologique Sénégal - Le Guide des Investisseurs": {
        headline: "2.5 Milliards d'€ d'Opportunités Tech Révélées",
        subtitle: "Intelligence économique exclusive pour investisseurs avisés - ROI projeté 300-500%",
        cta: "Rapport Premium - Accès Investisseurs",
        benefits: [
          "Opportunités d'investissement avec projections ROI détaillées",
          "Analyse de terrain par expert local depuis 11 ans",
          "Secteurs porteurs identifiés avec stratégies d'entrée",
          "Network d'investisseurs et entrepreneurs locaux"
        ],
        urgency: "⏰ Opportunités limitées dans le temps",
        social: "Consulté par 850+ investisseurs internationaux"
      }
    };

    return optimizations[book.title] || {
      headline: book.title,
      subtitle: book.description,
      cta: "Voir les détails",
      benefits: [],
      urgency: "",
      social: ""
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      {/* Hero Section avec copywriting optimisé - garde le design exact */}
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
              <span className="text-white font-medium">E-Bibliothèque Premium - Expert IA International N°1</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-gradient-text leading-tight">
              Transformez Votre Business avec
              <br />
              <span className="text-yellow-400">l'IA Rentable</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Les stratégies secrètes qui ont généré +250% de ROI pour 500+ entreprises.
              <br />
              <span className="text-yellow-300 font-semibold">Expertise 15+ ans, résultats documentés, méthodes éprouvées.</span>
            </p>
            
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

      {/* Featured Book Section avec copywriting ultra-rentable */}
      {featuredEbook && (
        <PageContainer className="py-20">
          {(() => {
            const optimized = getOptimizedBookData(featuredEbook);
            return (
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold mb-6 shadow-glow-purple">
                  <Star className="w-5 h-5 mr-2" />
                  BESTSELLER EXCLUSIF - ACCÈS LIMITÉ
                </div>
                <h2 className="text-5xl font-bold text-white mb-6">
                  <span className="text-yellow-400">{optimized.headline}</span>
                </h2>
                <p className="text-2xl text-blue-200 max-w-4xl mx-auto">
                  {optimized.subtitle}
                </p>
                <div className="mt-6">
                  <p className="text-green-300 font-semibold text-lg">{optimized.social}</p>
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
                          <Badge className="bg-red-500 text-white px-4 py-2 text-sm font-bold">
                            🚀 LANCEMENT EXCLUSIF
                          </Badge>
                          <Badge className="bg-green-500/20 text-green-400 border border-green-500/30">
                            -25% Prix Lancement
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
                      </div>
                    );
                  })()}
                  
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="flex items-baseline space-x-3">
                          <span className="text-4xl font-bold text-green-400">147€</span>
                          <span className="text-2xl text-gray-400 line-through">197€</span>
                        </div>
                        <p className="text-sm text-blue-300 mt-2">Prix de lancement - Offre limitée jusqu'au 31 janvier</p>
                      </div>
                      <div className="text-right">
                        <div className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium">
                          ⏱️ Seulement 47 exemplaires restants
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
                      className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-black py-4 text-lg font-bold shadow-cosmic-lg transition-all duration-300 hover:shadow-cosmic-lg hover:scale-105"
                    >
                      <Sparkles className="w-5 h-5 mr-2" />
                      Accès Immédiat - Télécharger Maintenant
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-white/30 text-white hover:bg-white/10 py-4"
                      onClick={() => trackEngagement({
                        event_type: 'preview_request',
                        page_url: window.location.href,
                        event_data: { book_id: featuredEbook.id }
                      })}
                    >
                      <Eye className="w-5 h-5 mr-2" />
                      Aperçu gratuit (15 premières pages)
                    </Button>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-600/80 to-purple-700/80 p-12 lg:p-16 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-space-grid opacity-20"></div>
                  <div className="text-center text-white relative z-10">
                    <div className="w-64 h-80 bg-white/10 backdrop-blur-sm rounded-2xl mb-8 flex items-center justify-center shadow-space-glow border border-white/20">
                      <BookOpen className="w-20 h-20 text-white/60" />
                    </div>
                    <p className="text-xl font-semibold mb-2">Couverture premium</p>
                    <p className="text-sm text-white/80">Design professionnel à venir</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      )}

      {/* Search and Filter Section - garde le design exact */}
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

          {/* ... keep existing code (loading state and empty state) */}
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

      {/* Modals */}
      {showLeadModal && selectedBook && (
        <LeadCaptureModal
          isOpen={showLeadModal}
          onClose={() => setShowLeadModal(false)}
          onSubmit={handleLeadSubmit}
          isLoading={isLoading}
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
