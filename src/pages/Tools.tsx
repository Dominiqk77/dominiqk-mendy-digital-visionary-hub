
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const ToolsPage = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Outils IA Gratuits | Dominique Mendy | Innovation IA Sénégal';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Outils IA gratuits par Dominique Mendy: générateurs de contenu, analyseurs SEO, planificateurs de contenu et autres solutions automatisées pour entrepreneurs africains.'
      );
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto py-20 px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">Outils IA Gratuits</h1>
          <p className="text-xl text-center mb-12">Page en cours de développement. Les outils IA gratuits seront bientôt disponibles.</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ToolsPage;
