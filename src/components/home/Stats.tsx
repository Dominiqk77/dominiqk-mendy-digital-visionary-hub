
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  // Initial and target values for the stats
  const stats = [
    { id: 1, title: "Projets complétés", value: 0, target: 100, suffix: "+" },
    { id: 2, title: "Clients satisfaits", value: 0, target: 85, suffix: "+" },
    { id: 3, title: "Années d'expérience", value: 0, target: 10, suffix: "+" },
    { id: 4, title: "Solutions IA développées", value: 0, target: 25, suffix: "+" }
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

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Impact Mesurable</h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Des résultats concrets qui témoignent de mon expertise et de mon engagement
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {currentStats.map((stat) => (
            <motion.div
              key={stat.id}
              className="stat-card bg-black/40 backdrop-blur-sm border border-gray-800 p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: stat.id * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-400 font-medium">{stat.title}</div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="p-6 border border-gray-800 rounded-lg bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="text-2xl font-bold text-gradient mb-4">
              100M FCFA
            </div>
            <h3 className="text-xl font-bold mb-2">Objectif Mensuel</h3>
            <p className="text-gray-400">
              Objectif de chiffre d'affaires mensuel grâce à des services de consultation stratégiques et des solutions technologiques innovantes.
            </p>
          </motion.div>
          
          <motion.div
            className="p-6 border border-gray-800 rounded-lg bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <div className="text-2xl font-bold text-gradient mb-4">
              Top 10
            </div>
            <h3 className="text-xl font-bold mb-2">Experts Tech en Afrique</h3>
            <p className="text-gray-400">
              Reconnu parmi les meilleurs experts en innovation numérique et développement de solutions IA en Afrique.
            </p>
          </motion.div>
          
          <motion.div
            className="p-6 border border-gray-800 rounded-lg bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <div className="text-2xl font-bold text-gradient mb-4">
              5 Pays
            </div>
            <h3 className="text-xl font-bold mb-2">Présence Internationale</h3>
            <p className="text-gray-400">
              Déployant des solutions numériques innovantes au Sénégal, Maroc, France et dans d'autres pays africains.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
