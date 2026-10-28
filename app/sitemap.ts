import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { features } from "@/content/features";
import { specialties } from "@/content/specialties";
import { compares } from "@/content/compare";
import { posts } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (p: string) => `${SITE.url}${p}`;
  const d = new Date(SITE.updated);
  const fixed: MetadataRoute.Sitemap = [
    { url: u(""), lastModified: d, changeFrequency: "weekly", priority: 1 },
    { url: u("/features"), lastModified: d, changeFrequency: "monthly", priority: 0.9 },
    { url: u("/specialties"), lastModified: d, changeFrequency: "monthly", priority: 0.8 },
    { url: u("/compare"), lastModified: d, changeFrequency: "monthly", priority: 0.7 },
    { url: u("/blog"), lastModified: d, changeFrequency: "weekly", priority: 0.7 },
    { url: u("/pricing"), lastModified: d, changeFrequency: "monthly", priority: 0.8 },
    { url: u("/chronic-care-software"), lastModified: new Date("2026-10-27"), changeFrequency: "monthly", priority: 0.9 },
    { url: u("/emr-software"), lastModified: new Date("2026-10-27"), changeFrequency: "monthly", priority: 0.9 },
    { url: u("/clinic-management-software"), lastModified: new Date("2026-10-27"), changeFrequency: "monthly", priority: 0.9 },
    { url: u("/ai-for-doctors"), lastModified: new Date("2026-10-27"), changeFrequency: "monthly", priority: 0.9 },
    { url: u("/digital-prescription"), lastModified: new Date("2026-10-27"), changeFrequency: "monthly", priority: 0.9 },
    { url: u("/compare/healthplix-alternatives"), lastModified: new Date("2026-10-27"), changeFrequency: "monthly", priority: 0.7 },
    { url: u("/compare/eka-care-alternatives"), lastModified: new Date("2026-10-27"), changeFrequency: "monthly", priority: 0.7 },
    { url: u("/compare/mocdoc-alternatives"), lastModified: new Date("2026-10-27"), changeFrequency: "monthly", priority: 0.7 },
    { url: u("/compare/drlogy-alternatives"), lastModified: new Date("2026-10-27"), changeFrequency: "monthly", priority: 0.7 },
    { url: u("/about"), lastModified: d, changeFrequency: "yearly", priority: 0.5 },
  ];
  const group = (base: string, items: { slug: string; updated: string }[], priority: number) =>
    items.map((i) => ({ url: u(`${base}/${i.slug}`), lastModified: new Date(i.updated), changeFrequency: "monthly" as const, priority }));
  return [
    ...fixed,
    ...group("/features", features, 0.9),
    ...group("/specialties", specialties, 0.8),
    ...group("/compare", compares, 0.7),
    ...group("/blog", posts, 0.6),
  ];
}
