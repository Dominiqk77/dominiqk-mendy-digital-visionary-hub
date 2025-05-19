
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
      "w-full px-4 md:px-6 mx-auto", 
      fullWidth ? "max-w-[1600px]" : "max-w-[1400px]",
      className
    )}>
      {children}
    </div>
  );
};

export default PageContainer;
