import { OurFileRouter } from "@/app/api/uploadthing/core";
import { generateUploadButton, generateUploadDropzone } from "@uploadthing/react";

// const uploadthingToken =
//   process.env.NEXT_PUBLIC_UPLOADTHING_TOKEN ||
//   process.env.UPLOADTHING_TOKEN ||
//   process.env.UPLOADTHING_SECRET;

// if (typeof window !== "undefined" && uploadthingToken) {
//   (window as any).UPLOADTHING_TOKEN = uploadthingToken;
// }

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
