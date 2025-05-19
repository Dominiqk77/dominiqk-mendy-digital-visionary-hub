
import React from 'react';
import { Menu } from 'lucide-react';

type MobileMenuButtonProps = {
  onClick: () => void;
  isOpen: boolean;
};

const MobileMenuButton = ({ onClick, isOpen }: MobileMenuButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className="p-2 rounded-lg text-foreground fixed top-4 right-3 z-[100] bg-portfolio-darkblue/70 backdrop-blur-md border border-portfolio-purple/30 shadow-md hover:bg-portfolio-darkblue/80 transition-all"
      aria-label="Menu"
      aria-expanded={isOpen}
    >
      <Menu className="h-5 w-5 text-white" />
    </button>
  );
};

export default MobileMenuButton;
