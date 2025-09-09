import Link from "next/link"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface BlogCardProps {
  id: string
  slug: string
  title: string
  excerpt: string
  coverImage: string
  author: string
  publishedAt: string
  category: string
  tags: string[]
}

export function BlogCard({ id, slug, title, excerpt, coverImage, author, publishedAt, category, tags }: BlogCardProps) {
  // Get author initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  // Format date
  const formattedDate = formatDistanceToNow(new Date(publishedAt), { addSuffix: true })

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <Link href={`/resources/blog/${slug}`} className="block">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={coverImage || "/placeholder.svg?height=400&width=600"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700">
              {category}
            </Badge>
          </div>
        </div>
      </Link>
      <CardHeader className="p-4 pb-0">
        <Link href={`/resources/blog/${slug}`} className="block">
          <CardTitle className="line-clamp-2 text-xl hover:text-blue-600 transition-colors">{title}</CardTitle>
        </Link>
        <CardDescription className="line-clamp-2 mt-2">{excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{tags.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 border-t flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={`/placeholder-user.jpg`} alt={author} />
            <AvatarFallback>{getInitials(author)}</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <p className="font-medium">{author}</p>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">{formattedDate}</div>
      </CardFooter>
    </Card>
  )
}
