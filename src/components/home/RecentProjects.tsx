
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ExternalLink, Github, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Données des projets (les 6 plus récents)
const recentProjects = [
  {
    id: 1,
    title: "SenServices - Plateforme E-Gouvernance",
    description: "Solution complète de e-gouvernance pour digitaliser les services publics sénégalais avec IA intégrée.",
    image: "/lovable-uploads/c0a0e8cc-455f-443c-849f-9c1c4aa6981c.png",
    tech: ["React", "Node.js", "IA", "PostgreSQL"],
    category: "E-Gouvernance",
    year: "2024",
    status: "En cours",
    gradient: "from-emerald-600 to-green-500"
  },
  {
    id: 2,
    title: "MarrakechTech Hub - Écosystème Innovation",
    description: "Plateforme d'innovation technologique connectant startups, investisseurs et talents à Marrakech.",
    image: "/lovable-uploads/3490d9cc-cadd-4942-a270-81ffbc7c7dc8.png",
    tech: ["Vue.js", "Firebase", "Machine Learning"],
    category: "Innovation",
    year: "2024",
    status: "Livré",
    gradient: "from-orange-600 to-amber-500"
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    description: "Tableau de bord analytique avancé avec intelligence artificielle pour la prise de décision stratégique.",
    image: "/lovable-uploads/445e686e-aae9-44a9-a285-b1bc0fe5ce56.png",
    tech: ["Python", "TensorFlow", "React", "D3.js"],
    category: "Intelligence Artificielle",
    year: "2024",
    status: "Livré",
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    id: 4,
    title: "EcoTech Solutions - App Mobile",
    description: "Application mobile pour la gestion intelligente des ressources énergétiques avec IoT intégré.",
    image: "/lovable-uploads/330d9ea3-62fb-444d-b8cf-eb53399e13fb.png",
    tech: ["React Native", "IoT", "MongoDB"],
    category: "Mobile & IoT",
    year: "2024",
    status: "Livré",
    gradient: "from-green-600 to-teal-500"
  },
  {
    id: 5,
    title: "London FinTech Platform",
    description: "Plateforme financière innovante pour les services bancaires numériques avec blockchain.",
    image: "/lovable-uploads/495ed398-4979-4ac1-a88d-1786a29d5039.png",
    tech: ["Angular", "Blockchain", "Node.js"],
    category: "FinTech",
    year: "2023",
    status: "Livré",
    gradient: "from-purple-600 to-violet-500"
  },
  {
    id: 6,
    title: "Smart City Marrakech",
    description: "Solution IoT complète pour la transformation digitale urbaine de Marrakech.",
    image: "/lovable-uploads/61406fcd-d8bd-4eba-8cb6-42c42e5e67c0.png",
    tech: ["IoT", "Big Data", "Python", "React"],
    category: "Smart City",
    year: "2023",
    status: "Livré",
    gradient: "from-indigo-600 to-blue-500"
  }
];

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const RecentProjects = () => {
  return (
    <section className="py-20 backdrop-blur-sm bg-black/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Projets <span className="text-gradient-cosmic">Récents</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Découvrez mes dernières réalisations technologiques qui transforment les idées en solutions innovantes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full border-none overflow-hidden cosmic-hover relative bg-black/40 backdrop-blur-md">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                
                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-white/30 group-hover:shadow-[0_0_15px_rgba(155,135,245,0.3)] transition-all duration-300"></div>
                
                {/* Status badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    project.status === 'En cours' 
                      ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' 
                      : 'bg-green-500/20 text-green-300 border border-green-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <div className="relative z-10">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Category badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 text-sm font-medium bg-black/60 text-white rounded-full backdrop-blur-sm border border-white/20">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.year}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-portfolio-blue transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <CardDescription className="text-base text-gray-300 mb-4">
                      {project.description}
                    </CardDescription>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech} 
                          className="px-2 py-1 text-xs bg-portfolio-purple/20 text-portfolio-purple border border-portfolio-purple/30 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-0">
                    <div className="flex items-center justify-between w-full">
                      <Button variant="ghost" className="p-0 text-white hover:text-portfolio-blue hover:bg-transparent group-action" asChild>
                        <Link to="/portfolio" className="flex items-center">
                          <span className="bg-clip-text text-transparent bg-gradient-to-r from-portfolio-blue to-portfolio-purple">Voir détails</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-action-hover:translate-x-1 text-portfolio-purple" />
                        </Link>
                      </Button>
                      
                      <div className="flex items-center space-x-2">
                        <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors group">
                          <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-white" />
                        </button>
                        <button className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors group">
                          <Github className="w-4 h-4 text-gray-300 group-hover:text-white" />
                        </button>
                      </div>
                    </div>
                  </CardFooter>
                </div>
                
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-white/10 opacity-50 rounded-tl-xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-white/10 opacity-50 rounded-br-xl"></div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg mb-6 text-gray-300">
            Explorez plus de 50+ projets innovants dans mon portfolio complet
          </p>
          <Button size="lg" className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue hover:opacity-90 text-white" asChild>
            <Link to="/portfolio">
              Voir tous les projets
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
