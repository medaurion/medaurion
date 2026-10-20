import type { ContentPage } from "./types";

const U = "2026-10-20";
const CLIN =
  "This article is general information for doctors and clinic teams. It is not medical advice for any individual patient. Follow current national and specialty guidelines and your own clinical judgement. medaurion AIOS helps organise records and reminders; it does not diagnose or decide treatment.";

export const posts2: ContentPage[] = [
  /* 1 — pillar: chronic care software */
  {
    slug: "chronic-disease-management-software-india",
    seoTitle: "Chronic Disease Management Software in India: 2026 Guide",
    description:
      "What chronic disease management software should do for Indian clinics treating diabetes, hypertension, thyroid and kidney disease: features, workflow, data safety and a buying checklist.",
    eyebrow: "PILLAR GUIDE · CHRONIC CARE",
    h1: "Chronic disease management software in India: the complete guide",
    lead:
      "Most clinic software in India was built for one visit at a time: register, prescribe, bill. Chronic care is different. The same patient returns every few months for years, and the value lies in what happens between visits. This guide explains what software for chronic care should actually do.",
    keywords: [
      "chronic disease management software India",
      "chronic care management platform",
      "NCD management software India",
      "diabetes clinic management software",
      "hypertension clinic software",
      "chronic care clinic workflow",
    ],
    updated: U,
    readMinutes: 11,
    sections: [
      {
        h: "Why chronic care needs different software",
        p: [
          "Diabetes, hypertension, thyroid disorders, chronic kidney disease, asthma and COPD are long-term conditions. Patients are reviewed again and again, often with new lab reports each time. The questions a doctor asks are always the same: what did we plan last time, what changed since then, is the patient on track, and when should we meet next?",
          "A standard EMR stores the answers somewhere in its records. Chronic disease management software brings them to the surface, automatically, for every returning patient.",
        ],
      },
      {
        h: "The five jobs good chronic care software does",
        ul: [
          "Prepares each visit: a short brief with the last plan, new reports and pending tests, ready before the patient sits down.",
          "Compares results over time: old and new values side by side, trends with medicine-change markers, and values outside the lab's reference range highlighted.",
          "Tracks follow-ups: who is due, who is overdue, who has stopped coming, with reminders the patient can understand.",
          "Keeps documentation fast: structured notes and prescriptions that the doctor reviews and approves.",
          "Gives the patient a simple view of their own journey, such as a health card with their reports and next visit date.",
        ],
      },
      {
        h: "A chronic care workflow that works in a busy OPD",
        ul: [
          "Before clinic: the front desk confirms today's list; software prepares a brief for each returning patient.",
          "At arrival: new reports are uploaded or received by WhatsApp or email and attached to the right patient.",
          "In the consultation: the doctor reads the brief, checks what changed, examines the patient and decides.",
          "At checkout: the next follow-up date and required tests are recorded, and the reminder schedule is set.",
          "Between visits: reminders go out in the patient's language; patients who miss their date are flagged for a call.",
        ],
      },
      {
        h: "Features to look for, by condition",
        ul: [
          "Diabetes: HbA1c, fasting and post-meal glucose trends; yearly eye, foot, kidney and lipid checks tracked as due items.",
          "Hypertension: home and clinic BP readings over time, with medicine changes marked on the chart.",
          "Thyroid: TSH and free T4 history next to dose changes, with a recheck date after each change.",
          "Chronic kidney disease: creatinine, eGFR and urine albumin trends, so a steady decline is visible early.",
          "Asthma and COPD: symptom reviews, inhaler technique checks and spirometry history.",
        ],
      },
      {
        h: "Data safety and compliance checklist",
        ul: [
          "Role-based access: a receptionist should not see what a doctor sees.",
          "Consent recorded per purpose, including any AI processing, as required under India's Digital Personal Data Protection Act, 2023.",
          "Audit trail of who viewed or changed a record.",
          "Clear separation between source data and AI-generated text, with doctor approval before anything is saved.",
          "ABDM readiness: support for ABHA-based record sharing when your clinic needs it. Ask vendors for proof of any certification they claim.",
          "A written promise that patient data is never sold to third parties.",
        ],
      },
      {
        h: "EMR or chronic care layer: which do you need?",
        p: [
          "If your clinic has no software yet, you need appointment, prescription and billing basics first. If you already have those but still search files before every follow-up, or patients often miss their next visit, a chronic care layer solves exactly that, and it can sit beside the EMR you already use.",
        ],
      },
      {
        h: "Buying checklist: ten questions to ask any vendor",
        ul: [
          "How long does it take to see what changed for a returning patient?",
          "Can I import my existing patient list from Excel or CSV?",
          "How do lab reports from outside labs get into the record?",
          "Are reminders available in English, Hindi and my regional language?",
          "Can I see a list of overdue patients today?",
          "Does the AI ever save anything without my approval?",
          "Where is the source shown for each line in a summary?",
          "Who can access patient data, and is access logged?",
          "What happens to my data if I stop using the product?",
          "Is the price per doctor, per clinic or per patient, and what is included?",
        ],
      },
      { h: "Important note", p: [CLIN] },
    ],
    faqs: [
      { q: "What is chronic disease management software?", a: "It is software that helps clinics care for patients with long-term conditions over many visits: preparing each visit, comparing results over time, tracking follow-ups and reminding patients." },
      { q: "Is chronic care software the same as an EMR?", a: "Not exactly. An EMR records each visit. Chronic care software focuses on the journey across visits. Many clinics use both together." },
      { q: "Which conditions benefit most?", a: "Conditions with regular reviews and lab monitoring, such as diabetes, hypertension, thyroid disorders, chronic kidney disease, asthma and COPD." },
    ],
    related: [
      { href: "/features/follow-up-intelligence", label: "Follow-Up Intelligence" },
      { href: "/features/what-changed", label: "What Changed" },
      { href: "/specialties/diabetologist", label: "Software for diabetologists" },
      { href: "/blog/patient-recall-system-for-clinics", label: "Patient recall system for clinics" },
    ],
  },

  /* 2 — buyer guide: best EMR */
  {
    slug: "how-to-choose-emr-software-india",
    seoTitle: "Best EMR Software in India? How to Choose (2026 Checklist)",
    description:
      "Looking for the best EMR software in India? Use this neutral 2026 checklist to compare clinic software on workflow, chronic care, ABDM, data safety, price and support.",
    eyebrow: "BUYER GUIDE",
    h1: "How to choose the best EMR software for your clinic in India",
    lead:
      "Search for the best EMR software in India and you will find dozens of top-10 lists, most written by the vendors themselves. Instead of another ranking, this guide gives you the questions that decide which product is best for your clinic.",
    keywords: [
      "best EMR software in India",
      "top EMR software India",
      "best clinic management software India",
      "best EMR for small clinics",
      "EMR software price India",
      "how to choose EMR software",
    ],
    updated: U,
    readMinutes: 10,
    sections: [
      {
        h: "First, decide what problem you are solving",
        ul: [
          "Long queues and paper registers: you need appointments, queue management and billing.",
          "Illegible or slow prescriptions: you need fast digital prescriptions with templates.",
          "Lost follow-ups and scattered reports: you need chronic care features such as result comparison and reminders.",
          "Hospital or IPD workflows: you need a hospital information system, not a clinic EMR.",
        ],
      },
      {
        h: "The main types of clinic software in India",
        p: [
          "Practice-management EMRs handle appointments, prescriptions and billing for clinics. Hospital systems add wards, pharmacy and inventory. AI scribes convert consultations into notes. Patient-intelligence tools such as medaurion AIOS prepare each visit and track follow-ups, and can run beside an EMR. Well-known names in the market include Practo, HealthPlix, Eka Care, DoctorsApp and TatvaCare; check each company's website for current features and prices.",
        ],
      },
      {
        h: "A scoring checklist you can use in a demo",
        ul: [
          "Speed: can a returning patient's prescription be completed in under a minute?",
          "Specialty fit: are templates and charts available for your specialty?",
          "Reports: how do outside lab reports get in, and can you compare old and new values?",
          "Follow-up: is there a list of overdue patients and automatic reminders?",
          "Language: can patients receive messages in their own language?",
          "ABDM: does it support ABHA linking and record sharing, and can the vendor show proof of any certification?",
          "Data safety: role-based access, audit logs, consent records and a no-data-selling promise.",
          "Exit: can you export all your data in a standard format if you leave?",
          "Support: is there onboarding and support in your language and working hours?",
        ],
      },
      {
        h: "Understanding EMR pricing in India",
        p: [
          "Clinic EMR plans in India are usually priced per doctor per year, and some vendors publish prices while others quote on request. Compare what is included: number of staff logins, SMS or WhatsApp credits, storage, and modules such as billing or pharmacy. A cheaper plan that lacks follow-up reminders can cost more in lost return visits.",
        ],
      },
      {
        h: "Red flags during evaluation",
        ul: [
          "Claims of certification or awards without documents you can verify.",
          "AI that writes directly into the record without doctor approval.",
          "No clear answer on who can access or use patient data.",
          "Long lock-in contracts with no data export.",
        ],
      },
      {
        h: "Run a two-week trial with real patients",
        p: [
          "Pick 20 returning patients. For each, time how long it takes to find the last plan and what changed, and record whether the follow-up reminder went out. These two numbers tell you more than any feature list.",
        ],
      },
    ],
    faqs: [
      { q: "Which is the best EMR software in India?", a: "There is no single best product. The best choice depends on your specialty, patient mix, need for chronic care follow-up, budget and support needs. Use a checklist and a short trial with real patients." },
      { q: "Is free EMR software good enough?", a: "Free plans can work for basic prescriptions. Check limits on patients, storage, messaging and data export before relying on one." },
      { q: "Do I need an EMR to use medaurion AIOS?", a: "No. medaurion AIOS can be used on its own for chronic follow-up care or alongside an existing EMR." },
    ],
    related: [
      { href: "/compare/emr-vs-patient-intelligence", label: "EMR vs patient intelligence" },
      { href: "/blog/practo-ray-alternatives-chronic-care", label: "Practo Ray alternatives for chronic care" },
      { href: "/pricing", label: "medaurion AIOS pricing" },
    ],
  },

  /* 3 — alternatives */
  {
    slug: "practo-ray-alternatives-chronic-care",
    seoTitle: "Practo Ray Alternatives for Chronic Care Clinics (2026)",
    description:
      "Considering a Practo Ray alternative? What chronic care clinics should compare: follow-up tracking, result trends, multilingual reminders and doctor-approved AI notes.",
    eyebrow: "ALTERNATIVES",
    h1: "Practo Ray alternatives for chronic care clinics",
    lead:
      "Practo Ray is one of the best-known clinic management products in India. Clinics that mostly see returning chronic patients sometimes look for alternatives or add-ons that focus on follow-up care. Here is what to compare.",
    keywords: [
      "Practo Ray alternative",
      "Practo alternative for doctors",
      "Practo vs Eka Care",
      "TatvaPractice alternative",
      "clinic software alternative India",
    ],
    updated: U,
    readMinutes: 7,
    sections: [
      {
        h: "Why clinics look for an alternative",
        ul: [
          "They want deeper chronic care features such as result trends and overdue lists.",
          "They want reminders in Marathi, Hindi or other regional languages.",
          "They want AI help with notes but with strict doctor approval.",
          "They want to keep their current system and add a focused layer instead of switching.",
        ],
      },
      {
        h: "Options clinics commonly evaluate",
        ul: [
          "Full EMRs such as HealthPlix, Eka Care, DoctorsApp and TatvaPractice, each with its own focus.",
          "AI scribe tools for faster documentation.",
          "Patient-intelligence layers such as medaurion AIOS that prepare visits and track follow-ups beside an existing EMR.",
        ],
      },
      {
        h: "What to compare for chronic care",
        ul: [
          "Time to see what changed for a returning patient.",
          "Old-versus-new result comparison and long-term trends.",
          "Follow-up lists, reminders and drop-off flags.",
          "Patient-facing view of reports and next visit.",
          "Data access controls and a clear no-data-selling policy.",
        ],
      },
      {
        h: "Switch or add?",
        p: [
          "Switching EMRs means migrating data and retraining staff. If the existing system works for appointments and billing, adding a chronic care layer is often faster. medaurion AIOS is designed to work this way, importing patients from Excel or CSV.",
        ],
      },
      {
        h: "Note",
        p: [
          "Information about other products comes from their public websites in October 2026 and may have changed. Practo, Practo Ray and other names belong to their owners. Please confirm details with each company.",
        ],
      },
    ],
    faqs: [
      { q: "Can I use medaurion AIOS with Practo Ray?", a: "medaurion AIOS is designed to sit beside existing clinic software. Patients can be imported from Excel or CSV and reports added by upload, WhatsApp or email." },
      { q: "Is medaurion AIOS a full replacement for a clinic EMR?", a: "Its focus is preparing visits and tracking follow-ups for chronic patients, not billing or hospital workflows." },
    ],
    related: [
      { href: "/compare/medaurion-vs-eka-care", label: "medaurion AIOS vs Eka Care" },
      { href: "/compare/medaurion-vs-healthplix", label: "medaurion AIOS vs HealthPlix" },
      { href: "/blog/how-to-choose-emr-software-india", label: "How to choose EMR software" },
    ],
  },

  /* 4 — HbA1c */
  {
    slug: "hba1c-testing-frequency-trend-tracking",
    seoTitle: "HbA1c Testing Frequency and Trend Tracking for Diabetes Clinics",
    description:
      "How often to repeat HbA1c, how to read a trend instead of a single value, and how diabetes clinics can track HbA1c across visits without searching old files.",
    eyebrow: "CLINICAL WORKFLOW · DIABETES",
    h1: "HbA1c testing frequency and trend tracking in a diabetes clinic",
    lead:
      "A single HbA1c value tells you where a patient is. A trend tells you where they are going and whether the last change worked. This guide covers testing frequency from common guidelines and a simple way to track trends.",
    keywords: [
      "HbA1c testing frequency",
      "HbA1c trend tracking",
      "how often to check HbA1c",
      "diabetes follow-up schedule",
      "HbA1c to average glucose",
    ],
    updated: U,
    readMinutes: 8,
    sections: [
      {
        h: "How often is HbA1c usually repeated?",
        p: [
          "The American Diabetes Association's Standards of Care suggest testing HbA1c at least twice a year in patients who are meeting treatment goals and have stable control, and about every three months in patients whose therapy has changed or who are not meeting goals. Indian guidelines, such as those from RSSDI and ICMR, follow a similar approach. Always check the current version of the guideline you follow.",
        ],
      },
      {
        h: "Why the trend matters more than one value",
        ul: [
          "HbA1c reflects average glucose over roughly the previous two to three months.",
          "A fall from 8.4 to 7.6 after a medicine change shows response even if the target is not yet reached.",
          "A slow rise over three visits can be missed if each value is read on its own.",
          "Anaemia, haemoglobin variants and recent blood loss can affect HbA1c, so trends should be read with the clinical picture.",
        ],
      },
      {
        h: "HbA1c and estimated average glucose",
        p: [
          "Many labs print estimated average glucose (eAG) next to HbA1c. The widely used ADAG formula is eAG (mg/dL) = 28.7 × HbA1c − 46.7. For example, an HbA1c of 7% corresponds to about 154 mg/dL. Patients often understand this number more easily.",
        ],
      },
      {
        h: "A simple trend-tracking routine",
        ul: [
          "Record each HbA1c with its date and the lab name.",
          "Mark every medicine change on the same timeline.",
          "Before each visit, look at the last three values and the change since the previous one.",
          "Record the next test date at checkout and set a reminder.",
        ],
      },
      {
        h: "Yearly checks to track alongside HbA1c",
        ul: [
          "Kidney: serum creatinine with eGFR and urine albumin-to-creatinine ratio.",
          "Lipid profile.",
          "Dilated eye examination.",
          "Comprehensive foot examination.",
        ],
      },
      {
        h: "How software helps",
        p: [
          "medaurion AIOS shows old and new HbA1c values side by side, plots the trend with medicine changes marked, and lists yearly checks that are due, with the source report one click away. The doctor interprets and decides.",
        ],
      },
      { h: "Important note", p: [CLIN] },
    ],
    faqs: [
      { q: "How often should HbA1c be checked?", a: "Common guidelines suggest at least twice a year when goals are met and control is stable, and about every three months when therapy changes or goals are not met. Follow your current guideline and clinical judgement." },
      { q: "How do I convert HbA1c to average glucose?", a: "The ADAG formula is eAG (mg/dL) = 28.7 × HbA1c − 46.7. An HbA1c of 7% is about 154 mg/dL." },
    ],
    related: [
      { href: "/specialties/diabetologist", label: "Software for diabetologists" },
      { href: "/blog/lab-report-trend-tracking-chronic-care", label: "Lab report trend tracking" },
      { href: "/features/what-changed", label: "What Changed" },
    ],
  },

  /* 5 — CKD eGFR */
  {
    slug: "egfr-decline-tracking-ckd-follow-up",
    seoTitle: "eGFR Decline Tracking and CKD Follow-Up: A Clinic Guide",
    description:
      "How clinics can track creatinine, eGFR and urine albumin over time, recognise a steady decline early and plan CKD follow-up using KDIGO staging.",
    eyebrow: "CLINICAL WORKFLOW · NEPHROLOGY",
    h1: "eGFR decline tracking and CKD follow-up",
    lead:
      "Chronic kidney disease often progresses quietly. A creatinine that looks only slightly higher each visit can hide a meaningful fall in eGFR over a year. Tracking the trend is how clinics catch it early.",
    keywords: [
      "eGFR decline tracking",
      "CKD follow-up protocol",
      "CKD staging KDIGO",
      "creatinine trend chart",
      "CKD patient management software",
    ],
    updated: U,
    readMinutes: 8,
    sections: [
      {
        h: "CKD staging in brief",
        p: [
          "KDIGO classifies CKD by cause, eGFR category (G1 to G5) and albuminuria category (A1 to A3). eGFR categories are G1 ≥90, G2 60–89, G3a 45–59, G3b 30–44, G4 15–29 and G5 <15 mL/min/1.73 m². Albuminuria categories are A1 <30, A2 30–300 and A3 >300 mg/g urine albumin-to-creatinine ratio.",
        ],
      },
      {
        h: "What counts as a significant decline?",
        p: [
          "KDIGO describes rapid progression as a sustained decline in eGFR of more than 5 mL/min/1.73 m² per year. A drop into a worse eGFR category with a 25% or greater fall from baseline is also treated as meaningful. Single values can vary, so confirm with repeat testing.",
        ],
      },
      {
        h: "How often to monitor",
        p: [
          "KDIGO recommends assessing eGFR and albuminuria at least once a year in people with CKD, and more often for those at higher risk of progression, as shown in its heat-map of eGFR and albuminuria categories. Follow the current KDIGO guideline and your nephrology practice.",
        ],
      },
      {
        h: "A practical tracking routine",
        ul: [
          "Store every creatinine, eGFR and urine ACR with date and lab.",
          "Use the same eGFR equation across visits where possible.",
          "Mark medicine changes such as ACE inhibitors, ARBs or SGLT2 inhibitors on the timeline.",
          "Calculate the change per year, not just since the last visit.",
          "Set the next test date and reminder at checkout.",
        ],
      },
      {
        h: "Diabetes and hypertension clinics",
        p: [
          "Many CKD patients are first seen in diabetes and hypertension clinics. Tracking kidney markers as a yearly due item in these clinics helps identify patients who may need nephrology review earlier.",
        ],
      },
      {
        h: "How software helps",
        p: [
          "medaurion AIOS plots creatinine and eGFR over time with medicine markers, shows old and new values side by side, and flags values outside the lab's reference range, with every line linked to its source report.",
        ],
      },
      { h: "Important note", p: [CLIN] },
    ],
    faqs: [
      { q: "What is a rapid eGFR decline?", a: "KDIGO describes rapid progression as a sustained eGFR decline of more than 5 mL/min/1.73 m² per year." },
      { q: "How often should eGFR be checked in CKD?", a: "At least yearly per KDIGO, and more often for patients at higher risk of progression. Follow current guidelines and clinical judgement." },
    ],
    related: [
      { href: "/specialties/nephrologist", label: "Software for nephrologists" },
      { href: "/features/what-changed", label: "What Changed" },
      { href: "/blog/hba1c-testing-frequency-trend-tracking", label: "HbA1c trend tracking" },
    ],
  },

  /* 6 — Hypertension */
  {
    slug: "hypertension-follow-up-interval-clinic",
    seoTitle: "Hypertension Follow-Up Interval: How Often to Review BP Patients",
    description:
      "How often to review hypertension patients after starting or changing medicines, how to use home BP readings, and how clinics reduce lost BP follow-ups.",
    eyebrow: "CLINICAL WORKFLOW · HYPERTENSION",
    h1: "Hypertension follow-up interval: how often to review patients",
    lead:
      "Hypertension is common, often silent and easy to lose to follow-up. Regular review until blood pressure is controlled, then steady long-term follow-up, is what makes treatment work.",
    keywords: [
      "hypertension follow-up interval",
      "how often to review hypertension patient",
      "hypertension clinic software",
      "home BP monitoring log",
      "BP follow-up reminder",
    ],
    updated: U,
    readMinutes: 7,
    sections: [
      {
        h: "Common guideline approach",
        p: [
          "The 2017 ACC/AHA guideline suggests monthly follow-up after starting or changing medication until blood pressure is controlled, then follow-up every three to six months. The ESC/ESH and Indian guidelines take a similar stepwise approach. Check the current guideline you follow.",
        ],
      },
      {
        h: "Use home BP readings",
        ul: [
          "Ask patients to measure at the same times each day, seated and rested, for several days before the visit.",
          "Record readings with date and time, not only an average.",
          "Compare home and clinic readings to spot white-coat or masked hypertension.",
        ],
      },
      {
        h: "What to review at each visit",
        ul: [
          "Clinic and home BP trend since the last visit.",
          "Medicine adherence and side effects.",
          "Yearly checks: kidney function, electrolytes, lipids, glucose and ECG as indicated.",
          "Lifestyle: salt, activity, weight and tobacco.",
        ],
      },
      {
        h: "Why BP patients drop off",
        p: [
          "Once readings improve, many patients feel well and stop coming. A reminder in the patient's own language, sent a few days before the due date, and a call when a visit is missed, are simple ways to keep them in care.",
        ],
      },
      {
        h: "How software helps",
        p: [
          "medaurion AIOS keeps BP readings on one chart with medicine changes marked, lists patients who are overdue, and sends NMC-safe reminders in English, मराठी and हिंदी.",
        ],
      },
      { h: "Important note", p: [CLIN] },
    ],
    faqs: [
      { q: "How often should a hypertension patient be reviewed?", a: "Common guidelines suggest about monthly after starting or changing medicines until BP is controlled, then every three to six months. Follow your guideline and clinical judgement." },
      { q: "Are home BP readings useful?", a: "Yes. Readings taken correctly over several days help confirm control and can reveal white-coat or masked hypertension." },
    ],
    related: [
      { href: "/specialties/cardiologist", label: "Software for cardiologists" },
      { href: "/features/multilingual-reminders", label: "Multilingual reminders" },
      { href: "/blog/patient-recall-system-for-clinics", label: "Patient recall system" },
    ],
  },

  /* 7 — Thyroid */
  {
    slug: "tsh-follow-up-after-thyroid-dose-change",
    seoTitle: "When to Recheck TSH After a Thyroid Dose Change",
    description:
      "When to repeat TSH after starting or changing levothyroxine, how often to monitor stable patients, and how clinics track thyroid follow-ups reliably.",
    eyebrow: "CLINICAL WORKFLOW · THYROID",
    h1: "When to recheck TSH after a thyroid dose change",
    lead:
      "Thyroid follow-up is simple in principle and easy to lose in practice. The right recheck date after each dose change, and steady monitoring once stable, keep patients well controlled.",
    keywords: [
      "when to recheck TSH after dose change",
      "thyroid patient follow-up schedule",
      "TSH follow-up tracking",
      "levothyroxine monitoring",
      "thyroid clinic software",
    ],
    updated: U,
    readMinutes: 6,
    sections: [
      {
        h: "Recheck after a change",
        p: [
          "The American Thyroid Association's guideline on hypothyroidism suggests checking TSH about six to eight weeks after starting levothyroxine or changing the dose, because TSH takes time to reach a new steady state.",
        ],
      },
      {
        h: "Monitoring stable patients",
        p: [
          "Once the dose is stable and TSH is in the target range, TSH is commonly checked every six to twelve months, or sooner if symptoms, weight, medicines or pregnancy status change. Pregnancy needs closer monitoring under specialist guidance.",
        ],
      },
      {
        h: "Things that affect results",
        ul: [
          "Taking levothyroxine with food, tea, coffee, calcium or iron.",
          "Missed doses in the weeks before the test.",
          "Biotin supplements, which can interfere with some lab assays.",
          "New medicines that change absorption or metabolism.",
        ],
      },
      {
        h: "A follow-up routine for thyroid clinics",
        ul: [
          "Record each TSH and free T4 with date, lab and current dose.",
          "At every dose change, set the recheck date at six to eight weeks and send a reminder.",
          "Show dose and TSH on the same timeline before each visit.",
        ],
      },
      {
        h: "How software helps",
        p: [
          "medaurion AIOS lines up TSH values with dose changes, reminds patients when the recheck is due, and shows what changed since the last report, with the source attached.",
        ],
      },
      { h: "Important note", p: [CLIN] },
    ],
    faqs: [
      { q: "When should TSH be rechecked after a levothyroxine dose change?", a: "Common guidance is about six to eight weeks after the change." },
      { q: "How often is TSH checked in stable patients?", a: "Typically every six to twelve months, or sooner if circumstances change. Follow your guideline and clinical judgement." },
    ],
    related: [
      { href: "/specialties/endocrinologist-thyroid", label: "Software for endocrinologists" },
      { href: "/features/follow-up-intelligence", label: "Follow-Up Intelligence" },
    ],
  },

  /* 8 — Recall system */
  {
    slug: "patient-recall-system-for-clinics",
    seoTitle: "Patient Recall System for Clinics in India: How to Set One Up",
    description:
      "A step-by-step guide to building a patient recall system in an Indian clinic: due lists, reminder timing, WhatsApp messages, calls for no-shows and the numbers to track.",
    eyebrow: "GUIDE · FOLLOW-UP",
    h1: "How to set up a patient recall system in your clinic",
    lead:
      "A recall system makes sure every patient who should come back actually does. It is the single biggest lever for chronic care outcomes and clinic revenue, and it can start with a spreadsheet.",
    keywords: [
      "patient recall system India",
      "patient follow-up system for clinic",
      "clinic follow-up reminder software",
      "patient retention software for clinics",
      "overdue patient list clinic",
    ],
    updated: U,
    readMinutes: 8,
    sections: [
      {
        h: "Step 1: record a due date for every patient",
        p: [
          "At checkout, record the next visit date and any tests needed before it. Without a due date there is nothing to recall. Make it a required field.",
        ],
      },
      {
        h: "Step 2: build three daily lists",
        ul: [
          "Due this week: patients to remind.",
          "Overdue: patients past their date who have not booked.",
          "Lost: patients overdue by more than a set period, such as 60 days.",
        ],
      },
      {
        h: "Step 3: time your reminders",
        ul: [
          "First reminder three to five days before the due date, including any tests to do first.",
          "Second reminder one day before, with the time and clinic address.",
          "Missed visit: a message the same day and a staff call within two days.",
        ],
      },
      {
        h: "Step 4: write messages patients understand",
        p: [
          "Use the patient's language, keep it short, include the clinic name and phone number, and avoid medical details in the message. Messages should follow NMC guidance on professional conduct and must not advertise or make promises about outcomes.",
        ],
      },
      {
        h: "Step 5: track four numbers every month",
        ul: [
          "Follow-up rate: patients who returned within 14 days of their due date.",
          "Overdue count at month end.",
          "Lost-patient count and how many were brought back.",
          "Reminder delivery and reply rates.",
        ],
      },
      {
        h: "From spreadsheet to software",
        p: [
          "A spreadsheet works for a few hundred patients. Beyond that, software that builds the lists automatically, sends reminders in English, मराठी and हिंदी, and flags drop-offs saves hours each week. medaurion AIOS does this and imports your existing list from Excel or CSV.",
        ],
      },
    ],
    faqs: [
      { q: "What is a patient recall system?", a: "A routine, manual or software-based, that records when each patient should return, reminds them, and follows up when they miss a visit." },
      { q: "What is a good follow-up rate?", a: "It varies by specialty and patient mix. Measure your own baseline first and aim to improve it month on month." },
    ],
    related: [
      { href: "/blog/reduce-missed-follow-ups-clinic", label: "Reduce missed follow-ups" },
      { href: "/blog/whatsapp-patient-reminders-india", label: "WhatsApp patient reminders" },
      { href: "/features/follow-up-intelligence", label: "Follow-Up Intelligence" },
    ],
  },

  /* 9 — OPD waiting */
  {
    slug: "reduce-opd-waiting-time-clinic",
    seoTitle: "How to Reduce OPD Waiting Time in Your Clinic: 9 Practical Steps",
    description:
      "Nine practical ways Indian clinics can cut OPD waiting time: slot planning, pre-visit preparation, report collection before arrival, faster documentation and queue updates.",
    eyebrow: "GUIDE · CLINIC OPERATIONS",
    h1: "How to reduce OPD waiting time in your clinic",
    lead:
      "Long waits frustrate patients and tire doctors. Most of the delay is not the consultation itself but everything around it: registration, searching for old reports and writing notes. Here are nine steps that help.",
    keywords: [
      "how to reduce OPD waiting time",
      "patient queue management clinic",
      "clinic workflow optimization",
      "reduce patient waiting time India",
      "OPD management tips",
    ],
    updated: U,
    readMinutes: 7,
    sections: [
      {
        h: "Measure first",
        p: [
          "For one week, note arrival time, consultation start and end for each patient. You will see where the minutes go, and you can check whether changes work.",
        ],
      },
      {
        h: "Nine steps that cut waiting time",
        ul: [
          "Give appointment slots, and keep a few for walk-ins rather than running only a token queue.",
          "Schedule new patients and complex reviews at quieter times.",
          "Ask patients to share new reports by WhatsApp or email before the visit.",
          "Prepare a brief for each returning patient before clinic starts.",
          "Do vitals and history questions at the front desk or with an assistant.",
          "Use templates and doctor-approved AI drafts to shorten note writing.",
          "Print or send prescriptions digitally instead of writing by hand twice.",
          "Send queue updates so patients arrive closer to their turn.",
          "Book the next visit and tests at checkout so the patient does not need to call later.",
        ],
      },
      {
        h: "The returning-patient bottleneck",
        p: [
          "In chronic care clinics, the biggest hidden delay is reviewing a returning patient's history. If the doctor spends two minutes per patient searching files, 40 patients mean more than an hour a day. A ready brief and an automatic what-changed view remove most of that.",
        ],
      },
      {
        h: "How software helps",
        p: [
          "medaurion AIOS prepares the patient brief before the visit, attaches reports received by WhatsApp or email, and drafts notes for doctor approval, so consultation time goes to the patient.",
        ],
      },
    ],
    faqs: [
      { q: "What causes long OPD waiting times?", a: "Common causes are token-only queues, missing reports, searching old records, slow documentation and booking follow-ups by phone later." },
      { q: "Can software alone fix waiting time?", a: "Software helps most when combined with slot planning and clear staff roles. Measure before and after each change." },
    ],
    related: [
      { href: "/blog/prepare-follow-up-visit-in-60-seconds", label: "Prepare for a follow-up in 60 seconds" },
      { href: "/features/patient-brief", label: "Patient Brief" },
    ],
  },

  /* 10 — AI scribe */
  {
    slug: "ai-medical-scribe-india-guide",
    seoTitle: "AI Medical Scribe in India: How It Works and What to Check",
    description:
      "How AI medical scribes work for Indian doctors, what they do well, their risks, consent and data questions, and a checklist for choosing a safe AI documentation tool.",
    eyebrow: "GUIDE · AI DOCUMENTATION",
    h1: "AI medical scribes in India: how they work and what to check",
    lead:
      "AI scribes turn a consultation or rough notes into structured documentation. Used well, they save time. Used carelessly, they can put wrong information into a medical record. Here is what doctors should know.",
    keywords: [
      "AI medical scribe India",
      "AI scribe for doctors",
      "how to write medical notes faster",
      "voice to prescription software",
      "SOAP notes generator",
      "best AI scribe for doctors India",
    ],
    updated: U,
    readMinutes: 9,
    sections: [
      {
        h: "How an AI scribe works",
        ul: [
          "Input: audio of the consultation, dictation or typed rough notes.",
          "Transcription: speech is converted to text, often across English and Indian languages.",
          "Structuring: a language model arranges the text under headings such as complaints, findings, assessment and plan.",
          "Review: the doctor checks, edits and approves before anything is saved.",
        ],
      },
      {
        h: "What AI scribes do well",
        ul: [
          "Reduce typing and after-hours documentation.",
          "Produce consistent, readable notes.",
          "Capture details mentioned in passing.",
        ],
      },
      {
        h: "Risks to manage",
        ul: [
          "Errors: mishearing drug names or doses, or adding details that were never said.",
          "Mixed languages and background noise in busy OPDs.",
          "Privacy: audio and text contain sensitive health data.",
          "Over-reliance: notes saved without careful review.",
        ],
      },
      {
        h: "Consent and data questions",
        p: [
          "Under India's Digital Personal Data Protection Act, 2023, clinics should take consent for each purpose of processing, including recording and AI processing. Ask vendors where data is processed, how long audio is kept, who can access it, and whether data is ever used to train models or shared with third parties. Seek legal advice for your specific situation.",
        ],
      },
      {
        h: "Checklist for choosing an AI scribe",
        ul: [
          "Doctor approval is required before saving, with no auto-save.",
          "AI text looks visibly different from source data.",
          "Drug names and doses are highlighted for checking.",
          "Works with your languages and accents.",
          "Clear consent flow for patients.",
          "Written data-use terms, including no selling of data.",
        ],
      },
      {
        h: "How medaurion AIOS approaches it",
        p: [
          "In medaurion AIOS, rough notes or voice become a structured draft with fixed headings. AI-written text is visually separated, the doctor edits and approves every line, and nothing is saved without approval. The AI assists; the doctor decides.",
        ],
      },
    ],
    faqs: [
      { q: "Is an AI scribe safe to use?", a: "It can be, when the doctor reviews and approves every note, consent is recorded and the vendor's data terms are clear." },
      { q: "Does an AI scribe replace an EMR?", a: "No. It speeds up documentation. Records, follow-ups and prescriptions still need a system to hold them." },
    ],
    related: [
      { href: "/features/ai-clinical-documentation", label: "AI clinical notes" },
      { href: "/blog/ai-clinical-documentation-doctor-approval", label: "Why doctor approval matters" },
      { href: "/compare/medaurion-vs-eka-care", label: "medaurion AIOS vs Eka Care" },
    ],
  },
];
