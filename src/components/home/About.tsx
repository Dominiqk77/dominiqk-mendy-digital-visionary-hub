import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">À Propos</h2>
          <div className="h-1 w-24 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Expert Digital Africain | Plus de 15 ans d'Expertise en Innovation Technologique & Intelligence Artificielle
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative">
            <div className="border-gradient border-gradient-strong p-1 rounded-lg animate-fade-in">
              <div className="relative bg-gradient-to-r from-gray-900 to-black p-8 rounded-lg overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary opacity-20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary opacity-20 rounded-full blur-3xl"></div>
                
                <h3 className="text-2xl font-bold text-white mb-4">Expert Référent de l'Innovation Numérique en Afrique</h3>
                
                <p className="text-gray-300 mb-6">
                  Leader visionnaire dans la transformation digitale en Afrique avec plus de 15 années d'expertise multidisciplinaire, j'allie expertise technique, vision stratégique et expérience entrepreneuriale pour propulser les entreprises vers l'excellence numérique. Mon parcours diversifié m'a permis d'accompagner avec succès plus de 200 entreprises dans leur transformation digitale, générant en moyenne +250K€ de ROI pour mes clients.
                </p>
                
                <p className="text-gray-300">
                  Expert chevronné en Intelligence Artificielle, développement web avancé et marketing digital, je suis reconnu pour ma capacité à créer des solutions innovantes qui répondent aux défis complexes du marché Africain. Mon approche holistique, fruit de 15 années d'expérience technique et commerciale, associe technologies de pointe et stratégies business pour des résultats mesurables et durables.
                </p>

                <div className="mt-8 p-6 border border-gray-700 rounded-lg bg-black/50 backdrop-blur-sm">
                  <h4 className="text-secondary font-semibold mb-4">Mon Parcours Académique</h4>
                  <p className="text-gray-300">
                    Dès mon plus jeune âge, j'ai cultivé une passion innée pour la création, transformant chaque idée en une opportunité d'innovation, chaque rêve en un projet tangible. Mon parcours académique a débuté à Dakar, au Sénégal, où j'ai eu le privilège d'étudier dans des établissements reconnus pour leur excellence académique. Ma formation au Collège de la Cathédrale, au Collège Sacré-Cœur et au Collège Saint Michel de Dakar m'a permis d'acquérir des bases solides et une rigueur intellectuelle exemplaire. Cette éducation de qualité a façonné ma vision et ma méthode de travail, me dotant des compétences nécessaires pour devenir un Créateur et acteur engagé de la transformation numérique au Sénégal et partout en Afrique.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="border-gradient p-1 rounded-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Formation d'Excellence</h3>
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
                <h3 className="text-xl font-bold mb-4">Expertises Clés</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Architecture IA & Big Data</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Développement Full Stack</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Stratégie Digitale</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>E-commerce & MarTech</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Innovation & R&D</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Formation Tech</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Cybersécurité</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Cloud Computing</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-gradient p-1 rounded-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="bg-background p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Impact & Vision</h3>
                <p className="text-muted-foreground">
                  Fort de plus de 15 années d'expérience, je me positionne comme un leader incontournable de la transformation digitale en Afrique. Ma mission : démocratiser l'accès aux technologies avancées, former la nouvelle génération de talents Africains et propulser l'innovation technologique Made in Africa sur la scène internationale. Ma vaste expérience multidisciplinaire me permet d'apporter une vision unique et des solutions innovantes à chaque projet, créant ainsi un impact durable pour l'émergence digitale de l'Afrique.
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
