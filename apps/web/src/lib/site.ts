export const SITE = {
  url: "https://www.medaurion.com",
  name: "medaurion",
  product: "medaurion AIOS",
  tagline: "Know what changed before the patient sits down.",
  description:
    "medaurion AIOS is patient intelligence for Indian clinics: a 60-second patient brief, lab result comparison, follow-up tracking and AI-drafted notes that the doctor approves.",
  locale: "en_IN",
  ogImage: "/og-image.png",
  updated: "2026-10-29",
} as const;

export function absoluteUrl(path = "/") {
  return `${SITE.url}${path === "/" ? "" : path}`;
}
