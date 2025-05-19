
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
}
