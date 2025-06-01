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
import { usePreventHorizontalScroll } from '@/hooks/use-mobile';

// Optimized animation variants for better performance
const sectionVariants = {
  hidden: { opacity: 0, y: 8 }, // Reduced animation distance
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3, // Faster animation
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

    // Enhanced preload strategy for faster loading
    const preloadAssets = async () => {
      try {
        // Start preloading critical assets immediately
        await preloadCriticalAssets();
        console.log('All critical assets preloaded successfully');
        setIsLoaded(true);
      } catch (error) {
        console.error('Error preloading assets:', error);
        // Show content after short timeout even on error
        setTimeout(() => setIsLoaded(true), 200);
      }
    };
    
    // Start preloading immediately for faster UX
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
      {/* Optimized background for better performance */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-small-white/5 z-0"></div>
        
        {/* Reduced neural network nodes for better performance */}
        {Array.from({ length: 6 }).map((_, i) => ( // Reduced from 8 to 6
          <div 
            key={`node-${i}`}
            className="absolute rounded-full bg-portfolio-purple/20 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 4 + 2}px`, // Smaller nodes
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 8px rgba(155, 135, 245, 0.3)', // Reduced glow
              animation: `pulse ${Math.random() * 4 + 2}s infinite alternate ease-in-out`,
              animationDelay: `${Math.random() * 2}s`,
              willChange: 'opacity, transform'
            }}
          />
        ))}
        
        {/* Optimized nebula effects */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-portfolio-purple/12 blur-[80px] rounded-full animate-pulse-slow" style={{ willChange: 'opacity, transform' }}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-portfolio-blue/12 blur-[100px] rounded-full animate-pulse-slow" style={{animationDelay: '2s', willChange: 'opacity, transform'}}></div>
      </div>
      
      <Navbar />
      
      {/* Main content with optimized rendering and faster transitions */}
      <main className={`flex-grow relative z-10 transition-opacity duration-200 overflow-x-hidden ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }} // Reduced margin for faster triggering
          variants={sectionVariants}
        >
          <About />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={sectionVariants}
        >
          <Services />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={sectionVariants}
        >
          <Skills />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={sectionVariants}
        >
          <Stats />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={sectionVariants}
        >
          <Experience />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={sectionVariants}
        >
          <Certifications />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          variants={sectionVariants}
        >
          <Testimonials />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
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
