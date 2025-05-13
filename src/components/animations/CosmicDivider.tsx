
import React from 'react';

interface CosmicDividerProps {
  variant?: 'wave' | 'triangle' | 'curve';
  inverted?: boolean;
  className?: string;
}

const CosmicDivider: React.FC<CosmicDividerProps> = ({ 
  variant = 'wave', 
  inverted = false, 
  className = '' 
}) => {
  const renderDivider = () => {
    switch (variant) {
      case 'wave':
        return (
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className={`w-full h-12 sm:h-16 md:h-24 ${inverted ? 'rotate-180' : ''} ${className}`}
          >
            <path 
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
              className="fill-background dark:fill-gray-900 opacity-100"
            ></path>
            <path 
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
              className="fill-primary/5 dark:fill-primary/10 opacity-100"
            ></path>
          </svg>
        );

      case 'triangle':
        return (
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className={`w-full h-12 sm:h-16 md:h-24 ${inverted ? 'rotate-180' : ''} ${className}`}
          >
            <path 
              d="M1200 0L0 0 598.97 114.72 1200 0z" 
              className="fill-background dark:fill-gray-900 opacity-100"
            ></path>
            <path 
              d="M1200 0L0 0 598.97 89.72 1200 0z" 
              className="fill-secondary/5 dark:fill-secondary/10 opacity-100"
            ></path>
          </svg>
        );

      case 'curve':
        return (
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className={`w-full h-12 sm:h-16 md:h-24 ${inverted ? 'rotate-180' : ''} ${className}`}
          >
            <path 
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" 
              className="fill-background dark:fill-gray-900 opacity-100"
            ></path>
            <path 
              d="M600,90.77C268.63,90.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,90.77,600,90.77Z" 
              className="fill-accent/5 dark:fill-accent/10 opacity-100"
            ></path>
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full overflow-hidden">
      {renderDivider()}
    </div>
  );
};

export default CosmicDivider;
