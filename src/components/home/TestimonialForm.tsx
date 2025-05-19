
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Star, Globe, Check } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

// Define form validation schema
const testimonialSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  company: z.string().min(1, "Veuillez indiquer votre entreprise"),
  position: z.string().min(1, "Veuillez indiquer votre position"),
  country: z.string().min(1, "Veuillez indiquer votre pays"),
  quote: z.string().min(20, "Votre témoignage doit contenir au moins 20 caractères"),
  email: z.string().email("Email invalide").optional(),
  language: z.enum(["French", "English", "Spanish"]),
});

type TestimonialFormValues = z.infer<typeof testimonialSchema>;

const languages = [
  { value: "French", label: "Français", flag: "🇫🇷" },
  { value: "English", label: "English", flag: "🇬🇧" },
  { value: "Spanish", label: "Español", flag: "🇪🇸" },
];

// List of countries to select from
const countries = [
  { value: "France", label: "France", flag: "🇫🇷" },
  { value: "Morocco", label: "Morocco", flag: "🇲🇦" },
  { value: "United Kingdom", label: "United Kingdom", flag: "🇬🇧" },
  { value: "United States", label: "United States", flag: "🇺🇸" },
  { value: "Spain", label: "Spain", flag: "🇪🇸" },
  { value: "Canada", label: "Canada", flag: "🇨🇦" },
  { value: "Australia", label: "Australia", flag: "🇦🇺" },
  { value: "Germany", label: "Germany", flag: "🇩🇪" },
  { value: "Italy", label: "Italy", flag: "🇮🇹" },
  { value: "Mexico", label: "Mexico", flag: "🇲🇽" },
  { value: "Colombia", label: "Colombia", flag: "🇨🇴" },
  { value: "Argentina", label: "Argentina", flag: "🇦🇷" },
  { value: "Peru", label: "Peru", flag: "🇵🇪" },
  { value: "Senegal", label: "Senegal", flag: "🇸🇳" },
  { value: "Tunisia", label: "Tunisia", flag: "🇹🇳" },
  { value: "Ghana", label: "Ghana", flag: "🇬🇭" },
  { value: "Kenya", label: "Kenya", flag: "🇰🇪" },
  { value: "Côte d'Ivoire", label: "Côte d'Ivoire", flag: "🇨🇮" },
];

interface TestimonialFormProps {
  onSubmit: (data: TestimonialFormValues, rating: number) => void;
  onCancel: () => void;
}

const TestimonialForm = ({ onSubmit, onCancel }: TestimonialFormProps) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [countryOpen, setCountryOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<TestimonialFormValues>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      name: '',
      company: '',
      position: '',
      country: '',
      quote: '',
      email: '',
      language: 'French',
    },
  });

  const handleSubmit = (data: TestimonialFormValues) => {
    if (rating === 0) {
      form.setError('root', {
        message: "Veuillez indiquer une note"
      });
      return;
    }

    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      onSubmit(data, rating);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Cosmic particles decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={`particle-${i}`}
            className="absolute rounded-full bg-portfolio-purple/30 animate-float"
            style={{
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          {/* Rating Stars */}
          <div className="mb-8">
            <FormLabel className="block mb-3 text-white">Votre note</FormLabel>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="focus:outline-none transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-8 h-8 ${
                      (hoverRating || rating) >= star
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-500'
                    } transition-colors`}
                  />
                </button>
              ))}
              <span className="ml-2 text-gray-300 text-sm">
                {rating > 0 ? `${rating}/5` : 'Sélectionnez une note'}
              </span>
            </div>
            {form.formState.errors.root && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.root.message}</p>
            )}
          </div>

          {/* Two columns layout for form fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Nom complet</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Votre nom"
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email (optionnel)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Votre email"
                      type="email"
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-gray-500 text-xs">
                    Restera privé et ne sera pas publié
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Company Field */}
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Entreprise</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nom de votre entreprise"
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Position Field */}
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Fonction</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Votre poste actuel"
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Country Field */}
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Pays</FormLabel>
                  <Popover open={countryOpen} onOpenChange={setCountryOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        className="justify-between w-full bg-gray-900/50 border-gray-700 text-left font-normal text-white"
                      >
                        {field.value 
                          ? countries.find(country => country.value === field.value)?.label || "Sélectionnez un pays"
                          : "Sélectionnez un pays"}
                        <Globe className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0 bg-gray-900 border-gray-700 text-white">
                      <div className="max-h-[300px] overflow-y-auto">
                        {countries.map((country) => (
                          <div
                            key={country.value}
                            className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-800 ${field.value === country.value ? 'bg-portfolio-purple/20' : ''}`}
                            onClick={() => {
                              form.setValue('country', country.value);
                              setCountryOpen(false);
                            }}
                          >
                            <span className="mr-2">{country.flag}</span>
                            {country.label}
                            {field.value === country.value && (
                              <Check className="ml-auto h-4 w-4" />
                            )}
                          </div>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Language Field */}
            <FormField
              control={form.control}
              name="language"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Langue du témoignage</FormLabel>
                  <Popover open={langOpen} onOpenChange={setLangOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        role="combobox"
                        className="justify-between w-full bg-gray-900/50 border-gray-700 text-left font-normal text-white"
                      >
                        {field.value 
                          ? languages.find(lang => lang.value === field.value)?.label || "Sélectionnez une langue"
                          : "Sélectionnez une langue"}
                        <Globe className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0 bg-gray-900 border-gray-700 text-white">
                      <div className="max-h-[300px] overflow-y-auto">
                        {languages.map((lang) => (
                          <div
                            key={lang.value}
                            className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-800 ${field.value === lang.value ? 'bg-portfolio-purple/20' : ''}`}
                            onClick={() => {
                              form.setValue('language', lang.value as any);
                              setLangOpen(false);
                            }}
                          >
                            <span className="mr-2">{lang.flag}</span>
                            {lang.label}
                            {field.value === lang.value && (
                              <Check className="ml-auto h-4 w-4" />
                            )}
                          </div>
                        ))}
                      </div>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Testimonial Text */}
          <FormField
            control={form.control}
            name="quote"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Votre témoignage</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Partagez votre expérience de travail avec Dominiqk Mendy..."
                    className="bg-gray-900/50 border-gray-700 text-white min-h-[150px] placeholder:text-gray-500 resize-y"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="text-gray-500 text-xs">
                  Partagez votre expérience de travail, les résultats obtenus, ou tout autre feedback pertinent.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end gap-3 pt-4">
            <Button 
              type="button"
              variant="outline" 
              onClick={onCancel}
              className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
            >
              Annuler
            </Button>
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue hover:from-portfolio-purple/90 hover:to-portfolio-blue/90 text-white"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-t-transparent border-white"></div>
                  <span>Envoi en cours...</span>
                </div>
              ) : (
                <span>Soumettre mon avis</span>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default TestimonialForm;
