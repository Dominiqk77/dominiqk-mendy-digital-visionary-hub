
import React from 'react';
import FooterBrand from './footer/FooterBrand';
import FooterNavSection from './footer/FooterNavSection';
import FooterContact from './footer/FooterContact';
import FooterBottom from './footer/FooterBottom';
import { navigationSection, servicesSection, legalSection, contactInfo } from './footer/FooterData';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-portfolio-deepspace/90 backdrop-blur-md">
      {/* Enhanced space background with nebula effects */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute top-40 right-40 w-48 h-48 rounded-full bg-blue-500/10 blur-3xl"></div>
        
        {/* Neural network grid overlay */}
        <div className="absolute inset-0 bg-space-grid opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and social links */}
          <FooterBrand />

          {/* Navigation links */}
          <FooterNavSection section={navigationSection} />

          {/* Services */}
          <FooterNavSection section={servicesSection} />

          {/* Legal and Contact */}
          <FooterContact legalSection={legalSection} contactInfo={contactInfo} />
        </div>

        {/* Copyright and bottom links */}
        <FooterBottom />
      </div>
      
      {/* Decorative bottom elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/30 to-transparent z-1"></div>
    </footer>
  );
};

export default Footer;
