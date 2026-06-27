import { BenefitsSection } from "@/components/sections/home/benefits-section";
import { LabelsSection } from "@/components/sections/home/labels-section";
import { MissionSection } from "@/components/sections/home/mission-section";
import { StorySection } from "@/components/sections/home/story-section";
import { WelcomeSection } from "@/components/sections/home/welcome-section";
import { StatsSection } from "@/components/sections/home/stats-section";
import { FaqSection } from "@/components/sections/home/faq-section";
import TestimonialsSection from "@/components/sections/home/testimonials-section";
import { fetchGoogleReviews } from "@/lib/services/reviews";
import type { Review } from "@/lib/services/reviews";
import { defineQuery } from "next-sanity";
import type { HOME_CERTIFICATIONS_QUERY_RESULT, HOME_FAQS_QUERY_RESULT } from "@/sanity.types";

const HOME_CERTIFICATIONS_QUERY = defineQuery(
  `*[_type == "certification"] | order(order asc)`,
);

const HOME_FAQS_QUERY = defineQuery(`*[_type == "faq"] | order(order asc)`);

export default async function Home() {
  const isSanityConfigured =
    !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    !!process.env.NEXT_PUBLIC_SANITY_DATASET;

  let reviews: Review[] = [];
  let certifications: HOME_CERTIFICATIONS_QUERY_RESULT | undefined = undefined;
  let faqs: HOME_FAQS_QUERY_RESULT | undefined = undefined;

  try {
    reviews = await fetchGoogleReviews();
  } catch (e) {
    console.error("Failed to fetch Google reviews", e);
  }

  if (isSanityConfigured) {
    try {
      const { client } = await import("@/sanity/lib/client");
      certifications = await client.fetch(HOME_CERTIFICATIONS_QUERY);
      if (certifications && certifications.length === 0)
        certifications = undefined;

      faqs = await client.fetch(HOME_FAQS_QUERY);
      if (faqs && faqs.length === 0) faqs = undefined;
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
      <FaqSection faqs={faqs} />
    </main>
  );
}
