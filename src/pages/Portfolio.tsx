import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Search, Filter, X, Eye } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import ProjectViewDialog from '@/components/portfolio/ProjectViewDialog';
import AdvancedCosmicBackground from '@/components/space/AdvancedCosmicBackground';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink?: string;
  externalLink?: string;
  featured?: boolean;
}

const mockProjects: Project[] = [
  {
    id: 1,
    title: "Plateforme de E-learning IA",
    description: "Plateforme d'apprentissage en ligne utilisant l'IA pour personnaliser l'expérience éducative.",
    image: "/images/projects/project1.png",
    tags: ["IA", "Web", "React", "Node.js"],
    githubLink: "https://github.com/example/project1",
    externalLink: "https://example.com/project1",
    featured: true,
  },
  {
    id: 2,
    title: "Application Mobile de Santé",
    description: "Application mobile pour le suivi de la santé et la prise de rendez-vous médicaux.",
    image: "/images/projects/project2.png",
    tags: ["Mobile", "React Native", "Firebase"],
    githubLink: "https://github.com/example/project2",
    externalLink: "https://example.com/project2",
  },
  {
    id: 3,
    title: "Site Web E-commerce",
    description: "Site web de commerce électronique pour la vente de produits artisanaux.",
    image: "/images/projects/project3.png",
    tags: ["Web", "Next.js", "Stripe"],
    githubLink: "https://github.com/example/project3",
    externalLink: "https://example.com/project3",
    featured: true,
  },
  {
    id: 4,
    title: "Outil d'Analyse de Données",
    description: "Outil web pour l'analyse et la visualisation de données complexes.",
    image: "/images/projects/project4.png",
    tags: ["IA", "Web", "Python", "Flask"],
    githubLink: "https://github.com/example/project4",
    externalLink: "https://example.com/project4",
  },
  {
    id: 5,
    title: "Application de Gestion de Projet",
    description: "Application web pour la gestion de projets et la collaboration en équipe.",
    image: "/images/projects/project5.png",
    tags: ["Web", "React", "Redux", "Node.js"],
    githubLink: "https://github.com/example/project5",
    externalLink: "https://example.com/project5",
  },
  {
    id: 6,
    title: "Solution de Cybersécurité",
    description: "Application pour la détection et la prévention des menaces de cybersécurité.",
    image: "/images/projects/project6.png",
    tags: ["Sécurité", "Python", "Machine Learning"],
    githubLink: "https://github.com/example/project6",
    externalLink: "https://example.com/project6",
    featured: true,
  },
  {
    id: 7,
    title: "Application de Suivi de Budget",
    description: "Application mobile pour aider les utilisateurs à suivre leurs dépenses et à gérer leur budget.",
    image: "/images/projects/project7.png",
    tags: ["Mobile", "React Native", "Redux"],
    githubLink: "https://github.com/example/project7",
    externalLink: "https://example.com/project7",
  },
  {
    id: 8,
    title: "Plateforme de Crowdfunding",
    description: "Plateforme web pour la collecte de fonds pour des projets créatifs et innovants.",
    image: "/images/projects/project8.png",
    tags: ["Web", "Next.js", "Firebase"],
    githubLink: "https://github.com/example/project8",
    externalLink: "https://example.com/project8",
  },
  {
    id: 9,
    title: "Système de Recommandation de Films",
    description: "Système basé sur l'IA pour recommander des films aux utilisateurs en fonction de leurs préférences.",
    image: "/images/projects/project9.png",
    tags: ["IA", "Web", "Python", "TensorFlow"],
    githubLink: "https://github.com/example/project9",
    externalLink: "https://example.com/project9",
  },
  {
    id: 10,
    title: "Application de Traduction en Temps Réel",
    description: "Application mobile pour la traduction de langues en temps réel.",
    image: "/images/projects/project10.png",
    tags: ["Mobile", "React Native", "API"],
    githubLink: "https://github.com/example/project10",
    externalLink: "https://example.com/project10",
  },
];

