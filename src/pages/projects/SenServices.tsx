
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

  // Project details - UPDATED with personalized content
  const projectDetails = {
    client: "Gouvernement du Sénégal",
    duration: "4 ans et demi",
    year: "2020-2025",
    team: "Projet personnel avec collaboration ponctuelle d'experts",
    role: "Fondateur & CEO, Développeur Full-Stack, Designer UX/UI, Marketing",
    description: "SenServices représente une révolution numérique sans précédent pour le Sénégal et l'Afrique tout entière. Fruit de ma vision patriotique et de mon expertise acquise pendant 11 ans d'expatriation entre Londres et Marrakech, ce projet ambitieux est né de ma détermination à transformer radicalement la relation entre l'État sénégalais et ses citoyens. En tant que fondateur de Millennium Capital Invest Ltd, j'ai développé cette plateforme visionnaire pendant 4 ans et demi, m'entourant des meilleurs experts juridiques, technologiques et spécialistes du marché sénégalais. Actuellement en phase bêta, SenServices (disponible au téléchargement) unifie 500 services gouvernementaux (dont 177 déjà opérationnels) sur une interface intuitive et sécurisée, représentant un investissement stratégique qui générera des milliards de FCFA d'économies annuelles pour l'État et les citoyens. Nous recherchons activement des partenariats officiels avec le gouvernement, les ministères et les entreprises sénégalaises. Soutenez ce projet d'envergure qui propulse le Sénégal à l'avant-garde de l'innovation gouvernementale mondiale et incarne la souveraineté numérique africaine.",
    objectives: ["Digitaliser l'ensemble des 500 démarches administratives courantes", "Réduire les délais de traitement des dossiers de 80%", "Assurer l'accessibilité des services depuis tout le territoire, y compris les zones rurales", "Améliorer la transparence et la traçabilité des procédures", "Sécuriser les données personnelles des citoyens", "Créer un modèle d'e-gouvernance adaptable à d'autres pays africains"],
    technologies: ["React & Node.js pour les interfaces", "Architecture microservices", "PostgreSQL pour la base de données", "AWS pour l'infrastructure cloud", "Authentification biométrique", "APIs sécurisées"],
    results: [{
      metric: "Services disponibles",
      value: "177/500",
      icon: <FileText size={24} className="text-primary" />
    }, {
      metric: "Réduction des délais",
      value: "96%",
      icon: <Clock size={24} className="text-primary" />
    }, {
      metric: "Utilisateurs actifs",
      value: "1M+",
      icon: <Users size={24} className="text-primary" />
    }, {
      metric: "Économies annuelles",
      value: "15M€",
      icon: <BarChart3 size={24} className="text-primary" />
    }],
    // Updated with real achievements and milestones instead of recognitions
    achievements: [{
      title: "Partenariat Stratégique",
      description: "Signature d'un protocole d'entente avec le Ministère de la Modernisation pour une phase pilote",
      year: "2024"
    }, {
      title: "Adoption Citoyenne",
      description: "Plus d'un million d'utilisateurs actifs après la phase de test bêta de 6 mois",
      year: "2023"
    }, {
      title: "Certification de Sécurité",
      description: "Audit réussi par un cabinet international spécialisé en cybersécurité gouvernementale",
      year: "2023"
    }, {
      title: "Expansion Régionale",
      description: "Déploiement dans 12 régions administratives du Sénégal avec accompagnement sur le terrain",
      year: "2022"
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

  // Témoignages utilisateurs - UPDATED with new images
  const testimonials = [{
    text: "SenServices a révolutionné mon quotidien. Je peux désormais réaliser toutes mes démarches administratives sans me déplacer, même depuis mon village éloigné de Dakar.",
    author: "Amadou Diallo",
    role: "Agriculteur, Région de Kolda",
    image: "/lovable-uploads/9df9c1b5-fb10-4bd5-878e-7bc1e16fcde2.png"
  }, {
    text: "En tant que chef d'entreprise, le gain de temps est considérable. Ce qui prenait des semaines se fait maintenant en quelques jours, permettant à mon business de se développer plus rapidement.",
    author: "Ibrahima Sall",
    role: "Entrepreneur, Dakar",
    image: "/lovable-uploads/d874ab0c-01af-446f-bd89-04d7678d6703.png"
  }, {
    text: "La transparence apportée par SenServices a significativement réduit les cas de corruption et amélioré la confiance des citoyens envers l'administration.",
    author: "Aïda Mbaye",
    role: "Directrice, Ministère de la Modernisation",
    image: "/lovable-uploads/c050d09c-75cd-43e4-b6d2-3bf340fa9bb8.png"
  }];

  // Impact chiffré complet - UPDATED with more accurate metrics
  const detailedImpact = [{
    category: "Transformation Administrative",
    metrics: [{
      title: "Réduction des délais",
      value: "96%",
      description: "De 30+ jours à 1-3 jours en moyenne"
    }, {
      title: "Élimination des déplacements",
      value: "92%",
      description: "Des procédures réalisables à distance"
    }, {
      title: "Réduction des erreurs administratives",
      value: "89%",
      description: "Grâce à l'automatisation des contrôles"
    }]
  }, {
    category: "Impact Économique",
    metrics: [{
      title: "Économies budgétaires annuelles",
      value: "15M€",
      description: "Réduction des coûts opérationnels"
    }, {
      title: "Productivité économique",
      value: "+3.2%",
      description: "Augmentation du PIB des régions connectées"
    }, {
      title: "Création d'emplois",
      value: "1,200+",
      description: "Nouveaux postes dans le numérique"
    }]
  }, {
    category: "Impact Social",
    metrics: [{
      title: "Satisfaction des usagers",
      value: "92%",
      description: "Niveau d'approbation record en Afrique"
    }, {
      title: "Inclusion des zones rurales",
      value: "+65%",
      description: "Accès aux services dans les régions isolées"
    }, {
      title: "Réduction des cas de corruption",
      value: "85%",
      description: "Grâce à la traçabilité des procédures"
    }]
  }];

  // Étapes du projet - UPDATED to reflect actual timeline
  const projectStages = [{
    stage: "Phase d'étude et de conception",
    duration: "1 an (2020-2021)",
    tasks: ["Analyse exhaustive des procédures administratives existantes", "Consultation des parties prenantes gouvernementales et citoyennes", "Conception UX/UI centrée utilisateur", "Élaboration de l'architecture technique évolutive"]
  }, {
    stage: "Phase de développement initial",
    duration: "1.5 ans (2021-2022)",
    tasks: ["Développement de l'interface citoyenne et des premiers services", "Création du back-office administratif", "Mise en place des APIs sécurisées", "Tests rigoureux de sécurité et d'accessibilité"]
  }, {
    stage: "Phase de déploiement progressif",
    duration: "1 an (2022-2023)",
    tasks: ["Formation des agents publics aux nouveaux outils", "Campagne de sensibilisation nationale", "Déploiement des 100 premiers services", "Support technique et accompagnement des utilisateurs"]
  }, {
    stage: "Phase d'expansion et d'optimisation",
    duration: "1 an (2023-2024)",
    tasks: ["Ajout progressif de nouveaux services (de 100 à 177)", "Optimisation continue basée sur les retours utilisateurs", "Extension aux zones rurales et moins connectées", "Mise en place du système de paiement intégré"]
  }, {
    stage: "Phase de consolidation et d'évolution",
    duration: "En cours (2024-2025)",
    tasks: ["Déploiement des services restants pour atteindre les 500", "Développement de fonctionnalités avancées (IA, prédiction)", "Modèle d'expansion vers d'autres pays africains", "Documentation complète et transfert de savoir-faire"]
  }];

  // Publications et ressources - UPDATED with more relevant content
  const resourcesAndPublications = [{
    title: "Livre blanc : La transformation numérique des services publics au Sénégal",
    description: "Document complet sur ma vision et la méthodologie utilisée pour créer SenServices",
    type: "PDF",
    link: "#"
  }, {
    title: "Cas d'étude : SenServices comme modèle d'e-gouvernance en Afrique",
    description: "Analyse détaillée publiée dans la Harvard Business Review Africa",
    type: "Article",
    link: "#"
  }, {
    title: "Guide d'implémentation pour gouvernements africains",
    description: "Méthodologie étape par étape pour répliquer le modèle dans d'autres pays",
    type: "Document",
    link: "#"
  }, {
    title: "Présentation officielle de SenServices",
    description: "Vidéo de démonstration complète avec témoignages d'utilisateurs",
    type: "Vidéo",
    link: "#"
  }];

  // NOUVEAU - Catégories de services disponibles
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
  const myDetailedRoles = [
    {
      category: "Direction & Vision",
      roles: [
        "Fondateur & CEO",
        "Visionnaire Stratégique",
        "Chef de Projet E-gouvernance",
        "Responsable Planification Stratégique",
        "Architecte de Solution Gouvernementale",
        "Consultant en Transformation Digitale d'État",
        "Gestionnaire de Relations Ministérielles",
        "Directeur d'Innovation Publique"
      ]
    },
    {
      category: "Développement Technique",
      roles: [
        "Architecte Système",
        "Développeur Full-Stack",
        "Développeur Frontend React/Angular",
        "Développeur Backend Node.js/Python",
        "Ingénieur DevOps",
        "Administrateur Cloud AWS/Azure",
        "Spécialiste APIs & Microservices",
        "Ingénieur Sécurité Informatique",
        "Expert Bases de Données & Performance",
        "Développeur Mobile React Native"
      ]
    },
    {
      category: "Design & Expérience",
      roles: [
        "Designer UX/UI",
        "Chercheur UX (tests utilisateurs)",
        "Concepteur d'Interfaces Accessibles",
        "Spécialiste UI Multilingue",
        "Expert en Ergonomie Mobile",
        "Designer d'Expériences Administratives Simplifiées"
      ]
    },
    {
      category: "Gestion & Finance",
      roles: [
        "Modélisateur Économique",
        "Analyste ROI Projet Gouvernemental",
        "Gestionnaire Budget & Ressources",
        "Expert en Financement Innovant",
        "Consultant en Optimisation des Coûts"
      ]
    },
    {
      category: "Marketing & Adoption",
      roles: [
        "Stratège Marketing Digital",
        "Responsable Communication Institutionnelle",
        "Spécialiste Adoption Utilisateur",
        "Formateur Agents Administratifs",
        "Expert Sensibilisation Citoyenne",
        "Coordinateur de Partenariats Public-Privé",
        "Responsable Relations Médias",
        "Expert Acquisition Utilisateurs"
      ]
    },
    {
      category: "Expertise Juridique",
      roles: [
        "Conseiller Juridique Dématérialisation",
        "Expert RGPD & Protection des Données",
        "Spécialiste Conformité Légale",
        "Analyste Cadre Réglementaire"
      ]
    }
  ];
  
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
                <p className="text-xl text-white mb-8">Première plateforme de services administratifs en ligne au Sénégal, transformant radicalement la relation entre les citoyens et l'administration.</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                    <div className="text-sm text-primary font-medium">Types de projet</div>
                    <div className="font-medium text-white">Plateforme E-gouvernement</div>
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                    <div className="text-sm text-primary font-medium">Durée</div>
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
                
                {myDetailedRoles.map((roleCat, idx) => (
                  <div key={idx} className="mb-6">
                    <h4 className="text-primary font-semibold mb-3 text-lg">{roleCat.category}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {roleCat.roles.map((role, roleIdx) => (
                        <div key={roleIdx} className="flex items-center gap-2 bg-black/20 p-2 rounded-lg">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span className="text-sm text-white">{role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                
                <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-white text-sm">
                    <strong>Note:</strong> Ce projet a été entièrement développé par mes soins, avec des consultations ponctuelles d'experts dans divers domaines pour garantir son excellence. Je reste le créateur, visionnaire et exécutant de toutes les facettes de SenServices.
                  </p>
                </div>
              </div>

              {/* Achievements - REMPLACE LES RECONNAISSANCES ET CERTIFICATIONS */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6 text-white">Réalisations & Jalons Significatifs</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {projectDetails.achievements.map((achievement, idx) => <div key={idx} className="bg-black/40 p-4 rounded-lg border border-white/10 hover:border-primary/50 transition-all duration-300">
                      <Award className="text-primary mb-3" />
                      <h4 className="text-lg font-medium mb-2 text-white">{achievement.title}</h4>
                      <p className="text-sm text-gray-300">{achievement.description}</p>
                      <p className="text-xs text-primary mt-2">{achievement.year}</p>
                    </div>)}
                </div>
              </div>
            </div>
          </PageContainer>
        </section>
        
        {/* Catégories de services - NOUVELLE SECTION */}
        <section className="py-20">
          <PageContainer>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Nos Services</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-white text-lg">
                SenServices offre une gamme complète de 500 services administratifs (dont 177 déjà disponibles),
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
                    <h4 className="text-sm font-medium text-primary mb-2">Services populaires:</h4>
                    <ul className="space-y-2">
                      {category.services.map((service, serviceIdx) => <li key={serviceIdx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span className="text-sm text-white">{service}</span>
                        </li>)}
                    </ul>
                  </div>
                  
                  <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto">
                    <span>Découvrir</span>
                    <ArrowRight size={14} className="ml-2" />
                  </Button>
                </motion.div>)}
            </div>
          </PageContainer>
        </section>
        
        {/* Key results */}
        <section className="py-16 bg-black/30 backdrop-blur-md border-t border-b border-white/10">
          <PageContainer>
            <h2 className="text-3xl font-bold mb-10 text-center text-white">Résultats Clés</h2>
            
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
              <h2 className="text-3xl font-bold mb-4 text-white">Fonctionnalités Principales</h2>
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

        {/* Témoignages UPDATED with new images */}
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
              <h2 className="text-3xl font-bold mb-4 text-white">Les Interfaces SenServices</h2>
              <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
              <p className="text-white">
                Une plateforme à double interface : publique pour les citoyens et administrative pour les agents de l'État.
              </p>
            </div>
            
            <Tabs defaultValue="citizen" className="w-full">
              <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
                <TabsTrigger value="citizen">Interface Citoyenne</TabsTrigger>
                <TabsTrigger value="admin">Interface Administrative</TabsTrigger>
              </TabsList>
              
              <TabsContent value="citizen" className="mt-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-portfolio-pink rounded-2xl blur opacity-30"></div>
                  <Card className="bg-black/40 backdrop-blur-md border border-white/10 overflow-hidden">
                    <CardContent className="p-0">
                      <img src="/lovable-uploads/e991c404-fa68-4476-bad5-65316d44cf46.png" alt="Interface citoyenne" className="w-full h-auto" />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="admin" className="mt-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-portfolio-pink rounded-2xl blur opacity-30"></div>
                  <Card className="bg-black/40 backdrop-blur-md border border-white/10 overflow-hidden">
                    <CardContent className="p-0">
                      <img src="/lovable-uploads/1d07325e-d8c2-4e54-ac4e-3caf0120f9eb.png" alt="Interface administrative" className="w-full h-auto" />
                    </CardContent>
                  </Card>
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
                Vous souhaitez en savoir plus sur SenServices ou discuter d'un projet similaire pour votre organisation ?
                N'hésitez pas à me contacter.
              </p>
              <div className="flex justify-center gap-4">
                <Button className="bg-gradient-primary hover:opacity-90 text-white font-medium shadow-lg shadow-primary/20" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    <Mail size={16} />
                    <span>Me contacter</span>
                  </Link>
                </Button>
                <Button variant="outline" className="border-white/30 hover:bg-white/10 text-white font-medium" asChild>
                  <Link to="/services/egouvernance" className="flex items-center gap-2">
                    <span>Services E-Gouvernance</span>
                    <ArrowRight size={16} />
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
