"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

const pmsSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  provider: z.string().min(2, "Provider must be at least 2 characters"),
  strategy: z.string().min(2, "Strategy must be at least 2 characters"),
  aum: z.coerce.number().min(0, "AUM must be a positive number"),
  returns: z.object({
    oneMonth: z.coerce.number(),
    threeMonths: z.coerce.number(),
    sixMonths: z.coerce.number(),
    oneYear: z.coerce.number(),
    threeYears: z.coerce.number(),
    fiveYears: z.coerce.number(),
  }),
  riskProfile: z.enum(["Low", "Medium", "High", "Very High"]),
  minInvestment: z.string().min(1, "Minimum investment is required"),
  description: z.string().min(10, "Description must be at least 10 characters"),
})

type PMSFormValues = z.infer<typeof pmsSchema>

interface PMSFormProps {
  pmsId?: string
  defaultValues?: Partial<PMSFormValues>
}

export function PMSForm({ pmsId, defaultValues }: PMSFormProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PMSFormValues>({
    resolver: zodResolver(pmsSchema),
    defaultValues: {
      name: defaultValues?.name || "",
      provider: defaultValues?.provider || "",
      strategy: defaultValues?.strategy || "",
      aum: defaultValues?.aum || 0,
      returns: {
        oneMonth: defaultValues?.returns?.oneMonth || 0,
        threeMonths: defaultValues?.returns?.threeMonths || 0,
        sixMonths: defaultValues?.returns?.sixMonths || 0,
        oneYear: defaultValues?.returns?.oneYear || 0,
        threeYears: defaultValues?.returns?.threeYears || 0,
        fiveYears: defaultValues?.returns?.fiveYears || 0,
      },
      riskProfile: defaultValues?.riskProfile || "Medium",
      minInvestment: defaultValues?.minInvestment || "",
      description: defaultValues?.description || "",
    },
  })

  const onSubmit = async (data: PMSFormValues) => {
    setIsLoading(true)
    try {
      const url = pmsId ? `/api/pms/${pmsId}` : "/api/pms"
      const method = pmsId ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || `Failed to ${pmsId ? "update" : "create"} PMS`)
      }

      toast({
        title: `PMS ${pmsId ? "updated" : "created"} successfully`,
        description: `The PMS "${data.name}" has been ${pmsId ? "updated" : "created"} successfully.`,
      })

      // Redirect to PMS list
      router.push("/admin/pms")
      router.refresh()
    } catch (error) {
      toast({
        title: `Failed to ${pmsId ? "update" : "create"} PMS`,
        description: error instanceof Error ? error.message : "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <CardHeader>
          <CardTitle>{pmsId ? "Edit PMS" : "Create New PMS"}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">PMS Name</Label>
              <Input
                id="name"
                placeholder="Enter PMS name"
                {...register("name")}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="provider">Provider</Label>
              <Input
                id="provider"
                placeholder="Enter provider name"
                {...register("provider")}
                className={errors.provider ? "border-red-500" : ""}
              />
              {errors.provider && <p className="text-red-500 text-sm">{errors.provider.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="strategy">Strategy</Label>
              <Input
                id="strategy"
                placeholder="Enter strategy name"
                {...register("strategy")}
                className={errors.strategy ? "border-red-500" : ""}
              />
              {errors.strategy && <p className="text-red-500 text-sm">{errors.strategy.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="aum">AUM (₹ Cr)</Label>
              <Input
                id="aum"
                type="number"
                placeholder="Enter AUM in crores"
                {...register("aum")}
                className={errors.aum ? "border-red-500" : ""}
              />
              {errors.aum && <p className="text-red-500 text-sm">{errors.aum.message}</p>}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Returns (%)</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="oneMonth">1 Month</Label>
                <Input
                  id="oneMonth"
                  type="number"
                  step="0.01"
                  placeholder="1M returns"
                  {...register("returns.oneMonth")}
                  className={errors.returns?.oneMonth ? "border-red-500" : ""}
                />
                {errors.returns?.oneMonth && <p className="text-red-500 text-sm">{errors.returns.oneMonth.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="threeMonths">3 Months</Label>
                <Input
                  id="threeMonths"
                  type="number"
                  step="0.01"
                  placeholder="3M returns"
                  {...register("returns.threeMonths")}
                  className={errors.returns?.threeMonths ? "border-red-500" : ""}
                />
                {errors.returns?.threeMonths && (
                  <p className="text-red-500 text-sm">{errors.returns.threeMonths.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="sixMonths">6 Months</Label>
                <Input
                  id="sixMonths"
                  type="number"
                  step="0.01"
                  placeholder="6M returns"
                  {...register("returns.sixMonths")}
                  className={errors.returns?.sixMonths ? "border-red-500" : ""}
                />
                {errors.returns?.sixMonths && (
                  <p className="text-red-500 text-sm">{errors.returns.sixMonths.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="oneYear">1 Year</Label>
                <Input
                  id="oneYear"
                  type="number"
                  step="0.01"
                  placeholder="1Y returns"
                  {...register("returns.oneYear")}
                  className={errors.returns?.oneYear ? "border-red-500" : ""}
                />
                {errors.returns?.oneYear && <p className="text-red-500 text-sm">{errors.returns.oneYear.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="threeYears">3 Years</Label>
                <Input
                  id="threeYears"
                  type="number"
                  step="0.01"
                  placeholder="3Y returns"
                  {...register("returns.threeYears")}
                  className={errors.returns?.threeYears ? "border-red-500" : ""}
                />
                {errors.returns?.threeYears && (
                  <p className="text-red-500 text-sm">{errors.returns.threeYears.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="fiveYears">5 Years</Label>
                <Input
                  id="fiveYears"
                  type="number"
                  step="0.01"
                  placeholder="5Y returns"
                  {...register("returns.fiveYears")}
                  className={errors.returns?.fiveYears ? "border-red-500" : ""}
                />
                {errors.returns?.fiveYears && (
                  <p className="text-red-500 text-sm">{errors.returns.fiveYears.message}</p>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="riskProfile">Risk Profile</Label>
              <Select
                defaultValue={defaultValues?.riskProfile || "Medium"}
                onValueChange={(value) => setValue("riskProfile", value as "Low" | "Medium" | "High" | "Very High")}
              >
                <SelectTrigger id="riskProfile" className={errors.riskProfile ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select risk profile" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Low">Low</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Very High">Very High</SelectItem>
                </SelectContent>
              </Select>
              {errors.riskProfile && <p className="text-red-500 text-sm">{errors.riskProfile.message}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="minInvestment">Minimum Investment</Label>
              <Input
                id="minInvestment"
                placeholder="e.g., ₹50 Lakhs"
                {...register("minInvestment")}
                className={errors.minInvestment ? "border-red-500" : ""}
              />
              {errors.minInvestment && <p className="text-red-500 text-sm">{errors.minInvestment.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              placeholder="Enter PMS description"
              {...register("description")}
              className={errors.description ? "border-red-500" : ""}
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" type="button" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
              </>
            ) : pmsId ? (
              "Update PMS"
            ) : (
              "Create PMS"
            )}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
