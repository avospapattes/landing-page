# Project Rules & Customizations

This file is loaded automatically by agentic platforms when working within the **À vos papattes** codebase. Please adhere strictly to the following developer rules.

---

## 📝 Documentation Maintenance Rule

- **Rule**: Every time you perform an architectural modification or add a new feature to the project, you **MUST** update the documentation ([docs/AI_AGENT_GUIDE.md](file:///c:/src/projects/landing-page/docs/AI_AGENT_GUIDE.md) and this [AGENTS.md](file:///c:/src/projects/landing-page/.agents/AGENTS.md)) to reflect the changes. Keep libraries, services, configurations, routes, and constraints up to date so other agents remain performant.

---

## 🚀 Performance & SSR Constraints

### 1. Leaflet & React-Leaflet Map Imports

- **Constraint**: Leaflet interacts with client-side window/document globals. Standard imports during server-side rendering (SSR) will cause build or runtime crashes (`window is not defined`).
- **Rule**: Any module referencing Leaflet or React-Leaflet components MUST be loaded dynamically with **SSR disabled**:
  ```tsx
  const DynamicComponent = dynamic(() => import("./MapComponent"), {
    ssr: false,
    loading: () => <div className="..." />,
  });
  ```
- **File Reference**: [intervention-map.tsx](file:///c:/src/projects/landing-page/web/components/sections/services/intervention-map.tsx)

### 2. Google Places API Key Security

- **Constraint**: API keys must never be exposed on the frontend.
- **Rule**: Fetch Google Reviews and other location details using the Next.js server-side route `/api/reviews`. Do not initiate client-side calls directly to google.com endpoints with the private key.
- **File Reference**: [route.ts](file:///c:/src/projects/landing-page/web/app/api/reviews/route.ts)

---

## 🎨 Design & Aesthetic Style Guidelines

### 1. Neo-Brutalist Styling

- **Constraint**: The project implements a playful Neo-Brutalist style.
- **Rule**:
  - Use thick borders (`border-4`, `border-3!`) matching `border-primary` (`rgba(75, 51, 28, 1)`).
  - Apply the custom `.neo-shadow` class for cards, forms, and highlights.
  - Retain the warm color scheme (brown text, yellow background, orange accent).
- **File Reference**: [globals.css](file:///c:/src/projects/landing-page/web/app/globals.css)

### 2. Tailwind CSS v4 Theme Inline Configuration

- **Constraint**: Tailwind v4 is configured inline inside `@theme inline` block in [globals.css](file:///c:/src/projects/landing-page/web/app/globals.css).
- **Rule**: Do not create or reference a `tailwind.config.js` file. Modify or extend theme settings directly within `@theme inline` in `globals.css`.

### 3. Sanity Schema & TypeGen

- **Constraint**: The Next.js application relies on type safety definitions generated from the Sanity Studio schema.
- **Rule**: When modifying or adding any Sanity schema types (e.g. `galleryItem`), always register them in [schemaTypes/index.ts](file:///c:/src/projects/landing-page/studio/schemaTypes/index.ts) and run the `typegen` script (`npm run typegen` in the `studio/` workspace) to regenerate the TypeScript definitions in [sanity.types.ts](file:///c:/src/projects/landing-page/web/sanity.types.ts).

---

## 🔍 SEO & Local Targeting Rule

- **Rule**:
  - Target keyphrase is "Pet Sitter Strasbourg" and served municipalities (Strasbourg, Oberhausbergen, Mittelhausbergen, Niederhausbergen, Schiltigheim, Bischheim, Hœnheim, Eckbolsheim, Wolfisheim, Kochersberg).
  - Do not use more than one `<h1>` per page.
  - Include canonical tags on all core pages.
  - Set `robots: { index: false, follow: true }` on legal pages.
  - Inject structured JSON-LD schemas (LocalBusiness in layout, FAQPage on FAQ pages).

---

## 📄 Reference Guides

For a comprehensive overview of the architecture, dependencies, directory tree, form parameters, and integration details, consult the [AI Agent Developer Guide](file:///c:/src/projects/landing-page/docs/AI_AGENT_GUIDE.md).
