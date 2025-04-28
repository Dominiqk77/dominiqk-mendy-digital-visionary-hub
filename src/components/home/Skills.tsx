import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent } from "@/components/ui/card";
import { Diamond, Code, LineChart, Brain } from "lucide-react";

const Skills = () => {
  const [selectedTab, setSelectedTab] = useState("tech");
  const isMobile = useIsMobile();
  
  const techSkills = [
    { 
      name: "Développement Web Full Stack", 
      level: 95,
      description: "Expert en React, Node.js, et architectures cloud modernes",
      icon: <Code className="w-6 h-6 text-primary" />
    },
    { 
      name: "Intelligence Artificielle", 
      level: 95,
      description: "Spécialiste en ML, Deep Learning et IA générative",
      icon: <Brain className="w-6 h-6 text-primary" />
    },
    { 
      name: "Innovation Digitale", 
      level: 97,
      description: "Pionnier dans l'adoption des nouvelles technologies",
      icon: <Diamond className="w-6 h-6 text-primary" />
    },
    { 
      name: "Analyse de Performance", 
      level: 94,
      description: "Expert en optimisation et analyse de données",
      icon: <LineChart className="w-6 h-6 text-primary" />
    }
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

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  useEffect(() => {
    if (isMobile) {
      const tabElement = document.querySelector(`[data-state="active"][data-value="${selectedTab}"]`);
      if (tabElement) {
        tabElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [selectedTab, isMobile]);

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="skills">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Expertises Clés</h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Des compétences de pointe au service de l'innovation numérique
          </p>
        </div>
        
        <Tabs defaultValue="tech" value={selectedTab} onValueChange={handleTabChange} className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-muted/50 w-full md:w-auto overflow-x-auto no-scrollbar p-1 rounded-lg">
              <TabsTrigger 
                value="tech" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-3 flex-1 md:flex-none whitespace-nowrap text-base"
              >
                Expertise Technique
              </TabsTrigger>
              <TabsTrigger 
                value="marketing" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-3 flex-1 md:flex-none whitespace-nowrap text-base"
              >
                Marketing Digital
              </TabsTrigger>
              <TabsTrigger 
                value="soft" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-3 flex-1 md:flex-none whitespace-nowrap text-base"
              >
                Soft Skills
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="tech" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur border-primary/10">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        {skill.icon}
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{skill.name}</h3>
                          <p className="text-sm text-muted-foreground">{skill.description}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Niveau d'expertise</span>
                          <span className="text-sm font-semibold">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="marketing" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {marketingSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur border-primary/10">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-lg mb-4">{skill.name}</h3>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Niveau d'expertise</span>
                          <span className="text-sm font-semibold">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="soft" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur border-primary/10">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-lg mb-4">{skill.name}</h3>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Niveau d'expertise</span>
                          <span className="text-sm font-semibold">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
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
