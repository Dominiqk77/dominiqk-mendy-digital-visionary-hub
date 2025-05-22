
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Medal, Award, Badge, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroDynamicBackground from './hero/HeroDynamicBackground';

const Certifications = () => {
  const certifications = [
    {
      title: "Intelligence Artificielle & Machine Learning",
      issuer: "IBM Professional Certification",
      year: "2023",
      credentialId: "IBM-AI-2023-1278",
    },
    {
      title: "Expert Digital Marketing",
      issuer: "Google Digital Academy",
      year: "2022",
      credentialId: "GDA-DM-2022-3492",
    },
    {
      title: "Full Stack Web Development",
      issuer: "Meta (Facebook) Developer Certification",
      year: "2022",
      credentialId: "META-FSWD-2022-0987",
    },
    {
      title: "Data Science & Analytics",
      issuer: "Microsoft Professional Program",
      year: "2021",
      credentialId: "MS-DSA-2021-6754",
    },
    {
      title: "Cloud Computing Architecture",
      issuer: "AWS Certified Solutions Architect",
      year: "2021",
      credentialId: "AWS-CSA-2021-5487",
    },
    {
      title: "UX/UI Design Professional",
      issuer: "Nielsen Norman Group",
      year: "2020",
      credentialId: "NNG-UX-2020-3214",
    },
  ];

  const awards = [
    {
      title: "Innovation Tech Award",
      organization: "African Digital Summit",
      year: "2023",
      description: "Pour l'implémentation de solutions IA révolutionnaires en Afrique de l'Ouest",
    },
    {
      title: "E-Commerce Excellence Award",
      organization: "Marrakech Tech Expo",
      year: "2022",
      description: "Reconnaissance pour la création de plateformes e-commerce exceptionnelles",
    },
    {
      title: "Digital Transformation Leader",
      organization: "Senegal Tech Innovation Forum",
      year: "2021",
      description: "Contribution exceptionnelle à la transformation digitale au Sénégal",
    },
  ];

  return (
    <section id="certifications" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Enhanced Space-themed Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-portfolio-space/95 via-portfolio-space to-portfolio-deepspace/95 z-0"></div>
      
      {/* Neural network grid overlay */}
      <div className="absolute inset-0 bg-space-grid opacity-30 z-0"></div>
      
      {/* AI-themed Dynamic Particles */}
      <div className="absolute inset-0 z-0">
        <HeroDynamicBackground />
      </div>
      
      {/* Glowing orbs - cosmic theme */}
      <div className="absolute top-1/4 right-1/5 w-64 h-64 bg-portfolio-purple/20 rounded-full blur-[80px] animate-pulse-slow z-0"></div>
      <div className="absolute bottom-1/4 left-1/6 w-80 h-80 bg-portfolio-blue/20 rounded-full blur-[100px] animate-pulse-slow z-0" 
        style={{animationDelay: '2s'}}></div>
      
      {/* Floating symbols - tech themed */}
      <div className="hidden md:block">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`cert-symbol-${i}`}
            className="absolute text-white/10 font-mono text-5xl"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1], 
              y: [0, -15, 0], 
              x: Math.random() > 0.5 ? [0, 5, 0] : [0, -5, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5 + i * 2,
              delay: i * 0.8
            }}
            style={{
              top: `${15 + Math.random() * 70}%`,
              left: `${5 + Math.random() * 90}%`,
            }}
          >
            {['<>', '{}', '[]', '//', '**'][i % 5]}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-portfolio-purple via-portfolio-blue to-portfolio-pink bg-clip-text text-transparent">
              Certifications & Récompenses
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-portfolio-purple via-portfolio-blue to-portfolio-pink mx-auto mb-6"></div>
          <p className="text-lg text-white/80">
            Une expertise certifiée et reconnue dans l'industrie du numérique
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center mb-8">
              <Medal className="text-portfolio-purple h-8 w-8 mr-3" />
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Card className="glass-space border-gradient border-gradient-purple hover:border-portfolio-purple/30 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-space-glow overflow-hidden">
                    <CardContent className="p-6">
                      <h4 className="font-bold mb-2 text-white group-hover:text-portfolio-purple transition-colors">{cert.title}</h4>
                      <p className="text-sm text-white/70 mb-3">{cert.issuer}</p>
                      <div className="flex justify-between items-center text-xs">
                        <span className="bg-portfolio-purple/20 text-portfolio-purple px-2 py-1 rounded-full">{cert.year}</span>
                        <span className="text-white/60">ID: {cert.credentialId}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex items-center mb-8">
              <Award className="text-portfolio-blue h-8 w-8 mr-3" />
              <h3 className="text-2xl font-bold text-white">Récompenses</h3>
            </div>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <Card className="glass-space border-gradient border-gradient-purple hover:border-portfolio-blue/30 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-space-glow overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-lg text-white">{award.title}</h4>
                        <span className="bg-portfolio-blue/20 text-portfolio-blue px-3 py-1 rounded-full text-sm">
                          {award.year}
                        </span>
                      </div>
                      <p className="text-sm text-white/70 mb-3">
                        <strong>{award.organization}</strong>
                      </p>
                      <p className="text-sm text-white/80">{award.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative bottom elements - tech circuit pattern */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-portfolio-deepspace to-transparent z-0"></div>
      <svg className="absolute bottom-0 left-0 w-full z-0 opacity-20" viewBox="0 0 1440 100">
        <path fill="url(#certGradient)" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
        <defs>
          <linearGradient id="certGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D946EF" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default Certifications;
