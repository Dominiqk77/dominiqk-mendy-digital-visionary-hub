
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo and social links */}
          <div className="md:col-span-1 space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-cyan bg-clip-text text-transparent">
                Dominiqk Mendy
              </span>
            </Link>
            <p className="text-gray-400 max-w-xs">
              Expert en transformation digitale, développement web et solutions IA innovantes pour l'Afrique et au-delà.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/dominiqkmendy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://github.com/dominiqkmendy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/dominiqkmendy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/web-development" className="text-gray-400 hover:text-white transition-colors">
                  Développement Web
                </Link>
              </li>
              <li>
                <Link to="/services/ai-solutions" className="text-gray-400 hover:text-white transition-colors">
                  Solutions IA
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="text-gray-400 hover:text-white transition-colors">
                  Marketing Digital
                </Link>
              </li>
              <li>
                <Link to="/services/consulting" className="text-gray-400 hover:text-white transition-colors">
                  Consulting
                </Link>
              </li>
              <li>
                <Link to="/services/ai-training" className="text-gray-400 hover:text-white transition-colors">
                  Formation IA
                </Link>
              </li>
              <li>
                <Link to="/services/egouvernance" className="text-gray-400 hover:text-white transition-colors">
                  E-Gouvernance
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Légal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                  Conditions d'Utilisation
                </Link>
              </li>
              <li>
                <Link to="/legal-notices" className="text-gray-400 hover:text-white transition-colors">
                  Mentions Légales
                </Link>
              </li>
            </ul>
            
            <h3 className="text-white font-semibold mt-8 mb-4">Contact</h3>
            <address className="not-italic text-gray-400">
              <p>contact@dominiqkmendy.com</p>
              <p>London, UK / Dakar, Sénégal</p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Dominiqk Mendy. Tous droits réservés.
            </p>
            <div className="mt-4 md:mt-0 flex flex-wrap gap-4 text-sm text-gray-400">
              <Link to="/about" className="hover:text-white transition-colors">
                À propos
              </Link>
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Confidentialité
              </Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">
                Conditions
              </Link>
              <Link to="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
