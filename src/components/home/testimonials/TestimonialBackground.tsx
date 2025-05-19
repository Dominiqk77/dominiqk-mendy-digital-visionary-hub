
import React from 'react';

const TestimonialBackground = () => {
  return (
    <>
      {/* Nebula background effects */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="nebula-glow-purple w-96 h-96 top-10 left-10"></div>
        <div className="nebula-glow-blue w-80 h-80 bottom-10 right-20"></div>
        <div className="nebula-glow-purple w-64 h-64 top-1/3 right-1/4"></div>
      </div>
      
      {/* Star-like particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div 
          key={`star-${i}`}
          className="absolute rounded-full bg-white animate-star-twinkle"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.8 + 0.2
          }}
        />
      ))}
    </>
  );
};

export default TestimonialBackground;
