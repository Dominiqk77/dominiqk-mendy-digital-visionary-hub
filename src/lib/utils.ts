
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Enhanced image preloading with intelligent caching and prioritization
export const preloadImages = async (imagePaths: string[], priority: 'high' | 'low' = 'low'): Promise<void[]> => {
  const timeout = priority === 'high' ? 2000 : 5000; // Shorter timeout for high priority
  
  const preloadPromises = imagePaths.map((path) => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      
      // Set loading attributes for better performance
      if (priority === 'high') {
        img.loading = 'eager';
        img.fetchPriority = 'high';
      }
      
      const timer = setTimeout(() => {
        console.warn(`Timeout preloading image: ${path}`);
        reject(new Error(`Timeout preloading image: ${path}`));
      }, timeout);

      img.onload = () => {
        clearTimeout(timer);
        console.info(`Image preloaded successfully: ${path}`);
        resolve();
      };

      img.onerror = () => {
        clearTimeout(timer);
        console.error(`Error preloading image: ${path}`);
        reject(new Error(`Error preloading image: ${path}`));
      };

      img.src = path;
    });
  });

  return Promise.all(preloadPromises);
};

// Preload critical tech icons for faster Hero rendering
export const preloadTechIcons = async (): Promise<void> => {
  const techIcons = [
    '/icons/react.svg',
    '/icons/nextjs.svg', 
    '/icons/nodejs.svg',
    '/icons/tailwind.svg',
    '/icons/python.svg',
    '/icons/tensorflow.svg'
  ];
  
  // Use link preload for SVG icons
  techIcons.forEach(iconPath => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.type = 'image/svg+xml';
    link.href = iconPath;
    document.head.appendChild(link);
  });
  
  // Also preload via Image objects for immediate availability
  await preloadImages(techIcons, 'high');
};

// Enhanced critical assets preloader
export const preloadCriticalAssets = async (): Promise<void> => {
  try {
    // Critical images that must load immediately
    const criticalImages = [
      '/lovable-uploads/c0a0e8cc-455f-443c-849f-9c1c4aa6981c.png'
    ];
    
    // Start both preloading operations simultaneously
    const [imagesResult] = await Promise.allSettled([
      preloadImages(criticalImages, 'high'),
      preloadTechIcons()
    ]);
    
    if (imagesResult.status === 'fulfilled') {
      console.info('Critical assets preloaded successfully');
    } else {
      console.warn('Some critical assets failed to preload:', imagesResult.reason);
    }
  } catch (error) {
    console.error('Error in critical assets preloading:', error);
  }
};

// Utility to add performance optimizations to images
export const getOptimizedImageProps = (src: string, alt: string, priority: boolean = false) => {
  return {
    src,
    alt,
    loading: priority ? 'eager' as const : 'lazy' as const,
    fetchPriority: priority ? 'high' as const : 'auto' as const,
    decoding: 'async' as const,
    style: { willChange: priority ? 'auto' : undefined }
  };
};
