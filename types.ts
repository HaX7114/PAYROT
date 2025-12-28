
export interface FeatureItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  imageUrl: string;
  linkText: string;
}

export interface FooterLink {
  label: string;
  href: string;
  isNew?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}
