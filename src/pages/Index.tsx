
import React, { useEffect } from 'react';
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

const Index = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Dominique Mendy | Expert en Innovation Numérique & IA | Consultant Digital Sénégalais';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Dominique Mendy, expert Sénégalais en innovation numérique, IA, développement web et marketing digital. ' +
        'Consultant stratégique pour entreprises Africaines en transformation digitale et e-gouvernance.'
      );
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Handle anchor link navigation
    const handleAnchorClick = () => {
      const { hash } = window.location;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    // Execute once on initial load
    handleAnchorClick();

    // Also set up to handle anchor changes
    window.addEventListener('hashchange', handleAnchorClick);
    return () => {
      window.removeEventListener('hashchange', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      
      <main className="flex-grow overflow-hidden">
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
