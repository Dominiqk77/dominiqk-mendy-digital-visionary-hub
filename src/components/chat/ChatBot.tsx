
import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, MessageSquare, X, CalendarClock, FileUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'text' | 'appointment' | 'document';
  metadata?: {
    appointmentDate?: Date;
    appointmentTime?: string;
    documentName?: string;
    documentSize?: string;
  };
};

type Conversation = {
  id: string;
  messages: Message[];
  startedAt: Date;
  lastMessageAt: Date;
};

const initialMessages: Message[] = [
  {
    id: '1',
    content: "Bonjour ! Je suis l'assistant virtuel de Dominiqk Mendy. Comment puis-je vous aider aujourd'hui concernant les services d'innovation numérique, l'IA, ou les solutions digitales pour votre entreprise ?",
    sender: 'bot',
    timestamp: new Date(),
    type: 'text'
  },
];

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [currentConversationId, setCurrentConversationId] = useState<string>('');
  const [appointmentDate, setAppointmentDate] = useState<Date | undefined>(undefined);
  const [appointmentTime, setAppointmentTime] = useState<string>('');
  const [isAppointmentDialogOpen, setIsAppointmentDialogOpen] = useState(false);
  const [isDocumentDialogOpen, setIsDocumentDialogOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isConversationHistoryOpen, setIsConversationHistoryOpen] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Initialize new conversation or load existing one
  useEffect(() => {
    if (isOpen && !currentConversationId) {
      // Check if there are saved conversations in localStorage
      const savedConversations = localStorage.getItem('chatbotConversations');
      if (savedConversations) {
        const parsedConversations: Conversation[] = JSON.parse(savedConversations);
        setConversations(parsedConversations);
        
        // If there are existing conversations, use the most recent one
        if (parsedConversations.length > 0) {
          const mostRecent = parsedConversations.sort((a, b) => 
            new Date(b.lastMessageAt).getTime() - new Date(a.lastMessageAt).getTime()
          )[0];
          
          setCurrentConversationId(mostRecent.id);
          setMessages(mostRecent.messages);
        } else {
          // Create a new conversation
          createNewConversation();
        }
      } else {
        // Create a new conversation if none exists
        createNewConversation();
      }
    }
  }, [isOpen, currentConversationId]);

  // Create a new conversation
  const createNewConversation = () => {
    const newId = Date.now().toString();
    const newConversation: Conversation = {
      id: newId,
      messages: initialMessages,
      startedAt: new Date(),
      lastMessageAt: new Date()
    };
    
    setCurrentConversationId(newId);
    setMessages(initialMessages);
    setConversations(prev => [...prev, newConversation]);
    
    // Save to localStorage
    const updatedConversations = [...conversations, newConversation];
    localStorage.setItem('chatbotConversations', JSON.stringify(updatedConversations));
  };

  // Save conversation after messages update
  useEffect(() => {
    if (currentConversationId && messages.length > 0) {
      const updatedConversations = conversations.map(conv => {
        if (conv.id === currentConversationId) {
          return {
            ...conv,
            messages: messages,
            lastMessageAt: new Date()
          };
        }
        return conv;
      });
      
      setConversations(updatedConversations);
      localStorage.setItem('chatbotConversations', JSON.stringify(updatedConversations));
    }
  }, [messages]);

  // Switch conversation
  const switchConversation = (conversationId: string) => {
    const conversation = conversations.find(conv => conv.id === conversationId);
    if (conversation) {
      setMessages(conversation.messages);
      setCurrentConversationId(conversationId);
      setIsConversationHistoryOpen(false);
    }
  };

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

  // Handle sending a message
  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Create user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
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
          type: 'text'
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
        type: 'text'
      };
      
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  // Handle appointment booking
  const handleScheduleAppointment = () => {
    if (!appointmentDate || !appointmentTime) {
      toast({
        title: "Erreur",
        description: "Veuillez sélectionner une date et une heure",
        variant: "destructive",
      });
      return;
    }

    // Create appointment message
    const appointmentMessage: Message = {
      id: Date.now().toString(),
      content: `J'aimerais prendre un rendez-vous le ${format(appointmentDate, 'dd/MM/yyyy', { locale: fr })} à ${appointmentTime}.`,
      sender: 'user',
      timestamp: new Date(),
      type: 'appointment',
      metadata: {
        appointmentDate: appointmentDate,
        appointmentTime: appointmentTime
      }
    };

    // Update UI with appointment message
    setMessages(prev => [...prev, appointmentMessage]);
    setIsAppointmentDialogOpen(false);
    setIsTyping(true);

    // Simulate API call
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: `Merci pour votre demande de rendez-vous le ${format(appointmentDate, 'dd MMMM yyyy', { locale: fr })} à ${appointmentTime}. Votre demande a été enregistrée et vous recevrez une confirmation par email sous peu. Puis-je vous aider avec autre chose ?`,
        sender: 'bot',
        timestamp: new Date(),
        type: 'text'
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      
      // Reset appointment fields
      setAppointmentDate(undefined);
      setAppointmentTime('');
      
      toast({
        title: "Rendez-vous programmé",
        description: `Votre rendez-vous a été demandé pour le ${format(appointmentDate, 'dd/MM/yyyy', { locale: fr })} à ${appointmentTime}`,
      });
    }, 1500);
  };

  // Handle document upload
  const handleDocumentUpload = () => {
    if (!selectedFile) {
      toast({
        title: "Erreur",
        description: "Veuillez sélectionner un fichier à envoyer",
        variant: "destructive",
      });
      return;
    }

    // Create document message
    const documentMessage: Message = {
      id: Date.now().toString(),
      content: `J'ai envoyé le document: ${selectedFile.name}`,
      sender: 'user',
      timestamp: new Date(),
      type: 'document',
      metadata: {
        documentName: selectedFile.name,
        documentSize: formatFileSize(selectedFile.size)
      }
    };

    // Update UI with document message
    setMessages(prev => [...prev, documentMessage]);
    setIsDocumentDialogOpen(false);
    setIsTyping(true);

    // Simulate API call
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: `Merci pour l'envoi de votre document "${selectedFile.name}". Il a bien été reçu et sera examiné rapidement. Avez-vous des questions concernant ce document ?`,
        sender: 'bot',
        timestamp: new Date(),
        type: 'text'
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      
      // Reset file selection
      setSelectedFile(null);
      
      toast({
        title: "Document envoyé",
        description: `Votre document "${selectedFile.name}" a bien été envoyé`,
      });
    }, 1500);
  };

  // Format file size
  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' bytes';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };

  // Handle file selection
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  // Start a new conversation
  const startNewConversation = () => {
    createNewConversation();
    setIsConversationHistoryOpen(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Format date for conversation history
  const formatConversationDate = (date: Date | string): string => {
    const conversationDate = typeof date === 'string' ? new Date(date) : date;
    return format(conversationDate, 'dd/MM/yyyy HH:mm', { locale: fr });
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
            <div className="flex">
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:bg-white/20 mr-1"
                onClick={() => setIsConversationHistoryOpen(true)}
                title="Historique des conversations"
              >
                <MessageSquare size={16} />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:bg-white/20"
                onClick={() => setIsOpen(false)}
              >
                <X size={18} />
              </Button>
            </div>
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
                  {message.type === 'appointment' && message.metadata?.appointmentDate ? (
                    <div>
                      <div className="font-medium">Demande de rendez-vous</div>
                      <div className="text-sm">
                        Date: {format(new Date(message.metadata.appointmentDate), 'dd/MM/yyyy', { locale: fr })}
                      </div>
                      <div className="text-sm">
                        Heure: {message.metadata.appointmentTime}
                      </div>
                    </div>
                  ) : message.type === 'document' ? (
                    <div>
                      <div className="font-medium">Document envoyé</div>
                      <div className="text-sm">
                        Nom: {message.metadata?.documentName}
                      </div>
                      <div className="text-sm">
                        Taille: {message.metadata?.documentSize}
                      </div>
                    </div>
                  ) : (
                    message.content
                  )}
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

          {/* Action buttons area */}
          <div className="px-3 py-1 flex justify-center space-x-2 border-t border-gray-700 bg-black/30">
            <Button
              variant="outline"
              size="sm"
              className="text-xs border-gray-700 hover:bg-gray-800"
              onClick={() => setIsAppointmentDialogOpen(true)}
            >
              <CalendarClock className="h-4 w-4 mr-1" />
              Rendez-vous
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="text-xs border-gray-700 hover:bg-gray-800"
              onClick={() => setIsDocumentDialogOpen(true)}
            >
              <FileUp className="h-4 w-4 mr-1" />
              Envoyer fichier
            </Button>
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

          {/* Appointment Dialog */}
          <Dialog open={isAppointmentDialogOpen} onOpenChange={setIsAppointmentDialogOpen}>
            <DialogContent className="sm:max-w-[425px] bg-background text-foreground">
              <DialogHeader>
                <DialogTitle>Prendre un rendez-vous</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="date">Date du rendez-vous</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={`w-full justify-start text-left font-normal ${
                          appointmentDate ? "" : "text-muted-foreground"
                        }`}
                      >
                        {appointmentDate ? (
                          format(appointmentDate, "dd MMMM yyyy", { locale: fr })
                        ) : (
                          "Choisir une date"
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={appointmentDate}
                        onSelect={setAppointmentDate}
                        initialFocus
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="time">Heure du rendez-vous</Label>
                  <select
                    id="time"
                    value={appointmentTime}
                    onChange={(e) => setAppointmentTime(e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="">Sélectionner une heure</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                  </select>
                </div>
              </div>
              <DialogFooter>
                <Button 
                  variant="outline" 
                  onClick={() => setIsAppointmentDialogOpen(false)}
                >
                  Annuler
                </Button>
                <Button onClick={handleScheduleAppointment}>
                  Confirmer
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Document Upload Dialog */}
          <Dialog open={isDocumentDialogOpen} onOpenChange={setIsDocumentDialogOpen}>
            <DialogContent className="sm:max-w-[425px] bg-background text-foreground">
              <DialogHeader>
                <DialogTitle>Envoyer un document</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Label htmlFor="file">Sélectionner un fichier</Label>
                <Input
                  ref={fileInputRef}
                  id="file"
                  type="file"
                  onChange={handleFileSelect}
                  className="cursor-pointer"
                />
                {selectedFile && (
                  <div className="text-sm">
                    <p><span className="font-medium">Nom:</span> {selectedFile.name}</p>
                    <p><span className="font-medium">Taille:</span> {formatFileSize(selectedFile.size)}</p>
                  </div>
                )}
              </div>
              <DialogFooter>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setIsDocumentDialogOpen(false);
                    setSelectedFile(null);
                  }}
                >
                  Annuler
                </Button>
                <Button onClick={handleDocumentUpload} disabled={!selectedFile}>
                  Envoyer
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* Conversation History Dialog */}
          <Dialog open={isConversationHistoryOpen} onOpenChange={setIsConversationHistoryOpen}>
            <DialogContent className="sm:max-w-[425px] bg-background text-foreground">
              <DialogHeader>
                <DialogTitle>Historique des conversations</DialogTitle>
              </DialogHeader>
              <div className="py-4 max-h-[300px] overflow-y-auto">
                {conversations.length > 0 ? (
                  <div className="space-y-2">
                    {conversations
                      .sort((a, b) => new Date(b.lastMessageAt).getTime() - new Date(a.lastMessageAt).getTime())
                      .map(conversation => (
                        <Button
                          key={conversation.id}
                          variant={conversation.id === currentConversationId ? "secondary" : "outline"}
                          className="w-full justify-start text-left"
                          onClick={() => switchConversation(conversation.id)}
                        >
                          <div className="truncate w-full">
                            <div className="font-medium">
                              Conversation du {formatConversationDate(conversation.startedAt)}
                            </div>
                            <div className="text-xs text-muted-foreground truncate">
                              {conversation.messages.length} messages
                            </div>
                          </div>
                        </Button>
                      ))
                    }
                  </div>
                ) : (
                  <p className="text-center text-muted-foreground">Aucune conversation trouvée</p>
                )}
              </div>
              <DialogFooter>
                <Button onClick={startNewConversation}>
                  Nouvelle conversation
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
    return "Nos tarifs sont adaptés à chaque projet. Pour une offre personnalisée, je peux organiser un appel avec Dominiqk Mendy. Souhaitez-vous planifier un rendez-vous rapide pour en discuter?";
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
    return "Je serais ravi d'organiser un entretien avec Dominiqk Mendy. Vous pouvez utiliser le bouton 'Rendez-vous' ci-dessous pour choisir une date et heure qui vous conviennent. Ou préférez-vous être contacté par email ?";
  }

  if (message.includes('document') || message.includes('fichier') || message.includes('envoyer')) {
    return "Vous pouvez facilement nous envoyer des documents en utilisant le bouton 'Envoyer fichier' ci-dessous. Nous les examinerons rapidement et reviendrons vers vous avec des commentaires.";
  }

  if (message.includes('senservices')) {
    return "SenServices est notre plateforme nationale révolutionnaire pour la digitalisation des services au Sénégal. Le projet est complété à 90% et nous recherchons activement des partenariats avec l'État sénégalais et des entreprises privées. Souhaitez-vous en savoir plus sur les opportunités de collaboration ?";
  }

  // Default response for other queries
  return "Merci pour votre question. Pour vous apporter la meilleure réponse, Dominiqk serait ravi d'en discuter lors d'un appel personnalisé. Vous pouvez utiliser le bouton 'Rendez-vous' ci-dessous pour planifier un entretien rapide, ou m'indiquer votre disponibilité.";
};

export default ChatBot;
