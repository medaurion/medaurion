import HubPage, { type HubSection } from "../../components/seo/HubPage";
import type { Faq } from "@/content/types";
import { pageMeta } from "@/lib/meta";
import { CHECKED, CHECKED_ISO, METHOD, comparisonTable, SWITCH_STEPS, ALT_SOURCES_NOTE } from "../alternatives-data";

/* /compare/healthplix-alternatives — P6. Keywords: "healthplix alternatives", "healthplix emr", "healthplix software price" */

const PATH = "/compare/healthplix-alternatives";
const TITLE = "HealthPlix Alternatives for Doctors in India (2026) | medaurion";
const DESCRIPTION =
  "Looking at HealthPlix alternatives? A fair comparison of EMR software for Indian doctors – HealthPlix, Eka Care, MocDoc, Drlogy and medaurion – with sources.";

export const metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: ["healthplix alternatives", "healthplix alternative", "healthplix emr", "healthplix software price", "healthplix vs medaurion"],
});

const sections: HubSection[] = [
  {
    id: "quick-comparison",
    h2: "Quick comparison",
    blocks: [
      { t: "p", text: `The table below summarises HealthPlix and four alternatives using what each company says on its public pages, checked on ${CHECKED}.` },
      comparisonTable("healthplix"),
      METHOD,
    ],
  },
  {
    id: "healthplix-strengths",
    h2: "Where HealthPlix is strong",
    blocks: [
      { t: "p", text: "HealthPlix is one of the best-known EMR names among Indian doctors. On its website it describes itself as India's largest online and offline EMR and states that more than 14,000 doctors use it." },
      { t: "ul", items: [
        "**Scale and familiarity:** many doctors and their colleagues already know it, which makes training and peer advice easier.",
        "**Breadth:** besides the clinic EMR, the site lists a hospital (IPD) module, an online consultation module and specialty-specific modules.",
        "**Online and offline:** it highlights online and offline use, which matters in clinics with unreliable internet.",
        "**Patient app with ABHA:** the site lists a patient app linked to ABHA.",
        "**Fast prescriptions:** the site promotes writing a prescription in about 30 seconds.",
      ] },
      { t: "p", text: "If you want a widely used EMR with a large installed base and many modules, HealthPlix is a reasonable choice to evaluate." },
    ],
  },
  {
    id: "why-look-elsewhere",
    h2: "Why some doctors look for an alternative",
    blocks: [
      { t: "p", text: "A search for HealthPlix alternatives usually starts with a specific need rather than a problem with the product. The needs below are worth checking against any EMR, including ours." },
      { t: "table", head: ["What the doctor wants", "Question to ask any vendor"], rows: [
        ["A clear price before the demo", "Is there a written price per doctor or clinic, including messages and setup?"],
        ["Less screen time per chronic patient", "Can I see what changed since the last visit in under 10 seconds?"],
        ["Fewer patients lost after visit 2", "Does it track overdue follow-ups and pending tests, and send reminders?"],
        ["Reports from WhatsApp filed automatically", "Do WhatsApp reports land in the right patient's record?"],
        ["Patients who understand their medicines", "Can I send a medicine card in Marathi or Hindi?"],
      ] },
    ],
  },
  {
    id: "alternatives",
    h2: "HealthPlix alternatives compared",
    blocks: [
      { t: "h3", text: "Eka Care" },
      { t: "p", text: "Eka Care offers digital health records, scheduling and telemedicine, and EkaScribe for AI clinical scribing. Worth evaluating if AI documentation is your main need. See [Eka Care alternatives](/compare/eka-care-alternatives)." },
      { t: "h3", text: "MocDoc" },
      { t: "p", text: "MocDoc covers hospitals, labs, pharmacies and clinics, plus specialty software and an AI medical scribe. Worth evaluating if you also run a lab, pharmacy or inpatient beds. See [MocDoc alternatives](/compare/mocdoc-alternatives)." },
      { t: "h3", text: "Drlogy" },
      { t: "p", text: "Drlogy offers clinic SaaS with online appointments, QR registration, EMR, telemedicine and billing. Its Capterra listing shows a basic plan from ₹299 per user per month. See [Drlogy alternatives](/compare/drlogy-alternatives)." },
      { t: "h3", text: "medaurion" },
      { t: "p", text: "medaurion is our product. It is an EMR built around chronic care: a brief of what changed before each visit, trends from lab reports, a WhatsApp report inbox, follow-ups with drop-off flags, and AI notes that the doctor approves. It has a free plan and can run alongside an existing EMR, including HealthPlix. It is newer and smaller than HealthPlix and is currently in a doctor pilot." },
      { t: "p", text: "Read the full [medaurion vs HealthPlix](/compare/medaurion-vs-healthplix) comparison, or see [chronic care software](/chronic-care-software)." },
    ],
  },
  {
    id: "which-fits",
    h2: "Which one fits your clinic",
    blocks: [
      { t: "table", head: ["If your clinic…", "Consider"], rows: [
        ["Wants a widely used EMR with many modules", "HealthPlix"],
        ["Mainly wants AI note-taking", "Eka Care, or medaurion"],
        ["Also runs IPD beds, a lab or a pharmacy", "MocDoc or another hospital system"],
        ["Wants a low listed starting price for basic clinic SaaS", "Drlogy"],
        ["Sees many returning chronic patients and loses follow-ups", "medaurion (alone or alongside your EMR)"],
      ] },
    ],
  },
  {
    id: "switch",
    h2: "How to switch from HealthPlix",
    blocks: [
      { t: "p", text: "You don't have to switch everything at once. Many clinics keep their EMR for prescriptions and add a chronic-care layer first." },
      SWITCH_STEPS,
    ],
  },
];

