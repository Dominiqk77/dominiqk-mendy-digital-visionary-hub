
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
import { Check, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-background/80 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Démarrer un Projet
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8 text-muted-foreground"
              >
                Parlez-moi de votre vision et travaillons ensemble pour la concrétiser
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Project Form Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-background rounded-xl shadow-md p-6 md:p-10 border border-muted">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Décrivez votre projet</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom complet *</FormLabel>
                          <FormControl>
                            <Input placeholder="Votre nom" {...field} />
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
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="votre@email.com" {...field} />
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
                          <FormLabel>Entreprise / Organisation</FormLabel>
                          <FormControl>
                            <Input placeholder="Nom de votre entreprise" {...field} />
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
                          <FormLabel>Téléphone</FormLabel>
                          <FormControl>
                            <Input placeholder="+221 XX XXX XX XX" {...field} />
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
                          <FormLabel>Type de projet *</FormLabel>
                          <FormControl>
                            <select
                              className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                              {...field}
                            >
                              <option value="" disabled>Sélectionnez un type</option>
                              {projectTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
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
                          <FormLabel>Budget estimé</FormLabel>
                          <FormControl>
                            <select
                              className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                              {...field}
                            >
                              <option value="" disabled>Sélectionnez un budget</option>
                              {budgetRanges.map((range) => (
                                <option key={range} value={range}>{range}</option>
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
                        <FormLabel>Description du projet *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Décrivez votre projet, vos objectifs, vos attentes..." 
                            rows={6}
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-center mt-8">
                    <Button type="submit" size="lg" className="px-8">
                      Envoyer ma demande <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Comment nous allons avancer ensemble</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-background p-6 rounded-lg border border-muted shadow-sm relative"
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-bold mb-3 mt-4 text-center">Consultation</h3>
                <p className="text-muted-foreground text-center">
                  Après réception de votre demande, nous organiserons une consultation initiale pour discuter en détail de vos besoins.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-background p-6 rounded-lg border border-muted shadow-sm relative"
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-bold mb-3 mt-4 text-center">Proposition</h3>
                <p className="text-muted-foreground text-center">
                  Je vous présenterai une proposition détaillée incluant portée du projet, calendrier et budget.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-background p-6 rounded-lg border border-muted shadow-sm relative"
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-bold mb-3 mt-4 text-center">Réalisation</h3>
                <p className="text-muted-foreground text-center">
                  Une fois la proposition approuvée, nous commencerons à travailler sur votre projet avec des points d'étape réguliers.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
            
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-lg border border-muted">
                <h3 className="text-xl font-bold mb-2">Quels types de projets acceptez-vous?</h3>
                <p className="text-muted-foreground">
                  Je travaille sur des projets variés dans le domaine du numérique - développement web/mobile, IA, marketing digital, e-gouvernance, et formation. J'évalue chaque projet selon sa portée, son impact potentiel et son alignement avec mes compétences.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-muted">
                <h3 className="text-xl font-bold mb-2">Quel est le délai moyen pour un projet?</h3>
                <p className="text-muted-foreground">
                  Le délai varie considérablement selon la complexité du projet. Un site web simple peut prendre 2-4 semaines, tandis qu'une plateforme complexe avec IA intégrée peut nécessiter 3-6 mois. Chaque projet reçoit un calendrier personnalisé.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-muted">
                <h3 className="text-xl font-bold mb-2">Comment se déroule la collaboration à distance?</h3>
                <p className="text-muted-foreground">
                  La collaboration se fait via des outils comme Zoom, Slack, et des plateformes de gestion de projet. Je m'adapte à différents fuseaux horaires et maintiens une communication régulière avec des réunions d'avancement hebdomadaires.
                </p>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-muted">
                <h3 className="text-xl font-bold mb-2">Proposez-vous un suivi après la livraison du projet?</h3>
                <p className="text-muted-foreground">
                  Absolument. Tous mes projets incluent une période de support après livraison (généralement 1-3 mois). Des contrats de maintenance à long terme sont également disponibles pour assurer la pérennité de votre solution.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default StartProject;
