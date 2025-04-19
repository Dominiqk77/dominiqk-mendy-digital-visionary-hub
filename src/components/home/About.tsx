
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">À Propos</h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Découvrez qui je suis et comment je transforme le paysage digital africain
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative">
            <div className="border-gradient border-gradient-strong p-1 rounded-lg animate-fade-in">
              <div className="relative bg-gradient-to-r from-gray-900 to-black p-8 rounded-lg overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary opacity-20 rounded-full blur-3xl"></div>
                
                <h3 className="text-2xl font-bold text-white mb-4">Expert Tech Sénégalais</h3>
                
                <p className="text-gray-300 mb-6">
                  En tant qu'expert en développement de sites et d'applications, je me distingue par ma capacité à transformer les visions en réalité numérique. Mon savoir-faire combiné en technologie numérique et marketing digital ouvre la voie à des solutions innovantes, propulsant des entreprises vers une croissance sans précédent.
                </p>
                
                <p className="text-gray-300">
                  Mon engagement envers l'excellence et ma passion pour créer des expériences exceptionnelles font de moi un partenaire de confiance unique pour concrétiser vos objectifs commerciaux.
                </p>
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="border border-gray-700 rounded-lg p-4 bg-black/50 backdrop-blur-sm">
                    <h4 className="text-secondary font-semibold mb-1">Né le</h4>
                    <p className="text-white">16 Novembre 1987</p>
                  </div>
                  <div className="border border-gray-700 rounded-lg p-4 bg-black/50 backdrop-blur-sm">
                    <h4 className="text-secondary font-semibold mb-1">Origine</h4>
                    <p className="text-white">Dakar, Sénégal</p>
                  </div>
                  <div className="border border-gray-700 rounded-lg p-4 bg-black/50 backdrop-blur-sm">
                    <h4 className="text-secondary font-semibold mb-1">Résidence</h4>
                    <p className="text-white">Marrakech, Maroc</p>
                  </div>
                  <div className="border border-gray-700 rounded-lg p-4 bg-black/50 backdrop-blur-sm">
                    <h4 className="text-secondary font-semibold mb-1">Langues</h4>
                    <p className="text-white">Français, Anglais, Espagnol</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="border-gradient p-1 rounded-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Éducation</h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="w-4 h-4 rounded-full bg-primary mt-1"></div>
                      <div className="w-0.5 h-full bg-primary/30 ml-2"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Master en Management et Stratégies d'Entreprises</h4>
                      <p className="text-sm text-muted-foreground">ECOLE DE FORMATION PRIVEE RACINE MARRAKECH | 2015-2017</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="w-4 h-4 rounded-full bg-primary mt-1"></div>
                      <div className="w-0.5 h-full bg-primary/30 ml-2"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Licence en Marketing & Communication</h4>
                      <p className="text-sm text-muted-foreground">ENSUP DAKAR | 2014-2012</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="w-4 h-4 rounded-full bg-primary mt-1"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Gestion Hôtelière</h4>
                      <p className="text-sm text-muted-foreground">ESGHA DAKAR | 2011-2010</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="border-gradient p-1 rounded-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Compétences Clés</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Développement Web</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Marketing Digital</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Intelligence Artificielle</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>E-Gouvernance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Design UX/UI</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Gestion de Projet</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Analyse de Données</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Leadership</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-gradient p-1 rounded-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Vision</h3>
                <p className="text-muted-foreground">
                  Transformer l'écosystème numérique africain en créant des solutions innovantes qui placent le Sénégal et l'Afrique à l'avant-garde de la révolution digitale mondiale. Je m'engage à former la prochaine génération de talents tech africains et à développer des technologies qui répondent aux défis uniques du continent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
