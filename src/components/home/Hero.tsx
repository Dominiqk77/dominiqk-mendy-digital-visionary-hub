
import React, { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

// Add type definition for particlesJS
declare global {
  interface Window {
    particlesJS: any;
  }
}

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const initParticles = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          "particles": {
            "number": {
              "value": 80,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 3,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 2,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
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

    // Add script element for particles.js
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    script.async = true;
    script.onload = initParticles;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative h-[42vh] min-h-[420px] flex items-center overflow-hidden bg-gradient-to-r from-gray-900 to-black">
      {/* Particles background */}
      <div id="particles-js" className="absolute inset-0 z-0"></div>
      
      {/* Senegal flag stripe overlay with low opacity */}
      <div className="absolute inset-0 z-0 opacity-10 senegal-flag-gradient"></div>
      
      <div className="container mx-auto px-4 sm:px-6 py-8 z-10 relative">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left animate-slide-in-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="block text-white mb-2">Dominique Mendy</span>
              <span className="text-gradient">Visionnaire Digital</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              Expert en innovation numérique et leader tech sénégalais transformant <span className="text-primary font-semibold">le paysage digital africain</span> par des solutions technologiques révolutionnaires.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-primary hover:opacity-90 transition-opacity">
                <Link to="/contact" className="flex items-center justify-center">
                  Démarrer une collaboration
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary text-white hover:bg-primary/10">
                <Link to="/services">Découvrir mes services</Link>
              </Button>
            </div>
            
            <div className="flex items-center justify-center md:justify-start mt-6 space-x-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold border-2 border-white text-sm sm:text-base">D</div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold border-2 border-white text-sm sm:text-base">M</div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-500 flex items-center justify-center text-white font-bold border-2 border-white text-sm sm:text-base">S</div>
              </div>
              <p className="text-white text-sm sm:text-base"><span className="font-semibold text-primary">100+</span> projets terminés avec succès</p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center animate-slide-in-right">
            <div className="relative max-w-[280px] sm:max-w-[320px] mx-auto">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
              <img 
                src="/lovable-uploads/c0a0e8cc-455f-443c-849f-9c1c4aa6981c.png" 
                alt="Dominique Mendy" 
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover rounded-full border-4 border-primary relative z-10"
              />
              <div className="absolute -right-2 sm:-right-4 -top-2 sm:-top-4 w-20 h-20 sm:w-24 sm:h-24 bg-secondary rounded-full flex items-center justify-center z-20 animate-float">
                <span className="text-black font-bold text-xs sm:text-sm text-center p-2">Expert IA</span>
              </div>
              <div className="absolute -left-2 sm:-left-4 -bottom-2 sm:-bottom-4 w-24 h-24 sm:w-28 sm:h-28 bg-accent rounded-full flex items-center justify-center z-20 animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-white font-bold text-xs sm:text-sm text-center p-2">Digital Marketing</span>
              </div>
              <div className="absolute right-8 sm:right-12 -bottom-6 sm:-bottom-8 w-28 h-28 sm:w-32 sm:h-32 bg-primary rounded-full flex items-center justify-center z-20 animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-white font-bold text-xs sm:text-sm text-center p-2">Développeur Web</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hidden md:block" onClick={scrollToAbout}>
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
