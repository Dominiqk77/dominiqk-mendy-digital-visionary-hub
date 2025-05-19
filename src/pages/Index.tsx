
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
import PageContainer from '../components/layout/PageContainer';

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
      {/* Replace the default background with our enhanced space background */}
      <EnhancedSpaceBackground />
      
      <Navbar />
      
      <main className="flex-grow overflow-hidden relative z-10 w-full">
        <PageContainer fullWidth>
          <Hero />
          <About />
          <Services />
          <Skills />
          <Stats />
          <Experience />
          <Certifications />
          <Testimonials />
          <CTASection />
        </PageContainer>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
