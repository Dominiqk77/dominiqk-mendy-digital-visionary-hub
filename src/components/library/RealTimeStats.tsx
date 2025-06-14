
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Download, Star, TrendingUp } from 'lucide-react';

const RealTimeStats = () => {
  const [stats, setStats] = useState({
    activeUsers: 2547,
    totalDownloads: 8234,
    avgRating: 4.9,
    successRate: 96
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 3),
        totalDownloads: prev.totalDownloads + Math.floor(Math.random() * 2),
        avgRating: prev.avgRating,
        successRate: prev.successRate
      }));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
        <CardContent className="p-4 md:p-6 text-center">
          <div className="bg-cyan-500/20 p-3 rounded-full w-fit mx-auto mb-3 group-hover:bg-cyan-500/30 transition-colors">
            <Users className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
          </div>
          <div className="text-xl md:text-2xl font-bold text-white mb-1">{stats.activeUsers.toLocaleString()}</div>
          <div className="text-xs md:text-sm text-cyan-200">Experts connectés</div>
        </CardContent>
      </Card>
      
      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 hover:border-green-400/50 transition-all duration-300 group">
        <CardContent className="p-4 md:p-6 text-center">
          <div className="bg-green-500/20 p-3 rounded-full w-fit mx-auto mb-3 group-hover:bg-green-500/30 transition-colors">
            <Download className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
          </div>
          <div className="text-xl md:text-2xl font-bold text-white mb-1">{stats.totalDownloads.toLocaleString()}</div>
          <div className="text-xs md:text-sm text-green-200">Téléchargements</div>
        </CardContent>
      </Card>
      
      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 hover:border-yellow-400/50 transition-all duration-300 group">
        <CardContent className="p-4 md:p-6 text-center">
          <div className="bg-yellow-500/20 p-3 rounded-full w-fit mx-auto mb-3 group-hover:bg-yellow-500/30 transition-colors">
            <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
          </div>
          <div className="text-xl md:text-2xl font-bold text-white mb-1">{stats.avgRating}/5</div>
          <div className="text-xs md:text-sm text-yellow-200">Note moyenne</div>
        </CardContent>
      </Card>
      
      <Card className="bg-white/10 backdrop-blur-xl border border-white/20 hover:border-purple-400/50 transition-all duration-300 group">
        <CardContent className="p-4 md:p-6 text-center">
          <div className="bg-purple-500/20 p-3 rounded-full w-fit mx-auto mb-3 group-hover:bg-purple-500/30 transition-colors">
            <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
          </div>
          <div className="text-xl md:text-2xl font-bold text-white mb-1">{stats.successRate}%</div>
          <div className="text-xs md:text-sm text-purple-200">Taux de succès</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RealTimeStats;
