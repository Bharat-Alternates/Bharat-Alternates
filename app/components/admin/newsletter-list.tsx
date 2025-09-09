"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Loader2, Pencil, Trash2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface Newsletter {
  _id: string
  title: string
  type: "PMS" | "AIF"
  publishDate: string
  createdAt: string
}

export function NewsletterList() {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    const fetchNewsletters = async () => {
      try {
        const response = await fetch("/api/newsletter")
        if (!response.ok) {
          throw new Error("Failed to fetch newsletters")
        }
        const data = await response.json()
        setNewsletters(data.data)
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load newsletters",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchNewsletters()
  }, [toast])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (newsletters.length === 0) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center py-6">
            <p className="text-muted-foreground mb-4">No newsletters found</p>
            <Button asChild>
              <Link href="/admin/newsletter/new">Create your first newsletter</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Publish Date</TableHead>
              <TableHead>Created</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {newsletters.map((newsletter) => (
              <TableRow key={newsletter._id}>
                <TableCell className="font-medium">{newsletter.title}</TableCell>
                <TableCell>
                  <Badge variant={newsletter.type === "PMS" ? "default" : "secondary"}>{newsletter.type}</Badge>
                </TableCell>
                <TableCell>{formatDate(newsletter.publishDate)}</TableCell>
                <TableCell>{formatDate(newsletter.createdAt)}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="icon" asChild>
                      <Link href={`/admin/newsletter/${newsletter._id}/edit`}>
                        <Pencil className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href={`/admin/newsletter/${newsletter._id}/delete`}>
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Link>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
