import Link from "next/link";
import PageShell from "../components/seo/PageShell";
import JsonLd from "../components/seo/JsonLd";
import { faqSchema } from "../components/seo/schema";
import { pageMeta } from "@/lib/meta";
import { SITE, absoluteUrl } from "@/lib/site";
import type { Faq } from "@/content/types";
import "./chronic-care.css";

/* ------------------------------------------------------------------
   /chronic-care-software  — hub page (SEO cluster H1)
   Primary keyword: "chronic care software"
   Edit text below; no other file needs to change for copy edits.
------------------------------------------------------------------- */

const PATH = "/chronic-care-software";
const UPDATED = "2026-10-27";
const TITLE = "Chronic Care Software for Indian Doctors | medaurion";
const DESCRIPTION =
  "Chronic care software for Indian clinics: see what changed before each visit, track HbA1c and BP trends, and run WhatsApp follow-ups. Free plan available.";

export const metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "chronic care software",
    "chronic disease management software",
    "chronic disease management platform India",
    "patient follow up software",
    "medication adherence",
    "diabetes clinic software",
    "hypertension patient tracking",
  ],
});

const PILOT = "/#pilot";

const faqs: Faq[] = [
  { q: "What is chronic disease management software?", a: "It is software that keeps a long-term patient's history, reports and trends in one place and runs follow-ups between visits. It is used for conditions such as diabetes, hypertension, thyroid disorders and CKD, where patients return for years." },
  { q: "How is medaurion different from a regular EMR?", a: "A regular EMR stores records visit by visit. medaurion adds a pre-visit brief that shows what changed, trend charts from actual reports, a pending-test tracker and WhatsApp follow-ups. You can use it as your EMR or alongside your current one." },
  { q: "Is there a free plan?", a: "Yes. The free plan includes Patient 360° for 10 patients a month, the medicine schedule card and the follow-up leak check. No card is needed." },
  { q: "Does the AI diagnose patients or change prescriptions?", a: "No. The AI summarises the reports and notes you already have and links every line to its source. Diagnosis and treatment decisions stay with the doctor." },
  { q: "Can patients send reports on WhatsApp?", a: "Yes. With the patient's consent, reports sent to the clinic's WhatsApp are filed into that patient's record and appear in the next brief." },
  { q: "Is medaurion linked with ABDM and ABHA?", a: "Not yet. ABHA linking is planned. medaurion uses ABHA, never Aadhaar, for health record linking." },
  { q: "Which languages does it support for patients?", a: "Prescriptions and medicine schedule cards can be shared in English, Marathi and Hindi." },
  { q: "How long does setup take?", a: "A single-doctor clinic can start the same day. For Founding Doctor clinics anywhere in India, our team sets it up online and imports existing patient lists." },
  { q: "Does it work on a phone?", a: "Yes. medaurion runs in the browser on a laptop, tablet or phone. Many doctors read the Morning OPD Briefing on their phone before the OPD starts." },
  { q: "Can my front desk staff use it?", a: "Yes. Front desk staff get their own login with limited access. They can manage the queue, upload reports and send reminders, but they can't see clinical notes unless the doctor allows it." },
  { q: "Do WhatsApp messages cost extra?", a: "WhatsApp Business messages have a per-message cost set by Meta. medaurion shows the expected cost for your clinic before you switch reminders on." },
  { q: "Can I export my data if I stop using medaurion?", a: "Yes. You can export your patient records at any time, including when you leave." },
];

const pageSoftwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE.product,
  applicationCategory: "HealthApplication",
  applicationSubCategory: "Chronic care software",
  operatingSystem: "Web, Android, iOS (browser)",
  url: absoluteUrl(PATH),
  description: "Chronic care software for Indian doctors: pre-visit patient brief, trends from reports, and WhatsApp follow-ups.",
  offers: [
    { "@type": "Offer", name: "Free", price: "0", priceCurrency: "INR" },
    { "@type": "Offer", name: "Clinic (early-access estimate)", price: "2999", priceCurrency: "INR" },
  ],
  publisher: { "@id": `${SITE.url}/#organization` },
  audience: { "@type": "MedicalAudience", audienceType: "Doctors and clinic teams in India" },
};

const pageArticleSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  description: DESCRIPTION,
  url: absoluteUrl(PATH),
  inLanguage: "en-IN",
  dateModified: UPDATED,
  author: { "@type": "Organization", name: "medaurion product team", url: SITE.url },
  publisher: { "@id": `${SITE.url}/#organization` },
};

export default function ChronicCareSoftwarePage() {
  return (
    <PageShell crumbs={[{ name: "Chronic care software", href: PATH }]}>
      <div className="cc">
        {/* ---------- HERO ---------- */}
        <div className="cc-wrap">
          <div className="cc-hero">
            <div>
              <div className="cc-eyebrow">Chronic care software for Indian doctors</div>
              <h1>Chronic care software that shows what changed before the patient sits down</h1>
              <p className="cc-lead">
                medaurion is chronic care software for Indian doctors and small clinics. Before each visit it gives you a one-screen brief: what changed since last time, the latest reports, trends in HbA1c, BP or TSH, medicines, and pending tests. After the visit it keeps follow-ups and medicine reminders going on WhatsApp, so long-term patients don&apos;t quietly drop off. AI assists; the doctor decides.
              </p>
              <div className="cc-cta-row">
                <Link className="cc-btn cc-btn--primary" href={PILOT}>Book a 15-min call</Link>
                <a className="cc-btn cc-btn--ghost" href="#pricing">Start free – 10 patients/month</a>
              </div>
              <p className="cc-fine">Free plan available. No card needed. Built for single-doctor and small clinics.</p>
              <div className="cc-byline">
                <span>Written by <b>medaurion product team</b></span>
                <span>·</span>
                {/* TODO: replace with the doctor reviewer's name once they agree in writing */}
                <span>Medical review: <span className="cc-placeholder">doctor reviewer – add with consent</span></span>
                <span>·</span>
                <span>Last updated <time dateTime={UPDATED}>27 Oct 2026</time></span>
              </div>
            </div>

            <figure className="cc-brief" aria-label="Sample Patient 360 brief with fictional data">
              <div className="cc-brief__top">
                <span><b>Morning OPD Briefing</b> · Token 7 · 10:40</span>
                <span className="cc-tag cc-tag--fict">Sample · fictional patient</span>
              </div>
              <div className="cc-pt">
                <div className="cc-av">SK</div>
                <div>
                  <div className="cc-pt__n">Sunita K. · 58 F</div>
                  <div className="cc-pt__s">Type 2 diabetes · Hypertension · last visit 12 Jul</div>
                </div>
              </div>
              <div className="cc-changed">
                <h4>What changed since last visit</h4>
                <ul>
                  <li>HbA1c <span className="cc-up">8.4%</span> (was 7.2% in Apr) – report sent on WhatsApp 21 Oct</li>
                  <li>Missed 1 follow-up (due 12 Sep); medicine refill reminder not opened</li>
                  <li>Home BP log average <span className="cc-ok">132/84</span>, steady</li>
                  <li>Pending: urine ACR, ordered 12 Jul, not received</li>
                </ul>
              </div>
              <div className="cc-trend">
                <div className="cc-trend__lab"><span>HbA1c, % · source: uploaded lab reports</span><span>Jan → Oct</span></div>
                <svg viewBox="0 0 300 84" role="img" aria-label="HbA1c trend from 7.6 in January to 7.2 in April and 8.4 in October">
                  <line x1="0" y1="62" x2="300" y2="62" stroke="#DCE4E8" strokeDasharray="3 3" />
                  <text x="2" y="58" fontSize="10" fill="#55666F">7.0 target</text>
                  <path d="M10 50 L120 66 L290 20" fill="none" stroke="#0F6A8E" strokeWidth="2.5" />
                  <circle cx="10" cy="50" r="4" fill="#0F6A8E" />
                  <circle cx="120" cy="66" r="4" fill="#0F6A8E" />
                  <circle cx="290" cy="20" r="5" fill="#B42318" />
                  <text x="18" y="44" fontSize="11" fill="#55666F">7.6</text>
                  <text x="128" y="78" fontSize="11" fill="#55666F">7.2</text>
                  <text x="258" y="16" fontSize="11" fontWeight="700" fill="#B42318">8.4</text>
                </svg>
              </div>
              <div className="cc-brief__foot">
                <span>Suggested to review: <b>adherence, diet history, ACR</b></span>
                <span>· Doctor decides</span>
              </div>
            </figure>
          </div>
        </div>

        {/* ---------- WHAT IT DOES ---------- */}
        <section className="cc-section" id="what">
          <div className="cc-wrap cc-split">
            <div className="cc-read">
              <h2>What chronic disease management software does for a clinic</h2>
              <p>Chronic disease management software keeps a long-term patient&apos;s story in one place and keeps the patient coming back on schedule. For an Indian OPD that usually means four jobs: collect reports that arrive on paper and WhatsApp, show trends across visits, prepare the doctor before the consultation, and run follow-ups after it.</p>
              <p>A general clinic management system is built around the day&apos;s queue and billing. It answers &quot;who is next and what do they owe&quot;. Chronic care software is built around the patient over months and years. It answers &quot;what has changed, what is overdue, and who has stopped coming&quot;. Both matter, and medaurion does the queue too, but the long view is where most clinics lose patients and outcomes.</p>
              <p>The need is large. The ICMR-INDIAB study estimated about 101 million people in India living with diabetes and about 315 million with hypertension. Most of them are seen in private OPDs, by one doctor, with paper files or a basic EMR.</p>
              <div className="cc-grid2">
                <div className="cc-card"><h3>Before the visit</h3><p>Patient 360° brief: what changed, latest reports, trends, medicines, allergies, pending tests.</p></div>
                <div className="cc-card"><h3>During the visit</h3><p>Dictate or type notes, write the prescription with safety checks, mark care gaps.</p></div>
                <div className="cc-card"><h3>After the visit</h3><p>Follow-up date, WhatsApp reminders, medicine schedule card in the patient&apos;s language.</p></div>
                <div className="cc-card"><h3>Between visits</h3><p>Reports land in a WhatsApp report inbox, pending tests are tracked, drop-offs are flagged.</p></div>
              </div>
            </div>
            <aside className="cc-aside">
              <div className="cc-callout"><p><b>Short answer:</b> chronic care software = patient history + trends + follow-ups, organised around visits that repeat for years.</p></div>
              <p>Conditions most clinics start with: type 2 diabetes, hypertension, thyroid disorders, CKD, dyslipidaemia, asthma/COPD.</p>
            </aside>
          </div>
        </section>

        {/* ---------- DROP-OFF ---------- */}
        <section className="cc-section" id="dropoff">
          <div className="cc-wrap cc-read">
            <h2>Why chronic patients drop off after visit 2</h2>
            <p>Most chronic patients don&apos;t leave because of a bad consultation. They leave because nothing reminds them to come back, the second report never reaches the doctor, or the medicines run out and the local chemist refills them without a review. Each step is small. Together they turn a care plan into a one-time visit.</p>
            <p>The WHO&apos;s report on long-term therapies estimated that only about half of patients with chronic diseases take their medicines as prescribed, even in high-income countries. In a busy Indian clinic the front desk rarely has time to call every patient who missed a date.</p>
            <h3>The five common leaks</h3>
            <div className="cc-tbl">
              <table>
                <thead><tr><th>Leak</th><th>What happens</th><th>What medaurion does</th></tr></thead>
                <tbody>
                  <tr><td>No follow-up date</td><td>Patient is told &quot;come after a month&quot; with nothing written or sent</td><td>Follow-up date is set on the prescription and sent on WhatsApp</td></tr>
                  <tr><td>Missed date, no recall</td><td>No one notices the patient didn&apos;t return</td><td>Overdue list on the Follow-Ups board, one-tap reminder</td></tr>
                  <tr><td>Report lost</td><td>Lab report stays on the patient&apos;s phone</td><td>Patient sends it to the clinic&apos;s WhatsApp; it is filed in their record</td></tr>
                  <tr><td>Medicines unclear</td><td>Patient can&apos;t read the prescription or the schedule</td><td>Patient-language medicine schedule card (English, मराठी, हिंदी)</td></tr>
                  <tr><td>Pending test forgotten</td><td>Test ordered, never done, never checked</td><td>Pending test tracker shows it in the next brief</td></tr>
                </tbody>
              </table>
            </div>
            <p>You can check your own clinic with the free <a href="#tools">follow-up leak check</a>. It takes about five minutes and uses numbers you already know, such as new chronic patients per month and how many came back for a second visit.</p>
          </div>
        </section>

        {/* ---------- PATIENT 360 ---------- */}
        <section className="cc-section" id="patient360">
          <div className="cc-wrap cc-read">
            <h2>Patient 360°: history, reports and trends on one screen</h2>
            <p>Patient 360° is the single page a doctor opens for a chronic patient. It replaces flipping through a paper file, a phone gallery of lab reports and a separate prescription pad.</p>
            <ul>
              <li><b>Brief at the top:</b> what changed since the last visit, written in three or four lines, each linked to its source report or note.</li>
              <li><b>Problem list:</b> active conditions with the date they were first recorded.</li>
              <li><b>Trends:</b> HbA1c, fasting and post-meal sugar, BP, weight, creatinine, eGFR, lipids, TSH, plotted from the actual reports.</li>
              <li><b>Medicines and changes:</b> current list with dose changes over time, so you can see what was tried.</li>
              <li><b>Treatment timeline:</b> visits, reports, prescriptions and referrals in date order.</li>
              <li><b>Pending:</b> tests ordered and not received, referrals without a reply.</li>
            </ul>
            <div className="cc-ai-note"><b>How the AI is used:</b> medaurion reads the reports and notes you already have and summarises them. Every line in the brief links to its source so you can check it. It does not diagnose and does not change a prescription. The doctor decides.</div>
            <p>The free plan includes Patient 360° for 10 patients a month, so you can try it on your most complex patients first. See also the <Link href="/features/patient-brief">Patient Brief feature</Link>.</p>
          </div>
        </section>

        {/* ---------- FOLLOW-UPS ---------- */}
        <section className="cc-section" id="followups">
          <div className="cc-wrap cc-read">
            <h2>Follow-ups and medication adherence on WhatsApp</h2>
            <p>Indian patients already use WhatsApp, so medaurion uses it for the work that keeps them on track. Messages go from the clinic&apos;s number with the patient&apos;s consent, and patients can reply or send reports back.</p>
            <ol className="cc-steps">
              <li><div><b>At the visit:</b> the follow-up date and any tests are added to the prescription.</div></li>
              <li><div><b>Same day:</b> the patient gets the prescription and a medicine schedule card in their language.</div></li>
              <li><div><b>Before the date:</b> a reminder goes out with the tests to bring. Reports sent back are filed automatically.</div></li>
              <li><div><b>If missed:</b> the patient moves to the Overdue column. The front desk sends one reminder or calls.</div></li>
              <li><div><b>Next visit:</b> the brief shows what came in and what is still missing.</div></li>
            </ol>
            <p>The Follow-Ups board has four columns: Overdue, Due in 14 days, Contacted and Scheduled later. Each patient card shows the reminder history, so staff don&apos;t message the same person twice in one day. More on <Link href="/features/follow-up-intelligence">Follow-Up Intelligence</Link>.</p>
            <p className="cc-fine">Message frequency and wording are set by the clinic. medaurion does not send promotional messages to patients and never shares patient data with pharma companies.</p>
          </div>
        </section>

        {/* ---------- CONDITIONS ---------- */}
        <section className="cc-section" id="conditions">
          <div className="cc-wrap">
            <div className="cc-read">
              <h2>Diabetes, hypertension, thyroid and CKD workflows</h2>
              <p>Each condition has its own set of numbers to watch and its own review rhythm. medaurion comes with starting checklists that the doctor can edit. They are reminders, not treatment rules.</p>
            </div>
            <div className="cc-grid2">
              <div className="cc-card"><h3>Type 2 diabetes</h3><p>HbA1c trend, fasting and post-meal sugar, weight, BP, foot and eye check dates, urine ACR and eGFR, lipid profile. Flags a missed HbA1c or a rising trend.</p></div>
              <div className="cc-card"><h3>Hypertension</h3><p>Clinic and home BP readings, medicine changes, creatinine and potassium where relevant, salt and lifestyle notes. Home BP can be sent as a photo or typed values.</p></div>
              <div className="cc-card"><h3>Thyroid disorders</h3><p>TSH and free T4 trends against dose changes, and test timing after a dose change. Helpful during pregnancy follow-up when reviews are frequent.</p></div>
              <div className="cc-card"><h3>Chronic kidney disease</h3><p>Creatinine, eGFR and ACR over time, medicines to review for kidney function, and referral tracking to a nephrologist.</p></div>
            </div>
            <p className="cc-fine cc-read" style={{ marginTop: 16 }}>Also used for dyslipidaemia, asthma and COPD, and other conditions with repeat visits. Checklists are editable for each clinic and specialty.</p>
          </div>
        </section>

        {/* ---------- WHO ---------- */}
        <section className="cc-section" id="who">
          <div className="cc-wrap cc-read">
            <h2>Who uses chronic care software</h2>
            <p>medaurion is built for private OPDs in India where one or a few doctors see a steady flow of long-term patients. It fits best when chronic patients make up a large share of daily visits and the clinic has little staff time for calls and record-keeping.</p>
            <ul>
              <li><b>General physicians and family doctors</b> who manage diabetes, BP and thyroid together in a busy morning OPD.</li>
              <li><b>Diabetologists and endocrinologists</b> who track HbA1c, insulin changes and complication screening dates.</li>
              <li><b>Cardiologists</b> who follow BP, lipids and post-procedure medicines over months.</li>
              <li><b>Nephrologists</b> who watch creatinine, eGFR and ACR and coordinate with referring doctors.</li>
              <li><b>Small multi-doctor clinics</b> across India that want one shared view of their chronic patients.</li>
            </ul>
            <p>It is not a hospital management system. If you need IPD billing, pharmacy stock and bed management, use a hospital system and connect medaurion for the chronic OPD side when integration is available. Browse by <Link href="/specialties">specialty</Link>.</p>
          </div>
        </section>

        {/* ---------- 2-MIN OPD ---------- */}
        <section className="cc-section" id="opd">
          <div className="cc-wrap cc-read">
            <h2>How the ~2-minute OPD changes with a pre-visit brief</h2>
            <p>A study of consultation length across 67 countries (Irving et al., BMJ Open, 2017) reported primary-care visits in India of about 2 minutes on average. In that time a doctor has to find the old file, read the new report, ask about symptoms, decide and write the prescription. Most of that time goes on finding information, not on the patient.</p>
            <p>The Morning OPD Briefing moves the finding part before the visit. When the patient&apos;s token is called, the doctor already sees the three things that matter: what changed, what is pending, and what was planned last time.</p>
            <div className="cc-tbl">
              <table>
                <thead><tr><th>Step in the visit</th><th>Paper file / basic EMR</th><th>With a medaurion brief</th></tr></thead>
                <tbody>
                  <tr><td>Find history</td><td>Flip file, scroll phone gallery</td><td>Brief already open</td></tr>
                  <tr><td>Read new reports</td><td>Patient hands over printouts</td><td>Filed and compared with the last result</td></tr>
                  <tr><td>Recall the plan</td><td>Depends on handwriting and memory</td><td>Last plan and pending tests shown</td></tr>
                  <tr><td>Write prescription</td><td>Handwritten pad</td><td>Template or dictation, safety check, patient-language card</td></tr>
                  <tr><td>Set next visit</td><td>Spoken to the patient</td><td>Saved and sent on WhatsApp</td></tr>
                </tbody>
              </table>
            </div>
            <p>We measure time saved with each pilot clinic using their own before-and-after numbers. We don&apos;t publish a general &quot;minutes saved&quot; figure because it varies a lot by clinic and specialty.</p>
          </div>
        </section>

        {/* ---------- PRIVACY ---------- */}
        <section className="cc-section" id="privacy">
          <div className="cc-wrap cc-read">
            <h2>Data privacy under the DPDP Act 2023</h2>
            <p>India&apos;s Digital Personal Data Protection Act, 2023 sets rules for how personal data, including health data, is collected and used. For a clinic using software, the practical questions are simple: who can see a patient&apos;s data, did the patient agree, and can it be removed or exported.</p>
            <ul>
              <li><b>Consent first:</b> WhatsApp messages and record linking need the patient&apos;s consent, which is recorded with date and time.</li>
              <li><b>Role-based access:</b> doctor, front desk and admin see different things, and actions are logged in an audit trail.</li>
              <li><b>Your data stays yours:</b> you can export your patient records at any time, including if you leave.</li>
              <li><b>No selling of data:</b> patient data is never sold or shared with pharma companies or advertisers.</li>
              <li><b>ABHA:</b> ABHA linking is planned and is not live yet. medaurion uses ABHA, never Aadhaar, for health record linking.</li>
            </ul>
            <p className="cc-fine">This section explains how medaurion handles data. It is not legal advice. Clinics should check their own obligations with a legal adviser.</p>
          </div>
        </section>

        {/* ---------- HOW TO CHOOSE ---------- */}
        <section className="cc-section" id="choose">
          <div className="cc-wrap cc-read">
            <h2>How to choose chronic care software for your clinic</h2>
            <p>Many clinic software products in India list long feature sheets. For chronic care, a short set of questions tells you more than a feature list. Ask any vendor, including us, to show each one live on sample data during a demo.</p>
            <div className="cc-tbl">
              <table>
                <thead><tr><th>Question to ask</th><th>Why it matters for chronic patients</th><th>What a good answer looks like</th></tr></thead>
                <tbody>
                  <tr><td>Can I see what changed since the last visit in under 10 seconds?</td><td>The OPD is short; history has to be ready, not searched</td><td>A brief with changes and links to the source reports</td></tr>
                  <tr><td>Are trends drawn from actual lab values?</td><td>HbA1c, eGFR and TSH decisions depend on direction, not one value</td><td>Charts built from reports, with the report date on each point</td></tr>
                  <tr><td>How do reports get in?</td><td>Most reports arrive on paper or WhatsApp</td><td>WhatsApp upload, photo scan and lab PDF import</td></tr>
                  <tr><td>Who follows up with patients who miss a date?</td><td>Drop-off is the biggest leak in chronic care</td><td>An overdue list and one-tap reminders, with history</td></tr>
                  <tr><td>Can patients read the prescription?</td><td>Adherence depends on understanding the schedule</td><td>A medicine card in the patient&apos;s language</td></tr>
                  <tr><td>What happens to my data if I leave?</td><td>Records are yours and your patients&apos;</td><td>Full export, no lock-in fee</td></tr>
                  <tr><td>Is the price written down?</td><td>Hidden setup and per-message costs add up</td><td>A clear price per doctor or clinic, plus WhatsApp message costs stated</td></tr>
                </tbody>
              </table>
            </div>
            <h3>Single-doctor clinic or multi-doctor clinic?</h3>
            <p>A single doctor needs speed: the brief, a fast prescription and follow-ups that run without extra staff. A clinic with two or more doctors also needs staff roles, an audit trail, shared follow-up lists and a dashboard for the owner. Pick a product that can start small and add these when you grow, so you don&apos;t have to move records twice.</p>
            <h3>Specialty fit</h3>
            <p>Diabetologists and endocrinologists use trends and HbA1c recall the most. General physicians and family doctors gain the most from the brief, because they see many conditions in one OPD. Cardiologists and nephrologists use the pending-test and referral tracking. Ask to see templates for your specialty, and check that you can edit them. You can also <Link href="/compare">compare medaurion with other clinic software</Link>.</p>
          </div>
        </section>

        {/* ---------- PRICING ---------- */}
        <section className="cc-section" id="pricing">
          <div className="cc-wrap">
            <div className="cc-read">
              <h2>Pricing and the free plan</h2>
              <p>Start free with your most complex chronic patients. Upgrade when the brief and follow-ups are part of your day. Paid prices below are early-access estimates and may change before general launch. Full details on the <Link href="/pricing">pricing page</Link>.</p>
            </div>
            <div className="cc-plans">
              <div className="cc-plan">
                <div className="cc-eyebrow">Free</div>
                <div className="cc-price">₹0 <small>/ month</small></div>
                <ul>
                  <li>Patient 360° for 10 patients/month</li>
                  <li>Medicine schedule card</li>
                  <li>Follow-up leak check</li>
                  <li>Booking link (launching soon)</li>
                  <li>Medical certificate (launching soon)</li>
                </ul>
              </div>
              <div className="cc-plan cc-plan--feat">
                <div className="cc-eyebrow">Doctor</div>
                <div className="cc-price">On call <small>early-access</small></div>
                <ul>
                  <li>Unlimited Patient 360°</li>
                  <li>Morning OPD Briefing</li>
                  <li>Dictated prescriptions, treatment timeline</li>
                  <li>WhatsApp report inbox, pending test tracker</li>
                  <li>Follow-ups, Ask AI, Health Card</li>
                </ul>
              </div>
              <div className="cc-plan">
                <div className="cc-eyebrow">Clinic</div>
                <div className="cc-price">₹2,999 <small>/ month · estimate</small></div>
                <ul>
                  <li>Everything in Doctor</li>
                  <li>Staff roles and audit trail</li>
                  <li>WhatsApp assistant, care moments</li>
                  <li>Clinic dashboard, CA report</li>
                  <li>Family linking; ABHA linking (planned)</li>
                </ul>
              </div>
            </div>
            <div className="cc-callout cc-read" style={{ marginTop: 20 }}>
              <p><b>Founding Doctor programme – 10 seats across India:</b> a 12-week free pilot, price locked for 12–24 months, and we set it up for you online. You keep your data if you leave.</p>
            </div>
          </div>
        </section>

        {/* ---------- TOOLS ---------- */}
        <section className="cc-section" id="tools">
          <div className="cc-wrap">
            <div className="cc-read"><h2>Free tools for chronic care clinics</h2></div>
            <div className="cc-grid3">
              <div className="cc-card"><h3>Follow-up leak check</h3><p>Estimate how many chronic patients your clinic loses between visit 1 and visit 3.</p></div>
              <div className="cc-card"><h3>Medicine schedule card</h3><p>Turn a prescription into a simple morning-afternoon-night card in English, मराठी or हिंदी.</p></div>
              <div className="cc-card"><h3>Booking link</h3><p>A free appointment link for your clinic. Launching soon.</p></div>
            </div>
          </div>
        </section>

        {/* ---------- FIRST WEEK ---------- */}
        <section className="cc-section" id="start">
          <div className="cc-wrap cc-read">
            <h2>Getting started in your first week</h2>
            <p>You don&apos;t need to move every old file on day one. Start with the patients who need the long view most, and let the rest come in as they visit.</p>
            <ol className="cc-steps">
              <li><div><b>Day 1:</b> create your clinic, add your WhatsApp number and choose your follow-up message wording.</div></li>
              <li><div><b>Day 2:</b> pick 10 complex chronic patients. Upload their last two or three reports from paper or WhatsApp.</div></li>
              <li><div><b>Day 3:</b> open each Patient 360° before their next visit and check the brief against the original reports.</div></li>
              <li><div><b>Days 4–5:</b> set follow-up dates for every chronic patient you see, and send the medicine schedule card.</div></li>
              <li><div><b>Day 7:</b> look at the Follow-Ups board. Send reminders to anyone overdue and note who replies.</div></li>
            </ol>
            <p>After four weeks, compare second-visit returns with the month before you started. That number, not a vendor&apos;s claim, tells you whether the software is helping your clinic.</p>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className="cc-section" id="faq">
          <div className="cc-wrap cc-read">
            <h2>Frequently asked questions</h2>
            {faqs.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ---------- FINAL CTA ---------- */}
        <section className="cc-section" id="book">
          <div className="cc-wrap">
            <div className="cc-final">
              <div>
                <h2>See your own chronic patients in a brief</h2>
                <p>A 15-minute call. We show the brief on sample data, then set up your free plan.</p>
              </div>
              <Link className="cc-btn cc-btn--white" href={PILOT}>Book a 15-min call</Link>
            </div>
          </div>
        </section>

        {/* ---------- SOURCES ---------- */}
        <section className="cc-section" id="sources">
          <div className="cc-wrap cc-read">
            <h2 className="cc-h2-small">Sources</h2>
            <ol className="cc-sources">
              <li>Anjana RM et al. Metabolic non-communicable disease health report of India: the ICMR-INDIAB national cross-sectional study. <i>Lancet Diabetes &amp; Endocrinology</i>, 2023.</li>
              <li>Irving G et al. International variations in primary care physician consultation time: a systematic review of 67 countries. <i>BMJ Open</i>, 2017.</li>
              <li>World Health Organization. <i>Adherence to long-term therapies: evidence for action</i>, 2003.</li>
              <li>Government of India. Digital Personal Data Protection Act, 2023.</li>
            </ol>
            <p className="cc-fine">Sample patient &quot;Sunita K.&quot; and all values in the brief above are fictional and shown for illustration only.</p>
          </div>
        </section>
      </div>

      {/* FAQPage is built from the same faqs array as the visible FAQ, so they always match */}
      <JsonLd data={[pageSoftwareSchema, pageArticleSchema, faqSchema(faqs)]} />
    </PageShell>
  );
}
