import PageShell from "../components/seo/PageShell";
import HubGrid from "../components/seo/HubGrid";
import { compares } from "@/content/compare";
import { pageMeta } from "@/lib/meta";

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
        items={compares}
      />
    </PageShell>
  );
}
