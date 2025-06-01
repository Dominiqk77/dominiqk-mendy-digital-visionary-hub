
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Brain, Globe, Zap } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface HeroProfileProps {
  isMobile: boolean;
}

const HeroProfile = ({ isMobile }: HeroProfileProps) => {
  // Reduce animations on mobile for better performance
  const shouldReduceMotion = isMobile;
  
  if (isMobile) {
    return (
      <div className="relative max-w-[220px]">
        {/* Simplified glow effect for mobile */}
        <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/40 to-portfolio-purple/40 rounded-full blur-2xl opacity-30"></div>
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900">
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
        
        {/* Simplified Expert Certifié icon for mobile */}
        <motion.div
          className="absolute -top-4 -right-8"
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={shouldReduceMotion ? { duration: 0.3 } : { delay: 0.4, duration: 0.6 }}
        >
          <div className="relative bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 p-2.5 rounded-full shadow-xl border-2 border-yellow-300/50">
            <Award className="w-6 h-6 text-yellow-900" strokeWidth={2.5} />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full"></div>
          </div>
        </motion.div>

        {/* Simplified Expert IA icon */}
        <motion.div 
          className="absolute -right-2 -top-2"
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={shouldReduceMotion ? { duration: 0.3 } : { delay: 0.2, duration: 0.6 }}
        >
          <div className="relative bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 p-3 rounded-full shadow-xl border-2 border-orange-300/50">
            <Brain className="w-5 h-5 text-white" strokeWidth={2.5} />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-300 rounded-full"></div>
          </div>
        </motion.div>

        {/* Simplified Digital Marketing icon */}
        <motion.div 
          className="absolute -left-2 -bottom-2"
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={shouldReduceMotion ? { duration: 0.3 } : { delay: 0.6, duration: 0.6 }}
        >
          <div className="relative bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 p-3.5 rounded-full shadow-xl border-2 border-emerald-300/50">
            <Zap className="w-6 h-6 text-white" strokeWidth={2.5} />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full"></div>
          </div>
        </motion.div>

        {/* Simplified Expert Web icon */}
        <motion.div 
          className="absolute right-0 -bottom-4"
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={shouldReduceMotion ? { duration: 0.3 } : { delay: 1, duration: 0.6 }}
        >
          <div className="relative bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600 p-3.5 rounded-full shadow-xl border-2 border-violet-300/50">
            <Globe className="w-6 h-6 text-white" strokeWidth={2.5} />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-violet-300 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    );
  }
  
  return (
    <div className="relative max-w-[280px] sm:max-w-[320px] mx-auto">
      {/* Enhanced glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/60 to-portfolio-purple/60 rounded-full blur-3xl opacity-40 animate-pulse-slow"></div>
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900">
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
      
      {/* Enhanced Expert Certifié icon */}
      <motion.div
        className="absolute -top-6 -right-12 group"
        initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.1, rotateY: 15, transition: { duration: 0.3 } }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-amber-500/40 to-orange-400/30 rounded-full blur-xl animate-pulse"></div>
        <div className="relative bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 p-3 rounded-full shadow-2xl border-2 border-yellow-300/50">
          <div className="absolute inset-1 bg-gradient-to-br from-yellow-200/30 to-transparent rounded-full"></div>
          <Award className="w-8 h-8 text-yellow-900 relative z-10 drop-shadow-lg" strokeWidth={2.5} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-amber-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1 left-1 w-4 h-4 bg-gradient-to-br from-white/60 to-transparent rounded-full blur-sm"></div>
        </div>
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

      {/* Enhanced Expert IA icon */}
      <motion.div 
        className="absolute -right-2 sm:-right-4 -top-2 sm:-top-4 group z-20"
        initial={{ opacity: 0, scale: 0.5, rotateZ: -180 }}
        animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
        transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
        whileHover={{ scale: 1.15, rotateZ: 10 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400/40 via-red-500/50 to-pink-500/40 rounded-full blur-xl animate-pulse"></div>
        <div className="relative bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 p-4 sm:p-5 rounded-full shadow-2xl border-2 border-orange-300/50 animate-float">
          <div className="absolute inset-1 bg-gradient-to-br from-orange-200/40 to-transparent rounded-full"></div>
          <Brain className="w-7 h-7 sm:w-8 sm:h-8 text-white relative z-10 drop-shadow-lg" strokeWidth={2.5} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-300 rounded-full animate-ping"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-red-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute top-1 left-1 w-4 h-4 bg-gradient-to-br from-white/70 to-transparent rounded-full blur-sm"></div>
        </div>
      </motion.div>

      {/* Enhanced Digital Marketing icon */}
      <motion.div 
        className="absolute -left-2 sm:-left-4 -bottom-2 sm:-bottom-4 group z-20"
        initial={{ opacity: 0, scale: 0.5, rotateZ: 180 }}
        animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
        transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
        whileHover={{ scale: 1.15, rotateZ: -10 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/40 via-teal-500/50 to-cyan-500/40 rounded-full blur-xl animate-pulse"></div>
        <div className="relative bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 p-5 sm:p-6 rounded-full shadow-2xl border-2 border-emerald-300/50 animate-float">
          <div className="absolute inset-1 bg-gradient-to-br from-emerald-200/40 to-transparent rounded-full"></div>
          <Zap className="w-8 h-8 sm:w-9 sm:h-9 text-white relative z-10 drop-shadow-lg" strokeWidth={2.5} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-300 rounded-full animate-ping"></div>
          <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-teal-400 rounded-full animate-ping" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute top-1 left-1 w-5 h-5 bg-gradient-to-br from-white/70 to-transparent rounded-full blur-sm"></div>
        </div>
      </motion.div>

      {/* Enhanced Expert Web icon */}
      <motion.div 
        className="absolute right-8 sm:right-12 -bottom-6 sm:-bottom-8 group z-20"
        initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ delay: 1, duration: 0.8, type: "spring" }}
        whileHover={{ scale: 1.15, rotateY: 15 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/40 via-purple-600/50 to-indigo-600/40 rounded-full blur-xl animate-pulse"></div>
        <div className="relative bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-600 p-5 sm:p-6 rounded-full shadow-2xl border-2 border-violet-300/50 animate-float">
          <div className="absolute inset-1 bg-gradient-to-br from-violet-200/40 to-transparent rounded-full"></div>
          <Globe className="w-9 h-9 sm:w-10 sm:h-10 text-white relative z-10 drop-shadow-lg" strokeWidth={2.5} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-violet-300 rounded-full animate-ping"></div>
          <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.9s' }}></div>
          <div className="absolute top-1 left-1 w-5 h-5 bg-gradient-to-br from-white/70 to-transparent rounded-full blur-sm"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroProfile;
