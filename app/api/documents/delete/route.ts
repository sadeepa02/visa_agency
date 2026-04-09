import { UTApi } from "uploadthing/server";
import { NextResponse } from "next/server";

const utapi = new UTApi({
  token: process.env.UPLOADTHING_TOKEN ?? process.env.UPLOADTHING_SECRET,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const key = body?.key;

    if (!key || typeof key !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid file key" },
        { status: 400 }
      );
    }

    const result = await utapi.deleteFiles(key);

    if (!result.success) {
      return NextResponse.json(
        { error: "Failed to delete document" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, deletedCount: result.deletedCount });
  } catch (error) {
    console.error("Error deleting document:", error);
    return NextResponse.json(
      { error: "Unable to delete document" },
      { status: 500 }
    );
  }
}