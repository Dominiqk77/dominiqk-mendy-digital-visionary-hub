
import React from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign, Globe, ChartBar } from 'lucide-react';
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const Stats = () => {
  // Updated stats with new ROI, marketing, consulting hours, and landing pages statistics
  const stats = [
    {
      title: "Années d'expérience",
      value: "15+",
      description: "Dans le développement web et la transformation digitale",
      color: "from-blue-500 to-purple-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    },
    {
      title: "Solutions IA Développées",
      value: "500+",
      description: "Solutions d'intelligence artificielle créées depuis 2020",
      color: "from-purple-500 to-indigo-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a8 8 0 0 0-8 8c0 .6.1 1.2.3 1.7L2 16v6h6l4.3-4.3c.5.2 1.1.3 1.7.3a8 8 0 0 0 8-8c0-1.8-.6-3.4-1.5-4.8"></path>
          <path d="M15 6h-3.5a2.5 2.5 0 0 0 0 5H14a2.5 2.5 0 0 1 0 5h-3"></path>
        </svg>
      )
    },
    {
      title: "Clients Internationaux",
      value: "1K+",
      description: "Projets menés avec succès pour des clients dans le monde entier",
      color: "from-indigo-500 to-blue-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M2 12h20"></path>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )
    },
    {
      title: "Certifications",
      value: "12+",
      description: "Certifications internationales dans les domaines de pointe",
      color: "from-blue-500 to-indigo-500",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 15l-2-2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-3l-2 2h-4z"></path>
          <path d="M9 12h6"></path>
          <path d="M11 18H6a2 2 0 0 1-2-2v-5"></path>
          <path d="M20 18h-5a2 2 0 0 1-2-2v-5"></path>
        </svg>
      )
    },
    {
      title: "ROI Moyen",
      value: "250%",
      description: "Retour sur investissement pour nos clients en transformation digitale",
      color: "from-green-500 to-teal-500",
      icon: <DollarSign className="h-6 w-6 mb-2 mx-auto" />
    },
    {
      title: "Heures de Consulting",
      value: "10K+",
      description: "Heures de conseil stratégique délivrées depuis 2018",
      color: "from-amber-500 to-orange-500",
      icon: <Clock className="h-6 w-6 mb-2 mx-auto" />
    },
    {
      title: "Landing Pages",
      value: "2K+",
      description: "Sites web et landing pages développés pour des campagnes marketing",
      color: "from-sky-500 to-blue-500",
      icon: <Globe className="h-6 w-6 mb-2 mx-auto" />
    },
    {
      title: "Campagnes Marketing",
      value: "350+",
      description: "Campagnes marketing digital optimisées avec un taux de conversion élevé",
      color: "from-rose-500 to-pink-500",
      icon: <ChartBar className="h-6 w-6 mb-2 mx-auto" />
    }
  ];

  return (
    <section id="stats" className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-portfolio-purple/10 backdrop-blur-sm rounded-full text-portfolio-purple border border-portfolio-purple/20 text-sm font-medium mb-4">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
              </svg>
              <span className="font-poppins font-semibold tracking-wide">Expertise Internationale</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white bg-clip-text text-transparent bg-gradient-to-r from-portfolio-blue to-portfolio-purple">Expertise Globale</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Avec plus de 15 ans d'expérience dans le numérique, j'accompagne des organisations du monde entier 
            dans leur transformation digitale et le développement de solutions innovantes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center relative overflow-hidden group hover:border-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative z-10">
                <div className={`text-gradient bg-gradient-to-r ${stat.color}`}>
                  {stat.icon}
                </div>
                
                <motion.h3 
                  className={`text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
                >
                  {stat.value}
                </motion.h3>
                <h4 className="text-xl font-semibold mb-2 text-white">{stat.title}</h4>
                <p className="text-sm text-gray-300">{stat.description}</p>
              </div>
              
              {/* Background glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Decorative elements */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl"></div>
              <div className="absolute -left-4 -top-4 w-20 h-20 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-xl"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 max-w-3xl mx-auto hover:border-white/20 transition-all duration-300 transform hover:scale-[1.02]">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-portfolio-purple/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-portfolio-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2 2 7l10 5 10-5-10-5Z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gradient-cosmic">Mon Projet Phare : SenServices</h3>
            <p className="text-gray-300 mb-4">
              En plus de mon activité de conseil international, je développe SenServices, un projet innovant de plateforme 
              d'e-gouvernance visant à faciliter l'accès aux services administratifs au Sénégal.
            </p>
            <a 
              href="/projects/senservices"
              className="inline-block px-6 py-3 bg-gradient-to-r from-portfolio-blue to-portfolio-purple text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-cosmic-lg"
            >
              Découvrir SenServices
            </a>
          </div>
        </motion.div>
      </div>

      {/* Code elements in background */}
      <div className="absolute bottom-0 right-0 w-full h-20 opacity-10 overflow-hidden">
        <pre className="text-xs text-blue-400 font-mono">
          {`function optimizeDigitalTransformation(business) {
  const solutions = analyzeNeeds(business);
  return implementInnovation(solutions);
}`}
        </pre>
      </div>
    </section>
  );
};

export default Stats;
