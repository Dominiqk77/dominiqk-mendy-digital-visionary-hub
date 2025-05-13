
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SenServicesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Animation for starry night background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = Math.max(document.body.scrollHeight, window.innerHeight);

    // Stars/data particles properties
    const particles: { x: number, y: number, radius: number, dirX: number, dirY: number, color: string }[] = [];
    
    const createParticles = () => {
      for (let i = 0; i < 150; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 0.5,
          dirX: (Math.random() - 0.5) * 0.5,
          dirY: (Math.random() - 0.5) * 0.5,
          // Night blue theme colors with stars
          color: Math.random() > 0.3 
            ? `rgba(${155 + Math.random() * 100}, ${180 + Math.random() * 75}, 255, ${Math.random() * 0.7 + 0.3})`
            : `rgba(255, 255, ${220 + Math.random() * 35}, ${Math.random() * 0.9 + 0.1})`
        });
      }
    };

    createParticles();

    // Connection line threshold
    const connectionDistance = 120;

    // Animation loop
    const animate = () => {
      // Semi-transparent deep blue night clear to create trail effect
      ctx.fillStyle = 'rgba(10, 15, 40, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        
        // Update position
        p.x += p.dirX;
        p.y += p.dirY;
        
        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.dirX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dirY *= -1;
        
        // Draw particle (star/data point)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Draw connections between nearby particles like constellations
        for (let j = i + 1; j < particles.length; j++) {
          let p2 = particles[j];
          let distance = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2));
          
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            // Night blue theme for connections
            ctx.strokeStyle = `rgba(115, 155, 215, ${0.2 * (1 - distance/connectionDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    // Add occasional shooting stars
    const createShootingStar = () => {
      const x = Math.random() * canvas.width;
      const y = 0;
      const length = Math.random() * 100 + 50;
      const angle = Math.PI / 4 + Math.random() * Math.PI / 4;
      const speed = Math.random() * 15 + 5;
      
      const draw = () => {
        ctx.beginPath();
        ctx.moveTo(x, y);
        const tailX = x + Math.cos(angle) * length;
        const tailY = y + Math.sin(angle) * length;
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Create glow effect
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = 'rgba(180, 210, 255, 0.3)';
        ctx.lineWidth = 4;
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
    
    // Create shooting stars occasionally
    const shootingStarInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        createShootingStar();
      }
    }, 2000);

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
    <div className="fixed inset-0 bg-gradient-to-b from-[#0a1128] via-[#1a2b4c] to-[#213559] z-0">
      {/* Distant nebulae and galaxies */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#4a6da7]/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#8caad7]/10 blur-3xl"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-[#639ad7]/10 blur-3xl"></div>
      
      {/* Canvas for stars and data points */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.9 }}
      />
      
      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a1128]/50 pointer-events-none"></div>
      
      {/* Motion stars */}
      {Array.from({ length: 20 }).map((_, idx) => (
        <motion.div
          key={`star-${idx}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            opacity: Math.random() * 0.7 + 0.3,
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
    </div>
  );
};

export default SenServicesBackground;
