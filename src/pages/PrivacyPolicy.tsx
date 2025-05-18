
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PageContainer from '../components/layout/PageContainer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SpaceBackground from '@/components/space/SpaceBackground';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Politique de Confidentialité | Dominiqk Mendy";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Découvrez la politique de confidentialité de Dominiqk Mendy concernant la collecte, l'utilisation et la protection de vos données personnelles.");
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
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Politique de Confidentialité</h1>
              <div className="h-1 w-24 bg-gradient-primary mb-8"></div>
              
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300">
                  Dernière mise à jour : 18 mai, 2025
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Introduction</h2>
                <p className="text-gray-300">
                  Chez Dominiqk Mendy, nous accordons une grande importance à la confidentialité de vos données personnelles. 
                  Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations 
                  lorsque vous visitez notre site web ou utilisez nos services.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Données Collectées</h2>
                <p className="text-gray-300">
                  Nous pouvons collecter les types d'informations suivants :
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
                  <li>
                    <strong className="text-white">Informations personnelles</strong> : Nom, prénom, adresse email, numéro de téléphone 
                    lorsque vous nous contactez via notre formulaire ou démarrez un projet avec nous.
                  </li>
                  <li>
                    <strong className="text-white">Informations techniques</strong> : Adresse IP, type de navigateur, appareil utilisé, 
                    pages visitées, temps passé sur le site.
                  </li>
                  <li>
                    <strong className="text-white">Cookies</strong> : Notre site utilise des cookies pour améliorer votre expérience de navigation. 
                    Vous pouvez désactiver les cookies dans les paramètres de votre navigateur.
                  </li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Utilisation des Données</h2>
                <p className="text-gray-300">
                  Nous utilisons vos données personnelles aux fins suivantes :
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
                  <li>Vous fournir les services que vous avez demandés</li>
                  <li>Répondre à vos questions et demandes</li>
                  <li>Améliorer notre site web et nos services</li>
                  <li>Vous envoyer des informations sur nos services (uniquement avec votre consentement)</li>
                  <li>Se conformer à nos obligations légales</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Protection des Données</h2>
                <p className="text-gray-300">
                  Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées 
                  pour protéger vos données personnelles contre tout accès, modification, divulgation ou destruction non autorisés. 
                  Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée, 
                  et nous ne pouvons garantir une sécurité absolue.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Partage des Données</h2>
                <p className="text-gray-300">
                  Nous ne vendons pas vos données personnelles à des tiers. Nous pouvons partager vos informations dans les cas suivants :
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
                  <li>Avec des prestataires de services qui nous aident à exploiter notre site web et à fournir nos services</li>
                  <li>Si nous sommes tenus de le faire par la loi</li>
                  <li>Pour protéger nos droits, notre propriété ou notre sécurité, ou ceux de nos utilisateurs ou d'autres personnes</li>
                </ul>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Vos Droits</h2>
                <p className="text-gray-300">
                  Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-4">
                  <li>Droit d'accès à vos données personnelles</li>
                  <li>Droit de rectification de vos données</li>
                  <li>Droit à l'effacement de vos données (droit à l'oubli)</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité des données</li>
                  <li>Droit d'opposition au traitement</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  Pour exercer ces droits, veuillez nous contacter via notre page de contact.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Conservation des Données</h2>
                <p className="text-gray-300">
                  Nous conservons vos données personnelles aussi longtemps que nécessaire pour atteindre les objectifs décrits 
                  dans cette politique de confidentialité, sauf si une période de conservation plus longue est requise ou permise par la loi.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Modifications de la Politique de Confidentialité</h2>
                <p className="text-gray-300">
                  Nous pouvons modifier cette politique de confidentialité de temps à autre. La version la plus récente 
                  sera toujours disponible sur notre site web avec la date de la dernière mise à jour.
                </p>
                
                <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Contact</h2>
                <p className="text-gray-300">
                  Si vous avez des questions concernant cette politique de confidentialité, 
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

export default PrivacyPolicy;
