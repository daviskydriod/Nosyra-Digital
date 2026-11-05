# Nosyra Digital Website Update Plan

## Scope

Update the existing Next.js/React website in place. Preserve the current architecture, routing approach, content-management/admin modules, brand palette, and working client-facing functionality. The work follows the supplied repositioning brief and prioritises accurate founder-led positioning, clearer primary services, trustworthy portfolio content, accessible CTAs, and removal of misleading or obsolete public content.

## Implementation approach

1. Audit the current source, routes, metadata, project records, shared layout, navigation, forms, and public content.
2. Correct shared positioning and remove unsupported claims from the homepage, About, services, landing, blog, footer, privacy, and metadata surfaces.
3. Remove the newsletter subscription UI and related copy/functionality.
4. Rework shared CTA/button usage so primary actions use labelled accessible buttons, while keeping decorative arrows only where they are not the primary action.
5. Integrate the supplied Google Business Profile link into the footer and contact experience without inventing reviews or business facts.
6. Restructure the public portfolio: remove the four specified projects, remove project numbering, use factual category/description presentation, and keep creative content secondary to web/digital work.
7. Update the route manifest and sitemap to match the public route set; preserve dynamic project and blog patterns.
8. Run lint, tests, and production build; resolve actionable errors before delivery.

## Project structure

- `app/`: Next.js shell and catch-all entry point.
- `src/App.tsx`: client-side route selection and providers.
- `src/site-pages/`: public page implementations.
- `src/components/`: reusable layout, homepage, blog, UI, and admin components.
- `src/data/`: portfolio, blog, pricing, and testimonial content.
- `src/lib/`: routing and image helpers.
- `public/`: route manifest, sitemap, robots, and static assets.

## Design direction

Three directions considered: Editorial business clarity (0.06), Quiet premium studio (0.07), and Product-led utility (0.05). Selected direction: **Editorial business clarity**.

The site should feel like a founder-led digital studio: clear, measured, modern, and credible. Use the existing navy `#0B1D3A`, teal `#1CA6B5`, and white palette to create strong contrast without excessive gradients. Keep layouts spacious and content-led, use asymmetry sparingly for emphasis, and make buttons and portfolio actions unambiguous. Animation should support hierarchy and feedback rather than delay navigation or hide content. Typography should preserve the existing strong display hierarchy with readable body copy and restrained mono labels. Brand essence: a founder-led digital agency helping businesses in Nigeria and Ghana build clearer websites, catalogues, and practical digital experiences. Personality: direct, thoughtful, dependable.

## Required content decisions

- Founding date is November 2025.
- Position Nosyra Digital as founder-led, with direct founder oversight.
- Current client-market wording should focus on Nigeria and Ghana; do not imply a large international client base.
- Do not claim a large team, long-standing history, fabricated metrics, fake reviews, or unverified project outcomes.
- Primary services are website development, e-commerce/digital catalogues, and genuine custom digital development.
- Branding and social media design remain complementary services.
- Remove newsletter subscription functionality.
- Add a labelled Google Business Profile button using the exact supplied URL.
- Remove public portfolio visibility for Viktrotech, HandyGidi, Honters Cruise, and GT Green Petrochemical, including cards and public detail resolution.
- Do not introduce future Nosyra Flow, SupplyOS, WorkOS, ClientOS, MarketOS, ERP, or automation demonstrations as completed work.

## Material constraints

Use existing project assets and source content. Do not generate replacement client imagery or invent missing case-study facts. Keep uncertain project details neutral until verified. Do not replace the current framework or add dependencies unless a build issue requires it.
