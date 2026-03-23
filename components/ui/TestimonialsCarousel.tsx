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

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
}

export function TestimonialsCarousel({ reviews }: { reviews: Review[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const rotations = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2"];

  return (
    <>
      <div
        className="overflow-hidden py-20 px-4"
        ref={emblaRef}
      >
        <div className="flex -ml-4 md:-ml-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 md:pl-8"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card
                    className={`cursor-pointer h-fit relative bg-white border-[3px]! border-primary! neo-shadow transition-all hover:scale-[1.02] active:scale-95 ${rotations[i % rotations.length]}`}
                  >
                    <Quote className="absolute -top-3 -left-3 w-8 h-8 text-primary bg-white border-2 border-foreground p-1.5 rounded-lg shadow-sm z-20" />

                    <CardHeader className="pb-2 pt-6">
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, s) => (
                          <Star
                            key={s}
                            className={`w-3 h-3 ${s < review.rating ? "fill-primary text-primary" : "text-muted"}`}
                          />
                        ))}
                      </div>
                      <p className="font-black text-base uppercase italic truncate">
                        {review.author_name}
                      </p>
                    </CardHeader>

                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-4 leading-relaxed">
                        « {review.text} »
                      </p>
                      <div className="mt-4">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-tighter border-b-2 border-primary">
                          Lire la suite
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="border-4 border-foreground bg-white neo-shadow max-w-lg w-[92vw] md:w-full rounded-none">
                  <DialogHeader>
                    <DialogTitle className="flex flex-col gap-2 text-left">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, s) => (
                          <Star
                            key={s}
                            className={`w-4 h-4 ${s < review.rating ? "fill-yellow-500 text-yellow-500" : "text-muted"}`}
                          />
                        ))}
                      </div>
                      <span className="text-2xl font-black text-black uppercase italic">
                        {review.author_name}
                      </span>
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-4 max-h-[60vh] overflow-y-auto">
                    <p className="text-base leading-relaxed italic text-foreground">
                      « {review.text} »
                    </p>
                    <p className="text-xs text-muted-foreground mt-6 font-bold uppercase tracking-widest">
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
          className="rounded-full bg-transparent border-2 border-foreground neo-shadow-sm p-2 h-10 w-10 hover:bg-primary hover:text-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          onClick={scrollNext}
          variant="outline"
          className="rounded-full bg-transparent border-2 border-foreground neo-shadow-sm p-2 h-10 w-10 hover:bg-primary hover:text-white transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
    </>
  );
}
