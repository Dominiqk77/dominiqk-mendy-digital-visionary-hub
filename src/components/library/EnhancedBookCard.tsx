
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, BookOpen, Download, Shield, Users, Crown, Star } from 'lucide-react';

interface EnhancedBookCardProps {
  ebook: {
    id: string;
    title: string;
    author: string;
    description: string;
    price: number;
    currency: string;
    category: string;
    pages?: number;
    featured: boolean;
    cover_image_url?: string;
  };
  optimizedData: {
    headline: string;
    subtitle: string;
    cta: string;
    urgency: string;
    social: string;
    coverImage?: string;
  };
  onAccess: () => void;
  onPreview: () => void;
  index: number;
}

const EnhancedBookCard: React.FC<EnhancedBookCardProps> = ({
  ebook,
  optimizedData,
  onAccess,
  onPreview,
  index
}) => {
  const bookCover = optimizedData.coverImage || ebook.cover_image_url || "/placeholder.svg";
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.log('Image failed to load:', bookCover);
    console.log('Trying fallback to placeholder');
    e.currentTarget.src = "/placeholder.svg";
  };

  return (
    <Card 
      className="bg-white/10 backdrop-blur-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-cosmic hover:scale-105 group relative overflow-hidden max-w-2xl mx-auto"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Glow effect background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={`card-particle-${i}`}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      {/* Book Cover Image - Optimized for better presentation */}
      <div className="relative h-96 md:h-[500px] overflow-hidden rounded-t-lg bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
        <img 
          src={bookCover}
          alt={ebook.title}
          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500 p-6"
          onError={handleImageError}
          onLoad={() => console.log('Image loaded successfully:', bookCover)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
        
        {ebook.featured && (
          <Badge className="absolute top-6 right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-xs animate-bounce">
            <Crown className="w-3 h-3 mr-1" />
            Bestseller
          </Badge>
        )}
      </div>
      
      <CardHeader className="space-y-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-2 md:space-y-0">
          <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs animate-pulse">
            {ebook.category}
          </Badge>
        </div>
        
        <CardTitle className="text-lg md:text-xl text-white group-hover:text-cyan-300 transition-colors duration-300">
          {optimizedData.headline}
        </CardTitle>
        
        <CardDescription className="text-blue-200 text-sm">
          Par {ebook.author} • Expert International
        </CardDescription>
        
        {optimizedData.social && (
          <p className="text-xs text-green-300 font-medium animate-pulse">{optimizedData.social}</p>
        )}
        
        {/* Rating stars */}
        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
          <span className="text-yellow-300 text-sm ml-2">(1,247+ avis)</span>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4 md:space-y-6 relative z-10">
        <p className="text-sm text-blue-200 line-clamp-3 leading-relaxed">
          {optimizedData.subtitle}
        </p>
        
        {/* Enhanced price section */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-2 md:space-y-0">
            <div className="space-y-1">
              <div className="flex items-baseline space-x-2">
                <span className="text-xl md:text-2xl font-bold text-green-400">
                  {ebook.price}€
                </span>
                <span className="text-lg text-gray-400 line-through">{ebook.price * 2}€</span>
                <Badge className="bg-red-500 text-white px-2 py-1 font-bold text-xs animate-pulse">-50%</Badge>
              </div>
              {optimizedData.urgency && (
                <p className="text-xs text-red-400 animate-pulse">{optimizedData.urgency}</p>
              )}
            </div>
            {ebook.pages && (
              <div className="text-sm text-blue-300 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                {ebook.pages} pages
              </div>
            )}
          </div>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center text-blue-200">
            <BookOpen className="w-3 h-3 mr-2 text-blue-400" />
            <span>Expertise pure</span>
          </div>
          <div className="flex items-center text-blue-200">
            <Download className="w-3 h-3 mr-2 text-green-400" />
            <span>Accès immédiat</span>
          </div>
          <div className="flex items-center text-blue-200">
            <Shield className="w-3 h-3 mr-2 text-purple-400" />
            <span>Accès à vie</span>
          </div>
          <div className="flex items-center text-blue-200">
            <Users className="w-3 h-3 mr-2 text-yellow-400" />
            <span>Support inclus</span>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="space-y-3">
          <Button 
            onClick={onAccess}
            className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:shadow-cosmic hover:scale-105 text-sm md:text-base py-2 md:py-3 relative overflow-hidden group/btn"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-full group-hover/btn:translate-x-[-200%] transition-transform duration-700"></div>
            <Target className="w-4 h-4 mr-2 relative z-10" />
            <span className="relative z-10">{optimizedData.cta}</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full border-white/30 text-white hover:bg-white/10 hover:border-cyan-400/50 py-2 md:py-3 text-sm md:text-base transition-all duration-300"
            onClick={onPreview}
          >
            <Eye className="w-4 h-4 mr-2" />
            Aperçu Gratuit (15 pages)
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="border-t border-white/10 pt-4 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-green-300">🟢 Paiement sécurisé</span>
            <span className="text-blue-300">💎 Garantie 30j</span>
          </div>
          <div className="text-center">
            <span className="text-yellow-300 text-xs">⭐ Satisfaction garantie ou remboursé</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnhancedBookCard;
