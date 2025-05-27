
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
      className="p-2 rounded-lg text-white bg-[#8B5CF6]/70 backdrop-blur-md border border-[#D6BCFA]/30 shadow-md hover:bg-[#7E69AB]/80 transition-all z-50"
      aria-label="Menu"
      aria-expanded={isOpen}
    >
      <Menu className="h-5 w-5" />
    </button>
  );
};

export default MobileMenuButton;
