
import React from 'react';

const HeroDescription = () => {
  return (
    <>
      <p className="text-lg sm:text-xl text-gray-300 max-w-xl font-poppins animate-fade-in" style={{animationDelay: "0.5s"}}>
        Consultant international spécialisé dans la <span className="text-portfolio-blue font-semibold relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-portfolio-blue after:origin-bottom-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-bottom-left">transformation numérique</span>, 
        l'<span className="text-portfolio-purple font-semibold shimmer-text">intelligence artificielle</span>, et le 
        <span className="text-portfolio-cyan font-semibold pulse-glow"> marketing digital</span> pour les entreprises innovantes à travers l'Afrique et l'Europe.
      </p>
      
      {/* Enhanced technology badges for visual appeal */}
      <div className="flex flex-wrap gap-2 mb-2 animate-fade-in" style={{animationDelay: "0.7s"}}>
        <span className="px-2.5 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full backdrop-blur-sm border border-blue-500/20 hover:bg-blue-500/30 transition-all duration-300 transform hover:scale-105">
          Intelligence Artificielle
        </span>
        <span className="px-2.5 py-1 text-xs font-medium bg-purple-500/20 text-purple-400 rounded-full backdrop-blur-sm border border-purple-500/20 hover:bg-purple-500/30 transition-all duration-300 transform hover:scale-105">
          Web Development
        </span>
        <span className="px-2.5 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded-full backdrop-blur-sm border border-green-500/20 hover:bg-green-500/30 transition-all duration-300 transform hover:scale-105">
          Marketing Digital
        </span>
        <span className="px-2.5 py-1 text-xs font-medium bg-amber-500/20 text-amber-400 rounded-full backdrop-blur-sm border border-amber-500/20 hover:bg-amber-500/30 transition-all duration-300 transform hover:scale-105">
          Consulting
        </span>
      </div>
    </>
  );
};

export default HeroDescription;
