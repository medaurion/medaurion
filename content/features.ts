import type { ContentPage } from "./types";

const U = "2026-10-20";

export const features: ContentPage[] = [
  {
    slug: "patient-brief",
    seoTitle: "AI Patient Summary for Doctors | 60-Second Patient Brief",
    description:
      "A 60-second patient brief before every consultation: last visit, what changed, pending tests, current medicines and patient concerns, each linked to its source record.",
    eyebrow: "PATIENT BRIEF",
    h1: "A 60-second patient brief before the patient sits down",
    lead:
      "Stop scrolling through old prescriptions, WhatsApp photos and paper files. medaurion AIOS prepares one short brief for each patient from their own records, so you start the consultation already knowing what matters.",
    keywords: ["AI patient summary for doctors", "pre-consultation patient brief", "patient history summary software", "patient summary before consultation India"],
    updated: U,
    sections: [
      {
        h: "Why doctors lose time before every follow-up",
        p: [
          "In a busy Indian OPD, a follow-up patient often brings a file of old prescriptions, a phone full of lab report photos and a memory of what was said last time. Finding the last HbA1c, checking whether the medicine dose changed and remembering which test was asked for can take several minutes per patient, and that time is taken from the conversation itself.",
          "A patient brief puts that preparation work before the visit. The doctor still decides everything. The brief only gathers what is already in the record and shows it in one place.",
        ],
      },
      {
        h: "What the brief contains",
        ul: [
          "Last visit: when it was, the reason, and the plan that was written.",
          "What changed: new lab values compared with the previous result, with the reference range and an out-of-range flag.",
          "New since last visit: reports, documents and patient-reported concerns that arrived after the last consultation.",
          "Pending items: tests that were asked for and not yet done, overdue follow-ups, and reminders without a reply.",
          "Current medicines and the last change made to them.",
          "Sources: every line names the record it came from, so you can open the original in one tap.",
        ],
      },
      {
        h: "Source data and AI text look different",
        p: [
          "Values taken from reports are shown as they are. Any sentence written by AI is shaded in orange, marked “AI-generated · doctor review required”, and lists the records it used. If AI is unavailable, the source-data brief still works, because it does not depend on AI.",
          "medaurion AIOS does not diagnose, prescribe or suggest treatment. It summarises what is recorded. If something is not in the record, the brief says it is not recorded.",
        ],
      },
      {
        h: "How it fits into your clinic day",
        ul: [
          "The front desk adds new reports when the patient arrives or sends them on WhatsApp.",
          "The brief updates itself. The doctor sees the next patient's brief on the Today screen.",
          "During the visit, the doctor opens Patient 360° for history, trends and the care journey.",
          "After the visit, the doctor signs the note and the follow-up date is set for the front desk.",
        ],
      },
      {
        h: "Who it is built for",
        p: [
          "The brief is most useful where patients return again and again: diabetes, hypertension, thyroid disorders, kidney care, heart conditions, asthma and COPD. It works for solo practitioners and for multi-doctor clinics where a patient may see a different doctor each time.",
        ],
      },
    ],
    faqs: [
      { q: "Does the patient brief replace my EMR?", a: "No. medaurion AIOS is designed to sit beside the clinic software you already use. You can import patients from Excel or CSV and keep your existing billing and appointment tools." },
      { q: "Does the AI make a diagnosis?", a: "No. The brief only summarises the patient's own records and shows where each line came from. Diagnosis and treatment decisions stay with the doctor." },
      { q: "How long does it take to read a brief?", a: "The brief is designed to be read in about 60 seconds. It shows the few things that changed or need action, with details one tap away." },
      { q: "Can my staff see the brief?", a: "Access depends on the role. Doctors see the full brief; front-desk staff see what they need for reports and follow-ups. Every open is recorded in the audit log." },
    ],
    related: [
      { href: "/features/what-changed", label: "What Changed: compare lab results automatically" },
      { href: "/specialties/diabetologist", label: "Patient brief for diabetologists" },
      { href: "/blog/prepare-follow-up-visit-in-60-seconds", label: "How to prepare for a follow-up visit in 60 seconds" },
    ],
  },
  {
    slug: "what-changed",
    seoTitle: "Lab Report Trend Analysis for Doctors | What Changed",
    description:
      "Compare a patient's latest lab report with the previous or first result automatically. See the change, the percentage, the reference range and the source of both reports.",
    eyebrow: "WHAT CHANGED",
    h1: "See what changed in a patient's lab results, automatically",
    lead:
      "When a new report arrives, medaurion AIOS compares it with the previous one and shows only what moved. HbA1c, creatinine, eGFR, TSH, lipids, haemoglobin and more, each with the reference range and both report dates.",
    keywords: ["lab report trend analysis", "compare lab reports software", "patient lab results trend for doctors", "HbA1c trend tracking"],
    updated: U,
    sections: [
      {
        h: "The problem with reading reports one by one",
        p: [
          "Most lab reports arrive as a PDF or a photo. Each one shows today's value, but not what it was last time. To see a trend, the doctor has to find the old report, read both values and work out the difference in their head. With five or six parameters per patient, important changes are easy to miss.",
        ],
      },
      {
        h: "How the comparison works",
        ul: [
          "By default, the latest result is compared with the previous one. You can switch to compare with the first result on record, last month, a date range, or since a treatment change.",
          "Only parameters that appear in both reports are compared.",
          "The change is shown as a number and a percentage. A change smaller than 3% is shown as “Stable”; anything larger is shown as “Changed ↑” or “Changed ↓”.",
          "A value outside the reference range is shown in red with an “outside ref” label. The range used is always printed, because ranges vary by lab, age and sex, and the clinic can change them.",
          "The two source reports and their dates are printed under every comparison.",
        ],
      },
      {
        h: "Trends over the whole care journey",
        p: [
          "Beyond the last two reports, Patient 360° shows each parameter as a line over months or years, with markers where a medicine was started or changed. This makes it easier to talk to the patient about progress, and to see whether a change in treatment was followed by a change in results.",
        ],
      },
      {
        h: "What it does not do",
        p: [
          "What Changed is a comparison tool, not a decision tool. It does not interpret results clinically or suggest a treatment. A flag means a value moved or is outside the stated range, nothing more. The doctor reads the result and decides.",
        ],
      },
      {
        h: "Parameters supported in the pilot",
        ul: [
          "Diabetes: HbA1c, fasting glucose, weight.",
          "Kidney: creatinine, eGFR, potassium, urine ACR.",
          "Lipids: LDL cholesterol, triglycerides.",
          "Thyroid: TSH.",
          "Blood: haemoglobin, ferritin. Liver: ALT (SGPT).",
          "Vitals: systolic and diastolic BP, peak flow (PEFR).",
        ],
      },
    ],
    faqs: [
      { q: "Which lab reports can medaurion read?", a: "In the pilot, reports can be uploaded as PDF or photo from the clinic desk or received on WhatsApp. Extracted values are shown for staff to check before they are saved to the record." },
      { q: "Can I change the reference ranges?", a: "Yes. Default ranges come from a single configuration that the clinic can edit, and the range used is printed beside every value." },
      { q: "What does “Stable” mean?", a: "Stable means the value changed by less than 3% compared with the base result. It is a display rule, not a clinical judgement." },
      { q: "Does it work for home readings like blood sugar or BP?", a: "Yes. Readings entered by the clinic or by the patient through their health card can be shown alongside lab results, clearly labelled with their source." },
    ],
    related: [
      { href: "/features/patient-brief", label: "Patient Brief: the 60-second summary" },
      { href: "/blog/lab-report-trend-tracking-chronic-care", label: "Guide: lab report trend tracking in chronic care" },
      { href: "/specialties/nephrologist", label: "Creatinine and eGFR tracking for nephrologists" },
    ],
  },
  {
    slug: "follow-up-intelligence",
    seoTitle: "Patient Follow-Up Software for Clinics in India",
    description:
      "Track overdue, upcoming and active follow-ups in one list, send reminders on WhatsApp in English, मराठी or हिंदी, and flag patients who may be dropping off care.",
    eyebrow: "FOLLOW-UP INTELLIGENCE",
    h1: "Follow-up tracking that keeps chronic patients coming back",
    lead:
      "Chronic care depends on the next visit. medaurion AIOS shows who is overdue, who is due soon and who has stopped replying, so your front desk knows exactly whom to call today.",
    keywords: ["patient follow-up software", "missed follow-up patients clinic", "follow-up reminder software for doctors India", "patient recall system clinic"],
    updated: U,
    sections: [
      {
        h: "Why patients are lost after the visit",
        p: [
          "A patient is told to come back in three months with a repeat test. Life gets busy, the date passes, and nobody notices until the patient returns much later, sometimes with worse control. For the clinic it is a lost visit; for the patient it is a gap in care.",
          "Most clinic software records the appointment but does not tell anyone when a planned follow-up did not happen.",
        ],
      },
      {
        h: "Three simple lists",
        ul: [
          "Overdue: the follow-up date has passed and the patient has not returned.",
          "Upcoming: the follow-up is due within the next 14 days.",
          "Active: the patient is in care and the next date is further away.",
        ],
      },
      {
        h: "Drop-off flag",
        p: [
          "When a follow-up is overdue, at least one reminder has been sent and there has been no reply, medaurion AIOS shows “Possible drop-off · staff call suggested”. This is a workflow signal for the front desk, not a health prediction. A phone call from the clinic is often what brings the patient back.",
        ],
      },
      {
        h: "Reminders in the patient's language",
        p: [
          "Reminders can be prepared in English, मराठी or हिंदी. They contain the clinic name, the date and what to bring, never a diagnosis or a result. Sending on WhatsApp uses approved message templates, and SMS in India requires DLT registration, which the clinic completes once.",
        ],
      },
      {
        h: "Results you can measure",
        p: [
          "During the pilot, the clinic can see how many follow-ups came back on time, how many came late and how many were missed. Any time-saved or revenue numbers shown are clearly labelled as estimates.",
        ],
      },
    ],
    faqs: [
      { q: "Does medaurion send WhatsApp messages automatically?", a: "Reminders are prepared by the system and sent through the clinic's WhatsApp Business setup using approved templates. The clinic stays in control of what is sent and when." },
      { q: "Is the drop-off flag a medical prediction?", a: "No. It only combines three facts: the follow-up is overdue, a reminder was sent and there was no reply. It is a prompt for staff to call." },
      { q: "Can the front desk use it without the doctor?", a: "Yes. Follow-up lists, reminders and the “mark contacted” action are designed for the front desk." },
    ],
    related: [
      { href: "/features/multilingual-reminders", label: "WhatsApp reminders in English, मराठी and हिंदी" },
      { href: "/blog/reduce-missed-follow-ups-clinic", label: "7 ways to reduce missed follow-ups in your clinic" },
      { href: "/blog/whatsapp-patient-reminders-india", label: "WhatsApp patient reminders: a guide for Indian clinics" },
    ],
  },
  {
    slug: "ai-clinical-documentation",
    seoTitle: "AI Clinical Notes for Doctors in India | Doctor-Approved",
    description:
      "Turn rough consultation notes or voice into a structured clinical note draft. The doctor edits and approves every word before it is saved. Supports English, मराठी and हिंदी.",
    eyebrow: "AI DOCUMENTATION",
    h1: "Clinical notes drafted by AI, approved by the doctor",
    lead:
      "Type a few rough lines or speak during the visit. medaurion AIOS turns them into a clean note with fixed headings. Nothing is saved to the patient record until you review and approve it.",
    keywords: ["AI medical scribe India", "AI clinical notes for doctors", "voice prescription software Hindi Marathi", "clinical documentation software India"],
    updated: U,
    sections: [
      {
        h: "Four steps, one approval",
        ul: [
          "Consultation input: rough notes, a short voice note or dictation.",
          "AI draft: a structured note under fixed headings.",
          "Doctor review: edit any line; AI text is highlighted so changes are easy to spot.",
          "Approved: only the approved version is saved, with the time and the doctor's name.",
        ],
      },
      {
        h: "Fixed headings, no invented content",
        p: [
          "Every draft uses the same headings: Chief complaint, History, Examination, Investigations, Assessment (as stated by the doctor), Plan and Follow-up. If something was not said or written, the draft says “Not stated” instead of filling the gap.",
        ],
      },
      {
        h: "Built for Indian consultations",
        p: [
          "Consultations in India often mix languages. Voice input is designed for English, मराठी and हिंदी, and the prescription printout can be given to the patient in their language, with medicine timing shown clearly.",
        ],
      },
      {
        h: "Safety rules that never change",
        ul: [
          "AI never diagnoses, prescribes or recommends treatment on its own.",
          "AI text is always marked “AI-generated · doctor review required” and lists its sources.",
          "Every AI run, edit and approval is recorded in the audit log.",
          "If AI is unavailable, you can still write and sign notes normally.",
        ],
      },
    ],
    faqs: [
      { q: "Is the AI note saved automatically?", a: "No. A draft stays a draft until the doctor approves it. Only the approved text enters the patient record." },
      { q: "Which languages are supported?", a: "The pilot supports English, मराठी and हिंदी for input and patient-facing printouts." },
      { q: "Where is the AI processed?", a: "All AI calls go through one server-side module. Data-processing terms, retention and data location are confirmed before any real patient data is used in a clinic." },
    ],
    related: [
      { href: "/blog/ai-clinical-documentation-doctor-approval", label: "AI in clinical documentation: why doctor approval matters" },
      { href: "/features/patient-brief", label: "Patient Brief" },
      { href: "/compare/medaurion-vs-eka-care", label: "medaurion AIOS vs Eka Care" },
    ],
  },
  {
    slug: "patient-health-card",
    seoTitle: "QR Patient Health Card for Clinics | Secure PIN Access",
    description:
      "Give every patient a QR health card. They scan it, enter their own PIN and see their visits, prescriptions, reports, medicines and progress, approved by the doctor.",
    eyebrow: "PATIENT HEALTH CARD",
    h1: "A QR health card that opens the patient's full care journey",
    lead:
      "Each patient gets a card with a QR code. The code holds only a secure link, never health data. After entering their own PIN, the patient sees their records, medicines and progress in their language.",
    keywords: ["patient health card QR", "digital health record for patients India", "patient portal for clinics", "QR code medical record"],
    updated: U,
    sections: [
      {
        h: "What the patient sees",
        ul: [
          "A to Z journey: every visit, prescription and report, newest first.",
          "Current medicines with morning, afternoon and night timing.",
          "Lab results with simple trend graphs and the normal range.",
          "The next follow-up date and what to bring.",
          "A plain-language summary of progress, shown only after the doctor approves it, and never a diagnosis.",
        ],
      },
      {
        h: "Security by design",
        ul: [
          "The QR code contains only a secure link, not health information.",
          "A 6-digit PIN is set by the patient with an OTP on their registered mobile.",
          "The card locks after 5 wrong attempts and can be reset by OTP or at the clinic.",
          "Reissuing a card makes the old QR stop working.",
          "Family members can view only with the patient's consent by OTP.",
        ],
      },
      {
        h: "ABHA, not Aadhaar",
        p: [
          "Identity linking uses ABHA (Ayushman Bharat Health Account) with the patient's consent. medaurion never asks for or stores Aadhaar. ABDM integration is in progress and will be announced when it is live.",
        ],
      },
      {
        h: "Why clinics give health cards",
        p: [
          "Patients who can see their own progress are more likely to return for follow-ups and bring the right reports. It also reduces calls asking for old prescriptions and makes it easy to share records with another doctor for a limited time.",
        ],
      },
    ],
    faqs: [
      { q: "Is health data stored on the card?", a: "No. The QR code only holds a secure link. Records open after the patient enters their own PIN." },
      { q: "What if the patient forgets the PIN?", a: "The PIN can be reset with an OTP on the registered mobile number, or at the clinic." },
      { q: "Can a child or parent view the record?", a: "A family member can view only after the patient gives consent by OTP. For patients under 18, the parent or guardian sets the PIN." },
    ],
    related: [
      { href: "/blog/abha-abdm-guide-for-clinics", label: "ABHA and ABDM: a simple guide for clinics" },
      { href: "/features/follow-up-intelligence", label: "Follow-Up Intelligence" },
    ],
  },
  {
    slug: "multilingual-reminders",
    seoTitle: "WhatsApp Patient Reminders in Hindi & Marathi | Clinics",
    description:
      "Prepare follow-up, test and medicine reminders in English, मराठी and हिंदी. Send on WhatsApp with approved templates or SMS with DLT. No diagnosis or results in any message.",
    eyebrow: "REMINDERS",
    h1: "Patient reminders in English, मराठी and हिंदी",
    lead:
      "Patients respond better to messages they can read easily. medaurion AIOS prepares short, respectful reminders in the patient's preferred language and keeps a record of every message and reply.",
    keywords: ["WhatsApp reminder for clinic patients", "patient reminder in Hindi", "Marathi patient reminder", "clinic SMS reminder DLT"],
    updated: U,
    sections: [
      {
        h: "Types of reminders",
        ul: [
          "Follow-up visit due, with the date and clinic name.",
          "Test to be done before the next visit, such as a repeat HbA1c or creatinine.",
          "Report received and filed (without showing any result).",
          "Gentle check-in when a patient has not replied to earlier reminders.",
        ],
      },
      {
        h: "Rules every message follows",
        ul: [
          "No diagnosis, no test results and no medicine advice inside a message.",
          "NMC-safe wording: no offers, discounts or promotional claims.",
          "Sent only to patients who gave consent for reminders.",
          "Every message and reply is logged.",
        ],
      },
      {
        h: "WhatsApp and SMS setup in India",
        p: [
          "WhatsApp Business messages to patients use pre-approved templates. SMS reminders in India require DLT registration of the sender and templates. During onboarding, medaurion helps the clinic prepare the templates in all three languages.",
        ],
      },
    ],
    faqs: [
      { q: "Can patients reply on WhatsApp?", a: "Yes. Replies appear for the front desk, and a reply marks the reminder as answered in the follow-up list." },
      { q: "Do reminders work without WhatsApp?", a: "Yes. SMS can be used as a fallback once the clinic's DLT registration is complete." },
    ],
    related: [
      { href: "/blog/whatsapp-patient-reminders-india", label: "WhatsApp patient reminders: a guide for Indian clinics" },
      { href: "/features/follow-up-intelligence", label: "Follow-Up Intelligence" },
    ],
  },
];

export const getFeature = (slug: string) => features.find((f) => f.slug === slug);
