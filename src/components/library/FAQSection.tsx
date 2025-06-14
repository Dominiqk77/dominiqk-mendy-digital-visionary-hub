
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "Combien de temps ai-je accès aux livres ?",
      answer: "Vous avez un accès à vie aux livres et à toutes les mises à jour futures. Une fois téléchargés, ils vous appartiennent pour toujours."
    },
    {
      question: "Les stratégies fonctionnent-elles vraiment ?",
      answer: "Absolument ! Ces stratégies ont été testées par plus de 500 entreprises avec un ROI moyen documenté de +250%. Nous offrons une garantie satisfait ou remboursé de 30 jours."
    },
    {
      question: "Puis-je appliquer ces méthodes à mon secteur ?",
      answer: "Oui, les stratégies sont conçues pour être applicables à tous les secteurs. Nous incluons des exemples concrets pour différents domaines d'activité."
    },
    {
      question: "Y a-t-il un support après l'achat ?",
      answer: "Bien sûr ! Vous bénéficiez de 6 mois de support expert par email pour toutes vos questions d'implémentation."
    },
    {
      question: "Les livres sont-ils régulièrement mis à jour ?",
      answer: "Oui, nous mettons à jour le contenu tous les 3-6 mois en fonction des évolutions technologiques. Toutes les mises à jour sont gratuites à vie."
    },
    {
      question: "Puis-je obtenir un remboursement ?",
      answer: "Absolument ! Nous offrons une garantie satisfait ou remboursé de 30 jours, sans questions posées. Votre satisfaction est notre priorité."
    },
    {
      question: "Les opportunités au Sénégal sont-elles réelles ?",
      answer: "Totalement vérifiées ! L'auteur vit au Sénégal depuis 11 ans et travaille directement avec l'écosystème local. Toutes les données sont vérifiées sur le terrain."
    },
    {
      question: "Quel niveau technique est requis ?",
      answer: "Aucun niveau technique spécifique n'est requis. Les guides sont conçus pour être accessibles aux entrepreneurs de tous niveaux, avec des explications claires et des exemples concrets."
    }
  ];

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
          <HelpCircle className="w-5 h-5 text-cyan-400 mr-2" />
          <span className="text-white font-medium">Questions Fréquentes</span>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Vos <span className="text-cyan-400">questions</span>, nos réponses
        </h3>
        <p className="text-lg text-blue-200 max-w-2xl mx-auto">
          Tout ce que vous devez savoir avant de transformer votre business
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm"
              >
                <AccordionTrigger className="text-white hover:text-cyan-300 px-6 py-4 text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-blue-200 px-6 pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
