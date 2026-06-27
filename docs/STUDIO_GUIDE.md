# Sanity Studio Guide - À vos papattes

This guide explains how to run, use, and deploy the standalone Sanity Studio (`/studio`) and how it integrates with your Next.js application (`/web`).

---

## 1. Running the Studio Locally

Since the studio is a standalone workspace, you can run it independently:

### Option A: From the Monorepo Root
You can launch the Studio dev server using the monorepo script we configured:
```bash
npm run dev:studio
```

### Option B: Directly from the `/studio` Folder
Navigate to the studio directory and start the Sanity CLI server:
```bash
cd studio
npm run dev
```
*   **Local URL**: Open your browser at [http://localhost:3333](http://localhost:3333) to access the editing dashboard.
*   **Authentication**: Log in using your GitHub account (or Google/Email account linked to Sanity).

---

## 2. Using the Studio (Editing Content)

Once logged in, the sidebar displays 4 custom document types tailored for **À vos papattes**:

### 1. Services
*   **What it does**: Controls the list of pet sitting services, durations, and details.
*   **Fields**:
    *   `Titre`: E.g., *Visite de 30 minutes*
    *   `Service ID (slug)`: Unique URL slug (e.g., `visite-30m`). Click **Generate** to auto-create from the title.
    *   `Description`: Summary of the service.
    *   `Image`: Upload a cover photo (Sanity automatically crops, optimizes, and generates WebP versions).
    *   `Points Clés`: List of service details. (Format: `Titre : Contenu` or plain text).

### 2. Certifications / Avantages (Features)
*   **What it does**: Manages the cards in the *"Pourquoi choisir une Pet Sitter pro ?"* section.
*   **Fields**:
    *   `Badge / Logo`: Upload the certification icon.
    *   `Titre`: E.g., *ACACED*
    *   `Sous-titre`: E.g., *Attestation d'Aptitude Officielle*
    *   `Description`: Detailed explanation text.
    *   `Ordre d'affichage`: A number (e.g. `1`, `2`, `3`) to control the card placement order.

### 3. Témoignages (Testimonials)
*   **What it does**: Adds user reviews to the homepage carousel.
*   **Fields**:
    *   `Nom de l'auteur`: Client's name.
    *   `Note`: Numeric rating from 1 to 5 stars.
    *   `Avis`: Client's testimonial content.
    *   `Date relative`: E.g., *Il y a 3 semaines*.

### 4. FAQ
*   **What it does**: Manages questions and answers in the Accordion.
*   **Fields**:
    *   `Question` & `Réponse`.
    *   `Ordre d'affichage`: Ordering index.

---

## 3. How the Integration Works (Code Connection)

The Next.js application ([web/](file:///c:/src/projects/landing-page/web)) fetches the content from Sanity's API using the configuration in [web/sanity/lib/client.ts](file:///c:/src/projects/landing-page/web/sanity/lib/client.ts).

### Testing the Integration Locally
1. Run both the Next.js app and the Sanity Studio concurrently:
   * Terminal 1: `npm run dev:web` (runs on `http://localhost:3000`)
   * Terminal 2: `npm run dev:studio` (runs on `http://localhost:3333`)
2. Go to the Studio at `:3333`, add a new Testimonial, and click **Publish**.
3. Refresh the Next.js homepage at `:3000` to see your new testimonial load live.

---

## 4. Deploying the Studio to Production

To make the Studio accessible online so Nathalie can edit content without running local servers, you need to deploy it:

### The Recommended Method: Sanity Hosting (Free & Instant)
Sanity hosts your Studio for free on their global CDN. Run this command inside the `studio/` directory:
```bash
cd studio
npx sanity deploy
```
*   **Deployment Slug**: The CLI will ask you to choose a unique subdomain prefix (e.g., `avospapattes`).
*   **Result**: Nathalie can now log in at `https://avospapattes.sanity.studio` from any browser or mobile device, make edits, and publish updates live.
