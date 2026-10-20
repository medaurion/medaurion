import type { ContentPage } from "./types";

const U = "2026-10-20";
const safety =
  "medaurion AIOS shows what is recorded and what is due. It does not diagnose, set targets or suggest treatment. Checklists follow the protocol your clinic sets.";

export const specialties: ContentPage[] = [
  {
    slug: "diabetologist",
    seoTitle: "Software for Diabetologists in India | HbA1c Tracking & Follow-Ups",
    description:
      "Clinic software for diabetologists: HbA1c and glucose trends, care-gap checklist (eye, foot, urine ACR), follow-up tracking and patient reminders in Hindi and Marathi.",
    eyebrow: "FOR DIABETOLOGISTS",
    h1: "Patient intelligence for diabetes clinics",
    lead:
      "Diabetes care is a long journey of small changes. medaurion AIOS shows each patient's HbA1c and glucose trend, what is due in their yearly checks and whether they came back on time, before the consultation starts.",
    keywords: ["software for diabetologists India", "EMR for diabetologist", "HbA1c tracking software", "diabetes clinic management software India"],
    updated: U,
    sections: [
      {
        h: "What a diabetologist needs to see in the first minute",
        ul: [
          "Latest HbA1c and fasting glucose compared with the previous result, with the date of each.",
          "Weight and blood pressure over recent visits.",
          "The last medicine change, so the result can be read in context.",
          "Kidney markers: creatinine, eGFR and urine ACR when available.",
          "Patient-reported concerns since the last visit, such as tingling in the feet or low-sugar episodes.",
        ],
      },
      {
        h: "Care-gap checklist",
        p: [
          "Many diabetes clinics follow a yearly checklist. medaurion AIOS shows which items are done, due or overdue for each patient, so they are not forgotten in a busy OPD.",
        ],
        ul: [
          "HbA1c at the interval your clinic sets.",
          "Eye examination.",
          "Foot examination.",
          "Urine ACR and kidney function.",
          "Lipid profile.",
          "Vaccinations your clinic tracks, such as influenza.",
        ],
      },
      {
        h: "Trends with treatment markers",
        p: [
          "Patient 360° draws HbA1c over the whole care journey with a marker wherever a medicine was started or changed. It helps when explaining progress to the patient and when reviewing whether a change was followed by improvement.",
        ],
      },
      {
        h: "Bringing patients back",
        p: [
          "Follow-up Intelligence lists overdue patients and flags those who have not replied to reminders. Reminders can be sent in English, मराठी or हिंदी and never contain results or a diagnosis.",
        ],
      },
      { h: "Safety", p: [safety] },
    ],
    faqs: [
      { q: "Can I track home blood sugar readings?", a: "Yes. Home readings entered by the clinic or by the patient through their health card appear beside lab results, labelled with their source." },
      { q: "Does medaurion suggest insulin or medicine doses?", a: "No. It does not suggest treatment of any kind. It only shows the recorded history and changes." },
      { q: "Can I customise the care-gap checklist?", a: "Yes. The checklist follows your clinic's protocol and can be edited." },
    ],
    related: [
      { href: "/features/what-changed", label: "What Changed: HbA1c and lab trends" },
      { href: "/blog/lab-report-trend-tracking-chronic-care", label: "Lab report trend tracking in chronic care" },
      { href: "/compare/medaurion-vs-doctorsapp", label: "medaurion AIOS vs DoctorsApp" },
    ],
  },
  {
    slug: "cardiologist",
    seoTitle: "Software for Cardiologists in India | BP & Lipid Trend Tracking",
    description:
      "For cardiology clinics: blood pressure and lipid trends, medicine change history, follow-up tracking and a 60-second patient brief before every review visit.",
    eyebrow: "FOR CARDIOLOGISTS",
    h1: "Patient intelligence for cardiology follow-ups",
    lead:
      "Cardiology patients return for long-term review of blood pressure, lipids and medicines. medaurion AIOS brings their readings, reports and medicine history together so each review starts with the full picture.",
    keywords: ["software for cardiologists India", "EMR for cardiology clinic", "blood pressure tracking software for doctors", "lipid profile trend"],
    updated: U,
    sections: [
      {
        h: "What the brief shows for a cardiology review",
        ul: [
          "Blood pressure readings from the clinic and, if shared, from home.",
          "LDL cholesterol and triglycerides compared with the previous report.",
          "Kidney function and potassium where relevant to the medicines in use.",
          "Current medicines and the date of the last change.",
          "Reports from other hospitals uploaded by the patient or staff, such as ECHO or TMT reports, filed as documents.",
        ],
      },
      {
        h: "Medicine history at a glance",
        p: [
          "A clear history of when each medicine was started, changed or stopped makes it easier to review side effects and adherence, especially when the patient has seen more than one doctor.",
        ],
      },
      {
        h: "Follow-ups after procedures and admissions",
        p: [
          "Patients who were admitted elsewhere often miss the first outpatient review. Follow-up Intelligence keeps them on the list until they return, and flags those who stop replying to reminders.",
        ],
      },
      { h: "Safety", p: [safety] },
    ],
    faqs: [
      { q: "Can ECG or ECHO reports be stored?", a: "Yes. They can be uploaded as documents and appear in the patient's timeline. Values that can be read from lab reports are shown in trends." },
      { q: "Does it replace my hospital HMIS?", a: "No. medaurion AIOS is designed to work alongside existing hospital and clinic software." },
    ],
    related: [
      { href: "/features/patient-brief", label: "Patient Brief" },
      { href: "/features/follow-up-intelligence", label: "Follow-Up Intelligence" },
    ],
  },
  {
    slug: "nephrologist",
    seoTitle: "Software for Nephrologists | Creatinine & eGFR Trend Tracking",
    description:
      "Kidney care clinic software: creatinine, eGFR, potassium and urine ACR trends, medicine history and follow-up tracking, with a 60-second brief before each visit.",
    eyebrow: "FOR NEPHROLOGISTS",
    h1: "Patient intelligence for kidney care",
    lead:
      "In kidney care, small changes in creatinine or eGFR matter. medaurion AIOS compares every new report with the last one and shows the full trend, so the change is never missed in a busy clinic.",
    keywords: ["software for nephrologist", "eGFR tracking software", "creatinine trend chart", "CKD patient management software India"],
    updated: U,
    sections: [
      {
        h: "Kidney markers in one view",
        ul: [
          "Creatinine and eGFR with the change since the previous report.",
          "Potassium and other electrolytes when reported.",
          "Urine ACR history.",
          "Haemoglobin and ferritin where tracked.",
          "Blood pressure readings over time.",
        ],
      },
      {
        h: "Long trends, clearly marked",
        p: [
          "Patient 360° shows eGFR and creatinine over years with markers for medicine changes, so a slow change is visible at a glance. The reference range used is always printed.",
        ],
      },
      {
        h: "Shared care with other doctors",
        p: [
          "Kidney patients are often also seen by a diabetologist or cardiologist. With the patient's consent, a time-limited link or the health card lets another doctor see the same history.",
        ],
      },
      { h: "Safety", p: [safety] },
    ],
    faqs: [
      { q: "Is eGFR calculated by medaurion?", a: "In the pilot, eGFR is shown as reported by the lab. The source report is always linked." },
      { q: "Can dialysis session notes be added?", a: "Session notes can be added as documents or clinical notes. Dedicated dialysis workflows are not part of the first release." },
    ],
    related: [
      { href: "/features/what-changed", label: "What Changed" },
      { href: "/specialties/diabetologist", label: "For diabetologists" },
    ],
  },
  {
    slug: "endocrinologist-thyroid",
    seoTitle: "Software for Endocrinologists & Thyroid Clinics | TSH Tracking",
    description:
      "For endocrinology and thyroid clinics: TSH trends with dose-change markers, follow-up reminders and a short patient brief before every visit.",
    eyebrow: "FOR ENDOCRINOLOGISTS",
    h1: "Patient intelligence for thyroid and endocrine clinics",
    lead:
      "Thyroid care is a cycle of test, adjust and re-test. medaurion AIOS shows each TSH result against the last one and the dose change in between, and reminds the patient when the next test is due.",
    keywords: ["thyroid clinic software", "TSH tracking for doctors", "software for endocrinologist India", "hypothyroidism patient follow-up"],
    updated: U,
    sections: [
      {
        h: "What the brief shows",
        ul: [
          "Latest TSH compared with the previous result and the first result.",
          "The last dose change and when it was made.",
          "Weight and other parameters your clinic tracks.",
          "Symptoms the patient reported since the last visit.",
        ],
      },
      {
        h: "Re-test reminders",
        p: [
          "When a repeat test is planned, the front desk can send a reminder in the patient's language before the due date, without including any result.",
        ],
      },
      { h: "Safety", p: [safety] },
    ],
    faqs: [
      { q: "Does medaurion adjust the dose?", a: "No. It only shows the recorded results and dose history. Dosing decisions stay with the doctor." },
    ],
    related: [
      { href: "/features/what-changed", label: "What Changed" },
      { href: "/features/multilingual-reminders", label: "Reminders in Hindi and Marathi" },
    ],
  },
  {
    slug: "general-physician",
    seoTitle: "Software for General Physicians in India | Patient Brief & Follow-Ups",
    description:
      "For general physicians and internal medicine: a 60-second brief for every returning patient, lab result comparison, follow-ups and AI-drafted notes you approve.",
    eyebrow: "FOR GENERAL PHYSICIANS",
    h1: "Patient intelligence for general physicians",
    lead:
      "General physicians see many returning patients with diabetes, hypertension, thyroid and other long-term conditions. medaurion AIOS prepares each one before they walk in.",
    keywords: ["software for general physician India", "EMR for general physicians", "OPD software for doctors", "internal medicine clinic software"],
    updated: U,
    sections: [
      {
        h: "Built for a high-volume OPD",
        ul: [
          "Today screen with the queue and the next patient's brief.",
          "New reports filed before the patient reaches the doctor.",
          "What changed since the last visit, in one short list.",
          "Notes drafted from rough lines and approved in one tap.",
        ],
      },
      {
        h: "Many conditions, one view",
        p: [
          "Patients often have more than one long-term condition. Patient 360° shows the problem list, medicines, alerts such as allergies, and trends for each tracked parameter in one place.",
        ],
      },
      {
        h: "Your front desk does more",
        p: [
          "Staff can file reports, record vitals and manage follow-ups, while the doctor focuses on the consultation. Each role sees only what it needs, and every action is logged.",
        ],
      },
      { h: "Safety", p: [safety] },
    ],
    faqs: [
      { q: "Is it suitable for a solo clinic?", a: "Yes. It works for a single doctor with one front-desk person, and also for multi-doctor clinics." },
      { q: "Do I need new hardware?", a: "No. It runs in a web browser on a computer, tablet or phone." },
    ],
    related: [
      { href: "/features/patient-brief", label: "Patient Brief" },
      { href: "/features/ai-clinical-documentation", label: "AI clinical notes" },
    ],
  },
  {
    slug: "pulmonologist",
    seoTitle: "Software for Pulmonologists | Asthma & COPD Follow-Up Tracking",
    description:
      "For chest and respiratory clinics: peak-flow trends, inhaler and medicine history, follow-up tracking and patient reminders before each review.",
    eyebrow: "FOR PULMONOLOGISTS",
    h1: "Patient intelligence for asthma and COPD clinics",
    lead:
      "Respiratory patients need regular review of symptoms, peak flow and inhaler use. medaurion AIOS brings these together and keeps track of who is due back.",
    keywords: ["software for pulmonologist", "asthma patient follow-up software", "COPD clinic software India", "peak flow tracking"],
    updated: U,
    sections: [
      {
        h: "What the brief shows",
        ul: [
          "Peak flow (PEFR) readings from the clinic or a home log.",
          "Current inhalers and medicines, with the last change.",
          "Recent exacerbations or emergency visits reported by the patient.",
          "Reports such as spirometry, filed as documents.",
        ],
      },
      {
        h: "Seasonal follow-ups",
        p: [
          "Follow-up lists make it easy to reach patients before seasons when symptoms often rise, using reminders in their language.",
        ],
      },
      { h: "Safety", p: [safety] },
    ],
    faqs: [
      { q: "Can patients log peak flow at home?", a: "Yes. Readings can be entered through the patient health card and appear labelled as home readings." },
    ],
    related: [
      { href: "/features/follow-up-intelligence", label: "Follow-Up Intelligence" },
      { href: "/features/patient-health-card", label: "Patient Health Card" },
    ],
  },
];

export const getSpecialty = (slug: string) => specialties.find((s) => s.slug === slug);
