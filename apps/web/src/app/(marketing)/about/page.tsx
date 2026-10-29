import Link from "next/link";
import PageShell from "@/components/seo/PageShell";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchema } from "@/components/seo/schema";
import { pageMeta } from "@/lib/meta";
import { SITE, absoluteUrl } from "@/lib/site";
import type { Faq } from "@/content/types";
import AboutEffects from "./AboutEffects";
import "./about.css";

/* ------------------------------------------------------------------
   /about — About Us, vision, expansion and platform architecture (design v6).
   Edit text in the arrays below; layout lives in about.css (scoped under .ab).
------------------------------------------------------------------- */

const PATH = "/about";
const TITLE = "About medaurion | Our Vision, Mission & Roadmap";
const DESCRIPTION =
  "medaurion builds patient intelligence for India's clinics. Our vision, mission, founders, journey and how we grow from doctors to a connected care platform.";

export const metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: ["about medaurion", "medaurion AIOS", "medaurion vision", "medaurion founders", "patient intelligence India"],
});

/* ---------- content ---------- */
type Row = { k: string; v: string; c?: "warm" | "good" | "pri" };
const CARDS: { g: string; tag: "LIVE" | "PLANNED"; ui: string; rows: Row[]; tilt?: boolean; title: string; text: string }[] = [
  { g: "g1", tag: "LIVE", ui: "Patient 360°", rows: [{ k: "HbA1c", v: "▲ 8.1%", c: "warm" }, { k: "Creatinine", v: "1.0" }, { k: "BP trend", v: "stable" }], title: "Patient 360°", text: "One screen: what changed, trends and every source report." },
  { g: "g2", tag: "LIVE", ui: "Today's OPD · 18", rows: [{ k: "9:10 S. Kulkarni", v: "changed", c: "warm" }, { k: "9:20 R. Shaikh", v: "stable" }, { k: "9:30 A. Patil", v: "overdue", c: "warm" }], tilt: true, title: "Morning OPD Briefing", text: "Today's patients prepared before the OPD opens." },
  { g: "g3", tag: "LIVE", ui: "Follow-ups", rows: [{ k: "Overdue", v: "12", c: "warm" }, { k: "Reminders sent", v: "34" }, { k: "Returned this week", v: "9", c: "good" }], title: "Follow-ups on WhatsApp", text: "Reminders in English, हिंदी and मराठी." },
  { g: "g4", tag: "LIVE", ui: "Rx · Medicine card", rows: [{ k: "Metformin 500", v: "1-0-1" }, { k: "Telmisartan 40", v: "1-0-0" }], tilt: true, title: "Digital Prescription", text: "Fast Rx with a schedule card in the patient's language." },
  { g: "g1", tag: "LIVE", ui: "AI draft · needs approval", rows: [{ k: "Source: visit audio", v: "Approve", c: "pri" }, { k: "Edited by doctor", v: "Yes" }], title: "Doctor-approved AI Notes", text: "Dictated notes become a draft. Nothing saves without you." },
  { g: "g3", tag: "LIVE", ui: "Report inbox", rows: [{ k: "CBC.pdf → S. Kulkarni", v: "filed", c: "good" }, { k: "Lipid.jpg → A. Patil", v: "filed", c: "good" }], tilt: true, title: "WhatsApp Report Inbox", text: "Reports patients send land in the right record." },
  { g: "g2", tag: "PLANNED", ui: "ABHA link", rows: [{ k: "Consent", v: "requested" }, { k: "Records shared", v: "with consent" }], title: "ABHA Linking", text: "Consent-based record sharing through India's health ID." },
];
const ROW_COLOR = { warm: "#E8743B", good: "#2E7D57", pri: "#0F6A8E" } as const;

const JOURNEY = [
  { pos: "up", cls: "", chip: "Start", t: "The problem", d: "Seen from inside healthcare", stem: true },
  { pos: "dn", cls: "", chip: "Build", t: "Patient 360° & OPD brief", d: "One question: what changed?", stem: true },
  { pos: "up", cls: "now", chip: "Now", t: "Founding Doctor pilot", d: "10 seats across India", stem: true },
  { pos: "dn", cls: "f", chip: "Next", t: "Labs & patients join", d: "Reports, ABHA, Health Card", stem: false },
  { pos: "up", cls: "f", chip: "Later", t: "Connected care", d: "Hospitals, pharmacies, suppliers", stem: false },
];

