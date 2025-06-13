
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import PageContainer from '@/components/layout/PageContainer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { 
  BookOpen, Download, Star, Shield, Clock, Users, 
  CheckCircle, Eye, CreditCard, Lock, Award 
} from 'lucide-react';

const EbookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const { data: ebook, isLoading: ebookLoading } = useQuery({
    queryKey: ['ebook', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('ebooks')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    },
  });

  const { data: hasPurchased } = useQuery({
    queryKey: ['ebook-purchase', id, user?.id],
    queryFn: async () => {
      if (!user) return false;
      
      const { data, error } = await supabase
        .from('ebook_purchases')
        .select('id')
        .eq('user_id', user.id)
        .eq('ebook_id', id)
        .eq('status', 'completed')
        .single();
      
      return !!data;
    },
    enabled: !!user && !!id,
  });

  const handlePurchase = async () => {
    if (!user) {
      toast({
        title: "Connexion requise",
        description: "Veuillez vous connecter pour acheter ce livre.",
        variant: "destructive",
      });
      navigate('/auth');
      return;
    }

    if (hasPurchased) {
      toast({
        title: "Déjà acheté",
        description: "Vous possédez déjà ce livre.",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      const response = await fetch('/functions/v1/ebook-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session?.access_token}`,
        },
        body: JSON.stringify({
          ebookId: id,
          currency: ebook?.currency || 'EUR',
        }),
      });

      const { sessionId, error } = await response.json();

      if (error) {
        throw new Error(error);
      }

      // Redirect to Stripe Checkout
      const stripe = await import('@stripe/stripe-js').then(mod => 
        mod.loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_...')
      );
      
      if (stripe) {
        await stripe.redirectToCheckout({ sessionId });
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors du processus d'achat.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (ebookLoading) {
    return (
      <PageContainer>
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </PageContainer>
    );
  }

  if (!ebook) {
    return (
      <PageContainer>
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900">Livre non trouvé</h1>
        </div>
      </PageContainer>
    );
  }

  const isIABusinessMastery = ebook.title === 'IA Business Mastery';
  const originalPrice = 197;
  const launchPrice = 147;
  const discount = Math.round(((originalPrice - launchPrice) / originalPrice) * 100);

  return (
    <PageContainer>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-yellow-500 text-black mb-4">
                  {isIABusinessMastery ? 'NOUVEAU - OFFRE DE LANCEMENT' : ebook.category}
                </Badge>
                <h1 className="text-5xl font-bold mb-6">{ebook.title}</h1>
                <p className="text-xl mb-6 leading-relaxed">{ebook.description}</p>
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    {ebook.pages} pages
                  </div>
                  <div className="flex items-center">
                    <Download className="w-5 h-5 mr-2" />
                    PDF téléchargeable
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Expert international
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="w-64 h-80 bg-white/20 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <BookOpen className="w-20 h-20 text-white/60" />
                  </div>
                  <p className="text-sm text-white/80">Couverture du livre</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Purchase Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* What You'll Learn */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Ce que vous allez apprendre</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Stratégies IA pour augmenter votre ROI de +250%',
                      'Implémentation pratique de solutions IA',
                      'Cas d\'études de 500+ entreprises',
                      'Outils et technologies essentiels',
                      'Transformation digitale complète',
                      'Méthodes de Dominiqk Mendy',
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* About the Author */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">À propos de l'auteur</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      DM
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Dominiqk Mendy</h3>
                      <p className="text-gray-600 mb-4">
                        Expert international en Intelligence Artificielle et transformation digitale avec plus de 15 ans d'expérience.
                        Fondateur de Millennium Capital Invest (Londres/Marrakech).
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>✓ 500+ entreprises accompagnées</div>
                        <div>✓ ROI moyen +250%</div>
                        <div>✓ 2000+ projets réalisés</div>
                        <div>✓ Présence internationale</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Questions fréquentes</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Combien de temps ai-je pour télécharger le livre ?</AccordionTrigger>
                      <AccordionContent>
                        Vous avez un accès illimité à vos achats. Vous pouvez télécharger le livre autant de fois que nécessaire.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Le livre est-il adapté aux débutants ?</AccordionTrigger>
                      <AccordionContent>
                        Oui, le livre est conçu pour être accessible aux débutants tout en offrant des insights avancés pour les experts.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Y a-t-il une garantie ?</AccordionTrigger>
                      <AccordionContent>
                        Oui, nous offrons une garantie satisfait ou remboursé de 30 jours sur tous nos produits.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            {/* Purchase Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <div className="text-center">
                    {isIABusinessMastery && (
                      <Badge className="bg-red-500 text-white mb-4">
                        OFFRE LIMITÉE - {discount}% DE RÉDUCTION
                      </Badge>
                    )}
                    <CardTitle className="text-2xl">{ebook.title}</CardTitle>
                    <CardDescription>Par {ebook.author}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Pricing */}
                  <div className="text-center">
                    {isIABusinessMastery ? (
                      <div>
                        <div className="text-4xl font-bold text-green-600 mb-2">
                          {launchPrice}€
                        </div>
                        <div className="text-lg text-gray-500 line-through">
                          {originalPrice}€
                        </div>
                        <div className="text-sm text-red-600 font-semibold">
                          Économisez {originalPrice - launchPrice}€
                        </div>
                      </div>
                    ) : (
                      <div className="text-4xl font-bold text-green-600">
                        {ebook.price}€
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Download className="w-4 h-4 mr-3 text-green-600" />
                      Téléchargement immédiat
                    </div>
                    <div className="flex items-center text-sm">
                      <Shield className="w-4 h-4 mr-3 text-green-600" />
                      Paiement 100% sécurisé
                    </div>
                    <div className="flex items-center text-sm">
                      <Lock className="w-4 h-4 mr-3 text-green-600" />
                      Accès à vie
                    </div>
                    <div className="flex items-center text-sm">
                      <Award className="w-4 h-4 mr-3 text-green-600" />
                      Garantie 30 jours
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    {hasPurchased ? (
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        <Download className="w-4 h-4 mr-2" />
                        Télécharger maintenant
                      </Button>
                    ) : (
                      <Button 
                        onClick={handlePurchase}
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 text-lg"
                      >
                        {isLoading ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        ) : (
                          <CreditCard className="w-4 h-4 mr-2" />
                        )}
                        {isLoading ? 'Traitement...' : 'Acheter maintenant'}
                      </Button>
                    )}
                    
                    <Button variant="outline" className="w-full">
                      <Eye className="w-4 h-4 mr-2" />
                      Aperçu gratuit (15 pages)
                    </Button>
                  </div>

                  {/* Timer for launch offer */}
                  {isIABusinessMastery && (
                    <div className="bg-red-50 p-4 rounded-lg text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Clock className="w-4 h-4 mr-2 text-red-600" />
                        <span className="text-sm font-semibold text-red-600">
                          Offre de lancement limitée
                        </span>
                      </div>
                      <p className="text-xs text-red-600">
                        Prix promotionnel valable jusqu'au 31 janvier 2025
                      </p>
                    </div>
                  )}

                  {/* Trust Signals */}
                  <div className="text-center text-xs text-gray-500 space-y-1">
                    <div className="flex items-center justify-center">
                      <Users className="w-3 h-3 mr-1" />
                      500+ entreprises font confiance à Dominiqk
                    </div>
                    <div>Paiement sécurisé par Stripe</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default EbookDetail;
