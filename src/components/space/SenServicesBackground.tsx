
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SenServicesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Enhanced animation for starry night background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = Math.max(document.body.scrollHeight, window.innerHeight);

    // Stars/data particles properties with increased count and variety
    const particles: { x: number, y: number, radius: number, dirX: number, dirY: number, color: string, pulsate: boolean, pulsateSpeed: number }[] = [];
    
    const createParticles = () => {
      // Increase particle count for a richer background
      for (let i = 0; i < 200; i++) {
        const pulsate = Math.random() > 0.7; // 30% of stars will pulsate
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          dirX: (Math.random() - 0.5) * 0.5,
          dirY: (Math.random() - 0.5) * 0.5,
          // Expanded color palette with more blue and purple hues
          color: Math.random() > 0.3 
            ? `rgba(${155 + Math.random() * 100}, ${180 + Math.random() * 75}, 255, ${Math.random() * 0.7 + 0.3})` // Blue stars
            : Math.random() > 0.5 
              ? `rgba(255, 255, ${220 + Math.random() * 35}, ${Math.random() * 0.9 + 0.1})` // White/yellow stars
              : `rgba(${220 + Math.random() * 35}, ${150 + Math.random() * 50}, 255, ${Math.random() * 0.7 + 0.3})`, // Purple stars
          pulsate,
          pulsateSpeed: 0.02 + Math.random() * 0.04
        });
      }
    };

    createParticles();

    // Connection line threshold - increased for more connections
    const connectionDistance = 150;

    // Track time for animations
    let time = 0;

    // Animation loop with enhanced effects
    const animate = () => {
      // Deeper space blue for better contrast with stars
      ctx.fillStyle = 'rgba(8, 12, 30, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      time += 0.01;
      
      // Update and draw particles with enhanced effects
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        
        // Update position with slight wave motion
        p.x += p.dirX + Math.sin(time + i) * 0.03;
        p.y += p.dirY + Math.cos(time + i * 0.5) * 0.02;
        
        // Bounce off edges with slight randomization for more natural movement
        if (p.x < 0 || p.x > canvas.width) {
          p.dirX *= -1;
          p.dirX += (Math.random() - 0.5) * 0.02;
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.dirY *= -1;
          p.dirY += (Math.random() - 0.5) * 0.02;
        }
        
        // Calculate pulse effect for twinkling stars
        let radius = p.radius;
        if (p.pulsate) {
          radius = p.radius * (1 + 0.5 * Math.sin(time * p.pulsateSpeed * 10));
        }
        
        // Draw particle (star/data point) with glow effect for larger stars
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Add glow effect to larger stars
        if (radius > 1.8) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius * 2, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(p.x, p.y, radius, p.x, p.y, radius * 3);
          gradient.addColorStop(0, p.color.replace(/[^,]+\)/, "0.3)"));
          gradient.addColorStop(1, p.color.replace(/[^,]+\)/, "0)"));
          ctx.fillStyle = gradient;
          ctx.fill();
        }
        
        // Draw connections between nearby particles with gradient effect
        for (let j = i + 1; j < particles.length; j++) {
          let p2 = particles[j];
          let distance = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2));
          
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            
            // Enhanced gradient connection with cosmic colors
            const opacity = 0.2 * (1 - distance/connectionDistance);
            const gradient = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
            gradient.addColorStop(0, `rgba(115, 155, 215, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(135, 135, 235, ${opacity * 0.8})`);
            gradient.addColorStop(1, `rgba(155, 115, 215, ${opacity})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    // Enhanced shooting stars
    const createShootingStar = () => {
      const x = Math.random() * canvas.width;
      const y = 0;
      const length = Math.random() * 150 + 100; // Longer shooting stars
      const angle = Math.PI / 4 + Math.random() * Math.PI / 4;
      const speed = Math.random() * 20 + 10; // Faster shooting stars
      
      const draw = () => {
        ctx.beginPath();
        ctx.moveTo(x, y);
        const tailX = x + Math.cos(angle) * length;
        const tailY = y + Math.sin(angle) * length;
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Enhanced glow effect with gradient
        const gradient = ctx.createLinearGradient(x, y, tailX, tailY);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(0.3, 'rgba(200, 220, 255, 0.6)');
        gradient.addColorStop(1, 'rgba(180, 210, 255, 0)');
        
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 5;
        ctx.stroke();
      };
      
      let currentX = x;
      let currentY = y;
      
      const animate = () => {
        currentX += Math.cos(angle) * speed;
        currentY += Math.sin(angle) * speed;
        
        if (currentX < canvas.width && currentY < canvas.height) {
          draw();
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    };
    
    // Create shooting stars more frequently
    const shootingStarInterval = setInterval(() => {
      if (Math.random() > 0.6) { // Increased frequency (40% chance)
        createShootingStar();
      }
    }, 1500);

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
      clearInterval(shootingStarInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-[#050a20] via-[#0c1a38] to-[#162245] z-0">
      {/* Enhanced distant nebulae and galaxies with animations */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#4a6da7]/15 blur-3xl"
        animate={{
          opacity: [0.15, 0.25, 0.15],
          scale: [1, 1.05, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#8caad7]/15 blur-3xl"
        animate={{
          opacity: [0.15, 0.2, 0.15],
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-[#9b87f5]/15 blur-3xl"
        animate={{
          opacity: [0.15, 0.22, 0.15],
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 15,
          ease: "easeInOut",
          delay: 5
        }}
      />
      
      {/* New cosmic dust cloud */}
      <motion.div 
        className="absolute bottom-1/3 left-1/3 w-[500px] h-[300px] rounded-full bg-gradient-to-br from-[#4a6da7]/10 to-[#9b87f5]/10 blur-3xl"
        animate={{
          opacity: [0.15, 0.25, 0.15],
          rotate: [0, 5, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#070c20]/60 pointer-events-none"></div>
      
      {/* Motion stars with increased count and variety */}
      {Array.from({ length: 30 }).map((_, idx) => (
        <motion.div
          key={`star-${idx}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() > 0.8 ? `${Math.random() * 4 + 2}px` : `${Math.random() * 2 + 1}px`,
            height: Math.random() > 0.8 ? `${Math.random() * 4 + 2}px` : `${Math.random() * 2 + 1}px`,
            opacity: Math.random() * 0.7 + 0.3,
            boxShadow: Math.random() > 0.8 ? '0 0 10px 2px rgba(255,255,255,0.7)' : 'none',
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 1 + Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* New cosmic dust particles */}
      {Array.from({ length: 20 }).map((_, idx) => (
        <motion.div
          key={`dust-${idx}`}
          className="absolute rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            background: idx % 2 === 0 
              ? 'radial-gradient(circle, rgba(155,135,245,0.2) 0%, rgba(155,135,245,0) 70%)' 
              : 'radial-gradient(circle, rgba(115,155,215,0.2) 0%, rgba(115,155,215,0) 70%)',
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 15 + Math.random() * 10,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default SenServicesBackground;
