
import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import PageContainer from '@/components/layout/PageContainer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Star, Download, Eye, BookOpen, Users, TrendingUp } from 'lucide-react';
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
    <PageContainer>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 py-20">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-6">
                E-Bibliothèque <span className="text-yellow-400">Premium</span>
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Découvrez les secrets de l'Intelligence Artificielle et de la transformation digitale 
                avec Dominiqk Mendy, expert international avec 15+ ans d'expérience
              </p>
              <div className="flex justify-center space-x-8 text-sm">
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  500+ entreprises accompagnées
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  ROI moyen +250%
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Expertise internationalement reconnue
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Book Section */}
        {featuredEbook && (
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <Badge className="bg-yellow-500 text-black mb-4">LIVRE VEDETTE</Badge>
              <h2 className="text-4xl font-bold mb-4">Nouveau : {featuredEbook.title}</h2>
              <p className="text-xl text-gray-600">Le guide ultime pour maîtriser l'IA dans le business</p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-12 flex flex-col justify-center">
                  <div className="mb-6">
                    <Badge className="bg-red-500 text-white mb-4">OFFRE DE LANCEMENT</Badge>
                    <h3 className="text-3xl font-bold mb-4">{featuredEbook.title}</h3>
                    <p className="text-gray-600 mb-6">{featuredEbook.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div>
                        <span className="text-3xl font-bold text-green-600">147€</span>
                        <span className="text-lg text-gray-500 line-through ml-2">197€</span>
                      </div>
                      <Badge className="bg-red-100 text-red-800">-25% Lancement</Badge>
                    </div>
                    <p className="text-sm text-gray-500">Prix de lancement limité - Offre valable jusqu'au 31 janvier</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm">
                      <BookOpen className="w-4 h-4 mr-2 text-blue-600" />
                      {featuredEbook.pages} pages d'expertise
                    </div>
                    <div className="flex items-center text-sm">
                      <Download className="w-4 h-4 mr-2 text-blue-600" />
                      Téléchargement immédiat
                    </div>
                    <div className="flex items-center text-sm">
                      <Eye className="w-4 h-4 mr-2 text-blue-600" />
                      Aperçu gratuit disponible
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link to={`/library/${featuredEbook.id}`}>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 text-lg">
                        Voir les détails & Acheter
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full">
                      <Eye className="w-4 h-4 mr-2" />
                      Aperçu gratuit (15 pages)
                    </Button>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-12 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-48 h-64 bg-white/10 rounded-lg mb-6 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-white/60" />
                    </div>
                    <p className="text-lg font-semibold">Couverture du livre</p>
                    <p className="text-sm text-white/80">Image à venir</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search and Filter Section */}
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Rechercher un livre..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-64">
                  <SelectValue placeholder="Catégorie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les catégories</SelectItem>
                  {categories?.map((category) => (
                    <SelectItem key={category.id} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Books Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEbooks?.map((ebook) => (
              <Card key={ebook.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={ebook.featured ? "default" : "secondary"}>
                      {ebook.category}
                    </Badge>
                    {ebook.featured && (
                      <Badge className="bg-yellow-500 text-black">
                        <Star className="w-3 h-3 mr-1" />
                        Vedette
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{ebook.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    Par {ebook.author}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {ebook.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-green-600">
                        {ebook.price}€
                      </span>
                      <span className="text-sm text-gray-500 ml-1">{ebook.currency}</span>
                    </div>
                    {ebook.pages && (
                      <span className="text-sm text-gray-500">{ebook.pages} pages</span>
                    )}
                  </div>
                  <Link to={`/library/${ebook.id}`}>
                    <Button className="w-full">
                      Voir les détails
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {ebooksLoading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Chargement des livres...</p>
            </div>
          )}

          {filteredEbooks?.length === 0 && !ebooksLoading && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600">Aucun livre trouvé</p>
              <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </div>
      </div>
    </PageContainer>
  );
};

export default Library;
