
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const generateGlowEffect = (color: string = "rgba(99, 102, 241, 0.5)") => ({
  boxShadow: `0 0 20px ${color}, 0 0 40px ${color.replace("0.5", "0.3")}`
});

export const createCircularAnimation = (element: HTMLElement, duration: number = 10) => {
  let startTime = 0;
  const radius = 10;

  const animateCircle = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    
    const angle = (elapsed / 1000) * (Math.PI * 2) / duration;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    
    element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    
    requestAnimationFrame(animateCircle);
  };
  
  requestAnimationFrame(animateCircle);
};

/**
 * Optimized preload images for faster display - now with better error handling
 * @param imageSrcs Array of image sources to preload
 */
export const preloadImages = (imageSrcs: string[]): Promise<void[]> => {
  const promises = imageSrcs.map(src => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        console.log(`Image preloaded successfully: ${src}`);
        resolve();
      };
      img.onerror = () => {
        console.warn(`Failed to preload image: ${src}`);
        // Resolve instead of reject to not break the Promise.all
        resolve();
      };
      // Add timeout to prevent hanging
      setTimeout(() => {
        console.warn(`Timeout preloading image: ${src}`);
        resolve();
      }, 5000);
    });
  });
  
  return Promise.all(promises);
};

/**
 * Apply a smoothScroll effect to any element
 */
export const smoothScroll = (target: string | HTMLElement, duration: number = 500): void => {
  let targetElement: HTMLElement | null;
  
  if (typeof target === 'string') {
    targetElement = document.querySelector(target);
  } else {
    targetElement = target;
  }
  
  if (!targetElement) return;
  
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;
  
  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };
  
  // Easing function
  const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };
  
  requestAnimationFrame(animation);
};

/**
 * Detect if the device is a mobile device
 */
export const isMobileDevice = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

/**
 * Optimize performance by reducing motion for users who prefer it
 */
export const shouldReduceMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Performance optimization utilities for mobile
 */
export const isLowEndDevice = (): boolean => {
  const connection = (navigator as any).connection;
  const hardwareConcurrency = navigator.hardwareConcurrency || 4;
  
  // Detect low-end devices based on hardware and connection
  return (
    hardwareConcurrency <= 2 ||
    (connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g'))
  );
};

/**
 * Throttle function for performance optimization
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: number | undefined;
  let lastExecTime = 0;
  
  return (...args: Parameters<T>) => {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

/**
 * Request animation frame with throttling for 60fps
 */
export const createOptimizedRAF = (callback: () => void, fps: number = 60) => {
  const interval = 1000 / fps;
  let lastTime = 0;
  
  const animate = (currentTime: number) => {
    if (currentTime - lastTime >= interval) {
      callback();
      lastTime = currentTime;
    }
    requestAnimationFrame(animate);
  };
  
  return requestAnimationFrame(animate);
};

/**
 * Optimized scroll listener with passive events
 */
export const addOptimizedScrollListener = (
  callback: () => void,
  options: { passive?: boolean; throttleMs?: number } = {}
) => {
  const { passive = true, throttleMs = 16 } = options;
  const throttledCallback = throttle(callback, throttleMs);
  
  window.addEventListener('scroll', throttledCallback, { passive });
  
  return () => {
    window.removeEventListener('scroll', throttledCallback);
  };
};

/**
 * Force GPU acceleration on element
 */
export const enableGPUAcceleration = (element: HTMLElement) => {
  element.style.transform = 'translate3d(0, 0, 0)';
  element.style.willChange = 'transform';
};

/**
 * Disable GPU acceleration when not needed
 */
export const disableGPUAcceleration = (element: HTMLElement) => {
  element.style.willChange = 'auto';
};

/**
 * Preload critical assets with priority
 */
export const preloadCriticalAssets = async () => {
  const criticalImages = [
    '/lovable-uploads/c0a0e8cc-455f-443c-849f-9c1c4aa6981c.png',
    '/icons/react.svg',
    '/icons/nextjs.svg',
    '/icons/nodejs.svg',
    '/icons/tailwind.svg',
    '/icons/python.svg',
    '/icons/tensorflow.svg'
  ];
  
  // Create link elements for high-priority preloading
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.fetchPriority = 'high';
    document.head.appendChild(link);
  });
  
  // Also use Image constructor for immediate loading
  return preloadImages(criticalImages);
};

/**
 * Intelligent animation controller based on device performance
 */
export class PerformanceController {
  private isScrolling = false;
  private scrollTimeout: number | undefined;
  private animationIds: number[] = [];
  
  constructor(private isMobile: boolean, private isLowEnd: boolean) {}
  
  shouldReduceAnimations(): boolean {
    return this.isMobile && (this.isLowEnd || this.isScrolling);
  }
  
  onScrollStart() {
    this.isScrolling = true;
    clearTimeout(this.scrollTimeout);
  }
  
  onScrollEnd() {
    this.scrollTimeout = window.setTimeout(() => {
      this.isScrolling = false;
    }, 100);
  }
  
  addAnimation(id: number) {
    this.animationIds.push(id);
  }
  
  pauseAnimations() {
    this.animationIds.forEach(id => cancelAnimationFrame(id));
    this.animationIds = [];
  }
  
  resumeAnimations(callback: () => void) {
    if (!this.isScrolling) {
      callback();
    }
  }
}
