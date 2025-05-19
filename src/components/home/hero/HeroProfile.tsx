
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface HeroProfileProps {
  isMobile: boolean;
}

const HeroProfile = ({ isMobile }: HeroProfileProps) => {
  if (isMobile) {
    return (
      <div className="relative max-w-[220px]">
        {/* Enhanced glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/60 to-portfolio-purple/60 rounded-full blur-3xl opacity-40 animate-pulse-slow"></div>
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary">
          <AspectRatio ratio={1 / 1} className="w-full h-full">
            <img 
              src="/lovable-uploads/c0a0e8cc-455f-443c-849f-9c1c4aa6981c.png" 
              alt="Dominiqk Mendy" 
              className="w-full h-full object-cover" 
              loading="eager"
              fetchPriority="high"
            />
          </AspectRatio>
        </div>
        {/* Enhanced expertise bubbles */}
        <div className="absolute -right-2 -top-2 w-16 h-16 bg-secondary rounded-full flex items-center justify-center z-20 animate-float shadow-lg shadow-secondary/20">
          <span className="text-white font-bold text-xs text-center p-1">Expert IA</span>
        </div>
        <div className="absolute -left-2 -bottom-2 w-20 h-20 bg-accent rounded-full flex items-center justify-center z-20 animate-float shadow-lg shadow-accent/20" style={{
          animationDelay: '1s'
        }}>
          <span className="text-white font-bold text-xs text-center p-1">Digital Marketing</span>
        </div>
        <div className="absolute right-0 -bottom-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center z-20 animate-float shadow-lg shadow-primary/20" style={{
          animationDelay: '2s'
        }}>
          <span className="text-white font-bold text-xs text-center p-1">Expert Web</span>
        </div>
      </div>
    );
  }
  
  return (
    <div className="relative max-w-[280px] sm:max-w-[320px] mx-auto">
      {/* Enhanced glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/60 to-portfolio-purple/60 rounded-full blur-3xl opacity-40 animate-pulse-slow"></div>
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary">
        <AspectRatio ratio={1 / 1} className="w-full h-full">
          <img 
            src="/lovable-uploads/c0a0e8cc-455f-443c-849f-9c1c4aa6981c.png" 
            alt="Dominiqk Mendy" 
            className="w-full h-full object-cover" 
            loading="eager"
            fetchPriority="high"
          />
        </AspectRatio>
      </div>
      {/* Enhanced expertise bubbles with better positioning and shadows */}
      <div className="absolute -right-2 sm:-right-4 -top-2 sm:-top-4 w-20 h-20 sm:w-24 sm:h-24 bg-secondary rounded-full flex items-center justify-center z-20 animate-float shadow-lg shadow-secondary/20">
        <span className="text-white font-bold text-xs sm:text-sm text-center p-2">Expert IA</span>
      </div>
      <div className="absolute -left-2 sm:-left-4 -bottom-2 sm:-bottom-4 w-24 h-24 sm:w-28 sm:h-28 bg-accent rounded-full flex items-center justify-center z-20 animate-float shadow-lg shadow-accent/20" style={{
        animationDelay: '1s'
      }}>
        <span className="text-white font-bold text-xs sm:text-sm text-center p-2">Digital Marketing</span>
      </div>
      <div className="absolute right-8 sm:right-12 -bottom-6 sm:-bottom-8 w-28 h-28 sm:w-32 sm:h-32 bg-primary rounded-full flex items-center justify-center z-20 animate-float shadow-lg shadow-primary/20" style={{
        animationDelay: '2s'
      }}>
        <span className="text-white font-bold text-xs sm:text-sm text-center p-2">Expert Web</span>
      </div>
    </div>
  );
};

export default HeroProfile;
