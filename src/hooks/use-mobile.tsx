
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    // Create the media query list
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Handler function to update state based on media query changes
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Add event listener for when the media query changes
    mql.addEventListener("change", onChange)
    
    // Set initial value
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    // Clean up event listener when component unmounts
    return () => mql.removeEventListener("change", onChange)
  }, [])

  // We return a boolean (defaulting to false) rather than undefined
  return isMobile === undefined ? false : isMobile
}

// New hook for scroll management with performance optimization
export function useScrollToTop() {
  React.useEffect(() => {
    // Scroll to top smoothly when component mounts
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
}

// Enhanced hook to prevent horizontal overflow with performance optimization
export function usePreventHorizontalScroll() {
  React.useEffect(() => {
    // Add optimized scroll properties for mobile
    document.documentElement.style.cssText += `
      overscroll-behavior: none;
      touch-action: pan-y;
      -webkit-overflow-scrolling: touch;
      scroll-behavior: smooth;
    `;
    
    // Add a class to the body that prevents horizontal overflow
    document.body.classList.add('overflow-x-hidden')
    document.body.style.touchAction = 'pan-y';
    document.body.style.overscrollBehavior = 'none';
    
    // Clean up when component unmounts
    return () => {
      document.body.classList.remove('overflow-x-hidden')
      document.body.style.touchAction = '';
      document.body.style.overscrollBehavior = '';
    }
  }, [])
}

// Hook to preload images for faster display with performance optimization
export function usePreloadImages(imageSrcs: string[]) {
  React.useEffect(() => {
    const preloadImage = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve()
        img.onerror = () => reject()
        img.src = src
        // Enable high priority loading for critical images
        img.fetchPriority = 'high';
        img.decoding = 'async';
      })
    }

    // Preload all images with timeout for performance
    const timeoutPromise = new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 3000) // 3 second timeout
    });

    Promise.race([
      Promise.all(imageSrcs.map(src => preloadImage(src))),
      timeoutPromise
    ])
      .then(() => console.log('Critical images preloaded'))
      .catch(err => console.warn('Some images failed to preload', err))
  }, [imageSrcs])
}

// Performance monitoring hook
export function usePerformanceOptimization() {
  const [isLowEnd, setIsLowEnd] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  
  React.useEffect(() => {
    // Detect low-end devices
    const hardwareConcurrency = navigator.hardwareConcurrency || 4;
    const connection = (navigator as any).connection;
    
    const lowEnd = hardwareConcurrency <= 2 || 
      (connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g'));
    
    setIsLowEnd(lowEnd);
    
    // Optimized scroll detection
    let scrollTimeout: number;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => setIsScrolling(false), 100);
    };
    
    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);
  
  return { isLowEnd, isScrolling };
}

// Hook for GPU acceleration optimization
export function useGPUAcceleration(ref: React.RefObject<HTMLElement>, enabled: boolean = true) {
  React.useEffect(() => {
    if (!ref.current || !enabled) return;
    
    const element = ref.current;
    
    // Enable GPU acceleration
    element.style.transform = 'translate3d(0, 0, 0)';
    element.style.willChange = 'transform';
    element.style.backfaceVisibility = 'hidden';
    element.style.perspective = '1000px';
    
    return () => {
      // Cleanup GPU acceleration when not needed
      element.style.willChange = 'auto';
      element.style.transform = '';
      element.style.backfaceVisibility = '';
      element.style.perspective = '';
    };
  }, [ref, enabled]);
}

// Optimized intersection observer hook
export function useOptimizedIntersectionObserver(
  callback: (isIntersecting: boolean) => void,
  options: IntersectionObserverInit = {}
) {
  const elementRef = React.useRef<HTMLElement>(null);
  
  React.useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        callback(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );
    
    observer.observe(element);
    
    return () => observer.disconnect();
  }, [callback, options]);
  
  return elementRef;
}
