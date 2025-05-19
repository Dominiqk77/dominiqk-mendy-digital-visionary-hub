
import { ReactNode } from 'react';

export interface FooterNavItem {
  name: string;
  href: string;
}

export interface FooterNavSection {
  title: string;
  items: FooterNavItem[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface ContactInfo {
  email: string;
  location: string;
  phone?: string;
  hours?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  category: string;
  likes: number;
  comments: number;
  featured: boolean;
  content?: string;
}

export interface Category {
  id: string;
  name: string;
  icon?: ReactNode;
}
