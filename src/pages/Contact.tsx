
import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, MessageCircle, Server, Database, CircuitBoard } from 'lucide-react';
import { motion } from 'framer-motion';

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

  // Simulated real-time server status
  const [serverStatus, setServerStatus] = useState({
    messagesProcessed: 1248,
    responseTime: 0.6,
    online: true,
    load: 28
  });

  // Simulate real-time data updates for server status
  useEffect(() => {
    const serverInterval = setInterval(() => {
      setServerStatus(prev => ({
        messagesProcessed: prev.messagesProcessed + Math.floor(Math.random() * 3) + 1,
        responseTime: parseFloat((prev.responseTime + (Math.random() * 0.06 - 0.03)).toFixed(1)),
        online: Math.random() > 0.02 ? true : false, // 98% uptime
        load: Math.min(100, Math.max(10, prev.load + Math.floor(Math.random() * 7) - 3))
      }));
    }, 5000);
    
    return () => clearInterval(serverInterval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Navbar />
      
      <main className="flex-grow">
        {/* Contact Hero Section */}
        <section className="py-20 bg-portfolio-darkblue text-white relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(30)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute rounded-full bg-portfolio-blue"
                  style={{
                    width: `${Math.random() * 4 + 1}px`,
                    height: `${Math.random() * 4 + 1}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `pulse ${Math.random() * 4 + 3}s infinite`,
                    opacity: Math.random() * 0.7 + 0.3
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Grid lines overlay */}
          <div className="absolute inset-0 grid grid-cols-12 gap-4 pointer-events-none opacity-5">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-full w-px bg-gradient-to-b from-transparent via-portfolio-blue to-transparent"></div>
            ))}
            {[...Array(12)].map((_, i) => (
              <div key={i} className="absolute h-px w-full bg-gradient-to-r from-transparent via-portfolio-blue to-transparent" style={{ top: `${i * 8.33}%` }}></div>
            ))}
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-portfolio-purple blur-[80px]"
              />
              
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Parlons de <span className="text-gradient">votre projet</span>
              </motion.h1>
              
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-1 w-24 mx-auto mb-8 bg-gradient-to-r from-portfolio-purple via-portfolio-blue to-portfolio-pink"
              />
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              >
                Transformons ensemble vos idées en solutions digitales innovantes qui stimuleront votre croissance
              </motion.p>
              
              {/* Animated status indicators */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-8"
              >
                <div className="flex items-center">
                  <span className={`w-2 h-2 rounded-full ${serverStatus.online ? 'bg-green-500' : 'bg-red-500'} animate-pulse mr-2`}></span>
                  <span className="text-sm">Système {serverStatus.online ? 'en ligne' : 'hors ligne'}</span>
                </div>
                <div className="flex items-center">
                  <Server className="h-4 w-4 text-portfolio-blue mr-2" />
                  <span className="text-sm">{serverStatus.load}% charge serveur</span>
                </div>
                <div className="flex items-center">
                  <Database className="h-4 w-4 text-portfolio-purple mr-2" />
                  <span className="text-sm">{serverStatus.messagesProcessed} messages traités</span>
                </div>
                <div className="flex items-center">
                  <CircuitBoard className="h-4 w-4 text-portfolio-pink mr-2" />
                  <span className="text-sm">{serverStatus.responseTime}s temps de réponse</span>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Animated connection lines */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-0 inset-x-0 h-[50px] flex justify-center items-end"
          >
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className="h-full mx-3 w-px bg-gradient-to-b from-transparent via-portfolio-blue to-primary"
                style={{ height: `${30 + i * 10}px` }}
              />
            ))}
          </motion.div>
        </section>
        
        {/* Contact Form Section */}
        <section className="py-20 -mt-10 relative bg-portfolio-darkblue/80">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="max-w-5xl mx-auto"
            >
              <Card className="border-gradient border-gradient-strong overflow-hidden backdrop-blur-sm bg-black/40">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 text-white relative">
                    {/* Tech decoration line top */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-portfolio-purple to-transparent"></div>
                    
                    {/* Tech decoration line left */}
                    <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-portfolio-purple to-transparent"></div>
                    
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                      <span className="mr-2">Informations de contact</span>
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    </h2>
                    
                    <div className="space-y-6">
                      <motion.div 
                        className="flex items-start gap-4"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <div className="bg-primary/20 rounded-full p-3 relative">
                          <Mail className="h-6 w-6 text-primary" />
                          <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Email</h3>
                          <p className="text-gray-300">contact@dominiquemendy.com</p>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-start gap-4"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <div className="bg-primary/20 rounded-full p-3 relative">
                          <Phone className="h-6 w-6 text-primary" />
                          <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Téléphone</h3>
                          <p className="text-gray-300">+221 XX XXX XX XX</p>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-start gap-4"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <div className="bg-primary/20 rounded-full p-3 relative">
                          <MapPin className="h-6 w-6 text-primary" />
                          <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Bureau</h3>
                          <p className="text-gray-300">Dakar, Sénégal</p>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-start gap-4"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <div className="bg-primary/20 rounded-full p-3 relative">
                          <MessageCircle className="h-6 w-6 text-primary" />
                          <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Réseaux sociaux</h3>
                          <div className="flex gap-4 mt-2">
                            <a href="#" className="text-gray-300 hover:text-primary transition-colors">LinkedIn</a>
                            <a href="#" className="text-gray-300 hover:text-primary transition-colors">Twitter</a>
                            <a href="#" className="text-gray-300 hover:text-primary transition-colors">Instagram</a>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Status indicator */}
                    <div className="mt-12 p-4 border border-gray-800/40 rounded-lg backdrop-blur-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-400">SYSTEM STATUS</span>
                        <div className="flex items-center">
                          <span className={`w-2 h-2 rounded-full ${serverStatus.online ? 'bg-green-500' : 'bg-red-500'} animate-pulse mr-2`}></span>
                          <span className="text-xs">{serverStatus.online ? 'ONLINE' : 'OFFLINE'}</span>
                        </div>
                      </div>
                      
                      <div className="h-1 w-full bg-gray-800 rounded overflow-hidden mb-1">
                        <div 
                          className="h-full bg-gradient-to-r from-portfolio-purple to-portfolio-blue"
                          style={{ width: `${serverStatus.load}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Server load</span>
                        <span>{serverStatus.load}%</span>
                      </div>
                    </div>
                    
                    {/* Tech background pattern */}
                    <div className="absolute bottom-2 right-2 w-24 h-24 opacity-10">
                      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1" />
                        <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.5" />
                        <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.25" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="p-8 md:p-12 bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm text-white relative">
                    {/* Tech decoration line top */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-portfolio-blue to-transparent"></div>
                    
                    <motion.h2 
                      className="text-2xl font-bold mb-6 flex items-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="relative">
                        Envoyez-moi un message
                        <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-portfolio-blue to-transparent"></span>
                      </span>
                    </motion.h2>
                    
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <motion.div
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <label htmlFor="name" className="block text-sm font-medium mb-1">Nom</label>
                          <Input 
                            id="name" 
                            placeholder="Votre nom" 
                            className="bg-black/30 border-gray-700 text-white placeholder:text-gray-500"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="votre@email.com" 
                            className="bg-black/30 border-gray-700 text-white placeholder:text-gray-500"
                          />
                        </motion.div>
                      </div>
                      
                      <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <label htmlFor="subject" className="block text-sm font-medium mb-1">Sujet</label>
                        <Input 
                          id="subject" 
                          placeholder="Sujet de votre message" 
                          className="bg-black/30 border-gray-700 text-white placeholder:text-gray-500"
                        />
                      </motion.div>
                      
                      <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                        <Textarea 
                          id="message" 
                          placeholder="Votre message..." 
                          rows={6} 
                          className="bg-black/30 border-gray-700 text-white placeholder:text-gray-500"
                        />
                      </motion.div>
                      
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="pt-2"
                      >
                        <Button 
                          type="submit" 
                          className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                        >
                          <span>Envoyer le message</span>
                          <span className="ml-2 w-2 h-2 rounded-full bg-white animate-pulse"></span>
                        </Button>
                      </motion.div>
                    </form>
                    
                    {/* Tech background pattern */}
                    <div className="absolute bottom-2 right-2 w-24 h-24 opacity-5">
                      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H20V20H0V0Z" fill="currentColor" />
                        <path d="M25 0H45V20H25V0Z" fill="currentColor" />
                        <path d="M50 0H70V20H50V0Z" fill="currentColor" />
                        <path d="M75 0H95V20H75V0Z" fill="currentColor" />
                        <path d="M0 25H20V45H0V25Z" fill="currentColor" />
                        <path d="M50 25H70V45H50V25Z" fill="currentColor" />
                        <path d="M0 50H20V70H0V50Z" fill="currentColor" />
                        <path d="M25 50H45V70H25V50Z" fill="currentColor" />
                        <path d="M75 50H95V70H75V50Z" fill="currentColor" />
                        <path d="M0 75H20V95H0V75Z" fill="currentColor" />
                        <path d="M50 75H70V95H50V75Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
        
        {/* Map Section with Tech Overlay */}
        <section className="py-16 bg-portfolio-darkblue/90 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="border border-gray-800/40 rounded-lg h-[400px] overflow-hidden relative">
                {/* Placeholder for an actual map integration */}
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-400 mb-4">Carte interactive à venir</p>
                    <p className="text-primary">Localisation: Dakar, Sénégal</p>
                  </div>
                </div>
                
                {/* Tech overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Grid lines */}
                  <div className="absolute inset-0 grid grid-cols-20 grid-rows-10 opacity-10">
                    {[...Array(20)].map((_, i) => (
                      <div key={`v-${i}`} className="h-full w-px bg-portfolio-blue"></div>
                    ))}
                    {[...Array(10)].map((_, i) => (
                      <div key={`h-${i}`} className="w-full h-px bg-portfolio-blue"></div>
                    ))}
                  </div>
                  
                  {/* Radar circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96">
                    {[...Array(4)].map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute inset-0 border border-portfolio-blue rounded-full opacity-10"
                        style={{ 
                          transform: `scale(${(i + 1) * 0.25})`, 
                          animation: `pulse ${(i + 1) * 2}s infinite`
                        }}
                      ></div>
                    ))}
                  </div>
                  
                  {/* Location pin */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                      <div className="absolute -top-1 -left-1 w-6 h-6 bg-primary rounded-full opacity-50 animate-ping"></div>
                    </div>
                  </div>
                  
                  {/* Data points */}
                  {[...Array(5)].map((_, i) => {
                    const angle = (i / 5) * Math.PI * 2;
                    const distance = 100 + Math.random() * 40;
                    const x = Math.cos(angle) * distance;
                    const y = Math.sin(angle) * distance;
                    
                    return (
                      <div 
                        key={i}
                        className="absolute top-1/2 left-1/2 w-2 h-2 bg-portfolio-pink rounded-full opacity-70"
                        style={{ 
                          transform: `translate(${x}px, ${y}px)`,
                          animation: `pulse ${1 + Math.random() * 2}s infinite`
                        }}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
