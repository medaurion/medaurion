import { neon } from "@neondatabase/serverless";

/** Returns a Neon SQL client, or null when DATABASE_URL is not configured. */
export function getSql() {
  const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  return url ? neon(url) : null;
}

export const CONSENT_TEXT =
  "I agree that medaurion may store these details and contact me about the doctor pilot. I can ask for them to be deleted at any time.";

let ready: Promise<unknown> | null = null;

/** Creates the pilot_requests table on first use (idempotent). */
export function ensurePilotTable(sql: NonNullable<ReturnType<typeof getSql>>) {
  ready ??= sql`
    CREATE TABLE IF NOT EXISTS pilot_requests (
      id          BIGSERIAL PRIMARY KEY,
      created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
      name        TEXT NOT NULL,
      clinic      TEXT NOT NULL,
      email       TEXT NOT NULL,
      phone       TEXT,
      specialty   TEXT,
      consent     BOOLEAN NOT NULL,
      consent_text TEXT NOT NULL,
      page        TEXT,
      status      TEXT NOT NULL DEFAULT 'new'
    )`.then(async () => {
    // One request per email and per mobile. Wrapped so old duplicate rows never break inserts.
    try { await sql`CREATE UNIQUE INDEX IF NOT EXISTS pilot_requests_email_uq ON pilot_requests (lower(email))`; } catch (e) { console.warn("email index", e); }
    try { await sql`CREATE UNIQUE INDEX IF NOT EXISTS pilot_requests_phone_uq ON pilot_requests (phone) WHERE phone IS NOT NULL`; } catch (e) { console.warn("phone index", e); }
  });
  return ready;
}
