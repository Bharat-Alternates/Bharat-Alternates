"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import Image from "next/image"
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
  Check,
  Clock,
  Target,
  Wallet,
  PieChart,
  BarChart2,
  DollarSign,
  PiggyBank,
  Building,
  Percent,
  Calculator,
  CreditCard,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AnimationWrapper from "@/components/animation-wrapper"
import { ParallaxSection } from "@/components/parallax-section"
import { CalendlyButton } from "@/components/calendly-button"
import { ContactFloat } from "@/components/contact-float"

export default function MutualFundsPage() {
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

  // Sample data for charts
  const mutualFundAllocationData = [
    { label: "Equity Funds", value: 45, color: "#3b82f6" },
    { label: "Debt Funds", value: 30, color: "#10b981" },
    { label: "Hybrid Funds", value: 15, color: "#f59e0b" },
    { label: "Index Funds", value: 7, color: "#8b5cf6" },
    { label: "Others", value: 3, color: "#6b7280" },
  ]

  return (
    <div ref={pageRef} className="min-h-screen w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28 lg:py-36 z-10">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#052230] via-[#073a45] to-[#052230] z-0">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-400 via-cyan-500 to-[#052230]"></div>
          </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 z-0">
          {/* Animated circles */}
          <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 opacity-10 blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 left-[10%] w-96 h-96 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 opacity-10 blur-3xl animate-pulse"
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
            <div className="mb-8 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm text-teal-200 backdrop-blur-md border border-white/20">
              <span className="animate-pulse mr-2">•</span> Investment Excellence
            </div>

            <h1 className="hero-content text-4xl font-bold md:text-5xl lg:text-7xl bg-gradient-to-r from-white via-teal-100 to-white bg-clip-text text-transparent drop-shadow-sm mb-8">
              Mutual{" "}
              <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                Funds
              </span>{" "}
              Investing
            </h1>

            <p className="hero-content mt-6 text-lg text-teal-100/90 md:text-xl max-w-3xl mx-auto leading-relaxed">
              Professionally managed investment vehicles that pool money from multiple investors to invest in diverse securities, offering accessibility and diversification for all investor classes.
            </p>

            <div className="hero-content mt-12 flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#0a634b] to-[#1a9880] text-white hover:from-[#0d7759] hover:to-[#1da98e] border-none font-medium shadow-lg shadow-[#052230]/30 px-8"
              >
                Start Investing <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Hero illustration */}
            <div className="mt-12 relative max-w-2xl mx-auto">
              <div className="relative w-full h-64 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 rounded-lg"></div>
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  <rect x="50" y="50" width="300" height="200" rx="20" fill="rgba(20,184,166,0.1)" stroke="#14b8a6" strokeWidth="2" />
                  <circle cx="200" cy="150" r="60" fill="rgba(8,145,178,0.1)" stroke="#0891b2" strokeWidth="2" />
                  <path d="M80,200 L120,100 L160,150 L200,80 L240,120 L280,90 L320,180" stroke="#0d9488" strokeWidth="3" fill="none" />
                  <circle cx="120" cy="100" r="6" fill="#0d9488" />
                  <circle cx="160" cy="150" r="6" fill="#0d9488" />
                  <circle cx="200" cy="80" r="6" fill="#0d9488" />
                  <circle cx="240" cy="120" r="6" fill="#0d9488" />
                  <circle cx="280" cy="90" r="6" fill="#0d9488" />
                  <circle cx="320" cy="180" r="6" fill="#0d9488" />
                  <text x="200" y="240" textAnchor="middle" fill="#0f766e" fontSize="14" fontWeight="bold">Mutual Fund Performance Trend</text>
                </svg>
              </div>
            </div>

            {/* Feature highlights */}
            <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-[#052230]/40 p-4 backdrop-blur-sm border border-white/10">
                <div className="flex items-center justify-center">
                  <div className="rounded-lg bg-[#0a634b]/50 p-2">
                    <PiggyBank className="h-5 w-5 text-teal-300" />
                  </div>
                  <span className="ml-2 text-teal-100">Low Entry Point</span>
                </div>
              </div>

              <div className="rounded-xl bg-[#052230]/40 p-4 backdrop-blur-sm border border-white/10">
                <div className="flex items-center justify-center">
                  <div className="rounded-lg bg-[#0a634b]/50 p-2">
                    <Shield className="h-5 w-5 text-teal-300" />
                  </div>
                  <span className="ml-2 text-teal-100">SEBI Regulated</span>
                </div>
              </div>

              <div className="rounded-xl bg-[#052230]/40 p-4 backdrop-blur-sm border border-white/10">
                <div className="flex items-center justify-center">
                  <div className="rounded-lg bg-[#0a634b]/50 p-2">
                    <TrendingUp className="h-5 w-5 text-teal-300" />
                  </div>
                  <span className="ml-2 text-teal-100">Diversified Exposure</span>
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

      {/* Understanding Mutual Funds Section */}
      <ParallaxSection className="py-12 md:py-16 bg-white" speed={0.1} direction="up">
        <div className="container-custom">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2">
            <AnimationWrapper animation="slide-in-left">
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">What Are Mutual Funds?</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-base sm:text-lg">
                    In Simple Terms: A mutual fund is a professionally managed investment vehicle that pools money from many investors to purchase securities. Mutual funds provide access to professionally managed portfolios of equities, bonds, and other assets. Types of mutual funds include:
                  </p>
                  <ul className="space-y-3 ml-4 sm:ml-6 list-disc">
                    <li className="text-sm sm:text-base">
                      <span className="font-medium">Equity Funds:</span> Invest primarily in stocks, aiming for long-term capital growth. These funds may focus on specific sectors, market caps, or investment styles (growth, value, dividend).
                    </li>
                    <li className="text-sm sm:text-base">
                      <span className="font-medium">Debt Funds:</span> Invest in fixed-income securities like government bonds, corporate bonds, and money market instruments. These funds aim to provide regular income and capital preservation.
                    </li>
                    <li className="text-sm sm:text-base">
                      <span className="font-medium">Hybrid Funds:</span> Maintain a portfolio mix of both stocks and bonds, offering a balance between growth and income. These include balanced funds, monthly income plans, and asset allocation funds.
                    </li>
                    <li className="text-sm sm:text-base">
                      <span className="font-medium">Index Funds:</span> Passively managed funds that mirror a specific market index, providing broad market exposure with lower expense ratios compared to actively managed funds.
                    </li>
                    <li className="text-sm sm:text-base">
                      <span className="font-medium">Sector Funds:</span> Focus on specific industry sectors like technology, healthcare, or financial services, providing targeted exposure but with higher concentration risk.
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Why It Matters</h3>
                    <p className="text-sm sm:text-base">
                      Mutual funds offer diversification, professional management, and accessibility to markets that might be difficult for individual investors to achieve on their own. They're ideal for both beginners and experienced investors seeking a balanced approach to wealth creation.
                    </p>
                  </div>
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="slide-in-right" className="flex items-center">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl shadow-lg relative overflow-hidden border border-teal-100">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-teal-200/20 to-cyan-200/20 rounded-full transform translate-x-20 -translate-y-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-teal-200/20 to-cyan-200/20 rounded-full transform -translate-x-10 translate-y-10"></div>
                
                {/* Add fund illustration */}
                <div className="mb-6 flex justify-center">
                  <div className="relative w-32 h-32">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="45" fill="#e0f2f1" stroke="#0d9488" strokeWidth="1" />
                      <circle cx="50" cy="50" r="35" fill="#b2dfdb" stroke="#0d9488" strokeWidth="1" />
                      <circle cx="50" cy="50" r="25" fill="#80cbc4" stroke="#0d9488" strokeWidth="1" />
                      <circle cx="50" cy="50" r="15" fill="#4db6ac" stroke="#0d9488" strokeWidth="1" />
                      <circle cx="50" cy="50" r="5" fill="#009688" />
                      
                      {/* People icons around the circle */}
                      <circle cx="85" cy="50" r="8" fill="#bbdefb" stroke="#0d9488" strokeWidth="1" />
                      <text x="85" y="50" textAnchor="middle" dominantBaseline="middle" fill="#0d9488" fontSize="10">👤</text>
                      
                      <circle cx="50" cy="15" r="8" fill="#bbdefb" stroke="#0d9488" strokeWidth="1" />
                      <text x="50" y="15" textAnchor="middle" dominantBaseline="middle" fill="#0d9488" fontSize="10">👤</text>
                      
                      <circle cx="15" cy="50" r="8" fill="#bbdefb" stroke="#0d9488" strokeWidth="1" />
                      <text x="15" y="50" textAnchor="middle" dominantBaseline="middle" fill="#0d9488" fontSize="10">👤</text>
                      
                      <circle cx="50" cy="85" r="8" fill="#bbdefb" stroke="#0d9488" strokeWidth="1" />
                      <text x="50" y="85" textAnchor="middle" dominantBaseline="middle" fill="#0d9488" fontSize="10">👤</text>
                      
                      <circle cx="75" cy="25" r="8" fill="#bbdefb" stroke="#0d9488" strokeWidth="1" />
                      <text x="75" y="25" textAnchor="middle" dominantBaseline="middle" fill="#0d9488" fontSize="10">👤</text>
                      
                      <circle cx="25" cy="75" r="8" fill="#bbdefb" stroke="#0d9488" strokeWidth="1" />
                      <text x="25" y="75" textAnchor="middle" dominantBaseline="middle" fill="#0d9488" fontSize="10">👤</text>
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-teal-900 mb-6 relative z-10">Key Advantages of Mutual Funds</h3>
                
                <div className="space-y-4 relative z-10">
                  <div className="flex items-start">
                    <div className="rounded-full bg-teal-100 p-2 mr-4">
                      <PiggyBank className="h-4 w-4 text-teal-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-800">Low Investment Threshold</h4>
                      <p className="text-sm text-teal-700">Start with as little as ₹500 through SIPs, making wealth creation accessible to all</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="rounded-full bg-teal-100 p-2 mr-4">
                      <Users className="h-4 w-4 text-teal-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-800">Diversification</h4>
                      <p className="text-sm text-teal-700">Spread risk across multiple securities, reducing impact of poor performance from any single investment</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="rounded-full bg-teal-100 p-2 mr-4">
                      <Briefcase className="h-4 w-4 text-teal-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-800">Professional Management</h4>
                      <p className="text-sm text-teal-700">Experienced fund managers make informed decisions based on research and market analysis</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="rounded-full bg-teal-100 p-2 mr-4">
                      <LineChart className="h-4 w-4 text-teal-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-teal-800">Liquidity</h4>
                      <p className="text-sm text-teal-700">Open-ended funds provide the flexibility to redeem units on any business day at prevailing NAV</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </ParallaxSection>

      {/* Types of Mutual Funds Comparison */}
      <section className="py-16 bg-gradient-to-b from-white to-teal-50">
        <div className="container-custom">
          <AnimationWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Types of Mutual Funds</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Understanding the different types of mutual funds can help you select the right options based on your financial goals, risk tolerance, and investment horizon.
              </p>
            </div>
          </AnimationWrapper>

          {/* Fund types illustration */}
          <div className="mb-12 flex justify-center">
            <div className="relative w-full max-w-3xl h-48 md:h-64">
              <svg viewBox="0 0 800 200" className="w-full h-full">
                {/* Background elements */}
                <rect x="50" y="25" width="700" height="150" rx="10" fill="#f0fdfa" stroke="#0d9488" strokeWidth="1" strokeDasharray="5,5" />
                
                {/* Equity Fund */}
                <g transform="translate(150, 100)">
                  <circle cx="0" cy="0" r="60" fill="#bfdbfe" fillOpacity="0.5" />
                  <circle cx="0" cy="0" r="50" fill="#93c5fd" fillOpacity="0.7" />
                  <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="#1e40af" fontSize="16" fontWeight="bold">Equity</text>
                  <text x="0" y="20" textAnchor="middle" dominantBaseline="middle" fill="#1e40af" fontSize="12">Higher Risk</text>
                  <text x="0" y="35" textAnchor="middle" dominantBaseline="middle" fill="#1e40af" fontSize="12">Higher Return</text>
                </g>
                
                {/* Debt Fund */}
                <g transform="translate(400, 100)">
                  <circle cx="0" cy="0" r="60" fill="#bbf7d0" fillOpacity="0.5" />
                  <circle cx="0" cy="0" r="50" fill="#86efac" fillOpacity="0.7" />
                  <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="#15803d" fontSize="16" fontWeight="bold">Debt</text>
                  <text x="0" y="20" textAnchor="middle" dominantBaseline="middle" fill="#15803d" fontSize="12">Lower Risk</text>
                  <text x="0" y="35" textAnchor="middle" dominantBaseline="middle" fill="#15803d" fontSize="12">Stable Return</text>
                </g>
                
                {/* Hybrid Fund */}
                <g transform="translate(650, 100)">
                  <circle cx="0" cy="0" r="60" fill="#fef08a" fillOpacity="0.5" />
                  <circle cx="0" cy="0" r="50" fill="#fde047" fillOpacity="0.7" />
                  <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="#a16207" fontSize="16" fontWeight="bold">Hybrid</text>
                  <text x="0" y="20" textAnchor="middle" dominantBaseline="middle" fill="#a16207" fontSize="12">Balanced Risk</text>
                  <text x="0" y="35" textAnchor="middle" dominantBaseline="middle" fill="#a16207" fontSize="12">Moderate Return</text>
                </g>
                
                {/* Connecting lines */}
                <line x1="200" y1="100" x2="350" y2="100" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="450" y1="100" x2="600" y2="100" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </div>
          </div>

          <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Equity Funds */}
            <Card className="benefit-card border-t-4 border-t-blue-500 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-2">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Equity Funds</CardTitle>
                <CardDescription>Growth-oriented investment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Risk Level</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Return Potential</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Investment Horizon</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                </div>
                <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                    <span>Long-term capital appreciation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                    <span>Higher return potential</span>
              </li>
              <li className="flex items-start">
                    <Check className="h-4 w-4 text-blue-500 mr-2 mt-0.5" />
                    <span>Tax efficiency (LTCG)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Debt Funds */}
            <Card className="benefit-card border-t-4 border-t-green-500 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-2">
                  <Percent className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Debt Funds</CardTitle>
                <CardDescription>Income-oriented investment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Risk Level</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Return Potential</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Investment Horizon</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                </div>
                <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span>Regular income generation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span>Capital preservation</span>
              </li>
              <li className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    <span>Lower volatility than equity</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Hybrid Funds */}
            <Card className="benefit-card border-t-4 border-t-amber-500 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-2">
                  <PieChart className="w-6 h-6 text-amber-600" />
                </div>
                <CardTitle>Hybrid Funds</CardTitle>
                <CardDescription>Balanced investment approach</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Risk Level</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Return Potential</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Investment Horizon</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
                <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
                    <span>Blend of growth and income</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
                    <span>Moderate risk profile</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-amber-500 mr-2 mt-0.5" />
                    <span>Built-in diversification</span>
              </li>
            </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <AnimationWrapper>
              <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white border-none">
                Explore Mutual Fund Options <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Performance Comparison Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimationWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Performance Metrics</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Historical performance comparison of mutual funds against other investment options over different time periods.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart 1: 10-Year Performance Comparison */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-gray-800">10-Year Investment Growth (₹10,000 initial investment)</h3>
              
              {/* Custom chart representation */}
              <div className="h-64 relative mt-6">
                <div className="absolute bottom-0 left-0 w-full h-8 bg-gray-100 flex">
                  <div className="flex-1 text-center text-xs font-medium py-1.5">Mutual Funds</div>
                  <div className="flex-1 text-center text-xs font-medium py-1.5">Fixed Deposits</div>
                  <div className="flex-1 text-center text-xs font-medium py-1.5">Gold</div>
                  <div className="flex-1 text-center text-xs font-medium py-1.5">Real Estate</div>
                </div>
                
                <div className="absolute bottom-8 left-0 w-full h-[calc(100%-32px)] flex px-2">
                  {/* Mutual Funds Bar */}
                  <div className="flex-1 px-2 flex flex-col justify-end">
                    <div 
                      className="relative w-full bg-gradient-to-t from-teal-500 to-teal-400 rounded-t-sm"
                      style={{ height: '85%' }}
                    >
                      <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white text-xs py-1 px-2 rounded">
                        ₹41,500
                      </div>
                    </div>
                  </div>
                  
                  {/* Fixed Deposits Bar */}
                  <div className="flex-1 px-2 flex flex-col justify-end">
                    <div 
                      className="relative w-full bg-gradient-to-t from-blue-400 to-blue-300 rounded-t-sm"
                      style={{ height: '40%' }}
                    >
                      <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs py-1 px-2 rounded">
                        ₹19,600
                      </div>
                    </div>
                  </div>
                  
                  {/* Gold Bar */}
                  <div className="flex-1 px-2 flex flex-col justify-end">
                    <div 
                      className="relative w-full bg-gradient-to-t from-amber-500 to-amber-400 rounded-t-sm"
                      style={{ height: '60%' }}
                    >
                      <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white text-xs py-1 px-2 rounded">
                        ₹29,800
                      </div>
                    </div>
                  </div>
                  
                  {/* Real Estate Bar */}
                  <div className="flex-1 px-2 flex flex-col justify-end">
                    <div 
                      className="relative w-full bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-sm"
                      style={{ height: '65%' }}
                    >
                      <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs py-1 px-2 rounded">
                        ₹32,200
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Note:</span> Data based on average returns from top-performing diversified equity mutual funds compared to other asset classes. Past performance is not indicative of future returns.
                </p>
              </div>
            </div>

            {/* Chart 2: SIP vs Lumpsum Growth */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-gray-800">SIP vs Lumpsum Investment (15-Year Period)</h3>
              
              <div className="relative h-64 mt-6">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-2 text-xs text-gray-500">
                  <div>₹40L</div>
                  <div>₹30L</div>
                  <div>₹20L</div>
                  <div>₹10L</div>
                  <div>₹0</div>
                </div>
                
                {/* Graph area */}
                <div className="ml-10 h-full relative">
                  {/* Horizontal grid lines */}
                  <div className="absolute top-0 left-0 right-0 h-full">
                    <div className="h-1/4 border-b border-gray-200"></div>
                    <div className="h-1/4 border-b border-gray-200"></div>
                    <div className="h-1/4 border-b border-gray-200"></div>
                    <div className="h-1/4 border-b border-gray-200"></div>
                  </div>
                  
                  {/* SIP Growth Curve */}
                  <svg className="absolute top-0 left-0 w-full h-full overflow-visible">
                    <path
                      d="M0,200 Q50,180 100,150 T200,80 T300,20"
                      fill="none"
                      stroke="#0d9488"
                      strokeWidth="3"
                      className="drop-shadow-md"
                    />
                    <circle cx="300" cy="20" r="4" fill="#0d9488" />
                    <text x="300" y="12" textAnchor="middle" fill="#0d9488" fontSize="12" fontWeight="bold">₹36.8L</text>
                  </svg>
                  
                  {/* Lumpsum Growth Curve */}
                  <svg className="absolute top-0 left-0 w-full h-full overflow-visible">
                    <path
                      d="M0,160 Q50,155 100,140 T200,110 T300,50"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="3"
                      className="drop-shadow-md"
                    />
                    <circle cx="300" cy="50" r="4" fill="#3b82f6" />
                    <text x="300" y="42" textAnchor="middle" fill="#3b82f6" fontSize="12" fontWeight="bold">₹28.2L</text>
                  </svg>
                  
                  {/* X-axis labels */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
                    <div>0 Yr</div>
                    <div>5 Yr</div>
                    <div>10 Yr</div>
                    <div>15 Yr</div>
                  </div>
                </div>
              </div>
              
              {/* Legend */}
              <div className="mt-4 flex justify-center space-x-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-teal-600 mr-2"></div>
                  <span className="text-sm">SIP (₹10,000/month)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                  <span className="text-sm">Lumpsum (₹18 Lakh)</span>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Key Insight:</span> Regular SIP investments often outperform lumpsum investments of equivalent amounts over long periods due to rupee cost averaging and the power of compounding.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Annual Returns Comparison</CardTitle>
                <CardDescription>Average annual returns across different investment categories (Last 10 Years)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-sm bg-blue-600 mr-3"></div>
                        <span className="font-medium">Large Cap Equity Funds</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-64 h-6 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-600 rounded-full" style={{ width: '68%' }}></div>
                        </div>
                        <span className="text-blue-600 font-bold">11.2%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-sm bg-teal-600 mr-3"></div>
                        <span className="font-medium">Mid & Small Cap Equity Funds</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-64 h-6 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-teal-600 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <span className="text-teal-600 font-bold">14.8%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-sm bg-amber-600 mr-3"></div>
                        <span className="font-medium">Hybrid Funds</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-64 h-6 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-amber-600 rounded-full" style={{ width: '54%' }}></div>
                        </div>
                        <span className="text-amber-600 font-bold">10.1%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-sm bg-green-600 mr-3"></div>
                        <span className="font-medium">Debt Funds</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-64 h-6 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-green-600 rounded-full" style={{ width: '38%' }}></div>
                        </div>
                        <span className="text-green-600 font-bold">7.5%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-sm bg-gray-400 mr-3"></div>
                        <span className="font-medium">Fixed Deposits</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-64 h-6 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gray-400 rounded-full" style={{ width: '32%' }}></div>
                        </div>
                        <span className="text-gray-600 font-bold">5.8%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg mt-6">
                    <p className="text-sm text-blue-800">
                      <span className="font-semibold">Disclaimer:</span> Past performance is not indicative of future returns. Data represents average category returns and individual fund performance may vary significantly. Returns are for illustrative purposes only and not a guarantee of future performance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-teal-50 to-white">
        <div className="container-custom">
          <AnimationWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Start Investing</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Begin your investment journey with these simple steps
              </p>
            </div>
          </AnimationWrapper>

          {/* Investment journey illustration */}
          <div className="mb-12 flex justify-center">
            <div className="relative w-full max-w-3xl h-24 md:h-32">
              <svg viewBox="0 0 800 100" className="w-full h-full">
                {/* Path line */}
                <path d="M50,50 C150,100 250,0 350,50 C450,100 550,0 650,50 C750,100 850,0 950,50" 
                      stroke="#0d9488" strokeWidth="4" fill="none" strokeDasharray="1,0" />
                
                {/* Stage circles */}
                <circle cx="100" cy="50" r="20" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2" />
                <text x="100" y="55" textAnchor="middle" fill="#0d9488" fontSize="16" fontWeight="bold">1</text>
                
                <circle cx="300" cy="50" r="20" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2" />
                <text x="300" y="55" textAnchor="middle" fill="#0d9488" fontSize="16" fontWeight="bold">2</text>
                
                <circle cx="500" cy="50" r="20" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2" />
                <text x="500" y="55" textAnchor="middle" fill="#0d9488" fontSize="16" fontWeight="bold">3</text>
                
                <circle cx="700" cy="50" r="20" fill="#ccfbf1" stroke="#0d9488" strokeWidth="2" />
                <text x="700" y="55" textAnchor="middle" fill="#0d9488" fontSize="16" fontWeight="bold">4</text>
                
                {/* Icons for each stage */}
                <text x="100" y="20" textAnchor="middle" fill="#0d9488" fontSize="16">🎯</text>
                <text x="300" y="20" textAnchor="middle" fill="#0d9488" fontSize="16">📊</text>
                <text x="500" y="20" textAnchor="middle" fill="#0d9488" fontSize="16">📝</text>
                <text x="700" y="20" textAnchor="middle" fill="#0d9488" fontSize="16">💰</text>
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-6 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-teal-100 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-800 font-bold text-xl mb-4">1</div>
                <h3 className="text-lg font-bold mb-2">Define Your Goals</h3>
                <p className="text-sm text-muted-foreground">Determine your investment objectives, time horizon, and risk tolerance</p>
          </div>
        </div>

            <div className="bg-white rounded-xl p-6 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-teal-100 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-800 font-bold text-xl mb-4">2</div>
                <h3 className="text-lg font-bold mb-2">Choose Fund Types</h3>
                <p className="text-sm text-muted-foreground">Select the right mutual funds that align with your financial goals</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-teal-100 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-800 font-bold text-xl mb-4">3</div>
                <h3 className="text-lg font-bold mb-2">Complete KYC</h3>
                <p className="text-sm text-muted-foreground">One-time KYC process required for investing in any mutual fund in India</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-teal-100 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-800 font-bold text-xl mb-4">4</div>
                <h3 className="text-lg font-bold mb-2">Start SIP/Lumpsum</h3>
                <p className="text-sm text-muted-foreground">Begin with regular SIPs or make a lumpsum investment in your chosen funds</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl text-white text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-2">Ready to Start Your Mutual Fund Journey?</h3>
            <p className="mb-6 max-w-2xl mx-auto">Consult with our mutual fund experts to build a portfolio aligned with your financial goals</p>
            <div className="flex flex-wrap justify-center gap-4">
              <CalendlyButton variant="default" className="bg-white text-teal-800 hover:bg-teal-50">
                Book a Consultation
              </CalendlyButton>
            </div>
          </div>
        </div>
      </section>

      <ContactFloat />
    </div>
  )
}