const faqs: Faq[] = [
  { q: "What are the main HealthPlix alternatives in India?", a: "Common alternatives include Eka Care, MocDoc, Drlogy and medaurion. Each has a different focus: AI scribing, hospital and lab software, low-cost clinic SaaS, and chronic-care follow-up respectively." },
  { q: "How much does HealthPlix cost?", a: `HealthPlix did not show prices on its homepage when we checked on ${CHECKED}. It offers a demo and a free trial. Please ask HealthPlix directly for current prices.` },
  { q: "Can I use medaurion alongside HealthPlix?", a: "Yes. medaurion is designed to work alongside an existing EMR. Patients can be imported from Excel or CSV." },
  { q: "Can I export my data from HealthPlix?", a: "Ask HealthPlix for a full export of your patient records before you switch. Most EMR vendors provide one." },
  { q: "Is this comparison neutral?", a: "medaurion is our product, so we are not neutral. We used only facts from each company's public pages, linked them, and noted the date we checked." },
];

export default function Page() {
  return (
    <HubPage
      path={PATH}
      crumbs={[{ name: "Compare", href: "/compare" }, { name: "HealthPlix alternatives", href: PATH }]}
      updated={CHECKED_ISO}
      updatedLabel={CHECKED}
      eyebrow="Compare"
      h1="HealthPlix alternatives for doctors in India (2026)"
      lead="HealthPlix is a widely used EMR in India. If you are looking at HealthPlix alternatives, this page compares it with Eka Care, MocDoc, Drlogy and medaurion using facts from each company's public pages, with links and the date checked. medaurion is our product; we say so where it appears."
      secondaryCta={{ label: "See pricing", href: "/pricing" }}
      sections={sections}
      faqs={faqs}
      finalCta={{ h: "Try medaurion alongside your current EMR", p: "A 15-minute call. See the chronic-care brief on sample patients, then start free.", label: "Book a 15-min call", href: "/#pilot" }}
      sources={["[HealthPlix website](https://healthplix.com)", "[Capterra – Eka Care](https://www.capterra.com/p/10006107/Eka-Care/)", "[MocDoc – clinic management software article](https://mocdoc.com/blog/best-clinic-management-software-in-india)", "[Capterra – Drlogy](https://www.capterra.com/p/213153/Drlogy/)"]}
      sourcesNote={ALT_SOURCES_NOTE}
      showReview={false}
      schemaName={TITLE}
      schemaDescription={DESCRIPTION}
    />
  );
}
