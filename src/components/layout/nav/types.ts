
export interface NavigationItem {
  name: string;
  href: string;
  dropdown?: boolean;
  children?: {
    name: string;
    href: string;
  }[];
}

export interface NavItem {
  title: string;
  href: string;
  megaMenu?: MegaMenuItem[];
}

export interface MegaMenuItem {
  title: string;
  items: {
    title: string;
    href: string;
    description: string;
  }[];
}
