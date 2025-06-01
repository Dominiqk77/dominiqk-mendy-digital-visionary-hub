import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag, Search, Filter, ChevronRight, BookOpen, TrendingUp, X } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Link } from 'react-router-dom';
import AdvancedCosmicBackground from '@/components/space/AdvancedCosmicBackground';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
  tags: string[];
  content: string;
  estimatedReadTime: number;
  trending?: boolean;
}

const mockPosts: Post[] = [
  {
    id: 1,
    title: "L'impact de l'IA sur l'avenir du travail en Afrique",
    excerpt: "Découvrez comment l'intelligence artificielle transforme le marché du travail africain, créant de nouvelles opportunités tout en posant des défis uniques.",
    imageUrl: "https://images.unsplash.com/photo-1678759414153-984678807445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "15 Mai 2024",
    author: "Dominiqk Mendy",
    tags: ["IA", "Afrique", "Travail", "Technologie"],
    content: "L'intelligence artificielle (IA) est en train de remodeler le monde du travail, et l'Afrique ne fait pas exception. Avec une population jeune et en croissance rapide, le continent africain est à la fois un terrain fertile pour l'adoption de l'IA et confronté à des défis uniques en matière d'emploi. Cet article explore l'impact de l'IA sur l'avenir du travail en Afrique, en mettant en lumière les opportunités et les défis qui se présentent.",
    estimatedReadTime: 7,
    trending: true
  },
  {
    id: 2,
    title: "Comment le marketing digital peut booster votre entreprise en 2024",
    excerpt: "Les stratégies de marketing digital essentielles pour développer votre entreprise en 2024, en tirant parti des dernières tendances et technologies.",
    imageUrl: "https://images.unsplash.com/photo-1682685797274-48993b268717?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "22 Avril 2024",
    author: "Fatou Diop",
    tags: ["Marketing Digital", "Stratégie", "Entreprise", "Tendances"],
    content: "Le marketing digital est devenu un pilier essentiel pour toute entreprise souhaitant prospérer dans le paysage commercial actuel. En 2024, avec l'évolution rapide des technologies et des comportements des consommateurs, il est crucial d'adopter des stratégies de marketing digital innovantes et efficaces. Cet article explore les stratégies de marketing digital essentielles pour développer votre entreprise en 2024, en tirant parti des dernières tendances et technologies.",
    estimatedReadTime: 9
  },
  {
    id: 3,
    title: "Les meilleures pratiques pour sécuriser votre site web contre les cyberattaques",
    excerpt: "Protégez votre site web et les données de vos utilisateurs en suivant ces meilleures pratiques de sécurité informatique.",
    imageUrl: "https://images.unsplash.com/photo-1683736706545-a9b2ca930398?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "05 Mars 2024",
    author: "Abdoulaye Diallo",
    tags: ["Sécurité", "Cyberattaque", "Site Web", "Informatique"],
    content: "La sécurité des sites web est une préoccupation majeure pour les entreprises et les particuliers. Avec l'augmentation constante des cyberattaques, il est essentiel de mettre en place des mesures de protection robustes pour protéger votre site web et les données de vos utilisateurs. Cet article présente les meilleures pratiques pour sécuriser votre site web contre les cyberattaques, en vous fournissant des conseils pratiques et des outils pour renforcer votre sécurité informatique.",
    estimatedReadTime: 6
  },
  {
    id: 4,
    title: "Comment l'e-gouvernance transforme les services publics en Afrique",
    excerpt: "Explorez comment l'e-gouvernance améliore l'efficacité, la transparence et l'accessibilité des services publics en Afrique.",
    imageUrl: "https://images.unsplash.com/photo-1664293882755-591891458402?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "12 Février 2024",
    author: "Aissata Traoré",
    tags: ["E-Gouvernance", "Services Publics", "Afrique", "Technologie"],
    content: "L'e-gouvernance, ou gouvernance électronique, est l'application des technologies de l'information et de la communication (TIC) aux services publics. En Afrique, l'e-gouvernance est en train de transformer la manière dont les services publics sont fournis, en améliorant l'efficacité, la transparence et l'accessibilité. Cet article explore comment l'e-gouvernance transforme les services publics en Afrique, en mettant en lumière les initiatives réussies et les défis à relever.",
    estimatedReadTime: 8
  },
  {
    id: 5,
    title: "Les tendances clés de l'intelligence artificielle en 2024",
    excerpt: "Restez à jour avec les dernières tendances en matière d'intelligence artificielle qui façonneront l'avenir de la technologie et des affaires.",
    imageUrl: "https://images.unsplash.com/photo-1677515159379-e59294284c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "29 Janvier 2024",
    author: "Moussa Sow",
    tags: ["Intelligence Artificielle", "Tendances", "Technologie", "Affaires"],
    content: "L'intelligence artificielle (IA) est en constante évolution, avec de nouvelles tendances et technologies émergentes chaque année. En 2024, plusieurs tendances clés sont en train de façonner l'avenir de l'IA et de son impact sur la technologie et les affaires. Cet article présente les tendances clés de l'intelligence artificielle en 2024, en vous fournissant un aperçu des développements les plus importants et de leurs implications.",
    estimatedReadTime: 7,
    trending: true
  },
  {
    id: 6,
    title: "Le rôle des femmes dans la tech en Afrique : défis et opportunités",
    excerpt: "Examinez les défis auxquels les femmes sont confrontées dans le secteur technologique africain et les opportunités de promouvoir l'inclusion et l'égalité.",
    imageUrl: "https://images.unsplash.com/photo-1682687220745-f13392871b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    date: "18 Janvier 2024",
    author: "Sophie Ndiaye",
    tags: ["Femmes", "Tech", "Afrique", "Inclusion", "Égalité"],
    content: "Le secteur technologique africain est en pleine croissance, mais les femmes y sont encore sous-représentées. Cet article examine les défis auxquels les femmes sont confrontées dans le secteur technologique africain, tels que les stéréotypes de genre, le manque d'accès à l'éducation et aux opportunités, et le harcèlement. Il explore également les opportunités de promouvoir l'inclusion et l'égalité des femmes dans la tech en Afrique, en mettant en lumière les initiatives réussies et les mesures à prendre.",
    estimatedReadTime: 9
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>(mockPosts);

  useEffect(() => {
    document.title = "Blog | Dominiqk Mendy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        "Dernières actualités, tendances et analyses sur l'IA, le marketing digital, l'e-gouvernance et la technologie en Afrique."
      );
    }
    window.scrollTo(0, 0);
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag === selectedTag ? null : tag);
  };

  const filteredPosts = posts.filter(post => {
    const searchMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const tagMatch = selectedTag ? post.tags.includes(selectedTag) : true;
    return searchMatch && tagMatch;
  });

  const trendingPosts = filteredPosts.filter(post => post.trending);
  const recentPosts = filteredPosts.filter(post => !post.trending);

  return (
    <div className="min-h-screen flex flex-col relative">
      <AdvancedCosmicBackground />
      <div className="fixed inset-0 tech-grid z-[-1] opacity-20"></div>
      
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Le Blog <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600">Dominiqk Mendy</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Dernières actualités, tendances et analyses sur l'IA, le marketing digital, l'e-gouvernance et la technologie en Afrique.
              </p>
              
              <div className="flex items-center justify-center max-w-md mx-auto bg-black/20 backdrop-blur-md rounded-full py-2 px-4 border border-white/10">
                <Search className="h-5 w-5 text-gray-400 mr-2" />
                <Input
                  type="search"
                  placeholder="Rechercher un article..."
                  className="bg-transparent border-none text-white focus-visible:ring-0 focus-visible:ring-transparent focus:outline-none placeholder:text-gray-400"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                {searchTerm && (
                  <Button variant="ghost" size="sm" onClick={() => setSearchTerm('')} className="hover:bg-white/5 text-white">
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Posts Section */}
        {trendingPosts.length > 0 && (
          <section className="py-16 relative">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-white">
                  <TrendingUp className="inline-block h-6 w-6 mr-2 align-middle" />
                  Articles Tendances
                </h2>
                <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/5">
                  <Link to="/blog/archive">Voir tous les articles</Link>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trendingPosts.map(post => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="group"
                  >
                    <Card className="h-full bg-black/50 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all overflow-hidden">
                      <Link to={`/blog/${post.id}`}>
                        <div className="relative">
                          <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-52 object-cover rounded-t-md group-hover:scale-105 transition-transform"
                          />
                          <Badge className="absolute top-2 right-2 bg-blue-500 text-white z-10">
                            <TrendingUp className="h-4 w-4 mr-1" />
                            Tendance
                          </Badge>
                        </div>
                        <CardHeader>
                          <CardTitle className="text-xl text-white">{post.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-300">{post.excerpt}</CardDescription>
                        </CardContent>
                      </Link>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Recent Posts Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">
                <BookOpen className="inline-block h-6 w-6 mr-2 align-middle" />
                Articles Récents
              </h2>
              <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/5">
                <Link to="/blog/archive">Voir tous les articles</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map(post => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <Card className="h-full bg-black/50 backdrop-blur-md border border-white/10 hover:border-white/30 transition-all overflow-hidden">
                    <Link to={`/blog/${post.id}`}>
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-52 object-cover rounded-t-md group-hover:scale-105 transition-transform"
                      />
                      <CardHeader>
                        <CardTitle className="text-xl text-white">{post.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-300">{post.excerpt}</CardDescription>
                      </CardContent>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
