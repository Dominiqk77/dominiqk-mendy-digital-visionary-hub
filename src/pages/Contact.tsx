import React, { useEffect, useState } from 'react';
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Linkedin, 
  Twitter, 
  Globe, 
  Star,
  MessageCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

// Data Line Animation Component
const DataLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="absolute h-px"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `linear-gradient(90deg, transparent, rgba(132, 90, 223, ${Math.random() * 0.5 + 0.1}), transparent)`,
            opacity: Math.random() * 0.5 + 0.1,
            transform: `rotate(${Math.random() * 360}deg)`,
            animation: `data-flow ${Math.random() * 3 + 2}s infinite linear`
          }}
        />
      ))}
    </div>
  );
};

// Dynamic planet component
const Planet = ({ size, color, top, left, delay }: { 
  size: number; 
  color: string; 
  top: string; 
  left: string; 
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay, ease: "easeOut" }}
      className="absolute rounded-full planet-glow"
      style={{ 
        width: size, 
        height: size, 
        top, 
        left,
        background: `radial-gradient(circle at 30% 30%, ${color}, rgba(0,0,0,0.8))`,
      }}
    />
  );
};

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Adresse email invalide.",
  }),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(3, {
    message: "Le sujet doit contenir au moins 3 caractères.",
  }),
  request_type: z.string().min(1, {
    message: "Veuillez sélectionner un type de demande.",
  }),
  message: z.string().min(10, {
    message: "Le message doit contenir au moins 10 caractères.",
  }),
  budget_range: z.string().optional(),
  project_timeline: z.string().optional(),
});

const REQUEST_TYPES = [
  { value: "consultation-ia", label: "Consultation en IA" },
  { value: "developpement-web", label: "Développement Web" },
  { value: "transformation-digitale", label: "Transformation Digitale" },
  { value: "conseil-strategie", label: "Conseil & Stratégie" },
  { value: "formation-ia", label: "Formation en IA" },
  { value: "analyse-donnees", label: "Analyse de Données" },
  { value: "automatisation", label: "Automatisation de Processus" },
  { value: "ecommerce", label: "Solution E-commerce" },
  { value: "application-mobile", label: "Application Mobile" },
  { value: "marketing-digital", label: "Marketing Digital" },
  { value: "gouvernance-electronique", label: "E-Gouvernance" },
  { value: "chatbot-ia", label: "Chatbot & IA Conversationnelle" },
  { value: "audit-technique", label: "Audit Technique" },
  { value: "autres", label: "Autres demandes" }
];

const BUDGET_RANGES = [
  { value: "moins-5k", label: "Moins de 5 000€" },
  { value: "5k-15k", label: "5 000€ - 15 000€" },
  { value: "15k-50k", label: "15 000€ - 50 000€" },
  { value: "50k-100k", label: "50 000€ - 100 000€" },
  { value: "plus-100k", label: "Plus de 100 000€" },
  { value: "a-discuter", label: "À discuter" }
];

const PROJECT_TIMELINES = [
  { value: "urgent", label: "Urgent (moins d'1 mois)" },
  { value: "court-terme", label: "Court terme (1-3 mois)" },
  { value: "moyen-terme", label: "Moyen terme (3-6 mois)" },
  { value: "long-terme", label: "Long terme (6+ mois)" },
  { value: "flexible", label: "Flexible" }
];

