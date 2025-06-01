
import React from 'react';

const AdvancedCosmicBackground = () => {
  return (
    <div className="fixed inset-0 bg-black z-[-2]">
      <div className="absolute inset-0">
        {Array.from({ length: 200 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              backgroundColor: 'white',
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite`
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/10 via-purple-900/10 to-black"></div>
      
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.2); 
          }
        }
      `}</style>
    </div>
  );
};

export default AdvancedCosmicBackground;
