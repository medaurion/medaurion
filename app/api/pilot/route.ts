import { NextResponse } from "next/server";
import { CONSENT_TEXT, ensurePilotTable, getSql } from "@/lib/db";
import { checkEmail, normaliseMobile } from "@/lib/emailCheck";

const SPECIALTIES = new Set([
  "Diabetology", "Cardiology", "Nephrology", "Endocrinology / Thyroid",
  "General physician", "Pulmonology", "Other",
]);

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/[\u0000-\u001f]/g, " ").replace(/\s+/g, " ").trim().slice(0, max) : "";

const bad = (error: string, field?: string, status = 400) =>
  NextResponse.json({ ok: false, error, field }, { status });

const DUPLICATE = "You have already registered with these details. Our team will contact you soon — no need to submit again.";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return bad("Invalid request.");
  }

  // Honeypot: real people never fill this hidden field.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 120);
  const clinic = clean(body.clinic, 160);
  const email = clean(body.email, 160).toLowerCase();
  const phoneRaw = clean(body.phone, 20);
  const specialtyRaw = clean(body.specialty, 60);
  const page = clean(body.page, 200) || null;

  if (name.replace(/[^\p{L}]/gu, "").length < 2) return bad("Please enter your full name.", "name");
  if (clinic.replace(/[^\p{L}\p{N}]/gu, "").length < 2) return bad("Please enter your clinic or hospital name.", "clinic");
  const emailErr = await checkEmail(email);
  if (emailErr) return bad(emailErr, "email");
  let phone: string | null = null;
  if (phoneRaw) {
    phone = normaliseMobile(phoneRaw);
    if (!phone) return bad("Please enter a valid 10-digit Indian mobile number, or leave it blank.", "phone");
  }
  if (!SPECIALTIES.has(specialtyRaw)) return bad("Please select your specialty.", "specialty");
  if (body.consent !== true) return bad("Please tick the consent box so we can contact you.", "consent");

  const sql = getSql();
  if (!sql) return bad("Sign-up is not connected yet. Please email medaurion@gmail.com.", undefined, 503);

  try {
    await ensurePilotTable(sql);
    const existing = await sql`
      SELECT 1 FROM pilot_requests
      WHERE lower(email) = ${email} OR (${phone}::text IS NOT NULL AND phone = ${phone})
      LIMIT 1`;
    if (existing.length) return bad(DUPLICATE, "email", 409);

    const inserted = await sql`
      INSERT INTO pilot_requests (name, clinic, email, phone, specialty, consent, consent_text, page)
      VALUES (${name}, ${clinic}, ${email}, ${phone}, ${specialtyRaw}, true, ${CONSENT_TEXT}, ${page})
      ON CONFLICT DO NOTHING
      RETURNING id`;
    if (!inserted.length) return bad(DUPLICATE, "email", 409);
    return NextResponse.json({ ok: true });
  } catch (e) {
    if ((e as { code?: string }).code === "23505") return bad(DUPLICATE, "email", 409);
    console.error("pilot insert failed", e);
    return bad("Could not save right now. Please try again in a minute.", undefined, 500);
  }
}
