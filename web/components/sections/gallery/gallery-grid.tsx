"use client";

import { useState, useCallback } from "react";
import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { PawPrint, Camera } from "lucide-react";
import { urlForImage } from "@/sanity/lib/image";
import type { GALLERY_QUERY_RESULT } from "@/sanity.types";

interface GalleryGridProps {
  initialPhotos?: GALLERY_QUERY_RESULT;
}

export function GalleryGrid({ initialPhotos }: GalleryGridProps) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => {
    setSelectedPhotoIndex(null);
  }, []);

  // Helper to resolve image source
  const getPhotoSrc = (img: any) => {
    if (!img) return "";
    try {
      return urlForImage(img).url();
    } catch (e) {
      return "";
    }
  };

  // Helper to extract dimensions from Sanity image asset reference ID
  const getImageDimensions = (image: any) => {
    if (!image || !image.asset || !image.asset._ref) return null;
    const ref = image.asset._ref;
    const parts = ref.split("-");
    if (parts.length >= 3) {
      const dimensions = parts[2].split("x");
      if (dimensions.length === 2) {
        const width = parseInt(dimensions[0], 10);
        const height = parseInt(dimensions[1], 10);
        if (!isNaN(width) && !isNaN(height)) {
          return { width, height };
        }
      }
    }
    return null;
  };

  // Render empty state if no photos are configured or returned
  if (!initialPhotos || initialPhotos.length === 0) {
    return (
      <section className="flex-1 w-full bg-white py-16 px-4">
        <div className="container mx-auto max-w-xl text-center py-12 px-6 border-4 border-foreground rounded-2xl shadow-[8px_8px_0px_rgba(255,126,0,1)] bg-background">
          <Camera className="w-16 h-16 text-foreground mx-auto mb-4 animate-bounce" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Galerie en préparation
          </h2>
          <p className="text-foreground/90 text-sm md:text-base font-medium leading-relaxed">
            Nathalie prépare de magnifiques clichés de ses compagnons favoris. Les photos de nos chers amis à quatre pattes seront visibles ici très bientôt !
          </p>
          <div className="mt-6 flex justify-center gap-2">
            <PawPrint className="w-6 h-6 text-foreground/40 rotate-12" />
            <PawPrint className="w-6 h-6 text-foreground/60 -rotate-12 mt-2" />
            <PawPrint className="w-6 h-6 text-foreground/40 rotate-45" />
          </div>
        </div>
      </section>
    );
  }

  // Map Sanity photos to React Photo Album compatible structure
  const photos = initialPhotos
    .map((photo) => {
      const src = getPhotoSrc(photo.image);
      const dims = getImageDimensions(photo.image);
      if (!src) return null;

      return {
        src,
        width: dims?.width || 800,
        height: dims?.height || 600,
        alt: photo.title || "Photo de la galerie",
        key: photo._id,
      };
    })
    .filter(Boolean) as Array<{
      src: string;
      width: number;
      height: number;
      alt: string;
      key: string;
    }>;

  return (
    <section className="flex-1 w-full bg-white py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <ColumnsPhotoAlbum
          photos={photos}
          onClick={({ index }) => setSelectedPhotoIndex(index)}
          spacing={16}
          columns={(containerWidth) => {
            if (containerWidth < 640) return 1;
            if (containerWidth < 1024) return 2;
            return 3;
          }}
          render={{
            image: (imageProps) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                {...imageProps}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
              />
            ),
            button: ({ className, style, ...restProps }) => (
              <button
                {...restProps}
                style={{ ...style, overflow: "hidden" }}
                className={`overflow-hidden rounded-2xl w-full h-full relative isolate group ${className || ""}`}
              />
            ),
            wrapper: ({ className, style, ...restProps }) => (
              <div
                {...restProps}
                style={{ ...style, overflow: "hidden" }}
                className={`overflow-hidden rounded-2xl relative bg-neutral-100 isolate ${className || ""}`}
              />
            ),
          }}
        />
      </div>

      <Lightbox
        open={selectedPhotoIndex !== null}
        index={selectedPhotoIndex ?? 0}
        close={closeLightbox}
        slides={photos.map((p) => ({ src: p.src, alt: p.alt }))}
      />
    </section>
  );
}
