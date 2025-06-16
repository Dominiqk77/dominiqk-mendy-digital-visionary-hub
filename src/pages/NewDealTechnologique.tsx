
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { FileText, Users, TrendingUp, MapPin, Calendar, CheckCircle, Target, DollarSign, Globe, BarChart3, Building, Zap, Shield, Brain, Lightbulb, Award } from 'lucide-react';

const NewDealTechnologique = () => {
  useEffect(() => {
    document.title = 'New Deal Technologique - Guide Investissement Sénégal | Dominiqk Mendy';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Guide complet d\'investissement technologique au Sénégal. Opportunités IA, FinTech, GovTech avec ROI exceptionnel. Par Dominiqk Mendy, expert tech sénégalais.'
      );
    }
    
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Custom styles for the book */}
        <style jsx>{`
          .senegal-colors {
            background: linear-gradient(to bottom, #00853e 33%, #fdef42 33%, #fdef42 66%, #e31e24 66%);
          }
          .chapter-break {
            page-break-before: always;
          }
          .print-page {
            min-height: 100vh;
          }
          @media print {
            .print-page {
              page-break-after: always;
            }
          }
        `}</style>

        {/* Cover Page */}
        <div className="print-page bg-gradient-to-br from-blue-900 via-blue-800 to-green-800 text-white p-12 min-h-screen flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="senegal-colors h-16 w-2 mr-6"></div>
              <h1 className="text-6xl md:text-7xl font-black leading-tight">
                NEW DEAL<br />
                <span className="text-yellow-300">TECHNOLOGIQUE</span>
              </h1>
              <div className="senegal-colors h-16 w-2 ml-6"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-200">
              GUIDE D'INVESTISSEMENT EXCLUSIF<br />
              SÉNÉGAL 2025-2030
            </h2>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 mb-8 border border-white/20">
              <p className="text-xl leading-relaxed mb-6">
                Découvrez les opportunités d'investissement technologique les plus prometteuses du Sénégal. 
                ROI de 300-800%, secteurs en hypercroissance, écosystème startup mature.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-black text-yellow-300 mb-2">€2.5B</div>
                  <p className="text-sm">Marché addressable</p>
                </div>
                <div>
                  <div className="text-3xl font-black text-green-300 mb-2">450%</div>
                  <p className="text-sm">ROI moyen 3 ans</p>
                </div>
                <div>
                  <div className="text-3xl font-black text-blue-300 mb-2">20M</div>
                  <p className="text-sm">Population digitale</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Brain className="w-12 h-12 text-white" />
                </div>
                <p className="font-bold text-lg">DOMINIQK MENDY</p>
                <p className="text-blue-300">Expert Tech & Investissements</p>
                <p className="text-sm">15+ ans d'expérience Sénégal</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg font-semibold mb-2">ÉDITION LIMITÉE - DÉCEMBRE 2024</p>
              <p className="text-sm text-blue-300">Document confidentiel réservé aux investisseurs qualifiés</p>
            </div>
          </div>
        </div>

        {/* Title Page */}
        <div className="print-page bg-white p-12 min-h-screen flex items-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-8">
                <div className="senegal-colors h-8 w-1 mr-4"></div>
                <h1 className="text-5xl font-black text-gray-800">NEW DEAL TECHNOLOGIQUE</h1>
                <div className="senegal-colors h-8 w-1 ml-4"></div>
              </div>
              
              <h2 className="text-2xl font-bold text-blue-600 mb-8">
                GUIDE D'INVESTISSEMENT EXCLUSIF - SÉNÉGAL 2025-2030
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">CROISSANCE EXCEPTIONNELLE</h3>
                <p className="text-sm text-gray-600">Secteur tech +65% par an, écosystème startup mature, gouvernement pro-innovation</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">OPPORTUNITÉS UNIQUES</h3>
                <p className="text-sm text-gray-600">FinTech, GovTech, AgriTech, EdTech - Secteurs sous-exploités à fort potentiel</p>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg text-center">
                <Award className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">EXPERTISE LOCALE</h3>
                <p className="text-sm text-gray-600">15 ans d'expérience, réseau privilégié, track record prouvé (SenServices)</p>
              </div>
            </div>

            <div className="bg-gray-800 text-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-center">POURQUOI CE GUIDE EST UNIQUE</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-yellow-300 mb-3">ANALYSE EXCLUSIVE</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Données primaires terrain (non publiques)</li>
                    <li>• Relations privilégiées gouvernement</li>
                    <li>• Network entrepreneurs et investisseurs</li>
                    <li>• Insights opérationnels concrets</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-300 mb-3">APPROCHE ACTIONNABLE</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Roadmaps 90 jours prêts à exécuter</li>
                    <li>• Contacts directs et introductions</li>
                    <li>• Structures juridiques optimisées</li>
                    <li>• Due diligence frameworks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="print-page bg-white p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="senegal-colors h-8 w-1 mr-4"></div>
              <h1 className="text-4xl font-black">TABLE DES MATIÈRES</h1>
            </div>

            <div className="space-y-4">
              <a href="#chapter1" className="flex justify-between items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <div>
                  <span className="font-bold text-blue-600">CHAPITRE 1</span>
                  <h3 className="text-lg font-semibold">EXECUTIVE SUMMARY</h3>
                  <p className="text-sm text-gray-600">Vision globale, chiffres clés, recommandations prioritaires</p>
                </div>
                <span className="text-gray-400">03</span>
              </a>

              <a href="#chapter2" className="flex justify-between items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <div>
                  <span className="font-bold text-blue-600">CHAPITRE 2</span>
                  <h3 className="text-lg font-semibold">CONTEXTE MACROÉCONOMIQUE</h3>
                  <p className="text-sm text-gray-600">Stabilité politique, croissance économique, démographie favorable</p>
                </div>
                <span className="text-gray-400">08</span>
              </a>

              <a href="#chapter3" className="flex justify-between items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <div>
                  <span className="font-bold text-blue-600">CHAPITRE 3</span>
                  <h3 className="text-lg font-semibold">ÉCOSYSTÈME TECHNOLOGIQUE</h3>
                  <p className="text-sm text-gray-600">Infrastructure, talents, startups, financements disponibles</p>
                </div>
                <span className="text-gray-400">15</span>
              </a>

              <a href="#chapter4" className="flex justify-between items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <div>
                  <span className="font-bold text-blue-600">CHAPITRE 4</span>
                  <h3 className="text-lg font-semibold">SECTEURS PRIORITAIRES</h3>
                  <p className="text-sm text-gray-600">FinTech, GovTech, AgriTech, EdTech - Analyse détaillée par secteur</p>
                </div>
                <span className="text-gray-400">22</span>
              </a>

              <a href="#chapter5" className="flex justify-between items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <div>
                  <span className="font-bold text-blue-600">CHAPITRE 5</span>
                  <h3 className="text-lg font-semibold">MATRICE OPPORTUNITÉS</h3>
                  <p className="text-sm text-gray-600">Quick wins vs Big bets, sizing marché, roadmaps sectoriels</p>
                </div>
                <span className="text-gray-400">35</span>
              </a>

              <a href="#chapter6" className="flex justify-between items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <div>
                  <span className="font-bold text-blue-600">CHAPITRE 6</span>
                  <h3 className="text-lg font-semibold">CAS D'ÉTUDE SENSERVICES</h3>
                  <p className="text-sm text-gray-600">E-gouvernance révolutionnaire, métriques, modèle économique</p>
                </div>
                <span className="text-gray-400">48</span>
              </a>

              <a href="#chapter7" className="flex justify-between items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <div>
                  <span className="font-bold text-blue-600">CHAPITRE 7</span>
                  <h3 className="text-lg font-semibold">DAKAR HUB TECHNOLOGIQUE</h3>
                  <p className="text-sm text-gray-600">Avantages concurrentiels, infrastructure, benchmarking régional</p>
                </div>
                <span className="text-gray-400">58</span>
              </a>

              <a href="#chapter8" className="flex justify-between items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <div>
                  <span className="font-bold text-blue-600">CHAPITRE 8</span>
                  <h3 className="text-lg font-semibold">STRATÉGIES D'INVESTISSEMENT</h3>
                  <p className="text-sm text-gray-600">Typologie investisseurs, structures optimales, partenariats</p>
                </div>
                <span className="text-gray-400">68</span>
              </a>

              <a href="#chapter9" className="flex justify-between items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <div>
                  <span className="font-bold text-blue-600">CHAPITRE 9</span>
                  <h3 className="text-lg font-semibold">PLAN D'ACTION 90 JOURS</h3>
                  <p className="text-sm text-gray-600">Roadmap exécution, étapes clés, livrables, ressources</p>
                </div>
                <span className="text-gray-400">78</span>
              </a>

              <a href="#chapter10" className="flex justify-between items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <div>
                  <span className="font-bold text-blue-600">CHAPITRE 10</span>
                  <h3 className="text-lg font-semibold">ANNEXES & RESSOURCES</h3>
                  <p className="text-sm text-gray-600">Contacts, outils, templates, références légales</p>
                </div>
                <span className="text-gray-400">88</span>
              </a>
            </div>

            <div className="bg-blue-900 text-white p-6 rounded-lg mt-8">
              <h3 className="text-lg font-bold mb-3 text-center">NAVIGATION INTERACTIVE</h3>
              <p className="text-center text-sm">Cliquez sur un chapitre pour accéder directement au contenu. Navigation optimisée pour lecture digitale et impression.</p>
            </div>
          </div>
        </div>

        {/* Chapter 1: Executive Summary */}
        <div id="chapter1" className="print-page bg-white p-12">
          <div className="max-w-4xl mx-auto">
            <div className="chapter-break">
              <div className="flex items-center mb-8">
                <div className="senegal-colors h-8 w-1 mr-4"></div>
                <h1 className="text-4xl font-black">CHAPITRE 1</h1>
              </div>
              <h2 className="text-3xl font-bold mb-8 text-blue-600">EXECUTIVE SUMMARY</h2>

              <div className="space-y-6 text-lg leading-relaxed">
                <div className="bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 text-white p-8 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-center">LE SÉNÉGAL : PROCHAIN ELDORADO TECHNOLOGIQUE AFRICAIN</h3>
                  <p className="text-center text-lg">
                    Avec une croissance de +65% dans le secteur tech, une stabilité politique unique en Afrique de l'Ouest, 
                    et un gouvernement résolument pro-innovation, le Sénégal s'impose comme LA destination d'investissement 
                    technologique incontournable pour la prochaine décennie.
                  </p>
                </div>

                <h3 className="text-2xl font-bold mb-6">OPPORTUNITÉ D'INVESTISSEMENT EXCEPTIONNELLE</h3>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="font-bold text-lg mb-2">MARCHÉ ADDRESSABLE</h4>
                    <div className="text-3xl font-black text-blue-600 mb-2">€2.5B</div>
                    <p className="text-sm">Secteur tech + services digitaux</p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg text-center">
                    <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h4 className="font-bold text-lg mb-2">CROISSANCE ANNUELLE</h4>
                    <div className="text-3xl font-black text-green-600 mb-2">+65%</div>
                    <p className="text-sm">Secteur technologique</p>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg text-center">
                    <Users className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                    <h4 className="font-bold text-lg mb-2">POPULATION DIGITALE</h4>
                    <div className="text-3xl font-black text-yellow-600 mb-2">20M</div>
                    <p className="text-sm">Utilisateurs connectés</p>
                  </div>
                </div>

                {/* Rest of chapter 1 content */}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="print-page bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 text-white p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">PRÊT À SAISIR CES OPPORTUNITÉS EXCEPTIONNELLES ?</h2>
            
            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 mb-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">ACCOMPAGNEMENT EXCLUSIF DISPONIBLE</h3>
              <p className="text-lg mb-6">
                Fort de mon expertise unique et de mon réseau privilégié au Sénégal, je propose un accompagnement 
                sur-mesure pour maximiser vos investissements technologiques.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-yellow-300 mb-3">CE QUE VOUS OBTENEZ</h4>
                  <ul className="text-left space-y-2 text-sm">
                    <li>• Accès exclusif à mon pipeline de deals</li>
                    <li>• Due diligence technique et marché</li>
                    <li>• Introductions directes entrepreneurs</li>
                    <li>• Structuration juridique optimale</li>
                    <li>• Accompagnement post-investissement</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-300 mb-3">VOTRE PROFIL IDÉAL</h4>
                  <ul className="text-left space-y-2 text-sm">
                    <li>• Ticket d'investissement 100K€+</li>
                    <li>• Vision long terme (3-5 ans)</li>
                    <li>• Appetite pour marchés émergents</li>
                    <li>• Objectif ROI 300%+ acceptable</li>
                    <li>• Investissement à impact souhaité</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold" asChild>
                  <Link to="/contact">
                    <Calendar className="mr-2 h-5 w-5" />
                    Consultation Stratégique Gratuite
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm" asChild>
                  <Link to="/start-project">
                    <FileText className="mr-2 h-4 w-4" />
                    Télécharger Guide Complet
                  </Link>
                </Button>
              </div>
            </div>
            
            <p className="text-sm text-blue-300">
              Document confidentiel - Diffusion limitée aux investisseurs qualifiés
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewDealTechnologique;
