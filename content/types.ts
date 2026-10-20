export type Section = { h: string; p?: string[]; ul?: string[] };
export type Faq = { q: string; a: string };
export type ContentPage = {
  slug: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  keywords: string[];
  sections: Section[];
  faqs: Faq[];
  related?: { href: string; label: string }[];
  updated: string;
  readMinutes?: number;
};
