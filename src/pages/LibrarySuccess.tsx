
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import PageContainer from '@/components/layout/PageContainer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const LibrarySuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const { toast } = useToast();

  const { data: verificationResult, isLoading } = useQuery({
    queryKey: ['verify-purchase', sessionId],
    queryFn: async () => {
      if (!sessionId) return null;

      const response = await fetch('/functions/v1/verify-ebook-purchase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sessionId }),
      });

      const result = await response.json();
      return result;
    },
    enabled: !!sessionId,
  });

  useEffect(() => {
    if (verificationResult?.success) {
      toast({
        title: "Achat confirmé !",
        description: "Votre livre est maintenant disponible au téléchargement.",
      });
    }
  }, [verificationResult, toast]);

  if (isLoading) {
    return (
      <PageContainer>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-lg">Vérification de votre achat...</p>
          </div>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="max-w-2xl w-full px-4">
          <Card className="text-center shadow-2xl">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-3xl text-green-700">
                Félicitations ! 🎉
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Votre achat a été confirmé</h2>
                <p className="text-gray-600">
                  Merci pour votre confiance ! Votre livre numérique est maintenant disponible.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Prochaines étapes :</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm">Un email de confirmation a été envoyé à votre adresse</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm">Votre livre est accessible dans "Ma Bibliothèque"</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-sm">Téléchargement illimité à vie</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger maintenant
                </Button>
                
                <Link to="/library" className="block">
                  <Button variant="outline" className="w-full">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Retour à la bibliothèque
                  </Button>
                </Link>
              </div>

              <div className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                <p className="mb-2">
                  <strong>Besoin d'aide ?</strong>
                </p>
                <p>
                  Contactez notre support à{' '}
                  <a href="mailto:support@dominiqkmendy.com" className="text-blue-600 hover:underline">
                    support@dominiqkmendy.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
};

export default LibrarySuccess;
