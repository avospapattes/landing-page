# AI Agent Developer Guide - À vos papattes

This document is a comprehensive onboarding and reference guide for AI agents working on the **À vos papattes** landing page repository. It covers the technical architecture, modular configurations, integrations, and performance gotchas so you can write correct, performant, and stylistically consistent code.

---

## 1. Project Context & Technology Stack

**À vos papattes** is a professional pet sitting service operated by Nathalie (Nath) in Oberhausbergen and nearby areas (Bas-Rhin, France). The application is a highly responsive, modern landing page designed to attract clients and gather booking requests.

### Core Stack

- **Framework**: Next.js 16.2.1 (App Router)
- **Library**: React 19.2.3
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS v4 + PostCSS (integrated via `@tailwindcss/postcss`)
- **Animation**: `tw-animate-css` (Tailwind plugin for preconfigured animations)
- **Forms**: React Hook Form 7.x + `@hookform/resolvers`
- **Validation**: Zod 3.x
- **Interactive Map**: Leaflet 1.9.4 & React-Leaflet 5.0.0
- **Carousels**: Embla Carousel 8.6.0
- **Email Service**: `@emailjs/browser` (direct client-side email delivery)
- **Icons**: Lucide React

---

## 2. Codebase Architecture & File Structure

The project follows a standard Next.js App Router structure:

```
├── .agents/                 # Workspace-scoped instructions for AI tools
│   └── AGENTS.md            # Auto-loaded AI rules and constraints
├── app/                     # Next.js App Router Pages & API Routes
│   ├── api/
│   │   └── reviews/
│   │       └── route.ts     # Reviews endpoint (calls reviews helper)
│   ├── cgv/
│   ├── contact/             # Booking contact page route
│   │   └── page.tsx         # Clean form rendering page
│   ├── mentions-legales/
│   ├── services/
│   │   └── page.tsx         # Services list, prices, and map page
│   ├── globals.css          # Tailwind CSS v4 directives, custom theme & utilities
│   ├── layout.tsx           # Base HTML layout (injects LocalBusiness JSON-LD)
│   ├── page.tsx             # Homepage (Server Component pre-rendering reviews)
│   ├── robots.ts            # Dynamic robots.txt generator
│   └── sitemap.ts           # Dynamic XML sitemap generator
├── components/              # Presentation Components
│   ├── sections/            # Feature-specific page components
│   │   ├── home/            # Homepage sections (FAQ, Welcome, Testimonials, etc.)
│   │   └── services/        # Services page sections (Pricing, Map, etc.)
│   └── ui/                  # UI elements and primitives (Navbar, Footer, Card, Button, Input)
├── config/                  # Static Content & Text Configurations (Centralized data)
│   ├── site.ts              # Social links, phone numbers, navigation links
│   ├── services.ts          # Text and prices for the services list
│   └── features.ts          # Benefits/certifications list
├── docs/
│   ├── archive/             # Archived legal Word and Markdown files
│   └── AI_AGENT_GUIDE.md    # This guide
├── lib/                     # Utilities and Shared Code helpers
│   ├── services/
│   │   ├── email.ts         # EmailJS client handler logic
│   │   └── reviews.ts       # Server-side Google Places API fetcher
│   ├── validations/
│   │   └── contact.ts       # Contact form Zod schema definitions
│   ├── env.ts               # Environment variables schema validation
│   └── utils.ts             # Tailwind class name merger (clsx + tailwind-merge)
├── public/                  # Static assets
│   ├── icons/               # SVGs, badges, and logos
│   └── images/              # Photo assets
└── components.json          # Shadcn configuration mapping aliases
```

---

## 3. Styling & Custom Design System

The site implements a custom **Neo-Brutalist** aesthetic combined with playful pet-centric elements (paw prints, bones).

### Neo-Brutalist Design Tokens

