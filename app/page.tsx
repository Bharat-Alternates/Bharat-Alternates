"use client"

import HeroSection from "@/components/hero-section"
import { InteractiveTable } from "@/components/interactive-table"
import { CalendlyButton } from "@/components/calendly-button"
import { ContactFloat } from "@/components/contact-float"
import {
  TrendingUp,
  Shield,
  Users,
  Briefcase,
  BarChart2,
  LineChart,
  PlusCircle,
  Search,
  FileText,
  Zap,
  ClipboardCheck,
  Building2,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ParallaxSection } from "@/components/parallax-section"
import AnimationWrapper from "@/components/animation-wrapper"
import TextReveal from "@/components/text-reveal"
import { StrategyTimeline } from "@/components/strategy-timeline"
import LogoSlider from "@/components/logo-slider"
import { useCounter } from "./hooks/useCounter"
import { useState, useEffect } from "react"

// Types for the table data
interface TableData {
  id: string
  name: string
  returns: string
  risk: string
  minInvestment: string
}

export default function Home() {
  // Initialize interactive charts with JavaScript
  useEffect(() => {
    // Set up event listeners for Historical Performance Trend chart
    const setupHistoricalChart = () => {
      const chart = document.getElementById("historical-performance-chart")
      if (!chart) return

      // Strategy path highlighting
      const strategyPaths = document.querySelectorAll(".strategy-path")
      const legendItems = document.querySelectorAll("[data-highlight]")

      legendItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          const targetId = item.getAttribute("data-highlight")
          if (!targetId) return

          // Reset all paths
          strategyPaths.forEach((path) => {
            path.classList.remove("stroke-[3]")
            path.setAttribute("stroke-opacity", "0.8")
          })

          // Highlight selected path
          const targetPath = document.getElementById(targetId)
          if (targetPath) {
            targetPath.classList.add("stroke-[3]")
            targetPath.setAttribute("stroke-opacity", "1")
          }
        })
      })

      // Animation button
      const animateBtn = document.getElementById("animate-btn")
      if (animateBtn) {
        animateBtn.addEventListener("click", () => {
          const tracker = document.getElementById("animated-tracker")
          if (tracker) {
            // Reset animation
            tracker.setAttribute("opacity", "0")
            setTimeout(() => {
              const animateElements = tracker.querySelectorAll("animate")
              animateElements.forEach((el) => {
                el.setAttribute("begin", "0s")
              })
            }, 50)
          }
        })
      }
    }

    // Set up event listeners for Risk Assessment chart
    const setupRiskChart = () => {
      const riskStrategies = document.querySelectorAll("#risk-strategies polygon")
      const riskPoints = document.querySelectorAll(".risk-point")
      const riskTooltip = document.getElementById("risk-tooltip")
      const tooltipTitle = document.getElementById("tooltip-title")
      const tooltipValue = document.getElementById("tooltip-value")
      const profileDisplay = document.getElementById("risk-profile-display")

      if (!riskTooltip || !tooltipTitle || !tooltipValue || !profileDisplay) return

      // Strategy polygons hover effects
      riskStrategies.forEach((polygon) => {
        polygon.addEventListener("mouseenter", () => {
          // Show risk profile
          if (profileDisplay) {
            profileDisplay.textContent = polygon.getAttribute("data-risk-profile") || ""
            profileDisplay.classList.remove("opacity-0")
            profileDisplay.classList.add("opacity-100")
          }
        })

        polygon.addEventListener("mouseleave", () => {
          // Hide risk profile
          if (profileDisplay) {
            profileDisplay.classList.remove("opacity-100")
            profileDisplay.classList.add("opacity-0")
          }
        })
      })

      // Risk data points hover effects
      riskPoints.forEach((point) => {
        point.addEventListener("mouseenter", (e) => {
          const rect = point.getBoundingClientRect()
          const svgRect = (point as SVGElement).ownerSVGElement?.getBoundingClientRect()

          if (svgRect) {
            const x = rect.left - svgRect.left + rect.width / 2
            const y = rect.top - svgRect.top + rect.height / 2

            // Position tooltip
            riskTooltip.setAttribute("transform", `translate(${x}, ${y - 20})`)

            // Update tooltip content
            tooltipTitle.textContent = point.getAttribute("data-strategy") || ""
            tooltipValue.textContent = `${point.getAttribute("data-metric")}: ${point.getAttribute("data-value")}`

            // Show tooltip
            riskTooltip.classList.remove("opacity-0")
            riskTooltip.classList.add("opacity-100")
          }
        })

        point.addEventListener("mouseleave", () => {
          // Hide tooltip
          riskTooltip.classList.remove("opacity-100")
          riskTooltip.classList.add("opacity-0")
        })
      })

      // Risk strategy selector buttons
      const strategyButtons = document.querySelectorAll('[id^="show-"]')
      strategyButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const buttonId = button.id

          // Reset all polygons
          riskStrategies.forEach((polygon) => {
            polygon.setAttribute("opacity", "0.6")
          })

          if (buttonId === "show-all-risks") {
            // Show all polygons
            riskStrategies.forEach((polygon) => {
              polygon.setAttribute("opacity", "1")
            })
          } else {
            // Show only selected strategy
            const strategyId = buttonId.replace("show-", "")
            const targetPolygon = document.getElementById(strategyId)
            if (targetPolygon) {
              targetPolygon.setAttribute("opacity", "1")
            }
          }
        })
      })
    }

    // Only initialize if we're in the browser
    if (typeof window !== "undefined") {
      // Add a small delay to ensure DOM elements are loaded
      setTimeout(() => {
        setupHistoricalChart()
        setupRiskChart()
      }, 500)
    }

    // Cleanup event listeners on component unmount
    return () => {
      // Add any necessary cleanup
    }
  }, [])

  // Placeholder data for the table
  const tableData: TableData[] = [
    {
      id: "1",
      name: "Equity Growth Strategy",
      returns: "18-22%",
      risk: "High",
      minInvestment: "₹50 Lakhs",
    },
    {
      id: "2",
      name: "Balanced Portfolio",
      returns: "12-16%",
      risk: "Moderate",
      minInvestment: "₹50 Lakhs",
    },
    {
      id: "3",
      name: "Debt Plus Strategy",
      returns: "8-11%",
      risk: "Low",
      minInvestment: "₹50 Lakhs",
    },
    {
      id: "4",
      name: "Multi-Asset Allocation",
      returns: "10-14%",
      risk: "Moderate-Low",
      minInvestment: "₹1 Crore",
    },
    {
      id: "5",
      name: "Special Situations Fund",
      returns: "22-30%",
      risk: "Very High",
      minInvestment: "₹1 Crore",
    },
  ]

  // FAQ data
  const faqData = [
    {
      question: "What is the minimum investment amount for PMS?",
      answer:
        "The minimum investment required for Portfolio Management Services (PMS) in India is ₹50 lakhs as per SEBI regulations. This threshold ensures that PMS services are tailored for high-net-worth individuals who can afford the associated risks and management fees.",
    },
    {
      question: "How is PMS different from mutual funds?",
      answer:
        "Unlike mutual funds where your money is pooled with other investors, PMS offers personalized portfolio management tailored to your specific financial goals and risk appetite. PMS provides greater transparency, customization, and direct ownership of securities, while mutual funds offer standardized products with lower minimum investments.",
    },
    {
      question: "What is the minimum investment for AIF?",
      answer:
        "Alternative Investment Funds (AIFs) in India require a minimum investment of ₹1 crore as per SEBI regulations. This higher threshold reflects the sophisticated nature of these investment vehicles and their target audience of ultra-high-net-worth individuals and institutional investors.",
    },
    {
      question: "How are PMS returns calculated?",
      answer:
        "PMS returns are typically calculated on a time-weighted basis, which measures the compound rate of growth over a specific period. This method eliminates the distorting effects of cash flows into or out of the portfolio, providing a more accurate representation of the portfolio manager's performance.",
    },
  ]

  const StatCard = ({ stat, index }: { stat: any; index: number }) => {
    const count = useCounter(stat.number, 2500) // 2.5 seconds duration

    return (
      <AnimationWrapper animation="scale-in" delay={0.1 + index * 0.1}>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl"></div>
          <div
            className={`relative h-[280px] p-8 rounded-2xl border border-white/10 backdrop-blur-sm bg-gradient-to-b ${stat.gradient} 
            hover:border-white/20 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden group`}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            <div className="relative z-10">
              <div
                className="w-16 h-16 rounded-full bg-gradient-to-r from-white/10 to-white/5 flex items-center justify-center mb-6 
                backdrop-blur-sm border border-white/10 group-hover:scale-110 transition-transform duration-300"
              >
                <stat.icon className="h-8 w-8 text-white/90" />
              </div>
              <div className="text-5xl font-bold mb-3 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                {count}+
              </div>
              <p className="text-white/80 text-lg">{stat.label}</p>
            </div>
          </div>
        </div>
      </AnimationWrapper>
    )
  }

  // Active tab state
  const [activeTab, setActiveTab] = useState(0)

  // Data for the Multi-Asset Allocation chart
  const assetAllocationData = [
    { label: "Equity", value: 45, color: "#4285F4" },
    { label: "Fixed Income", value: 30, color: "#34A853" },
    { label: "Gold", value: 10, color: "#FBBC05" },
    { label: "Int'l Equity", value: 10, color: "#9C27B0" },
    { label: "REITs", value: 5, color: "#EA4335" },
  ]

  return (
    <>
      <ContactFloat />
      <div className="section-safe">
        <HeroSection />
      </div>

      {/* Introduction Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white section-safe">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimationWrapper animation="fade-in">
            <div className="mx-auto max-w-4xl text-center">
              <div>
                <TextReveal
                  as="h2"
                  className="inline-block text-xl sm:text-2xl md:text-3xl font-bold tracking-normal text-blue-800 leading-relaxed"
                  stagger={0.05}
                >
                  <span className="whitespace-normal sm:whitespace-nowrap">
                    India's&nbsp;Leading&nbsp;Portfolio&nbsp;Management
                  </span>
                </TextReveal>
                <TextReveal
                  as="span"
                  className="inline-block text-xl sm:text-2xl md:text-3xl font-bold tracking-normal text-blue-800 leading-relaxed mt-1 md:mt-0 md:ml-2"
                  stagger={0.05}
                >
                  <span className="whitespace-normal sm:whitespace-nowrap">
                    Services&nbsp;&amp;&nbsp;Alternative&nbsp;Investment
                  </span>
                </TextReveal>
                <TextReveal
                  as="span"
                  className="inline-block text-xl sm:text-2xl md:text-3xl font-bold tracking-normal text-blue-800 leading-relaxed mt-1 md:mt-0 md:ml-2"
                  stagger={0.05}
                >
                  <span className="whitespace-normal sm:whitespace-nowrap">Fund&nbsp;Platform</span>
                </TextReveal>
              </div>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-800 leading-relaxed">
                At Bharat Alternates, we specialize in providing high-net-worth individuals and ultra-high networth
                individuals and qualified investors with access to India's top-performing Portfolio Management Services
                (PMS) and Alternative Investment Funds (AIF). Our comprehensive investment platform offers expert wealth
                management solutions, data-driven market insights, and a seamless digital investment experience tailored
                to your specific financial objectives.
              </p>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-800 leading-relaxed">
                With a proven track record in wealth creation and capital appreciation, our team of SEBI-registered
                distributors guides you through the diverse landscape of alternative investments in India, helping you
                make strategic investment decisions aligned with your risk tolerance, tax planning needs, and long-term
                financial goals.
              </p>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Strategic Wealth Management Section */}
      <section className="py-16 bg-[#2a2a72] section-safe">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-in">
            <div className="mx-auto max-w-4xl text-center text-white">
              <TextReveal as="h2" className="text-3xl font-bold md:text-4xl" stagger={0.05}>
                <span style={{ wordSpacing: "0.1em" }}>Strategic&nbsp;Wealth</span>
              </TextReveal>
              <TextReveal as="span" className="text-3xl font-bold md:text-4xl" stagger={0.05}>
                <span style={{ wordSpacing: "0.1em" }}>Management</span>
              </TextReveal>
              <TextReveal as="h3" className="mt-3 text-xl font-semibold md:text-2xl" stagger={0.05}>
                <span style={{ wordSpacing: "0.1em" }}>Our&nbsp;Systematic&nbsp;Investment&nbsp;Approach</span>
              </TextReveal>
              <p className="mt-4 text-base md:text-lg text-white/90 max-w-3xl mx-auto">
                A research-backed, disciplined approach to sustainable wealth creation through strategic asset
                allocation, portfolio diversification, and professional investment management
              </p>
            </div>
          </AnimationWrapper>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <AnimationWrapper animation="scale-in" delay={0.1}>
              <div className="bg-[#343483]/50 rounded-lg p-8 text-white text-center h-full">
                <div className="bg-[#4747a1] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PlusCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Personalized Financial Assessment</h3>
                <p className="text-white/80">
                  Comprehensive evaluation of your investment goals, risk profile, and time horizon
                </p>
              </div>
            </AnimationWrapper>

            {/* Card 2 */}
            <AnimationWrapper animation="scale-in" delay={0.2}>
              <div className="bg-[#343483]/50 rounded-lg p-8 text-white text-center h-full">
                <div className="bg-[#4747a1] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Strategic Asset Allocation</h3>
                <p className="text-white/80">
                  Data-driven portfolio construction across equity, debt, and alternative investments
                </p>
              </div>
            </AnimationWrapper>

            {/* Card 3 */}
            <AnimationWrapper animation="scale-in" delay={0.3}>
              <div className="bg-[#343483]/50 rounded-lg p-8 text-white text-center h-full">
                <div className="bg-[#4747a1] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Fund Selection</h3>
                <p className="text-white/80">
                  Rigorous analysis and selection of top-performing PMS schemes and AIF categories
                </p>
              </div>
            </AnimationWrapper>

            {/* Card 4 */}
            <AnimationWrapper animation="scale-in" delay={0.4}>
              <div className="bg-[#343483]/50 rounded-lg p-8 text-white text-center h-full">
                <div className="bg-[#4747a1] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Continuous Portfolio Monitoring</h3>
                <p className="text-white/80">Regular performance tracking and market-responsive rebalancing</p>
              </div>
            </AnimationWrapper>

            {/* Card 5 */}
            <AnimationWrapper animation="scale-in" delay={0.5}>
              <div className="bg-[#343483]/50 rounded-lg p-8 text-white text-center h-full">
                <div className="bg-[#4747a1] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClipboardCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Tax-Efficient Wealth Optimization</h3>
                <p className="text-white/80">Strategies to maximize returns while minimizing tax implications</p>
              </div>
            </AnimationWrapper>

            {/* Card 6 */}
            <AnimationWrapper animation="scale-in" delay={0.6}>
              <div className="bg-[#343483]/50 rounded-lg p-8 text-white text-center h-full">
                <div className="bg-[#4747a1] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Long-term Wealth Creation</h3>
                <p className="text-white/80">
                  Focus on sustainable growth and capital appreciation through market cycles
                </p>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <StrategyTimeline />

      {/* Features Section */}
      <ParallaxSection className="py-20 bg-white section-safe">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <div>
              <TextReveal
                as="h2"
                className="inline-block text-xl sm:text-2xl md:text-3xl font-bold tracking-normal text-blue-800 leading-relaxed"
                stagger={0.05}
              >
                <span style={{ wordSpacing: "0.1em" }}>Why&nbsp;Choose&nbsp;Bharat&nbsp;Alternates</span>
              </TextReveal>
            </div>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-800">
              We combine deep market expertise with personalized strategies to deliver exceptional value to our clients.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: TrendingUp,
                title: "Consistent Performance",
                description:
                  "Our strategies have consistently outperformed market benchmarks with 18-22% CAGR over the long term.",
                hoverClass: "hover:bg-blue-50 hover:border-blue-300",
                iconClass: "bg-blue-100 text-blue-600",
                iconHoverClass: "group-hover:bg-blue-200 group-hover:text-blue-700",
                titleClass: "text-blue-800",
                accentClass: "bg-blue-500",
              },
              {
                icon: Shield,
                title: "Risk Management",
                description:
                  "Sophisticated risk management techniques to protect and grow your wealth in all market conditions.",
                hoverClass: "hover:bg-indigo-50 hover:border-indigo-300",
                iconClass: "bg-indigo-100 text-indigo-600",
                iconHoverClass: "group-hover:bg-indigo-200 group-hover:text-indigo-700",
                titleClass: "text-indigo-800",
                accentClass: "bg-indigo-500",
              },
              {
                icon: Users,
                title: "Expert Team",
                description:
                  "Seasoned investment professionals with decades of combined experience across various market cycles.",
                hoverClass: "hover:bg-purple-50 hover:border-purple-300",
                iconClass: "bg-purple-100 text-purple-600",
                iconHoverClass: "group-hover:bg-purple-200 group-hover:text-purple-700",
                titleClass: "text-purple-800",
                accentClass: "bg-purple-500",
              },
              {
                icon: Briefcase,
                title: "Customized Solutions",
                description:
                  "Tailored investment strategies aligned with your financial goals, risk appetite, and time horizon.",
                hoverClass: "hover:bg-teal-50 hover:border-teal-300",
                iconClass: "bg-teal-100 text-teal-600",
                iconHoverClass: "group-hover:bg-teal-200 group-hover:text-teal-700",
                titleClass: "text-teal-800",
                accentClass: "bg-teal-500",
              },
              {
                icon: BarChart2,
                title: "Transparent Reporting",
                description:
                  "Comprehensive performance reports with complete transparency on fees and investment decisions.",
                hoverClass: "hover:bg-cyan-50 hover:border-cyan-300",
                iconClass: "bg-cyan-100 text-cyan-600",
                iconHoverClass: "group-hover:bg-cyan-200 group-hover:text-cyan-700",
                titleClass: "text-cyan-800",
                accentClass: "bg-cyan-500",
              },
              {
                icon: LineChart,
                title: "Research-Driven",
                description:
                  "In-depth research and analysis driving our investment decisions for optimal portfolio construction.",
                hoverClass: "hover:bg-sky-50 hover:border-sky-300",
                iconClass: "bg-sky-100 text-sky-600",
                iconHoverClass: "group-hover:bg-sky-200 group-hover:text-sky-700",
                titleClass: "text-sky-800",
                accentClass: "bg-sky-500",
              },
            ].map((feature, index) => (
              <AnimationWrapper key={index} animation="scale-in" delay={index * 0.1}>
                <Card
                  className={`feature-card relative overflow-hidden transition-all duration-500 
                  hover:-translate-y-2 hover:shadow-xl group border border-gray-200 ${feature.hoverClass}`}
                >
                  <CardHeader className="relative z-10">
                    <div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full 
                      transition-all duration-500 group-hover:scale-110 ${feature.iconClass} ${feature.iconHoverClass}`}
                    >
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className={`transition-all duration-500 ${feature.titleClass}`}>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-gray-800 group-hover:text-gray-900 transition-colors duration-500">
                      {feature.description}
                    </p>
                  </CardContent>
                  <div
                    className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 ${feature.accentClass}`}
                  ></div>
                </Card>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Interactive Table Section */}
     
     

      {/* Logo Slider Section - Added above FAQ */}
      <LogoSlider
        title="Elite Portfolio Managers In India"
        subtitle="Partnering with India's premier SEBI-registered portfolio managers and alternative investment funds to deliver exceptional investment opportunities and wealth creation strategies."
      />

      {/* FAQ Section */}
      <ParallaxSection className="py-24 bg-gray-50 section-safe">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-in">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <TextReveal as="h2" className="text-3xl font-bold tracking-tight text-blue-900 md:text-4xl">
                <span style={{ wordSpacing: "0.1em" }}>Frequently&nbsp;Asked&nbsp;Questions</span>
              </TextReveal>
              <p className="mt-6 text-lg text-gray-900">
                Find answers to common questions about our investment services
              </p>
            </div>
          </AnimationWrapper>

          <div className="mx-auto max-w-3xl">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`border-b border-gray-100 ${index === faqData.length - 1 ? "border-b-0" : ""}`}
                >
                  <button className="flex justify-between items-center w-full px-8 py-6 text-left focus:outline-none group hover:bg-blue-50 transition-colors duration-300">
                    <span className="text-lg font-medium text-blue-800">{item.question}</span>
                    <svg
                      className="w-6 h-6 text-blue-600 transform transition-transform duration-300 group-hover:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="px-8 pb-6">
                    <p className="text-gray-800 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Statistics Section */}
      <section className="relative py-24 bg-[#020b1c] text-white overflow-hidden section-safe">
        {/* Background gradient and blur effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020b1c] to-[#041633] opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>

        {/* Floating orbs/glass elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2
              className="inline-block text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-6"
              style={{ backdropFilter: "blur(4px)" }}
            >
              How Bharat Alternates Is Transforming India's Wealth Management Landscape?
            </h2>
            <p className="text-blue-100/90 max-w-3xl mx-auto text-lg">
              Our platform brings together India's most comprehensive network of portfolio managers, investment schemes,
              and asset management companies.
            </p>
            <div className="w-32 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8 rounded-full opacity-70"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                number: 800,
                label: "Portfolio manager's in India",
                icon: Users,
                gradient: "from-blue-400/20 to-blue-600/20",
              },
              {
                number: 500,
                label: "Portfolio management schemes in India",
                icon: Briefcase,
                gradient: "from-indigo-400/20 to-indigo-600/20",
              },
              {
                number: 300,
                label: "Alternative Investment funds in India",
                icon: BarChart2,
                gradient: "from-purple-400/20 to-purple-600/20",
              },
              {
                number: 2500,
                label: "Mutual fund schemes in India",
                icon: LineChart,
                gradient: "from-pink-400/20 to-pink-600/20",
              },
              {
                number: 40,
                label: "Asset management companies in India",
                icon: Building2,
                gradient: "from-cyan-400/20 to-cyan-600/20",
              },
            ].map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white section-safe">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-in">
            <div className="mx-auto max-w-3xl text-center">
              <TextReveal as="h2" className="text-3xl font-bold tracking-tight md:text-4xl">
                <span style={{ wordSpacing: "0.2em" }}>Ready to Start Your Investment Journey?</span>
              </TextReveal>
              <p className="mt-4 text-lg opacity-90">
                Schedule a consultation with our investment experts to discuss how our solutions can help you achieve
                your financial goals.
              </p>
              <div className="mt-10">
                <CalendlyButton variant="secondary" size="lg" showArrow>
                  Book a call
                </CalendlyButton>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </>
  )
}
