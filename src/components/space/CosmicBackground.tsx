
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CosmicBackground = () => {
  const [stars, setStars] = useState<{id: number, x: number, y: number, size: number, twinkleDelay: number}[]>([]);
  
  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 150 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        twinkleDelay: Math.random() * 5
      }));
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep cosmic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950"></div>
      
      {/* Tech grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" style={{
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Animated stars */}
      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + Math.random() * 4,
            delay: star.twinkleDelay,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Neural network lines */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`neural-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
            style={{
              top: `${20 + i * 10}%`,
              left: `${Math.random() * 20}%`,
              width: `${60 + Math.random() * 40}%`,
              transform: `rotate(${Math.random() * 30 - 15}deg)`
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scaleX: [0.8, 1.2, 0.8]
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + Math.random() * 6,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Floating orbs */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full blur-xl"
          style={{
            background: `radial-gradient(circle, ${
              ['rgba(99, 102, 241, 0.4)', 'rgba(139, 92, 246, 0.4)', 'rgba(59, 130, 246, 0.4)'][i % 3]
            }, transparent)`,
            width: `${100 + Math.random() * 200}px`,
            height: `${100 + Math.random() * 200}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 20 + Math.random() * 10,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default CosmicBackground;
