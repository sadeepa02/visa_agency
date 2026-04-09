"use client"

import * as React from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../../ui/dropdown-menu"
import { ArrowUpDown, MoreHorizontal, Download, Eye, Trash2 } from "lucide-react"
import { Button } from "../../ui/button"
import { Checkbox } from "../../ui/checkbox"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle } from "../../ui/sheet"
import { toast } from "sonner"

interface DocumentFile {
  id: string;
  name: string;
  url: string;
  key: string;
}

const ActionsCell: React.FC<{ file: DocumentFile }> = ({ file }) => {
  const [deleteOpen, setDeleteOpen] = React.useState(false);
  const [isDeleting, setIsDeleting] = React.useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      const response = await fetch('/api/documents/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ key: file.key }),
      })

      if (!response.ok) {
        const payload = await response.json()
        throw new Error(payload?.error || 'Failed to delete document')
      }

      toast.success('Document deleted successfully')
      window.location.reload()
    } catch (error) {
      console.error('Delete failed', error)
      toast.error('Unable to delete document. Try again later.')
    } finally {
      setIsDeleting(false)
      setDeleteOpen(false)
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex h-8 w-8 items-center justify-center p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <a href={file.url} target="_blank" rel="noopener noreferrer">
                <Eye className="mr-2 h-4 w-4" />
                View
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href={file.url} download={file.name}>
                <Download className="mr-2 h-4 w-4" />
                Download
              </a>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setDeleteOpen(true)} className="text-red-700 hover:bg-red-100 focus:bg-red-100 focus:text-red-900">
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Sheet open={deleteOpen} onOpenChange={setDeleteOpen}>
        <SheetContent side="top" className="max-w-md mx-auto mt-10 rounded-lg">
          <SheetHeader>
            <SheetTitle className="text-lg">Delete document?</SheetTitle>
          </SheetHeader>
          <div className="mt-4 text-sm text-muted-foreground">
            Are you sure you want to permanently delete <span className="font-semibold">{file.name}</span> from Uploadthing? This action cannot be undone.
          </div>
          <SheetFooter className="mt-6 flex justify-end gap-2">
            <Button variant="outline" onClick={() => setDeleteOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

export const columns: ColumnDef<DocumentFile>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected()
            ? true
            : table.getIsSomePageRowsSelected()
            ? "indeterminate"
            : false
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="font-medium">{row.getValue("name")}</div>,
  },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    enableHiding: false,
    cell: ({ row }) => <ActionsCell file={row.original} />,
  },
]