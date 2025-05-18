
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageContainer from '../components/layout/PageContainer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SpaceBackground from '@/components/space/SpaceBackground';

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Conditions d'Utilisation | Dominiqk Mendy";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Consultez les conditions d'utilisation de Dominiqk Mendy détaillant les règles et modalités d'utilisation de nos services.");
    }
    
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative bg-black">
      <Navbar />
      
      {/* Space background with reduced opacity */}
      <div className="opacity-40">
        <SpaceBackground />
      </div>
      
      <main className="flex-grow z-10 relative py-20 md:py-28">
        <PageContainer>
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="outline" 
              className="text-white mb-8 border-white/20 hover:bg-white/10"
              asChild
            >
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Retour à l'accueil</span>
              </Link>
            </Button>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Conditions d'Utilisation</h1>
              <div className="h-1 w-24 bg-gradient-primary mb-8"></div>
              
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300">
                  Dernière mise à jour : 18 mai, 2025
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Acceptation des Conditions</h2>
                <p className="text-gray-300">
                  En accédant et en utilisant ce site web, vous acceptez d'être lié par ces conditions d'utilisation, 
                  toutes les lois et réglementations applicables, et vous acceptez que vous êtes responsable du respect 
                  des lois locales applicables. Si vous n'êtes pas d'accord avec l'une de ces conditions, 
                  vous êtes interdit d'utiliser ou d'accéder à ce site.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Utilisation de la Licence</h2>
                <p className="text-gray-300">
                  La permission est accordée pour télécharger temporairement une copie des matériaux 
                  (informations ou logiciels) sur le site web de Dominiqk Mendy pour un visionnage transitoire 
                  personnel et non commercial uniquement. Il s'agit de l'octroi d'une licence, et non d'un 
                  transfert de titre, et sous cette licence, vous ne pouvez pas :
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
                  <li>Modifier ou copier les matériaux;</li>
                  <li>Utiliser les matériaux à des fins commerciales ou pour toute présentation publique;</li>
                  <li>Tenter de décompiler ou de désosser tout logiciel contenu sur le site web de Dominiqk Mendy;</li>
                  <li>Supprimer tout droit d'auteur ou autres notations de propriété des matériaux; ou</li>
                  <li>Transférer les matériaux à une autre personne ou "miroiter" les matériaux sur tout autre serveur.</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  Cette licence sera automatiquement résiliée si vous violez l'une de ces restrictions et peut être 
                  résiliée par Dominiqk Mendy à tout moment.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Avis de non-responsabilité</h2>
                <p className="text-gray-300">
                  Les matériaux sur le site web de Dominiqk Mendy sont fournis "tels quels". Dominiqk Mendy ne donne aucune garantie, 
                  expresse ou implicite, et décline et annule par la présente toutes les autres garanties, y compris, sans limitation, 
                  les garanties ou conditions implicites de qualité marchande, d'adéquation à un usage particulier, ou de non-violation 
                  de la propriété intellectuelle ou autre violation des droits.
                </p>
                <p className="text-gray-300 mt-4">
                  En outre, Dominiqk Mendy ne garantit pas et ne fait aucune représentation concernant l'exactitude, 
                  les résultats probables, ou la fiabilité de l'utilisation des matériaux sur son site web ou 
                  autrement liés à ces matériaux ou sur tout site lié à ce site.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Limitations</h2>
                <p className="text-gray-300">
                  En aucun cas, Dominiqk Mendy ou ses fournisseurs ne seront responsables de tout dommage 
                  (y compris, sans limitation, les dommages pour perte de données ou de profit, ou en raison d'une interruption d'activité) 
                  découlant de l'utilisation ou de l'incapacité d'utiliser les matériaux sur le site web de Dominiqk Mendy, 
                  même si Dominiqk Mendy ou un représentant autorisé de Dominiqk Mendy a été informé oralement ou par écrit 
                  de la possibilité de tels dommages.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Exactitude des Matériaux</h2>
                <p className="text-gray-300">
                  Les matériaux apparaissant sur le site web de Dominiqk Mendy pourraient inclure des erreurs techniques, 
                  typographiques ou photographiques. Dominiqk Mendy ne garantit pas que tout matériel sur son site web 
                  est exact, complet ou à jour. Dominiqk Mendy peut apporter des changements aux matériaux contenus sur son site web 
                  à tout moment sans préavis. Cependant, Dominiqk Mendy ne s'engage pas à mettre à jour les matériaux.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Liens</h2>
                <p className="text-gray-300">
                  Dominiqk Mendy n'a pas examiné tous les sites liés à son site web et n'est pas responsable du contenu 
                  de ces sites liés. L'inclusion de tout lien n'implique pas l'approbation par Dominiqk Mendy du site. 
                  L'utilisation de tout site web lié est à vos propres risques.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Modifications</h2>
                <p className="text-gray-300">
                  Dominiqk Mendy peut réviser ces conditions d'utilisation de son site web à tout moment sans préavis. 
                  En utilisant ce site web, vous acceptez d'être lié par la version actuelle de ces conditions d'utilisation.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Loi Applicable</h2>
                <p className="text-gray-300">
                  Ces conditions sont régies et interprétées conformément aux lois du Sénégal, 
                  et vous vous soumettez irrévocablement à la juridiction exclusive des tribunaux de ce pays.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Contact</h2>
                <p className="text-gray-300">
                  Si vous avez des questions concernant ces conditions d'utilisation, 
                  veuillez nous contacter via notre <Link to="/contact" className="text-primary hover:underline">page de contact</Link>.
                </p>
              </div>
            </motion.div>
          </div>
        </PageContainer>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
