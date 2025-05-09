
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
  projectType: z.string({
    required_error: "Veuillez sélectionner un type de projet.",
  }),
  budget: z.string().optional(),
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
      projectType: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // In a real application, you would send this data to your backend
    
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
  };

  const projectTypes = [
    "Développement Web / Mobile",
    "Solution IA / Machine Learning",
    "Marketing Digital",
    "E-Gouvernance",
    "Formation / Coaching",
    "Consulting Stratégique",
    "Autre"
  ];

  const budgetRanges = [
    "< 1 000 000 FCFA",
    "1 000 000 - 5 000 000 FCFA",
    "5 000 000 - 10 000 000 FCFA",
    "10 000 000 - 25 000 000 FCFA",
    "> 25 000 000 FCFA",
    "À déterminer"
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
              className="max-w-3xl mx-auto cosmic-card rounded-xl p-6 md:p-10 backdrop-blur-sm"
            >
              <div className="absolute top-0 right-0 w-full h-full overflow-hidden rounded-xl z-[-1] opacity-5">
                <div className="tech-grid w-full h-full"></div>
              </div>
              
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white">Décrivez votre projet</h2>
                <div className="flex items-center text-indigo-400 text-sm">
                  <CircuitBoard className="mr-2 h-5 w-5" />
                  <span>Système prêt</span>
                </div>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-200">Nom complet *</FormLabel>
                          <FormControl>
                            <Input placeholder="Votre nom" {...field} className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500" />
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
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-200">Entreprise / Organisation</FormLabel>
                          <FormControl>
                            <Input placeholder="Nom de votre entreprise" {...field} className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500" />
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
                  </div>
                  
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
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-gray-200">Budget estimé</FormLabel>
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
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-200">Description du projet *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Décrivez votre projet, vos objectifs, vos attentes..." 
                            rows={6}
                            {...field} 
                            className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-center mt-8">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="px-8 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white"
                    >
                      <div className="flex items-center gap-2">
                        <span>Envoyer ma demande</span>
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

