
import React, { useEffect } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const AIServices = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Services IA | Dominique Mendy | Expert Intelligence Artificielle Sénégal';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Services d\'intelligence artificielle personnalisés pour entreprises africaines: machine learning, IA générative, chatbots et automatisation par Dominique Mendy.'
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
          <h1 className="text-4xl font-bold mb-6 text-center">Services d'Intelligence Artificielle</h1>
          <p className="text-xl text-center mb-12">Page en cours de développement. Consultez la page principale des services pour découvrir nos offres IA.</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIServices;
