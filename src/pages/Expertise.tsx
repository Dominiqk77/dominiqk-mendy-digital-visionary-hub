
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { Check, Award, Bookmark, Zap, BookOpen, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Expertise = () => {
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

  const expertiseAreas = [
    {
      title: "Intelligence Artificielle",
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      description: "Développement de solutions IA personnalisées, machine learning, chatbots et systèmes de recommandation adaptés aux besoins spécifiques du marché africain.",
      points: [
        "Modèles prédictifs et analytiques",
        "Traitement du langage naturel (NLP)",
        "Vision par ordinateur",
        "Systèmes de recommandation",
        "Optimisation par IA"
      ]
    },
    {
      title: "Développement Web & Mobile",
      icon: <Zap className="h-8 w-8 text-primary" />,
      description: "Création d'applications web et mobile performantes, évolutives et sécurisées utilisant les technologies modernes adaptées aux infrastructures locales.",
      points: [
        "Applications web progressives (PWA)",
        "Applications mobiles natives et hybrides",
        "Sites e-commerce et marchés virtuels",
        "Systèmes de paiement mobile",
        "Architectures cloud et serverless"
      ]
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
      ]
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
      ]
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
      ]
    },
    {
      title: "Consulting Stratégique",
      icon: <Check className="h-8 w-8 text-primary" />,
      description: "Conseil en transformation digitale pour entreprises et startups africaines avec une approche centrée sur les spécificités du continent.",
      points: [
        "Audit et stratégie numérique",
        "Accompagnement à la transformation",
        "Innovation technologique adaptée",
        "Développement de produits digitaux",
        "Internationalisation et scaling"
      ]
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
                Mon Expertise
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8 text-muted-foreground"
              >
                Un savoir-faire africain au service de l'innovation numérique mondiale
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button size="lg" asChild>
                  <Link to="/contact">Discuter de votre projet</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Expertise Areas */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Domaines d'Expertise</h2>
            
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
                  className="bg-background rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-muted"
                >
                  <div className="p-3 rounded-full bg-primary/10 w-fit mb-4">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                  <p className="text-muted-foreground mb-4">{area.description}</p>
                  <ul className="space-y-2">
                    {area.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/20 to-background">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer vos idées en réalité?</h2>
              <p className="text-lg md:text-xl mb-8 text-muted-foreground">
                Mon expertise est à votre service pour vous accompagner dans tous vos projets d'innovation numérique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">Contactez-moi</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">Découvrir mes services</Link>
                </Button>
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
