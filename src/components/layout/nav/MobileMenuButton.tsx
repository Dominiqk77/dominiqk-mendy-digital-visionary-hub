
import React from 'react';
import { Menu } from 'lucide-react';

type MobileMenuButtonProps = {
  onClick: () => void;
};

const MobileMenuButton = ({ onClick }: MobileMenuButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className="p-2 rounded-lg text-foreground absolute top-1/2 -translate-y-1/2 right-3 z-50 bg-portfolio-darkblue/70 backdrop-blur-md border border-portfolio-purple/30 shadow-md hover:bg-portfolio-darkblue/80 transition-all"
      aria-label="Menu"
    >
      <Menu className="h-5 w-5 text-white" />
    </button>
  );
};

export default MobileMenuButton;
