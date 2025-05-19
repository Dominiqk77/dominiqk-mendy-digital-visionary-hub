
import { FooterNavSection, ContactInfo } from './types';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export const navigationSection: FooterNavSection = {
  title: "Navigation",
  items: [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ]
};

export const servicesSection: FooterNavSection = {
  title: "Services",
  items: [
    { name: "Développement Web", href: "/services/web-development" },
    { name: "Solutions IA", href: "/services/ai-solutions" },
    { name: "Marketing Digital", href: "/services/digital-marketing" },
    { name: "Formation IA", href: "/services/ai-training" },
    { name: "E-Gouvernance", href: "/services/egouvernance" },
    { name: "Consulting", href: "/services/consulting" }
  ]
};

export const legalSection: FooterNavSection = {
  title: "Mentions Légales",
  items: [
    { name: "Confidentialité", href: "/privacy-policy" },
    { name: "Conditions d'utilisation", href: "/terms-of-service" },
    { name: "Mentions légales", href: "/legal-notices" }
  ]
};

export const contactInfo: ContactInfo = {
  email: "contact@dominiqkmendy.com",
  location: "Londres, UK / Dakar, Sénégal"
};

export const socialLinks = [
  { name: "GitHub", href: "https://github.com/dominiqkmendy", icon: Github },
  { name: "Twitter", href: "https://twitter.com/dominiqkmendy", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/in/dominiqkmendy", icon: Linkedin },
  { name: "Instagram", href: "https://instagram.com/dominiqkmendy", icon: Instagram }
];
