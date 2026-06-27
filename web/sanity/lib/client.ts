import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  // Set to true if you want to support live draft previews (will require setting up draftMode in Next.js)
  perspective: "published",
});
