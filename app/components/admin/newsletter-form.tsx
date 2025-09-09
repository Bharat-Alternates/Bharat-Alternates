"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

const newsletterSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  type: z.enum(["PMS", "AIF"], { required_error: "Please select a newsletter type" }),
  publishDate: z.string().optional(),
})

type NewsletterFormValues = z.infer<typeof newsletterSchema>

interface NewsletterFormProps {
  initialData?: NewsletterFormValues & { _id?: string }
  isEditing?: boolean
}

export function NewsletterForm({ initialData, isEditing = false }: NewsletterFormProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: initialData || {
      title: "",
      content: "",
      type: undefined,
      publishDate: new Date().toISOString().split("T")[0],
    },
  })

  const watchType = watch("type")

  const onSubmit = async (data: NewsletterFormValues) => {
    setIsLoading(true)
    try {
      const url = isEditing ? `/api/newsletter/${initialData?._id}` : "/api/newsletter"

      const method = isEditing ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to save newsletter")
      }

      toast({
        title: isEditing ? "Newsletter updated" : "Newsletter created",
        description: isEditing ? "Your changes have been saved" : "Your newsletter has been created successfully",
      })

      router.push("/admin/newsletter")
      router.refresh()
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{isEditing ? "Edit Newsletter" : "Create Newsletter"}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter newsletter title"
              {...register("title")}
              className={errors.title ? "border-red-500" : ""}
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Newsletter Type</Label>
            <Select value={watchType} onValueChange={(value) => setValue("type", value as "PMS" | "AIF")}>
              <SelectTrigger className={errors.type ? "border-red-500" : ""}>
                <SelectValue placeholder="Select newsletter type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="PMS">PMS</SelectItem>
                <SelectItem value="AIF">AIF</SelectItem>
              </SelectContent>
            </Select>
            {errors.type && <p className="text-red-500 text-sm">{errors.type.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="publishDate">Publish Date</Label>
            <Input id="publishDate" type="date" {...register("publishDate")} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              placeholder="Enter newsletter content"
              rows={10}
              {...register("content")}
              className={errors.content ? "border-red-500" : ""}
            />
            {errors.content && <p className="text-red-500 text-sm">{errors.content.message}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
              </>
            ) : isEditing ? (
              "Update Newsletter"
            ) : (
              "Create Newsletter"
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
