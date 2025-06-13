
-- Mettre à jour le rôle de l'utilisateur actuel pour lui donner les droits admin
UPDATE public.user_roles 
SET role = 'admin' 
WHERE user_id = '8b817d69-502c-45e5-ad01-06db52318faf';

-- Vérification que la mise à jour a bien eu lieu
SELECT user_id, role FROM public.user_roles 
WHERE user_id = '8b817d69-502c-45e5-ad01-06db52318faf';
