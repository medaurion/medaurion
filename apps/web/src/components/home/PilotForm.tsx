"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@/components/ui/Icon";

const CONSENT =
  "I agree that medaurion may store these details and contact me about the doctor pilot. I can ask for them to be deleted at any time.";

type State = { kind: "idle" | "sending" | "ok" | "error" | "dup"; text?: string };

const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

/** Quick checks in the browser; the server repeats them (plus domain and duplicate checks). */
function quickCheck(f: FormData): string | null {
  const email = String(f.get("email") || "").trim();
  const phone = String(f.get("phone") || "").replace(/\D/g, "").replace(/^(91|0)(?=\d{10}$)/, "");
  if (!EMAIL_RE.test(email)) return "Please enter a valid email address.";
  if (/@(example|test|sample)\./i.test(email)) return "Please use your real email — sample emails are not accepted.";
  if (phone && !/^[6-9]\d{9}$/.test(phone)) return "Please enter a valid 10-digit Indian mobile number, or leave it blank.";
  if (!f.get("specialty")) return "Please select your specialty.";
  return null;
}

export default function PilotForm() {
  const [state, setState] = useState<State>({ kind: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const f = new FormData(form);
    const local = quickCheck(f);
    if (local) {
      setState({ kind: "error", text: local });
      return;
    }
    setState({ kind: "sending" });
    try {
      const res = await fetch("/api/pilot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: f.get("name"),
          clinic: f.get("clinic"),
          email: f.get("email"),
          phone: f.get("phone"),
          specialty: f.get("specialty"),
          consent: f.get("consent") === "on",
          website: f.get("website"),
          page: window.location.pathname,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (res.ok && data.ok) {
        form.reset();
        setState({ kind: "ok", text: "Thank you! We have your details and will contact you within 2 working days." });
      } else if (res.status === 409) {
        setState({ kind: "dup", text: data.error });
      } else {
        setState({ kind: "error", text: data.error || "Something went wrong. Please try again." });
      }
    } catch {
      setState({ kind: "error", text: "Network problem. Please check your connection and try again." });
    }
  }

  return (
    <form className="pilot-form" onSubmit={handleSubmit}>
      <div className="pilot-form__heading">
        <span><Icon name="message" size={20} /></span>
        <div>
          <h3>Explore the doctor pilot</h3>
          <p>Tell us a little about your clinic.</p>
        </div>
      </div>
      <label>
        Your name
        <input autoComplete="name" name="name" placeholder="Dr. Your Name" required maxLength={120} />
      </label>
      <div className="pilot-form__row">
        <label>
          Clinic
          <input autoComplete="organization" name="clinic" placeholder="Clinic name" required maxLength={160} />
        </label>
        <label>
          Work email
          <input autoComplete="email" name="email" placeholder="you@clinic.com" required type="email" maxLength={160} />
        </label>
      </div>
      <div className="pilot-form__row">
        <label>
          Mobile (optional)
          <input autoComplete="tel" inputMode="tel" name="phone" placeholder="+91 98xxxxxxxx" maxLength={20} />
        </label>
        <label>
          Specialty
          <select name="specialty" defaultValue="" required>
            <option value="" disabled>Select</option>
            <option>Diabetology</option>
            <option>Cardiology</option>
            <option>Nephrology</option>
            <option>Endocrinology / Thyroid</option>
            <option>General physician</option>
            <option>Pulmonology</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <input className="pilot-form__hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label className="pilot-form__consent">
        <input name="consent" type="checkbox" required />
        <span>{CONSENT}</span>
      </label>
      <button className="button button--primary pilot-form__submit" type="submit" disabled={state.kind === "sending" || state.kind === "ok"}>
        {state.kind === "sending" ? "Sending…" : <>Request a conversation <Icon name="arrow" size={17} /></>}
      </button>
      <p className="pilot-form__disclaimer">
        Do not enter any patient information here. See our <a href="/privacy">privacy policy</a>.
      </p>
      {state.text ? (
        <p className={`pilot-form__message${state.kind === "ok" || state.kind === "dup" ? " pilot-form__message--ok" : ""}`} role="status">{state.text}</p>
      ) : null}
    </form>
  );
}
