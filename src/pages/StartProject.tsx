import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Check, ArrowRight, Star, RocketIcon, Zap, CircuitBoard } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

// StarField background component
const StarField = () => {
  const starCount = 100;
  const stars = Array.from({ length: starCount }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 0.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    animationDelay: `${Math.random() * 3}s`
  }));

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="space-dot"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: star.animationDelay
          }}
        />
      ))}
    </div>
  );
};

// Process steps animation component
const AnimatedProcessStep = ({ number, title, description, delay }: { 
  number: number; 
  title: string; 
  description: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-background/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 relative cosmic-card"
    >
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold z-10">
        {number}
      </div>
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-indigo-400 animate-ping opacity-30"></div>
      <h3 className="text-xl font-bold mb-3 mt-4 text-center text-white">{title}</h3>
      <p className="text-gray-300 text-center">
        {description}
      </p>
    </motion.div>
  );
};

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Adresse email invalide.",
  }),
  company: z.string().optional(),
  phone: z.string().optional(),
  position: z.string().optional(),
  companySize: z.string().optional(),
  industry: z.string().optional(),
  projectType: z.string({
    required_error: "Veuillez sélectionner un type de projet.",
  }),
  projectScope: z.string().optional(),
  targetAudience: z.string().optional(),
  currentSituation: z.string().optional(),
  mainObjectives: z.string().optional(),
  specificFeatures: z.string().optional(),
  technicalRequirements: z.string().optional(),
  designPreferences: z.string().optional(),
  budget: z.string({
    required_error: "Veuillez sélectionner un budget.",
  }),
  timeline: z.string().optional(),
  priority: z.string().optional(),
  hasExistingSolution: z.string().optional(),
  marketingGoals: z.string().optional(),
  competitorAnalysis: z.string().optional(),
  successMetrics: z.string().optional(),
  additionalServices: z.array(z.string()).optional(),
  communicationPreference: z.string().optional(),
  previousExperience: z.string().optional(),
  message: z.string().min(10, {
    message: "La description du projet doit contenir au moins 10 caractères.",
  }),
});

