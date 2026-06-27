import { HeroSection } from "@/components/sections/services/hero-section";
import { ServicesListSection } from "@/components/sections/services/services-list-section";
import { WarningSection } from "@/components/sections/services/warning-section";
import { ZoneSection } from "@/components/sections/services/zone-section";
import { PricingSection } from "@/components/sections/services/pricing-section";
import { BookingProcessSection } from "@/components/sections/services/booking-process-section";
import { defineQuery } from "next-sanity";
import type { SERVICES_QUERY_RESULT } from "@/sanity.types";

const SERVICES_QUERY = defineQuery(`*[_type == "service"]`);

export default async function ServicesPage() {
  const isSanityConfigured =
    !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    !!process.env.NEXT_PUBLIC_SANITY_DATASET;

  let services: SERVICES_QUERY_RESULT | undefined = undefined;

  if (isSanityConfigured) {
    try {
      const { client } = await import("@/sanity/lib/client");
      services = await client.fetch(SERVICES_QUERY);
      if (services && services.length === 0) services = undefined;
    } catch (e) {
      console.error("Failed to fetch services from Sanity", e);
    }
  }

  return (
    <main className="min-h-screen w-full flex flex-col bg-white">
      <HeroSection />
      <ServicesListSection services={services} />
      <WarningSection />
      <PricingSection />
      <BookingProcessSection />
      <ZoneSection />
    </main>
  );
}
