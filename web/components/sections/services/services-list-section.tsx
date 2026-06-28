import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PawPrint } from "lucide-react";
import { urlForImage } from "@/sanity/lib/image";
import type { SERVICES_QUERY_RESULT } from "@/sanity.types";
import type { Image as SanityImage } from "sanity";

interface ServicesListSectionProps {
  services?: SERVICES_QUERY_RESULT;
}

export function ServicesListSection({ services }: ServicesListSectionProps) {
  if (!services || services.length === 0) return null;

  const getServiceImageSrc = (img: NonNullable<SERVICES_QUERY_RESULT[number]["image"]> | string | undefined | null) => {
    if (typeof img === "string") return img;
    if (img && typeof img === "object" && "asset" in img) {
      try {
        return urlForImage(img as SanityImage).url();
      } catch (e) {
        return "";
      }
    }
    return "";
  };

  const getServiceId = (service: SERVICES_QUERY_RESULT[number]) => {
    if (service.id && typeof service.id === "object") {
      return service.id.current || "";
    }
    return service._id || "";
  };

  return (
    <section className="w-full pb-16 bg-transparent relative">
      {/* Immersive Accordion Carousel */}
      <div className="relative w-full h-[750px] md:h-[700px] flex flex-col md:flex-row border-y-2 border-secondary overflow-hidden bg-white">
        {services.map((service) => {
            const serviceId = getServiceId(service);
            const imageSrc = getServiceImageSrc(service.image);

            return (
              <Dialog key={serviceId}>
                <DialogTrigger asChild>
                  <button
                    className="relative flex-1 hover:flex-[1.5] md:hover:flex-[2.5] focus-visible:flex-[1.5] md:focus-visible:flex-[2.5] transition-all duration-500 ease-out overflow-hidden cursor-pointer group border-b-2 md:border-b-0 md:border-r-2 last:border-r-0 border-secondary text-left outline-none w-full h-full"
                  >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0 bg-muted">
                      {imageSrc && (
                        <Image
                          src={imageSrc}
                          alt={service.title || "Image de service"}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      )}
                      {/* Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity z-10" />
                    </div>

                    {/* Content Section */}
                    <div className="absolute inset-0 z-20 p-6 md:p-8 flex flex-col justify-end text-white select-none">
                      <div className="space-y-2 max-w-md">
                        <h3 className="font-serif text-xl md:text-3xl font-bold leading-tight drop-shadow-sm text-white">
                          {service.title}
                        </h3>
                        
                        {/* Expandable Info Container */}
                        <div className="max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 group-focus-visible:max-h-48 group-focus-visible:opacity-100 transition-all duration-500 ease-out overflow-hidden">
                          <p className="text-xs md:text-body-md text-white/95 leading-relaxed text-justify mt-2 mb-4 line-clamp-3 md:line-clamp-4">
                            {service.description}
                          </p>
                          <span className="inline-flex items-center text-xs md:text-sm font-bold uppercase tracking-wider text-primary border-b border-primary pb-0.5">
                            Voir les détails
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                </DialogTrigger>

                {/* Dialog Content */}
                <DialogContent className="w-[95%] sm:max-w-4xl mx-auto bg-white neo-shadow p-6 md:p-8 max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="font-serif text-xl md:text-2xl font-bold text-primary mb-4 text-left">
                      {service.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      {service.points?.map((point: string, idx: number) => {
                        const parts = point.split(" : ");
                        const hasKey = parts.length > 1;
                        return (
                          <div
                            key={idx}
                            className="flex items-start gap-3"
                          >
                            <PawPrint className="w-5 h-5 text-primary shrink-0 mt-1" />
                            <div className="text-muted-foreground text-sm md:text-lg text-left">
                              {hasKey ? (
                                <>
                                  <span className="font-bold text-foreground">
                                    {parts[0]}
                                  </span>
                                  : {parts.slice(1).join(" : ")}
                                </>
                              ) : (
                                point
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
    </section>
  );
}
