
import React from 'react';
import { Globe } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface TestimonialHeaderProps {
  languages: string[];
  activeLanguage: string;
  onLanguageChange: (language: string) => void;
}

const TestimonialHeader = ({ 
  languages, 
  activeLanguage, 
  onLanguageChange 
}: TestimonialHeaderProps) => {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-cosmic animate-gradient-slow">
        Témoignages Internationaux
      </h2>
      <div className="h-1 w-24 bg-gradient-to-r from-portfolio-purple to-portfolio-blue animate-pulse-slow mx-auto mb-6"></div>
      <p className="text-lg text-gray-300">
        Découvrez l'impact de notre expertise à l'échelle mondiale
      </p>
      
      {/* Language toggle */}
      <div className="flex justify-center gap-3 mt-8 mb-12">
        <Globe className="w-5 h-5 text-portfolio-purple mr-2" />
        {languages.map((language) => (
          <Badge
            key={language}
            onClick={() => onLanguageChange(language)}
            className={`cursor-pointer transition-all px-4 py-2 text-sm ${
              activeLanguage === language 
                ? "bg-gradient-to-r from-portfolio-purple to-portfolio-blue text-white animate-pulse-slow" 
                : "bg-gray-800 hover:bg-gray-700 text-gray-300"
            }`}
          >
            {language}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default TestimonialHeader;
