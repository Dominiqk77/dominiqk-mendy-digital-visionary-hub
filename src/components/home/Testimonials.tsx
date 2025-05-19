import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote, Globe, Star, MessageSquarePlus, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import TestimonialForm from './TestimonialForm';

// International testimonial data
const testimonials = [
  // French testimonials
  {
    id: 1,
    name: "Bruno Montier",
    company: "AGRO FOOD INDUSTRIE MARRAKECH",
    position: "Fondateur Directeur Général",
    quote: "Dominiqk a transformé notre présence en ligne avec une stratégie de marketing digital exceptionnelle. Grâce à son expertise, notre nouvelle gamme de produits a connu un succès immédiat sur le marché international.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    country: "France",
    language: "French",
    rating: 5,
  },
  {
    id: 2,
    name: "Sophie Moreau",
    company: "Digital Innovation Group",
    position: "Chief Technology Officer",
    quote: "Le travail de Dominiqk sur notre plateforme a révolutionné notre approche. Sa maîtrise des technologies de pointe a fait de notre solution un modèle dans notre secteur.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    country: "Canada",
    language: "French",
    rating: 5,
  },
  {
    id: 3,
    name: "François Lambert",
    company: "PUBLI TICKET MAROC",
    position: "CEO",
    quote: "Notre collaboration avec Dominiqk a été un véritable tournant pour Publi Ticket. Sa vision novatrice et sa compréhension approfondie du marché digital nous ont permis de nous démarquer considérablement.",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    country: "Belgium",
    language: "French",
    rating: 5,
  },
  {
    id: 4,
    name: "Amélie Lefèvre",
    company: "Tech Solutions Paris",
    position: "Responsable Innovation",
    quote: "Dominiqk a su apporter des solutions sur mesure pour notre transition digitale. Son approche holistique et sa compréhension des enjeux ont fait toute la différence. Je recommande vivement ses services à toute entreprise cherchant à innover.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    country: "France",
    language: "French",
    rating: 5,
  },
  {
    id: 5,
    name: "Jean-Marc Bissieux",
    company: "Fintech Solutions Paris",
    position: "Directeur Technologique",
    quote: "L'expertise de Dominiqk en intelligence artificielle nous a permis d'optimiser considérablement nos systèmes d'analyse financière. Un professionnel d'exception avec une vision claire de l'avenir technologique.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    country: "France",
    language: "French",
    rating: 5,
  },
  {
    id: 6,
    name: "Claire Dubourg",
    company: "Alliance Numérique International",
    position: "Présidente",
    quote: "Dominiqk a orchestré notre transformation numérique avec brio. Son expertise en IA a permis à notre consortium de devenir un leader dans notre domaine en moins d'un an.",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    country: "Switzerland",
    language: "French",
    rating: 5,
  },
  // English testimonials
  {
    id: 7,
    name: "Michael Richardson",
    company: "Global Tech Solutions",
    position: "CEO",
    quote: "Dominiqk's approach to digital transformation is truly revolutionary. His deep understanding of AI technologies and their practical applications helped us streamline our operations and increase revenue by 40% in just six months.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    country: "United Kingdom",
    language: "English",
    rating: 5,
  },
  {
    id: 8,
    name: "Sarah Johnson",
    company: "TechVentures International",
    position: "Innovation Director",
    quote: "Working with Dominiqk was a game-changer for our startup ecosystem. His insights into emerging technologies and market trends provided us with a roadmap that attracted significant investment and international partnerships.",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
    country: "United States",
    language: "English",
    rating: 5,
  },
  {
    id: 9,
    name: "David Miller",
    company: "London Digital Academy",
    position: "Managing Director",
    quote: "Dominiqk delivered an exceptional training program for our executives on AI implementation strategies. His practical approach and vast experience across different markets made the content immediately applicable to our diverse client base.",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    country: "United Kingdom",
    language: "English",
    rating: 5,
  },
  {
    id: 10,
    name: "Elizabeth Taylor",
    company: "Digital Development Coalition",
    position: "Project Lead",
    quote: "Dominiqk's contribution to our digital governance project was invaluable. He successfully bridged technical expertise with business needs, resulting in a solution that was readily adopted across our organization.",
    image: "https://randomuser.me/api/portraits/women/52.jpg",
    country: "Australia",
    language: "English",
    rating: 5,
  },
  {
    id: 11,
    name: "James Wilson",
    company: "Tech Partners International",
    position: "Strategy Officer",
    quote: "Dominiqk's expertise in multiple markets makes him an invaluable consultant. His strategic guidance helped us navigate complex regulatory environments and establish successful digital partnerships across different countries.",
    image: "https://randomuser.me/api/portraits/men/37.jpg",
    country: "United States",
    language: "English",
    rating: 5,
  },
  {
    id: 12,
    name: "Victoria Adams",
    company: "Global AI Solutions",
    position: "Head of Innovation",
    quote: "Dominiqk's deep understanding of AI implementation in diverse markets helped us develop algorithms that outperformed our previous models by 60%. His expertise is truly global in scope.",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
    country: "Canada",
    language: "English",
    rating: 5,
  },
  {
    id: 13,
    name: "Robert Brown",
    company: "Trans-Continental Investments",
    position: "Digital Assets Director",
    quote: "We engaged Dominiqk to evaluate digital opportunities across emerging markets. His insights were spot-on and led to several successful ventures that continue to yield impressive returns for our portfolio.",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    country: "Australia",
    language: "English",
    rating: 5,
  },
  // Spanish testimonials
  {
    id: 14,
    name: "Carlos Rodríguez",
    company: "Innovación Digital Madrid",
    position: "Director Ejecutivo",
    quote: "La colaboración con Dominiqk ha sido transformadora para nuestra empresa. Su enfoque estratégico en inteligencia artificial nos permitió expandirnos exitosamente en Europa y América.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    country: "Spain",
    language: "Spanish",
    rating: 5,
  },
  {
    id: 15,
    name: "María González",
    company: "Tecnología Sin Fronteras",
    position: "Directora de Proyectos",
    quote: "Dominiqk aportó una perspectiva única a nuestros proyectos internacionales. Su habilidad para adaptar soluciones tecnológicas a diferentes contextos culturales fue clave para nuestro éxito.",
    image: "https://randomuser.me/api/portraits/women/58.jpg",
    country: "Mexico",
    language: "Spanish",
    rating: 5,
  },
  {
    id: 16,
    name: "Javier López",
    company: "Consultoría Digital Barcelona",
    position: "Jefe de Estrategia",
    quote: "La capacidad de Dominiqk para integrar soluciones de IA en entornos empresariales tradicionales es extraordinaria. Transformó completamente nuestra forma de interactuar con los clientes y optimizar procesos comerciales.",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    country: "Spain",
    language: "Spanish",
    rating: 5,
  },
  {
    id: 17,
    name: "Ana Martínez",
    company: "Futuro Digital Internacional",
    position: "Directora de Innovación",
    quote: "El conocimiento de Dominiqk sobre mercados y tecnologías disruptivas nos proporcionó una ventaja competitiva significativa. Su enfoque práctico y orientado a resultados generó impactos inmediatos en nuestro negocio.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    country: "Colombia",
    language: "Spanish",
    rating: 5,
  },
  {
    id: 18,
    name: "Eduardo Hernández",
    company: "Soluciones Globales Tech",
    position: "Director de Tecnología",
    quote: "Dominiqk tiene una capacidad única para identificar oportunidades tecnológicas en mercados diversos. Su estrategia de implementación de IA nos ayudó a mejorar significativamente nuestra eficiencia operativa y experiencia del cliente.",
    image: "https://randomuser.me/api/portraits/men/70.jpg",
    country: "Argentina",
    language: "Spanish",
    rating: 5,
  },
  {
    id: 19,
    name: "Sofía Ramírez",
    company: "Consultora Digital Internacional",
    position: "Gerente de Proyectos",
    quote: "La visión multicultural de Dominiqk fue fundamental para el éxito de nuestros proyectos internacionales. Sus soluciones tecnológicas consideran aspectos culturales y sociales que otros consultores suelen pasar por alto.",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
    country: "Peru",
    language: "Spanish",
    rating: 5,
  },
  {
    id: 20,
    name: "Miguel Torres",
    company: "Innovación Empresarial Madrid",
    position: "Director General",
    quote: "Dominiqk revolucionó nuestra estrategia de transformación digital con un enfoque adaptado a nuestras necesidades específicas. Su experiencia internacional y conocimiento de múltiples industrias aportaron un valor incalculable.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    country: "Spain",
    language: "Spanish",
    rating: 5,
  },
];

