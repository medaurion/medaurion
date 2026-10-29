import { notFound } from "next/navigation";
import PageShell from "@/components/seo/PageShell";
import ContentArticle from "@/components/seo/ContentArticle";
import JsonLd from "@/components/seo/JsonLd";
import { articleSchema } from "@/components/seo/schema";
import { posts, getPost } from "@/content/blog";
import { pageMeta } from "@/lib/meta";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getPost(slug);
  if (!page) return {};
  return pageMeta({ title: page.seoTitle, description: page.description, path: `/blog/${page.slug}`, keywords: page.keywords, type: "article" });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getPost(slug);
  if (!page) notFound();
  return (
    <PageShell crumbs={[{ name: "Blog", href: "/blog" }, { name: page.h1, href: `/blog/${page.slug}` }]}>
      <ContentArticle page={page} meta={page.readMinutes ? `${page.readMinutes} min read` : undefined} />
      <JsonLd data={articleSchema({ title: page.h1, description: page.description, href: `/blog/${page.slug}`, updated: page.updated })} />
    </PageShell>
  );
}
