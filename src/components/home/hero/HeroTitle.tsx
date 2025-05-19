
import React from 'react';

const HeroTitle = () => {
  return (
    <>
      <div className="inline-block px-4 py-1.5 bg-portfolio-purple/10 backdrop-blur-sm rounded-full text-portfolio-purple border border-portfolio-purple/20 text-sm font-medium mb-2">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-portfolio-purple animate-pulse"><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 1 7.92 12.446a1 1 0 0 1 -.813.493h-1.5a1 1 0 0 1 -1 -1v-4.5a1 1 0 0 1 1 -1h1.5a1 1 0 0 1 .83 .445a5.5 5.5 0 0 0 -7.424 -3.997a.9 .9 0 0 0 -.576 .919v3.138a1 1 0 0 1 -1.316 .948l-2.825 -1.13a1 1 0 0 1 -.66 -1a8.5 8.5 0 0 1 5.333 -7.263a8.25 8.25 0 0 1 2.138 -.299"></path><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M12 12m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0"></path></svg>
          <span className="font-poppins tracking-wide font-medium">Innovation Digitale Premium</span>
        </div>
      </div>
      
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight font-montserrat tracking-tighter">
        {/* Enhanced animated gradient for main name with improved timing */}
        <span className="block animate-gradient-slow bg-gradient-to-r from-portfolio-purple via-portfolio-blue to-portfolio-pink bg-clip-text text-transparent bg-[length:400%_400%] transition-all duration-500 hover:scale-105 hover:shadow-glow-purple">
          Dominiqk Mendy
        </span>
        
        {/* Restructured subtitle with enhanced animation and typography */}
        <div className="mt-4 flex flex-col items-center md:items-start">
          <span className="text-white text-2xl sm:text-4xl md:text-5xl font-bold tracking-wider font-space uppercase animate-fade-in relative shadow-glow">
            EXPERT EN
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-transparent animate-shimmer"></span>
          </span> 
          <div className="relative mt-2 overflow-hidden">
            <span className="text-gradient-cosmic bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-pink bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-bold font-poppins relative z-10 animate-slide-in-right" style={{animationDelay: "0.3s"}}>
              Transformation Digitale
            </span>
            {/* Animated underline effect */}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-pink animate-shimmer"></span>
          </div>
        </div>
      </h1>
    </>
  );
};

export default HeroTitle;
