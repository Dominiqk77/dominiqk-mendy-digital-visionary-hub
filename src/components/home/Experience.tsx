import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

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
      description: "Direction des opérations et transformation digitale pour un portefeuille d'établissements hôteliers de luxe �� Marrakech, incluant le prestigieux Riad Mabrouk et plusieurs propriétés partenaires.",
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
    <section id="experience" className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Parcours d'Excellence
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Un parcours international d'expert marqué par l'innovation technologique et le leadership digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border-gradient border-gradient-light overflow-hidden h-full">
              <CardHeader className="bg-gradient-to-r from-primary/5 via-secondary/5 to-transparent border-b">
                <CardTitle>
                  <div className="flex flex-col space-y-2">
                    <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {exp.position}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                        {exp.company}
                        {exp.website && (
                          <a 
                            href={exp.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary hover:text-secondary transition-colors"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    {exp.locations && (
                      <div className="flex flex-wrap gap-2">
                        {exp.locations.map((location, idx) => (
                          <span key={idx} className="text-xs font-medium px-2 py-1 bg-secondary/10 text-secondary rounded-full">
                            {location}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="mb-6 text-muted-foreground leading-relaxed">{exp.description}</p>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start group">
                      <div className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-secondary transition-colors duration-300"></div>
                      <span className="text-sm leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
