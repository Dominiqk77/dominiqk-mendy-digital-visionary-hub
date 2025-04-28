
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: "MILLENNIUM WEB INVEST",
      position: "Fondateur & Directeur de la Stratégie Digitale",
      period: "2015 - PRÉSENT",
      description: "Direction stratégique d'une agence numérique innovante spécialisée dans la transformation digitale et le développement de solutions technologiques avancées.",
      achievements: [
        "Élaboration et mise en œuvre de stratégies de transformation digitale générant une croissance moyenne de 40% pour nos clients",
        "Direction d'une équipe pluridisciplinaire de 15+ experts en développement, marketing et IA",
        "Développement d'un portfolio de plus de 200 projets réussis dans le digital",
        "Innovation continue dans l'intégration des technologies émergentes et de l'IA"
      ]
    },
    {
      company: "RIAD MABROUK & SPA MARRAKECH",
      position: "Directeur de la Transformation Digitale",
      period: "2022 - 2023",
      description: "Pilotage de la transformation numérique complète d'un établissement hôtelier de luxe, avec focus sur l'innovation technologique et l'expérience client.",
      achievements: [
        "Implémentation d'une stratégie digitale omnicanale augmentant les réservations directes de 65%",
        "Conception et déploiement d'une architecture web responsive optimisée pour le SEO",
        "Développement d'une stratégie de contenu premium générant +120% d'engagement",
        "Mise en place d'un système de gestion relationnel client optimisant le taux de fidélisation de 45%"
      ]
    },
    {
      company: "HÔTEL MÉDINA LOFT & SPA",
      position: "Architecte Solutions Digitales",
      period: "2020 - 2021",
      description: "Conception et mise en œuvre de l'écosystème digital complet pour une chaîne hôtelière de luxe, focus sur l'innovation et l'expérience utilisateur.",
      achievements: [
        "Architecture et déploiement d'une suite de 7 plateformes web interconnectées",
        "Implémentation d'un CRM personnalisé augmentant la rétention client de 55%",
        "Optimisation de la présence digitale résultant en une croissance de 60% de l'engagement",
        "Direction de projets technologiques innovants avec un ROI moyen de 300%"
      ]
    },
    {
      company: "PUBLI TICKET MARRAKECH",
      position: "Directeur Innovation & Partenariats Stratégiques",
      period: "2018 - 2019",
      description: "Leadership dans l'introduction d'une solution de marketing innovante sur le marché marocain, transformant l'approche traditionnelle de la publicité locale.",
      achievements: [
        "Développement et implémentation d'une solution publicitaire révolutionnaire sur le marché marocain",
        "Établissement de partenariats stratégiques avec plus de 50 entreprises majeures",
        "Création d'un nouveau canal marketing générant 1M+ d'impressions mensuelles",
        "Pilotage de l'expansion régionale avec une croissance de 200% en 12 mois"
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
            Un parcours professionnel marqué par l'innovation technologique et l'excellence opérationnelle
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30"></div>
          
          <div className="space-y-12 sm:space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                <div className="absolute left-6 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full border-4 border-primary bg-white z-10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-secondary">
                  <span className="text-primary font-bold group-hover:text-secondary transition-colors duration-300">{index + 1}</span>
                </div>
                
                <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
                    {index % 2 === 0 ? (
                      <Card className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border-gradient border-gradient-light overflow-hidden">
                        <CardHeader className="bg-gradient-to-r from-primary/5 via-secondary/5 to-transparent border-b">
                          <CardTitle>
                            <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{exp.position}</div>
                            <div className="text-sm font-normal text-muted-foreground">{exp.company}</div>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-medium px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full">
                              {exp.period}
                            </span>
                          </div>
                          <p className="mb-4 text-muted-foreground leading-relaxed">{exp.description}</p>
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
                    ) : null}
                  </div>
                  
                  <div className="ml-16 md:ml-0 md:w-1/2 md:px-8 mt-6 md:mt-0">
                    {index % 2 !== 0 ? (
                      <Card className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border-gradient border-gradient-light overflow-hidden">
                        <CardHeader className="bg-gradient-to-r from-primary/5 via-secondary/5 to-transparent border-b">
                          <CardTitle>
                            <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{exp.position}</div>
                            <div className="text-sm font-normal text-muted-foreground">{exp.company}</div>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-medium px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full">
                              {exp.period}
                            </span>
                          </div>
                          <p className="mb-4 text-muted-foreground leading-relaxed">{exp.description}</p>
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
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
