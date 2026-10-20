import Link from "next/link";
import PageShell from "../components/seo/PageShell";
import JsonLd from "../components/seo/JsonLd";
import { faqSchema } from "../components/seo/schema";
import { Icon } from "../components/Icon";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Pricing for Clinics | medaurion AIOS Doctor Pilot",
  description:
    "Start with a free 12-week doctor pilot. Planned plans for solo doctors, busy chronic-care practices, multi-doctor clinics and hospitals. Final prices after the pilot.",
  path: "/pricing",
});

const plans = [
  { name: "Starter", price: "₹999–1,999", unit: "/ month", forWho: "For a solo doctor starting out", items: ["60-second patient brief", "What Changed", "Report upload and reading", "Follow-up list"] },
  { name: "Pro", price: "₹2,999–4,999", unit: "/ month", forWho: "For a busy chronic-care practice", items: ["Everything in Starter", "Patient Memory", "Voice notes and prescriptions in मराठी / हिंदी", "WhatsApp reminders and care gaps"], hot: true },
  { name: "Premium", price: "₹7,500–15,000+", unit: "/ month", forWho: "For clinics with several doctors", items: ["Everything in Pro", "Several doctors and staff roles", "Clinic dashboard", "Priority support"] },
  { name: "Enterprise", price: "Custom", unit: "", forWho: "For hospitals and chains", items: ["Many branches", "Lab and hospital software connections", "Admin and audit controls", "Dedicated onboarding"] },
];

const faqs = [
  { q: "Is the pilot really free?", a: "Yes. Pilot clinics pay ₹0 for 12 weeks. We set it up with you and measure the results together." },
  { q: "Are these the final prices?", a: "No. The ranges show what we plan to test with pilot doctors. Final prices will be published after the pilot." },
  { q: "Do I need to replace my current software?", a: "No. medaurion AIOS is designed to work alongside the software you already use." },
];

export default function Page() {
  return (
    <PageShell crumbs={[{ name: "Pricing", href: "/pricing" }]}>
      <header className="seo-hero">
        <div className="container seo-hero__inner">
          <p className="eyebrow">PRICING</p>
          <h1>Start with a free 12-week doctor pilot</h1>
          <p className="seo-lead">Planned plans for every size of clinic. These ranges are what we are testing with pilot doctors; final prices come after the pilot.</p>
        </div>
      </header>
      <div className="container seo-plans">
        {plans.map((p) => (
          <article className={`seo-plan${p.hot ? " seo-plan--hot" : ""}`} key={p.name}>
            {p.hot ? <span className="seo-plan__badge">Most clinics</span> : null}
            <h2>{p.name}</h2>
            <p className="seo-plan__for">{p.forWho}</p>
            <p className="seo-plan__price">{p.price} <small>{p.unit}</small></p>
            <ul>{p.items.map((i) => <li key={i}>{i}</li>)}</ul>
            <Link className={`button ${p.hot ? "button--primary" : "button--secondary"}`} href="/#pilot">
              {p.name === "Enterprise" ? "Talk to us" : "Join the pilot"} <Icon name="arrow" size={16} />
            </Link>
          </article>
        ))}
      </div>
      <div className="container seo-article seo-article--narrow">
        <p className="seo-note"><b>Price hypothesis.</b> These ranges are not final prices.</p>
        <section className="seo-faq" id="faq">
          <h2>Frequently asked questions</h2>
          {faqs.map((f) => (<details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>))}
        </section>
      </div>
      <JsonLd data={faqSchema(faqs)} />
    </PageShell>
  );
}
