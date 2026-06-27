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
  let certifications: any[] | undefined = undefined;

  try {
    reviews = await fetchGoogleReviews();
  } catch (e) {
    console.error("Failed to fetch Google reviews", e);
  }

  if (isSanityConfigured) {
    try {
      const { client } = await import("@/sanity/lib/client");
      certifications = await client.fetch(
        `*[_type == "certification"] | order(order asc)`,
      );
      if (certifications && certifications.length === 0)
        certifications = undefined;
    } catch (e) {
      console.error("Failed to fetch certifications from Sanity", e);
    }
  }

  return (
    <main className="min-h-screen w-full flex flex-col">
      <WelcomeSection />
      <StatsSection />
      <StorySection />
      <LabelsSection />
      <MissionSection />
      <BenefitsSection certifications={certifications} />
      <TestimonialsSection reviews={reviews} />
      <FaqSection />
    </main>
  );
}
