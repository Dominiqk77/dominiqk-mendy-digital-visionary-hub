
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
