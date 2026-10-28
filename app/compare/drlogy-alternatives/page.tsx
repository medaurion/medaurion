import HubPage, { type HubSection } from "../../components/seo/HubPage";
import type { Faq } from "@/content/types";
import { pageMeta } from "@/lib/meta";
import { CHECKED, CHECKED_ISO, METHOD, comparisonTable, SWITCH_STEPS, ALT_SOURCES_NOTE } from "../alternatives-data";

/* /compare/drlogy-alternatives — P6. Keywords: "drlogy alternatives", "drlogy software", "drlogy clinic software" */

const PATH = "/compare/drlogy-alternatives";
const TITLE = "Drlogy Alternatives for Doctors in India (2026) | medaurion";
const DESCRIPTION =
  "Comparing Drlogy alternatives for Indian doctors: clinic and EMR software from Drlogy, HealthPlix, Eka Care, MocDoc and medaurion, with prices and sources.";

export const metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: ["drlogy alternatives", "drlogy alternative", "drlogy software", "drlogy clinic software", "drlogy price"],
});

const sections: HubSection[] = [
  {
    id: "quick-comparison",
    h2: "Quick comparison",
    blocks: [
      { t: "p", text: `Drlogy beside four alternatives, using what each company states on its public pages or software listings, checked on ${CHECKED}.` },
      comparisonTable("drlogy"),
      METHOD,
    ],
  },
  {
    id: "drlogy-strengths",
    h2: "Where Drlogy is strong",
    blocks: [
      { t: "p", text: "Drlogy offers clinic SaaS for doctors in India. Its Capterra listing describes online appointment booking, QR-code registration, patient EMR, telemedicine, billing and notifications by SMS, email and WhatsApp, on web, Android and iOS." },
      { t: "ul", items: [
        "**Listed price:** Capterra shows a basic plan from ₹299 per user per month, with a free trial.",
        "**Broad clinic features:** appointments, registration, EMR, billing and telemedicine in one product.",
        "**Patient communication:** SMS, email, WhatsApp and in-app notifications.",
        "**Online presence:** Drlogy also runs a large directory of doctors and hospitals.",
      ] },
      { t: "p", text: "If you want an all-round clinic tool with a low listed starting price, Drlogy is worth evaluating." },
    ],
  },
  {
    id: "why-look-elsewhere",
    h2: "Why some doctors look for an alternative",
    blocks: [
      { t: "p", text: "A search for Drlogy alternatives often comes from a doctor whose main problem is chronic patients, not appointments. These needs are worth checking against any product, including ours." },
      { t: "table", head: ["What the doctor wants", "Question to ask any vendor"], rows: [
        ["A free plan, not only a trial", "Is there a free plan I can keep using?"],
        ["What changed since the last visit", "Is there a pre-visit brief with links to sources?"],
        ["Trends from lab reports", "Are report values read and shown as trends with dates?"],
        ["Fewer lost follow-ups", "Is there an overdue list, reminders and drop-off flags?"],
        ["AI that the doctor controls", "Is AI text labelled and saved only after approval?"],
      ] },
    ],
  },
  {
    id: "alternatives",
    h2: "Drlogy alternatives compared",
    blocks: [
      { t: "h3", text: "HealthPlix" },
      { t: "p", text: "A widely used EMR that states 14,000+ doctors, with hospital, online consultation and specialty modules. See [HealthPlix alternatives](/compare/healthplix-alternatives)." },
      { t: "h3", text: "Eka Care" },
      { t: "p", text: "Digital health records, scheduling and telemedicine, with EkaScribe for AI clinical scribing. See [Eka Care alternatives](/compare/eka-care-alternatives)." },
      { t: "h3", text: "MocDoc" },
      { t: "p", text: "Software for hospitals, labs, pharmacies and clinics, plus an AI medical scribe. See [MocDoc alternatives](/compare/mocdoc-alternatives)." },
      { t: "h3", text: "medaurion" },
      { t: "p", text: "Our product. medaurion has a free plan (Patient 360° for 10 patients a month) and focuses on chronic patients: a brief before each visit, trends from reports, a WhatsApp report inbox, follow-ups with drop-off flags and AI notes the doctor approves. It is newer and currently in a doctor pilot." },
      { t: "p", text: "See [EMR software](/emr-software), [digital prescription](/digital-prescription) and [pricing](/pricing)." },
    ],
  },
  {
    id: "which-fits",
    h2: "Which one fits your clinic",
    blocks: [
      { t: "table", head: ["If your clinic…", "Consider"], rows: [
        ["Wants an all-round clinic tool at a low listed price", "Drlogy"],
        ["Wants a widely used EMR with many modules", "HealthPlix"],
        ["Mainly wants AI note-taking", "Eka Care or medaurion"],
        ["Runs IPD beds, a lab or a pharmacy", "MocDoc"],
        ["Sees many returning chronic patients", "medaurion"],
      ] },
    ],
  },
  {
    id: "switch",
    h2: "How to switch from Drlogy",
    blocks: [SWITCH_STEPS],
  },
];

const faqs: Faq[] = [
  { q: "What are the alternatives to Drlogy?", a: "Common alternatives include HealthPlix, Eka Care, MocDoc and medaurion, each with a different focus: a widely used EMR, AI scribing, hospital and lab software, and chronic-care follow-up." },
  { q: "How much does Drlogy cost?", a: `Drlogy's Capterra listing showed a basic plan from ₹299 per user per month, with a free trial and no free version, when we checked on ${CHECKED}. Please confirm current prices with Drlogy.` },
  { q: "Does medaurion have a free plan?", a: "Yes. The free plan includes Patient 360° for 10 patients a month, the medicine schedule card and the follow-up leak check." },
  { q: "Can I import patients from Drlogy?", a: "If you can export your patient list as Excel or CSV, it can be imported into medaurion." },
  { q: "Is this comparison neutral?", a: "medaurion is our product, so we are not neutral. We used only facts from public pages, linked them, and noted the date we checked." },
];

export default function Page() {
  return (
    <HubPage
      path={PATH}
      crumbs={[{ name: "Compare", href: "/compare" }, { name: "Drlogy alternatives", href: PATH }]}
      updated={CHECKED_ISO}
      updatedLabel={CHECKED}
      eyebrow="Compare"
      h1="Drlogy alternatives for doctors in India (2026)"
      lead="Drlogy offers clinic SaaS with a low listed starting price. If you are comparing Drlogy alternatives, this page sets it beside HealthPlix, Eka Care, MocDoc and medaurion using facts from each company's public pages or listings, with links and the date checked. medaurion is our product."
      secondaryCta={{ label: "See pricing", href: "/pricing" }}
      sections={sections}
      faqs={faqs}
      finalCta={{ h: "Start free with your chronic patients", p: "A 15-minute call. We show the brief on sample patients, then set up your free plan.", label: "Book a 15-min call", href: "/#pilot" }}
      sources={["[Capterra – Drlogy](https://www.capterra.com/p/213153/Drlogy/)", "[HealthPlix website](https://healthplix.com)", "[Capterra – Eka Care](https://www.capterra.com/p/10006107/Eka-Care/)", "[MocDoc – clinic management software article](https://mocdoc.com/blog/best-clinic-management-software-in-india)"]}
      sourcesNote={ALT_SOURCES_NOTE}
      showReview={false}
      schemaName={TITLE}
      schemaDescription={DESCRIPTION}
    />
  );
}
