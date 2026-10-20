import { notFound } from "next/navigation";
import PageShell from "../../components/seo/PageShell";
import ContentArticle from "../../components/seo/ContentArticle";
import { specialties, getSpecialty } from "@/content/specialties";
import { pageMeta } from "@/lib/meta";

export function generateStaticParams() {
  return specialties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getSpecialty(slug);
  if (!page) return {};
  return pageMeta({ title: page.seoTitle, description: page.description, path: `/specialties/${page.slug}`, keywords: page.keywords });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getSpecialty(slug);
  if (!page) notFound();
  return (
    <PageShell crumbs={[{ name: "Specialties", href: "/specialties" }, { name: page.h1, href: `/specialties/${page.slug}` }]}>
      <ContentArticle page={page}  />
    </PageShell>
  );
}
