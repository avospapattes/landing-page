import { env } from "@/lib/env";

export interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
}

export async function fetchGoogleReviews(): Promise<Review[]> {
  const apiKey = env.NEXT_PUBLIC_GOOGLE_MAPS_API;
  const placeId = env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.warn(
      "Google Maps API key or Place ID is missing. Returning empty reviews list.",
    );
    return [];
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&language=fr&key=${apiKey}`;

  try {
    const response = await fetch(url, { next: { revalidate: 86400 } });
    const data = await response.json();

    if (data.status !== "OK") {
      console.error(`Google Places API returned status: ${data.status}`, data);
      return [];
    }

    return (data.result.reviews || []) as Review[];
  } catch (error) {
    console.error("Failed to fetch reviews from Google Places API", error);
    return [];
  }
}
