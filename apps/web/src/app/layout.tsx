import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import "./seo.css";
import { SITE } from "@/lib/site";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/components/seo/schema";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "medaurion AIOS | Patient Intelligence for Clinics in India",
    template: "%s",
  },
  description:
    "Know what changed before the patient sits down. A 60-second patient brief, lab result comparison, follow-up tracking and doctor-approved AI notes for Indian clinics.",
  applicationName: SITE.product,
  manifest: "/site.webmanifest",
  alternates: { canonical: "/" },

  // Updated Icons Configuration:
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

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

export const viewport: Viewport = { themeColor: "#0B63CE", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        {children}
        <Analytics />
        <JsonLd data={[organizationSchema, websiteSchema]} />
      </body>
    </html>
  );
}