const Testimonials = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
  
  // Group testimonials by language
  const testimonialsByLanguage = testimonials.reduce((acc, testimonial) => {
    const { language } = testimonial;
    if (!acc[language]) {
      acc[language] = [];
    }
    acc[language].push(testimonial);
    return acc;
  }, {} as Record<string, typeof testimonials>);
  
  const languages = Object.keys(testimonialsByLanguage);
  const [activeLanguage, setActiveLanguage] = useState(languages[0]);
  
  useEffect(() => {
    if (!api || !autoPlay || isPaused) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [api, autoPlay, isPaused]);

  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Language toggle handler
  const handleLanguageToggle = (language: string) => {
    setActiveLanguage(language);
    if (api) {
      api.scrollTo(0); // Reset carousel position when changing language
    }
  };

  // Handle form submission
  const handleTestimonialSubmit = (testimonialData: any, rating: number) => {
    // Close the dialog
    setIsDialogOpen(false);
    
    // Show success message
    toast({
      title: "Témoignage soumis",
      description: rating >= 4 
        ? "Merci pour votre avis positif ! Il sera publié prochainement."
        : "Merci pour votre retour d'expérience. Nous l'avons bien enregistré.",
      duration: 5000,
    });
  };

  // Filter testimonials by active language
  const activeTestimonials = testimonialsByLanguage[activeLanguage] || [];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden relative">
      {/* Nebula background effects */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="nebula-glow-purple w-96 h-96 top-10 left-10"></div>
        <div className="nebula-glow-blue w-80 h-80 bottom-10 right-20"></div>
        <div className="nebula-glow-purple w-64 h-64 top-1/3 right-1/4"></div>
      </div>
      
      {/* Star-like particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div 
          key={`star-${i}`}
          className="absolute rounded-full bg-white animate-star-twinkle"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.8 + 0.2
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-cosmic animate-gradient-slow">
            Témoignages Internationaux
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-portfolio-purple to-portfolio-blue animate-pulse-slow mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Découvrez l'impact de notre expertise à l'échelle mondiale
          </p>
          
          {/* Language toggle */}
          <div className="flex justify-center gap-3 mt-8 mb-12">
            <Globe className="w-5 h-5 text-portfolio-purple mr-2" />
            {languages.map((language) => (
              <Badge
                key={language}
                onClick={() => handleLanguageToggle(language)}
                className={`cursor-pointer transition-all px-4 py-2 text-sm ${
                  activeLanguage === language 
                    ? "bg-gradient-to-r from-portfolio-purple to-portfolio-blue text-white animate-pulse-slow" 
                    : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                }`}
              >
                {language}
              </Badge>
            ))}
          </div>
        </div>
        
        <div 
          className="max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Carousel
            setApi={setApi}
            className="w-full relative"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-1">
              {activeTestimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="bg-black/40 backdrop-blur-lg border-0 overflow-hidden rounded-xl h-full transition-all duration-300 hover:shadow-cosmic hover:scale-[1.02]">
                      <div className="absolute inset-0 opacity-10 bg-gradient-to-b from-portfolio-purple to-transparent rounded-xl"></div>
                      <CardContent className="p-8 flex flex-col h-full">
                        <div className="flex items-center mb-5">
                          {/* Country flag indicator */}
                          <div className="relative mr-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-portfolio-purple shadow-cosmic">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-portfolio-purple to-portfolio-blue rounded-full p-1.5 shadow-cosmic-lg">
                              <Quote className="w-3 h-3 text-white" />
                            </div>
                          </div>
                          <div>
                            <p className="font-semibold text-lg text-white">{testimonial.name}</p>
                            <div className="flex items-center mt-1">
                              <div className="space-badge text-xs py-0.5 px-2 flex items-center">
                                <Globe className="w-3 h-3 mr-1" />
                                {testimonial.country}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Rating stars */}
                        <div className="flex mb-4">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} fill="#9b87f5" className="w-4 h-4 text-portfolio-purple" />
                          ))}
                        </div>
                        
                        <p className="text-gray-300 italic text-sm mb-4 flex-1">
                          "{testimonial.quote}"
                        </p>
                        
                        <div className="mt-auto">
                          <p className="text-xs text-portfolio-purple font-medium">{testimonial.position}</p>
                          <p className="text-xs text-gray-400">{testimonial.company}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-12 top-1/2 bg-black/40 border-portfolio-purple/30 hover:bg-black/60 text-white" />
              <CarouselNext className="absolute -right-12 top-1/2 bg-black/40 border-portfolio-purple/30 hover:bg-black/60 text-white" />
            </div>
          </Carousel>
          
          {/* Indicator dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {activeTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current 
                    ? "bg-gradient-to-r from-portfolio-purple to-portfolio-blue w-6" 
                    : "bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Add Testimonial Button */}
        <div className="flex justify-center mt-16">
          <Button 
            onClick={() => setIsDialogOpen(true)}
            variant="transparent" 
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-br from-portfolio-purple/20 to-portfolio-blue/20 border border-white/10 hover:border-portfolio-purple/50 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-portfolio-purple/40 to-portfolio-blue/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center gap-2">
              <MessageSquarePlus className="w-5 h-5 text-portfolio-purple" />
              <span className="font-semibold text-white">Partagez votre expérience</span>
            </div>
          </Button>
        </div>
      </div>

      {/* Testimonial Submission Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-gray-950 border border-portfolio-purple/20 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gradient-cosmic">
              Partagez votre expérience
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Nous apprécions votre retour d'expérience.
              <br />Les avis positifs seront publiés sur notre site.
            </DialogDescription>
          </DialogHeader>
          <TestimonialForm onSubmit={handleTestimonialSubmit} onCancel={() => setIsDialogOpen(false)} />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Testimonials;
