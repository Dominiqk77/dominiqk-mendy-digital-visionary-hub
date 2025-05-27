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
import RecentProjects from '../components/home/RecentProjects';
import { Toaster } from "@/components/ui/toaster";
import { preloadImages } from '../lib/utils';
import { usePreventHorizontalScroll } from '@/hooks/use-mobile';

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

    // Optimized preload strategy for critical assets
    const preloadAssets = () => {
      // Critical images that should load immediately
      const criticalImages = [
        '/lovable-uploads/c0a0e8cc-455f-443c-849f-9c1c4aa6981c.png'
      ];
      
      // Use the preloadImages utility to efficiently load images
      preloadImages(criticalImages).then(() => {
        console.log('Critical images preloaded successfully');
        setIsLoaded(true);
      }).catch(error => {
        console.error('Error preloading images:', error);
        // Even on error, we should show content after a short timeout
        setTimeout(() => setIsLoaded(true), 100);
      });
    };
    
    // Preload critical assets immediately
    preloadAssets();
    
    // Scroll to top on page load (unless there's a hash)
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    }

    // Handle anchor link navigation with smoother scrolling
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
    
    // Add viewport meta tag for better mobile handling if not present
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewportMeta = document.createElement('meta');
      viewportMeta.name = 'viewport';
      viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
      document.head.appendChild(viewportMeta);
    }

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
      {/* Simplified background for better performance */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-small-white/5 z-0"></div>
        
        {/* Reduced neural network nodes for better performance */}
        {Array.from({ length: 8 }).map((_, i) => (
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
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Optimized nebula effects */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-portfolio-purple/15 blur-[100px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-portfolio-blue/15 blur-[120px] rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>
      
      <Navbar />
      
      {/* Main content with optimized rendering and transitions */}
      <main className={`flex-grow relative z-10 transition-opacity duration-300 overflow-x-hidden ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
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
          <RecentProjects />
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
