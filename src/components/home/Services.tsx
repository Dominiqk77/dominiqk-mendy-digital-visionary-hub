
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, LineChart, BrainCircuit, Database, Layout, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Développement Web & Mobile",
      description: "Sites vitrines, e-commerce, applications web et mobiles avec les dernières technologies et une approche centrée sur l'utilisateur.",
      link: "/services/web-development"
    },
    {
      icon: <LineChart size={40} />,
      title: "Marketing Digital",
      description: "Stratégies de marketing digital complètes pour augmenter votre visibilité en ligne et générer des leads qualifiés pour votre entreprise.",
      link: "/services/digital-marketing"
    },
    {
      icon: <BrainCircuit size={40} />,
      title: "Solutions IA",
      description: "Intégration de l'intelligence artificielle pour automatiser vos processus, analyser vos données et créer des expériences personnalisées.",
      link: "/services/ai-solutions"
    },
    {
      icon: <Globe size={40} />,
      title: "E-Gouvernance",
      description: "Solutions numériques pour les administrations et les services publics afin d'améliorer l'efficacité et la transparence des processus.",
      link: "/services/e-governance"
    },
    {
      icon: <Database size={40} />,
      title: "Analyse de Données",
      description: "Collecte, analyse et visualisation de données pour vous aider à prendre des décisions stratégiques basées sur des insights concrets.",
      link: "/services/data-analysis"
    },
    {
      icon: <Layout size={40} />,
      title: "Consultation Tech",
      description: "Conseils stratégiques pour orienter votre transformation digitale et optimiser votre infrastructure technologique existante.",
      link: "/services/consulting"
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Services</h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Des solutions numériques innovantes pour propulser votre entreprise vers de nouveaux sommets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card border-gradient border-gradient-light overflow-hidden group">
              <CardHeader className="pb-0">
                <div className="text-primary group-hover:text-secondary transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-primary group">
                  <Link to={service.link} className="flex items-center">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90">
            <Link to="/services">Voir tous les services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
