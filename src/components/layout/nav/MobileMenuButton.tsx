
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
      className="p-2 rounded-lg text-foreground fixed top-3 right-4 z-[100] bg-[#8B5CF6]/70 backdrop-blur-md border border-[#D6BCFA]/30 shadow-md hover:bg-[#7E69AB]/80 transition-all"
      aria-label="Menu"
      aria-expanded={isOpen}
    >
      <Menu className="h-5 w-5 text-white" />
    </button>
  );
};

export default MobileMenuButton;
