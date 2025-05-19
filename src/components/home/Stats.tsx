
import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  // Updated stats to reflect your international career
  const stats = [
    {
      title: "Années d'expérience",
      value: "15+",
      description: "Dans le développement web, l'IA et la transformation digitale",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Clients Internationaux",
      value: "75+",
      description: "Projets menés avec succès pour des clients dans le monde entier",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Technologies Maîtrisées",
      value: "30+",
      description: "Compétences techniques avancées dans les technologies modernes",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Certifications",
      value: "12+",
      description: "Certifications internationales dans les domaines de pointe",
      color: "from-blue-500 to-indigo-500"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Expertise Internationale</h2>
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
              className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center relative overflow-hidden group"
            >
              <div className="relative z-10">
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
          <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-3 text-white">Mon Projet Phare : SenServices</h3>
            <p className="text-gray-300 mb-4">
              En plus de mon activité de conseil international, je développe SenServices, un projet innovant de plateforme 
              d'e-gouvernance visant à faciliter l'accès aux services administratifs au Sénégal.
            </p>
            <a 
              href="https://www.senservicesenegal.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
            >
              Découvrir SenServices
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
