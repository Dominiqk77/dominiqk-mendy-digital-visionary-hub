
import React from 'react';
import { Link } from 'react-router-dom';
import { Code } from 'lucide-react';

const NavLogo = () => {
  return (
    <div className="flex-shrink-0">
      <Link to="/" className="flex items-center space-x-2">
        <Code className="h-5 w-5 bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-cyan bg-[length:200%_auto] animate-gradient-slow text-transparent fill-transparent stroke-current" />
        <span className="text-lg md:text-xl font-bold tracking-tight bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-cyan bg-[length:200%_auto] animate-gradient-slow bg-clip-text text-transparent">
          Dominiqk Mendy
        </span>
      </Link>
    </div>
  );
};

export default NavLogo;
