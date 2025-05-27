
import React from "react";
import { cn } from "@/lib/utils";
import { usePreventHorizontalScroll, useScrollToTop } from "@/hooks/use-mobile";
import { useOptimizedScroll } from "@/hooks/use-optimized-scroll";

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
  // Use optimized scroll hooks
  usePreventHorizontalScroll();
  useOptimizedScroll();
  
  if (!noScrollReset) {
    useScrollToTop();
  }

  return (
    <div className={cn(
      "w-full px-4 md:px-6 mx-auto relative z-10 mobile-optimized prevent-scroll-conflicts no-horizontal-overflow", 
      !noMaxWidth && (fullWidth ? "max-w-[1600px]" : "max-w-[1400px]"),
      className
    )}>
      {children}
    </div>
  );
};

export default PageContainer;
