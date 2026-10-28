import HubPage, { type HubSection } from "../../components/seo/HubPage";
import type { Faq } from "@/content/types";
import { pageMeta } from "@/lib/meta";
import { CHECKED, CHECKED_ISO, METHOD, comparisonTable, SWITCH_STEPS, ALT_SOURCES_NOTE } from "../alternatives-data";

/* /compare/mocdoc-alternatives — P6. Keywords: "mocdoc alternatives", "mocdoc software", "mocdoc clinic software" */

const PATH = "/compare/mocdoc-alternatives";
const TITLE = "MocDoc Alternatives for Clinics in India (2026) | medaurion";
const DESCRIPTION =
  "Comparing MocDoc alternatives for Indian clinics: hospital, clinic and EMR software from MocDoc, HealthPlix, Eka Care, Drlogy and medaurion, with sources.";

export const metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: ["mocdoc alternatives", "mocdoc alternative", "mocdoc software", "mocdoc clinic software", "hospital management software alternative"],
});

const sections: HubSection[] = [
  {
    id: "quick-comparison",
    h2: "Quick comparison",
    blocks: [
      { t: "p", text: `MocDoc beside four alternatives, using what each company states on its public pages, checked on ${CHECKED}.` },
      comparisonTable("mocdoc"),
      METHOD,
    ],
  },
  {
    id: "mocdoc-strengths",
    h2: "Where MocDoc is strong",
    blocks: [
      { t: "p", text: "MocDoc offers a wide range of healthcare software. Its clinic software article lists products for hospitals, laboratories, pharmacies, clinics and polyclinics, dental clinics, ophthalmology and ART centres, plus SenZ AI, an AI medical scribe." },
      { t: "ul", items: [
        "**One vendor for many departments:** useful when a clinic also runs a lab, a pharmacy or inpatient beds.",
        "**Specialty products:** separate software for dental, eye and ART centres.",
        "**Room to grow:** a clinic that plans to become a small hospital can stay with one vendor.",
        "**AI scribe:** SenZ AI for clinical documentation.",
      ] },
      { t: "p", text: "If your clinic is on its way to becoming a multi-department or inpatient facility, MocDoc's breadth is a real advantage." },
    ],
  },
  {
    id: "why-look-elsewhere",
    h2: "Why some doctors look for an alternative",
    blocks: [
      { t: "p", text: "A broad hospital-style system is not always the best fit for a single-doctor OPD. These needs are worth checking against any product, including ours." },
      { t: "table", head: ["What the doctor wants", "Question to ask any vendor"], rows: [
        ["Something simple for one OPD", "Can a single doctor run it without staff training?"],
        ["A written price", "Is there a published price, including setup and messages?"],
        ["Help with chronic patients", "Does it show what changed since the last visit, with trends from reports?"],
        ["Fewer missed follow-ups", "Is there an overdue list, reminders and drop-off flags?"],
        ["Indian data rules", "Does it explain how it handles consent under the DPDP Act, 2023?"],
      ] },
    ],
  },
  {
    id: "alternatives",
    h2: "MocDoc alternatives compared",
    blocks: [
      { t: "h3", text: "HealthPlix" },
      { t: "p", text: "A widely used EMR that states 14,000+ doctors, with hospital, online consultation and specialty modules. See [HealthPlix alternatives](/compare/healthplix-alternatives)." },
      { t: "h3", text: "Eka Care" },
      { t: "p", text: "Digital health records, scheduling and telemedicine, with EkaScribe for AI clinical scribing. See [Eka Care alternatives](/compare/eka-care-alternatives)." },
      { t: "h3", text: "Drlogy" },
      { t: "p", text: "Clinic SaaS with online appointments, QR registration, EMR, telemedicine and billing; Capterra lists a basic plan from ₹299 per user per month. See [Drlogy alternatives](/compare/drlogy-alternatives)." },
      { t: "h3", text: "medaurion" },
      { t: "p", text: "Our product. medaurion is built for OPD clinics with many returning chronic patients: a brief before each visit, trends from lab reports, a WhatsApp report inbox and follow-ups after the visit. It is not a hospital system – no IPD, pharmacy stock or lab module – and it can run alongside one. It has a free plan and is currently in a doctor pilot." },
      { t: "p", text: "See [clinic management software](/clinic-management-software) and [chronic care software](/chronic-care-software)." },
    ],
  },
  {
    id: "which-fits",
    h2: "Which one fits your clinic",
    blocks: [
      { t: "table", head: ["If your clinic…", "Consider"], rows: [
        ["Runs IPD beds, a lab or a pharmacy", "MocDoc"],
        ["Is a dental, eye or ART centre", "MocDoc's specialty products, or a specialty EMR"],
        ["Wants a widely used EMR", "HealthPlix"],
        ["Wants a low listed starting price", "Drlogy"],
        ["Is a single-doctor or small OPD with many chronic patients", "medaurion"],
      ] },
    ],
  },
  {
    id: "switch",
    h2: "How to switch from MocDoc",
    blocks: [
      { t: "p", text: "If MocDoc runs your lab, pharmacy or billing, keep it for those and move only the OPD chronic-care work. If you are a small OPD, move in stages." },
      SWITCH_STEPS,
    ],
  },
];

