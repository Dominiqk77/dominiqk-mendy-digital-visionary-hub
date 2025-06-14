
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Animated cosmic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        {/* Neural network background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-neuron-pattern animate-pulse-slow"></div>
        </div>
        
        {/* Floating particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={`particle-${i}`}
            className="absolute rounded-full bg-blue-400/30 animate-float"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 10}s`
            }}
          />
        ))}
        
        {/* Nebula effects */}
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0 bg-space-grid opacity-10"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
