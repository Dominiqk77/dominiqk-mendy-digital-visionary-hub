
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useIsMobile } from "@/hooks/use-mobile";

const Skills = () => {
  const [selectedTab, setSelectedTab] = useState("tech");
  const isMobile = useIsMobile();
  
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
    { name: "React", icon: "/icons/react.svg" },
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Python", icon: "/icons/python.svg" },
    { name: "TensorFlow", icon: "/icons/tensorflow.svg" },
    { name: "AWS", icon: "/icons/aws.svg" },
    { name: "Docker", icon: "/icons/docker.svg" },
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "Firebase", icon: "/icons/firebase.svg" },
    { name: "Flutter", icon: "/icons/flutter.svg" },
    { name: "Vue.js", icon: "/icons/vue.svg" },
    { name: "Angular", icon: "/icons/angular.svg" },
    { name: "PHP", icon: "/icons/php.svg" },
    { name: "WordPress", icon: "/icons/wordpress.svg" },
    { name: "Redux", icon: "/icons/redux.svg" },
    { name: "GraphQL", icon: "/icons/graphql.svg" },
    { name: "Figma", icon: "/icons/figma.svg" },
    { name: "Canva", icon: "/icons/canva.svg" },
    { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
    { name: "Next.js", icon: "/icons/nextjs.svg" },
  ];

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  // Scroll tabs into view when selected on mobile
  useEffect(() => {
    if (isMobile) {
      const tabElement = document.querySelector(`[data-state="active"][data-value="${selectedTab}"]`);
      if (tabElement) {
        tabElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [selectedTab, isMobile]);

  return (
    <section className="py-20 bg-background" id="skills">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compétences & Expertises</h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Un éventail complet de compétences techniques et stratégiques pour répondre à tous vos besoins numériques
          </p>
        </div>
        
        <Tabs defaultValue="tech" value={selectedTab} onValueChange={handleTabChange} className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-muted/50 w-full md:w-auto overflow-x-auto no-scrollbar p-1 rounded-lg">
              <TabsTrigger 
                value="tech" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-2 flex-1 md:flex-none whitespace-nowrap"
              >
                Compétences Techniques
              </TabsTrigger>
              <TabsTrigger 
                value="marketing" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-2 flex-1 md:flex-none whitespace-nowrap"
              >
                Marketing Digital
              </TabsTrigger>
              <TabsTrigger 
                value="soft" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white px-4 py-2 flex-1 md:flex-none whitespace-nowrap"
              >
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
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-sm p-3 technology-icon">
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="mt-2 text-sm text-center font-medium">
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