const PHASES = [
  { cls: "b1", t: "Phase 1 · Doctors & Clinics", tag: "Now", planned: false, items: [
    { i: "steth", t: "Single-doctor OPD", d: "Patient 360°, OPD brief, follow-ups" },
    { i: "clinic", t: "Multi-doctor clinics", d: "Front desk, roles, clinic dashboard" },
    { i: "cal", t: "Free doctor tools", d: "Booking link, medicine card" },
  ] },
  { cls: "b2", t: "Phase 2 · Labs & Patients", tag: "Next", planned: true, items: [
    { i: "lab", t: "Diagnostic labs", d: "Reports flow into the record" },
    { i: "card", t: "Patient Health Card", d: "QR + PIN, in their language" },
    { i: "link", t: "ABHA linking", d: "Record sharing with consent" },
  ] },
  { cls: "b3", t: "Phase 3 · Connected Care", tag: "Later", planned: true, items: [
    { i: "hosp", t: "Hospitals", d: "Referrals and discharge summaries" },
    { i: "pill", t: "Pharmacies", d: "Prescriptions to medicines" },
    { i: "box", t: "Equipment & e-commerce", d: "Supplies for clinics and patients" },
  ] },
];

const LAYERS = [
  { cls: "l1", n: "Experience", items: ["Doctor app", "Front desk", "Patient Health Card", "Partner portal (later)"] },
  { cls: "l2", n: "Intelligence", items: ["Patient 360°", "What Changed engine", "Follow-up engine", "AI notes (doctor approves)"] },
  { cls: "l3", n: "Data", items: ["Consented patient record", "Lab & report inbox", "WhatsApp", "ABHA"] },
  { cls: "l4", n: "Trust", items: ["Consent", "Roles & access", "Audit log", "Encryption"] },
];

const REACH = [
  { n: "10", p: "Founding Doctor seats, open nationwide" },
  { n: "12 weeks", p: "Free pilot for every Founding Doctor" },
  { n: "3", p: "Languages for patients: English, हिंदी, मराठी" },
  { n: "15 min", p: "Online setup call, any city" },
];

const PRINCIPLES = [
  { k: "01", t: "The doctor decides", d: "AI prepares and drafts. Diagnosis stays with the doctor." },
  { k: "02", t: "Data is never for sale", d: "Never sold, never shown to pharma or advertisers." },
  { k: "03", t: "Every line has a source", d: "Every summary traces back to the original report." },
];

const FOUNDERS = [
  { ini: "SB", name: "Sanchit Barjibhe", role: "Founder & CEO" },
  { ini: "VM", name: "Vinay More", role: "Co-founder & CTO" },
];

const faqs: Faq[] = [
  { q: "Who is medaurion AIOS for?", a: "Doctors and clinic teams in India who see many returning patients with long-term conditions such as diabetes, hypertension, thyroid, kidney, heart and lung conditions." },
  { q: "Who founded medaurion?", a: "medaurion is led by Sanchit Barjibhe, Founder & CEO, and Vinay More, Co-founder & CTO." },
  { q: "Is medaurion only for one city?", a: "No. Doctors anywhere in India can join. Setup is done online over a call." },
  { q: "How can my clinic join the pilot?", a: "Use the pilot form on the home page. We will contact you to understand your clinic and set up a 12-week pilot." },
];

const founders = FOUNDERS.map((f) => ({ "@type": "Person", name: f.name, jobTitle: f.role }));
const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: TITLE,
  description: DESCRIPTION,
  url: absoluteUrl(PATH),
  inLanguage: "en-IN",
  about: { "@type": "Organization", name: SITE.name, url: SITE.url, founder: founders, employee: founders },
};

