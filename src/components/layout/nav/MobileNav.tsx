
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, X } from 'lucide-react';
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { NavigationItem } from './types';

type MobileNavProps = {
  navigation: NavigationItem[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const MobileNav = ({ navigation, isOpen, setIsOpen }: MobileNavProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent className="max-h-[85vh] bg-gradient-to-b from-portfolio-cosmic/95 via-portfolio-galactic/90 to-portfolio-space/95 backdrop-blur-lg border-t border-portfolio-purple/30 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-bl from-portfolio-nebula/20 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 h-40 w-40 bg-gradient-to-tr from-portfolio-purple/20 to-transparent rounded-full blur-2xl"></div>
        
        <div className="p-4 relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <span className="text-lg font-bold bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-cyan bg-[length:200%_auto] animate-gradient-slow bg-clip-text text-transparent">Dominiqk Mendy</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-full bg-portfolio-purple/20 text-white">
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="flex flex-col space-y-1 max-h-[60vh] overflow-y-auto pr-2">
            {navigation.map(item => (
              <div key={item.name} className="w-full">
                {item.dropdown ? (
                  <>
                    <button 
                      onClick={() => toggleDropdown(item.name)} 
                      className="w-full flex justify-between items-center px-4 py-3 text-base font-medium rounded-lg bg-white/5 backdrop-blur-sm text-white border-l-2 border-portfolio-purple hover:bg-white/10 transition-all relative overflow-hidden group"
                    >
                      <span className="relative z-10 text-base font-medium">{item.name}</span>
                      <ChevronDown className={cn("h-5 w-5 transition-transform relative z-10", activeDropdown === item.name ? "rotate-180" : "")} />
                      <div className="absolute inset-0 bg-gradient-to-r from-portfolio-purple/20 via-transparent to-portfolio-cosmic/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="ml-4 space-y-1 animate-fade-in mt-1 mb-2 relative">
                        {/* Subtle gradient background for dropdown content */}
                        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-nebula/10 to-portfolio-purple/10 rounded-lg"></div>
                        
                        {item.children?.map(child => (
                          <Link 
                            key={child.name} 
                            to={child.href} 
                            className="flex items-center space-x-2 px-4 py-2.5 text-sm text-white/90 hover:text-white rounded-md hover:bg-portfolio-purple/20 transition-all group relative z-10" 
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-portfolio-nebula to-portfolio-purple"></div>
                            <span className="group-hover:translate-x-1 transition-transform">{child.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    to={item.href} 
                    className="block px-4 py-3 text-base font-medium rounded-lg bg-white/5 backdrop-blur-sm text-white border-l-2 border-transparent hover:border-portfolio-nebula hover:bg-white/10 transition-all relative overflow-hidden group" 
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-portfolio-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <Button 
              className="w-full py-5 bg-gradient-to-r from-portfolio-cosmic via-portfolio-purple to-portfolio-nebula hover:from-portfolio-nebula hover:to-portfolio-cosmic text-white border-none shadow-lg hover:shadow-cosmic transition-all" 
              asChild
            >
              <Link to="/start-project" onClick={() => setIsOpen(false)}>
                Démarrer un projet
              </Link>
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
