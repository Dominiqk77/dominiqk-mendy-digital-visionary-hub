
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useIsMobile } from "@/hooks/use-mobile";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Brush, 
  Code, 
  GraduationCap, 
  Layers, 
  MessageSquare, 
  Rocket, 
  Target 
} from "lucide-react";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Skills = () => {
  const [selectedTab, setSelectedTab] = useState("tech");
  const isMobile = useIsMobile();
  
  const techSkills = [
    { 
      name: "Développement Web Full Stack", 
      level: 95, 
      icon: <Code className="w-6 h-6 text-blue-500" />, 
      description: "Expertise complète dans le cycle de développement web, du frontend au backend" 
    },
    { 
      name: "Développement Mobile", 
      level: 90, 
      icon: <Layers className="w-6 h-6 text-green-500" />,
      description: "Applications mobiles natives et multiplateformes avec performances optimales"
    },
    { 
      name: "Intelligence Artificielle", 
      level: 95, 
      icon: <Rocket className="w-6 h-6 text-purple-500" />,
      description: "Conception et implémentation de solutions IA avancées et ML"
    },
    { 
      name: "Base de données", 
      level: 92, 
      icon: <Layers className="w-6 h-6 text-amber-500" />,
      description: "Modélisation et optimisation de bases de données SQL et NoSQL"
    },
    { 
      name: "Cloud Computing", 
      level: 88, 
      icon: <Layers className="w-6 h-6 text-sky-500" />,
      description: "Architecture et déploiement sur AWS, Azure et Google Cloud"
    },
    { 
      name: "DevOps", 
      level: 85, 
      icon: <Code className="w-6 h-6 text-indigo-500" />,
      description: "CI/CD, containerisation et automatisation des déploiements"
    },
    { 
      name: "Cybersécurité", 
      level: 85, 
      icon: <Layers className="w-6 h-6 text-red-500" />,
      description: "Sécurisation des applications et protection des données"
    },
    { 
      name: "Blockchain & Web 3.0", 
      level: 90, 
      icon: <Layers className="w-6 h-6 text-cyan-500" />,
      description: "Développement de solutions décentralisées et smart contracts"
    },
  ];
  
  const marketingSkills = [
    { 
      name: "Stratégie Marketing Digital", 
      level: 97, 
      icon: <Target className="w-6 h-6 text-blue-500" />,
      description: "Élaboration de stratégies intégrées pour maximiser la présence digitale"
    },
    { 
      name: "SEO/SEM/SMO", 
      level: 96, 
      icon: <Target className="w-6 h-6 text-green-500" />,
      description: "Optimisation pour les moteurs de recherche et médias sociaux"
    },
    { 
      name: "Content Marketing", 
      level: 94, 
      icon: <Brush className="w-6 h-6 text-amber-500" />,
      description: "Création de contenus engageants et stratégie éditoriale"
    },
    { 
      name: "Social Media Marketing", 
      level: 93, 
      icon: <MessageSquare className="w-6 h-6 text-blue-500" />,
      description: "Gestion de communautés et campagnes sur les réseaux sociaux"
    },
    { 
      name: "Growth Hacking", 
      level: 95, 
      icon: <Rocket className="w-6 h-6 text-purple-500" />,
      description: "Techniques innovantes pour générer une croissance rapide"
    },
    { 
      name: "Analyse de Données", 
      level: 92, 
      icon: <Layers className="w-6 h-6 text-indigo-500" />,
      description: "Interprétation des métriques et KPIs pour optimiser les performances"
    },
    { 
      name: "CRM & Automation", 
      level: 90, 
      icon: <Layers className="w-6 h-6 text-rose-500" />,
      description: "Mise en place de parcours clients automatisés et personnalisés"
    },
    { 
      name: "UX/UI Design", 
      level: 91, 
      icon: <Brush className="w-6 h-6 text-orange-500" />,
      description: "Conception d'interfaces utilisateur intuitives et esthétiques"
    },
  ];
  
  const softSkills = [
    { 
      name: "Leadership", 
      level: 95, 
      icon: <Award className="w-6 h-6 text-amber-500" />,
      description: "Direction d'équipes multidisciplinaires et gestion de talents"
    },
    { 
      name: "Gestion de Projet", 
      level: 92, 
      icon: <Target className="w-6 h-6 text-blue-500" />,
      description: "Méthodologies agiles et traditionnelles pour livrer dans les délais"
    },
    { 
      name: "Communication", 
      level: 94, 
      icon: <MessageSquare className="w-6 h-6 text-green-500" />,
      description: "Communication claire et efficace avec tous les interlocuteurs"
    },
    { 
      name: "Résolution de problèmes", 
      level: 96, 
      icon: <Rocket className="w-6 h-6 text-purple-500" />,
      description: "Approche analytique et créative pour surmonter les défis"
    },
    { 
      name: "Adaptabilité", 
      level: 93, 
      icon: <Layers className="w-6 h-6 text-cyan-500" />,
      description: "Flexibilité face au changement et capacité d'apprentissage rapide"
    },
    { 
      name: "Travail d'équipe", 
      level: 90, 
      icon: <Layers className="w-6 h-6 text-indigo-500" />,
      description: "Collaboration efficace et valorisation des contributions individuelles"
    },
    { 
      name: "Négociation", 
      level: 92, 
      icon: <MessageSquare className="w-6 h-6 text-rose-500" />,
      description: "Création de solutions gagnant-gagnant et persuasion"
    },
    { 
      name: "Innovation", 
      level: 97, 
      icon: <GraduationCap className="w-6 h-6 text-emerald-500" />,
      description: "Pensée disruptive et approche avant-gardiste des problématiques"
    },
  ];

  const technologiesUsed = [
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
    <section className="py-20 bg-gradient-to-b from-background to-muted/30" id="skills">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compétences & Expertises</h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Un éventail complet de compétences techniques et stratégiques pour répondre à tous vos besoins numériques
          </p>
        </div>
        
        <Tabs defaultValue="tech" value={selectedTab} onValueChange={handleTabChange} className="w-full max-w-5xl mx-auto">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-card hover:bg-card/80 border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      {skill.icon}
                    </div>
                    <h3 className="font-bold text-lg">{skill.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">{skill.description}</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold">Maîtrise</span>
                      <Badge variant="outline" className="bg-primary/10 text-primary">
                        {skill.level}%
                      </Badge>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="marketing" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {marketingSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-card hover:bg-card/80 border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      {skill.icon}
                    </div>
                    <h3 className="font-bold text-lg">{skill.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">{skill.description}</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold">Maîtrise</span>
                      <Badge variant="outline" className="bg-primary/10 text-primary">
                        {skill.level}%
                      </Badge>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="soft" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-card hover:bg-card/80 border rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      {skill.icon}
                    </div>
                    <h3 className="font-bold text-lg">{skill.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">{skill.description}</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold">Maîtrise</span>
                      <Badge variant="outline" className="bg-primary/10 text-primary">
                        {skill.level}%
                      </Badge>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Technologies & Outils</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {technologiesUsed.map((tech, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <div className="flex flex-col items-center group cursor-pointer">
                    <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-sm p-3 transition-all duration-300 group-hover:shadow-md group-hover:scale-110">
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
                </HoverCardTrigger>
                <HoverCardContent className="text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 mb-2">
                      <img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4 className="font-bold">{tech.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      Utilisé dans de nombreux projets professionnels
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
