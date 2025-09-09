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
  Key,
  Award,
  TrendingDown,
  BarChart4,
  LucideBarChart4,
  BarChart,
  Eye,
  Layers,
  Zap,
  Star
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AnimationWrapper from "@/components/animation-wrapper"
import { ParallaxSection } from "@/components/parallax-section"
import { CalendlyButton } from "@/components/calendly-button"
import { ContactFloat } from "@/components/contact-float"

export default function UnlistedInvestmentsPage() {
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

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

          {/* Glass cards */}
          <div className="absolute top-1/4 right-[5%] w-40 h-40 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 rotate-12 hidden lg:block"></div>
          <div className="absolute bottom-1/4 left-[5%] w-32 h-32 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 -rotate-12 hidden lg:block"></div>
        </div>

        <div className="container-custom relative z-20">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm text-indigo-200 backdrop-blur-md border border-white/20">
              <span className="animate-pulse mr-2">•</span> Premium Investment Opportunity
            </div>

            <h1 className="hero-content text-4xl font-bold md:text-5xl lg:text-7xl bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent drop-shadow-sm mb-8">
              Unlisted{" "}
              <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
                Investments
              </span>{" "}
              for HNIs
            </h1>

            <p className="hero-content mt-6 text-lg text-indigo-100/90 md:text-xl max-w-3xl mx-auto leading-relaxed">
              Access high-potential private companies before they go public. Exclusive opportunities for wealth creation through carefully selected pre-IPO investments.
            </p>

            <div className="hero-content mt-12 flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#4c1d95] to-[#6d28d9] text-white hover:from-[#5b21b6] hover:to-[#7c3aed] border-none font-medium shadow-lg shadow-[#1e293b]/30 px-8"
              >
                Explore Opportunities <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Hero illustration */}
            <div className="mt-12 relative max-w-2xl mx-auto">
              <div className="relative w-full h-64 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-lg"></div>
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  {/* Business buildings */}
                  <rect x="50" y="100" width="50" height="150" rx="2" fill="#c4b5fd" stroke="#8b5cf6" strokeWidth="1" />
                  <rect x="60" y="120" width="10" height="10" fill="#7c3aed" />
                  <rect x="80" y="120" width="10" height="10" fill="#7c3aed" />
                  <rect x="60" y="140" width="10" height="10" fill="#7c3aed" />
                  <rect x="80" y="140" width="10" height="10" fill="#7c3aed" />
                  <rect x="60" y="160" width="10" height="10" fill="#7c3aed" />
                  <rect x="80" y="160" width="10" height="10" fill="#7c3aed" />
                  
                  <rect x="120" y="130" width="60" height="120" rx="2" fill="#c4b5fd" stroke="#8b5cf6" strokeWidth="1" />
                  <rect x="130" y="145" width="10" height="10" fill="#7c3aed" />
                  <rect x="150" y="145" width="10" height="10" fill="#7c3aed" />
                  <rect x="170" y="145" width="10" height="10" fill="#7c3aed" />
                  <rect x="130" y="165" width="10" height="10" fill="#7c3aed" />
                  <rect x="150" y="165" width="10" height="10" fill="#7c3aed" />
                  <rect x="170" y="165" width="10" height="10" fill="#7c3aed" />
                  <rect x="130" y="185" width="10" height="10" fill="#7c3aed" />
                  <rect x="150" y="185" width="10" height="10" fill="#7c3aed" />
                  <rect x="170" y="185" width="10" height="10" fill="#7c3aed" />
                  
                  <rect x="200" y="80" width="70" height="170" rx="2" fill="#c4b5fd" stroke="#8b5cf6" strokeWidth="1" />
                  <rect x="210" y="100" width="12" height="12" fill="#7c3aed" />
                  <rect x="230" y="100" width="12" height="12" fill="#7c3aed" />
                  <rect x="250" y="100" width="12" height="12" fill="#7c3aed" />
                  <rect x="210" y="120" width="12" height="12" fill="#7c3aed" />
                  <rect x="230" y="120" width="12" height="12" fill="#7c3aed" />
                  <rect x="250" y="120" width="12" height="12" fill="#7c3aed" />
                  <rect x="210" y="140" width="12" height="12" fill="#7c3aed" />
                  <rect x="230" y="140" width="12" height="12" fill="#7c3aed" />
                  <rect x="250" y="140" width="12" height="12" fill="#7c3aed" />
                  <rect x="210" y="160" width="12" height="12" fill="#7c3aed" />
                  <rect x="230" y="160" width="12" height="12" fill="#7c3aed" />
                  <rect x="250" y="160" width="12" height="12" fill="#7c3aed" />
                  
                  <rect x="290" y="120" width="60" height="130" rx="2" fill="#c4b5fd" stroke="#8b5cf6" strokeWidth="1" />
                  <rect x="300" y="135" width="10" height="10" fill="#7c3aed" />
                  <rect x="320" y="135" width="10" height="10" fill="#7c3aed" />
                  <rect x="340" y="135" width="10" height="10" fill="#7c3aed" />
                  <rect x="300" y="155" width="10" height="10" fill="#7c3aed" />
                  <rect x="320" y="155" width="10" height="10" fill="#7c3aed" />
                  <rect x="340" y="155" width="10" height="10" fill="#7c3aed" />
                  <rect x="300" y="175" width="10" height="10" fill="#7c3aed" />
                  <rect x="320" y="175" width="10" height="10" fill="#7c3aed" />
                  <rect x="340" y="175" width="10" height="10" fill="#7c3aed" />
                  
                  {/* Stock chart line overlaid */}
                  <path d="M50,250 L100,235 L150,240 L200,220 L250,180 L300,160 L350,130" 
                        stroke="#8b5cf6" strokeWidth="3" fill="none" />
                  <circle cx="50" cy="250" r="5" fill="#8b5cf6" />
                  <circle cx="100" cy="235" r="5" fill="#8b5cf6" />
                  <circle cx="150" cy="240" r="5" fill="#8b5cf6" />
                  <circle cx="200" cy="220" r="5" fill="#8b5cf6" />
                  <circle cx="250" cy="180" r="5" fill="#8b5cf6" />
                  <circle cx="300" cy="160" r="5" fill="#8b5cf6" />
                  <circle cx="350" cy="130" r="5" fill="#8b5cf6" />
                  
                  {/* Text label */}
                  <text x="200" y="50" textAnchor="middle" fill="#8b5cf6" fontSize="14" fontWeight="bold">Unlisted Company Growth Trajectory</text>
                </svg>
              </div>
            </div>

            {/* Feature highlights */}
            <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-[#1e293b]/40 p-4 backdrop-blur-sm border border-white/10">
                <div className="flex items-center justify-center">
                  <div className="rounded-lg bg-[#4c1d95]/50 p-2">
                    <Lock className="h-5 w-5 text-purple-300" />
                  </div>
                  <span className="ml-2 text-purple-100">Exclusive Access</span>
                </div>
              </div>

              <div className="rounded-xl bg-[#1e293b]/40 p-4 backdrop-blur-sm border border-white/10">
                <div className="flex items-center justify-center">
                  <div className="rounded-lg bg-[#4c1d95]/50 p-2">
                    <TrendingUp className="h-5 w-5 text-purple-300" />
                  </div>
                  <span className="ml-2 text-purple-100">High Growth Potential</span>
                </div>
              </div>

              <div className="rounded-xl bg-[#1e293b]/40 p-4 backdrop-blur-sm border border-white/10">
                <div className="flex items-center justify-center">
                  <div className="rounded-lg bg-[#4c1d95]/50 p-2">
                    <Shield className="h-5 w-5 text-purple-300" />
                  </div>
                  <span className="ml-2 text-purple-100">Professional Due Diligence</span>
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

      {/* Understanding Unlisted Investments Section */}
      <ParallaxSection className="py-12 md:py-16 bg-white" speed={0.1} direction="up">
        <div className="container-custom">
          <div className="grid gap-8 md:gap-12 md:grid-cols-2">
            <AnimationWrapper animation="slide-in-left">
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight md:text-4xl">What Are Unlisted Investments?</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-base sm:text-lg">
                    In Simple Terms: Unlisted investments refer to securities or shares of companies that are not listed on public stock exchanges like NSE or BSE. These private companies are often at different stages of their business lifecycle, from early growth to pre-IPO phase, and offer unique opportunities to qualified investors.
                  </p>
                  <ul className="space-y-3 ml-4 sm:ml-6 list-disc">
                    <li className="text-sm sm:text-base">
                      <span className="font-medium">Pre-IPO Investments:</span> Shares of companies that are planning to go public in the near future, offering potential for significant returns when the company lists on exchanges.
                    </li>
                    <li className="text-sm sm:text-base">
                      <span className="font-medium">Growth Stage Companies:</span> Established businesses that are expanding rapidly but choose to remain private to focus on growth rather than compliance requirements of public markets.
                    </li>
                    <li className="text-sm sm:text-base">
                      <span className="font-medium">Unicorn Startups:</span> Private companies valued at over $1 billion that offer shares to select investors before going public.
                    </li>
                    <li className="text-sm sm:text-base">
                      <span className="font-medium">Secondary Transfers:</span> Acquiring shares from existing shareholders, employees, or early investors who wish to liquidate their holdings.
                    </li>
                    <li className="text-sm sm:text-base">
                      <span className="font-medium">ESOP Buybacks:</span> Opportunities to acquire employee stock options being sold in secondary markets.
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-100">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">Why It Matters</h3>
                    <p className="text-sm sm:text-base">
                      Unlisted investments provide access to high-growth companies at valuations that may be significantly lower than their eventual IPO price. They offer portfolio diversification beyond traditional public markets and can deliver exceptional returns when these companies experience value appreciation, get acquired, or go public.
                    </p>
                  </div>
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="slide-in-right" className="flex items-center">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl shadow-lg relative overflow-hidden border border-purple-100">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-purple-200/20 to-indigo-200/20 rounded-full transform translate-x-20 -translate-y-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-indigo-200/20 rounded-full transform -translate-x-10 translate-y-10"></div>
                
                {/* Add unlisted investment illustration */}
                <div className="mb-6 flex justify-center">
                  <div className="relative w-32 h-32">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="45" fill="#f3e8ff" stroke="#8b5cf6" strokeWidth="1" />
                      
                      {/* Lock in center representing private/exclusive */}
                      <rect x="38" y="35" width="24" height="20" rx="2" fill="#c4b5fd" stroke="#8b5cf6" strokeWidth="1.5" />
                      <rect x="42" y="35" width="16" height="10" rx="1" fill="#a78bfa" />
                      <rect x="46" y="45" width="8" height="10" fill="#a78bfa" />
                      
                      {/* Growth arrows */}
                      <path d="M20,70 L35,55" stroke="#8b5cf6" strokeWidth="2" />
                      <polygon points="35,55 25,55 35,45" fill="#8b5cf6" />
                      
                      <path d="M80,30 L65,45" stroke="#8b5cf6" strokeWidth="2" />
                      <polygon points="65,45 75,45 65,55" fill="#8b5cf6" />
                      
                      {/* Currency symbols */}
                      <circle cx="20" cy="30" r="8" fill="#e9d5ff" stroke="#8b5cf6" strokeWidth="1" />
                      <text x="20" y="33" textAnchor="middle" fill="#8b5cf6" fontSize="10" fontWeight="bold">₹</text>
                      
                      <circle cx="80" cy="70" r="8" fill="#e9d5ff" stroke="#8b5cf6" strokeWidth="1" />
                      <text x="80" y="73" textAnchor="middle" fill="#8b5cf6" fontSize="10" fontWeight="bold">₹</text>
                      
                      <circle cx="30" cy="85" r="8" fill="#e9d5ff" stroke="#8b5cf6" strokeWidth="1" />
                      <text x="30" y="88" textAnchor="middle" fill="#8b5cf6" fontSize="10" fontWeight="bold">₹</text>
                      
                      <circle cx="70" cy="15" r="8" fill="#e9d5ff" stroke="#8b5cf6" strokeWidth="1" />
                      <text x="70" y="18" textAnchor="middle" fill="#8b5cf6" fontSize="10" fontWeight="bold">₹</text>
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-indigo-900 mb-6 relative z-10">Key Advantages of Unlisted Investments</h3>
                
                <div className="space-y-4 relative z-10">
                  <div className="flex items-start">
                    <div className="rounded-full bg-purple-100 p-2 mr-4">
                      <TrendingUp className="h-4 w-4 text-purple-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-indigo-800">High Growth Potential</h4>
                      <p className="text-sm text-indigo-700">Early entry into promising companies can yield substantial returns upon liquidity events</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="rounded-full bg-purple-100 p-2 mr-4">
                      <Lock className="h-4 w-4 text-purple-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-indigo-800">Exclusive Opportunity</h4>
                      <p className="text-sm text-indigo-700">Access to investment opportunities not available to the general public</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="rounded-full bg-purple-100 p-2 mr-4">
                      <PieChart className="h-4 w-4 text-purple-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-indigo-800">Portfolio Diversification</h4>
                      <p className="text-sm text-indigo-700">Low correlation with public markets helps reduce overall portfolio volatility</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="rounded-full bg-purple-100 p-2 mr-4">
                      <Shield className="h-4 w-4 text-purple-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-indigo-800">Strategic Investments</h4>
                      <p className="text-sm text-indigo-700">Potential to acquire meaningful stakes in future industry leaders</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </ParallaxSection>

      {/* Types of Unlisted Investments Comparison */}
      <section className="py-16 bg-gradient-to-b from-white to-purple-50">
        <div className="container-custom">
          <AnimationWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Types of Unlisted Investments</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Understanding the different types of unlisted investments can help you select the right options based on your risk appetite, investment horizon, and wealth creation goals.
              </p>
            </div>
          </AnimationWrapper>

          {/* Investment types illustration */}
          <div className="mb-12 flex justify-center">
            <div className="relative w-full max-w-3xl h-48 md:h-64">
              <svg viewBox="0 0 800 200" className="w-full h-full">
                {/* Background elements */}
                <rect x="50" y="25" width="700" height="150" rx="10" fill="#f5f3ff" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="5,5" />
                
                {/* Pre-IPO */}
                <g transform="translate(150, 100)">
                  <circle cx="0" cy="0" r="60" fill="#ddd6fe" fillOpacity="0.5" />
                  <circle cx="0" cy="0" r="50" fill="#c4b5fd" fillOpacity="0.7" />
                  <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="#5b21b6" fontSize="16" fontWeight="bold">Pre-IPO</text>
                  <text x="0" y="20" textAnchor="middle" dominantBaseline="middle" fill="#5b21b6" fontSize="12">Medium Risk</text>
                  <text x="0" y="35" textAnchor="middle" dominantBaseline="middle" fill="#5b21b6" fontSize="12">High Return</text>
                </g>
                
                {/* Growth Stage */}
                <g transform="translate(400, 100)">
                  <circle cx="0" cy="0" r="60" fill="#ddd6fe" fillOpacity="0.5" />
                  <circle cx="0" cy="0" r="50" fill="#a78bfa" fillOpacity="0.7" />
                  <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="#5b21b6" fontSize="16" fontWeight="bold">Growth Stage</text>
                  <text x="0" y="20" textAnchor="middle" dominantBaseline="middle" fill="#5b21b6" fontSize="12">Medium-High Risk</text>
                  <text x="0" y="35" textAnchor="middle" dominantBaseline="middle" fill="#5b21b6" fontSize="12">Very High Return</text>
                </g>
                
                {/* Secondary Market */}
                <g transform="translate(650, 100)">
                  <circle cx="0" cy="0" r="60" fill="#ddd6fe" fillOpacity="0.5" />
                  <circle cx="0" cy="0" r="50" fill="#8b5cf6" fillOpacity="0.7" />
                  <text x="0" y="0" textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize="16" fontWeight="bold">Secondary</text>
                  <text x="0" y="20" textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize="12">Variable Risk</text>
                  <text x="0" y="35" textAnchor="middle" dominantBaseline="middle" fill="#fff" fontSize="12">Variable Return</text>
                </g>
                
                {/* Connecting lines */}
                <line x1="200" y1="100" x2="350" y2="100" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="450" y1="100" x2="600" y2="100" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </div>
          </div>

          <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pre-IPO */}
            <Card className="benefit-card border-t-4 border-t-indigo-500 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-2">
                  <Building className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>Pre-IPO Investments</CardTitle>
                <CardDescription>Companies preparing to go public</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Risk Level</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Return Potential</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Liquidity Timeline</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                </div>
                <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-indigo-500 mr-2 mt-0.5" />
                    <span>Potential for significant listing gains</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-indigo-500 mr-2 mt-0.5" />
                    <span>Clear exit pathway (IPO)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-indigo-500 mr-2 mt-0.5" />
                    <span>More mature than early-stage startups</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Growth Stage */}
            <Card className="benefit-card border-t-4 border-t-purple-500 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-2">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Growth Stage Companies</CardTitle>
                <CardDescription>Rapidly expanding private businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Risk Level</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Return Potential</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Liquidity Timeline</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                </div>
                <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-purple-500 mr-2 mt-0.5" />
                    <span>Exponential growth potential</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-purple-500 mr-2 mt-0.5" />
                    <span>Future acquisition targets</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-purple-500 mr-2 mt-0.5" />
                    <span>Longer investment horizons (3-7 years)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Secondary Investments */}
            <Card className="benefit-card border-t-4 border-t-violet-500 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-lg bg-violet-100 flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-violet-600" />
                </div>
                <CardTitle>Secondary Investments</CardTitle>
                <CardDescription>Shares from existing stakeholders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Risk Level</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-violet-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Return Potential</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-violet-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Liquidity Timeline</span>
                    <div className="w-24 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-violet-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </div>
                <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-violet-500 mr-2 mt-0.5" />
                    <span>Potential for discounted valuations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-violet-500 mr-2 mt-0.5" />
                    <span>Access to established private companies</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-4 w-4 text-violet-500 mr-2 mt-0.5" />
                    <span>Variable liquidity options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <AnimationWrapper>
              <Button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white border-none">
                View Current Opportunities <ArrowRight className="ml-2 h-4 w-4" />
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
                Historical performance comparison of unlisted investments against other asset classes, showcasing the potential for exceptional returns.
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart 1: Valuation Growth Comparison */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Historical Valuation Growth (5-Year Comparison)</h3>
              
              {/* Custom chart representation */}
              <div className="h-64 relative mt-6">
                <div className="absolute bottom-0 left-0 w-full h-8 bg-gray-100 flex">
                  <div className="flex-1 text-center text-xs font-medium py-1.5">Unlisted Shares</div>
                  <div className="flex-1 text-center text-xs font-medium py-1.5">Listed Equities</div>
                  <div className="flex-1 text-center text-xs font-medium py-1.5">Real Estate</div>
                  <div className="flex-1 text-center text-xs font-medium py-1.5">Gold</div>
                </div>
                
                <div className="absolute bottom-8 left-0 w-full h-[calc(100%-32px)] flex px-2">
                  {/* Unlisted Shares Bar */}
                  <div className="flex-1 px-2 flex flex-col justify-end">
                    <div 
                      className="relative w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-sm"
                      style={{ height: '90%' }}
                    >
                      <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-purple-700 text-white text-xs py-1 px-2 rounded">
                        +320%
                      </div>
                    </div>
                  </div>
                  
                  {/* Listed Equities Bar */}
                  <div className="flex-1 px-2 flex flex-col justify-end">
                    <div 
                      className="relative w-full bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t-sm"
                      style={{ height: '55%' }}
                    >
                      <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white text-xs py-1 px-2 rounded">
                        +85%
                      </div>
                    </div>
                  </div>
                  
                  {/* Real Estate Bar */}
                  <div className="flex-1 px-2 flex flex-col justify-end">
                    <div 
                      className="relative w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm"
                      style={{ height: '40%' }}
                    >
                      <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs py-1 px-2 rounded">
                        +45%
                      </div>
                    </div>
                  </div>
                  
                  {/* Gold Bar */}
                  <div className="flex-1 px-2 flex flex-col justify-end">
                    <div 
                      className="relative w-full bg-gradient-to-t from-amber-500 to-amber-400 rounded-t-sm"
                      style={{ height: '30%' }}
                    >
                      <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white text-xs py-1 px-2 rounded">
                        +28%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Note:</span> Data based on selected pre-IPO investments that went public between 2018-2023 compared to major indices and asset classes. Individual investment performance may vary significantly.
                </p>
              </div>
            </div>

            {/* Chart 2: Pre-IPO vs IPO Valuation */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Pre-IPO to IPO Valuation Growth (Recent Examples)</h3>
              
              <div className="relative h-64 mt-6">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between py-2 text-xs text-gray-500">
                  <div>600%</div>
                  <div>450%</div>
                  <div>300%</div>
                  <div>150%</div>
                  <div>0%</div>
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
                  
                  {/* Bars for companies */}
                  <div className="absolute bottom-8 left-0 right-0 h-[calc(100%-32px)] flex justify-around px-2">
                    {/* Company 1 */}
                    <div className="w-16 h-full flex flex-col justify-end">
                      <div 
                        className="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-sm"
                        style={{ height: '85%' }}
                      ></div>
                      <div className="text-center text-xs mt-2 font-medium">Company A</div>
                      <div className="text-center text-xs text-purple-700">+480%</div>
                    </div>
                    
                    {/* Company 2 */}
                    <div className="w-16 h-full flex flex-col justify-end">
                      <div 
                        className="w-full bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-sm"
                        style={{ height: '60%' }}
                      ></div>
                      <div className="text-center text-xs mt-2 font-medium">Company B</div>
                      <div className="text-center text-xs text-indigo-700">+320%</div>
                    </div>
                    
                    {/* Company 3 */}
                    <div className="w-16 h-full flex flex-col justify-end">
                      <div 
                        className="w-full bg-gradient-to-t from-violet-600 to-violet-400 rounded-t-sm"
                        style={{ height: '70%' }}
                      ></div>
                      <div className="text-center text-xs mt-2 font-medium">Company C</div>
                      <div className="text-center text-xs text-violet-700">+390%</div>
                    </div>
                    
                    {/* Company 4 */}
                    <div className="w-16 h-full flex flex-col justify-end">
                      <div 
                        className="w-full bg-gradient-to-t from-fuchsia-600 to-fuchsia-400 rounded-t-sm"
                        style={{ height: '50%' }}
                      ></div>
                      <div className="text-center text-xs mt-2 font-medium">Company D</div>
                      <div className="text-center text-xs text-fuchsia-700">+260%</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Legend */}
              <div className="mt-4 flex justify-center">
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Valuation Growth:</span> Pre-IPO investment to IPO listing price
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Risk-Return Analysis</CardTitle>
                <CardDescription>Comparing unlisted investments with other asset classes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-sm bg-purple-600 mr-3"></div>
                        <span className="font-medium">Unlisted Pre-IPO Shares</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-64 h-6 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-purple-600 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                        <span className="text-purple-600 font-bold">High</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-sm bg-indigo-600 mr-3"></div>
                        <span className="font-medium">Listed Small Cap Stocks</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-64 h-6 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-600 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                        <span className="text-indigo-600 font-bold">Medium-High</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-sm bg-blue-600 mr-3"></div>
                        <span className="font-medium">Listed Large Cap Stocks</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-64 h-6 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-600 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                        <span className="text-blue-600 font-bold">Medium</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-sm bg-green-600 mr-3"></div>
                        <span className="font-medium">Fixed Income Securities</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-64 h-6 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-green-600 rounded-full" style={{ width: '35%' }}></div>
                        </div>
                        <span className="text-green-600 font-bold">Low-Medium</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-sm bg-gray-600 mr-3"></div>
                        <span className="font-medium">Fixed Deposits</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-64 h-6 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gray-600 rounded-full" style={{ width: '20%' }}></div>
                        </div>
                        <span className="text-gray-600 font-bold">Low</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg mt-6">
                    <p className="text-sm text-purple-900">
                      <span className="font-semibold">Note on Risk-Return:</span> Unlisted investments typically offer higher potential returns but come with increased risk factors including longer lock-in periods, liquidity constraints, and valuation uncertainties. The right balance in your portfolio depends on your risk tolerance, investment horizon, and financial goals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section - New SEO-focused section */}
      <section className="py-16 bg-gradient-to-b from-white to-purple-50">
        <div className="container-custom">
          <AnimationWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Discover how strategic pre-IPO and unlisted investments have created substantial wealth for investors in the Indian market
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Success Story 1 */}
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="h-3 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
              <CardHeader className="pb-2 pt-6">
                <div className="mb-3 flex justify-center">
                  <svg viewBox="0 0 100 100" className="w-16 h-16">
                    <circle cx="50" cy="50" r="45" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1" />
                    <text x="50" y="40" textAnchor="middle" fill="#8b5cf6" fontSize="16" fontWeight="bold">10x</text>
                    <text x="50" y="65" textAnchor="middle" fill="#8b5cf6" fontSize="10">Returns</text>
                  </svg>
                </div>
                <CardTitle className="text-center">Zomato Pre-IPO Investment</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="mb-3">
                  Investors who secured Zomato shares in 2019-2020 through pre-IPO placement saw their investments grow approximately 10x when the company went public in July 2021. The food delivery giant's share price jumped significantly on listing day, creating substantial wealth for early private investors.
                </p>
                <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-600 mr-2"></div>
                    <span className="text-xs font-semibold">KEY INSIGHT</span>
                  </div>
                  <p className="text-xs mt-1">Early entry at private valuation of ₹3,000-4,000 crores vs. IPO valuation of ₹64,365 crores</p>
                </div>
              </CardContent>
            </Card>

            {/* Success Story 2 */}
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="h-3 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
              <CardHeader className="pb-2 pt-6">
                <div className="mb-3 flex justify-center">
                  <svg viewBox="0 0 100 100" className="w-16 h-16">
                    <circle cx="50" cy="50" r="45" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1" />
                    <text x="50" y="40" textAnchor="middle" fill="#8b5cf6" fontSize="16" fontWeight="bold">8x</text>
                    <text x="50" y="65" textAnchor="middle" fill="#8b5cf6" fontSize="10">Growth</text>
                  </svg>
                </div>
                <CardTitle className="text-center">Nykaa Unlisted Shares</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="mb-3">
                  FSN E-Commerce Ventures (Nykaa) saw private investors earn up to 8x returns when the beauty and fashion e-commerce platform went public in November 2021. With a valuation of approximately ₹7,700 crores in 2020, the company listed at a valuation of over ₹1 lakh crore.
                </p>
                <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-600 mr-2"></div>
                    <span className="text-xs font-semibold">KEY INSIGHT</span>
                  </div>
                  <p className="text-xs mt-1">Secondary market transactions in 2019-2020 ranged from ₹280-350 per share compared to IPO price of ₹1,125</p>
                </div>
              </CardContent>
            </Card>

            {/* Success Story 3 */}
            <Card className="overflow-hidden border-0 shadow-lg">
              <div className="h-3 bg-gradient-to-r from-purple-500 to-indigo-500"></div>
              <CardHeader className="pb-2 pt-6">
                <div className="mb-3 flex justify-center">
                  <svg viewBox="0 0 100 100" className="w-16 h-16">
                    <circle cx="50" cy="50" r="45" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="1" />
                    <text x="50" y="40" textAnchor="middle" fill="#8b5cf6" fontSize="16" fontWeight="bold">15x</text>
                    <text x="50" y="65" textAnchor="middle" fill="#8b5cf6" fontSize="10">Returns</text>
                  </svg>
                </div>
                <CardTitle className="text-center">Delhivery Private Investment</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <p className="mb-3">
                  Early investors in logistics startup Delhivery enjoyed returns of 12-15x when the company went public in May 2022. Institutional investors like Tiger Global and SoftBank reaped massive rewards, but even high-net-worth individuals who acquired shares through secondary transactions realized significant gains.
                </p>
                <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-600 mr-2"></div>
                    <span className="text-xs font-semibold">KEY INSIGHT</span>
                  </div>
                  <p className="text-xs mt-1">2018-2019 secondary market valuations were approximately 1/12th of the eventual IPO valuation of ₹35,283 crores</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Real-World Impact of Unlisted Investments</h3>
            <p className="text-sm text-muted-foreground">
              The case studies above demonstrate the wealth creation potential of unlisted investments in the Indian context. While public markets typically deliver annual returns of 12-15% on average, strategic investments in quality private companies have shown the potential for much higher returns in shorter timeframes. These examples highlight why High Net Worth Individuals (HNIs), family offices, and qualified investors are increasingly allocating a portion of their portfolio to unlisted securities as part of a diversified investment strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits of Unlisted Investments - New SEO-focused section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <AnimationWrapper animation="slide-in-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Benefits of Unlisted Investments</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Star className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Enhanced Returns Potential</h3>
                      <p className="text-muted-foreground text-sm">
                        Private companies often experience their highest growth phase before going public. Investing during this stage can potentially offer returns that significantly outperform traditional listed equity investments, as evidenced by companies like Nykaa, Zomato, and Delhivery.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Eye className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Early Access to Innovation</h3>
                      <p className="text-muted-foreground text-sm">
                        Invest in cutting-edge companies revolutionizing sectors like fintech, healthtech, and clean energy before they become household names. This provides direct exposure to innovation-driven growth that may be less accessible in public markets.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Layers className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Portfolio Diversification</h3>
                      <p className="text-muted-foreground text-sm">
                        Unlisted investments have historically shown low correlation with traditional asset classes like listed equities and fixed income. Including them in your portfolio can potentially reduce overall volatility while enhancing long-term returns.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <TrendingDown className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">Lower Volatility</h3>
                      <p className="text-muted-foreground text-sm">
                        Unlike public markets that experience daily price fluctuations influenced by market sentiment, unlisted investments are typically valued based on fundamentals and periodic valuation events, resulting in smoother value progression over time.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            </div>

            <div>
              <AnimationWrapper animation="slide-in-right">
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl shadow-lg h-full relative overflow-hidden border border-purple-100">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-200/20 to-indigo-200/20 rounded-full"></div>
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-purple-200/20 to-indigo-200/20 rounded-full"></div>
                  
                  <h3 className="text-xl font-bold text-indigo-900 mb-6 relative z-10">Strategic Considerations for HNI Investors</h3>
                  
                  <div className="space-y-6 relative z-10">
                    <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl">
                      <h4 className="font-semibold text-indigo-800 mb-2">Allocation Strategy</h4>
                      <p className="text-sm text-indigo-700">
                        Financial advisors typically recommend allocating 5-15% of an HNI portfolio to unlisted investments, depending on risk appetite and liquidity requirements. This allocation provides meaningful exposure while maintaining overall portfolio balance.
                      </p>
                    </div>
                    
                    <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl">
                      <h4 className="font-semibold text-indigo-800 mb-2">Investment Staging</h4>
                      <p className="text-sm text-indigo-700">
                        Consider a staged approach, investing across multiple unlisted opportunities rather than concentrating in a single company. This diversification strategy mitigates company-specific risks while maintaining exposure to the potential upside.
                      </p>
                    </div>
                    
                    <div className="bg-white/70 backdrop-blur-sm p-4 rounded-xl">
                      <h4 className="font-semibold text-indigo-800 mb-2">Exit Planning</h4>
                      <p className="text-sm text-indigo-700">
                        Develop a clear exit strategy for each investment, understanding potential liquidity events such as IPOs, acquisitions, or secondary sales. This foresight helps in managing portfolio liquidity and maximizing returns.
                      </p>
                    </div>

                    <div className="mt-6 p-4 bg-purple-100/70 backdrop-blur-sm rounded-lg">
                      <p className="text-sm text-purple-900 font-medium">
                        "Unlisted investments have emerged as a crucial asset class for wealth creation among India's high-net-worth investors. With proper due diligence and strategic allocation, they can significantly enhance the risk-adjusted returns of a comprehensive investment portfolio."
                      </p>
                      <p className="text-xs text-right mt-2 text-purple-800 font-medium">- Bharat Alternates Research Team</p>
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Market Trends Section - New SEO-focused section */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container-custom">
          <AnimationWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Current Market Trends</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                The rapidly evolving landscape of unlisted investments in India presents unique opportunities for discerning investors
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Growth trend chart */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Unlisted Market Size in India</h3>
              <p className="text-sm text-gray-600 mb-6">
                The private markets ecosystem in India has grown exponentially over the past five years, with transaction volumes increasing by approximately 400%.
              </p>
              
              {/* Visual chart showing growth */}
              <div className="h-64 relative">
                <div className="absolute bottom-0 left-0 w-full h-full">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    {/* Background grid */}
                    <g fill="none" stroke="#e5e7eb" strokeWidth="1">
                      <line x1="0" y1="0" x2="400" y2="0" />
                      <line x1="0" y1="50" x2="400" y2="50" />
                      <line x1="0" y1="100" x2="400" y2="100" />
                      <line x1="0" y1="150" x2="400" y2="150" />
                      <line x1="0" y1="200" x2="400" y2="200" />
                    </g>
                    
                    {/* Year labels */}
                    <text x="50" y="220" textAnchor="middle" fill="#6b7280" fontSize="12">2019</text>
                    <text x="130" y="220" textAnchor="middle" fill="#6b7280" fontSize="12">2020</text>
                    <text x="210" y="220" textAnchor="middle" fill="#6b7280" fontSize="12">2021</text>
                    <text x="290" y="220" textAnchor="middle" fill="#6b7280" fontSize="12">2022</text>
                    <text x="370" y="220" textAnchor="middle" fill="#6b7280" fontSize="12">2023</text>
                    
                    {/* Growth curve */}
                    <path 
                      d="M50,180 C90,170 110,140 130,130 C160,115 180,90 210,70 C240,50 260,40 290,25 C320,10 350,5 370,5" 
                      stroke="#8b5cf6" 
                      strokeWidth="3" 
                      fill="none"
                    />
                    
                    {/* Gradient fill under curve */}
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.1" />
                    </linearGradient>
                    <path 
                      d="M50,180 C90,170 110,140 130,130 C160,115 180,90 210,70 C240,50 260,40 290,25 C320,10 350,5 370,5 V200 H50 Z" 
                      fill="url(#gradient)"
                    />
                    
                    {/* Data points */}
                    <circle cx="50" cy="180" r="4" fill="#8b5cf6" />
                    <circle cx="130" cy="130" r="4" fill="#8b5cf6" />
                    <circle cx="210" cy="70" r="4" fill="#8b5cf6" />
                    <circle cx="290" cy="25" r="4" fill="#8b5cf6" />
                    <circle cx="370" cy="5" r="4" fill="#8b5cf6" />
                    
                    {/* Value labels */}
                    <text x="50" y="170" textAnchor="middle" fill="#4c1d95" fontSize="10" fontWeight="bold">₹2,500 Cr</text>
                    <text x="130" y="120" textAnchor="middle" fill="#4c1d95" fontSize="10" fontWeight="bold">₹7,800 Cr</text>
                    <text x="210" y="60" textAnchor="middle" fill="#4c1d95" fontSize="10" fontWeight="bold">₹15,200 Cr</text>
                    <text x="290" y="15" textAnchor="middle" fill="#4c1d95" fontSize="10" fontWeight="bold">₹26,700 Cr</text>
                    <text x="370" y="-5" textAnchor="middle" fill="#4c1d95" fontSize="10" fontWeight="bold">₹35,500 Cr</text>
                  </svg>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-xs text-gray-500 italic">
                  Source: Private market transactions data aggregated from multiple industry reports
                </p>
              </div>
            </div>

            {/* Key sectors */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Top Performing Sectors</h3>
              <p className="text-sm text-gray-600 mb-6">
                Sector-wise allocation of private market investments in India shows strong concentration in technology, financial services, and consumer-focused businesses.
              </p>
              
              {/* Sector distribution visualization */}
              <div className="h-64 relative">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  {/* Donut chart */}
                  <g transform="translate(120, 100)">
                    {/* Fintech - 28% */}
                    <path d="M0,0 L80,0 A80,80 0 0,1 24.72,76.01 L0,0" fill="#8b5cf6" />
                    
                    {/* E-commerce - 22% */}
                    <path d="M0,0 L24.72,76.01 A80,80 0 0,1 -42.07,68.28 L0,0" fill="#a78bfa" />
                    
                    {/* SaaS - 18% */}
                    <path d="M0,0 L-42.07,68.28 A80,80 0 0,1 -78.68,14.56 L0,0" fill="#c4b5fd" />
                    
                    {/* Healthtech - 12% */}
                    <path d="M0,0 L-78.68,14.56 A80,80 0 0,1 -69.28,-40 L0,0" fill="#ddd6fe" />
                    
                    {/* Others - 20% */}
                    <path d="M0,0 L-69.28,-40 A80,80 0 0,1 80,0 L0,0" fill="#ede9fe" />
                    
                    <circle cx="0" cy="0" r="40" fill="white" />
                  </g>
                  
                  {/* Legend */}
                  <g transform="translate(260, 70)">
                    <rect x="0" y="0" width="12" height="12" fill="#8b5cf6" />
                    <text x="20" y="10" fill="#4b5563" fontSize="12">Fintech (28%)</text>
                    
                    <rect x="0" y="25" width="12" height="12" fill="#a78bfa" />
                    <text x="20" y="35" fill="#4b5563" fontSize="12">E-commerce (22%)</text>
                    
                    <rect x="0" y="50" width="12" height="12" fill="#c4b5fd" />
                    <text x="20" y="60" fill="#4b5563" fontSize="12">SaaS (18%)</text>
                    
                    <rect x="0" y="75" width="12" height="12" fill="#ddd6fe" />
                    <text x="20" y="85" fill="#4b5563" fontSize="12">Healthtech (12%)</text>
                    
                    <rect x="0" y="100" width="12" height="12" fill="#ede9fe" />
                    <text x="20" y="110" fill="#4b5563" fontSize="12">Others (20%)</text>
                  </g>
                </svg>
              </div>
              
              <div className="mt-4">
                <p className="text-xs text-gray-500 italic">
                  Data based on 2022-2023 pre-IPO and secondary market investment distribution analysis
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-l-purple-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold">Increasing IPO Pipeline</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Over 100 companies are in various stages of SEBI approval for public listings in the next 18-24 months, creating significant liquidity opportunities for pre-IPO investors. The Indian IPO market has matured, with more consistent valuation methodologies being applied.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-l-indigo-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Building className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="text-lg font-bold">Unicorn Proliferation</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                India now has over 100 unicorns (companies valued at $1 billion+), with many approaching public market readiness. This growing ecosystem has significantly expanded the unlisted investment universe for qualified investors seeking meaningful stakes in future market leaders.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-l-violet-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-violet-100 flex items-center justify-center">
                  <LineChart className="h-5 w-5 text-violet-600" />
                </div>
                <h3 className="text-lg font-bold">Secondary Market Maturity</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                The secondary market for unlisted shares has become increasingly structured, with improved price discovery mechanisms and dedicated platforms facilitating transactions. This evolution has enhanced liquidity and transparency, addressing key concerns for investors in this asset class.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Investment Process section */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container-custom">
          <AnimationWrapper>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Investment Process</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                A methodical approach to unlisted investments, ensuring due diligence and optimal portfolio construction
              </p>
            </div>
          </AnimationWrapper>

          {/* Investment process illustration */}
          <div className="mb-12 flex justify-center">
            <div className="relative w-full max-w-3xl h-24 md:h-32">
              <svg viewBox="0 0 800 100" className="w-full h-full">
                {/* Path line */}
                <path d="M50,50 C150,100 250,0 350,50 C450,100 550,0 650,50 C750,100 850,0 950,50" 
                      stroke="#8b5cf6" strokeWidth="4" fill="none" strokeDasharray="1,0" />
                
                {/* Stage circles */}
                <circle cx="100" cy="50" r="20" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2" />
                <text x="100" y="55" textAnchor="middle" fill="#8b5cf6" fontSize="16" fontWeight="bold">1</text>
                
                <circle cx="300" cy="50" r="20" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2" />
                <text x="300" y="55" textAnchor="middle" fill="#8b5cf6" fontSize="16" fontWeight="bold">2</text>
                
                <circle cx="500" cy="50" r="20" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2" />
                <text x="500" y="55" textAnchor="middle" fill="#8b5cf6" fontSize="16" fontWeight="bold">3</text>
                
                <circle cx="700" cy="50" r="20" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2" />
                <text x="700" y="55" textAnchor="middle" fill="#8b5cf6" fontSize="16" fontWeight="bold">4</text>
                
                {/* Icons for each stage */}
                <text x="100" y="20" textAnchor="middle" fill="#8b5cf6" fontSize="16">🔍</text>
                <text x="300" y="20" textAnchor="middle" fill="#8b5cf6" fontSize="16">📊</text>
                <text x="500" y="20" textAnchor="middle" fill="#8b5cf6" fontSize="16">📝</text>
                <text x="700" y="20" textAnchor="middle" fill="#8b5cf6" fontSize="16">📈</text>
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-6 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-purple-100 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-800 font-bold text-xl mb-4">1</div>
                <h3 className="text-lg font-bold mb-2">Company Selection</h3>
                <p className="text-sm text-muted-foreground">Rigorous screening of private companies based on business fundamentals, growth metrics, and future potential</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-purple-100 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-800 font-bold text-xl mb-4">2</div>
                <h3 className="text-lg font-bold mb-2">Due Diligence</h3>
                <p className="text-sm text-muted-foreground">Comprehensive analysis of financial statements, management quality, business model, and competitive landscape</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-purple-100 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-800 font-bold text-xl mb-4">3</div>
                <h3 className="text-lg font-bold mb-2">Investment Structure</h3>
                <p className="text-sm text-muted-foreground">Designing optimal investment structures with clear terms, valuation benchmarks, and exit pathways</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-purple-100 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-800 font-bold text-xl mb-4">4</div>
                <h3 className="text-lg font-bold mb-2">Portfolio Monitoring</h3>
                <p className="text-sm text-muted-foreground">Continuous tracking of company performance, industry developments, and potential exit opportunities</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl text-white text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-2">Interested in Unlisted Investment Opportunities?</h3>
            <p className="mb-6 max-w-2xl mx-auto">Our team of investment experts will help you navigate the world of unlisted investments and build a high-growth portfolio tailored to your financial goals</p>
            <div className="flex flex-wrap justify-center gap-4">
              <CalendlyButton variant="default" className="bg-white text-indigo-800 hover:bg-indigo-50">
                Schedule a Consultation
              </CalendlyButton>
            </div>
          </div>
        </div>
      </section>

      {/* SEO-Focused FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">What are unlisted investments and how do they differ from listed stocks?</h3>
                <p className="text-muted-foreground">
                  Unlisted investments are shares or securities of private companies that are not traded on public stock exchanges like NSE or BSE. Unlike listed stocks that can be bought and sold instantly during market hours, unlisted shares have limited liquidity and are traded through private transactions between willing buyers and sellers. They typically represent companies in earlier growth stages with potentially higher returns but also higher risks.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">What is the minimum investment amount required for unlisted investments?</h3>
                <p className="text-muted-foreground">
                  The minimum investment threshold for unlisted investments typically starts from ₹10 lakhs and can go much higher depending on the company and deal structure. This higher entry barrier exists because unlisted investments are generally targeted at High Net Worth Individuals (HNIs), family offices, and institutional investors who can absorb the associated risks and longer investment horizons.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">How are unlisted shares valued and priced?</h3>
                <p className="text-muted-foreground">
                  Valuation of unlisted shares is determined through various methodologies including Discounted Cash Flow (DCF), comparable company analysis, recent transaction prices, and revenue/EBITDA multiples. Without market-driven daily pricing, valuations are established through negotiations between buyers and sellers, recent funding rounds, or expert valuations conducted by investment professionals. This can lead to different valuation perspectives depending on the methodology applied.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">What is the typical investment horizon for unlisted investments?</h3>
                <p className="text-muted-foreground">
                  Unlisted investments generally require a medium to long-term investment horizon, typically ranging from 2-7 years. The exit timeline depends on liquidity events such as an Initial Public Offering (IPO), acquisition by another company, secondary sale to other investors, or company buybacks. Investors should be prepared for longer lock-in periods compared to listed equity investments.
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-2">What are the tax implications of investing in unlisted shares in India?</h3>
                <p className="text-muted-foreground">
                  For unlisted shares held for more than 24 months, gains are classified as Long Term Capital Gains (LTCG) and taxed at 20% with indexation benefits. If held for less than 24 months, gains are treated as Short Term Capital Gains (STCG) and taxed at the investor's applicable income tax slab rate. Additionally, dividend income from unlisted companies is taxable in the hands of the investor at their applicable tax rate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFloat />
    </div>
  )
}
