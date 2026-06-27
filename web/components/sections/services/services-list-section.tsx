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
    <section className="w-full pb-16 px-4 md:px-8 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            const serviceId = getServiceId(service);
            const imageSrc = getServiceImageSrc(service.image);

            return (
              <div
                key={serviceId}
                className={`flex flex-col md:flex-row neo-shadow rounded-2xl overflow-hidden bg-foreground max-w-5xl mx-auto ${
                  !isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image Section */}
                <div className="w-full md:w-1/2 relative h-62.5 md:h-auto min-h-62.5 md:min-h-100">
                  {imageSrc && (
                    <Image
                      src={imageSrc}
                      alt={service.title || "Image de service"}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Text Section */}
                <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center space-y-4 md:space-y-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {service.title}
                  </h2>
                  <p className="text-base text-justify md:text-lg leading-relaxed text-white">
                    {service.description}
                  </p>

                  {/* Points Section */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-fit mt-2 md:mt-4 cursor-pointer"
                      >
                        Voir les détails
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="w-[95%] sm:max-w-4xl mx-auto bg-white border border-gray-200 shadow-sm rounded-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-xl md:text-2xl font-bold text-primary mb-4">
                          {service.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                          {service.points?.map((point: string, idx: number) => {
                            const parts = point.split(" : ");
                            const hasKey = parts.length > 1;
                            return (
                              <div key={idx} className="flex items-start gap-3">
                                <PawPrint className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <div className="text-muted-foreground text-sm md:text-lg">
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
