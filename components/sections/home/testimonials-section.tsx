"use client"
import { TestimonialsCarousel } from "@/components/ui/TestimonialsCarousel";

async function getReviews() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  try {
    const res = await fetch(`${baseUrl}/api/reviews`, { cache: "no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    return [];
  }
}

export default async function TestimonialsSection() {
  const reviews = await getReviews();

  return (
    <section
      className="w-full py-24 bg-white overflow-hidden"
      id="avis"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl md:text-5xl text-center text-stroke-title font-extrabold mb-4 uppercase">
            Paroles de Clients
          </h2>
        </div>

        <TestimonialsCarousel reviews={reviews} />
      </div>
    </section>
  );
}
