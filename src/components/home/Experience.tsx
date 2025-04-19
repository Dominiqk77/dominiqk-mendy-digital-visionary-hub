
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
      position: "Fondateur - Responsable commercial & Consultant en Marketing",
      period: "2015 - PRÉSENT",
      description: "Fondation et direction d'une agence numérique spécialisée dans le développement web et le marketing digital.",
      achievements: [
        "Conception et exécution de stratégies marketing complètes alignées sur les objectifs des clients",
        "Leadership et gestion d'une équipe performante dans un environnement collaboratif",
        "Développement de la cohérence de marque sur l'ensemble des canaux de communication",
        "Croissance constante du chiffre d'affaires et expansion des services offerts"
      ]
    },
    {
      company: "RIAD MABROUK & SPA MARRAKECH",
      position: "Web Designer - Digital Marketeur & Community Manager",
      period: "2022 - 2023",
      description: "Responsable de la transformation digitale et de la présence en ligne de ce prestigieux établissement hôtelier.",
      achievements: [
        "Orchestration des projets web et création du site vitrine responsive",
        "Conception de matériel promotionnel imprimé et numérique (flyers, affiches, bannières)",
        "Développement de stratégies digitales augmentant l'engagement client",
        "Renforcement de la présence en ligne générant une augmentation des réservations directes"
      ]
    },
    {
      company: "HÔTEL MÉDINA LOFT & SPA",
      position: "Responsable des projets Web & Du Marketing Digital",
      period: "2021 - 2020",
      description: "Supervision complète des initiatives numériques pour cet hôtel de luxe à Marrakech.",
      achievements: [
        "Direction experte de multiples projets web aboutissant à la création de 7 sites distincts",
        "Conception de designs pour la promotion touristique à l'international",
        "Développement et mise en œuvre d'un CRM sur mesure pour la gestion de la relation client",
        "Gestion efficace des réseaux sociaux générant une augmentation du taux d'engagement de 60%"
      ]
    },
    {
      company: "PUBLI TICKET MARRAKECH",
      position: "Partenaire & Représentant Officiel",
      period: "2018 - 2019",
      description: "Promotion d'une solution innovante de billetterie sur le marché marocain.",
      achievements: [
        "Représentation officielle et développement de partenariats stratégiques",
        "Pionnier dans l'installation de tickets de caisse imprimés avec des promotions",
        "Introduction réussie d'une forme de publicité locale innovante",
        "Développement du réseau de clients et expansion de la présence sur le marché"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Parcours Professionnel</h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Une trajectoire professionnelle marquée par l'innovation et l'excellence
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full border-4 border-primary bg-white z-10 flex items-center justify-center">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                
                <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  {/* Empty space for alignment on mobile */}
                  <div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
                    {index % 2 === 0 ? (
                      <Card className="border-gradient border-gradient-light overflow-hidden animate-fade-in">
                        <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent border-b">
                          <CardTitle>
                            <div className="text-lg md:text-xl font-bold">{exp.position}</div>
                            <div className="text-sm font-normal text-muted-foreground">{exp.company}</div>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                              {exp.period}
                            </span>
                          </div>
                          <p className="mb-4 text-muted-foreground">{exp.description}</p>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="mr-2 mt-1 w-1.5 h-1.5 rounded-full bg-primary"></div>
                                <span className="text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ) : null}
                  </div>
                  
                  <div className="ml-16 md:ml-0 md:w-1/2 md:px-8 mt-6 md:mt-0">
                    {index % 2 !== 0 ? (
                      <Card className="border-gradient border-gradient-light overflow-hidden animate-fade-in">
                        <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent border-b">
                          <CardTitle>
                            <div className="text-lg md:text-xl font-bold">{exp.position}</div>
                            <div className="text-sm font-normal text-muted-foreground">{exp.company}</div>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                              {exp.period}
                            </span>
                          </div>
                          <p className="mb-4 text-muted-foreground">{exp.description}</p>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="mr-2 mt-1 w-1.5 h-1.5 rounded-full bg-primary"></div>
                                <span className="text-sm">{achievement}</span>
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
