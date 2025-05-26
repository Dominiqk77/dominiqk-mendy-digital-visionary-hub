import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProjectViewDialog from '../components/portfolio/ProjectViewDialog';
import { ExternalLink, ArrowRight, Star, Code, Database, Globe, BarChart3, BookOpen, Rocket, Eye, TrendingUp, Shield, Zap, Users, Brain, Smartphone, Mountain, Utensils, Package, Palette, Microscope, Heart, Lightbulb, Settings, Plane, Trophy, Coffee, Home } from 'lucide-react';

// Star background component
const StarBackground = () => {
  const [stars, setStars] = useState<{id: number, x: number, y: number, size: number, delay: number}[]>([]);
  
  useEffect(() => {
    const starCount = 50;
    const newStars = Array.from({ length: starCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 3
    }));
    setStars(newStars);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div 
          key={star.id}
          className="space-dot"
          style={{ 
            left: `${star.x}%`, 
            top: `${star.y}%`, 
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}
    </div>
  );
};

const Portfolio = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    document.title = 'Portfolio | Dominiqk Mendy | Projets & Réalisations Innovation';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Découvrez les projets innovants de Dominiqk Mendy : plateformes IA, solutions blockchain, applications fintech et systèmes de gestion avancés pour entreprises internationales.'
      );
    }
    
    window.scrollTo(0, 0);
  }, []);
  
  const handleProjectClick = () => {
    setIsDialogOpen(true);
  };
  
  const projects = [
    {
      id: 24,
      title: "Sen'Services - Administration Numérique Sénégalaise",
      category: "platform",
      image: "/lovable-uploads/5b00c06a-f156-4ccd-9a85-3139d5c0bcb1.png",
      description: "Plateforme digitale révolutionnaire pour simplifier les services administratifs sénégalais. Solution complète avec plus de 500 services accessibles en ligne, sécurisation des données et interface intuitive pour tous les citoyens.",
      tags: ["E-Government", "Digital Services", "Public Administration", "Citizen Platform"],
      metrics: { services: "500+", users: "Citizens", security: "Garantie" },
      link: "#",
      icon: <Settings className="h-6 w-6" />,
      color: "from-green-600 to-yellow-600"
    },
    {
      id: 25,
      title: "AVC Prévention - Détection Intelligente des Risques",
      category: "health",
      image: "/lovable-uploads/f634965a-a21c-495b-b715-8319ed907034.png",
      description: "Plateforme intelligente de détection précoce des risques d'AVC grâce à l'analyse ECG. Solution médicale innovante avec dépistage en 60 secondes, interface moderne et technologie de pointe pour sauver des vies.",
      tags: ["HealthTech", "Medical AI", "ECG Analysis", "Prevention"],
      metrics: { detection: "60s", accuracy: "Medical-grade", lives: "Saved" },
      link: "#",
      icon: <Heart className="h-6 w-6" />,
      color: "from-red-600 to-pink-600"
    },
    {
      id: 26,
      title: "M2N Energie Solutions - Transition Énergétique",
      category: "energy",
      image: "/lovable-uploads/b732f5ba-1fb0-4ba9-92a8-48f5180dbfab.png",
      description: "Solutions énergétiques innovantes pour économiser énergie et eau sans investissement initial. Plateforme complète de transition énergétique avec audit gratuit, technologies durables et accompagnement expert personnalisé.",
      tags: ["Energy Solutions", "Sustainability", "Green Tech", "Cost Reduction"],
      metrics: { savings: "No upfront", audit: "Free", transition: "Complete" },
      link: "#",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "from-blue-600 to-green-600"
    },
    {
      id: 27,
      title: "Sen'Services Portal - Révolution Administrative",
      category: "platform",
      image: "/lovable-uploads/f6876651-4092-479b-8d72-e137f55f059b.png",
      description: "La révolution de l'administration sénégalaise développée par des experts locaux. Plateforme pour simplifier, accélérer et sécuriser l'accès aux services publics avec solution 100% développée au Sénégal.",
      tags: ["Government Portal", "Local Development", "Public Services", "Digital Transformation"],
      metrics: { development: "100% Local", access: "Simplified", security: "Advanced" },
      link: "#",
      icon: <Globe className="h-6 w-6" />,
      color: "from-orange-600 to-green-600"
    },
    {
      id: 28,
      title: "Select Voyages - Plateforme Voyage Premium Dubaï",
      category: "travel",
      image: "/lovable-uploads/2ee1e531-c3f9-46a1-8aa2-5eeca7dd68b7.png",
      description: "Plateforme de voyage premium spécialisée dans les destinations exclusives avec focus sur Dubaï. Interface élégante pour découvrir la ville du futur avec offres personnalisées, réservations simplifiées et expériences VIP.",
      tags: ["Travel Premium", "Dubai", "Luxury Travel", "Booking Platform"],
      metrics: { destinations: "Premium", bookings: "VIP", satisfaction: "Luxury" },
      link: "#",
      icon: <Plane className="h-6 w-6" />,
      color: "from-blue-600 to-gold-600"
    },
    {
      id: 29,
      title: "Select Voyages Sénégal - Tourisme Culturel",
      category: "travel",
      image: "/lovable-uploads/89368157-adf5-4030-bb16-bcefae31ea54.png",
      description: "Plateforme dédiée au tourisme sénégalais mettant en valeur le pays de la Teranga. Interface authentique pour découvrir les richesses culturelles du Sénégal avec circuits personnalisés et expériences locales uniques.",
      tags: ["Cultural Tourism", "Senegal", "Local Experiences", "Heritage"],
      metrics: { heritage: "Authentic", tours: "Cultural", impact: "Local" },
      link: "#",
      icon: <Mountain className="h-6 w-6" />,
      color: "from-green-600 to-yellow-600"
    },
    {
      id: 30,
      title: "SN Sport - Référence Sportive Sénégalaise",
      category: "sports",
      image: "/lovable-uploads/1fd412ae-871e-419b-ac09-863e22961bea.png",
      description: "Plateforme média sportive de référence au Sénégal avec actualités en temps réel, analyses approfondies et couverture complète. Interface moderne dédiée aux passionnés de sport avec contenu exclusif et engagement communautaire.",
      tags: ["Sports Media", "News Platform", "Senegal Sports", "Community"],
      metrics: { coverage: "Complete", fans: "Passionate", content: "Exclusive" },
      link: "#",
      icon: <Trophy className="h-6 w-6" />,
      color: "from-red-600 to-green-600"
    },
    {
      id: 31,
      title: "SNG Sport Clothing - Marque Sportive Premium",
      category: "ecommerce",
      image: "/lovable-uploads/14c08e0f-17e9-481d-8b2d-60df1627abbf.png",
      description: "Marque de vêtements sportifs premium avec design africain authentique. Collection exclusive alliant performance et style, produits haute qualité et identité visuelle forte pour les athlètes passionnés.",
      tags: ["Sports Clothing", "African Design", "Premium Brand", "Athletic Wear"],
      metrics: { quality: "Premium", design: "African", performance: "Athletic" },
      link: "#",
      icon: <Package className="h-6 w-6" />,
      color: "from-white to-red-600"
    },
    {
      id: 32,
      title: "SNG Sport Accessories - Accessoires Sportifs",
      category: "ecommerce",
      image: "/lovable-uploads/3d735bdf-bb7f-4d6b-a7ad-c4a851c60d45.png",
      description: "Ligne d'accessoires sportifs premium avec casquettes, visières et équipements techniques. Design minimaliste et fonctionnel pour les sportifs exigeants avec qualité professionnelle et confort optimal.",
      tags: ["Sports Accessories", "Premium Design", "Technical Gear", "Athletic"],
      metrics: { comfort: "Optimal", quality: "Professional", design: "Minimalist" },
      link: "#",
      icon: <Shield className="h-6 w-6" />,
      color: "from-gray-600 to-red-600"
    },
    {
      id: 33,
      title: "Good Night Daddy - Plateforme Lifestyle",
      category: "lifestyle",
      image: "/lovable-uploads/2afda928-d2f6-4e46-a76f-14493fa0e6ca.png",
      description: "Plateforme lifestyle moderne avec design coloré et interface engageante. Solution complète pour communauté lifestyle avec contenu personnalisé, interactions sociales et expérience utilisateur premium.",
      tags: ["Lifestyle Platform", "Community", "Social Features", "Modern Design"],
      metrics: { engagement: "High", community: "Active", design: "Modern" },
      link: "#",
      icon: <Users className="h-6 w-6" />,
      color: "from-blue-600 to-pink-600"
    },
    {
      id: 34,
      title: "Millenium Pub - Agence Publicitaire Créative",
      category: "advertising",
      image: "/lovable-uploads/18e04c91-48a0-4080-b820-d96578d90e09.png",
      description: "Agence publicitaire innovante spécialisée dans les campagnes créatives multi-supports. Portfolio diversifié avec solutions graphiques impactantes, stratégies marketing digitales et créativité sans limites.",
      tags: ["Creative Agency", "Advertising", "Multi-Media", "Design"],
      metrics: { campaigns: "Creative", impact: "High", solutions: "Multi-media" },
      link: "#",
      icon: <Palette className="h-6 w-6" />,
      color: "from-teal-600 to-blue-600"
    },
    {
      id: 35,
      title: "Ambre Décoration - E-commerce Déco Premium",
      category: "ecommerce",
      image: "/lovable-uploads/58065361-7f73-46ca-98d5-629cbdf091d4.png",
      description: "Boutique en ligne premium spécialisée dans la décoration d'intérieur avec produits artisanaux uniques. Interface élégante pour transformer les espaces de vie avec catalogue exclusif et inspiration design.",
      tags: ["Home Decor", "Premium E-commerce", "Artisanal", "Interior Design"],
      metrics: { products: "Premium", style: "Unique", inspiration: "Design" },
      link: "#",
      icon: <Home className="h-6 w-6" />,
      color: "from-pink-600 to-orange-600"
    },
    {
      id: 36,
      title: "Portfolio Voyage Élite - Showcase Tourisme",
      category: "portfolio",
      image: "/lovable-uploads/c1814488-6dfe-464d-b997-2d114a2d4283.png",
      description: "Portfolio professionnel pour agence de voyage haut de gamme avec présentation immersive des destinations. Design sophistiqué mettant en valeur les services premium et expériences exclusives.",
      tags: ["Travel Portfolio", "Luxury Tourism", "Professional Showcase", "Premium"],
      metrics: { destinations: "Elite", presentation: "Immersive", services: "Premium" },
      link: "#",
      icon: <Globe className="h-6 w-6" />,
      color: "from-purple-600 to-blue-600"
    },
    {
      id: 37,
      title: "Dania Cosmetics - Marque Beauté Moderne",
      category: "beauty",
      image: "/lovable-uploads/4c45267c-f798-45d6-a627-b4f238ad9ede.png",
      description: "Marque de cosmétiques moderne avec identité visuelle éclatante et produits innovants. Plateforme beauté complète avec application mobile intégrée et stratégie marketing digital révolutionnaire.",
      tags: ["Beauty Brand", "Cosmetics", "Mobile App", "Digital Marketing"],
      metrics: { innovation: "Beauty", branding: "Modern", reach: "Global" },
      link: "#",
      icon: <Heart className="h-6 w-6" />,
      color: "from-pink-600 to-purple-600"
    },
    {
      id: 38,
      title: "Good Night Daddy - Plateforme Web Complète",
      category: "platform",
      image: "/lovable-uploads/a0b9d28d-2c7b-4d6c-99b3-0dde84747a75.png",
      description: "Plateforme web sophistiquée avec design portfolio élégant et interface utilisateur moderne. Solution complète pour présentation professionnelle avec technologies avancées et expérience utilisateur optimisée.",
      tags: ["Web Platform", "Portfolio Design", "Modern UI", "Professional"],
      metrics: { design: "Sophisticated", ux: "Optimized", tech: "Advanced" },
      link: "#",
      icon: <Code className="h-6 w-6" />,
      color: "from-blue-600 to-teal-600"
    }
  ];

  const categories = [
    { id: "all", name: "Tous les Projets", icon: <Star className="h-4 w-4" /> },
    { id: "fintech", name: "Fintech & Finance", icon: <BarChart3 className="h-4 w-4" /> },
    { id: "ai", name: "Intelligence Artificielle", icon: <Brain className="h-4 w-4" /> },
    { id: "logistics", name: "Logistique & Transport", icon: <TrendingUp className="h-4 w-4" /> },
    { id: "maritime", name: "Maritime & Offshore", icon: <Globe className="h-4 w-4" /> },
    { id: "mobile", name: "Applications Mobile", icon: <Smartphone className="h-4 w-4" /> },
    { id: "education", name: "Éducation & E-learning", icon: <BookOpen className="h-4 w-4" /> },
    { id: "blockchain", name: "Blockchain & Web3", icon: <Code className="h-4 w-4" /> },
    { id: "branding", name: "Branding & Design", icon: <Palette className="h-4 w-4" /> }
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 z-[-2]"></div>
      <div className="fixed inset-0 tech-grid z-[-1]"></div>
      <StarBackground />
      
      <Navbar />
      
      <main className="flex-grow pt-20 relative z-10">
        {/* Hero Section Ultra Moderne */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '2s'}}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="mb-8"
              >
                <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-blue-500/30 rounded-full text-blue-300 font-medium mb-6">
                  🚀 Portfolio Innovation • 27+ Projets Présentés
                </span>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Projets qui
                  <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Transforment
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
                  Des solutions technologiques révolutionnaires qui redéfinissent 
                  <br className="hidden md:block" />
                  l'expérience digitale et génèrent des résultats exceptionnels
                </p>

                <div className="flex flex-wrap justify-center gap-6 mb-12">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">2K+</div>
                    <div className="text-blue-400">Projets Livrés</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">50+</div>
                    <div className="text-purple-400">Secteurs d'Activité</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">20+</div>
                    <div className="text-pink-400">Pays Impactés</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Categories Filter Ultra Design */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-md border ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-blue-500 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:border-white/30'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.icon}
                  <span className="font-medium">{category.name}</span>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid Ultra Creative - Modified to 2 columns */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group relative"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <Card className="relative overflow-hidden bg-black/80 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-500 h-full shadow-2xl">
                    <div className="relative h-80 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                      
                      {/* Hover Overlay */}
                      <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
                        hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                      }`}>
                        <Button 
                          size="lg"
                          className="bg-white/20 border border-white/40 backdrop-blur-md hover:bg-white/30 text-white shadow-lg"
                          onClick={handleProjectClick}
                        >
                          <Eye className="mr-2 h-5 w-5" />
                          Voir le Projet
                        </Button>
                      </div>

                      {/* Project Icon */}
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white border border-white/30">
                        {project.icon}
                      </div>
                    </div>

                    <CardContent className="p-6 relative bg-black/90 backdrop-blur-md">
                      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`}></div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center p-2 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
                            <div className="text-sm font-bold text-white">{value}</div>
                            <div className="text-xs text-gray-300 capitalize">{key.replace('_', ' ')}</div>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-white/20 border border-white/30 px-2 py-1 rounded-full text-blue-200 backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-blue-300 hover:text-blue-200 p-0 hover:bg-transparent"
                          onClick={handleProjectClick}
                        >
                          Découvrir
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <ExternalLink 
                          className="h-4 w-4 text-gray-400 hover:text-white transition-colors cursor-pointer" 
                          onClick={handleProjectClick}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* CTA Section Ultra Design */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '1s'}}></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  Votre Projet, Notre Innovation
                </h2>
                
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                  Transformons ensemble votre vision en solution technologique révolutionnaire
                  <br className="hidden md:block" />
                  qui marquera votre secteur d'activité
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg shadow-lg shadow-blue-500/25"
                    asChild
                  >
                    <Link to="/contact" className="flex items-center gap-2">
                      <Rocket className="h-5 w-5" />
                      Démarrer un Projet
                    </Link>
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-md hover:border-white/50"
                    asChild
                  >
                    <Link to="/services" className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5" />
                      Nos Services
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Project View Dialog */}
      <ProjectViewDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
    </div>
  );
};

export default Portfolio;
