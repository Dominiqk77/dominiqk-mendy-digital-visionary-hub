
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import PageContainer from '../../components/layout/PageContainer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Globe, BarChart3, ShieldCheck, Users, Zap, Clock, Award, Check, Building2, Laptop, FileText, Briefcase, Lock } from 'lucide-react';

const EGovernance = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animation for data grid background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = Math.max(document.body.scrollHeight, window.innerHeight);

    // Data lines properties with reduced density for better performance
    const dataLines: {
      startX: number;
      startY: number;
      endX: number;
      endY: number;
      speed: number;
      progress: number;
      color: string;
    }[] = [];
    const generateLines = () => {
      // Reduce node count by 30% for better performance
      const nodeCount = Math.floor(canvas.width / 130);

      // Create vertical node lines (data pathways)
      for (let i = 0; i < nodeCount; i++) {
        const x = i / nodeCount * canvas.width;

        // Create fewer data pulse animations (2 instead of 3)
        for (let j = 0; j < 2; j++) {
          const startY = -50 - Math.random() * 200;
          const endY = canvas.height + 50;
          const speed = 0.15 + Math.random() * 0.25; // Slightly slower animations
          const progress = Math.random();
          // More vibrant colors with higher opacity for better visibility
          const colors = [
            'rgba(155, 135, 245, 0.8)', 
            'rgba(14, 165, 233, 0.8)', 
            'rgba(59, 130, 246, 0.8)'
          ];
          const color = colors[Math.floor(Math.random() * colors.length)];
          dataLines.push({
            startX: x,
            startY,
            endX: x,
            endY,
            speed,
            progress,
            color
          });
        }
      }
    };
    generateLines();

    // Animation loop
    const animate = () => {
      // Clear canvas with a pure dark background (no gray gradient)
      ctx.fillStyle = 'rgba(10, 12, 20, 0.04)'; // Dark space background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update data lines
      dataLines.forEach(line => {
        // Draw the data line
        const currentY = line.startY + (line.endY - line.startY) * line.progress;
        const gradient = ctx.createLinearGradient(line.startX, currentY - 50, line.startX, currentY);
        gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        gradient.addColorStop(1, line.color);
        ctx.beginPath();
        ctx.moveTo(line.startX, currentY - 50);
        ctx.lineTo(line.startX, currentY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Draw the data pulse (small circle)
        ctx.beginPath();
        ctx.arc(line.startX, currentY, 2, 0, Math.PI * 2);
        ctx.fillStyle = line.color;
        ctx.fill();

        // Update progress
        line.progress += line.speed / 100;

        // Reset when reaching the end
        if (line.progress >= 1) {
          line.progress = 0;
        }
      });
      requestAnimationFrame(animate);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(document.body.scrollHeight, window.innerHeight);
      dataLines.length = 0;
      generateLines();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Set page metadata
  useEffect(() => {
    document.title = "E-Gouvernance & Transformation Numérique des États | Dominiqk Mendy";

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Expert international en E-Gouvernance, Dominiqk Mendy accompagne les gouvernements dans leur transformation numérique. " + "Découvrez ses projets novateurs pour moderniser les services publics à l'échelle mondiale.");
    }

    // Set keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', "e-gouvernance, transformation numérique État, services publics digitaux, expert transformation digitale, " + "projets e-gouvernement, modernisation administration, stratégie numérique gouvernementale, digitalisation procédures administratives");
    }
    window.scrollTo(0, 0);
  }, []);

  // Featured case study data
  const caseStudy = {
    title: "SenServices - Transformation des Services Administratifs",
    description: "Plateforme nationale de services gouvernementaux en ligne pour simplifier l'accès aux démarches administratives et moderniser les services publics.",
    client: "Gouvernement du Sénégal",
    duration: "18 mois",
    year: "2023-2024",
    results: [
      "Digitalisation de plus de 500 démarches administratives", 
      "Réduction des délais de traitement de 30+ jours à 3-5 jours", 
      "Plus d'un million d'utilisateurs actifs", 
      "Sécurisation des données avec 99.9% de fiabilité", 
      "Économies budgétaires estimées à 15M€ annuellement"
    ],
    technologies: [
      "React", 
      "Node.js", 
      "PostgreSQL", 
      "AWS", 
      "Authentication biométrique", 
      "APIs sécurisées"
    ],
    link: "/projects/senservices"
  };

  // Expertise areas in e-governance
  const expertiseAreas = [
    {
      icon: <Globe size={28} />,
      title: "Stratégie d'E-Gouvernance",
      description: "Élaboration de feuilles de route stratégiques pour la transformation numérique des administrations publiques adaptées aux contextes locaux et aux standards internationaux."
    }, 
    {
      icon: <Users size={28} />,
      title: "Architecture de Services Citoyens",
      description: "Conception de plateformes centrées sur l'utilisateur pour faciliter l'accès aux services publics, avec une attention particulière à l'inclusion numérique."
    }, 
    {
      icon: <ShieldCheck size={28} />,
      title: "Cyber-sécurité Gouvernementale",
      description: "Mise en place de protocoles de sécurité avancés pour protéger les données sensibles des citoyens et garantir l'intégrité des systèmes d'information publics."
    }, 
    {
      icon: <Building2 size={28} />,
      title: "Intégration Inter-ministérielle",
      description: "Développement de systèmes interopérables permettant une collaboration fluide entre les différents ministères et agences gouvernementales."
    }, 
    {
      icon: <BarChart3 size={28} />,
      title: "Analytics Gouvernemental",
      description: "Exploitation des données pour optimiser les services publics, identifier les tendances et faciliter la prise de décisions basées sur les données."
    }, 
    {
      icon: <Zap size={28} />,
      title: "Optimisation des Processus",
      description: "Rationalisation des procédures administratives pour éliminer les redondances, réduire les délais et améliorer l'efficacité globale des services."
    }
  ];

  // Benefits of e-governance implementation
  const benefits = [
    {
      title: "Efficacité Administrative",
      description: "Réduction significative des délais de traitement et optimisation des ressources humaines et matérielles.",
      percentage: 85,
      color: "bg-blue-500"
    }, 
    {
      title: "Transparence & Confiance",
      description: "Meilleure visibilité des processus administratifs et renforcement de la confiance des citoyens.",
      percentage: 92,
      color: "bg-purple-500"
    }, 
    {
      title: "Économies Budgétaires",
      description: "Réduction des coûts opérationnels et meilleure allocation des ressources publiques.",
      percentage: 78,
      color: "bg-green-500"
    }, 
    {
      title: "Inclusion Numérique",
      description: "Accès simplifié aux services administratifs pour l'ensemble des citoyens, y compris dans les zones rurales.",
      percentage: 70,
      color: "bg-orange-500"
    }
  ];

  // Confidential projects to showcase expertise (private and under NDA)
  const confidentialProjects = [
    {
      title: "GovSecure - Plateforme d'Identité Numérique",
      client: "Gouvernement d'un pays d'Afrique de l'Ouest",
      year: "2022",
      description: "Système national d'identité numérique avec authentification biométrique pour sécuriser l'accès aux services gouvernementaux.",
      features: [
        "Authentification multi-facteurs",
        "Intégration biométrique avancée",
        "Conformité RGPD et standards internationaux",
        "Plus de 12 millions d'identités numérisées"
      ],
      status: "Déployé dans 7 régions administratives"
    },
    {
      title: "TaxConnect - Digitalisation des Systèmes Fiscaux",
      client: "Ministère des Finances (Confidentiel)",
      year: "2021",
      description: "Refonte complète du système de collecte et gestion des impôts pour améliorer la transparence et réduire la fraude fiscale.",
      features: [
        "Interface utilisateur intuitive",
        "Automatisation des calculs fiscaux",
        "Intégration avec les systèmes bancaires",
        "Génération de rapports en temps réel"
      ],
      status: "Augmentation de 28% des recettes fiscales"
    },
    {
      title: "AdminFlow - Gestion Électronique des Documents",
      client: "Consortium de 5 ministères (Afrique Centrale)",
      year: "2022",
      description: "Solution de gestion électronique des documents administratifs pour fluidifier les processus internes et réduire l'utilisation du papier.",
      features: [
        "Workflow de validation configurable",
        "Archivage numérique sécurisé",
        "Recherche avancée de documents",
        "Signature électronique conforme"
      ],
      status: "Réduction de 76% de la consommation de papier"
    },
    {
      title: "CityPulse - Tableau de Bord Urbain Intelligent",
      client: "Métropole d'Afrique du Nord",
      year: "2021-2022",
      description: "Plateforme de ville intelligente permettant le monitoring en temps réel des infrastructures urbaines et la collecte de données citoyennes.",
      features: [
        "Visualisation en temps réel",
        "Alertes prédictives",
        "Intégration IoT multi-capteurs",
        "Application mobile citoyenne"
      ],
      status: "Optimisation de 31% des ressources municipales"
    },
    {
      title: "HealthTrack - Système National de Santé",
      client: "Ministère de la Santé (Confidentiel)",
      year: "2020-2021",
      description: "Plateforme nationale de gestion des dossiers médicaux électroniques et de suivi des indicateurs de santé publique.",
      features: [
        "Dossiers médicaux électroniques",
        "Suivi des vaccinations",
        "Gestion des stocks médicaux",
        "Tableaux de bord épidémiologiques"
      ],
      status: "Déployé dans 350+ établissements de santé"
    },
    {
      title: "EduLink - Transformation Numérique de l'Éducation",
      client: "Ministère de l'Éducation (État d'Afrique de l'Est)",
      year: "2020",
      description: "Écosystème numérique éducatif incluant gestion administrative, suivi des élèves et ressources pédagogiques en ligne.",
      features: [
        "Portail administratif",
        "Bibliothèque numérique",
        "Suivi des performances scolaires",
        "Formation des enseignants"
      ],
      status: "Utilisé par 2,3 millions d'élèves"
    },
    {
      title: "TradePort - Guichet Unique du Commerce Extérieur",
      client: "Administration Douanière (Confidentiel)",
      year: "2019-2020",
      description: "Plateforme centralisée pour simplifier les procédures d'import-export et accélérer le dédouanement des marchandises.",
      features: [
        "Soumission électronique des documents",
        "Paiement en ligne des droits et taxes",
        "Traçabilité complète des marchandises",
        "Interopérabilité avec les systèmes portuaires"
      ],
      status: "Réduction de 65% des délais de dédouanement"
    },
    {
      title: "JusticeDirect - Modernisation du Système Judiciaire",
      client: "Ministère de la Justice (Confidentiel)",
      year: "2019",
      description: "Système intégré de gestion des affaires judiciaires pour améliorer l'accès à la justice et réduire les délais de traitement.",
      features: [
        "Gestion électronique des dossiers",
        "Calendrier judiciaire centralisé",
        "Notifications automatisées",
        "Statistiques judiciaires en temps réel"
      ],
      status: "Traitement des affaires accéléré de 53%"
    },
    {
      title: "AgriTech - Plateforme de Services Agricoles",
      client: "Ministère de l'Agriculture (Afrique de l'Ouest)",
      year: "2018-2019",
      description: "Écosystème numérique pour les agriculteurs incluant conseil agricole, alerte météo et accès aux subventions gouvernementales.",
      features: [
        "Application mobile multilingue",
        "Système d'alerte précoce",
        "Cartographie des zones cultivables",
        "Gestion des subventions agricoles"
      ],
      status: "Adoption par 450,000+ agriculteurs"
    },
    {
      title: "SenServices - Transformation des Services Administratifs",
      client: "Gouvernement du Sénégal",
      year: "2023-2024",
      description: "Plateforme nationale de services gouvernementaux en ligne pour simplifier l'accès aux démarches administratives et moderniser les services publics.",
      features: [
        "Digitalisation de plus de 500 démarches administratives", 
        "Réduction des délais de traitement de 96%",
        "Interface citoyenne intuitive",
        "Dashboard administratif avancé"
      ],
      status: "Plus d'un million d'utilisateurs actifs"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-hidden relative">
      {/* Interactive background */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
      
      <Navbar />
      
      <main className="flex-grow relative z-10">
        {/* Hero section avec une meilleure typographie et espacement */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-600/30 rounded-full blur-3xl opacity-70"></div>
          </div>
          
          <PageContainer>
            <motion.div 
              className="max-w-4xl mx-auto text-center relative z-10" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-6">
                <div className="p-4 bg-primary/20 rounded-full backdrop-blur-sm border border-primary/30">
                  <Globe size={48} className="text-primary animate-pulse-glow" />
                </div>
              </div>
              
              <Badge variant="secondary" className="mb-5 px-4 py-1.5 text-sm bg-primary/30 text-white backdrop-blur-sm">
                Expert International en E-Gouvernance
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight text-white">
                Transformation <span className="text-primary animate-gradient-slow">Numérique</span> des États
              </h1>
              
              <p className="text-xl text-white mb-10 max-w-2xl mx-auto leading-relaxed">
                Modernisation des services publics, optimisation des processus administratifs et amélioration 
                de l'expérience citoyenne grâce aux technologies numériques de pointe.
              </p>
              
              <div className="flex flex-wrap justify-center gap-5">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 px-6 py-6" 
                  asChild
                >
                  <Link to="/contact" className="flex items-center gap-3 text-base">
                    <span>Discuter de votre projet d'E-Gouvernance</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 px-6 py-6 text-white" 
                  asChild
                >
                  <a href="#expertise" className="flex items-center gap-3 text-base">
                    <span>Découvrir mon expertise</span>
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </PageContainer>
        </section>
        
        {/* Key metrics avec un design plus clair */}
        <section className="py-16 bg-black/40 backdrop-blur-md border-t border-b border-primary/10">
          <PageContainer>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  icon: <Award size={28} />,
                  value: "10+",
                  label: "Projets d'E-Gouvernance",
                  delay: 0.1
                }, 
                {
                  icon: <Building2 size={28} />,
                  value: "18",
                  label: "Gouvernements Conseillés",
                  delay: 0.2
                }, 
                {
                  icon: <Users size={28} />,
                  value: "15M+",
                  label: "Citoyens Impactés",
                  delay: 0.3
                }, 
                {
                  icon: <Clock size={28} />,
                  value: "96%",
                  label: "Réduction des Délais",
                  delay: 0.4
                }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx} 
                  className="text-center p-6 md:p-8 rounded-xl bg-black/50 backdrop-blur-md border border-white/20 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(155,135,245,0.3)]" 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: stat.delay }} 
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="mb-4 text-primary mx-auto w-fit">
                    {stat.icon}
                  </div>
                  <div className="text-primary font-bold text-3xl md:text-4xl mb-3">{stat.value}</div>
                  <div className="text-white font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </PageContainer>
        </section>
        
        {/* Confidential projects section */}
        <section className="py-24 relative">
          <PageContainer>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge variant="outline" className="mb-4 px-3 py-1 text-white border-white/30">Projets Confidentiels</Badge>
              <h2 className="text-3xl font-bold mb-5 text-white">Références Sous Accord de Confidentialité</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-white/90 text-lg">
                Une sélection de projets d'E-Gouvernance réalisés sous NDA, présentés avec l'accord des parties prenantes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {confidentialProjects.slice(0, 9).map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-black/50 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-primary/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(155,135,245,0.15)]"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <Badge className="bg-primary/20 text-white mb-4">{project.year}</Badge>
                      <Lock size={16} className="text-primary/70" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                    <p className="text-white/60 text-sm mb-3">Client: {project.client}</p>
                    <p className="text-white/80 mb-4 text-sm leading-relaxed">{project.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {project.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-start gap-2">
                          <Check size={14} className="text-primary mt-1 shrink-0" />
                          <p className="text-white/80 text-xs">{feature}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-xs text-white/60 italic">
                      Statut: {project.status}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </PageContainer>
        </section>
        
        {/* Expertise areas avec un design plus moderne et lisible */}
        <section id="expertise" className="py-24 relative bg-black/40 backdrop-blur-md border-t border-b border-primary/10">
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
          </div>
          
          <PageContainer>
            <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
              <Badge variant="secondary" className="bg-primary/20 text-white mb-4 px-3 py-1">Domaines d'Expertise</Badge>
              <h2 className="text-3xl font-bold mb-5 text-white">Transformation Numérique des Administrations Publiques</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-white/90 text-lg leading-relaxed">
                Une approche holistique de la transformation numérique des États, combinant vision stratégique, 
                mise en œuvre technique et conduite du changement.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {expertiseAreas.map((area, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: idx * 0.1 }} 
                  whileHover={{ y: -5 }} 
                  className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-primary/40 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(155,135,245,0.2)]"
                >
                  <div className="text-primary mb-5 p-4 bg-white/10 rounded-lg inline-block group-hover:bg-primary/20 transition-colors duration-300">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary transition-colors duration-300">{area.title}</h3>
                  <p className="text-white/80 leading-relaxed">{area.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 py-6 px-8">
                <Link to="/contact" className="flex items-center gap-3 text-base">
                  <span>Discuter de votre projet</span>
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </PageContainer>
        </section>
        
        {/* Methodology avec une présentation plus claire */}
        <section className="py-24 relative">
          <PageContainer>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge variant="outline" className="mb-4 px-3 py-1 text-white border-white/30">Méthodologie</Badge>
              <h2 className="text-3xl font-bold mb-5 text-white">Approche de Transformation Numérique</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-white/90 text-lg leading-relaxed">
                Une méthodologie éprouvée pour accompagner les gouvernements dans leur transition vers une administration digitale efficiente.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-10">
              {[
                {
                  step: "01",
                  title: "Diagnostic & Vision",
                  description: "Analyse approfondie de l'écosystème administratif existant et définition d'une vision stratégique alignée sur les objectifs gouvernementaux.",
                  icon: <FileText size={28} />
                }, 
                {
                  step: "02",
                  title: "Conception & Architecture",
                  description: "Élaboration de l'architecture technique et fonctionnelle des solutions, avec une attention particulière à l'expérience utilisateur et à l'interopérabilité.",
                  icon: <Laptop size={28} />
                }, 
                {
                  step: "03",
                  title: "Déploiement & Adoption",
                  description: "Mise en œuvre progressive des solutions, accompagnée d'un plan de conduite du changement pour assurer l'adoption par les agents et les citoyens.",
                  icon: <Users size={28} />
                }
              ].map((phase, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: idx * 0.2 }} 
                  className="relative"
                >
                  <Card className="bg-black/50 backdrop-blur-md border border-white/20 h-full hover:shadow-[0_0_20px_rgba(155,135,245,0.15)] transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="text-primary p-4 bg-white/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                          {phase.icon}
                        </div>
                        <div className="text-4xl font-bold text-white/20">{phase.step}</div>
                      </div>
                      <CardTitle className="text-xl mt-4 text-white">{phase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80 leading-relaxed">{phase.description}</p>
                    </CardContent>
                  </Card>
                  
                  {idx < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
                      <ArrowRight size={24} className="text-primary" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </PageContainer>
        </section>
        
        {/* Benefits avec une meilleure visualisation */}
        <section className="py-24 bg-black/40 backdrop-blur-md border-t border-b border-primary/10 relative">
          <PageContainer>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge variant="secondary" className="bg-primary/20 text-white mb-4 px-3 py-1">Bénéfices</Badge>
              <h2 className="text-3xl font-bold mb-5 text-white">Impact de l'E-Gouvernance</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-white/90 text-lg leading-relaxed">
                Les avantages concrets de la transformation numérique pour les administrations et les citoyens.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {benefits.map((benefit, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5, delay: idx * 0.1 }} 
                  className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-white/80 mb-6 leading-relaxed">{benefit.description}</p>
                  
                  <div className="w-full bg-white/20 rounded-full h-3 mb-2">
                    <motion.div 
                      className={`h-3 rounded-full ${benefit.color}`} 
                      style={{ width: '0%' }} 
                      animate={{ width: `${benefit.percentage}%` }} 
                      transition={{ duration: 1, delay: 0.5 + idx * 0.2 }}
                    ></motion.div>
                  </div>
                  <div className="text-right text-sm font-medium text-white">{benefit.percentage}% d'amélioration</div>
                </motion.div>
              ))}
            </div>
          </PageContainer>
        </section>
        
        {/* Featured case study - dernier projet (SenServices) */}
        <section className="py-24 relative">
          <PageContainer>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge variant="outline" className="mb-4 px-3 py-1 text-white border-white/30">Projet Phare</Badge>
              <h2 className="text-3xl font-bold mb-5 text-white">SenServices - Plateforme Nationale d'E-Gouvernance</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-white/90 text-lg">Une révolution dans l'accès aux services administratifs au Sénégal, déployée à l'échelle nationale.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-black/50 backdrop-blur-md border border-white/20 overflow-hidden hover:shadow-[0_0_25px_rgba(155,135,245,0.15)] transition-all duration-300">
                  <AspectRatio ratio={16 / 9} className="relative">
                    <img 
                      src="/lovable-uploads/e991c404-fa68-4476-bad5-65316d44cf46.png" 
                      alt="Interface SenServices" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <Badge className="bg-primary text-white hover:bg-primary/90">Interface Citoyenne</Badge>
                    </div>
                  </AspectRatio>
                </Card>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-white">Transformation Digitale des Services Publics</h3>
                <p className="text-white/90 mb-6 text-base leading-relaxed">
                  SenServices représente une révolution dans l'administration publique au Sénégal, permettant aux citoyens 
                  d'accéder à plus de 500 démarches administratives en ligne, depuis n'importe où et à tout moment.
                </p>
                
                <div className="space-y-4 mb-8">
                  {caseStudy.results.slice(0, 4).map((result, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                      <div className="shrink-0 mt-1">
                        <Check size={18} className="text-primary" />
                      </div>
                      <p className="text-white text-sm md:text-base">{result}</p>
                    </div>
                  ))}
                </div>
                
                <Button asChild className="w-full sm:w-auto bg-gradient-primary hover:opacity-90 py-6">
                  <Link to="/projects/senservices" className="flex items-center justify-center gap-2">
                    <span>Découvrir le projet en détail</span>
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </motion.div>
            </div>
            
            {/* Admin dashboard preview avec meilleure présentation */}
            <div className="mt-24">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4 px-3 py-1 text-white border-white/30">Interface Administrative</Badge>
                <h3 className="text-2xl font-semibold text-white">Tableau de Bord Gouvernemental</h3>
                <p className="text-white/80 mt-3">Pilotage en temps réel des services administratifs</p>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }} 
                className="relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30"></div>
                <Card className="bg-black/60 backdrop-blur-md border border-white/20 overflow-hidden relative z-10">
                  <AspectRatio ratio={21 / 9} className="w-full">
                    <img 
                      src="/lovable-uploads/6d3ddf24-7310-4f5f-863f-f368868df100.png" 
                      alt="Interface Admin SenServices" 
                      className="w-full h-full object-cover" 
                    />
                  </AspectRatio>
                </Card>
              </motion.div>
              
              <div className="flex justify-center mt-10">
                <Button 
                  asChild 
                  variant="outline" 
                  className="border-white/30 hover:bg-white/10 backdrop-blur-sm py-6 text-white"
                >
                  <Link to="/projects/senservices#admin" className="flex items-center gap-2">
                    <span>En savoir plus sur l'interface administrateur</span>
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          </PageContainer>
        </section>
        
        {/* CTA Section avec un design plus engageant */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40 pointer-events-none"></div>
          
          <PageContainer>
            <motion.div 
              className="max-w-3xl mx-auto text-center" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <div className="p-5 bg-primary/20 rounded-full inline-block backdrop-blur-sm border border-primary/30">
                  <Briefcase size={40} className="text-primary mx-auto animate-pulse-glow" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5 tracking-tight text-white">
                Prêt à Moderniser Votre Administration?
              </h2>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Discutons de votre vision et de la façon dont je peux vous accompagner dans votre transformation numérique.
              </p>
              
              <div className="flex flex-wrap justify-center gap-5">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 shadow-lg shadow-primary/20 px-8 py-6" 
                  asChild
                >
                  <Link to="/contact" className="flex items-center gap-3 text-base">
                    <span>Demander une consultation</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 hover:bg-white/10 px-8 py-6 text-white" 
                  asChild
                >
                  <Link to="/projects/senservices" className="flex items-center gap-3 text-base">
                    <span>Explorer le cas SenServices</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </PageContainer>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EGovernance;
