
import { NavigationItem } from './types';

export const navigationItems: NavigationItem[] = [
  {
    name: "Accueil",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
    dropdown: true,
    children: [
      {
        name: "Solutions IA",
        href: "/services/ai-solutions"
      },
      {
        name: "Formation IA", 
        href: "/services/ai-training"
      },
      {
        name: "Analyse de Données",
        href: "/services/data-analysis"
      },
      {
        name: "Développement Web",
        href: "/services/web-development"
      },
      {
        name: "E-gouvernance",
        href: "/services/e-governance"
      },
      {
        name: "Marketing Digital",
        href: "/services/digital-marketing"
      },
      {
        name: "Conseil & Stratégie",
        href: "/services/consulting"
      }
    ]
  },
  {
    name: "E-Bibliothèque",
    href: "/library",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "À propos",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  }
];

export const mobileNavItems: NavigationItem[] = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "/services" },
  { name: "E-Bibliothèque", href: "/library" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "À propos", href: "/about" },
  { name: "Contact", href: "/contact" }
];
