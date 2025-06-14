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
  
  // Updated blog posts with new articles - New Deal Technologique as the most recent
  const blogPosts = [
    {
      id: 27,
      title: "New Deal Technologique: Guide d'Investissement Exclusif Sénégal 2025-2030",
      excerpt: "Découvrez les opportunités d'investissement technologique les plus prometteuses du Sénégal. ROI de 300-800%, secteurs en hypercroissance, écosystème startup mature. Guide complet avec roadmaps d'exécution et contacts privilégiés.",
      date: "2024-12-16",
      readTime: "45 min",
      author: "Dominiqk Mendy",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      category: "investissement",
      likes: 298,
      comments: 67,
      featured: true,
      isNewDeal: true // Special flag for the New Deal page
    },
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
    },
    // Série IA & Innovation
    {
      id: 7,
      title: "L'IA Générative et l'Avenir du Travail en Afrique: Transformation, Opportunités et Préparation",
      excerpt: "Analyse approfondie de la révolution imminente du marché du travail africain par l'IA et des stratégies pour préparer la main-d'œuvre.",
      date: "2023-06-10",
      readTime: "12 min",
      author: "Dominiqk Mendy",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      category: "ia",
      likes: 143,
      comments: 38,
      featured: true
    },
    {
      id: 8,
      title: "Au-delà des Chatbots: L'IA pour une Innovation Disruptive dans les Entreprises Africaines",
      excerpt: "Explorer les cas d'usage avancés de l'IA qui transforment les industries africaines et créent de nouveaux paradigmes d'innovation.",
      date: "2023-06-25",
      readTime: "10 min",
      author: "Dominiqk Mendy",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      category: "ia",
      likes: 127,
      comments: 29,
      featured: false
    },
    {
      id: 9,
      title: "Intelligence Artificielle et Souveraineté Numérique: L'Impératif Africain",
      excerpt: "Pourquoi le développement de modèles d'IA africains est crucial pour l'autonomie technologique et la compétitivité du continent.",
      date: "2023-07-08",
      readTime: "11 min",
      author: "Dominiqk Mendy",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      category: "ia",
      likes: 165,
      comments: 42,
      featured: true
    },
    {
      id: 10,
      title: "IA Frugale: Comment l'Innovation Contrainte Africaine Réinvente l'Intelligence Artificielle",
      excerpt: "Découvrez comment les défis uniques de l'Afrique stimulent une nouvelle génération d'innovations en IA plus efficientes et accessibles.",
      date: "2023-07-22",
      readTime: "9 min",
      author: "Dominiqk Mendy",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      category: "ia",
      likes: 118,
      comments: 27,
      featured: false
    },
    {
      id: 11,
      title: "Architecture Web Progressive pour le Contexte Africain: Guide Complet pour Développeurs",
      excerpt: "Méthodologies avancées pour créer des applications web performantes adaptées aux contraintes de connectivité africaines.",
      date: "2023-08-05",
      readTime: "14 min",
      author: "Dominiqk Mendy",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      category: "web",
      likes: 154,
      comments: 46,
      featured: true
    },
    {
      id: 12,
      title: "API Economy: Comment les Développeurs Africains Peuvent Capitaliser sur l'Écosystème Global",
      excerpt: "Stratégies pour intégrer et exploiter l'économie des API, créer de la valeur et développer de nouvelles opportunités d'affaires.",
      date: "2023-08-18",
      readTime: "8 min",
      author: "Dominiqk Mendy",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      category: "web",
      likes: 109,
      comments: 33,
      featured: false
    },
    {
      id: 13,
      title: "Edge Computing en Afrique: La Révolution de l'Internet des Objets sur le Continent",
      excerpt: "Analyse de l'infrastructure edge computing émergeante et son potentiel transformatif pour les solutions IoT africaines.",
      date: "2023-09-03",
      readTime: "10 min",
      author: "Dominiqk Mendy",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      category: "technologie",
      likes: 132,
      comments: 28,
      featured: false
    },
    {
      id: 14,
      title: "Web 3.0 et Décentralisation: Implications et Opportunités pour l'Afrique Digitale",
      excerpt: "Vision prospective des technologies blockchain et décentralisées et leur potentiel transformatif pour l'économie numérique africaine.",
      date: "2023-09-15",
      readTime: "12 min",
      author: "Dominiqk Mendy",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      category: "technologie",
      likes: 147,
      comments: 39,
      featured: true
    },
    {
      id: 15,
      title: "Digital Government Transformation: Feuille de Route Stratégique pour les Administrations Africaines",
      excerpt: "Méthodologie complète pour transformer les services publics africains à travers la digitalisation efficace et centrée sur le citoyen.",
      date: "2023-09-28",
      readTime: "15 min",
      author: "Dominiqk Mendy",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      category: "gouvernance",
      likes: 163,
      comments: 47,
      featured: true
    },
    {
      id: 16,
      title: "Smart Cities Africaines: Vision Intégrée pour un Développement Urbain Durable",
      excerpt: "Cadre conceptuel pour les villes intelligentes adaptées aux défis urbains spécifiques du continent africain.",
      date: "2023-10-10",
      readTime: "13 min",
      author: "Dominiqk Mendy",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      category: "gouvernance",
      likes: 129,
      comments: 34,
      featured: false
    },
    {
      id: 17,
      title: "Cybersécurité et Résilience Digitale: Stratégies Critiques pour les Institutions Africaines",
      excerpt: "Analyse des menaces cybernétiques et cadre stratégique pour protéger les infrastructures numériques vitales d'Afrique.",
      date: "2023-10-23",
      readTime: "11 min",
      author: "Dominiqk Mendy",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      category: "gouvernance",
      likes: 151,
      comments: 43,
      featured: false
    },
    {
      id: 18,
      title: "Open Data et Innovation Publique: Comment Libérer la Valeur des Données Gouvernementales",
      excerpt: "Vision stratégique pour les politiques de données ouvertes et leur impact transformatif sur l'innovation et la transparence.",
      date: "2023-11-05",
      readTime: "9 min",
      author: "Dominiqk Mendy",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      category: "gouvernance",
      likes: 116,
      comments: 29,
      featured: true
    },
    {
      id: 19,
      title: "Marketing Omnicanal en Contexte Africain: Stratégies Intégrées pour un Parcours Client Fluide",
      excerpt: "Modèle stratégique adapté aux spécificités des marchés africains pour créer des expériences client cohérentes et impactantes.",
      date: "2023-11-18",
      readTime: "10 min",
      author: "Dominiqk Mendy",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      category: "marketing",
      likes: 135,
      comments: 32,
      featured: false
    },
    {
      id: 20,
      title: "Voice Search Optimization: Guide pour Exploiter le Potentiel de la Recherche Vocale en Afrique",
      excerpt: "Stratégies SEO spécifiques pour le marché africain intégrant les nuances linguistiques et comportementales locales.",
      date: "2023-12-01",
      readTime: "8 min",
      author: "Dominiqk Mendy",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      category: "marketing",
      likes: 124,
      comments: 28,
      featured: false
    },
    {
      id: 21,
      title: "Personnalisation à Grande Échelle: L'Art du Marketing 1:1 dans les Marchés Émergents",
      excerpt: "Méthodologies avancées pour implémenter des stratégies de personnalisation efficaces malgré les contraintes technologiques.",
      date: "2023-12-14",
      readTime: "11 min",
      author: "Dominiqk Mendy",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      category: "marketing",
      likes: 142,
      comments: 37,
      featured: true
    },
    {
      id: 22,
      title: "EdTech en Afrique: Innovations Pédagogiques pour la Formation du Talent Continental",
      excerpt: "Analyse des technologies éducatives prometteuses et leur potentiel pour transformer l'éducation africaine.",
      date: "2023-12-27",
      readTime: "13 min",
      author: "Dominiqk Mendy",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      category: "formation",
      likes: 157,
      comments: 44,
      featured: true
    },
    {
      id: 23,
      title: "Formation Tech 2.0: Compétences Critiques pour l'Économie Numérique Africaine",
      excerpt: "Cartographie des compétences tech les plus demandées et stratégies éducatives pour combler le déficit de talents.",
      date: "2024-01-10",
      readTime: "10 min",
      author: "Dominiqk Mendy",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      category: "formation",
      likes: 128,
      comments: 35,
      featured: false
    },
    {
      id: 24,
      title: "Apprentissage Continu: Cadre Stratégique pour le Développement Professionnel en Contexte Digital",
      excerpt: "Méthodologies pour cultiver une culture d'apprentissage continu au sein des organisations africaines.",
      date: "2024-03-18",
      readTime: "12 min",
      author: "Dominiqk Mendy",
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      category: "formation",
      likes: 114,
      comments: 26,
      featured: false
    },
    {
      id: 25,
      title: "Les opportunités de l'e-learning en Afrique",
      excerpt: "Comment l'e-learning peut transformer l'éducation en Afrique et offrir des solutions innovantes pour la formation continue et l'accès au savoir.",
      date: "2024-04-01",
      readTime: "9 min",
      author: "Dominiqk Mendy",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      category: "formation",
      likes: 85,
      comments: 18,
      featured: true
    },
    {
      id: 26,
      title: "Les défis de la cybersécurité en Afrique",
      excerpt: "Analyse des défis de la cybersécurité pour les entreprises africaines et des stratégies adaptées pour protéger les infrastructures numériques en développement.",
      date: "2024-04-15",
      readTime: "10 min",
      author: "Dominiqk Mendy",
      image: "https://images.unsplash.com/photo-1510511233900-1982d92bd835?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      category: "technologie",
      likes: 90,
      comments: 20,
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'Tous les articles' },
    { id: 'investissement', name: 'Investissement & Finance' },
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
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1); // Reset to page 1 on search
                  }}
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
                      {post.isNewDeal && (
                        <div className="absolute top-2 left-2 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">
                          NEW DEAL
                        </div>
                      )}
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
                        <Link to={post.isNewDeal ? "/new-deal-technologique" : `/blog/${post.id}`}>
                          {post.title}
                        </Link>
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
                          <div className="md:w-1/3 h-48 md:h-auto relative">
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-full object-cover"
                            />
                            {post.isNewDeal && (
                              <div className="absolute top-2 left-2 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 text-white text-xs font-bold px-2 py-1 rounded-md">
                                NEW DEAL
                              </div>
                            )}
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
                              <Link to={post.isNewDeal ? "/new-deal-technologique" : `/blog/${post.id}`}>
                                {post.title}
                              </Link>
                            </h3>
                            
                            <p className="text-gray-200 mb-4">{post.excerpt}</p>
                            
                            <div className="flex items-center justify-between">
                              <Button 
                                variant="outline" 
                                size="sm" 
                                className="border-indigo-500/30 text-indigo-400 hover:bg-indigo-900/20"
                                asChild
                              >
                                <Link to={post.isNewDeal ? "/new-deal-technologique" : `/blog/${post.id}`}>
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
