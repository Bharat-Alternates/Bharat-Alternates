"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

// This is a simplified version without MongoDB dependencies
export function PMSForm({ pmsId, defaultValues }: { pmsId?: string; defaultValues?: any }) {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    toast({
      title: "Not implemented",
      description: "This feature has been removed as part of the MongoDB removal.",
      variant: "destructive",
    })

    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent className="pt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">PMS Name</Label>
              <Input id="name" placeholder="Enter PMS name" defaultValue={defaultValues?.name || ""} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="provider">Provider</Label>
              <Input
                id="provider"
                placeholder="Enter provider name"
                defaultValue={defaultValues?.provider || ""}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="strategy">Strategy</Label>
              <Input
                id="strategy"
                placeholder="Enter strategy name"
                defaultValue={defaultValues?.strategy || ""}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="aum">AUM (₹ Cr)</Label>
              <Input
                id="aum"
                type="number"
                placeholder="Enter AUM in crores"
                defaultValue={defaultValues?.aum || ""}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="minInvestment">Minimum Investment (₹)</Label>
              <Input
                id="minInvestment"
                type="number"
                placeholder="Enter minimum investment amount"
                defaultValue={defaultValues?.minInvestment || ""}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="riskProfile">Risk Profile</Label>
              <Select defaultValue={defaultValues?.riskProfile || "Medium"}>
                <SelectTrigger>
                  <SelectValue placeholder="Select risk profile" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Very High">Very High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter PMS description"
              defaultValue={defaultValues?.description || ""}
              rows={4}
              required
            />
          </div>

          <div className="flex justify-end space-x-4">
            <Button variant="outline" type="button" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Saving...
                </>
              ) : (
                `${pmsId ? "Update" : "Create"} PMS`
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </form>
  )
}
