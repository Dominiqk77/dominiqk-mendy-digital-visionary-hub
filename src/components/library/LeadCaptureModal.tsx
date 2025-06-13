
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, Download, Star, User, Building, Mail } from 'lucide-react';

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

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.email) {
      newErrors.email = 'Email requis';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email invalide';
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
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border border-white/20 text-white overflow-hidden">
        {/* Background cosmique */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-indigo-900/30"></div>
          <div className="nebula-glow-purple w-64 h-64 -top-20 -right-20 opacity-20 animate-pulse-slow"></div>
          <div className="nebula-glow-blue w-48 h-48 top-20 -left-20 opacity-30 animate-float"></div>
        </div>
        
        <div className="relative z-10">
          <DialogHeader className="text-center space-y-4 mb-6">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4 shadow-glow-purple">
              <Star className="h-8 w-8 text-black" />
            </div>
            
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent">
              Accès Premium Immédiat
            </DialogTitle>
            
            <div className="space-y-2">
              <p className="text-yellow-300 font-bold text-lg">{bookTitle}</p>
              <div className="flex items-center justify-center space-x-3">
                <span className="text-2xl font-bold text-green-400">{bookPrice}</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Offre Limitée
                </span>
              </div>
            </div>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white font-medium flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-blue-400" />
                  Email professionnel *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@entreprise.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-blue-300 focus:border-blue-400 focus:ring-blue-400/20"
                  required
                />
                {errors.email && (
                  <p className="text-red-400 text-sm">{errors.email}</p>
                )}
              </div>

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

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 mt-6">
              <div className="flex items-center justify-center space-x-4 text-sm text-blue-200">
                <div className="flex items-center">
                  <Sparkles className="w-4 h-4 mr-1 text-yellow-400" />
                  <span>Accès immédiat</span>
                </div>
                <div className="flex items-center">
                  <Download className="w-4 h-4 mr-1 text-green-400" />
                  <span>Téléchargement sécurisé</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <Button 
                type="submit" 
                disabled={isLoading}
                className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold py-3 transition-all duration-300 hover:scale-105 shadow-cosmic-lg"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                    Traitement...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2" />
                    Accès Immédiat
                  </>
                )}
              </Button>
              <Button 
                type="button" 
                onClick={onClose}
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 py-3"
              >
                Annuler
              </Button>
            </div>

            <p className="text-xs text-blue-300 text-center mt-4">
              🔒 Vos données sont sécurisées et ne seront jamais partagées
            </p>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureModal;
