"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  Shield,
  TrendingUp,
  Users,
  Briefcase,
  LineChart,
  Lock,
  Scale,
  FileText,
  X,
  Check,
  HelpCircle,
  Clock,
  Receipt,
  Target,
  UserCheck,
  Wallet,
  FolderSearch,
  ClipboardCheck,
  Banknote,
  Activity,
  Search,
  PieChart,
  PhoneCall,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import PieChart3D from "@/components/charts/pie-chart-3d"
import AnimationWrapper from "@/components/animation-wrapper"
import { ParallaxSection } from "@/components/parallax-section"
import { Building, BarChart4 } from "lucide-react"
import { CalendlyButton } from "@/components/calendly-button"

export default function WhatIsAIFPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Ensure GSAP is available
    if (typeof window !== "undefined" && window.gsap) {
      gsap.registerPlugin(ScrollTrigger)

      // Add a small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        // Animate the hero section
        gsap.from(".hero-content", {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
        })

        // Animate the benefits section
        const benefitCards = benefitsRef.current?.querySelectorAll(".benefit-card")
        if (benefitCards) {
          gsap.from(benefitCards, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: benefitsRef.current,
              start: "top 80%",
            },
          })
        }
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [])

  // Sample data for pie chart
  const aifAllocationData = [
    { label: "Private Equity", value: 35, color: "#3b82f6" },
    { label: "Venture Capital", value: 25, color: "#10b981" },
    { label: "Hedge Funds", value: 20, color: "#f59e0b" },
    { label: "Real Estate", value: 15, color: "#8b5cf6" },
    { label: "Others", value: 5, color: "#6b7280" },
  ]

  return (
    <div ref={pageRef} className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28 lg:py-36 z-10">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#051230] via-[#071a45] to-[#051230] z-0">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400 via-indigo-500 to-[#051230]"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 z-0">
          {/* Animated circles */}
          <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 opacity-10 blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-[10%] w-96 h-96 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 opacity-10 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

          {/* Glass cards */}
          <div className="absolute top-1/4 right-[5%] w-40 h-40 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 rotate-12 hidden lg:block"></div>
          <div className="absolute bottom-1/4 left-[5%] w-32 h-32 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 -rotate-12 hidden lg:block"></div>
        </div>

        <div className="container-custom relative z-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm text-blue-200 backdrop-blur-md border border-white/20">
              <span className="animate-pulse mr-2">•</span> Sophistication in Investment
            </div>

            <h1 className="hero-content text-4xl font-bold md:text-5xl lg:text-7xl bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-sm mb-8">
              Alternative{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                Investment
              </span>{" "}
              Funds
            </h1>

            <p className="hero-content mt-6 text-lg text-blue-100/90 md:text-xl max-w-3xl mx-auto leading-relaxed">
              Elite investment vehicles designed for sophisticated investors seeking exposure to unique opportunities
              beyond traditional markets.
            </p>

            <div className="hero-content mt-12 flex flex-wrap justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#0a2b63] to-[#1a4b98] text-white hover:from-[#0d3577] hover:to-[#1d54a9] border-none font-medium shadow-lg shadow-[#051230]/30 px-8"
                asChild
              >
                <Link href="/aif/who-should-invest">
                  Who Should Invest <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Feature highlights */}
            <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-[#051230]/40 p-4 backdrop-blur-sm border border-white/10">
                <div className="flex items-center justify-center">
                  <div className="rounded-lg bg-[#0a2b63]/50 p-2">
                    <Briefcase className="h-5 w-5 text-blue-300" />
                  </div>
                  <span className="ml-2 text-blue-100">≥ ₹1 Crore Entry</span>
                </div>
              </div>

              <div className="rounded-xl bg-[#051230]/40 p-4 backdrop-blur-sm border border-white/10">
                <div className="flex items-center justify-center">
                  <div className="rounded-lg bg-[#0a2b63]/50 p-2">
                    <Shield className="h-5 w-5 text-blue-300" />
                  </div>
                  <span className="ml-2 text-blue-100">SEBI Regulated</span>
                </div>
              </div>

              <div className="rounded-xl bg-[#051230]/40 p-4 backdrop-blur-sm border border-white/10">
                <div className="flex items-center justify-center">
                  <div className="rounded-lg bg-[#0a2b63]/50 p-2">
                    <TrendingUp className="h-5 w-5 text-blue-300" />
                  </div>
                  <span className="ml-2 text-blue-100">Professional Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto fill-white">
            <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <style jsx>{`
          .bg-grid-pattern {
            background-image: 
              linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-size: 40px 40px;
          }
        `}</style>
      </section>

      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 right-10 w-32 h-32 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 border border-white/10 rounded-full"></div>
        <div className="absolute top-40 left-20 w-24 h-24 border border-white/10 rounded-full"></div>
      </div>

      {/* Understanding AIF Section */}
      <ParallaxSection className="py-12 md:py-16 bg-white" speed={0.1} direction="up">
        <div className="container-custom">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2">
            <AnimationWrapper animation="slide-in-left">
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">What Are AIFs?</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-base sm:text-lg">
                    In Simple Terms: An Alternative Investment Fund (AIF) is a professionally managed pool of capital
                    regulated by SEBI. Unlike typical mutual funds, AIFs invest in non-traditional assets that include:
                  </p>
                  <ul className="space-y-3 ml-4 sm:ml-6 list-disc">
                    <li className="text-sm sm:text-base">
                      <span className="font-medium">Private Equity & Venture Capital:</span> Investing in unlisted
                      companies—from startups to growth-stage enterprises—where early entry can capture significant
                      value creation.
                    </li>
                    <li className="text-sm sm:text-base">
                      <span className="font-medium">Structured Credit:</span> Custom debt instruments (e.g., mezzanine
                      financing) offering predictable income streams and senior-secured positions in the capital
                      structure.
                    </li>
                    <li className="text-sm sm:text-base">
                      <span className="font-medium">Real Estate:</span> Direct or joint-venture investments in
                      commercial, residential, or development projects, tapping into rental yield and property
                      appreciation.
                    </li>
                    <li className="text-sm sm:text-base">
                      <span className="font-medium">Hedge & Arbitrage Strategies:</span> Market-neutral or directional
                      approaches—long-short equity, merger arbitrage, volatility trading—to smooth returns when public
                      markets fluctuate.
                    </li>
                    <li className="text-sm sm:text-base">
                      <span className="font-medium">Special Situations:</span> Turnaround scenarios and distressed debt
                      acquisitions, where active management can unlock hidden value.
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Why It Matters</h3>
                    <p className="text-sm sm:text-base">
                      Public markets often reflect crowded, efficient pricing. AIFs step into under-researched or
                      illiquid opportunities, potentially enhancing overall returns and reducing correlation to stock
                      indices.
                    </p>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100">
                  <h3 className="text-lg sm:text-xl font-bold mb-4">Key Characteristics</h3>
                  <ul className="space-y-3 grid sm:grid-cols-2 gap-3">
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Professional Management</span> – Expert teams managing specialized
                        investment strategies
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">High Minimum Investment</span> – ₹1 crore minimum investment
                        requirement
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Regulatory Oversight</span> – SEBI-regulated investment vehicle
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Diverse Strategies</span> – Access to multiple alternative
                        investment opportunities
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="slide-in-right" className="flex flex-col justify-center">
              <div className="rounded-lg overflow-hidden mb-8">
                <img
                  src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Alternative Investments"
                  className="w-full h-auto rounded-lg shadow-lg object-cover aspect-[16/10] sm:aspect-auto"
                />
              </div>
              <div className="bg-slate-50 p-4 sm:p-6 rounded-lg border border-slate-100">
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-center">Sample AIF Asset Allocation</h3>
                <div className="aspect-square max-w-[300px] mx-auto">
                  <PieChart3D data={aifAllocationData} height={300} />
                </div>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs sm:text-sm">
                  {aifAllocationData.map((item) => (
                    <div key={item.label} className="flex items-center">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                      <span>
                        {item.label}: {item.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </ParallaxSection>

      {/* Key Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Glassmorphic background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl mb-4 bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
              Key Benefits of AIFs
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {/* Access to Exclusive Deals */}
            <div className="group h-full">
              <div className="h-full p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Access to Exclusive Deals</h3>
                </div>
                <p className="text-slate-300 leading-relaxed flex-grow">
                  AIFs connect you with pre‑IPO rounds, off‑market real estate developments, and bespoke credit
                  transactions—opportunities not offered on public exchanges.
                </p>
              </div>
            </div>

            {/* Enhanced Diversification */}
            <div className="group h-full">
              <div className="h-full p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-green-500/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <LineChart className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Portfolio Diversification</h3>
                </div>
                <p className="text-slate-300 leading-relaxed flex-grow">
                  Private assets provide low correlation with traditional investments, offering true diversification and
                  reducing overall portfolio volatility.
                </p>
              </div>
            </div>

            {/* Customizable Investment Strategies */}
            <div className="group h-full">
              <div className="h-full p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Customizable Strategies</h3>
                </div>
                <p className="text-slate-300 leading-relaxed flex-grow">
                  Tailor your investment approach with strategies ranging from conservative debt funds to aggressive
                  venture capital opportunities.
                </p>
              </div>
            </div>

            {/* Active Risk Management */}
            <div className="group h-full">
              <div className="h-full p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Risk Management</h3>
                </div>
                <p className="text-slate-300 leading-relaxed flex-grow">
                  Professional managers employ sophisticated hedging and portfolio protection strategies to safeguard
                  investments during market volatility.
                </p>
              </div>
            </div>

            {/* Tax Planning */}
            <div className="group h-full">
              <div className="h-full p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Scale className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Tax Efficiency</h3>
                </div>
                <p className="text-slate-300 leading-relaxed flex-grow">
                  Benefit from pass-through taxation in Category I & II AIFs, enabling strategic timing of capital gains
                  realization for optimal tax planning.
                </p>
              </div>
            </div>

            {/* Professional Management */}
            <div className="group h-full">
              <div className="h-full p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/10 flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-rose-500/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <BarChart4 className="w-8 h-8 text-rose-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">Expert Management</h3>
                </div>
                <p className="text-slate-300 leading-relaxed flex-grow">
                  Access seasoned investment professionals with deep sector expertise and proven track records in
                  specialized investment strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Understanding the Risks</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Being informed about potential risks is crucial for making sound investment decisions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Investment Risks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Illiquidity Risk</span> – AIFs typically have 3–7 year lock-ins
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Valuation Risk</span> – Private investments lack daily pricing
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Manager Risk</span> – Performance depends on manager skill
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Risk Mitigation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Due Diligence</span> – Thorough manager and strategy evaluation
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Diversification</span> – Spread investments across strategies
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Monitoring</span> – Regular portfolio and performance review
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Complementation Section */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-2">How AIFs Complement Your Portfolio</h2>
            <p className="text-lg text-muted-foreground">
              Visualize your portfolio as a three-pillar structure for optimal diversification
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card className="overflow-hidden hover-lift border-t-4 border-t-blue-500">
              <CardHeader className="text-center pb-2">
                <div className="mb-4 mx-auto">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto">
                    <BarChart3 className="h-8 w-8 text-blue-500" />
                  </div>
                </div>
                <CardTitle className="text-xl">Public Markets</CardTitle>
                <CardDescription className="text-base">Stocks & Bonds</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2">
                  <p className="text-muted-foreground">High liquidity but often move in tandem with economic cycles</p>
                  <ul className="text-sm text-muted-foreground mt-4 text-left space-y-2">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-500" />
                      Daily trading flexibility
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-500" />
                      Market-driven valuations
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-500" />
                      Traditional asset exposure
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-lift border-t-4 border-t-primary relative">
              <div className="absolute top-2 right-2 bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                Core Alternative
              </div>
              <CardHeader className="text-center pb-2">
                <div className="mb-4 mx-auto">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl">Private Markets</CardTitle>
                <CardDescription className="text-base">AIFs</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    Low-volume, high-information barriers—offering unique opportunities
                  </p>
                  <ul className="text-sm text-muted-foreground mt-4 text-left space-y-2">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Access to pre-IPO deals
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Real asset opportunities
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-primary" />
                      Specialized credit access
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-lift border-t-4 border-t-purple-500">
              <CardHeader className="text-center pb-2">
                <div className="mb-4 mx-auto">
                  <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto">
                    <LineChart className="h-8 w-8 text-purple-500" />
                  </div>
                </div>
                <CardTitle className="text-xl">Alternative Strategies</CardTitle>
                <CardDescription className="text-base">Hedge/Arbitrage</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2">
                  <p className="text-muted-foreground">Tactical overlays for protection and enhanced returns</p>
                  <ul className="text-sm text-muted-foreground mt-4 text-left space-y-2">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-purple-500" />
                      Market-neutral strategies
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-purple-500" />
                      Volatility management
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-purple-500" />
                      Risk-adjusted returns
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Card className="overflow-hidden border-none shadow-lg bg-gradient-to-r from-slate-900 to-slate-800 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Strategic AIF Allocation: 10–20%+</CardTitle>
                <CardDescription className="text-slate-300">
                  Optimize your portfolio with strategic AIF allocation for enhanced performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-8 md:grid-cols-3">
                  <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                    <div className="mb-4">
                      <TrendingUp className="h-8 w-8 text-blue-400" />
                    </div>
                    <h4 className="font-medium text-lg mb-2">Smooth Return Volatility</h4>
                    <p className="text-slate-300 text-sm">
                      Private assets decouple from daily market swings, providing stability during turbulent times
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                    <div className="mb-4">
                      <BarChart3 className="h-8 w-8 text-green-400" />
                    </div>
                    <h4 className="font-medium text-lg mb-2">Capture Unique Upside</h4>
                    <p className="text-slate-300 text-sm">
                      Early-stage investments and specialized credit strategies can significantly outperform public
                      benchmarks
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
                    <div className="mb-4">
                      <Shield className="h-8 w-8 text-purple-400" />
                    </div>
                    <h4 className="font-medium text-lg mb-2">Portfolio Resilience</h4>
                    <p className="text-slate-300 text-sm">
                      Hedge strategies actively manage drawdowns and protect capital during bear markets
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              * Allocation percentages should be tailored to individual investment goals and risk tolerance
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Taxation Section */}
      <section className="section-padding relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="absolute top-60 -left-40 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"></div>
          <div className="absolute bottom-20 right-60 h-80 w-80 rounded-full bg-primary/20 blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-2 bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
              Understanding AIF Taxation in India
            </h2>
            <p className="text-lg text-slate-300">
              Category-Wise Structure, Investor Implications & SEBI Guidelines (2025)
            </p>
          </div>

          <div className="mt-8 max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/10 shadow-2xl">
              <p className="text-slate-300 leading-relaxed">
                Taxation plays a crucial role in the decision-making process for investors evaluating Alternative
                Investment Funds (AIFs). While AIFs offer access to specialized strategies—ranging from private credit
                and real estate to long-short equity and venture capital—their tax treatment varies significantly
                depending on the category.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Category I */}
            <div className="group h-full">
              <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-blue-500/20 hover:-translate-y-1 h-full flex flex-col">
                <div className="mb-6">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 backdrop-blur-2xl group-hover:bg-blue-500/30 transition-colors duration-300">
                    <FileText className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Category I AIFs 🔹</h3>
                  <p className="text-sm text-slate-400">
                    Venture capital funds, SME funds, social venture funds, infrastructure funds
                  </p>
                </div>
                <div className="space-y-4 flex-grow">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-lg h-[90px] flex flex-col justify-center">
                    <h4 className="font-medium text-white mb-2">Tax Structure</h4>
                    <p className="text-sm text-slate-300">Pass-through taxation</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-lg h-[90px] flex flex-col justify-center">
                    <h4 className="font-medium text-white mb-2">Who pays tax</h4>
                    <p className="text-sm text-slate-300">Investors, not the fund</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-lg">
                    <h4 className="font-medium text-white mb-2">Income types taxed</h4>
                    <ul className="text-sm text-slate-300 space-y-2 ml-4 list-disc marker:text-blue-400">
                      <li>Capital gains taxed as per holding period</li>
                      <li>Dividend/interest income taxed at applicable slab rates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Category II */}
            <div className="group h-full">
              <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1 h-full flex flex-col">
                <div className="mb-6">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 backdrop-blur-2xl group-hover:bg-primary/30 transition-colors duration-300">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Category II AIFs 🔹</h3>
                  <p className="text-sm text-slate-400">
                    Private credit funds, real estate funds, long-only equity funds, structured strategies
                  </p>
                </div>
                <div className="space-y-4 flex-grow">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-lg h-[90px] flex flex-col justify-center">
                    <h4 className="font-medium text-white mb-2">Tax Structure</h4>
                    <p className="text-sm text-slate-300">Pass-through taxation (like Category I)</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-lg h-[90px] flex flex-col justify-center">
                    <h4 className="font-medium text-white mb-2">Who pays tax</h4>
                    <p className="text-sm text-slate-300">Investors bear tax liability</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-lg">
                    <h4 className="font-medium text-white mb-2">Key points</h4>
                    <ul className="text-sm text-slate-300 space-y-2 ml-4 list-disc marker:text-primary">
                      <li>Taxation depends on the nature of underlying income</li>
                      <li>Investors receive audited statements annually for tax filing</li>
                      <li>Fund does not pay tax at the entity level</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Category III */}
            <div className="group h-full">
              <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20 hover:-translate-y-1 h-full flex flex-col">
                <div className="mb-6">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20 backdrop-blur-2xl group-hover:bg-purple-500/30 transition-colors duration-300">
                    <FileText className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Category III AIFs 🔹</h3>
                  <p className="text-sm text-slate-400">
                    Long-short equity funds, hedge funds, trading-oriented strategies
                  </p>
                </div>
                <div className="space-y-4 flex-grow">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-lg h-[90px] flex flex-col justify-center">
                    <h4 className="font-medium text-white mb-2">Tax Structure</h4>
                    <p className="text-sm text-slate-300">Taxed at the fund level</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-lg h-[90px] flex flex-col justify-center">
                    <h4 className="font-medium text-white mb-2">Who pays tax</h4>
                    <p className="text-sm text-slate-300">Fund pays tax before distribution</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-lg">
                    <h4 className="font-medium text-white mb-2">Applicable rate</h4>
                    <ul className="text-sm text-slate-300 space-y-2 ml-4 list-disc marker:text-purple-400">
                      <li>Business income taxed at the highest marginal rate</li>
                      <li>No pass-through status—investors receive post-tax returns</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6">Important Tax Considerations</h3>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-lg flex items-start gap-4 group hover:bg-white/10 transition-colors duration-300">
                    <div className="mt-1">
                      <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                        <ArrowRight className="h-4 w-4 text-blue-400" />
                      </div>
                    </div>
                    <p className="text-sm text-slate-300">
                      Different AIF categories have distinct tax implications that can significantly impact your returns
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-lg flex items-start gap-4 group hover:bg-white/10 transition-colors duration-300">
                    <div className="mt-1">
                      <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <p className="text-sm text-slate-300">
                      Consider consulting with tax professionals to understand the implications for your specific
                      situation
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-lg flex items-start gap-4 group hover:bg-white/10 transition-colors duration-300">
                    <div className="mt-1">
                      <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300">
                        <ArrowRight className="h-4 w-4 text-purple-400" />
                      </div>
                    </div>
                    <p className="text-sm text-slate-300">
                      Regular updates to tax laws may affect AIF taxation - stay informed about the latest regulations
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 backdrop-blur-lg flex items-start gap-4 group hover:bg-white/10 transition-colors duration-300">
                    <div className="mt-1">
                      <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300">
                        <ArrowRight className="h-4 w-4 text-green-400" />
                      </div>
                    </div>
                    <p className="text-sm text-slate-300">
                      Keep detailed records of your AIF investments for tax filing purposes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Tax Concepts Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-100/50 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-100/50 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl mb-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Key Tax Concepts for AIF Investors
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {/* Pass-Through & TDS Card */}
            <Card className="overflow-hidden border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <CardTitle className="text-slate-900">Pass-Through Status & TDS</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                    </div>
                    <p className="text-slate-600">
                      Category I and II AIFs enjoy pass-through status, meaning income is taxed only in the hands of
                      investors—not at the fund level.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                    </div>
                    <p className="text-slate-600">
                      Investors may receive income after tax deduction at source (TDS), based on their residency and
                      income type.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Capital Gains Card */}
            <Card className="overflow-hidden border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-slate-900">Capital Gains Classification</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <p className="text-slate-600">
                      Short-term vs. long-term treatment depends on asset class and holding period. For listed equity: 1
                      year is long-term; for debt/unlisted: 3 years.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                    </div>
                    <p className="text-slate-600">
                      Different tax rates apply based on the classification and type of gains realized.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Filing Requirements Card */}
            <Card className="overflow-hidden border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2">
              <CardHeader className="border-b border-slate-100 bg-slate-50/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-slate-900">Filing Requirements</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                      </div>
                      <p className="text-slate-600">
                        Annual tax returns must include all AIF income and distributions received during the financial
                        year.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                      </div>
                      <p className="text-slate-600">
                        Maintain detailed records of investment dates, cost basis, and distributions for accurate tax
                        reporting.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pro Tax Tip */}
          <div className="max-w-4xl mx-auto mt-8">
            <Card className="overflow-hidden border-slate-200 shadow-lg bg-gradient-to-r from-slate-50 to-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                      <Scale className="w-6 h-6 text-amber-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Pro Tax Tip</h3>
                    <p className="text-slate-600">
                      Always consult your tax advisor to understand how AIF income will impact your specific tax
                      liability, especially if you invest through a company, LLP, trust, or hold NRI status.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Regulatory & Compliance Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl mb-4 bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
              Regulatory & Compliance Notes
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mt-1">
                    <Scale className="w-4 h-4 text-blue-400" />
                  </div>
                  <p className="text-slate-300">
                    AIFs are governed by the SEBI (Alternative Investment Funds) Regulations, 2012
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mt-1">
                    <FileText className="w-4 h-4 text-blue-400" />
                  </div>
                  <p className="text-slate-300">
                    Taxation follows the Income Tax Act, 1961, and is subject to updates in the Union Budget
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mt-1">
                    <Building className="w-4 h-4 text-blue-400" />
                  </div>
                  <p className="text-slate-300">
                    NRIs and FPIs investing in AIFs must follow FEMA and RBI reporting guidelines, and may face
                    additional withholding taxes
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Review Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl mb-4 bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
              Who Should Review AIF Taxation?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-3">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">HNIs & UHNIs</h3>
              <p className="text-slate-300">Looking to evaluate post-tax returns and portfolio efficiency</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">NRIs & Family Offices</h3>
              <p className="text-slate-300">With cross-border or customized structures</p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Financial Advisors</h3>
              <p className="text-slate-300">
                Chartered Accountants and wealth advisors planning for asset allocation and compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tip Section */}
      <section className="py-16 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-amber-500/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-amber-500/20 hover:border-amber-500/30 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <Scale className="w-6 h-6 text-amber-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Pro Tip</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Always consult your tax advisor to understand how AIF income will impact your specific tax
                    liability, especially if you invest through a company, LLP, trust, or hold NRI status.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Risks Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 font-space-grotesk">
              Understanding the Risks in an AIF
            </h2>
            <p className="text-lg text-muted-foreground font-poppins">
              Key risks to consider before investing in Alternative Investment Funds
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Illiquidity Risk Card */}
              <div className="group h-[420px]">
                <div className="relative w-full h-full rounded-[20px] bg-white overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(0,0,0,0.1)] hover:shadow-[0_0_40px_rgba(0,0,0,0.15)]">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-blue-600/20 opacity-60"></div>
                  <div className="relative h-full p-8 flex flex-col">
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/95 flex items-center justify-center shadow-lg">
                        <Clock className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 font-space-grotesk">Illiquidity Risk</h3>
                    <div className="flex-grow">
                      <p className="text-slate-600 leading-relaxed font-poppins">
                        AIFs typically have 3–7 year lock‑ins. Plan your cash needs and ensure this capital commitment
                        aligns with your broader financial goals.
                      </p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-500 font-poppins">Lock-in Period</span>
                        <span className="text-sm font-bold text-blue-600 font-poppins">3-7 Years</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Valuation Risk Card */}
              <div className="group h-[420px]">
                <div className="relative w-full h-full rounded-[20px] bg-white overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(0,0,0,0.1)] hover:shadow-[0_0_40px_rgba(0,0,0,0.15)]">
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-purple-600/20 opacity-60"></div>
                  <div className="relative h-full p-8 flex flex-col">
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/95 flex items-center justify-center shadow-lg">
                        <BarChart3 className="w-8 h-8 text-purple-600" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 font-space-grotesk">
                      Valuation & Market Risk
                    </h3>
                    <div className="flex-grow">
                      <p className="text-slate-600 leading-relaxed font-poppins">
                        Private investments lack daily pricing. NAV updates are quarterly—while valuations can shift
                        materially during economic cycles.
                      </p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-500 font-poppins">Valuation Frequency</span>
                        <span className="text-sm font-bold text-purple-600 font-poppins">Quarterly</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Manager Selection Risk Card */}
              <div className="group h-[420px]">
                <div className="relative w-full h-full rounded-[20px] bg-white overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(0,0,0,0.1)] hover:shadow-[0_0_40px_rgba(0,0,0,0.15)]">
                  <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-amber-600/20 opacity-60"></div>
                  <div className="relative h-full p-8 flex flex-col">
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/95 flex items-center justify-center shadow-lg">
                        <Users className="w-8 h-8 text-amber-600" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 font-space-grotesk">
                      Manager Selection Risk
                    </h3>
                    <div className="flex-grow">
                      <p className="text-slate-600 leading-relaxed font-poppins">
                        Performance hinges on the skill and integrity of the fund manager. Conduct multi‑stage due
                        diligence on track record.
                      </p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-500 font-poppins">Due Diligence</span>
                        <span className="text-sm font-bold text-amber-600 font-poppins">Critical</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Concentration Risk Card */}
              <div className="group h-[420px]">
                <div className="relative w-full h-full rounded-[20px] bg-white overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(0,0,0,0.1)] hover:shadow-[0_0_40px_rgba(0,0,0,0.15)]">
                  <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-red-600/20 opacity-60"></div>
                  <div className="relative h-full p-8 flex flex-col">
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/95 flex items-center justify-center shadow-lg">
                        <PieChart className="w-8 h-8 text-red-600" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 font-space-grotesk">Concentration Risk</h3>
                    <div className="flex-grow">
                      <p className="text-slate-600 leading-relaxed font-poppins">
                        Single‑sector or thematic AIFs concentrate exposure. Diversify across managers, categories, and
                        geographies.
                      </p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-500 font-poppins">Diversification</span>
                        <span className="text-sm font-bold text-red-600 font-poppins">Essential</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regulatory Risk Card */}
              <div className="group h-[420px]">
                <div className="relative w-full h-full rounded-[20px] bg-white overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(0,0,0,0.1)] hover:shadow-[0_0_40px_rgba(0,0,0,0.15)]">
                  <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-emerald-600/20 opacity-60"></div>
                  <div className="relative h-full p-8 flex flex-col">
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/95 flex items-center justify-center shadow-lg">
                        <Scale className="w-8 h-8 text-emerald-600" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 font-space-grotesk">Regulatory & Tax Risk</h3>
                    <div className="flex-grow">
                      <p className="text-slate-600 leading-relaxed font-poppins">
                        SEBI regulations and tax treatments can evolve. Stay informed and work with legal and tax
                        advisors.
                      </p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-500 font-poppins">Compliance</span>
                        <span className="text-sm font-bold text-emerald-600 font-poppins">Mandatory</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Risk Mitigation Card */}
              <div className="group h-[420px]">
                <div className="relative w-full h-full rounded-[20px] bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 overflow-hidden transition-all duration-300 hover:scale-[1.02] shadow-[0_0_30px_rgba(0,0,0,0.1)] hover:shadow-[0_0_40px_rgba(0,0,0,0.15)]">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-primary/20 opacity-60"></div>
                  <div className="relative h-full p-8 flex flex-col">
                    <div className="mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-white/95 flex items-center justify-center shadow-lg">
                        <Shield className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 font-space-grotesk">Risk Mitigation</h3>
                    <div className="flex-grow">
                      <p className="text-slate-600 leading-relaxed font-poppins">
                        At Bharat Alternates, we employ rigorous due diligence, manager diversification, and continuous
                        risk monitoring.
                      </p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-500 font-poppins">Monitoring</span>
                        <span className="text-sm font-bold text-primary font-poppins">Continuous</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AIF Categories Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 font-space-grotesk text-white">
              AIF Categories Explained
            </h2>
            <p className="text-lg text-slate-300 font-poppins">Understanding Category I, II, and III AIFs in India</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
            {/* Category I Card */}
            <div className="group relative bg-white rounded-[20px] grid grid-cols-[64px_1fr] overflow-hidden hover:shadow-2xl transition-all duration-300 min-h-[500px]">
              {/* Vertical Title */}
              <div className="bg-blue-500/10 flex items-center">
                <div className="writing-mode-vertical text-2xl font-bold text-blue-600 p-4 tracking-wider">
                  Category I AIF
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-lg font-medium text-blue-600 uppercase tracking-wider">Growth & Impact</div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2 uppercase tracking-wider text-sm">Focus</h4>
                    <p className="text-slate-600">
                      Startups, early-stage ventures, social enterprises, SMEs, and infrastructure projects.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2 uppercase tracking-wider text-sm">Ideal For</h4>
                    <p className="text-slate-600">Impact investors, long-term investors, ESG-focused portfolios.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2 uppercase tracking-wider text-sm">Key Benefits</h4>
                    <p className="text-slate-600">
                      Government-supported sectors, long-term capital appreciation, developmental impact.
                    </p>
                  </div>
                </div>

                {/* Hover Button */}
                <div className="absolute bottom-4 right-4 overflow-hidden">
                  <div className="flex items-center bg-blue-600 text-white px-3 py-2 rounded-full shadow-lg group-hover:w-auto transition-all duration-300 w-[22px] hover:shadow-blue-500/25">
                    <ArrowRight className="w-5 h-5 flex-shrink-0" />
                    <span className="whitespace-nowrap pl-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-2 transition-all duration-300 delay-100 uppercase text-sm tracking-wider">
                      Learn More
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Category II Card */}
            <div className="group relative bg-white rounded-[20px] grid grid-cols-[64px_1fr] overflow-hidden hover:shadow-2xl transition-all duration-300 min-h-[500px]">
              {/* Vertical Title */}
              <div className="bg-purple-500/10 flex items-center">
                <div className="writing-mode-vertical text-2xl font-bold text-purple-600 p-4 tracking-wider">
                  Category II AIF
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-4">
                    <Building className="w-8 h-8 text-purple-600" />
                  </div>
                  <div className="text-lg font-medium text-purple-600 uppercase tracking-wider">
                    Private Equity & Real Estate
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2 uppercase tracking-wider text-sm">Focus</h4>
                    <p className="text-slate-600">
                      Private equity, debt funds, structured credit, real estate, mezzanine financing.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2 uppercase tracking-wider text-sm">Ideal For</h4>
                    <p className="text-slate-600">
                      Wealth builders and institutions looking for mid-to-long-term returns.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2 uppercase tracking-wider text-sm">Key Benefits</h4>
                    <p className="text-slate-600">
                      Diversified exposure, lower volatility, access to unlisted market opportunities.
                    </p>
                  </div>
                </div>

                {/* Hover Button */}
                <div className="absolute bottom-4 right-4 overflow-hidden">
                  <div className="flex items-center bg-purple-600 text-white px-3 py-2 rounded-full shadow-lg group-hover:w-auto transition-all duration-300 w-[22px] hover:shadow-purple-500/25">
                    <ArrowRight className="w-5 h-5 flex-shrink-0" />
                    <span className="whitespace-nowrap pl-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-2 transition-all duration-300 delay-100 uppercase text-sm tracking-wider">
                      Learn More
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Category III Card */}
            <div className="group relative bg-white rounded-[20px] grid grid-cols-[64px_1fr] overflow-hidden hover:shadow-2xl transition-all duration-300 min-h-[500px]">
              {/* Vertical Title */}
              <div className="bg-emerald-500/10 flex items-center">
                <div className="writing-mode-vertical text-2xl font-bold text-emerald-600 p-4 tracking-wider">
                  Category III AIF
                </div>
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-4">
                    <LineChart className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="text-lg font-medium text-emerald-600 uppercase tracking-wider">Hedge Funds</div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2 uppercase tracking-wider text-sm">Focus</h4>
                    <p className="text-slate-600">
                      Hedge funds, long-short equity, arbitrage, derivatives, algorithmic trading.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2 uppercase tracking-wider text-sm">Ideal For</h4>
                    <p className="text-slate-600">
                      Sophisticated investors looking for uncorrelated alpha and tactical returns.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 mb-2 uppercase tracking-wider text-sm">Key Benefits</h4>
                    <p className="text-slate-600">
                      Flexibility to use leverage and derivatives, potential for high returns.
                    </p>
                  </div>
                </div>

                {/* Hover Button */}
                <div className="absolute bottom-4 right-4 overflow-hidden">
                  <div className="flex items-center bg-emerald-600 text-white px-3 py-2 rounded-full shadow-lg group-hover:w-auto transition-all duration-300 w-[22px] hover:shadow-emerald-500/25">
                    <ArrowRight className="w-5 h-5 flex-shrink-0" />
                    <span className="whitespace-nowrap pl-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 translate-x-2 transition-all duration-300 delay-100 uppercase text-sm tracking-wider">
                      Learn More
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pro Tip Box */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <HelpCircle className="w-6 h-6 text-amber-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Pro Tip</h3>
                  <p className="text-slate-300">
                    Each AIF category has unique risk-return dynamics and lock-in periods. Investors must assess their
                    risk tolerance, liquidity needs, and investment horizon before committing capital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .writing-mode-vertical {
            writing-mode: vertical-rl;
            text-orientation: mixed;
          }
        `}</style>
      </section>

      {/* AIF vs PMS vs Mutual Funds Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">AIF vs PMS vs Mutual Funds</h2>
            <p className="text-lg text-muted-foreground">A Detailed Comparison for Indian HNIs & NRIs</p>
          </div>

          <div className="max-w-[1200px] mx-auto overflow-x-auto">
            <div className="min-w-[1000px]">
              <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="bg-slate-900 text-white p-6 rounded-xl">
                  <h3 className="text-lg font-semibold">Feature</h3>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl">
                  <h3 className="text-lg font-semibold">AIF</h3>
                  <p className="text-sm text-blue-100">Alternative Investment Funds</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl">
                  <h3 className="text-lg font-semibold">PMS</h3>
                  <p className="text-sm text-purple-100">Portfolio Management Services</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-6 rounded-xl">
                  <h3 className="text-lg font-semibold">Mutual Funds</h3>
                  <p className="text-sm text-emerald-100">Traditional Investment</p>
                </div>
              </div>

              {/* Table Rows */}
              <div className="space-y-4">
                {/* Minimum Investment */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-slate-100 p-6 rounded-xl">
                    <h4 className="font-medium">Minimum Investment</h4>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <p>₹1 crore</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <p>₹50 lakhs</p>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-xl">
                    <p>₹500 onwards</p>
                  </div>
                </div>

                {/* Investor Type */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-slate-100 p-6 rounded-xl">
                    <h4 className="font-medium">Investor Type</h4>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <p>HNIs, NRIs, UHNIs, Family Offices, Corporates</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <p>HNIs, NRIs, Business Owners</p>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-xl">
                    <p>Retail investors, beginners, salaried professionals</p>
                  </div>
                </div>

                {/* Investment Strategy */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-slate-100 p-6 rounded-xl">
                    <h4 className="font-medium">Investment Strategy</h4>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <p>Private Equity, Hedge Funds, Real Estate, Debt, Long-Short, Arbitrage</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <p>Multi-cap, Focused Equity, Thematic, Contra</p>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-xl">
                    <p>Large Cap, Mid Cap, Hybrid, Debt</p>
                  </div>
                </div>

                {/* Customization */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-slate-100 p-6 rounded-xl">
                    <h4 className="font-medium">Customization</h4>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <p>Low (pooled fund)</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <p>High (personalized portfolio)</p>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-xl">
                    <p>None (one-size-fits-all)</p>
                  </div>
                </div>

                {/* Leverage */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-slate-100 p-6 rounded-xl">
                    <h4 className="font-medium">Leverage</h4>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <p>Allowed in Category III</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <p>Not allowed</p>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-xl">
                    <p>Not allowed</p>
                  </div>
                </div>

                {/* Liquidity */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-slate-100 p-6 rounded-xl">
                    <h4 className="font-medium">Liquidity</h4>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <p>Low (3–5 years lock-in)</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <p>Moderate (depends on securities)</p>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-xl">
                    <p>High (open-ended funds allow daily redemption)</p>
                  </div>
                </div>

                {/* Taxation */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-slate-100 p-6 rounded-xl">
                    <h4 className="font-medium">Taxation</h4>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <p>Category I & II: Pass-through; Category III: Taxed at fund level</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <p>Capital gains taxed at investor level</p>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-xl">
                    <p>Capital gains taxed based on holding period</p>
                  </div>
                </div>

                {/* Transparency */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-slate-100 p-6 rounded-xl">
                    <h4 className="font-medium">Transparency</h4>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <p>Periodic NAV updates and fund fact sheets</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <p>Full portfolio visibility, trade-level reporting</p>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-xl">
                    <p>High; daily NAVs, monthly factsheets</p>
                  </div>
                </div>

                {/* Reporting */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-slate-100 p-6 rounded-xl">
                    <h4 className="font-medium">Reporting</h4>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <p>Quarterly/Semi-Annual</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <p>Monthly/Quarterly, detailed</p>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-xl">
                    <p>Monthly factsheets, daily NAV</p>
                  </div>
                </div>

                {/* Fee Structure */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-slate-100 p-6 rounded-xl">
                    <h4 className="font-medium">Fee Structure</h4>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <p>Typically 2% management fee + 20% profit share (Category II & III)</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <p>1.5–2.5% with performance-linked models</p>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-xl">
                    <p>Low; ~0.5%–2.5% expense ratio</p>
                  </div>
                </div>

                {/* SEBI Regulations */}
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-slate-100 p-6 rounded-xl">
                    <h4 className="font-medium">SEBI Regulations</h4>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <p>SEBI (AIF) Regulations, 2012</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <p>SEBI (PMS) Regulations, 2020</p>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-xl">
                    <p>SEBI (Mutual Funds) Regulations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AIF Myths Busted Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-blue-100/30 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-emerald-100/30 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl text-slate-900">
              Debunking Common Myths About AIFs
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600">
              Let's separate fact from fiction in Alternative Investment Funds
            </p>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Mobile View - Stacked Cards */}
            <div className="md:hidden space-y-6">
              {/* Myth 1 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="bg-blue-50 p-4 border-b border-blue-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">Only for Startups</p>
                      <p className="text-xs text-blue-700/70 mt-1 italic">
                        "AIFs only invest in high-risk startup ventures"
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <p className="text-sm text-slate-600">
                      AIFs span multiple categories with diverse strategies: from early-stage ventures to real estate,
                      private credit, and hedge funds.
                    </p>
                  </div>
                </div>
              </div>

              {/* Myth 2 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="bg-blue-50 p-4 border-b border-blue-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">Unregulated Investments</p>
                      <p className="text-xs text-blue-700/70 mt-1 italic">
                        "AIFs operate without regulatory oversight"
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <p className="text-sm text-slate-600">
                      AIFs are strictly regulated by SEBI with mandatory registration, compliance audits, and regular
                      reporting requirements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Myth 3 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="bg-blue-50 p-4 border-b border-blue-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">Tax-Free Returns</p>
                      <p className="text-xs text-blue-700/70 mt-1 italic">"All AIF investments enjoy tax exemptions"</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <p className="text-sm text-slate-600">
                      Different AIF categories have distinct tax treatments. Category I & II follow pass-through
                      taxation, while Category III is taxed at fund level.
                    </p>
                  </div>
                </div>
              </div>

              {/* Myth 4 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="bg-blue-50 p-4 border-b border-blue-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">Limited to Ultra HNIs</p>
                      <p className="text-xs text-blue-700/70 mt-1 italic">"Only billionaires can invest in AIFs"</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <p className="text-sm text-slate-600">
                      While AIFs require a minimum investment of ₹1 crore, they are accessible to HNIs, family offices,
                      and institutional investors seeking sophisticated investment options.
                    </p>
                  </div>
                </div>
              </div>

              {/* Myth 5 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="bg-blue-50 p-4 border-b border-blue-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">Always High Risk</p>
                      <p className="text-xs text-blue-700/70 mt-1 italic">"All AIFs are extremely risky investments"</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <p className="text-sm text-slate-600">
                      Risk levels vary by category and strategy. While some AIFs focus on high-risk opportunities,
                      others pursue more conservative strategies in real estate or debt.
                    </p>
                  </div>
                </div>
              </div>

              {/* Myth 6 */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="bg-blue-50 p-4 border-b border-blue-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                      <X className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-900">No Liquidity</p>
                      <p className="text-xs text-blue-700/70 mt-1 italic">"AIF investments are completely illiquid"</p>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <p className="text-sm text-slate-600">
                      While AIFs typically have lock-in periods, many offer periodic redemption windows. Category III
                      AIFs, in particular, may offer better liquidity options.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop View - Table Layout */}
            <div className="hidden md:block overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md">
              <div className="grid grid-cols-12 border-b border-blue-100 bg-blue-50 text-sm font-semibold text-blue-900">
                <div className="col-span-4 p-4 text-center border-r border-blue-100">Myth</div>
                <div className="col-span-8 p-4 text-center">Fact</div>
              </div>

              {/* Myth 1 */}
              <div className="grid grid-cols-12 border-b border-slate-200">
                <div className="col-span-4 flex items-center gap-3 p-4 bg-blue-50/50">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-900">Only for Startups</p>
                    <p className="text-sm text-blue-700/70 mt-1 italic">
                      "AIFs only invest in high-risk startup ventures"
                    </p>
                  </div>
                </div>
                <div className="col-span-8 flex items-center gap-3 p-4 border-l border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-slate-600">
                    AIFs span multiple categories with diverse strategies: from early-stage ventures to real estate,
                    private credit, and hedge funds.
                  </p>
                </div>
              </div>

              {/* Myth 2 */}
              <div className="grid grid-cols-12 border-b border-slate-200">
                <div className="col-span-4 flex items-center gap-3 p-4 bg-blue-50/50">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-900">Unregulated Investments</p>
                    <p className="text-sm text-blue-700/70 mt-1 italic">"AIFs operate without regulatory oversight"</p>
                  </div>
                </div>
                <div className="col-span-8 flex items-center gap-3 p-4 border-l border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-slate-600">
                    AIFs are strictly regulated by SEBI with mandatory registration, compliance audits, and regular
                    reporting requirements.
                  </p>
                </div>
              </div>

              {/* Myth 3 */}
              <div className="grid grid-cols-12 border-b border-slate-200">
                <div className="col-span-4 flex items-center gap-3 p-4 bg-blue-50/50">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-900">Tax-Free Returns</p>
                    <p className="text-sm text-blue-700/70 mt-1 italic">"All AIF investments enjoy tax exemptions"</p>
                  </div>
                </div>
                <div className="col-span-8 flex items-center gap-3 p-4 border-l border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-slate-600">
                    Different AIF categories have distinct tax treatments. Category I & II follow pass-through taxation,
                    while Category III is taxed at fund level.
                  </p>
                </div>
              </div>

              {/* Myth 4 */}
              <div className="grid grid-cols-12 border-b border-slate-200">
                <div className="col-span-4 flex items-center gap-3 p-4 bg-blue-50/50">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-900">Limited to Ultra HNIs</p>
                    <p className="text-sm text-blue-700/70 mt-1 italic">"Only billionaires can invest in AIFs"</p>
                  </div>
                </div>
                <div className="col-span-8 flex items-center gap-3 p-4 border-l border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-slate-600">
                    While AIFs require a minimum investment of ₹1 crore, they are accessible to HNIs, family offices,
                    and institutional investors seeking sophisticated investment options.
                  </p>
                </div>
              </div>

              {/* Myth 5 */}
              <div className="grid grid-cols-12 border-b border-slate-200">
                <div className="col-span-4 flex items-center gap-3 p-4 bg-blue-50/50">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-900">Always High Risk</p>
                    <p className="text-sm text-blue-700/70 mt-1 italic">"All AIFs are extremely risky investments"</p>
                  </div>
                </div>
                <div className="col-span-8 flex items-center gap-3 p-4 border-l border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-slate-600">
                    Risk levels vary by category and strategy. While some AIFs focus on high-risk opportunities, others
                    pursue more conservative strategies in real estate or debt.
                  </p>
                </div>
              </div>

              {/* Myth 6 */}
              <div className="grid grid-cols-12">
                <div className="col-span-4 flex items-center gap-3 p-4 bg-blue-50/50">
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="font-medium text-blue-900">No Liquidity</p>
                    <p className="text-sm text-blue-700/70 mt-1 italic">"AIF investments are completely illiquid"</p>
                  </div>
                </div>
                <div className="col-span-8 flex items-center gap-3 p-4 border-l border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-slate-600">
                    While AIFs typically have lock-in periods, many offer periodic redemption windows. Category III
                    AIFs, in particular, may offer better liquidity options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Glassmorphic background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl mb-4 bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
              How to Start Investing in AIFs
            </h2>
            <p className="text-lg text-slate-300">Follow these steps to begin your AIF investment journey</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 rounded-full"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Step 1: Assess Eligibility */}
                <div className="relative pl-12 group">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-blue-500/25">
                    <UserCheck className="w-4 h-4 text-white" />
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group-hover:translate-x-2">
                    <div className="flex items-center gap-3 mb-3">
                      <Wallet className="w-6 h-6 text-blue-400" />
                      <h3 className="text-xl font-semibold text-white">Assess Eligibility</h3>
                    </div>
                    <p className="text-slate-300">
                      Confirm the ₹1 crore minimum and accreditation status with your Distributor or advisor.
                    </p>
                  </div>
                </div>

                {/* Step 2: Define Objectives */}
                <div className="relative pl-12 group">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-indigo-500/25">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group-hover:translate-x-2">
                    <div className="flex items-center gap-3 mb-3">
                      <BarChart3 className="w-6 h-6 text-indigo-400" />
                      <h3 className="text-xl font-semibold text-white">Define Objectives</h3>
                    </div>
                    <p className="text-slate-300">
                      Clarify whether you seek growth, income, capital preservation, or impact.
                    </p>
                  </div>
                </div>

                {/* Step 3: Select Category & Funds */}
                <div className="relative pl-12 group">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-purple-500/25">
                    <Search className="w-4 h-4 text-white" />
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group-hover:translate-x-2">
                    <div className="flex items-center gap-3 mb-3">
                      <FolderSearch className="w-6 h-6 text-purple-400" />
                      <h3 className="text-xl font-semibold text-white">Select Category & Funds</h3>
                    </div>
                    <p className="text-slate-300">
                      Choose Category I, II, or III based on goals and lock‑in preference; review fund manager track
                      records.
                    </p>
                  </div>
                </div>

                {/* Step 4: Complete Documentation */}
                <div className="relative pl-12 group">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-pink-500/25">
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group-hover:translate-x-2">
                    <div className="flex items-center gap-3 mb-3">
                      <ClipboardCheck className="w-6 h-6 text-pink-400" />
                      <h3 className="text-xl font-semibold text-white">Complete Documentation & KYC</h3>
                    </div>
                    <p className="text-slate-300">
                      Submit PAN, Aadhaar, net‑worth certificate, FATCA forms if applicable.
                    </p>
                  </div>
                </div>

                {/* Step 5: Capital Commitment */}
                <div className="relative pl-12 group">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-amber-500/25">
                    <Banknote className="w-4 h-4 text-white" />
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group-hover:translate-x-2">
                    <div className="flex items-center gap-3 mb-3">
                      <Receipt className="w-6 h-6 text-amber-400" />
                      <h3 className="text-xl font-semibold text-white">Capital Commitment</h3>
                    </div>
                    <p className="text-slate-300">Transfer funds via lump‑sum or as per capital‑call schedule.</p>
                  </div>
                </div>

                {/* Step 6: Monitor & Engage */}
                <div className="relative pl-12 group">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-emerald-500/25">
                    <LineChart className="w-4 h-4 text-white" />
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group-hover:translate-x-2">
                    <div className="flex items-center gap-3 mb-3">
                      <Activity className="w-6 h-6 text-emerald-400" />
                      <h3 className="text-xl font-semibold text-white">Monitor & Engage</h3>
                    </div>
                    <p className="text-slate-300">
                      Review quarterly NAV statements, tag‑along exit windows, and attend periodic manager calls.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
        {/* Glassmorphic background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl mb-4 bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-300">Common questions about Alternative Investment Funds in India</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Q1 */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Can NRIs invest in AIFs?</h3>
                  <p className="text-slate-300">
                    Yes—NRIs can invest via NRE/NRO accounts under SEBI and FEMA regulations. The investment process
                    follows standard KYC norms with additional documentation requirements for foreign investors.
                  </p>
                </div>
              </div>
            </div>

            {/* Q2 */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">What is the typical lock‑in period?</h3>
                  <p className="text-slate-300">
                    AIFs generally require capital lock‑in of 3–7 years, varying by category. This longer horizon allows
                    fund managers to execute their investment strategy effectively and maximize potential returns.
                  </p>
                </div>
              </div>
            </div>

            {/* Q3 */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Receipt className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">How are AIF returns taxed?</h3>
                  <p className="text-slate-300">
                    Category I & II AIFs follow investor‑level pass‑through taxation, while Category III AIFs are taxed
                    at the fund level at Maximum Marginal Rate (MMR) with net distributions to investors. Consult a tax
                    advisor for specific implications.
                  </p>
                </div>
              </div>
            </div>

            {/* Q4 */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">How do I choose the right AIF?</h3>
                  <p className="text-slate-300">
                    Align your liquidity needs, risk tolerance, and investment goals with the fund's strategy and
                    manager credentials. Consider factors like investment horizon, sector focus, and past performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Take Action Section */}
      <section className="py-20 bg-slate-950 relative">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4 text-white">Take Action Today</h2>
                <p className="text-lg text-slate-200">
                  Diversifying into private markets through AIFs can enhance both risk management and return potential
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 mb-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-700 transition-colors duration-300">
                      <Lock className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Access to Exclusive Opportunities</h3>
                      <p className="text-slate-300">
                        Unlock premium investment options typically reserved for institutional investors.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-700 transition-colors duration-300">
                      <Users className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Professional Management</h3>
                      <p className="text-slate-300">Benefit from experienced teams with proven track records.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-700 transition-colors duration-300">
                      <LineChart className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Portfolio Diversification</h3>
                      <p className="text-slate-300">
                        Reduce overall portfolio risk through strategic asset allocation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-700 transition-colors duration-300">
                      <TrendingUp className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Superior Returns</h3>
                      <p className="text-slate-300">
                        Potential for higher risk-adjusted returns compared to traditional investments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center space-y-6">
                <CalendlyButton
                  variant="secondary"
                  size="lg"
                  className="bg-white hover:bg-white/90 text-slate-900 font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-white/25 transition-all duration-300"
                >
                  <div className="flex items-center">
                    <PhoneCall className="h-5 w-5 mr-2" />
                    Schedule a Consultation
                  </div>
                </CalendlyButton>
                <p className="text-slate-300 max-w-2xl mx-auto">
                  Connect with Bharat Alternates for a personalized consultation and discover the AIF strategies best
                  suited to your wealth goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
