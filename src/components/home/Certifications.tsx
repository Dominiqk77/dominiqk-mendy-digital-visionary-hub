
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Medal, Award } from 'lucide-react';

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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Récompenses</h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Une expertise certifiée et reconnue dans l'industrie du numérique
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-8">
              <Medal className="text-primary h-8 w-8 mr-3" />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="border-gradient border-gradient-light overflow-hidden group hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2 group-hover:text-primary transition-colors">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                    <div className="flex justify-between items-center text-xs">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">{cert.year}</span>
                      <span className="text-muted-foreground">ID: {cert.credentialId}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-8">
              <Award className="text-secondary h-8 w-8 mr-3" />
              <h3 className="text-2xl font-bold">Récompenses</h3>
            </div>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <Card key={index} className="border-gradient border-gradient-light overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-lg">{award.title}</h4>
                      <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">
                        {award.year}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>{award.organization}</strong>
                    </p>
                    <p className="text-sm">{award.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
