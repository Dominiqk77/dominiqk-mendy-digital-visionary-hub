
import React, { useEffect } from 'react';

// Declare global particlesJS
declare global {
  interface Window {
    particlesJS: any;
  }
}

const HeroDynamicBackground = () => {
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
    
    // Fix: Remove invalid 'rel' and 'as' attributes from script element
    // Instead, use proper DOM methods to add as preload link
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'script';
    preloadLink.href = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    document.head.appendChild(preloadLink);
    
    script.onload = initParticles;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* AI-themed particle background with reduced opacity for better performance */}
      <div id="particles-js" className="absolute inset-0 z-0 opacity-90"></div>
      
      {/* Enhanced AI-themed background elements with better performance */}
      <div className="absolute inset-0 z-0 opacity-15 bg-grid-small-white/5"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/30 blur-[120px] rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 blur-[150px] rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-600/20 blur-[100px] rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      
      {/* Neural network pattern - optimized with reduced elements */}
      <svg className="absolute inset-0 z-0 opacity-10 w-full h-full">
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
    </>
  );
};

export default HeroDynamicBackground;
