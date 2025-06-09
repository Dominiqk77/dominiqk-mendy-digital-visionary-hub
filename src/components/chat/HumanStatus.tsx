
import React from 'react';
import { Brain, Eye, PenTool } from 'lucide-react';

interface HumanStatusProps {
  status: 'reading' | 'thinking' | 'writing';
  messageLength?: number;
}

export const HumanStatus: React.FC<HumanStatusProps> = ({ status, messageLength = 0 }) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'reading':
        return {
          icon: Eye,
          text: 'Dominiqk lit votre message...',
          color: 'text-blue-400',
          duration: Math.min(Math.max(messageLength * 15, 1000), 2000) // 1-2 secondes
        };
      case 'thinking':
        return {
          icon: Brain,
          text: 'Dominiqk réfléchit...',
          color: 'text-purple-400',
          duration: Math.min(Math.max(messageLength * 20, 2000), 4000) // 2-4 secondes
        };
      case 'writing':
        return {
          icon: PenTool,
          text: 'Dominiqk écrit...',
          color: 'text-green-400',
          duration: 0 // Géré par le composant parent
        };
      default:
        return {
          icon: Brain,
          text: 'Dominiqk traite...',
          color: 'text-gray-400',
          duration: 1000
        };
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;

  return (
    <div className="flex justify-start">
      <div className="bg-white/10 text-white p-3 rounded-lg mr-4 border border-white/20 backdrop-blur-sm relative z-[60]">
        <div className="flex items-center space-x-2">
          <Icon className={`w-4 h-4 ${config.color} animate-spin`} />
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
          <span className={`text-xs ${config.color}`}>{config.text}</span>
        </div>
      </div>
    </div>
  );
};
