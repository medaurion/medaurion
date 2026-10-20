import type { Metadata } from "next";
import { SITE } from "./site";

export function pageMeta(p: { title: string; description: string; path: string; type?: "website" | "article"; noindex?: boolean; keywords?: string[] }): Metadata {
  return {
    title: p.title,
    description: p.description,
    keywords: p.keywords,
    alternates: { canonical: p.path },
    openGraph: {
      type: p.type ?? "website",
      url: p.path,
      title: p.title,
      description: p.description,
      siteName: SITE.product,
      locale: SITE.locale,
      images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.product }],
    },
    twitter: { card: "summary_large_image", title: p.title, description: p.description, images: [SITE.ogImage] },
    robots: p.noindex ? { index: false, follow: true } : undefined,
  };
}
