import { notFound } from "next/navigation";
import PageShell from "../../components/seo/PageShell";
import ContentArticle from "../../components/seo/ContentArticle";
import { features, getFeature } from "@/content/features";
import { pageMeta } from "@/lib/meta";

export function generateStaticParams() {
  return features.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getFeature(slug);
  if (!page) return {};
  return pageMeta({ title: page.seoTitle, description: page.description, path: `/features/${page.slug}`, keywords: page.keywords });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getFeature(slug);
  if (!page) notFound();
  return (
    <PageShell crumbs={[{ name: "Features", href: "/features" }, { name: page.h1, href: `/features/${page.slug}` }]}>
      <ContentArticle page={page}  />
    </PageShell>
  );
}
