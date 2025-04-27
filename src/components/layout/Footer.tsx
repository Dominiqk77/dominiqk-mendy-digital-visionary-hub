
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section with Logo */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/00f229a9-af1c-47e4-a805-4e3b081a0bb4.png" 
                alt="DQ Logo" 
                className="h-12 w-auto mr-3"
              />
              <h3 className="text-xl font-bold animate-gradient-slow">Dominique Mendy</h3>
            </div>
            <div className="h-1 w-16 bg-gradient-primary mb-6"></div>
            <p className="mb-6 text-gray-300">
              Expert en innovation numérique et marketing digital, transformant les visions en réalité numérique pour propulser votre entreprise vers une croissance sans précédent.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <div className="h-1 w-16 bg-gradient-primary mb-6"></div>
            <ul className="space-y-3">
              <li><Link to="/services/web-development" className="text-gray-300 hover:text-primary transition-colors">Développement Web & Mobile</Link></li>
              <li><Link to="/services/digital-marketing" className="text-gray-300 hover:text-primary transition-colors">Marketing Digital</Link></li>
              <li><Link to="/services/ai-solutions" className="text-gray-300 hover:text-primary transition-colors">Solutions IA</Link></li>
              <li><Link to="/services/e-governance" className="text-gray-300 hover:text-primary transition-colors">E-Gouvernance</Link></li>
              <li><Link to="/services/consulting" className="text-gray-300 hover:text-primary transition-colors">Consultation Stratégique</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="h-1 w-16 bg-gradient-primary mb-6"></div>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">Covent Garden, London, UK</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">Guéliz, Marrakech, Maroc</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-primary mt-1 flex-shrink-0" />
                <a href="mailto:mendydominiqk@gmail.com" className="text-gray-300 hover:text-primary transition-colors">
                  mendydominiqk@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-primary mt-1 flex-shrink-0" />
                <a href="tel:+212607798670" className="text-gray-300 hover:text-primary transition-colors">
                  +212 607 79 86 70
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <div className="h-1 w-16 bg-gradient-primary mb-6"></div>
            <p className="mb-4 text-gray-300">
              Restez informé des dernières tendances en innovation numérique et stratégies digital.
            </p>
            <div className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Votre email"
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button className="bg-gradient-primary hover:opacity-90 w-full">S'abonner</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Dominique Mendy. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-primary transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-primary transition-colors">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
