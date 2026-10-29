import Link from "next/link";
import type { ContentPage } from "@/content/types";
import { Icon } from "@/components/ui/Icon";
import JsonLd from "./JsonLd";
import { faqSchema } from "./schema";

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function ContentArticle({ page, meta }: { page: ContentPage; meta?: string }) {
  const toc = page.sections.map((s) => ({ id: slugify(s.h), h: s.h }));
  return (
    <>
      <header className="seo-hero">
        <div className="container seo-hero__inner">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1>{page.h1}</h1>
          <p className="seo-lead">{page.lead}</p>
          <div className="seo-hero__actions">
            <Link className="button button--primary" href="/#pilot">
              Join the doctor pilot <Icon name="arrow" size={17} />
            </Link>
            <Link className="button button--secondary" href="/features">
              See all features
            </Link>
          </div>
          <p className="seo-meta">
            {meta ? `${meta} · ` : ""}Updated {new Date(page.updated).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
          </p>
        </div>
      </header>

      <div className="container seo-body">
        <aside className="seo-toc" aria-label="On this page">
          <p>On this page</p>
          <ol>
            {toc.map((t) => (
              <li key={t.id}><Link href={`#${t.id}`}>{t.h}</Link></li>
            ))}
            {page.faqs.length ? <li><Link href="#faq">FAQ</Link></li> : null}
          </ol>
        </aside>

        <article className="seo-article">
          {page.sections.map((s) => (
            <section key={s.h} id={slugify(s.h)}>
              <h2>{s.h}</h2>
              {s.p?.map((para, i) => <p key={i}>{para}</p>)}
              {s.ul ? (
                <ul>
                  {s.ul.map((li, i) => <li key={i}>{li}</li>)}
                </ul>
              ) : null}
            </section>
          ))}

          {page.faqs.length ? (
            <section id="faq" className="seo-faq">
              <h2>Frequently asked questions</h2>
              {page.faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </section>
          ) : null}

          {page.related?.length ? (
            <section className="seo-related">
              <h2>Related</h2>
              <ul>
                {page.related.map((r) => (
                  <li key={r.href}><Link href={r.href}>{r.label} <Icon name="arrow" size={15} /></Link></li>
                ))}
              </ul>
            </section>
          ) : null}

          <aside className="seo-cta">
            <div>
              <h2>See it with your own patients</h2>
              <p>medaurion AIOS is in a free doctor pilot. AI assists. The doctor decides.</p>
            </div>
            <Link className="button button--light" href="/#pilot">
              Talk to us <Icon name="arrow" size={17} />
            </Link>
          </aside>
        </article>
      </div>
      {page.faqs.length ? <JsonLd data={faqSchema(page.faqs)} /> : null}
    </>
  );
}
