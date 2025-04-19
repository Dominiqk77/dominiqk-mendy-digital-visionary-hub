
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border-gradient border-gradient-strong">
          <div className="relative bg-gradient-to-r from-gray-900 to-black p-12 md:p-16">
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary opacity-20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary opacity-20 blur-3xl rounded-full"></div>
            
            {/* Senegal flag stripe with very low opacity */}
            <div className="absolute inset-0 opacity-5 senegal-flag-gradient"></div>
            
            <div className="relative z-10">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
                  Prêt à transformer votre <span className="text-gradient">vision numérique</span> en réalité ?
                </h2>
                
                <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                  Ensemble, créons des solutions numériques innovantes qui propulseront votre entreprise vers de nouveaux sommets. Démarrons dès aujourd'hui votre transformation digitale.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                    <Link to="/contact" className="flex items-center">
                      Démarrer un projet
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary text-white hover:bg-primary/10">
                    <Link to="/services">Explorer les services</Link>
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Consultation</h3>
                  <p className="text-gray-400">Discutons de vos besoins et objectifs pour définir la stratégie parfaite</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-secondary">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Conception</h3>
                  <p className="text-gray-400">Création d'une solution personnalisée adaptée à vos objectifs spécifiques</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Résultats</h3>
                  <p className="text-gray-400">Implémentation et optimisation continue pour maximiser votre ROI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
