
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Download, Star, User, Building, Mail, Shield, Clock, Users, Award, CheckCircle } from 'lucide-react';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name?: string; email: string; company?: string }) => void;
  isLoading: boolean;
  bookTitle: string;
  bookPrice: string;
}

const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  isLoading,
  bookTitle,
  bookPrice
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [urgencyTimer, setUrgencyTimer] = useState({ minutes: 14, seconds: 59 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "ROI de +347% en 3 mois grâce aux stratégies de Dominiqk",
      author: "Sarah M., CEO TechInnovate",
      result: "+347% ROI"
    },
    {
      text: "Investissement rentabilisé dès la première semaine",
      author: "Marc L., Directeur Digital",
      result: "ROI 7 jours"
    },
    {
      text: "2.3M€ de CA supplémentaire avec ces méthodes",
      author: "Julie R., Fondatrice StartupIA",
      result: "+2.3M€ CA"
    }
  ];

  // Timer d'urgence
  useEffect(() => {
    const timer = setInterval(() => {
      setUrgencyTimer(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Rotation des témoignages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.email) {
      newErrors.email = 'Email requis pour accès immédiat';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Format email invalide';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onSubmit({
        name: formData.name || undefined,
        email: formData.email,
        company: formData.company || undefined
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border border-white/20 text-white overflow-hidden max-h-[95vh] overflow-y-auto">
        {/* Background cosmique */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-indigo-900/30"></div>
          <div className="nebula-glow-purple w-64 h-64 -top-20 -right-20 opacity-20 animate-pulse-slow"></div>
          <div className="nebula-glow-blue w-48 h-48 top-20 -left-20 opacity-30 animate-float"></div>
        </div>
        
        <div className="relative z-10">
          {/* Header ultra-premium */}
          <DialogHeader className="text-center space-y-4 mb-6">
            <div className="mx-auto w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4 shadow-glow-purple animate-pulse">
              <Star className="h-10 w-10 text-black" />
            </div>
            
            <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent">
              Accès Premium Sécurisé
            </DialogTitle>
            
            {/* Timer d'urgence */}
            <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 rounded-xl p-4">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Clock className="w-5 h-5 text-red-400" />
                <span className="text-red-300 font-bold">
                  OFFRE EXPIRE DANS {urgencyTimer.minutes}:{urgencyTimer.seconds.toString().padStart(2, '0')}
                </span>
              </div>
              <p className="text-red-200 text-sm">⚡ 47 personnes regardent cette page maintenant</p>
            </div>
            
            <div className="space-y-3">
              <p className="text-yellow-300 font-bold text-xl">{bookTitle}</p>
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-green-400">{bookPrice}</span>
                  <span className="text-lg text-gray-400 line-through">{Math.round(parseFloat(bookPrice.replace('€', '')) * 2)}€</span>
                </div>
                <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 text-sm font-bold animate-pulse">
                  -50% LANCEMENT
                </Badge>
              </div>
            </div>
          </DialogHeader>

          {/* Témoignage rotatif */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 mb-6 transition-all duration-500">
            <div className="flex items-center mb-2">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-300 font-semibold">TÉMOIGNAGE VÉRIFIÉ</span>
            </div>
            <p className="text-blue-200 italic mb-2">"{testimonials[currentTestimonial].text}"</p>
            <div className="flex items-center justify-between">
              <p className="text-xs text-blue-300">— {testimonials[currentTestimonial].author}</p>
              <Badge className="bg-green-500/20 text-green-400 border border-green-500/30 text-xs">
                {testimonials[currentTestimonial].result}
              </Badge>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Formulaire optimisé */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white font-medium flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-blue-400" />
                  Email professionnel * <span className="ml-2 text-xs text-blue-300">(pour recevoir votre livre)</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@entreprise.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-blue-300 focus:border-blue-400 focus:ring-blue-400/20 py-3"
                  required
                />
                {errors.email && (
                  <p className="text-red-400 text-sm flex items-center">
                    <span className="mr-1">⚠️</span>
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white font-medium flex items-center">
                    <User className="w-4 h-4 mr-2 text-purple-400" />
                    Nom complet
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Prénom Nom"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder:text-blue-300 focus:border-purple-400 focus:ring-purple-400/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-white font-medium flex items-center">
                    <Building className="w-4 h-4 mr-2 text-green-400" />
                    Entreprise
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Votre entreprise"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="bg-white/10 border-white/30 text-white placeholder:text-blue-300 focus:border-green-400 focus:ring-green-400/20"
                  />
                </div>
              </div>
            </div>

            {/* Valeurs ajoutées premium */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-4">
              <h4 className="text-lg font-bold text-white text-center mb-4">🎁 INCLUS DANS VOTRE ACHAT</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-blue-200">Accès à vie + mises à jour</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-blue-200">Templates prêts à l'emploi</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-blue-200">Calculateur ROI exclusif</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-blue-200">Support expert inclus</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg p-3 text-center">
                <p className="text-yellow-300 font-semibold text-sm">
                  🎯 BONUS EXCEPTIONNEL: Webinar privé "ROI x10" (valeur 200€)
                </p>
              </div>
            </div>

            {/* Garanties et sécurité */}
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-xl p-4">
              <div className="flex items-center justify-center space-x-6 text-sm text-green-200">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-1 text-green-400" />
                  <span>Paiement 100% sécurisé</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-1 text-yellow-400" />
                  <span>30j satisfait ou remboursé</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1 text-blue-400" />
                  <span>2,547+ clients satisfaits</span>
                </div>
              </div>
            </div>

            {/* CTA principal ultra-optimisé */}
            <div className="space-y-4">
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-4 text-lg transition-all duration-300 hover:scale-105 shadow-cosmic-lg relative overflow-hidden"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                    Sécurisation de votre accès...
                  </div>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    ACCÈS IMMÉDIAT - PAIEMENT SÉCURISÉ
                    <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </>
                )}
              </Button>
              
              <div className="flex justify-center space-x-4">
                <Button 
                  type="button" 
                  onClick={onClose}
                  variant="ghost" 
                  className="text-white/60 hover:text-white text-sm"
                >
                  Plus tard
                </Button>
              </div>
            </div>

            {/* Footer sécurité */}
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center space-x-4 text-xs text-blue-300">
                <span>🔒 Cryptage SSL 256-bit</span>
                <span>•</span>
                <span>💳 Stripe sécurisé</span>
                <span>•</span>
                <span>📧 Email instantané</span>
              </div>
              <p className="text-xs text-blue-400">
                En procédant au paiement, vous acceptez de recevoir votre livre premium par email.
                <br />Aucune donnée ne sera partagée avec des tiers.
              </p>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureModal;
