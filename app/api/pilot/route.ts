import { NextResponse } from "next/server";
import { CONSENT_TEXT, ensurePilotTable, getSql } from "@/lib/db";

const SPECIALTIES = new Set([
  "Diabetology", "Cardiology", "Nephrology", "Endocrinology / Thyroid",
  "General physician", "Pulmonology", "Other",
]);

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.replace(/[\u0000-\u001f]/g, " ").trim().slice(0, max) : "";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real people never fill this hidden field.
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 120);
  const clinic = clean(body.clinic, 160);
  const email = clean(body.email, 160).toLowerCase();
  const phone = clean(body.phone, 20).replace(/[^\d+ -]/g, "");
  const specialty = SPECIALTIES.has(clean(body.specialty, 60)) ? clean(body.specialty, 60) : null;
  const page = clean(body.page, 200) || null;

  if (!name || !clinic) return NextResponse.json({ ok: false, error: "Please enter your name and clinic." }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
  if (phone && phone.replace(/\D/g, "").length < 10) return NextResponse.json({ ok: false, error: "Please enter a valid mobile number or leave it blank." }, { status: 400 });
  if (body.consent !== true) return NextResponse.json({ ok: false, error: "Please tick the consent box so we can contact you." }, { status: 400 });

  const sql = getSql();
  if (!sql) {
    return NextResponse.json({ ok: false, error: "Sign-up is not connected yet. Please email medaurion@gmail.com." }, { status: 503 });
  }

  try {
    await ensurePilotTable(sql);
    await sql`
      INSERT INTO pilot_requests (name, clinic, email, phone, specialty, consent, consent_text, page)
      VALUES (${name}, ${clinic}, ${email}, ${phone || null}, ${specialty}, true, ${CONSENT_TEXT}, ${page})`;
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("pilot insert failed", e);
    return NextResponse.json({ ok: false, error: "Could not save right now. Please try again in a minute." }, { status: 500 });
  }
}
