
import React, { useEffect, useRef } from 'react';

const DataVisualization: React.FC = () => {
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
    
    // Nodes and connections for data visualization
    interface Node {
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
      connections: number[];
    }
    
    // Create nodes
    const nodes: Node[] = [];
    const numNodes = Math.min(40, Math.floor(canvas.width * canvas.height / 25000)); // Limit max nodes
    
    for (let i = 0; i < numNodes; i++) {
      const radius = Math.random() * 3 + 2;
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        color: i % 5 === 0 ? '#9b87f5' : i % 3 === 0 ? '#0EA5E9' : '#D946EF',
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        connections: []
      });
    }
    
    // Connect nodes
    for (let i = 0; i < nodes.length; i++) {
      const numConnections = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < numConnections; j++) {
        // Don't connect to self
        let target;
        do {
          target = Math.floor(Math.random() * nodes.length);
        } while (target === i || nodes[i].connections.includes(target));
        
        nodes[i].connections.push(target);
      }
    }
    
    // Data points that flow along connections
    interface DataPoint {
      from: number;
      to: number;
      progress: number;
      speed: number;
      color: string;
    }
    
    const dataPoints: DataPoint[] = [];
    
    // Create initial data points
    const createDataPoint = () => {
      if (nodes.length === 0) return null;
      
      const fromIndex = Math.floor(Math.random() * nodes.length);
      if (nodes[fromIndex].connections.length === 0) return null;
      
      const toIndex = nodes[fromIndex].connections[Math.floor(Math.random() * nodes[fromIndex].connections.length)];
      
      return {
        from: fromIndex,
        to: toIndex,
        progress: 0,
        speed: Math.random() * 0.01 + 0.002,
        color: Math.random() > 0.7 ? '#9b87f5' : Math.random() > 0.5 ? '#0EA5E9' : '#D946EF'
      };
    };
    
    // Create initial data points
    for (let i = 0; i < 15; i++) {
      const dataPoint = createDataPoint();
      if (dataPoint) dataPoints.push(dataPoint);
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections between nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        for (const connIndex of node.connections) {
          const connectedNode = nodes[connIndex];
          
          // Draw connection line
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(connectedNode.x, connectedNode.y);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
      
      // Draw and update nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        // Update position
        node.x += node.vx;
        node.y += node.vy;
        
        // Boundary check and bounce
        if (node.x < node.radius) {
          node.x = node.radius;
          node.vx = -node.vx;
        }
        if (node.x > canvas.width - node.radius) {
          node.x = canvas.width - node.radius;
          node.vx = -node.vx;
        }
        if (node.y < node.radius) {
          node.y = node.radius;
          node.vy = -node.vy;
        }
        if (node.y > canvas.height - node.radius) {
          node.y = canvas.height - node.radius;
          node.vy = -node.vy;
        }
        
        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      }
      
      // Draw and update data points
      for (let i = dataPoints.length - 1; i >= 0; i--) {
        const dp = dataPoints[i];
        const fromNode = nodes[dp.from];
        const toNode = nodes[dp.to];
        
        // Calculate position along the path
        const x = fromNode.x + (toNode.x - fromNode.x) * dp.progress;
        const y = fromNode.y + (toNode.y - fromNode.y) * dp.progress;
        
        // Draw data point
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = dp.color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.globalAlpha = 1;
        
        // Update progress
        dp.progress += dp.speed;
        
        // If completed, remove and create a new data point
        if (dp.progress >= 1) {
          dataPoints.splice(i, 1);
          const newDP = createDataPoint();
          if (newDP) dataPoints.push(newDP);
        }
      }
      
      // Randomly add new data points
      if (Math.random() < 0.05 && dataPoints.length < 30) {
        const newDP = createDataPoint();
        if (newDP) dataPoints.push(newDP);
      }
      
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
    />
  );
};

export default DataVisualization;
