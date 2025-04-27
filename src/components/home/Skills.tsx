
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const [selectedTab, setSelectedTab] = useState("tech");
  
  const techSkills = [
    { name: "Développement Web Full Stack", level: 95 },
    { name: "Développement Mobile", level: 90 },
    { name: "Intelligence Artificielle", level: 95 },
    { name: "Base de données", level: 92 },
    { name: "Cloud Computing", level: 88 },
    { name: "DevOps", level: 85 },
    { name: "Cybersécurité", level: 85 },
    { name: "Blockchain & Web 3.0", level: 90 },
  ];
  
  const marketingSkills = [
    { name: "Stratégie Marketing Digital", level: 97 },
    { name: "SEO/SEM/SMO", level: 96 },
    { name: "Content Marketing", level: 94 },
    { name: "Social Media Marketing", level: 93 },
    { name: "Growth Hacking", level: 95 },
    { name: "Analyse de Données", level: 92 },
    { name: "CRM & Automation", level: 90 },
    { name: "UX/UI Design", level: 91 },
  ];
  
  const softSkills = [
    { name: "Leadership", level: 95 },
    { name: "Gestion de Projet", level: 92 },
    { name: "Communication", level: 94 },
    { name: "Résolution de problèmes", level: 96 },
    { name: "Adaptabilité", level: 93 },
    { name: "Travail d'équipe", level: 90 },
    { name: "Négociation", level: 92 },
    { name: "Innovation", level: 97 },
  ];

  const technologies = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
    { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
    { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compétences & Expertises</h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Un éventail complet de compétences techniques et stratégiques pour répondre à tous vos besoins numériques
          </p>
        </div>
        
        <Tabs defaultValue="tech" value={selectedTab} onValueChange={setSelectedTab} className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-muted/50">
              <TabsTrigger value="tech" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Compétences Techniques
              </TabsTrigger>
              <TabsTrigger value="marketing" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Marketing Digital
              </TabsTrigger>
              <TabsTrigger value="soft" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Soft Skills
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="tech" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {techSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{skill.name}</h3>
                    <span className="text-sm font-semibold">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="marketing" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {marketingSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{skill.name}</h3>
                    <span className="text-sm font-semibold">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="soft" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {softSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{skill.name}</h3>
                    <span className="text-sm font-semibold">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Technologies & Outils</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-16 h-16 technology-icon">
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="mt-2 text-sm text-center opacity-0 group-hover:opacity-100 transition-opacity">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
