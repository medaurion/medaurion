import HubPage, { type HubSection } from "../../components/seo/HubPage";
import type { Faq } from "@/content/types";
import { pageMeta } from "@/lib/meta";
import { CHECKED, CHECKED_ISO, METHOD, comparisonTable, SWITCH_STEPS, ALT_SOURCES_NOTE } from "../alternatives-data";

/* /compare/eka-care-alternatives — P6. Keywords: "eka care alternatives", "eka care app", "ekascribe alternative" */

const PATH = "/compare/eka-care-alternatives";
const TITLE = "Eka Care Alternatives for Doctors in India (2026) | medaurion";
const DESCRIPTION =
  "Comparing Eka Care alternatives for Indian doctors: AI scribe, EMR and follow-up tools from Eka Care, HealthPlix, MocDoc, Drlogy and medaurion, with sources.";

export const metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: ["eka care alternatives", "eka care alternative", "ekascribe alternative", "eka care emr", "ai scribe for doctors india"],
});

const sections: HubSection[] = [
  {
    id: "quick-comparison",
    h2: "Quick comparison",
    blocks: [
      { t: "p", text: `Here is Eka Care beside four alternatives, using what each company states on its public pages, checked on ${CHECKED}.` },
      comparisonTable("eka-care"),
      METHOD,
    ],
  },
  {
    id: "eka-strengths",
    h2: "Where Eka Care is strong",
    blocks: [
      { t: "p", text: "Eka Care is a well-known digital health company in India with products for both doctors and patients. For doctors, it is best known for EkaScribe, which it describes as AI-powered clinical scribing that turns doctor–patient conversations into documentation." },
      { t: "ul", items: [
        "**AI documentation focus:** EkaScribe is built specifically for clinical scribing, which is a strong fit for doctors whose main pain is typing notes.",
        "**Doctor and patient products:** it offers tools for patients as well as doctors, so patients may already know the brand.",
        "**Core clinic features:** its software listing includes patient records, scheduling, medication management and telemedicine.",
        "**Specialty use cases:** its listing mentions cardiology EMR as a use case.",
      ] },
      { t: "p", text: "If AI note-taking during the consultation is your top priority, Eka Care should be on your shortlist." },
    ],
  },
  {
    id: "why-look-elsewhere",
    h2: "Why some doctors look for an alternative",
    blocks: [
      { t: "p", text: "A search for Eka Care alternatives usually comes from a doctor who needs more than notes during the visit. These needs are worth checking against any product, including ours." },
      { t: "table", head: ["What the doctor wants", "Question to ask any vendor"], rows: [
        ["Help before the visit, not only during it", "Does it prepare a brief of what changed since the last visit?"],
        ["Trends from lab reports", "Are values read from uploaded reports and shown as trends with dates?"],
        ["Follow-ups after the visit", "Is there an overdue list, reminders and drop-off flags?"],
        ["Clear separation of AI text", "Is AI text labelled, linked to sources and saved only after approval?"],
        ["A written price", "Is there a published price per doctor or clinic?"],
      ] },
    ],
  },
  {
    id: "alternatives",
    h2: "Eka Care alternatives compared",
    blocks: [
      { t: "h3", text: "HealthPlix" },
      { t: "p", text: "A widely used EMR that states it is used by 14,000+ doctors, with hospital, online consultation and specialty modules. See [HealthPlix alternatives](/compare/healthplix-alternatives)." },
      { t: "h3", text: "MocDoc" },
      { t: "p", text: "Hospital, lab, pharmacy and clinic software, and its own AI medical scribe (SenZ AI). A fit if you need a broader hospital system. See [MocDoc alternatives](/compare/mocdoc-alternatives)." },
      { t: "h3", text: "Drlogy" },
      { t: "p", text: "Clinic SaaS with appointments, QR registration, EMR, telemedicine and billing; Capterra lists a basic plan from ₹299 per user per month. See [Drlogy alternatives](/compare/drlogy-alternatives)." },
      { t: "h3", text: "medaurion" },
      { t: "p", text: "Our product. medaurion covers the whole chronic-care visit: a Morning OPD Briefing before the visit, an AI scribe for dictated or ambient notes that the doctor approves, and WhatsApp follow-ups after the visit. Every AI summary links to its source. It has a free plan and is currently in a doctor pilot." },
      { t: "p", text: "Read [medaurion vs Eka Care](/compare/medaurion-vs-eka-care), [AI for doctors](/ai-for-doctors) and our [AI medical scribe guide](/blog/ai-medical-scribe-india-guide)." },
    ],
  },
  {
    id: "which-fits",
    h2: "Which one fits your clinic",
    blocks: [
      { t: "table", head: ["If your clinic…", "Consider"], rows: [
        ["Mainly wants AI notes during the consultation", "Eka Care or medaurion"],
        ["Wants a widely used EMR with many modules", "HealthPlix"],
        ["Runs IPD beds, a lab or a pharmacy", "MocDoc or another hospital system"],
        ["Wants a low listed starting price", "Drlogy"],
        ["Needs help before and after the visit for chronic patients", "medaurion"],
      ] },
    ],
  },
  {
    id: "switch",
    h2: "How to switch or add a second tool",
    blocks: [
      { t: "p", text: "If you like your current scribe, you can keep it and add medaurion for the brief and follow-ups. If you want one tool, move in stages." },
      SWITCH_STEPS,
    ],
  },
];

