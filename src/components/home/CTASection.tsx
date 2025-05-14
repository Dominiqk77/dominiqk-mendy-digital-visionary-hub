
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30 z-0"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
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
          className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"
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
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Participez à la Transformation Digitale du Sénégal
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-200">
              SenServices est un projet visionnaire initié en 2020 et lancé en version bêta en février 2025, 
              conçu pour révolutionner l'accès aux services administratifs et propulser le Sénégal dans l'ère 
              digitale. Nous recherchons activement des partenariats avec des entités gouvernementales et privées 
              pour accélérer son déploiement à l'échelle nationale.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-3 text-white">
                Pour les Citoyens
              </h3>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-center">
                  <div className="mr-2 text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Accès simplifié à plus de 500 services administratifs</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Économie de temps et d'argent considérable</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Réduction des déplacements et des procédures</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Transparence et suivi en temps réel des demandes</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-3 text-white">
                Pour le Gouvernement
              </h3>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-center">
                  <div className="mr-2 text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Économies budgétaires de 47 milliards FCFA par an</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Efficacité accrue des services publics</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Réduction de la bureaucratie et de la corruption</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Données analytiques pour améliorer les politiques</span>
                </li>
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
            <p className="text-gray-200 mb-6">
              Initié et développé entièrement par Dominiqk Mendy, fondateur de Millennium Capital Invest Ltd, 
              ce projet innovant a le potentiel de transformer radicalement la relation entre l'État et les citoyens, 
              tout en positionnant le Sénégal comme leader africain de l'e-gouvernance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors">
                <a 
                  href="https://www.senservicesenegal.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center"
                >
                  Télécharger la version bêta
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <a 
                  href="https://www.senservicesenegal.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Soumettre un partenariat
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
