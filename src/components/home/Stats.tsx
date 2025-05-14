
import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  // Updated stats to reflect SenServices objectives and accurate information
  // Based on the website https://www.senservicesenegal.com/
  const stats = [
    {
      title: "Utilisateurs Prévus",
      value: "10M+",
      description: "Objectif d'utilisateurs actifs sur la plateforme d'ici 2026",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Économies Gouvernementales",
      value: "47Md FCFA",
      description: "Économies annuelles visées pour le gouvernement sénégalais",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Gain de Temps",
      value: "85%",
      description: "Objectif de réduction des délais dans les procédures administratives",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Services Digitalisés",
      value: "500+",
      description: "Services administratifs à digitaliser via notre plateforme",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Objectifs Ambitieux pour le Sénégal</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Projet initié en 2020 et lancé en version bêta en février 2025, SenServices vise à transformer radicalement 
            l'accès aux services administratifs pour tous les Sénégalais
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
            <h3 className="text-xl font-bold mb-3 text-white">Soutenez ce Projet Visionnaire</h3>
            <p className="text-gray-300 mb-4">
              Notre plateforme SenServices, actuellement en phase bêta, recherche activement des partenariats avec le gouvernement, 
              les ministères et les entreprises sénégalaises pour accélérer sa mise en œuvre et son impact sur le développement digital du pays.
            </p>
            <a 
              href="https://www.senservicesenegal.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
            >
              Télécharger l'application beta
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
