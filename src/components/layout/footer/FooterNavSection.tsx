
import React from 'react';
import { Link } from 'react-router-dom';
import { FooterNavSection as FooterNavSectionType } from './types';

interface FooterNavSectionProps {
  section: FooterNavSectionType;
}

const FooterNavSection = ({ section }: FooterNavSectionProps) => {
  const { title, items } = section;

  return (
    <div>
      <h3 className="text-white font-semibold mb-4">{title}</h3>
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
