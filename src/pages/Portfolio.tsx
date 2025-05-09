
import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Portfolio | Dominiqk Mendy | Projets & Réalisations';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Découvrez les projets et réalisations de Dominiqk Mendy en IA, développement web, marketing digital et transformation numérique pour entreprises et institutions en Afrique.'
      );
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  const [activeTab, setActiveTab] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "Plateforme E-commerce Adaptative",
      category: "web",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      description: "Solution e-commerce complète pour PME sénégalaises avec intégration paiement mobile et optimisation pour connexions bas débit.",
      tags: ["React", "Node.js", "Mobile Payment", "PWA"],
      link: "#"
    },
    {
      id: 2,
      title: "Assistant IA Education",
      category: "ai",
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      description: "Chatbot IA multilingue pour l'éducation, adapté au contexte africain et capable de fonctionner avec une connexion limitée.",
      tags: ["NLP", "Python", "TensorFlow", "Education"],
      link: "#"
    },
    {
      id: 3,
      title: "Campagne Marketing Digital Panafricaine",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      description: "Stratégie digitale intégrée pour une marque présente dans 12 pays africains, multipliant l'engagement par 4x.",
      tags: ["SEO", "SEM", "Social Media", "Analytics"],
      link: "#"
    },
    {
      id: 4,
      title: "Portail Citoyen Municipal",
      category: "governance",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      description: "Plateforme d'interaction citoyenne pour une municipalité sénégalaise facilitant les démarches administratives et la participation.",
      tags: ["E-Governance", "UX Design", "Security", "Mobile First"],
      link: "#"
    },
    {
      id: 5,
      title: "Système d'Analyse Prédictive Agricole",
      category: "ai",
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      description: "Solution IA d'analyse climatique et prédiction de rendements pour coopératives agricoles avec interface simple.",
      tags: ["Machine Learning", "Climate Data", "Agriculture", "Visualization"],
      link: "#"
    },
    {
      id: 6,
      title: "Application Mobile Santé Communautaire",
      category: "web",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      description: "App mobile pour agents de santé communautaire avec fonctionnement hors ligne et synchronisation intelligente.",
      tags: ["React Native", "Offline First", "Healthcare", "UX Research"],
      link: "#"
    },
    {
      id: 7,
      title: "Formation IA pour Cadres Dirigeants",
      category: "training",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      description: "Programme de formation sur mesure pour dirigeants d'entreprises sur l'intégration de l'IA dans leur stratégie.",
      tags: ["Executive Training", "AI Strategy", "Business Transformation"],
      link: "#"
    },
    {
      id: 8,
      title: "Stratégie de Contenu Multicanal",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      description: "Refonte complète de la stratégie contenu d'une fintech africaine augmentant le trafic organique de 310%.",
      tags: ["Content Strategy", "SEO", "Conversion", "Analytics"],
      link: "#"
    },
    {
      id: 9,
      title: "Système de Gestion Documentaire Sécurisé",
      category: "governance",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      description: "Solution de gestion documentaire pour institution publique avec signature électronique et traçabilité blockchain.",
      tags: ["Blockchain", "Security", "Document Management", "Compliance"],
      link: "#"
    }
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-background/80 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Portfolio
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8 text-muted-foreground"
              >
                Des projets innovants qui transforment le numérique en Afrique
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Portfolio Projects */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-3xl mx-auto mb-12">
              <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
                <TabsTrigger value="all">Tous</TabsTrigger>
                <TabsTrigger value="web">Web & Mobile</TabsTrigger>
                <TabsTrigger value="ai">IA</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
                <TabsTrigger value="governance">E-Gouvernance</TabsTrigger>
                <TabsTrigger value="training">Formation</TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab}>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      variants={itemVariants}
                      className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-muted/50"
                    >
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, index) => (
                            <span 
                              key={index}
                              className="text-xs bg-muted px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.link}
                          className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                        >
                          Voir le projet <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/20 to-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Vous avez un projet similaire en tête?</h2>
              <p className="text-lg md:text-xl mb-8 text-muted-foreground">
                Discutons ensemble de comment je peux vous aider à concrétiser votre vision et créer un impact durable.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Démarrer un projet <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
