import PageShell from "../components/seo/PageShell";
import ContentArticle from "../components/seo/ContentArticle";
import { privacy } from "@/content/static";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({ title: privacy.seoTitle, description: privacy.description, path: "/privacy", noindex: true });

export default function Page() {
  return (
    <PageShell crumbs={[{ name: privacy.h1, href: "/privacy" }]}>
      <ContentArticle page={privacy} />
    </PageShell>
  );
}