- **Borders**: Thick, solid borders. Checkbox, card, and button elements use explicit border widths with `border-primary` (e.g., `border-4` or `border-3!`).
- **Shadows**: Custom hard drop-shadows without blur.
  - Utility `.neo-shadow` is defined in [globals.css](file:///c:/src/projects/landing-page/app/globals.css#L54-L58):
    ```css
    .neo-shadow {
      @apply border-4 border-white shadow-[12px_12px_0px_rgba(255,126,0,1)];
    }
    ```
- **Colors**: Curated warm palette inspired by dogs/pets (yellow, orange, brown).
  - Background: Warm Gold-Yellow (`rgba(239, 191, 46, 1)`)
  - Foreground / Primary / Secondary / Border: Rich Dark Brown (`rgba(75, 51, 28, 1)`)
  - Accents: Bright Orange (`rgba(255, 126, 0, 1)`) and Green/Teal.
- **Typography**: The custom font is **Open Sans** (defined in [layout.tsx](file:///c:/src/projects/landing-page/app/layout.tsx#L8-L12) as `--font-open-sans`). Headlines use `--font-opensans` with `font-extrabold` and custom text-stroke styling:
  ```css
  .text-stroke-title {
    -webkit-text-stroke: 0.03em rgba(96, 49, 2, 1);
  }
  ```

---

## 4. Key Integrations & Implementation Details

### A. Server-Side Google Places Reviews

- **Logic**: Reviews are fetched server-side inside `app/page.tsx` using `fetchGoogleReviews` in [lib/services/reviews.ts](file:///c:/src/projects/landing-page/lib/services/reviews.ts).
- **SEO & Performance Benefit**: Reviews are pre-rendered at request/build time, eliminating client-side flash (CLS) and allowing search engine bots to index client testimonials.
- **Caching**: The query is cached for 24 hours to stay within Google's API limits:
  ```ts
  const response = await fetch(url, { next: { revalidate: 86400 } });
  ```

### B. Segregated Contact Form

- **Form Path**: [app/contact/page.tsx](file:///c:/src/projects/landing-page/app/contact/page.tsx)
- **Validation**: Schema is defined in [lib/validations/contact.ts](file:///c:/src/projects/landing-page/lib/validations/contact.ts) (`contactFormSchema`), ensuring dates are coherent and numbers are positive.
- **Send Mechanism**: Handled via [lib/services/email.ts](file:///c:/src/projects/landing-page/lib/services/email.ts), isolating browser EmailJS logic from UI renders.

### C. Leaflet Map (SSR Caution)

- **Components**: [intervention-map.tsx](file:///c:/src/projects/landing-page/components/sections/services/intervention-map.tsx) and [zone-section.tsx](file:///c:/src/projects/landing-page/components/sections/services/zone-section.tsx).
- **SSR Safety Constraint**: Leaflet interacts with client-side window/document globals. Standard imports during Next.js server-side rendering will throw `window is not defined`.
- **Implementation**: The map MUST be loaded dynamically with **SSR disabled** in the parent layout:
  ```tsx
  const InterventionMap = dynamic(() => import("./intervention-map"), {
    ssr: false,
    loading: () => (
      <div className="bg-neutral-900 w-full h-full animate-pulse" />
    ),
  });
  ```

---

## 5. Performance Guidelines for AI Agents

1. **Environment Variables Security**: Use `lib/env.ts` to access environment configurations. Strict checks at compile time guarantee builds crash early if critical credentials are missing.
2. **Tailwind CSS v4 Usage**:
   - Use CSS custom properties under `@theme inline` in [globals.css](file:///c:/src/projects/landing-page/app/globals.css#L6-L48).
   - Tailwind v4 does not use a `tailwind.config.js` file; configuration is declared inline inside `@theme` in the CSS file.
3. **Optimizing Images**:
   - Always supply the `sizes` prop when using `fill` layouts on `<Image />` to optimize size loading.
   - Set `style={{ width: "auto" }}` when overriding dimensions to prevent ratio warnings.
