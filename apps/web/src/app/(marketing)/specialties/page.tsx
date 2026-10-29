import PageShell from "@/components/seo/PageShell";
import HubGrid from "@/components/seo/HubGrid";
import { specialties } from "@/content/specialties";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Clinic Software by Specialty | Diabetes, Cardiology, Kidney & More",
  description: "medaurion AIOS for diabetologists, cardiologists, nephrologists, endocrinologists, general physicians and pulmonologists in India.",
  path: "/specialties",
});

export default function Page() {
  return (
    <PageShell crumbs={[{ name: "Specialties", href: "/specialties" }]}>
      <HubGrid
        base="/specialties"
        eyebrow="BY SPECIALTY"
        h1="Built for doctors who see the same patients for years"
        lead="Specialty views for diabetology, cardiology, nephrology, endocrinology, general medicine and pulmonology."
        items={specialties}
      />
    </PageShell>
  );
}
