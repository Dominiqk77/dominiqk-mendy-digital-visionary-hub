
-- Créer les tables pour l'e-bibliothèque (infrastructure isolée)
CREATE TABLE public.ebooks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT NOT NULL DEFAULT 'Dominiqk Mendy',
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  currency TEXT NOT NULL DEFAULT 'EUR',
  category TEXT NOT NULL,
  cover_image_url TEXT,
  file_url TEXT,
  preview_url TEXT,
  isbn TEXT,
  pages INTEGER,
  language TEXT DEFAULT 'fr',
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'draft')),
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Table des catégories d'ebooks
CREATE TABLE public.ebook_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  image_url TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Table des achats d'ebooks
CREATE TABLE public.ebook_purchases (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  ebook_id UUID REFERENCES public.ebooks(id) ON DELETE CASCADE,
  stripe_session_id TEXT,
  stripe_payment_intent_id TEXT,
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'refunded')),
  purchase_date TIMESTAMP WITH TIME ZONE DEFAULT now(),
  download_count INTEGER DEFAULT 0,
  max_downloads INTEGER DEFAULT 10,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(user_id, ebook_id)
);

-- Table des téléchargements d'ebooks
CREATE TABLE public.ebook_downloads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  purchase_id UUID REFERENCES public.ebook_purchases(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  ebook_id UUID REFERENCES public.ebooks(id) ON DELETE CASCADE,
  ip_address TEXT,
  user_agent TEXT,
  download_date TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Table pour le programme d'affiliation
CREATE TABLE public.affiliates (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  affiliate_code TEXT NOT NULL UNIQUE,
  commission_rate DECIMAL(5,2) DEFAULT 30.00,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'suspended')),
  total_sales DECIMAL(10,2) DEFAULT 0,
  total_commission DECIMAL(10,2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Table des commissions d'affiliation
CREATE TABLE public.affiliate_commissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  affiliate_id UUID REFERENCES public.affiliates(id) ON DELETE CASCADE,
  purchase_id UUID REFERENCES public.ebook_purchases(id) ON DELETE CASCADE,
  commission_amount DECIMAL(10,2) NOT NULL,
  commission_rate DECIMAL(5,2) NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'paid', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  paid_at TIMESTAMP WITH TIME ZONE
);

-- Activer RLS sur toutes les tables
ALTER TABLE public.ebooks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ebook_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ebook_purchases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ebook_downloads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.affiliates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.affiliate_commissions ENABLE ROW LEVEL SECURITY;

-- Politiques RLS pour ebooks (lecture publique, gestion admin)
CREATE POLICY "ebooks_select" ON public.ebooks FOR SELECT USING (status = 'active');
CREATE POLICY "ebooks_admin" ON public.ebooks FOR ALL USING (true);

-- Politiques RLS pour catégories (lecture publique)
CREATE POLICY "categories_select" ON public.ebook_categories FOR SELECT USING (true);

-- Politiques RLS pour achats (utilisateurs voient leurs achats)
CREATE POLICY "purchases_select" ON public.ebook_purchases FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "purchases_insert" ON public.ebook_purchases FOR INSERT WITH CHECK (user_id = auth.uid());
CREATE POLICY "purchases_update" ON public.ebook_purchases FOR UPDATE USING (user_id = auth.uid());

-- Politiques RLS pour téléchargements
CREATE POLICY "downloads_select" ON public.ebook_downloads FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "downloads_insert" ON public.ebook_downloads FOR INSERT WITH CHECK (user_id = auth.uid());

-- Politiques RLS pour affiliés
CREATE POLICY "affiliates_select" ON public.affiliates FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "affiliates_insert" ON public.affiliates FOR INSERT WITH CHECK (user_id = auth.uid());
CREATE POLICY "affiliates_update" ON public.affiliates FOR UPDATE USING (user_id = auth.uid());

-- Politiques RLS pour commissions
CREATE POLICY "commissions_select" ON public.affiliate_commissions 
FOR SELECT USING (affiliate_id IN (SELECT id FROM public.affiliates WHERE user_id = auth.uid()));

-- Insérer les catégories par défaut
INSERT INTO public.ebook_categories (name, slug, description) VALUES
('Intelligence Artificielle', 'intelligence-artificielle', 'Livres sur l''IA, Machine Learning et Deep Learning'),
('Business & Marketing', 'business-marketing', 'Stratégies business et marketing digital'),
('Transformation Digitale', 'transformation-digitale', 'Guide de transformation numérique des entreprises'),
('Développement', 'developpement', 'Programmation et développement logiciel'),
('Innovation', 'innovation', 'Innovation technologique et disruption');

-- Insérer le premier livre "IA Business Mastery"
INSERT INTO public.ebooks (
  title, 
  author, 
  description, 
  price, 
  currency, 
  category, 
  cover_image_url, 
  pages, 
  language, 
  featured
) VALUES (
  'IA Business Mastery',
  'Dominiqk Mendy',
  'Le guide ultime pour maîtriser l''Intelligence Artificielle dans le business. Plus de 15 ans d''expérience condensés en un manuel pratique pour transformer votre entreprise avec l''IA. Découvrez les stratégies utilisées par plus de 500 entreprises pour générer un ROI de +250%.',
  197.00,
  'EUR',
  'Intelligence Artificielle',
  '/lovable-uploads/ia-business-mastery-cover.jpg',
  350,
  'fr',
  true
);
