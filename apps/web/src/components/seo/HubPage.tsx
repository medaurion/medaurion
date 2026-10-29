import Link from "next/link";
import type { ReactNode } from "react";
import PageShell from "./PageShell";
import JsonLd from "./JsonLd";
import { faqSchema } from "./schema";
import { SITE, absoluteUrl } from "@/lib/site";
import type { Faq } from "@/content/types";
import "./hub-page.css";

/* ------------------------------------------------------------------
   HubPage — one layout for all SEO hub pages (EMR, clinic, AI, Rx,
   pricing, alternatives). Each page only passes its text as data.
   Inline text supports **bold** and [label](/link).
------------------------------------------------------------------- */

export type Block =
  | { t: "p"; text: string }
  | { t: "fine"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "steps"; items: string[] }
  | { t: "table"; head: string[]; rows: string[][] }
  | { t: "cards"; cols?: 2 | 3; items: { h: string; p: string }[] }
  | { t: "callout"; text: string }
  | { t: "ai"; text: string }
  | { t: "plans"; plans: Plan[] };

export type Plan = { name: string; price: string; unit?: string; items: string[]; feat?: boolean };

export type HubSection = { id: string; h2: string; blocks: Block[]; aside?: Block[] };

export type MockCard = {
  title: string;
  tag: string;
  heading?: string;
  rows: { label: string; value?: string; tone?: "up" | "ok" | "ai" }[];
  foot?: string;
};

export type HubPageProps = {
  path: string;
  crumbs: { name: string; href: string }[];
  updated: string; // YYYY-MM-DD
  updatedLabel: string; // e.g. "27 Oct 2026"
  eyebrow: string;
  h1: string;
  lead: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  heroNote?: string;
  mock?: MockCard;
  sections: HubSection[];
  faqs: Faq[];
  finalCta?: { h: string; p: string; label: string; href: string };
  sources?: string[];
  sourcesNote?: string;
  schemaName: string;
  schemaDescription: string;
  offers?: { name: string; price: string }[];
  showReview?: boolean; // false on pricing and compare pages
  children?: ReactNode;
};

