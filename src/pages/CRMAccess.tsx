
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  FolderOpen, 
  Zap, 
  Search, 
  BarChart3, 
  Settings,
  CheckCircle,
  Star,
  ArrowRight,
  Shield,
  Cpu,
  Globe,
  Target
} from 'lucide-react';

const CRMAccess = () => {
  const features = [
    {
      icon: LayoutDashboard,
      title: "Dashboard Analytics",
      description: "Vue d'ensemble complète de vos métriques business en temps réel"
    },
    {
      icon: Users,
      title: "Gestion des Leads",
      description: "Qualification automatique et scoring intelligent des prospects"
    },
    {
      icon: FileText,
      title: "Générateur de Contenu IA",
      description: "Création automatique de textes, images, vidéos et audio"
    },
    {
      icon: FolderOpen,
      title: "Gestion de Projets",
      description: "Suivi complet des projets clients avec KPIs avancés"
    },
    {
      icon: Zap,
      title: "Automation Center",
      description: "Workflows intelligents pour automatiser vos processus"
    },
    {
      icon: Search,
      title: "SEO Analyzer",
      description: "Analyse et optimisation SEO automatisées"
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Sécurité Enterprise",
      description: "Chiffrement de bout en bout et conformité RGPD"
    },
    {
      icon: Cpu,
      title: "IA Avancée",
      description: "Algorithmes propriétaires d'optimisation business"
    },
    {
      icon: Globe,
      title: "Multi-plateforme",
      description: "Accès depuis n'importe quel appareil, partout"
    },
    {
      icon: Target,
      title: "ROI Optimisé",
      description: "Augmentation moyenne du chiffre d'affaires de 250%"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-portfolio-space">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple/20 via-portfolio-cosmic/10 to-portfolio-blue/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Nouvelle Plateforme CRM Pro
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-portfolio-purple via-portfolio-blue to-portfolio-pink bg-clip-text text-transparent">
              CRM Pro Intelligence
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              La plateforme CRM révolutionnaire qui combine Intelligence Artificielle, 
              Automation et Analytics pour transformer votre business en machine à succès.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:opacity-90 transform hover:scale-105 transition-all"
              >
                <Link to="/auth" className="flex items-center">
                  <LayoutDashboard className="mr-2 h-5 w-5" />
                  Accéder au CRM Pro
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Link to="/contact" className="flex items-center">
                  Demander une Démo
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { number: "250%", label: "Augmentation ROI Moyenne" },
                { number: "24/7", label: "Support & Monitoring" },
                { number: "99.9%", label: "Uptime Garanti" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Fonctionnalités Révolutionnaires
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Découvrez les outils qui transformeront votre façon de gérer votre business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-black/40 border-white/10 backdrop-blur-sm hover:border-portfolio-purple/30 transition-all duration-300 group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-portfolio-purple/20 to-portfolio-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-portfolio-purple" />
                    </div>
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pourquoi Choisir CRM Pro ?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-portfolio-purple to-portfolio-blue flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-gradient-to-br from-portfolio-purple/20 to-portfolio-blue/20 border-portfolio-purple/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Prêt à Révolutionner Votre Business ?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Rejoignez les centaines d'entrepreneurs qui ont transformé leur activité 
                  grâce à notre plateforme CRM Pro. Configuration en 5 minutes, résultats garantis.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:opacity-90 transform hover:scale-105 transition-all"
                  >
                    <Link to="/auth" className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Commencer Maintenant
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    <Link to="/contact">
                      Planifier une Démo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CRMAccess;
