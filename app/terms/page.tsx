import PageShell from "../components/seo/PageShell";
import ContentArticle from "../components/seo/ContentArticle";
import { terms } from "@/content/static";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({ title: terms.seoTitle, description: terms.description, path: "/terms", noindex: true });

export default function Page() {
  return (
    <PageShell crumbs={[{ name: terms.h1, href: "/terms" }]}>
      <ContentArticle page={terms} />
    </PageShell>
  );
}
