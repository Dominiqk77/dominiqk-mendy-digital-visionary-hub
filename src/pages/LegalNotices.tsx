
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageContainer from '../components/layout/PageContainer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SpaceBackground from '@/components/space/SpaceBackground';

const LegalNotices = () => {
  useEffect(() => {
    document.title = "Mentions Légales | Dominiqk Mendy";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Consultez les mentions légales du site de Dominiqk Mendy : informations d'entreprise, droits d'auteur et responsabilités légales.");
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
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Mentions Légales</h1>
              <div className="h-1 w-24 bg-gradient-primary mb-8"></div>
              
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300">
                  Dernière mise à jour : 18 mai, 2025
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Informations d'Entreprise</h2>
                <p className="text-gray-300">
                  Le site web dominiqkmendy.com est édité par :
                </p>
                <div className="bg-black/40 p-6 rounded-lg border border-white/10 text-gray-300 mt-4 space-y-2">
                  <p><strong className="text-white">Société</strong> : Millennium Capital Invest Ltd</p>
                  <p><strong className="text-white">Forme juridique</strong> : Limited Company</p>
                  <p><strong className="text-white">Siège social</strong> : 123 Business Avenue, Londres, Royaume-Uni</p>
                  <p><strong className="text-white">Immatriculation</strong> : RC12345678</p>
                  <p><strong className="text-white">Capital social</strong> : 10 000 £</p>
                  <p><strong className="text-white">Directeur de la publication</strong> : Dominiqk Mendy</p>
                  <p><strong className="text-white">Email de contact</strong> : contact@dominiqkmendy.com</p>
                </div>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Hébergement</h2>
                <p className="text-gray-300">
                  Ce site est hébergé par :
                </p>
                <div className="bg-black/40 p-6 rounded-lg border border-white/10 text-gray-300 mt-4 space-y-2">
                  <p><strong className="text-white">Société</strong> : Vercel Inc.</p>
                  <p><strong className="text-white">Adresse</strong> : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                  <p><strong className="text-white">Website</strong> : vercel.com</p>
                </div>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Propriété Intellectuelle</h2>
                <p className="text-gray-300">
                  L'ensemble du contenu de ce site (textes, images, vidéos, logos, codes, design, structure) est la propriété exclusive de 
                  Dominiqk Mendy et est protégé par les lois nationales et internationales relatives à la propriété intellectuelle.
                </p>
                <p className="text-gray-300 mt-4">
                  Toute reproduction, représentation, modification, publication, transmission, ou plus généralement toute exploitation 
                  non autorisée du site et de son contenu, est strictement interdite.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Données Personnelles</h2>
                <p className="text-gray-300">
                  Le traitement des données personnelles des utilisateurs est soumis à notre 
                  <Link to="/privacy-policy" className="text-primary hover:underline ml-1">Politique de Confidentialité</Link>.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Cookies</h2>
                <p className="text-gray-300">
                  Ce site utilise des cookies pour améliorer l'expérience utilisateur. En naviguant sur ce site, 
                  vous acceptez notre utilisation des cookies conformément à notre 
                  <Link to="/privacy-policy" className="text-primary hover:underline ml-1">Politique de Confidentialité</Link>.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Limitation de Responsabilité</h2>
                <p className="text-gray-300">
                  Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement mis à jour. 
                  Cependant, Dominiqk Mendy ne peut garantir l'exactitude, la complétude et l'actualité des informations diffusées sur ce site.
                </p>
                <p className="text-gray-300 mt-4">
                  Dominiqk Mendy décline toute responsabilité :
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
                  <li>Pour toute interruption du site</li>
                  <li>Pour tout dysfonctionnement du site</li>
                  <li>Pour toute erreur de mise à jour</li>
                  <li>Pour tout dommage résultant d'une intrusion frauduleuse d'un tiers</li>
                  <li>Pour toutes informations incorrectes ou incomplètes</li>
                  <li>Et plus généralement, pour tout dommage direct ou indirect, quelles qu'en soient les causes, origines, natures ou conséquences</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Liens Hypertextes</h2>
                <p className="text-gray-300">
                  Ce site peut contenir des liens hypertextes vers d'autres sites. Dominiqk Mendy n'a pas la possibilité de vérifier le contenu 
                  des sites ainsi visités, et n'assume aucune responsabilité quant aux risques de contenus illicites.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Droit Applicable et Juridiction Compétente</h2>
                <p className="text-gray-300">
                  Tout différend lié à l'interprétation et à l'exécution des présentes mentions légales est soumis au droit du Sénégal. 
                  En l'absence de résolution amiable, le litige sera porté devant les tribunaux compétents de Dakar.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Contact</h2>
                <p className="text-gray-300">
                  Pour toute question concernant ces mentions légales, 
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

export default LegalNotices;
