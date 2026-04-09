import { AlertTriangle } from "lucide-react"
import { columns } from "@/components/dashboard/documents/document-columns"
import { DataTable } from "@/components/dashboard/documents/data-table"

interface DocumentFile {
  id: string;
  name: string;
  size: number;
  url: string;
  key: string;
}

interface DocumentFetchResult {
  documents: DocumentFile[];
  error?: string;
}

async function getDocuments(): Promise<DocumentFetchResult> {
  try {
    const baseUrl = process.env.KINDE_SITE_URL || 'http://localhost:3000';
    const res = await fetch(new URL('/api/documents', baseUrl).href, {
      cache: 'no-store',
    });

    if (!res.ok) {
      const body = await res.text();
      console.error('Documents API error body:', body);
      return {
        documents: [],
        error: 'Unable to load documents right now. Please try again later.',
      };
    }

    const data = await res.json();
    return {
      documents: data.files || [],
    };
  } catch (error) {
    console.error('Error fetching documents:', error);
    return {
      documents: [],
      error: 'Unable to load documents right now. Please try again later.',
    };
  }
}

const Page = async () => {
  const { documents, error } = await getDocuments();

  return (
    <div className="container mx-auto p-5 overflow-hidden">
      <div className="bg-white/80 rounded-md p-4">
        <h1 className="text-2xl font-bold mb-4">Uploaded Documents</h1>
        <div className="mb-4 flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">
          <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red-600" />
          <div className="text-sm leading-6">
            <span className="font-semibold">Storage limit alert:</span> You are on Uploadthing’s free tier, so storage is limited to <span className="font-semibold">2.00GB</span>. Remove old documents often and keep uploads lean.
          </div>
        </div>
        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
            <strong>Warning:</strong> {error}
          </div>
        )}
        <DataTable columns={columns} data={documents} />
      </div>
    </div>
  );
}

export const dynamic = 'force-dynamic';

export default Page;