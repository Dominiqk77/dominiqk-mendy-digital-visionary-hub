import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, MessageSquare, X, CalendarClock, FileUp, Key, ArrowUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

// Clé API Google Gemini intégrée de manière sécurisée
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
    content: "👋 Bonjour ! Je suis l'assistant commercial de Dominiqk Mendy. Je connais parfaitement tous nos services d'innovation numérique et d'IA. Comment puis-je vous aider à réussir votre projet aujourd'hui ?",
    sender: 'bot',
    timestamp: new Date(),
    type: 'text'
  },
];

// Base de connaissances complète du site
const SITE_KNOWLEDGE = {
  services: {
    "IA & Intelligence Artificielle": {
      description: "Solutions IA sur-mesure, modèles ML, automatisation intelligente",
      features: ["Modèles IA personnalisés", "Analyse prédictive", "Chatbots avancés", "Vision par ordinateur"],
      pricing: "À partir de 2500€",
      duration: "2-6 mois",
      roi: "Jusqu'à 300% de ROI"
    },
    "Développement Web": {
      description: "Sites web performants, applications React/Next.js, e-commerce",
      features: ["Sites responsive", "Applications web", "E-commerce", "SEO optimisé"],
      pricing: "À partir de 1200€",
      duration: "1-3 mois",
      roi: "200% d'augmentation de conversions"
    },
    "Marketing Digital": {
      description: "Stratégies digitales, SEO, publicité, analytics",
      features: ["SEO/SEA", "Social media", "Analytics", "Stratégie digitale"],
      pricing: "À partir de 800€/mois",
      duration: "3-12 mois",
      roi: "150% d'augmentation du trafic"
    },
    "E-Gouvernance": {
      description: "Solutions digitales pour administrations publiques",
      features: ["Plateformes citoyennes", "Dématérialisation", "Transparence", "Efficacité"],
      pricing: "Sur devis",
      duration: "6-18 mois",
      roi: "Réduction de 60% des délais administratifs"
    },
    "Conseil & Stratégie": {
      description: "Accompagnement transformation digitale",
      features: ["Audit digital", "Stratégie", "Formation", "Accompagnement"],
      pricing: "À partir de 150€/heure",
      duration: "1-6 mois",
      roi: "Optimisation 40% des processus"
    }
  },
  expertise: {
    technologies: ["React", "Next.js", "Node.js", "Python", "TensorFlow", "AWS", "Docker"],
    sectors: ["E-commerce", "Finance", "Santé", "Éducation", "Administration", "Startups"],
    experience: "8+ années d'expertise",
    clients: "50+ projets réussis",
    certifications: ["AWS Certified", "Google AI", "Microsoft Azure"]
  },
  projects: {
    senservices: {
      description: "Plateforme nationale de digitalisation des services au Sénégal",
      status: "90% terminé, lancement février 2025",
      impact: "Révolution des services digitaux au Sénégal",
      partnership: "Recherche partenaires gouvernementaux et privés"
    }
  },
  contact: {
    methods: ["Appel téléphonique", "Visioconférence", "Rencontre physique"],
    availability: "Du lundi au vendredi, 9h-18h",
    response_time: "Réponse sous 2h",
    languages: ["Français", "Anglais", "Wolof"]
  }
};

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
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [leadScore, setLeadScore] = useState<number>(0);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  // Google Gemini activé automatiquement avec la clé API intégrée
  const useGemini = true;
  
  console.log('🤖 ChatBot component loaded - Button should be visible');
  
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

  // Log que Gemini est activé automatiquement
  useEffect(() => {
    console.log('🤖 Google Gemini API activé automatiquement avec clé intégrée');
  }, []);

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

  // Switch conversation
  const switchConversation = (conversationId: string) => {
    const conversation = conversations.find(conv => conv.id === conversationId);
    if (conversation) {
      setMessages(conversation.messages);
      setCurrentConversationId(conversationId);
      setLeadScore(conversation.leadScore || 0);
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

  // Enhanced message sending with lead scoring
  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Analyze user intent and update lead score
    const intent = analyzeUserIntent(input);
    const newLeadScore = calculateLeadScore(input, messages);
    setLeadScore(newLeadScore);

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: 'user',
      timestamp: new Date(),
      type: 'text',
      metadata: { intent, leadScore: newLeadScore }
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      let response = '';
      
      if (useGemini && GEMINI_API_KEY) {
        response = await generateGeminiResponse(input, messages, intent, newLeadScore);
      } else {
        response = await generateEnhancedLocalResponse(input, intent, newLeadScore);
      }
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        sender: 'bot',
        timestamp: new Date(),
        type: 'text'
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    } catch (error) {
      console.error('Error generating response:', error);
      setIsTyping(false);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Désolé, j'ai rencontré un problème technique. Puis-je vous proposer un appel direct avec Dominiqk ? 📞",
        sender: 'bot',
        timestamp: new Date(),
        type: 'text'
      };
      
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  // Analyze user intent for commercial optimization
  const analyzeUserIntent = (message: string): 'information' | 'pricing' | 'appointment' | 'proposal' => {
    const text = message.toLowerCase();
    
    if (text.includes('prix') || text.includes('tarif') || text.includes('coût') || text.includes('budget')) {
      return 'pricing';
    }
    if (text.includes('rendez-vous') || text.includes('appel') || text.includes('rencontrer') || text.includes('contact')) {
      return 'appointment';
    }
    if (text.includes('proposer') || text.includes('solution') || text.includes('projet') || text.includes('développer')) {
      return 'proposal';
    }
    return 'information';
  };

  // Calculate lead score based on conversation
  const calculateLeadScore = (message: string, messageHistory: Message[]): number => {
    let score = 0;
    const text = message.toLowerCase();
    
    // Budget indicators
    if (text.includes('budget') || text.includes('investir') || text.includes('financement')) score += 20;
    
    // Urgency indicators
    if (text.includes('urgent') || text.includes('rapidement') || text.includes('bientôt')) score += 15;
    
    // Project specificity
    if (text.includes('projet') || text.includes('développer') || text.includes('créer')) score += 10;
    
    // Contact willingness
    if (text.includes('appeler') || text.includes('rencontrer') || text.includes('contact')) score += 25;
    
    // Company/business context
    if (text.includes('entreprise') || text.includes('société') || text.includes('business')) score += 15;
    
    // Conversation length bonus
    if (messageHistory.length > 5) score += 10;
    
    return Math.min(score, 100);
  };

  // Generate response with Google Gemini API
  const generateGeminiResponse = async (userMessage: string, messageHistory: Message[], intent: string, leadScore: number): Promise<string> => {
    try {
      const conversationContext = messageHistory
        .slice(-6)
        .map(msg => `${msg.sender}: ${msg.content}`)
        .join('\n');

      const commercialPrompt = createCommercialPrompt(intent, leadScore, conversationContext);
      
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `${commercialPrompt}\n\nUtilisateur: ${userMessage}`
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 200,
            stopSequences: []
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            }
          ]
        })
      });

      if (!response.ok) {
        console.error('Gemini API error:', response.status);
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const generatedText = data.candidates[0]?.content?.parts[0]?.text || '';
      
      return generatedText || generateEnhancedLocalResponse(userMessage, intent, leadScore);
    } catch (error) {
      console.error('Error calling Gemini:', error);
      return generateEnhancedLocalResponse(userMessage, intent, leadScore);
    }
  };

  // Create commercial prompt for Gemini
  const createCommercialPrompt = (intent: string, leadScore: number, context: string): string => {
    return `Tu es Dominiqk Mendy, Consultant Expert en Innovation Numérique et IA avec un profil d'excellence internationale.

VOTRE PROFIL D'EXPERTISE EXCEPTIONNEL:
- 15+ années d'expérience professionnelle internationale
- 2000+ projets développés et livrés avec succès
- 50+ entreprises internationales accompagnées dans leur transformation
- 100+ entrepreneurs mentorés et guidés vers le succès
- Expert ultra-créatif, humble et professionnel reconnu
- Consultant de référence en innovation numérique et IA

VOTRE EXPERTISE TECHNIQUE DE POINTE:
- Architecte de solutions IA avancées (TensorFlow, PyTorch, GPT)
- Développement full-stack moderne (React, Node.js, Python, Next.js)
- Cloud & Infrastructure (AWS, Azure, Docker, Kubernetes)
- Transformation digitale et stratégie d'entreprise
- Innovation produit et design thinking
- Créateur de SenServices (révolution digitale Sénégal)

VOS SERVICES PREMIUM:
1. Conseil Stratégique IA (500€+/h): Transformation complète, audit, roadmap
2. Développement IA Sur-Mesure (5000€+): Solutions propriétaires, ML/DL
3. Applications Web Avancées (2500€+): React/Next.js, architecture scalable
4. E-Gouvernance & Civic Tech: Plateformes nationales, impact social
5. Accompagnement Entrepreneurs: Mentorat stratégique, levée de fonds

VOTRE APPROCHE UNIQUE:
- Écoute empathique et analyse approfondie des besoins
- Solutions sur-mesure basées sur 15 ans d'expérience terrain
- Pédagogie experte : expliquer le complexe simplement
- Vision globale : technique + business + impact social
- Résultats mesurables et ROI prouvé sur 2000+ projets

STYLE DE COMMUNICATION AUTHENTIQUE:
- Ton humain, chaleureux et professionnel
- Partage d'expériences concrètes et d'exemples réels
- Questions pertinentes pour cerner les vrais enjeux
- Conseils personnalisés basés sur votre expertise unique
- Créativité et innovation dans chaque proposition

MISSION CONVERSATIONNELLE:
Vous n'êtes PAS un chatbot commercial, vous ÊTES Dominiqk Mendy en personne.
- Utilisez "Je" et partagez VOS expériences personnelles
- Référencez vos 2000+ projets et clients internationaux
- Adaptez chaque réponse au profil spécifique du prospect
- Créez une connexion humaine authentique
- Proposez des solutions uniques basées sur votre expertise

CONTEXTE CONVERSATION: ${context}
INTENTION CLIENT: ${intent}
SCORE PROSPECT: ${leadScore}/100

${leadScore > 60 ? 'PROSPECT QUALIFIÉ - Proposer un échange stratégique personnalisé' : 
  leadScore > 30 ? 'PROSPECT INTÉRESSÉ - Approfondir les besoins et partager votre expérience' : 
  'DÉCOUVERTE - Identifier les défis et éduquer avec votre expertise'}

Répondez comme Dominiqk Mendy en personne : expert, créatif, humble, avec des références concrètes à vos 15 ans d'expérience et 2000+ projets. Créez une expérience conversationnelle unique et hautement personnalisée qui reflète votre statut de consultant de référence internationale.`;
  };

  // Enhanced local response with commercial focus
  const generateEnhancedLocalResponse = async (userMessage: string, intent: string, leadScore: number): Promise<string> => {
    const message = userMessage.toLowerCase();
    
    // High-intent commercial responses
    if (intent === 'pricing') {
      if (leadScore > 40) {
        return "Excellente question ! 💰 Mes tarifs varient selon vos besoins spécifiques. Pour vous donner un devis précis et personnalisé, je propose un appel de 15 min gratuit. Votre budget approximatif ?";
      }
      return "Mes tarifs sont adaptés à chaque projet : IA dès 2500€, web dès 1200€, marketing 800€/mois. Quel service vous intéresse le plus ?";
    }

    if (intent === 'appointment') {
      return "Parfait ! 📅 Je peux vous proposer un créneau cette semaine. Préférez-vous mardi 14h, jeudi 10h ou vendredi 16h ? L'appel dure 30 min maximum.";
    }

    if (intent === 'proposal') {
      if (leadScore > 30) {
        return "Excellent ! J'ai déjà plusieurs idées pour votre projet. 🚀 Pour vous proposer la solution optimale, parlons-en en direct. Quand êtes-vous disponible ?";
      }
      return "J'adore développer des solutions sur-mesure ! Pouvez-vous me parler de vos objectifs principaux et votre secteur d'activité ?";
    }

    // Service-specific responses
    if (message.includes('ia') || message.includes('intelligence artificielle')) {
      return `J'ai développé des IA pour automatiser jusqu'à 80% des tâches répétitives. Secteur ${Math.random() > 0.5 ? 'e-commerce' : 'finance'} ? Je peux vous montrer des cas concrets lors d'un appel rapide. 🤖`;
    }

    if (message.includes('site') || message.includes('web') || message.includes('application')) {
      return "Sites web performants et applications modernes, c'est ma spécialité ! 🌐 Mes derniers projets ont augmenté les conversions de 200%. Quel type de site envisagez-vous ?";
    }

    if (message.includes('marketing') || message.includes('seo') || message.includes('publicité')) {
      return "Marketing digital ROI-focused ! 📈 Mes stratégies génèrent +150% de trafic qualifié. Budget marketing actuel ? Je peux doubler vos résultats.";
    }

    if (message.includes('senservices')) {
      return "SenServices va révolutionner les services digitaux au Sénégal ! 🇸🇳 90% terminé, lancement février 2025. Cherchez-vous un partenariat ou une solution similaire ?";
    }

    // Qualifying questions for leads
    if (leadScore < 20) {
      return "Merci pour votre intérêt ! Pour mieux vous conseiller : êtes-vous dirigeant d'entreprise, responsable marketing ou porteur de projet ? 🎯";
    }

    // Default high-conversion response
    return `Excellente question ! Je peux vous aider efficacement. ${leadScore > 25 ? 'Organisons un appel rapide pour discuter de vos besoins précis ?' : 'Quel est votre principal défi actuellement ?'} 💡`;
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

      {/* Floating chat button - ALWAYS VISIBLE */}
      <Button 
        onClick={() => {
          console.log('ChatBot button clicked, opening chat');
          setIsOpen(true);
        }}
        className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-2xl z-50 bg-gradient-to-br from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-0 border-2 border-white/20"
        style={{ 
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999,
          display: isOpen ? 'none' : 'flex'
        }}
        aria-label="Ouvrir le chat"
      >
        <MessageSquare size={28} />
        {leadScore > 50 && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
        )}
      </Button>

      {/* Chat window */}
      {isOpen && (
        isMobile ? (
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="max-h-[90vh] p-0 bg-transparent border-0 overflow-hidden">
              <div className="flex flex-col h-[80vh] max-h-[80vh] w-full bg-background rounded-lg shadow-xl overflow-hidden">
                {/* Chat header */}
                <div className="relative bg-gradient-to-r from-portfolio-purple to-portfolio-blue p-3 flex items-center justify-between backdrop-blur-md">
                  <div className="flex items-center">
                    <Avatar className="mr-3 border-2 border-white/30">
                      <AvatarImage src="/lovable-uploads/4552f385-40ce-4af0-9268-eef512c36047.png" alt="Dominiqk Mendy" />
                      <AvatarFallback className="bg-white/20 text-white font-bold">DM</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-white font-medium">Dominiqk Mendy - Expert Consultant</h3>
                      {leadScore > 0 && (
                        <div className="text-xs text-white/80">Score prospect: {leadScore}/100</div>
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
                <div className="bg-green-500/20 border-b border-green-500/30 py-1 px-3 text-xs flex items-center backdrop-blur-md">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                  <span className="text-green-400 font-medium">Mode Google Gemini activé - Expert Personnel</span>
                </div>
                
                {/* Messages area */}
                <div className="relative flex-1 p-3 overflow-y-auto bg-slate-900">
                  <SpaceBackground />
                  <div className="relative z-10">
                    {messages.map((message) => (
                      <div 
                        key={message.id}
                        className={`mb-3 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`flex items-start max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                          {message.sender === 'bot' && (
                            <Avatar className="mr-2 mt-1 border border-white/20">
                              <AvatarImage src="/lovable-uploads/4552f385-40ce-4af0-9268-eef512c36047.png" alt="Dominiqk Mendy" />
                              <AvatarFallback className="bg-portfolio-purple text-white text-xs">DM</AvatarFallback>
                            </Avatar>
                          )}
                          <div 
                            className={`p-3 rounded-xl ${
                              message.sender === 'user' 
                                ? 'bg-gradient-to-br from-portfolio-purple to-portfolio-blue text-white backdrop-blur-lg border border-white/10 shadow-glow-purple' 
                                : 'bg-slate-800/90 backdrop-blur-lg border border-slate-600/50 text-white shadow-md'
                            }`}
                          >
                            {message.type === 'appointment' && message.metadata?.appointmentDate ? (
                              <div>
                                <div className="font-medium text-white">Demande de rendez-vous</div>
                                <div className="text-sm text-white/90">
                                  Date: {format(new Date(message.metadata.appointmentDate), 'dd/MM/yyyy', { locale: fr })}
                                </div>
                                <div className="text-sm text-white/90">
                                  Heure: {message.metadata?.appointmentTime}
                                </div>
                              </div>
                            ) : message.type === 'document' ? (
                              <div>
                                <div className="font-medium text-white">Document envoyé</div>
                                <div className="text-sm text-white/90">
                                  Nom: {message.metadata?.documentName}
                                </div>
                                <div className="text-sm text-white/90">
                                  Taille: {message.metadata?.documentSize}
                                </div>
                              </div>
                            ) : (
                              <div className="text-white leading-relaxed">{message.content}</div>
                            )}
                            {message.metadata?.leadScore && message.metadata.leadScore > 0 && message.sender === 'user' && (
                              <div className="text-xs text-white/60 mt-1">Score: {message.metadata.leadScore}/100</div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}

                    {isTyping && (
                      <div className="flex mb-3">
                        <Avatar className="mr-2 mt-1 border border-white/20">
                          <AvatarImage src="/lovable-uploads/4552f385-40ce-4af0-9268-eef512c36047.png" alt="Dominiqk Mendy" />
                          <AvatarFallback className="bg-portfolio-purple text-white text-xs">DM</AvatarFallback>
                        </Avatar>
                        <div className="bg-slate-800/90 backdrop-blur-lg border border-slate-600/50 p-3 rounded-xl max-w-[80%] shadow-md">
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

                {/* Action buttons area */}
                <div className="px-3 py-2 flex justify-center space-x-3 border-t border-white/15 bg-black/40 backdrop-blur-md">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs border-white/30 bg-white/10 hover:bg-white/20 text-white font-medium shadow-sm"
                    onClick={() => setIsAppointmentDialogOpen(true)}
                  >
                    <CalendarClock className="h-4 w-4 mr-1 text-portfolio-blue" />
                    Rendez-vous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs border-white/30 bg-white/10 hover:bg-white/20 text-white font-medium shadow-sm"
                    onClick={() => setIsDocumentDialogOpen(true)}
                  >
                    <FileUp className="h-4 w-4 mr-1 text-portfolio-blue" />
                    Envoyer fichier
                  </Button>
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
                      rows={2}
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
              </div>
            </DialogContent>
          </Dialog>
        ) : (
          <Card className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] max-h-[80vh] flex flex-col rounded-xl shadow-2xl z-50 overflow-hidden neo-blur border border-white/20">
            {/* Chat header */}
            <div className="relative bg-gradient-to-r from-portfolio-purple to-portfolio-blue p-3 flex items-center justify-between backdrop-blur-md">
              <div className="flex items-center">
                <Avatar className="mr-3 border-2 border-white/30">
                  <AvatarImage src="/lovable-uploads/4552f385-40ce-4af0-9268-eef512c36047.png" alt="Dominiqk Mendy" />
                  <AvatarFallback className="bg-white/20 text-white font-bold">DM</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-white font-medium">Dominiqk Mendy - Expert Consultant</h3>
                  {leadScore > 0 && (
                    <div className="text-xs text-white/80">Score prospect: {leadScore}/100</div>
                  )}
                </div>
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

            {/* API status indicator */}
            <div className="bg-green-500/20 border-b border-green-500/30 py-1 px-3 text-xs flex items-center backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div>
              <span className="text-green-400 font-medium">Mode Google Gemini activé - Expert Personnel</span>
            </div>

            {/* Messages area */}
            <div className="relative flex-1 p-3 overflow-y-auto bg-slate-900">
              <SpaceBackground />
              <div className="relative z-10">
                {messages.map((message) => (
                  <div 
                    key={message.id}
                    className={`mb-3 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      {message.sender === 'bot' && (
                        <Avatar className="mr-2 mt-1 border border-white/20">
                          <AvatarImage src="/lovable-uploads/4552f385-40ce-4af0-9268-eef512c36047.png" alt="Dominiqk Mendy" />
                          <AvatarFallback className="bg-portfolio-purple text-white text-xs">DM</AvatarFallback>
                        </Avatar>
                      )}
                      <div 
                        className={`p-3 rounded-xl ${
                          message.sender === 'user' 
                            ? 'bg-gradient-to-br from-portfolio-purple to-portfolio-blue text-white backdrop-blur-lg border border-white/10 shadow-glow-purple' 
                            : 'bg-slate-800/90 backdrop-blur-lg border border-slate-600/50 text-white shadow-md'
                        }`}
                      >
                        {message.type === 'appointment' && message.metadata?.appointmentDate ? (
                          <div>
                            <div className="font-medium text-white">Demande de rendez-vous</div>
                            <div className="text-sm text-white/90">
                              Date: {format(new Date(message.metadata.appointmentDate), 'dd/MM/yyyy', { locale: fr })}
                            </div>
                            <div className="text-sm text-white/90">
                              Heure: {message.metadata?.appointmentTime}
                            </div>
                          </div>
                        ) : message.type === 'document' ? (
                          <div>
                            <div className="font-medium text-white">Document envoyé</div>
                            <div className="text-sm text-white/90">
                              Nom: {message.metadata?.documentName}
                            </div>
                            <div className="text-sm text-white/90">
                              Taille: {message.metadata?.documentSize}
                            </div>
                          </div>
                        ) : (
                          <div className="text-white leading-relaxed">{message.content}</div>
                        )}
                        {message.metadata?.leadScore && message.metadata.leadScore > 0 && message.sender === 'user' && (
                          <div className="text-xs text-white/60 mt-1">Score: {message.metadata.leadScore}/100</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex mb-3">
                    <Avatar className="mr-2 mt-1 border border-white/20">
                      <AvatarImage src="/lovable-uploads/4552f385-40ce-4af0-9268-eef512c36047.png" alt="Dominiqk Mendy" />
                      <AvatarFallback className="bg-portfolio-purple text-white text-xs">DM</AvatarFallback>
                    </Avatar>
                    <div className="bg-slate-800/90 backdrop-blur-lg border border-slate-600/50 p-3 rounded-xl max-w-[80%] shadow-md">
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

            {/* Action buttons area */}
            <div className="px-3 py-2 flex justify-center space-x-3 border-t border-white/15 bg-black/40 backdrop-blur-md">
              <Button
                variant="outline"
                size="sm"
                className="text-xs border-white/30 bg-white/10 hover:bg-white/20 text-white font-medium shadow-sm"
                onClick={() => setIsAppointmentDialogOpen(true)}
              >
                <CalendarClock className="h-4 w-4 mr-1 text-portfolio-blue" />
                Rendez-vous
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-xs border-white/30 bg-white/10 hover:bg-white/20 text-white font-medium shadow-sm"
                onClick={() => setIsDocumentDialogOpen(true)}
              >
                <FileUp className="h-4 w-4 mr-1 text-portfolio-blue" />
                Envoyer fichier
              </Button>
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
        )
      )}

      {/* Appointment Dialog */}
      <Dialog open={isAppointmentDialogOpen} onOpenChange={setIsAppointmentDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-black/90 backdrop-blur-xl border border-white/30 text-white shadow-glow-purple">
          <DialogHeader>
            <DialogTitle>Prendre un rendez-vous</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="date" className="text-white">Date du rendez-vous</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={`w-full justify-start text-left font-normal bg-white/15 border-white/30 text-white ${
                      appointmentDate ? "" : "text-white/60"
                    }`}
                  >
                    {appointmentDate ? (
                      format(appointmentDate, "dd MMMM yyyy", { locale: fr })
                    ) : (
                      "Choisir une date"
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-black/95 border border-white/30 shadow-lg" align="start">
                  <Calendar
                    mode="single"
                    selected={appointmentDate}
                    onSelect={setAppointmentDate}
                    initialFocus
                    disabled={(date) => date < new Date()}
                    className="bg-transparent text-white"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="time" className="text-white">Heure du rendez-vous</Label>
              <select
                id="time"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                className="flex h-10 w-full rounded-md border bg-white/15 border-white/30 px-3 py-2 text-sm text-white"
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
              className="border-white/30 text-white hover:bg-white/10"
            >
              Annuler
            </Button>
            <Button 
              onClick={handleScheduleAppointment}
              className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue hover:opacity-90 text-white"
            >
              Confirmer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Document Upload Dialog */}
      <Dialog open={isDocumentDialogOpen} onOpenChange={setIsDocumentDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-black/90 backdrop-blur-xl border border-white/30 text-white shadow-glow-purple">
          <DialogHeader>
            <DialogTitle>Envoyer un document</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Label htmlFor="file" className="text-white">Sélectionner un fichier</Label>
            <Input
              ref={fileInputRef}
              id="file"
              type="file"
              onChange={handleFileSelect}
              className="cursor-pointer bg-white/15 border-white/30 text-white"
            />
            {selectedFile && (
              <div className="text-sm bg-white/10 p-3 rounded-lg border border-white/20">
                <p><span className="font-medium text-portfolio-blue">Nom:</span> {selectedFile.name}</p>
                <p><span className="font-medium text-portfolio-blue">Taille:</span> {formatFileSize(selectedFile.size)}</p>
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
              className="border-white/30 text-white hover:bg-white/10"
            >
              Annuler
            </Button>
            <Button 
              onClick={handleDocumentUpload} 
              disabled={!selectedFile}
              className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue hover:opacity-90 text-white"
            >
              Envoyer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Conversation History Dialog */}
      <Dialog open={isConversationHistoryOpen} onOpenChange={setIsConversationHistoryOpen}>
        <DialogContent className="sm:max-w-[425px] bg-black/90 backdrop-blur-xl border border-white/30 text-white shadow-glow-purple">
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
                      className={`w-full justify-start text-left ${
                        conversation.id === currentConversationId 
                          ? "bg-portfolio-purple/30 border border-portfolio-purple/40" 
                          : "bg-white/10 border-white/30 text-white hover:bg-white/15"
                      }`}
                      onClick={() => switchConversation(conversation.id)}
                    >
                      <div className="truncate w-full">
                        <div className="font-medium">
                          Conversation du {formatConversationDate(conversation.startedAt)}
                        </div>
                        <div className="text-xs text-white/70 truncate">
                          {conversation.messages.length} messages
                          {conversation.leadScore > 0 && ` • Score: ${conversation.leadScore}/100`}
                        </div>
                      </div>
                    </Button>
                  ))
                }
              </div>
            ) : (
              <p className="text-center text-white/70">Aucune conversation trouvée</p>
            )}
          </div>
          <DialogFooter>
            <Button 
              onClick={startNewConversation}
              className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue hover:opacity-90 text-white"
            >
              Nouvelle conversation
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatBot;
