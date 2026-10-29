import Link from "next/link";
import type { ReactNode } from "react";
import PageShell from "../components/seo/PageShell";
import JsonLd from "../components/seo/JsonLd";
import { faqSchema } from "../components/seo/schema";
import { pageMeta } from "@/lib/meta";
import { SITE, absoluteUrl } from "@/lib/site";
import type { Faq } from "@/content/types";
import AboutEffects from "./AboutEffects";
import "./about.css";

/* ------------------------------------------------------------------
   /about — About Us, vision and roadmap.
   Edit text in the arrays below; layout lives in about.css (scoped under .ab).
------------------------------------------------------------------- */

const PATH = "/about";
const TITLE = "About medaurion | Our Vision, Mission & Roadmap";
const DESCRIPTION =
  "medaurion builds patient intelligence for India's clinics. Our vision, mission, leadership, principles and the roadmap from doctors to a connected care platform.";

export const metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: ["about medaurion", "medaurion AIOS", "medaurion vision", "patient intelligence India", "chronic care software India"],
});

/* ---------- icons ---------- */
const ICONS: Record<string, ReactNode> = {
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  shield: (<><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></>),
  globe: (<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>),
  gift: (<><rect x="3" y="8" width="18" height="13" rx="2" /><path d="M12 8v13M3 12h18M12 8c-2-4-6-4-6-1.5S10 8 12 8zm0 0c2-4 6-4 6-1.5S14 8 12 8z" /></>),
  steth: (<><path d="M6 3v6a4 4 0 0 0 8 0V3" /><path d="M10 13v2a5 5 0 0 0 10 0v-2" /><circle cx="20" cy="11" r="2" /></>),
  ban: (<><circle cx="12" cy="12" r="9" /><path d="M5.6 5.6l12.8 12.8" /></>),
  file: (<><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6M8 13h8M8 17h5" /></>),
  id: (<><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9" cy="12" r="2.5" /><path d="M14 10h4M14 14h3" /></>),
  steps: <path d="M3 20h5v-5h5v-5h5V5h3" />,
  target: (<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></>),
  path: (<><circle cx="5" cy="18" r="2" /><circle cx="19" cy="6" r="2" /><path d="M7 18h6a4 4 0 0 0 0-8h-2a4 4 0 0 1 0-8h6" /></>),
  coin: (<><circle cx="12" cy="12" r="9" /><path d="M9 8h6M9 11h6M12 11c3 0 3 5 0 5h-2l4 3" /></>),
  hand: <path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V11M11 10V4a1.5 1.5 0 0 1 3 0v7M14 10.5V6a1.5 1.5 0 0 1 3 0v7c0 4.5-3 8-7 8-3 0-4.5-1.5-6-4l-2-3.5a1.5 1.5 0 0 1 2.6-1.5L8 15" />,
  left: <path d="M15 5l-7 7 7 7" />,
  right: <path d="M9 5l7 7-7 7" />,
};
function Icon({ name, className = "ico" }: { name: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

/* ---------- content ---------- */
type Row = { k: string; v: string; c?: "up" | "good" | "pri" };
const FEATURES: { bg: string; tag: "Live" | "Planned"; ui: string; rows: Row[]; lines?: boolean; title: string; text: string; tilt?: boolean }[] = [
  { bg: "b1", tag: "Live", ui: "Patient 360°", rows: [{ k: "HbA1c", v: "▲ 8.1%", c: "up" }, { k: "Creatinine", v: "1.0" }, { k: "BP trend", v: "stable" }], title: "Patient 360°", text: "One screen: what changed, trends and every source report." },
  { bg: "b2", tag: "Live", ui: "Today's OPD · 18", rows: [{ k: "9:10 S. Kulkarni", v: "changed", c: "up" }, { k: "9:20 R. Shaikh", v: "stable" }, { k: "9:30 A. Patil", v: "overdue", c: "up" }], title: "Morning OPD Briefing", text: "Today's patients prepared before the OPD opens.", tilt: true },
  { bg: "b3", tag: "Live", ui: "Follow-ups", rows: [{ k: "Overdue", v: "12", c: "up" }, { k: "Reminders sent", v: "34" }, { k: "Returned this week", v: "9", c: "good" }], title: "Follow-ups on WhatsApp", text: "Overdue lists, drop-off flags and reminders in 3 languages." },
  { bg: "b4", tag: "Live", ui: "Rx · Medicine card", rows: [{ k: "Metformin 500", v: "1-0-1" }, { k: "Telmisartan 40", v: "1-0-0" }], lines: true, title: "Digital Prescription", text: "Fast Rx with a schedule card in the patient's language.", tilt: true },
  { bg: "b5", tag: "Live", ui: "AI draft · needs approval", rows: [{ k: "Source: visit audio", v: "Approve", c: "pri" }], lines: true, title: "Doctor-approved AI Notes", text: "Dictated notes become a draft. Nothing saves without you." },
  { bg: "b6", tag: "Live", ui: "Report inbox", rows: [{ k: "CBC.pdf → S. Kulkarni", v: "filed", c: "good" }, { k: "Lipid.jpg → A. Patil", v: "filed", c: "good" }], title: "WhatsApp Report Inbox", text: "Reports patients send land in the right record.", tilt: true },
  { bg: "b7", tag: "Planned", ui: "ABHA link", rows: [{ k: "Consent", v: "requested" }, { k: "Records shared", v: "with consent" }], title: "ABHA Linking", text: "Consent-based record sharing through India's health ID." },
];
const ROW_COLOR = { up: "#b7791f", good: "#2f7a4e", pri: "#0b5d84" } as const;

const PRINCIPLES = [
  { i: "steth", t: "The doctor decides", d: "AI prepares and drafts. Diagnosis and treatment stay with the doctor." },
  { i: "ban", t: "Patient data is never for sale", d: "Never sold, never shown to pharma, suppliers or advertisers." },
  { i: "shield", t: "Consent first", d: "Recorded for each purpose under the DPDP Act, 2023, and revocable." },
  { i: "id", t: "ABHA, never Aadhaar", d: "Records link through ABHA only, when the patient agrees." },
  { i: "file", t: "Every line has a source", d: "Any summary traces back to the report or note it came from." },
  { i: "steps", t: "Earn the next step", d: "We move to a new phase only when the current one works for doctors." },
];

const JOURNEY = [
  { s: "done", l: "The problem", t: "Seen from inside healthcare", d: "Short visits, lost files, missed follow-ups." },
  { s: "done", l: "The build", t: "Patient 360° and OPD brief", d: "One question: what changed since last visit?" },
  { s: "now", l: "Now", t: "Founding Doctor pilot", d: "10 seats across India, 12 weeks free." },
  { s: "fut", l: "Next", t: "Labs and patients join", d: "Lab reports, ABHA linking, Health Card." },
  { s: "fut", l: "Later", t: "Connected care platform", d: "Hospitals, pharmacies, suppliers." },
];

const PHASES = [
  { no: "01", s: "Now", t: "Doctors & Clinics", p: "Every chronic-care visit prepared, every follow-up tracked.", items: ["Patient 360° and OPD briefing", "Follow-ups, reminders, digital Rx", "Free booking link and tools", "Founding Doctors across India"] },
  { no: "02", s: "Next", t: "Labs & Patients", p: "Reports and patients join the same story, with consent.", items: ["Lab reports straight into the record", "ABHA linking for record sharing", "Patient Health Card with QR and PIN", "Doctor booking network"] },
  { no: "03", s: "Later", t: "Connected Care Platform", p: "Providers and suppliers working together around doctor and patient.", items: ["Hospitals and multi-doctor clinics", "Pharmacies and equipment suppliers", "Medical e-commerce for clinics and patients", "Suppliers never see patient data"] },
];

const LEADERS = [
  { ini: "SB", name: "Sanchit Barjibhe", role: "Founder & CEO" },
  { ini: "VM", name: "Vinay More", role: "Co-founder & CTO" },
];

const faqs: Faq[] = [
  { q: "Who is medaurion AIOS for?", a: "Doctors and clinic teams in India who see many returning patients with long-term conditions such as diabetes, hypertension, thyroid, kidney, heart and lung conditions." },
  { q: "Who founded medaurion?", a: "medaurion is led by Sanchit Barjibhe, Founder & CEO, and Vinay More, Co-founder & CTO." },
  { q: "Is medaurion only for one city?", a: "No. Doctors anywhere in India can join. Setup is done online over a call." },
  { q: "How can my clinic join the pilot?", a: "Use the pilot form on the home page. We will contact you to understand your clinic and set up a 12-week pilot." },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: TITLE,
  description: DESCRIPTION,
  url: absoluteUrl(PATH),
  inLanguage: "en-IN",
  about: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    founder: [
      { "@type": "Person", name: "Sanchit Barjibhe", jobTitle: "Founder & CEO" },
      { "@type": "Person", name: "Vinay More", jobTitle: "Co-founder & CTO" },
    ],
    employee: [
      { "@type": "Person", name: "Sanchit Barjibhe", jobTitle: "Founder & CEO" },
      { "@type": "Person", name: "Vinay More", jobTitle: "Co-founder & CTO" },
    ],
  },
};

export default function Page() {
  return (
    <PageShell crumbs={[{ name: "About us", href: PATH }]}>
      <div className="ab">
        {/* HERO */}
        <section className="hero">
          <div className="wrap">
            <div className="txt rv">
              <h1>Patient Intelligence for India&apos;s Clinics</h1>
              <p className="lead">Every patient&apos;s full story, ready before they sit down, and every follow-up on track after they leave.</p>
              <div className="cta">
                <Link className="btn pri" href="/#pilot">Become a Founding Doctor</Link>
                <a className="btn sec" href="#future">Our vision</a>
              </div>
              <div className="chips">
                <span className="chip"><Icon name="globe" />Built for all of India</span>
                <span className="chip"><Icon name="shield" />Consent first, DPDP Act</span>
                <span className="chip"><Icon name="gift" />Free plan for every doctor</span>
              </div>
            </div>
            <div className="scene rv" role="img" aria-label="medaurion product preview: Morning OPD Briefing on a laptop and a WhatsApp reminder on a phone, with sample patients">
              <div className="lap">
                <div className="bar"><i /><i /><i /><span>Morning OPD Briefing · 9:00 AM</span></div>
                <div className="bd">
                  <div className="side">
                    <b>Today · 18 patients</b>
                    <div className="q on"><span className="dot" />S. Kulkarni<em>9:10</em></div>
                    <div className="q"><span className="dot a" />R. Shaikh<em>9:20</em></div>
                    <div className="q"><span className="dot" />A. Patil<em>9:30</em></div>
                    <div className="q"><span className="dot a" />M. Iyer<em>9:40</em></div>
                    <div className="q"><span className="dot" />P. Singh<em>9:50</em></div>
                  </div>
                  <div className="main">
                    <div className="pt"><span className="av">SK</span><div><b>S. Kulkarni, 58</b><small>Type 2 diabetes · Hypertension · Visit 7</small></div></div>
                    <div className="alert">What changed: HbA1c up 0.8 since last visit · 1 missed follow-up</div>
                    <div className="kv">
                      <div><small>HbA1c</small><b className="up">8.1%</b></div>
                      <div><small>BP</small><b>138/86</b></div>
                      <div><small>New reports</small><b>2</b></div>
                    </div>
                    <div className="spark">
                      <svg viewBox="0 0 200 40" preserveAspectRatio="none" aria-hidden="true">
                        <polyline fill="none" stroke="#0b5d84" strokeWidth="2" points="0,30 40,27 80,29 120,22 160,18 200,8" />
                        <circle cx="200" cy="8" r="3" fill="#b7791f" />
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

        {/* FEATURE CAROUSEL */}
        <section className="feat" id="what">
          <div className="wrap">
            <div className="fh rv">
              <h2 className="h2">We keep the story<br /><span className="blue">in every visit.</span></h2>
              <div className="arrows">
                <button type="button" className="arw" id="ab-prev" aria-label="Previous"><Icon name="left" /></button>
                <button type="button" className="arw" id="ab-next" aria-label="Next"><Icon name="right" /></button>
              </div>
            </div>
            <div className="track" id="ab-track">
              {FEATURES.map((f) => (
                <div className={`fc ${f.bg}`} key={f.title}>
                  <span className={f.tag === "Live" ? "tg" : "tg p"}>{f.tag}</span>
                  <div className={f.tilt ? "ui r" : "ui"} aria-hidden="true">
                    <span className="t">{f.ui}</span>
                    {f.lines && (<><div className="ln" /><div className="ln m" /></>)}
                    {f.rows.map((r) => (
                      <div className="li" key={r.k}>{r.k}<em style={r.c ? { color: ROW_COLOR[r.c] } : undefined}>{r.v}</em></div>
                    ))}
                  </div>
                  <div className="cap"><h3>{f.title}</h3><span>{f.text}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EVERY DAY */}
        <section className="day">
          <div className="wrap">
            <h2 className="rv">This is what every OPD day looks like</h2>
            <p className="sub rv">The same patients return for years, while their story is spread across paper files, phone photos and memory.</p>
            <div className="cn">
              <div className="cc rv">
                <svg className="big" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="34" r="20" /><path d="M32 22v12l8 5" /><path d="M26 8h12M32 8v6" /><path className="f" d="M32 14a20 20 0 0 1 20 20H32z" opacity=".5" /></svg>
                <div className="n"><span className="cu" data-to="2" data-pre="~">~2</span><small>min</small></div>
                <p>Average primary-care consultation reported for India</p><span className="src">BMJ Open, 2017</span>
              </div>
              <div className="cc rv">
                <svg className="big" viewBox="0 0 64 64" aria-hidden="true"><path d="M32 8c8 11 14 19 14 27a14 14 0 0 1-28 0c0-8 6-16 14-27z" /><path className="f" d="M20 38a12 12 0 0 0 24 0z" /><path d="M27 40a5 5 0 0 0 5 5" /></svg>
                <div className="n"><span className="cu" data-to="10.1" data-dec="1">10.1</span><small>crore</small></div>
                <p>People estimated to be living with diabetes in India</p><span className="src">ICMR-INDIAB, 2023</span>
              </div>
              <div className="cc rv">
                <svg className="big" viewBox="0 0 64 64" aria-hidden="true"><path d="M52 18a10 10 0 0 0-14-1l-6 6-6-6a10 10 0 0 0-14 14l20 20 20-20a10 10 0 0 0 0-13z" /><path d="M14 33h10l4-7 6 14 4-7h12" /></svg>
                <div className="n"><span className="cu" data-to="31.5" data-dec="1">31.5</span><small>crore</small></div>
                <p>People estimated to be living with hypertension in India</p><span className="src">ICMR-INDIAB, 2023</span>
              </div>
              <div className="cc rv">
                <svg className="big" viewBox="0 0 64 64" aria-hidden="true"><rect x="20" y="8" width="24" height="10" rx="3" className="f" /><rect x="16" y="18" width="32" height="38" rx="5" /><path d="M32 29v14M25 36h14" /></svg>
                <div className="n"><span className="cu" data-to="50" data-pre="~">~50</span><small>%</small></div>
                <p>Of chronic patients estimated to take medicines as prescribed</p><span className="src">WHO, 2003</span>
              </div>
            </div>
          </div>
        </section>

        {/* VISION / MISSION */}
        <section className="vmsec" id="vision">
          <div className="wrap vmg">
            <div className="vms">
              <div className="vmc rv"><h2>Our Vision</h2><p>A connected healthcare system in India where every doctor knows each patient&apos;s full story at the moment it matters.</p></div>
              <div className="vmc rv"><h2>Our Mission</h2><p>To give doctors back time with their patients by preparing every visit, keeping every follow-up on track, and growing into a platform that connects labs, hospitals, pharmacies and patients around them.</p></div>
            </div>
            <div className="prom rv">
              <span className="k">Our promise</span>
              <p className="pq">Know what changed before the patient sits down.</p>
              <p className="sm">The test for everything we build: does it make the next visit better prepared?</p>
            </div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section className="lead-s" id="team">
          <div className="wrap lg">
            <div className="rv">
              <p className="eyebrow">Leadership</p>
              <h2 className="h2 mt">The people <span className="blue">building medaurion</span></h2>
              <p className="t">medaurion started inside healthcare, watching doctors search through files while a queue waited outside. We are building it to solve that one problem well, and to grow only as fast as doctors find it useful.</p>
            </div>
            <div className="lc">
              {LEADERS.map((l) => (
                <div className="ld rv" key={l.name}><span className="ini" aria-hidden="true">{l.ini}</span><div><h3>{l.name}</h3><span>{l.role}</span></div></div>
              ))}
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section id="journey">
          <div className="wrap">
            <div className="jh rv">
              <p className="eyebrow">Our journey</p>
              <h2 className="h2">From one problem <span className="blue">to a platform</span></h2>
              <p>We show stages, not big numbers. Real results will be shared once pilot clinics agree.</p>
            </div>
            <ol className="jr">
              {JOURNEY.map((j, i) => (
                <li className={`js ${j.s} rv`} key={j.t}><span className="d">{i + 1}</span><span className="l">{j.l}</span><b>{j.t}</b><span>{j.d}</span></li>
              ))}
            </ol>
          </div>
        </section>

        {/* BELIEFS */}
        <section className="bel" id="beliefs">
          <div className="wrap">
            <div className="bh rv">
              <div><p className="eyebrow">Our beliefs</p><h2 className="h2 mt">What will not change <span className="blue">as we grow</span></h2></div>
              <p>Commitments, not features. They hold in every phase of our roadmap.</p>
            </div>
            <div className="bg2">
              {PRINCIPLES.map((p) => (
                <div className="bc rv" key={p.t}><span className="ic"><Icon name={p.i} /></span><h3>{p.t}</h3><span>{p.d}</span></div>
              ))}
            </div>
          </div>
        </section>

        {/* FUTURE */}
        <section className="fu" id="future">
          <div className="wrap">
            <div className="jh rv">
              <p className="eyebrow">Future vision</p>
              <h2 className="h2">Three phases, <span className="blue">one direction</span></h2>
              <p>Phases, not dates. Each one builds on the trust earned in the one before.</p>
            </div>
            <div className="pg">
              {PHASES.map((ph) => (
                <div className="pc rv" key={ph.no}>
                  <div className="top2"><span className="no" aria-hidden="true">{ph.no}</span><span className="s">{ph.s}</span><h3>{ph.t}</h3></div>
                  <div className="bd2">
                    <p>{ph.p}</p>
                    <ul>{ph.items.map((it) => (<li key={it}><Icon name="check" />{it}</li>))}</ul>
                  </div>
                </div>
              ))}
            </div>
            <p className="gate rv"><b>How we move between phases:</b> a phase is ready when doctors use it every working day and pilot numbers show it helps.</p>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="pt2" id="partners">
          <div className="wrap">
            <div className="rv">
              <p className="eyebrow">For partners &amp; investors</p>
              <h2 className="h2 mt">A focused start with a clear path to a platform</h2>
              <p className="intro">We begin where the pain is daily and the user is clear: the doctor in a chronic-care OPD.</p>
            </div>
            <div className="ig rv">
              <div className="ib"><Icon name="target" className="ico ic" /><h3>The starting point</h3><p>Private OPD clinics manage long-term patients with paper, WhatsApp photos and memory. We work alongside the software they already use.</p></div>
              <div className="ib"><Icon name="path" className="ico ic" /><h3>Why this path</h3><ul><li>Doctors are the gateway to labs, pharmacies and hospitals</li><li>Free tools spread doctor to patient to doctor</li><li>Trust is the base every later phase needs</li></ul></div>
              <div className="ib"><Icon name="coin" className="ico ic" /><h3>How we plan to earn</h3><ul><li>Free plan for every doctor</li><li>Doctor and Clinic subscriptions</li><li>Later: platform services between providers</li></ul></div>
              <div className="ib"><Icon name="hand" className="ico ic" /><h3>Who we are looking for</h3><ul><li>Founding Doctors</li><li>Lab and hospital partners</li><li>Clinical advisors</li><li>Investors who share our principles</li></ul></div>
            </div>
          </div>
        </section>

        {/* JOIN */}
        <section id="join">
          <div className="wrap">
            <div className="jh rv nomb">
              <p className="eyebrow">Work with us</p>
              <h2 className="h2">Help build <span className="blue">connected care for India</span></h2>
            </div>
            <div className="jg">
              <div className="jc rv"><span className="k">Doctors</span><h3>Become a Founding Doctor</h3><p>10 seats across India. 12 weeks free, setup online, price locked for 12–24 months.</p><Link className="btn pri" href="/#pilot">Book a 15-min call</Link></div>
              <div className="jc rv"><span className="k">Labs &amp; hospitals</span><h3>Partner for phase 2</h3><p>Connect your reports and services to the doctors you already work with.</p><Link className="btn sec" href="/#pilot">Talk to us</Link></div>
              <div className="jc rv"><span className="k">Careers &amp; investors</span><h3>Start a conversation</h3><p>Want to build with us or back us? Write in and we will share our pilot plan.</p><Link className="btn sec" href="/#pilot">Get in touch</Link></div>
            </div>

            <div className="faq">
              <h2 className="h2 sm">Questions</h2>
              {faqs.map((f) => (
                <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
              ))}
            </div>

            <p className="srcs">
              Sources: Irving G et al., BMJ Open, 2017 · Anjana RM et al., ICMR-INDIAB, Lancet Diabetes &amp; Endocrinology, 2023 · WHO, Adherence to long-term therapies, 2003 · Digital Personal Data Protection Act, 2023. Product screens are illustrative and use sample patients.
            </p>
          </div>
        </section>
      </div>
      <AboutEffects />
      <JsonLd data={[aboutSchema, faqSchema(faqs)]} />
    </PageShell>
  );
}
