"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import { getSupabaseBrowserClient } from "@/lib/supabase"
import { useToast } from "@/components/ui/use-toast"

export interface Blog {
  id?: string
  title: string
  slug: string
  content: string
  summary: string
  cover_image?: string
  author_name: string
  published_at?: string
}

interface BlogFormProps {
  blogId?: string
  defaultValues?: Partial<Blog>
}

export function BlogForm({ blogId, defaultValues }: BlogFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<Partial<Blog>>(
    defaultValues || {
      title: "",
      slug: "",
      content: "",
      summary: "",
      cover_image: "",
      author_name: "",
    },
  )
  const { toast } = useToast()
  const supabase = getSupabaseBrowserClient()

  useEffect(() => {
    const getUserInfo = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      if (session) {
        const { data: profile } = await supabase.from("profiles").select("full_name").eq("id", session.user.id).single()

        if (profile && !formData.author_name) {
          setFormData((prev) => ({
            ...prev,
            author_name: profile.full_name || session.user.email,
          }))
        }
      }
    }

    getUserInfo()
  }, [supabase])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session) {
        throw new Error("You must be logged in to create or edit blog posts")
      }

      const now = new Date().toISOString()

      if (blogId) {
        // Update existing blog
        const { error } = await supabase
          .from("blogs")
          .update({
            ...formData,
            updated_at: now,
          })
          .eq("id", blogId)

        if (error) throw error

        toast({
          title: "Blog post updated",
          description: "Your blog post has been updated successfully",
        })
      } else {
        // Create new blog
        const { error } = await supabase.from("blogs").insert({
          ...formData,
          author_id: session.user.id,
          published_at: now,
          created_at: now,
          updated_at: now,
        })

        if (error) throw error

        toast({
          title: "Blog post created",
          description: "Your blog post has been created successfully",
        })
      }

      router.push("/admin/blog")
      router.refresh()
    } catch (error: any) {
      console.error("Error saving blog post:", error)
      toast({
        title: "Error",
        description: error.message || "Failed to save blog post. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const generateSlug = () => {
    if (formData.title) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .replace(/\s+/g, "-")
      setFormData((prev) => ({ ...prev, slug }))
    }
  }

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title || ""}
            onChange={handleChange}
            onBlur={() => !formData.slug && generateSlug()}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="slug">Slug</Label>
          <div className="flex gap-2">
            <Input id="slug" name="slug" value={formData.slug || ""} onChange={handleChange} required />
            <Button type="button" variant="outline" onClick={generateSlug} className="whitespace-nowrap">
              Generate Slug
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="summary">Summary</Label>
          <Textarea
            id="summary"
            name="summary"
            value={formData.summary || ""}
            onChange={handleChange}
            required
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            name="content"
            value={formData.content || ""}
            onChange={handleChange}
            required
            rows={10}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="cover_image">Cover Image URL</Label>
          <Input
            id="cover_image"
            name="cover_image"
            value={formData.cover_image || ""}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="author_name">Author</Label>
          <Input
            id="author_name"
            name="author_name"
            value={formData.author_name || ""}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => router.push("/admin/blog")}>
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {blogId ? "Update" : "Create"} Blog Post
          </Button>
        </div>
      </form>
    </Card>
  )
}
