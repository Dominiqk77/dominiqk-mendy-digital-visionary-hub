
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, CodeSquare } from 'lucide-react';

const FooterBrand = () => {
  return (
    <div className="md:col-span-1 space-y-4">
      <Link to="/" className="inline-flex items-center gap-2">
        <div className="relative w-8 h-8 bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-cyan rounded-md flex items-center justify-center overflow-hidden border border-white/20 shadow-glow">
          <CodeSquare size={18} className="text-white z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-cyan bg-[length:200%_auto] animate-gradient-slow"></div>
        </div>
        <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent shadow-glow">
          Dominiqk Mendy
        </span>
      </Link>
      <p className="text-gray-400 max-w-xs">
        Expert international en transformation digitale, développement web et solutions IA innovantes avec une présence établie à Marrakech et sur la scène internationale.
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
  );
};

export default FooterBrand;
