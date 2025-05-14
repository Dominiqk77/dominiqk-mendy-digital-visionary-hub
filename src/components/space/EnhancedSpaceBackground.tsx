
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const EnhancedSpaceBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stars, setStars] = useState<{id: number, x: number, y: number, size: number, opacity: number, speed: number}[]>([]);
  
  // Enhanced animation for starry space background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = Math.max(document.body.scrollHeight, window.innerHeight);

    // Stars/data particles properties with increased count and variety
    const particles: { 
      x: number, 
      y: number, 
      radius: number, 
      dirX: number, 
      dirY: number, 
      color: string, 
      pulsate: boolean, 
      pulsateSpeed: number,
      trail: boolean 
    }[] = [];
    
    const createParticles = () => {
      // Increase particle count for a richer background
      for (let i = 0; i < 300; i++) {
        const pulsate = Math.random() > 0.6; // 40% of stars will pulsate
        const trail = Math.random() > 0.85; // 15% will have trails
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2.5 + 0.5,
          dirX: (Math.random() - 0.5) * 0.6,
          dirY: (Math.random() - 0.5) * 0.6,
          // Expanded color palette with more futuristic blue and purple hues
          color: Math.random() > 0.4 
            ? `rgba(${155 + Math.random() * 100}, ${180 + Math.random() * 75}, 255, ${Math.random() * 0.7 + 0.3})` // Blue stars
            : Math.random() > 0.5 
              ? `rgba(255, 255, ${220 + Math.random() * 35}, ${Math.random() * 0.9 + 0.1})` // White/yellow stars
              : `rgba(${220 + Math.random() * 35}, ${150 + Math.random() * 50}, 255, ${Math.random() * 0.7 + 0.3})`, // Purple stars
          pulsate,
          pulsateSpeed: 0.02 + Math.random() * 0.06,
          trail
        });
      }
    };

    createParticles();

    // Connection line threshold - increased for more connections
    const connectionDistance = 180;

    // Track time for animations
    let time = 0;
    const trailHistory: {x: number, y: number, alpha: number, color: string}[][] = Array(particles.length).fill(null).map(() => []);

    // Animation loop with enhanced effects
    const animate = () => {
      // Deeper space blue for better contrast with stars
      ctx.fillStyle = 'rgba(5, 10, 25, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      time += 0.01;
      
      // Update and draw particles with enhanced effects
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        
        // Update position with slight wave motion
        p.x += p.dirX + Math.sin(time + i) * 0.04;
        p.y += p.dirY + Math.cos(time + i * 0.5) * 0.03;
        
        // Bounce off edges with slight randomization for more natural movement
        if (p.x < 0 || p.x > canvas.width) {
          p.dirX *= -1;
          p.dirX += (Math.random() - 0.5) * 0.03;
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.dirY *= -1;
          p.dirY += (Math.random() - 0.5) * 0.03;
        }
        
        // Calculate pulse effect for twinkling stars
        let radius = p.radius;
        if (p.pulsate) {
          radius = p.radius * (1 + 0.7 * Math.sin(time * p.pulsateSpeed * 10));
        }
        
        // Add trail effect for some particles
        if (p.trail) {
          trailHistory[i].unshift({ x: p.x, y: p.y, alpha: 0.8, color: p.color });
          if (trailHistory[i].length > 10) trailHistory[i].pop();
          
          // Draw trail
          for (let j = 0; j < trailHistory[i].length; j++) {
            const point = trailHistory[i][j];
            const alpha = point.alpha * (1 - j / trailHistory[i].length);
            ctx.beginPath();
            ctx.arc(point.x, point.y, radius * (1 - j / trailHistory[i].length * 0.5), 0, Math.PI * 2);
            ctx.fillStyle = point.color.replace(/[^,]+\)/, `${alpha})`);
            ctx.fill();
          }
        }
        
        // Draw particle (star/data point) with glow effect for larger stars
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Add glow effect to larger stars
        if (radius > 1.8) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius * 3, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(p.x, p.y, radius, p.x, p.y, radius * 4);
          gradient.addColorStop(0, p.color.replace(/[^,]+\)/, "0.4)"));
          gradient.addColorStop(1, p.color.replace(/[^,]+\)/, "0)"));
          ctx.fillStyle = gradient;
          ctx.fill();
        }
        
        // Draw connections between nearby particles with enhanced gradient effect
        for (let j = i + 1; j < particles.length; j++) {
          let p2 = particles[j];
          let distance = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2));
          
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            
            // Enhanced gradient connection with cosmic colors
            const opacity = 0.25 * (1 - distance/connectionDistance);
            const gradient = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
            gradient.addColorStop(0, `rgba(115, 155, 235, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(135, 135, 255, ${opacity * 0.8})`);
            gradient.addColorStop(1, `rgba(175, 130, 255, ${opacity})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(document.body.scrollHeight, window.innerHeight);
      particles.length = 0;
      createParticles();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Generate random stars for motion animations
  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.05 + 0.01
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#030820] via-[#0a1535] to-[#162245] z-0">
      {/* Enhanced distant nebulae and galaxies with animations */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[#4a6da7]/10 blur-[150px]"
        animate={{
          opacity: [0.15, 0.3, 0.15],
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#8caad7]/10 blur-[120px]"
        animate={{
          opacity: [0.15, 0.25, 0.15],
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/3 w-[450px] h-[450px] rounded-full bg-[#9b87f5]/15 blur-[100px]"
        animate={{
          opacity: [0.15, 0.25, 0.15],
          scale: [1, 1.15, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut",
          delay: 5
        }}
      />
      
      {/* New futuristic cosmic dust cloud */}
      <motion.div 
        className="absolute bottom-1/3 left-1/3 w-[700px] h-[400px] rounded-full bg-gradient-to-br from-[#4a6da7]/15 to-[#9b87f5]/15 blur-[150px]"
        animate={{
          opacity: [0.15, 0.3, 0.15],
          rotate: [0, 5, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Canvas for stars and data points */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.95 }}
      />
      
      {/* Enhanced overlay gradient for more depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070c20]/70 pointer-events-none"></div>
      
      {/* Motion stars with increased count and variety */}
      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size > 1.5 ? `${star.size + 1}px` : `${star.size}px`,
            height: star.size > 1.5 ? `${star.size + 1}px` : `${star.size}px`,
            opacity: star.opacity,
            boxShadow: star.size > 1.5 ? '0 0 10px 2px rgba(255,255,255,0.7)' : 'none',
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 1.8, star.opacity],
            scale: [1, star.size > 1.5 ? 1.8 : 1.3, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1 + Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Digital flow elements */}
      {Array.from({ length: 15 }).map((_, idx) => (
        <motion.div
          key={`flow-${idx}`}
          className="absolute h-px bg-blue-400/30"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: "-20px",
            width: `${Math.random() * 2 + 1}px`,
            height: `${20 + Math.random() * 50}px`,
          }}
          animate={{
            y: [0, 2000],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            delay: idx * 2,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Digital network nodes */}
      {Array.from({ length: 8 }).map((_, idx) => (
        <motion.div
          key={`node-${idx}`}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/40 to-purple-400/40"
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
            width: `${Math.random() * 40 + 20}px`,
            height: `${Math.random() * 40 + 20}px`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            delay: idx * 3,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Futuristic grid lines */}
      {Array.from({ length: 10 }).map((_, idx) => (
        <motion.div
          key={`grid-${idx}`}
          className="absolute bg-blue-500/10"
          style={{
            left: 0,
            top: `${idx * 10}%`,
            width: "100%",
            height: "1px",
          }}
          animate={{
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: idx * 0.5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default EnhancedSpaceBackground;
