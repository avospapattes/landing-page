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
  const isSanityConfigured =
    !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    !!process.env.NEXT_PUBLIC_SANITY_DATASET;

  let reviews: any[] = [];
  let features: any[] | undefined = undefined;

  if (isSanityConfigured) {
    try {
      const { client } = await import("@/sanity/lib/client");
      reviews = await client.fetch(`*[_type == "testimonial"]`);
      features = await client.fetch(`*[_type == "feature"] | order(order asc)`);
      if (features && features.length === 0) features = undefined;
    } catch (e) {
      console.error("Failed to fetch from Sanity", e);
    }
  }

  if (reviews.length === 0) {
    reviews = await fetchGoogleReviews();
  }

  return (
    <main className="min-h-screen w-full flex flex-col">
      <WelcomeSection />
      <StatsSection />
      <StorySection />
      <LabelsSection />
      <MissionSection />
      <BenefitsSection features={features} />
      <TestimonialsSection reviews={reviews} />
      <FaqSection />
    </main>
  );
}
