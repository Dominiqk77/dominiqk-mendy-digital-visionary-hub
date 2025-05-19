
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import NavLogo from './nav/NavLogo';
import DesktopNav from './nav/DesktopNav';
import MobileNav from './nav/MobileNav';
import MobileMenuButton from './nav/MobileMenuButton';
import { navigationItems } from './nav/NavigationData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const scrollToSection = (sectionId: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    setIsOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('[data-mobile-menu]')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={cn("fixed w-full top-0 z-50 transition-all duration-300", scrolled ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-2" : "bg-transparent py-3")}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between relative">
          <NavLogo />
          
          {!isMobile && <DesktopNav navigation={navigationItems} />}
          
          {isMobile && (
            <>
              <MobileMenuButton onClick={toggleMobileMenu} />
              <MobileNav 
                navigation={navigationItems}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
