import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NewsletterDisplay } from "@/components/newsletter-display"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Newsletters | Bharat Alternates",
  description: "Stay updated with our latest PMS and AIF newsletters",
}

export default function NewslettersPage() {
  return (
    <div className="container mx-auto py-16">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Investment Newsletters</h1>
        <p className="text-lg text-muted-foreground">
          Stay updated with our latest insights on Portfolio Management Services and Alternative Investment Funds
        </p>
      </div>

      <Tabs defaultValue="pms" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="pms">PMS Newsletters</TabsTrigger>
          <TabsTrigger value="aif">AIF Newsletters</TabsTrigger>
        </TabsList>
        <TabsContent value="pms">
          <NewsletterDisplay type="PMS" />
        </TabsContent>
        <TabsContent value="aif">
          <NewsletterDisplay type="AIF" />
        </TabsContent>
      </Tabs>
    </div>
  )
}
