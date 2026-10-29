import PageShell from "@/components/seo/PageShell";
import HubGrid from "@/components/seo/HubGrid";
import { features } from "@/content/features";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Clinic Software Features for Doctors in India",
  description: "Features of medaurion AIOS: 60-second patient brief, lab result comparison, follow-up tracking, AI clinical notes, QR health card and multilingual reminders.",
  path: "/features",
});

export default function Page() {
  return (
    <PageShell crumbs={[{ name: "Features", href: "/features" }]}>
      <HubGrid
        base="/features"
        eyebrow="FEATURES"
        h1="Every tool to prepare, compare and follow up"
        lead="medaurion AIOS brings the patient brief, lab comparison, follow-ups, AI notes and patient health card together for Indian clinics."
        items={features}
      />
    </PageShell>
  );
}
