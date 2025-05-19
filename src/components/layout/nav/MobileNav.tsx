
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, X } from 'lucide-react';
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
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
      <DrawerContent className="max-h-[85vh] bg-gradient-to-b from-portfolio-cosmic/95 to-portfolio-galactic/90 backdrop-blur-lg border-t border-portfolio-purple/30">
        <div className="p-4">
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
                      className="w-full flex justify-between items-center px-4 py-3 text-base font-medium rounded-lg bg-white/5 backdrop-blur-sm text-white border-l-2 border-portfolio-purple hover:bg-white/10 transition-all"
                    >
                      <span className="text-base font-medium">{item.name}</span>
                      <ChevronDown className={cn("h-5 w-5 transition-transform", activeDropdown === item.name ? "rotate-180" : "")} />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="ml-4 space-y-1 animate-fade-in mt-1 mb-2">
                        {item.children?.map(child => (
                          <Link 
                            key={child.name} 
                            to={child.href} 
                            className="flex items-center space-x-2 px-4 py-2.5 text-sm text-white/90 hover:text-white rounded-md hover:bg-portfolio-purple/20 transition-all group" 
                            onClick={() => setIsOpen(false)}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-portfolio-nebula"></div>
                            <span className="group-hover:translate-x-1 transition-transform">{child.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link 
                    to={item.href} 
                    className="block px-4 py-3 text-base font-medium rounded-lg bg-white/5 backdrop-blur-sm text-white border-l-2 border-transparent hover:border-portfolio-nebula hover:bg-white/10 transition-all" 
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <Button 
              className="w-full py-5 bg-gradient-to-r from-portfolio-cosmic to-portfolio-purple text-white border-none shadow-lg hover:shadow-xl transition-all" 
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
