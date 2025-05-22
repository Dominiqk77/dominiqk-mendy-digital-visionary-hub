import React from 'react';
import FooterBrand from './footer/FooterBrand';
import FooterNavSection from './footer/FooterNavSection';
import FooterContact from './footer/FooterContact';
import FooterBottom from './footer/FooterBottom';
import { navigationSection, servicesSection, legalSection, contactInfo } from './footer/FooterData';
const Footer = () => {
  return <footer className="relative z-10 border-t border-white/10 bg-portfolio-deepspace/90 backdrop-blur-md">
      {/* Enhanced nebula effects for consistent space theme */}
      <div className="absolute inset-0 z-0">
        <div className="nebula-glow-purple w-64 h-64 bottom-10 right-10 opacity-30"></div>
        <div className="nebula-glow-blue w-80 h-80 top-0 left-20 opacity-30"></div>
        <div className="nebula-glow-purple w-48 h-48 bottom-40 left-0 opacity-20"></div>
        {/* Neural network grid overlay */}
        <div className="absolute inset-0 bg-space-grid opacity-20 z-0"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 bg-neutral-950">
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
    </footer>;
};
export default Footer;