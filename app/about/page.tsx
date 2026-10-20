import PageShell from "../components/seo/PageShell";
import ContentArticle from "../components/seo/ContentArticle";
import { about } from "@/content/static";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({ title: about.seoTitle, description: about.description, path: "/about" });

export default function Page() {
  return (
    <PageShell crumbs={[{ name: about.h1, href: "/about" }]}>
      <ContentArticle page={about} />
    </PageShell>
  );
}
