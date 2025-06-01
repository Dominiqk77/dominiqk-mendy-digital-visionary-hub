
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
    
    element.style.transform = `translate(${x}px, ${y}px)`;
    
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
