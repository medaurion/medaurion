"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandLogo } from "@/components/ui/Brand";
import { Icon } from "@/components/ui/Icon";

const productLinks = [
  { label: "Chronic Care", icon: "heart" as const, href: "/chronic-care-software" },
  { label: "Patient Brief", icon: "brief" as const, href: "/features/patient-brief" },
  { label: "Follow-Ups", icon: "calendar" as const, href: "/features/follow-up-intelligence" },
  { label: "AI Notes", icon: "prescription" as const, href: "/features/ai-clinical-documentation" },
  { label: "Specialties", icon: "users" as const, href: "/specialties" },
  { label: "Pricing", icon: "sparkle" as const, href: "/pricing" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header" id="top">
      <div className="header-main container">
        <Link className="brand" href="/" aria-label="medaurion home">
          <BrandLogo priority />
        </Link>
        <div className="header-actions">
          <Link className="header-about" href="/about">
            About Us
          </Link>
          <Link className="header-login" href="/#pilot" title="Ask about clinic access">
            Login
          </Link>
        </div>
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <Icon name={menuOpen ? "close" : "menu"} size={23} />
        </button>
      </div>
      <nav
        aria-label="Product navigation"
        className={`product-nav${menuOpen ? " product-nav--open" : ""}`}
      >
        <div className="product-nav__inner container">
          {productLinks.map((link) => (
            <Link
              className="product-nav__link"
              href={link.href}
              key={link.label}
              onClick={() => setMenuOpen(false)}
            >
              <span className="product-nav__icon">
                <Icon name={link.icon} size={21} />
              </span>
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
