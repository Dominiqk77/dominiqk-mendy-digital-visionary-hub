
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Phone, ShoppingCart, FileCode, Blocks, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import FloatingElements from '../../components/animations/FloatingElements';
import CosmicDivider from '../../components/animations/CosmicDivider';

const WebServices = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  useEffect(() => {
    // Set page title for SEO
    document.title = 'Services Web & Mobile | Dominique Mendy | Développeur Full Stack Sénégal';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Services de développement web et mobile par Dominique Mendy: sites web professionnels, applications mobile, e-commerce et solutions SaaS pour entreprises africaines.'
      );
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const webServices = [
    {
      icon: <Code size={40} />,
      title: "Développement Web Full Stack",
      description: "Création de sites et applications web complexes avec les technologies front-end et back-end les plus performantes.",
      technologies: ["React", "Vue.js", "Node.js", "Python", "PHP", "MongoDB", "PostgreSQL"]
    },
    {
      icon: <Phone size={40} />,
      title: "Applications Mobiles Native/Hybride",
      description: "Développement d'applications iOS et Android performantes, intuitives et parfaitement adaptées à vos besoins.",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"]
    },
    {
      icon: <ShoppingCart size={40} />,
      title: "E-Commerce & Marketplaces",
      description: "Création de boutiques en ligne et places de marché optimisées pour la conversion et l'expérience utilisateur.",
      technologies: ["WooCommerce", "Shopify", "Magento", "PrestaShop", "Custom Solutions"]
    },
    {
      icon: <FileCode size={40} />,
      title: "SaaS & Applications Cloud",
      description: "Conception d'applications métier en mode SaaS pour transformer votre idée en produit évolutif.",
      technologies: ["AWS", "Google Cloud", "Azure", "Microservices", "Docker", "Kubernetes"]
    },
    {
      icon: <Blocks size={40} />,
      title: "Développement No-Code/Low-Code",
      description: "Solutions rapides et économiques avec des plateformes comme Webflow, Bubble ou Adalo pour accélérer votre time-to-market.",
      technologies: ["Webflow", "Bubble", "Adalo", "Glide", "Airtable", "Zapier"]
    },
    {
      icon: <BadgeCheck size={40} />,
      title: "Audits Techniques & Optimisation",
      description: "Analyse approfondie de vos plateformes existantes pour améliorer les performances et la sécurité.",
      technologies: ["Web Vitals", "SEO", "Security Analysis", "Performance Optimization", "UX Review"]
    }
  ];

  const technologies = [
    { name: "React", icon: "/icons/react.svg" },
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Python", icon: "/icons/python.svg" },
    { name: "Firebase", icon: "/icons/firebase.svg" },
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
    { name: "Vue.js", icon: "/icons/vue.svg" },
    { name: "WordPress", icon: "/icons/wordpress.svg" },
    { name: "Next.js", icon: "/icons/nextjs.svg" },
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

  const techItem = {
    hidden: { scale: 0.8, opacity: 0 },
    show: { scale: 1, opacity: 1 }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="relative overflow-hidden py-20 md:py-28">
          {/* Animated background elements */}
          <FloatingElements count={12} variant="tech" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient-cosmic">
                Solutions Web & Mobile <span className="block">Innovantes</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Des applications modernes, performantes et évolutives 
                <span className="block mt-2">conçues pour répondre à vos besoins spécifiques</span>
              </p>
            </motion.div>

            {/* Tech icons */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"  
              className="flex flex-wrap justify-center gap-4 mt-12"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={techItem}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  whileHover={{ 
                    scale: 1.2,
                    transition: { duration: 0.3 } 
                  }}
                  className="technology-icon"
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full p-3 relative">
                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                    {hoveredTech === tech.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute -bottom-8 whitespace-nowrap bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded"
                      >
                        {tech.name}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <CosmicDivider variant="triangle" className="text-gray-900" />
        
        {/* Services section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-900/90 relative">
          <FloatingElements count={6} variant="tech" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Nos Services <span className="text-gradient-primary">Web & Mobile</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-primary animate-gradient-pulse mx-auto mb-6"></div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Des solutions de développement sur mesure pour tous vos projets numériques, 
                du site vitrine à l'application mobile complexe
              </p>
            </div>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {webServices.map((service, index) => (
                <motion.div 
                  key={index} 
                  variants={item}
                  whileHover={{ 
                    scale: 1.03, 
                    transition: { duration: 0.3 } 
                  }}
                  className="h-full"
                >
                  <Card className="cosmic-card h-full border-gray-800/40 hover:border-primary/40 bg-black/20 backdrop-blur-sm overflow-hidden transition-all duration-500">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
                    <CardHeader>
                      <div className="text-primary">
                        {service.icon}
                      </div>
                      <CardTitle className="mt-4 text-xl text-white">{service.title}</CardTitle>
                      <CardDescription className="text-gray-300 text-base">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-2">Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <CosmicDivider variant="wave" className="text-gray-900" />
        
        {/* Process section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
          <FloatingElements count={5} variant="data" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Notre <span className="text-gradient-cosmic">Processus</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Une approche rigoureuse et collaborative pour transformer votre vision en réalité
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { title: "1. Analyse", description: "Étude approfondie de vos besoins" },
                { title: "2. Conception", description: "Wireframes et prototypes interactifs" },
                { title: "3. Développement", description: "Code de qualité et tests continus" },
                { title: "4. Déploiement", description: "Mise en ligne et maintenance" },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-black/30 backdrop-blur-sm border border-primary/20 rounded-lg p-6 h-full">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                  
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/50"></div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center mt-20 bg-black/30 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-primary/20"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Prêt à <span className="text-gradient-cosmic">concrétiser</span> votre 
                <span className="text-gradient-cosmic"> projet digital</span>?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Contactez-moi pour discuter de vos besoins et obtenir un devis personnalisé pour votre projet web ou mobile.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.a 
                  href="/start-project" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-primary rounded-lg font-medium text-white hover:opacity-90 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  Démarrer un projet
                </motion.a>
                <motion.a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-primary/50 rounded-lg font-medium text-white hover:bg-primary/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  Contacter
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

export default WebServices;