const StartProject = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Démarrer un Projet | Dominiqk Mendy';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Démarrez votre projet innovant avec Dominiqk Mendy. Décrivez vos besoins et recevez une consultation personnalisée pour votre projet digital ou IA.'
      );
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      position: "",
      companySize: "",
      industry: "",
      projectType: "",
      projectScope: "",
      targetAudience: "",
      currentSituation: "",
      mainObjectives: "",
      specificFeatures: "",
      technicalRequirements: "",
      designPreferences: "",
      budget: "",
      timeline: "",
      priority: "",
      hasExistingSolution: "",
      marketingGoals: "",
      competitorAnalysis: "",
      successMetrics: "",
      additionalServices: [],
      communicationPreference: "",
      previousExperience: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    
    try {
      // Save to Supabase contact_submissions table
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          name: values.name,
          email: values.email,
          phone: values.phone || null,
          company: values.company || null,
          subject: `Nouveau projet: ${values.projectType}`,
          request_type: 'Démarrer un Projet',
          message: values.message,
          budget_range: values.budget,
          project_timeline: values.timeline || null,
          source_page: '/start-project',
          status: 'nouveau',
          lead_score: 85, // High score for project requests
        });

      if (error) {
        console.error('Error saving to database:', error);
        throw error;
      }

      toast({
        title: "Demande envoyée!",
        description: "Votre demande de projet a été reçue. Je vous contacterai très prochainement.",
      });
      
      // Reset form
      form.reset();
      
      // Redirect to thank you page or homepage after a short delay
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  };

  const projectTypes = [
    "Site Web Vitrine",
    "Site Web E-commerce", 
    "Application Web",
    "Application Mobile (iOS/Android)",
    "Application Mobile Hybride",
    "Plateforme SaaS",
    "Solution IA / Machine Learning",
    "Chatbot Intelligence Artificielle",
    "Automatisation de Processus",
    "Analyse de Données / Business Intelligence",
    "API & Intégrations",
    "Solution E-Gouvernance",
    "Plateforme Éducative (LMS)",
    "Réseau Social / Communauté",
    "Marketplace",
    "CRM/ERP Personnalisé",
    "Solution IoT",
    "Blockchain / Crypto",
    "Marketing Digital Complet",
    "Refonte/Modernisation Existant",
    "Formation & Coaching",
    "Consulting Stratégique",
    "Audit Technique",
    "Autre"
  ];

  const budgetRanges = [
    "< 2 000 €",
    "2 000 € - 5 000 €", 
    "5 000 € - 10 000 €",
    "10 000 € - 20 000 €",
    "20 000 € - 50 000 €",
    "50 000 € - 100 000 €",
    "100 000 € - 250 000 €",
    "> 250 000 €",
    "À déterminer selon besoins"
  ];

  const companySizes = [
    "Entrepreneur individuel",
    "Startup (1-10 employés)",
    "PME (11-50 employés)", 
    "Entreprise moyenne (51-250 employés)",
    "Grande entreprise (250+ employés)",
    "Organisation gouvernementale",
    "ONG / Association",
    "Établissement d'enseignement"
  ];

  const industries = [
    "Technologie / IT",
    "E-commerce / Retail",
    "Finance / Banque",
    "Santé / Médical",
    "Éducation / Formation",
    "Immobilier",
    "Tourisme / Hôtellerie",
    "Agriculture / Agroalimentaire",
    "Industrie / Manufacturing",
    "Services professionnels",
    "Marketing / Communication",
    "Transport / Logistique",
    "Énergie / Environnement",
    "Arts / Culture",
    "Sport / Fitness",
    "Gouvernement / Public",
    "Autre"
  ];

  const timelines = [
    "Urgent (< 1 mois)",
    "Court terme (1-3 mois)",
    "Moyen terme (3-6 mois)",
    "Long terme (6-12 mois)",
    "Très long terme (> 1 an)",
    "Flexible / À déterminer"
  ];

  const priorities = [
    "Très haute priorité",
    "Haute priorité", 
    "Priorité moyenne",
    "Priorité faible",
    "Projet exploratoire"
  ];

  const additionalServicesList = [
    "Hébergement et maintenance",
    "Formation utilisateurs",
    "Support technique 24/7",
    "Référencement SEO/SEA",
    "Rédaction de contenu",
    "Photographie/Vidéographie",
    "Design graphique/Branding",
    "Analyse de performance",
    "Migration de données",
    "Intégrations tierces",
    "Sécurité renforcée",
    "Conformité RGPD"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed inset-0 bg-black z-[-2]"></div>
      <div className="fixed inset-0 tech-grid z-[-1]"></div>
      <StarField />
      
      <Navbar />
      
      <main className="flex-grow pt-20 relative">
        {/* Hero Section */}
        <section className="space-bg-gradient py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 data-grid"></div>
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-600 rounded-full filter blur-[100px] opacity-20"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600 rounded-full filter blur-[120px] opacity-10"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="w-16 h-16 mx-auto mb-6 relative"
              >
                <div className="absolute inset-0 bg-indigo-500 rounded-full opacity-20 animate-ping"></div>
                <div className="relative w-full h-full flex items-center justify-center bg-indigo-600/30 backdrop-blur-sm rounded-full border border-indigo-500/50">
                  <RocketIcon className="h-8 w-8 text-indigo-300" />
                </div>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                <span className="text-gradient-cosmic">Démarrer un Projet</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl md:text-2xl mb-8 text-gray-300"
              >
                Parlez-moi de votre vision et travaillons ensemble pour la concrétiser
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Project Form Section */}
        <section className="py-12 md:py-20 relative">
          <div className="absolute left-5 top-20 w-1 h-40 bg-gradient-to-b from-indigo-500/0 via-indigo-500/50 to-indigo-500/0"></div>
          <div className="absolute right-5 top-60 w-1 h-40 bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-purple-500/0"></div>
          
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto cosmic-card rounded-xl p-6 md:p-10 backdrop-blur-sm"
            >
              <div className="absolute top-0 right-0 w-full h-full overflow-hidden rounded-xl z-[-1] opacity-5">
                <div className="tech-grid w-full h-full"></div>
              </div>
              
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Décrivez votre projet en détail</h2>
                <div className="flex items-center text-indigo-400 text-sm">
                  <CircuitBoard className="mr-2 h-5 w-5" />
                  <span>Formulaire sécurisé</span>
                </div>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  {/* Informations de contact */}
                  <div className="bg-gray-900/30 p-6 rounded-lg border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4">📧 Informations de contact</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200">Nom complet *</FormLabel>
                            <FormControl>
                              <Input placeholder="Votre nom et prénom" {...field} className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200">Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="votre@email.com" {...field} className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200">Téléphone</FormLabel>
                            <FormControl>
                              <Input placeholder="+221 XX XXX XX XX" {...field} className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="position"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200">Votre fonction</FormLabel>
                            <FormControl>
                              <Input placeholder="CEO, CTO, Responsable Marketing..." {...field} className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Informations entreprise */}
                  <div className="bg-gray-900/30 p-6 rounded-lg border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4">🏢 Informations entreprise</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200">Nom de l'entreprise</FormLabel>
                            <FormControl>
                              <Input placeholder="Nom de votre entreprise" {...field} className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="companySize"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200">Taille de l'entreprise</FormLabel>
                            <FormControl>
                              <select
                                className="w-full h-10 px-3 py-2 rounded-md border border-white/10 bg-gray-900/50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                                {...field}
                              >
                                <option value="" disabled className="bg-gray-900">Sélectionnez la taille</option>
                                {companySizes.map((size) => (
                                  <option key={size} value={size} className="bg-gray-900">{size}</option>
                                ))}
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="industry"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel className="text-gray-200">Secteur d'activité</FormLabel>
                            <FormControl>
                              <select
                                className="w-full h-10 px-3 py-2 rounded-md border border-white/10 bg-gray-900/50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                                {...field}
                              >
                                <option value="" disabled className="bg-gray-900">Sélectionnez votre secteur</option>
                                {industries.map((industry) => (
                                  <option key={industry} value={industry} className="bg-gray-900">{industry}</option>
                                ))}
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Détails du projet */}
                  <div className="bg-gray-900/30 p-6 rounded-lg border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4">🚀 Détails du projet</h3>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="projectType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-200">Type de projet *</FormLabel>
                              <FormControl>
                                <select
                                  className="w-full h-10 px-3 py-2 rounded-md border border-white/10 bg-gray-900/50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                                  {...field}
                                >
                                  <option value="" disabled className="bg-gray-900">Sélectionnez un type</option>
                                  {projectTypes.map((type) => (
                                    <option key={type} value={type} className="bg-gray-900">{type}</option>
                                  ))}
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="projectScope"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-200">Portée du projet</FormLabel>
                              <FormControl>
                                <select
                                  className="w-full h-10 px-3 py-2 rounded-md border border-white/10 bg-gray-900/50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                                  {...field}
                                >
                                  <option value="" disabled className="bg-gray-900">Sélectionnez la portée</option>
                                  <option value="local" className="bg-gray-900">Local/Régional</option>
                                  <option value="national" className="bg-gray-900">National</option>
                                  <option value="international" className="bg-gray-900">International</option>
                                  <option value="global" className="bg-gray-900">Global</option>
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="targetAudience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200">Public cible</FormLabel>
                            <FormControl>
                              <Input placeholder="Décrivez votre audience cible (âge, profession, intérêts...)" {...field} className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="currentSituation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200">Situation actuelle</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Décrivez votre situation actuelle, les défis rencontrés..." rows={3} {...field} className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="mainObjectives"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200">Objectifs principaux</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Quels sont vos objectifs principaux avec ce projet?" rows={3} {...field} className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Spécifications techniques */}
                  <div className="bg-gray-900/30 p-6 rounded-lg border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4">⚙️ Spécifications techniques</h3>
                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="specificFeatures"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200">Fonctionnalités spécifiques souhaitées</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Listez les fonctionnalités importantes pour votre projet..." rows={4} {...field} className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="technicalRequirements"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200">Exigences techniques particulières</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Technologies préférées, contraintes techniques, intégrations nécessaires..." rows={3} {...field} className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="designPreferences"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200">Préférences de design</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Style visuel souhaité, couleurs, inspiration, exemples de sites..." rows={3} {...field} className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Budget et planning */}
                  <div className="bg-gray-900/30 p-6 rounded-lg border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4">💰 Budget et planning</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200">Budget estimé *</FormLabel>
                            <FormControl>
                              <select
                                className="w-full h-10 px-3 py-2 rounded-md border border-white/10 bg-gray-900/50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                                {...field}
                              >
                                <option value="" disabled className="bg-gray-900">Sélectionnez un budget</option>
                                {budgetRanges.map((range) => (
                                  <option key={range} value={range} className="bg-gray-900">{range}</option>
                                ))}
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="timeline"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200">Délai souhaité</FormLabel>
                            <FormControl>
                              <select
                                className="w-full h-10 px-3 py-2 rounded-md border border-white/10 bg-gray-900/50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                                {...field}
                              >
                                <option value="" disabled className="bg-gray-900">Sélectionnez un délai</option>
                                {timelines.map((timeline) => (
                                  <option key={timeline} value={timeline} className="bg-gray-900">{timeline}</option>
                                ))}
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="priority"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200">Niveau de priorité</FormLabel>
                            <FormControl>
                              <select
                                className="w-full h-10 px-3 py-2 rounded-md border border-white/10 bg-gray-900/50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                                {...field}
                              >
                                <option value="" disabled className="bg-gray-900">Sélectionnez la priorité</option>
                                {priorities.map((priority) => (
                                  <option key={priority} value={priority} className="bg-gray-900">{priority}</option>
                                ))}
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="hasExistingSolution"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200">Solution existante</FormLabel>
                            <FormControl>
                              <select
                                className="w-full h-10 px-3 py-2 rounded-md border border-white/10 bg-gray-900/50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                                {...field}
                              >
                                <option value="" disabled className="bg-gray-900">Avez-vous déjà une solution?</option>
                                <option value="none" className="bg-gray-900">Aucune solution existante</option>
                                <option value="basic" className="bg-gray-900">Solution basique à améliorer</option>
                                <option value="advanced" className="bg-gray-900">Solution avancée à remplacer</option>
                                <option value="migrate" className="bg-gray-900">Migration/Modernisation nécessaire</option>
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Contexte marketing et business */}
                  <div className="bg-gray-900/30 p-6 rounded-lg border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4">📊 Contexte business</h3>
                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="marketingGoals"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200">Objectifs marketing</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Acquisition clients, notoriété, conversion, rétention..." rows={3} {...field} className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="competitorAnalysis"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200">Analyse concurrentielle</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Principaux concurrents, leurs forces/faiblesses, votre différenciation..." rows={3} {...field} className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="successMetrics"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200">Indicateurs de succès</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Comment mesurerez-vous le succès de ce projet? KPIs, ROI..." rows={3} {...field} className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Services additionnels */}
                  <div className="bg-gray-900/30 p-6 rounded-lg border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4">🔧 Services additionnels</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {additionalServicesList.map((service) => (
                        <label key={service} className="flex items-center space-x-3 text-gray-300 cursor-pointer hover:text-white transition-colors">
                          <input
                            type="checkbox"
                            className="rounded border-white/20 bg-gray-900/50 text-indigo-600 focus:ring-indigo-500/30"
                            onChange={(e) => {
                              const currentServices = form.getValues('additionalServices') || [];
                              if (e.target.checked) {
                                form.setValue('additionalServices', [...currentServices, service]);
                              } else {
                                form.setValue('additionalServices', currentServices.filter(s => s !== service));
                              }
                            }}
                          />
                          <span className="text-sm">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Préférences de communication */}
                  <div className="bg-gray-900/30 p-6 rounded-lg border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4">📞 Préférences de communication</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="communicationPreference"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200">Moyen de communication préféré</FormLabel>
                            <FormControl>
                              <select
                                className="w-full h-10 px-3 py-2 rounded-md border border-white/10 bg-gray-900/50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                                {...field}
                              >
                                <option value="" disabled className="bg-gray-900">Sélectionnez votre préférence</option>
                                <option value="email" className="bg-gray-900">Email</option>
                                <option value="phone" className="bg-gray-900">Téléphone</option>
                                <option value="video" className="bg-gray-900">Visioconférence</option>
                                <option value="whatsapp" className="bg-gray-900">WhatsApp</option>
                                <option value="teams" className="bg-gray-900">Microsoft Teams</option>
                                <option value="slack" className="bg-gray-900">Slack</option>
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="previousExperience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200">Expérience précédente</FormLabel>
                            <FormControl>
                              <select
                                className="w-full h-10 px-3 py-2 rounded-md border border-white/10 bg-gray-900/50 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                                {...field}
                              >
                                <option value="" disabled className="bg-gray-900">Avez-vous déjà travaillé avec un développeur?</option>
                                <option value="first_time" className="bg-gray-900">Première fois</option>
                                <option value="some_experience" className="bg-gray-900">Quelques expériences</option>
                                <option value="experienced" className="bg-gray-900">Très expérimenté</option>
                                <option value="technical_background" className="bg-gray-900">Background technique</option>
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  {/* Description détaillée */}
                  <div className="bg-gray-900/30 p-6 rounded-lg border border-white/10">
                    <h3 className="text-xl font-semibold text-white mb-4">📝 Description détaillée</h3>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-200">Description complète du projet *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Décrivez votre projet en détail, vos attentes, contraintes particulières, tout ce qui peut nous aider à mieux comprendre vos besoins..." 
                              rows={8}
                              {...field} 
                              className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="flex justify-center mt-8">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="px-8 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white"
                    >
                      <div className="flex items-center gap-2">
                        <span>Envoyer ma demande détaillée</span>
                        <div className="relative">
                          <ArrowRight className="h-5 w-5" />
                          <div className="absolute -right-1 -top-1 w-3 h-3 bg-indigo-400 rounded-full animate-ping opacity-75"></div>
                        </div>
                      </div>
                    </Button>
                  </div>
                </form>
              </Form>
            </motion.div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/5 to-black"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <Zap className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white">Comment nous allons avancer ensemble</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <AnimatedProcessStep 
                number={1}
                title="Consultation"
                description="Après réception de votre demande, nous organiserons une consultation initiale pour discuter en détail de vos besoins."
                delay={0}
              />
              
              <AnimatedProcessStep 
                number={2}
                title="Proposition"
                description="Je vous présenterai une proposition détaillée incluant portée du projet, calendrier et budget."
                delay={0.2}
              />
              
              <AnimatedProcessStep 
                number={3}
                title="Réalisation"
                description="Une fois la proposition approuvée, nous commencerons à travailler sur votre projet avec des points d'étape réguliers."
                delay={0.4}
              />
            </div>
            
            {/* Process connection lines */}
            <div className="hidden md:block">
              <div className="absolute top-1/2 left-1/3 w-1/6 h-px bg-gradient-to-r from-indigo-500 to-indigo-500/0"></div>
              <div className="absolute top-1/2 right-1/3 w-1/6 h-px bg-gradient-to-l from-indigo-500 to-indigo-500/0"></div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="text-center mb-12">
              <Star className="h-10 w-10 text-indigo-400 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-white mb-2">Questions fréquentes</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
            </div>
            
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="cosmic-card p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-2 text-white">Quels types de projets acceptez-vous?</h3>
                <p className="text-gray-300">
                  Je travaille sur des projets variés dans le domaine du numérique - développement web/mobile, IA, marketing digital, e-gouvernance, et formation. J'évalue chaque projet selon sa portée, son impact potentiel et son alignement avec mes compétences.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="cosmic-card p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-2 text-white">Quel est le délai moyen pour un projet?</h3>
                <p className="text-gray-300">
                  Le délai varie considérablement selon la complexité du projet. Un site web simple peut prendre 2-4 semaines, tandis qu'une plateforme complexe avec IA intégrée peut nécessiter 3-6 mois. Chaque projet reçoit un calendrier personnalisé.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="cosmic-card p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-2 text-white">Comment se déroule la collaboration à distance?</h3>
                <p className="text-gray-300">
                  La collaboration se fait via des outils comme Zoom, Slack, et des plateformes de gestion de projet. Je m'adapte à différents fuseaux horaires et maintiens une communication régulière avec des réunions d'avancement hebdomadaires.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="cosmic-card p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-2 text-white">Proposez-vous un suivi après la livraison du projet?</h3>
                <p className="text-gray-300">
                  Absolument. Tous mes projets incluent une période de support après livraison (généralement 1-3 mois). Des contrats de maintenance à long terme sont également disponibles pour assurer la pérennité de votre solution.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default StartProject;
