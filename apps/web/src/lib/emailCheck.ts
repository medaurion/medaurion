import { resolveMx } from "node:dns/promises";

/** Domains reserved for examples/tests or known throwaway-mail services. */
const BLOCKED_DOMAINS = new Set([
  "example.com", "example.org", "example.net", "example.in", "test.com", "test.in", "domain.com",
  "email.com", "mail.com.invalid", "abc.com", "xyz.com", "asdf.com", "qwerty.com", "sample.com",
  "mailinator.com", "guerrillamail.com", "guerrillamail.info", "sharklasers.com", "grr.la",
  "10minutemail.com", "10minutemail.net", "tempmail.com", "temp-mail.org", "temp-mail.io",
  "tempmail.net", "tempmailo.com", "throwawaymail.com", "yopmail.com", "yopmail.net",
  "trashmail.com", "getnada.com", "nada.email", "dispostable.com", "maildrop.cc", "fakeinbox.com",
  "mintemail.com", "mohmal.com", "emailondeck.com", "moakt.com", "tmail.ws", "tmpmail.org",
  "mailnesia.com", "spamgourmet.com", "burnermail.io", "inboxkitten.com", "mail.tm", "mailpoof.com",
  "fakemail.net", "emailfake.com", "byom.de", "discard.email", "spambox.us", "33mail.com",
]);
/** Well-known providers: skip the DNS lookup for these. */
const KNOWN_PROVIDERS = new Set([
  "gmail.com", "googlemail.com", "yahoo.com", "yahoo.in", "yahoo.co.in", "outlook.com", "hotmail.com",
  "live.com", "msn.com", "icloud.com", "me.com", "rediffmail.com", "protonmail.com", "proton.me",
  "zoho.com", "zohomail.in", "aol.com", "gmx.com",
]);
const BLOCKED_TLDS = [".test", ".example", ".invalid", ".localhost", ".local"];
const FAKE_LOCAL = /^(test|testing|tester|dummy|fake|abc|abcd|abcdef|xyz|asdf|qwerty|sample|demo|example|noreply|no-reply|null|none|na|aaa+|123+|1234+)\d*$/i;

export const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

/** Returns an error message, or null when the email looks real. */
export async function checkEmail(email: string): Promise<string | null> {
  if (!EMAIL_RE.test(email)) return "Please enter a valid email address.";
  const [local, domain] = email.split("@");
  if (BLOCKED_DOMAINS.has(domain) || BLOCKED_TLDS.some((t) => domain.endsWith(t)))
    return "Please use your real work or personal email — temporary or sample emails are not accepted.";
  if (FAKE_LOCAL.test(local))
    return "This looks like a sample email. Please enter the email you actually use.";
  if (KNOWN_PROVIDERS.has(domain)) return null;
  try {
    const mx = await Promise.race([
      resolveMx(domain),
      new Promise<never>((_, rej) => setTimeout(() => rej(new Error("timeout")), 2500)),
    ]);
    if (!mx.length) return "This email domain cannot receive mail. Please check the spelling.";
  } catch (e) {
    const code = (e as { code?: string }).code;
    if (code === "ENOTFOUND" || code === "ENODATA" || code === "ESERVFAIL")
      return "This email domain does not exist. Please check the spelling.";
    // Timeouts or DNS hiccups: do not block a possibly real user.
  }
  return null;
}

/** Normalises an Indian mobile to +91XXXXXXXXXX, or returns null if invalid. */
export function normaliseMobile(raw: string): string | null {
  let d = raw.replace(/\D/g, "");
  if (d.length === 12 && d.startsWith("91")) d = d.slice(2);
  if (d.length === 11 && d.startsWith("0")) d = d.slice(1);
  if (!/^[6-9]\d{9}$/.test(d) || /^(\d)\1{9}$/.test(d) || d === "9876543210" || d === "1234567890") return null;
  return `+91${d}`;
}
