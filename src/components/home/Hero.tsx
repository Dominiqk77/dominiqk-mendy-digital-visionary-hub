import React, { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from 'lucide-react';
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
              "value": "#9b87f5"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              }
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
              "color": "#0EA5E9",
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
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    script.async = true;
    script.onload = initParticles;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return <div className="relative h-auto min-h-[700px] sm:min-h-[700px] flex items-center overflow-hidden bg-gradient-to-r from-portfolio-darkblue to-black pt-16 pb-8 sm:pt-8 sm:pb-0">
      <div id="particles-js" className="absolute inset-0 z-0"></div>
      
      <div className="absolute inset-0 z-0 opacity-10 portfolio-gradient"></div>
      
      <div className="container mx-auto px-4 sm:px-6 z-10 relative">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 space-y-5 text-center md:text-left animate-slide-in-left">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="block animate-gradient-slow bg-gradient-to-r from-portfolio-purple via-portfolio-blue to-portfolio-pink bg-clip-text text-transparent bg-[length:400%_400%]">Dominiqk Mendy</span>
              <span className="text-gradient">Visionnaire Digital</span>
            </h1>
            
            <p className="text-sm sm:text-lg md:text-xl text-gray-300">
              Expert en innovation numérique et leader tech Sénégalais transformant <span className="text-primary font-semibold">le paysage digital International</span> par des solutions technologiques révolutionnaires.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button size="lg" className="w-full sm:w-auto bg-gradient-primary hover:opacity-90 transition-opacity">
                <Link to="/contact" className="flex items-center justify-center">
                  Démarrer une collaboration
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="transparent" className="w-full sm:w-auto">
                <Link to="/services" className="flex items-center justify-center">
                  Explorez les services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0 animate-slide-in-right">
            {isMobile ? <div className="relative max-w-[220px]">
                <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/60 to-portfolio-purple/60 rounded-full blur-3xl opacity-40 animate-pulse-slow"></div>
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary">
                  <AspectRatio ratio={1 / 1} className="w-full h-full">
                    <img src="/lovable-uploads/c0a0e8cc-455f-443c-849f-9c1c4aa6981c.png" alt="Dominiqk Mendy" className="w-full h-full object-cover" />
                  </AspectRatio>
                </div>
                <div className="absolute -right-2 -top-2 w-16 h-16 bg-secondary rounded-full flex items-center justify-center z-20 animate-float">
                  <span className="text-white font-bold text-xs text-center p-1">Expert IA</span>
                </div>
                <div className="absolute -left-2 -bottom-2 w-20 h-20 bg-accent rounded-full flex items-center justify-center z-20 animate-float" style={{
              animationDelay: '1s'
            }}>
                  <span className="text-white font-bold text-xs text-center p-1">Digital Marketing</span>
                </div>
                <div className="absolute right-0 -bottom-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center z-20 animate-float" style={{
              animationDelay: '2s'
            }}>
                  <span className="text-white font-bold text-xs text-center p-1">Expert Web</span>
                </div>
              </div> : <div className="relative max-w-[280px] sm:max-w-[320px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/60 to-portfolio-purple/60 rounded-full blur-3xl opacity-40 animate-pulse-slow"></div>
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary">
                  <AspectRatio ratio={1 / 1} className="w-full h-full">
                    <img src="/lovable-uploads/c0a0e8cc-455f-443c-849f-9c1c4aa6981c.png" alt="Dominiqk Mendy" className="w-full h-full object-cover" />
                  </AspectRatio>
                </div>
                <div className="absolute -right-2 sm:-right-4 -top-2 sm:-top-4 w-20 h-20 sm:w-24 sm:h-24 bg-secondary rounded-full flex items-center justify-center z-20 animate-float">
                  <span className="text-white font-bold text-xs sm:text-sm text-center p-2">Expert IA</span>
                </div>
                <div className="absolute -left-2 sm:-left-4 -bottom-2 sm:-bottom-4 w-24 h-24 sm:w-28 sm:h-28 bg-accent rounded-full flex items-center justify-center z-20 animate-float" style={{
              animationDelay: '1s'
            }}>
                  <span className="text-white font-bold text-xs sm:text-sm text-center p-2">Digital Marketing</span>
                </div>
                <div className="absolute right-8 sm:right-12 -bottom-6 sm:-bottom-8 w-28 h-28 sm:w-32 sm:h-32 bg-primary rounded-full flex items-center justify-center z-20 animate-float" style={{
              animationDelay: '2s'
            }}>
                  <span className="text-white font-bold text-xs sm:text-sm text-center p-2">Expert Web</span>
                </div>
              </div>}
          </div>
        </div>
        
        <div className="flex items-center justify-center mt-8 sm:mt-12">
          <div className="flex -space-x-4">
            <Avatar className="border-2 border-white w-8 h-8">
              <AvatarImage src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=100&q=80" alt="Client professionnel 1" loading="eager" />
              <AvatarFallback>CP</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-white w-8 h-8">
              <AvatarImage src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Client professionnel 2" loading="eager" />
              <AvatarFallback>CP</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-white w-8 h-8">
              <AvatarImage src="https://images.unsplash.com/photo-1580518337843-f959e992563b?auto=format&fit=crop&w=100&q=80" alt="Client professionnel 3" loading="eager" />
              <AvatarFallback>CP</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-white w-8 h-8">
              <AvatarImage src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&q=80" alt="Client professionnel 4" loading="eager" />
              <AvatarFallback>CP</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-white w-8 h-8">
              <AvatarImage src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80" alt="Client professionnel 5" loading="eager" />
              <AvatarFallback>CP</AvatarFallback>
            </Avatar>
          </div>
          <p className="text-white text-sm ml-2"><span className="font-semibold text-primary">2k+</span> projets terminés avec succès</p>
        </div>
        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hidden md:block" onClick={scrollToAbout}>
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </div>
    </div>;
};
export default Hero;