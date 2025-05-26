
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const EnhancedHomeBackground = () => {
  const [stars, setStars] = useState<{id: number, x: number, y: number, size: number, opacity: number, speed: number}[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Initialize matrix-style code rain
  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars = Array.from({ length: 100 }, (_, i) => ({
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

    // Matrix code rain effect
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to cover the entire hero section
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
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Characters for the matrix effect - combining code and tech symbols
    const chars = '10アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ{}[]/\\<>()=+-*&^%$#@!;:';
    const charArray = chars.split('');
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    // Initialize drops at random positions
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const drawMatrix = () => {
      // Semi-transparent black to create trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Random character colors in blue/purple palette (your brand colors)
      const colors = [
        'rgba(14, 165, 233, 0.7)', // blue
        'rgba(155, 135, 245, 0.7)', // purple
        'rgba(139, 92, 246, 0.7)', // indigo
        'rgba(8, 145, 178, 0.7)', // cyan
      ];
      
      for (let i = 0; i < drops.length; i++) {
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
    
    // Run the animation
    const interval = setInterval(drawMatrix, 40);

    // Re-resize canvas when content changes
    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearInterval(interval);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Matrix code rain effect - now covers full hero section */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-20 w-full h-full"
        style={{ minHeight: '100%' }}
      />
      
      {/* AI-themed particle background with reduced opacity for better performance */}
      <div id="particles-js" className="absolute inset-0 z-0 opacity-80"></div>
      
      {/* Enhanced AI-themed background elements with better performance */}
      <div className="absolute inset-0 z-0 opacity-15 bg-grid-small-white/5"></div>
      
      {/* Nebula effects */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/30 blur-[120px] rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 blur-[150px] rounded-full animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-cyan-600/20 blur-[100px] rounded-full animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      
      {/* Stars */}
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
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 1.5, star.opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + Math.random() * 7,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Web development specific visual elements */}
      <svg className="absolute inset-0 z-0 opacity-10 w-full h-full">
        {/* Code brackets and tech symbols */}
        {Array.from({ length: 6 }).map((_, i) => (
          <text
            key={`symbol-${i}`}
            x={`${Math.random() * 90 + 5}%`}
            y={`${Math.random() * 90 + 5}%`}
            fill={i % 2 === 0 ? "#9b87f5" : "#0EA5E9"}
            opacity="0.2"
            fontSize={Math.random() * 20 + 20}
            fontFamily="monospace"
            className="animate-pulse-slow"
            style={{animationDelay: `${i * 0.5}s`}}
          >
            {['{ }', '[ ]', '( )', '< >', '/>', '&&', '||', '==', '!=', '=>'][Math.floor(Math.random() * 10)]}
          </text>
        ))}
        
        {/* Connection lines - technical grid */}
        {Array.from({ length: 8 }).map((_, i) => (
          <line 
            key={`line-h-${i}`}
            x1="0" 
            y1={`${i * 12}%`} 
            x2="100%" 
            y2={`${i * 12}%`} 
            stroke="#9b87f5" 
            strokeWidth="0.5" 
            strokeDasharray="10,20"
            className="animate-pulse-slow"
            style={{animationDelay: `${i * 0.2}s`}}
            opacity="0.2"
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line 
            key={`line-v-${i}`}
            x1={`${i * 12}%`}
            y1="0" 
            x2={`${i * 12}%`}
            y2="100%" 
            stroke="#0EA5E9" 
            strokeWidth="0.5" 
            strokeDasharray="10,20"
            className="animate-pulse-slow"
            style={{animationDelay: `${i * 0.2 + 1}s`}}
            opacity="0.2"
          />
        ))}
      </svg>
      
      {/* Digital nodes - representing connectivity */}
      {Array.from({ length: 12 }).map((_, i) => {
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
              animation: `pulse ${Math.random() * 4 + 3}s infinite alternate ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        );
      })}
    </>
  );
};

export default EnhancedHomeBackground;
