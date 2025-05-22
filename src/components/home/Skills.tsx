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
import { motion } from 'framer-motion';
import HeroDynamicBackground from './hero/HeroDynamicBackground';

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
    <section className="py-20 relative overflow-hidden" id="skills">
      {/* Enhanced Space-themed Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-portfolio-space/90 via-portfolio-space to-portfolio-deepspace/95 z-0"></div>
      
      {/* Neural network grid overlay */}
      <div className="absolute inset-0 bg-space-grid opacity-30 z-0"></div>
      
      {/* AI-themed Dynamic Particles */}
      <div className="absolute inset-0 z-0">
        <HeroDynamicBackground />
      </div>
      
      {/* Glowing orbs - cosmic theme */}
      <div className="absolute top-1/4 right-1/5 w-64 h-64 bg-portfolio-purple/20 rounded-full blur-[80px] animate-pulse-slow z-0"></div>
      <div className="absolute bottom-1/4 left-1/6 w-80 h-80 bg-portfolio-blue/20 rounded-full blur-[100px] animate-pulse-slow z-0" 
        style={{animationDelay: '2s'}}></div>
      
      {/* Floating code symbols - tech themed */}
      <div className="hidden md:block">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`code-symbol-${i}`}
            className="absolute text-portfolio-purple/20 font-mono text-5xl"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1], 
              y: [0, -15, 0], 
              x: Math.random() > 0.5 ? [0, 5, 0] : [0, -5, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5 + i * 2,
              delay: i * 0.8
            }}
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${5 + Math.random() * 90}%`,
            }}
          >
            {['{ }', '</>', '()', '[]', '//'][i % 5]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Compétences & Expertises
          </motion.h2>
          <div className="h-1 w-24 bg-gradient-to-r from-portfolio-purple via-portfolio-blue to-portfolio-pink mx-auto mb-6"></div>
          <motion.p 
            className="text-lg text-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Un éventail complet de compétences techniques et stratégiques pour répondre à tous vos besoins numériques
          </motion.p>
        </div>
        
        <Tabs defaultValue="tech" value={selectedTab} onValueChange={handleTabChange} className="w-full max-w-7xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white/5 backdrop-blur-sm w-full md:w-auto overflow-x-auto no-scrollbar p-1 rounded-lg">
              <TabsTrigger 
                value="tech" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-portfolio-purple data-[state=active]:to-portfolio-blue data-[state=active]:text-white px-4 py-2 flex-1 md:flex-none whitespace-nowrap transition-all duration-300"
              >
                Compétences Techniques
              </TabsTrigger>
              <TabsTrigger 
                value="marketing" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-portfolio-purple data-[state=active]:to-portfolio-blue data-[state=active]:text-white px-4 py-2 flex-1 md:flex-none whitespace-nowrap transition-all duration-300"
              >
                Marketing Digital
              </TabsTrigger>
              <TabsTrigger 
                value="soft" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-portfolio-purple data-[state=active]:to-portfolio-blue data-[state=active]:text-white px-4 py-2 flex-1 md:flex-none whitespace-nowrap transition-all duration-300"
              >
                Soft Skills
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="tech" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techSkills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="glass-space hover:border-portfolio-purple/30 p-6 transition-all duration-300 hover:shadow-space-glow hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-portfolio-purple/10 p-3 animate-pulse-slow">
                      {skill.icon}
                    </div>
                    <h3 className="font-bold text-lg text-white">{skill.name}</h3>
                  </div>
                  <p className="text-white/70 mb-4 text-sm">{skill.description}</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-white/80">Maîtrise</span>
                      <Badge variant="outline" className="bg-portfolio-purple/20 text-portfolio-purple border-portfolio-purple/30">
                        {skill.level}%
                      </Badge>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-white/10" indicatorColor="linear-gradient(to right, var(--portfolio-purple), var(--portfolio-blue))" />
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="marketing" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {marketingSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="glass-space hover:border-portfolio-blue/30 p-6 transition-all duration-300 hover:shadow-space-glow hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-portfolio-blue/10 p-3 animate-pulse-slow">
                      {skill.icon}
                    </div>
                    <h3 className="font-bold text-lg text-white">{skill.name}</h3>
                  </div>
                  <p className="text-white/70 mb-4 text-sm">{skill.description}</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-white/80">Maîtrise</span>
                      <Badge variant="outline" className="bg-portfolio-blue/20 text-portfolio-blue border-portfolio-blue/30">
                        {skill.level}%
                      </Badge>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-white/10" indicatorColor="linear-gradient(to right, var(--portfolio-blue), var(--portfolio-cyan))" />
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="soft" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="glass-space hover:border-portfolio-pink/30 p-6 transition-all duration-300 hover:shadow-space-glow hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-portfolio-pink/10 p-3 animate-pulse-slow">
                      {skill.icon}
                    </div>
                    <h3 className="font-bold text-lg text-white">{skill.name}</h3>
                  </div>
                  <p className="text-white/70 mb-4 text-sm">{skill.description}</p>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold text-white/80">Maîtrise</span>
                      <Badge variant="outline" className="bg-portfolio-pink/20 text-portfolio-pink border-portfolio-pink/30">
                        {skill.level}%
                      </Badge>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-white/10" indicatorColor="linear-gradient(to right, var(--portfolio-pink), var(--portfolio-purple))" />
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-20 max-w-7xl mx-auto relative z-10">
          <motion.h3 
            className="text-2xl font-bold text-center mb-12 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Technologies & Outils
          </motion.h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {technologiesUsed.map((tech, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <motion.div 
                    className="flex flex-col items-center group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-cosmic p-3 transition-all duration-300 group-hover:shadow-cosmic-lg group-hover:scale-110">
                      <img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="mt-2 text-sm text-center font-medium text-white">
                      {tech.name}
                    </span>
                  </motion.div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 p-4 bg-black/80 border-portfolio-purple/20 backdrop-blur-lg">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 mb-2">
                      <img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-white">{tech.name}</h4>
                    <p className="text-sm text-white/70 mt-2 text-center">
                      {tech.description}
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative bottom elements - tech circuit pattern */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-portfolio-deepspace to-transparent z-0"></div>
      <svg className="absolute bottom-0 left-0 w-full z-0 opacity-20" viewBox="0 0 1440 100">
        <path fill="url(#gradient)" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D946EF" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default Skills;
