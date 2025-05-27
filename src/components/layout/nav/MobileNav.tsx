import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, X } from 'lucide-react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { NavigationItem } from './types';
type MobileNavProps = {
  navigation: NavigationItem[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};
const MobileNav = ({
  navigation,
  isOpen,
  setIsOpen
}: MobileNavProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-full p-0 max-h-[90vh] rounded-none border-none sm:rounded-lg bg-gradient-to-br from-[#8B5CF6] via-[#7E69AB] to-[#6E59A5] backdrop-blur-lg border-t border-[#D6BCFA]/30 overflow-y-auto" data-mobile-menu>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-bl from-[#E5DEFF]/20 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 h-40 w-40 bg-gradient-to-tr from-[#9b87f5]/20 to-transparent rounded-full blur-2xl"></div>
        
        <div className="p-4 relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <span className="text-lg font-bold bg-gradient-to-r from-[#E5DEFF] via-white to-[#D6BCFA] bg-[length:200%_auto] animate-gradient-slow bg-clip-text text-violet-100">Dominiqk Mendy</span>
            </div>
            <button onClick={handleClose} className="p-1.5 rounded-full bg-[#9b87f5]/20 text-white">
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="flex flex-col space-y-1 max-h-[60vh] overflow-y-auto pr-2">
            {navigation.map(item => <div key={item.name} className="w-full">
                {item.dropdown ? <>
                    <button onClick={() => toggleDropdown(item.name)} className="w-full flex justify-between items-center px-4 py-3 text-base font-medium rounded-lg bg-white/5 backdrop-blur-sm text-white border-l-2 border-[#D6BCFA] hover:bg-white/10 transition-all relative overflow-hidden group">
                      <span className="relative z-10 text-base font-medium">{item.name}</span>
                      <ChevronDown className={cn("h-5 w-5 transition-transform relative z-10", activeDropdown === item.name ? "rotate-180" : "")} />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#9b87f5]/20 via-transparent to-[#8B5CF6]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </button>
                    
                    {activeDropdown === item.name && <div className="ml-4 space-y-1 animate-fade-in mt-1 mb-2 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#D6BCFA]/10 to-[#9b87f5]/10 rounded-lg"></div>
                        
                        {item.children?.map(child => <Link key={child.name} to={child.href} className="flex items-center space-x-2 px-4 py-2.5 text-sm text-white/90 hover:text-white rounded-md hover:bg-[#9b87f5]/20 transition-all group relative z-10" onClick={handleClose}>
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#D6BCFA] to-[#9b87f5]"></div>
                            <span className="group-hover:translate-x-1 transition-transform">{child.name}</span>
                          </Link>)}
                      </div>}
                  </> : <Link to={item.href} className="block px-4 py-3 text-base font-medium rounded-lg bg-white/5 backdrop-blur-sm text-white border-l-2 border-transparent hover:border-[#D6BCFA] hover:bg-white/10 transition-all relative overflow-hidden group" onClick={handleClose}>
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#9b87f5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>}
              </div>)}
          </div>
          
          <div className="mt-6">
            <Button className="w-full py-5 bg-gradient-to-r from-[#8B5CF6] via-[#9b87f5] to-[#D6BCFA] hover:from-[#7E69AB] hover:to-[#8B5CF6] text-white border-none shadow-lg hover:shadow-[0_0_20px_rgba(155,135,245,0.4)] transition-all" asChild>
              <Link to="/start-project" onClick={handleClose}>
                Démarrer un projet
              </Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>;
};
export default MobileNav;