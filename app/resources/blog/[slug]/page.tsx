import { createServerClient } from "@/lib/supabase"
import { notFound } from "next/navigation"
import { format } from "date-fns"
import { Card } from "@/components/ui/card"

interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  summary: string
  cover_image?: string
  author_name: string
  published_at: string
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const supabase = createServerClient()

  const { data: blog } = await supabase.from("blogs").select("title, summary").eq("slug", params.slug).single()

  if (!blog) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: blog.title,
    description: blog.summary,
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const supabase = createServerClient()

  const { data: blog, error } = await supabase.from("blogs").select("*").eq("slug", params.slug).single()

  if (error || !blog) {
    notFound()
  }

  // Function to convert markdown-like content to HTML
  const formatContent = (content: string) => {
    // This is a simple implementation - you might want to use a proper markdown parser
    return content
      .split("\n\n")
      .map((paragraph) => `<p>${paragraph}</p>`)
      .join("")
  }

  return (
    <div className="container mx-auto py-12 max-w-4xl">
      <article>
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-4">{blog.title}</h1>
          <p className="text-muted-foreground">
            By {blog.author_name} • {format(new Date(blog.published_at), "MMMM d, yyyy")}
          </p>
        </header>

        {blog.cover_image && (
          <div className="mb-8 aspect-video overflow-hidden rounded-lg">
            <img src={blog.cover_image || "/placeholder.svg"} alt={blog.title} className="object-cover w-full h-full" />
          </div>
        )}

        <Card className="p-8 mb-8">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: formatContent(blog.content) }}
          />
        </Card>
      </article>
    </div>
  )
}
