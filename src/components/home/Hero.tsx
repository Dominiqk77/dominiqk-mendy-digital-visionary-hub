
import React, { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import HeroDynamicBackground from './hero/HeroDynamicBackground';
import HeroTitle from './hero/HeroTitle';
import HeroDescription from './hero/HeroDescription';
import HeroButtons from './hero/HeroButtons';
import HeroProfile from './hero/HeroProfile';
import HeroClients from './hero/HeroClients';

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative h-auto min-h-[700px] sm:min-h-[700px] flex items-center overflow-hidden bg-transparent pt-16 pb-8 sm:pt-8 sm:pb-0">
      {/* Dynamic background with particles and effects */}
      <HeroDynamicBackground />
      
      <div className="container mx-auto px-4 sm:px-6 z-10 relative">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-5 text-center md:text-left animate-slide-in-left">
            {/* Hero title and subtitle */}
            <HeroTitle />
            
            {/* Description and tech badges */}
            <HeroDescription />
            
            {/* CTA buttons */}
            <HeroButtons />
          </div>
          
          {/* Profile image section */}
          <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0 animate-slide-in-right">
            <HeroProfile isMobile={isMobile} />
          </div>
        </div>
        
        {/* Client section */}
        <HeroClients />
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hidden md:block" onClick={scrollToAbout}>
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
