# Nosyra Digital Website — Full Update History

**Latest update date:** 5 November 2026
**Repository:** [daviskydriod/Nosyra-Digital](https://github.com/daviskydriod/Nosyra-Digital)
**Update branch:** `feat/nosyra-international-portfolio-case-studies`
**Base commit:** [`cb411ce`](https://github.com/daviskydriod/Nosyra-Digital/commit/cb411ce7572e17fb99523f9c5151e9fb80ec2bc6)

## Latest update: International positioning and portfolio case studies

The latest follow-up clarifies Nosyra Digital’s international availability and replaces generic project summaries with specific, conservative case-study copy for all 15 public website projects.

### What changed

- Clarified the distinction between the Lagos, Nigeria headquarters, established client markets in Nigeria and Ghana, and remote availability for the UK, Canada, and other international markets.
- Updated homepage, About, Contact, FAQ, service-landing, footer, blog-author, and site metadata copy without claiming overseas offices or unverified international client results.
- Added project-specific business overviews, challenges, solutions, delivered features, and practical-value summaries for all 15 public web projects.
- Kept existing project slugs and client-site URLs, and retained the portfolio’s existing filter/navigation architecture.
- Added unique project-page titles, descriptions, canonical URLs, and social-preview metadata from the centralized project data.
- Renamed the case-study value section to avoid presenting intended practical value as measured performance results.

### Updated project pages

- [Eko Connect Concierge](https://www.nosyradigital.com.ng/portfolio/eko-connect-concierge)
- [Liana Flowers](https://www.nosyradigital.com.ng/portfolio/liana-flowers)
- [Zunanya’s Luxury](https://www.nosyradigital.com.ng/portfolio/zunanyas-luxury)
- [THM Wellness Company](https://www.nosyradigital.com.ng/portfolio/thm-wellness-company)
- [Swanilita Studio](https://www.nosyradigital.com.ng/portfolio/swanilita-studio)
- [Mayben Engineering](https://www.nosyradigital.com.ng/portfolio/mayben-engineering)
- [MicDeb Global Motors](https://www.nosyradigital.com.ng/portfolio/micdeb-global-motors)
- [Joyabo Edu Consult](https://www.nosyradigital.com.ng/portfolio/joyabo-edu-consult)
- [Mandarin Construction Supplies](https://www.nosyradigital.com.ng/portfolio/mandari-construction-supplies)
- [Africa Tomorrow](https://www.nosyradigital.com.ng/portfolio/africa-tomorrow)
- [Ease n Grace Autos](https://www.nosyradigital.com.ng/portfolio/ease-n-grace-autos)
- [Wood Coffie Furniture Works](https://www.nosyradigital.com.ng/portfolio/wood-coffie-furniture-works)
- [Samanade CRD Enterprise](https://www.nosyradigital.com.ng/portfolio/samanade-crd)
- [CAT Global](https://www.nosyradigital.com.ng/portfolio/cat-global)
- [Uruhu Solutions](https://www.nosyradigital.com.ng/portfolio/uruhu-solutions)

### Quality checks

- `npm run build` — passed.
- `npm test` — passed (1 existing test).
- `npm run lint` — 0 errors; 17 warnings remain, mostly existing Fast Refresh and hook-dependency warnings.
- All 15 case-study routes returned HTTP 200 with their project-specific title, description, and canonical URL.
- All 15 client website links returned HTTP 200 during the link check.
- A representative case-study page was visually reviewed at 375×812, 768×1024, and 1440×1000; no obvious clipping was seen. This is a responsive smoke check, not a full manual review of every page.
- `npm ci` reported 24 dependency advisories in the existing dependency tree; dependency manifests were not changed in this update.

## Earlier design and usability update (October 2026)

The latest Nosyra Digital website update delivers a cleaner, more modern, and more consistent digital experience across the homepage, public pages, navigation, services, portfolio, and blog sections.

The update introduces a simplified visual system inspired by modern product and technology websites. It improves the presentation of Nosyra Digital’s services and work while making the site easier to navigate on desktop and mobile devices.

## Main improvements

### 1. Homepage redesign

The homepage has been refreshed with a more focused and professional layout. The update includes improvements to:

- Hero messaging and visual hierarchy
- Services preview sections
- Featured portfolio work
- Statistics and business highlights
- Client testimonials
- Call-to-action sections
- Page spacing and section consistency

The homepage now guides visitors more clearly from the introduction to Nosyra Digital’s services, previous work, social proof, and contact actions.

### 2. New visual design system

The public-facing pages now use a more consistent visual language. The redesign includes:

- Cleaner white-space management
- More consistent section layouts
- Simplified visual components
- Refined headings and content hierarchy
- Updated button styling
- More restrained use of decorative effects
- A more professional presentation of portfolio and service content

Several shared components were simplified so that the same design language can be used throughout the website.

### 3. Responsive navigation improvements

The header and navigation experience were updated to work more reliably across screen sizes.

Improvements include:

- Better responsive header behavior
- Improved mobile navigation visibility
- Fixed hamburger-menu behavior
- Improved mobile dropdown toggling
- More consistent navigation alignment on desktop
- Better spacing between navigation items and actions

These changes make the site easier to use on phones and smaller screens.

### 4. Services page refinement

The Services page was cleaned up to create a more focused presentation of Nosyra Digital’s offerings.

The update removes unnecessary gradient icons and uses a simpler visual treatment. This makes the service content easier to scan and keeps attention on the descriptions and value provided to clients.

### 5. Portfolio and featured work updates

The portfolio presentation has been improved with a cleaner layout and updated project content.

The latest update includes:

- A new Wood Coffie portfolio image
- Updated featured-work presentation
- More consistent portfolio card styling
- Better alignment between project imagery and project information

The portfolio continues to showcase digital projects for businesses and organizations across different sectors.

### 6. Blog improvements

The blog listing and category views were simplified by removing post view counts from blog cards.

This change creates a cleaner content-focused experience by emphasizing:

- Blog titles
- Categories
- Featured images
- Summaries and descriptions
- Reading and discovery actions

Removing view counts also reduces visual clutter and keeps the blog focused on useful insights rather than popularity metrics.

## GitHub commits from the earlier October design update

The earlier visual release was the result of a series of related design and usability improvements completed on 3 October 2026.

### `9a80f3d` — Merge pull request #9

Merged the responsive redesign work into the main branch. The merge included the final blog-card cleanup that removed view counts from blog listing and category components.

### `1ab761a` — Remove view counts from blog cards

Updated the following blog components:

- `src/components/BlogCategory.tsx`
- `src/components/BlogList.tsx`
- `src/site-pages/BlogCategory.tsx`
- `src/site-pages/BlogListing.tsx`

The change removed view-count displays from blog cards and category listings.

### `4b4bb20` — Extend Manus-inspired redesign across public pages

Extended the new visual style across shared and public-facing components. The commit also added the Wood Coffie portfolio asset.

Updated areas included:

- Shared layout behavior
- Glass-card styling
- Gradient-button styling
- Section-heading styling
- Project data
- Portfolio imagery

### `2501f46` — Redesign homepage with Manus-inspired visual system

Updated the main homepage sections, including:

- `CTASection`
- `FeaturedWork`
- `HeroSection`
- `ServicesPreview`
- `StatsCounter`
- `TestimonialsSection`
- Shared layout behavior

The goal was to create a simpler, more polished, and more consistent homepage experience.

### `b4add8e` — Fix mobile navigation dropdown toggle

Improved the mobile navigation dropdown behavior in the main header component.

### `cf729f1` — Remove gradient icons from services page

Simplified the visual treatment used on the Services page by removing gradient icon styling.

### `4cbf37e` — Standardize landing page sections and center navigation

Standardized the presentation of:

- Call-to-action sections
- Statistics sections
- Testimonials
- Header navigation
- Footer content

### `100a824` — Fix responsive header and hamburger menu visibility

Improved the responsive header layout and corrected hamburger-menu visibility across screen sizes.

## Current website scope

Nosyra Digital is structured as a full digital services and portfolio website. Current public sections include:

- Homepage
- About page
- Services page
- Process page
- Portfolio page
- Project detail pages
- Pricing page
- FAQ page
- Contact page
- Blog listing
- Blog categories
- Individual blog posts
- Privacy Policy
- Terms and Conditions
- Web design landing page

The site also includes supporting functionality and reusable interface components for navigation, testimonials, pricing cards, animated sections, portfolio projects, contact actions, and blog content.

## Technology stack

The project is built with:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Radix UI components
- Lucide React icons
- Framer Motion
- React Hook Form
- Zod
- Vitest
- ESLint

The project uses a modern component-based structure, with reusable UI components and separate page-level modules for the main public website sections.

## User and business impact of the October visual update

This update improves the website in several important ways:

- Visitors can understand Nosyra Digital’s offering more quickly.
- The homepage provides a clearer path from introduction to contact.
- The portfolio looks more consistent and professional.
- Mobile users receive a more reliable navigation experience.
- Public pages now share a unified design direction.
- Blog cards are cleaner and less distracted by secondary metrics.
- The site presents Nosyra Digital as a more polished and established digital partner.

## Earlier public announcement (October visual update)

> We’ve updated the Nosyra Digital website with a cleaner visual identity, improved responsive navigation, and a more polished presentation of our services and portfolio.
>
> The latest update refreshes the homepage, standardizes key public pages, improves the mobile menu experience, simplifies the Services page, adds new portfolio imagery, and removes unnecessary view counts from blog cards.
>
> The result is a clearer, faster-to-understand, and more consistent website experience for clients browsing Nosyra Digital’s services, projects, pricing, and insights.

## Short summary

The latest follow-up clarifies Nosyra Digital’s Lagos headquarters, established Nigeria and Ghana client markets, and international remote availability, while replacing generic portfolio copy with accurate case studies for all 15 public web projects and adding unique SEO metadata. Existing project URLs are preserved.

## Repository reference

For the complete source code and commit history, visit:

[https://github.com/daviskydriod/Nosyra-Digital](https://github.com/daviskydriod/Nosyra-Digital)
