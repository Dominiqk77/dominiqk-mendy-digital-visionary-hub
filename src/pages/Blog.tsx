
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const BlogPage = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Blog Tech & Innovation | Dominique Mendy | Tendances Digitales Africaines';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Blog tech et innovation par Dominique Mendy: analyses, tendances et conseils sur l\'IA, le développement web, le marketing digital et la transformation numérique en Afrique.'
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
          <h1 className="text-4xl font-bold mb-6 text-center">Blog Tech & Innovation</h1>
          <p className="text-xl text-center mb-12">Page en cours de développement. Les articles de blog seront bientôt disponibles.</p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
