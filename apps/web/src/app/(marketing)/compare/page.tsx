import PageShell from "@/components/seo/PageShell";
import HubGrid from "@/components/seo/HubGrid";
import { compares } from "@/content/compare";
import { pageMeta } from "@/lib/meta";

const alternatives = [
  { slug: "healthplix-alternatives", eyebrow: "ALTERNATIVES", h1: "HealthPlix alternatives for doctors in India", description: "HealthPlix compared with Eka Care, MocDoc, Drlogy and medaurion, using facts from each company's public pages." },
  { slug: "eka-care-alternatives", eyebrow: "ALTERNATIVES", h1: "Eka Care alternatives for doctors in India", description: "Eka Care and EkaScribe compared with HealthPlix, MocDoc, Drlogy and medaurion, with sources." },
  { slug: "mocdoc-alternatives", eyebrow: "ALTERNATIVES", h1: "MocDoc alternatives for clinics in India", description: "MocDoc's hospital and clinic software compared with lighter OPD options for small clinics." },
  { slug: "drlogy-alternatives", eyebrow: "ALTERNATIVES", h1: "Drlogy alternatives for doctors in India", description: "Drlogy clinic SaaS compared with HealthPlix, Eka Care, MocDoc and medaurion, with listed prices." },
];

export const metadata = pageMeta({
  title: "Compare medaurion AIOS with EMR Software in India",
  description: "Honest comparisons of medaurion AIOS with DoctorsApp, HealthPlix, Eka Care and traditional EMR software.",
  path: "/compare",
});

export default function Page() {
  return (
    <PageShell crumbs={[{ name: "Compare", href: "/compare" }]}>
      <HubGrid
        base="/compare"
        eyebrow="COMPARE"
        h1="Honest comparisons for Indian clinics"
        lead="How medaurion AIOS compares with EMRs and other clinic software in India, and when each is the better fit."
        items={[...compares, ...alternatives]}
      />
    </PageShell>
  );
}
