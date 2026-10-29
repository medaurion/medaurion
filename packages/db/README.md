# @medaurion/db

Database access shared by `apps/web` and (later) `apps/app`. Neon Postgres via `DATABASE_URL`.

Today it holds the pilot-request table helpers used by the website form (`apps/web/src/app/api/pilot`).
Import with `import { getSql } from "@medaurion/db";`
