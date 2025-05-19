
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Zap, Globe } from 'lucide-react';

const HeroButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2 animate-fade-in" style={{animationDelay: "0.9s"}}>
      <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-portfolio-purple to-portfolio-blue hover:opacity-90 transition-all duration-300 font-medium shadow-cosmic-lg hover:shadow-cosmic transform hover:scale-105">
        <Link to="/services" className="flex items-center justify-center">
          <Zap className="mr-2 h-4 w-4 animate-pulse" />
          Explorer mes services
        </Link>
      </Button>
      <Button size="lg" variant="outline" className="w-full sm:w-auto border-portfolio-purple text-white hover:bg-portfolio-purple/10 transition-all duration-300 transform hover:scale-105">
        <Link to="/start-project" className="flex items-center justify-center">
          <Globe className="mr-2 h-4 w-4 animate-spin-slow" />
          Démarrer un projet
        </Link>
      </Button>
    </div>
  );
};

export default HeroButtons;
