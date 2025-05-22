
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Zap, Globe, ArrowRight } from 'lucide-react';

const HeroButtons = () => {
  return (
    <motion.div 
      className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.5 }}
    >
      <Button 
        size="lg" 
        className="w-full sm:w-auto bg-gradient-to-r from-portfolio-purple to-portfolio-blue hover:opacity-90 transition-all duration-300 font-medium shadow-cosmic-lg hover:shadow-cosmic transform hover:scale-105 group relative overflow-hidden"
      >
        <Link to="/services" className="flex items-center justify-center">
          <span className="absolute inset-0 w-full h-full bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
          <Zap className="mr-2 h-4 w-4 animate-pulse" />
          <span className="relative z-10">Explorer mes services</span>
        </Link>
      </Button>
      
      <Button 
        size="lg" 
        variant="outline" 
        className="w-full sm:w-auto border-portfolio-purple text-white hover:bg-portfolio-purple/10 transition-all duration-300 transform hover:scale-105 group"
      >
        <Link to="/start-project" className="flex items-center justify-center">
          <Globe className="mr-2 h-4 w-4 animate-spin-slow" />
          <span>Démarrer un projet</span>
          <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
        </Link>
      </Button>
      
      {/* New animated tech highlight */}
      <motion.div 
        className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 hidden lg:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 10 }}
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-portfolio-purple/20 to-portfolio-blue/20 backdrop-blur-sm flex items-center justify-center p-1 animate-spin-slow">
          <div className="w-full h-full rounded-full border-2 border-dashed border-white/20 flex items-center justify-center">
            <div className="text-xs text-white/70 font-mono text-center leading-tight">
              Technologie<br/>Avancée
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroButtons;
