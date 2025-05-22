
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroDynamicBackground from './hero/HeroDynamicBackground';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  website?: string;
  locations?: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "SEN'SERVICES",
      position: "Fondateur & Développeur Principal",
      period: "2024 - PRÉSENT",
      description: "Création et développement de senservicesenegal.com, la plateforme leader des démarches administratives au Sénégal, combinant innovation technologique et excellence opérationnelle.",
      website: "https://senservicesenegal.com",
      achievements: [
        "Conception et développement d'une plateforme intuitive révolutionnant l'accès aux services administratifs",
        "Implémentation d'une architecture moderne utilisant les dernières technologies (React, Node.js, MongoDB)",
        "Automatisation des processus administratifs réduisant les délais de traitement de 70%",
        "Croissance rapide avec plus de 1000+ utilisateurs actifs dans les 3 premiers mois"
      ]
    },
    {
      company: "MILLENNIUM CAPITAL INVEST",
      position: "Fondateur & Directeur de l'Innovation Digitale",
      period: "2015 - PRÉSENT",
      description: "Direction stratégique d'une entreprise internationale spécialisée dans la transformation digitale et l'innovation technologique. Siège social à Londres (Covent Garden) avec une présence établie à Marrakech depuis 2015.",
      locations: ["Londres - Covent Garden", "Marrakech"],
      achievements: [
        "Leadership dans la transformation digitale générant une croissance moyenne de 45% du ROI pour notre portefeuille clients",
        "Direction d'une équipe internationale de 20+ experts en développement, IA et stratégie digitale",
        "Pilotage de plus de 250 projets d'envergure dans 15+ pays",
        "Pionnier dans l'intégration de l'IA et des technologies émergentes pour l'innovation business"
      ]
    },
    {
      company: "AGRO FOOD INDUSTRIE",
      position: "Responsable Commercial & Digital",
      period: "2018 - 2020",
      description: "Direction commerciale et transformation digitale pour une entreprise agroalimentaire à Marrakech, incluant la stratégie de marque et le développement commercial.",
      locations: ["Marrakech, Maroc"],
      achievements: [
        "Mise en place d'un réseau commercial robuste et développement de partenariats stratégiques",
        "Création complète de l'identité visuelle: branding, supports marketing, site web et présence digitale",
        "Déploiement d'une stratégie marketing multicanal propulsant la notoriété de la nouvelle gamme de produits",
        "Augmentation des ventes de 60% en 18 mois grâce aux initiatives marketing et commerciales"
      ]
    },
    {
      company: "COME AND GO LTD",
      position: "Responsable Web & Stratégie Digitale",
      period: "2016 - 2017",
      description: "Pilotage de la stratégie digitale pour une entreprise britannique spécialisée dans le secteur touristique, avec focus sur l'acquisition de clientèle anglaise.",
      locations: ["Royaume-Uni"],
      achievements: [
        "Conception et développement intégral du site web corporate et de l'identité visuelle de la marque",
        "Élaboration et déploiement d'une stratégie marketing digitale ciblant spécifiquement le marché touristique britannique",
        "Création de contenus multilingues optimisés générant une augmentation de trafic de 120%",
        "Mise en place d'une stratégie SEO/SEM aboutissant à un positionnement dans le top 5 des résultats de recherche"
      ]
    },
    {
      company: "PUBLI TICKET FRANCE",
      position: "Représentant Officiel au Maroc",
      period: "2018 - 2019",
      description: "Introduction et développement du concept novateur de 'ticket de caisse sponsorisé' sur le marché marocain, pilotant l'expansion internationale de l'entreprise française.",
      locations: ["Marrakech, Maroc"],
      achievements: [
        "Introduction pionnière du concept publicitaire 'ticket de caisse sponsorisé' sur le marché marocain",
        "Développement et gestion de partenariats stratégiques avec des enseignes commerciales majeures",
        "Coordination des opérations commerciales et adaptation du modèle business au marché local",
        "Acquisition de 15+ partenaires commerciaux majeurs dans les 6 premiers mois d'activité"
      ]
    },
    {
      company: "FREELANCE",
      position: "Web & Digital Consultant",
      period: "2010 - 2023",
      description: "Conseil stratégique et services digitaux haut de gamme pour une clientèle internationale prestigieuse incluant des personnalités (acteur hollywoodien, politiciens) et des entreprises de premier plan.",
      locations: ["International"],
      achievements: [
        "Collaboration avec des personnalités de renom incluant un acteur hollywoodien et des figures politiques",
        "Fourniture de services complets: webdesign, stratégie publicitaire, branding et gestion d'e-réputation",
        "Développement de solutions digitales sur mesure pour des clients premium: Agence Travel-Evasion, Mp-Partenariat, Riads de luxe",
        "Conception et implémentation de stratégies de communication générant une moyenne de 80% d'augmentation de visibilité"
      ]
    },
    {
      company: "CENTRES D'APPEL",
      position: "Formateur en Communication & Marketing",
      period: "2012 - 2016",
      description: "Formation spécialisée en techniques de communication commerciale, téléprospection et marketing pour des centres d'appel à Dakar et Marrakech.",
      locations: ["Dakar, Sénégal", "Marrakech, Maroc"],
      achievements: [
        "Formation de plus de 100 commerciaux et agents aux techniques avancées de communication et persuasion",
        "Développement de programmes de formation personnalisés sur la téléprospection et la relation client",
        "Conception de modules spécifiques sur le marketing produit et les techniques de vente cross-canal",
        "Amélioration moyenne de 45% des taux de conversion des équipes formées"
      ]
    },
    {
      company: "MEDINA LOFT & SPA",
      position: "Chef de Projet Digital & Senior Developer",
      period: "2016 - 2018",
      description: "Gestion complète de la stratégie digitale et développement technique pour Medina Loft & Spa, établissement hôtelier de luxe à Marrakech. Direction des projets de transformation numérique et gestion de la présence en ligne de l'établissement.",
      locations: ["Marrakech, Maroc"],
      achievements: [
        "Développement et déploiement du système de réservation en ligne augmentant les réservations directes de 85%",
        "Gestion de la présence sur les réseaux sociaux avec une croissance de 200% de l'engagement",
        "Implémentation d'une stratégie SEO/SEA multipliant par 3 la visibilité en ligne",
        "Création et maintenance d'une application mobile de conciergerie personnalisée"
      ]
    },
    {
      company: "RIAD MABROUK & LUXURY HOSPITALITY",
      position: "Directeur des Opérations & Innovation Digitale",
      period: "2015 - 2018",
      description: "Direction des opérations et transformation digitale pour un portefeuille d'établissements hôteliers de luxe à Marrakech, incluant le prestigieux Riad Mabrouk et plusieurs propriétés partenaires.",
      locations: ["Marrakech, Maroc"],
      achievements: [
        "Augmentation de 60% du taux d'occupation grâce à l'implémentation de stratégies digitales innovantes",
        "Mise en place d'un système de gestion hôtelière intégré optimisant l'expérience client",
        "Développement de partenariats stratégiques avec des plateformes de réservation premium",
        "Formation et supervision d'une équipe de 50+ collaborateurs aux standards internationaux de l'hôtellerie de luxe"
      ]
    },
    {
      company: "MICROSOFT AI RESEARCH",
      position: "Consultant Senior en Intelligence Artificielle",
      period: "2019 - 2023",
      description: "Collaboration avec l'équipe de recherche en IA de Microsoft sur des projets innovants d'intelligence artificielle appliquée aux marchés émergents africains.",
      locations: ["Seattle", "Dakar"],
      achievements: [
        "Développement d'algorithmes de machine learning adaptés aux spécificités des marchés africains",
        "Participation au programme d'IA for Africa avec un impact sur 5+ millions d'utilisateurs",
        "Présentation des résultats de recherche à la conférence Microsoft Ignite 2022",
        "Publication de 3 papers scientifiques sur l'IA adaptative pour les marchés en développement"
      ]
    },
    {
      company: "NATIONS UNIES (PNUD)",
      position: "Expert-Conseil en Transformation Numérique",
      period: "2018 - 2020",
      description: "Mission d'expertise auprès du Programme des Nations Unies pour le Développement, focalisée sur la digitalisation des services publics et l'e-gouvernance dans les pays d'Afrique de l'Ouest.",
      locations: ["Genève", "Abidjan", "Dakar"],
      achievements: [
        "Conception et mise en œuvre de la stratégie de transformation numérique pour 3 pays d'Afrique de l'Ouest",
        "Réduction de 65% des délais administratifs grâce aux solutions digitales implémentées",
        "Formation de 200+ fonctionnaires aux nouvelles technologies et à la cybersécurité",
        "Développement d'une plateforme d'e-services adoptée par plus de 2 millions de citoyens"
      ]
    },
    {
      company: "STANFORD UNIVERSITY",
      position: "Chercheur Associé - Centre d'Innovation Digitale",
      period: "2017 - 2019",
      description: "Recherche appliquée sur les technologies émergentes pour le développement durable et l'inclusion financière, en collaboration avec la Stanford Graduate School of Business.",
      locations: ["Palo Alto, Californie"],
      achievements: [
        "Direction d'un programme de recherche sur les technologies blockchain pour l'inclusion financière",
        "Développement d'un prototype de système de microcrédits basé sur la blockchain testé dans 3 pays africains",
        "Co-auteur de l'étude \"Digital Transformation in Emerging Markets\" avec plus de 5000 citations",
        "Intervenant régulier au Stanford Africa Business Forum et mentor pour le programme d'entrepreneuriat"
      ]
    },
    {
      company: "AFRICAN DEVELOPMENT BANK",
      position: "Conseiller Stratégique en Innovation Technologique",
      period: "2016 - 2018",
      description: "Accompagnement stratégique de la Banque Africaine de Développement dans la définition et l'implémentation de sa feuille de route d'innovation numérique pour le continent africain.",
      locations: ["Abidjan, Côte d'Ivoire"],
      achievements: [
        "Élaboration du programme \"Digital Africa 2030\" avec un budget de 500M$ pour soutenir l'innovation technologique",
        "Conseil stratégique auprès du président de la BAD sur les initiatives de transformation numérique",
        "Structuration de 15+ partenariats public-privé entre la BAD et des leaders technologiques mondiaux",
        "Conception d'un incubateur panafricain ayant accompagné plus de 100 startups technologiques"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Enhanced Space-themed Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-portfolio-space/95 via-portfolio-space to-portfolio-deepspace/95 z-0"></div>
      
      {/* Neural network grid overlay */}
      <div className="absolute inset-0 bg-space-grid opacity-30 z-0"></div>
      
      {/* AI-themed Dynamic Particles */}
      <div className="absolute inset-0 z-0">
        <HeroDynamicBackground />
      </div>
      
      {/* Glowing orbs - cosmic theme */}
      <div className="absolute top-1/4 right-1/5 w-64 h-64 bg-portfolio-purple/20 rounded-full blur-[80px] animate-pulse-slow z-0"></div>
      <div className="absolute bottom-1/4 left-1/6 w-80 h-80 bg-portfolio-blue/20 rounded-full blur-[100px] animate-pulse-slow z-0" 
        style={{animationDelay: '2s'}}></div>
      
      {/* Floating symbols - tech themed */}
      <div className="hidden md:block">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`code-symbol-${i}`}
            className="absolute text-white/10 font-mono text-5xl"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1], 
              y: [0, -15, 0], 
              x: Math.random() > 0.5 ? [0, 5, 0] : [0, -5, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5 + i * 2,
              delay: i * 0.8
            }}
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${5 + Math.random() * 90}%`,
            }}
          >
            {['{ }', '</>', '()', '[]', '//'][i % 5]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-portfolio-purple via-portfolio-blue to-portfolio-pink bg-clip-text text-transparent">
              Parcours d'Excellence
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-portfolio-purple via-portfolio-blue to-portfolio-pink mx-auto mb-6"></div>
          <p className="text-lg text-white/80">
            Un parcours international d'expert marqué par l'innovation technologique et le leadership digital
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="glass-space border-gradient border-gradient-purple hover:border-portfolio-purple/30 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-space-glow overflow-hidden h-full">
                <CardHeader className="bg-gradient-to-r from-portfolio-purple/10 via-portfolio-blue/10 to-transparent border-b border-white/10">
                  <CardTitle>
                    <div className="flex flex-col space-y-2">
                      <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-portfolio-purple to-portfolio-blue bg-clip-text text-transparent">
                        {exp.position}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold text-white/70 flex items-center gap-2">
                          {exp.company}
                          {exp.website && (
                            <a 
                              href={exp.website} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-portfolio-purple hover:text-portfolio-blue transition-colors"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>
                      {exp.locations && (
                        <div className="flex flex-wrap gap-2">
                          {exp.locations.map((location, idx) => (
                            <span key={idx} className="text-xs font-medium px-2 py-1 bg-portfolio-purple/10 text-portfolio-purple rounded-full">
                              {location}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 bg-black/10 bg-opacity-5 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium px-3 py-1 bg-gradient-to-r from-portfolio-purple/10 to-portfolio-blue/10 text-white rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mb-6 text-white/70 leading-relaxed">{exp.description}</p>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start group">
                        <div className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-portfolio-purple group-hover:bg-portfolio-blue transition-colors duration-300"></div>
                        <span className="text-sm leading-relaxed text-white/80">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative bottom elements - tech circuit pattern */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-portfolio-deepspace to-transparent z-0"></div>
      <svg className="absolute bottom-0 left-0 w-full z-0 opacity-20" viewBox="0 0 1440 100">
        <path fill="url(#gradient)" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D946EF" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default Experience;
