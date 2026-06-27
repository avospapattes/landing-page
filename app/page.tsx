import { BenefitsSection } from "@/components/sections/home/benefits-section";
import { LabelsSection } from "@/components/sections/home/labels-section";
import { MissionSection } from "@/components/sections/home/mission-section";
import { StorySection } from "@/components/sections/home/story-section";
import { WelcomeSection } from "@/components/sections/home/welcome-section";
import { StatsSection } from "@/components/sections/home/stats-section";
import { FaqSection } from "@/components/sections/home/faq-section";
import TestimonialsSection from "@/components/sections/home/testimonials-section";
import { fetchGoogleReviews } from "@/lib/services/reviews";

export default async function Home() {
  const reviews = await fetchGoogleReviews();

  return (
    <main className="min-h-screen w-full flex flex-col">
      <WelcomeSection />
      <StatsSection />
      <StorySection />
      <LabelsSection />
      <MissionSection />
      <BenefitsSection />
      <TestimonialsSection reviews={reviews} />
      <FaqSection />
    </main>
  );
}
