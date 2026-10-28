import HubPage, { type HubSection } from "../components/seo/HubPage";
import type { Faq } from "@/content/types";
import { pageMeta } from "@/lib/meta";

/* /ai-for-doctors — hub P4. Primary keyword: "AI for doctors" (+ "ai medical scribe", "ai in healthcare india")
   Spoke: the existing blog post /blog/ai-medical-scribe-india-guide (no separate /ai-medical-scribe page, to avoid two pages competing) */

const PATH = "/ai-for-doctors";
const TITLE = "AI for Doctors in India – Scribe, Brief, Ask AI | medaurion";
const DESCRIPTION =
  "How AI helps Indian doctors today: AI medical scribe, pre-visit patient brief and Ask AI on the patient's own records. AI assists, the doctor decides.";

export const metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: ["ai for doctors", "ai medical scribe", "ai scribe india", "ai in healthcare india", "clinical documentation ai", "medical ai for clinics", "ai emr"],
});

const sections: HubSection[] = [
  {
    id: "where-ai-helps",
    h2: "Where AI helps in a clinic today",
    blocks: [
      { t: "p", text: "AI in healthcare covers everything from research to radiology. For a doctor running an OPD in India, the useful part today is narrower: AI that reads and writes clinic paperwork so the doctor spends less time searching and typing and more time with the patient." },
      {
        t: "table",
        head: ["Clinic task", "What AI can do", "What stays with the doctor"],
        rows: [
          ["Reading old records", "Summarise visits and reports into a short brief", "Checking the summary against sources"],
          ["Comparing reports", "Pull values from lab reports and show the trend", "Interpreting what the trend means"],
          ["Writing notes", "Turn dictation or a conversation into a structured draft", "Editing and approving the note"],
          ["Answering record questions", "Find the last creatinine or when a dose changed", "Any clinical decision"],
          ["Patient messages", "Draft reminders in English, Marathi or Hindi", "Approving templates and wording"],
        ],
      },
      { t: "p", text: "The rule in medaurion is simple and appears on every AI screen: **AI assists, the doctor decides.** AI text is shown differently from source data, and nothing AI drafts is saved without the doctor's approval." },
    ],
    aside: [
      { t: "callout", text: "**Short answer:** today AI helps doctors most with reading records, writing notes and preparing for the next patient – not with diagnosis." },
    ],
  },
  {
    id: "scribe",
    h2: "AI medical scribe: dictated and ambient notes",
    blocks: [
      { t: "p", text: "An AI medical scribe turns speech into a clinical note. There are two ways to use it." },
      {
        t: "cards",
        items: [
          { h: "Dictated notes", p: "The doctor speaks the key points after or during the visit – complaints, findings, plan. The AI arranges them under fixed headings." },
          { h: "Ambient notes", p: "With the patient's consent, the conversation is captured and the AI drafts a note from it. The doctor reviews the draft before saving." },
        ],
      },
      { t: "p", text: "In both cases the draft appears with a clear DRAFT label. The doctor edits, approves, and only then does it become part of the record. A scribe that saves notes without review is not safe in a clinic." },
      { t: "h3", text: "What to check in any AI scribe" },
      { t: "ul", items: [
        "Does it handle Indian English and mixed Hindi or Marathi speech?",
        "Are drug names and doses written correctly, and highlighted for review?",
        "Is consent for ambient capture recorded?",
        "Is the audio kept, and if so, where and for how long?",
        "Can you see which part of the note came from which part of the conversation?",
      ] },
      { t: "p", text: "For a longer guide, read [AI medical scribes in India](/blog/ai-medical-scribe-india-guide) and [why doctor approval matters in AI documentation](/blog/ai-clinical-documentation-doctor-approval). Feature detail: [AI clinical documentation](/features/ai-clinical-documentation)." },
    ],
  },
  {
    id: "briefing",
    h2: "Morning OPD Briefing",
    blocks: [
      { t: "p", text: "The Morning OPD Briefing is the list of today's patients with a three- or four-line brief for each one: what changed since the last visit, what is pending and what was planned. Many doctors read it on their phone before the OPD starts." },
      { t: "p", text: "The brief is prepared from the patient's own records: past notes, prescriptions and uploaded lab reports. Each line links to its source report or note, so the doctor can check it in one tap." },
      { t: "p", text: "Primary-care visits in India have been reported at about 2 minutes on average (Irving et al., BMJ Open, 2017). A prepared brief means less of that time goes on finding the file. See the [Patient Brief](/features/patient-brief) feature." },
    ],
  },
  {
    id: "ask-ai",
    h2: "Ask AI on a patient's own records",
    blocks: [
      { t: "p", text: "Ask AI lets the doctor ask a plain question about one patient and get an answer from that patient's record only. It does not search the internet or answer from general knowledge." },
      { t: "table", head: ["Example question", "Answer comes from"], rows: [
        ["When did we last change her metformin dose?", "Prescriptions in her record"],
        ["Show his creatinine over the last year", "Uploaded lab reports"],
        ["Was the eye check done after the last visit?", "Notes and documents"],
        ["Which tests are still pending?", "Pending test tracker"],
      ] },
      { t: "p", text: "Each answer shows where it came from. If the record doesn't contain the answer, Ask AI says so instead of guessing." },
    ],
  },
  {
    id: "limits",
    h2: "What AI must not do (no diagnosis)",
    blocks: [
      { t: "p", text: "Large language models can write fluent text that is wrong. In medicine this is called a hallucination, and it is the main risk of AI in a clinic. medaurion is designed around that risk." },
      { t: "ul", items: [
        "**No diagnosis.** The AI does not suggest a diagnosis or a treatment.",
        "**No silent changes.** The AI never changes a prescription or a saved note.",
        "**Sources shown.** Every summary line links to the record it came from.",
        "**Draft until approved.** AI text is labelled as a draft and is saved only after the doctor approves it.",
        "**Works without AI.** If AI is unavailable, the records, prescriptions and follow-ups still work.",
      ] },
      { t: "ai", text: "**Our rule:** AI assists, the doctor decides. If you see AI text in medaurion, it is either a draft waiting for you or a summary with its source linked." },
    ],
  },
  {
    id: "languages",
    h2: "Hindi, Marathi and English dictation",
    blocks: [
      { t: "p", text: "Doctors in India often speak to patients in one language and write notes in another. medaurion supports voice notes and prescriptions in English, Hindi and Marathi, and the clinical note is drafted in English for the record." },
      { t: "p", text: "Patient-facing text – the prescription, the medicine schedule card and reminders – can be sent in English, मराठी or हिंदी. See [multilingual reminders](/features/multilingual-reminders)." },
    ],
  },
  {
    id: "rules",
    h2: "NMC and DPDP considerations",
    blocks: [
      { t: "p", text: "Using AI does not change a doctor's professional responsibility. The doctor remains responsible for the diagnosis, the prescription and the content of the record, whatever tool was used to write it." },
      { t: "ul", items: [
        "**Consent:** tell patients when a conversation is being captured for an ambient note, and record their consent.",
        "**Data protection:** under the Digital Personal Data Protection Act, 2023, personal data should be used only for the purpose the patient agreed to. medaurion records consent per purpose (care, reminders, AI processing).",
        "**Audit trail:** every AI run and every approval is logged with who did it and when.",
        "**No data selling:** patient data is never sold or shared with pharma companies or advertisers.",
      ] },
      { t: "fine", text: "This section is general information, not legal advice. Check your own obligations with a legal adviser and your State Medical Council's guidance." },
    ],
  },
  {
    id: "choose",
    h2: "How to evaluate AI tools for your clinic",
    blocks: [
      { t: "steps", items: [
        "**Test it on your own cases.** Ask for a demo using sample records that look like your patients.",
        "**Check every source link.** Pick five summary lines and confirm each one against the report.",
        "**Try your accent and languages.** Dictate a real note the way you speak in OPD.",
        "**Ask where data goes.** Which AI provider is used, where data is processed, and how long it is kept.",
        "**Measure time.** Time five visits with and without the tool before deciding.",
      ] },
      { t: "p", text: "Comparing products? See [Eka Care alternatives](/compare/eka-care-alternatives) and [MocDoc alternatives](/compare/mocdoc-alternatives)." },
    ],
  },
];

