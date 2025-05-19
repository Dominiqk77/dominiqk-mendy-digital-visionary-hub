
import React from 'react';
import { Link } from 'react-router-dom';
import { FooterNavSection, ContactInfo } from './types';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

interface FooterContactProps {
  legalSection: FooterNavSection;
  contactInfo: ContactInfo;
  className?: string;
}

const FooterContact = ({ legalSection, contactInfo, className }: FooterContactProps) => {
  return (
    <div className={className}>
      <h3 className="text-white font-semibold mb-4">Contact</h3>
      <div className="space-y-3 text-gray-400">
        {contactInfo.email && (
          <div className="flex items-start">
            <Mail className="h-5 w-5 mr-2 text-gray-500 flex-shrink-0 mt-0.5" />
            <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
              {contactInfo.email}
            </a>
          </div>
        )}
        
        {contactInfo.phone && (
          <div className="flex items-start">
            <Phone className="h-5 w-5 mr-2 text-gray-500 flex-shrink-0 mt-0.5" />
            <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
              {contactInfo.phone}
            </a>
          </div>
        )}
        
        {contactInfo.location && (
          <div className="flex items-start">
            <MapPin className="h-5 w-5 mr-2 text-gray-500 flex-shrink-0 mt-0.5" />
            <span>{contactInfo.location}</span>
          </div>
        )}
        
        {contactInfo.hours && (
          <div className="flex items-start">
            <Clock className="h-5 w-5 mr-2 text-gray-500 flex-shrink-0 mt-0.5" />
            <span>{contactInfo.hours.days}: {contactInfo.hours.time}</span>
          </div>
        )}
      </div>
      
      <div className="mt-6">
        <h3 className="text-white font-semibold mb-3">{legalSection.title}</h3>
        <ul className="space-y-2">
          {legalSection.items.map((item, index) => (
            <li key={index}>
              <Link to={item.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterContact;
