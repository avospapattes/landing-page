import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{ _type: string }>(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    );

    // Only enforce signature verification if the revalidation secret is configured
    if (process.env.SANITY_REVALIDATE_SECRET && !isValidSignature) {
      return new NextResponse("Invalid signature", { status: 401 });
    }

    if (!body?._type) {
      return new NextResponse("Bad Request: No _type in body", { status: 400 });
    }

    // Determine path to revalidate based on the document type
    if (body._type === "service") {
      revalidatePath("/services");
      revalidatePath("/");
    } else if (body._type === "faq" || body._type === "certification") {
      revalidatePath("/");
    } else if (body._type === "galleryItem") {
      revalidatePath("/gallery");
    }

    return NextResponse.json({ revalidated: true, now: Date.now(), body });
  } catch (err: any) {
    console.error("Revalidation error:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
