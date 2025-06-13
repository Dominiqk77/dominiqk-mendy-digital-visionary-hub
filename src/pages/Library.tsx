
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
import { Search, Star, Download, Eye, BookOpen, Users, TrendingUp, Sparkles, Award, Clock, Shield } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

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

  const filteredEbooks = ebooks?.filter(ebook => {
    const matchesSearch = ebook.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ebook.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || ebook.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredEbook = ebooks?.find(ebook => ebook.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      {/* Hero Section with Cosmic Theme */}
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
              <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-white font-medium">E-Bibliothèque Premium - Expert IA International</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-gradient-text leading-tight">
              Maîtrisez l'IA avec
              <br />
              <span className="text-yellow-400">Dominiqk Mendy</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Découvrez les secrets de l'Intelligence Artificielle et de la transformation digitale 
              avec un expert international reconnu. 15+ ans d'expérience au service de votre réussite.
            </p>
            
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 animate-float-subtle">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-blue-500/20 p-4 rounded-full">
                    <Users className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-blue-200">Entreprises accompagnées</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 animate-float-subtle" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-green-500/20 p-4 rounded-full">
                    <TrendingUp className="w-8 h-8 text-green-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">+250%</div>
                <div className="text-blue-200">ROI moyen clients</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 animate-float-subtle" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-purple-500/20 p-4 rounded-full">
                    <Award className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-blue-200">Années d'expertise</div>
              </div>
            </div>
          </div>
        </PageContainer>
      </div>

      {/* Featured Book Section */}
      {featuredEbook && (
        <PageContainer className="py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold mb-6 shadow-glow-purple">
              <Star className="w-5 h-5 mr-2" />
              LIVRE VEDETTE - OFFRE LIMITÉE
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              Nouveau : <span className="text-yellow-400">{featuredEbook.title}</span>
            </h2>
            <p className="text-2xl text-blue-200 max-w-3xl mx-auto">
              Le guide ultime pour maîtriser l'IA dans le business moderne
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-space-glow">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-12 lg:p-16 space-y-8">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <Badge className="bg-red-500 text-white px-4 py-2 text-sm font-bold">
                        🚀 LANCEMENT EXCLUSIF
                      </Badge>
                      <Badge className="bg-green-500/20 text-green-400 border border-green-500/30">
                        -25% Économie
                      </Badge>
                    </div>
                    
                    <h3 className="text-4xl font-bold text-white mb-6">{featuredEbook.title}</h3>
                    <p className="text-lg text-blue-200 leading-relaxed mb-8">{featuredEbook.description}</p>
                  </div>
                  
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
                          ⏱️ Offre limitée
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center text-blue-200">
                      <BookOpen className="w-5 h-5 mr-3 text-blue-400" />
                      <span>{featuredEbook.pages} pages d'expertise</span>
                    </div>
                    <div className="flex items-center text-blue-200">
                      <Download className="w-5 h-5 mr-3 text-green-400" />
                      <span>Téléchargement immédiat</span>
                    </div>
                    <div className="flex items-center text-blue-200">
                      <Shield className="w-5 h-5 mr-3 text-purple-400" />
                      <span>Accès à vie garanti</span>
                    </div>
                    <div className="flex items-center text-blue-200">
                      <Clock className="w-5 h-5 mr-3 text-yellow-400" />
                      <span>Mises à jour incluses</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Link to={`/library/${featuredEbook.id}`}>
                      <Button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 text-white py-4 text-lg font-bold shadow-cosmic-lg transition-all duration-300 hover:shadow-cosmic-lg hover:scale-105">
                        <Sparkles className="w-5 h-5 mr-2" />
                        Accéder aux détails & Acheter maintenant
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 py-4">
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

      {/* Search and Filter Section */}
      <PageContainer className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 mb-12 shadow-space-glow">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Explorez notre collection</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-4 h-5 w-5 text-blue-400" />
                <Input
                  placeholder="Rechercher un livre par titre ou contenu..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 py-4 bg-white/5 border-white/20 text-white placeholder:text-blue-300 focus:border-blue-400 focus:ring-blue-400/20"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-64 py-4 bg-white/5 border-white/20 text-white">
                  <SelectValue placeholder="Filtrer par catégorie" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-700">
                  <SelectItem value="all" className="text-white">Toutes les catégories</SelectItem>
                  {categories?.map((category) => (
                    <SelectItem key={category.id} value={category.name} className="text-white">
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Books Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEbooks?.map((ebook, index) => (
              <Card key={ebook.id} className="bg-white/10 backdrop-blur-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300 hover:shadow-cosmic hover:scale-105 group" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="space-y-4">
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      {ebook.category}
                    </Badge>
                    {ebook.featured && (
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold">
                        <Star className="w-3 h-3 mr-1" />
                        Vedette
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors">
                    {ebook.title}
                  </CardTitle>
                  <CardDescription className="text-blue-200">
                    Par {ebook.author}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-sm text-blue-200 line-clamp-3 leading-relaxed">
                    {ebook.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-2xl font-bold text-green-400">
                          {ebook.price}€
                        </span>
                        <span className="text-sm text-blue-300">{ebook.currency}</span>
                      </div>
                    </div>
                    {ebook.pages && (
                      <div className="text-sm text-blue-300 bg-white/5 px-3 py-1 rounded-full">
                        {ebook.pages} pages
                      </div>
                    )}
                  </div>
                  
                  <Link to={`/library/${ebook.id}`}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:shadow-cosmic">
                      <Eye className="w-4 h-4 mr-2" />
                      Voir les détails
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Loading State */}
          {ebooksLoading && (
            <div className="text-center py-20">
              <div className="relative">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-400 mx-auto mb-6"></div>
                <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border border-blue-400/30 mx-auto"></div>
              </div>
              <p className="text-xl text-blue-200">Chargement de votre bibliothèque...</p>
              <p className="text-sm text-blue-300 mt-2">Préparation des contenus premium</p>
            </div>
          )}

          {/* Empty State */}
          {filteredEbooks?.length === 0 && !ebooksLoading && (
            <div className="text-center py-20">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 max-w-md mx-auto border border-white/10">
                <BookOpen className="w-20 h-20 text-blue-400 mx-auto mb-6 opacity-60" />
                <h3 className="text-2xl font-bold text-white mb-4">Aucun livre trouvé</h3>
                <p className="text-blue-200 mb-6">Essayez de modifier vos critères de recherche ou explorez d'autres catégories</p>
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

      <Footer />
    </div>
  );
};

export default Library;
