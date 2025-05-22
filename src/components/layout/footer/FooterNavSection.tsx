
import React from 'react';
import { Link } from 'react-router-dom';
import { FooterNavSection as FooterNavSectionType } from './types';

interface FooterNavSectionProps {
  section: FooterNavSectionType;
  className?: string;
}

const FooterNavSection = ({ section, className }: FooterNavSectionProps) => {
  const { title, items } = section;

  return (
    <div className={`space-y-4 ${className || ''}`}>
      <h3 className="text-white font-semibold text-lg">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index}>
            <Link to={item.href} className="text-gray-400 hover:text-white transition-colors">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNavSection;
