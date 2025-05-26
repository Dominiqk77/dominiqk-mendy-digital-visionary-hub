
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Shield, Lock, Users, FileText, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectViewDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectViewDialog = ({ isOpen, onClose }: ProjectViewDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-black/95 backdrop-blur-md border border-white/20 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <DialogHeader className="space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <DialogTitle className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projets Protégés
            </DialogTitle>
            
            <DialogDescription className="text-gray-300 space-y-3">
              <p className="leading-relaxed">
                Ces projets sont exclusivement réservés à nos 
                <span className="text-blue-400 font-semibold"> clients </span>
                et 
                <span className="text-purple-400 font-semibold"> collaborateurs</span>.
              </p>
              
              <div className="grid grid-cols-2 gap-3 my-4">
                <div className="flex items-center gap-2 text-sm">
                  <Lock className="h-4 w-4 text-blue-400" />
                  <span>Confidentialité</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FileText className="h-4 w-4 text-purple-400" />
                  <span>Copyright</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-green-400" />
                  <span>Accès Exclusif</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-orange-400" />
                  <span>NDA Requis</span>
                </div>
              </div>
              
              <p className="text-sm text-gray-400">
                Pour découvrir ces réalisations en détail, rejoignez notre écosystème professionnel.
              </p>
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex flex-col gap-3 mt-6">
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
              onClick={onClose}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Devenir Client
            </Button>
            
            <Button 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              onClick={onClose}
            >
              Comprendre
            </Button>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectViewDialog;
