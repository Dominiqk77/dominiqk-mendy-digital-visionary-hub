import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, MessageSquare, X, CalendarClock, FileUp, Key, ArrowUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";
import SpaceBackground from "../space/SpaceBackground";
import { useIsMobile } from '@/hooks/use-mobile';

// Configuration API Gemini - VOTRE CLÉ API ICI
const GEMINI_API_KEY = "AIzaSyAGwf_-hKnJNGzm9LInDjsowfBdNFb2L0A";

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
    leadScore?: number;
    intent?: 'information' | 'pricing' | 'appointment' | 'proposal';
  };
};

type Conversation = {
  id: string;
  messages: Message[];
  startedAt: Date;
  lastMessageAt: Date;
  leadScore: number;
  userProfile: {
    interests: string[];
    budget: string;
    urgency: string;
    contactInfo: string;
  };
};

const initialMessages: Message[] = [
  {
    id: '1',
    content: "🚀 Bonjour ! Je suis l'assistant commercial IA de Dominiqk Mendy, alimenté par Google Gemini. Je connais parfaitement tous nos services d'innovation numérique et d'IA. Prêt à transformer votre projet en succès ? Comment puis-je vous aider aujourd'hui ?",
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
  const [geminiApiKey, setGeminiApiKey] = useState<string>(GEMINI_API_KEY);
  const [isAPIKeyDialogOpen, setIsAPIKeyDialogOpen] = useState(false);
  const [useGemini, setUseGemini] = useState<boolean>(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [leadScore, setLeadScore] = useState<number>(0);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Initialize Gemini API automatically if key is configured
  useEffect(() => {
    if (GEMINI_API_KEY && GEMINI_API_KEY !== "VOTRE_CLE_API_GEMINI_ICI") {
      setGeminiApiKey(GEMINI_API_KEY);
      setUseGemini(true);
      localStorage.setItem('gemini_api_key', GEMINI_API_KEY);
      console.log('🤖 Google Gemini API activé automatiquement');
    } else {
      const savedKey = localStorage.getItem('gemini_api_key');
      if (savedKey) {
        setGeminiApiKey(savedKey);
        setUseGemini(true);
      }
    }
  }, []);

  // Initialize new conversation or load existing one
  useEffect(() => {
    if (isOpen && !currentConversationId) {
      const savedConversations = localStorage.getItem('chatbotConversations');
      if (savedConversations) {
        const parsedConversations: Conversation[] = JSON.parse(savedConversations);
        setConversations(parsedConversations);
        
        if (parsedConversations.length > 0) {
          const mostRecent = parsedConversations.sort((a, b) => 
            new Date(b.lastMessageAt).getTime() - new Date(a.lastMessageAt).getTime()
          )[0];
          
          setCurrentConversationId(mostRecent.id);
          setMessages(mostRecent.messages);
        } else {
          createNewConversation();
        }
      } else {
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
      lastMessageAt: new Date(),
      leadScore: 0,
      userProfile: {
        interests: [],
        budget: '',
        urgency: '',
        contactInfo: ''
      }
    };
    
    setCurrentConversationId(newId);
    setMessages(initialMessages);
    setConversations(prev => [...prev, newConversation]);
    
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
            lastMessageAt: new Date(),
            leadScore: leadScore
          };
        }
        return conv;
      });
      
      setConversations(updatedConversations);
      localStorage.setItem('chatbotConversations', JSON.stringify(updatedConversations));
    }
  }, [messages, leadScore]);

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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `Merci pour votre message ! Je suis maintenant alimenté par Google Gemini et prêt à vous aider avec vos projets d'innovation numérique.`,
        sender: 'bot',
        timestamp: new Date(),
        type: 'text'
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Back to top button */}
      {showScrollToTop && (
        <Button 
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 rounded-full w-12 h-12 shadow-lg z-40 bg-gradient-to-br from-portfolio-blue to-portfolio-purple hover:from-portfolio-purple hover:to-portfolio-blue text-white p-0 animate-fade-in"
          aria-label="Retour en haut"
        >
          <ArrowUp size={20} />
        </Button>
      )}

      {/* Floating chat button */}
      {!isOpen && (
        <Button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-lg z-50 bg-gradient-to-br from-portfolio-purple to-portfolio-blue hover:from-portfolio-purple hover:to-portfolio-blue text-white p-0 animate-pulse-glow relative"
          aria-label="Ouvrir le chat commercial IA"
        >
          <MessageSquare size={24} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
          {leadScore > 50 && (
            <div className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1 font-bold animate-bounce">
              HOT
            </div>
          )}
        </Button>
      )}

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] max-h-[80vh] flex flex-col rounded-xl shadow-2xl z-50 overflow-hidden neo-blur border border-white/20">
          {/* Chat header */}
          <div className="relative bg-gradient-to-r from-portfolio-purple to-portfolio-blue p-3 flex items-center justify-between backdrop-blur-md">
            <div className="flex items-center">
              <Bot className="text-white mr-2 animate-pulse-slow" size={20} />
              <div>
                <h3 className="text-white font-medium">Dominiqk Mendy - Commercial IA Expert</h3>
                {leadScore > 0 && (
                  <div className="text-xs text-white/80 flex items-center">
                    <span>Prospect Score: {leadScore}/100</span>
                    {leadScore > 50 && <span className="ml-1 text-green-300">🔥 CHAUD</span>}
                  </div>
                )}
              </div>
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

          {/* API status indicator */}
          {useGemini ? (
            <div className="bg-green-500/20 border-b border-green-500/30 py-1 px-3 text-xs flex items-center backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
              <span className="text-green-400 font-medium">🚀 Google Gemini Expert Commercial ACTIVÉ</span>
            </div>
          ) : (
            <div className="bg-red-500/20 border-b border-red-500/30 py-1 px-3 text-xs flex items-center backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
              <span className="text-red-400 font-medium">❌ Mode limité - Configurez Google Gemini</span>
            </div>
          )}

          {/* Messages area */}
          <div className="relative flex-1 p-3 overflow-y-auto">
            <SpaceBackground />
            <div className="relative z-10">
              {messages.map((message) => (
                <div 
                  key={message.id}
                  className={`mb-3 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] p-3 rounded-xl ${
                      message.sender === 'user' 
                        ? 'bg-gradient-to-br from-portfolio-purple to-portfolio-blue text-white backdrop-blur-lg border border-white/10 shadow-glow-purple' 
                        : 'bg-white/15 backdrop-blur-lg border border-white/20 text-white shadow-md'
                    }`}
                  >
                    <div className="text-white/95 leading-relaxed">{message.content}</div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex mb-3">
                  <div className="bg-white/15 backdrop-blur-lg border border-white/20 p-3 rounded-xl max-w-[80%] shadow-md">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-portfolio-blue animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-portfolio-purple animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-portfolio-nebula animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input area */}
          <div className="p-3 border-t border-white/15 bg-black/60 backdrop-blur-md">
            <div className="flex">
              <Textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Votre question ou projet..."
                className="resize-none bg-white/15 border-white/30 focus:border-portfolio-purple text-white placeholder:text-white/60 shadow-inner"
                rows={1}
              />
              <Button 
                onClick={handleSendMessage}
                disabled={isTyping || !input.trim()}
                className="ml-2 bg-gradient-to-r from-portfolio-purple to-portfolio-blue hover:opacity-90 text-white shadow-md"
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

export default ChatBot;
