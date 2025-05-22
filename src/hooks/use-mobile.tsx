
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

// New hook for scroll management
export function useScrollToTop() {
  React.useEffect(() => {
    // Scroll to top smoothly when component mounts
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
}

// Hook to prevent horizontal overflow
export function usePreventHorizontalScroll() {
  React.useEffect(() => {
    // Add a class to the body that prevents horizontal overflow
    document.body.classList.add('overflow-x-hidden')
    
    // Clean up when component unmounts
    return () => {
      document.body.classList.remove('overflow-x-hidden')
    }
  }, [])
}

// Hook to preload images for faster display
export function usePreloadImages(imageSrcs: string[]) {
  React.useEffect(() => {
    const preloadImage = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve()
        img.onerror = () => reject()
        img.src = src
      })
    }

    // Preload all images
    Promise.all(imageSrcs.map(src => preloadImage(src)))
      .then(() => console.log('All images preloaded'))
      .catch(err => console.warn('Failed to preload some images', err))
  }, [imageSrcs])
}
