
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
import { preloadCriticalAssets } from '../lib/utils';
import { usePreventHorizontalScroll, useIsMobile, usePerformanceOptimization } from '@/hooks/use-mobile';

// Optimized animation variants for better performance
const sectionVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const Index = () => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();
  const { isLowEnd, isScrolling } = usePerformanceOptimization();
  
  // Prevent horizontal scroll with enhanced mobile optimization
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

    // Ultra-fast preload strategy for critical assets
    const preloadAssets = async () => {
      try {
        // Preload critical assets with high priority
        await preloadCriticalAssets();
        console.log('Critical assets preloaded successfully');
        setIsLoaded(true);
      } catch (error) {
        console.warn('Some assets failed to preload:', error);
        // Still show content after short timeout
        setTimeout(() => setIsLoaded(true), 100);
      }
    };
    
    // Start preloading immediately
    preloadAssets();
    
    // Enhanced scroll optimization
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    }

    // Handle anchor link navigation with optimized scrolling
    const handleAnchorClick = () => {
      const { hash } = location;
      if (hash) {
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

    handleAnchorClick();
    
    // Enhanced viewport meta tag for better mobile performance
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewportMeta = document.createElement('meta');
      viewportMeta.name = 'viewport';
      viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover';
      document.head.appendChild(viewportMeta);
    }

    // Enhanced mobile optimizations
    if (isMobile) {
      // Optimize for mobile performance
      document.documentElement.style.cssText += `
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeSpeed;
        transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        perspective: 1000px;
      `;
      
      // Prevent mobile Safari zoom on input focus
      const inputs = document.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        input.setAttribute('autocomplete', 'off');
        input.setAttribute('autocorrect', 'off');
        input.setAttribute('autocapitalize', 'off');
      });
    }

  }, [location, isMobile]);

  // Ultra-smooth scrolling for the entire page
  useEffect(() => {
    const html = document.querySelector('html');
    if (html) {
      html.style.scrollBehavior = 'smooth';
      html.classList.add('overflow-x-hidden');
      
      // Enhanced mobile scroll properties
      if (isMobile) {
        html.style.cssText += `
          overscroll-behavior: none;
          touch-action: pan-y;
          -webkit-overflow-scrolling: touch;
          scroll-padding-top: 80px;
        `;
      }
    }
    
    // Optimize body for mobile scrolling
    document.body.style.cssText += `
      overscroll-behavior: none;
      touch-action: pan-y;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
    `;
    
    return () => {
      if (html) {
        html.style.scrollBehavior = '';
        html.classList.remove('overflow-x-hidden');
      }
    };
  }, [isMobile]);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden relative max-w-full bg-portfolio-space" style={{ transform: 'translate3d(0, 0, 0)' }}>
      {/* Ultra-optimized background for mobile performance */}
      <div className="absolute inset-0 z-0" style={{ willChange: isScrolling ? 'auto' : 'transform' }}>
        <div className="absolute inset-0 bg-grid-small-white/5 z-0"></div>
        
        {/* Reduced neural network nodes for better mobile performance */}
        {!isScrolling && Array.from({ length: isMobile ? 4 : 8 }).map((_, i) => (
          <div 
            key={`node-${i}`}
            className="absolute rounded-full bg-portfolio-purple/20 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px rgba(155, 135, 245, 0.4)',
              animation: `pulse ${Math.random() * 4 + 3}s infinite alternate ease-in-out`,
              animationDelay: `${Math.random() * 3}s`,
              transform: 'translate3d(0, 0, 0)',
              willChange: 'transform, opacity'
            }}
          />
        ))}
        
        {/* Optimized nebula effects with conditional rendering */}
        {!isScrolling && (
          <>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-portfolio-purple/15 blur-[100px] rounded-full animate-pulse-slow" style={{ transform: 'translate3d(0, 0, 0)' }}></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-portfolio-blue/15 blur-[120px] rounded-full animate-pulse-slow" style={{animationDelay: '2s', transform: 'translate3d(0, 0, 0)'}}></div>
          </>
        )}
      </div>
      
      <Navbar />
      
      {/* Main content with ultra-optimized rendering and transitions */}
      <main className={`flex-grow relative z-10 transition-opacity duration-300 overflow-x-hidden ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transform: 'translate3d(0, 0, 0)' }}>
        <Hero />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <About />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <Services />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <Skills />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <Stats />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <Experience />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <Certifications />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <Testimonials />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={sectionVariants}
        >
          <CTASection />
        </motion.div>
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
