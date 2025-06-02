
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile, usePerformanceOptimization } from '@/hooks/use-mobile';
import { throttle, createOptimizedRAF, PerformanceController } from '@/lib/utils';

const EnhancedHomeBackground = () => {
  const [stars, setStars] = useState<{id: number, x: number, y: number, size: number, opacity: number, speed: number}[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();
  const { isLowEnd, isScrolling } = usePerformanceOptimization();
  const performanceController = useRef<PerformanceController>();
  
  // Initialize performance controller
  React.useEffect(() => {
    performanceController.current = new PerformanceController(isMobile, isLowEnd);
  }, [isMobile, isLowEnd]);
  
  // Initialize matrix-style code rain with performance optimization
  useEffect(() => {
    // Generate optimized stars based on device capability
    const generateStars = () => {
      const starCount = isMobile ? (isLowEnd ? 30 : 50) : 100;
      const newStars = Array.from({ length: starCount }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.05 + 0.01
      }));
      setStars(newStars);
    };

    generateStars();

    // Optimized matrix code rain effect
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to cover the entire hero section with GPU acceleration
    const resizeCanvas = () => {
      if (canvas) {
        const heroSection = canvas.closest('[class*="hero"]') || canvas.parentElement;
        if (heroSection) {
          canvas.width = heroSection.scrollWidth || window.innerWidth;
          canvas.height = Math.max(heroSection.scrollHeight, window.innerHeight);
        } else {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        }
        // Enable GPU acceleration for canvas
        canvas.style.transform = 'translate3d(0, 0, 0)';
        canvas.style.willChange = 'transform';
      }
    };

    resizeCanvas();
    
    // Throttled resize handler for performance
    const throttledResize = throttle(resizeCanvas, 250);
    window.addEventListener('resize', throttledResize);

    // Optimized characters for matrix effect
    const chars = '10アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]/\\<>()=+-*&^%$#@!;:';
    const charArray = chars.split('');
    const fontSize = isMobile ? 12 : 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Reduce columns on mobile for better performance
    const maxColumns = isMobile ? Math.min(columns, isLowEnd ? 30 : 50) : columns;
    
    // Initialize drops at random positions
    const drops: number[] = [];
    for (let i = 0; i < maxColumns; i++) {
      drops[i] = Math.random() * -100;
    }

    // Optimized matrix drawing with performance controls
    const drawMatrix = () => {
      // Pause animations during scroll for better performance
      if (isScrolling && isMobile) {
        return;
      }
      
      // Semi-transparent black to create trail effect - optimized for mobile
      ctx.fillStyle = isMobile ? 'rgba(0, 0, 0, 0.08)' : 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Optimized colors array
      const colors = [
        'rgba(14, 165, 233, 0.7)', // blue
        'rgba(155, 135, 245, 0.7)', // purple
        'rgba(139, 92, 246, 0.7)', // indigo
        'rgba(8, 145, 178, 0.7)', // cyan
      ];
      
      // Reduce complexity on mobile
      const updateFrequency = isMobile ? (isLowEnd ? 3 : 2) : 1;
      
      for (let i = 0; i < drops.length; i += updateFrequency) {
        // Choose a random character
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Choose a random color from our palette
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        
        // Draw the character
        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Move the drop down
        drops[i]++;
        
        // Send the drop back to the top randomly after it's reached the bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
      }
    };
    
    // Optimized animation loop with performance controls
    let animationId: number;
    const animate = () => {
      drawMatrix();
      
      if (!isScrolling || !isMobile) {
        animationId = requestAnimationFrame(animate);
      } else {
        // Resume after scroll ends
        setTimeout(() => {
          if (!isScrolling) {
            animationId = requestAnimationFrame(animate);
          }
        }, 100);
      }
    };
    
    // Start animation with 60fps throttling
    animationId = createOptimizedRAF(animate, isMobile ? (isLowEnd ? 30 : 45) : 60);

    // Optimized resize observer
    const resizeObserver = new ResizeObserver(throttle(() => {
      resizeCanvas();
    }, 250));
    
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    return () => {
      window.removeEventListener('resize', throttledResize);
      cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      // Clean up GPU acceleration
      if (canvas) {
        canvas.style.willChange = 'auto';
        canvas.style.transform = '';
      }
    };
  }, [isMobile, isLowEnd, isScrolling]);

  return (
    <>
      {/* Matrix code rain effect - optimized for mobile performance */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-20 w-full h-full"
        style={{ 
          minHeight: '100%',
          willChange: isScrolling ? 'auto' : 'transform'
        }}
      />
      
      {/* AI-themed particle background with conditional rendering */}
      {!isScrolling && (
        <div id="particles-js" className="absolute inset-0 z-0 opacity-80"></div>
      )}
      
      {/* Enhanced AI-themed background elements with performance optimization */}
      <div className="absolute inset-0 z-0 opacity-15 bg-grid-small-white/5"></div>
      
      {/* Optimized nebula effects - reduced on mobile */}
      <motion.div 
        className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/30 blur-[120px] rounded-full"
        animate={!isScrolling ? {
          opacity: [0.3, 0.15, 0.3],
          scale: [1, 1.05, 1]
        } : {}}
        transition={{
          repeat: Infinity,
          duration: isMobile ? 15 : 10,
          ease: "easeInOut"
        }}
        style={{ willChange: isScrolling ? 'auto' : 'transform, opacity' }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 blur-[150px] rounded-full"
        animate={!isScrolling ? {
          opacity: [0.2, 0.1, 0.2],
          scale: [1, 1.08, 1]
        } : {}}
        transition={{
          repeat: Infinity,
          duration: isMobile ? 18 : 12,
          ease: "easeInOut",
          delay: 2
        }}
        style={{ willChange: isScrolling ? 'auto' : 'transform, opacity' }}
      />
      
      <motion.div 
        className="absolute top-1/4 left-1/3 w-64 h-64 bg-cyan-600/20 blur-[100px] rounded-full"
        animate={!isScrolling ? {
          opacity: [0.2, 0.1, 0.2],
          scale: [1, 1.1, 1]
        } : {}}
        transition={{
          repeat: Infinity,
          duration: isMobile ? 20 : 15,
          ease: "easeInOut",
          delay: 1
        }}
        style={{ willChange: isScrolling ? 'auto' : 'transform, opacity' }}
      />
      
      {/* Optimized stars with conditional animation */}
      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            transform: 'translate3d(0, 0, 0)', // GPU acceleration
            willChange: isScrolling ? 'auto' : 'transform, opacity'
          }}
          animate={!isScrolling ? {
            opacity: [star.opacity, star.opacity * 1.5, star.opacity],
            scale: [1, 1.2, 1],
          } : {}}
          transition={{
            repeat: Infinity,
            duration: 3 + Math.random() * 7,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Optimized web development visual elements */}
      <svg className="absolute inset-0 z-0 opacity-10 w-full h-full" style={{ willChange: 'auto' }}>
        {/* Reduced elements on mobile for performance */}
        {Array.from({ length: isMobile ? 4 : 6 }).map((_, i) => (
          <text
            key={`symbol-${i}`}
            x={`${Math.random() * 90 + 5}%`}
            y={`${Math.random() * 90 + 5}%`}
            fill={i % 2 === 0 ? "#9b87f5" : "#0EA5E9"}
            opacity="0.2"
            fontSize={Math.random() * 20 + 20}
            fontFamily="monospace"
            className={isScrolling ? "" : "animate-pulse-slow"}
            style={{animationDelay: `${i * 0.5}s`}}
          >
            {['{ }', '[ ]', '( )', '< >', '/>', '&&', '||', '==', '!=', '=>'][Math.floor(Math.random() * 10)]}
          </text>
        ))}
        
        {/* Optimized connection lines */}
        {Array.from({ length: isMobile ? 4 : 8 }).map((_, i) => (
          <line 
            key={`line-h-${i}`}
            x1="0" 
            y1={`${i * 12}%`} 
            x2="100%" 
            y2={`${i * 12}%`} 
            stroke="#9b87f5" 
            strokeWidth="0.5" 
            strokeDasharray="10,20"
            className={isScrolling ? "" : "animate-pulse-slow"}
            style={{animationDelay: `${i * 0.2}s`}}
            opacity="0.2"
          />
        ))}
        {Array.from({ length: isMobile ? 4 : 8 }).map((_, i) => (
          <line 
            key={`line-v-${i}`}
            x1={`${i * 12}%`}
            y1="0" 
            x2={`${i * 12}%`}
            y2="100%" 
            stroke="#0EA5E9" 
            strokeWidth="0.5" 
            strokeDasharray="10,20"
            className={isScrolling ? "" : "animate-pulse-slow"}
            style={{animationDelay: `${i * 0.2 + 1}s`}}
            opacity="0.2"
          />
        ))}
      </svg>
      
      {/* Optimized digital nodes with performance controls */}
      {Array.from({ length: isMobile ? 6 : 12 }).map((_, i) => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        return (
          <div 
            key={`node-${i}`}
            className="absolute rounded-full bg-gradient-to-r from-portfolio-blue to-portfolio-purple"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              opacity: 0.3,
              boxShadow: '0 0 8px rgba(99, 102, 241, 0.6)',
              transform: 'translate3d(0, 0, 0)', // GPU acceleration
              animation: isScrolling ? 'none' : `pulse ${Math.random() * 4 + 3}s infinite alternate ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
              willChange: isScrolling ? 'auto' : 'transform, opacity'
            }}
          />
        );
      })}
    </>
  );
};

export default EnhancedHomeBackground;
