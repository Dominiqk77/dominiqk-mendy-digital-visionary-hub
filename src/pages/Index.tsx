
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Skills from '../components/home/Skills';
import Experience from '../components/home/Experience';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';
import Certifications from '../components/home/Certifications';
import { Toaster } from "@/components/ui/toaster";
import { preloadImages } from '../lib/utils';
import { usePreventHorizontalScroll } from '@/hooks/use-mobile';

// Animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Index = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Prevent horizontal scroll
  usePreventHorizontalScroll();

  useEffect(() => {
    // Set page title for SEO
    document.title = 'Dominiqk Mendy | Expert N°1 en Innovation Numérique & IA | Consultant Digital International';
    
    // Set meta description for SEO with updated project timeline
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Dominiqk Mendy, expert international en innovation numérique, IA, développement web et marketing digital. ' +
        'Consultant stratégique pour la transformation digitale avec plus de 15 ans d\'expérience entre Marrakech, Londres et l\'international.'
      );
    }
    
    // Set keywords for SEO with international focus
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 
        'Dominiqk Mendy, Expert Numérique International, Transformation Digitale, ' +
        'Innovation Numérique, Solutions IA, ' +
        'Expert Tech International, Digital Innovation, Consultant IA International'
      );
    }

    // Improved preload strategy for critical assets
    const preloadAssets = () => {
      // Critical images that should load immediately
      const criticalImages = [
        '/lovable-uploads/c0a0e8cc-455f-443c-849f-9c1c4aa6981c.png',
        '/icons/react.svg',
        '/icons/nextjs.svg',
        '/icons/nodejs.svg',
        '/icons/tailwind.svg',
        '/icons/python.svg',
        '/icons/tensorflow.svg'
      ];
      
      // Use the preloadImages utility to efficiently load images
      preloadImages(criticalImages).then(() => {
        console.log('Critical images preloaded successfully');
        // Mark as loaded once critical assets are preloaded
        setIsLoaded(true);
      }).catch(error => {
        console.error('Error preloading images:', error);
        // Even on error, we should show content after a short timeout
        setTimeout(() => setIsLoaded(true), 200);
      });
      
      // Preload important scripts including particles.js for the background
      const preloadResources = [
        { href: 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js', as: 'script' },
      ];
      
      preloadResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = resource.as;
        link.href = resource.href;
        document.head.appendChild(link);
      });
    };
    
    // Preload critical assets immediately
    preloadAssets();
    
    // Scroll to top on page load (unless there's a hash)
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: 'instant' // Use instant for initial load to prevent issues
      });
    }

    // Handle anchor link navigation with smoother scrolling
    const handleAnchorClick = () => {
      const { hash } = location;
      if (hash) {
        // Slight delay to ensure DOM is ready
        setTimeout(() => {
          const id = hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      }
    };

    // Execute once on initial load
    handleAnchorClick();
    
    // Add viewport meta tag for better mobile handling if not present
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewportMeta = document.createElement('meta');
      viewportMeta.name = 'viewport';
      viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
      document.head.appendChild(viewportMeta);
    }
    
    // Load particles.js for dynamic background
    const particlesScript = document.createElement('script');
    particlesScript.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    particlesScript.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          "particles": {
            "number": {
              "value": 50,
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
            },
            "opacity": {
              "value": 0.5,
              "random": true,
            },
            "size": {
              "value": 3,
              "random": true,
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
          },
          "retina_detect": true
        });
      }
    };
    document.body.appendChild(particlesScript);

    return () => {
      if (particlesScript.parentNode) {
        document.body.removeChild(particlesScript);
      }
    };

  }, [location]);

  // Enable smooth scrolling for the entire page
  useEffect(() => {
    const html = document.querySelector('html');
    if (html) {
      html.style.scrollBehavior = 'smooth';
      html.classList.add('overflow-x-hidden');
    }
    
    return () => {
      if (html) {
        html.style.scrollBehavior = '';
        html.classList.remove('overflow-x-hidden');
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden relative max-w-full bg-portfolio-space">
      {/* Enhanced AI-themed background styling maintained throughout the page */}
      <div className="absolute inset-0 z-0">
        {/* AI-themed grid overlay */}
        <div className="absolute inset-0 bg-grid-small-white/5 z-0"></div>
        
        {/* Neural network nodes with optimized rendering - limit number on mobile */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={`node-${i}`}
            className="absolute rounded-full bg-portfolio-purple/30 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 15px rgba(155, 135, 245, 0.5)',
              animation: `pulse ${Math.random() * 4 + 3}s infinite alternate ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
        
        {/* Enhanced nebula effects with better blur performance */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-portfolio-purple/20 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-portfolio-blue/20 blur-[150px] rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-portfolio-pink/15 blur-[100px] rounded-full animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <Navbar />
      
      {/* Main content with optimized rendering and transitions */}
      <main className={`flex-grow relative z-10 transition-opacity duration-300 overflow-x-hidden ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <About />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Services />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Skills />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Stats />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Experience />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Certifications />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Testimonials />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <CTASection />
        </motion.div>
      </main>
      
      {/* Footer with consistent styling */}
      <Footer />
      
      {/* Toast notifications */}
      <Toaster />
    </div>
  );
};

export default Index;
