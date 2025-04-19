
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const [selectedTab, setSelectedTab] = useState("tech");
  
  const techSkills = [
    { name: "Développement Web", level: 95 },
    { name: "Développement Mobile", level: 85 },
    { name: "Intelligence Artificielle", level: 90 },
    { name: "Base de données", level: 88 },
    { name: "Cloud Computing", level: 82 },
    { name: "DevOps", level: 78 },
    { name: "Cybersécurité", level: 75 },
    { name: "Blockchain", level: 70 },
  ];
  
  const marketingSkills = [
    { name: "Stratégie Marketing Digital", level: 95 },
    { name: "SEO/SEM", level: 92 },
    { name: "Content Marketing", level: 90 },
    { name: "Social Media Marketing", level: 88 },
    { name: "Email Marketing", level: 85 },
    { name: "Analyse de Données", level: 87 },
    { name: "CRM", level: 82 },
    { name: "UX/UI Design", level: 80 },
  ];
  
  const softSkills = [
    { name: "Leadership", level: 95 },
    { name: "Gestion de Projet", level: 92 },
    { name: "Communication", level: 90 },
    { name: "Résolution de problèmes", level: 93 },
    { name: "Adaptabilité", level: 88 },
    { name: "Travail d'équipe", level: 90 },
    { name: "Négociation", level: 87 },
    { name: "Gestion du temps", level: 85 },
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
                  <Progress value={skill.level} className="h-2" indicatorClassName="bg-gradient-primary" />
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
                  <Progress value={skill.level} className="h-2" indicatorClassName="bg-gradient-primary" />
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
                  <Progress value={skill.level} className="h-2" indicatorClassName="bg-gradient-primary" />
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
