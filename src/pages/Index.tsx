
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
import EnhancedSpaceBackground from '../components/space/EnhancedSpaceBackground';

// Add framer-motion dependency for animations
import { motion } from 'framer-motion';

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Set page title for SEO
    document.title = 'Dominiqk Mendy | Expert N°1 en Innovation Numérique & IA | Consultant Digital Sénégalais';
    
    // Set meta description for SEO with updated project timeline
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Dominiqk Mendy, premier expert Sénégalais en innovation numérique, IA, développement web et marketing digital. ' +
        'Fondateur de SenServices, projet révolutionnaire lancé en beta en février 2025 après 5 ans de développement. ' +
        'Consultant stratégique pour la transformation digitale et e-gouvernance du Sénégal.'
      );
    }
    
    // Set keywords for SEO with SenServices focus
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 
        'Dominiqk Mendy, Expert Numérique Sénégal, SenServices Sénégal, Transformation Digitale Sénégal, ' +
        'Innovation Numérique Afrique, E-Services Sénégal, Solutions IA Afrique, ' +
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

  // Replace all links to point to SenServices website
  useEffect(() => {
    // Find all buttons and links that need to be updated
    const updateLinks = () => {
      const allLinks = document.querySelectorAll('a');
      const senServicesUrl = 'https://www.senservicesenegal.com/';
      
      allLinks.forEach(link => {
        // Only update internal links that don't already point to SenServices
        if (link.getAttribute('href')?.startsWith('/') || 
            (link.getAttribute('href') && !link.getAttribute('href')?.includes('senservicesenegal.com'))) {
          link.setAttribute('href', senServicesUrl);
        }
      });
    };
    
    // Run after a short delay to ensure all components are rendered
    const timer = setTimeout(() => {
      updateLinks();
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden relative">
      {/* Replace the default background with our enhanced space background */}
      <EnhancedSpaceBackground />
      
      <Navbar />
      
      <main className="flex-grow overflow-hidden relative z-10">
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
      
      <Footer />
    </div>
  );
};

export default Index;
