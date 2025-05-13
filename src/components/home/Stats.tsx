import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Award, Globe, Server, Database } from 'lucide-react';

const Stats = () => {
  // Initial and target values for the stats
  const stats = [
    { id: 1, title: "Projets réalisés", value: 0, target: 2000, suffix: "+" },
    { id: 2, title: "Clients satisfaits", value: 0, target: 4000, suffix: "+" },
    { id: 3, title: "Taux de conversion", value: 0, target: 98, suffix: "%" },
    { id: 4, title: "Solutions IA déployées", value: 0, target: 45, suffix: "+" }
  ];

  // State for storing the current values of the stats
  const [currentStats, setCurrentStats] = useState(stats);

  // Update values when in view
  useEffect(() => {
    const animationDuration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60 fps
    const totalFrames = Math.round(animationDuration / frameDuration);
    
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      
      const progress = frame / totalFrames;
      
      setCurrentStats(prevStats => 
        prevStats.map(stat => ({
          ...stat,
          value: Math.floor(progress * stat.target)
        }))
      );
      
      if (frame === totalFrames) {
        clearInterval(timer);
      }
    }, frameDuration);
    
    return () => clearInterval(timer);
  }, []);

  // Simulated real-time data
  const [activeServers, setActiveServers] = useState(246);
  const [dataTransferred, setDataTransferred] = useState(1824);
  
  // Simulate real-time data updates
  useEffect(() => {
    const serverInterval = setInterval(() => {
      setActiveServers(prev => prev + Math.floor(Math.random() * 3) - 1); // -1, 0, or +1
    }, 5000);
    
    const dataInterval = setInterval(() => {
      setDataTransferred(prev => prev + Math.floor(Math.random() * 10) + 5); // +5 to +14
    }, 3000);
    
    return () => {
      clearInterval(serverInterval);
      clearInterval(dataInterval);
    };
  }, []);

  return (
    <section className="py-16 bg-portfolio-darkblue text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-portfolio-blue"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `pulse ${Math.random() * 4 + 3}s infinite`,
                opacity: Math.random() * 0.7 + 0.3
              }}
            />
          ))}
        </div>
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-portfolio-purple opacity-10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 bg-portfolio-pink opacity-10 rounded-full blur-[80px]" />
      </div>
      
      {/* Grid lines overlay */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none opacity-5">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="h-full w-px bg-gradient-to-b from-transparent via-portfolio-blue to-transparent"></div>
        ))}
        {[...Array(12)].map((_, i) => (
          <div key={i} className="absolute h-px w-full bg-gradient-to-r from-transparent via-portfolio-blue to-transparent" style={{ top: `${i * 8.33}%` }}></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Impact Mesurable
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300"
          >
            Une expertise africaine reconnue mondialement avec des résultats exceptionnels
          </motion.p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {currentStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="stat-card backdrop-blur-sm border border-gray-800/40 rounded-lg p-6 text-center relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 0 20px rgba(155, 135, 245, 0.2)" 
              }}
            >
              {/* Tech decoration line top */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-portfolio-purple to-transparent"></div>
              
              {/* Tech decoration line left */}
              <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-portfolio-purple to-transparent"></div>
              
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-400 font-medium">{stat.title}</div>
              
              {/* Background patterns */}
              <div className="absolute bottom-0 right-0 w-12 h-12 opacity-10">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4h4v4H4V4z" fill="currentColor" />
                  <path d="M10 4h4v4h-4V4z" fill="currentColor" />
                  <path d="M16 4h4v4h-4V4z" fill="currentColor" />
                  <path d="M4 10h4v4H4v-4z" fill="currentColor" />
                  <path d="M10 10h4v4h-4v-4z" fill="currentColor" />
                  <path d="M16 10h4v4h-4v-4z" fill="currentColor" />
                  <path d="M4 16h4v4H4v-4z" fill="currentColor" />
                  <path d="M10 16h4v4h-4v-4z" fill="currentColor" />
                  <path d="M16 16h4v4h-4v-4z" fill="currentColor" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="backdrop-blur-sm border border-gray-800/40 rounded-lg p-6 relative overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(155, 135, 245, 0.2)" }}
          >
            {/* Real-time data display */}
            <div className="flex justify-between items-center mb-2">
              <div className="text-xs text-gray-400">STATUT: ACTIF</div>
              <div className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                <span className="text-xs text-gray-400">LIVE</span>
              </div>
            </div>
            
            <div className="text-2xl font-bold mb-4">
              <span className="animate-gradient-slow">€750K+</span>
            </div>
            <h3 className="text-xl font-bold mb-2 flex items-center">
              ROI Client Moyen
              <div className="ml-2 h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></div>
            </h3>
            <p className="text-gray-400">
              Retour sur investissement exceptionnel grâce à nos solutions d'IA avancées et notre expertise en transformation digitale.
            </p>
            <TrendingUp className="mt-4 text-primary h-6 w-6" />
            
            {/* Tech decoration */}
            <div className="absolute top-2 right-2 flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-portfolio-purple opacity-70"></div>
              ))}
            </div>
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-portfolio-purple to-transparent"></div>
          </motion.div>
          
          <motion.div
            className="backdrop-blur-sm border border-gray-800/40 rounded-lg p-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(14, 165, 233, 0.2)" }}
          >
            {/* Real-time server status */}
            <div className="flex justify-between items-center mb-2">
              <div className="text-xs text-gray-400">SERVEURS ACTIFS</div>
              <div className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-portfolio-blue mr-2 animate-pulse"></span>
                <span className="text-xs text-gray-400">MONITORED</span>
              </div>
            </div>
            
            <div className="text-2xl font-bold mb-4 flex items-center">
              <Server className="h-5 w-5 mr-2 text-portfolio-blue" />
              <span className="animate-gradient-slow">{activeServers}</span>
              <span className="text-sm ml-2 text-gray-400">servers</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Solutions Enterprise</h3>
            <p className="text-gray-400">
              Architecture et déploiement de solutions d'entreprise innovantes pour les plus grands groupes africains et internationaux.
            </p>
            <Award className="mt-4 text-secondary h-6 w-6" />
            
            {/* Progress bar */}
            <div className="mt-4 h-1 w-full bg-gray-800 rounded overflow-hidden">
              <div className="h-full bg-portfolio-blue" style={{ width: '78%', animation: 'pulse 2s infinite' }}></div>
            </div>
            <div className="flex justify-between text-xs mt-1">
              <span className="text-gray-400">Load</span>
              <span className="text-gray-400">78%</span>
            </div>
            
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-portfolio-blue to-transparent"></div>
          </motion.div>
          
          <motion.div
            className="backdrop-blur-sm border border-gray-800/40 rounded-lg p-6 relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(217, 70, 239, 0.2)" }}
          >
            {/* Data transfer metrics */}
            <div className="flex justify-between items-center mb-2">
              <div className="text-xs text-gray-400">DATA TRANSFER</div>
              <div className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-portfolio-pink mr-2 animate-pulse"></span>
                <span className="text-xs text-gray-400">LIVE</span>
              </div>
            </div>
            
            <div className="text-2xl font-bold mb-4 flex items-center">
              <Database className="h-5 w-5 mr-2 text-portfolio-pink" />
              <span className="animate-gradient-slow">{dataTransferred.toLocaleString()}</span>
              <span className="text-sm ml-2 text-gray-400">GB</span>
            </div>
            
            <h3 className="text-xl font-bold mb-2">Impact International</h3>
            <p className="text-gray-400">
              Solutions déployées dans les plus grands hubs technologiques : Londres, Dubaï, San Francisco, Singapore, Tokyo, Berlin, Tel Aviv, Marrakech, Dakar, et plus encore.
            </p>
            <Globe className="mt-4 text-accent h-6 w-6" />
            
            {/* Animated data points */}
            <div className="absolute bottom-4 right-4 opacity-25">
              <svg width="60" height="30" viewBox="0 0 60 30">
                {[...Array(10)].map((_, i) => (
                  <circle
                    key={i}
                    cx={5 + i * 5.5}
                    cy={15 + Math.sin(i * 0.5) * 10}
                    r="1"
                    fill="currentColor"
                    style={{ animationDelay: `${i * 0.1}s`, animation: 'pulse 2s infinite' }}
                  />
                ))}
                {[...Array(9)].map((_, i) => (
                  <line
                    key={i}
                    x1={5 + i * 5.5}
                    y1={15 + Math.sin(i * 0.5) * 10}
                    x2={5 + (i + 1) * 5.5}
                    y2={15 + Math.sin((i + 1) * 0.5) * 10}
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                ))}
              </svg>
            </div>
            
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-portfolio-pink to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
