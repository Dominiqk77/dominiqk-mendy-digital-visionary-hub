
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, Zap, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced space-themed background */}
      <div className="absolute inset-0 bg-gradient-to-b from-portfolio-space/95 via-portfolio-space to-portfolio-deepspace/95 z-0"></div>
      
      {/* Neural network grid overlay */}
      <div className="absolute inset-0 bg-space-grid opacity-30 z-0"></div>
      
      {/* Animated background elements - similar to the AI Solutions page */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Neural network nodes */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-portfolio-purple/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1] 
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + Math.random() * 3,
              delay: i * 0.3
            }}
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 15px rgba(155, 135, 245, 0.5)'
            }}
          />
        ))}
        
        {/* Glowing orbs */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <div className="w-16 h-16 mx-auto mb-6 relative group">
              <div className="absolute inset-0 bg-indigo-600/20 rounded-full animate-ping opacity-50"></div>
              <div className="relative flex items-center justify-center w-full h-full bg-indigo-600/30 backdrop-blur-sm rounded-full border border-indigo-500/50 group-hover:border-indigo-400 transition-colors">
                <BrainCircuit className="h-8 w-8 text-indigo-400" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-portfolio-purple via-portfolio-blue to-portfolio-pink bg-clip-text text-transparent">
              Exploitez Mon Expertise Internationale
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-portfolio-purple to-portfolio-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-200">
              Fort de plus de 15 années d'expérience entre l'Europe, le Maroc et l'international,
              j'accompagne entreprises et organisations dans leur transformation digitale et le développement
              de solutions innovantes adaptées à leurs besoins spécifiques.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-black/30 border border-portfolio-purple/20 rounded-xl p-6 hover:border-portfolio-purple/30 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center mr-3">
                  <Zap className="h-5 w-5 text-portfolio-purple" />
                </div>
                <h3 className="text-xl font-bold text-white">Services Principaux</h3>
              </div>
              <ul className="space-y-3">
                {['Développement web et mobile de haute qualité', 
                  'Solutions IA innovantes et personnalisées', 
                  'Stratégie marketing digital internationale',
                  'Formation et accompagnement sur mesure'].map((item, idx) => (
                  <li key={idx} className="flex items-center group">
                    <div className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-portfolio-purple group-hover:bg-portfolio-blue transition-colors duration-300"></div>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-black/30 border border-portfolio-blue/20 rounded-xl p-6 hover:border-portfolio-blue/30 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-900/40 border border-blue-500/30 flex items-center justify-center mr-3">
                  <Star className="h-5 w-5 text-portfolio-blue" />
                </div>
                <h3 className="text-xl font-bold text-white">Pourquoi Me Choisir</h3>
              </div>
              <ul className="space-y-3">
                {['Expertise internationale reconnue',
                  'Solutions adaptées à vos besoins spécifiques',
                  'Approche innovante et orientée résultats',
                  'Accompagnement personnalisé et suivi attentif'].map((item, idx) => (
                  <li key={idx} className="flex items-center group">
                    <div className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-portfolio-blue group-hover:bg-portfolio-purple transition-colors duration-300"></div>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-center"
          >
            <div className="p-5 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 backdrop-blur-sm rounded-lg border border-white/5 mb-6">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-5 w-5 text-blue-400 mr-2" />
                <p className="text-white font-medium">
                  Basé à Marrakech depuis 11 ans, je travaille avec des clients internationaux et voyage régulièrement 
                  entre le Maroc, Londres, la France et l'Espagne pour offrir des services de la plus haute qualité.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue hover:opacity-90 transition-opacity"
              >
                <Link 
                  to="/contact" 
                  className="flex items-center"
                >
                  Me contacter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Link 
                  to="/services" 
                  className="flex items-center"
                >
                  Découvrir mes services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative bottom elements - tech circuit pattern */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-portfolio-deepspace to-transparent z-0"></div>
      <svg className="absolute bottom-0 left-0 w-full z-0 opacity-20" viewBox="0 0 1440 100">
        <path fill="url(#gradient)" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D946EF" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default CTASection;
