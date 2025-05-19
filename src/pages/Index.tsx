
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

const Index = () => {
  const location = useLocation();

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
    <div className="min-h-screen flex flex-col overflow-hidden relative">
      {/* AI-themed background styling */}
      <div className="absolute inset-0 bg-portfolio-space z-0">
        {/* AI-themed grid overlay */}
        <div className="absolute inset-0 bg-grid-small-white/5 z-0"></div>
        
        {/* Neural network nodes */}
        {Array.from({ length: 20 }).map((_, i) => (
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
        
        {/* Nebula effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-portfolio-purple/20 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-portfolio-blue/20 blur-[150px] rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-portfolio-pink/15 blur-[100px] rounded-full animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
      </div>
      
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
      
      {/* Ensure the footer is consistent across all pages */}
      <Footer />
    </div>
  );
};

export default Index;
