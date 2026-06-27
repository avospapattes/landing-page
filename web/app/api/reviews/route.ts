import { NextResponse } from "next/server";
import { fetchGoogleReviews } from "@/lib/services/reviews";

export async function GET() {
  try {
    const reviews = await fetchGoogleReviews();
    return NextResponse.json(reviews);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 },
    );
  }
}
