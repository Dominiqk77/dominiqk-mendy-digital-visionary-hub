
import React, { useEffect, useRef } from 'react';

const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initial size
    resizeCanvas();
    
    // Handle resize
    window.addEventListener('resize', resizeCanvas);
    
    // Star properties
    interface Star {
      x: number;
      y: number;
      radius: number;
      color: string;
      velocity: number;
      alpha: number;
      direction: number;
      twinkleSpeed: number;
    }
    
    // Create stars
    const stars: Star[] = [];
    const numStars = Math.floor(canvas.width * canvas.height / 5000); // Density based on screen size
    
    for (let i = 0; i < numStars; i++) {
      const radius = Math.random() * 1.5 + 0.5;
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        color: i % 20 === 0 ? '#0EA5E9' : i % 15 === 0 ? '#9b87f5' : '#ffffff',
        velocity: Math.random() * 0.05,
        alpha: Math.random() * 0.8 + 0.2,
        direction: Math.random() > 0.5 ? 1 : -1,
        twinkleSpeed: Math.random() * 0.01 + 0.003,
      });
    }
    
    // Data streams
    interface DataStream {
      startX: number;
      startY: number;
      length: number;
      speed: number;
      progress: number;
      color: string;
      width: number;
    }
    
    const dataStreams: DataStream[] = [];
    const numStreams = Math.floor(canvas.width / 100); // Number of streams based on width
    
    for (let i = 0; i < numStreams; i++) {
      dataStreams.push({
        startX: Math.random() * canvas.width,
        startY: Math.random() * canvas.height,
        length: Math.random() * 80 + 50,
        speed: Math.random() * 1 + 0.5,
        progress: 0,
        color: i % 3 === 0 ? 'rgba(155, 135, 245, 0.3)' : 'rgba(14, 165, 233, 0.3)',
        width: Math.random() * 1 + 0.5,
      });
    }
    
    // Planets (rare, large glowing circles)
    interface Planet {
      x: number;
      y: number;
      radius: number;
      color: string;
      glowSize: number;
      glowOpacity: number;
      pulseDirection: number;
      pulseSpeed: number;
    }
    
    const planets: Planet[] = [];
    const numPlanets = Math.floor(canvas.width / 800) + 1; // Few planets based on screen size
    
    for (let i = 0; i < numPlanets; i++) {
      planets.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 40 + 20,
        color: i % 2 === 0 ? '#9b87f5' : '#0EA5E9',
        glowSize: Math.random() * 20 + 30,
        glowOpacity: Math.random() * 0.15 + 0.1,
        pulseDirection: 1,
        pulseSpeed: Math.random() * 0.01 + 0.005
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw and update stars
      stars.forEach(star => {
        // Update twinkle effect
        star.alpha += star.twinkleSpeed * star.direction;
        if (star.alpha > 0.9) {
          star.alpha = 0.9;
          star.direction = -1;
        } else if (star.alpha < 0.3) {
          star.alpha = 0.3;
          star.direction = 1;
        }
        
        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
        
        // Move star slightly
        star.y += star.velocity;
        
        // Reset position if out of bounds
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      // Draw and update data streams
      dataStreams.forEach(stream => {
        ctx.beginPath();
        ctx.moveTo(stream.startX, stream.startY + stream.progress);
        ctx.lineTo(stream.startX, stream.startY + stream.progress + stream.length);
        ctx.strokeStyle = stream.color;
        ctx.lineWidth = stream.width;
        ctx.stroke();
        
        // Update progress
        stream.progress += stream.speed;
        
        // Reset if out of view
        if (stream.progress > canvas.height + stream.length) {
          stream.progress = -stream.length;
          stream.startX = Math.random() * canvas.width;
          stream.startY = Math.random() * canvas.height * 0.3;
        }
      });
      
      // Draw and update planets
      planets.forEach(planet => {
        // Glowing effect
        const gradient = ctx.createRadialGradient(
          planet.x, planet.y, planet.radius,
          planet.x, planet.y, planet.radius + planet.glowSize
        );
        gradient.addColorStop(0, planet.color);
        gradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(planet.x, planet.y, planet.radius + planet.glowSize, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.globalAlpha = planet.glowOpacity;
        ctx.fill();
        ctx.globalAlpha = 1;
        
        // Planet body
        ctx.beginPath();
        ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
        ctx.fillStyle = planet.color;
        ctx.globalAlpha = 0.5;
        ctx.fill();
        ctx.globalAlpha = 1;
        
        // Pulsating effect
        planet.glowSize += planet.pulseSpeed * planet.pulseDirection;
        if (planet.glowSize > planet.radius + 40) {
          planet.pulseDirection = -1;
        } else if (planet.glowSize < planet.radius + 30) {
          planet.pulseDirection = 1;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Clean up
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
    />
  );
};

export default SpaceBackground;
