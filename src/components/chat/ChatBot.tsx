
import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, MessageSquare, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: '1',
    content: "Bonjour ! Je suis l'assistant virtuel de Dominiqk Mendy. Comment puis-je vous aider aujourd'hui concernant les services d'innovation numérique, l'IA, ou les solutions digitales pour votre entreprise ?",
    sender: 'bot',
    timestamp: new Date(),
  },
];

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus on input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Create user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
    };

    // Update UI with user message
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      // Simulate API call with timeout
      setTimeout(async () => {
        const response = await generateResponse(input);
        
        // Add bot message
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: response,
          sender: 'bot',
          timestamp: new Date(),
        };
        
        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000);
    } catch (error) {
      console.error('Error generating response:', error);
      setIsTyping(false);
      
      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Désolé, j'ai rencontré un problème. Veuillez réessayer ou me contacter directement via le formulaire de contact.",
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating chat button */}
      {!isOpen && (
        <Button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg z-50 space-button text-white p-0"
        >
          <MessageSquare size={24} />
        </Button>
      )}

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] max-h-[80vh] flex flex-col rounded-lg shadow-xl z-50 border-gradient border-gradient-light overflow-hidden">
          {/* Chat header */}
          <div className="bg-gradient-primary p-3 flex items-center justify-between">
            <div className="flex items-center">
              <Bot className="text-white mr-2" size={20} />
              <h3 className="text-white font-medium">Assistant de Dominiqk</h3>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:bg-white/20"
              onClick={() => setIsOpen(false)}
            >
              <X size={18} />
            </Button>
          </div>

          {/* Messages area */}
          <div className="flex-1 p-3 overflow-y-auto bg-gradient-to-b from-gray-900/50 to-black/70 backdrop-blur-sm">
            {messages.map((message) => (
              <div 
                key={message.id}
                className={`mb-3 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user' 
                      ? 'bg-primary text-white rounded-br-none' 
                      : 'bg-secondary/10 border border-gray-700 rounded-bl-none'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex mb-3">
                <div className="bg-secondary/10 border border-gray-700 p-3 rounded-lg rounded-bl-none max-w-[80%]">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="p-3 border-t border-gray-700 bg-black/50">
            <div className="flex">
              <Textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Posez votre question..."
                className="resize-none bg-background border-gray-700 focus:border-primary"
                rows={1}
              />
              <Button 
                onClick={handleSendMessage}
                disabled={isTyping || !input.trim()}
                className="ml-2 space-button text-white"
                size="icon"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

// This function will generate responses based on user input
// In a real implementation, this would call an API endpoint
const generateResponse = async (userMessage: string): Promise<string> => {
  const message = userMessage.toLowerCase();
  
  // Simple response logic - in a real implementation, this would call GPT or another AI service
  if (message.includes('bonjour') || message.includes('salut') || message.includes('hello')) {
    return "Bonjour ! Comment puis-je vous aider aujourd'hui avec les services d'innovation numérique de Dominiqk Mendy?";
  }
  
  if (message.includes('tarif') || message.includes('prix') || message.includes('coût') || message.includes('cout')) {
    return "Nos tarifs sont adaptés à chaque projet. Pour une offre personnalisée, je peux organiser un appel avec Dominiqk Mendy. Souhaitez-vous qu'on vous contacte pour en discuter?";
  }
  
  if (message.includes('service') || message.includes('offre')) {
    return "Dominiqk Mendy propose plusieurs services d'excellence : développement IA sur-mesure, création web avancée, marketing digital stratégique, et conseil en transformation numérique. Sur quel aspect puis-je vous renseigner plus en détail ?";
  }
  
  if (message.includes('ia') || message.includes('intelligence artificielle')) {
    return "Dominiqk Mendy est expert en solutions IA personnalisées. Nous créons des modèles d'IA pour automatisation, analyse prédictive et assistants virtuels. Avez-vous un projet spécifique en tête ?";
  }

  if (message.includes('web') || message.includes('site') || message.includes('application')) {
    return "Notre équipe développe des sites web et applications performants, esthétiques et optimisés pour le SEO. Cherchez-vous à créer une nouvelle plateforme ou à améliorer une existante ?";
  }

  if (message.includes('contact') || message.includes('rendez-vous') || message.includes('appel')) {
    return "Je serais ravi d'organiser un entretien avec Dominiqk Mendy. Pourriez-vous me partager votre numéro ou email pour que nous puissions vous contacter rapidement ?";
  }

  if (message.includes('senservices')) {
    return "SenServices est notre plateforme nationale révolutionnaire pour la digitalisation des services au Sénégal. Le projet est complété à 90% et nous recherchons activement des partenariats avec l'État sénégalais et des entreprises privées. Souhaitez-vous en savoir plus sur les opportunités de collaboration ?";
  }

  // Default response for other queries
  return "Merci pour votre question. Pour vous apporter la meilleure réponse, Dominiqk serait ravi d'en discuter lors d'un appel personnalisé. Souhaitez-vous planifier un entretien rapide ?";
};

export default ChatBot;
