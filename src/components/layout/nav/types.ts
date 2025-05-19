
export interface NavigationItem {
  name: string;
  href: string;
  dropdown?: boolean;
  children?: {
    name: string;
    href: string;
  }[];
}
