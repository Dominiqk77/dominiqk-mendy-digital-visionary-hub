
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
      description: "Direction stratégique d'une entreprise internationale spécialisée dans la transformation digitale et l'innovation technologique, avec des bureaux prestigieux à Londres (Covent Garden) et Marrakech.",
      locations: ["Londres - Covent Garden", "Marrakech"],
      achievements: [
        "Leadership dans la transformation digitale générant une croissance moyenne de 45% du ROI pour notre portefeuille clients",
        "Direction d'une équipe internationale de 20+ experts en développement, IA et stratégie digitale",
        "Pilotage de plus de 250 projets d'envergure dans 15+ pays",
        "Pionnier dans l'intégration de l'IA et des technologies émergentes pour l'innovation business"
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

