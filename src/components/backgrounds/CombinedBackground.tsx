
import React from 'react';
import SpaceBackground from './SpaceBackground';
import DataVisualization from './DataVisualization';

interface CombinedBackgroundProps {
  includeDataViz?: boolean;
  opacity?: number;
}

const CombinedBackground: React.FC<CombinedBackgroundProps> = ({ 
  includeDataViz = true,
  opacity = 1 
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10" style={{ opacity }}>
      <SpaceBackground />
      {includeDataViz && <DataVisualization />}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 pointer-events-none"></div>
    </div>
  );
};

export default CombinedBackground;
