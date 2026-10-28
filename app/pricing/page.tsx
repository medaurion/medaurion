import HubPage, { type HubSection } from "../components/seo/HubPage";
import type { Faq } from "@/content/types";
import { pageMeta } from "@/lib/meta";

/* /pricing — P7. Replaces the old pricing page (Starter/Pro/Premium/Enterprise ranges).
   Plans follow the 26 Oct 2026 launch decision: Free · Doctor · Clinic + Founding Doctor pilot. */

const PATH = "/pricing";
const TITLE = "Pricing for Doctors and Clinics | medaurion";
const DESCRIPTION =
  "medaurion pricing: a free plan for doctors, Doctor and Clinic plans in early access, and a 12-week free Founding Doctor pilot for 10 clinics across India.";

export const metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: ["medaurion pricing", "clinic software price india", "emr software price", "free emr for doctors", "clinic management software cost"],
});

const sections: HubSection[] = [
  {
    id: "plans",
    h2: "Plans",
    blocks: [
      { t: "p", text: "Start free with your most complex patients. Upgrade when the brief and follow-ups are part of your day. Paid prices are **early-access estimates** and may change before general launch." },
      {
        t: "plans",
        plans: [
          { name: "Free", price: "₹0", unit: "/ month", items: ["Patient 360° for 10 patients/month", "Medicine schedule card", "Follow-up leak check", "Booking link (launching soon)", "Medical certificate (launching soon)"] },
          { name: "Doctor", price: "On call", unit: "early-access", feat: true, items: ["Unlimited Patient 360°", "Morning OPD Briefing", "Dictated prescriptions, treatment timeline", "WhatsApp report inbox, pending test tracker", "Follow-ups, Ask AI, Health Card"] },
          { name: "Clinic", price: "₹2,999", unit: "/ month · estimate", items: ["Everything in Doctor", "Staff roles and audit trail", "WhatsApp assistant, care moments", "Clinic dashboard, CA report", "Family linking; ABHA linking (planned)"] },
        ],
      },
    ],
  },
  {
    id: "compare-plans",
    h2: "What's in each plan",
    blocks: [
      { t: "table", head: ["Feature", "Free", "Doctor", "Clinic"], rows: [
        ["Patient 360° record and brief", "10 patients/month", "Unlimited", "Unlimited"],
        ["Medicine schedule card (English, मराठी, हिंदी)", "Yes", "Yes", "Yes"],
        ["Follow-up leak check", "Yes", "Yes", "Yes"],
        ["Morning OPD Briefing", "—", "Yes", "Yes"],
        ["Dictated prescriptions and AI draft notes", "—", "Yes", "Yes"],
        ["WhatsApp report inbox and follow-up reminders", "—", "Yes", "Yes"],
        ["Pending test tracker, treatment timeline", "—", "Yes", "Yes"],
        ["Ask AI on patient records, Health Card", "—", "Yes", "Yes"],
        ["Staff roles and audit trail", "—", "—", "Yes"],
        ["WhatsApp assistant, care moments", "—", "—", "Yes"],
        ["Clinic dashboard and CA report", "—", "—", "Yes"],
        ["Family linking", "—", "—", "Yes"],
        ["ABHA linking", "—", "—", "Planned"],
      ] },
      { t: "fine", text: "WhatsApp Business messages have a per-message cost set by Meta. We show the expected cost for your clinic before you switch reminders on." },
    ],
  },
  {
    id: "founding-doctor",
    h2: "Founding Doctor programme – 10 seats across India",
    blocks: [
      { t: "callout", text: "**10 seats · 12-week free pilot · price locked for 12–24 months · we set it up for you · you keep your data if you leave.**" },
      { t: "p", text: "Founding Doctors use the full product with their own patients for 12 weeks at no cost. Our team imports your patient list, sets up templates and WhatsApp, and measures results with you using your own before-and-after numbers, such as second-visit returns and time spent per follow-up visit." },
      { t: "p", text: "After the pilot you can continue at the locked price or leave and export all your data." },
    ],
  },
  {
    id: "why-these-prices",
    h2: "Why prices are estimates",
    blocks: [
      { t: "p", text: "medaurion is in a doctor pilot. We are testing the plans with practising doctors before fixing final prices. We would rather publish an honest estimate than a number that changes after you sign up." },
      { t: "p", text: "Comparing costs across products? Our guides on [EMR software](/emr-software#cost) and [clinic management software](/clinic-management-software#pricing) list the questions to ask every vendor about setup, messages and extra users." },
    ],
  },
];

const faqs: Faq[] = [
  { q: "Is the free plan really free?", a: "Yes. The free plan costs ₹0 and needs no card. It includes Patient 360° for 10 patients a month, the medicine schedule card and the follow-up leak check." },
  { q: "Are these the final prices?", a: "No. Paid prices are early-access estimates while medaurion is in a doctor pilot. Final prices will be published after the pilot, and Founding Doctors keep a locked price for 12–24 months." },
  { q: "What does the Doctor plan cost?", a: "The Doctor plan price is shared on a 15-minute call during early access, so we can understand your clinic size first." },
  { q: "Do WhatsApp messages cost extra?", a: "WhatsApp Business messages have a per-message cost set by Meta. We show the expected cost for your clinic before you switch reminders on." },
  { q: "Do I need to replace my current software?", a: "No. medaurion is designed to work alongside the software you already use." },
  { q: "Can I export my data if I leave?", a: "Yes. You can export your records at any time, on any plan." },
  { q: "Who can join the Founding Doctor programme?", a: "Doctors with an OPD anywhere in India. There are 10 seats. Book a 15-minute call to apply; demo and setup happen online." },
];

export default function Page() {
  return (
    <HubPage
      path={PATH}
      crumbs={[{ name: "Pricing", href: PATH }]}
      updated="2026-10-27"
      updatedLabel="27 Oct 2026"
      eyebrow="Pricing"
      h1="medaurion pricing for doctors and clinics"
      lead="Start free, with Patient 360° for 10 patients a month and no card needed. The Doctor and Clinic plans are in early access, with prices shown as estimates until the doctor pilot ends. Founding Doctors anywhere in India get a 12-week free pilot and a locked price."
      secondaryCta={{ label: "See what's included", href: "#compare-plans" }}
      sections={sections}
      faqs={faqs}
      finalCta={{ h: "Start free or join the pilot", p: "A 15-minute call. We set up your free plan or check if a Founding Doctor seat is open.", label: "Book a 15-min call", href: "/#pilot" }}
      showReview={false}
      schemaName={TITLE}
      schemaDescription={DESCRIPTION}
      offers={[{ name: "Free", price: "0" }, { name: "Clinic (early-access estimate)", price: "2999" }]}
    />
  );
}
