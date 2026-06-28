"use client";
import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Review } from "@/lib/services/reviews";

export default function TestimonialsSection({
  reviews = [],
}: {
  reviews?: Review[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const rotations = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2"];

  return (
    <section className="w-full py-24 bg-transparent overflow-hidden" id="avis">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-headline-lg text-center mb-4">
            Paroles de Clients
          </h2>
        </div>

        {/* CRITICAL FIXES:
            1. py-20: Provides vertical space for rotated corners.
            2. px-4: Prevents cards from hugging the screen edges on mobile.
        */}
        <div className="overflow-hidden py-20 px-4" ref={emblaRef}>
          <div className="flex -ml-4 md:-ml-8">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 md:pl-8"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card
                      className={`cursor-pointer h-fit relative bg-white neo-shadow-interactive ${rotations[i % rotations.length]}`}
                    >
                      <Quote className="absolute -top-3 -left-3 w-8 h-8 text-primary bg-white border-2 border-secondary p-1.5 rounded-lg shadow-sm z-20" />

                      <CardHeader className="pb-2 pt-6">
                        <div className="flex items-center gap-1 mb-1">
                          {[...Array(5)].map((_, s) => (
                            <Star
                              key={s}
                              className={`w-3 h-3 ${s < review.rating ? "fill-primary text-primary" : "text-muted"}`}
                            />
                          ))}
                        </div>
                        <p className="font-serif font-bold text-base italic truncate">
                          {review.author_name}
                        </p>
                      </CardHeader>

                      <CardContent>
                        <p className="text-body-md text-muted-foreground line-clamp-4 leading-relaxed">
                          « {review.text} »
                        </p>
                        <div className="mt-4">
                          <span className="text-label-bold text-primary uppercase tracking-wider border-b-2 border-primary">
                            Lire la suite
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>

                  <DialogContent className="bg-white neo-shadow max-w-lg w-[92vw] md:w-full">
                    <DialogHeader>
                      <DialogTitle className="flex flex-col gap-2 text-left">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, s) => (
                            <Star
                              key={s}
                              className={`w-4 h-4 ${s < review.rating ? "fill-primary text-primary" : "text-muted"}`}
                            />
                          ))}
                        </div>
                        <span className="text-2xl font-serif font-bold italic">
                          {review.author_name}
                        </span>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="mt-4 max-h-[60vh] overflow-y-auto">
                      <p className="text-body-lg leading-relaxed italic text-foreground">
                        « {review.text} »
                      </p>
                      <p className="text-caption text-muted-foreground mt-6 font-bold uppercase tracking-widest">
                        Publié {review.relative_time_description}
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 mt-4 items-center w-full justify-center">
          <Button
            onClick={scrollPrev}
            variant="outline"
            className="h-10 w-10 p-0 flex items-center justify-center"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            onClick={scrollNext}
            variant="outline"
            className="h-10 w-10 p-0 flex items-center justify-center"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
