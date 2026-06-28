import { defineQuery } from "next-sanity";
import { GalleryGrid } from "@/components/sections/gallery/gallery-grid";
import type { GALLERY_QUERY_RESULT } from "@/sanity.types";

const GALLERY_QUERY = defineQuery(
  `*[_type == "galleryItem"] | order(order asc)`
);

import { ScrollReveal } from "@/components/ui/scroll-reveal";

export const metadata = {
  title: "Galerie Photos - À vos papattes",
  description: "Découvrez notre galerie de photos de gardes d'animaux, chiens, chats et autres compagnons à Oberhausbergen.",
};

export default async function GalleryPage() {
  const isSanityConfigured =
    !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    !!process.env.NEXT_PUBLIC_SANITY_DATASET;

  let photos: GALLERY_QUERY_RESULT | undefined = undefined;

  if (isSanityConfigured) {
    try {
      const { client } = await import("@/sanity/lib/client");
      photos = await client.fetch(GALLERY_QUERY);
      if (photos && photos.length === 0) photos = undefined;
    } catch (e) {
      console.error("Failed to fetch gallery items from Sanity", e);
    }
  }

  return (
    <main className="min-h-screen w-full flex flex-col">
      {/* Grid Section */}
      <ScrollReveal className="flex-1 w-full">
        <GalleryGrid initialPhotos={photos} />
      </ScrollReveal>
    </main>
  );
}
