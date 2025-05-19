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
    { 
      name: "React", 
      icon: "/icons/react.svg",
      description: "J'utilise React comme framework principal pour développer des interfaces utilisateur interactives et performantes. Mon expertise inclut l'architecture de composants réutilisables, l'optimisation des performances avec React.memo et useCallback, et l'intégration de Redux pour la gestion d'états complexes."
    },
    { 
      name: "Node.js", 
      icon: "/icons/nodejs.svg",
      description: "Je conçois des backends scalables avec Node.js en implémentant des architectures microservices. J'optimise les performances avec des techniques de clustering et de mise en cache avancées, tout en assurant une gestion efficace des opérations asynchrones."
    },
    { 
      name: "Python", 
      icon: "/icons/python.svg",
      description: "Python est mon langage de prédilection pour l'analyse de données et le développement d'algorithmes d'IA. J'exploite des bibliothèques comme Pandas, NumPy et scikit-learn pour transformer des données brutes en insights stratégiques pour mes clients."
    },
    { 
      name: "TensorFlow", 
      icon: "/icons/tensorflow.svg",
      description: "J'implémente des modèles de deep learning avec TensorFlow pour diverses applications: systèmes de recommandation personnalisés, analyse prédictive, et traitement du langage naturel avancé pour des solutions business intelligentes."
    },
    { 
      name: "AWS", 
      icon: "/icons/aws.svg",
      description: "Mon expertise AWS inclut l'architecture de solutions cloud hautement disponibles et scalables avec des services comme EC2, Lambda, S3, et DynamoDB. Je maîtrise l'Infrastructure as Code via CloudFormation et Terraform pour des déploiements reproductibles."
    },
    { 
      name: "Docker", 
      icon: "/icons/docker.svg",
      description: "J'orchestre des déploiements multi-environnements avec Docker en créant des conteneurs optimisés et sécurisés. J'implémente des pipelines CI/CD automatisés avec Docker Compose et Kubernetes pour une livraison continue fluide."
    },
    { 
      name: "MongoDB", 
      icon: "/icons/mongodb.svg",
      description: "Je conçois des schémas MongoDB optimisés pour les applications à forte charge. Mon expertise inclut l'indexation avancée, le sharding pour la scalabilité horizontale, et l'implémentation de patterns d'accès aux données pour des performances maximales."
    },
    { 
      name: "PostgreSQL", 
      icon: "/icons/postgresql.svg",
      description: "J'optimise les performances des bases de données PostgreSQL grâce à une modélisation fine des données, des requêtes SQL complexes optimisées, et la mise en place de partitionnement et de réplication pour des applications critiques à haute disponibilité."
    },
    { 
      name: "Firebase", 
      icon: "/icons/firebase.svg",
      description: "J'intègre Firebase pour créer rapidement des applications temps réel avec authentification, stockage cloud et bases de données NoSQL. J'optimise les coûts d'utilisation tout en maximisant les performances et la fiabilité des applications."
    },
    { 
      name: "Flutter", 
      icon: "/icons/flutter.svg",
      description: "Je développe des applications mobiles cross-platform hautement performantes avec Flutter, en implémentant des patterns d'architecture (BLoC, Provider) pour une codebase maintenable et en optimisant les animations pour une expérience utilisateur fluide."
    },
    { 
      name: "Vue.js", 
      icon: "/icons/vue.svg",
      description: "J'exploite Vue.js pour créer des interfaces réactives et modulaires avec une attention particulière à la gestion d'état via Pinia/Vuex. Mon approche composant-first garantit des applications maintenables et évolutives."
    },
    { 
      name: "Angular", 
      icon: "/icons/angular.svg",
      description: "Je développe des applications d'entreprise robustes avec Angular en implémentant des architectures modulaires, des services injectables optimisés, et des stratégies de détection de changement avancées pour des performances maximales."
    },
    { 
      name: "PHP", 
      icon: "/icons/php.svg",
      description: "J'utilise PHP pour développer des applications web backend robustes, en intégrant des frameworks comme Laravel ou Symfony. J'implémente des architectures MVC optimisées avec des patterns de conception avancés pour des solutions scalables."
    },
    { 
      name: "WordPress", 
      icon: "/icons/wordpress.svg",
      description: "Je crée des sites WordPress professionnels avec des thèmes et plugins personnalisés. Mon expertise inclut l'optimisation des performances, la sécurisation avancée et l'intégration d'API tierces pour des fonctionnalités étendues."
    },
    { 
      name: "Redux", 
      icon: "/icons/redux.svg",
      description: "J'implémente Redux pour gérer des états complexes dans les applications React/React Native, avec une architecture flux rigoureuse, des sélecteurs memoizés, et l'intégration de middleware comme Redux Saga pour les opérations asynchrones."
    },
    { 
      name: "GraphQL", 
      icon: "/icons/graphql.svg",
      description: "J'intègre GraphQL pour optimiser les requêtes API en éliminant le sur-fetching et sous-fetching de données. Je configure des résolveurs efficaces et implémente des politiques de cache avancées pour des performances optimales."
    },
    { 
      name: "Figma", 
      icon: "/icons/figma.svg",
      description: "J'utilise Figma comme outil principal pour la conception UI/UX, en créant des design systems complets avec composants réutilisables, variables de design et prototypes interactifs pour valider l'expérience utilisateur avant le développement."
    },
    { 
      name: "Canva", 
      icon: "/icons/canva.svg",
      description: "J'exploite Canva pour créer rapidement des assets marketing et contenus visuels de qualité. J'optimise le workflow de création visuelle en utilisant des templates personnalisés pour maintenir une cohérence de marque sur tous les canaux."
    },
    { 
      name: "Tailwind CSS", 
      icon: "/icons/tailwind.svg",
      description: "Je développe des interfaces responsive avec Tailwind CSS en utilisant une approche utility-first. J'optimise le bundle final via PurgeCSS et j'étends le framework avec des plugins personnalisés pour des besoins spécifiques."
    },
    { 
      name: "Next.js", 
      icon: "/icons/nextjs.svg",
      description: "Je développe des applications React hautes performances avec Next.js, en exploitant le SSR, SSG et ISR selon les besoins. J'implémente des stratégies avancées de data fetching, optimisation d'images et déploiement sur edge pour des performances globales."
    },
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
        
        <Tabs defaultValue="tech" value={selectedTab} onValueChange={handleTabChange} className="w-full max-w-7xl mx-auto">
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
        
        <div className="mt-20 max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">Technologies & Outils</h3>
          {/* Enhanced background for Technologies section */}
          <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/80 backdrop-blur-md p-8 rounded-xl border border-slate-700/30 shadow-xl relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600 opacity-5 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600 opacity-5 rounded-full blur-[120px]"></div>
            <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-purple-600 opacity-5 rounded-full blur-[80px]"></div>
            
            {/* Grid patterns */}
            <div className="absolute inset-0 grid grid-cols-10 gap-4 opacity-5 pointer-events-none">
              {Array(10).fill(0).map((_, i) => (
                <div key={`v-${i}`} className="h-full w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
              ))}
              {Array(10).fill(0).map((_, i) => (
                <div key={`h-${i}`} className="absolute h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" style={{ top: `${i * 10}%` }}></div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 relative z-10">
              {technologiesUsed.map((tech, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <div className="flex flex-col items-center group cursor-pointer">
                      <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md p-3 transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:shadow-indigo-500/20">
                        <img 
                          src={tech.icon} 
                          alt={tech.name} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="mt-2 text-sm text-center font-medium text-slate-100">
                        {tech.name}
                      </span>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 p-4 bg-slate-900/90 backdrop-blur-md border border-slate-700 text-slate-100 shadow-xl">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 mb-2">
                        <img 
                          src={tech.icon} 
                          alt={tech.name} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h4 className="font-bold">{tech.name}</h4>
                      <p className="text-sm text-slate-300 mt-2 text-center">
                        {tech.description}
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
