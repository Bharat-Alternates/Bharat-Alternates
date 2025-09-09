"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface Newsletter {
  _id: string
  title: string
  content: string
  type: "PMS" | "AIF"
  publishDate: string
}

interface NewsletterDisplayProps {
  type: "PMS" | "AIF"
}

export function NewsletterDisplay({ type }: NewsletterDisplayProps) {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    const fetchNewsletters = async () => {
      try {
        const response = await fetch(`/api/newsletter?type=${type}`)
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
  }, [type, toast])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
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
            <p className="text-muted-foreground">No newsletters available at this time.</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-8">
      {newsletters.map((newsletter) => (
        <Card key={newsletter._id}>
          <CardHeader>
            <CardTitle>{newsletter.title}</CardTitle>
            <CardDescription>Published on {formatDate(newsletter.publishDate)}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: newsletter.content }} />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
