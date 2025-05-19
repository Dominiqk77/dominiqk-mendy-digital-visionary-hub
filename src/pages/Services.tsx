import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Services from '../components/home/Services';
import { ArrowRight, Code, LineChart, PenTool, Database, Layout, Rocket, BadgeCheck, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import SpaceBackground from '@/components/space/SpaceBackground';
import PageContainer from '../components/layout/PageContainer';

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col relative bg-black">
      <Navbar />
      
      {/* Space background */}
      <SpaceBackground />
      
      <main className="flex-grow z-10 relative w-full">
        {/* Hero Section */}
        <section className="py-20 md:py-28 relative overflow-hidden w-full">
          <PageContainer fullWidth className="relative">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Services <span className="bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-blue bg-clip-text text-transparent">Numériques</span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto mb-6"></div>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Des solutions numériques innovantes et personnalisées pour propulser votre entreprise vers de nouveaux horizons.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple hover:opacity-90 text-white" asChild>
                  <Link to="/start-project">
                    <Rocket className="mr-2 h-5 w-5" /> Lancer votre projet
                  </Link>
                </Button>
                <Button size="lg" variant="transparent" className="text-white border-white border hover:bg-white/10" asChild>
                  <Link to="/portfolio">
                    Voir nos réalisations
                  </Link>
                </Button>
              </div>
            </motion.div>
          </PageContainer>
        </section>

        {/* Services Categories Section */}
        <section className="py-16 relative z-10 w-full">
          <PageContainer fullWidth className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
              {[
                {
                  icon: <Code className="h-10 w-10" />,
                  title: "Développement Web & Mobile",
                  description: "Sites web, applications mobiles et plateformes e-commerce sur mesure",
                  link: "/services/web-development",
                  color: "from-portfolio-blue to-cyan-400"
                },
                {
                  icon: <LineChart className="h-10 w-10" />,
                  title: "Intelligence Artificielle",
                  description: "Solutions IA, machine learning et analyse de données avancée",
                  link: "/services/ai-solutions",
                  color: "from-portfolio-purple to-pink-400"
                },
                {
                  icon: <PenTool className="h-10 w-10" />,
                  title: "Marketing Digital",
                  description: "Stratégies de croissance, SEO et présence en ligne optimisée",
                  link: "/services/digital-marketing",
                  color: "from-orange-500 to-amber-400"
                },
                {
                  icon: <Database className="h-10 w-10" />,
                  title: "Conseil Stratégique",
                  description: "Transformation digitale et innovation technologique",
                  link: "/services/consulting",
                  color: "from-green-500 to-emerald-400"
                }
              ].map((category, idx) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Link to={category.link} className="block">
                    <Card className="h-full bg-black/50 backdrop-blur-md border border-white/10 hover:border-portfolio-purple/50 transition-all overflow-hidden">
                      <CardHeader>
                        <div className={`rounded-full p-3 w-16 h-16 flex items-center justify-center bg-gradient-to-br ${category.color} mb-4`}>
                          {category.icon}
                        </div>
                        <CardTitle className="text-xl text-white">{category.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300">{category.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" className="p-0 text-white hover:text-portfolio-blue hover:bg-transparent group">
                          <span>Explorer</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </PageContainer>
        </section>

        {/* Main Services Component */}
        <Services />

        {/* Additional Features Section */}
        <section className="py-20 relative z-10 w-full">
          <PageContainer fullWidth className="relative">
            <div className="text-center mb-12">
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-4 text-white"
              >
                Pourquoi Nous Choisir
              </motion.h2>
              <div className="h-1 w-24 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
              {[
                {
                  icon: <Lightbulb />,
                  title: "Innovation Constante",
                  description: "Nous restons à la pointe des dernières technologies pour vous offrir les solutions les plus innovantes."
                },
                {
                  icon: <BadgeCheck />,
                  title: "Qualité Garantie",
                  description: "Chaque projet est soumis à des tests rigoureux pour garantir une qualité irréprochable."
                },
                {
                  icon: <Rocket />,
                  title: "Résultats Mesurables",
                  description: "Des métriques claires et des KPIs définis pour mesurer l'impact de chaque solution."
                },
                {
                  icon: <Layout />,
                  title: "Solutions Sur Mesure",
                  description: "Des solutions personnalisées adaptées aux besoins spécifiques de votre entreprise."
                },
                {
                  icon: <Database />,
                  title: "Sécurité Renforcée",
                  description: "Protection de vos données et respect des normes de sécurité les plus strictes."
                },
                {
                  icon: <ArrowRight />,
                  title: "Support Continu",
                  description: "Un accompagnement constant pour vous aider à tirer le meilleur parti de votre solution."
                }
              ].map((feature, idx) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full bg-black/30 backdrop-blur-md border border-white/10 hover:border-portfolio-purple/30 transition-all">
                    <CardHeader>
                      <div className="text-portfolio-blue mb-4">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-white">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300 text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </PageContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative z-10 w-full">
          <PageContainer fullWidth className="relative">
            <div className="max-w-6xl mx-auto bg-gradient-to-r from-portfolio-blue/20 to-portfolio-purple/20 rounded-2xl overflow-hidden border border-white/10">
              <div className="p-12 md:p-16 relative">
                {/* Background effects */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-portfolio-blue opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-portfolio-purple opacity-20 blur-3xl rounded-full"></div>
                
                <div className="relative z-10 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Prêt à lancer votre projet digital ?
                  </h2>
                  <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                    Contactez-moi pour discuter de vos besoins et obtenir une proposition adaptée à votre contexte et à vos objectifs.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple hover:opacity-90 transition-opacity text-white" asChild>
                      <Link to="/contact">
                        Discuter avec un expert
                      </Link>
                    </Button>
                    <Button size="lg" variant="transparent" className="text-white border-white/50 hover:bg-white/10" asChild>
                      <Link to="/start-project">
                        Démarrer un projet
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

export default ServicesPage;
