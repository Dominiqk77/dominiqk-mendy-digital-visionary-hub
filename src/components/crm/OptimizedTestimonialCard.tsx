
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, CheckCircle, TrendingUp } from 'lucide-react';

interface OptimizedTestimonialCardProps {
  name: string;
  company: string;
  position: string;
  text: string;
  image: string;
  rating: number;
  verified?: boolean;
  resultMetric?: string;
}

const OptimizedTestimonialCard = ({
  name,
  company,
  position,
  text,
  image,
  rating,
  verified = false,
  resultMetric
}: OptimizedTestimonialCardProps) => {
  return (
    <Card className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/20 hover:border-indigo-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20 h-full">
      <CardContent className="p-6 flex flex-col h-full">
        {/* Header avec photo et badges */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src={image} 
                alt={name}
                className="w-14 h-14 rounded-full object-cover border-2 border-indigo-400/50 shadow-lg"
                loading="lazy"
              />
              {verified && (
                <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
              )}
            </div>
            <div>
              <h4 className="font-bold text-white text-lg">{name}</h4>
              <p className="text-indigo-300 text-sm font-medium">{position}</p>
              <p className="text-gray-400 text-xs">{company}</p>
            </div>
          </div>
          
          {resultMetric && (
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-full px-3 py-1 flex items-center space-x-1">
              <TrendingUp className="w-3 h-3 text-green-400" />
              <span className="text-green-400 text-xs font-bold">{resultMetric}</span>
            </div>
          )}
        </div>

        {/* Étoiles */}
        <div className="flex mb-3">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        
        {/* Témoignage */}
        <blockquote className="text-gray-200 italic mb-4 flex-1 text-sm leading-relaxed">
          "{text}"
        </blockquote>

        {/* Badge vérifié */}
        {verified && (
          <div className="flex items-center justify-center mt-auto">
            <div className="bg-blue-500/20 border border-blue-400/30 rounded-full px-3 py-1 flex items-center space-x-1">
              <CheckCircle className="w-3 h-3 text-blue-400" />
              <span className="text-blue-400 text-xs font-medium">Client Vérifié</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default OptimizedTestimonialCard;
