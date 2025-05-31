
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Crown, Building, Star } from 'lucide-react';
import { useSubscription } from '@/hooks/useSubscription';

const plans = [
  {
    id: 'basic',
    name: 'Formule Basic',
    price: 49,
    priceId: 'prod_SPn8SR0l8UjIIJ',
    icon: Zap,
    description: 'Pour freelancers débutants',
    features: [
      '10 projets actifs',
      '100 leads qualifiés',
      '5 000 appels API/mois',
      'Templates IA premium',
      'Support email prioritaire',
      'Analytics de base',
      'Intégration CRM basique'
    ],
    limits: { projects: 10, leads: 100, api_calls: 5000 }
  },
  {
    id: 'premium',
    name: 'Formule Premium',
    price: 149,
    priceId: 'prod_SPnBgQ21hPR6JF',
    icon: Crown,
    description: 'Pour professionnels établis',
    popular: true,
    features: [
      '50 projets actifs',
      '1 000 leads qualifiés',
      '25 000 appels API/mois',
      'IA avancée + GPT-4',
      'Automatisations complètes',
      'Support téléphonique',
      'Analytics avancées',
      'Intégrations premium',
      'White-label disponible',
      'Formation incluse'
    ],
    limits: { projects: 50, leads: 1000, api_calls: 25000 }
  },
  {
    id: 'enterprise',
    name: 'Formule Enterprise',
    price: 399,
    priceId: 'prod_SPnB3KVZ9CvYjG',
    icon: Building,
    description: 'Pour agences et entreprises',
    features: [
      'Projets illimités',
      'Leads illimités',
      '100 000 appels API/mois',
      'IA sur-mesure',
      'Automatisations personnalisées',
      'Account manager dédié',
      'SLA 99.9% garanti',
      'API complète',
      'Intégrations sur-mesure',
      'Onboarding personnalisé',
      'Reporting exécutif'
    ],
    limits: { projects: -1, leads: -1, api_calls: 100000 }
  },
  {
    id: 'consultant',
    name: 'Consultant Expert',
    price: 999,
    priceId: 'prod_SPnBConsultant', // À créer dans Stripe
    icon: Star,
    description: 'Accompagnement premium personnalisé',
    exclusive: true,
    features: [
      'Tout de Enterprise +',
      '3h de consultation/mois',
      'Développement sur-mesure',
      'Stratégie digitale personnalisée',
      'Accès direct au fondateur',
      'Révision de projets',
      'Mentoring équipe',
      'ROI garanti',
      'Support 24/7',
      'Projets prioritaires'
    ],
    limits: { projects: -1, leads: -1, api_calls: 500000 }
  }
];

export const SubscriptionPlans = () => {
  const { subscription, createCheckoutSession, openCustomerPortal } = useSubscription();

  const handleSubscribe = (priceId: string) => {
    createCheckoutSession(priceId);
  };

  return (
    <div className="space-y-8">
      {/* Value proposition header */}
      <div className="text-center space-y-4 mb-8">
        <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
          🎯 ROI moyen de 300% dans les 6 premiers mois
        </div>
        <div className="flex justify-center items-center space-x-6 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Check className="w-4 h-4 text-green-500" />
            <span>Essai gratuit 14 jours</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="w-4 h-4 text-green-500" />
            <span>Garantie 30 jours</span>
          </div>
          <div className="flex items-center space-x-2">
            <Check className="w-4 h-4 text-green-500" />
            <span>Sans engagement</span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {plans.map((plan) => {
          const PlanIcon = plan.icon;
          const isCurrentPlan = subscription?.subscription_tier?.toLowerCase() === plan.id;
          
          return (
            <Card key={plan.id} className={`relative transition-all duration-300 hover:scale-105 ${
              plan.popular ? 'border-2 border-blue-500 shadow-lg' : 
              plan.exclusive ? 'border-2 border-yellow-500 shadow-lg bg-gradient-to-br from-yellow-50 to-orange-50' : 
              'border border-gray-200 hover:border-gray-300'
            }`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white">
                  Plus populaire
                </Badge>
              )}
              {plan.exclusive && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-white">
                  Exclusif
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  plan.exclusive ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
                  plan.popular ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 
                  'bg-gray-100'
                }`}>
                  <PlanIcon className={`w-8 h-8 ${
                    plan.exclusive || plan.popular ? 'text-white' : 'text-gray-600'
                  }`} />
                </div>
                
                <CardTitle className="flex items-center justify-center gap-2 text-lg">
                  {plan.name}
                  {isCurrentPlan && <Badge variant="secondary" className="text-xs">Actuel</Badge>}
                </CardTitle>
                
                <CardDescription className="text-sm text-gray-600">
                  {plan.description}
                </CardDescription>
                
                <div className="text-center mt-4">
                  <div className="text-4xl font-bold text-gray-900">
                    {plan.price}€
                  </div>
                  <div className="text-sm text-gray-500">par mois</div>
                  {plan.price >= 149 && (
                    <div className="text-xs text-green-600 mt-1">
                      Économisez 20% sur l'annuel
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-3">
                  {subscription?.subscribed && isCurrentPlan ? (
                    <Button 
                      onClick={openCustomerPortal} 
                      variant="outline" 
                      className="w-full"
                    >
                      Gérer l'abonnement
                    </Button>
                  ) : (
                    <Button 
                      onClick={() => handleSubscribe(plan.priceId)} 
                      className={`w-full ${
                        plan.exclusive ? 'bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700' :
                        plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : 
                        ''
                      }`}
                      variant={plan.popular || plan.exclusive ? "default" : "outline"}
                    >
                      {subscription?.subscribed ? 'Changer de plan' : 'Commencer maintenant'}
                    </Button>
                  )}
                  
                  {plan.exclusive && (
                    <div className="text-center">
                      <p className="text-xs text-gray-600">
                        Places limitées - Entretien préalable requis
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Trust signals */}
      <div className="text-center space-y-4 pt-8 border-t">
        <h3 className="text-lg font-semibold text-gray-900">
          Ils nous font confiance
        </h3>
        <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
          <div>✨ +500 projets réalisés</div>
          <div>🏆 98% de satisfaction client</div>
          <div>🚀 ROI moyen 300%</div>
          <div>⚡ Support réactif 24/7</div>
        </div>
      </div>
    </div>
  );
};
