
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Crown, Building } from 'lucide-react';
import { useSubscription } from '@/hooks/useSubscription';

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 9,
    priceId: 'price_basic', // Remplacez par vos vrais price IDs Stripe
    icon: Zap,
    description: 'Parfait pour débuter',
    features: [
      '5 projets',
      '50 leads',
      '1000 appels API/mois',
      'Support email',
      'Templates de base'
    ],
    limits: { projects: 5, leads: 50, api_calls: 1000 }
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 19,
    priceId: 'price_premium', // Remplacez par vos vrais price IDs Stripe
    icon: Crown,
    description: 'Pour les professionnels',
    popular: true,
    features: [
      '25 projets',
      '500 leads',
      '10 000 appels API/mois',
      'Support prioritaire',
      'Tous les templates',
      'Automatisations avancées',
      'Analytics détaillées'
    ],
    limits: { projects: 25, leads: 500, api_calls: 10000 }
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 49,
    priceId: 'price_enterprise', // Remplacez par vos vrais price IDs Stripe
    icon: Building,
    description: 'Pour les équipes',
    features: [
      'Projets illimités',
      'Leads illimités',
      '100 000 appels API/mois',
      'Support dédié',
      'Intégrations personnalisées',
      'Formation incluse',
      'SLA garanti'
    ],
    limits: { projects: -1, leads: -1, api_calls: 100000 }
  }
];

export const SubscriptionPlans = () => {
  const { subscription, createCheckoutSession, openCustomerPortal } = useSubscription();

  const handleSubscribe = (priceId: string) => {
    createCheckoutSession(priceId);
  };

  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {plans.map((plan) => {
        const PlanIcon = plan.icon;
        const isCurrentPlan = subscription?.subscription_tier?.toLowerCase() === plan.id;
        
        return (
          <Card key={plan.id} className={`relative ${plan.popular ? 'border-2 border-primary' : ''}`}>
            {plan.popular && (
              <Badge className="absolute -top-2 left-1/2 -translate-x-1/2" variant="default">
                Populaire
              </Badge>
            )}
            
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <PlanIcon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="flex items-center justify-center gap-2">
                {plan.name}
                {isCurrentPlan && <Badge variant="secondary">Actuel</Badge>}
              </CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="text-3xl font-bold">
                {plan.price}€<span className="text-sm font-normal text-muted-foreground">/mois</span>
              </div>
            </CardHeader>
            
            <CardContent>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
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
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {subscription?.subscribed ? 'Changer de plan' : 'Commencer'}
                </Button>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
