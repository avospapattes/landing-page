# AI Agent Developer Guide - À vos papattes

This document is a comprehensive onboarding and reference guide for AI agents working on the **À vos papattes** landing page repository. It covers the technical architecture, custom design system, third-party integrations, and performance gotchas so you can write correct, performant, and stylistically consistent code.

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
├── app/                     # Next.js App Router routes and endpoints
│   ├── api/
│   │   └── reviews/
│   │       └── route.ts     # Google Places reviews API route
│   ├── cgv/
│   │   └── page.tsx         # Static Terms & Conditions page
│   ├── contact/
│   │   └── page.tsx         # Interactive booking form
│   ├── mentions-legales/
│   │   └── page.tsx         # Legal notice page
│   ├── services/
│   │   └── page.tsx         # Services list, prices, and map page
│   ├── globals.css          # Tailwind CSS v4 directives, custom theme & utilities
│   ├── layout.tsx           # Base HTML layout, fonts, navigation and toaster
│   └── page.tsx             # Homepage
├── components/              # React Components
│   ├── sections/            # Feature-specific page components
│   │   ├── home/            # Homepage sections (FAQ, Welcome, Stats, Testimonials, etc.)
│   │   └── services/        # Services page sections (Pricing, Map, Booking process, etc.)
│   └── ui/                  # UI elements and primitives (Navbar, Footer, Card, Button, Input)
├── docs/
│   └── AI_AGENT_GUIDE.md    # This guide
├── lib/
│   └── utils.ts             # Tailwind class name merger (clsx + tailwind-merge)
├── public/                  # Static assets
│   ├── icons/               # SVGs, badges, and logos
│   └── images/              # Photo assets (dogs, backgrounds)
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

### A. Google Places Reviews API
- **Endpoint**: [/api/reviews/route.ts](file:///c:/src/projects/landing-page/app/api/reviews/route.ts)
- **Logic**: Fetches place details using Google's endpoint with parameters `place_id`, `fields=reviews`, `language=fr`, and a server-side API key.
- **Caching**: The query is cached using Next.js native fetch caching for 24 hours to stay within API limits and guarantee fast loads:
  ```ts
  const response = await fetch(url, { next: { revalidate: 86400 } });
  ```
- **Usage**: Dynamically consumed by the [TestimonialsSection](file:///c:/src/projects/landing-page/components/sections/home/testimonials-section.tsx#L30-L35) using a client-side fetch.

### B. Client-side EmailJS Booking Form
- **Form Path**: [app/contact/page.tsx](file:///c:/src/projects/landing-page/app/contact/page.tsx)
- **Framework**: `react-hook-form` manages form state. Inputs are strictly validated with a Zod schema `formSchema` defining type constraints (e.g., date range check: `dateFin` must be after `dateDebut`).
- **Send Mechanism**: Form submissions trigger a client-side call to `emailjs.send` using keys from environment variables:
  - `NEXT_PUBLIC_EMAIL_SERVICE_ID`
  - `NEXT_PUBLIC_EMAIL_TEMPLATE_ID`
  - `NEXT_PUBLIC_EMAIL_PUBLIC_KEY`
- **User Feedback**: Feedback is handled with `sonner` (`toast.promise`) to show loading, success, and error notifications.

### C. Leaflet Map (SSR Caution)
- **Components**: [intervention-map.tsx](file:///c:/src/projects/landing-page/components/sections/services/intervention-map.tsx) and [zone-section.tsx](file:///c:/src/projects/landing-page/components/sections/services/zone-section.tsx).
- **SSR Safety Constraint**: Leaflet interacts with client-side window/document globals. Standard imports during Next.js server-side rendering will throw `window is not defined`.
- **Implementation**: The map MUST be loaded dynamically with **SSR disabled** in the parent layout:
  ```tsx
  const InterventionMap = dynamic(() => import("./intervention-map"), {
    ssr: false,
    loading: () => <div className="bg-neutral-900 w-full h-full animate-pulse" />,
  });
  ```

---

## 5. Performance Guidelines for AI Agents

1. **Keep Keys Secure**: Never expose Google Places API keys or EmailJS private credentials in client-side files.
   - Public keys are prefixed with `NEXT_PUBLIC_` and referenced in `.env`.
   - Secret keys MUST remain on the server (e.g. inside `app/api/` routes).
2. **Tailwind CSS v4 Usage**:
   - Use CSS custom properties under `@theme inline` in [globals.css](file:///c:/src/projects/landing-page/app/globals.css#L6-L48) to reference design values instead of hardcoding absolute values.
   - Tailwind v4 does not use a `tailwind.config.js` file; configuration is declared inline inside `@theme` in the CSS file.
3. **Optimizing Assets**:
   - Use Next.js `<Image />` component for static images and logos, specifying `width`, `height`, and appropriate CSS properties.
   - For decorative items like PawPrints or Bones, use lightweight SVG elements or Lucide React icons.
4. **Interactive Component Scope**:
   - Use `"use client"` at the top of files that utilize hooks (`useState`, `useEffect`, `useForm`, `useWatch`).
   - Keep page-level layouts server components and delegate interactivity to child components.