const faqs: Faq[] = [
  { q: "What are the alternatives to MocDoc?", a: "Common alternatives include HealthPlix, Eka Care, Drlogy and medaurion. MocDoc is broader (hospital, lab, pharmacy); the others focus more on clinic EMR, AI scribing, low-cost clinic SaaS or chronic-care follow-up." },
  { q: "How much does MocDoc cost?", a: `MocDoc did not publish prices in the clinic software article we checked on ${CHECKED}. Please ask MocDoc directly for current prices.` },
  { q: "Is medaurion a hospital management system?", a: "No. medaurion is built for OPD clinics. It does not handle IPD beds, pharmacy stock or lab operations, and it can run alongside a hospital system." },
  { q: "Can I use medaurion alongside MocDoc?", a: "Yes. medaurion is designed to work alongside existing software. Patients can be imported from Excel or CSV." },
  { q: "Is this comparison neutral?", a: "medaurion is our product, so we are not neutral. We used only facts from public pages, linked them, and noted the date we checked." },
];

export default function Page() {
  return (
    <HubPage
      path={PATH}
      crumbs={[{ name: "Compare", href: "/compare" }, { name: "MocDoc alternatives", href: PATH }]}
      updated={CHECKED_ISO}
      updatedLabel={CHECKED}
      eyebrow="Compare"
      h1="MocDoc alternatives for clinics in India (2026)"
      lead="MocDoc offers software for hospitals, labs, pharmacies and clinics. If you are comparing MocDoc alternatives for a smaller OPD, this page sets it beside HealthPlix, Eka Care, Drlogy and medaurion using facts from each company's public pages, with links and the date checked. medaurion is our product."
      secondaryCta={{ label: "See clinic software", href: "/clinic-management-software" }}
      sections={sections}
      faqs={faqs}
      finalCta={{ h: "See medaurion on a sample OPD", p: "A 15-minute call. Then start free, alone or alongside your current system.", label: "Book a 15-min call", href: "/#pilot" }}
      sources={["[MocDoc – clinic management software article](https://mocdoc.com/blog/best-clinic-management-software-in-india)", "[HealthPlix website](https://healthplix.com)", "[Capterra – Eka Care](https://www.capterra.com/p/10006107/Eka-Care/)", "[Capterra – Drlogy](https://www.capterra.com/p/213153/Drlogy/)"]}
      sourcesNote={ALT_SOURCES_NOTE}
      showReview={false}
      schemaName={TITLE}
      schemaDescription={DESCRIPTION}
    />
  );
}
