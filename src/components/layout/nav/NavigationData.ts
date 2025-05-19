
import { NavigationItem } from './types';

export const navigationItems: NavigationItem[] = [
  {
    name: 'Accueil',
    href: '/'
  }, 
  {
    name: 'À propos',
    href: '/about'
  },
  {
    name: 'Services',
    href: '/services',
    dropdown: true,
    children: [{
      name: 'Solutions IA',
      href: '/services/ai-solutions'
    }, {
      name: 'Développement Web',
      href: '/services/web-development'
    }, {
      name: 'Marketing Digital',
      href: '/services/digital-marketing'
    }, {
      name: 'Formation IA',
      href: '/services/ai-training'
    }, {
      name: 'E-Gouvernance',
      href: '/services/egouvernance'
    }, {
      name: 'Consulting',
      href: '/services/consulting'
    }]
  }, {
    name: 'Expertise',
    href: '/expertise'
  }, {
    name: 'Portfolio',
    href: '/portfolio'
  }, {
    name: 'Blog',
    href: '/blog'
  }, {
    name: 'Contact',
    href: '/contact'
  }
];
