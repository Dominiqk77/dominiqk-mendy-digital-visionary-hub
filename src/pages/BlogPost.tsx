
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  CalendarDays, 
  Clock, 
  ArrowLeft,
  Tag,
  ThumbsUp,
  MessageCircle,
  Share,
  Bookmark,
  Calendar
} from 'lucide-react';
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);
  const [stars, setStars] = useState<{id: number, x: number, y: number, size: number}[]>([]);
  const [date, setDate] = useState<Date | undefined>(undefined);
  
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
    }
  });
  
  useEffect(() => {
    // Set page title for SEO
    document.title = post?.title ? `${post.title} | Dominiqk Mendy` : 'Blog | Dominiqk Mendy';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && post) {
      metaDescription.setAttribute('content', post.excerpt);
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Generate stars for background
    const newStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5
    }));
    setStars(newStars);
  }, [post]);
  
  useEffect(() => {
    // In a real application, this would be an API call
    // For now, we'll use the placeholder data
    const blogPosts = [
      {
        id: 1,
        title: "L'impact de l'IA générative sur les entreprises africaines",
        excerpt: "Analyse de l'adoption des technologies comme ChatGPT et Midjourney dans le contexte des startups et entreprises africaines.",
        date: "2023-05-15",
        readTime: "8 min",
        author: "Dominiqk Mendy",
        image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=630&q=80",
        category: "ia",
        likes: 124,
        comments: 23,
        featured: true,
        content: `
          <h2>L'émergence de l'IA générative en Afrique</h2>
          <p>L'intelligence artificielle générative représente une révolution technologique majeure qui transforme rapidement les industries à l'échelle mondiale. En Afrique, son adoption progresse à un rythme soutenu malgré des défis infrastructurels et économiques. Les entreprises africaines, des startups aux grands groupes, commencent à explorer comment ces technologies peuvent répondre aux problématiques spécifiques du continent.</p>
          
          <p>Dans cet article, nous analysons comment les technologies comme ChatGPT, Midjourney et DALL-E sont adoptées par les entreprises africaines, les défis qu'elles rencontrent et les opportunités uniques qu'elles créent dans le contexte africain.</p>
          
          <h2>Adoption actuelle et cas d'usage</h2>
          <p>L'adoption de l'IA générative en Afrique se manifeste principalement dans plusieurs secteurs clés :</p>
          
          <h3>1. Éducation et formation</h3>
          <p>Des startups comme M-Shule (Kenya) et Foondamate (Afrique du Sud) utilisent des modèles de langage pour créer des assistants éducatifs personnalisés, adaptés aux programmes scolaires locaux et accessibles via des interfaces simples comme WhatsApp.</p>
          
          <h3>2. Services financiers</h3>
          <p>Les fintechs africaines comme Flutterwave et Paystack expérimentent l'IA générative pour améliorer le service client, détecter les fraudes et personnaliser les recommandations financières pour une population largement sous-bancarisée.</p>
          
          <h3>3. Agriculture</h3>
          <p>Des entreprises comme Aerobotics (Afrique du Sud) et Hello Tractor (Nigeria) intègrent l'IA générative pour fournir des conseils agronomiques personnalisés aux agriculteurs, en combinant l'analyse d'images satellite et les données climatiques locales.</p>
          
          <h2>Défis spécifiques au contexte africain</h2>
          <p>Malgré son potentiel, l'adoption de l'IA générative en Afrique fait face à des obstacles significatifs :</p>
          
          <h3>1. Contraintes d'infrastructure</h3>
          <p>L'accès limité à une connectivité internet stable et abordable entrave l'utilisation de modèles d'IA qui nécessitent souvent une connexion constante. Des entreprises comme BRCK au Kenya développent des solutions pour contourner ce problème en proposant des versions allégées fonctionnant partiellement hors ligne.</p>
          
          <h3>2. Défis linguistiques</h3>
          <p>Les modèles d'IA sont rarement entraînés sur les langues africaines, limitant leur utilité dans de nombreux contextes locaux. Des initiatives comme Masakhane travaillent à améliorer la représentation des langues africaines dans les technologies d'IA.</p>
          
          <h3>3. Considérations éthiques et de gouvernance</h3>
          <p>L'absence de cadres réglementaires solides concernant l'IA dans de nombreux pays africains soulève des questions sur la protection des données, la vie privée et la souveraineté numérique.</p>
          
          <h2>Innovations adaptées au contexte local</h2>
          <p>Face à ces défis, les entreprises africaines font preuve d'innovation pour adapter l'IA générative à leurs réalités :</p>
          
          <h3>1. Solutions à faible bande passante</h3>
          <p>Des startups comme Oja (Nigeria) développent des versions optimisées de modèles d'IA qui fonctionnent efficacement même avec une connectivité limitée, en priorisant les fonctionnalités essentielles.</p>
          
          <h3>2. Intégration avec les canaux existants</h3>
          <p>Plutôt que de créer de nouvelles applications, de nombreuses entreprises intègrent l'IA générative dans des plateformes déjà largement adoptées comme WhatsApp, USSD ou SMS, maximisant ainsi leur portée.</p>
          
          <h3>3. Formation sur données locales</h3>
          <p>Des entreprises comme Lelapa AI (Afrique du Sud) se concentrent sur l'enrichissement des modèles d'IA avec des données africaines pour améliorer leur pertinence et leur précision dans le contexte local.</p>
          
          <h2>Perspectives d'avenir</h2>
          <p>L'IA générative ouvre des possibilités transformatives pour les entreprises africaines, notamment :</p>
          
          <h3>1. Leapfrogging technologique</h3>
          <p>Comme avec l'adoption du mobile banking qui a permis à l'Afrique de contourner l'étape des infrastructures bancaires traditionnelles, l'IA générative pourrait permettre aux entreprises africaines de sauter certaines étapes de développement technologique.</p>
          
          <h3>2. Renforcement des langues et cultures locales</h3>
          <p>Le développement de modèles d'IA adaptés aux langues africaines pourrait contribuer à leur préservation et à leur promotion dans l'espace numérique.</p>
          
          <h3>3. Solutions aux défis sociétaux</h3>
          <p>L'IA générative pourrait contribuer à résoudre des problèmes critiques comme l'accès à l'éducation, aux soins de santé et aux services financiers dans les régions éloignées ou mal desservies.</p>
          
          <h2>Conclusion</h2>
          <p>L'IA générative représente à la fois une opportunité et un défi pour les entreprises africaines. Si les obstacles liés à l'infrastructure, aux compétences et à la gouvernance sont réels, les innovations adaptées au contexte local démontrent que l'Afrique n'est pas simplement consommatrice de ces technologies, mais participe activement à leur évolution et à leur adaptation pour répondre aux besoins spécifiques du continent.</p>
          
          <p>Pour les entreprises africaines, l'enjeu n'est pas simplement d'adopter l'IA générative, mais de la façonner pour qu'elle devienne un outil de développement inclusif et durable, aligné avec les réalités et les aspirations du continent.</p>
        `
      },
      {
        id: 2,
        title: "Développement web en Afrique: défis et opportunités",
        excerpt: "Exploration des spécificités techniques du développement web en Afrique: connectivité, optimisation et solutions innovantes.",
        date: "2023-04-22",
        readTime: "6 min",
        author: "Dominiqk Mendy",
        image: "https://images.unsplash.com/photo-1573164713712-03790a178651?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=630&q=80",
        category: "web",
        likes: 87,
        comments: 14,
        featured: false,
        content: `
          <h2>Le paysage du développement web en Afrique</h2>
          <p>Le développement web en Afrique évolue rapidement, porté par une jeunesse dynamique et connectée, mais fait face à des défis uniques liés aux infrastructures, à l'accès à l'internet et aux spécificités des marchés locaux.</p>
          
          <p>Dans cet article, nous explorons les défis techniques que rencontrent les développeurs web africains et les solutions innovantes qu'ils créent pour y répondre.</p>
          
          <h2>Les défis techniques spécifiques</h2>
          
          <h3>1. Connectivité limitée et coûteuse</h3>
          <p>Le coût élevé des données mobiles et la connectivité souvent instable obligent les développeurs à repenser leurs approches. Les sites et applications doivent être optimisés pour fonctionner avec un minimum de bande passante, tout en offrant une expérience utilisateur satisfaisante.</p>
          
          <h3>2. Diversité des appareils</h3>
          <p>Contrairement aux marchés occidentaux où les smartphones haut de gamme sont répandus, le marché africain se caractérise par une grande diversité d'appareils, des smartphones d'entrée de gamme aux feature phones. Les développeurs doivent créer des solutions qui fonctionnent sur un large éventail d'appareils et de navigateurs.</p>
          
          <h3>3. Contraintes énergétiques</h3>
          <p>L'accès irrégulier à l'électricité dans de nombreuses régions impose des contraintes supplémentaires. Les applications doivent minimiser leur consommation de batterie et gérer efficacement les déconnexions imprévues.</p>
          
          <h2>Solutions innovantes et approches adaptées</h2>
          
          <h3>1. Conception "mobile-first" et au-delà</h3>
          <p>Si l'approche "mobile-first" est devenue standard globalement, les développeurs africains vont plus loin avec des philosophies "low-end device first" ou "offline-first". Des entreprises comme Mara Phones développent des navigateurs et applications optimisés spécifiquement pour les réalités africaines.</p>
          
          <h3>2. Progressive Web Apps (PWAs)</h3>
          <p>Les PWAs connaissent un succès particulier en Afrique car elles offrent une expérience app-like sans nécessiter l'installation d'une application complète. Des entreprises comme Jumia et Konga ont adopté cette approche pour toucher un maximum d'utilisateurs tout en optimisant l'expérience offline.</p>
          
          <h3>3. Compressions et optimisations avancées</h3>
          <p>Les développeurs africains deviennent experts en techniques d'optimisation web: compression d'images adaptative, lazy loading sophistiqué, et minification agressive du code. Des startups comme Voyance (Nigeria) développent même des algorithmes de compression spécifiques pour les conditions réseau africaines.</p>
          
          <h3>4. Intégrations USSD et SMS</h3>
          <p>Une innovation particulièrement pertinente est l'intégration de technologies web avec des canaux plus accessibles comme l'USSD et les SMS. Des plateformes comme Africa's Talking permettent de créer des applications hybrides qui fonctionnent même sans connexion internet.</p>
          
          <h2>Écosystèmes technologiques émergents</h2>
          
          <h3>1. Hubs technologiques</h3>
          <p>Des écosystèmes dynamiques se développent autour de hubs technologiques comme iHub (Kenya), Co-Creation Hub (Nigeria), et Silicon Cape (Afrique du Sud). Ces espaces favorisent la collaboration et l'émergence de solutions adaptées aux réalités locales.</p>
          
          <h3>2. Frameworks locaux</h3>
          <p>On observe l'émergence de frameworks et bibliothèques développés par et pour les développeurs africains, comme le framework Mara (développé en Tanzanie) qui intègre nativement des fonctionnalités d'optimisation pour les réseaux à faible bande passante.</p>
          
          <h3>3. Services de paiement adaptés</h3>
          <p>L'intégration des systèmes de paiement mobile comme M-Pesa, Orange Money ou Wave est devenue une compétence essentielle pour les développeurs web africains, créant un écosystème de commerce électronique unique adapté aux réalités locales.</p>
          
          <h2>Opportunités et perspectives d'avenir</h2>
          
          <h3>1. Expertise en optimisation</h3>
          <p>Les compétences développées pour surmonter les contraintes africaines créent une expertise précieuse en optimisation web, exportable à l'international. Des développeurs formés dans ces environnements contraints excellent souvent quand ils travaillent sur des marchés plus matures.</p>
          
          <h3>2. Solutions contextualisées</h3>
          <p>L'Afrique devient un laboratoire d'innovations web adaptées à des contextes spécifiques. Des solutions comme Ushahidi (plateforme de cartographie collaborative) ou M-Farm (application agricole) démontrent comment le web peut être adapté pour répondre à des besoins locaux précis.</p>
          
          <h3>3. Potentiel du edge computing</h3>
          <p>Le développement des infrastructures edge computing en Afrique ouvre de nouvelles possibilités pour contourner les limitations de bande passante en rapprochant le traitement des données des utilisateurs.</p>
          
          <h2>Conclusion</h2>
          <p>Le développement web en Afrique illustre parfaitement comment les contraintes peuvent stimuler l'innovation. Plutôt que d'appliquer simplement les modèles occidentaux, les développeurs africains créent des approches uniques qui répondent aux réalités locales tout en ouvrant de nouvelles possibilités techniques.</p>
          
          <p>Cette capacité d'adaptation et d'innovation positionne l'Afrique non pas comme simple consommatrice de technologies web, mais comme un laboratoire d'expérimentation où émergent des solutions qui pourraient bien inspirer les pratiques de développement web à l'échelle mondiale.</p>
        `
      },
      // Add more blog posts here with content...
      {
        id: 3,
        title: "Les nouvelles tendances du marketing digital au Sénégal",
        excerpt: "Découvrez comment les marques sénégalaises innovent dans leur approche marketing pour toucher une audience connectée et exigeante.",
        date: "2023-03-10",
        readTime: "5 min",
        author: "Dominiqk Mendy",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=630&q=80",
        category: "marketing",
        likes: 103,
        comments: 19,
        featured: true,
        content: `
          <h2>L'évolution du marketing digital au Sénégal</h2>
          <p>Le paysage du marketing digital sénégalais connaît une transformation rapide, portée par une population de plus en plus connectée et une pénétration mobile parmi les plus élevées d'Afrique de l'Ouest. Ces dernières années ont vu l'émergence de nouvelles approches marketing adaptées aux spécificités culturelles et technologiques du pays.</p>
          
          <h2>Les canaux privilégiés</h2>
          
          <h3>1. La domination de WhatsApp Business</h3>
          <p>Au-delà d'être une simple application de messagerie, WhatsApp est devenu un véritable canal marketing et commercial au Sénégal. Les marques locales utilisent WhatsApp Business pour créer des catalogues de produits, automatiser les réponses et développer un service client réactif. Des entreprises comme Dakar Food ou Senepeople ont construit leur modèle commercial largement autour de cette plateforme.</p>
          
          <h3>2. Instagram et l'économie de l'influence locale</h3>
          <p>Instagram est devenu le terrain de jeu des marques ciblant les jeunes urbains. On observe l'émergence d'un écosystème d'influenceurs spécifiquement sénégalais, souvent ancrés dans des domaines comme la mode ("Dakar Fashion"), la cuisine ("Cuisine Sénégalaise Revisitée") ou le lifestyle. Ces créateurs de contenu développent un engagement authentique que les grandes marques comme Orange ou Wave Money cherchent à capturer.</p>
          
          <h3>3. TikTok et la génération Z sénégalaise</h3>
          <p>L'adoption exponentielle de TikTok par la jeunesse sénégalaise transforme le paysage du marketing digital. Des marques comme Youva ou Dolima ont été pionnières dans l'utilisation de défis viraux adaptés aux codes culturels locaux, générant un engagement organique impressionnant.</p>
          
          <h2>Stratégies adaptées au contexte local</h2>
          
          <h3>1. Marketing mobile-first et data-light</h3>
          <p>Face au coût encore élevé des données mobiles, les stratégies marketing efficaces au Sénégal privilégient les contenus légers (formats courts, images optimisées) et l'accessibilité mobile. Des entreprises comme Expresso Telecom ont développé des campagnes "data-free" permettant aux utilisateurs d'accéder à certains contenus sans consommer leur forfait internet.</p>
          
          <h3>2. Intégration des langues locales</h3>
          <p>Le wolof s'impose comme langue marketing de choix, en particulier pour les campagnes à forte composante audio ou vidéo. Les marques qui maîtrisent le "code-switching" entre français et wolof, comme Yobanté Express ou La Poste Mobile, établissent une connexion culturelle plus forte avec leur audience.</p>
          
          <h3>3. Marketing conversationnel</h3>
          <p>La préférence culturelle pour les interactions directes et personnalisées se traduit par l'essor du marketing conversationnel. Les chatbots sont désormais développés pour comprendre les expressions en wolof et le français sénégalais. Wave a particulièrement excellé dans l'implémentation d'une stratégie de service client omnicanal centré sur la conversation.</p>
          
          <h2>Innovations et tendances émergentes</h2>
          
          <h3>1. Audio marketing et podcasts</h3>
          <p>Dans un pays de tradition orale, les formats audio connaissent un succès croissant. Des podcasts comme "Dakar Business Club" ou "Sénégal Tech" attirent des sponsors de premier plan, tandis que des plateformes comme Lenali développent des fonctionnalités audio adaptées aux préférences locales.</p>
          
          <h3>2. Commerce social intégré</h3>
          <p>L'intégration des fonctionnalités d'achat directement dans les plateformes sociales révolutionne le e-commerce sénégalais. Des startups comme Jangolo ou Senego Shop permettent aux vendeurs de créer des boutiques virtuelles entièrement gérées via WhatsApp et Facebook, simplifiant considérablement le parcours d'achat.</p>
          
          <h3>3. Marketing communautaire digital</h3>
          <p>S'appuyant sur l'importance traditionnelle de la communauté dans la culture sénégalaise, les marques développent des stratégies de marketing communautaire digital. Jumia Sénégal a créé des "groupes de quartier" virtuels où les utilisateurs d'une même zone géographique partagent avis et recommandations, renforçant la confiance dans la plateforme.</p>
          
          <h2>Défis et perspectives</h2>
          
          <h3>1. Mesure et analytics adaptés</h3>
          <p>Le défi majeur reste la mesure précise des campagnes dans un écosystème où les parcours utilisateurs sont souvent fragmentés entre plateformes. Des entreprises comme Optimytics développent des solutions d'analytics spécifiquement adaptées au contexte sénégalais.</p>
          
          <h3>2. Personnalisation et gestion des données</h3>
          <p>Avec l'évolution des réglementations sur les données personnelles, notamment l'adoption de la loi sur la protection des données par le Sénégal, les marques doivent développer des approches de personnalisation respectueuses de la vie privée.</p>
          
          <h3>3. Montée du marketing de contenu en langues locales</h3>
          <p>L'avenir appartient aux marques capables de produire du contenu de qualité en langues locales. Des plateformes comme Sunustream investissent massivement dans la création de contenu original en wolof pour répondre à cette demande croissante.</p>
          
          <h2>Conclusion</h2>
          <p>Le marketing digital au Sénégal ne se contente pas d'adopter les tendances globales, mais les réinvente à travers un prisme culturel unique. Cette fusion entre technologies numériques mondiales et spécificités culturelles locales crée un laboratoire d'innovation marketing dont les enseignements pourraient bien inspirer d'autres marchés émergents.</p>
        `
      }
    ];
    
    const foundPost = blogPosts.find(p => p.id === Number(id));
    setPost(foundPost);
  }, [id]);
  
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col relative">
        <div className="fixed inset-0 bg-black z-[-2]"></div>
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Chargement de l'article...</h2>
            <Link to="/blog">
              <Button variant="outline" className="text-white border-white/30 hover:bg-white/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour au blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handleScheduleAppointment = (data: any) => {
    console.log("Appointment scheduled:", { ...data, date });
    // Here you would typically send this data to a backend or email service
    alert("Votre demande de rendez-vous a été envoyée! Nous vous contacterons rapidement pour confirmer.");
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="fixed inset-0 bg-black z-[-2]"></div>
      <div className="fixed inset-0 tech-grid opacity-20 z-[-1]"></div>
      
      {/* Star background */}
      <div className="fixed inset-0 z-[-1]">
        {stars.map(star => (
          <div
            key={star.id}
            className="space-dot"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.id * 0.1}s`
            }}
          />
        ))}
      </div>
      
      <Navbar />
      
      <main className="flex-grow pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Back button */}
          <div className="mb-8">
            <Link to="/blog">
              <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour au blog
              </Button>
            </Link>
          </div>
          
          {/* Article header */}
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center text-sm text-gray-200 mb-4">
                <Tag className="h-4 w-4 mr-2" />
                <span className="capitalize">{post.category}</span>
                <span className="mx-2">•</span>
                <CalendarDays className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200 bg-clip-text text-transparent">{post.title}</h1>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white mr-3">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-white">{post.author}</p>
                    <p className="text-sm text-gray-200">Consultant en stratégie digitale</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                    <Share className="h-4 w-4 mr-1" /> Partager
                  </Button>
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                    <Bookmark className="h-4 w-4 mr-1" /> Sauvegarder
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Featured image */}
          <div className="mb-10 overflow-hidden rounded-lg">
            <motion.img 
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              src={post.image} 
              alt={post.title}
              className="w-full object-cover h-[400px]"
            />
          </div>
          
          {/* Article content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="cosmic-card rounded-lg p-8 bg-gray-900/90 backdrop-blur-sm"
              >
                <style>
                  {`
                  .content-prose h2 {
                    color: #9b87f5;
                    font-size: 1.75rem;
                    font-weight: 700;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    padding-bottom: 0.5rem;
                  }
                  
                  .content-prose h3 {
                    color: #b19dff;
                    font-size: 1.35rem;
                    font-weight: 600;
                    margin-top: 1.5rem;
                    margin-bottom: 0.75rem;
                  }
                  
                  .content-prose p {
                    margin-bottom: 1.25rem;
                    line-height: 1.8;
                  }
                  
                  .content-prose ul, .content-prose ol {
                    margin-left: 1.5rem;
                    margin-bottom: 1.25rem;
                  }
                  
                  .content-prose li {
                    margin-bottom: 0.5rem;
                  }
                  
                  .content-prose a {
                    color: #9b87f5;
                    text-decoration: underline;
                    text-decoration-thickness: 0.1em;
                    text-underline-offset: 0.15em;
                    transition: color 0.2s ease;
                  }
                  
                  .content-prose a:hover {
                    color: #c3b5ff;
                  }
                  `}
                </style>
                <div 
                  className="prose prose-lg prose-invert max-w-none text-gray-100 content-prose"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                ></div>
                
                {/* Article footer */}
                <div className="mt-12 pt-6 border-t border-white/20">
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 flex items-center gap-2">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </Button>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 flex items-center gap-2">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </Button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                        <Share className="h-4 w-4 mr-1" /> Partager
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="secondary" size="sm">
                            <Calendar className="h-4 w-4 mr-1" /> Prendre RDV
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white border border-white/20">
                          <DialogHeader>
                            <DialogTitle>Prendre rendez-vous</DialogTitle>
                          </DialogHeader>
                          <Form {...form}>
                            <form onSubmit={form.handleSubmit(handleScheduleAppointment)} className="space-y-4">
                              <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Nom complet</FormLabel>
                                    <FormControl>
                                      <Input 
                                        className="bg-gray-800 border-white/20 text-white" 
                                        placeholder="Votre nom complet" 
                                        {...field} 
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                      <Input 
                                        className="bg-gray-800 border-white/20 text-white" 
                                        type="email" 
                                        placeholder="votre@email.com" 
                                        {...field} 
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Sujet</FormLabel>
                                    <FormControl>
                                      <Input 
                                        className="bg-gray-800 border-white/20 text-white" 
                                        placeholder="Sujet de votre rendez-vous" 
                                        {...field} 
                                      />
                                    </FormControl>
                                  </FormItem>
                                )}
                              />
                              <div className="space-y-2">
                                <FormLabel>Date souhaitée</FormLabel>
                                <CalendarComponent
                                  mode="single"
                                  selected={date}
                                  onSelect={setDate}
                                  locale={fr}
                                  className="bg-gray-800 border border-white/20 rounded-md text-white"
                                  classNames={{
                                    day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                                    day_today: "bg-accent text-accent-foreground"
                                  }}
                                  disabled={(date) => 
                                    date < new Date() || 
                                    date > new Date(new Date().setMonth(new Date().getMonth() + 1))
                                  }
                                />
                              </div>
                              <div className="pt-4 flex justify-end">
                                <Button type="submit" disabled={!date}>
                                  Confirmer le rendez-vous
                                </Button>
                              </div>
                            </form>
                          </Form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="cosmic-card rounded-lg p-6 mb-8 bg-gray-900/90 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4 text-indigo-300">À propos de l'auteur</h3>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xl font-bold mr-4">
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-white">{post.author}</p>
                      <p className="text-sm text-gray-200">Expert en stratégie digitale & IA</p>
                    </div>
                  </div>
                  <p className="text-gray-100 mb-4">
                    Passionné par l'innovation numérique en Afrique et l'impact des technologies émergentes sur le développement du continent.
                  </p>
                  <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                    Voir le profil
                  </Button>
                </div>
                
                <div className="cosmic-card rounded-lg p-6 mb-8 bg-gray-900/90 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4 text-indigo-300">Prenez rendez-vous</h3>
                  <p className="text-gray-100 mb-4">
                    Vous souhaitez discuter des points abordés dans cet article ou explorer comment les appliquer à votre contexte?
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">
                        <Calendar className="h-4 w-4 mr-2" />
                        Réserver un créneau
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white border border-white/20">
                      <DialogHeader>
                        <DialogTitle>Prendre rendez-vous</DialogTitle>
                      </DialogHeader>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleScheduleAppointment)} className="space-y-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nom complet</FormLabel>
                                <FormControl>
                                  <Input 
                                    className="bg-gray-800 border-white/20 text-white" 
                                    placeholder="Votre nom complet" 
                                    {...field} 
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input 
                                    className="bg-gray-800 border-white/20 text-white" 
                                    type="email" 
                                    placeholder="votre@email.com" 
                                    {...field} 
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Sujet</FormLabel>
                                <FormControl>
                                  <Input 
                                    className="bg-gray-800 border-white/20 text-white" 
                                    placeholder="Sujet de votre rendez-vous" 
                                    {...field} 
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          <div className="space-y-2">
                            <FormLabel>Date souhaitée</FormLabel>
                            <CalendarComponent
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              locale={fr}
                              className="bg-gray-800 border border-white/20 rounded-md text-white"
                              classNames={{
                                day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                                day_today: "bg-accent text-accent-foreground"
                              }}
                              disabled={(date) => 
                                date < new Date() || 
                                date > new Date(new Date().setMonth(new Date().getMonth() + 1))
                              }
                            />
                          </div>
                          <div className="pt-4 flex justify-end">
                            <Button type="submit" disabled={!date}>
                              Confirmer le rendez-vous
                            </Button>
                          </div>
                        </form>
                      </Form>
                    </DialogContent>
                  </Dialog>
                </div>
                
                <div className="cosmic-card rounded-lg p-6 bg-gray-900/90 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4 text-indigo-300">Articles similaires</h3>
                  <div className="space-y-4">
                    <div className="group">
                      <p className="text-sm text-gray-200 mb-1">Intelligence Artificielle</p>
                      <Link to="/blog/1" className="text-white font-medium group-hover:text-indigo-400 transition-colors">
                        L'impact de l'IA générative sur les entreprises africaines
                      </Link>
                    </div>
                    <div className="group">
                      <p className="text-sm text-gray-200 mb-1">Développement Web</p>
                      <Link to="/blog/2" className="text-white font-medium group-hover:text-indigo-400 transition-colors">
                        Développement web en Afrique: défis et opportunités
                      </Link>
                    </div>
                    <div className="group">
                      <p className="text-sm text-gray-200 mb-1">Marketing Digital</p>
                      <Link to="/blog/3" className="text-white font-medium group-hover:text-indigo-400 transition-colors">
                        Les nouvelles tendances du marketing digital au Sénégal
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
