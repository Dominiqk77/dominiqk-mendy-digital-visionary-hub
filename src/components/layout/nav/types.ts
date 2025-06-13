
export interface NavigationItem {
  name: string;
  href: string;
  dropdown?: boolean;
  children?: {
    name: string;
    href: string;
  }[];
}

export interface MegaMenuItem {
  title: string;
  items: {
    title: string;
    href: string;
    description: string;
  }[];
}
