"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, PawPrint, Camera } from "lucide-react";
import { urlForImage } from "@/sanity/lib/image";
import type { GALLERY_QUERY_RESULT } from "@/sanity.types";

interface GalleryGridProps {
  initialPhotos?: GALLERY_QUERY_RESULT;
}

export function GalleryGrid({ initialPhotos }: GalleryGridProps) {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  // Close Lightbox
  const closeLightbox = useCallback(() => {
    setSelectedPhotoIndex(null);
  }, []);

  // Show previous photo
  const showPrev = useCallback(() => {
    if (selectedPhotoIndex === null || !initialPhotos) return;
    setSelectedPhotoIndex((prevIndex) => 
      prevIndex === 0 ? initialPhotos.length - 1 : (prevIndex as number) - 1
    );
  }, [selectedPhotoIndex, initialPhotos]);

  // Show next photo
  const showNext = useCallback(() => {
    if (selectedPhotoIndex === null || !initialPhotos) return;
    setSelectedPhotoIndex((prevIndex) => 
      prevIndex === initialPhotos.length - 1 ? 0 : (prevIndex as number) + 1
    );
  }, [selectedPhotoIndex, initialPhotos]);

  // Handle Keyboard Arrows & Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, closeLightbox, showPrev, showNext]);

  // Prevent scroll when lightbox is open
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPhotoIndex]);

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

  const currentPhoto = selectedPhotoIndex !== null ? initialPhotos[selectedPhotoIndex] : null;
  const currentImageSrc = currentPhoto ? getPhotoSrc(currentPhoto.image) : "";

  return (
    <section className="flex-1 w-full bg-white py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* CSS Masonry Gallery Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
          {initialPhotos.map((photo, index) => {
            const src = getPhotoSrc(photo.image);
            if (!src) return null;

            const dims = getImageDimensions(photo.image);

            return (
              <button
                key={photo._id}
                onClick={() => setSelectedPhotoIndex(index)}
                className="break-inside-avoid w-full inline-block mb-6 group text-left flex flex-col border-4 border-foreground rounded-2xl overflow-hidden bg-foreground shadow-[8px_8px_0px_rgba(255,126,0,1)] hover:shadow-[14px_14px_0px_rgba(255,126,0,1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden bg-background">
                  {dims ? (
                    <Image
                      src={src}
                      alt={photo.title || "Photo de la galerie"}
                      width={dims.width}
                      height={dims.height}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="relative aspect-square w-full">
                      <Image
                        src={src}
                        alt={photo.title || "Photo de la galerie"}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <div className="p-4 bg-white border-t-4 border-foreground rounded-b-xl flex-1 flex flex-col justify-center">
                  <h3 className="font-bold text-foreground text-lg leading-tight line-clamp-2">
                    {photo.title || "Photo"}
                  </h3>
                  {photo.description && (
                    <p className="text-xs text-foreground/75 mt-1 line-clamp-3 leading-relaxed">
                      {photo.description}
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && currentPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-3 bg-white border-3 border-foreground rounded-full text-foreground shadow-[4px_4px_0px_rgba(255,126,0,1)] hover:bg-neutral-100 hover:scale-105 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_rgba(255,126,0,1)] transition-all cursor-pointer z-50"
            aria-label="Fermer la vue pleine écran"
          >
            <X className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={showPrev}
            className="absolute left-4 md:left-8 p-3 bg-white border-3 border-foreground rounded-full text-foreground shadow-[4px_4px_0px_rgba(255,126,0,1)] hover:bg-neutral-100 hover:scale-105 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_rgba(255,126,0,1)] transition-all cursor-pointer z-50"
            aria-label="Photo précédente"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>

          {/* Main Content Area */}
          <div className="flex flex-col max-w-4xl max-h-[85vh] w-full items-center justify-center relative px-12">
            {currentImageSrc && (
              <div className="relative border-4 border-foreground rounded-2xl overflow-hidden bg-neutral-900 shadow-[10px_10px_0px_rgba(255,126,0,1)] animate-in zoom-in-95 duration-200 max-h-[60vh] max-w-full flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={currentImageSrc}
                  alt={currentPhoto.title || "Photo de la galerie"}
                  className="max-h-[60vh] max-w-full object-contain"
                />
              </div>
            )}

            {/* Description Info block */}
            <div className="mt-6 bg-white border-4 border-foreground p-4 md:p-6 rounded-2xl shadow-[6px_6px_0px_rgba(255,126,0,1)] max-w-2xl w-full text-center animate-in slide-in-from-bottom-4 duration-300">
              <h2 className="text-lg md:text-xl font-extrabold text-foreground leading-snug">
                {currentPhoto.title || "Photo"}
              </h2>
              {currentPhoto.description && (
                <p className="text-xs md:text-sm text-foreground/80 mt-2 font-medium leading-relaxed">
                  {currentPhoto.description}
                </p>
              )}
              <div className="text-xs text-foreground/50 mt-3 font-semibold">
                {selectedPhotoIndex + 1} / {initialPhotos.length}
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={showNext}
            className="absolute right-4 md:right-8 p-3 bg-white border-3 border-foreground rounded-full text-foreground shadow-[4px_4px_0px_rgba(255,126,0,1)] hover:bg-neutral-100 hover:scale-105 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_rgba(255,126,0,1)] transition-all cursor-pointer z-50"
            aria-label="Photo suivante"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>
        </div>
      )}
    </section>
  );
}
