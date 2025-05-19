
import React from 'react';
import { Menu } from 'lucide-react';
import { DrawerTrigger } from "@/components/ui/drawer";

type MobileMenuButtonProps = {
  onClick: () => void;
};

const MobileMenuButton = ({ onClick }: MobileMenuButtonProps) => {
  return (
    <DrawerTrigger asChild>
      <button 
        onClick={onClick}
        className="p-2 rounded-lg text-foreground fixed top-3 right-3 z-50 bg-portfolio-darkblue/70 backdrop-blur-md border border-portfolio-purple/30 shadow-md hover:bg-portfolio-darkblue/80 transition-all"
        aria-label="Menu"
      >
        <Menu className="h-5 w-5 text-white" />
      </button>
    </DrawerTrigger>
  );
};

export default MobileMenuButton;
