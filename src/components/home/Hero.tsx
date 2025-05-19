import React, { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Zap, Brain, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";

declare global {
  interface Window {
    particlesJS: any;
  }
}

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

  // Initialize AI-themed particles
  useEffect(() => {
    const initParticles = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          "particles": {
            "number": {
              "value": 80, // Reduced number for better performance
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": ["#9b87f5", "#0EA5E9", "#ff49db"]
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              }
            },
            "opacity": {
              "value": 0.5,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 4,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#9b87f5",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 1.5,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "grab"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 140,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        });
      }
    };

    // Load particles.js asynchronously with preload
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    script.async = true;
    script.rel = 'preload';
    script.as = 'script';
    script.onload = initParticles;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative h-auto min-h-[700px] sm:min-h-[700px] flex items-center overflow-hidden bg-transparent pt-16 pb-8 sm:pt-8 sm:pb-0">
      {/* AI-themed particle background with reduced opacity for better performance */}
      <div id="particles-js" className="absolute inset-0 z-0 opacity-90"></div>
      
      {/* Enhanced AI-themed background elements with better performance */}
      <div className="absolute inset-0 z-0 opacity-15 bg-grid-small-white/5"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/30 blur-[120px] rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 blur-[150px] rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-600/20 blur-[100px] rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      
      {/* Neural network pattern - optimized with reduced elements */}
      <svg className="absolute inset-0 z-0 opacity-10 w-full h-full" width="100%" height="100%">
        {Array.from({ length: 6 }).map((_, i) => (
          <line 
            key={`line-h-${i}`}
            x1="0" 
            y1={`${i * 16}%`} 
            x2="100%" 
            y2={`${i * 16}%`} 
            stroke="#9b87f5" 
            strokeWidth="0.5" 
            strokeDasharray="10,20"
            className="animate-pulse-slow"
            style={{animationDelay: `${i * 0.2}s`}}
          />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line 
            key={`line-v-${i}`}
            x1={`${i * 16}%`}
            y1="0" 
            x2={`${i * 16}%`}
            y2="100%" 
            stroke="#0EA5E9" 
            strokeWidth="0.5" 
            strokeDasharray="10,20"
            className="animate-pulse-slow"
            style={{animationDelay: `${i * 0.2 + 1}s`}}
          />
        ))}
        {Array.from({ length: 10 }).map((_, i) => {
          const x1 = Math.random() * 100;
          const y1 = Math.random() * 100;
          const x2 = x1 + (Math.random() * 30 - 15);
          const y2 = y1 + (Math.random() * 30 - 15);
          return (
            <circle 
              key={`node-${i}`}
              cx={`${x1}%`}
              cy={`${y1}%`}
              r="2"
              fill={i % 3 === 0 ? "#9b87f5" : i % 3 === 1 ? "#0EA5E9" : "#ff49db"}
              className="animate-pulse-slow"
              style={{animationDelay: `${i * 0.3}s`}}
            />
          );
        })}
      </svg>
      
      <div className="container mx-auto px-4 sm:px-6 z-10 relative">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-5 text-center md:text-left animate-slide-in-left">
            {/* Enhanced title with better typography and emphasis */}
            <div className="inline-block px-4 py-1.5 bg-portfolio-purple/10 backdrop-blur-sm rounded-full text-portfolio-purple border border-portfolio-purple/20 text-sm font-medium mb-2">
              <div className="flex items-center gap-2">
                <Brain size={16} className="text-portfolio-purple animate-pulse" />
                <span>Innovation Digitale Premium</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
              {/* Animated gradient for main name */}
              <span className="block animate-gradient-slow bg-gradient-to-r from-portfolio-purple via-portfolio-blue to-portfolio-pink bg-clip-text text-transparent bg-[length:400%_400%]">
                Dominiqk Mendy
              </span>
              
              {/* Restructured subtitle with "EXPERT EN" followed by "Transformation Digitale" */}
              <div className="mt-4 flex flex-col items-center md:items-start">
                <span className="text-white text-2xl sm:text-4xl md:text-5xl font-bold tracking-wider">EXPERT EN</span> 
                <div className="relative mt-2">
                  <span className="text-gradient bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-pink bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-bold relative z-10">
                    Transformation Digitale
                  </span>
                  {/* Removed the underline div that was here */}
                </div>
              </div>
            </h1>
            
            {/* Improved description with more specific value proposition */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-xl">
              Consultant international spécialisé dans la <span className="text-portfolio-blue font-semibold">transformation numérique</span>, 
              l'<span className="text-portfolio-purple font-semibold">intelligence artificielle</span>, et le 
              <span className="text-portfolio-cyan font-semibold"> marketing digital</span> pour les entreprises innovantes à travers l'Afrique et l'Europe.
            </p>
            
            {/* Added technology badges for visual enhancement */}
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-2.5 py-1 text-xs font-medium bg-blue-500/20 text-blue-400 rounded-full backdrop-blur-sm border border-blue-500/20">
                Intelligence Artificielle
              </span>
              <span className="px-2.5 py-1 text-xs font-medium bg-purple-500/20 text-purple-400 rounded-full backdrop-blur-sm border border-purple-500/20">
                Web Development
              </span>
              <span className="px-2.5 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded-full backdrop-blur-sm border border-green-500/20">
                Marketing Digital
              </span>
              <span className="px-2.5 py-1 text-xs font-medium bg-amber-500/20 text-amber-400 rounded-full backdrop-blur-sm border border-amber-500/20">
                Consulting
              </span>
            </div>
            
            {/* Improved CTA buttons with better descriptions and icons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-portfolio-purple to-portfolio-blue hover:opacity-90 transition-all duration-300 font-medium">
                <Link to="/services" className="flex items-center justify-center">
                  <Zap className="mr-2 h-4 w-4" />
                  Explorer mes services
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-portfolio-purple text-white hover:bg-portfolio-purple/10 transition-all duration-300">
                <Link to="/start-project" className="flex items-center justify-center">
                  <Globe className="mr-2 h-4 w-4" />
                  Démarrer un projet
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Keep existing profile image section with better image loading */}
          <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0 animate-slide-in-right">
            {isMobile ? 
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
                      fetchpriority="high"
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
            : 
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
                      fetchpriority="high"
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
            }
          </div>
        </div>
        
        {/* Enhanced client section with better styling and loading */}
        <div className="flex items-center justify-center mt-8 sm:mt-12">
          <div className="flex -space-x-4">
            <Avatar className="border-2 border-white w-8 h-8 shadow-lg">
              <AvatarImage src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=100&q=80" alt="Client professionnel 1" loading="eager" />
              <AvatarFallback>CP</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-white w-8 h-8 shadow-lg">
              <AvatarImage src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Client professionnel 2" loading="eager" />
              <AvatarFallback>CP</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-white w-8 h-8 shadow-lg">
              <AvatarImage src="https://images.unsplash.com/photo-1580518337843-f959e992563b?auto=format&fit=crop&w=100&q=80" alt="Client professionnel 3" loading="eager" />
              <AvatarFallback>CP</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-white w-8 h-8 shadow-lg">
              <AvatarImage src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&q=80" alt="Client professionnel 4" loading="eager" />
              <AvatarFallback>CP</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-white w-8 h-8 shadow-lg">
              <AvatarImage src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80" alt="Client professionnel 5" loading="eager" />
              <AvatarFallback>CP</AvatarFallback>
            </Avatar>
          </div>
          <p className="text-white text-sm ml-2">
            <span className="font-semibold text-portfolio-purple">Solutions Digitales Pro</span> disponibles dès maintenant
          </p>
        </div>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hidden md:block" onClick={scrollToAbout}>
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
