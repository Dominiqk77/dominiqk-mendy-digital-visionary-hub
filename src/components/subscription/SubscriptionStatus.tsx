
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { RefreshCw, Calendar, Zap, Users, FolderOpen } from 'lucide-react';
import { useSubscription } from '@/hooks/useSubscription';

export const SubscriptionStatus = () => {
  const { subscription, loading, checkSubscription, openCustomerPortal } = useSubscription();

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-8 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!subscription) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Statut de l'abonnement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Impossible de charger les informations d'abonnement.</p>
          <Button onClick={checkSubscription} variant="outline" className="mt-4">
            <RefreshCw className="w-4 h-4 mr-2" />
            Réessayer
          </Button>
        </CardContent>
      </Card>
    );
  }

  const isTrialActive = subscription.trial_ends_at && new Date(subscription.trial_ends_at) > new Date();
  const trialDaysLeft = isTrialActive 
    ? Math.ceil((new Date(subscription.trial_ends_at!).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
    : 0;

  const getUsagePercentage = (current: number, limit: number) => {
    if (limit === -1) return 0; // Unlimited
    return Math.min((current / limit) * 100, 100);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Statut de l'abonnement
            </div>
            <Button onClick={checkSubscription} variant="ghost" size="sm">
              <RefreshCw className="w-4 h-4" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Plan actuel:</span>
            <div className="flex items-center gap-2">
              <Badge variant={subscription.subscribed ? "default" : "secondary"}>
                {subscription.subscription_tier || (isTrialActive ? "Essai gratuit" : "Gratuit")}
              </Badge>
              {isTrialActive && (
                <Badge variant="outline">
                  {trialDaysLeft} jour{trialDaysLeft > 1 ? 's' : ''} restant{trialDaysLeft > 1 ? 's' : ''}
                </Badge>
              )}
            </div>
          </div>

          {subscription.subscription_end && (
            <div className="flex items-center justify-between">
              <span>Renouvellement:</span>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">
                  {new Date(subscription.subscription_end).toLocaleDateString('fr-FR')}
                </span>
              </div>
            </div>
          )}

          {subscription.subscribed && (
            <Button onClick={openCustomerPortal} className="w-full">
              Gérer l'abonnement
            </Button>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Utilisation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4" />
                Projets
              </span>
              <span className="text-sm text-muted-foreground">
                {subscription.usage_current?.projects || 0} / {subscription.plan_limits?.projects === -1 ? '∞' : subscription.plan_limits?.projects || 1}
              </span>
            </div>
            <Progress 
              value={getUsagePercentage(subscription.usage_current?.projects || 0, subscription.plan_limits?.projects || 1)} 
              className="h-2"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Leads
              </span>
              <span className="text-sm text-muted-foreground">
                {subscription.usage_current?.leads || 0} / {subscription.plan_limits?.leads === -1 ? '∞' : subscription.plan_limits?.leads || 5}
              </span>
            </div>
            <Progress 
              value={getUsagePercentage(subscription.usage_current?.leads || 0, subscription.plan_limits?.leads || 5)} 
              className="h-2"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Appels API
              </span>
              <span className="text-sm text-muted-foreground">
                {subscription.usage_current?.api_calls || 0} / {subscription.plan_limits?.api_calls === -1 ? '∞' : subscription.plan_limits?.api_calls || 100}
              </span>
            </div>
            <Progress 
              value={getUsagePercentage(subscription.usage_current?.api_calls || 0, subscription.plan_limits?.api_calls || 100)} 
              className="h-2"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
