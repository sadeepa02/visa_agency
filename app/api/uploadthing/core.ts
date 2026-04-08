import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const uploadthingToken = process.env.UPLOADTHING_TOKEN ?? process.env.UPLOADTHING_SECRET;
if (uploadthingToken && !process.env.UPLOADTHING_TOKEN) {
  process.env.UPLOADTHING_TOKEN = uploadthingToken;
}
const f = createUploadthing();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({
    image: {
      /**
       * For full list of options and defaults, see the File Route API reference
       * @see https://docs.uploadthing.com/file-routes#route-config
       */
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      const user = await auth(req);

      // If you throw, the user will not be able to upload
      if (!user) throw new UploadThingError("Unauthorized");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);

      console.log("file url", file.url);

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { url: file.url };
    }),
    documentUploader: f({ 
      pdf: { maxFileSize: "4MB", maxFileCount: 1 },
      // For Microsoft Office documents
      // "application/msword": { maxFileSize: "16MB", maxFileCount: 1 },
    })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      const user = await auth(req);

      // If you throw, the user will not be able to upload
      if (!user) throw new UploadThingError("Unauthorized");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code runs on your server after upload
      console.log("Upload complete for userId:", metadata.userId);
      console.log("File URL:", file.url);

      console.log("Attempting to send email via Resend...");
      console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);

      try {
        const result = await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: 'sit.intsl@gmail.com',
          subject: 'New Document Uploaded',
          html: `
            <p>A new document has been uploaded.</p>
            <ul>
              <li><strong>File name:</strong> ${file.name}</li>
              <li><strong>File size:</strong> ${(file.size / 1024).toFixed(1)} KB</li>
              <li><strong>File URL:</strong> <a href="${file.url}">${file.url}</a></li>
            </ul>
            <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
          `,
        });
        console.log("Email sent successfully:", result);
      } catch (error) {
        console.error("Resend email failed on upload complete:", error);
        console.error("Error details:", JSON.stringify(error, null, 2));
      }

      // Return whatever you want to be available on the client
      return {
        uploadedBy: metadata.userId,
        url: file.url,
        name: file.name,
        size: file.size,
        key: file.key
      };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
