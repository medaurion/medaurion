import HubPage, { type HubSection } from "../components/seo/HubPage";
import type { Faq } from "@/content/types";
import { pageMeta } from "@/lib/meta";

/* /emr-software — hub P2. Primary keyword: "EMR software" (+ "EMR software for doctors in India") */

const PATH = "/emr-software";
const TITLE = "EMR Software for Doctors in India – Free Plan | medaurion";
const DESCRIPTION =
  "EMR software for Indian doctors: prescriptions, reports and patient history in one record, with a pre-visit brief and WhatsApp follow-ups. Start free.";

export const metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: ["emr software", "emr software for doctors", "emr software india", "electronic medical records software", "ehr software", "patient records software", "emr for doctors"],
});

const sections: HubSection[] = [
  {
    id: "what-is-emr",
    h2: "What an EMR is (and how it differs from an EHR)",
    blocks: [
      { t: "p", text: "An EMR (electronic medical record) is the digital version of a patient's file at one clinic. It holds visit notes, prescriptions, lab reports, allergies and the problem list, and it replaces the paper file and the prescription pad. EMR software is the program a doctor and front desk use to create and read that record." },
      { t: "p", text: "An EHR (electronic health record) is a wider idea. It is meant to follow the patient across clinics, labs and hospitals. In India this is the direction of the Ayushman Bharat Digital Mission (ABDM), where a patient's ABHA number lets records be shared between providers with consent. Many products use \"EMR\" and \"EHR\" for the same thing, so check what the software actually does rather than the label." },
      {
        t: "table",
        head: ["", "EMR", "EHR"],
        rows: [
          ["Scope", "One clinic or practice", "Across providers"],
          ["Main user", "The treating doctor and clinic staff", "Doctors, labs, hospitals, the patient"],
          ["Typical content", "Notes, Rx, reports, vitals, history", "Same, plus records from other providers"],
          ["In India", "Most clinic software", "Linked through ABDM and ABHA with consent"],
        ],
      },
      { t: "p", text: "For most single-doctor and small clinics, the first need is a good EMR: fast to use in a short OPD visit, readable on a phone, and able to show the patient's story over time. Sharing across providers matters more as ABDM adoption grows." },
    ],
    aside: [
      { t: "callout", text: "**Short answer:** EMR = the patient's record at your clinic. EHR = a record meant to travel with the patient between providers." },
      { t: "p", text: "Related: [How to choose EMR software in India](/blog/how-to-choose-emr-software-india) · [EMR vs patient intelligence](/compare/emr-vs-patient-intelligence)" },
    ],
  },
  {
    id: "features",
    h2: "Must-have EMR features for an Indian OPD",
    blocks: [
      { t: "p", text: "Feature lists for EMR software in India are long. The features below are the ones that decide whether an EMR saves time in a real OPD or adds work. Ask to see each one live during a demo." },
      {
        t: "cards",
        items: [
          { h: "Fast prescription", p: "Templates, favourites and dictation so a routine Rx takes under a minute. Prints or shares on WhatsApp with your letterhead and registration number." },
          { h: "Reports that file themselves", p: "Lab reports from paper, PDF or WhatsApp go into the right patient's record and their values become trends, not just attachments." },
          { h: "History you can read in seconds", p: "A summary at the top of the record: what changed since the last visit, current medicines, allergies and pending tests." },
          { h: "Follow-ups built in", p: "Next-visit date on the prescription, reminders to the patient, and a list of who missed their date." },
          { h: "Specialty templates", p: "Templates for diabetes, hypertension, thyroid, cardiology, nephrology and general practice that you can edit." },
          { h: "Staff roles", p: "Separate logins for doctor, front desk and admin, with an audit trail of who saw or changed what." },
          { h: "Data export", p: "Your records can be exported at any time. Your data should never be locked in." },
          { h: "Works on a phone", p: "Many doctors read the next patient's record on their phone. The EMR should work well on a small screen." },
        ],
      },
      { t: "p", text: "Features that look good in a demo but matter less for a small clinic: complex inventory, insurance claims modules and IPD bed management. Those belong to a hospital system." },
    ],
  },
  {
    id: "one-record",
    h2: "Prescription, reports and history in one record",
    blocks: [
      { t: "p", text: "In many Indian clinics the patient's information lives in four places: the paper file, the prescription pad, the patient's phone gallery and the doctor's memory. An EMR is only useful if it brings these together without extra typing." },
      { t: "p", text: "In medaurion, each patient has one Patient 360° record. The visit, the prescription, every uploaded report and every follow-up sit on one timeline. The top of the record shows a short brief of what changed since the last visit, with a link to the source of each line." },
      {
        t: "table",
        head: ["Part of the record", "What it holds", "How it gets there"],
        rows: [
          ["Brief", "What changed, pending tests, last plan", "Prepared from the record before the visit"],
          ["Problem list", "Active conditions and when they were first noted", "Doctor adds or confirms"],
          ["Trends", "HbA1c, sugar, BP, weight, creatinine, eGFR, lipids, TSH", "Values read from uploaded reports"],
          ["Medicines", "Current list and dose changes over time", "From each prescription"],
          ["Documents", "Reports, referral letters, discharge summaries", "Upload, photo or WhatsApp"],
          ["Timeline", "Visits, Rx, reports and referrals in date order", "Built automatically"],
        ],
      },
      { t: "ai", text: "**How the AI is used:** medaurion reads the reports and notes already in the record and summarises them. Every summary line links to its source. The AI does not diagnose and nothing it drafts is saved without the doctor's approval." },
      { t: "p", text: "See the [Patient Brief](/features/patient-brief) and [What Changed](/features/what-changed) features for detail, or the [chronic care software](/chronic-care-software) page for how this works for long-term patients." },
    ],
  },
  {
    id: "abha",
    h2: "EMR with ABHA linking (planned)",
    blocks: [
      { t: "p", text: "ABHA (Ayushman Bharat Health Account) is a 14-digit health ID under ABDM. With the patient's consent, an ABDM-integrated EMR can link records to a patient's ABHA so they can be shared with other providers the patient chooses." },
      { t: "callout", text: "**Status:** ABHA linking in medaurion is planned and not live yet. We will update this page when it is available. medaurion uses ABHA, never Aadhaar, for health record linking." },
      { t: "p", text: "What you can do today: keep complete, well-labelled records in medaurion so they are ready to link once integration is live. For background, read our [ABHA and ABDM guide for clinics](/blog/abha-abdm-guide-for-clinics)." },
    ],
  },
  {
    id: "bandwidth",
    h2: "Offline and low-bandwidth use",
    blocks: [
      { t: "p", text: "Internet in many clinics drops during the day. Before you choose any EMR, check what happens when the connection is slow or lost: can you still see today's patients, can you still write a prescription, and does anything get lost?" },
      // TODO (confirm with tech team before publishing): offline capability statement below
      { t: "p", text: "medaurion runs in the browser and keeps pages light so it works on mobile data. A full offline mode is not available yet. If your clinic often loses internet for long periods, tell us during the call so we can plan around it." },
      { t: "ul", items: ["Use a phone hotspot as a backup connection at the front desk.", "Load the day's queue and briefs at the start of the OPD.", "Upload reports in a batch when the connection is stable."] },
    ],
  },
  {
    id: "cost",
    h2: "How much EMR software costs in India",
    blocks: [
      { t: "p", text: "EMR software in India is usually priced per doctor per month or per year. Some products offer a free plan with limits, some offer a free trial, and some only quote after a demo. The listed price is rarely the full cost." },
      {
        t: "table",
        head: ["Cost item", "What to ask"],
        rows: [
          ["Subscription", "Per doctor or per clinic? Monthly or yearly? What is the limit on the free plan?"],
          ["Setup and data import", "Is moving old patient lists included or charged?"],
          ["WhatsApp and SMS", "Are messages included, or billed per message? WhatsApp Business messages have a per-message cost set by Meta."],
          ["Extra users", "Is the front desk login extra?"],
          ["Add-ons", "Are AI notes, reminders or reports separate modules?"],
          ["Leaving", "Can you export all data for free if you stop?"],
        ],
      },
      { t: "p", text: "medaurion has a free plan (Patient 360° for 10 patients a month). Paid plans are in early access; see [pricing](/pricing) for current estimates." },
    ],
  },
  {
    id: "switch",
    h2: "Moving from paper or another EMR",
    blocks: [
      { t: "p", text: "Most clinics worry that switching means re-typing years of files. It doesn't. Move the patients who need it, as they come in." },
      {
        t: "steps",
        items: [
          "**Export or list your patients.** From another EMR, export a CSV or Excel file. From paper, start with a simple list of names and phone numbers.",
          "**Import the list.** Patients can be imported from Excel or CSV.",
          "**Start with chronic patients.** Upload their last two or three reports so trends appear from the first visit.",
          "**Run both for two weeks.** Keep the old system for reference while new visits go into medaurion.",
          "**Switch fully.** After two weeks, use medaurion for all new visits and keep the old files for look-up only.",
        ],
      },
      { t: "p", text: "Founding Doctor clinics anywhere in India get online help from our team with the import and setup." },
    ],
  },
  {
    id: "compare",
    h2: "EMR software options in India",
    blocks: [
      { t: "p", text: "There are many EMR products for Indian doctors, including established names with large user bases. The right choice depends on what you need most: a broad clinic or hospital system, or a faster view of each returning patient." },
      { t: "p", text: "We publish fair comparisons using facts from each company's public website, with the date we checked: [HealthPlix alternatives](/compare/healthplix-alternatives), [Eka Care alternatives](/compare/eka-care-alternatives), [MocDoc alternatives](/compare/mocdoc-alternatives) and [Drlogy alternatives](/compare/drlogy-alternatives)." },
    ],
  },
];

