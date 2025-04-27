
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const AcademyPage = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Académie Digitale | Dominique Mendy | Formation Digital & IA';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Académie digitale par Dominique Mendy: formations et masterclass en développement, marketing digital, IA et innovation pour professionnels africains.'
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
          <h1 className="text-4xl font-bold mb-6 text-center">Académie Digitale</h1>
          <p className="text-xl text-center mb-12">Page en cours de développement. Les formations et masterclass seront bientôt disponibles.</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AcademyPage;
