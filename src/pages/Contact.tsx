
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  useEffect(() => {
    // Set page title for SEO
    document.title = 'Contact | Dominique Mendy | Expert en Innovation Numérique & IA';
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Contactez Dominique Mendy, expert sénégalais en innovation numérique et IA pour discuter de vos projets et besoins en transformation digitale.'
      );
    }
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Contact Hero Section */}
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Parlons de <span className="text-gradient">votre projet</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Transformons ensemble vos idées en solutions digitales innovantes qui stimuleront votre croissance
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-20 -mt-10">
          <div className="container mx-auto px-4">
            <Card className="max-w-5xl mx-auto border-gradient border-gradient-light overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 text-white">
                  <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 rounded-full p-3">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Email</h3>
                        <p className="text-gray-300">contact@dominiquemendy.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 rounded-full p-3">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Téléphone</h3>
                        <p className="text-gray-300">+221 XX XXX XX XX</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 rounded-full p-3">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Bureau</h3>
                        <p className="text-gray-300">Dakar, Sénégal</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 rounded-full p-3">
                        <MessageCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Réseaux sociaux</h3>
                        <div className="flex gap-4 mt-2">
                          <a href="#" className="text-gray-300 hover:text-primary">LinkedIn</a>
                          <a href="#" className="text-gray-300 hover:text-primary">Twitter</a>
                          <a href="#" className="text-gray-300 hover:text-primary">Instagram</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 md:p-12">
                  <h2 className="text-2xl font-bold mb-6">Envoyez-moi un message</h2>
                  
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">Nom</label>
                        <Input id="name" placeholder="Votre nom" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                        <Input id="email" type="email" placeholder="votre@email.com" />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">Sujet</label>
                      <Input id="subject" placeholder="Sujet de votre message" />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                      <Textarea id="message" placeholder="Votre message..." rows={6} />
                    </div>
                    
                    <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                      Envoyer le message
                    </Button>
                  </form>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
