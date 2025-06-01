
import React, { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import EnhancedHomeBackground from './hero/EnhancedHomeBackground';
import HeroTitle from './hero/HeroTitle';
import HeroDescription from './hero/HeroDescription';
import HeroButtons from './hero/HeroButtons';
import HeroProfile from './hero/HeroProfile';
import HeroClients from './hero/HeroClients';
import { motion } from 'framer-motion';

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
      {/* Enhanced creative background with code elements */}
      <EnhancedHomeBackground />
      
      <div className="container mx-auto px-4 sm:px-6 z-10 relative">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <motion.div 
            className="w-full md:w-1/2 space-y-5 text-center md:text-left"
            initial={{ opacity: 0, x: -30 }} // Reduced animation distance
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }} // Faster animation
          >
            {/* Hero title and subtitle */}
            <HeroTitle />
            
            {/* Description and tech badges */}
            <HeroDescription />
            
            {/* CTA buttons */}
            <HeroButtons />
            
            {/* Optimized tech stack visualization - small preview */}
            <motion.div 
              className="hidden md:flex flex-wrap gap-2 mt-6"
              initial={{ opacity: 0, y: 15 }} // Reduced animation distance
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }} // Faster animation
              style={{ willChange: 'opacity, transform' }}
            >
              {['react', 'nextjs', 'nodejs', 'tailwind', 'python', 'tensorflow'].map((tech, index) => (
                <div 
                  key={tech} 
                  className="p-1.5 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-200"
                  style={{ 
                    animationDelay: `${index * 0.1}s`, // Faster stagger
                    willChange: 'transform, opacity'
                  }}
                >
                  <img 
                    src={`/icons/${tech}.svg`} 
                    alt={tech} 
                    className="w-6 h-6 object-contain filter brightness-125"
                    loading="lazy" // Lazy load non-critical icons
                    decoding="async"
                  />
                </div>
              ))}
              <div className="flex items-center text-xs text-white/70 pl-2">
                <span>et plus...</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Profile image section with enhanced animations */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0"
            initial={{ opacity: 0, scale: 0.95, x: 30 }} // Reduced animation distance
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }} // Faster animation
            style={{ willChange: 'opacity, transform' }}
          >
            <HeroProfile isMobile={isMobile} />
          </motion.div>
        </div>
        
        {/* Client section with improved animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Reduced animation distance
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }} // Faster animation
          style={{ willChange: 'opacity, transform' }}
        >
          <HeroClients />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hidden md:block" 
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }} // Faster appearance
          style={{ willChange: 'opacity' }}
        >
          <ChevronDown className="h-8 w-8 text-white" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
