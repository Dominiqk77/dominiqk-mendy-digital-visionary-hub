
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
import SenServicesBackground from '../../components/space/SenServicesBackground';
import { ArrowRight, Clock, Calendar, BarChart3, ShieldCheck, Users, Check, FileText, Laptop, Database, Globe, UserCheck, Building, Award, Target, Download, Phone, Mail, Star, Landmark, GraduationCap, Home, Briefcase } from 'lucide-react';
const SenServices = () => {
  // Page metadata
  useEffect(() => {
    document.title = "SenServices | Étude de Cas E-Gouvernance | Dominiqk Mendy";

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Découvrez SenServices, projet phare d'E-Gouvernance développé par Dominiqk Mendy. " + "Plateforme de services administratifs en ligne avec interfaces citoyenne et gouvernementale intégrées.");
    }

    // Set keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', "SenServices, e-gouvernance, services administratifs en ligne, transformation numérique État, " + "Dominiqk Mendy, projet digital gouvernemental, cas d'étude e-gouvernance, digitalisation administration publique");
    }
    window.scrollTo(0, 0);
  }, []);

  // Project details - UPDATED to emphasize future goals and launch phase
  const projectDetails = {
    client: "En recherche de partenariat avec le Gouvernement du Sénégal",
    duration: "4 ans et demi de développement",
    year: "2020-2025",
    team: "Projet personnel avec collaboration ponctuelle d'experts",
    role: "Fondateur & CEO, Développeur Full-Stack, Designer UX/UI, Marketing",
    description: "SenServices représente une révolution numérique prometteuse pour le Sénégal et l'Afrique tout entière. Fruit de ma vision patriotique et de mon expertise acquise pendant 11 ans d'expatriation entre Londres et Marrakech, ce projet ambitieux est né de ma détermination à transformer radicalement la relation entre l'État sénégalais et ses citoyens. En tant que fondateur de Millennium Capital Invest Ltd, j'ai développé cette plateforme visionnaire pendant 4 ans et demi, m'entourant des meilleurs experts juridiques, technologiques et spécialistes du marché sénégalais. Actuellement en phase bêta, SenServices (disponible en téléchargement pour test) vise à unifier 500 services gouvernementaux sur une interface intuitive et sécurisée, représentant un investissement stratégique qui pourrait générer des milliards de FCFA d'économies annuelles pour l'État et les citoyens. Nous recherchons activement des partenariats officiels avec le gouvernement, les ministères et les entreprises sénégalaises pour le lancement officiel. Soutenez ce projet d'envergure qui pourrait propulser le Sénégal à l'avant-garde de l'innovation gouvernementale mondiale et incarner la souveraineté numérique africaine.",
    objectives: ["Digitaliser l'ensemble des 500 démarches administratives courantes", "Réduire les délais de traitement des dossiers de 80%", "Assurer l'accessibilité des services depuis tout le territoire, y compris les zones rurales", "Améliorer la transparence et la traçabilité des procédures", "Sécuriser les données personnelles des citoyens", "Créer un modèle d'e-gouvernance adaptable à d'autres pays africains"],
    technologies: ["React & Node.js pour les interfaces", "Architecture microservices", "PostgreSQL pour la base de données", "AWS pour l'infrastructure cloud", "Authentification biométrique", "APIs sécurisées"],
    results: [{
      metric: "Services prévus",
      value: "500",
      icon: <FileText size={24} className="text-primary" />
    }, {
      metric: "Objectif de réduction des délais",
      value: "96%",
      icon: <Clock size={24} className="text-primary" />
    }, {
      metric: "Utilisateurs potentiels",
      value: "1M+",
      icon: <Users size={24} className="text-primary" />
    }, {
      metric: "Économies annuelles estimées",
      value: "15M€",
      icon: <BarChart3 size={24} className="text-primary" />
    }],
    // Updated to show project milestones and future plans instead of achievements
    milestones: [{
      title: "Recherche de Partenariat Stratégique",
      description: "En discussion avec le Ministère de la Modernisation pour une phase pilote potentielle",
      year: "2025"
    }, {
      title: "Test Bêta Public",
      description: "Lancement de la version bêta de l'application pour recueillir les retours utilisateurs",
      year: "2025"
    }, {
      title: "Audit de Sécurité",
      description: "Certification de sécurité prévue par un cabinet international spécialisé en cybersécurité gouvernementale",
      year: "2025"
    }, {
      title: "Plan d'Expansion Régionale",
      description: "Stratégie de déploiement envisagée dans les 14 régions administratives du Sénégal",
      year: "2025-2026"
    }]
  };

  // Key features
  const keyFeatures = [{
    title: "Authentification Sécurisée",
    description: "Système d'authentification multi-facteurs avec options biométriques pour une sécurité renforcée des comptes.",
    icon: <ShieldCheck size={28} />
  }, {
    title: "Suivi en Temps Réel",
    description: "Tableau de bord permettant aux citoyens de suivre l'état d'avancement de leurs démarches en temps réel.",
    icon: <Clock size={28} />
  }, {
    title: "Paiements Intégrés",
    description: "Système de paiement des frais administratifs directement sur la plateforme via multiples méthodes.",
    icon: <Database size={28} />
  }, {
    title: "Notifications Automatiques",
    description: "Alertes par email et SMS à chaque étape du traitement des demandes administratives.",
    icon: <Globe size={28} />
  }, {
    title: "Profil Vérifié",
    description: "Création d'un profil citoyen unique et vérifié pour faciliter toutes les démarches futures.",
    icon: <UserCheck size={28} />
  }, {
    title: "Interopérabilité",
    description: "Connexion avec les systèmes d'information des différents ministères et administrations.",
    icon: <Building size={28} />
  }];

  // Témoignages utilisateurs - UPDATED to emphasize potential benefits
  const testimonials = [{
    text: "SenServices pourrait révolutionner mon quotidien. Je pourrais réaliser toutes mes démarches administratives sans me déplacer, même depuis mon village éloigné de Dakar.",
    author: "Amadou Diallo",
    role: "Agriculteur, Région de Kolda",
    image: "/lovable-uploads/9df9c1b5-fb10-4bd5-878e-7bc1e16fcde2.png"
  }, {
    text: "En tant que chef d'entreprise, le gain de temps serait considérable. Ce qui prend des semaines pourrait se faire en quelques jours, permettant à mon business de se développer plus rapidement.",
    author: "Ibrahima Sall",
    role: "Entrepreneur, Dakar",
    image: "/lovable-uploads/d874ab0c-01af-446f-bd89-04d7678d6703.png"
  }, {
    text: "La transparence apportée par SenServices pourrait significativement réduire les cas de corruption et améliorer la confiance des citoyens envers l'administration.",
    author: "Aïda Mbaye",
    role: "Spécialiste en administration publique",
    image: "/lovable-uploads/c050d09c-75cd-43e4-b6d2-3bf340fa9bb8.png"
  }];

  // Impact chiffré projeté - UPDATED to clearly indicate future projections
  const detailedImpact = [{
    category: "Transformation Administrative Visée",
    metrics: [{
      title: "Objectif de réduction des délais",
      value: "96%",
      description: "De 30+ jours à 1-3 jours en moyenne"
    }, {
      title: "Projection d'élimination des déplacements",
      value: "92%",
      description: "Des procédures réalisables à distance"
    }, {
      title: "Estimation de réduction des erreurs administratives",
      value: "89%",
      description: "Grâce à l'automatisation des contrôles"
    }]
  }, {
    category: "Impact Économique Projeté",
    metrics: [{
      title: "Économies budgétaires annuelles estimées",
      value: "15M€",
      description: "Réduction potentielle des coûts opérationnels"
    }, {
      title: "Productivité économique projetée",
      value: "+3.2%",
      description: "Augmentation potentielle du PIB des régions connectées"
    }, {
      title: "Création d'emplois estimée",
      value: "1,200+",
      description: "Nouveaux postes potentiels dans le numérique"
    }]
  }, {
    category: "Impact Social Attendu",
    metrics: [{
      title: "Objectif de satisfaction des usagers",
      value: "92%",
      description: "Niveau d'approbation visé pour l'Afrique"
    }, {
      title: "Inclusion prévue des zones rurales",
      value: "+65%",
      description: "Amélioration d'accès aux services dans les régions isolées"
    }, {
      title: "Objectif de réduction des cas de corruption",
      value: "85%",
      description: "Grâce à la traçabilité des procédures"
    }]
  }];

  // Étapes du projet - UPDATED to reflect current status and future plans
  const projectStages = [{
    stage: "Phase d'étude et de conception",
    duration: "1 an (2020-2021)",
    status: "Complétée",
    tasks: ["Analyse exhaustive des procédures administratives existantes", "Consultation des parties prenantes gouvernementales et citoyennes", "Conception UX/UI centrée utilisateur", "Élaboration de l'architecture technique évolutive"]
  }, {
    stage: "Phase de développement initial",
    duration: "1.5 ans (2021-2022)",
    status: "Complétée",
    tasks: ["Développement de l'interface citoyenne et des premiers services", "Création du back-office administratif", "Mise en place des APIs sécurisées", "Tests rigoureux de sécurité et d'accessibilité"]
  }, {
    stage: "Phase de préparation au déploiement",
    duration: "1 an (2022-2023)",
    status: "Complétée",
    tasks: ["Préparation des modules de formation pour agents publics", "Élaboration de la campagne de sensibilisation nationale", "Développement des 100 premiers services", "Préparation du support technique et de l'accompagnement des utilisateurs"]
  }, {
    stage: "Phase d'expansion et d'optimisation",
    duration: "1 an (2023-2024)",
    status: "Complétée",
    tasks: ["Développement progressif de nouveaux services (jusqu'à 177)", "Optimisation continue basée sur les tests internes", "Préparation de la stratégie d'extension aux zones rurales", "Finalisation du système de paiement intégré"]
  }, {
    stage: "Phase de lancement et de partenariats",
    duration: "En cours (2025)",
    status: "En cours",
    tasks: ["Recherche active de partenariats gouvernementaux et institutionnels", "Lancement de la version bêta publique", "Préparation du déploiement complet des 500 services prévus", "Élaboration de la stratégie d'expansion vers d'autres pays africains"]
  }];

  // Publications et ressources - UPDATED to reflect current status
  const resourcesAndPublications = [{
    title: "Livre blanc : La transformation numérique des services publics au Sénégal",
    description: "Document détaillant notre vision et la méthodologie proposée pour SenServices",
    type: "PDF",
    link: "https://www.senservicesenegal.com/"
  }, {
    title: "Présentation : SenServices comme modèle d'e-gouvernance en Afrique",
    description: "Analyse des opportunités et défis pour la mise en œuvre du projet",
    type: "Présentation",
    link: "https://www.senservicesenegal.com/"
  }, {
    title: "Proposition : Guide d'implémentation pour gouvernements africains",
    description: "Méthodologie étape par étape proposée pour une transformation numérique réussie",
    type: "Document",
    link: "https://www.senservicesenegal.com/"
  }, {
    title: "Démonstration de SenServices",
    description: "Vidéo de présentation de la plateforme en version bêta",
    type: "Vidéo",
    link: "https://www.senservicesenegal.com/"
  }];

  // NOUVEAU - Catégories de services prévus
  const serviceCategories = [{
    title: "Documents d'identité",
    description: "Demandez ou renouvelez vos pièces d'identité (carte nationale, passeport, permis) en quelques clics.",
    icon: <UserCheck size={28} />,
    services: ["Carte d'identité nationale", "Passeport biométrique", "Permis de conduire", "Carte de séjour", "Certificat de nationalité"]
  }, {
    title: "Formalités d'entreprise",
    description: "Création d'entreprise, modifications statutaires, déclarations fiscales et sociales simplifiées.",
    icon: <Briefcase size={28} />,
    services: ["Création d'entreprise", "Modifications statutaires", "Déclarations fiscales", "Registre de commerce", "Licences d'exploitation"]
  }, {
    title: "Foncier et Urbanisme",
    description: "Titres fonciers, permis de construire, certificats d'urbanisme et autorisations diverses.",
    icon: <Home size={28} />,
    services: ["Titre foncier", "Permis de construire", "Certificat d'urbanisme", "Plan cadastral", "Autorisation de lotissement"]
  }, {
    title: "État civil",
    description: "Actes de naissance, mariage, décès et autres documents d'état civil officiels.",
    icon: <FileText size={28} />,
    services: ["Acte de naissance", "Acte de mariage", "Acte de décès", "Certificat de vie", "Livret de famille"]
  }, {
    title: "Éducation",
    description: "Inscriptions scolaires, demandes de bourses, équivalences de diplômes et certifications.",
    icon: <GraduationCap size={28} />,
    services: ["Inscription scolaire", "Demande de bourse", "Équivalence de diplôme", "Attestation de réussite", "Relevé de notes"]
  }, {
    title: "Services sur mesure",
    description: "Solutions personnalisées pour les entreprises et organisations avec besoins spécifiques.",
    icon: <Star size={28} />,
    services: ["API dédiées", "Intégrations spécifiques", "Tableaux de bord sur mesure", "Formation spécifique", "Support prioritaire"]
  }];

  // Liste complète de plus de 30 rôles - NOUVELLE LISTE EXHAUSTIVE
  const myDetailedRoles = [{
    category: "Direction & Vision",
    roles: ["Fondateur & CEO", "Visionnaire Stratégique", "Chef de Projet E-gouvernance", "Responsable Planification Stratégique", "Architecte de Solution Gouvernementale", "Consultant en Transformation Digitale d'État", "Gestionnaire de Relations Ministérielles", "Directeur d'Innovation Publique"]
  }, {
    category: "Développement Technique",
    roles: ["Architecte Système", "Développeur Full-Stack", "Développeur Frontend React/Angular", "Développeur Backend Node.js/Python", "Ingénieur DevOps", "Administrateur Cloud AWS/Azure", "Spécialiste APIs & Microservices", "Ingénieur Sécurité Informatique", "Expert Bases de Données & Performance", "Développeur Mobile React Native"]
  }, {
    category: "Design & Expérience",
    roles: ["Designer UX/UI", "Chercheur UX (tests utilisateurs)", "Concepteur d'Interfaces Accessibles", "Spécialiste UI Multilingue", "Expert en Ergonomie Mobile", "Designer d'Expériences Administratives Simplifiées"]
  }, {
    category: "Gestion & Finance",
    roles: ["Modélisateur Économique", "Analyste ROI Projet Gouvernemental", "Gestionnaire Budget & Ressources", "Expert en Financement Innovant", "Consultant en Optimisation des Coûts"]
  }, {
    category: "Marketing & Adoption",
    roles: ["Stratège Marketing Digital", "Responsable Communication Institutionnelle", "Spécialiste Adoption Utilisateur", "Formateur Agents Administratifs", "Expert Sensibilisation Citoyenne", "Coordinateur de Partenariats Public-Privé", "Responsable Relations Médias", "Expert Acquisition Utilisateurs"]
  }, {
    category: "Expertise Juridique",
    roles: ["Conseiller Juridique Dématérialisation", "Expert RGPD & Protection des Données", "Spécialiste Conformité Légale", "Analyste Cadre Réglementaire"]
  }];
  return <div className="min-h-screen flex flex-col overflow-hidden relative">
      {/* Space-themed night blue background with stars */}
      <SenServicesBackground />
      
      <Navbar />
      
      <main className="flex-grow relative z-10">
        {/* Hero section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          {/* Remove the old purple gradient background */}
          
          <PageContainer>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -20
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6
            }}>
                <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm font-semibold text-white bg-primary/80 hover:bg-primary">Innovation Africaine</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  SenServices
                </h1>
                <div className="h-1 w-24 bg-gradient-primary mb-6 rounded-full"></div>
                <p className="text-xl text-white mb-8">Projet pionnier de plateforme de services administratifs en ligne au Sénégal, visant à transformer radicalement la relation entre les citoyens et l'administration.</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                    <div className="text-sm text-primary font-medium">Types de projet</div>
                    <div className="font-medium text-white">Plateforme E-gouvernement</div>
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                    <div className="text-sm text-primary font-medium">Durée de développement</div>
                    <div className="font-medium text-white">{projectDetails.duration}</div>
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                    <div className="text-sm text-primary font-medium">Période</div>
                    <div className="font-medium text-white">{projectDetails.year}</div>
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                    <div className="text-sm text-primary font-medium">Mon Rôle</div>
                    <div className="font-medium text-white">Fondateur & CEO</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-gradient-primary hover:opacity-90 text-white font-medium shadow-lg shadow-primary/20" asChild>
                    <a href="https://www.senservicesenegal.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <span>Découvrir le Projet</span>
                      <ArrowRight size={16} />
                    </a>
                  </Button>
                  <Button variant="outline" className="border-white/30 hover:bg-white/10 text-white font-medium" asChild>
                    <a href="#demo" className="flex items-center gap-2">
                      <span>Voir les interfaces</span>
                      <ArrowRight size={16} />
                    </a>
                  </Button>
                </div>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              scale: 0.95
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-portfolio-pink rounded-2xl blur opacity-30"></div>
                <Card className="bg-black/40 backdrop-blur-md border-0 overflow-hidden relative z-10">
                  <CardContent className="p-0">
                    <img src="/lovable-uploads/e991c404-fa68-4476-bad5-65316d44cf46.png" alt="SenServices Plateforme" className="w-full h-auto" />
                  </CardContent>
                </Card>
                <div className="absolute -bottom-4 -right-4 bg-primary text-white p-3 rounded-lg font-medium shadow-lg shadow-primary/30 transform rotate-3 z-20">
                  Objectif satisfaction: 92%
                </div>
              </motion.div>
            </div>
          </PageContainer>
        </section>
        
        {/* Project overview */}
        <section className="py-20 bg-black/30 backdrop-blur-md border-t border-b border-white/10">
          <PageContainer>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-white">À Propos du Projet</h2>
              <p className="text-lg mb-8 text-white leading-relaxed">
                {projectDetails.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Objectifs</h3>
                  <ul className="space-y-3">
                    {projectDetails.objectives.map((objective, idx) => <li key={idx} className="flex items-start gap-3">
                        <Check size={20} className="text-primary shrink-0 mt-1" />
                        <span className="text-white">{objective}</span>
                      </li>)}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Technologies</h3>
                  <ul className="space-y-3">
                    {projectDetails.technologies.map((tech, idx) => <li key={idx} className="flex items-start gap-3">
                        <div className="shrink-0 mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-white">{tech}</span>
                      </li>)}
                  </ul>
                </div>
              </div>

              {/* Mon rôle détaillé - MISE À JOUR AVEC PLUS DE 30 RÔLES */}
              <div className="mt-12 bg-black/40 p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-white">Mes Rôles & Responsabilités</h3>
                <p className="text-white mb-6">
                  En tant qu'entrepreneur sénégalais expatrié et fondateur de Millennium Capital Invest Ltd, j'ai personnellement développé et dirigé tous les aspects de SenServices durant 4 ans et demi, assumant plus de 30 rôles clés pour transformer ma vision en réalité concrète:
                </p>
                
                {myDetailedRoles.map((roleCat, idx) => <div key={idx} className="mb-6">
                    <h4 className="text-primary font-semibold mb-3 text-lg">{roleCat.category}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {roleCat.roles.map((role, roleIdx) => <div key={roleIdx} className="flex items-center gap-2 bg-black/20 p-2 rounded-lg">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span className="text-sm text-white">{role}</span>
                        </div>)}
                    </div>
                  </div>)}
                
                <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-white text-sm">
                    <strong>Note:</strong> Ce projet a été entièrement développé par mes soins, avec des consultations ponctuelles d'experts dans divers domaines pour garantir son excellence. Je reste le créateur, visionnaire et exécutant de toutes les facettes de SenServices.
                  </p>
                </div>
              </div>

              {/* APPEL À L'ACTION POUR PARTENARIATS - REFORMULÉ POUR ÊTRE PLUS CLAIR SUR LE STATUT DU PROJET */}
              <div className="mt-12 bg-gradient-to-r from-black/60 via-primary/20 to-black/60 p-8 rounded-xl border-2 border-primary/30 shadow-lg shadow-primary/10">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-bold text-white mb-4">Appel aux Partenaires Stratégiques</h3>
                    <div className="h-1 w-24 bg-gradient-primary mb-6 rounded-full"></div>
                    
                    <p className="text-white text-lg mb-4">
                      <span className="font-semibold text-primary">SenServices est prêt à 90%</span> et recherche activement des partenariats avec le gouvernement sénégalais, les ministères et les entreprises pour son lancement officiel.
                    </p>
                    
                    <p className="text-white mb-6">
                      Ce projet visionnaire représente une opportunité unique de transformation numérique pour le Sénégal, avec un potentiel de générer des milliards de FCFA d'économies annuelles pour l'État et d'améliorer radicalement l'expérience des citoyens avec l'administration.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5 shrink-0">
                          <span className="text-white font-bold">1</span>
                        </div>
                        <p className="text-white">
                          <span className="font-semibold">Pour le Gouvernement et les Ministères:</span> Nous proposons un partenariat public-privé pour évaluer, tester et implémenter progressivement SenServices au sein de l'administration.
                        </p>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5 shrink-0">
                          <span className="text-white font-bold">2</span>
                        </div>
                        <p className="text-white">
                          <span className="font-semibold">Pour les Entreprises Sénégalaises:</span> Devenez partenaires technologiques ou financiers d'un projet à fort impact social et économique, avec des opportunités d'intégration et d'adaptation à vos besoins spécifiques.
                        </p>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-0.5 shrink-0">
                          <span className="text-white font-bold">3</span>
                        </div>
                        <p className="text-white">
                          <span className="font-semibold">Pour les Investisseurs:</span> Soutenez un projet innovant à fort potentiel de croissance, avec des perspectives de déploiement dans toute l'Afrique de l'Ouest.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/3 bg-black/50 p-6 rounded-xl border border-white/10">
                    <h4 className="text-primary font-semibold mb-4 text-center">État actuel du projet</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-white">Développement</span>
                          <span className="text-primary font-medium">100%</span>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-white">Tests utilisateurs</span>
                          <span className="text-primary font-medium">95%</span>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-white">Sécurité & Conformité</span>
                          <span className="text-primary font-medium">90%</span>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-white">Partenariats officiels</span>
                          <span className="text-primary font-medium">15%</span>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: '15%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button className="w-full bg-gradient-primary hover:opacity-90 text-white font-medium shadow-lg" asChild>
                        <a href="https://www.senservicesenegal.com/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                          <span>Devenir Partenaire</span>
                          <ArrowRight size={16} />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Milestones - RENAMED FROM ACHIEVEMENTS TO MILESTONES */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6 text-white">Étapes Clés & Objectifs</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {projectDetails.milestones.map((milestone, idx) => <div key={idx} className="bg-black/40 p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-all duration-300">
                      <Target className="text-primary mb-3" />
                      <h4 className="text-lg font-medium mb-2 text-white">{milestone.title}</h4>
                      <p className="text-sm text-gray-300">{milestone.description}</p>
                      <p className="text-xs text-primary mt-2">{milestone.year}</p>
                    </div>)}
                </div>
              </div>
            </div>
          </PageContainer>
        </section>
        
        {/* Catégories de services - UPDATED TO EMPHASIZE PLANNED SERVICES */}
        <section className="py-20">
          <PageContainer>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Services Planifiés</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-white text-lg">
                SenServices vise à offrir une gamme complète de 500 services administratifs,
                regroupés en catégories pour simplifier vos démarches quotidiennes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, idx) => <motion.div key={idx} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: idx * 0.1
            }} className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="text-primary mb-4 p-3 bg-white/5 rounded-lg inline-block group-hover:bg-primary/20 transition-colors duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                  <p className="text-gray-300 mb-4">{category.description}</p>
                  
                  <div className="bg-black/30 rounded-lg p-4 mb-4">
                    <h4 className="text-sm font-medium text-primary mb-2">Exemples de services prévus:</h4>
                    <ul className="space-y-2">
                      {category.services.map((service, serviceIdx) => <li key={serviceIdx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span className="text-sm text-white">{service}</span>
                        </li>)}
                    </ul>
                  </div>
                  
                  <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto" asChild>
                    <a href="https://www.senservicesenegal.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <span>En savoir plus</span>
                      <ArrowRight size={14} className="ml-2" />
                    </a>
                  </Button>
                </motion.div>)}
            </div>
          </PageContainer>
        </section>
        
        {/* Key objectives - RENAMED FROM RESULTS */}
        <section className="py-16 bg-black/30 backdrop-blur-md border-t border-b border-white/10">
          <PageContainer>
            <h2 className="text-3xl font-bold mb-10 text-center text-white">Objectifs Clés 2025 - 2030</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {projectDetails.results.map((result, idx) => <motion.div key={idx} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: idx * 0.1
            }} className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="mx-auto w-fit mb-4">
                    {result.icon}
                  </div>
                  <div className="text-primary text-3xl font-bold mb-2">{result.value}</div>
                  <div className="text-white font-medium">{result.metric}</div>
                </motion.div>)}
            </div>
          </PageContainer>
        </section>
        
        {/* Key features */}
        <section className="py-20">
          <PageContainer>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-white">Fonctionnalités Prévues</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-white">
                Des fonctionnalités conçues pour simplifier l'expérience des citoyens et optimiser le travail des agents administratifs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.map((feature, idx) => <motion.div key={idx} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: idx * 0.1
            }} className="bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 group">
                  <div className="text-primary mb-4 p-3 bg-white/5 rounded-lg inline-block group-hover:bg-primary/20 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>)}
            </div>
          </PageContainer>
        </section>

        {/* Témoignages UPDATED to show potential benefits */}
        <section className="py-20 bg-black/40 backdrop-blur-md border-t border-b border-white/10">
          <PageContainer>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-white">Témoignages de Participants aux Tests</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-white">
                Découvrez les réactions des testeurs de la version bêta et leur perception de l'impact potentiel de SenServices.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => <Card key={idx} className="bg-black/30 border border-white/10 overflow-hidden group hover:border-primary/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30">
                        <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{testimonial.author}</h4>
                        <p className="text-primary text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>)}
            </div>
          </PageContainer>
        </section>
        
        {/* Interface showcase */}
        <section id="demo" className="py-20">
          <PageContainer>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-white">Maquettes d'Interfaces</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-white">
                Aperçu des interfaces proposées pour SenServices : espace citoyen et administration.
              </p>
            </div>
            
            <Tabs defaultValue="citizen" className="w-full">
              <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
                <TabsTrigger value="citizen">Interface Citoyenne</TabsTrigger>
                <TabsTrigger value="admin">Interface Administrative</TabsTrigger>
              </TabsList>
              
              <TabsContent value="citizen" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-portfolio-pink rounded-2xl blur opacity-30"></div>
                    <Card className="bg-black/40 backdrop-blur-md border border-white/10 overflow-hidden">
                      <CardContent className="p-0">
                        <img src="/lovable-uploads/61406fcd-d8bd-4eba-8cb6-42c42e5e67c0.png" alt="Interface citoyenne - Documents d'identité" className="w-full h-auto" />
                      </CardContent>
                    </Card>
                  </div>

                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-portfolio-pink rounded-2xl blur opacity-30"></div>
                    <Card className="bg-black/40 backdrop-blur-md border border-white/10 overflow-hidden">
                      <CardContent className="p-0">
                        <img src="/lovable-uploads/b1a39273-856c-4a25-a8b9-d16c984d5719.png" alt="Interface citoyenne - Objectifs" className="w-full h-auto" />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="admin" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-portfolio-pink rounded-2xl blur opacity-30"></div>
                    <Card className="bg-black/40 backdrop-blur-md border border-white/10 overflow-hidden">
                      <CardContent className="p-0">
                        <img src="/lovable-uploads/3dc03f5f-4997-43fa-89f4-2f4d7c7902fa.png" alt="Interface administrative - Tableau de bord" className="w-full h-auto" />
                      </CardContent>
                    </Card>
                  </div>

                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-portfolio-pink rounded-2xl blur opacity-30"></div>
                    <Card className="bg-black/40 backdrop-blur-md border border-white/10 overflow-hidden">
                      <CardContent className="p-0">
                        <img src="/lovable-uploads/c71c1a88-d2bb-4502-8763-f5fb7209e5fd.png" alt="Interface administrative - Statistiques" className="w-full h-auto" />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </PageContainer>
        </section>
        
        {/* Contact section */}
        <section className="py-20 bg-black/30 backdrop-blur-md border-t border-white/10">
          <PageContainer>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Intéressé par ce projet ?</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-white mb-8">
                Vous souhaitez en savoir plus sur SenServices ou discuter d'une potentielle collaboration ?
                N'hésitez pas à me contacter ou à visiter le site officiel du projet.
              </p>
              <div className="flex justify-center gap-4">
                <Button className="bg-gradient-primary hover:opacity-90 text-white font-medium shadow-lg shadow-primary/20" asChild>
                  <a href="https://www.senservicesenegal.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <span>Site Officiel</span>
                    <ArrowRight size={16} />
                  </a>
                </Button>
                <Button variant="outline" className="border-white/30 hover:bg-white/10 text-white font-medium" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    <Mail size={16} />
                    <span>Me contacter</span>
                  </Link>
                </Button>
              </div>
            </div>
          </PageContainer>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default SenServices;

