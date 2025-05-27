import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageContainer from '../components/layout/PageContainer';
import SpaceBackground from '@/components/space/SpaceBackground';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Award, Book, Briefcase, Calendar, Check, GraduationCap, Laptop, Landmark, Star, Users, Globe, Rocket, Brain, Code2, Heart, MapPin, Lightbulb, Target, Building2, TrendingUp, Zap, Crown, Sparkles } from 'lucide-react';

const AboutPage = () => {
  // Set page metadata
  useEffect(() => {
    document.title = "À Propos | Dominiqk Mendy - Expert en Transformation Digitale";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        "Découvrez le parcours de Dominiqk Mendy, expert en transformation digitale avec plus de 15 ans d'expérience internationale entre l'Europe, le Maroc et l'international."
      );
    }
    
    window.scrollTo(0, 0);
  }, []);

  // Enhanced career timeline data with visual elements
  const careerTimeline = [
    {
      year: "2023 - Présent",
      title: "Fondateur & CEO",
      company: "Millennium Capital Invest Ltd",
      description: "Direction de projets innovants à l'échelle internationale et développement de solutions digitales pour clients de divers continents.",
      location: "Marrakech / Londres / Remote",
      icon: <Crown className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-500/10 to-orange-500/10",
      achievements: ["Leadership International", "Innovation Digitale", "Vision Stratégique", "Impact Global"],
      level: "CEO"
    },
    {
      year: "2020 - 2023",
      title: "Consultant Senior en Transformation Digitale",
      company: "Millennium Capital Invest Ltd",
      description: "Accompagnement d'entreprises internationales dans leur transition numérique et formation de talents locaux et internationaux.",
      location: "Marrakech, Maroc",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-500/10 to-indigo-500/10",
      achievements: ["Transformation Digitale", "Formation Internationale", "Consulting Expert", "Projets Stratégiques"],
      level: "Senior"
    },
    {
      year: "2018 - 2020",
      title: "Lead Developer & Chef de Projet Tech",
      company: "GlobalTech Solutions",
      description: "Direction d'une équipe de 8 développeurs et architecte principal sur des projets fintech et e-commerce internationaux.",
      location: "Marrakech / Remote",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      achievements: ["Leadership Équipe", "Architecture Technique", "Projets Fintech", "E-commerce International"],
      level: "Lead"
    },
    {
      year: "2015 - 2018",
      title: "Développeur Full-Stack Senior",
      company: "InnovateTech Ltd",
      description: "Développement de solutions web complexes et intégration de technologies IA pour des clients internationaux.",
      location: "Marrakech, Maroc / Remote",
      icon: <Code2 className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      achievements: ["Développement IA", "Solutions Complexes", "Clients Internationaux", "Innovation Tech"],
      level: "Senior"
    },
    {
      year: "2012 - 2015",
      title: "Développeur Full-Stack",
      company: "WebWorks International",
      description: "Création de sites e-commerce et plateformes web pour PME et startups européennes et nord-africaines.",
      location: "Marrakech, Maroc / Remote",
      icon: <Laptop className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-500/10 to-cyan-500/10",
      achievements: ["E-commerce", "Startups", "PME Européennes", "Bases Solides"],
      level: "Developer"
    }
  ];

  // Story chapters for creative storytelling
  const storyChapters = [
    {
      chapter: "Chapitre 1",
      title: "Les Racines : Dakar, l'Éveil Technologique",
      icon: <Rocket className="w-8 h-8" />,
      period: "2010-2014",
      story: "Tout a commencé à Dakar, où ma passion pour la création et l'innovation a pris racine. Dès mon plus jeune âge, je transformais chaque idée en projet tangible. Ma formation à l'ENSUP Dakar et à l'ESGHA m'a donné les bases solides en marketing, communication et gestion hôtelière.",
      highlights: ["Formation Marketing & Communication", "Gestion Hôtelière", "Premiers projets créatifs", "Vision entrepreneuriale naissante"],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10"
    },
    {
      chapter: "Chapitre 2", 
      title: "La Métamorphose : Marrakech, Terre d'Innovation",
      icon: <Brain className="w-8 h-8" />,
      period: "2015-2017",
      story: "L'aventure marocaine commence avec mon Master en Management et Stratégies d'Entreprises à Marrakech. Cette ville magique devient le théâtre de ma transformation digitale. Je découvre ma véritable passion pour les technologies de pointe et l'intelligence artificielle.",
      highlights: ["Master en Management", "Découverte de l'IA", "Premiers projets tech", "Formation continue en ligne"],
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-500/10 to-indigo-500/10"
    },
    {
      chapter: "Chapitre 3",
      title: "L'Ascension : Expert Reconnu",
      icon: <Code2 className="w-8 h-8" />,
      period: "2018-2022",
      story: "Les années d'expertise se construisent : développement web avancé, maîtrise de l'IA, leadership d'équipes internationales. Mes projets touchent l'Europe, l'Afrique et le Moyen-Orient. Je devient un pont technologique entre les continents.",
      highlights: ["Lead Developer expérimenté", "Projets internationaux", "Équipes multiculturelles", "Expertise IA approfondie"],
      color: "from-purple-500 to-pink-500", 
      bgColor: "from-purple-500/10 to-pink-500/10"
    },
    {
      chapter: "Chapitre 4",
      title: "La Vision Globale : Impact International",
      icon: <Globe className="w-8 h-8" />,
      period: "2023-Présent",
      story: "Aujourd'hui, je dirige Millennium Capital Invest, voyageant entre Marrakech, Londres, la France et l'Espagne. Ma mission : démocratiser l'accès aux technologies avancées et former la nouvelle génération de talents numériques à l'échelle mondiale.",
      highlights: ["CEO & Fondateur", "Présence internationale", "Formation de talents", "Innovation continue"],
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10"
    }
  ];

  // Skills and expertise
  const expertise = [
    {
      category: "Développement Web & Mobile",
      skills: ["React", "Node.js", "Next.js", "React Native", "TypeScript", "GraphQL", "RESTful APIs", "Responsive Design", "Progressive Web Apps"]
    },
    {
      category: "Intelligence Artificielle",
      skills: ["Machine Learning", "NLP", "Computer Vision", "Modèles de langage", "TensorFlow", "PyTorch", "OpenAI API", "Analyse prédictive", "Big Data"]
    },
    {
      category: "Marketing Digital",
      skills: ["SEO", "SEM", "Analytics", "Content Marketing", "Social Media Strategy", "Email Marketing", "Growth Hacking", "Automatisation Marketing", "CRO"]
    },
    {
      category: "Consulting & Stratégie",
      skills: ["Transformation Digitale", "Product Strategy", "Processus Agile", "Formation Tech", "Innovation", "Business Intelligence", "Management d'équipe", "Roadmap Produit"]
    }
  ];

  // Values
  const values = [
    {
      title: "Innovation Globale",
      description: "Je crois profondément au potentiel de l'innovation technologique pour résoudre des défis mondiaux, en créant des ponts entre différentes cultures et marchés pour un impact maximal.",
      icon: <Landmark className="w-6 h-6" />
    },
    {
      title: "Excellence Technique",
      description: "Chaque ligne de code, chaque design et chaque solution développée doit répondre aux standards internationaux les plus élevés sans compromis.",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Impact Social",
      description: "La technologie doit servir un objectif plus grand que le profit - elle doit améliorer concrètement la vie des citoyens et contribuer au développement durable dans toutes les régions du monde.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Transmission du Savoir",
      description: "Je m'engage à former la prochaine génération de talents tech à l'international, en partageant mes connaissances et mon expertise pour créer un écosystème digital robuste et innovant.",
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

  // Education and certifications
  const education = [
    {
      degree: "Master en Management et Stratégies d'Entreprises",
      institution: "ECOLE DE FORMATION PRIVEE RACINE",
      year: "2015-2017",
      location: "Marrakech, Maroc"
    },
    {
      degree: "Licence en Marketing & Communication",
      institution: "ENSUP DAKAR",
      year: "2012-2014",
      location: "Dakar, Sénégal"
    },
    {
      degree: "Formation Spécialisée IA & Machine Learning",
      institution: "Coursera & edX",
      year: "2019",
      location: "Formation en ligne"
    }
  ];

  // Certifications
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2022"
    },
    {
      title: "Google Professional Data Engineer",
      issuer: "Google Cloud",
      year: "2021"
    },
    {
      title: "Microsoft Certified: Azure AI Engineer",
      issuer: "Microsoft",
      year: "2020"
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      year: "2019"
    },
    {
      title: "Certified Scrum Master",
      issuer: "Scrum Alliance",
      year: "2018"
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "Quelles technologies maîtrisez-vous le mieux?",
      answer: "Je travaille principalement avec l'écosystème JavaScript moderne (React, Node.js, TypeScript) pour le développement web, Python pour l'IA et le ML, ainsi que les technologies cloud comme AWS et Azure. Cette combinaison me permet de développer des solutions complètes, du frontend au déploiement."
    },
    {
      question: "Comment abordez-vous les projets de transformation digitale?",
      answer: "Ma méthode repose sur trois piliers: l'analyse approfondie des besoins réels (au-delà des demandes initiales), la priorisation stratégique des développements à fort impact, et l'accompagnement au changement. Je m'assure que la technologie serve la stratégie business, et non l'inverse."
    },
    {
      question: "Travaillez-vous sur des projets internationaux uniquement?",
      answer: "Mon expertise s'étend à l'échelle mondiale. Basé à Marrakech depuis 11 ans, je voyage régulièrement entre le Maroc, Londres, la France et l'Espagne pour servir mes clients internationaux. Cette mobilité me permet d'apporter une vision globale et des solutions adaptées aux réalités locales de chaque marché."
    },
    {
      question: "Comment assurez-vous la formation des équipes locales?",
      answer: "Je crois fermement au transfer de compétences. Pour chaque projet, j'intègre un volet formation structuré: sessions pratiques, documentation détaillée, et période de mentorat. Mon objectif est de rendre les équipes autonomes dans la maintenance et l'évolution des solutions implémentées."
    },
    {
      question: "Que recherchez-vous dans les partenariats et collaborations?",
      answer: "Je privilégie les collaborations avec une vision à long terme et un impact positif. Je recherche des partenaires qui partagent mes valeurs d'excellence technique, d'innovation responsable et d'impact social. La transparence, l'honnêteté et l'ambition de créer des solutions durables sont essentielles dans mes partenariats."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col relative bg-black">
      <Navbar />
      
      {/* Space background */}
      <SpaceBackground />
      
      <main className="flex-grow z-10 relative">
        {/* Hero Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <PageContainer>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm font-semibold text-white bg-primary/80 hover:bg-primary">Mon Parcours</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  À Propos de <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">Moi</span>
                </h1>
                <div className="h-1 w-24 bg-gradient-primary mb-6"></div>
                <p className="text-xl text-gray-200 mb-8">
                  Expert en transformation digitale avec plus de 15 ans d'expérience internationale, je combine expertise technique et vision stratégique pour développer des solutions innovantes à fort impact sur plusieurs continents.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white" asChild>
                    <Link to="/contact">
                      Me contacter
                    </Link>
                  </Button>
                  <Button variant="outline" className="text-white border-white/30 hover:bg-white/10" asChild>
                    <Link to="/portfolio">
                      Voir mes réalisations
                    </Link>
                  </Button>
                </div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="relative">
                  <img 
                    src="/lovable-uploads/7b98f889-bcee-4a02-936c-da25dd311425.png" 
                    alt="Dominiqk Mendy" 
                    className="w-64 h-64 object-cover rounded-full border-4 border-gradient-to-r from-blue-600 to-purple-600 shadow-xl"
                  />
                  
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg transform rotate-3">
                    <span className="font-semibold">15+ années d'expérience</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </PageContainer>
        </section>
        
        {/* My Story Section - Enhanced Storytelling */}
        <section className="py-20 bg-black/30 backdrop-blur-md border-t border-b border-white/10 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          {/* Floating tech symbols */}
          <div className="absolute inset-0 opacity-5">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-white text-4xl"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.1, 0.3, 0.1], 
                  y: [0, -20, 0],
                  rotate: [0, 360]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 10 + i * 2,
                  delay: i * 1.5
                }}
                style={{
                  top: `${10 + Math.random() * 80}%`,
                  left: `${5 + Math.random() * 90}%`,
                }}
              >
                {['⚡', '🚀', '💡', '🌟', '⭐', '✨', '🔥', '💫'][i]}
              </motion.div>
            ))}
          </div>

          <PageContainer>
            <div className="max-w-6xl mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Mon <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">Parcours</span>
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 mx-auto mb-6"></div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Une odyssée technologique à travers les continents, façonnée par la passion, l'innovation et l'impact mondial
                </p>
              </motion.div>
              
              {/* Story Chapters */}
              <div className="space-y-20">
                {storyChapters.map((chapter, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                  >
                    {/* Content Side */}
                    <div className="flex-1 space-y-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${chapter.color} p-4 flex items-center justify-center text-white shadow-lg`}>
                          {chapter.icon}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{chapter.chapter}</p>
                          <p className="text-lg font-medium text-white">{chapter.period}</p>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                        {chapter.title}
                      </h3>
                      
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {chapter.story}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {chapter.highlights.map((highlight, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 * idx }}
                            className="flex items-center gap-3 p-3 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10"
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${chapter.color}`}></div>
                            <span className="text-white text-sm font-medium">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Visual Side */}
                    <div className="flex-1 flex justify-center">
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        className={`relative w-80 h-80 rounded-2xl bg-gradient-to-br ${chapter.bgColor} backdrop-blur-md border border-white/20 shadow-xl overflow-hidden`}
                      >
                        {/* Decorative elements */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                        <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r ${chapter.color} opacity-80 blur-xl`}></div>
                        <div className={`absolute bottom-4 left-4 w-8 h-8 rounded-full bg-gradient-to-r ${chapter.color} opacity-60 blur-lg`}></div>
                        
                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className={`w-20 h-20 rounded-full bg-gradient-to-r ${chapter.color} p-5 mb-6 shadow-lg`}
                          >
                            {chapter.icon}
                          </motion.div>
                          <h4 className="text-xl font-bold text-white mb-2">{chapter.chapter}</h4>
                          <p className="text-gray-300 text-sm">{chapter.period}</p>
                          
                          {/* Animated dots */}
                          <div className="flex gap-2 mt-6">
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${chapter.color}`}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Passion & Vision */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-20 text-center"
              >
                <div className="bg-gradient-to-r from-black/60 via-purple-900/20 to-black/60 backdrop-blur-md rounded-3xl p-12 border border-white/10">
                  <div className="flex justify-center mb-6">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-4 shadow-lg"
                    >
                      <Heart className="w-full h-full text-white" />
                    </motion.div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Ma Passion & Ma Vision</h3>
                  <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Je crois profondément que l'innovation technologique est un puissant vecteur de développement global. 
                    Mon ambition est de contribuer à l'émergence d'un écosystème tech mondial inclusif, où talents et expertises 
                    de tous horizons collaborent pour développer des solutions adaptées aux défis uniques de chaque marché, 
                    tout en partageant les meilleures pratiques internationales.
                  </p>
                  
                  <div className="mt-8 grid md:grid-cols-2 gap-6">
                    {values.map((value, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group"
                      >
                        <Card className="h-full bg-black/50 border border-white/10 hover:border-primary/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
                          <CardContent className="p-6">
                            <div className="text-primary mb-3 group-hover:scale-110 transition-transform">
                              {value.icon}
                            </div>
                            <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                            <p className="text-gray-300 text-sm">{value.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </PageContainer>
        </section>
        
        {/* Enhanced Career Timeline - Ultra Creative Design */}
        <section className="py-20 relative overflow-hidden">
          {/* Cosmic background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-500/15 to-orange-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 opacity-30">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.5, 0.5],
                  y: [0, -100, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 8 + i * 0.5,
                  delay: i * 0.8
                }}
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${10 + Math.random() * 80}%`,
                }}
              />
            ))}
          </div>

          <PageContainer>
            <div className="max-w-7xl mx-auto relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20"
              >
                <div className="flex justify-center mb-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-4 shadow-xl"
                  >
                    <Briefcase className="w-full h-full text-white" />
                  </motion.div>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Parcours <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent">Professionnel</span>
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-400 mx-auto mb-6"></div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Une évolution constante vers l'excellence, marquée par l'innovation et l'impact international
                </p>
              </motion.div>
              
              {/* Career Evolution Path */}
              <div className="relative">
                {/* Central Timeline Spine - Hidden on mobile */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 via-green-500 to-yellow-500 z-10 rounded-full shadow-lg"></div>
                
                {/* Experience Cards */}
                <div className="space-y-24">
                  {careerTimeline.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 50, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, delay: idx * 0.2 }}
                      className={`flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}
                    >
                      {/* Experience Card */}
                      <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                        <motion.div
                          whileHover={{ scale: 1.02, y: -5 }}
                          className={`relative bg-gradient-to-br ${item.bgColor} backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl overflow-hidden group`}
                        >
                          {/* Background Glow Effect */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                          
                          {/* Decorative Elements */}
                          <div className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-r ${item.color} opacity-20 rounded-full blur-xl group-hover:opacity-40 transition-opacity`}></div>
                          <div className={`absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-r ${item.color} opacity-30 rounded-full blur-lg`}></div>
                          
                          {/* Content */}
                          <div className="relative z-10">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-6">
                              <div className="flex items-center gap-4">
                                <motion.div
                                  whileHover={{ rotate: 360, scale: 1.1 }}
                                  transition={{ duration: 0.5 }}
                                  className={`w-14 h-14 rounded-full bg-gradient-to-r ${item.color} p-3 flex items-center justify-center text-white shadow-lg`}
                                >
                                  {item.icon}
                                </motion.div>
                                <div>
                                  <Badge variant="outline" className={`text-xs font-semibold mb-2 border-gradient bg-gradient-to-r ${item.color} text-white border-0`}>
                                    {item.level}
                                  </Badge>
                                  <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{item.year}</p>
                                </div>
                              </div>
                              <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="flex items-center gap-1 text-yellow-400"
                              >
                                <Sparkles className="w-4 h-4" />
                                <Star className="w-3 h-3" />
                              </motion.div>
                            </div>
                            
                            {/* Job Details */}
                            <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                              {item.title}
                            </h3>
                            <div className="flex items-center gap-2 mb-4">
                              <Building2 className="w-4 h-4 text-primary" />
                              <span className="text-lg text-primary font-semibold">{item.company}</span>
                            </div>
                            
                            <p className="text-gray-300 leading-relaxed mb-6">
                              {item.description}
                            </p>
                            
                            {/* Location */}
                            <div className="flex items-center gap-2 mb-6 text-sm text-gray-400">
                              <MapPin className="w-4 h-4 text-primary" />
                              <span>{item.location}</span>
                            </div>
                            
                            {/* Achievements */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {item.achievements.map((achievement, achIdx) => (
                                <motion.div
                                  key={achIdx}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.4, delay: 0.1 * achIdx }}
                                  className="flex items-center gap-3 p-3 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all group/achievement"
                                >
                                  <motion.div 
                                    whileHover={{ scale: 1.2, rotate: 180 }}
                                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color} shadow-md group-hover/achievement:shadow-lg`}
                                  ></motion.div>
                                  <span className="text-white text-sm font-medium group-hover/achievement:text-primary transition-colors">
                                    {achievement}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Central Timeline Node */}
                      <div className="hidden md:block relative w-2/12 z-20">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        >
                          <div className={`relative w-16 h-16 rounded-full bg-gradient-to-r ${item.color} border-4 border-black shadow-xl`}>
                            <div className="absolute inset-2 rounded-full bg-black flex items-center justify-center">
                              <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${item.color}`}></div>
                            </div>
                            
                            {/* Pulsing rings */}
                            <motion.div
                              animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                              transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                              className={`absolute inset-0 rounded-full border-2 border-gradient bg-gradient-to-r ${item.color}`}
                            />
                          </div>
                        </motion.div>
                      </div>
                      
                      {/* Visual Representation */}
                      <div className={`hidden md:block w-5/12 ${idx % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                          whileHover={{ scale: 1.05, rotate: 2 }}
                          className={`relative w-full h-80 rounded-2xl bg-gradient-to-br ${item.bgColor} backdrop-blur-md border border-white/20 shadow-xl overflow-hidden`}
                        >
                          {/* Abstract Visual Elements */}
                          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                          
                          {/* Floating Elements */}
                          <div className="absolute inset-0 p-8">
                            {Array.from({ length: 6 }).map((_, i) => (
                              <motion.div
                                key={i}
                                animate={{ 
                                  y: [0, -20, 0],
                                  opacity: [0.3, 0.8, 0.3],
                                  scale: [0.8, 1.2, 0.8]
                                }}
                                transition={{ 
                                  duration: 3 + i * 0.5, 
                                  repeat: Infinity,
                                  delay: i * 0.5
                                }}
                                className={`absolute w-4 h-4 rounded-full bg-gradient-to-r ${item.color} opacity-60 blur-sm`}
                                style={{
                                  top: `${20 + Math.random() * 60}%`,
                                  left: `${20 + Math.random() * 60}%`,
                                }}
                              />
                            ))}
                          </div>
                          
                          {/* Central Icon */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                              className={`w-24 h-24 rounded-full bg-gradient-to-r ${item.color} p-6 shadow-2xl`}
                            >
                              {item.icon}
                            </motion.div>
                          </div>
                          
                          {/* Year Badge */}
                          <div className="absolute bottom-6 right-6">
                            <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white font-bold text-sm shadow-lg`}>
                              {item.year}
                            </div>
                          </div>
                          
                          {/* Level Indicator */}
                          <div className="absolute top-6 left-6">
                            <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold border border-white/20">
                              {item.level}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Career Evolution Summary */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-24 text-center"
              >
                <div className="bg-gradient-to-r from-black/60 via-blue-900/20 to-black/60 backdrop-blur-md rounded-3xl p-12 border border-white/10 relative overflow-hidden">
                  {/* Background effects */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-center mb-6">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 p-4 shadow-xl"
                      >
                        <TrendingUp className="w-full h-full text-white" />
                      </motion.div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Évolution Professionnelle</h3>
                    <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                      Plus de 15 années d'évolution constante, de développeur passionné à leader international en transformation digitale. 
                      Chaque étape a contribué à forger une expertise unique, alliant excellence technique et vision stratégique pour 
                      accompagner les entreprises vers l'avenir digital.
                    </p>
                    
                    {/* Key Metrics */}
                    <div className="grid md:grid-cols-4 gap-6 mt-10">
                      {[
                        { label: "Années d'expérience", value: "15+", icon: <Calendar className="w-6 h-6" /> },
                        { label: "Projets réalisés", value: "200+", icon: <Target className="w-6 h-6" /> },
                        { label: "Pays d'intervention", value: "10+", icon: <Globe className="w-6 h-6" /> },
                        { label: "Technologies maîtrisées", value: "25+", icon: <Zap className="w-6 h-6" /> }
                      ].map((metric, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="group"
                        >
                          <Card className="h-full bg-black/50 border border-white/10 hover:border-primary/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
                            <CardContent className="p-6 text-center">
                              <div className="text-primary mb-3 group-hover:scale-110 transition-transform flex justify-center">
                                {metric.icon}
                              </div>
                              <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                              <p className="text-gray-300 text-sm">{metric.label}</p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </PageContainer>
        </section>
        
        {/* Skills & Expertise */}
        <section className="py-20 bg-black/30 backdrop-blur-md border-t border-b border-white/10">
          <PageContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-white">Compétences & Expertise</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
            </div>
            
            <Tabs defaultValue="dev" className="w-full max-w-5xl mx-auto">
              <TabsList className="grid grid-cols-4 mb-10">
                <TabsTrigger value="dev">Développement</TabsTrigger>
                <TabsTrigger value="ai">IA & Data</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
                <TabsTrigger value="consulting">Consulting</TabsTrigger>
              </TabsList>
              
              {expertise.map((category, idx) => (
                <TabsContent key={idx} value={Object.keys({dev: true, ai: true, marketing: true, consulting: true})[idx]}>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-6 text-white text-center">{category.category}</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {category.skills.map((skill, skillIdx) => (
                        <div key={skillIdx} className="bg-black/40 p-4 rounded-lg border border-white/10 hover:border-primary/30 transition-all hover:shadow-md hover:shadow-primary/5 flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span className="text-white">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </PageContainer>
        </section>
        
        {/* Education & Certifications */}
        <section className="py-20">
          <PageContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-white">Formation & Certifications</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
                  <Book className="w-5 h-5" />
                  <span>Formation Académique & Professionnelle</span>
                </h3>
                
                <div className="space-y-6">
                  {education.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="bg-black/40 p-5 rounded-lg border border-white/10 hover:border-primary/30 transition-all"
                    >
                      <h4 className="text-lg font-medium text-white mb-1">{item.degree}</h4>
                      <div className="text-primary mb-2">{item.institution}</div>
                      <div className="flex justify-between text-sm text-gray-300">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {item.year}
                        </span>
                        <span>{item.location}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span>Certifications</span>
                </h3>
                
                <div className="space-y-4">
                  {certifications.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex items-center gap-4 bg-black/40 p-4 rounded-lg border border-white/10 hover:border-primary/30 transition-all"
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <Check className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{item.title}</h4>
                        <div className="text-sm text-gray-300 flex items-center justify-between">
                          <span>{item.issuer}</span>
                          <span className="text-primary">{item.year}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </PageContainer>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 bg-black/30 backdrop-blur-md border-t border-white/10">
          <PageContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-white">Questions Fréquentes</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {faqItems.map((item, idx) => (
                <Card key={idx} className="bg-black/40 border border-white/10 hover:border-primary/30 transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-3">{item.question}</h3>
                    <p className="text-gray-300">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-white mb-6">Vous avez d'autres questions ou besoin de plus d'informations?</p>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  <span>Me contacter</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </PageContainer>
        </section>
        
        {/* Call to Action */}
        <section className="py-20">
          <PageContainer>
            <div className="max-w-5xl mx-auto bg-gradient-to-r from-black/60 via-portfolio-purple/20 to-black/60 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10">
              <div className="p-12 md:p-16 relative">
                {/* Background effects */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-portfolio-blue opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-portfolio-purple opacity-20 blur-3xl rounded-full"></div>
                
                <div className="relative z-10 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Prêt à collaborer ensemble?
                  </h2>
                  <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                    Discutons de vos besoins en transformation digitale et voyons comment mes compétences peuvent vous aider à atteindre vos objectifs.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white" asChild>
                      <Link to="/contact">
                        Prendre contact
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10" asChild>
                      <Link to="/portfolio">
                        Voir mes réalisations
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </PageContainer>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
