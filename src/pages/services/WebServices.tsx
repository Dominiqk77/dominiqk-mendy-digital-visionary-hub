
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Code, FileCode, Globe, Database, Layout, Rocket, Users, Phone, ShoppingCart, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Space background animation component for web services
const WebSpaceBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Code grid background with subtle animation */}
      <div className="absolute inset-0 bg-black opacity-5">
        <div className="tech-grid w-full h-full"></div>
      </div>
      
      {/* Floating code snippets */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`code-${i}`}
          className="absolute bg-gray-100/10 backdrop-blur-sm rounded-md p-2 text-xs font-mono text-primary/60 border border-gray-200/20"
          style={{
            left: `${10 + (i * 15)}%`,
            top: `${5 + (i * 12)}%`,
            width: `${120 + (i * 20)}px`,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 0.6, 
            y: [0, -10, 0],
            rotateZ: [0, i % 2 === 0 ? 2 : -2, 0]
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: i * 0.5
          }}
        >
          {i % 2 === 0 ? 
            '<div className="web-service">' : 
            i % 3 === 0 ? 
            'function createSolution() {' :
            'const webApp = new WebApp();'
          }
        </motion.div>
      ))}
      
      {/* Abstract UI wireframes */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div 
          key={`wireframe-${i}`}
          className="absolute rounded-lg border border-gray-300/20 bg-white/5"
          style={{
            right: `${8 + (i * 10)}%`,
            bottom: `${15 + (i * 8)}%`,
            width: `${80 + (i * 10)}px`,
            height: `${120 + (i * 15)}px`,
          }}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: i * 0.8
          }}
        >
          <div className="w-full h-3 bg-gray-200/10 rounded-t-lg"></div>
          <div className="flex flex-col p-2 gap-1">
            <div className="w-3/4 h-2 bg-gray-200/10 rounded"></div>
            <div className="w-1/2 h-2 bg-gray-200/10 rounded"></div>
            <div className="w-5/6 h-2 bg-gray-200/10 rounded mt-2"></div>
          </div>
        </motion.div>
      ))}
      
      {/* Data flow lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          d="M100,100 C150,150 200,50 250,200 S350,150 400,300"
          stroke="rgba(14, 165, 233, 0.2)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="10,10"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
        />
        <motion.path 
          d="M500,100 C450,200 350,150 300,250 S200,300 150,400"
          stroke="rgba(139, 92, 246, 0.2)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="10,10"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "loop", delay: 1 }}
        />
      </svg>
    </div>
  );
};

const WebServices = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Services Web & Mobile Premium | Dominique Mendy | Développeur Full Stack Sénégal';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Services de développement web et mobile par Dominique Mendy: sites web professionnels, applications mobile, e-commerce et solutions SaaS pour entreprises africaines et internationales. Expert reconnu en France, UK, USA et Afrique de l\'Ouest.'
      );
    }
    
    // Set meta keywords for SEO
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 
        'développement web Sénégal, applications mobile Afrique, sites internet Dakar, e-commerce Côte d\'Ivoire, développeur full stack, SaaS Africa, expert web France, développement offshore UK, web apps USA, Dominique Mendy tech'
      );
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Web service categories
  const webCategories = [
    { id: "all", name: "Tous les services" },
    { id: "websites", name: "Sites Web" },
    { id: "applications", name: "Applications" },
    { id: "ecommerce", name: "E-Commerce" },
    { id: "maintenance", name: "Support & Maintenance" }
  ];

  // Projects showcase
  const projectShowcase = [
    {
      title: "Plateforme E-commerce Omnicanal",
      client: "Commerce International (Sénégal)",
      description: "Développement d'une plateforme e-commerce complète avec intégration mobile money, carte bancaire et livraison dans toute l'Afrique de l'Ouest.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      image: "/projects/ecommerce-platform.jpg"
    },
    {
      title: "Application Mobile de Logistique",
      client: "Entreprise de Transport (France/Sénégal)",
      description: "Application mobile de suivi de livraison en temps réel pour une entreprise opérant entre la France et le Sénégal.",
      technologies: ["React Native", "Firebase", "Google Maps API"],
      image: "/projects/logistics-app.jpg"
    },
    {
      title: "Portail Intranet Enterprise",
      client: "Multinationale (UK)",
      description: "Développement d'un portail intranet sécurisé pour faciliter la communication et la gestion documentaire d'une entreprise internationale.",
      technologies: ["Angular", "ASP.NET Core", "SQL Server", "Azure"],
      image: "/projects/intranet-portal.jpg"
    },
  ];

  // Comprehensive web services
  const webServices = [
    {
      icon: <Code size={40} />,
      title: "Développement Web Full Stack",
      description: "Création de sites et applications web complexes avec les technologies front-end et back-end les plus performantes. Solutions sur mesure parfaitement adaptées à vos besoins business et techniques.",
      features: ["Architectures modernes et évolutives", "Performance et sécurité optimisées", "Compatibilité multi-navigateurs et responsive", "Intégration d'API tierces"],
      price: "À partir de 2.5M FCFA",
      category: "websites"
    },
    {
      icon: <Phone size={40} />,
      title: "Applications Mobiles Native/Hybride",
      description: "Développement d'applications iOS et Android performantes, intuitives et parfaitement adaptées à vos besoins. Expérience utilisateur fluide et fonctionnalités avancées pour satisfaire vos utilisateurs.",
      features: ["Développement iOS et Android", "Applications hybrides avec React Native", "Design UI/UX mobile premium", "Intégration avec les services natifs (caméra, GPS, etc.)"],
      price: "À partir de 3M FCFA",
      category: "applications"
    },
    {
      icon: <ShoppingCart size={40} />,
      title: "E-Commerce & Marketplaces",
      description: "Création de boutiques en ligne et places de marché optimisées pour la conversion et l'expérience utilisateur. Solutions complètes intégrant paiement, gestion des stocks et livraison.",
      features: ["Intégration de multiples moyens de paiement africains", "Gestion avancée des produits et stocks", "Optimisation pour le SEO et le mobile", "Tableau de bord administrateur complet"],
      price: "À partir de 2M FCFA",
      category: "ecommerce"
    },
    {
      icon: <FileCode size={40} />,
      title: "SaaS & Applications Cloud",
      description: "Conception d'applications métier en mode SaaS pour transformer votre idée en produit évolutif. Architecture cloud robuste permettant une mise à l'échelle rapide et efficace.",
      features: ["Conception d'architecture multi-tenant", "Modèles d'abonnement et gestion des utilisateurs", "Déploiement sur AWS, Azure ou GCP", "Solutions extensibles et évolutives"],
      price: "À partir de 4M FCFA",
      category: "applications"
    },
    {
      icon: <Globe size={40} />,
      title: "Sites Web Institutionnels Premium",
      description: "Conception de sites corporate haut de gamme reflétant l'identité et les valeurs de votre marque. Design sur mesure et stratégie de contenu pour renforcer votre image professionnelle.",
      features: ["Design unique et premium", "Rédaction web SEO", "Multilingue et adapté à l'international", "Intégration CMS sur mesure"],
      price: "À partir de 1.5M FCFA",
      category: "websites"
    },
    {
      icon: <Layout size={40} />,
      title: "Refonte & Migration Technique",
      description: "Modernisation de vos plateformes existantes vers des architectures plus performantes et sécurisées. Migration sans perte de données et avec un minimum d'interruption de service.",
      features: ["Audit technique préalable", "Plan de migration progressif", "Conservation du SEO et des URLs", "Formation des équipes aux nouvelles technologies"],
      price: "À partir de 2M FCFA",
      category: "maintenance"
    },
    {
      icon: <Database size={40} />,
      title: "API & Intégrations Backend",
      description: "Développement d'APIs robustes et évolutives pour connecter vos systèmes et applications tierces. Architecture RESTful ou GraphQL selon vos besoins spécifiques.",
      features: ["Documentation complète (Swagger)", "Authentification et sécurisation", "Tests automatisés", "Monitoring et maintenance"],
      price: "À partir de 1.8M FCFA",
      category: "applications"
    },
    {
      icon: <BadgeCheck size={40} />,
      title: "Audit, Optimisation & Maintenance",
      description: "Services d'audit technique, d'optimisation de performance et de maintenance continue pour garder vos plateformes web et mobile en parfait état de fonctionnement.",
      features: ["Analyse de performance", "Correction de bugs et vulnérabilités", "Mises à jour régulières", "Support technique réactif"],
      price: "À partir de 500K FCFA / trimestre",
      category: "maintenance"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      
      {/* Space background with web-themed elements */}
      <WebSpaceBackground />
      
      <main className="flex-grow relative z-10">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center mb-12"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Solutions Web & Mobile <span className="text-gradient">Innovantes</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Développement d'applications et sites web performants, évolutifs et à fort impact pour les entreprises innovantes en Afrique et à l'international
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90" asChild>
                    <Link to="/contact">
                      Discuter de votre projet
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white" asChild>
                    <Link to="/portfolio">
                      Voir nos réalisations
                    </Link>
                  </Button>
                </div>
              </motion.div>
              
              {/* Tech Stack Icons */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="flex flex-wrap justify-center gap-6 mt-16"
              >
                {["react", "vue", "angular", "nodejs", "wordpress", "nextjs", "flutter", "firebase", "aws"].map((tech) => (
                  <motion.div 
                    key={tech}
                    className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg p-2"
                    whileHover={{ y: -5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <img src={`/icons/${tech}.svg`} alt={tech} className="w-8 h-8 object-contain" />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Services Tabs Section */}
        <section className="py-20 bg-gray-50 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services Web & Mobile</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
                Des solutions numériques complètes pour accompagner votre croissance et renforcer votre présence digitale, de la conception à la maintenance
              </p>
              
              <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full max-w-4xl mx-auto">
                <TabsList className="w-full flex flex-wrap justify-center bg-gray-100 p-1 mb-10">
                  {webCategories.map(cat => (
                    <TabsTrigger key={cat.id} value={cat.id} className="flex-grow data-[state=active]:bg-white rounded-md">
                      {cat.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {webCategories.map(category => (
                  <TabsContent key={category.id} value={category.id} className="mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {webServices
                        .filter(service => category.id === 'all' || service.category === category.id)
                        .map((service, idx) => (
                          <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                          >
                            <Card className="h-full flex flex-col hover:border-primary/50 transition-colors">
                              <CardHeader>
                                <div className="text-primary mb-4">{service.icon}</div>
                                <CardTitle>{service.title}</CardTitle>
                              </CardHeader>
                              <CardContent className="flex-grow">
                                <p className="text-gray-600 mb-4">{service.description}</p>
                                <ul className="space-y-2 mb-4">
                                  {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <div className="text-primary mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                          <path d="M20 6L9 17l-5-5"></path>
                                        </svg>
                                      </div>
                                      <span className="text-sm">{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                                <p className="text-sm font-medium text-primary">{service.price}</p>
                              </CardContent>
                              <CardFooter>
                                <Button variant="ghost" className="w-full justify-between hover:bg-gray-100" asChild>
                                  <Link to="/contact">
                                    <span>En savoir plus</span>
                                    <ArrowRight size={16} />
                                  </Link>
                                </Button>
                              </CardFooter>
                            </Card>
                          </motion.div>
                        ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* Project Showcase */}
        <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Projets Réalisés</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Des solutions sur mesure pour des clients en Afrique et à l'international, adaptées à leurs besoins spécifiques et contextes locaux
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {projectShowcase.map((project, idx) => (
                <motion.div
                  key={project.title}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="w-full h-48 relative">
                    <AspectRatio ratio={16/9}>
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center">
                        <div className="text-4xl font-bold text-white">{project.title.substring(0, 1)}</div>
                      </div>
                    </AspectRatio>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{project.client}</p>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map(tech => (
                        <span key={tech} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link to="/portfolio">
                  Voir tous nos projets
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Methodology Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre Méthodologie</h2>
                <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Une approche structurée et agile pour délivrer des solutions qui répondent parfaitement à vos besoins
                </p>
              </div>
              
              <div className="relative">
                {/* Timeline connector */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-primary"></div>
                
                {/* Timeline items */}
                {[
                  {
                    title: "Discovery & Analyse",
                    description: "Nous commençons par comprendre vos objectifs, votre marché et vos besoins spécifiques pour définir la vision du projet.",
                    icon: <Rocket size={24} />
                  },
                  {
                    title: "Conception & Wireframing",
                    description: "Création des maquettes et prototypes interactifs pour valider l'ergonomie et l'expérience utilisateur avant le développement.",
                    icon: <Layout size={24} />
                  },
                  {
                    title: "Développement Agile",
                    description: "Développement itératif avec des sprints réguliers et des démonstrations pour vous permettre de suivre l'avancement et d'ajuster en continu.",
                    icon: <Code size={24} />
                  },
                  {
                    title: "Tests & Assurance Qualité",
                    description: "Tests rigoureux sur différentes plateformes et appareils pour garantir la fiabilité et la performance optimale.",
                    icon: <BadgeCheck size={24} />
                  },
                  {
                    title: "Déploiement & Formation",
                    description: "Mise en production sur les infrastructures adaptées et formation de vos équipes pour une prise en main efficace.",
                    icon: <Rocket size={24} />
                  },
                  {
                    title: "Support & Évolution",
                    description: "Accompagnement post-lancement avec support technique et évolutions régulières pour adapter votre solution aux nouvelles exigences.",
                    icon: <Users size={24} />
                  }
                ].map((step, idx) => (
                  <motion.div
                    key={step.title}
                    className={`flex items-center mb-12 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                  >
                    <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full shadow border-4 border-primary">
                      <div className="text-primary">
                        {step.icon}
                      </div>
                    </div>
                    
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions Fréquentes</h2>
                <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    question: "Quels types de technologies utilisez-vous pour le développement web ?",
                    answer: "Nous utilisons les technologies les plus modernes et performantes selon les besoins spécifiques de chaque projet. Pour le front-end : React.js, Vue.js, Angular, Next.js. Pour le back-end : Node.js, Django, Laravel, .NET Core. Pour les bases de données : PostgreSQL, MongoDB, MySQL. Nous adaptons notre stack technologique aux exigences de performance, d'évolutivité et de maintenance de votre projet."
                  },
                  {
                    question: "Comment assurez-vous la compatibilité de mes applications avec le contexte africain ?",
                    answer: "Nous prenons en compte les spécificités du contexte africain : optimisation pour les connexions internet instables, intégration des moyens de paiement locaux (Mobile Money, cartes locales), adaptation au multilinguisme, compatibilité avec les appareils les plus utilisés sur le continent, et réduction de la consommation de données quand nécessaire. Notre expérience dans plusieurs pays d'Afrique nous permet de créer des solutions parfaitement adaptées aux réalités locales."
                  },
                  {
                    question: "Quels sont les délais typiques pour le développement d'un site ou d'une application ?",
                    answer: "Les délais varient selon la complexité du projet : un site vitrine professionnel peut être livré en 2-4 semaines, un e-commerce personnalisé en 1-3 mois, et une application mobile ou web complexe en 3-6 mois. Nous établissons un planning précis avec des jalons clairs dès le début du projet et travaillons en méthode agile pour vous livrer des versions fonctionnelles régulièrement."
                  },
                  {
                    question: "Proposez-vous des services de maintenance après le lancement ?",
                    answer: "Oui, nous offrons plusieurs formules de maintenance : technique (mises à jour de sécurité, corrections de bugs), évolutive (ajout de fonctionnalités), et support utilisateur. Nos contrats de maintenance garantissent la pérennité de votre solution et son adaptation continue aux évolutions technologiques et à vos besoins business."
                  },
                  {
                    question: "Comment gérez-vous les projets avec des clients internationaux ?",
                    answer: "Nous avons une forte expérience de collaboration avec des clients en Europe (France, UK), aux USA et dans plusieurs pays d'Afrique. Nous utilisons des outils collaboratifs efficaces (Slack, Jira, GitHub) et organisons des réunions régulières par visioconférence. Notre équipe est habituée aux projets internationaux et peut s'adapter à différents fuseaux horaires pour assurer une communication fluide."
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">{item.question}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{item.answer}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <Button className="bg-gradient-primary hover:opacity-90" size="lg" asChild>
                  <Link to="/contact">
                    Discuter de votre projet web ou mobile
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que nos clients disent</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  quote: "Dominique a transformé notre vision en une plateforme e-commerce moderne qui répond parfaitement aux besoins de nos clients au Sénégal et en Côte d'Ivoire. La solution intègre parfaitement les moyens de paiement locaux et internationaux.",
                  author: "Amadou N.",
                  position: "Directeur Commercial, Retail Company",
                  location: "Dakar, Sénégal"
                },
                {
                  quote: "Notre application mobile développée par l'équipe de Dominique a multiplié par 3 notre engagement client. Le travail a été livré dans les délais avec une qualité exceptionnelle et un support continu après le lancement.",
                  author: "Claire T.",
                  position: "CEO, Startup Fintech",
                  location: "Paris, France"
                },
                {
                  quote: "La refonte de notre plateforme SaaS par Dominique a permis d'améliorer significativement nos performances et de réduire nos coûts d'infrastructure. Sa compréhension des spécificités du marché africain a été déterminante.",
                  author: "Michael O.",
                  position: "CTO, Tech Company",
                  location: "Londres, UK"
                }
              ].map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                >
                  <div className="text-4xl text-primary/20 mb-4">"</div>
                  <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                    <p className="text-xs text-primary">{testimonial.location}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-2xl overflow-hidden border border-white/10">
              <div className="p-12 md:p-16 relative">
                {/* Background effects */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
                
                <div className="relative z-10 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Prêt à lancer votre projet digital ?
                  </h2>
                  <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                    Contactez-moi pour discuter de vos besoins et obtenir une proposition adaptée à votre contexte et à vos objectifs.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity" asChild>
                      <Link to="/contact">
                        Discuter avec un expert
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-white/50 hover:bg-white/10" asChild>
                      <Link to="/services">
                        Explorer d'autres services
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default WebServices;