const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    document.title = 'Portfolio | Dominiqk Mendy';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Découvrez mes projets de développement web, mobile et IA. Des solutions innovantes et performantes pour répondre à vos besoins.'
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setSearchTerm('');
  };

  const filteredProjects = mockProjects.filter((project) => {
    const searchRegex = new RegExp(searchTerm, 'i');
    const matchesSearch = searchRegex.test(project.title) || searchRegex.test(project.description);

    const matchesTags = selectedTags.length === 0 || project.tags.some((tag) => selectedTags.includes(tag));

    return matchesSearch && matchesTags;
  });

  const openProjectView = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectView = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <AdvancedCosmicBackground />
      <div className="fixed inset-0 tech-grid z-[-1] opacity-20"></div>
      
      <Navbar />
      
      <main className="flex-grow relative z-10">
        {/* Hero Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-block px-4 py-1.5 bg-purple-500/10 backdrop-blur-sm rounded-full text-purple-400 border border-purple-500/20 text-sm font-medium mb-4">
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>Portfolio</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Nos <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">Réalisations</span>
              </h1>
              
              <div className="h-1 w-24 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mx-auto mb-6"></div>
              
              <p className="text-xl text-gray-200 mb-8">
                Découvrez une sélection de nos projets les plus innovants et performants, réalisés avec passion et expertise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-12 bg-black/20 backdrop-blur-sm relative z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="relative flex-grow md:flex-grow-0">
                  <Input
                    type="text"
                    placeholder="Rechercher un projet..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="bg-black/50 border-white/10 text-white placeholder:text-gray-400"
                  />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
                
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 md:hidden" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                  <Filter className="mr-2 h-4 w-4" />
                  Filtrer
                </Button>
              </div>

              <div className={`md:flex items-center gap-2 w-full md:w-auto ${isFilterOpen ? 'flex' : 'hidden md:flex'}`}>
                {isFilterOpen && (
                  <Button variant="ghost" className="text-red-500 hover:bg-red-500/10 md:hidden" onClick={clearFilters}>
                    <X className="mr-2 h-4 w-4" />
                    Effacer
                  </Button>
                )}
                
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/5" onClick={clearFilters}>
                  <X className="mr-2 h-4 w-4" />
                  Effacer les filtres
                </Button>
              </div>
            </div>

            {/* Tags Filter */}
            <div className={`mt-6 ${isFilterOpen ? 'block' : 'hidden md:block'}`}>
              <div className="flex flex-wrap gap-2">
                {Array.from(new Set(mockProjects.map(project => project.tags).flat())).sort().map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className={`cursor-pointer transition-colors ${selectedTags.includes(tag)
                      ? "bg-purple-500 text-white hover:bg-purple-600"
                      : "border-white/20 text-white hover:bg-white/5"
                      }`}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="group"
                  >
                    <Card className="h-full bg-black/50 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all overflow-hidden cosmic-hover">
                      <CardHeader>
                        <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                        <CardDescription className="text-gray-300">{project.tags.join(', ')}</CardDescription>
                      </CardHeader>
                      <CardContent className="relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="rounded-md mb-4 w-full h-48 object-cover"
                        />
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <div className="flex justify-end gap-2 absolute bottom-4 right-4">
                          {project.githubLink && (
                            <Button variant="ghost" size="icon" className="text-white hover:text-gray-300">
                              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                <Github className="h-5 w-5" />
                              </a>
                            </Button>
                          )}
                          {project.externalLink && (
                            <Button variant="ghost" size="icon" className="text-white hover:text-gray-300">
                              <a href={project.externalLink} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-5 w-5" />
                              </a>
                            </Button>
                          )}
                          <Button variant="ghost" size="icon" className="text-white hover:text-gray-300" onClick={() => openProjectView(project)}>
                            <Eye className="h-5 w-5" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center text-gray-400">
                  Aucun projet trouvé.
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />

      {/* Project View Dialog */}
      <ProjectViewDialog project={selectedProject} onClose={closeProjectView} />
    </div>
  );
};

export default Portfolio;
