
import React from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

const PageContainer = ({ children, className, fullWidth = false }: PageContainerProps) => {
  return (
    <div className={cn(
      "w-full mx-auto", 
      fullWidth ? "px-4 md:px-8 lg:px-12 xl:px-16 max-w-[1920px]" : "px-4 md:px-6 max-w-[1400px]",
      className
    )}>
      {children}
    </div>
  );
};

export default PageContainer;
