import Link from "next/link";
import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "./schema";

export type Crumb = { name: string; href: string };

export default function PageShell({ crumbs, children }: { crumbs: Crumb[]; children: ReactNode }) {
  const all = [{ name: "Home", href: "/" }, ...crumbs];
  return (
    <>
      <Link className="skip-link" href="#main-content">Skip to content</Link>
      <Header />
      <main id="main-content" className="seo-main">
        <nav aria-label="Breadcrumb" className="container seo-crumbs">
          <ol>
            {all.map((c, i) => (
              <li key={c.href}>
                {i < all.length - 1 ? <Link href={c.href}>{c.name}</Link> : <span aria-current="page">{c.name}</span>}
              </li>
            ))}
          </ol>
        </nav>
        {children}
      </main>
      <Footer />
      <JsonLd data={breadcrumbSchema(all)} />
    </>
  );
}
