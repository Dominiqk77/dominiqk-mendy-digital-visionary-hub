
import React from 'react';
import { Link } from 'react-router-dom';
import { FooterNavSection as FooterNavSectionType, ContactInfo } from './types';
import { Mail, MapPin } from 'lucide-react';

interface FooterContactProps {
  legalSection: FooterNavSectionType;
  contactInfo: ContactInfo;
  className?: string;
}

const FooterContact = ({ legalSection, contactInfo, className }: FooterContactProps) => {
  return (
    <div className={`space-y-4 ${className || ''}`}>
      <h3 className="text-white font-semibold text-lg">{legalSection.title}</h3>
      <ul className="space-y-3">
        {legalSection.items.map((item, index) => (
          <li key={index}>
            <Link to={item.href} className="text-gray-400 hover:text-white transition-colors">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      
      <h3 className="text-white font-semibold text-lg mt-6">Contact</h3>
      <address className="not-italic text-gray-400 space-y-2">
        <p className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          {contactInfo.email}
        </p>
        <p className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          {contactInfo.location}
        </p>
      </address>
    </div>
  );
};

export default FooterContact;
