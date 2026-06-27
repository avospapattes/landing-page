import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_EMAIL_SERVICE_ID: z
    .string()
    .min(1, "EMAILJS_SERVICE_ID is required"),
  NEXT_PUBLIC_EMAIL_TEMPLATE_ID: z
    .string()
    .min(1, "EMAILJS_TEMPLATE_ID is required"),
  NEXT_PUBLIC_EMAIL_PUBLIC_KEY: z
    .string()
    .min(1, "EMAILJS_PUBLIC_KEY is required"),
  NEXT_PUBLIC_GOOGLE_MAPS_API: z.string().optional(),
  NEXT_PUBLIC_GOOGLE_PLACE_ID: z.string().optional(),
  NEXT_PUBLIC_SANITY_PROJECT_ID: z.string().optional(),
  NEXT_PUBLIC_SANITY_DATASET: z.string().optional(),
});

// Helper to validate env vars safely
const getEnv = () => {
  if (typeof window !== "undefined") {
    // Client-side: next-config exposes client env keys prefixed with NEXT_PUBLIC_
    return {
      NEXT_PUBLIC_EMAIL_SERVICE_ID:
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || "",
      NEXT_PUBLIC_EMAIL_TEMPLATE_ID:
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || "",
      NEXT_PUBLIC_EMAIL_PUBLIC_KEY:
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY || "",
      NEXT_PUBLIC_GOOGLE_MAPS_API: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API,
      NEXT_PUBLIC_GOOGLE_PLACE_ID: process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID,
      NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    };
  }

  // Server-side: full process.env access
  return {
    NEXT_PUBLIC_EMAIL_SERVICE_ID:
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || "",
    NEXT_PUBLIC_EMAIL_TEMPLATE_ID:
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || "",
    NEXT_PUBLIC_EMAIL_PUBLIC_KEY:
      process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY || "",
    NEXT_PUBLIC_GOOGLE_MAPS_API:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API || process.env.GOOGLE_MAPS_API,
    NEXT_PUBLIC_GOOGLE_PLACE_ID:
      process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || process.env.GOOGLE_PLACE_ID,
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID,
    NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET,
  };
};

export const env = envSchema.parse(getEnv());
