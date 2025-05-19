
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquarePlus } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import TestimonialForm from './TestimonialForm';
import TestimonialBackground from './testimonials/TestimonialBackground';
import TestimonialHeader from './testimonials/TestimonialHeader';
import TestimonialCarousel from './testimonials/TestimonialCarousel';
import { getTestimonialsByLanguage, getAvailableLanguages } from './testimonials/TestimonialData';

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
  
  // Get testimonials grouped by language
  const testimonialsByLanguage = getTestimonialsByLanguage();
  const languages = getAvailableLanguages();
  const [activeLanguage, setActiveLanguage] = useState(languages[0]);

  // Language toggle handler
  const handleLanguageToggle = (language: string) => {
    setActiveLanguage(language);
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
      <TestimonialBackground />

      <div className="container mx-auto px-4 relative z-10">
        <TestimonialHeader 
          languages={languages} 
          activeLanguage={activeLanguage}
          onLanguageChange={handleLanguageToggle}
        />
        
        <TestimonialCarousel 
          testimonials={activeTestimonials}
          autoPlay={autoPlay}
          isPaused={isPaused}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        />

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
