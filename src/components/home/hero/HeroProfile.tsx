
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from 'framer-motion';
import { getOptimizedImageProps } from '@/lib/utils';

interface HeroProfileProps {
  isMobile: boolean;
}

const HeroProfile = ({ isMobile }: HeroProfileProps) => {
  return (
    <div className="relative">
      {/* Optimized animated background rings */}
      <div className="absolute inset-0 animate-pulse-slow">
        <div className="absolute inset-0 rounded-full border-2 border-portfolio-purple/30 animate-spin-slow"></div>
        <div className="absolute inset-4 rounded-full border border-portfolio-blue/20 animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '15s'}}></div>
      </div>
      
      {/* Optimized floating elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-portfolio-purple/40 rounded-full animate-float blur-sm"></div>
      <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-portfolio-blue/40 rounded-full animate-float-slow blur-sm"></div>
      <div className="absolute top-1/2 -right-8 w-4 h-4 bg-portfolio-cyan/40 rounded-full animate-bounce blur-sm"></div>
      
      {/* Enhanced neural network effect - optimized for performance */}
      <svg className="absolute inset-0 w-full h-full opacity-20" style={{ willChange: 'opacity' }}>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {/* Optimized connection lines */}
        <line x1="20%" y1="30%" x2="80%" y2="70%" stroke="#9b87f5" strokeWidth="1" opacity="0.6" filter="url(#glow)"/>
        <line x1="70%" y1="20%" x2="30%" y2="80%" stroke="#0EA5E9" strokeWidth="1" opacity="0.4" filter="url(#glow)"/>
        <line x1="50%" y1="10%" x2="50%" y2="90%" stroke="#ff49db" strokeWidth="0.5" opacity="0.3" filter="url(#glow)"/>
        
        {/* Optimized data nodes */}
        <circle cx="20%" cy="30%" r="3" fill="#9b87f5" opacity="0.8" className="animate-pulse-slow">
          <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="80%" cy="70%" r="2" fill="#0EA5E9" opacity="0.6" className="animate-pulse-slow" style={{animationDelay: '1s'}}>
          <animate attributeName="r" values="1;3;1" dur="4s" repeatCount="indefinite"/>
        </circle>
        <circle cx="50%" cy="50%" r="2.5" fill="#ff49db" opacity="0.7" className="animate-pulse-slow" style={{animationDelay: '2s'}}>
          <animate attributeName="r" values="1.5;3.5;1.5" dur="5s" repeatCount="indefinite"/>
        </circle>
      </svg>
      
      {/* Main profile image with optimization */}
      <motion.div
        className="relative z-10"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <AspectRatio ratio={1} className="w-64 sm:w-80 md:w-96">
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 backdrop-blur-sm shadow-2xl shadow-portfolio-purple/20">
            {/* Optimized gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-purple/20 via-transparent to-portfolio-blue/20 z-10 rounded-full"></div>
            
            {/* Main profile image with high priority loading */}
            <img
              {...getOptimizedImageProps(
                '/lovable-uploads/c0a0e8cc-455f-443c-849f-9c1c4aa6981c.png',
                'Dominiqk Mendy - Expert en Innovation Numérique',
                true
              )}
              className="w-full h-full object-cover rounded-full transform transition-transform duration-300 hover:scale-110"
              style={{ willChange: 'transform' }}
            />
            
            {/* Enhanced glow effect */}
            <div className="absolute inset-0 rounded-full shadow-inner shadow-portfolio-purple/30"></div>
          </div>
        </AspectRatio>
        
        {/* Optimized status indicator */}
        <motion.div 
          className="absolute bottom-4 right-4 z-20"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 500 }}
        >
          <div className="relative">
            <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
            <div className="absolute inset-0 w-6 h-6 bg-green-400 rounded-full animate-ping opacity-20"></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroProfile;
