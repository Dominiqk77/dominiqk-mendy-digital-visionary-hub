
import { FooterNavSection, ContactInfo } from './types';
import { Linkedin, Twitter, Globe } from 'lucide-react';

// Navigation
export const navigationSection: FooterNavSection = {
  title: "Navigation",
  items: [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Expertise", href: "/expertise" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ]
};

// Services
export const servicesSection: FooterNavSection = {
  title: "Services",
  items: [
    { name: "Solutions IA", href: "/services/ai-solutions" },
    { name: "Développement Web", href: "/services/web-development" },
    { name: "Marketing Digital", href: "/services/digital-marketing" },
    { name: "Consulting", href: "/services/consulting" },
    { name: "Formation IA", href: "/services/ai-training" },
    { name: "E-Gouvernance", href: "/services/egouvernance" },
  ]
};

// Legal
export const legalSection: FooterNavSection = {
  title: "Mentions Légales",
  items: [
    { name: "Politique de confidentialité", href: "/privacy-policy" },
    { name: "Conditions d'utilisation", href: "/terms-of-service" },
    { name: "Mentions légales", href: "/legal-notices" },
  ]
};

// Contact Information
export const contactInfo: ContactInfo = {
  email: "contact@dominiqkmendy.com",
  phone: "+221 XX XXX XX XX",
  location: "Dakar, Sénégal",
  hours: {
    days: "Lun - Ven",
    time: "9h - 18h"
  }
};

// Social Media Links
export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: Twitter
  },
  {
    name: "Site",
    href: "#",
    icon: Globe
  }
];

export const footerBranding = {
  logoText: "Dominiqk Mendy",
  description: "Expert en IA, développement web et transformation digitale pour l'Afrique et l'international."
};
