
import { NavItem, MegaMenuItem } from './types';

export const navigationItems: NavItem[] = [
  {
    title: "Accueil",
    href: "/",
  },
  {
    title: "Services",
    href: "/services",
    megaMenu: [
      {
        title: "Intelligence Artificielle",
        items: [
          {
            title: "Solutions IA",
            href: "/services/ai-solutions",
            description: "Développement de solutions IA personnalisées"
          },
          {
            title: "Formation IA",
            href: "/services/ai-training",
            description: "Formation complète en Intelligence Artificielle"
          },
          {
            title: "Analyse de Données",
            href: "/services/data-analysis",
            description: "Analyse et visualisation de données avancées"
          }
        ]
      },
      {
        title: "Développement",
        items: [
          {
            title: "Développement Web",
            href: "/services/web-development",
            description: "Applications web modernes et performantes"
          },
          {
            title: "E-gouvernance",
            href: "/services/e-governance",
            description: "Solutions numériques pour le secteur public"
          }
        ]
      },
      {
        title: "Marketing & Conseil",
        items: [
          {
            title: "Marketing Digital",
            href: "/services/digital-marketing",
            description: "Stratégies marketing digitales ROI+"
          },
          {
            title: "Conseil & Stratégie",
            href: "/services/consulting",
            description: "Conseil en transformation digitale"
          }
        ]
      }
    ]
  },
  {
    title: "E-Bibliothèque",
    href: "/library",
  },
  {
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "À propos",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  }
];

export const mobileNavItems: NavItem[] = [
  { title: "Accueil", href: "/" },
  { title: "Services", href: "/services" },
  { title: "E-Bibliothèque", href: "/library" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Blog", href: "/blog" },
  { title: "À propos", href: "/about" },
  { title: "Contact", href: "/contact" }
];
