import React from 'react';
import { motion } from 'framer-motion';

const HeroDescription = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Tech badges with their colors
  const techBadges = [
    { name: "Intelligence Artificielle", color: "blue" },
    { name: "Web Development", color: "purple" },
    { name: "Marketing Digital", color: "green" },
    { name: "Consulting", color: "amber" }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.p 
        className="text-lg sm:text-xl text-gray-300 max-w-xl font-poppins"
        variants={itemVariants}
      >
        Consultant international spécialisé dans la 
        <span className="text-portfolio-blue font-semibold relative inline-block mx-1 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-portfolio-blue after:origin-bottom-right after:transition-transform after:duration-500 hover:after:scale-x-100 hover:after:origin-bottom-left">
          transformation numérique
        </span>, 
        l'<span className="text-portfolio-purple font-semibold shimmer-text mx-1">
          intelligence artificielle
        </span> et le 
        <span className="text-portfolio-cyan font-semibold mx-1 pulse-glow">
          marketing digital
        </span> pour les entreprises innovantes à travers l'Afrique et l'Europe.
      </motion.p>
      
      {/* Code snippet - decorative element */}
      <motion.div 
        className="my-3 bg-black/40 rounded-md p-2 border border-white/5 max-w-xl hidden md:block"
        variants={itemVariants}
      >
        <pre className="text-xs text-portfolio-blue font-mono">
          <span className="text-pink-400">const</span> <span className="text-green-400">expert</span> = {"{"}
          <br/>  <span className="text-amber-400">name</span>: <span className="text-blue-300">"Dominiqk Mendy"</span>,
          <br/>  <span className="text-amber-400">skills</span>: [<span className="text-blue-300">"AI"</span>, <span className="text-blue-300">"Web Dev"</span>, <span className="text-blue-300">"Digital Marketing"</span>],
          <br/>  <span className="text-amber-400">mission</span>: <span className="text-blue-300">"Transformer votre vision en réalité digitale"</span>
          <br/>{"}"}
        </pre>
      </motion.div>
      
      {/* Enhanced technology badges for visual appeal */}
      <motion.div 
        className="flex flex-wrap gap-2 mt-4 mb-2"
        variants={itemVariants}
      >
        {techBadges.map((badge, index) => (
          <motion.span
            key={badge.name}
            className={`px-2.5 py-1 text-xs font-medium bg-${badge.color}-500/20 text-${badge.color}-400 rounded-full backdrop-blur-sm border border-${badge.color}-500/20 hover:bg-${badge.color}-500/30 transition-all duration-300 transform hover:scale-105`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.8 + (index * 0.1),
              duration: 0.4
            }}
          >
            {badge.name}
          </motion.span>
        ))}
      </motion.div>
      
      {/* Innovation quote */}
      <motion.div
        className="mt-4 text-sm text-gray-400 italic border-l-2 border-portfolio-purple/50 pl-3"
        variants={itemVariants}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        "L'innovation distingue un leader d'un suiveur."
      </motion.div>
    </motion.div>
  );
};

export default HeroDescription;
