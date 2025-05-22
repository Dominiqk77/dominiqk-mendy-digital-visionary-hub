
import React from "react";
import { cn } from "@/lib/utils";
import { usePreventHorizontalScroll, useScrollToTop } from "@/hooks/use-mobile";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  noMaxWidth?: boolean;
  noScrollReset?: boolean;
}

const PageContainer = ({ 
  children, 
  className, 
  fullWidth = false, 
  noMaxWidth = false,
  noScrollReset = false
}: PageContainerProps) => {
  // Use hooks to manage scroll and prevent horizontal overflow
  usePreventHorizontalScroll();
  
  if (!noScrollReset) {
    useScrollToTop();
  }

  return (
    <div className={cn(
      "w-full px-4 md:px-6 mx-auto overflow-x-hidden", 
      !noMaxWidth && (fullWidth ? "max-w-[1600px]" : "max-w-[1400px]"),
      className
    )}>
      {children}
    </div>
  );
};

export default PageContainer;
