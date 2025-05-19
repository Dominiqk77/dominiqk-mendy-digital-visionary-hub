
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Globe, Star } from 'lucide-react';

interface TestimonialCardProps {
  id: number;
  name: string;
  company: string;
  position: string;
  quote: string;
  image: string;
  country: string;
  language: string;
  rating: number;
}

const TestimonialCard = ({
  name,
  company,
  position,
  quote,
  image,
  country,
  rating
}: TestimonialCardProps) => {
  return (
    <Card className="bg-black/40 backdrop-blur-lg border-0 overflow-hidden rounded-xl h-full transition-all duration-300 hover:shadow-cosmic hover:scale-[1.02]">
      <div className="absolute inset-0 opacity-10 bg-gradient-to-b from-portfolio-purple to-transparent rounded-xl"></div>
      <CardContent className="p-8 flex flex-col h-full">
        <div className="flex items-center mb-5">
          {/* Country flag indicator */}
          <div className="relative mr-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-portfolio-purple shadow-cosmic">
              <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-portfolio-purple to-portfolio-blue rounded-full p-1.5 shadow-cosmic-lg">
              <Quote className="w-3 h-3 text-white" />
            </div>
          </div>
          <div>
            <p className="font-semibold text-lg text-white">{name}</p>
            <div className="flex items-center mt-1">
              <div className="space-badge text-xs py-0.5 px-2 flex items-center">
                <Globe className="w-3 h-3 mr-1" />
                {country}
              </div>
            </div>
          </div>
        </div>

        {/* Rating stars */}
        <div className="flex mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} fill="#9b87f5" className="w-4 h-4 text-portfolio-purple" />
          ))}
        </div>
        
        <p className="text-gray-300 italic text-sm mb-4 flex-1">
          "{quote}"
        </p>
        
        <div className="mt-auto">
          <p className="text-xs text-portfolio-purple font-medium">{position}</p>
          <p className="text-xs text-gray-400">{company}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
