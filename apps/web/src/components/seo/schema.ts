import { SITE, absoluteUrl } from "@/lib/site";
import type { Faq } from "@/content/types";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: absoluteUrl("/medaurion-logo-square.png"),
  description: SITE.description,
  areaServed: "IN",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.product,
  url: SITE.url,
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE.url}/#organization` },
};

export const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${SITE.url}/#software`,
  name: SITE.product,
  applicationCategory: "HealthApplication",
  applicationSubCategory: "Clinic software · Patient intelligence",
  operatingSystem: "Web, Android, iOS (browser)",
  url: SITE.url,
  description: SITE.description,
  publisher: { "@id": `${SITE.url}/#organization` },
  audience: { "@type": "MedicalAudience", audienceType: "Doctors and clinic teams in India" },
};

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.href),
    })),
  };
}

export function articleSchema(p: { title: string; description: string; href: string; updated: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.description,
    mainEntityOfPage: absoluteUrl(p.href),
    datePublished: p.updated,
    dateModified: p.updated,
    inLanguage: "en-IN",
    author: { "@type": "Organization", name: "medaurion team", url: SITE.url },
    publisher: { "@id": `${SITE.url}/#organization` },
    image: absoluteUrl(SITE.ogImage),
  };
}
