
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Philippe Dubois",
      company: "AGRO FOOD INDUSTRIE MARRAKECH",
      position: "Fondateur Directeur Général",
      quote: "Dominique a transformé notre présence en ligne avec une stratégie de marketing digital exceptionnelle. Grâce à son expertise, notre nouvelle gamme de produits a connu un succès immédiat. Sa vision, son professionnalisme et sa capacité à comprendre nos besoins nous ont impressionnés.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "François Lambert",
      company: "PUBLI TICKET MAROC",
      position: "CEO",
      quote: "Notre collaboration avec Dominique a été un véritable tournant pour Publi Ticket. Sa vision novatrice et sa compréhension approfondie du marché digital marocain nous ont permis de nous démarquer considérablement. Un professionnel talentueux qui livre toujours au-delà des attentes.",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    {
      id: 3,
      name: "Sophie Moreau",
      company: "Tech Innovation Sénégal",
      position: "Directrice Marketing",
      quote: "Le travail de Dominique sur notre plateforme d'e-gouvernance a révolutionné notre approche. Sa maîtrise des technologies de pointe couplée à sa connaissance du contexte africain ont fait de notre solution un modèle dans la région. Un consultant exceptionnel qui mérite sa réputation d'expert.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 4,
      name: "Pierre Lefèvre",
      company: "Digital MarrakechTech",
      position: "Fondateur",
      quote: "L'expertise de Dominique en intelligence artificielle est incomparable. Il a conçu pour nous un système d'analyse prédictive qui a transformé notre prise de décision et augmenté notre efficacité opérationnelle de 40%. C'est un visionnaire qui comprend parfaitement les défis techniques et commerciaux.",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ce que disent mes clients</h2>
          <div className="h-1 w-24 bg-gradient-primary animate-gradient-pulse mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Des témoignages qui reflètent mon engagement envers l'excellence et la satisfaction client
          </p>
        </div>
        
        <div 
          className="max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <Card className="bg-black/40 backdrop-blur-sm border-gray-800">
                      <CardContent className="p-8">
                        <div className="flex justify-center mb-6">
                          <div className="relative">
                            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-1">
                              <Quote className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 italic text-center mb-6">
                          "{testimonial.quote}"
                        </p>
                        
                        <div className="text-center">
                          <h4 className="text-xl font-bold text-gradient-primary animate-gradient-slow">{testimonial.name}</h4>
                          <p className="text-gray-400">{testimonial.position}</p>
                          <p className="text-sm text-gray-500">{testimonial.company}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    activeIndex === index ? "bg-primary animate-pulse" : "bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
