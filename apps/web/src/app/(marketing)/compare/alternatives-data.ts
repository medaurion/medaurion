import type { Block } from "@/components/seo/HubPage";

/* Shared facts for the /compare/*-alternatives pages.
   RULE: only facts from each company's public pages, with the date checked.
   When anything here changes, update CHECKED and re-check every row. */

export const CHECKED = "27 Oct 2026";
export const CHECKED_ISO = "2026-10-27";

export const METHOD: Block = {
  t: "fine",
  text: `How we compare: we read each company's public website or public software listing on ${CHECKED} and wrote down only what they state about themselves. We did not test competitor products. Prices and features change, so please check with each company before deciding. medaurion is our product and is currently in a doctor pilot.`,
};

export type Vendor = { key: string; name: string; focus: string; price: string; source: string };

export const VENDORS: Vendor[] = [
  {
    key: "healthplix",
    name: "HealthPlix",
    focus: "EMR and clinic management, hospital (IPD) module, tools for pharma, patient app with ABHA. Describes itself as India's largest online and offline EMR, with 14,000+ doctors.",
    price: "Not shown on homepage; demo and free trial offered",
    source: "[healthplix.com](https://healthplix.com)",
  },
  {
    key: "eka-care",
    name: "Eka Care",
    focus: "Digital health records, scheduling, medication management and telemedicine; EkaScribe for AI clinical scribing.",
    price: "Not listed on its Capterra page",
    source: "[Capterra – Eka Care](https://www.capterra.com/p/10006107/Eka-Care/)",
  },
  {
    key: "mocdoc",
    name: "MocDoc",
    focus: "Software for hospitals, labs, pharmacies, clinics and polyclinics, dental, ophthalmology and ART centres; SenZ AI medical scribe.",
    price: "Not published in its clinic software article",
    source: "[mocdoc.com](https://mocdoc.com/blog/best-clinic-management-software-in-india)",
  },
  {
    key: "drlogy",
    name: "Drlogy",
    focus: "Clinic SaaS: online appointments, QR registration, EMR, telemedicine, billing, and SMS, email and WhatsApp notifications; web, Android and iOS.",
    price: "Capterra lists a basic plan from ₹299 per user per month; free trial, no free version",
    source: "[Capterra – Drlogy](https://www.capterra.com/p/213153/Drlogy/)",
  },
  {
    key: "medaurion",
    name: "medaurion",
    focus: "EMR built around chronic care: pre-visit patient brief, trends from lab reports, WhatsApp follow-ups, doctor-approved AI notes.",
    price: "Free plan; Clinic plan ₹2,999/month (early-access estimate)",
    source: "[medaurion pricing](/pricing)",
  },
];

/** Comparison table of all vendors except the one the page is about first */
export function comparisonTable(firstKey: string): Block {
  const first = VENDORS.filter((v) => v.key === firstKey);
  const rest = VENDORS.filter((v) => v.key !== firstKey);
  return {
    t: "table",
    head: ["Product", "Main focus (as the company describes it)", "Published price", "Source"],
    rows: [...first, ...rest].map((v) => [`**${v.name}**`, v.focus, v.price, v.source]),
  };
}

export const SWITCH_STEPS: Block = {
  t: "steps",
  items: [
    "**Export your patient list** from your current software as CSV or Excel. Ask the vendor for a full export; most provide one.",
    "**Import the list** into the new software and check 10 random patients against the old system.",
    "**Bring reports for chronic patients** – upload the last two or three reports so trends are visible from the first visit.",
    "**Run both for two weeks.** New visits go into the new system; keep the old one for look-up.",
    "**Switch fully** once the front desk and doctor are comfortable, and keep the export file safely.",
  ],
};

export const ALT_SOURCES_NOTE = `Company names belong to their owners. Information about other products was taken from the public pages linked above on ${CHECKED} and may have changed.`;
