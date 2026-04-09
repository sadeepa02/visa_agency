import { UTApi } from "uploadthing/server";
import { NextResponse } from "next/server";

const utapi = new UTApi({
  token: process.env.UPLOADTHING_TOKEN ?? process.env.UPLOADTHING_SECRET,
});

export async function GET() {
  try {
    const result = await utapi.listFiles({ limit: 100 });

    const documents = await Promise.all(
      result.files.map(async (file) => {
        const signedUrl = await utapi.getSignedURL(file.key);
        return {
          id: file.id,
          name: file.name,
          size: 0, // Size not available from listFiles API
          url: signedUrl.url,
          key: file.key,
        };
      })
    );

    return NextResponse.json({ files: documents });
  } catch (error) {
    console.error("Error fetching documents:", error);
    return NextResponse.json({ error: "Failed to fetch documents" }, { status: 500 });
  }
}