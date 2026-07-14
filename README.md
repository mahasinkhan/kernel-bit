# KernelBit - corporate site

Next.js 16 . React 19 . TypeScript (strict) . Tailwind CSS 4 . pnpm

---

## Run it

```powershell
cd C:\Projects\kernelbit-web
pnpm install
pnpm dev          # http://localhost:3000
```

```powershell
pnpm build        # production build
pnpm start        # serve the production build
pnpm lint
```

---

## Design system - "Blueprint"

Everything is derived from one idea: in finance, healthcare and AI, an output is
only worth what you can trace it back to. The site is built like an engineering
drawing of that claim.

| Token | Value | Role |
| --- | --- | --- |
| `paper` | `#eaedee` | cool drafting-paper ground (deliberately not cream) |
| `plate` | `#f5f7f7` | raised panels |
| `ink` | `#0f1a1d` | deep petrol, body text and inverted sections |
| `rule` | `#c3cbcd` | hairlines and plate borders |
| `signal` | `#2440d9` | the only accent. Ultramarine stamp blue |
| `deep` | `#0f1a1d` | inverted assurance section |

Type:

- Display - Archivo Variable, pushed to `font-stretch: 118%`. An expanded
  grotesque: instrument and terminal signage, not the default editorial serif.
- Body - IBM Plex Sans. Designed for the industries this firm sells into.
- Data - IBM Plex Mono. Every stamp, timestamp, metric and eyebrow.

Fonts are self-hosted via Fontsource - no runtime request to Google. That
matters when you sell to UK/EU regulated buyers.

All tokens live in one place: `src/app/globals.css` (the `@theme` block).

### The signature

`src/components/provenance-trace.tsx` - one record, five stages, one audit trail.
Switch the payload and a payment, a patient observation and a model prediction
all take the same audited path. Everything else on the page is quiet so this can
be loud.

---

## Change the brand

`src/content/site.ts` - name, legal name, tagline, address, company number, nav.
Change it there and the header, footer, metadata and 404 all follow.

## Change the content

No CMS. Content is typed data, so a wrong field is a build error:

| File | What |
| --- | --- |
| `src/content/site.ts` | brand, contact details, navigation |
| `src/content/provenance.ts` | the five stages and the three payloads |
| `src/content/capabilities.ts` | six capability pages (routes generate themselves) |
| `src/content/sectors.ts` | the four sectors |
| `src/content/engagements.ts` | case studies |
| `src/content/assurance.ts` | compliance commitments |

Adding a capability to `capabilities.ts` creates `/capabilities/<slug>`
automatically via `generateStaticParams`.

---

## Before you publish - four things

1. `src/content/site.ts` has placeholder address, phone, URL and company number.
   The company number in particular must not go live as `00000000`.
2. `src/content/engagements.ts` is placeholder. Replace with real, cleared
   client work or delete the section.
3. `src/content/assurance.ts` makes compliance claims. Verify every line.
   Claiming an ISO 27001 or DSPT posture you do not hold is how you lose a deal,
   or worse.
4. The contact form does not send anything yet. `src/app/contact/actions.ts`
   validates and then `console.log`s. Wire it to Resend / SES / a CRM / a Slack
   webhook.

## Quality floor

Responsive to 360px . visible keyboard focus . skip link . `prefers-reduced-motion`
respected . semantic landmarks . no `localStorage` . no client-side data fetching
on first paint.
