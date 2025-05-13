
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import PageContainer from '../../components/layout/PageContainer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Clock, 
  Calendar,
  BarChart3, 
  ShieldCheck, 
  Users, 
  Check,
  FileText,
  Laptop,
  Database,
  Globe,
  UserCheck,
  Building,
  Award,
  Target,
  Download,
  Phone,
  Mail
} from 'lucide-react';

const SenServices = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Animation for data grid background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = Math.max(document.body.scrollHeight, window.innerHeight);

    // Data particles properties
    const particles: { x: number, y: number, radius: number, dirX: number, dirY: number, color: string }[] = [];
    
    const createParticles = () => {
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          dirX: (Math.random() - 0.5) * 0.5,
          dirY: (Math.random() - 0.5) * 0.5,
          color: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, ${Math.random() * 0.5 + 0.25})`
        });
      }
    };

    createParticles();

    // Connection line threshold
    const connectionDistance = 100;

    // Animation loop
    const animate = () => {
      // Semi-transparent clear to create trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        
        // Update position
        p.x += p.dirX;
        p.y += p.dirY;
        
        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.dirX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dirY *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Draw connections between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          let p2 = particles[j];
          let distance = Math.sqrt(Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2));
          
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(100, 150, 255, ${0.2 * (1 - distance/connectionDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(document.body.scrollHeight, window.innerHeight);
      particles.length = 0;
      createParticles();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Page metadata
  useEffect(() => {
    document.title = "SenServices | Étude de Cas E-Gouvernance | Dominiqk Mendy";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        "Découvrez SenServices, projet phare d'E-Gouvernance développé par Dominiqk Mendy. "
        + "Plateforme nationale de services administratifs en ligne avec interfaces citoyenne et gouvernementale intégrées."
      );
    }
    
    // Set keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 
        "SenServices, e-gouvernance, services administratifs en ligne, transformation numérique État, "
        + "Dominiqk Mendy, projet digital gouvernemental, cas d'étude e-gouvernance, digitalisation administration publique"
      );
    }

    window.scrollTo(0, 0);
  }, []);

  // Project details
  const projectDetails = {
    client: "Gouvernement du Sénégal",
    duration: "18 mois",
    year: "2023-2024",
    team: "1 Chef de Projet, 3 Développeurs Frontend, 2 Développeurs Backend, 1 UX/UI Designer, 1 Expert Cybersécurité",
    role: "Consultant Principal & Chef de Projet",
    description: "SenServices est une plateforme nationale de services gouvernementaux en ligne visant à simplifier l'accès des citoyens aux démarches administratives et à moderniser les services publics. Le projet comprend une interface publique pour les citoyens et un tableau de bord administratif réservé aux agents de l'État.",
    objectives: [
      "Digitaliser l'ensemble des démarches administratives courantes",
      "Réduire les délais de traitement des dossiers de 80%",
      "Améliorer la transparence et la traçabilité des procédures",
      "Sécuriser les données personnelles des citoyens",
      "Faciliter l'accès aux services depuis les zones rurales"
    ],
    technologies: [
      "React & Node.js pour les interfaces",
      "PostgreSQL pour la base de données",
      "AWS pour l'infrastructure cloud",
      "Authentification biométrique",
      "APIs sécurisées",
      "Architecture microservices"
    ],
    results: [
      {
        metric: "Démarches digitalisées",
        value: "500+",
        icon: <FileText size={24} className="text-cyan-300" />
      },
      {
        metric: "Réduction des délais",
        value: "96%",
        icon: <Clock size={24} className="text-cyan-300" />
      },
      {
        metric: "Utilisateurs actifs",
        value: "1M+",
        icon: <Users size={24} className="text-cyan-300" />
      },
      {
        metric: "Économies annuelles",
        value: "15M€",
        icon: <BarChart3 size={24} className="text-cyan-300" />
      }
    ],
    recognitions: [
      {
        title: "Prix de l'Innovation Digitale Africaine",
        description: "Reconnaissance de l'impact transformateur sur les services publics",
        year: "2024"
      },
      {
        title: "Smart City Award",
        description: "Pour la modernisation des services publics urbains",
        year: "2023"
      },
      {
        title: "Certification ISO 27001",
        description: "Pour la gestion exemplaire de la sécurité des données",
        year: "2023"
      }
    ]
  };

  // Key features
  const keyFeatures = [
    {
      title: "Authentification Sécurisée",
      description: "Système d'authentification multi-facteurs avec options biométriques pour une sécurité renforcée des comptes.",
      icon: <ShieldCheck size={28} />
    },
    {
      title: "Suivi en Temps Réel",
      description: "Tableau de bord permettant aux citoyens de suivre l'état d'avancement de leurs démarches en temps réel.",
      icon: <Clock size={28} />
    },
    {
      title: "Paiements Intégrés",
      description: "Système de paiement des frais administratifs directement sur la plateforme via multiples méthodes.",
      icon: <Database size={28} />
    },
    {
      title: "Notifications Automatiques",
      description: "Alertes par email et SMS à chaque étape du traitement des demandes administratives.",
      icon: <Globe size={28} />
    },
    {
      title: "Profil Vérifié",
      description: "Création d'un profil citoyen unique et vérifié pour faciliter toutes les démarches futures.",
      icon: <UserCheck size={28} />
    },
    {
      title: "Interopérabilité",
      description: "Connexion avec les systèmes d'information des différents ministères et administrations.",
      icon: <Building size={28} />
    }
  ];

  // Témoignages utilisateurs
  const testimonials = [
    {
      text: "SenServices a révolutionné mon quotidien. Je peux désormais réaliser toutes mes démarches administratives sans me déplacer, même depuis mon village éloigné de Dakar.",
      author: "Amadou Diallo",
      role: "Agriculteur, Région de Kolda",
      image: "/lovable-uploads/1d07325e-d8c2-4e54-ac4e-3caf0120f9eb.png"
    },
    {
      text: "En tant que chef d'entreprise, le gain de temps est considérable. Ce qui prenait des semaines se fait maintenant en quelques jours, permettant à mon business de se développer plus rapidement.",
      author: "Fatou Ndiaye",
      role: "Entrepreneur, Dakar",
      image: "/lovable-uploads/00f229a9-af1c-47e4-a805-4e3b081a0bb4.png"
    },
    {
      text: "La transparence apportée par SenServices a significativement réduit les cas de corruption et amélioré la confiance des citoyens envers l'administration.",
      author: "Ibrahim Sow",
      role: "Directeur, Ministère de la Modernisation",
      image: "/lovable-uploads/c0a0e8cc-455f-443c-849f-9c1c4aa6981c.png"
    }
  ];

  // Impact chiffré complet
  const detailedImpact = [
    {
      category: "Transformation Administrative",
      metrics: [
        { title: "Réduction des délais", value: "96%", description: "De 30+ jours à 1-3 jours en moyenne" },
        { title: "Élimination des déplacements", value: "92%", description: "Des procédures réalisables à distance" },
        { title: "Réduction des erreurs administratives", value: "89%", description: "Grâce à l'automatisation des contrôles" }
      ]
    },
    {
      category: "Impact Économique",
      metrics: [
        { title: "Économies budgétaires annuelles", value: "15M€", description: "Réduction des coûts opérationnels" },
        { title: "Productivité économique", value: "+3.2%", description: "Augmentation du PIB des régions connectées" },
        { title: "Réduction du chômage", value: "1.8%", description: "Création d'emplois dans le numérique" }
      ]
    },
    {
      category: "Impact Social",
      metrics: [
        { title: "Satisfaction des usagers", value: "92%", description: "Niveau d'approbation record" },
        { title: "Inclusion des zones rurales", value: "+65%", description: "Accès aux services dans les régions isolées" },
        { title: "Réduction des cas de corruption", value: "85%", description: "Grâce à la traçabilité des procédures" }
      ]
    }
  ];

  // Étapes du projet
  const projectStages = [
    {
      stage: "Phase d'étude et de conception",
      duration: "3 mois",
      tasks: [
        "Audit des procédures existantes",
        "Ateliers avec les parties prenantes",
        "Conception UX/UI des interfaces",
        "Architecture technique du système"
      ]
    },
    {
      stage: "Phase de développement",
      duration: "8 mois",
      tasks: [
        "Développement de l'interface citoyenne",
        "Développement du back-office administratif",
        "Intégration des APIs ministérielles",
        "Tests de sécurité et de performance"
      ]
    },
    {
      stage: "Phase de déploiement",
      duration: "4 mois",
      tasks: [
        "Formation des agents publics",
        "Campagne de communication nationale",
        "Déploiement progressif par région",
        "Support technique intensif"
      ]
    },
    {
      stage: "Phase d'optimisation",
      duration: "3 mois",
      tasks: [
        "Analyse des retours utilisateurs",
        "Optimisation des performances",
        "Ajout de fonctionnalités demandées",
        "Documentation et transfert de compétences"
      ]
    }
  ];

  // Publications et ressources
  const resourcesAndPublications = [
    {
      title: "Livre blanc : Transformation digitale de l'État",
      description: "Document complet sur l'approche méthodologique et les résultats du projet SenServices",
      type: "PDF",
      link: "#"
    },
    {
      title: "Cas d'étude Harvard Business Review",
      description: "Analyse académique du modèle SenServices comme exemple de transformation numérique publique réussie",
      type: "Article",
      link: "#"
    },
    {
      title: "Guide d'implémentation pour gouvernements",
      description: "Méthodologie étape par étape pour répliquer le modèle dans d'autres pays",
      type: "Document",
      link: "#"
    },
    {
      title: "Vidéo de présentation SenServices",
      description: "Aperçu complet de la plateforme et témoignages d'utilisateurs",
      type: "Vidéo",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-hidden relative">
      {/* Interactive background */}
      <canvas 
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />
      
      <Navbar />
      
      <main className="flex-grow relative z-10">
        {/* Hero section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 pointer-events-none"></div>
          
          <PageContainer>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm font-semibold text-white bg-blue-600/80 hover:bg-blue-600">Étude de Cas</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  SenServices
                </h1>
                <div className="h-1 w-24 bg-gradient-primary mb-6 rounded-full"></div>
                <p className="text-xl text-white mb-8">
                  Plateforme nationale de services administratifs en ligne, transformant la relation entre les citoyens et l'administration.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                    <div className="text-sm text-blue-300 font-medium">Client</div>
                    <div className="font-medium text-white">{projectDetails.client}</div>
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                    <div className="text-sm text-blue-300 font-medium">Durée</div>
                    <div className="font-medium text-white">{projectDetails.duration}</div>
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                    <div className="text-sm text-blue-300 font-medium">Année</div>
                    <div className="font-medium text-white">{projectDetails.year}</div>
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                    <div className="text-sm text-blue-300 font-medium">Rôle</div>
                    <div className="font-medium text-white">Consultant Principal</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-gradient-primary hover:opacity-90 text-white font-medium shadow-lg shadow-blue-500/20" asChild>
                    <Link to="/services/egouvernance" className="flex items-center gap-2">
                      <span>Services E-Gouvernance</span>
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-white/30 hover:bg-white/10 text-white font-medium" asChild>
                    <a href="#demo" className="flex items-center gap-2">
                      <span>Voir les interfaces</span>
                      <ArrowRight size={16} />
                    </a>
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30"></div>
                <Card className="bg-black/40 backdrop-blur-md border-0 overflow-hidden relative z-10">
                  <CardContent className="p-0">
                    <img 
                      src="/lovable-uploads/e991c404-fa68-4476-bad5-65316d44cf46.png" 
                      alt="SenServices Plateforme" 
                      className="w-full h-auto"
                    />
                  </CardContent>
                </Card>
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-3 rounded-lg font-medium shadow-lg shadow-blue-600/30 transform rotate-3">
                  Taux de satisfaction: 92%
                </div>
              </motion.div>
            </div>
          </PageContainer>
        </section>
        
        {/* Project overview */}
        <section className="py-20 bg-black/30 backdrop-blur-md border-t border-b border-white/10">
          <PageContainer>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-white">Aperçu du Projet</h2>
              <p className="text-lg mb-8 text-white">
                {projectDetails.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Objectifs</h3>
                  <ul className="space-y-3">
                    {projectDetails.objectives.map((objective, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check size={20} className="text-cyan-400 shrink-0 mt-1" />
                        <span className="text-white">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Technologies</h3>
                  <ul className="space-y-3">
                    {projectDetails.technologies.map((tech, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="shrink-0 mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                        </div>
                        <span className="text-white">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Reconnaissances et certifications */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6 text-white">Reconnaissances & Certifications</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {projectDetails.recognitions.map((recognition, idx) => (
                    <div key={idx} className="bg-black/40 p-4 rounded-lg border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                      <Award className="text-cyan-400 mb-3" />
                      <h4 className="text-lg font-medium mb-2 text-white">{recognition.title}</h4>
                      <p className="text-sm text-gray-300">{recognition.description}</p>
                      <p className="text-xs text-cyan-400 mt-2">{recognition.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </PageContainer>
        </section>
        
        {/* Key results */}
        <section className="py-16">
          <PageContainer>
            <h2 className="text-3xl font-bold mb-10 text-center text-white">Résultats Clés</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {projectDetails.results.map((result, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="mx-auto w-fit mb-4">
                    {result.icon}
                  </div>
                  <div className="text-cyan-300 text-3xl font-bold mb-2">{result.value}</div>
                  <div className="text-white font-medium">{result.metric}</div>
                </motion.div>
              ))}
            </div>
          </PageContainer>
        </section>
        
        {/* Key features */}
        <section className="py-20">
          <PageContainer>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-white">Fonctionnalités Principales</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-white">
                Des fonctionnalités conçues pour simplifier l'expérience des citoyens et optimiser le travail des agents administratifs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className="text-cyan-400 mb-4 p-3 bg-white/5 rounded-lg inline-block group-hover:bg-cyan-900/20 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-300 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </PageContainer>
        </section>

        {/* Témoignages */}
        <section className="py-20 bg-black/40 backdrop-blur-md border-t border-b border-white/10">
          <PageContainer>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-white">Témoignages d'Utilisateurs</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-white">
                Découvrez l'impact de SenServices sur la vie quotidienne des citoyens et le fonctionnement de l'administration.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <Card key={idx} className="bg-black/30 border border-white/10 overflow-hidden group hover:border-cyan-500/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-cyan-500/30">
                        <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{testimonial.author}</h4>
                        <p className="text-cyan-300 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </PageContainer>
        </section>
        
        {/* Interface showcase */}
        <section id="demo" className="py-20">
          <PageContainer>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-white">Les Interfaces SenServices</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-white">
                Une plateforme à double interface : publique pour les citoyens et administrative pour les agents de l'État.
              </p>
            </div>
            
            <Tabs defaultValue="citizen" className="w-full">
              <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto bg-black/50 backdrop-blur-md p-1 rounded-lg border border-white/10 mb-12">
                <TabsTrigger 
                  value="citizen"
                  className="data-[state=active]:bg-cyan-600/80 data-[state=active]:text-white font-medium"
                >
                  Interface Citoyenne
                </TabsTrigger>
                <TabsTrigger 
                  value="admin"
                  className="data-[state=active]:bg-cyan-600/80 data-[state=active]:text-white font-medium"
                >
                  Interface Administrative
                </TabsTrigger>
              </TabsList>
              
              {/* Citizen Interface */}
              <TabsContent value="citizen" className="mt-4 space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">Interface Citoyenne</h3>
                    <p className="text-gray-300 mb-6">
                      L'interface citoyenne de SenServices permet aux résidents d'accéder à plus de 500 démarches administratives en ligne, 
                      de suivre leurs demandes en temps réel et de recevoir des notifications à chaque étape du traitement.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {[
                        "Profil citoyen unifié et sécurisé",
                        "Accès à toutes les démarches administratives",
                        "Suivi en temps réel des demandes",
                        "Paiement des frais en ligne",
                        "Notifications automatiques d'avancement",
                        "Documents administratifs dématérialisés"
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check size={18} className="text-cyan-400 shrink-0 mt-1" />
                          <p className="text-white">{feature}</p>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="bg-gradient-primary hover:opacity-90 text-white font-medium" asChild>
                      <a href="https://www.senservicesenegal.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <span>Accéder à l'interface citoyenne</span>
                        <ArrowRight size={16} />
                      </a>
                    </Button>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20"></div>
                    <Card className="bg-black/40 backdrop-blur-md border-0 overflow-hidden relative z-10">
                      <CardContent className="p-0">
                        <a href="https://www.senservicesenegal.com/" target="_blank" rel="noopener noreferrer">
                          <img 
                            src="/lovable-uploads/e991c404-fa68-4476-bad5-65316d44cf46.png" 
                            alt="SenServices Interface Citoyenne" 
                            className="w-full h-auto"
                          />
                        </a>
                      </CardContent>
                    </Card>
                    <div className="mt-4 flex items-center gap-3 text-gray-300 text-sm">
                      <div className="bg-white/10 rounded-full p-1">
                        <Laptop size={14} />
                      </div>
                      <span>Page des services administratifs disponibles pour les citoyens</span>
                    </div>
                  </motion.div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative order-2 md:order-1"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20"></div>
                    <Card className="bg-black/40 backdrop-blur-md border-0 overflow-hidden relative z-10">
                      <CardContent className="p-0">
                        <a href="https://www.senservicesenegal.com/" target="_blank" rel="noopener noreferrer">
                          <img 
                            src="/lovable-uploads/b6997f4d-7723-4b3c-8704-1e5e64cb7ff5.png" 
                            alt="SenServices Dashboard Citoyen" 
                            className="w-full h-auto"
                          />
                        </a>
                      </CardContent>
                    </Card>
                    <div className="mt-4 flex items-center gap-3 text-gray-300 text-sm">
                      <div className="bg-white/10 rounded-full p-1">
                        <Users size={14} />
                      </div>
                      <span>Tableau de bord utilisateur avec aperçu des demandes en cours</span>
                    </div>
                  </motion.div>
                  
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-semibold mb-4 text-white">Tableau de Bord Personnel</h3>
                    <p className="text-gray-300 mb-6">
                      Chaque citoyen bénéficie d'un espace personnel sécurisé où il peut suivre ses démarches en cours, 
                      accéder à son historique et gérer son profil administratif.
                    </p>
                    
                    <div className="space-y-4">
                      {[
                        "Vue d'ensemble des démarches actives",
                        "Accès aux documents archivés",
                        "Historique complet des interactions",
                        "Profil vérifié pour des démarches simplifiées",
                        "Système de messagerie avec l'administration"
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check size={18} className="text-cyan-400 shrink-0 mt-1" />
                          <p className="text-white">{feature}</p>
                        </div>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="mt-8 border-white/30 hover:bg-white/10 text-white font-medium" asChild>
                      <a href="#admin" className="flex items-center gap-2">
                        <span>Découvrir l'interface administrative</span>
                        <ArrowRight size={16} />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button className="bg-gradient-primary hover:opacity-90 text-white font-medium" asChild>
                    <a href="https://www.senservicesenegal.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <span>Visiter l'interface citoyenne</span>
                      <ArrowRight size={16} />
                    </a>
                  </Button>
                </div>
              </TabsContent>
              
              {/* Admin Interface */}
              <TabsContent value="admin" id="admin" className="mt-4 space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">Interface Administrative</h3>
                    <p className="text-gray-300 mb-6">
                      L'interface administrative offre aux fonctionnaires une plateforme centralisée pour traiter les demandes, 
                      suivre les performances et piloter la transformation digitale de l'État.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {[
                        "Tableau de bord analytique en temps réel",
                        "Gestion des demandes et workflow collaboratif",
                        "Suivi des performances par service",
                        "Centralisation des données administratives",
                        "Rapports et statistiques d'usage",
                        "Interface de communication avec les citoyens"
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check size={18} className="text-cyan-400 shrink-0 mt-1" />
                          <p className="text-white">{feature}</p>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="bg-gradient-primary hover:opacity-90 text-white font-medium" asChild>
                      <a href="https://senadmin.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <span>Accéder à l'interface administrative</span>
                        <ArrowRight size={16} />
                      </a>
                    </Button>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20"></div>
                    <Card className="bg-black/40 backdrop-blur-md border-0 overflow-hidden relative z-10">
                      <CardContent className="p-0">
                        <a href="https://senadmin.com/" target="_blank" rel="noopener noreferrer">
                          <img 
                            src="/lovable-uploads/6d3ddf24-7310-4f5f-863f-f368868df100.png" 
                            alt="SenServices Interface Admin" 
                            className="w-full h-auto"
                          />
                        </a>
                      </CardContent>
                    </Card>
                    <div className="mt-4 flex items-center gap-3 text-gray-300 text-sm">
                      <div className="bg-white/10 rounded-full p-1">
                        <BarChart3 size={14} />
                      </div>
                      <span>Tableau de bord administratif avec métriques en temps réel</span>
                    </div>
                  </motion.div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative order-2 md:order-1"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20"></div>
                    <Card className="bg-black/40 backdrop-blur-md border-0 overflow-hidden relative z-10">
                      <CardContent className="p-0">
                        <a href="https://senadmin.com/" target="_blank" rel="noopener noreferrer">
                          <img 
                            src="/lovable-uploads/f1f1246f-685f-4deb-838f-c38c2fad1f3b.png" 
                            alt="SenServices Objectifs" 
                            className="w-full h-auto"
                          />
                        </a>
                      </CardContent>
                    </Card>
                    <div className="mt-4 flex items-center gap-3 text-gray-300 text-sm">
                      <div className="bg-white/10 rounded-full p-1">
                        <Calendar size={14} />
                      </div>
                      <span>Objectifs et métriques de performance gouvernementale</span>
                    </div>
                  </motion.div>
                  
                  <div className="order-1 md:order-2">
                    <h3 className="text-2xl font-semibold mb-4 text-white">Pilotage et Performances</h3>
                    <p className="text-gray-300 mb-6">
                      L'interface administrative permet un pilotage précis de la transformation numérique 
                      avec des tableaux de bord analytiques et des objectifs clairement définis.
                    </p>
                    
                    <div className="space-y-4">
                      {[
                        "Suivi des objectifs annuels et KPIs",
                        "Analyse des temps de traitement",
                        "Mesure de la satisfaction des usagers",
                        "Identification des goulots d'étranglement",
                        "Optimisation continue des processus"
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check size={18} className="text-cyan-400 shrink-0 mt-1" />
                          <p className="text-white">{feature}</p>
                        </div>
                      ))}
                    </div>
                    
                    <Button className="bg-gradient-primary hover:opacity-90 text-white font-medium mt-8" asChild>
                      <a href="https://senadmin.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <span>Explorer l'interface administrative</span>
                        <ArrowRight size={16} />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button className="bg-gradient-primary hover:opacity-90 text-white font-medium mr-4" asChild>
                    <a href="https://senadmin.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <span>Visiter l'interface administrative</span>
                      <ArrowRight size={16} />
                    </a>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </PageContainer>
        </section>

        {/* Étapes du projet */}
        <section className="py-20 bg-black/40 backdrop-blur-md border-t border-b border-white/10">
          <PageContainer>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-white">Méthodologie & Étapes du Projet</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-white">
                Une approche structurée et progressive pour assurer le succès de cette transformation digitale majeure.
              </p>
            </div>

            <div className="space-y-12">
              {projectStages.map((stage, idx) => (
                <div key={idx} className="relative">
                  {idx < projectStages.length - 1 && (
                    <div className="absolute top-12 left-7 w-0.5 h-[calc(100%+4rem)] bg-gradient-to-b from-cyan-400 to-transparent"></div>
                  )}
                  <div className="flex items-start gap-8">
                    <div className="bg-cyan-900/30 rounded-full p-3 border border-cyan-400/50 relative z-10">
                      <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center text-black font-bold">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold text-white">{stage.stage}</h3>
                        <Badge variant="outline" className="border-cyan-400/30 bg-cyan-900/20 text-cyan-300">
                          {stage.duration}
                        </Badge>
                      </div>
                      <div className="bg-black/30 border border-white/10 rounded-xl p-6">
                        <ul className="space-y-3">
                          {stage.tasks.map((task, taskIdx) => (
                            <li key={taskIdx} className="flex items-start gap-3">
                              <Check size={18} className="text-cyan-400 shrink-0 mt-1" />
                              <p className="text-white">{task}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </PageContainer>
        </section>
        
        {/* Challenges and Solutions */}
        <section className="py-20">
          <PageContainer>
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Défis & Solutions</h2>
                
                <div className="space-y-8">
                  {[
                    {
                      challenge: "Inclusion numérique et fracture digitale",
                      solution: "Création d'une interface simplifiée accessible sur tous les appareils, y compris les téléphones basiques. Déploiement de points d'accès assistés dans les zones rurales."
                    },
                    {
                      challenge: "Intégration des systèmes hérités",
                      solution: "Développement d'APIs passerelles pour connecter les nouveaux systèmes aux bases de données existantes sans perturber leur fonctionnement."
                    },
                    {
                      challenge: "Sécurité des données sensibles",
                      solution: "Mise en place d'une infrastructure de cybersécurité robuste avec chiffrement de bout en bout et authentification multi-facteurs."
                    },
                    {
                      challenge: "Conduite du changement",
                      solution: "Programme de formation intensive des agents publics et campagne de communication nationale pour accompagner la transition."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                      <h3 className="text-xl font-semibold mb-2 text-white">Défi {idx + 1}</h3>
                      <p className="text-cyan-300 mb-4 font-medium">{item.challenge}</p>
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 mt-1 w-6 h-6 rounded-full bg-cyan-900/30 flex items-center justify-center">
                          <Check size={14} className="text-cyan-400" />
                        </div>
                        <p className="text-gray-300">{item.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">Impact Détaillé</h2>
                
                <div className="space-y-10">
                  {detailedImpact.map((category, idx) => (
                    <div key={idx}>
                      <h3 className="text-xl font-semibold mb-4 text-white">{category.category}</h3>
                      <div className="space-y-4">
                        {category.metrics.map((metric, metricIdx) => (
                          <div key={metricIdx} className="bg-black/30 p-4 rounded-lg border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                            <div className="flex justify-between items-center mb-1">
                              <p className="font-medium text-white">{metric.title}</p>
                              <Badge className="bg-cyan-600/70 hover:bg-cyan-600 text-white">{metric.value}</Badge>
                            </div>
                            <p className="text-sm text-gray-300">{metric.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </PageContainer>
        </section>

        {/* Publications et ressources */}
        <section className="py-20 bg-black/40 backdrop-blur-md border-t border-white/10">
          <PageContainer>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-white">Publications & Ressources</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-white">
                Documentation et ressources de référence sur le projet pour les professionnels et décideurs intéressés.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {resourcesAndPublications.map((resource, idx) => (
                <a 
                  key={idx} 
                  href={resource.link}
                  className="bg-black/30 rounded-lg border border-white/10 p-6 hover:border-cyan-500/30 hover:bg-black/50 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">{resource.title}</h3>
                    <Badge variant="outline" className="border-cyan-400/30 bg-cyan-900/20 text-cyan-300">
                      {resource.type}
                    </Badge>
                  </div>
                  <p className="text-gray-300 mb-3">{resource.description}</p>
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                    <span>Télécharger</span>
                    <Download size={14} />
                  </div>
                </a>
              ))}
            </div>
          </PageContainer>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <PageContainer>
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-2xl overflow-hidden border border-white/10">
              <div className="p-12 md:p-16 relative">
                {/* Background effects */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>
                
                <div className="relative z-10 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Vous Souhaitez Transformer Votre Administration?
                  </h2>
                  <p className="text-xl text-white mb-10">
                    Je peux vous accompagner dans la conception et le déploiement de solutions similaires, adaptées à votre contexte spécifique.
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-6">
                    <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-lg shadow-blue-600/20 text-white font-medium" asChild>
                      <Link to="/contact" className="flex items-center gap-2">
                        <span>Discuter de votre projet</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-white/30 hover:bg-white/10 text-white font-medium" asChild>
                      <Link to="/services/egouvernance" className="flex items-center gap-2">
                        <span>Nos services E-Gouvernance</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-3 justify-center bg-black/30 px-6 py-4 rounded-lg border border-white/10">
                      <Phone className="text-cyan-400" />
                      <span className="text-white">+221 77 123 4567</span>
                    </div>
                    <div className="flex items-center gap-3 justify-center bg-black/30 px-6 py-4 rounded-lg border border-white/10">
                      <Mail className="text-cyan-400" />
                      <span className="text-white">contact@dominiqkmendy.com</span>
                    </div>
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

export default SenServices;
