import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Space particles component for footer
const SpaceBackground = () => {
  const [stars, setStars] = useState<{id: number, x: number, y: number, size: number, opacity: number}[]>([]);
  
  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 100 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.7 + 0.3
      }));
      setStars(newStars);
    };
    
    generateStars();
    
    // Regenerate some stars periodically for subtle animation
    const interval = setInterval(() => {
      setStars(prev => {
        const newStars = [...prev];
        for (let i = 0; i < 8; i++) {
          const randomIndex = Math.floor(Math.random() * newStars.length);
          newStars[randomIndex] = {
            ...newStars[randomIndex],
            opacity: Math.random() * 0.7 + 0.3
          };
        }
        return newStars;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map(star => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-blue-100"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            boxShadow: `0 0 ${star.size * 2}px rgba(147, 197, 253, ${star.opacity})`,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 1.5, star.opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
        />
      ))}
    </div>
  );
};

// Moving nebula component for footer
const NebulaBg = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-0 left-0 w-full h-full opacity-15">
        <div className="absolute top-[20%] left-[10%] w-[60%] h-[60%] rounded-full bg-indigo-500/20 blur-[100px] animate-float" style={{ animationDuration: '15s' }}></div>
        <div className="absolute top-[40%] right-[15%] w-[40%] h-[40%] rounded-full bg-purple-500/15 blur-[80px] animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-[10%] left-[30%] w-[50%] h-[40%] rounded-full bg-blue-500/15 blur-[120px] animate-float" style={{ animationDuration: '25s', animationDelay: '5s' }}></div>
      </div>
    </div>
  );
};

// Technology nodes animation for footer
const TechNodes = () => {
  // Points for the tech nodes
  const [points, setPoints] = useState<{id: number, x: number, y: number, size: number}[]>([]);
  
  // Generate random points
  useEffect(() => {
    const newPoints = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5
    }));
    setPoints(newPoints);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-20">
        {points.map((point) => (
          <motion.div 
            key={point.id}
            className="absolute w-2 h-2 bg-primary rounded-full"
            style={{ 
              left: `${point.x}%`, 
              top: `${point.y}%`, 
              width: `${point.size}px`,
              height: `${point.size}px`
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
              boxShadow: ['0 0 0px rgba(14, 165, 233, 0)', '0 0 10px rgba(14, 165, 233, 0.5)', '0 0 0px rgba(14, 165, 233, 0)'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: point.id * 0.2
            }}
          />
        ))}
        
        {/* Connect some nodes with lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {points.slice(0, 10).map((point, i) => {
            const nextPoint = points[(i + 1) % points.length];
            if (Math.abs(point.x - nextPoint.x) < 30 && Math.abs(point.y - nextPoint.y) < 30) {
              return (
                <motion.line 
                  key={`line-${i}`}
                  x1={`${point.x}%`}
                  y1={`${point.y}%`}
                  x2={`${nextPoint.x}%`}
                  y2={`${nextPoint.y}%`}
                  stroke="#0EA5E9"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.15 }}
                  transition={{ duration: 2, delay: i * 0.2 }}
                />
              );
            }
            return null;
          })}
        </svg>
      </div>
    </div>
  );
};

// Animated gradient logo component
const AnimatedGradientLogo = () => {
  return (
    <div className="flex flex-col items-center mb-4">
      <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-cyan bg-[length:200%_auto] animate-gradient-slow bg-clip-text text-transparent">
        Dominiqk Mendy
      </h3>
      <div className="h-1 w-24 bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-cyan mt-2"></div>
    </div>
  );
};

// QK Initials Logo
const QKLogo = () => {
  return (
    <div className="w-12 h-12 mr-3 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-cyan bg-[length:200%_auto] animate-gradient-slow">
      <span className="text-white font-bold text-xl">QK</span>
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background elements */}
      <SpaceBackground />
      <NebulaBg />
      <TechNodes />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section with Logo */}
          <div>
            <div className="flex items-center mb-4">
              <QKLogo />
              <AnimatedGradientLogo />
            </div>
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
              <li><Link to="/services/egouvernance" className="text-gray-300 hover:text-primary transition-colors">E-Gouvernance</Link></li>
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
                <a href="mailto:hello@dominiqkmendy.com" className="text-gray-300 hover:text-primary transition-colors">
                  hello@dominiqkmendy.com
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
              <Button className="bg-gradient-primary hover:opacity-90 w-full">
                S'abonner
                <motion.span 
                  className="ml-1"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
            </div>
          </div>
        </div>

        {/* Technology Icons */}
        <div className="mt-16 mb-8 hidden md:block">
          <div className="flex justify-center items-center space-x-8 opacity-50 hover:opacity-80 transition-opacity">
            <motion.div whileHover={{ scale: 1.2 }} className="w-8 h-8">
              <img src="/icons/react.svg" alt="React" className="h-full w-auto" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="w-8 h-8">
              <img src="/icons/vue.svg" alt="Vue.js" className="h-full w-auto" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="w-8 h-8">
              <img src="/icons/angular.svg" alt="Angular" className="h-full w-auto" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="w-8 h-8">
              <img src="/icons/nodejs.svg" alt="Node.js" className="h-full w-auto" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="w-8 h-8">
              <img src="/icons/python.svg" alt="Python" className="h-full w-auto" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="w-8 h-8">
              <img src="/icons/tensorflow.svg" alt="TensorFlow" className="h-full w-auto" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} className="w-8 h-8">
              <img src="/icons/firebase.svg" alt="Firebase" className="h-full w-auto" />
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} Dominiqk Mendy. Tous droits réservés.
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
