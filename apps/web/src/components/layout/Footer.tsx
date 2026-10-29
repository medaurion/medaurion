import Link from "next/link";
import { BrandLogo } from "@/components/ui/Brand";
import { Icon } from "@/components/ui/Icon";

const links = [
  { label: "Features", href: "/features" },
  { label: "Specialties", href: "/specialties" },
  { label: "Compare", href: "/compare" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About us", href: "/about" },
  { label: "Trust & safety", href: "/#trust" },
];

const solutions = [
  { label: "Chronic care software", href: "/chronic-care-software" },
  { label: "EMR software", href: "/emr-software" },
  { label: "Clinic management software", href: "/clinic-management-software" },
  { label: "AI for doctors", href: "/ai-for-doctors" },
  { label: "Digital prescription", href: "/digital-prescription" },
  { label: "HealthPlix alternatives", href: "/compare/healthplix-alternatives" },
  { label: "Eka Care alternatives", href: "/compare/eka-care-alternatives" },
];

const legal = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link className="brand brand--footer" href="/" aria-label="medaurion home">
              <BrandLogo width={170} />
            </Link>
            <p>Know what changed before the patient sits down.</p>
            <span className="footer-product">medaurion AIOS · Patient intelligence</span>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            <h2>Explore</h2>
            {links.map((link) => (
              <Link href={link.href} key={link.label}>
                {link.label}
              </Link>
            ))}
          </nav>
          <nav className="footer-nav" aria-label="Solutions">
            <h2>Solutions</h2>
            {solutions.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="footer-promise">
            <h2>Our promise</h2>
            <p>AI assists. The doctor decides.</p>
            <p>Patient information stays distinct from AI-generated drafts.</p>
          </div>
          <div className="footer-cta">
            <h2>For your clinic</h2>
            <p>Want to explore the doctor pilot?</p>
            <Link className="footer-button" href="/#pilot">
              Start a conversation <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 medaurion. All rights reserved.</span>
          <span className="footer-legal">{legal.map((l) => (<Link key={l.href} href={l.href}>{l.label}</Link>))}</span>
          <Link href="#top" className="back-to-top">
            Back to top <Icon name="arrow-up" size={15} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
