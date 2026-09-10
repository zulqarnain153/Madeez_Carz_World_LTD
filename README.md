# Madeez Carz World Ltd — Website

Next.js 15 + TypeScript + Tailwind CSS + Framer Motion + Lucide React.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before this goes live — three things to finish

### 1. Real logo
No logo file was actually provided with the brief, so `src/components/Logo.tsx`
currently renders a clean typographic placeholder (blue mark + "Madeez Carz /
World Ltd" wordmark). Full swap instructions are in a comment at the top of
that file — it's a five-minute change once you have the real logo file.

### 2. Web3Forms access key (Sell Your Car + Contact forms)
Both forms are fully built and validate correctly, but won't actually send
anywhere until you add a free access key:

1. Get a key at https://web3forms.com
2. Create a `.env.local` file in the project root (copy `.env.example`)
3. Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-key-here`
4. Redeploy (or restart `npm run dev`)

Until this is set, both forms show a clear "not connected yet" message
instead of pretending to succeed.

### 3. Real vehicle stock
`src/data/vehicles.ts` is intentionally empty — no invented listings. Add
vehicles there matching the `Vehicle` type in `src/types/vehicle.ts`, and the
homepage featured section, `/stock`, and `/stock/[slug]` pages will
automatically start showing them (the "coming soon" empty states disappear
on their own once the array isn't empty). Put vehicle photos under
`public/vehicles/<slug>/`.

## Project structure

```
src/
  app/            routes (home, stock, stock/[slug], sell-your-car, about, contact)
  components/
    layout/       header, footer, mobile menu, top bar
    home/         homepage sections
    vehicles/     stock grid, card, filters, gallery, enquiry form
    forms/        sell-car form, contact form, shared status message
    ui/           button, container, eyebrow, section heading, page hero
  lib/
    business.ts   single source of truth for address/phone/email/WhatsApp
    useWeb3Form.ts shared form-submission hook
  types/vehicle.ts
  data/vehicles.ts
```

## Notes

- All business contact details live in `src/lib/business.ts` — update there,
  not in individual components.
- Built and verified with a production build (`npm run build`) before
  delivery — compiles clean with no TypeScript or lint errors.
- If building locally in an environment without internet access, Google
  Fonts will fail to fetch during `next build`. This isn't a code issue —
  it only affects sandboxes with no network access to fonts.googleapis.com.
