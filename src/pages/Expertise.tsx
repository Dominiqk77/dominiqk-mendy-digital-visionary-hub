
import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Check, Award, Bookmark, Zap, 
  BookOpen, Lightbulb, Server, Database, 
  CircuitBoard, Atom, Star, Layers
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Space particles background component
const SpaceBackground = () => {
  const [stars, setStars] = useState<{id: number, x: number, y: number, size: number, opacity: number}[]>([]);
  
  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 150 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 0.5,
        opacity: Math.random() * 0.7 + 0.3
      }));
      setStars(newStars);
    };
    
    generateStars();
    
    // Regenerate some stars periodically for subtle animation
    const interval = setInterval(() => {
      setStars(prev => {
        const newStars = [...prev];
        for (let i = 0; i < 10; i++) {
          const randomIndex = Math.floor(Math.random() * newStars.length);
          newStars[randomIndex] = {
            ...newStars[randomIndex],
            opacity: Math.random() * 0.7 + 0.3
          };
        }
        return newStars;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0">
        {stars.map(star => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-blue-100"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              boxShadow: `0 0 ${star.size * 2}px rgba(147, 197, 253, ${star.opacity})`,
            }}
            animate={{
              opacity: [star.opacity, star.opacity * 1.5, star.opacity],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Moving nebula component
const NebulaBg = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-[10%] left-[10%] w-[70%] h-[60%] rounded-full bg-indigo-500/30 blur-[120px] animate-float" style={{ animationDuration: '15s' }}></div>
        <div className="absolute top-[30%] right-[20%] w-[40%] h-[50%] rounded-full bg-purple-500/20 blur-[100px] animate-float" style={{ animationDuration: '20s', animationDelay: '2s' }}></div>
        <div className="absolute bottom-[10%] left-[30%] w-[60%] h-[40%] rounded-full bg-blue-500/20 blur-[150px] animate-float" style={{ animationDuration: '25s', animationDelay: '5s' }}></div>
      </div>
    </div>
  );
};

// Technology nodes animation component
const TechNodes = () => {
  // Points for the tech nodes
  const [points, setPoints] = useState<{id: number, x: number, y: number, size: number}[]>([]);
  
  // Generate random points
  useEffect(() => {
    const newPoints = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2
    }));
    setPoints(newPoints);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-25">
        {points.map((point) => (
          <motion.div 
            key={point.id}
            className="absolute w-2 h-2 bg-portfolio-blue rounded-full"
            style={{ 
              left: `${point.x}%`, 
              top: `${point.y}%`, 
              width: `${point.size}px`,
              height: `${point.size}px`
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
              boxShadow: ['0 0 0px rgba(14, 165, 233, 0)', '0 0 10px rgba(14, 165, 233, 0.5)', '0 0 0px rgba(14, 165, 233, 0)'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: point.id * 0.2
            }}
          />
        ))}
        
        {/* Connect some nodes with lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {points.slice(0, 18).map((point, i) => {
            const nextPoint = points[(i + 1) % points.length];
            if (Math.abs(point.x - nextPoint.x) < 30 && Math.abs(point.y - nextPoint.y) < 30) {
              return (
                <motion.line 
                  key={`line-${i}`}
                  x1={`${point.x}%`}
                  y1={`${point.y}%`}
                  x2={`${nextPoint.x}%`}
                  y2={`${nextPoint.y}%`}
                  stroke="#0EA5E9"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.15 }}
                  transition={{ duration: 2, delay: i * 0.2 }}
                />
              );
            }
            return null;
          })}
        </svg>
      </div>
    </div>
  );
};

// Futuristic grid component
const FuturisticGrid = () => {
  return (
    <div className="absolute inset-0 tech-grid opacity-10 pointer-events-none"></div>
  );
};

// Data flow animation component
const DataFlowAnimation = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 data-grid">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-portfolio-blue/0 via-portfolio-blue/30 to-portfolio-blue/0"
            style={{
              left: `${10 + i * 8}%`,
              top: '0%',
              animation: `data-flow ${3 + i * 0.5}s infinite linear`,
              animationDelay: `${i * 0.7}s`
            }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-portfolio-purple/0 via-portfolio-purple/20 to-portfolio-purple/0"
            style={{
              right: `${15 + i * 9}%`,
              top: '0%',
              animation: `data-flow ${4 + i * 0.3}s infinite linear`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Expertise = () => {
  // Ref for scroll animations
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  useEffect(() => {
    // Set page title for SEO
    document.title = 'Expertise | Dominiqk Mendy | Compétences Numériques & IA';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Découvrez l\'expertise de Dominiqk Mendy en innovation numérique, intelligence artificielle, développement web, marketing digital et transformation digitale pour entreprises Africaines.'
      );
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Simulated real-time tech stats
  const [techStats, setTechStats] = useState({
    aiAccuracy: 97.8,
    serverUptime: 99.95,
    projectCompletion: 94.2,
    clientSatisfaction: 98.6
  });

  // Simulate real-time data updates
  useEffect(() => {
    const statInterval = setInterval(() => {
      setTechStats(prev => ({
        aiAccuracy: parseFloat((prev.aiAccuracy + (Math.random() * 0.2 - 0.1)).toFixed(1)),
        serverUptime: parseFloat((prev.serverUptime + (Math.random() * 0.1 - 0.05)).toFixed(2)),
        projectCompletion: parseFloat((prev.projectCompletion + (Math.random() * 0.3 - 0.15)).toFixed(1)),
        clientSatisfaction: parseFloat((prev.clientSatisfaction + (Math.random() * 0.2 - 0.1)).toFixed(1))
      }));
    }, 5000);
    
    return () => clearInterval(statInterval);
  }, []);

  const expertiseAreas = [
    {
      title: "Intelligence Artificielle",
      icon: <Atom className="h-8 w-8 text-primary" />,
      description: "Développement de solutions IA personnalisées, machine learning, chatbots et systèmes de recommandation adaptés aux besoins spécifiques du marché africain.",
      points: [
        "Modèles prédictifs et analytiques",
        "Traitement du langage naturel (NLP)",
        "Vision par ordinateur",
        "Systèmes de recommandation",
        "Optimisation par IA"
      ],
      techStat: `${techStats.aiAccuracy}% précision`
    },
    {
      title: "Développement Web & Mobile",
      icon: <CircuitBoard className="h-8 w-8 text-primary" />,
      description: "Création d'applications web et mobile performantes, évolutives et sécurisées utilisant les technologies modernes adaptées aux infrastructures locales.",
      points: [
        "Applications web progressives (PWA)",
        "Applications mobiles natives et hybrides",
        "Sites e-commerce et marchés virtuels",
        "Systèmes de paiement mobile",
        "Architectures cloud et serverless"
      ],
      techStat: `${techStats.serverUptime}% uptime`
    },
    {
      title: "Marketing Numérique",
      icon: <Bookmark className="h-8 w-8 text-primary" />,
      description: "Stratégies digitales sur mesure pour accroître la visibilité, générer des leads qualifiés et fidéliser votre clientèle en Afrique et à l'international.",
      points: [
        "SEO/SEM adapté aux marchés africains",
        "Campagnes publicitaires multicanales",
        "Stratégies de contenu et d'influence",
        "Marketing d'automation et CRM",
        "Analyse de données et optimisation"
      ],
      techStat: `${techStats.clientSatisfaction}% satisfaction`
    },
    {
      title: "E-Gouvernance",
      icon: <Award className="h-8 w-8 text-primary" />,
      description: "Accompagnement des institutions publiques dans leur transformation numérique pour améliorer les services aux citoyens et l'efficacité administrative.",
      points: [
        "Portails de services citoyens",
        "Systèmes de gestion documentaire",
        "Solutions de participation citoyenne",
        "Sécurisation des données publiques",
        "Formation des fonctionnaires"
      ],
      techStat: `${techStats.projectCompletion}% réussite`
    },
    {
      title: "Formation & Transfert de Compétences",
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      description: "Programmes de formation et mentorat pour développer les compétences numériques locales et favoriser l'autonomie technologique.",
      points: [
        "Bootcamps technologiques intensifs",
        "Formations IA pour décideurs",
        "Programmes d'accompagnement startup",
        "Certification en développement web",
        "Ateliers design thinking"
      ],
      techStat: `${techStats.clientSatisfaction}% satisfaction`
    },
    {
      title: "Consulting Stratégique",
      icon: <Star className="h-8 w-8 text-primary" />,
      description: "Conseil en transformation digitale pour entreprises et startups africaines avec une approche centrée sur les spécificités du continent.",
      points: [
        "Audit et stratégie numérique",
        "Accompagnement à la transformation",
        "Innovation technologique adaptée",
        "Développement de produits digitaux",
        "Internationalisation et scaling"
      ],
      techStat: `${techStats.projectCompletion}% complétion`
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      } 
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-b from-gray-950 via-portfolio-darkblue to-black">
      <Navbar />
      
      {/* Background elements */}
      <SpaceBackground />
      <NebulaBg />
      <FuturisticGrid />
      
      <main className="flex-grow pt-20 relative">
        {/* Hero Section */}
        <section ref={sectionRef} className="py-16 md:py-24 relative overflow-hidden">
          <DataFlowAnimation />
          
          {/* Grid overlay */}
          <div className="absolute inset-0 grid grid-cols-12 pointer-events-none opacity-5">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-full w-px bg-gradient-to-b from-transparent via-portfolio-blue/30 to-transparent"></div>
            ))}
            {[...Array(12)].map((_, i) => (
              <div key={i} className="absolute h-px w-full bg-gradient-to-r from-transparent via-portfolio-blue/30 to-transparent" style={{ top: `${i * 8.33}%` }}></div>
            ))}
          </div>
          
          {/* Main content */}
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              variants={heroVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                animate={{ 
                  opacity: [0.1, 0.2, 0.1],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-portfolio-purple blur-[80px]"
              />
              
              <motion.h1 
                variants={childVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative"
              >
                Mon <span className="relative">
                  <span className="text-gradient">Expertise</span>
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-portfolio-blue to-transparent"></span>
                </span>
              </motion.h1>
              
              <motion.div 
                variants={childVariants}
                className="h-[1px] w-24 mx-auto mb-8 bg-gradient-to-r from-portfolio-purple via-portfolio-blue to-portfolio-pink"
              />
              
              <motion.p 
                variants={childVariants}
                className="text-xl md:text-2xl mb-8 text-gray-300"
              >
                Un savoir-faire africain au service de <span className="text-gradient">l'innovation numérique</span> mondiale
              </motion.p>
              
              <motion.div
                variants={childVariants}
                className="flex flex-wrap justify-center gap-4 mt-8"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
                  asChild
                >
                  <Link to="/contact">Discuter de votre projet</Link>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border border-gray-700/50 hover:border-white transition-colors backdrop-blur-sm"
                  asChild
                >
                  <Link to="/services">Explorer les services</Link>
                </Button>
              </motion.div>
              
              {/* Animated status indicators */}
              <motion.div 
                variants={childVariants}
                className="flex justify-center space-x-8 mt-16 text-sm"
              >
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2"></span>
                  <span>Système actif</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-portfolio-blue animate-pulse mr-2"></span>
                  <span>Données en direct</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-portfolio-pink animate-pulse mr-2"></span>
                  <span>IA opérationnelle</span>
                </div>
              </motion.div>
              
              {/* Floating elements */}
              <div className="absolute top-1/4 left-1/4 w-4 h-4">
                <motion.div 
                  className="w-full h-full bg-portfolio-purple/20 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </div>
              <div className="absolute bottom-1/4 right-1/4 w-6 h-6">
                <motion.div 
                  className="w-full h-full bg-portfolio-blue/20 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1
                  }}
                />
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Expertise Areas */}
        <section className="py-16 md:py-24 relative">
          {/* Tech nodes in background */}
          <TechNodes />
          
          {/* Background gradient */}
          <div className="absolute inset-0">
            <div className="absolute bottom-0 left-1/4 w-1/2 h-1/2 bg-portfolio-purple opacity-5 rounded-full blur-[150px]"></div>
            <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-portfolio-pink opacity-5 rounded-full blur-[120px]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Domaines d'Expertise</h2>
            
            <motion.div 
              className="h-1 w-24 mx-auto mb-16 bg-gradient-to-r from-portfolio-purple via-portfolio-blue to-portfolio-pink"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {expertiseAreas.map((area, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 relative overflow-hidden cosmic-card"
                  whileHover={{ 
                    scale: 1.02, 
                    boxShadow: "0 0 25px rgba(155, 135, 245, 0.15)" 
                  }}
                >
                  {/* Tech decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="40" cy="40" r="20" stroke="currentColor" strokeWidth="1" />
                      <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="0.5" />
                      <circle cx="40" cy="40" r="40" stroke="currentColor" strokeWidth="0.25" />
                    </svg>
                  </div>
                  
                  {/* Tech decoration line top */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-portfolio-purple to-transparent"></div>
                  
                  <div className="p-3 rounded-full bg-primary/10 w-fit mb-4 relative">
                    {area.icon}
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  </div>
                  
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold">{area.title}</h3>
                    <div className="text-xs px-2 py-1 rounded-full border border-gray-700/40 bg-gray-800/30 flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse mr-1.5"></span>
                      {area.techStat}
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-4">{area.description}</p>
                  
                  <ul className="space-y-2">
                    {area.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Animated data line */}
                  <div className="absolute bottom-4 right-4 h-[30px] w-[60px]">
                    <svg width="60" height="30" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
                      <motion.polyline
                        points="0,15 10,10 20,20 30,5 40,25 50,15 60,10"
                        fill="none"
                        stroke="rgba(14, 165, 233, 0.5)"
                        strokeWidth="1"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.5 }}
                        transition={{ duration: 2, delay: index * 0.1 }}
                      />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Real-time technology metrics */}
        <section className="py-10 relative overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-12 pointer-events-none opacity-5">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-full w-px bg-gradient-to-b from-transparent via-portfolio-blue to-transparent"></div>
            ))}
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="border border-gray-800/40 backdrop-blur-sm rounded-xl p-6 cosmic-card">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold flex items-center">
                  <Layers className="h-5 w-5 mr-2 text-portfolio-blue" />
                  Capacités Techniques
                </h3>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2"></span>
                  <span className="text-sm text-gray-400">MONITORING ACTIF</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <motion.div 
                  className="p-4 border border-gray-800/30 rounded-lg bg-black/20"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(155, 135, 245, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">IA ACCURACY</span>
                    <Server className="h-4 w-4 text-portfolio-purple" />
                  </div>
                  <div className="text-2xl font-bold mb-2">{techStats.aiAccuracy}%</div>
                  <div className="h-1 w-full bg-gray-800 rounded overflow-hidden">
                    <motion.div 
                      className="h-full bg-portfolio-purple"
                      initial={{ width: "0%" }}
                      animate={{ width: `${techStats.aiAccuracy}%` }}
                      transition={{ duration: 1, type: "spring" }}
                    ></motion.div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="p-4 border border-gray-800/30 rounded-lg bg-black/20"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(14, 165, 233, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">UPTIME</span>
                    <Database className="h-4 w-4 text-portfolio-blue" />
                  </div>
                  <div className="text-2xl font-bold mb-2">{techStats.serverUptime}%</div>
                  <div className="h-1 w-full bg-gray-800 rounded overflow-hidden">
                    <motion.div 
                      className="h-full bg-portfolio-blue"
                      initial={{ width: "0%" }}
                      animate={{ width: `${techStats.serverUptime}%` }}
                      transition={{ duration: 1, type: "spring", delay: 0.2 }}
                    ></motion.div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="p-4 border border-gray-800/30 rounded-lg bg-black/20"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(212, 70, 239, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">PROJETS</span>
                    <CircuitBoard className="h-4 w-4 text-portfolio-pink" />
                  </div>
                  <div className="text-2xl font-bold mb-2">{techStats.projectCompletion}%</div>
                  <div className="h-1 w-full bg-gray-800 rounded overflow-hidden">
                    <motion.div 
                      className="h-full bg-portfolio-pink"
                      initial={{ width: "0%" }}
                      animate={{ width: `${techStats.projectCompletion}%` }}
                      transition={{ duration: 1, type: "spring", delay: 0.4 }}
                    ></motion.div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="p-4 border border-gray-800/30 rounded-lg bg-black/20"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(234, 179, 8, 0.1)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">SATISFACTION</span>
                    <Star className="h-4 w-4 text-yellow-500" />
                  </div>
                  <div className="text-2xl font-bold mb-2">{techStats.clientSatisfaction}%</div>
                  <div className="h-1 w-full bg-gray-800 rounded overflow-hidden">
                    <motion.div 
                      className="h-full bg-yellow-500"
                      initial={{ width: "0%" }}
                      animate={{ width: `${techStats.clientSatisfaction}%` }}
                      transition={{ duration: 1, type: "spring", delay: 0.6 }}
                    ></motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-portfolio-darkblue to-black relative overflow-hidden">
          {/* Animated stars */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(30)].map((_, i) => (
                <motion.div 
                  key={i}
                  className="absolute rounded-full bg-portfolio-blue"
                  style={{
                    width: `${Math.random() * 3 + 1}px`,
                    height: `${Math.random() * 3 + 1}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: Math.random() * 2
                  }}
                />
              ))}
            </div>
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-portfolio-purple opacity-10 rounded-full blur-[100px]" />
          </div>
          
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Prêt à transformer vos idées en réalité?
              </motion.h2>
              
              <motion.div 
                className="h-1 w-24 mx-auto mb-8 bg-gradient-to-r from-portfolio-purple via-portfolio-blue to-portfolio-pink"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
              
              <motion.p 
                className="text-lg md:text-xl mb-8 text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Mon expertise est à votre service pour vous accompagner dans tous vos projets d'innovation numérique.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
                  asChild
                >
                  <Link to="/contact">Contactez-moi</Link>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border border-gray-700/50 hover:border-white transition-colors backdrop-blur-sm"
                  asChild
                >
                  <Link to="/services">Découvrir mes services</Link>
                </Button>
              </motion.div>
              
              {/* Tech decoration - animated data flow lines */}
              <div className="flex justify-center space-x-8 mt-12 opacity-50">
                {[...Array(5)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                  >
                    <div 
                      className="w-1 h-12 bg-gradient-to-b from-transparent via-portfolio-blue to-transparent"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    ></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Expertise;

