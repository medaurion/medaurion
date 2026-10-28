import HubPage, { type HubSection } from "../components/seo/HubPage";
import type { Faq } from "@/content/types";
import { pageMeta } from "@/lib/meta";

/* /digital-prescription — hub P5. Primary keyword: "digital prescription" (+ "prescription app for doctors", "e-prescription") */

const PATH = "/digital-prescription";
const TITLE = "Digital Prescription App for Doctors (Free) | medaurion";
const DESCRIPTION =
  "Digital prescription app for Indian doctors: Rx in under a minute with templates or dictation, safety check, and a medicine card in English, Marathi or Hindi.";

export const metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: ["digital prescription", "prescription app for doctors", "e-prescription india", "electronic prescription app", "prescription software for doctors", "digital prescription software"],
});

const sections: HubSection[] = [
  {
    id: "valid-rx",
    h2: "What a valid prescription must contain in India",
    blocks: [
      { t: "p", text: "A digital prescription has to meet the same rules as a handwritten one. The main professional rules for doctors in India are the Indian Medical Council (Professional Conduct, Etiquette and Ethics) Regulations, 2002, which remain in force while the NMC's 2023 regulations are on hold." },
      { t: "ul", items: [
        "**Registration number:** the doctor's registration number from the State Medical Council or NMC should appear on every prescription (Regulation 1.4.2).",
        "**Generic names, legibly:** drugs should be prescribed with generic names, legibly and preferably in capital letters (Regulation 1.5). The Health Ministry told the Rajya Sabha in December 2025 that not following this is professional misconduct.",
        "**Doctor and clinic details:** name, qualification, clinic address and contact, and the doctor's signature.",
        "**Patient details:** name, age, sex, and the date of the prescription.",
        "**Each medicine:** name, strength, dose, how often, how long, and any special instructions.",
      ] },
      { t: "p", text: "Teleconsultation prescriptions also follow the Telemedicine Practice Guidelines, 2020, which group medicines into lists (O, A, B) and prohibit some drugs, such as Schedule X and NDPS drugs, from being prescribed by teleconsultation." },
      { t: "fine", text: "This is general information, not legal advice. Rules change; check the current NMC and State Medical Council guidance." },
    ],
    aside: [
      { t: "callout", text: "**Short answer:** a digital Rx needs the same details as a paper one – doctor's registration number, generic names written clearly, patient details, date and full dosing." },
    ],
  },
  {
    id: "fast-rx",
    h2: "Rx in under a minute with templates and dictation",
    blocks: [
      { t: "p", text: "A prescription app is only worth it if it is faster than the pad. medaurion uses three ways to keep a routine prescription under a minute." },
      { t: "cards", cols: 3, items: [
        { h: "Repeat last Rx", p: "For a stable chronic patient, start from the last prescription and change only what changed." },
        { h: "Templates", p: "Your own templates for common conditions – diabetes, hypertension, thyroid, fever, URTI – that you build once." },
        { h: "Dictation", p: "Speak the medicines and advice; a draft Rx appears for you to check and approve." },
      ] },
      { t: "p", text: "Generic names are shown first, with strength and form. The prescription prints on your letterhead with your registration number, or goes to the patient on WhatsApp as a PDF." },
      { t: "p", text: "Tests ordered on the prescription are tracked as pending until the report arrives, and the follow-up date is saved for reminders." },
    ],
  },
  {
    id: "safety",
    h2: "Drug safety checks",
    blocks: [
      { t: "p", text: "Before a prescription is sent, medaurion runs a safety check and shows anything that needs the doctor's attention. The doctor reviews each warning and decides." },
      // TODO (confirm with product before publishing): exact list of safety checks
      { t: "ul", items: [
        "Allergies recorded in the patient's record.",
        "The same medicine, or two medicines from the same class, prescribed twice.",
        "Common interactions with the patient's current medicines.",
        "Doses that look unusual for the strength chosen.",
        "Kidney function from the latest report, shown beside medicines that may need dose review.",
      ] },
      { t: "ai", text: "**The doctor decides:** safety checks are reminders, not rules. medaurion never changes a prescription by itself." },
    ],
  },
  {
    id: "patient-language",
    h2: "Patient-language prescription and medicine schedule card",
    blocks: [
      { t: "p", text: "Many patients can't read an English prescription, and even those who can often mix up when to take which tablet. Missed or wrong doses are a common reason chronic patients don't improve." },
      { t: "p", text: "With each prescription, medaurion can create a medicine schedule card in English, मराठी or हिंदी. It shows each medicine with simple morning, afternoon and night columns, before or after food, and for how many days." },
      { t: "table", head: ["Medicine", "Morning", "Afternoon", "Night", "Food"], rows: [
        ["METFORMIN 500 mg", "1", "—", "1", "After food"],
        ["TELMISARTAN 40 mg", "1", "—", "—", "Any time"],
        ["ATORVASTATIN 10 mg", "—", "—", "1", "After food"],
      ] },
      { t: "fine", text: "Sample card with fictional prescription, for illustration only." },
      { t: "p", text: "The card is also available as a free tool. See the [chronic care software](/chronic-care-software#tools) page." },
    ],
  },
  {
    id: "whatsapp",
    h2: "Sending Rx on WhatsApp",
    blocks: [
      { t: "p", text: "Patients lose paper prescriptions. A copy on WhatsApp stays on their phone, can be shown at the chemist, and can be forwarded to a family member who manages the medicines." },
      { t: "steps", items: [
        "Doctor approves the prescription.",
        "The patient receives it on WhatsApp from the clinic's number, with the medicine card in their language.",
        "Before the follow-up date, a reminder goes out with the tests to bring.",
        "If the patient sends a report back, it is filed in their record.",
      ] },
      { t: "p", text: "Messages are sent only with the patient's consent. WhatsApp Business messages have a per-message cost set by Meta. Read more on [WhatsApp patient reminders in India](/blog/whatsapp-patient-reminders-india)." },
    ],
  },
  {
    id: "free-vs-paid",
    h2: "Free vs paid",
    blocks: [
      { t: "table", head: ["", "Free", "Doctor (early access)"], rows: [
        ["Medicine schedule card", "Yes", "Yes"],
        ["Patient 360° with prescription history", "10 patients/month", "Unlimited"],
        ["Dictated prescriptions", "—", "Yes"],
        ["WhatsApp report inbox and follow-ups", "—", "Yes"],
        ["Pending test tracker", "—", "Yes"],
      ] },
      { t: "p", text: "Paid prices are early-access estimates. See the [pricing page](/pricing)." },
    ],
  },
];

