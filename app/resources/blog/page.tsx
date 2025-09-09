import { createServerClient } from "@/lib/supabase"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatDistanceToNow } from "date-fns"

interface Blog {
  id: string
  title: string
  slug: string
  summary: string
  content: string
  cover_image?: string
  author_name: string
  published_at: string
}

export default async function BlogPage() {
  const supabase = createServerClient()

  const { data: blogs, error } = await supabase.from("blogs").select("*").order("published_at", { ascending: false })

  if (error) {
    console.error("Error fetching blogs:", error)
  }

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Blog</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Insights, analysis, and updates on PMS, AIF, and investment strategies in India
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <Card key={blog.id} className="flex flex-col h-full overflow-hidden group">
              {blog.cover_image && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={blog.cover_image || "/placeholder.svg"}
                    alt={blog.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
                <CardDescription>
                  {formatDistanceToNow(new Date(blog.published_at), { addSuffix: true })} by {blog.author_name}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3">{blog.summary}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/resources/blog/${blog.slug}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground mb-4">No blog posts found</p>
          </div>
        )}
      </div>
    </div>
  )
}
