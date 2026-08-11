# ATS Corps

Marketing site for ATS Corporation — a veteran-run organization operating three
business verticals: NEISAC co-working spaces, Engineering Consultancy, and
Mining Manpower.

## Tech stack

- **React 19** + **Vite**
- **React Router** for client-side routing
- **Tailwind CSS v4** (CSS-first `@theme` tokens in `src/index.css`)
- **Framer Motion** for animation (page transitions, scroll reveals, the
  hero carousel's swipe gesture, the process timelines, animated counters)
- **Lucide React** for icons
- Self-hosted **Poppins** font (`public/fonts`, latin subset only)

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
npm run lint      # oxlint
```

## Routes

| Path               | Page                                     |
| ------------------ | ----------------------------------------- |
| `/`                 | Home — hero carousel, About, NEISAC opportunities, admin services, veteran registration CTA |
| `/engineering`      | Engineering Consultancy vertical           |
| `/mining-manpower`  | Mining Manpower vertical                   |

Header and footer are shared, rendered outside the router's page content so
they stay identical across all three pages. Section anchors (e.g. `/#about`,
`/#opportunities`) are used for in-page navigation from the footer and header
nav links.

## Project structure

```
src/
  components/          # shared site chrome + Home-page sections
    ui/                # reusable primitives (Button, Modal, Container,
                        # ProcessTimeline, AnimatedCounter, Reveal, ...)
    engineering/        # Engineering Consultancy page sections
    mining/             # Mining Manpower page sections
  data/                 # content as plain JS data files, consumed by
                        # the matching components (heroSlides.js,
                        # engineering/*.js, mining/*.js, ...)
  pages/                # top-level route components (Home,
                        # EngineeringConsultancy, MiningManpower)
```

Content lives in `src/data/*`, kept separate from the components that render
it — swap the data without touching layout, or vice versa.

## Design system

Colors, spacing, and shadows are defined once as CSS custom properties in
`src/index.css` under Tailwind's `@theme`, then consumed via ordinary
utility classes (`bg-primary`, `text-muted`, `border-border`, etc.) so every
component pulls from the same palette. The `ui/ProcessTimeline` and
`ui/DarkCTASection` primitives are shared across the Engineering and Mining
pages rather than duplicated, so the two verticals' interactive step-by-step
process sections and CTA banners stay visually and behaviorally in sync.

## Known gaps

- Contact/registration forms (`RegistrationModal`) are front-end only — no
  backend endpoint is wired up yet.
- Featured Projects (Engineering) and Featured Engagements (Mining) use
  illustrative placeholder data, not real case studies.
- Footer phone number and social links are placeholders.
- All three routes share one static `<title>`/meta description from
  `index.html`.