const Contact = () => {
  const { toast } = useToast();
  const [stars, setStars] = useState<{ x: number; y: number; size: number; opacity: number }[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Contact | Dominiqk Mendy | Expert IA & Développement';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Contactez Dominiqk Mendy, expert en IA, développement web et transformation digitale pour vos projets innovants en Afrique et à l\'international.'
      );
    }
    
    // Generate stars
    const newStars = Array.from({ length: 100 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.3,
      opacity: Math.random() * 0.7 + 0.3
    }));
    setStars(newStars);
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      request_type: "",
      message: "",
      budget_range: "",
      project_timeline: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    console.log('Form submission started:', values);

    try {
      // Préparer les données pour Supabase
      const submissionData = {
        name: values.name,
        email: values.email,
        phone: values.phone || null,
        company: values.company || null,
        subject: values.subject,
        request_type: values.request_type,
        message: values.message,
        budget_range: values.budget_range || null,
        project_timeline: values.project_timeline || null,
        source_page: '/contact',
        status: 'nouveau',
        lead_score: 0
      };

      console.log('Inserting data into Supabase:', submissionData);

      // Insérer dans Supabase
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([submissionData])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      console.log('Data inserted successfully:', data);

      toast({
        title: "Message envoyé avec succès!",
        description: "Votre demande a été enregistrée. Je vous répondrai dans les plus brefs délais.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Erreur lors de l'envoi",
        description: "Une erreur s'est produite. Veuillez réessayer ou m'envoyer un email directement.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="fixed inset-0 bg-black z-[-2]"></div>
      <div className="fixed inset-0 tech-grid z-[-1] opacity-30"></div>
      
      {/* Stars background */}
      <div className="fixed inset-0 z-[-1]">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
              opacity: star.opacity,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite ease-in-out ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Decorative planets */}
      <Planet size={80} color="rgba(138, 43, 226, 0.7)" top="-5%" left="85%" delay={0.2} />
      <Planet size={120} color="rgba(65, 105, 225, 0.5)" top="60%" left="-5%" delay={0.4} />
      <Planet size={60} color="rgba(123, 104, 238, 0.6)" top="80%" left="90%" delay={0.6} />
      
      <Navbar />
      
      <main className="flex-grow pt-20 relative z-10">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <DataLines />
          
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-600 rounded-full filter blur-[100px] opacity-20"></div>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-indigo-900/50 rounded-full border border-indigo-500/50 flex items-center justify-center mx-auto mb-6"
              >
                <MessageCircle className="h-8 w-8 text-indigo-400" />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                <span className="text-gradient-cosmic">Contact</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl md:text-2xl mb-8 text-gray-300"
              >
                Discutons de vos projets et explorons comment je peux vous aider à innover
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Contact Form & Info Section */}
        <section className="py-12 md:py-20 relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="lg:w-2/5">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="cosmic-card rounded-xl p-6 lg:p-8 h-full"
                >
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-6 text-white">Informations de contact</h2>
                      <div className="h-1 w-12 bg-indigo-500 mb-6"></div>
                      <p className="text-gray-300 mb-8">
                        N'hésitez pas à me contacter pour discuter de vos projets ou pour toute demande d'information. Je vous répondrai dans les meilleurs délais.
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center mr-4 flex-shrink-0">
                          <Mail className="h-5 w-5 text-indigo-400" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-400 mb-1">Email</h3>
                          <p className="text-white">contact@dominiqkmendy.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center mr-4 flex-shrink-0">
                          <Phone className="h-5 w-5 text-indigo-400" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-400 mb-1">Téléphone</h3>
                          <p className="text-white">+221 XX XXX XX XX</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center mr-4 flex-shrink-0">
                          <MapPin className="h-5 w-5 text-indigo-400" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-400 mb-1">Localisation</h3>
                          <p className="text-white">Dakar, Sénégal</p>
                          <p className="text-gray-400 text-sm">Disponible pour des missions à distance</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center mr-4 flex-shrink-0">
                          <Clock className="h-5 w-5 text-indigo-400" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-400 mb-1">Horaires</h3>
                          <p className="text-white">Lundi - Vendredi: 9h - 18h</p>
                          <p className="text-gray-400 text-sm">Flexible pour les clients internationaux</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-4 text-white">Suivez-moi</h3>
                      <div className="flex space-x-4">
                        <a 
                          href="https://linkedin.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center hover:bg-indigo-800/40 transition-colors"
                        >
                          <Linkedin className="h-5 w-5 text-indigo-400" />
                        </a>
                        <a 
                          href="https://twitter.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center hover:bg-indigo-800/40 transition-colors"
                        >
                          <Twitter className="h-5 w-5 text-indigo-400" />
                        </a>
                        <a 
                          href="#" 
                          className="w-10 h-10 rounded-full bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center hover:bg-indigo-800/40 transition-colors"
                        >
                          <Globe className="h-5 w-5 text-indigo-400" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:w-3/5">
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="cosmic-card rounded-xl p-6 lg:p-8"
                >
                  <div className="absolute -top-3 -right-3 w-6 h-6">
                    <div className="absolute inset-0 bg-indigo-500 rounded-full animate-ping opacity-50"></div>
                    <div className="absolute inset-0 bg-indigo-600 rounded-full"></div>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-6 text-white">Envoyez-moi un message détaillé</h2>
                  <div className="h-1 w-12 bg-indigo-500 mb-6"></div>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-200">Nom complet*</FormLabel>
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
                              <FormLabel className="text-gray-200">Email*</FormLabel>
                              <FormControl>
                                <Input placeholder="votre@email.com" {...field} className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-200">Entreprise</FormLabel>
                              <FormControl>
                                <Input placeholder="Nom de votre entreprise" {...field} className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="request_type"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200">Type de demande*</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-gray-900/50 border-white/10 text-white">
                                  <SelectValue placeholder="Sélectionnez le type de votre demande" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-gray-900 border-white/10">
                                {REQUEST_TYPES.map((type) => (
                                  <SelectItem key={type.value} value={type.value} className="text-white hover:bg-gray-800">
                                    {type.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-200">Sujet*</FormLabel>
                            <FormControl>
                              <Input placeholder="Sujet de votre message" {...field} className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="budget_range"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-200">Budget estimé</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-gray-900/50 border-white/10 text-white">
                                    <SelectValue placeholder="Sélectionnez votre budget" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-gray-900 border-white/10">
                                  {BUDGET_RANGES.map((budget) => (
                                    <SelectItem key={budget.value} value={budget.value} className="text-white hover:bg-gray-800">
                                      {budget.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="project_timeline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-200">Délais souhaités</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="bg-gray-900/50 border-white/10 text-white">
                                    <SelectValue placeholder="Sélectionnez vos délais" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent className="bg-gray-900 border-white/10">
                                  {PROJECT_TIMELINES.map((timeline) => (
                                    <SelectItem key={timeline.value} value={timeline.value} className="text-white hover:bg-gray-800">
                                      {timeline.label}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
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
                            <FormLabel className="text-gray-200">Message détaillé*</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Décrivez votre projet, vos besoins, vos objectifs et toute information pertinente..."
                                rows={6}
                                {...field}
                                className="bg-gray-900/50 border-white/10 text-white placeholder:text-gray-500"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="flex justify-end">
                        <Button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="px-8 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white disabled:opacity-50"
                        >
                          <div className="flex items-center gap-2">
                            <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}</span>
                            <Send className="h-5 w-5" />
                          </div>
                        </Button>
                      </div>
                    </form>
                  </Form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/5 to-black"></div>
          <div className="absolute inset-0 star-bg"></div>
          
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="cosmic-card p-8 md:p-12 rounded-xl text-center relative overflow-hidden">
              <div className="absolute inset-0 tech-grid opacity-10"></div>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 mx-auto mb-6 relative"
              >
                <div className="absolute inset-0 rounded-full bg-indigo-500/50 animate-ping"></div>
                <div className="absolute inset-0 rounded-full bg-indigo-600/30 flex items-center justify-center border border-indigo-500/30">
                  <Star className="h-8 w-8 text-indigo-400" />
                </div>
              </motion.div>
              
              <h2 className="text-3xl font-bold mb-4 text-white">Prêt à démarrer un nouveau projet?</h2>
              
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Si vous préférez discuter en détail de votre projet, vous pouvez également planifier un appel de consultation ou remplir notre formulaire de projet.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="px-8 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white"
                  asChild
                >
                  <Link to="/start-project" className="flex items-center gap-2">
                    <span>Démarrer un projet</span>
                    <Send className="h-5 w-5" />
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="px-8 py-6 border-white/10 text-white hover:bg-white/5"
                  asChild
                >
                  <a href="mailto:contact@dominiqkmendy.com" className="flex items-center gap-2">
                    <span>M'envoyer un email</span>
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
