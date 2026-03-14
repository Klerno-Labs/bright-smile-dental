# Changelog

All notable changes to the Bright Smile Dental project will be documented in this file.

## [1.0.0] - 2023-10-27

### Added
- **Home Page**
  - Split-screen hero with organic image masking and floating trust cards.
  - Interactive Symptom Checker widget (SVG-based) for service routing.
  - Trust bar showing insurance partners.
  - "Why Choose Us" features grid.
  - Services overview with hover effects.
  - New Patient promotional banner.
  - Testimonials carousel/grid.

- **About Page**
  - Full-screen hero with overlay.
  - Narrative zig-zag layout for "Our Story".
  - Core Values grid (Safety, Tech, Community, Expertise).
  - Doctor/Team bios with "Fun Fact" hover overlay.

- **Services Page**
  - Tabbed interface for filtering services (General, Cosmetic, Ortho, Emergency).
  - Animated grid layout using Framer Motion.
  - Technology breakdown section.

- **Contact Page**
  - Split hero with embedded grayscale map.
  - Functional Contact Form with client-side validation (Zod).
  - Honeypot spam protection implementation.
  - API route (`/api/contact`) to handle form submissions.
  - Emergency contact banner.

- **Shared Components**
  - Sticky Navbar with scroll state detection and mobile menu.
  - 4-column Footer with social links and business info.
  - Centralized Image Configuration (`src/config/images.ts`).
  - SEO Metadata and JSON-LD (LocalBusiness) structure.

- **Technical**
  - Next.js 14 App Router setup.
  - Tailwind CSS configuration with custom color palette.
  - TypeScript strict mode enabled.
  - Lucide React icons implementation.
  - Framer Motion for scroll animations.

### Known Limitations
- The Symptom Checker routes to generic anchors; specific logic for complex diagnoses is a UI simulation.
- Email sending from the contact form is simulated via console log (requires external API key for live email).
- Blog structure is not populated (CMS integration point).

### Security
- Implemented honeypot field `_gotcha` in all forms to prevent bot submissions.
- `rel="noopener noreferrer"` applied to all external links.
- Input sanitization logic prepared in API routes.