const faqs: Faq[] = [
  { q: "What are the alternatives to Eka Care for doctors?", a: "Common alternatives include HealthPlix, MocDoc, Drlogy and medaurion. They differ in focus: a widely used EMR, hospital and lab software, low-cost clinic SaaS, and chronic-care briefs with follow-ups." },
  { q: "What is EkaScribe?", a: "Eka Care describes EkaScribe as AI-powered clinical scribing that turns doctor–patient conversations into documentation." },
  { q: "Does medaurion have an AI scribe?", a: "Yes. Dictated or, with consent, ambient notes become a structured draft that the doctor edits and approves. Nothing is saved without approval." },
  { q: "How much does Eka Care cost?", a: `Its Capterra page did not list a price when we checked on ${CHECKED}. Please ask Eka Care directly for current prices.` },
  { q: "Is this comparison neutral?", a: "medaurion is our product, so we are not neutral. We used only facts from public pages, linked them, and noted the date we checked." },
];

export default function Page() {
  return (
    <HubPage
      path={PATH}
      crumbs={[{ name: "Compare", href: "/compare" }, { name: "Eka Care alternatives", href: PATH }]}
      updated={CHECKED_ISO}
      updatedLabel={CHECKED}
      eyebrow="Compare"
      h1="Eka Care alternatives for doctors in India (2026)"
      lead="Eka Care is known for EkaScribe, its AI clinical scribe. If you are comparing Eka Care alternatives, this page sets it beside HealthPlix, MocDoc, Drlogy and medaurion using facts from each company's public pages, with links and the date checked. medaurion is our product."
      secondaryCta={{ label: "See AI for doctors", href: "/ai-for-doctors" }}
      sections={sections}
      faqs={faqs}
      finalCta={{ h: "See the brief, the scribe and follow-ups together", p: "A 15-minute call on sample patients. Then start free.", label: "Book a 15-min call", href: "/#pilot" }}
      sources={["[Capterra – Eka Care](https://www.capterra.com/p/10006107/Eka-Care/)", "[HealthPlix website](https://healthplix.com)", "[MocDoc – clinic management software article](https://mocdoc.com/blog/best-clinic-management-software-in-india)", "[Capterra – Drlogy](https://www.capterra.com/p/213153/Drlogy/)"]}
      sourcesNote={ALT_SOURCES_NOTE}
      showReview={false}
      schemaName={TITLE}
      schemaDescription={DESCRIPTION}
    />
  );
}
