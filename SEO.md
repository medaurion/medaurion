# SEO setup — medaurion.com (seo-v1)

## What was added
- 29 indexable URLs: home, /features (+6), /specialties (+6), /compare (+4), /blog (+6), /pricing, /about. /privacy and /terms are drafts (noindex).
- `app/sitemap.ts` → /sitemap.xml, `app/robots.ts` → /robots.txt.
- Metadata on every page: unique title, description, canonical, Open Graph, Twitter card (`lib/meta.ts`), `metadataBase` = https://www.medaurion.com.
- JSON-LD: Organization + WebSite (all pages), SoftwareApplication (home), BreadcrumbList (all sub-pages), FAQPage (pages with FAQ), Article (blog).
- Visible breadcrumbs, table of contents, FAQ, related links (internal linking), CTA to /#pilot.
- Header/footer now link to real pages instead of #anchors. Share image: public/og-image.png (1200×630).
- Content lives in `content/*.ts` — edit text there, no code changes needed.

## After deploying (do once)
1. Google Search Console → add property `https://www.medaurion.com` (Domain verification via DNS TXT).
2. Sitemaps → submit `https://www.medaurion.com/sitemap.xml`.
3. URL Inspection → "Request indexing" for /, /features, /features/patient-brief, /specialties/diabetologist, /pricing.
4. Bing Webmaster Tools → import from Google Search Console.
5. Check https://search.google.com/test/rich-results for /features/patient-brief (FAQ + Breadcrumb).

## Content rules (keep)
- No diagnosis/treatment advice, no fake stats or testimonials, no "ABDM certified" / "Data in India" until true, ABHA only (never Aadhaar).
- Competitor facts only from their public sites, dated, with the note already on each compare page.

## Next 8 weeks (2 pieces per week)
- Specialty: hypertension clinic, CKD + diabetes shared care, paediatric asthma.
- Blog: "HbA1c follow-up interval checklist for clinics", "How to digitise old paper records", "Front-desk workflow for report filing", "DPDP Act checklist for clinics (with lawyer review)".
- Compare: "Practo Ray alternative", "TatvaPractice alternative" (facts from their sites only).
- Off-site: Capterra, G2, SoftwareSuggest, Techjockey, GoodFirms listings; Google Business Profile; LinkedIn page.