/* ---- inline text: **bold** and [label](href) ---- */
function Inline({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const re = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    if (m[1]) parts.push(<b key={k++}>{m[1]}</b>);
    else if (m[3].startsWith("/") || m[3].startsWith("#")) parts.push(<Link key={k++} href={m[3]}>{m[2]}</Link>);
    else parts.push(<a key={k++} href={m[3]} target="_blank" rel="noopener noreferrer">{m[2]}</a>);
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

function BlockView({ b }: { b: Block }) {
  switch (b.t) {
    case "p":
      return <p><Inline text={b.text} /></p>;
    case "fine":
      return <p className="cc-fine"><Inline text={b.text} /></p>;
    case "h3":
      return <h3>{b.text}</h3>;
    case "ul":
      return <ul>{b.items.map((i) => <li key={i}><Inline text={i} /></li>)}</ul>;
    case "steps":
      return <ol className="cc-steps">{b.items.map((i) => <li key={i}><div><Inline text={i} /></div></li>)}</ol>;
    case "table":
      return (
        <div className="cc-tbl">
          <table>
            <thead><tr>{b.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
            <tbody>
              {b.rows.map((r, i) => (
                <tr key={i}>{r.map((c, j) => <td key={j}><Inline text={c} /></td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "cards":
      return (
        <div className={b.cols === 3 ? "cc-grid3" : "cc-grid2"}>
          {b.items.map((c) => (
            <div className="cc-card" key={c.h}><h3>{c.h}</h3><p><Inline text={c.p} /></p></div>
          ))}
        </div>
      );
    case "callout":
      return <div className="cc-callout"><p><Inline text={b.text} /></p></div>;
    case "ai":
      return <div className="cc-ai-note"><Inline text={b.text} /></div>;
    case "plans":
      return (
        <div className="cc-plans">
          {b.plans.map((p) => (
            <div className={`cc-plan${p.feat ? " cc-plan--feat" : ""}`} key={p.name}>
              <div className="cc-eyebrow">{p.name}</div>
              <div className="cc-price">{p.price} {p.unit ? <small>{p.unit}</small> : null}</div>
              <ul>{p.items.map((i) => <li key={i}><Inline text={i} /></li>)}</ul>
            </div>
          ))}
        </div>
      );
  }
}

function Mock({ m }: { m: MockCard }) {
  return (
    <figure className="cc-brief" aria-label={`${m.title} – sample with fictional data`}>
      <div className="cc-brief__top">
        <span><b>{m.title}</b></span>
        <span className="cc-tag cc-tag--fict">{m.tag}</span>
      </div>
      <div className="cc-changed" style={{ marginTop: 14 }}>
        {m.heading ? <h4>{m.heading}</h4> : null}
        <ul className="cc-mock-rows">
          {m.rows.map((r) => (
            <li key={r.label}>
              <span>{r.label}</span>
              {r.value ? <span className={r.tone ? `cc-${r.tone}` : "cc-mock-val"}>{r.value}</span> : null}
            </li>
          ))}
        </ul>
      </div>
      {m.foot ? <div className="cc-brief__foot"><span>{m.foot}</span></div> : null}
    </figure>
  );
}

export default function HubPage(p: HubPageProps) {
  const pageUrl = absoluteUrl(p.path);
  const schemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: p.schemaName,
      description: p.schemaDescription,
      url: pageUrl,
      inLanguage: "en-IN",
      dateModified: p.updated,
      author: { "@type": "Organization", name: "medaurion product team", url: SITE.url },
      publisher: { "@id": `${SITE.url}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: SITE.product,
      applicationCategory: "HealthApplication",
      operatingSystem: "Web, Android, iOS (browser)",
      url: pageUrl,
      description: p.schemaDescription,
      publisher: { "@id": `${SITE.url}/#organization` },
      audience: { "@type": "MedicalAudience", audienceType: "Doctors and clinic teams in India" },
      ...(p.offers?.length
        ? { offers: p.offers.map((o) => ({ "@type": "Offer", name: o.name, price: o.price, priceCurrency: "INR" })) }
        : {}),
    },
  ];
  if (p.faqs.length) schemas.push(faqSchema(p.faqs));

  const primary = p.primaryCta ?? { label: "Book a 15-min call", href: "/#pilot" };

  return (
    <PageShell crumbs={p.crumbs}>
      <div className="cc">
        <div className="cc-wrap">
          <div className={p.mock ? "cc-hero" : "cc-hero cc-hero--solo"}>
            <div>
              <div className="cc-eyebrow">{p.eyebrow}</div>
              <h1>{p.h1}</h1>
              <p className="cc-lead"><Inline text={p.lead} /></p>
              <div className="cc-cta-row">
                <Link className="cc-btn cc-btn--primary" href={primary.href}>{primary.label}</Link>
                {p.secondaryCta ? (
                  <Link className="cc-btn cc-btn--ghost" href={p.secondaryCta.href}>{p.secondaryCta.label}</Link>
                ) : null}
              </div>
              {p.heroNote ? <p className="cc-fine">{p.heroNote}</p> : null}
              <div className="cc-byline">
                <span>Written by <b>medaurion product team</b></span>
                {p.showReview !== false ? (
                  <>
                    <span>·</span>
                    {/* TODO: replace with the doctor reviewer's name once they agree in writing */}
                    <span>Medical review: <span className="cc-placeholder">doctor reviewer – add with consent</span></span>
                  </>
                ) : null}
                <span>·</span>
                <span>Last updated <time dateTime={p.updated}>{p.updatedLabel}</time></span>
              </div>
            </div>
            {p.mock ? <Mock m={p.mock} /> : null}
          </div>
        </div>

        {p.sections.map((s) => (
          <section className="cc-section" id={s.id} key={s.id}>
            <div className={s.aside ? "cc-wrap cc-split" : "cc-wrap"}>
              <div className="cc-read">
                <h2>{s.h2}</h2>
                {s.blocks.map((b, i) => <BlockView b={b} key={i} />)}
              </div>
              {s.aside ? (
                <aside className="cc-aside">{s.aside.map((b, i) => <BlockView b={b} key={i} />)}</aside>
              ) : null}
            </div>
          </section>
        ))}

        {p.children}

        {p.faqs.length ? (
          <section className="cc-section" id="faq">
            <div className="cc-wrap cc-read">
              <h2>Frequently asked questions</h2>
              {p.faqs.map((f, i) => (
                <details key={f.q} open={i === 0}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        ) : null}

        {p.finalCta ? (
          <section className="cc-section" id="book">
            <div className="cc-wrap">
              <div className="cc-final">
                <div><h2>{p.finalCta.h}</h2><p>{p.finalCta.p}</p></div>
                <Link className="cc-btn cc-btn--white" href={p.finalCta.href}>{p.finalCta.label}</Link>
              </div>
            </div>
          </section>
        ) : null}

        {p.sources?.length ? (
          <section className="cc-section" id="sources">
            <div className="cc-wrap cc-read">
              <h2 className="cc-h2-small">Sources</h2>
              <ol className="cc-sources">{p.sources.map((s) => <li key={s}><Inline text={s} /></li>)}</ol>
              {p.sourcesNote ? <p className="cc-fine">{p.sourcesNote}</p> : null}
            </div>
          </section>
        ) : null}
      </div>
      <JsonLd data={schemas} />
    </PageShell>
  );
}
