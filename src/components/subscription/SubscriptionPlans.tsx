
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Zap, Crown, Building, Star, Rocket, Timer, Gift, Award, TrendingUp, Infinity, Target, Shield, Diamond } from 'lucide-react';
import { useSubscription } from '@/hooks/useSubscription';

const plans = [
  {
    id: 'free',
    name: 'Découverte',
    price: 'GRATUIT',
    originalPrice: null,
    priceId: null, // Free plan
    icon: Gift,
    description: 'Testez notre CRM révolutionnaire',
    popular: false,
    exclusive: false,
    savings: null,
    badge: '🎁 GRATUIT',
    badgeColor: 'bg-green-500',
    gradient: 'from-green-500 to-emerald-600',
    features: [
      '1 projet de test',
      '5 leads maximum',
      '50 appels API/mois',
      'Templates IA basiques',
      'Support communautaire',
      'Analytics de base',
      'Essai 7 jours'
    ],
    limits: { projects: 1, leads: 5, api_calls: 50 }
  },
  {
    id: 'pro',
    name: 'Formule Pro',
    price: '99€',
    originalPrice: '149€',
    priceId: 'price_1RUxYUCVhM2O2LkqfxyZg3mS',
    icon: Rocket,
    description: 'Pour entrepreneurs ambitieux',
    popular: true,
    exclusive: false,
    savings: 'ÉCONOMISEZ 50€/MOIS',
    badge: '🔥 PLUS POPULAIRE',
    badgeColor: 'bg-gradient-to-r from-orange-500 to-red-500',
    gradient: 'from-blue-600 to-purple-600',
    features: [
      '10 projets actifs',
      '500 leads qualifiés',
      '10 000 appels API/mois',
      'IA GPT-4 + tous templates',
      'Automatisations complètes',
      'Support prioritaire 24/7',
      'Analytics avancées',
      'Intégrations premium',
      'Formation personnalisée',
      'ROI garanti +200%'
    ],
    limits: { projects: 10, leads: 500, api_calls: 10000 }
  },
  {
    id: 'business',
    name: 'Formule Business',
    price: '299€',
    originalPrice: '399€',
    priceId: 'price_1RUxahCVhM2O2LkqRFJ1f6Ym',
    icon: Crown,
    description: 'Pour équipes et agences',
    popular: false,
    exclusive: false,
    savings: 'ÉCONOMISEZ 100€/MOIS',
    badge: '👑 MEILLEURE VALEUR',
    badgeColor: 'bg-gradient-to-r from-yellow-500 to-orange-500',
    gradient: 'from-purple-600 to-pink-600',
    features: [
      '50 projets actifs',
      '2 000 leads illimités',
      '50 000 appels API/mois',
      'IA sur-mesure + White-label',
      'Automatisations avancées',
      'Account manager dédié',
      'Analytics prédictives',
      'API complète',
      'Multi-utilisateurs (5 comptes)',
      'Onboarding VIP',
      'SLA 99.9% garanti'
    ],
    limits: { projects: 50, leads: 2000, api_calls: 50000 }
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '999€',
    originalPrice: '1499€',
    priceId: 'price_1RUxbYCVhM2O2LkqUaDGcsqe',
    icon: Diamond,
    description: 'Solution complète enterprise',
    popular: false,
    exclusive: true,
    savings: 'ÉCONOMISEZ 500€/MOIS',
    badge: '💎 EXCLUSIF VIP',
    badgeColor: 'bg-gradient-to-r from-purple-600 to-indigo-600',
    gradient: 'from-indigo-600 to-purple-800',
    features: [
      'Projets ILLIMITÉS',
      'Leads ILLIMITÉS',
      '500 000 appels API/mois',
      'IA personnalisée + développement',
      'Infrastructure dédiée',
      'Équipe support dédiée',
      'Consulting stratégique inclus',
      'Développements sur-mesure',
      'Utilisateurs illimités',
      'Formation équipe complète',
      'ROI garanti +500%',
      'Accès fondateur direct'
    ],
    limits: { projects: -1, leads: -1, api_calls: 500000 }
  }
];

