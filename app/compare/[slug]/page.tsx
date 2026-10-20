import { notFound } from "next/navigation";
import PageShell from "../../components/seo/PageShell";
import ContentArticle from "../../components/seo/ContentArticle";
import { compares, getCompare } from "@/content/compare";
import { pageMeta } from "@/lib/meta";

export function generateStaticParams() {
  return compares.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getCompare(slug);
  if (!page) return {};
  return pageMeta({ title: page.seoTitle, description: page.description, path: `/compare/${page.slug}`, keywords: page.keywords });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getCompare(slug);
  if (!page) notFound();
  return (
    <PageShell crumbs={[{ name: "Compare", href: "/compare" }, { name: page.h1, href: `/compare/${page.slug}` }]}>
      <ContentArticle page={page}  />
    </PageShell>
  );
}
