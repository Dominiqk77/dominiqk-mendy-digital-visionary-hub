
import React from 'react';
import { Link } from 'react-router-dom';
import { footerBranding, socialLinks } from './FooterData';
import { FooterBrandProps } from './types';

const FooterBrand = ({ logoText, description, socialLinks: propSocialLinks }: FooterBrandProps = {}) => {
  const displayLogoText = logoText || footerBranding.logoText;
  const displayDescription = description || footerBranding.description;
  const displaySocialLinks = propSocialLinks || socialLinks;

  return (
    <div>
      <Link to="/" className="inline-block">
        <h2 className="text-xl font-bold text-white">{displayLogoText}</h2>
      </Link>
      
      <p className="text-gray-400 mt-4 text-sm">{displayDescription}</p>
      
      <div className="flex space-x-3 mt-6">
        {displaySocialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <a 
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="w-9 h-9 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
            >
              <Icon className="h-5 w-5" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default FooterBrand;
