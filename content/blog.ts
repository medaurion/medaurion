import type { ContentPage } from "./types";

const U = "2026-10-20";

export const posts: ContentPage[] = [
  {
    slug: "prepare-follow-up-visit-in-60-seconds",
    seoTitle: "How to Prepare for a Follow-Up Visit in 60 Seconds",
    description:
      "A practical checklist for doctors to review a returning patient in one minute: last plan, what changed, new reports, pending tests and current medicines.",
    eyebrow: "GUIDE · CLINIC WORKFLOW",
    h1: "How to prepare for a follow-up visit in 60 seconds",
    lead:
      "Follow-up visits are where chronic care is won or lost. This checklist shows what to look at, in what order, so you are ready before the patient sits down.",
    keywords: ["prepare for patient follow-up", "pre-consultation checklist for doctors", "patient summary before consultation"],
    updated: U,
    readMinutes: 6,
    sections: [
      {
        h: "Start with the last plan, not the last report",
        p: [
          "The single most useful line is what you planned last time: the medicine change, the tests you asked for and the date you wanted to see the patient. It tells you what to check today. If your notes are on paper, ask the front desk to photograph the last prescription when the patient arrives.",
        ],
      },
      {
        h: "Look only at what changed",
        p: [
          "Instead of reading every value on a new report, compare it with the previous one. Note which values moved meaningfully and which are outside the range used by that lab. Writing the old and new values side by side, for example HbA1c 7.9 → 7.2, saves time when you explain progress to the patient.",
        ],
      },
      {
        h: "Check what is new since the last visit",
        ul: [
          "New lab reports, including those done at other labs.",
          "Documents from other doctors or hospitals.",
          "Anything the patient reported by phone or message, such as side effects or new symptoms.",
        ],
      },
      {
        h: "Confirm what is still pending",
        p: [
          "Was every test you asked for actually done? Are routine yearly checks due? Pending items are easy to forget and are often the reason a visit needs to be repeated.",
        ],
      },
      {
        h: "Glance at current medicines",
        p: [
          "Confirm the current list and the last change. If the patient has seen another doctor in between, check for new medicines before you decide anything.",
        ],
      },
      {
        h: "Let software do the gathering",
        p: [
          "Doing all of this by hand for 40 patients a day is hard. Patient-intelligence tools such as medaurion AIOS prepare the same checklist automatically from the patient's records, show the source of each line, and leave every decision to the doctor.",
        ],
      },
    ],
    faqs: [
      { q: "What is a pre-consultation patient brief?", a: "It is a short summary prepared before the visit that shows the last plan, what changed, new information and pending items, so the doctor starts the consultation prepared." },
      { q: "How long should a patient brief take to read?", a: "A good brief can be read in about a minute and shows only what changed or needs action, with details available on demand." },
    ],
    related: [
      { href: "/features/patient-brief", label: "Patient Brief feature" },
      { href: "/blog/lab-report-trend-tracking-chronic-care", label: "Lab report trend tracking in chronic care" },
    ],
  },
  {
    slug: "reduce-missed-follow-ups-clinic",
    seoTitle: "7 Ways to Reduce Missed Follow-Ups in Your Clinic (India)",
    description:
      "Practical steps Indian clinics can take to reduce missed follow-up visits: clear dates, reminders in the patient's language, staff calls and simple tracking.",
    eyebrow: "GUIDE · FOLLOW-UPS",
    h1: "7 ways to reduce missed follow-ups in your clinic",
    lead:
      "Every missed follow-up is a gap in a patient's care and a lost visit for the clinic. These seven steps are simple to start and work with or without software.",
    keywords: ["reduce missed follow-ups", "patient no-show clinic India", "patient recall system", "follow-up reminder for patients"],
    updated: U,
    readMinutes: 7,
    sections: [
      { h: "1. Give a date, not a duration", p: ["“Come after three months” is easy to forget. Write the actual date on the prescription and say it aloud. A specific date is much easier for a patient to plan around."] },
      { h: "2. Tell the patient what to bring", p: ["If a test is needed before the visit, say which one and when to do it. Patients who arrive without the report often postpone the visit instead."] },
      { h: "3. Remind in the patient's language", p: ["A short reminder in मराठी or हिंदी is more likely to be read than a long English message. Keep it to the clinic name, the date and what to bring. Never include results or a diagnosis in a reminder."] },
      { h: "4. Send the reminder at the right time", p: ["A reminder a few days before the date, and another on the day before, works for many clinics. For tests, remind early enough for the patient to visit the lab."] },
      { h: "5. Call when there is no reply", p: ["When a patient is overdue and has not replied to reminders, a short phone call from the front desk is often what brings them back. Keep a daily list of these patients."] },
      { h: "6. Keep one list for the whole clinic", p: ["Follow-ups noted in a register, in WhatsApp chats and in the doctor's memory are easy to lose. One shared list of overdue, upcoming and active patients lets anyone on the team act."] },
      { h: "7. Measure it every month", p: ["Count how many follow-ups came on time, came late or were missed. Even a simple monthly number shows whether your changes are working."] },
      {
        h: "How software can help",
        p: [
          "Tools like medaurion AIOS keep the follow-up list automatically, prepare reminders in three languages and flag patients who may be dropping off, so the front desk knows whom to call each morning. The flag is a workflow signal, not a health prediction.",
        ],
      },
    ],
    faqs: [
      { q: "What is a good follow-up reminder message?", a: "A short message with the clinic name, the visit date and what to bring, in the patient's language, with no results or diagnosis." },
      { q: "How do I know which patients are dropping off?", a: "Patients who are overdue, have received at least one reminder and have not replied are the ones to call first." },
    ],
    related: [
      { href: "/features/follow-up-intelligence", label: "Follow-Up Intelligence" },
      { href: "/blog/whatsapp-patient-reminders-india", label: "WhatsApp patient reminders: a guide for Indian clinics" },
    ],
  },
  {
    slug: "whatsapp-patient-reminders-india",
    seoTitle: "WhatsApp Patient Reminders for Clinics in India: A Guide",
    description:
      "How Indian clinics can send patient reminders on WhatsApp and SMS the right way: consent, approved templates, DLT for SMS, language and what never to include.",
    eyebrow: "GUIDE · REMINDERS",
    h1: "WhatsApp patient reminders: a guide for Indian clinics",
    lead:
      "WhatsApp is how most patients in India communicate. Used well, it brings patients back on time. Used carelessly, it can expose private information. Here is how to do it properly.",
    keywords: ["WhatsApp reminder for clinic patients", "WhatsApp for doctors India", "clinic SMS DLT registration", "patient reminder template"],
    updated: U,
    readMinutes: 8,
    sections: [
      {
        h: "Start with consent",
        p: [
          "Ask each patient, at registration, whether they agree to receive reminders and on which number. Record the consent with the date. Patients should be able to stop reminders at any time.",
        ],
      },
      {
        h: "Personal WhatsApp vs WhatsApp Business",
        p: [
          "Sending reminders from a staff member's personal phone is hard to track and mixes clinic and personal data. A WhatsApp Business account for the clinic, and for larger volumes the WhatsApp Business API through an approved provider, keeps messages in one place. Messages that start a conversation through the API use pre-approved templates.",
        ],
      },
      {
        h: "SMS needs DLT registration",
        p: [
          "In India, business SMS must be sent through a registered sender with registered templates on the DLT platform. Plan this once, early, so SMS can be used as a backup when a patient does not use WhatsApp.",
        ],
      },
      {
        h: "What to include and what never to include",
        ul: [
          "Include: clinic name, visit or test date, what to bring, and how to reschedule.",
          "Never include: test results, diagnosis, medicine names or anything a family member should not see.",
          "Avoid offers, discounts or promotional claims in clinical reminders.",
        ],
      },
      {
        h: "Write in the patient's language",
        p: [
          "Keep three versions of each template: English, मराठी and हिंदी, or the languages your patients use. Short, polite sentences work best.",
        ],
      },
      {
        h: "Track replies",
        p: [
          "A reminder only helps if someone notices when there is no reply. Keep a list of patients who did not respond and call them. Software such as medaurion AIOS logs every message and reply and shows non-responders automatically.",
        ],
      },
    ],
    faqs: [
      { q: "Can a clinic send WhatsApp reminders without the API?", a: "Small clinics often start with a WhatsApp Business account. For higher volumes and automation, the WhatsApp Business API with approved templates is the usual route." },
      { q: "Is DLT registration required for clinic SMS?", a: "Business SMS in India is sent through DLT-registered senders and templates. Check the current rules with your SMS provider." },
    ],
    related: [
      { href: "/features/multilingual-reminders", label: "Reminders in English, मराठी and हिंदी" },
      { href: "/blog/reduce-missed-follow-ups-clinic", label: "7 ways to reduce missed follow-ups" },
    ],
  },
  {
    slug: "lab-report-trend-tracking-chronic-care",
    seoTitle: "Lab Report Trend Tracking in Chronic Care: A Doctor's Guide",
    description:
      "How to track lab trends for chronic patients: comparing with the previous and first result, using reference ranges, marking treatment changes and avoiding common mistakes.",
    eyebrow: "GUIDE · LAB TRENDS",
    h1: "Lab report trend tracking in chronic care",
    lead:
      "One lab value tells you where a patient is. Two or more tell you where they are going. Here is a simple, reliable way to track trends without spending minutes on every report.",
    keywords: ["lab report trend tracking", "compare lab results over time", "HbA1c trend", "creatinine trend chronic kidney disease"],
    updated: U,
    readMinutes: 7,
    sections: [
      {
        h: "Compare with the previous result by default",
        p: [
          "For most visits, the useful question is what changed since last time. Compare each parameter only when it appears in both reports, and write the old and new values together.",
        ],
      },
      {
        h: "Sometimes compare with the first result",
        p: [
          "Comparing with the first result on record shows the whole journey. It is useful when reviewing long-term progress with the patient, or after several treatment changes.",
        ],
      },
      {
        h: "Decide what counts as a change",
        p: [
          "Small differences between reports are normal. Many teams treat changes below a small percentage as stable and highlight larger ones. medaurion AIOS, for example, labels a change under 3% as “Stable”. Whatever rule you use, apply it consistently.",
        ],
      },
      {
        h: "Always show the reference range used",
        p: [
          "Reference ranges differ between labs and depend on age and sex. Printing the range next to each value avoids confusion when reports come from different labs.",
        ],
      },
      {
        h: "Mark treatment changes on the trend",
        p: [
          "A trend line becomes much more useful when it shows when a medicine was started or changed. It helps both the doctor and the patient see whether results moved after the change.",
        ],
      },
      {
        h: "Common mistakes",
        ul: [
          "Comparing values from different units without converting.",
          "Missing a report done at another lab because it was never filed.",
          "Reading a single high value without checking the previous trend.",
          "Mixing home readings and lab values without labelling the source.",
        ],
      },
    ],
    faqs: [
      { q: "Should I compare with the previous or the first lab result?", a: "Use the previous result for routine visits and the first result when reviewing the long-term journey. Good software lets you switch between them." },
      { q: "Why do reference ranges differ between labs?", a: "Labs use different methods and populations, and some ranges depend on age and sex. That is why the range used should be shown with every value." },
    ],
    related: [
      { href: "/features/what-changed", label: "What Changed feature" },
      { href: "/specialties/diabetologist", label: "For diabetologists" },
      { href: "/specialties/nephrologist", label: "For nephrologists" },
    ],
  },
  {
    slug: "abha-abdm-guide-for-clinics",
    seoTitle: "ABHA and ABDM Explained: A Simple Guide for Clinics",
    description:
      "What ABHA and ABDM mean for Indian clinics and patients: the health ID, consent-based record sharing, facility and professional registries, and why Aadhaar is not needed in clinic software.",
    eyebrow: "GUIDE · DIGITAL HEALTH INDIA",
    h1: "ABHA and ABDM: a simple guide for clinics",
    lead:
      "ABDM is India's national digital health programme, and ABHA is the health account a patient can create under it. Here is what clinics need to know, in plain words.",
    keywords: ["what is ABHA", "ABDM for clinics", "ABHA health ID for patients", "ABDM compliant clinic software"],
    updated: U,
    readMinutes: 6,
    sections: [
      {
        h: "What is ABDM?",
        p: [
          "The Ayushman Bharat Digital Mission (ABDM) is a national programme, run by the National Health Authority, to connect health records across hospitals, clinics, labs and patients in India in a consent-based way.",
        ],
      },
      {
        h: "What is ABHA?",
        p: [
          "ABHA (Ayushman Bharat Health Account) is a health ID that a patient can create. With the patient's consent, records from different providers can be linked to it and shared with a doctor the patient chooses.",
        ],
      },
      {
        h: "Registries for clinics and doctors",
        p: [
          "ABDM includes registries for health facilities and for healthcare professionals. Clinics that want to exchange records through ABDM register their facility, and doctors can register as professionals.",
        ],
      },
      {
        h: "Consent is central",
        p: [
          "Records are shared only with the patient's consent, for a purpose and a time period. Clinic software should record consent clearly and let patients withdraw it.",
        ],
      },
      {
        h: "Why clinic software should not ask for Aadhaar",
        p: [
          "Identity linking for health records can be done through ABHA. Storing Aadhaar numbers in clinic software adds risk without adding value for care. medaurion AIOS never asks for or stores Aadhaar.",
        ],
      },
      {
        h: "Where medaurion AIOS stands",
        p: [
          "ABHA linking with consent is part of the product design, and ABDM integration is in progress. We will state it publicly only when it is live and approved.",
        ],
      },
    ],
    faqs: [
      { q: "Is ABHA mandatory for patients?", a: "Creating an ABHA is voluntary for patients. Check the latest guidance from the National Health Authority for any changes." },
      { q: "Is medaurion AIOS ABDM certified?", a: "Not yet. ABDM integration is in progress. We will announce it only when it is live." },
    ],
    related: [
      { href: "/features/patient-health-card", label: "Patient Health Card" },
      { href: "/blog/ai-clinical-documentation-doctor-approval", label: "AI documentation and patient privacy" },
    ],
  },
  {
    slug: "ai-clinical-documentation-doctor-approval",
    seoTitle: "AI in Clinical Documentation: Why Doctor Approval Matters",
    description:
      "How doctors in India can use AI for clinical notes safely: drafts not decisions, visible sources, doctor approval, audit logs and patient consent under the DPDP Act.",
    eyebrow: "GUIDE · AI IN CLINICS",
    h1: "AI in clinical documentation: why doctor approval matters",
    lead:
      "AI can turn a few rough lines into a clean clinical note. That saves time, but only if the doctor stays in control of what enters the record. Here are the rules that make AI documentation safe.",
    keywords: ["AI clinical documentation", "AI medical scribe safety", "AI notes for doctors India", "DPDP Act clinic software"],
    updated: U,
    readMinutes: 7,
    sections: [
      { h: "Rule 1: AI writes drafts, not records", p: ["An AI draft should never be saved to the patient record automatically. The doctor reads it, edits it and approves it. Only the approved text becomes part of the record."] },
      { h: "Rule 2: AI never diagnoses or prescribes", p: ["The AI's job is to organise what the doctor said or wrote. It should not add a diagnosis, a medicine or advice that the doctor did not state. If something was not said, the draft should say “Not stated”."] },
      { h: "Rule 3: AI text must look different", p: ["Text written by AI should be clearly marked, for example with a colour and a label such as “AI-generated · doctor review required”, so it is never confused with source data."] },
      { h: "Rule 4: Show the sources", p: ["Every AI summary should list the records it used, such as the visits and reports it read, so the doctor can check them."] },
      { h: "Rule 5: Log everything", p: ["Each AI run, edit and approval should be recorded with the time and the user. An audit log protects both the patient and the doctor."] },
      {
        h: "Patient consent and the DPDP Act",
        p: [
          "India's Digital Personal Data Protection Act, 2023 sets rules for consent and the purpose for which personal data is used. Clinics should record consent for care, reminders and AI processing separately, and confirm where and how their software processes data. This is general information, not legal advice; please consult a lawyer for your clinic's situation.",
        ],
      },
      {
        h: "How medaurion AIOS applies these rules",
        p: [
          "Every rule above is built into medaurion AIOS: drafts stay drafts until approved, AI text is marked and sourced, everything is logged, and the product still works when AI is unavailable.",
        ],
      },
    ],
    faqs: [
      { q: "Can AI notes be used without doctor review?", a: "They should not be. Safe AI documentation keeps the doctor's review and approval as a required step before anything is saved." },
      { q: "Does using AI change patient consent requirements?", a: "Clinics should record consent for each purpose, including AI processing, and confirm their software's data-processing terms. Seek legal advice for specifics." },
    ],
    related: [
      { href: "/features/ai-clinical-documentation", label: "AI clinical notes feature" },
      { href: "/compare/medaurion-vs-eka-care", label: "medaurion AIOS vs Eka Care" },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
