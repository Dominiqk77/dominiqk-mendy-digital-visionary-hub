import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ArrowRight, BrainCircuit, Zap, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <>
      <section className="py-16 relative overflow-hidden">
        {/* Simplified background for better performance */}
        <div className="absolute inset-0 bg-gradient-to-b from-portfolio-space/95 via-portfolio-space to-portfolio-deepspace/95 z-0"></div>
        
        {/* Simplified background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Reduced neural network nodes for performance */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-portfolio-purple/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.1, 1] 
              }}
              transition={{
                repeat: Infinity,
                duration: 4 + Math.random() * 2,
                delay: i * 0.2
              }}
              style={{
                width: `${Math.random() * 6 + 3}px`,
                height: `${Math.random() * 6 + 3}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: '0 0 10px rgba(155, 135, 245, 0.3)'
              }}
            />
          ))}
          
          {/* Simplified glowing orbs */}
          <motion.div
            className="absolute top-20 left-20 w-48 h-48 rounded-full bg-indigo-500/10 blur-2xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.15, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-purple-500/10 blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.2, 0.15],
            }}
            transition={{
              duration: 8,
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
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <div className="w-16 h-16 mx-auto mb-6 relative">
                <div className="relative flex items-center justify-center w-full h-full bg-indigo-600/30 backdrop-blur-sm rounded-full border border-indigo-500/50">
                  <BrainCircuit className="h-8 w-8 text-indigo-400" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-portfolio-purple via-portfolio-blue to-portfolio-pink bg-clip-text text-transparent">
                Transformez Votre Vision Digitale
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-portfolio-purple to-portfolio-blue mx-auto mb-6"></div>
              <p className="text-lg text-gray-200">
                15+ années d'expertise internationale | ROI moyen de 250% | 1000+ clients satisfaits
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-black/30 border border-portfolio-purple/20 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center mr-3">
                    <Zap className="h-5 w-5 text-portfolio-purple" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Solutions Clés en Main</h3>
                </div>
                <ul className="space-y-2">
                  {['IA & Automatisation avancée', 
                    'Développement web & mobile premium', 
                    'Stratégie marketing digital ROI-focused',
                    'Consulting transformation digitale'].map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="mr-2 w-1.5 h-1.5 rounded-full bg-portfolio-purple"></div>
                      <span className="text-gray-200 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-black/30 border border-portfolio-blue/20 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-900/40 border border-blue-500/30 flex items-center justify-center mr-3">
                    <Star className="h-5 w-5 text-portfolio-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Garantie Résultats</h3>
                </div>
                <ul className="space-y-2">
                  {['Expertise certifiée internationale',
                    'Accompagnement personnalisé 24/7',
                    'Méthodologie éprouvée depuis 2009',
                    'Support technique et stratégique continu'].map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="mr-2 w-1.5 h-1.5 rounded-full bg-portfolio-blue"></div>
                      <span className="text-gray-200 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="p-4 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 backdrop-blur-sm rounded-lg border border-white/5 mb-6">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-5 w-5 text-blue-400 mr-2" />
                  <p className="text-white font-medium text-sm">
                    Basé à Marrakech | Clients internationaux | Déplacements Europe & Afrique
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
                    Démarrer Votre Projet
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
                    Voir Mes Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-portfolio-deepspace to-portfolio-space z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
              <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden">
                <iframe
                  src="https://www.canva.com/design/DAGombWIcf4/7KCqS5WwnO1QLeoYpUGvQA/watch?embed"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full border-0"
                  title="Présentation Dominiqk Mendy"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CTASection;
