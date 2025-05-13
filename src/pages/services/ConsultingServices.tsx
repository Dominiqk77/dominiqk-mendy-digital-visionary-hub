
import React, { useEffect } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Globe, Palette, Lightbulb, Users, Layout, Blocks } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import FloatingElements from '../../components/animations/FloatingElements';
import CosmicDivider from '../../components/animations/CosmicDivider';

const ConsultingServices = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Consulting Stratégique Digital | Dominique Mendy | Consultant Tech Sénégal';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Services de consulting stratégique par Dominique Mendy: transformation digitale, e-gouvernance, innovation et stratégie tech pour institutions et entreprises africaines.'
      );
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const consultingServices = [
    {
      icon: <Globe size={40} />,
      title: "E-Gouvernance & Services Publics",
      description: "Conseils et implémentation de solutions numériques pour moderniser les services gouvernementaux Africains.",
      cases: "Collaborations avec 3 ministères au Sénégal et en Côte d'Ivoire pour la digitalisation des services publics."
    },
    {
      icon: <Palette size={40} />,
      title: "Transformation Digitale",
      description: "Accompagnement stratégique pour digitaliser vos processus et adapter votre entreprise aux enjeux du numérique.",
      cases: "Plus de 50 entreprises accompagnées dans leur transformation numérique à travers l'Afrique."
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Innovation & R&D Numérique",
      description: "Exploration des technologies émergentes et développement de prototypes innovants pour votre entreprise.",
      cases: "Développement de solutions disruptives dans la santé, l'agriculture et l'éducation en Afrique."
    },
    {
      icon: <Users size={40} />,
      title: "Formation Executive Digital",
      description: "Programmes sur mesure pour les dirigeants Africains souhaitant maîtriser les enjeux de la révolution numérique.",
      cases: "Formation de plus de 200 cadres et dirigeants aux enjeux de la transformation digitale."
    },
    {
      icon: <Layout size={40} />,
      title: "Stratégie Data & IA",
      description: "Élaboration de feuilles de route pour valoriser vos données et implémenter l'IA dans votre organisation.",
      cases: "Accompagnement de grands groupes dans la mise en place de solutions d'intelligence artificielle."
    },
    {
      icon: <Blocks size={40} />,
      title: "Écosystème Tech Africain",
      description: "Conseils pour naviguer et tirer parti de l'écosystème technologique Africain en pleine expansion.",
      cases: "Mise en relation avec le réseau tech africain et accompagnement de startups locales."
    }
  ];

  const benefits = [
    "Expertise approfondie du marché africain",
    "Vision internationale et compréhension des standards globaux",
    "Approche pragmatique et orientée résultats",
    "Réseau étendu de partenaires technologiques",
    "Expérience concrète dans divers secteurs d'activité",
    "Compréhension des enjeux culturels et sociaux"
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="relative overflow-hidden py-20 md:py-28">
          {/* Animated background elements */}
          <FloatingElements count={12} variant="mixed" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient-cosmic">
                Consulting <span className="text-gradient-primary">Stratégique</span> Digital
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Expertise et conseil pour accompagner les entreprises et institutions africaines 
                <span className="block mt-2">dans leur transformation numérique</span>
              </p>
            </motion.div>

            {/* Value proposition */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 bg-black/30 backdrop-blur-sm border border-gray-800/40 rounded-xl p-6 md:p-10 max-w-3xl mx-auto"
            >
              <h2 className="text-2xl font-bold mb-6 text-white">Pourquoi choisir mon expertise ?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-primary mt-1">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-gray-300">{benefit}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <CosmicDivider variant="curve" inverted={true} className="text-gray-900" />
        
        {/* Services section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-900/90 relative">
          <FloatingElements count={6} variant="space" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Nos Services de <span className="text-gradient-primary">Consulting</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-primary animate-gradient-pulse mx-auto mb-6"></div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Des solutions de conseil adaptées aux défis spécifiques des organisations 
                africaines dans un monde en transformation rapide
              </p>
            </div>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {consultingServices.map((service, index) => (
                <motion.div 
                  key={index} 
                  variants={item}
                  whileHover={{ 
                    scale: 1.03, 
                    transition: { duration: 0.3 } 
                  }}
                  className="h-full"
                >
                  <Card className="cosmic-card h-full border-gray-800/40 hover:border-primary/40 bg-black/20 backdrop-blur-sm overflow-hidden transition-all duration-500 flex flex-col">
                    <CardHeader>
                      <div className="text-primary">
                        {service.icon}
                      </div>
                      <CardTitle className="mt-4 text-xl text-white">{service.title}</CardTitle>
                      <CardDescription className="text-gray-300 text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="bg-primary/10 border border-primary/20 rounded-md p-3 mt-2">
                        <p className="text-sm text-gray-300 italic">
                          <span className="text-primary font-semibold">Cas concrets : </span>
                          {service.cases}
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="p-0 text-primary hover:text-primary/80">
                        En savoir plus
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <CosmicDivider variant="wave" className="text-gray-900" />
        
        {/* Approach section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          <FloatingElements count={5} variant="data" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Notre <span className="text-gradient-cosmic">Approche</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Une méthodologie éprouvée pour guider votre transformation digitale
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Diagnostic", 
                  description: "Analyse approfondie de votre écosystème digital, identification des forces et faiblesses, benchmark concurrentiel.",
                  icon: "🔍"
                },
                {
                  title: "Stratégie", 
                  description: "Élaboration d'une feuille de route digitale claire, définition des objectifs et KPIs, allocation des ressources.",
                  icon: "🧠"
                },
                {
                  title: "Implémentation", 
                  description: "Accompagnement dans la mise en œuvre des solutions, formation des équipes, suivi et optimisation continue.",
                  icon: "🚀"
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-black/30 backdrop-blur-sm border border-gray-800/40 hover:border-primary/30 rounded-xl p-6 text-center transition-all duration-500"
                >
                  <div className="text-4xl mb-4">{phase.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{phase.title}</h3>
                  <p className="text-gray-300">{phase.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mt-20 bg-black/30 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-primary/20"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Besoin de <span className="text-gradient-cosmic">conseil stratégique</span> pour votre organisation?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Prenez rendez-vous pour une consultation initiale et discutons de votre vision et de vos défis.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-primary rounded-lg font-medium text-white hover:opacity-90 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  Prendre rendez-vous
                </motion.a>
                <motion.a 
                  href="/expertise" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-primary/50 rounded-lg font-medium text-white hover:bg-primary/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  Découvrir mon expertise
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ConsultingServices;
