
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
        // Add other critical images here
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
      
      // Preload important scripts
      const preloadResources = [
        { href: 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js', as: 'script' },
        // Add fonts, CSS, or other resources here
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
    <div className="min-h-screen flex flex-col overflow-hidden relative max-w-full">
      {/* AI-themed background styling */}
      <div className="absolute inset-0 bg-portfolio-space z-0">
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
        <About />
        <Services />
        <Skills />
        <Stats />
        <Experience />
        <Certifications />
        <Testimonials />
        <CTASection />
      </main>
      
      {/* Ensure the footer is consistent across all pages */}
      <Footer />
      
      {/* Toast notifications for testimonial submission */}
      <Toaster />
    </div>
  );
};

export default Index;
