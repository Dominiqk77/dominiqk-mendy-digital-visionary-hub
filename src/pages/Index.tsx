
import React, { useEffect } from 'react';
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

// Add framer-motion dependency for animations
import { motion } from 'framer-motion';

// Background elements components
import SpaceBackground from '../components/backgrounds/SpaceBackground';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Set page title for SEO
    document.title = 'Dominiqk Mendy | Expert N°1 en Innovation Numérique & IA | Consultant Digital Sénégalais';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Dominiqk Mendy, premier expert Sénégalais en innovation numérique, IA, développement web et marketing digital. ' +
        'Consultant stratégique pour entreprises Africaines en transformation digitale et e-gouvernance.'
      );
    }
    
    // Set keywords for SEO
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 
        'Dominiqk Mendy, Expert Numérique Sénégal, IA Afrique, Transformation Digitale Sénégal, ' +
        'Innovation Numérique Afrique, Consultant Digital Dakar, Solutions IA Afrique, ' +
        'Expert Tech Sénégalais, Digital Innovation Sénégal, Premier Consultant IA Afrique'
      );
    }
    
    // Scroll to top on page load (unless there's a hash)
    if (!location.hash) {
      window.scrollTo(0, 0);
    }

    // Handle anchor link navigation
    const handleAnchorClick = () => {
      const { hash } = location;
      if (hash) {
        // Slight delay to ensure DOM is ready
        setTimeout(() => {
          const id = hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    // Execute once on initial load
    handleAnchorClick();

  }, [location]);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Global space background with stars and animated elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SpaceBackground />
      </div>
      
      <Navbar />
      
      <main className="flex-grow overflow-hidden relative z-10">
        <Hero />
        
        {/* About section with cosmic overlay */}
        <div className="relative">
          <div className="absolute inset-0 cosmic-bg-gradient opacity-70 z-0"></div>
          <About />
        </div>
        
        {/* Services section with tech grid */}
        <div className="relative">
          <div className="absolute inset-0 tech-grid z-0 opacity-20"></div>
          <Services />
        </div>
        
        {/* Skills section with space theme */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 space-bg-gradient z-0"></div>
          <div className="absolute inset-0 star-bg z-0"></div>
          <Skills />
        </div>
        
        {/* Stats with their own background */}
        <Stats />
        
        {/* Experience with data grid background */}
        <div className="relative">
          <div className="absolute inset-0 data-grid z-0"></div>
          <Experience />
        </div>
        
        {/* Certifications with subtle tech background */}
        <div className="relative">
          <div className="absolute inset-0 tech-bg-gradient z-0"></div>
          <Certifications />
        </div>
        
        {/* Testimonials with space dots */}
        <div className="relative">
          <div className="absolute inset-0 bg-gray-50/80 z-0"></div>
          <Testimonials />
        </div>
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