export const SubscriptionPlans = () => {
  const { subscription, createCheckoutSession, openCustomerPortal } = useSubscription();

  const handleSubscribe = (priceId: string | null) => {
    if (!priceId) {
      // Free plan - redirect to auth
      window.location.href = '/auth';
      return;
    }
    createCheckoutSession(priceId);
  };

  return (
    <div className="space-y-8 relative">
      {/* Promotional Banner */}
      <div className="text-center space-y-6 mb-12">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-lg font-bold animate-pulse shadow-lg">
          <Timer className="w-5 h-5 mr-2" />
          🔥 PROMO FLASH -33% - Plus que 24h !
        </div>
        
        <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-6 border-2 border-green-300">
          <div className="text-2xl font-bold text-green-800 mb-2">
            🎯 GARANTIE ROI 300% ou REMBOURSÉ INTÉGRAL
          </div>
          <div className="text-green-700">
            + de 1000 entrepreneurs ont multiplié leur CA grâce à DOM CRM
          </div>
        </div>
        
        <div className="flex justify-center items-center space-x-8 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Check className="w-5 h-5 text-green-500" />
            <span className="font-semibold">✨ Essai GRATUIT 14 jours</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-green-500" />
            <span className="font-semibold">🛡️ Garantie 60 jours</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5 text-green-500" />
            <span className="font-semibold">🚀 Sans engagement</span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => {
          const PlanIcon = plan.icon;
          const isCurrentPlan = subscription?.subscription_tier?.toLowerCase() === plan.id;
          
          return (
            <div key={plan.id} className="relative group">
              {/* Popular/Exclusive Badge */}
              {(plan.popular || plan.exclusive) && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className={`${plan.badgeColor} text-white px-6 py-2 rounded-full text-sm font-bold animate-bounce shadow-lg`}>
                    {plan.badge}
                  </div>
                </div>
              )}
              
              {/* Savings Badge */}
              {plan.savings && (
                <div className="absolute -top-2 -right-2 z-20">
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                    {plan.savings}
                  </div>
                </div>
              )}

              <Card className={`h-full relative overflow-hidden transition-all duration-500 group-hover:scale-105 ${
                plan.popular 
                  ? 'border-4 border-orange-400 shadow-2xl shadow-orange-500/30 bg-gradient-to-br from-orange-50 to-red-50' 
                  : plan.exclusive
                  ? 'border-4 border-purple-400 shadow-2xl shadow-purple-500/30 bg-gradient-to-br from-purple-50 to-indigo-50'
                  : plan.id === 'free'
                  ? 'border-2 border-green-300 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50'
                  : 'border-2 border-blue-300 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50'
              }`}>
                
                {/* Animated Background Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                
                {/* Sparkle Effects */}
                {plan.popular && (
                  <div className="absolute top-4 right-4 text-yellow-400 animate-spin">
                    <Star className="w-6 h-6 fill-current" />
                  </div>
                )}
                
                <CardHeader className="text-center pb-4 relative z-10">
                  <div className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br ${plan.gradient} group-hover:scale-110 transition-transform shadow-lg`}>
                    <PlanIcon className="w-10 h-10 text-white" />
                  </div>
                  
                  <CardTitle className="flex items-center justify-center gap-2 text-2xl font-bold">
                    {plan.name}
                    {isCurrentPlan && (
                      <Badge className="bg-green-500 text-white text-xs animate-pulse">
                        ACTUEL
                      </Badge>
                    )}
                  </CardTitle>
                  
                  <CardDescription className="text-base font-medium text-gray-700">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="text-center mt-6 space-y-2">
                    {plan.originalPrice && (
                      <div className="text-2xl line-through text-gray-400 font-bold">
                        {plan.originalPrice}
                      </div>
                    )}
                    <div className={`text-5xl font-black ${
                      plan.id === 'free' ? 'text-green-600' :
                      plan.popular ? 'text-orange-600' :
                      plan.exclusive ? 'text-purple-600' : 'text-blue-600'
                    }`}>
                      {plan.price}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {plan.id === 'free' ? 'À vie' : 'par mois'}
                    </div>
                    {plan.originalPrice && (
                      <div className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">
                        -{Math.round(((parseInt(plan.originalPrice.replace('€', '')) - parseInt(plan.price.replace('€', ''))) / parseInt(plan.originalPrice.replace('€', ''))) * 100)}% AUJOURD'HUI !
                      </div>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0 relative z-10">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-800 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-4">
                    {subscription?.subscribed && isCurrentPlan ? (
                      <Button 
                        onClick={openCustomerPortal} 
                        variant="outline" 
                        className="w-full h-14 text-lg font-bold border-2"
                      >
                        <Crown className="mr-2 h-5 w-5" />
                        Gérer mon abonnement
                      </Button>
                    ) : (
                      <Button 
                        onClick={() => handleSubscribe(plan.priceId)} 
                        className={`w-full h-16 text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl ${
                          plan.popular 
                            ? 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white animate-pulse' 
                            : plan.exclusive
                            ? 'bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white'
                            : plan.id === 'free'
                            ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'
                            : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                        }`}
                      >
                        {plan.id === 'free' ? (
                          <>
                            <Gift className="mr-2 h-6 w-6" />
                            COMMENCER GRATUITEMENT
                          </>
                        ) : subscription?.subscribed ? (
                          <>
                            <TrendingUp className="mr-2 h-6 w-6" />
                            UPGRADE MAINTENANT
                          </>
                        ) : (
                          <>
                            <Rocket className="mr-2 h-6 w-6" />
                            {plan.popular ? 'DÉMARRER MAINTENANT !' : 'CHOISIR CE PLAN'}
                          </>
                        )}
                      </Button>
                    )}
                    
                    {/* Special offers */}
                    {plan.popular && (
                      <div className="text-center bg-orange-100 rounded-lg p-3 border border-orange-300">
                        <p className="text-orange-700 font-bold text-sm">
                          🎁 BONUS : Formation 1-on-1 OFFERTE (valeur 497€)
                        </p>
                      </div>
                    )}
                    
                    {plan.exclusive && (
                      <div className="text-center bg-purple-100 rounded-lg p-3 border border-purple-300">
                        <p className="text-purple-700 font-bold text-sm">
                          👑 VIP : Accès direct au fondateur + consulting inclus
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>

      {/* Trust Signals & Social Proof */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 mt-16">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            🏆 Rejoignez +1000 entrepreneurs qui explosent leur CA
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">+1000</div>
              <div className="text-sm text-gray-600">Clients actifs</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-600">300%</div>
              <div className="text-sm text-gray-600">ROI moyen</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-600">24/7</div>
              <div className="text-sm text-gray-600">Support premium</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-600">99.9%</div>
              <div className="text-sm text-gray-600">Uptime garanti</div>
            </div>
          </div>
          
          <div className="bg-green-100 rounded-xl p-6 border-2 border-green-300">
            <div className="text-lg font-bold text-green-800 mb-2">
              🔒 GARANTIE SATISFAIT OU REMBOURSÉ 60 JOURS
            </div>
            <div className="text-green-700">
              Testez DOM CRM sans risque. Si vous n'êtes pas 100% satisfait, nous vous remboursons intégralement.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
