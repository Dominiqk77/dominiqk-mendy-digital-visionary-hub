
import React from 'react';
import { Link } from 'react-router-dom';

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="mt-12 pt-6 border-t border-white/10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">
          &copy; {currentYear} Dominiqk Mendy. Tous droits réservés. | Marrakech · Londres · International
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
          <Link to="/legal-notices" className="hover:text-white transition-colors">
            Mentions légales
          </Link>
          <Link to="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
