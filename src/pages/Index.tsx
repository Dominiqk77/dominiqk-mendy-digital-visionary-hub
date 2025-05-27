
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

// Optimized animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
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
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Dominiqk Mendy, expert international en innovation numérique, IA, développement web et marketing digital. ' +
        'Consultant stratégique pour la transformation digitale avec plus de 15 ans d\'expérience entre Marrakech, Londres et l\'international.'
      );
    }
    
    // Set keywords for SEO
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 
        'Dominiqk Mendy, Expert Numérique International, Transformation Digitale, ' +
        'Innovation Numérique, Solutions IA, ' +
        'Expert Tech International, Digital Innovation, Consultant IA International'
      );
    }

    // Optimized preload strategy
    const preloadAssets = () => {
      const criticalImages = [
        '/lovable-uploads/c0a0e8cc-455f-443c-849f-9c1c4aa6981c.png'
      ];
      
      preloadImages(criticalImages).then(() => {
        console.log('Critical images preloaded successfully');
        setIsLoaded(true);
      }).catch(error => {
        console.error('Error preloading images:', error);
        setTimeout(() => setIsLoaded(true), 100);
      });
    };
    
    preloadAssets();
    
    // Scroll to top on page load
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    }

    // Handle anchor navigation
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
    
    // Optimize viewport for mobile
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewportMeta = document.createElement('meta');
      viewportMeta.name = 'viewport';
      viewportMeta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
      document.head.appendChild(viewportMeta);
    }

  }, [location]);

  // Enhanced scroll behavior
  useEffect(() => {
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    
    if (html) {
      html.style.scrollBehavior = 'smooth';
      html.classList.add('overflow-x-hidden');
      // Prevent overscroll bounce
      html.style.overscrollBehavior = 'none';
    }
    
    if (body) {
      body.classList.add('overflow-x-hidden', 'mobile-optimized');
      // Better touch performance
      body.style.touchAction = 'pan-y';
      body.style.overscrollBehaviorY = 'none';
    }
    
    return () => {
      if (html) {
        html.style.scrollBehavior = '';
        html.classList.remove('overflow-x-hidden');
        html.style.overscrollBehavior = '';
      }
      if (body) {
        body.classList.remove('overflow-x-hidden', 'mobile-optimized');
        body.style.touchAction = '';
        body.style.overscrollBehaviorY = '';
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative max-w-full bg-portfolio-space no-horizontal-overflow smooth-scroll-container mobile-optimized">
      {/* Optimized background for better performance */}
      <div className="absolute inset-0 z-0 gpu-accelerated">
        <div className="absolute inset-0 bg-grid-small-white/5 z-0"></div>
        
        {/* Reduced neural network nodes */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div 
            key={`node-${i}`}
            className="absolute rounded-full bg-portfolio-purple/20 reduce-blur-mobile backdrop-blur-sm gpu-accelerated"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 8px rgba(155, 135, 245, 0.4)',
              animation: `pulse ${Math.random() * 3 + 2}s infinite alternate ease-in-out`,
              animationDelay: `${Math.random() * 2}s`,
              willChange: 'opacity, transform'
            }}
          />
        ))}
        
        {/* Optimized nebula effects */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-portfolio-purple/10 blur-[80px] rounded-full animate-pulse-slow gpu-accelerated"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-portfolio-blue/10 blur-[100px] rounded-full animate-pulse-slow gpu-accelerated" style={{animationDelay: '2s'}}></div>
      </div>
      
      <Navbar />
      
      {/* Main content with optimized transitions */}
      <main className={`flex-grow relative z-10 transition-opacity duration-300 no-horizontal-overflow ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
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
