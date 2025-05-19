
import React from 'react';
import { Link } from 'react-router-dom';
import { FooterNavSection as FooterNavSectionType } from './types';

interface FooterContactProps {
  legalSection: FooterNavSectionType;
}

const FooterContact = ({ legalSection }: FooterContactProps) => {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">{legalSection.title}</h3>
      <ul className="space-y-3">
        {legalSection.items.map((item, index) => (
          <li key={index}>
            <Link to={item.href} className="text-gray-400 hover:text-white transition-colors">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      
      <h3 className="text-white font-semibold mt-8 mb-4">Contact</h3>
      <address className="not-italic text-gray-400">
        <p>contact@dominiqkmendy.com</p>
        <p>London, UK / Dakar, Sénégal</p>
      </address>
    </div>
  );
};

export default FooterContact;
