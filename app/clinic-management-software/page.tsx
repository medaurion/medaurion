import HubPage, { type HubSection } from "../components/seo/HubPage";
import type { Faq } from "@/content/types";
import { pageMeta } from "@/lib/meta";

/* /clinic-management-software — hub P3. Primary keyword: "clinic management software" (+ "india", "small clinic") */

const PATH = "/clinic-management-software";
const TITLE = "Clinic Management Software India for Small Clinics | medaurion";
const DESCRIPTION =
  "Clinic management software for single-doctor and small clinics in India: patient queue, doctor brief, prescriptions, WhatsApp follow-ups, staff roles and reports.";

export const metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: ["clinic management software", "clinic management software india", "clinic management system", "opd management software", "small clinic software", "clinic software", "free clinic management software india"],
});

const sections: HubSection[] = [
  {
    id: "overview",
    h2: "What clinic management software does in a small clinic",
    blocks: [
      { t: "p", text: "Clinic management software runs the daily work of a clinic: who is waiting, who sees the doctor next, what was prescribed, what the patient needs to do next, and what the day added up to. In a large hospital this is spread across many systems. In a single-doctor or small clinic, one simple tool should cover it." },
      { t: "p", text: "medaurion is built for that size of clinic. The front desk manages the queue and reports. The doctor sees a short brief before each patient and writes the prescription. After the visit, follow-ups and reminders run on WhatsApp. The clinic owner sees a simple dashboard and a monthly summary for the CA." },
      {
        t: "cards",
        cols: 3,
        items: [
          { h: "Front desk", p: "Queue, tokens, booking link, report upload, reminders." },
          { h: "Doctor desk", p: "Pre-visit brief, notes by voice or typing, prescription with safety check." },
          { h: "Clinic owner", p: "Daily dashboard, follow-up leaks, monthly summary for the CA." },
        ],
      },
    ],
    aside: [
      { t: "callout", text: "**Short answer:** clinic management software = queue + records + prescriptions + follow-ups + reports, in one place for the whole clinic team." },
      { t: "p", text: "Long-term patients? See [chronic care software](/chronic-care-software). Records only? See [EMR software](/emr-software)." },
    ],
  },
  {
    id: "front-desk",
    h2: "Front desk: queue, booking link and token flow",
    blocks: [
      { t: "p", text: "Most delays in an Indian OPD start at the front desk: a crowded waiting area, a paper register, and reports handed over at the last minute. The Today screen gives the front desk one live list." },
      {
        t: "steps",
        items: [
          "**Patient arrives or books:** the front desk adds them to today's queue and gives a token. A free booking link for your clinic is launching soon.",
          "**Reports collected:** any new report is uploaded or photographed and filed in the patient's record before they go in.",
          "**Ready for doctor:** the patient is marked ready; the doctor's screen shows who is next with their brief.",
          "**After the visit:** the prescription, follow-up date and medicine schedule card go to the patient on WhatsApp.",
        ],
      },
      { t: "p", text: "The queue shows waiting, with the doctor, and done. Patients who need something from the front desk, such as a missing report, are flagged under \"Needs you\"." },
      { t: "p", text: "For tips on shorter waits, read [how to reduce OPD waiting time](/blog/reduce-opd-waiting-time-clinic)." },
    ],
  },
  {
    id: "doctor-desk",
    h2: "Doctor desk: brief, Rx, notes",
    blocks: [
      { t: "p", text: "The doctor's screen is built for a visit of a few minutes. When the token is called, the doctor sees the patient's brief: what changed since last time, current medicines, allergies and pending tests. Each line links to its source." },
      {
        t: "table",
        head: ["Task", "How it works in medaurion"],
        rows: [
          ["Read history", "Brief at the top of Patient 360°, prepared before the visit"],
          ["Write notes", "Dictate or type; a draft note is prepared for the doctor to edit and approve"],
          ["Prescribe", "Templates and favourites, a safety check before sending, patient-language medicine card"],
          ["Order tests", "Added to the Rx and tracked as pending until the report arrives"],
          ["Refer", "Referral letter from the record; the referral is tracked until there is a reply"],
          ["Set next visit", "Follow-up date saved and sent to the patient"],
        ],
      },
      { t: "ai", text: "**How the AI is used:** the AI prepares summaries and draft notes from the clinic's own records. It does not diagnose. Nothing it drafts is saved until the doctor approves it." },
    ],
  },
  {
    id: "after-visit",
    h2: "After the visit: follow-ups and pending tests",
    blocks: [
      { t: "p", text: "A clinic grows when patients come back on time. Most clinic software stops at the prescription. medaurion keeps going after the patient leaves." },
      { t: "ul", items: [
        "**Follow-Ups board:** four columns – Overdue, Due in 14 days, Contacted, Scheduled later – with each patient's reminder history.",
        "**Pending test tracker:** tests ordered but not yet received show up for the front desk and in the next brief.",
        "**WhatsApp report inbox:** reports patients send are filed into their record.",
        "**Drop-off flags:** patients who have missed more than one date are highlighted for a call.",
      ] },
      { t: "p", text: "See [Follow-Up Intelligence](/features/follow-up-intelligence) and [how to reduce missed follow-ups](/blog/reduce-missed-follow-ups-clinic)." },
    ],
  },
  {
    id: "roles",
    h2: "Roles and audit for staff",
    blocks: [
      { t: "p", text: "Patient records are sensitive. Each person in the clinic gets their own login and sees only what their role needs." },
      {
        t: "table",
        head: ["Role", "Can do", "Cannot do"],
        rows: [
          ["Doctor", "Everything clinical: notes, Rx, approve AI drafts, view all records", "—"],
          ["Front desk", "Queue, register patients, upload reports, send reminders", "Read clinical notes unless the doctor allows it"],
          ["Admin / owner", "Clinic settings, staff, reports, dashboard", "Change clinical notes"],
        ],
      },
      { t: "p", text: "Every view and change of a patient record is written to an audit trail. Staff logins use a second step (OTP) to sign in. This also helps clinics prepare for duties under the Digital Personal Data Protection Act, 2023." },
    ],
  },
  {
    id: "reports",
    h2: "Reports for the clinic owner and CA",
    blocks: [
      { t: "p", text: "The clinic dashboard answers the owner's questions without exporting spreadsheets: how many patients came today and this month, how many were new, how many chronic patients returned on time, and how many follow-ups are overdue." },
      // TODO (confirm with product before publishing): exact contents of the CA report
      { t: "p", text: "A monthly summary report is available for your CA. It is a summary for your accountant, not a replacement for full accounting or GST billing software." },
      { t: "p", text: "The most useful number for most clinics is second-visit return rate: of the patients asked to come back, how many did. It shows whether follow-ups are working." },
    ],
  },
  {
    id: "pricing",
    h2: "Clinic software pricing in India",
    blocks: [
      { t: "p", text: "Clinic management software in India is priced per doctor, per clinic, or per module. Before comparing prices, list what you actually need and ask each vendor for the full yearly cost, including setup, extra staff logins and WhatsApp or SMS messages." },
      {
        t: "table",
        head: ["Clinic size", "What usually matters", "medaurion plan"],
        rows: [
          ["Single doctor, starting out", "Fast Rx, history, follow-ups", "Free (10 patients/month in Patient 360°)"],
          ["Single doctor, busy chronic OPD", "Brief for every patient, reminders, report inbox", "Doctor (early-access price on call)"],
          ["2+ doctors and staff", "Roles, audit, dashboard, CA report", "Clinic (₹2,999/month, early-access estimate)"],
        ],
      },
      { t: "p", text: "Full details on the [pricing page](/pricing). Prices are early-access estimates and may change before general launch." },
    ],
  },
  {
    id: "setup",
    h2: "Setup in one day",
    blocks: [
      { t: "steps", items: [
        "**Morning:** create the clinic, add staff logins and your WhatsApp number.",
        "**Afternoon:** import your patient list from Excel or CSV, or start fresh with today's patients.",
        "**Evening OPD:** run the queue in medaurion and write prescriptions there.",
        "**Next day:** check the Follow-Ups board and send the first reminders.",
      ] },
      { t: "p", text: "Founding Doctor clinics anywhere in India get setup done online by our team: 10 seats, a 12-week free pilot, and a price lock for 12–24 months." },
    ],
  },
  {
    id: "not-for",
    h2: "When you need a hospital system instead",
    blocks: [
      { t: "p", text: "medaurion is built for OPD clinics. If you run IPD beds, an in-house pharmacy with stock, operation theatres or insurance claims, you need a hospital management system. You can still use medaurion for the chronic OPD side alongside it." },
      { t: "p", text: "Compare options fairly: [HealthPlix alternatives](/compare/healthplix-alternatives) · [MocDoc alternatives](/compare/mocdoc-alternatives) · [Drlogy alternatives](/compare/drlogy-alternatives)." },
    ],
  },
];

