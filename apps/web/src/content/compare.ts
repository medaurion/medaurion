import type { ContentPage } from "./types";

const U = "2026-10-20";
const note =
  "Information about other products is taken from their public websites in October 2026 and may have changed. Please check with each company before deciding. medaurion AIOS is currently in a doctor pilot.";

export const compares: ContentPage[] = [
  {
    slug: "emr-vs-patient-intelligence",
    seoTitle: "EMR vs Patient Intelligence Software: What Clinics Need",
    description:
      "An EMR stores records. Patient intelligence prepares them: a brief, what changed and who needs follow-up. Learn the difference and whether your clinic needs one or both.",
    eyebrow: "COMPARE",
    h1: "EMR vs patient intelligence: what is the difference?",
    lead:
      "Most Indian clinics already have some software for appointments, billing and prescriptions. Patient intelligence is a different layer: it reads those records and tells the doctor what matters for the patient in front of them.",
    keywords: ["EMR vs patient intelligence", "what is patient intelligence software", "EMR alternative for chronic care", "do I need an EMR"],
    updated: U,
    sections: [
      {
        h: "What an EMR does well",
        ul: [
          "Registers patients and books appointments.",
          "Writes and prints prescriptions.",
          "Stores visit notes, reports and bills.",
          "Produces reports for the clinic owner.",
        ],
      },
      {
        h: "What patient intelligence adds",
        ul: [
          "A 60-second brief prepared before the visit.",
          "Automatic comparison of the latest results with earlier ones.",
          "Lists of overdue and upcoming follow-ups, with reminders and drop-off flags.",
          "AI-drafted notes that the doctor approves, with sources shown.",
        ],
      },
      {
        h: "Side by side",
        ul: [
          "Main question answered: an EMR answers “What is recorded?”; patient intelligence answers “What changed and what needs action?”.",
          "Best fit: an EMR suits every clinic; patient intelligence suits clinics with many returning chronic patients.",
          "Replacement: patient intelligence is designed to work alongside an EMR, not to replace it.",
        ],
      },
      {
        h: "Which one does your clinic need?",
        p: [
          "If your clinic has no software at all, start with something that handles appointments and prescriptions. If you already have that but still spend minutes searching files for every follow-up patient, or patients often miss their next visit, a patient-intelligence layer like medaurion AIOS solves that specific problem.",
        ],
      },
      { h: "Note", p: [note] },
    ],
    faqs: [
      { q: "Can medaurion AIOS work with my current software?", a: "Yes. It is designed to sit beside existing clinic software. Patients can be imported from Excel or CSV, and reports can come in through upload, WhatsApp or email." },
      { q: "Is medaurion an EMR?", a: "It includes the records needed for the brief, notes and follow-ups, but its focus is preparing and tracking care, not replacing billing or hospital systems." },
    ],
    related: [
      { href: "/compare/medaurion-vs-doctorsapp", label: "medaurion AIOS vs DoctorsApp" },
      { href: "/compare/medaurion-vs-healthplix", label: "medaurion AIOS vs HealthPlix" },
      { href: "/features/patient-brief", label: "Patient Brief" },
    ],
  },
  {
    slug: "medaurion-vs-doctorsapp",
    seoTitle: "medaurion AIOS vs DoctorsApp: Which Fits Your Clinic?",
    description:
      "An honest comparison of medaurion AIOS and DoctorsApp for Indian clinics: focus, features, pricing approach and when each one is the better fit.",
    eyebrow: "COMPARE",
    h1: "medaurion AIOS vs DoctorsApp",
    lead:
      "DoctorsApp is an EMR and practice-management product for clinics and hospitals. medaurion AIOS is a patient-intelligence layer focused on chronic follow-up care. Here is how they differ.",
    keywords: ["DoctorsApp alternative", "medaurion vs DoctorsApp", "DoctorsApp EMR review", "EMR software comparison India"],
    updated: U,
    sections: [
      {
        h: "What DoctorsApp offers (from its website)",
        ul: [
          "Appointment scheduling and digital prescriptions.",
          "Lab investigation requests and report uploads.",
          "Specialty modules, web and mobile apps, WhatsApp integration.",
          "OPD and IPD modules for hospitals and nursing homes.",
          "Published clinic plans of ₹10,999 and ₹16,999 per year excluding GST, for one doctor with staff access.",
        ],
      },
      {
        h: "What medaurion AIOS focuses on",
        ul: [
          "A 60-second patient brief before each visit, with sources.",
          "Automatic comparison of new lab results with earlier ones, and long-term trends with medicine-change markers.",
          "Follow-up intelligence: overdue lists, reminders in English, मराठी and हिंदी, and drop-off flags.",
          "AI-drafted clinical notes that the doctor reviews and approves.",
          "A QR patient health card with PIN access to the patient's own journey.",
        ],
      },
      {
        h: "When DoctorsApp may fit better",
        p: [
          "If you need a complete practice-management system with IPD, billing and hospital workflows from one vendor today, a full EMR/HMIS product such as DoctorsApp is designed for that.",
        ],
      },
      {
        h: "When medaurion AIOS may fit better",
        p: [
          "If most of your patients return for long-term care and the real problem is preparing for each visit and keeping patients coming back, medaurion AIOS is built for exactly that, and it can run alongside the software you already have.",
        ],
      },
      { h: "Note", p: [note] },
    ],
    faqs: [
      { q: "Can I use medaurion AIOS and DoctorsApp together?", a: "Yes. medaurion AIOS is designed to work beside existing clinic software. Data can be imported from Excel or CSV." },
      { q: "How much does medaurion AIOS cost?", a: "The doctor pilot is free for 12 weeks. Planned price ranges are on the pricing page and will be finalised after the pilot." },
    ],
    related: [
      { href: "/compare/emr-vs-patient-intelligence", label: "EMR vs patient intelligence" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    slug: "medaurion-vs-healthplix",
    seoTitle: "medaurion AIOS vs HealthPlix: EMR or Patient Intelligence?",
    description:
      "Comparing medaurion AIOS with HealthPlix for Indian doctors: an established EMR versus a patient-intelligence layer for chronic follow-up care.",
    eyebrow: "COMPARE",
    h1: "medaurion AIOS vs HealthPlix",
    lead:
      "HealthPlix describes itself as India's largest EMR, used by more than 14,000 doctors. medaurion AIOS is a newer product focused on preparing each chronic-care visit and tracking follow-ups.",
    keywords: ["HealthPlix alternative", "medaurion vs HealthPlix", "HealthPlix EMR comparison", "best EMR for chronic care India"],
    updated: U,
    sections: [
      {
        h: "HealthPlix in brief",
        p: [
          "HealthPlix is an established EMR for Indian doctors, offering electronic prescriptions and clinic workflows, and it has raised venture funding to build a digital healthcare stack for doctors.",
        ],
      },
      {
        h: "medaurion AIOS in brief",
        ul: [
          "Patient Brief: the first minute of every follow-up, prepared in advance.",
          "What Changed: automatic comparison of results with the reference range and sources.",
          "Follow-Up Intelligence: lists, multilingual reminders and drop-off flags.",
          "Doctor-approved AI notes and a QR patient health card.",
        ],
      },
      {
        h: "Choosing between them",
        p: [
          "If you want a widely used EMR with a large installed base, an established product like HealthPlix is a natural option. If your priority is a faster, clearer view of each returning patient and fewer lost follow-ups, medaurion AIOS is built for that and can be used alongside an EMR.",
        ],
      },
      { h: "Note", p: [note] },
    ],
    faqs: [
      { q: "Does medaurion AIOS replace HealthPlix?", a: "It does not have to. It is designed as a layer that works with the software a clinic already uses." },
    ],
    related: [
      { href: "/compare/emr-vs-patient-intelligence", label: "EMR vs patient intelligence" },
      { href: "/features/what-changed", label: "What Changed" },
    ],
  },
  {
    slug: "medaurion-vs-eka-care",
    seoTitle: "medaurion AIOS vs Eka Care: AI Scribe or Patient Intelligence?",
    description:
      "How medaurion AIOS compares with Eka Care for Indian doctors: AI documentation, patient records and follow-up care.",
    eyebrow: "COMPARE",
    h1: "medaurion AIOS vs Eka Care",
    lead:
      "Eka Care offers digital health tools for doctors, including EkaScribe for AI-powered clinical documentation. medaurion AIOS combines doctor-approved AI notes with a pre-visit brief, result comparison and follow-up tracking.",
    keywords: ["Eka Care alternative", "EkaScribe alternative", "AI scribe for doctors India comparison", "medaurion vs Eka Care"],
    updated: U,
    sections: [
      {
        h: "Eka Care in brief",
        p: [
          "Eka Care is a digital health company in India. Its EkaScribe product is described as AI-powered clinical scribing that turns doctor–patient conversations into documentation.",
        ],
      },
      {
        h: "Where medaurion AIOS is different",
        ul: [
          "Before the visit: a 60-second brief and what changed, not only notes during the visit.",
          "After the visit: follow-up lists, reminders in three languages and drop-off flags.",
          "Strict separation: source data and AI text look different, and nothing AI writes is saved without the doctor's approval.",
        ],
      },
      { h: "Note", p: [note] },
    ],
    faqs: [
      { q: "Does medaurion AIOS have an AI scribe?", a: "Yes. Rough notes or voice become a structured draft with fixed headings, which the doctor edits and approves." },
    ],
    related: [
      { href: "/features/ai-clinical-documentation", label: "AI clinical notes" },
      { href: "/blog/ai-clinical-documentation-doctor-approval", label: "Why doctor approval matters in AI documentation" },
    ],
  },
];

export const getCompare = (slug: string) => compares.find((c) => c.slug === slug);
