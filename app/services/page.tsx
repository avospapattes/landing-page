import { HeroSection } from "@/components/sections/services/hero-section";
import { ServicesListSection } from "@/components/sections/services/services-list-section";
import { WarningSection } from "@/components/sections/services/warning-section";
import { ZoneSection } from "@/components/sections/services/zone-section";
import { PricingSection } from "@/components/sections/services/pricing-section";

export default function ServicesPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-white">
      <HeroSection />
      <ServicesListSection />
      <WarningSection />
      <PricingSection />
      <ZoneSection />
    </main>
  );
}