const faqs: Faq[] = [
  { q: "What is EMR software?", a: "EMR software is the program a clinic uses to keep electronic medical records: visit notes, prescriptions, lab reports, allergies and the problem list for each patient." },
  { q: "What is the difference between EMR and EHR?", a: "An EMR is the record at one clinic. An EHR is meant to follow the patient across providers. In India, sharing across providers happens through ABDM and the patient's ABHA, with consent." },
  { q: "Is there a free EMR for doctors in India?", a: "Some products have free plans with limits. medaurion's free plan includes Patient 360° for 10 patients a month, the medicine schedule card and the follow-up leak check." },
  { q: "Is medaurion ABDM integrated?", a: "Not yet. ABHA linking is planned. medaurion uses ABHA, never Aadhaar, for health record linking." },
  { q: "Can I use medaurion with my current EMR?", a: "Yes. medaurion is designed to work alongside the software a clinic already uses. Patients can be imported from Excel or CSV." },
  { q: "Does the EMR work on a mobile phone?", a: "Yes. It runs in the browser on a phone, tablet or laptop." },
  { q: "Can I write prescriptions in Marathi or Hindi?", a: "You write the prescription as usual. Patients can receive the prescription and a medicine schedule card in English, Marathi or Hindi." },
  { q: "Who owns the data in the EMR?", a: "Your clinic's records stay yours. You can export them at any time, including if you stop using medaurion." },
];

