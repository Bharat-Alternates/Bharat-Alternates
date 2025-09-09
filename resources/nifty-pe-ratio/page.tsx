"use client"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import InteractiveLineChart from "@/components/charts/interactive-line-chart"
import PieChart3D from "@/components/charts/pie-chart-3d"

export default function NiftyPERatioPage() {
  const [activeTab, setActiveTab] = useState<"1y" | "3y" | "5y" | "10y" | "all">("5y")
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animate the page content
    gsap.from(pageRef.current?.querySelectorAll(".animate-card"), {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    })
  }, [])

  // Sample data for the PE ratio chart
  const peRatioData = {
    "1y": [
      { label: "Jan", value: 22.5 },
      { label: "Feb", value: 23.1 },
      { label: "Mar", value: 24.2 },
      { label: "Apr", value: 25.6 },
      { label: "May", value: 24.8 },
      { label: "Jun", value: 23.9 },
      { label: "Jul", value: 22.7 },
      { label: "Aug", value: 21.8 },
      { label: "Sep", value: 22.3 },
      { label: "Oct", value: 23.5 },
      { label: "Nov", value: 24.1 },
      { label: "Dec", value: 23.8 },
    ],
    "3y": Array.from({ length: 36 }, (_, i) => {
      const month = i % 12
      const year = Math.floor(i / 12) + 2021
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      return {
        label: `${monthNames[month]} ${year}`,
        value: 20 + Math.sin(i * 0.3) * 5 + Math.random() * 2,
      }
    }),
    "5y": Array.from({ length: 60 }, (_, i) => {
      const month = i % 12
      const year = Math.floor(i / 12) + 2019
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      return {
        label: `${monthNames[month]} ${year}`,
        value: 18 + Math.sin(i * 0.2) * 7 + Math.random() * 2,
      }
    }),
    "10y": Array.from({ length: 120 }, (_, i) => {
      const month = i % 12
      const year = Math.floor(i / 12) + 2014
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      return {
        label: `${monthNames[month]} ${year}`,
        value: 15 + Math.sin(i * 0.1) * 10 + Math.random() * 2,
      }
    }),
    all: Array.from({ length: 240 }, (_, i) => {
      const month = i % 12
      const year = Math.floor(i / 12) + 2004
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      return {
        label: `${monthNames[month]} ${year}`,
        value: 12 + Math.sin(i * 0.05) * 14 + Math.random() * 2,
      }
    }),
  }

  // Sample data for sector allocation
  const sectorAllocationData = [
    { label: "Financial Services", value: 35, color: "#3b82f6" },
    { label: "IT", value: 18, color: "#10b981" },
    { label: "Oil & Gas", value: 12, color: "#f59e0b" },
    { label: "Consumer Goods", value: 10, color: "#ef4444" },
    { label: "Automobile", value: 8, color: "#8b5cf6" },
    { label: "Pharma", value: 7, color: "#ec4899" },
    { label: "Others", value: 10, color: "#6b7280" },
  ]

  // Sample data for market cap distribution
  const marketCapData = [
    { label: "Large Cap", value: 60, color: "#3b82f6" },
    { label: "Mid Cap", value: 30, color: "#10b981" },
    { label: "Small Cap", value: 10, color: "#f59e0b" },
  ]

  // Calculate current PE ratio stats
  const currentPE = peRatioData["1y"][peRatioData["1y"].length - 1].value
  const averagePE = 22.5
  const maxPE = 28.5
  const minPE = 16.8

  return (
    <div ref={pageRef} className="container-custom py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">Nifty PE Ratio Chart</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The Price to Earnings (PE) ratio is a key valuation metric that helps investors understand if the market is
          overvalued or undervalued. Track the historical Nifty PE ratio to make informed investment decisions.
        </p>

        <Card className="animate-card mb-8">
          <CardHeader>
            <CardTitle>Current Nifty PE Ratio</CardTitle>
            <CardDescription>Last updated: {new Date().toLocaleDateString()}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-muted-foreground">Current</p>
                <p className="text-3xl font-bold text-primary">{currentPE.toFixed(1)}</p>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-muted-foreground">Average (10Y)</p>
                <p className="text-3xl font-bold">{averagePE.toFixed(1)}</p>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-muted-foreground">Max (10Y)</p>
                <p className="text-3xl font-bold text-green-600">{maxPE.toFixed(1)}</p>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-muted-foreground">Min (10Y)</p>
                <p className="text-3xl font-bold text-red-600">{minPE.toFixed(1)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="animate-card mb-8">
          <CardHeader>
            <CardTitle>Historical Nifty PE Ratio</CardTitle>
            <CardDescription>Select a time period to view historical data</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="5y" onValueChange={(value) => setActiveTab(value as any)}>
              <TabsList className="mb-6">
                <TabsTrigger value="1y">1 Year</TabsTrigger>
                <TabsTrigger value="3y">3 Years</TabsTrigger>
                <TabsTrigger value="5y">5 Years</TabsTrigger>
                <TabsTrigger value="10y">10 Years</TabsTrigger>
                <TabsTrigger value="all">All Time</TabsTrigger>
              </TabsList>
              <TabsContent value="1y">
                <InteractiveLineChart
                  data={peRatioData["1y"]}
                  height={400}
                  title="Nifty PE Ratio - Last 12 Months"
                  yAxisLabel="PE Ratio"
                  xAxisLabel="Month"
                />
              </TabsContent>
              <TabsContent value="3y">
                <InteractiveLineChart
                  data={peRatioData["3y"]}
                  height={400}
                  title="Nifty PE Ratio - Last 3 Years"
                  yAxisLabel="PE Ratio"
                  xAxisLabel="Month"
                />
              </TabsContent>
              <TabsContent value="5y">
                <InteractiveLineChart
                  data={peRatioData["5y"]}
                  height={400}
                  title="Nifty PE Ratio - Last 5 Years"
                  yAxisLabel="PE Ratio"
                  xAxisLabel="Month"
                />
              </TabsContent>
              <TabsContent value="10y">
                <InteractiveLineChart
                  data={peRatioData["10y"]}
                  height={400}
                  title="Nifty PE Ratio - Last 10 Years"
                  yAxisLabel="PE Ratio"
                  xAxisLabel="Month"
                />
              </TabsContent>
              <TabsContent value="all">
                <InteractiveLineChart
                  data={peRatioData["all"]}
                  height={400}
                  title="Nifty PE Ratio - All Time"
                  yAxisLabel="PE Ratio"
                  xAxisLabel="Month"
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="animate-card">
            <CardHeader>
              <CardTitle>Nifty Sector Allocation</CardTitle>
              <CardDescription>Current sector weightage in Nifty 50</CardDescription>
            </CardHeader>
            <CardContent>
              <PieChart3D data={sectorAllocationData} height={350} />
            </CardContent>
          </Card>

          <Card className="animate-card">
            <CardHeader>
              <CardTitle>Market Cap Distribution</CardTitle>
              <CardDescription>Breakdown by market capitalization</CardDescription>
            </CardHeader>
            <CardContent>
              <PieChart3D data={marketCapData} height={350} />
            </CardContent>
          </Card>
        </div>

        <Card className="animate-card">
          <CardHeader>
            <CardTitle>Understanding PE Ratio</CardTitle>
            <CardDescription>How to use PE ratio for investment decisions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p>
                The Price to Earnings (PE) ratio is a valuation metric that compares a company's share price to its
                per-share earnings. For indices like Nifty, it represents the weighted average PE of all constituent
                stocks.
              </p>
              <h3 className="text-lg font-bold">How to interpret Nifty PE Ratio:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <span className="font-medium">High PE Ratio (Above 24):</span> Generally indicates an overvalued
                  market. Investors might consider reducing equity exposure or being selective with new investments.
                </li>
                <li>
                  <span className="font-medium">Average PE Ratio (20-24):</span> Suggests fair valuation. A balanced
                  investment approach is recommended.
                </li>
                <li>
                  <span className="font-medium">Low PE Ratio (Below 20):</span> May indicate an undervalued market,
                  potentially offering good buying opportunities for long-term investors.
                </li>
              </ul>
              <p>
                Remember that PE ratio should not be used in isolation. Consider other factors like earnings growth,
                interest rates, and overall economic conditions before making investment decisions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
