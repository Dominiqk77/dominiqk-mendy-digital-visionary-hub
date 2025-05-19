
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';

const FooterBrand = () => {
  return (
    <div className="md:col-span-1 space-y-4 relative">
      {/* Background element */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-600 rounded-full opacity-20 filter blur-[60px] z-0"></div>
      
      <Link to="/" className="inline-block relative z-10">
        <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent shadow-[0_0_15px_rgba(155,135,245,0.5)] animate-gradient-text">
          Dominiqk Mendy
        </span>
      </Link>
      <p className="text-gray-400 max-w-xs relative z-10 backdrop-blur-sm">
        Expert international en transformation digitale, développement web et solutions IA innovantes avec une présence établie à Marrakech et sur la scène internationale.
      </p>
      <div className="flex space-x-4 relative z-10">
        <a href="https://twitter.com/dominiqkmendy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-110 transform duration-300">
          <Twitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </a>
        <a href="https://github.com/dominiqkmendy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 transform duration-300">
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </a>
        <a href="https://linkedin.com/in/dominiqkmendy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors hover:scale-110 transform duration-300">
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-2 right-2 w-20 h-20 rounded-full border border-indigo-500/20 animate-spin-slow opacity-20"></div>
    </div>
  );
};

export default FooterBrand;