/* ---------- icons (sprite) ---------- */
function Sprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <symbol id="ab-steth" viewBox="0 0 24 24"><path d="M6 3v6a4 4 0 0 0 8 0V3" /><path d="M10 13v2a5 5 0 0 0 10 0v-2" /><circle cx="20" cy="11" r="2" /></symbol>
      <symbol id="ab-clinic" viewBox="0 0 24 24"><path d="M3 21h18M5 21V8l7-5 7 5v13" /><path d="M12 10v6M9 13h6" /></symbol>
      <symbol id="ab-lab" viewBox="0 0 24 24"><path d="M9 3h6M10 3v6L4 19a1.5 1.5 0 0 0 1.3 2h13.4A1.5 1.5 0 0 0 20 19l-6-10V3" /><path d="M7 15h10" /></symbol>
      <symbol id="ab-card" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9" cy="12" r="2.5" /><path d="M14 10h4M14 14h3" /></symbol>
      <symbol id="ab-link" viewBox="0 0 24 24"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1" /><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" /></symbol>
      <symbol id="ab-cal" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></symbol>
      <symbol id="ab-hosp" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="17" rx="2" /><path d="M12 8v6M9 11h6M9 21v-3h6v3" /></symbol>
      <symbol id="ab-pill" viewBox="0 0 24 24"><rect x="2.5" y="8.5" width="19" height="7" rx="3.5" transform="rotate(-35 12 12)" /><path d="M9.2 7.8l5.6 8" /></symbol>
      <symbol id="ab-box" viewBox="0 0 24 24"><path d="M3 7l9-4 9 4v10l-9 4-9-4z" /><path d="M3 7l9 4 9-4M12 11v10" /></symbol>
    </svg>
  );
}

