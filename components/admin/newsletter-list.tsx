"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

export function NewsletterList() {
  const { toast } = useToast()
  const [newsletters, setNewsletters] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // This would normally fetch newsletters from the API
    setIsLoading(false)

    toast({
      title: "Database connection removed",
      description: "Newsletter functionality has been disabled as MongoDB was removed.",
      variant: "destructive",
    })
  }, [toast])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-10">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
      {newsletters.length === 0 ? (
        <div className="p-8 text-center">
          <p className="text-muted-foreground">No newsletters found.</p>
          <p className="text-sm text-muted-foreground mt-1">Create your first newsletter to get started.</p>
        </div>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Publish Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {newsletters.map((newsletter) => (
              <TableRow key={newsletter.id}>
                <TableCell className="font-medium">{newsletter.title}</TableCell>
                <TableCell>{newsletter.type}</TableCell>
                <TableCell>{new Date(newsletter.publishDate).toLocaleDateString()}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/admin/newsletter/${newsletter.id}/edit`}>Edit</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Link href={`/admin/newsletter/${newsletter.id}/delete`}>Delete</Link>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  )
}
