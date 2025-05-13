
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Plane, Rocket, Star, Atom } from 'lucide-react';

interface FloatingElementsProps {
  count?: number;
  variant?: 'tech' | 'space' | 'data' | 'mixed';
  containerClassName?: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ 
  count = 5, 
  variant = 'mixed',
  containerClassName = '' 
}) => {
  const [elements, setElements] = useState<Array<{
    id: number;
    x: string;
    y: string;
    icon: string;
    color: string;
    size: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const icons = {
      tech: ['Atom', 'Zap'],
      space: ['Plane', 'Star'],
      data: ['Sparkles', 'Rocket'],
      mixed: ['Atom', 'Zap', 'Plane', 'Star', 'Sparkles', 'Rocket']
    };
    
    const colors = {
      tech: ['text-primary', 'text-secondary'],
      space: ['text-portfolio-purple', 'text-portfolio-blue'],
      data: ['text-portfolio-blue', 'text-portfolio-pink'],
      mixed: ['text-primary', 'text-secondary', 'text-portfolio-purple', 'text-portfolio-blue', 'text-portfolio-pink']
    };

    const selectedIcons = icons[variant];
    const selectedColors = colors[variant];
    
    const newElements = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      icon: selectedIcons[Math.floor(Math.random() * selectedIcons.length)],
      color: selectedColors[Math.floor(Math.random() * selectedColors.length)],
      size: Math.floor(Math.random() * 16) + 16, // 16-32px
      duration: Math.random() * 20 + 20, // 20-40s
      delay: Math.random() * -20 // -20-0s
    }));
    
    setElements(newElements);
  }, [count, variant]);

  const renderIcon = (icon: string, props: any) => {
    switch (icon) {
      case 'Atom': return <Atom {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Plane': return <Plane {...props} />;
      case 'Star': return <Star {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'Rocket': return <Rocket {...props} />;
      default: return <Star {...props} />;
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${containerClassName}`}>
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${element.color} opacity-30`}
          initial={{ x: element.x, y: element.y, opacity: 0 }}
          animate={{
            x: ['0%', '100%', '50%', '0%', '75%', '25%', '0%'],
            y: ['0%', '50%', '100%', '75%', '0%', '50%', '0%'],
            opacity: [0, 0.6, 0.3, 0.6, 0.3, 0.6, 0],
          }}
          transition={{
            duration: element.duration,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.7, 0.9, 1],
            repeat: Infinity,
            delay: element.delay,
          }}
          style={{ width: element.size, height: element.size }}
        >
          {renderIcon(element.icon, { size: element.size })}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
