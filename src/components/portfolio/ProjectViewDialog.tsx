
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Lock, Shield, Users, Copyright } from 'lucide-react';

interface ProjectViewDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectViewDialog: React.FC<ProjectViewDialogProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-gray-900 via-black to-gray-800 border border-white/20 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-pink-900/30 rounded-lg"></div>
        <div className="relative z-10">
          <DialogHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-4">
              <Lock className="h-8 w-8 text-white" />
            </div>
            
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Projets Protégés
            </DialogTitle>
            
            <DialogDescription className="text-gray-300 text-lg leading-relaxed">
              Ces projets innovants sont protégés par des contrats de confidentialité 
              et le copyright. L'accès complet est réservé aux clients et collaborateurs autorisés.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg border border-white/20">
                <Shield className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">Confidentialité contractuelle</span>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg border border-white/20">
                <Copyright className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">Propriété intellectuelle protégée</span>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg border border-white/20">
                <Users className="h-5 w-5 text-pink-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">Accès clients & collaborateurs uniquement</span>
              </div>
            </div>

            <div className="text-center pt-4">
              <p className="text-blue-300 font-medium mb-4">
                Intéressé par ces solutions ? Contactez-nous pour en discuter.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button 
                  onClick={onClose}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                >
                  Comprendre
                </Button>
                <Button 
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-md"
                  onClick={() => {
                    onClose();
                    // Optionnel: rediriger vers la page contact
                    window.location.href = '/contact';
                  }}
                >
                  Nous Contacter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectViewDialog;
