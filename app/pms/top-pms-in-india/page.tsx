import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp, Shield, DollarSign, Award, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Top PMS in India | Best Portfolio Management Services",
  description:
    "Explore the best performing Portfolio Management Services (PMS) in India, their strategies, performance, and minimum investment requirements.",
}

export default function TopPMSInIndiaPage() {
  return (
    <div className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Top PMS in India as on 31/05/2025
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-xl text-muted-foreground">
          Discover the best performing PMS providers in India, their investment strategies, performance, and minimum
          investment requirements.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/pms/what-is-pms">Learn About PMS</Link>
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Leading PMS Providers in India</h2>
        <Tabs defaultValue="equity" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="equity">Equity PMS</TabsTrigger>
            <TabsTrigger value="debt">Debt PMS</TabsTrigger>
            <TabsTrigger value="multi">Multi-Asset PMS</TabsTrigger>
          </TabsList>
          <TabsContent value="equity" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* HDFC Securities PMS */}
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>HDFC Securities PMS</CardTitle>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                      Top Rated
                    </Badge>
                  </div>
                  <CardDescription>Diversified Portfolio - Equity</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <span className="text-sm font-medium">1 Month Return</span>
                      <div className="font-semibold text-green-600">2.23%</div>
                    </div>
                    <div>
                      <span className="text-sm font-medium">1 Year Return</span>
                      <div className="font-semibold text-green-600">13.53%</div>
                    </div>
                    <div>
                      <span className="text-sm font-medium">5 Year Return</span>
                      <div className="font-semibold text-green-600">33.74%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Motilal Oswal PMS */}
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Motilal Oswal PMS</CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
                    >
                      High Returns
                    </Badge>
                  </div>
                  <CardDescription>Focussed opportunity strategy</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <span className="text-sm font-medium">1 Month Return</span>
                      <div className="font-semibold text-green-600">9.91%</div>
                    </div>
                    <div>
                      <span className="text-sm font-medium">1 Year Return</span>
                      <div className="font-semibold text-green-600">15.35%</div>
                    </div>
                    <div>
                      <span className="text-sm font-medium">5 Year Return</span>
                      <div className="font-semibold text-green-600">41.58%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Geojit Financial Services Ltd */}
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Geojit Financial Services Ltd</CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300"
                    >
                      Consistent
                    </Badge>
                  </div>
                  <CardDescription>ADVANTAGE PORTFOLIO</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <span className="text-sm font-medium">1 Month Return</span>
                      <div className="font-semibold text-green-600">9.75%</div>
                    </div>
                    <div>
                      <span className="text-sm font-medium">1 Year Return</span>
                      <div className="font-semibold text-green-600">4.13%</div>
                    </div>
                    <div>
                      <span className="text-sm font-medium">5 Year Return</span>
                      <div className="font-semibold text-green-600">30.04%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* ASK Investment Managers */}
              <Card className="flex flex-col filter blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>ASK Investment Managers</CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
                    >
                      Premium
                    </Badge>
                  </div>
                  <CardDescription>Indian Entrepreneurship Strategy</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">3-Year Returns</span>
                      <span className="font-semibold text-green-600">19.8%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">5-Year Returns</span>
                      <span className="font-semibold text-green-600">16.2%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Min. Investment</span>
                      <span className="font-semibold">₹50 Lakhs</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <TrendingUp className="mr-2 h-5 w-5 text-purple-600" />
                      <span className="text-sm">Focus on entrepreneur-driven businesses with high growth</span>
                    </div>
                    <div className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-purple-600" />
                      <span className="text-sm">Rigorous risk management framework</span>
                    </div>
                    <div className="flex items-start">
                      <Award className="mr-2 h-5 w-5 text-purple-600" />
                      <span className="text-sm">One of India's largest PMS providers by AUM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Marcellus Investment Managers */}
              <Card className="flex flex-col filter blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Marcellus Investment</CardTitle>
                    <Badge variant="outline" className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
                      Innovative
                    </Badge>
                  </div>
                  <CardDescription>Consistent Compounders Strategy</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">3-Year Returns</span>
                      <span className="font-semibold text-green-600">22.5%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">5-Year Returns</span>
                      <span className="font-semibold text-green-600">18.3%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Min. Investment</span>
                      <span className="font-semibold">₹50 Lakhs</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <TrendingUp className="mr-2 h-5 w-5 text-red-600" />
                      <span className="text-sm">Focus on companies with clean accounting and strong cash flows</span>
                    </div>
                    <div className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-red-600" />
                      <span className="text-sm">Concentrated portfolio of 10-15 high-quality companies</span>
                    </div>
                    <div className="flex items-start">
                      <Award className="mr-2 h-5 w-5 text-red-600" />
                      <span className="text-sm">Led by renowned investment author Saurabh Mukherjea</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sundaram Alternates */}
              <Card className="flex flex-col filter blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Sundaram Alternates</CardTitle>
                    <Badge variant="outline" className="bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300">
                      Balanced
                    </Badge>
                  </div>
                  <CardDescription>Mid & Small Cap Strategy</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">3-Year Returns</span>
                      <span className="font-semibold text-green-600">20.1%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">5-Year Returns</span>
                      <span className="font-semibold text-green-600">15.7%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Min. Investment</span>
                      <span className="font-semibold">₹50 Lakhs</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <TrendingUp className="mr-2 h-5 w-5 text-teal-600" />
                      <span className="text-sm">Focus on emerging mid and small-cap companies</span>
                    </div>
                    <div className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-teal-600" />
                      <span className="text-sm">Research-driven approach to identify future leaders</span>
                    </div>
                    <div className="flex items-start">
                      <Award className="mr-2 h-5 w-5 text-teal-600" />
                      <span className="text-sm">Strong track record in discovering multi-baggers</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="debt" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 filter blur-sm">
              {/* ICICI Prudential PMS */}
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>ICICI Prudential PMS</CardTitle>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                      Top Rated
                    </Badge>
                  </div>
                  <CardDescription>Fixed Income Strategy</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">3-Year Returns</span>
                      <span className="font-semibold text-green-600">8.2%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">5-Year Returns</span>
                      <span className="font-semibold text-green-600">7.5%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Min. Investment</span>
                      <span className="font-semibold">₹50 Lakhs</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <TrendingUp className="mr-2 h-5 w-5 text-blue-600" />
                      <span className="text-sm">Focus on high-quality debt instruments</span>
                    </div>
                    <div className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-blue-600" />
                      <span className="text-sm">Conservative approach with emphasis on capital protection</span>
                    </div>
                    <div className="flex items-start">
                      <Award className="mr-2 h-5 w-5 text-blue-600" />
                      <span className="text-sm">Strong credit research team</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Kotak Mahindra PMS */}
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Kotak Mahindra PMS</CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300"
                    >
                      Stable
                    </Badge>
                  </div>
                  <CardDescription>Corporate Bond Strategy</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">3-Year Returns</span>
                      <span className="font-semibold text-green-600">7.8%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">5-Year Returns</span>
                      <span className="font-semibold text-green-600">7.2%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Min. Investment</span>
                      <span className="font-semibold">₹50 Lakhs</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <TrendingUp className="mr-2 h-5 w-5 text-amber-600" />
                      <span className="text-sm">Focus on high-grade corporate bonds</span>
                    </div>
                    <div className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-amber-600" />
                      <span className="text-sm">Active duration management based on interest rate outlook</span>
                    </div>
                    <div className="flex items-start">
                      <Award className="mr-2 h-5 w-5 text-amber-600" />
                      <span className="text-sm">Consistent performance across interest rate cycles</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Aditya Birla Sun Life PMS */}
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Aditya Birla Sun Life</CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300"
                    >
                      Reliable
                    </Badge>
                  </div>
                  <CardDescription>Structured Debt Strategy</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">3-Year Returns</span>
                      <span className="font-semibold text-green-600">8.5%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">5-Year Returns</span>
                      <span className="font-semibold text-green-600">7.8%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Min. Investment</span>
                      <span className="font-semibold">₹50 Lakhs</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <TrendingUp className="mr-2 h-5 w-5 text-green-600" />
                      <span className="text-sm">Diversified portfolio of structured debt instruments</span>
                    </div>
                    <div className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-green-600" />
                      <span className="text-sm">Focus on secured debt with strong collateral</span>
                    </div>
                    <div className="flex items-start">
                      <Award className="mr-2 h-5 w-5 text-green-600" />
                      <span className="text-sm">Experienced team with strong credit assessment capabilities</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="multi" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 filter blur-sm">
              {/* Edelweiss PMS */}
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Edelweiss PMS</CardTitle>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                      Top Rated
                    </Badge>
                  </div>
                  <CardDescription>Multi-Asset Allocation Strategy</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">3-Year Returns</span>
                      <span className="font-semibold text-green-600">14.2%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">5-Year Returns</span>
                      <span className="font-semibold text-green-600">12.5%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Min. Investment</span>
                      <span className="font-semibold">₹50 Lakhs</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <TrendingUp className="mr-2 h-5 w-5 text-blue-600" />
                      <span className="text-sm">Dynamic allocation across equity, debt, and alternatives</span>
                    </div>
                    <div className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-blue-600" />
                      <span className="text-sm">Risk-adjusted approach to asset allocation</span>
                    </div>
                    <div className="flex items-start">
                      <Award className="mr-2 h-5 w-5 text-blue-600" />
                      <span className="text-sm">Strong track record of downside protection</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* IIFL Wealth PMS */}
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>IIFL Wealth PMS</CardTitle>
                    <Badge
                      variant="outline"
                      className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
                    >
                      Premium
                    </Badge>
                  </div>
                  <CardDescription>Multi-Asset Opportunities Strategy</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">3-Year Returns</span>
                      <span className="font-semibold text-green-600">15.8%</span>
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
                      <TrendingUp className="mr-2 h-5 w-5 text-purple-600" />
                      <span className="text-sm">Tactical allocation across multiple asset classes</span>
                    </div>
                    <div className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-purple-600" />
                      <span className="text-sm">Opportunistic approach to capture market inefficiencies</span>
                    </div>
                    <div className="flex items-start">
                      <Award className="mr-2 h-5 w-5 text-purple-600" />
                      <span className="text-sm">Access to exclusive investment opportunities</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Axis PMS */}
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Axis PMS</CardTitle>
                    <Badge variant="outline" className="bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-300">
                      Balanced
                    </Badge>
                  </div>
                  <CardDescription>Balanced Advantage Strategy</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">3-Year Returns</span>
                      <span className="font-semibold text-green-600">13.5%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">5-Year Returns</span>
                      <span className="font-semibold text-green-600">11.8%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Min. Investment</span>
                      <span className="font-semibold">₹50 Lakhs</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <TrendingUp className="mr-2 h-5 w-5 text-teal-600" />
                      <span className="text-sm">Dynamic allocation between equity and debt</span>
                    </div>
                    <div className="flex items-start">
                      <Shield className="mr-2 h-5 w-5 text-teal-600" />
                      <span className="text-sm">Model-based approach to asset allocation</span>
                    </div>
                    <div className="flex items-start">
                      <Award className="mr-2 h-5 w-5 text-teal-600" />
                      <span className="text-sm">Focus on risk-adjusted returns</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* How to Choose a PMS */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">How to Choose the Right PMS Provider</h2>
        <div className="rounded-lg border p-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-semibold">Key Factors to Consider</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <DollarSign className="mr-2 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Performance Track Record</p>
                    <p className="text-sm text-muted-foreground">
                      Evaluate the historical performance of the PMS across different market cycles, not just during
                      bull markets.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="mr-2 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Investment Philosophy</p>
                    <p className="text-sm text-muted-foreground">
                      Ensure the PMS provider's investment philosophy aligns with your financial goals and risk
                      tolerance.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="mr-2 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Risk Management Approach</p>
                    <p className="text-sm text-muted-foreground">
                      Understand how the PMS manages risk and protects capital during market downturns.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="mr-2 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Team Experience</p>
                    <p className="text-sm text-muted-foreground">
                      Assess the experience and expertise of the portfolio management team and their stability.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Additional Considerations</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <DollarSign className="mr-2 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Fee Structure</p>
                    <p className="text-sm text-muted-foreground">
                      Compare the fixed and performance-based fees across different PMS providers and understand their
                      impact on returns.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="mr-2 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Transparency & Reporting</p>
                    <p className="text-sm text-muted-foreground">
                      Evaluate the quality and frequency of portfolio reports and the transparency in communication.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="mr-2 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Exit Options</p>
                    <p className="text-sm text-muted-foreground">
                      Understand the lock-in period, exit load, and the process for withdrawing your investment.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="mr-2 h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Customization Options</p>
                    <p className="text-sm text-muted-foreground">
                      Check if the PMS offers customization based on your specific requirements and constraints.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NRI Section */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">PMS for NRI Investors</h2>
        <div className="rounded-lg bg-gradient-to-r from-indigo-50 to-blue-50 p-8 dark:from-indigo-950 dark:to-blue-950">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-semibold">PMS Investment for NRIs</h3>
              <p className="mb-4">
                Non-Resident Indians (NRIs) can invest in Portfolio Management Services in India, subject to compliance
                with FEMA regulations and KYC requirements. PMS offers NRIs an excellent opportunity to participate in
                India's growth story while benefiting from professional management.
              </p>
              <h4 className="mb-2 font-medium">Key Requirements for NRI Investors:</h4>
              <ul className="mb-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                  <span>NRO/NRE/FCNR bank account in India</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                  <span>PIS (Portfolio Investment Scheme) permission from the bank</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                  <span>KYC documents including passport, visa, and overseas address proof</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                  <span>Tax identification details (PAN card)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">Benefits for NRI Investors</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <TrendingUp className="mr-2 h-5 w-5 text-indigo-600" />
                  <div>
                    <p className="font-medium">Exposure to India's Growth Story</p>
                    <p className="text-sm">
                      Access to one of the world's fastest-growing economies with professional management
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Shield className="mr-2 h-5 w-5 text-indigo-600" />
                  <div>
                    <p className="font-medium">Hassle-Free Investment Management</p>
                    <p className="text-sm">Professional management without requiring day-to-day involvement</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <DollarSign className="mr-2 h-5 w-5 text-indigo-600" />
                  <div>
                    <p className="font-medium">Potential for Higher Returns</p>
                    <p className="text-sm">
                      Opportunity to earn higher returns compared to traditional NRI investments
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="mr-2 h-5 w-5 text-indigo-600" />
                  <div>
                    <p className="font-medium">Portfolio Diversification</p>
                    <p className="text-sm">Diversify global investments with exposure to Indian markets</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Invest in a Top-Performing PMS?</h2>
          <p className="mb-6 text-lg">
            Our team of expert advisors can help you select the right PMS provider based on your financial goals, risk
            appetite, and investment horizon.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10" asChild>
              <Link href="/pms/pms-faq">Explore PMS FAQs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
