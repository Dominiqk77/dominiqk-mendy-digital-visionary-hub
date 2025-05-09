
import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Loader, Server, Database } from 'lucide-react';

const BlogPage = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Blog Tech & Innovation | Dominique Mendy | Tendances Digitales Africaines';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Blog tech et innovation par Dominique Mendy: analyses, tendances et conseils sur l\'IA, le développement web, le marketing digital et la transformation numérique en Afrique.'
      );
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Simulated real-time metrics
  const [metrics, setMetrics] = useState({
    articlesPublished: 72,
    totalReaders: 18436,
    avgReadTime: 4.7,
    subscriptions: 2845
  });

  // Simulate real-time data updates
  useEffect(() => {
    const metricsInterval = setInterval(() => {
      setMetrics(prev => ({
        articlesPublished: prev.articlesPublished,
        totalReaders: prev.totalReaders + Math.floor(Math.random() * 5) + 1,
        avgReadTime: parseFloat((prev.avgReadTime + (Math.random() * 0.2 - 0.1)).toFixed(1)),
        subscriptions: prev.subscriptions + (Math.random() > 0.7 ? 1 : 0)
      }));
    }, 10000);
    
    return () => clearInterval(metricsInterval);
  }, []);

  // Mock blog posts for the placeholder
  const placeholderPosts = [
    {
      id: 1,
      title: "L'IA en Afrique: Opportunités et Défis",
      excerpt: "Exploration des possibilités transformatives de l'intelligence artificielle sur le continent africain et des défis à surmonter pour une adoption réussie.",
      category: "Intelligence Artificielle",
      readTime: "8 min",
      date: "À venir"
    },
    {
      id: 2,
      title: "Web 3.0: L'Avenir du Web en Afrique",
      excerpt: "Comment les technologies décentralisées et le Web 3.0 peuvent révolutionner l'économie numérique africaine et créer de nouvelles opportunités.",
      category: "Web Development",
      readTime: "6 min",
      date: "À venir"
    },
    {
      id: 3,
      title: "Marketing Digital: Stratégies Adaptées au Marché Africain",
      excerpt: "Techniques et approches marketing spécifiquement conçues pour réussir dans le contexte unique des marchés africains en pleine expansion.",
      category: "Marketing Digital",
      readTime: "5 min",
      date: "À venir"
    },
    {
      id: 4,
      title: "E-Gouvernance: Transformation Digitale du Secteur Public",
      excerpt: "Analyse des meilleures pratiques en matière de digitalisation des services publics et de l'administration pour une gouvernance plus efficace.",
      category: "E-Gouvernance",
      readTime: "7 min",
      date: "À venir"
    },
    {
      id: 5,
      title: "Sécurité Informatique: Protéger les Données en Afrique",
      excerpt: "Enjeux et solutions pour assurer la cybersécurité des entreprises et organisations africaines face aux menaces croissantes.",
      category: "Cybersécurité",
      readTime: "9 min",
      date: "À venir"
    },
    {
      id: 6,
      title: "Entrepreneuriat Tech: Écosystème des Startups Africaines",
      excerpt: "Panorama de l'écosystème entrepreneurial technologique en Afrique et conseils pour les entrepreneurs tech africains.",
      category: "Entrepreneuriat",
      readTime: "6 min",
      date: "À venir"
    }
  ];

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
          
          {/* Grid lines overlay */}
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
                Blog <span className="text-gradient">Tech & Innovation</span>
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
                className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
              >
                Analyses, tendances et conseils sur l'IA, le développement web, le marketing digital et la transformation numérique en Afrique
              </motion.p>
              
              {/* Blog analytics */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
              >
                <div className="p-4 border border-gray-800/40 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-gradient">{metrics.articlesPublished}</div>
                  <div className="text-gray-400 text-sm">Articles</div>
                </div>
                <div className="p-4 border border-gray-800/40 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-gradient">{metrics.totalReaders.toLocaleString()}</div>
                  <div className="text-gray-400 text-sm">Lecteurs</div>
                </div>
                <div className="p-4 border border-gray-800/40 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-gradient">{metrics.avgReadTime} min</div>
                  <div className="text-gray-400 text-sm">Temps de lecture</div>
                </div>
                <div className="p-4 border border-gray-800/40 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl font-bold text-gradient">{metrics.subscriptions.toLocaleString()}</div>
                  <div className="text-gray-400 text-sm">Abonnés</div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Animated connection lines */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-0 inset-x-0 h-[50px] flex justify-center items-end"
          >
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className="h-full mx-3 w-px bg-gradient-to-b from-transparent via-portfolio-blue to-primary"
                style={{ height: `${30 + i * 10}px` }}
              />
            ))}
          </motion.div>
        </section>
        
        {/* Blog Placeholder Content */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Coming Soon Notice */}
              <Card className="mb-12 border-gradient border-gradient-strong backdrop-blur-sm bg-black/40 p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">Contenu en préparation</h2>
                    <p className="text-gray-300">
                      Notre blog est en cours de développement. Découvrez bientôt des articles captivants sur l'innovation numérique, l'IA et la transformation digitale en Afrique.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="h-16 w-16 flex items-center justify-center border border-portfolio-blue rounded-full relative">
                      <Loader className="h-8 w-8 text-portfolio-blue animate-spin" />
                      <div className="absolute inset-0 border border-portfolio-blue rounded-full animate-ping opacity-50"></div>
                    </div>
                    <span className="text-sm text-gray-400">En développement</span>
                  </div>
                </div>
              </Card>
              
              {/* Featured Articles */}
              <div className="mb-12">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold flex items-center">
                    <Server className="h-5 w-5 text-portfolio-blue mr-2" />
                    <span>Articles à venir</span>
                  </h2>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">Chargement</span>
                    <span className="h-2 w-2 rounded-full bg-portfolio-blue animate-pulse"></span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {placeholderPosts.slice(0, 3).map((post, index) => (
                    <motion.div 
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="border border-gray-800/40 rounded-lg overflow-hidden backdrop-blur-sm relative"
                      whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(155, 135, 245, 0.15)" }}
                    >
                      {/* Tech decoration line top */}
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-portfolio-purple to-transparent"></div>
                      
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-xs px-2 py-1 rounded-full border border-portfolio-blue/30 bg-portfolio-blue/10 text-portfolio-blue">
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-400 flex items-center">
                            <Database className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                        <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">{post.date}</span>
                          <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                            <span>Bientôt disponible</span>
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </Button>
                        </div>
                      </div>
                      
                      {/* Tech background pattern */}
                      <div className="absolute bottom-2 right-2 w-12 h-12 opacity-5">
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0" y="0" width="8" height="8" fill="currentColor" />
                          <rect x="10" y="0" width="8" height="8" fill="currentColor" />
                          <rect x="20" y="0" width="8" height="8" fill="currentColor" />
                          <rect x="0" y="10" width="8" height="8" fill="currentColor" />
                          <rect x="20" y="10" width="8" height="8" fill="currentColor" />
                          <rect x="0" y="20" width="8" height="8" fill="currentColor" />
                          <rect x="10" y="20" width="8" height="8" fill="currentColor" />
                          <rect x="20" y="20" width="8" height="8" fill="currentColor" />
                        </svg>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Latest Articles */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold flex items-center">
                    <Database className="h-5 w-5 text-portfolio-pink mr-2" />
                    <span>Autres sujets à explorer</span>
                  </h2>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400">Coming soon</span>
                    <span className="h-2 w-2 rounded-full bg-portfolio-pink animate-pulse"></span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {placeholderPosts.slice(3, 6).map((post, index) => (
                    <motion.div 
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="border border-gray-800/40 rounded-lg overflow-hidden backdrop-blur-sm relative"
                      whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(217, 70, 239, 0.15)" }}
                    >
                      {/* Tech decoration line top */}
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-portfolio-pink to-transparent"></div>
                      
                      <div className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs px-2 py-1 rounded-full border border-portfolio-pink/30 bg-portfolio-pink/10 text-portfolio-pink">
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-400">{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                        <p className="text-gray-400 text-xs mb-3">{post.excerpt}</p>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">{post.date}</span>
                          <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                            <span>Bientôt</span>
                            <ArrowRight className="h-3 w-3 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-16 p-8 border-gradient border-gradient-strong rounded-xl backdrop-blur-sm bg-black/40 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bottom-0 w-1/3 opacity-10">
                  <svg className="h-full w-full" viewBox="0 0 300 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="250" cy="150" r="100" stroke="currentColor" strokeWidth="1" />
                    <circle cx="250" cy="150" r="150" stroke="currentColor" strokeWidth="0.5" />
                    <circle cx="250" cy="150" r="200" stroke="currentColor" strokeWidth="0.25" />
                  </svg>
                </div>
                
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Restez informé</h2>
                  <p className="text-gray-300 mb-6">
                    Abonnez-vous à notre newsletter pour recevoir les derniers articles, analyses et tendances sur l'innovation numérique en Afrique.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <input 
                      type="email" 
                      placeholder="Votre email"
                      className="px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white placeholder:text-gray-500 flex-1"
                    />
                    <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                      S'abonner
                    </Button>
                  </div>
                  
                  <div className="mt-4 text-xs text-gray-500">
                    Nous respectons votre vie privée. Désabonnez-vous à tout moment.
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
