
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SpaceBackground = () => {
  const [stars, setStars] = useState<{id: number, x: number, y: number, size: number, opacity: number, speed: number}[]>([]);
  
  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars = Array.from({ length: 200 }, (_, i) => ({
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
    <div className="absolute inset-0 overflow-hidden bg-black pointer-events-none z-0">
      {/* Stars background with animation */}
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
            y: [`${star.y}%`, `${star.y + star.speed * 10}%`, `${star.y}%`]
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + Math.random() * 7,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Nebula effects */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-violet-500/10 blur-3xl"></div>
      
      {/* Shooting stars */}
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.div
          key={`shooting-${index}`}
          className="absolute h-0.5 bg-white rounded-full"
          style={{
            top: `${15 + index * 18}%`,
            left: "-10%",
            width: "5%",
          }}
          animate={{
            left: ["0%", "120%"],
            top: [`${15 + index * 18}%`, `${25 + index * 15}%`],
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 7 + index * 3,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Distant galaxies */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-transparent blur-xl"></div>
      <div className="absolute top-2/3 right-1/3 w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500/20 to-transparent blur-xl"></div>
    </div>
  );
};

export default SpaceBackground;
