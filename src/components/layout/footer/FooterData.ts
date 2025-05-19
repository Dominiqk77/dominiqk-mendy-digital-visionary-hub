
import { FooterNavSection } from './types';

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
    { name: "Consulting", href: "/services/consulting" },
    { name: "Formation IA", href: "/services/ai-training" },
    { name: "E-Gouvernance", href: "/services/egouvernance" }
  ]
};

export const legalSection: FooterNavSection = {
  title: "Légal",
  items: [
    { name: "Politique de Confidentialité", href: "/privacy-policy" },
    { name: "Conditions d'Utilisation", href: "/terms-of-service" },
    { name: "Mentions Légales", href: "/legal-notices" }
  ]
};