const faqs: Faq[] = [
  { q: "How can AI help doctors in India?", a: "Today AI helps most with reading records, summarising reports, drafting clinical notes from dictation and preparing a brief before each visit. Clinical decisions stay with the doctor." },
  { q: "What is an AI medical scribe?", a: "It is software that turns a doctor's dictation, or with consent the doctor–patient conversation, into a structured clinical note that the doctor reviews and approves." },
  { q: "Does medaurion's AI diagnose patients?", a: "No. It summarises the clinic's own records and drafts notes. It does not suggest diagnoses or treatments, and nothing is saved without the doctor's approval." },
  { q: "Can I dictate in Hindi or Marathi?", a: "Yes. Voice notes and prescriptions are supported in English, Hindi and Marathi." },
  { q: "What happens if the AI makes a mistake?", a: "Every summary line links to its source and every draft needs the doctor's approval, so mistakes can be caught before they enter the record." },
  { q: "Does the software work without AI?", a: "Yes. Records, prescriptions, the queue and follow-ups work even if AI is switched off or unavailable." },
];

export default function Page() {
  return (
    <HubPage
      path={PATH}
      crumbs={[{ name: "AI for doctors", href: PATH }]}
      updated="2026-10-27"
      updatedLabel="27 Oct 2026"
      eyebrow="AI for doctors in India"
      h1="AI that assists Indian doctors – the doctor always decides"
      lead="medaurion uses AI for doctors where it helps most in an Indian OPD: an AI medical scribe for notes, a Morning OPD Briefing that summarises each patient before the visit, and Ask AI to find answers in a patient's own records. Every summary links to its source, nothing is saved without the doctor's approval, and the AI never diagnoses."
      secondaryCta={{ label: "Start free", href: "/pricing" }}
      heroNote="AI text is always labelled. Records and follow-ups work even without AI."
      mock={{
        title: "AI draft note · Token 9",
        tag: "Sample · fictional patient",
        heading: "Draft – needs doctor approval",
        rows: [
          { label: "Complaints", value: "Tiredness 3 wks" },
          { label: "Findings (dictated)", value: "BP 142/88, wt 74 kg" },
          { label: "Reports", value: "TSH 7.8 (was 3.1)", tone: "up" },
          { label: "Plan (dictated)", value: "Review dose, repeat TSH 6 wks" },
          { label: "Sources linked", value: "3 reports, 1 note", tone: "ok" },
        ],
        foot: "Approve · Edit · Discard – nothing is saved until you approve",
      }}
      sections={sections}
      faqs={faqs}
      finalCta={{ h: "See the AI on sample patients", p: "A 15-minute call. Dictate a note, read a brief, ask a question – then decide.", label: "Book a 15-min call", href: "/#pilot" }}
      sources={[
        "Irving G et al. International variations in primary care physician consultation time: a systematic review of 67 countries. BMJ Open, 2017.",
        "Government of India. Digital Personal Data Protection Act, 2023.",
      ]}
      sourcesNote="The sample draft above is fictional and shown for illustration only."
      schemaName={TITLE}
      schemaDescription={DESCRIPTION}
      offers={[{ name: "Free", price: "0" }]}
    />
  );
}
