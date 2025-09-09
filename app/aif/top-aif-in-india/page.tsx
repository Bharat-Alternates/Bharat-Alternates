import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp, Shield, DollarSign, Award, ExternalLink, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Top AIF in India | Best Alternative Investment Funds",
  description:
    "Explore the best performing Alternative Investment Funds (AIF) in India, their strategies, performance, and minimum investment requirements.",
}

export default function TopAIFInIndiaPage() {
  return (
    <div className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Top Alternative Investment Funds in India
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground">
          Discover the best performing AIF providers in India, their investment strategies, performance, and minimum
          investment requirements.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/aif/what-is-aif">Learn About AIF</Link>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Leading AIF Providers in India</h2>
        <Tabs defaultValue="category1" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="category1">Category I AIF</TabsTrigger>
            <TabsTrigger value="category2">Category II AIF</TabsTrigger>
            <TabsTrigger value="category3">Category III AIF</TabsTrigger>
          </TabsList>
          <TabsContent value="category1" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* IIFL Special Opportunities Fund */}
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>IIFL Special Opportunities Fund</CardTitle>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                      Top Rated
                    </Badge>
                  </div>
                  <CardDescription>Venture Capital Fund</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">3-Year Returns</span>
                      <span className="font-semibold text-green-600">16.8%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">5-Year Returns</span>
                      <span className="font-semibold text-green-600">14.5%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Min. Investment</span>
                      <span className="font-semibold">₹1 Crore</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <TrendingUp className="mr-2 h-5 w-5 text-blue-600" />
                      <span className="text-sm">Invests in early-stage startups with high growth potential</span>
                    </div>
                    <div className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-blue-600" />
                      <span className="text-sm">Diversified portfolio across tech, healthcare, and fintech</span>
                    </div>
                    <div className="flex items-start">
                      <Award className="mr-2 h-5 w-5 text-blue-600" />
                      <span className="text-sm">Experienced team with strong due diligence process</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Chiratae Ventures */}
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Chiratae Ventures</CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
                    >
                      High Growth
                    </Badge>
                  </div>
                  <CardDescription>Early Stage VC Fund</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">3-Year Returns</span>
                      <span className="font-semibold text-green-600">19.2%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">5-Year Returns</span>
                      <span className="font-semibold text-green-600">17.1%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Min. Investment</span>
                      <span className="font-semibold">₹1 Crore</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <TrendingUp className="mr-2 h-5 w-5 text-amber-600" />
                      <span className="text-sm">Focus on consumer tech and enterprise technology</span>
                    </div>
                    <div className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-amber-600" />
                      <span className="text-sm">Robust portfolio management with active founder support</span>
                    </div>
                    <div className="flex items-start">
                      <Award className="mr-2 h-5 w-5 text-amber-600" />
                      <span className="text-sm">Multiple successful exits and IPOs</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Added new fund - Blume Ventures */}
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Blume Ventures</CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
                    >
                      Emerging
                    </Badge>
                  </div>
                  <CardDescription>Seed & Early Stage Fund</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">3-Year Returns</span>
                      <span className="font-semibold text-green-600">20.3%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">5-Year Returns</span>
                      <span className="font-semibold text-green-600">16.5%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Min. Investment</span>
                      <span className="font-semibold">₹1 Crore</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <TrendingUp className="mr-2 h-5 w-5 text-purple-600" />
                      <span className="text-sm">Focus on technology-enabled startups</span>
                    </div>
                    <div className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-purple-600" />
                      <span className="text-sm">Strong mentorship and ecosystem support</span>
                    </div>
                    <div className="flex items-start">
                      <Award className="mr-2 h-5 w-5 text-purple-600" />
                      <span className="text-sm">Portfolio includes several unicorns and successful exits</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="category2" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Kotak Optimus Fund */}
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Kotak Optimus Fund</CardTitle>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                      Top Rated
                    </Badge>
                  </div>
                  <CardDescription>Private Equity Fund</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">3-Year Returns</span>
                      <span className="font-semibold text-green-600">17.5%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">5-Year Returns</span>
                      <span className="font-semibold text-green-600">15.3%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Min. Investment</span>
                      <span className="font-semibold">₹1 Crore</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <TrendingUp className="mr-2 h-5 w-5 text-blue-600" />
                      <span className="text-sm">Invests in growth-stage private companies</span>
                    </div>
                    <div className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-blue-600" />
                      <span className="text-sm">Focused on consumer, financial services, and healthcare</span>
                    </div>
                    <div className="flex items-start">
                      <Award className="mr-2 h-5 w-5 text-blue-600" />
                      <span className="text-sm">Strong governance framework and risk management</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* HDFC Property Fund */}
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>HDFC Property Fund</CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300"
                    >
                      Consistent
                    </Badge>
                  </div>
                  <CardDescription>Real Estate Fund</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">3-Year Returns</span>
                      <span className="font-semibold text-green-600">14.8%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">5-Year Returns</span>
                      <span className="font-semibold text-green-600">13.2%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Min. Investment</span>
                      <span className="font-semibold">₹1 Crore</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <TrendingUp className="mr-2 h-5 w-5 text-green-600" />
                      <span className="text-sm">Invests in premium residential and commercial properties</span>
                    </div>
                    <div className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-green-600" />
                      <span className="text-sm">Focus on top tier cities with strong growth potential</span>
                    </div>
                    <div className="flex items-start">
                      <Award className="mr-2 h-5 w-5 text-green-600" />
                      <span className="text-sm">Consistent income generation through rental yields</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Added new fund - Multiples PE */}
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Multiples PE</CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
                    >
                      Premium
                    </Badge>
                  </div>
                  <CardDescription>Private Equity Growth Fund</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">3-Year Returns</span>
                      <span className="font-semibold text-green-600">18.7%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">5-Year Returns</span>
                      <span className="font-semibold text-green-600">16.2%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Min. Investment</span>
                      <span className="font-semibold">₹2 Crore</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <TrendingUp className="mr-2 h-5 w-5 text-indigo-600" />
                      <span className="text-sm">Focus on mid-market growth companies</span>
                    </div>
                    <div className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-indigo-600" />
                      <span className="text-sm">Sector-agnostic with emphasis on financial services and healthcare</span>
                    </div>
                    <div className="flex items-start">
                      <Award className="mr-2 h-5 w-5 text-indigo-600" />
                      <span className="text-sm">Led by experienced professionals with strong industry connections</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="category3" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Avendus Absolute Return Fund */}
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Avendus Absolute Return Fund</CardTitle>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                      Top Rated
                    </Badge>
                  </div>
                  <CardDescription>Long-Short Equity Strategy</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">3-Year Returns</span>
                      <span className="font-semibold text-green-600">18.2%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">5-Year Returns</span>
                      <span className="font-semibold text-green-600">15.9%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Min. Investment</span>
                      <span className="font-semibold">₹1 Crore</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <TrendingUp className="mr-2 h-5 w-5 text-blue-600" />
                      <span className="text-sm">Market-neutral strategy with low correlation to indices</span>
                    </div>
                    <div className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-blue-600" />
                      <span className="text-sm">Focus on capital preservation and consistent returns</span>
                    </div>
                    <div className="flex items-start">
                      <Award className="mr-2 h-5 w-5 text-blue-600" />
                      <span className="text-sm">Sophisticated risk management framework</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Motilal Oswal Long Short Fund */}
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Motilal Oswal Long Short Fund</CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
                    >
                      High Performance
                    </Badge>
                  </div>
                  <CardDescription>Multi-Strategy Hedge Fund</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">3-Year Returns</span>
                      <span className="font-semibold text-green-600">19.7%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">5-Year Returns</span>
                      <span className="font-semibold text-green-600">16.8%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Min. Investment</span>
                      <span className="font-semibold">₹1 Crore</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <TrendingUp className="mr-2 h-5 w-5 text-amber-600" />
                      <span className="text-sm">Combination of long-short and derivatives strategies</span>
                    </div>
                    <div className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-amber-600" />
                      <span className="text-sm">Aims to generate alpha across market conditions</span>
                    </div>
                    <div className="flex items-start">
                      <Award className="mr-2 h-5 w-5 text-amber-600" />
                      <span className="text-sm">Strong track record of outperforming benchmark indices</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Added new fund - DSP Blackrock Alternative Fund */}
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>DSP Alternates</CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300"
                    >
                      Low Volatility
                    </Badge>
                  </div>
                  <CardDescription>Multi-Strategy Fund</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">3-Year Returns</span>
                      <span className="font-semibold text-green-600">16.3%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">5-Year Returns</span>
                      <span className="font-semibold text-green-600">14.1%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Min. Investment</span>
                      <span className="font-semibold">₹1 Crore</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <TrendingUp className="mr-2 h-5 w-5 text-teal-600" />
                      <span className="text-sm">Specializes in low-volatility absolute return strategies</span>
                    </div>
                    <div className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-teal-600" />
                      <span className="text-sm">Employs quantitative models for market analysis</span>
                    </div>
                    <div className="flex items-start">
                      <Award className="mr-2 h-5 w-5 text-teal-600" />
                      <span className="text-sm">Consistent performance across different market cycles</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>What is the minimum investment amount for AIFs?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                As per SEBI regulations, the minimum investment amount for Alternative Investment Funds (AIFs) in India is ₹1 crore. However, some AIFs might have higher minimum investment requirements based on their strategy and target investors.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>What are the different categories of AIFs?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                SEBI classifies AIFs into three categories:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Category I: Includes venture capital funds, angel funds, social impact funds, and SME funds</li>
                <li>Category II: Includes private equity funds, debt funds, and real estate funds</li>
                <li>Category III: Includes hedge funds, PIPE funds, and strategy funds using complex trading strategies</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>What are the tax implications for AIF investments?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Tax treatment of AIF investments depends on the category, investment strategy, and holding period. Generally, for Category I and II AIFs, income is passed through to investors and taxed as per their applicable tax rates. For Category III AIFs, income is typically taxed at the fund level.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>How do AIFs differ from mutual funds?</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Unlike mutual funds, AIFs have higher minimum investment requirements, cater to sophisticated investors, can employ more complex strategies, have different regulatory frameworks, and often have longer lock-in periods. AIFs also have more flexibility in investment strategies compared to mutual funds.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mb-16 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">Ready to Explore AIF Investment Opportunities?</h2>
        <p className="mx-auto mb-6 max-w-2xl text-lg">
          Our expert team can help you navigate the world of alternative investments and find the right AIF strategy for your investment goals.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link href="/contact">Schedule a Free Consultation</Link>
        </Button>
      </section>
    </div>
  )
}
