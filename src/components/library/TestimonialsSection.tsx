
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Laurent B.",
      role: "CEO Tech Startup",
      avatar: "/lovable-uploads/c0a0e8cc-455f-443c-849f-9c1c4aa6981c.png",
      rating: 5,
      text: "ROI +320% en 6 mois grâce aux stratégies IA. Investissement rentabilisé dès la première semaine.",
      highlight: "ROI +320%"
    },
    {
      name: "Sophie R.",
      role: "Entrepreneure",
      avatar: "/lovable-uploads/c0a0e8cc-455f-443c-849f-9c1c4aa6981c.png",
      rating: 5,
      text: "Le guide qui a transformé mon business IA. Des méthodes concrètes et immédiatement applicables.",
      highlight: "Business transformé"
    },
    {
      name: "Marc L.",
      role: "Directeur Innovation",
      avatar: "/lovable-uploads/c0a0e8cc-455f-443c-849f-9c1c4aa6981c.png",
      rating: 5,
      text: "Investissement rentabilisé dès la première semaine. Les opportunités Sénégal sont exceptionnelles.",
      highlight: "ROI immédiat"
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ce que disent nos <span className="text-cyan-400">experts</span>
        </h3>
        <p className="text-lg text-blue-200 max-w-2xl mx-auto">
          Plus de 2,500+ professionnels ont déjà transformé leur business
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-white/10 backdrop-blur-xl border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-cyan-400 mb-4" />
              </div>
              
              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-blue-200 mb-6 leading-relaxed">"{testimonial.text}"</p>
              
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg p-3 mb-4">
                <div className="text-cyan-300 font-bold text-center">{testimonial.highlight}</div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 p-0.5 mr-4">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                </div>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-cyan-300 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
