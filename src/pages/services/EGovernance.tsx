
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
import { 
  ArrowRight, 
  Globe, 
  BarChart3, 
  ShieldCheck, 
  Users, 
  Zap,
  Clock, 
  Award, 
  Check, 
  Building2, 
  Laptop, 
  FileText,
  Briefcase
} from 'lucide-react';

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
    const dataLines: { startX: number, startY: number, endX: number, endY: number, speed: number, progress: number, color: string }[] = [];
    
    const generateLines = () => {
      // Reduce node count by 30% for better performance
      const nodeCount = Math.floor(canvas.width / 130);
      
      // Create vertical node lines (data pathways)
      for (let i = 0; i < nodeCount; i++) {
        const x = (i / nodeCount) * canvas.width;
        
        // Create fewer data pulse animations (2 instead of 3)
        for (let j = 0; j < 2; j++) {
          const startY = -50 - Math.random() * 200;
          const endY = canvas.height + 50;
          const speed = 0.15 + Math.random() * 0.25; // Slightly slower animations
          const progress = Math.random();
          const colors = [
            'rgba(155, 135, 245, 0.4)', // Slightly more transparent
            'rgba(14, 165, 233, 0.4)',
            'rgba(59, 130, 246, 0.4)'
          ];
          const color = colors[Math.floor(Math.random() * colors.length)];
          
          dataLines.push({ startX: x, startY, endX: x, endY, speed, progress, color });
        }
      }
    };

    generateLines();

    // Animation loop
    const animate = () => {
      // Clear canvas with a slight fade effect (slower fade for better performance)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
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
      metaDescription.setAttribute('content', 
        "Expert international en E-Gouvernance, Dominiqk Mendy accompagne les gouvernements dans leur transformation numérique. "
        + "Découvrez ses projets novateurs pour moderniser les services publics à l'échelle mondiale."
      );
    }
    
    // Set keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 
        "e-gouvernance, transformation numérique État, services publics digitaux, expert transformation digitale, "
        + "projets e-gouvernement, modernisation administration, stratégie numérique gouvernementale, digitalisation procédures administratives"
      );
    }

    window.scrollTo(0, 0);
  }, []);

  // Project case study data
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
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Authentication biométrique", "APIs sécurisées"],
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

  return (
    <div className="min-h-screen flex flex-col overflow-hidden relative">
      {/* Interactive background */}
      <canvas 
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />
      
      <Navbar />
      
      <main className="flex-grow relative z-10">
        {/* Hero section avec une meilleure typographie et espacement */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl opacity-60"></div>
          </div>
          
          <PageContainer>
            <motion.div 
              className="max-w-4xl mx-auto text-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block mb-6">
                <div className="p-4 bg-primary/10 rounded-full backdrop-blur-sm border border-primary/20">
                  <Globe size={48} className="text-primary animate-pulse-glow" />
                </div>
              </div>
              
              <Badge variant="secondary" className="mb-5 px-4 py-1.5 text-sm bg-primary/20 text-primary backdrop-blur-sm">
                Expert International en E-Gouvernance
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
                Transformation <span className="animate-gradient-slow">Numérique</span> des États
              </h1>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Modernisation des services publics, optimisation des processus administratifs et amélioration 
                de l'expérience citoyenne grâce aux technologies numériques de pointe.
              </p>
              
              <div className="flex flex-wrap justify-center gap-5">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 px-6 py-6" asChild>
                  <Link to="/contact" className="flex items-center gap-3 text-base">
                    <span>Discuter de votre projet d'E-Gouvernance</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 px-6 py-6"
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
        <section className="py-16 bg-black/40 backdrop-blur-md border-t border-b border-white/10">
          <PageContainer>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: <Award size={28} />, value: "10+", label: "Projets d'E-Gouvernance", delay: 0.1 },
                { icon: <Building2 size={28} />, value: "18", label: "Gouvernements Conseillés", delay: 0.2 },
                { icon: <Users size={28} />, value: "15M+", label: "Citoyens Impactés", delay: 0.3 },
                { icon: <Clock size={28} />, value: "96%", label: "Réduction des Délais", delay: 0.4 }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  className="text-center p-6 md:p-8 rounded-xl bg-black/30 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(155,135,245,0.3)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: stat.delay }}
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="mb-4 text-primary mx-auto w-fit">
                    {stat.icon}
                  </div>
                  <div className="text-primary font-bold text-3xl md:text-4xl mb-3 animate-gradient-slow">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </PageContainer>
        </section>
        
        {/* Featured case study avec meilleur contraste et espacement */}
        <section className="py-24 relative">
          <PageContainer>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge variant="outline" className="mb-4 px-3 py-1">Projet Phare</Badge>
              <h2 className="text-3xl font-bold mb-5">SenServices - Plateforme Nationale d'E-Gouvernance</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-muted-foreground text-lg">Une révolution dans l'accès aux services administratifs au Sénégal, déployée à l'échelle nationale.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-black/40 backdrop-blur-md border border-white/10 overflow-hidden hover:shadow-[0_0_25px_rgba(155,135,245,0.15)] transition-all duration-300">
                  <AspectRatio ratio={16/9} className="relative">
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
                <h3 className="text-2xl font-semibold mb-4">Transformation Digitale des Services Publics</h3>
                <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                  SenServices représente une révolution dans l'administration publique au Sénégal, permettant aux citoyens 
                  d'accéder à plus de 500 démarches administratives en ligne, depuis n'importe où et à tout moment.
                </p>
                
                <div className="space-y-4 mb-8">
                  {caseStudy.results.slice(0, 4).map((result, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white/5 p-3 rounded-lg backdrop-blur-sm">
                      <div className="shrink-0 mt-1">
                        <Check size={18} className="text-primary" />
                      </div>
                      <p className="text-sm md:text-base">{result}</p>
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
                <Badge variant="outline" className="mb-4 px-3 py-1">Interface Administrative</Badge>
                <h3 className="text-2xl font-semibold">Tableau de Bord Gouvernemental</h3>
                <p className="text-muted-foreground mt-3">Pilotage en temps réel des services administratifs</p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30"></div>
                <Card className="bg-black/60 backdrop-blur-md border border-white/20 overflow-hidden relative z-10">
                  <AspectRatio ratio={21/9} className="w-full">
                    <img 
                      src="/lovable-uploads/6d3ddf24-7310-4f5f-863f-f368868df100.png"
                      alt="Interface Admin SenServices" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </Card>
              </motion.div>
              
              <div className="flex justify-center mt-10">
                <Button asChild variant="outline" className="border-white/20 hover:bg-white/10 backdrop-blur-sm py-6">
                  <Link to="/projects/senservices#admin" className="flex items-center gap-2">
                    <span>En savoir plus sur l'interface administrateur</span>
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          </PageContainer>
        </section>
        
        {/* Expertise areas avec un design plus moderne et lisible */}
        <section id="expertise" className="py-24 relative bg-black/40 backdrop-blur-md border-t border-b border-white/10">
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
          </div>
          
          <PageContainer>
            <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
              <Badge variant="secondary" className="bg-primary/20 text-primary mb-4 px-3 py-1">Domaines d'Expertise</Badge>
              <h2 className="text-3xl font-bold mb-5">Transformation Numérique des Administrations Publiques</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-muted-foreground text-lg leading-relaxed">
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
                  className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(155,135,245,0.2)]"
                >
                  <div className="text-primary mb-5 p-4 bg-white/5 rounded-lg inline-block group-hover:bg-primary/10 transition-colors duration-300">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{area.description}</p>
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
              <Badge variant="outline" className="mb-4 px-3 py-1">Méthodologie</Badge>
              <h2 className="text-3xl font-bold mb-5">Approche de Transformation Numérique</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-muted-foreground text-lg leading-relaxed">
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
                  <Card className="bg-black/40 backdrop-blur-md border border-white/10 h-full hover:shadow-[0_0_20px_rgba(155,135,245,0.15)] transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="text-primary p-4 bg-white/5 rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                          {phase.icon}
                        </div>
                        <div className="text-4xl font-bold text-white/10">{phase.step}</div>
                      </div>
                      <CardTitle className="text-xl mt-4">{phase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
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
        <section className="py-24 bg-black/40 backdrop-blur-md border-t border-b border-white/10 relative">
          <PageContainer>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge variant="secondary" className="bg-primary/20 text-primary mb-4 px-3 py-1">Bénéfices</Badge>
              <h2 className="text-3xl font-bold mb-5">Impact de l'E-Gouvernance</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-muted-foreground text-lg leading-relaxed">
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
                  className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{benefit.description}</p>
                  
                  <div className="w-full bg-white/10 rounded-full h-3 mb-2">
                    <motion.div 
                      className={`h-3 rounded-full ${benefit.color}`}
                      style={{ width: '0%' }}
                      animate={{ width: `${benefit.percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 + idx * 0.2 }}
                    ></motion.div>
                  </div>
                  <div className="text-right text-sm font-medium text-white/80">{benefit.percentage}% d'amélioration</div>
                </motion.div>
              ))}
            </div>
          </PageContainer>
        </section>
        
        {/* CTA Section avec un design plus engageant */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30 pointer-events-none"></div>
          
          <PageContainer>
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <div className="p-5 bg-primary/10 rounded-full inline-block backdrop-blur-sm border border-primary/20">
                  <Briefcase size={40} className="text-primary mx-auto animate-pulse-glow" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5 tracking-tight">
                Prêt à Moderniser Votre Administration?
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                Discutons de votre vision et de la façon dont je peux vous accompagner dans votre transformation numérique.
              </p>
              
              <div className="flex flex-wrap justify-center gap-5">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-lg shadow-primary/20 px-8 py-6" asChild>
                  <Link to="/contact" className="flex items-center gap-3 text-base">
                    <span>Demander une consultation</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 px-8 py-6" asChild>
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