export default function Page() {
  return (
    <HubPage
      path={PATH}
      crumbs={[{ name: "EMR software", href: PATH }]}
      updated="2026-10-27"
      updatedLabel="27 Oct 2026"
      eyebrow="EMR software for doctors in India"
      h1="EMR software for Indian doctors, built around the patient story"
      lead="medaurion is EMR software for Indian doctors and small clinics. It keeps prescriptions, lab reports and visit notes in one record, and shows a short brief of what changed before each visit. Reports sent on WhatsApp are filed automatically, and follow-ups go out to patients after the visit. There is a free plan, and you can use it alongside the software you already have."
      secondaryCta={{ label: "Start free – 10 patients/month", href: "/pricing" }}
      heroNote="Free plan available. No card needed. Works in the browser on phone and laptop."
      mock={{
        title: "Patient 360° · Rajesh S., 62 M",
        tag: "Sample · fictional patient",
        heading: "Record summary",
        rows: [
          { label: "Problems", value: "T2DM · HTN · CKD 3a" },
          { label: "eGFR (Oct vs Jun)", value: "52 → 47", tone: "up" },
          { label: "BP (home log, 4 wks)", value: "138/86", tone: "ok" },
          { label: "Current Rx", value: "4 medicines" },
          { label: "Pending", value: "Urine ACR, lipid profile", tone: "ai" },
          { label: "Next follow-up", value: "14 Nov" },
        ],
        foot: "Every line links to its source report · Doctor decides",
      }}
      sections={sections}
      faqs={faqs}
      finalCta={{ h: "See the EMR on sample patients", p: "A 15-minute call. We show a real Patient 360° record, then set up your free plan.", label: "Book a 15-min call", href: "/#pilot" }}
      sources={[
        "National Health Authority. Ayushman Bharat Digital Mission (ABDM) and ABHA – official information at [abdm.gov.in](https://abdm.gov.in).",
        "Government of India. Digital Personal Data Protection Act, 2023.",
      ]}
      sourcesNote={'Sample patient "Rajesh S." and all values above are fictional and shown for illustration only.'}
      schemaName={TITLE}
      schemaDescription={DESCRIPTION}
      offers={[{ name: "Free", price: "0" }]}
    />
  );
}
