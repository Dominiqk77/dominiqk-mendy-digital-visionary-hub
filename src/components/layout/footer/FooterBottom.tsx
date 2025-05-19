
import React from 'react';

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="mt-10 pt-6 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>© {currentYear} Dominiqk Mendy. Tous droits réservés.</p>
        
        <div className="mt-3 md:mt-0">
          <span>Conçu avec passion pour l'innovation africaine</span>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
