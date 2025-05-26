
import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
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
        
        {/* Icône 3D Expert Certifié */}
        <motion.div
          className="absolute -top-4 -right-8 group"
          initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            type: "spring",
            stiffness: 100
          }}
          whileHover={{ 
            scale: 1.1, 
            rotateY: 15,
            transition: { duration: 0.3 }
          }}
        >
          {/* Gradient background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-amber-500/40 to-orange-400/30 rounded-full blur-xl animate-pulse"></div>
          
          {/* Main icon container */}
          <div className="relative bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 p-2.5 rounded-full shadow-2xl border-2 border-yellow-300/50">
            {/* Inner glow */}
            <div className="absolute inset-1 bg-gradient-to-br from-yellow-200/30 to-transparent rounded-full"></div>
            
            {/* Award icon */}
            <Award 
              className="w-6 h-6 text-yellow-900 relative z-10 drop-shadow-lg" 
              strokeWidth={2.5}
            />
            
            {/* Sparkle effects */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            
            {/* 3D highlight */}
            <div className="absolute top-1 left-1 w-3 h-3 bg-gradient-to-br from-white/60 to-transparent rounded-full blur-sm"></div>
          </div>
          
          {/* Floating text */}
          <motion.div
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <span className="text-xs font-semibold text-yellow-400 bg-black/40 px-1.5 py-0.5 rounded backdrop-blur-sm border border-yellow-500/30">
              Expert Certifié
            </span>
          </motion.div>
        </motion.div>

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
      
      {/* Icône 3D Expert Certifié */}
      <motion.div
        className="absolute -top-6 -right-12 group"
        initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.8,
          type: "spring",
          stiffness: 100
        }}
        whileHover={{ 
          scale: 1.1, 
          rotateY: 15,
          transition: { duration: 0.3 }
        }}
      >
        {/* Gradient background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-amber-500/40 to-orange-400/30 rounded-full blur-xl animate-pulse"></div>
        
        {/* Main icon container */}
        <div className="relative bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 p-3 rounded-full shadow-2xl border-2 border-yellow-300/50">
          {/* Inner glow */}
          <div className="absolute inset-1 bg-gradient-to-br from-yellow-200/30 to-transparent rounded-full"></div>
          
          {/* Award icon */}
          <Award 
            className="w-8 h-8 text-yellow-900 relative z-10 drop-shadow-lg" 
            strokeWidth={2.5}
          />
          
          {/* Sparkle effects */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-amber-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          
          {/* 3D highlight */}
          <div className="absolute top-1 left-1 w-4 h-4 bg-gradient-to-br from-white/60 to-transparent rounded-full blur-sm"></div>
        </div>
        
        {/* Floating text */}
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <span className="text-xs font-semibold text-yellow-400 bg-black/40 px-2 py-1 rounded backdrop-blur-sm border border-yellow-500/30">
            Expert Certifié
          </span>
        </motion.div>
      </motion.div>

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
