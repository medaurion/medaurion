# apps/app — medaurion AIOS doctor software (app.medaurion.com)

This is where the **main product** will be built: the signed-in software for doctors, front desk and clinic admins.

Not started yet. The current design and behaviour live in the prototype (v109). Rebuild it here properly, following `AGENTS.md` (MVP order, safety rules, DPDP, audit log).

Planned layout (Next.js App Router, same stack as `apps/web`):

```
apps/app/src/
  app/
    (auth)/login/          staff login + MFA
    (clinic)/today/        queue, Needs you, Close the day
    (clinic)/patients/     list + patients/[id] (Patient 360°)
    (clinic)/visit/        notes, care-gap checklist
    (clinic)/rx/           prescriptions
    (clinic)/inbox/        reports, WhatsApp assistant
    (clinic)/followups/
    (clinic)/clinic/       insights, settings, audit log
    card/[token]/          patient Health Card (release 2)
    api/
  components/
  lib/ai/  lib/compare/  lib/followup/  lib/audit/
```

Shared code comes from `packages/db` (database) and `packages/ui` (logo, buttons, icons).
Patient data is only ever handled here, never in `apps/web`.

When starting: create the Next.js app in this folder, add `"apps/app"` to `workspaces` in the root `package.json`, and create a second Vercel project with Root Directory `apps/app` on the domain `app.medaurion.com`.