const faqs: Faq[] = [
  { q: "Is a digital prescription valid in India?", a: "Yes, if it contains the same details required for a handwritten prescription, including the doctor's registration number and generic drug names written clearly. Teleconsultation prescriptions also follow the Telemedicine Practice Guidelines, 2020." },
  { q: "Is there a free prescription app for doctors?", a: "medaurion's free plan includes the medicine schedule card and Patient 360° for 10 patients a month. Dictated prescriptions and WhatsApp follow-ups are in the paid plan." },
  { q: "Can I write the prescription by voice?", a: "Yes. You can dictate in English, Hindi or Marathi, and a draft prescription appears for you to check and approve." },
  { q: "Can patients get the prescription in Marathi or Hindi?", a: "Yes. The medicine schedule card can be shared in English, Marathi or Hindi." },
  { q: "Does it print on my letterhead?", a: "Yes. Prescriptions print on your letterhead with your registration number, or can be sent as a PDF on WhatsApp." },
  { q: "Does the app check for drug interactions?", a: "A safety check runs before sending and shows warnings for the doctor to review. The doctor always decides." },
];

export default function Page() {
  return (
    <HubPage
      path={PATH}
      crumbs={[{ name: "Digital prescription", href: PATH }]}
      updated="2026-10-27"
      updatedLabel="27 Oct 2026"
      eyebrow="Digital prescription app for doctors"
      h1="Digital prescriptions your patients can actually follow"
      lead="medaurion is a digital prescription app for Indian doctors. Write a prescription in under a minute from templates, the last Rx or dictation, see a safety check before sending, and share it on WhatsApp with a medicine schedule card in English, Marathi or Hindi. The free plan includes the medicine card."
      secondaryCta={{ label: "Start free", href: "/pricing" }}
      heroNote="Prints on your letterhead with your registration number. No card needed for the free plan."
      mock={{
        title: "Prescription · Sunita P., 55 F",
        tag: "Sample · fictional patient",
        heading: "Rx – ready to approve",
        rows: [
          { label: "METFORMIN 500 mg", value: "1-0-1 after food" },
          { label: "TELMISARTAN 40 mg", value: "1-0-0" },
          { label: "ATORVASTATIN 10 mg", value: "0-0-1" },
          { label: "Safety check", value: "No warnings", tone: "ok" },
          { label: "Tests", value: "HbA1c, lipid profile", tone: "ai" },
          { label: "Follow-up", value: "In 3 months" },
        ],
        foot: "Send on WhatsApp with medicine card in मराठी",
      }}
      sections={sections}
      faqs={faqs}
      finalCta={{ h: "Write your next Rx on medaurion", p: "A 15-minute call. We set up your letterhead and templates, then you start free.", label: "Book a 15-min call", href: "/#pilot" }}
      sources={[
        "Indian Medical Council (Professional Conduct, Etiquette and Ethics) Regulations, 2002 – Regulations 1.4.2 and 1.5.",
        "[Medical Dialogues, 18 Dec 2025 – Non-compliance with NMC regulations on generic prescriptions is professional misconduct](https://medicaldialogues.in/news/health/doctors/non-compliance-with-nmc-regulations-on-generic-prescriptions-is-professional-misconduct-attracts-disciplinary-action-health-ministry-160932)",
        "Ministry of Health and Family Welfare / Board of Governors (MCI). Telemedicine Practice Guidelines, March 2020.",
      ]}
      sourcesNote="Sample prescription and patient above are fictional and shown for illustration only. Not a treatment recommendation."
      schemaName={TITLE}
      schemaDescription={DESCRIPTION}
      offers={[{ name: "Free", price: "0" }]}
    />
  );
}
