"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  BarChart,
  Shield,
  TrendingUp,
  Briefcase,
  LineChart,
  Lock,
  Scale,
  Check,
  Clock,
  Target,
  Wallet,
  PieChart,
  DollarSign,
  Building,
  Percent
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendlyButton } from "@/components/calendly-button"

export default function UnlistedSharesPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Ensure GSAP is available
    if (typeof window !== "undefined") {
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

  return (
    <div ref={pageRef} className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28 lg:py-36 z-10">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#1e293b] z-0">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-400 via-indigo-500 to-[#1e293b]"></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 z-0">
          {/* Animated circles */}
          <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 opacity-10 blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-[10%] w-96 h-96 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 opacity-10 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm text-indigo-200 backdrop-blur-md border border-white/20">
              <span className="animate-pulse mr-2">•</span> Premium Investment Opportunity
            </div>

            <h1 className="hero-content text-4xl font-bold md:text-5xl lg:text-7xl bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent drop-shadow-sm mb-8">
              Unlisted{" "}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                Shares
              </span>{" "}
              for HNIs
            </h1>

            <p className="hero-content mt-6 text-lg text-indigo-100/90 md:text-xl max-w-3xl mx-auto leading-relaxed">
              Access high-potential private companies before they go public. Exclusive opportunities for wealth creation through carefully selected pre-IPO investments.
            </p>

            <div className="hero-content mt-12 flex flex-wrap justify-center gap-4">
              <CalendlyButton
                size="lg"
                className="bg-gradient-to-r from-[#4c1d95] to-[#6d28d9] text-white hover:from-[#5b21b6] hover:to-[#7c3aed] border-none font-medium shadow-lg shadow-[#1e293b]/30 px-8"
              >
                Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </CalendlyButton>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section ref={benefitsRef} className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Benefits of Unlisted Shares</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Unlock exclusive advantages that can significantly enhance your investment portfolio's performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="benefit-card border-none shadow-md hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <TrendingUp className="h-10 w-10 text-indigo-600 mb-2" />
                <CardTitle>Higher Growth Potential</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Access companies in their growth phase with potential for exponential returns compared to traditional investments
                </p>
              </CardContent>
            </Card>

            <Card className="benefit-card border-none shadow-md hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <DollarSign className="h-10 w-10 text-indigo-600 mb-2" />
                <CardTitle>Early-Entry Advantage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Invest at lower valuations before companies go public, maximizing your potential for substantial gains
                </p>
              </CardContent>
            </Card>

            <Card className="benefit-card border-none shadow-md hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <PieChart className="h-10 w-10 text-indigo-600 mb-2" />
                <CardTitle>Portfolio Diversification</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Add an uncorrelated asset class to your investment mix, reducing overall portfolio volatility
                </p>
              </CardContent>
            </Card>

            <Card className="benefit-card border-none shadow-md hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <Briefcase className="h-10 w-10 text-indigo-600 mb-2" />
                <CardTitle>Exclusive Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Gain access to private deals typically reserved for institutional investors and venture capitalists
                </p>
              </CardContent>
            </Card>

            <Card className="benefit-card border-none shadow-md hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <Shield className="h-10 w-10 text-indigo-600 mb-2" />
                <CardTitle>Reduced Market Volatility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Avoid the daily price fluctuations of public markets while focusing on long-term fundamental growth
                </p>
              </CardContent>
            </Card>

            <Card className="benefit-card border-none shadow-md hover:shadow-xl transition-shadow">
              <CardHeader className="pb-2">
                <Building className="h-10 w-10 text-indigo-600 mb-2" />
                <CardTitle>Strategic Company Selection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Invest in carefully vetted businesses with strong fundamentals and clear paths to liquidity
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Explore Unlisted Share Opportunities?</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-3xl mx-auto">
            Our team of investment experts will help you navigate the world of unlisted investments and build a high-growth portfolio tailored to your financial goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CalendlyButton size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50">
              Schedule a Consultation
            </CalendlyButton>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