const faqs: Faq[] = [
  { q: "What is clinic management software?", a: "It is software that runs the daily work of a clinic: patient queue, records, prescriptions, follow-ups, staff access and reports." },
  { q: "Is medaurion suitable for a single-doctor clinic?", a: "Yes. It is built for single-doctor and small clinics. A single doctor can run it without extra staff, and the free plan covers 10 patients a month in Patient 360°." },
  { q: "Does it include a booking link?", a: "A free appointment booking link for your clinic is launching soon." },
  { q: "Does medaurion do GST billing and inventory?", a: "No. medaurion focuses on the OPD: queue, records, prescriptions and follow-ups, with a monthly summary for your CA. Keep your accounting or billing software for GST invoices and stock." },
  { q: "Can front desk staff see clinical notes?", a: "Only if the doctor allows it. Each role has its own access, and every action is logged." },
  { q: "How long does setup take?", a: "Most small clinics can start the same day. Founding Doctor clinics anywhere in India get setup done online by our team." },
  { q: "Does it work on a phone?", a: "Yes. It runs in the browser on a phone, tablet or laptop." },
  { q: "Can I export my clinic's data?", a: "Yes. You can export your records at any time, including if you stop using medaurion." },
];

export default function Page() {
  return (
    <HubPage
      path={PATH}
      crumbs={[{ name: "Clinic management software", href: PATH }]}
      updated="2026-10-27"
      updatedLabel="27 Oct 2026"
      eyebrow="Clinic management software India"
      h1="Clinic management software for single-doctor and small clinics"
      lead="medaurion is clinic management software for single-doctor and small clinics in India. The front desk runs the queue and files reports, the doctor sees a short brief before each patient and writes the prescription, and follow-ups go out on WhatsApp after the visit. Staff get their own logins, and the owner gets a simple dashboard. Start with the free plan."
      secondaryCta={{ label: "See pricing", href: "/pricing" }}
      heroNote="Built for OPD clinics. Works in the browser. No card needed for the free plan."
      mock={{
        title: "Today · Evening OPD",
        tag: "Sample · fictional clinic",
        heading: "Queue",
        rows: [
          { label: "Token 12 · Meera K. · follow-up", value: "With doctor", tone: "ok" },
          { label: "Token 13 · Anil P. · new", value: "Waiting 6 min" },
          { label: "Token 14 · Sunita P. · HbA1c report", value: "Needs you", tone: "ai" },
          { label: "Token 15 · Ravi D. · BP review", value: "Waiting 2 min" },
          { label: "Follow-ups overdue this week", value: "7", tone: "up" },
        ],
        foot: "Front desk, doctor and owner see the same live day",
      }}
      sections={sections}
      faqs={faqs}
      finalCta={{ h: "Run tomorrow's OPD on medaurion", p: "A 15-minute call. We show the front desk and doctor screens on sample data, then set up your free plan.", label: "Book a 15-min call", href: "/#pilot" }}
      sources={["Government of India. Digital Personal Data Protection Act, 2023."]}
      sourcesNote="Names and numbers in the sample queue are fictional and shown for illustration only."
      schemaName={TITLE}
      schemaDescription={DESCRIPTION}
      offers={[{ name: "Free", price: "0" }, { name: "Clinic (early-access estimate)", price: "2999" }]}
    />
  );
}
