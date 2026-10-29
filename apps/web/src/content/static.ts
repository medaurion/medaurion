import type { ContentPage } from "./types";

const U = "2026-10-20";

export const about: ContentPage = {
  slug: "about",
  seoTitle: "About medaurion | Patient Intelligence Built in India",
  description:
    "medaurion builds medaurion AIOS, patient intelligence for Indian doctors who follow patients for years. Our mission, our principles and how we work with clinics.",
  eyebrow: "ABOUT US",
  h1: "Built in India, for doctors who follow patients for years",
  lead:
    "medaurion AIOS is a patient-intelligence platform for chronic care. It reads reports, remembers what matters, shows what changed and keeps follow-ups on track, so the visit is spent on the patient, not on searching.",
  keywords: ["about medaurion", "medaurion AIOS", "patient intelligence India"],
  updated: U,
  sections: [
    { h: "Our north star", p: ["If this patient walks into my clinic right now, can medaurion tell me everything important before I start the consultation? Every feature we build answers that question."] },
    {
      h: "Our principles",
      ul: [
        "AI assists. The doctor decides. Nothing AI writes enters a record without the doctor's approval.",
        "Source data and AI text always look different, and every summary names its sources.",
        "We never sell patient data to pharma companies or advertisers.",
        "No fake numbers: estimates are labelled as estimates, and we only claim what is true.",
        "ABHA for identity linking, with consent. Never Aadhaar.",
      ],
    },
    { h: "Understand. Compare. Track. Act.", p: ["Understand the whole patient, compare what changed, track what happens next and act with confidence. These four steps shape the product."] },
    { h: "Where we are today", p: ["medaurion AIOS is in a free doctor pilot with a small number of clinics. We are measuring time saved and follow-ups recovered together with pilot doctors, and we will publish results only when they are real."] },
  ],
  faqs: [
    { q: "Who is medaurion AIOS for?", a: "Doctors and clinic teams in India who see many returning patients with long-term conditions such as diabetes, hypertension, thyroid, kidney, heart and lung conditions." },
    { q: "How can my clinic join the pilot?", a: "Use the pilot form on the home page. We will contact you to understand your clinic and set up a 12-week pilot." },
  ],
  related: [
    { href: "/features", label: "See all features" },
    { href: "/pricing", label: "Pricing" },
  ],
};

export const privacy: ContentPage = {
  slug: "privacy",
  seoTitle: "Privacy Policy (Draft) | medaurion",
  description: "Draft privacy policy for medaurion AIOS. Under legal review.",
  eyebrow: "PRIVACY",
  h1: "Privacy policy (draft)",
  lead: "This draft explains how we intend to handle personal and health data. It is under legal review and will be finalised before any real patient data is used.",
  keywords: [],
  updated: U,
  sections: [
    { h: "Our commitments", ul: ["Personal data is used only for the purpose the clinic and patient consented to.", "Patient data is never sold to pharma companies or advertisers.", "Consent is recorded per purpose and can be withdrawn.", "Access is limited by role, and every access is logged.", "Data is encrypted in transit and at rest."] },
    { h: "Contact", p: ["Questions about privacy can be sent through the contact form on the home page. A grievance officer will be named before launch."] },
  ],
  faqs: [],
};

export const terms: ContentPage = {
  slug: "terms",
  seoTitle: "Terms of Use (Draft) | medaurion",
  description: "Draft terms of use for medaurion AIOS. Under legal review.",
  eyebrow: "TERMS",
  h1: "Terms of use (draft)",
  lead: "These draft terms are under legal review and will be finalised before general availability.",
  keywords: [],
  updated: U,
  sections: [
    { h: "Clinical responsibility", p: ["medaurion AIOS supports doctors with summaries and drafts. It does not diagnose, prescribe or recommend treatment. All clinical decisions remain with the treating doctor."] },
    { h: "Pilot use", p: ["During the pilot, features may change. Demo screens use fictional data."] },
  ],
  faqs: [],
};
