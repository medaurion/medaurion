import PageShell from "@/components/seo/PageShell";
import HubGrid from "@/components/seo/HubGrid";
import { posts } from "@/content/blog";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Clinic Workflow Guides for Indian Doctors | medaurion Blog",
  description: "Practical guides for Indian doctors and clinic teams: follow-ups, lab report trends, WhatsApp reminders, ABHA and AI documentation.",
  path: "/blog",
});

export default function Page() {
  return (
    <PageShell crumbs={[{ name: "Blog", href: "/blog" }]}>
      <HubGrid
        base="/blog"
        eyebrow="GUIDES FOR CLINICS"
        h1="Practical guides for doctors and clinic teams"
        lead="Workflow guides on follow-ups, lab trends, WhatsApp reminders, ABHA and safe AI documentation."
        items={posts}
      />
    </PageShell>
  );
}
