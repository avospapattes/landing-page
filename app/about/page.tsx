import { BenefitsSection } from "@/components/sections/about/benefits-section";
import { LabelsSection } from "@/components/sections/about/labels-section";
import { MissionSection } from "@/components/sections/about/mission-section";
import { StorySection } from "@/components/sections/about/story-section";

export default function About() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <StorySection />
      <LabelsSection />
      <MissionSection />
      <BenefitsSection />
    </main>
  );
}
