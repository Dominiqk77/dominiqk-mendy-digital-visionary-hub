
import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  CalendarDays, 
  Clock, 
  Star, 
  Search, 
  Tag, 
  ArrowRight, 
  BookOpen,
  ThumbsUp,
  MessageCircle,
  User
} from 'lucide-react';
import { 
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination';

const Blog = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Blog | Dominiqk Mendy | Articles IA & Digital';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Découvrez des articles innovants sur l\'IA, le développement web, le marketing digital et la transformation numérique en Afrique et dans le monde.'
      );
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  // Generate stars for background
  const [stars, setStars] = useState<{id: number, x: number, y: number, size: number}[]>([]);
  
  useEffect(() => {
    const newStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5
    }));
    setStars(newStars);
  }, []);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  
  // Updated blog posts with new articles
  const blogPosts = [
    {
      id: 1,
      title: "L'impact de l'IA générative sur les entreprises africaines",
      excerpt: "Analyse de l'adoption des technologies comme ChatGPT et Midjourney dans le contexte des startups et entreprises africaines.",
      date: "2023-05-15",
      readTime: "8 min",
      author: "Dominiqk Mendy",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      category: "ia",
      likes: 124,
      comments: 23,
      featured: true
    },
    {
      id: 2,
      title: "Développement web en Afrique: défis et opportunités",
      excerpt: "Exploration des spécificités techniques du développement web en Afrique: connectivité, optimisation et solutions innovantes.",
      date: "2023-04-22",
      readTime: "6 min",
      author: "Dominiqk Mendy",
      image: "https://images.unsplash.com/photo-1573164713712-03790a178651?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      category: "web",
      likes: 87,
      comments: 14,
      featured: false
    },
    {
      id: 3,
      title: "Les nouvelles tendances du marketing digital au Sénégal",
      excerpt: "Découvrez comment les marques sénégalaises innovent dans leur approche marketing pour toucher une audience connectée et exigeante.",
      date: "2023-03-10",
      readTime: "5 min",
      author: "Dominiqk Mendy",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      category: "marketing",
      likes: 103,
      comments: 19,
      featured: true
    },
    {
      id: 4,
      title: "E-gouvernance: comment digitaliser l'administration publique",
      excerpt: "Guide pratique pour les institutions gouvernementales souhaitant entreprendre leur transformation numérique avec impact.",
      date: "2023-02-28",
      readTime: "10 min",
      author: "Dominiqk Mendy",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      category: "gouvernance",
      likes: 76,
      comments: 31,
      featured: false
    },
    {
      id: 5,
      title: "Le potentiel de la blockchain pour les startups africaines",
      excerpt: "Analyse des cas d'usage pertinents de la blockchain dans le contexte africain: traçabilité, paiements et identité numérique.",
      date: "2023-01-15",
      readTime: "7 min",
      author: "Dominiqk Mendy",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      category: "technologie",
      likes: 92,
      comments: 12,
      featured: false
    },
    {
      id: 6,
      title: "Formation tech: combler le fossé des compétences numériques",
      excerpt: "Comment former efficacement la prochaine génération de talents tech africains pour répondre aux besoins du marché mondial.",
      date: "2022-12-05",
      readTime: "9 min",
      author: "Dominiqk Mendy",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      category: "formation",
      likes: 118,
      comments: 27,
      featured: true
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les articles' },
    { id: 'ia', name: 'Intelligence Artificielle' },
    { id: 'web', name: 'Développement Web' },
    { id: 'marketing', name: 'Marketing Digital' },
    { id: 'gouvernance', name: 'E-Gouvernance' },
    { id: 'technologie', name: 'Technologies Émergentes' },
    { id: 'formation', name: 'Formation & Éducation' },
    { id: 'entrepreneuriat', name: 'Entrepreneuriat Tech' }
  ];

  const filteredPosts = blogPosts
    .filter(post => selectedCategory === 'all' || post.category === selectedCategory)
    .filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  const featuredPosts = blogPosts.filter(post => post.featured);

  // Change page
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="fixed inset-0 bg-black z-[-2]"></div>
      <div className="fixed inset-0 tech-grid opacity-30 z-[-1]"></div>
      
      {/* Star background */}
      <div className="fixed inset-0 z-[-1]">
        {stars.map(star => (
          <div
            key={star.id}
            className="space-dot"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.id * 0.1}s`
            }}
          />
        ))}
      </div>
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-indigo-600 rounded-full filter blur-[100px] opacity-20"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-[100px] opacity-20"></div>
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              >
                <span className="text-gradient-cosmic">Blog</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8 text-gray-100"
              >
                Réflexions et analyses sur l'innovation numérique en Afrique
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="max-w-xl mx-auto relative"
              >
                <Input 
                  type="text" 
                  placeholder="Rechercher un article..." 
                  className="pl-12 py-6 text-lg bg-gray-900/50 backdrop-blur-sm border border-white/20 text-white placeholder:text-gray-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Featured Articles */}
        {featuredPosts.length > 0 && (
          <section className="py-8 md:py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white flex items-center">
                <Star className="mr-2 h-6 w-6 text-yellow-500" /> Articles à la une
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.slice(0, 6).map((post) => (
                  <motion.div 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="cosmic-card rounded-lg overflow-hidden group bg-gray-900/80 backdrop-blur-sm"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-md">
                        À la une
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-200 mb-3">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-indigo-400 transition-colors">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      
                      <p className="text-gray-200 mb-4">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white mr-2">
                            <User className="h-4 w-4" />
                          </div>
                          <span className="text-sm text-gray-100">{post.author}</span>
                        </div>
                        
                        <div className="flex items-center space-x-3 text-sm text-gray-200">
                          <div className="flex items-center">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            <span>{post.comments}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Categories & Posts */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Categories */}
              <div className="md:w-1/4">
                <div className="cosmic-card rounded-lg p-6 bg-gray-900/80 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4 text-white">Catégories</h3>
                  <ul className="space-y-2">
                    {categories.map(category => (
                      <li key={category.id}>
                        <button
                          onClick={() => {
                            setSelectedCategory(category.id);
                            setCurrentPage(1); // Reset to page 1 on category change
                          }}
                          className={`w-full text-left py-2 px-3 rounded-md flex items-center transition-colors ${
                            selectedCategory === category.id ? 
                              'bg-indigo-600 text-white' : 
                              'hover:bg-gray-800/50 text-gray-100'
                          }`}
                        >
                          <Tag className="h-4 w-4 mr-2" />
                          <span>{category.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Blog Posts */}
              <div className="md:w-3/4">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Articles récents</h2>
                  {selectedCategory !== 'all' && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-white/20 text-white hover:bg-gray-800"
                      onClick={() => {
                        setSelectedCategory('all');
                        setCurrentPage(1); // Reset to page 1
                      }}
                    >
                      Effacer les filtres
                    </Button>
                  )}
                </div>
                
                <div className="space-y-8">
                  {currentPosts.length > 0 ? (
                    currentPosts.map((post) => (
                      <motion.div 
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="cosmic-card rounded-lg overflow-hidden bg-gray-900/80 backdrop-blur-sm"
                      >
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3 h-48 md:h-auto">
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="md:w-2/3 p-6">
                            <div className="flex items-center text-sm text-gray-200 mb-3">
                              <CalendarDays className="h-4 w-4 mr-1" />
                              <span>{post.date}</span>
                              <span className="mx-2">•</span>
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{post.readTime}</span>
                              <span className="mx-2">•</span>
                              <Tag className="h-4 w-4 mr-1" />
                              <span className="capitalize">{post.category}</span>
                            </div>
                            
                            <h3 className="text-xl font-bold mb-2 text-white hover:text-indigo-400 transition-colors">
                              <Link to={`/blog/${post.id}`}>{post.title}</Link>
                            </h3>
                            
                            <p className="text-gray-200 mb-4">{post.excerpt}</p>
                            
                            <div className="flex items-center justify-between">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="border-indigo-500/30 text-indigo-400 hover:bg-indigo-900/20"
                                asChild
                              >
                                <Link to={`/blog/${post.id}`}>
                                  Lire l'article <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                              </Button>
                              
                              <div className="flex items-center space-x-3 text-sm text-gray-200">
                                <div className="flex items-center">
                                  <ThumbsUp className="h-4 w-4 mr-1" />
                                  <span>{post.likes}</span>
                                </div>
                                <div className="flex items-center">
                                  <MessageCircle className="h-4 w-4 mr-1" />
                                  <span>{post.comments}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="cosmic-card rounded-lg p-8 text-center bg-gray-900/80 backdrop-blur-sm">
                      <div className="mb-4 text-gray-300">
                        <BookOpen className="h-12 w-12 mx-auto opacity-50" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Aucun article trouvé</h3>
                      <p className="text-gray-200 mb-4">Aucun article ne correspond à votre recherche ou à la catégorie sélectionnée.</p>
                      <Button 
                        variant="outline"
                        className="border-white/20 text-white hover:bg-gray-800"
                        onClick={() => {
                          setSearchTerm('');
                          setSelectedCategory('all');
                          setCurrentPage(1);
                        }}
                      >
                        Réinitialiser les filtres
                      </Button>
                    </div>
                  )}
                  
                  {/* Pagination */}
                  {filteredPosts.length > postsPerPage && (
                    <div className="mt-8">
                      <Pagination>
                        <PaginationContent>
                          <PaginationItem>
                            <PaginationPrevious 
                              onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                              className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                            />
                          </PaginationItem>
                          
                          {[...Array(totalPages)].map((_, index) => {
                            const pageNumber = index + 1;
                            
                            // Show only current page, first, last, and one page before and after current
                            if (
                              pageNumber === 1 || 
                              pageNumber === totalPages || 
                              (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                            ) {
                              return (
                                <PaginationItem key={pageNumber}>
                                  <PaginationLink
                                    onClick={() => paginate(pageNumber)}
                                    isActive={pageNumber === currentPage}
                                    className="cursor-pointer"
                                  >
                                    {pageNumber}
                                  </PaginationLink>
                                </PaginationItem>
                              );
                            }
                            
                            // Add ellipsis after first page
                            if (pageNumber === 2 && currentPage > 3) {
                              return (
                                <PaginationItem key="ellipsis-start">
                                  <PaginationEllipsis />
                                </PaginationItem>
                              );
                            }
                            
                            // Add ellipsis before last page
                            if (pageNumber === totalPages - 1 && currentPage < totalPages - 2) {
                              return (
                                <PaginationItem key="ellipsis-end">
                                  <PaginationEllipsis />
                                </PaginationItem>
                              );
                            }
                            
                            return null;
                          })}
                          
                          <PaginationItem>
                            <PaginationNext 
                              onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
                              className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                            />
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-black"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto cosmic-card p-8 md:p-12 bg-gray-900/80 backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-600 rounded-full filter blur-[80px] opacity-30"></div>
              
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 text-white">Restez informé</h2>
                <p className="text-gray-100">
                  Abonnez-vous à ma newsletter pour recevoir mes derniers articles et actualités sur l'innovation numérique.
                </p>
              </div>
              
              <form className="flex flex-col md:flex-row gap-4">
                <Input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="flex-grow bg-gray-900/50 backdrop-blur-sm border border-white/20 text-white placeholder:text-gray-300"
                />
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white"
                >
                  S'abonner
                </Button>
              </form>
              
              <div className="text-center mt-4 text-sm text-gray-200">
                En vous inscrivant, vous acceptez notre politique de confidentialité.
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
