
import React, { useEffect } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const WebServices = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Services Web & Mobile | Dominique Mendy | Développeur Full Stack Sénégal';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Services de développement web et mobile par Dominique Mendy: sites web professionnels, applications mobile, e-commerce et solutions SaaS pour entreprises africaines.'
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
          <h1 className="text-4xl font-bold mb-6 text-center">Services Web & Mobile</h1>
          <p className="text-xl text-center mb-12">Page en cours de développement. Consultez la page principale des services pour découvrir nos offres de développement web et mobile.</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WebServices;
