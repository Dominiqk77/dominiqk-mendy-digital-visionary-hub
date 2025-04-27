import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const navigation = [
    { name: 'Accueil', href: '/' },
    {
      name: 'Services',
      href: '/services',
      dropdown: true,
      children: [
        { name: 'Développement Web', href: '/services/web-development' },
        { name: 'Marketing Digital', href: '/services/digital-marketing' },
        { name: 'Formation IA', href: '/services/ai-training' },
        { name: 'E-Gouvernance', href: '/services/e-governance' },
        { name: 'Consulting', href: '/services/consulting' },
      ]
    },
    { name: 'Expertise', href: '/expertise' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={cn(
      "fixed w-full top-0 z-50 transition-all duration-300",
      scrolled
        ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-2"
        : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/00f229a9-af1c-47e4-a805-4e3b081a0bb4.png"
                alt="DQ Logo"
                className="h-16 w-auto sm:h-20 md:h-24 transition-all duration-300"
              />
              <span className="hidden md:block text-xl font-semibold">Dominique Mendy</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <button 
                      onClick={() => toggleDropdown(item.name)}
                      className="text-foreground/90 hover:text-primary flex items-center space-x-1 px-2 py-1 rounded-md font-medium"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  ) : (
                    <Link 
                      to={item.href} 
                      className="text-foreground/90 hover:text-primary px-2 py-1 rounded-md font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                  
                  {item.dropdown && (
                    <div 
                      className={cn(
                        "absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-200",
                        activeDropdown === item.name ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                      )}
                    >
                      <div className="py-2">
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                Démarrer un projet
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground hover:bg-gray-100"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden mt-4 animate-fade-in">
            <div className="flex flex-col space-y-2 pt-2 pb-4">
              {navigation.map((item) => (
                <div key={item.name} className="w-full">
                  {item.dropdown ? (
                    <>
                      <button 
                        onClick={() => toggleDropdown(item.name)}
                        className="w-full flex justify-between items-center px-3 py-2 text-base font-medium rounded-md hover:bg-gray-100"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      
                      {activeDropdown === item.name && (
                        <div className="pl-4 space-y-1 animate-fade-in">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="block px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-md"
                              onClick={() => setIsOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-3 py-2 text-base font-medium rounded-md hover:bg-gray-100"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2">
                <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                  Démarrer un projet
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
