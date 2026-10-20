import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./seo.css";
import { SITE } from "@/lib/site";
import JsonLd from "./components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "./components/seo/schema";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "medaurion AIOS | Patient Intelligence for Clinics in India",
    template: "%s",
  },
  description:
    "Know what changed before the patient sits down. A 60-second patient brief, lab result comparison, follow-up tracking and doctor-approved AI notes for Indian clinics.",
  applicationName: SITE.product,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE.product,
    locale: SITE.locale,
    title: "medaurion AIOS | Patient Intelligence for Clinics in India",
    description: SITE.description,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.product }],
  },
  twitter: {
    card: "summary_large_image",
    title: "medaurion AIOS | Patient Intelligence for Clinics in India",
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  category: "health",
};

export const viewport: Viewport = { themeColor: "#0F6A8E", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        {children}
        <JsonLd data={[organizationSchema, websiteSchema]} />
      </body>
    </html>
  );
}
