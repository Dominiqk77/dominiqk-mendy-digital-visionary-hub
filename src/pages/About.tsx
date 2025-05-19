
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
import { ArrowRight, Award, Book, Briefcase, Calendar, Check, GraduationCap, Laptop, Landmark, Star, Users } from 'lucide-react';

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

  // Career timeline data
  const careerTimeline = [
    {
      year: "2023 - Présent",
      title: "Fondateur & CEO",
      company: "Millennium Capital Invest Ltd",
      description: "Direction de projets innovants à l'échelle internationale et développement de solutions digitales pour clients de divers continents.",
      location: "Marrakech / Londres / Remote"
    },
    {
      year: "2020 - 2023",
      title: "Consultant Senior en Transformation Digitale",
      company: "Millennium Capital Invest Ltd",
      description: "Accompagnement d'entreprises internationales dans leur transition numérique et formation de talents locaux et internationaux.",
      location: "Marrakech, Maroc"
    },
    {
      year: "2018 - 2020",
      title: "Lead Developer & Chef de Projet Tech",
      company: "GlobalTech Solutions",
      description: "Direction d'une équipe de 8 développeurs et architecte principal sur des projets fintech et e-commerce internationaux.",
      location: "Marrakech / Remote"
    },
    {
      year: "2015 - 2018",
      title: "Développeur Full-Stack Senior",
      company: "InnovateTech Ltd",
      description: "Développement de solutions web complexes et intégration de technologies IA pour des clients internationaux.",
      location: "Marrakech, Maroc / Remote"
    },
    {
      year: "2012 - 2015",
      title: "Développeur Full-Stack",
      company: "WebWorks International",
      description: "Création de sites e-commerce et plateformes web pour PME et startups européennes et nord-africaines.",
      location: "Marrakech, Maroc / Remote"
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
                className="relative"
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/30 to-portfolio-purple/30 z-10"></div>
                  <img 
                    src="/lovable-uploads/1d07325e-d8c2-4e54-ac4e-3caf0120f9eb.png" 
                    alt="Dominiqk Mendy" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg transform rotate-3">
                  <span className="font-semibold">15+ années d'expérience</span>
                </div>
              </motion.div>
            </motion.div>
          </PageContainer>
        </section>
        
        {/* My Story Section */}
        <section className="py-20 bg-black/30 backdrop-blur-md border-t border-b border-white/10">
          <PageContainer>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-white text-center">Mon Parcours</h2>
              
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Un Expert International</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Mon parcours professionnel s'étend sur plus de 15 années d'expérience internationale. Basé à Marrakech depuis 11 ans, je voyage régulièrement entre le Maroc, Londres, la France et l'Espagne pour servir une clientèle diversifiée et internationale, tout en développant des projets innovants comme SenServices, une plateforme d'e-gouvernance destinée à révolutionner les services administratifs.
                  </p>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Ma formation inclut un Master en Management et Stratégies d'Entreprises à Marrakech, complété par de nombreuses certifications internationales en ligne dans des domaines de pointe comme l'intelligence artificielle, le cloud computing et le développement web avancé. Cette approche hybride m'a permis d'acquérir une expertise technique solide tout en maintenant une vision stratégique adaptée aux enjeux mondiaux.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Aujourd'hui, je combine mon expertise technique en développement web et IA avec une vision stratégique pour créer des solutions digitales à fort impact pour des clients du monde entier. Ma passion est d'accompagner les organisations dans leur transition numérique, tout en formant la prochaine génération de talents tech internationaux.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Ma Vision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Je crois profondément que l'innovation technologique est un puissant vecteur de développement global. Mon ambition est de contribuer à l'émergence d'un écosystème tech mondial inclusif, où talents et expertises de tous horizons collaborent pour développer des solutions adaptées aux défis uniques de chaque marché, tout en partageant les meilleures pratiques internationales.
                  </p>
                  <div className="mt-6 grid md:grid-cols-2 gap-6">
                    {values.map((value, index) => (
                      <Card key={index} className="bg-black/50 border border-white/10 hover:border-primary/30 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="text-primary mb-3">
                            {value.icon}
                          </div>
                          <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                          <p className="text-gray-300">{value.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </PageContainer>
        </section>
        
        {/* Career Timeline */}
        <section className="py-20">
          <PageContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-white">Parcours Professionnel</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
            </div>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-portfolio-blue via-portfolio-purple to-portfolio-blue z-10"></div>
              
              <div className="space-y-20">
                {careerTimeline.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`flex items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300">
                        <div className="text-primary font-semibold mb-1">{item.year}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <div className="text-lg text-white/80 mb-2">{item.company}</div>
                        <p className="text-gray-300">{item.description}</p>
                        <div className="flex items-center mt-3 text-sm text-primary/80 gap-2 justify-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {item.location}
                        </div>
                      </div>
                    </div>
                    
                    <div className="hidden md:block relative w-12 z-20">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-portfolio-blue to-portfolio-purple border-4 border-black"></div>
                    </div>
                    
                    <div className="hidden md:block w-1/2"></div>
                  </motion.div>
                ))}
              </div>
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
