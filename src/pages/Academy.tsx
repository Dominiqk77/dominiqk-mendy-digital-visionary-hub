
import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BookOpen, CircuitBoard, Server, Atom, Star, Database, Zap, Cpu } from 'lucide-react';

const AcademyPage = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Académie Digitale | Dominique Mendy | Formation Digital & IA';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Académie digitale par Dominique Mendy: formations et masterclass en développement, marketing digital, IA et innovation pour professionnels africains.'
      );
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  // Simulated academy statistics
  const [academyStats, setAcademyStats] = useState({
    totalStudents: 1284,
    coursesOffered: 8,
    avgSatisfaction: 96.7,
    certificationsAwarded: 754
  });

  // Simulate real-time data updates
  useEffect(() => {
    const statsInterval = setInterval(() => {
      setAcademyStats(prev => ({
        totalStudents: prev.totalStudents + (Math.random() > 0.8 ? 1 : 0),
        coursesOffered: prev.coursesOffered,
        avgSatisfaction: parseFloat((prev.avgSatisfaction + (Math.random() * 0.2 - 0.1)).toFixed(1)),
        certificationsAwarded: prev.certificationsAwarded + (Math.random() > 0.9 ? 1 : 0)
      }));
    }, 5000);
    
    return () => clearInterval(statsInterval);
  }, []);

  // Mock courses for the placeholder
  const futureCourses = [
    {
      id: 1,
      title: "Intelligence Artificielle pour Entrepreneurs",
      description: "Maîtrisez les fondamentaux de l'IA et apprenez à l'intégrer stratégiquement dans votre entreprise africaine.",
      duration: "8 semaines",
      level: "Intermédiaire",
      icon: <Atom className="h-8 w-8 text-portfolio-purple" />,
      status: "Coming Soon"
    },
    {
      id: 2,
      title: "Développement Web Full Stack",
      description: "Devenez un développeur web complet avec cette formation intensive couvrant le frontend, le backend et les API.",
      duration: "12 semaines",
      level: "Tous niveaux",
      icon: <Server className="h-8 w-8 text-portfolio-blue" />,
      status: "Coming Soon"
    },
    {
      id: 3,
      title: "Marketing Digital Stratégique",
      description: "Élaborez des stratégies de marketing digital adaptées au contexte africain pour maximiser votre impact.",
      duration: "6 semaines",
      level: "Débutant à Intermédiaire",
      icon: <Star className="h-8 w-8 text-portfolio-pink" />,
      status: "Coming Soon"
    },
    {
      id: 4,
      title: "Data Science et Analyse Prédictive",
      description: "Exploitez la puissance des données pour prendre des décisions éclairées et anticiper les tendances du marché.",
      duration: "10 semaines",
      level: "Avancé",
      icon: <Database className="h-8 w-8 text-portfolio-purple" />,
      status: "Coming Soon"
    },
    {
      id: 5,
      title: "Design UX/UI pour Applications Mobiles",
      description: "Créez des interfaces utilisateur intuitives et adaptées aux spécificités des utilisateurs africains.",
      duration: "8 semaines",
      level: "Intermédiaire",
      icon: <CircuitBoard className="h-8 w-8 text-portfolio-blue" />,
      status: "Coming Soon"
    },
    {
      id: 6,
      title: "Blockchain et Cryptomonnaies",
      description: "Comprenez les fondamentaux de la blockchain et son potentiel pour résoudre des problématiques africaines.",
      duration: "6 semaines",
      level: "Débutant à Intermédiaire",
      icon: <Cpu className="h-8 w-8 text-portfolio-pink" />,
      status: "Coming Soon"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Navbar />
      
      <main className="flex-grow bg-portfolio-darkblue text-white">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(30)].map((_, i) => (
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
          
          {/* Grid overlay */}
          <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none opacity-5">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-full w-px bg-gradient-to-b from-transparent via-portfolio-blue to-transparent"></div>
            ))}
            {[...Array(12)].map((_, i) => (
              <div key={i} className="absolute h-px w-full bg-gradient-to-r from-transparent via-portfolio-blue to-transparent" style={{ top: `${i * 8.33}%` }}></div>
            ))}
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                <span className="text-gradient">Académie</span> Digitale
              </motion.h1>
              
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-1 w-24 mx-auto mb-8 bg-gradient-to-r from-portfolio-purple via-portfolio-blue to-portfolio-pink"
              />
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
              >
                Formations et masterclass en développement, marketing digital, IA et innovation pour les professionnels africains
              </motion.p>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex justify-center gap-4 flex-wrap"
              >
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                  Explorer les cours
                </Button>
                <Button size="lg" variant="outline" className="border-gray-700 hover:border-white">
                  Programme personnalisé
                </Button>
              </motion.div>
            </div>
          </div>
          
          {/* Floating badges */}
          <div className="absolute left-[5%] top-[20%] opacity-60 hidden md:block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-black/30 backdrop-blur-sm border border-gray-700/50 px-3 py-1 rounded-full flex items-center"
            >
              <BookOpen className="h-4 w-4 mr-2 text-portfolio-purple" />
              <span className="text-xs">Apprentissage interactif</span>
            </motion.div>
          </div>
          
          <div className="absolute right-[10%] top-[30%] opacity-60 hidden md:block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-black/30 backdrop-blur-sm border border-gray-700/50 px-3 py-1 rounded-full flex items-center"
            >
              <Star className="h-4 w-4 mr-2 text-portfolio-pink" />
              <span className="text-xs">Certification reconnue</span>
            </motion.div>
          </div>
          
          <div className="absolute left-[15%] bottom-[20%] opacity-60 hidden md:block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-black/30 backdrop-blur-sm border border-gray-700/50 px-3 py-1 rounded-full flex items-center"
            >
              <Zap className="h-4 w-4 mr-2 text-portfolio-blue" />
              <span className="text-xs">Formateurs experts</span>
            </motion.div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-8 relative">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              <div className="p-4 border border-gray-800/40 backdrop-blur-sm rounded-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-portfolio-purple to-transparent"></div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-400">ÉTUDIANTS</span>
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                </div>
                <div className="text-2xl font-bold text-gradient">{academyStats.totalStudents}</div>
                <div className="text-xs text-gray-500">professionnels formés</div>
              </div>
              
              <div className="p-4 border border-gray-800/40 backdrop-blur-sm rounded-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-portfolio-blue to-transparent"></div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-400">COURS</span>
                  <span className="h-2 w-2 rounded-full bg-portfolio-blue animate-pulse"></span>
                </div>
                <div className="text-2xl font-bold text-gradient">{academyStats.coursesOffered}</div>
                <div className="text-xs text-gray-500">formations disponibles</div>
              </div>
              
              <div className="p-4 border border-gray-800/40 backdrop-blur-sm rounded-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-portfolio-pink to-transparent"></div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-400">SATISFACTION</span>
                  <span className="h-2 w-2 rounded-full bg-portfolio-pink animate-pulse"></span>
                </div>
                <div className="text-2xl font-bold text-gradient">{academyStats.avgSatisfaction}%</div>
                <div className="text-xs text-gray-500">taux de satisfaction</div>
              </div>
              
              <div className="p-4 border border-gray-800/40 backdrop-blur-sm rounded-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-400">CERTIFICATS</span>
                  <span className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse"></span>
                </div>
                <div className="text-2xl font-bold text-gradient">{academyStats.certificationsAwarded}</div>
                <div className="text-xs text-gray-500">certifications délivrées</div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Coming Soon Section */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Coming Soon Notice */}
              <Card className="mb-12 border-gradient border-gradient-strong backdrop-blur-sm bg-black/40 p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4">Notre académie arrive bientôt</h2>
                    <p className="text-gray-300 mb-6">
                      Notre programme de formation est en cours de développement avec les meilleurs experts africains et internationaux pour vous offrir des contenus de qualité parfaitement adaptés aux réalités du marché africain.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                        S'inscrire à la liste d'attente
                      </Button>
                      <Button variant="outline" className="border-gray-700 hover:border-white">
                        Programmes d'entreprise
                      </Button>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="h-32 w-32 flex items-center justify-center border-2 border-portfolio-purple rounded-full relative">
                      <div className="absolute inset-2 border border-portfolio-blue rounded-full animate-pulse opacity-75"></div>
                      <div className="absolute inset-4 border border-portfolio-pink rounded-full animate-spin opacity-50" style={{ animationDuration: '10s' }}></div>
                      <BookOpen className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-primary opacity-25 rounded-full blur-xl"></div>
                  </div>
                </div>
              </Card>
              
              {/* Future Courses */}
              <h2 className="text-2xl font-bold mb-8 flex items-center">
                <BookOpen className="h-5 w-5 text-portfolio-blue mr-2" />
                <span>Formations à venir</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {futureCourses.map((course, index) => (
                  <motion.div 
                    key={course.id}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                    className="border border-gray-800/40 rounded-lg backdrop-blur-sm relative overflow-hidden"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(155, 135, 245, 0.15)" }}
                  >
                    {/* Tech decoration line top */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-portfolio-purple to-transparent"></div>
                    
                    <div className="p-6 relative">
                      <div className="absolute top-3 right-3 px-2 py-1 text-xs rounded-full border border-gray-700 bg-black/30 text-gray-400 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-portfolio-blue animate-pulse mr-1.5"></span>
                        {course.status}
                      </div>
                      
                      <div className="mb-4 p-3 bg-black/30 rounded-lg inline-block">
                        {course.icon}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                      <p className="text-gray-400 mb-4 text-sm">{course.description}</p>
                      
                      <div className="flex justify-between text-xs text-gray-500 mb-4">
                        <span className="flex items-center">
                          <Server className="h-3 w-3 mr-1" />
                          {course.duration}
                        </span>
                        <span className="flex items-center">
                          <Database className="h-3 w-3 mr-1" />
                          {course.level}
                        </span>
                      </div>
                      
                      <Button 
                        disabled 
                        className="w-full bg-black/30 border border-gray-700 text-gray-400 hover:border-gray-600"
                      >
                        Pré-inscription
                      </Button>
                    </div>
                    
                    {/* Tech background pattern */}
                    <div className="absolute bottom-2 right-2 w-16 h-16 opacity-5">
                      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H12V12H0V0Z" fill="currentColor" />
                        <path d="M16 0H28V12H16V0Z" fill="currentColor" />
                        <path d="M32 0H44V12H32V0Z" fill="currentColor" />
                        <path d="M0 16H12V28H0V16Z" fill="currentColor" />
                        <path d="M32 16H44V28H32V16Z" fill="currentColor" />
                        <path d="M0 32H12V44H0V32Z" fill="currentColor" />
                        <path d="M16 32H28V44H16V32Z" fill="currentColor" />
                        <path d="M32 32H44V44H32V32Z" fill="currentColor" />
                      </svg>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Academy Features */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden opacity-5">
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(30)].map((_, i) => (
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
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold mb-4"
                >
                  Notre approche pédagogique
                </motion.h2>
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  className="h-1 w-24 mx-auto mb-6 bg-gradient-to-r from-portfolio-purple via-portfolio-blue to-portfolio-pink"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <BookOpen className="h-10 w-10 text-portfolio-purple" />,
                    title: "Apprentissage Pratique",
                    description: "Formations axées sur la pratique avec des projets concrets adaptés au marché africain."
                  },
                  {
                    icon: <Cpu className="h-10 w-10 text-portfolio-blue" />,
                    title: "Formateurs Experts",
                    description: "Professionnels africains et internationaux partageant leur expertise concrète du terrain."
                  },
                  {
                    icon: <Star className="h-10 w-10 text-portfolio-pink" />,
                    title: "Certification Reconnue",
                    description: "Obtenez des certifications valorisées par les recruteurs et les grands groupes."
                  },
                  {
                    icon: <CircuitBoard className="h-10 w-10 text-portfolio-purple" />,
                    title: "Contenus Adaptés",
                    description: "Programmes conçus pour répondre aux défis et opportunités spécifiques du continent africain."
                  },
                  {
                    icon: <Server className="h-10 w-10 text-portfolio-blue" />,
                    title: "Networking Professionnel",
                    description: "Intégrez une communauté d'apprenants et de professionnels partageant les mêmes ambitions."
                  },
                  {
                    icon: <Zap className="h-10 w-10 text-portfolio-pink" />,
                    title: "Suivi Personnalisé",
                    description: "Bénéficiez d'un accompagnement individuel pour maximiser votre progression."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 border border-gray-800/40 rounded-lg backdrop-blur-sm relative"
                  >
                    {/* Tech decoration line top */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-portfolio-purple to-transparent"></div>
                    
                    <div className="p-3 rounded-lg bg-black/30 inline-block mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-portfolio-darkblue to-black relative overflow-hidden">
          {/* Grid overlay */}
          <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none opacity-5">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-full w-px bg-gradient-to-b from-transparent via-portfolio-blue to-transparent"></div>
            ))}
            {[...Array(12)].map((_, i) => (
              <div key={i} className="absolute h-px w-full bg-gradient-to-r from-transparent via-portfolio-blue to-transparent" style={{ top: `${i * 8.33}%` }}></div>
            ))}
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Prêt à développer vos compétences?
              </motion.h2>
              
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                className="h-1 w-24 mx-auto mb-6 bg-gradient-to-r from-portfolio-purple via-portfolio-blue to-portfolio-pink"
              />
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-300 mb-8"
              >
                Rejoignez notre liste d'attente pour être informé du lancement de notre académie et bénéficier d'offres exclusives pour nos premiers étudiants.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input 
                  type="email"
                  placeholder="Votre adresse email"
                  className="px-4 py-3 bg-black/50 border border-gray-700 rounded-lg flex-1 text-white"
                />
                <Button className="bg-gradient-primary hover:opacity-90">
                  Rejoindre la liste
                </Button>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-sm text-gray-500"
              >
                Nous respectons votre vie privée. Vous pouvez vous désinscrire à tout moment.
              </motion.p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AcademyPage;
