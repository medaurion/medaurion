import Link from "next/link";
import { Icon } from "../Icon";

export default function HubGrid({ eyebrow, h1, lead, items, base }: { eyebrow: string; h1: string; lead: string; base: string; items: { slug: string; h1: string; description: string; eyebrow: string }[] }) {
  return (
    <>
      <header className="seo-hero">
        <div className="container seo-hero__inner">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{h1}</h1>
          <p className="seo-lead">{lead}</p>
        </div>
      </header>
      <div className="container seo-hub">
        {items.map((it) => (
          <Link className="seo-hub__card" href={`${base}/${it.slug}`} key={it.slug}>
            <span className="seo-hub__eyebrow">{it.eyebrow}</span>
            <h2>{it.h1}</h2>
            <p>{it.description}</p>
            <span className="card-link">Read more <Icon name="arrow" size={15} /></span>
          </Link>
        ))}
      </div>
    </>
  );
}
