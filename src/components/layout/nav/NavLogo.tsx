
import React from 'react';
import { Link } from 'react-router-dom';
import { Code } from 'lucide-react';

const NavLogo = () => {
  return (
    <div className="flex-shrink-0 py-1">
      <Link to="/" className="flex items-center gap-1.5 group">
        <div className="relative w-6 h-6 bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-cyan rounded-md flex items-center justify-center overflow-hidden border border-white/20 shadow-glow">
          <Code size={14} className="text-white z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-cyan bg-[length:200%_auto] animate-gradient-slow"></div>
        </div>
        <span className="text-lg md:text-xl font-bold tracking-tight bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-cyan bg-[length:200%_auto] animate-gradient-slow bg-clip-text text-transparent">
          Dominiqk Mendy
        </span>
      </Link>
    </div>
  );
};

export default NavLogo;
