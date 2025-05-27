
import { useEffect } from 'react';

export const useOptimizedScroll = () => {
  useEffect(() => {
    // Optimize scroll performance
    const optimizeScrolling = () => {
      const html = document.documentElement;
      const body = document.body;

      // Enhanced scroll behavior
      html.style.scrollBehavior = 'smooth';
      html.style.overflowX = 'hidden';
      html.style.overscrollBehavior = 'none';
      
      // Better touch performance with proper typing
      body.style.touchAction = 'pan-y';
      body.style.overflowX = 'hidden';
      body.style.overscrollBehaviorY = 'none';
      // Use type assertion for webkit-specific properties
      (body.style as any).WebkitOverflowScrolling = 'touch';

      // Prevent horizontal scroll on all containers
      const containers = document.querySelectorAll('div, section, article, main, header, footer, nav');
      containers.forEach(container => {
        const element = container as HTMLElement;
        element.style.maxWidth = '100vw';
        element.style.overflowX = 'hidden';
        element.style.boxSizing = 'border-box';
      });
    };

    // Apply optimizations
    optimizeScrolling();

    // Re-apply on window resize
    const handleResize = () => {
      requestAnimationFrame(optimizeScrolling);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
};

export const usePreventScrollConflicts = (ref: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleTouchStart = (e: TouchEvent) => {
      // Allow vertical scrolling but prevent horizontal
      if (Math.abs(e.touches[0].clientX - e.touches[0].clientY) > Math.abs(e.touches[0].clientY - e.touches[0].clientX)) {
        e.preventDefault();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // Prevent horizontal scroll from mouse wheel
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
      }
    };

    element.addEventListener('touchstart', handleTouchStart, { passive: false });
    element.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      element.removeEventListener('touchstart', handleTouchStart);
      element.removeEventListener('wheel', handleWheel);
    };
  }, [ref]);
};
