
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useSubscription } from '@/hooks/useSubscription';
import { 
  Crown, 
  Calendar, 
  TrendingUp, 
  Users, 
  FolderOpen, 
  Zap, 
  AlertCircle,
  CheckCircle,
  Settings,
  CreditCard,
  BarChart3,
  Rocket,
  Shield,
  Star,
  Gift
} from 'lucide-react';

export const SubscriptionStatus = () => {
  const { subscription, loading, openCustomerPortal, checkSubscription } = useSubscription();

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const getSubscriptionBadge = () => {
    if (!subscription?.subscribed) {
      return <Badge className="bg-gray-500">Gratuit</Badge>;
    }
    
    switch (subscription.subscription_tier?.toLowerCase()) {
      case 'pro':
        return <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">🚀 Pro</Badge>;
      case 'business':
        return <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white">👑 Business</Badge>;
      case 'enterprise':
        return <Badge className="bg-gradient-to-r from-indigo-600 to-purple-800 text-white">💎 Enterprise</Badge>;
      default:
        return <Badge className="bg-green-500">🎁 Découverte</Badge>;
    }
  };

  const getUsagePercentage = (current: number, limit: number) => {
    if (limit === -1) return 0; // Unlimited
    return Math.min((current / limit) * 100, 100);
  };

  const getUsageColor = (percentage: number) => {
    if (percentage < 60) return 'bg-green-500';
    if (percentage < 80) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-6">
      {/* Current Plan Status */}
      <Card className="border-2 border-primary/20 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Crown className="w-8 h-8 text-primary" />
              <div>
                <CardTitle className="text-2xl">Mon Abonnement DOM CRM</CardTitle>
                <CardDescription>Gérez et suivez votre plan actuel</CardDescription>
              </div>
            </div>
            {getSubscriptionBadge()}
          </div>
        </CardHeader>
        
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Plan actuel :</span>
                <span className="text-lg font-bold text-primary">
                  {subscription?.subscription_tier || 'Gratuit'}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="font-medium">Statut :</span>
                <div className="flex items-center space-x-2">
                  {subscription?.subscribed ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-green-600 font-medium">Actif</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-600 font-medium">Gratuit</span>
                    </>
                  )}
                </div>
              </div>
              
              {subscription?.subscription_end && (
                <div className="flex items-center justify-between">
                  <span className="font-medium">Renouvellement :</span>
                  <span className="text-sm">
                    {new Date(subscription.subscription_end).toLocaleDateString('fr-FR')}
                  </span>
                </div>
              )}
            </div>
            
            <div className="space-y-4">
              <Button 
                onClick={openCustomerPortal} 
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                size="lg"
              >
                <Settings className="mr-2 h-5 w-5" />
                Gérer mon abonnement
              </Button>
              
              <Button 
                onClick={checkSubscription} 
                variant="outline" 
                className="w-full"
                size="lg"
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                Actualiser le statut
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <FolderOpen className="w-5 h-5 text-blue-500" />
              <CardTitle className="text-lg">Projets</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">
                  {subscription?.usage_current?.projects || 0}
                </span>
                <span className="text-sm text-gray-500">
                  / {subscription?.plan_limits?.projects === -1 ? '∞' : subscription?.plan_limits?.projects || 1}
                </span>
              </div>
              {subscription?.plan_limits?.projects !== -1 && (
                <Progress 
                  value={getUsagePercentage(
                    subscription?.usage_current?.projects || 0, 
                    subscription?.plan_limits?.projects || 1
                  )} 
                  className="h-2"
                />
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-green-500" />
              <CardTitle className="text-lg">Leads</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">
                  {subscription?.usage_current?.leads || 0}
                </span>
                <span className="text-sm text-gray-500">
                  / {subscription?.plan_limits?.leads === -1 ? '∞' : subscription?.plan_limits?.leads || 5}
                </span>
              </div>
              {subscription?.plan_limits?.leads !== -1 && (
                <Progress 
                  value={getUsagePercentage(
                    subscription?.usage_current?.leads || 0, 
                    subscription?.plan_limits?.leads || 5
                  )} 
                  className="h-2"
                />
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-purple-500" />
              <CardTitle className="text-lg">API Calls</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">
                  {subscription?.usage_current?.api_calls || 0}
                </span>
                <span className="text-sm text-gray-500">
                  / {subscription?.plan_limits?.api_calls === -1 ? '∞' : (subscription?.plan_limits?.api_calls || 50)}
                </span>
              </div>
              {subscription?.plan_limits?.api_calls !== -1 && (
                <Progress 
                  value={getUsagePercentage(
                    subscription?.usage_current?.api_calls || 0, 
                    subscription?.plan_limits?.api_calls || 50
                  )} 
                  className="h-2"
                />
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upgrade Prompt for Free Users */}
      {!subscription?.subscribed && (
        <Card className="border-2 border-gradient-to-r from-orange-400 to-red-500 bg-gradient-to-r from-orange-50 to-red-50">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                🚀 Boostez votre business avec DOM CRM Pro !
              </h3>
              <p className="text-gray-700 max-w-md mx-auto">
                Débloquez toutes les fonctionnalités premium, l'IA avancée et multipliez votre chiffre d'affaires.
              </p>
              <div className="flex justify-center space-x-4">
                <Button 
                  className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white"
                  size="lg"
                >
                  <Star className="mr-2 h-5 w-5" />
                  Upgrade vers Pro - 99€/mois
                </Button>
              </div>
              <div className="text-sm text-gray-600">
                ✨ Essai gratuit 14 jours • 🛡️ Garantie 60 jours • 🚀 Sans engagement
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <BarChart3 className="w-5 h-5" />
            <span>Actions Rapides</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <CreditCard className="w-6 h-6" />
              <span className="text-sm">Facturation</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <Shield className="w-6 h-6" />
              <span className="text-sm">Sécurité</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <Gift className="w-6 h-6" />
              <span className="text-sm">Parrainage</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