export default function Page() {
  return (
    <PageShell crumbs={[{ name: "About us", href: PATH }]}>
      <div className="ab">
        <Sprite />

        {/* HERO */}
        <section className="hero">
          <div className="w">
            <div className="htxt">
              <h1>Patient Intelligence for India&apos;s Clinics</h1>
              <p className="sub">Every patient&apos;s full story, ready before they sit down, and every follow-up on track after they leave.</p>
              <div className="hcta">
                <Link className="btn p" href="/#pilot">Become a Founding Doctor</Link>
                <a className="btn o" href="#vision">Our vision</a>
              </div>
            </div>
            <div className="hv" role="img" aria-label="medaurion product preview with sample patients: Morning OPD Briefing on a laptop and a WhatsApp reminder on a phone">
              <div className="lap">
                <div className="bar"><i /><i /><i />&nbsp;Morning OPD Briefing · 9:00 AM</div>
                <div className="bd">
                  <div className="side">
                    <b>Today · 18 patients</b>
                    <div className="q on"><span className="dot" />S. Kulkarni<em>9:10</em></div>
                    <div className="q"><span className="dot a" />R. Shaikh<em>9:20</em></div>
                    <div className="q"><span className="dot" />A. Patil<em>9:30</em></div>
                    <div className="q"><span className="dot a" />M. Iyer<em>9:40</em></div>
                    <div className="q"><span className="dot" />P. Singh<em>9:50</em></div>
                  </div>
                  <div className="mn">
                    <div className="pt"><span className="av">SK</span><div><b>S. Kulkarni, 58</b><small>Type 2 diabetes · Hypertension · Visit 7</small></div></div>
                    <div className="chg">What changed: HbA1c up 0.8 since last visit · 1 missed follow-up</div>
                    <div className="kv">
                      <div><small>HbA1c</small><b className="u">8.1%</b></div>
                      <div><small>BP</small><b>138/86</b></div>
                      <div><small>New reports</small><b>2</b></div>
                    </div>
                    <div className="spark">
                      <svg viewBox="0 0 200 40" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }} aria-hidden="true">
                        <polyline fill="none" stroke="#0F6A8E" strokeWidth="2" points="0,30 40,27 80,29 120,22 160,18 200,8" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="phone">
                <div className="scr">
                  <div className="wh">Dr. Mehta&apos;s Clinic</div>
                  <div className="msg">Namaste! Your follow-up is due on Monday. Please bring your latest sugar report.</div>
                  <div className="msg">औषधे: सकाळी 1 · रात्री 1</div>
                  <div className="msg me">Report attached ✓</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="intro">
          <div className="w">
            <p>medaurion is <span>patient intelligence for India&apos;s clinics.</span> We read every report, remember every visit and keep every follow-up on track, so the doctor&apos;s time goes to the patient, not the paperwork.</p>
          </div>
        </section>

        {/* CAROUSEL */}
        <section className="car" id="what">
          <div className="w">
            <div className="ch">
              <h2 className="st-title">We keep the story<span>in every visit.</span></h2>
              <div className="arw">
                <button type="button" id="ab-pv" aria-label="Previous" disabled>‹</button>
                <button type="button" id="ab-nx" aria-label="Next">›</button>
              </div>
            </div>
            <div className="trk" id="ab-trk">
              {CARDS.map((c) => (
                <div className={`cd ${c.g}`} key={c.title}>
                  <span className={c.tag === "LIVE" ? "tg" : "tg p"}>{c.tag}</span>
                  <div className={c.tilt ? "ui r" : "ui"} aria-hidden="true">
                    <span className="t">{c.ui}</span>
                    {c.rows.map((r) => (
                      <div className="li" key={r.k}>{r.k}<em style={r.c ? { color: ROW_COLOR[r.c] } : undefined}>{r.v}</em></div>
                    ))}
                  </div>
                  <div className="cap"><h3>{c.title}</h3><span>{c.text}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EVERY DAY */}
        <section>
          <div className="w">
            <h2 className="band">This is what every OPD day looks like</h2>
            <div className="cn">
              <div className="cc">
                <svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="34" r="20" /><path d="M32 22v12l8 5" /><path d="M26 8h12M32 8v6" /><path className="f" d="M32 14a20 20 0 0 1 20 20H32z" opacity=".6" /></svg>
                <div className="n">~2<small>min</small></div><p>Average primary-care consultation in India</p><span className="s">BMJ Open, 2017</span>
              </div>
              <div className="cc">
                <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M32 8c8 11 14 19 14 27a14 14 0 0 1-28 0c0-8 6-16 14-27z" /><path className="f" d="M20 38a12 12 0 0 0 24 0z" /></svg>
                <div className="n">10.1<small>crore</small></div><p>People living with diabetes</p><span className="s">ICMR-INDIAB, 2023</span>
              </div>
              <div className="cc">
                <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M52 18a10 10 0 0 0-14-1l-6 6-6-6a10 10 0 0 0-14 14l20 20 20-20a10 10 0 0 0 0-13z" /><path d="M14 33h10l4-7 6 14 4-7h12" /></svg>
                <div className="n">31.5<small>crore</small></div><p>People living with hypertension</p><span className="s">ICMR-INDIAB, 2023</span>
              </div>
              <div className="cc">
                <svg viewBox="0 0 64 64" aria-hidden="true"><rect x="20" y="8" width="24" height="10" rx="3" className="f" /><rect x="16" y="18" width="32" height="38" rx="5" /><path d="M32 29v14M25 36h14" /></svg>
                <div className="n">~50<small>%</small></div><p>Chronic patients who take medicines as prescribed</p><span className="s">WHO, 2003</span>
              </div>
            </div>
          </div>
        </section>

        {/* VISION / MISSION */}
        <section className="vmsec" id="vision">
          <div className="w vmg">
            <div className="vms">
              <div className="vc"><h3>OUR VISION</h3><p>A connected healthcare system in India where every doctor knows each patient&apos;s full story at the moment it matters.</p></div>
              <div className="vc"><h3>OUR MISSION</h3><p>To give doctors back time by preparing every visit and keeping every follow-up on track, then connecting labs, hospitals, pharmacies and patients around them.</p></div>
            </div>
            <div className="vv"><span className="lbl">Our promise</span><p className="pq">Know what changed before the patient sits down.</p><p>The test for everything we build.</p></div>
          </div>
        </section>

        {/* FOUNDERS */}
        <section className="fd" id="team">
          <div className="w fdg">
            <div>
              <h2>Our Founders</h2>
              <p className="sub">medaurion was founded to solve one problem we saw inside healthcare: doctors searching through files while the queue waits outside.</p>
            </div>
            <div className="pc">
              {FOUNDERS.map((f) => (
                <div className="pp" key={f.name}><div className="ini" aria-hidden="true">{f.ini}</div><h3>{f.name}</h3><p>{f.role}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section id="journey">
          <div className="w">
            <h2 className="st-title center">Our Journey</h2>
            <ol className="jr">
              {JOURNEY.map((j) => (
                <li className={`js ${j.pos} ${j.cls}`.trim()} key={j.t}>
                  <div className="tx">{j.t}<small>{j.d}</small></div>
                  <span className="ch2">{j.chip}</span>
                  {j.stem && <span className="stem" />}
                  <span className="pin" />
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* VISION & EXPANSION ARCHITECTURE */}
        <section className="arc" id="expansion">
          <div className="w">
            <div className="head">
              <p className="lbl">Vision &amp; expansion</p>
              <h2 className="st-title mt14">One patient story.<span>Growing in three phases.</span></h2>
              <p className="sub">Everything connects to the patient&apos;s consented record. We add a new layer only when the one below works every day for doctors.</p>
            </div>
            <div className="tree">
              <div className="root"><b>medaurion AIOS</b><span>Patient intelligence platform</span><br /><span className="pat">● One consented patient record</span></div>
              <div className="conn" />
              <div className="br">
                {PHASES.map((ph) => (
                  <div className={`bx ${ph.cls}`} key={ph.t}>
                    <div className="bh"><b>{ph.t}</b><span>{ph.tag}</span></div>
                    <div className="lv">
                      {ph.items.map((it) => (
                        <div className={ph.planned ? "lf pl" : "lf"} key={it.t}>
                          <svg aria-hidden="true"><use href={`#ab-${it.i}`} /></svg>
                          <div>{it.t}<small>{it.d}</small></div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="trust"><b>Trust layer, every phase</b><span>Consent first · DPDP Act</span><span>ABHA, never Aadhaar</span><span>Audit log on every access</span><span>Data never sold</span></div>
            </div>

            <div className="lay">
              <div>
                <p className="lbl">Platform architecture</p>
                <h3 className="mt12">Four layers, built from the bottom up.</h3>
                <p className="sub">The same foundation serves every phase, so each new partner adds to the patient&apos;s story instead of starting a new one.</p>
              </div>
              <div className="stack">
                {LAYERS.map((l) => (
                  <div className={`ly ${l.cls}`} key={l.n}><div className="ln">{l.n}</div><div className="it">{l.items.map((x) => <span key={x}>{x}</span>)}</div></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* REACH */}
        <section>
          <div className="w">
            <h2 className="st-title">Built for<span>all of India.</span></h2>
            <div className="rg">
              {REACH.map((r) => (<div className="rc" key={r.n}><div className="n">{r.n}</div><p>{r.p}</p></div>))}
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="pt0" id="beliefs">
          <div className="w">
            <h2 className="st-title">What we<span>believe.</span></h2>
            <div className="pg">
              {PRINCIPLES.map((p) => (<div className="pr" key={p.k}><span className="k">{p.k}</span><h3>{p.t}</h3><p>{p.d}</p></div>))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pt0">
          <div className="w faq">
            <h2 className="st-title">Questions</h2>
            {faqs.map((f) => (<details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>))}
          </div>
        </section>

        {/* CTA */}
        <section className="ctas">
          <div className="w">
            <div className="cb">
              <div><h2>Help us build connected care for India.</h2><p>10 Founding Doctor seats · 12 weeks free · setup online</p></div>
              <div className="acts">
                <Link className="btn p" href="/#pilot">Become a Founding Doctor</Link>
                <Link className="btn o" href="/#pilot">Partner or invest with us</Link>
              </div>
            </div>
            <p className="srcs">Sources: Irving G et al., BMJ Open, 2017 · Anjana RM et al., ICMR-INDIAB, Lancet Diabetes &amp; Endocrinology, 2023 · WHO, Adherence to long-term therapies, 2003. Product screens are illustrative and use sample patients.</p>
          </div>
        </section>
      </div>
      <AboutEffects />
      <JsonLd data={[aboutSchema, faqSchema(faqs)]} />
    </PageShell>
  );
}
