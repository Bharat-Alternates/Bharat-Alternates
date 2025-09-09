"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, BookOpen, BarChart2, PieChart, ArrowRight } from "lucide-react"
import { CalendlyButton } from "@/components/calendly-button"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

// Card hover animation
const cardHoverVariants = {
  hover: {
    y: -5,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
    },
  },
}

// Accordion animation
const accordionVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
}

export default function AIFFAQClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <style jsx global>{`
        @keyframes drawLine {
          0% { stroke-dasharray: 1000; stroke-dashoffset: 1000; }
          100% { stroke-dasharray: 1000; stroke-dashoffset: 0; }
        }
        
        @keyframes growX20 {
          0% { width: 0%; }
          100% { width: 20%; }
        }
        
        @keyframes growX30 {
          0% { width: 0%; }
          100% { width: 30%; }
        }
        
        @keyframes growX40 {
          0% { width: 0%; }
          100% { width: 40%; }
        }
        
        @keyframes growY40 {
          0% { height: 0%; }
          100% { height: 40%; }
        }
        
        @keyframes growY60 {
          0% { height: 0%; }
          100% { height: 60%; }
        }
        
        @keyframes growY80 {
          0% { height: 0%; }
          100% { height: 80%; }
        }
        
        @keyframes bounceSubtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes pulseSlow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-draw-line {
          animation: drawLine 2s ease-in-out forwards;
        }
        
        .animate-grow-x-20 {
          animation: growX20 1.5s ease-out forwards;
        }
        
        .animate-grow-x-30 {
          animation: growX30 1.5s ease-out forwards;
        }
        
        .animate-grow-x-40 {
          animation: growX40 1.5s ease-out forwards;
        }
        
        .animate-grow-y-40 {
          animation: growY40 1.5s ease-out forwards;
        }
        
        .animate-grow-y-60 {
          animation: growY60 1.5s ease-out forwards;
        }
        
        .animate-grow-y-80 {
          animation: growY80 1.5s ease-out forwards;
        }
        
        .animate-bounce-subtle {
          animation: bounceSubtle 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 3s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28 lg:py-36">
        {/* Animated Bubbles - Reduced quantity and slower animation */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="relative w-full h-full">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`absolute rounded-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm animate-floating-${(i % 3) + 1}`}
                style={{
                  width: `${Math.floor(Math.random() * 80 + 40)}px`,
                  height: `${Math.floor(Math.random() * 80 + 40)}px`,
                  top: `${Math.floor(Math.random() * 100)}%`,
                  left: `${Math.floor(Math.random() * 100)}%`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Stable Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-blue-900" />

        {/* Content Container with improved stability */}
        <div className="container relative z-20 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="relative mb-8">
              {/* Decorative Lines - Reduced animation speed */}
              <div className="absolute -left-4 -top-4 h-20 w-20 animate-spin-slow opacity-20">
                <div className="h-full w-full border-l-2 border-t-2 border-white"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 h-20 w-20 animate-spin-slow opacity-20">
                <div className="h-full w-full border-b-2 border-r-2 border-white"></div>
              </div>

              <h1 className="relative text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                Frequently Asked Questions about AIF
              </h1>
            </div>

            {/* Paragraph with enhanced visibility and stability */}
            <div className="relative z-20 backdrop-blur-sm bg-navy-900/50 rounded-lg p-6 mb-12 shadow-lg">
              <p className="text-lg text-white md:text-xl font-normal leading-relaxed">
                Find answers to common questions about Alternative Investment Funds, including types, benefits, tax
                implications, and more.
              </p>
            </div>

            <div className="relative flex flex-wrap justify-center gap-6">
              <Button
                size="lg"
                className="relative group bg-gradient-to-r from-white to-blue-50 text-navy-900 hover:to-white px-8 py-6 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 rounded-xl"
                asChild
              >
                <Link href="/contact" className="relative flex items-center gap-2">
                  <span className="relative z-10 font-semibold text-lg">Book a Call</span>
                  <div className="relative z-10 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="relative bg-white border-0 text-navy-900 px-8 py-6 rounded-xl hover:bg-gray-50"
                asChild
              >
                <Link href="/aif/what-is-aif" className="relative flex items-center gap-2">
                  <span className="font-semibold text-lg">Learn About AIF</span>
                  <div className="w-6 h-6 rounded-full bg-navy-900 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Subtle Floating Elements */}
        <div className="absolute left-0 top-0 -z-10 h-full w-full opacity-30">
          <div className="absolute left-1/4 top-1/4 h-40 w-40 rounded-full bg-white/5 blur-3xl"></div>
          <div className="absolute right-1/4 bottom-1/4 h-40 w-40 rounded-full bg-white/5 blur-3xl"></div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* FAQ Categories */}
        <div className="mb-16">
          <Card className="overflow-hidden bg-white shadow-xl">
            <div className="p-6 md:p-8">
              <div className="max-w-4xl mx-auto">
                <Tabs defaultValue="basics" className="w-full">
                  <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 h-auto mb-6 p-1 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                    <TabsTrigger
                      value="basics"
                      className="py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300"
                    >
                      <BarChart2 className="w-4 h-4 mr-2" /> Basics
                    </TabsTrigger>
                    <TabsTrigger
                      value="investment"
                      className="py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300"
                    >
                      <PieChart className="w-4 h-4 mr-2" /> Investment
                    </TabsTrigger>
                    <TabsTrigger
                      value="comparison"
                      className="py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300"
                    >
                      <ChevronRight className="w-4 h-4 mr-2" /> Comparisons
                    </TabsTrigger>
                    <TabsTrigger
                      value="technical"
                      className="py-3 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white transition-all duration-300"
                    >
                      <BookOpen className="w-4 h-4 mr-2" /> Technical
                    </TabsTrigger>
                  </TabsList>

                  {/* Tab content for Basics */}
                  <TabsContent value="basics" className="mt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What is AIF?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p className="mb-2">
                            Alternative Investment Funds (AIFs) are privately pooled investment vehicles that collect
                            funds from sophisticated investors to invest in accordance with a defined investment policy.
                            AIFs in India are regulated by SEBI and require a minimum investment of ₹1 crore.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What are the different categories of AIFs?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>SEBI classifies AIFs into three categories:</p>
                          <ul className="list-disc pl-6 mt-2">
                            <li>
                              Category I: Includes venture capital funds, angel funds, SME funds, and social impact
                              funds that have positive spillover effects on the economy.
                            </li>
                            <li>
                              Category II: Includes private equity funds, debt funds, and real estate funds that don't
                              leverage or undertake borrowing except for meeting operational requirements.
                            </li>
                            <li>
                              Category III: Includes hedge funds that employ diverse or complex trading strategies,
                              often with leverage through investments in listed or unlisted derivatives.
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What is the minimum ticket size for AIF investment?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            The minimum investment amount in AIFs in India is ₹1 crore as per SEBI regulations. However,
                            for angel funds within Category I AIFs, the minimum investment is reduced to ₹25 lakhs.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          How are AIFs different from mutual funds?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            AIFs differ from mutual funds in several ways: they require a higher minimum investment (₹1
                            crore vs ₹500 for mutual funds), are less regulated, have more flexible investment
                            strategies, typically have longer lock-in periods, and cater exclusively to sophisticated
                            investors.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-5" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What are the key regulations governing AIFs in India?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            AIFs in India are governed by the SEBI (Alternative Investment Funds) Regulations, 2012.
                            These regulations define the structure, categories, investment conditions, and disclosure
                            requirements for AIFs.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-6" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          Are AIFs suitable for long-term investors?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            Yes, AIFs are ideal for long-term investors with a higher risk appetite. The longer
                            investment horizon allows AIFs to realize returns through the growth of underlying assets.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-7" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What is the ideal investor profile for AIFs?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            AIFs are best suited for sophisticated investors such as HNIs, institutional investors, and
                            corporates who seek diversification and are comfortable with high-risk, high-return
                            strategies.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-8" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          Can a beginner invest in an AIF?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            AIFs are typically not recommended for beginners due to their complexity and high minimum
                            investment amounts. They are better suited for experienced investors with a deep
                            understanding of alternative asset classes.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-9" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          Are AIFs suitable for retirement planning?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            AIFs can be a good option for retirement planning, particularly for investors looking for
                            higher returns over a long-term horizon, as long as the investor understands the risks
                            involved.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-10" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What is the expected return from an AIF?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            AIF returns vary widely based on the fund's strategy and asset class, but they generally
                            offer higher returns compared to traditional investments, especially in the long term.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>

                  {/* Tab content for Investment */}
                  <TabsContent value="investment" className="mt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          Who can invest in AIFs?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            AIFs are targeted at sophisticated investors such as High-Net-Worth Individuals (HNIs),
                            corporates, family offices, and institutional investors who can commit a minimum of ₹1 crore
                            and understand the associated risks.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What is the typical lock-in period for AIFs?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            AIFs typically have lock-in periods ranging from 3-10 years, depending on the fund category
                            and strategy. Category I and II AIFs usually have longer lock-in periods (5-7 years)
                            compared to Category III funds, which may offer more frequent redemption windows.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          Can NRIs invest in AIFs in India?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            Yes, NRIs can invest in AIFs in India using their NRE/NRO accounts, subject to compliance
                            with FEMA regulations. They must fulfill KYC requirements and may have additional reporting
                            obligations related to their foreign investor status.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What are the typical fees associated with AIFs?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            AIFs typically charge a management fee (1-2% of assets under management annually) and a
                            performance fee (usually 10-20% of profits above a predefined hurdle rate). Some funds also
                            charge setup fees, administration fees, and exit fees.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-5" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          How are AIF returns distributed to investors?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>AIF returns are typically distributed through:</p>
                          <ul className="list-disc pl-6 mt-2">
                            <li>Dividend payments during the fund's lifecycle</li>
                            <li>Capital appreciation at the time of exit</li>
                            <li>Periodic redemptions (more common in Category III AIFs)</li>
                            <li>Final disbursement when the fund is wound up at the end of its tenure</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-6" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What are the key benefits of investing in an AIF?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            AIFs provide the potential for higher returns, exposure to niche sectors, professional
                            management, and tax efficiency in some cases. They also offer enhanced portfolio
                            diversification.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-7" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          How do AIFs generate returns?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            Returns from AIFs are generated through capital appreciation, dividends, interest income, or
                            exits from investments, such as mergers, acquisitions, or IPOs.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-8" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What is the typical investment strategy followed by AIFs?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            AIFs follow a variety of investment strategies depending on the category, such as
                            equity-focused strategies in Category I, debt and equity blend in Category II, and complex,
                            high-risk strategies in Category III.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-9" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          Are AIFs suitable for conservative investors?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            AIFs generally carry higher risk compared to traditional investments like bonds or fixed
                            deposits. Conservative investors may find Category II AIFs suitable due to their more
                            balanced risk-return profiles.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-10" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What makes Category III AIFs different from others?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            Category III AIFs adopt high-risk, high-return strategies like hedge fund strategies, using
                            derivatives, short selling, and arbitrage to generate returns, and they cater to
                            sophisticated investors.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>

                  {/* Tab content for Comparison */}
                  <TabsContent value="comparison" className="mt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          AIF vs PMS: Which is better for you?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p className="mb-2">The choice between AIF and PMS depends on several factors:</p>
                          <ul className="list-disc pl-6 mt-2 mb-2">
                            <li>
                              <strong>Investment amount:</strong> PMS requires ₹50 lakhs minimum while AIF requires ₹1
                              crore
                            </li>
                            <li>
                              <strong>Customization:</strong> PMS offers more personalized portfolio management while
                              AIFs have a pooled structure
                            </li>
                            <li>
                              <strong>Asset classes:</strong> AIFs can access a wider range of alternative assets like
                              private equity or real estate
                            </li>
                            <li>
                              <strong>Lock-in:</strong> AIFs typically have longer lock-in periods (3-10 years) compared
                              to PMS
                            </li>
                            <li>
                              <strong>Strategy:</strong> PMS strategies are generally more liquid and focus on listed
                              securities
                            </li>
                          </ul>
                          <p>
                            For investors primarily focused on listed equity with ₹50 lakhs-1 crore, PMS may be
                            suitable. For those seeking alternative assets with ₹1 crore+, AIFs could be preferable.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          AIF vs Mutual Funds: Key differences
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p className="mb-2">Key differences between AIFs and mutual funds include:</p>
                          <ul className="list-disc pl-6 mt-2">
                            <li>
                              <strong>Minimum investment:</strong> AIFs require ₹1 crore while mutual funds can start
                              from ₹500
                            </li>
                            <li>
                              <strong>Regulatory oversight:</strong> Mutual funds have stricter regulations than AIFs
                            </li>
                            <li>
                              <strong>Investment universe:</strong> AIFs can invest in a broader range of assets
                              including unlisted securities
                            </li>
                            <li>
                              <strong>Strategy flexibility:</strong> AIFs can use more complex strategies including
                              leverage and derivatives
                            </li>
                            <li>
                              <strong>Transparency:</strong> Mutual funds offer greater transparency with daily NAVs
                            </li>
                            <li>
                              <strong>Liquidity:</strong> Mutual funds typically offer better liquidity than AIFs
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          AIF vs Angel Investing: How do they compare?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p className="mb-2">
                            Angel investing involves directly investing in startups, while AIFs (particularly Category
                            I) offer a more structured approach to startup investments:
                          </p>
                          <ul className="list-disc pl-6 mt-2">
                            <li>
                              <strong>Diversification:</strong> AIFs provide exposure to multiple startups, reducing
                              risk compared to direct angel investments
                            </li>
                            <li>
                              <strong>Expertise:</strong> AIFs have professional fund managers with due diligence
                              capabilities
                            </li>
                            <li>
                              <strong>Minimum investment:</strong> Angel investments can sometimes be made with smaller
                              amounts than the ₹1 crore AIF minimum
                            </li>
                            <li>
                              <strong>Control:</strong> Angel investing offers more direct involvement with startups
                            </li>
                            <li>
                              <strong>Due diligence:</strong> AIFs conduct more systematic due diligence than individual
                              angel investors typically can
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          How do Category I, II, and III AIFs differ?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p className="mb-2">The three AIF categories differ in several ways:</p>
                          <ul className="list-disc pl-6 mt-2">
                            <li>
                              <strong>Category I:</strong> Includes venture capital, angel, social impact funds;
                              receives favorable regulatory treatment; focuses on early-stage and specialized sectors
                              with positive economic impact
                            </li>
                            <li>
                              <strong>Category II:</strong> Includes private equity, debt funds, real estate funds;
                              doesn't use leverage except for operational needs; most common AIF category in India
                            </li>
                            <li>
                              <strong>Category III:</strong> Includes hedge funds; can use complex trading strategies
                              and leverage; invests in both listed and unlisted derivatives
                            </li>
                          </ul>
                          <p className="mt-2">
                            The categories also have different tax treatments, with Category I and II generally enjoying
                            pass-through status while Category III is taxed at the fund level at maximum marginal rates.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-5" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          How do AIFs compare to mutual funds?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            AIFs are more flexible, allowing access to non-traditional asset classes, while mutual funds
                            focus on traditional asset classes like stocks and bonds. AIFs typically offer higher
                            returns but come with higher risks.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-6" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          Which is better: AIF or PMS?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            Both AIFs and Portfolio Management Services (PMS) offer tailored strategies, but AIFs focus
                            on alternative assets, whereas PMS is typically equity- and debt-focused. AIFs generally
                            have higher entry thresholds and longer lock-in periods.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-7" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          How is an AIF different from a hedge fund?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            Hedge funds are a subset of Category III AIFs that focus on highly sophisticated investment
                            strategies such as derivatives and short selling. Not all AIFs are hedge funds, but all
                            hedge funds are AIFs.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-8" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          Which is more liquid: AIF or mutual funds?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            Mutual funds are more liquid than AIFs, as they allow daily redemptions. AIFs, on the other
                            hand, usually have lock-in periods, making them less liquid.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-9" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          Is AIF better than investing in real estate?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            AIFs allow exposure to real estate indirectly, providing potential returns through real
                            estate-focused funds. Unlike direct property investments, AIFs offer professional management
                            and diversification but may have less liquidity.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>

                  {/* Tab content for Technical */}
                  <TabsContent value="technical" className="mt-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          How are AIFs taxed in India?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p className="mb-2">Taxation of AIFs depends on the category:</p>
                          <ul className="list-disc pl-6 mt-2">
                            <li>
                              <strong>Category I & II AIFs:</strong> Enjoy pass-through status where income is taxed in
                              the hands of investors, not at the fund level. Exceptions exist for certain income types.
                            </li>
                            <li>
                              <strong>Category III AIFs:</strong> Income is typically taxed at the fund level at Maximum
                              Marginal Rate (MMR), currently around 42.7%.
                            </li>
                            <li>
                              <strong>Long-term capital gains:</strong> Generally taxed at 10% above ₹1 lakh without
                              indexation benefits for listed equities, and 20% with indexation for unlisted securities.
                            </li>
                            <li>
                              <strong>Short-term capital gains:</strong> Taxed at 15% for listed equities and at
                              applicable slab rates for unlisted securities.
                            </li>
                          </ul>
                          <p className="mt-2">
                            Tax implications can be complex, and investors should consult a tax advisor for guidance
                            specific to their situation.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What is the fund lifecycle of an AIF?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p className="mb-2">The lifecycle of an AIF typically involves these phases:</p>
                          <ol className="list-decimal pl-6 mt-2">
                            <li>
                              <strong>Fundraising:</strong> Typically 6-18 months where the fund manager raises capital
                              from investors
                            </li>
                            <li>
                              <strong>Investment period:</strong> Usually 2-4 years where the fund deploys capital into
                              target investments
                            </li>
                            <li>
                              <strong>Value creation:</strong> 3-5 years where the fund manager works to grow the value
                              of investments
                            </li>
                            <li>
                              <strong>Exit/Harvest:</strong> 1-3 years where investments are sold to realize returns
                            </li>
                            <li>
                              <strong>Fund closure:</strong> Distribution of final proceeds and winding up of the fund
                            </li>
                          </ol>
                          <p className="mt-2">
                            The entire lifecycle typically spans 7-10 years for Category I and II AIFs, while Category
                            III funds may have shorter timeframes.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What is the governance structure of AIFs?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p className="mb-2">The governance structure of AIFs typically includes:</p>
                          <ul className="list-disc pl-6 mt-2">
                            <li>
                              <strong>Investment Manager:</strong> Responsible for fund operations and investment
                              decisions
                            </li>
                            <li>
                              <strong>Trustee:</strong> Holds fund assets in trust for investors and ensures compliance
                            </li>
                            <li>
                              <strong>Investment Committee:</strong> Evaluates and approves investment decisions
                            </li>
                            <li>
                              <strong>Advisory Board:</strong> Provides strategic guidance and addresses conflicts of
                              interest
                            </li>
                            <li>
                              <strong>SEBI:</strong> Provides regulatory oversight and ensures compliance with AIF
                              regulations
                            </li>
                          </ul>
                          <p className="mt-2">
                            Investors should review these governance mechanisms during due diligence to ensure proper
                            oversight and alignment of interests.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What are the reporting requirements for AIFs?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p className="mb-2">AIFs must adhere to several reporting requirements:</p>
                          <ul className="list-disc pl-6 mt-2">
                            <li>
                              <strong>SEBI reporting:</strong> Quarterly reports on activities, investments, and returns
                            </li>
                            <li>
                              <strong>Investor reporting:</strong> Typically quarterly updates on fund performance,
                              investments, and valuations
                            </li>
                            <li>
                              <strong>Annual audits:</strong> Financial statements must be audited annually
                            </li>
                            <li>
                              <strong>Valuation:</strong> Category I and II funds must conduct valuations at least once
                              a year, while Category III requires more frequent valuations
                            </li>
                            <li>
                              <strong>Material changes:</strong> Any material changes to the fund's structure or
                              strategy must be reported to SEBI
                            </li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-5" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What is Net Asset Value (NAV) in AIFs?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            Net Asset Value (NAV) in AIFs represents the per-unit value of the fund, calculated by
                            dividing the fund's total net asset value by the number of outstanding units. For Category I
                            and II AIFs, NAV is typically calculated quarterly or semi-annually, while Category III
                            funds may calculate NAV more frequently. Unlike mutual funds, AIF NAVs are not publicly
                            disclosed and are communicated directly to investors through regular reports.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-6" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What are the risks associated with AIFs?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            AIFs carry risks such as market volatility, illiquidity, concentration risk, and strategy
                            risk, particularly in high-risk Category III funds. Proper due diligence is required before
                            investing.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-7" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          How does the liquidity of AIFs compare with other investment options?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            AIFs generally have lower liquidity than traditional options such as mutual funds, with
                            lock-in periods typically ranging from 3 to 5 years depending on the AIF strategy.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-8" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          Can AIFs lose money?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            Yes, AIFs can underperform or experience capital losses, especially if the underlying
                            investments face adverse market conditions or poor asset performance.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-9" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          How do AIFs mitigate investment risks?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            AIFs manage risks through diversification, expert management, and hedging strategies. Please
                            note in equities risk cannot be mitigated rather risk can be managed by taking an informed
                            decision.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-10" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          How does a fund manager reduce risk in an AIF?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            Fund managers utilize asset allocation, market analysis, and diversification to reduce risk.
                            They actively monitor the portfolio and make adjustments based on market conditions.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-11" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What is the minimum investment in an AIF?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            The minimum investment in AIFs is typically ₹1 crore, making it suitable for high-net-worth
                            individuals (HNIs) and institutional investors.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-12" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What is the lock-in period for AIFs?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            The lock-in period for AIFs varies by fund type, but it typically ranges from 3 to 5 years,
                            during which investors cannot redeem their units.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-13" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What is a fund manager's role in AIF?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            The fund manager is responsible for selecting investments, managing the portfolio, and
                            ensuring that the AIF's strategy aligns with investor objectives. They also oversee risk
                            management and liquidity strategies.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-14" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          How are AIFs structured?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            AIFs are structured as trusts, where the fund manager manages the assets on behalf of the
                            investors, who are the beneficiaries of the trust.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-15" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What are the reporting requirements for AIFs?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            AIFs must provide periodic reports to investors, detailing the performance, asset
                            allocation, and any changes in the portfolio. They are also required to file reports with
                            SEBI.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-16" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What is the SEBI regulation for AIFs?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            SEBI regulates AIFs under the SEBI (Alternative Investment Funds) Regulations, 2012. These
                            regulations mandate transparency, disclosure, and governance standards for AIFs to protect
                            investors' interests.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-17" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What are the legal structures for AIFs?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            AIFs in India are generally structured as trusts, with a trustee overseeing the fund's
                            operations and a fund manager making investment decisions on behalf of the investors.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-18" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          Can AIFs invest in foreign assets?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            Yes, AIFs can invest in foreign assets, subject to FEMA and SEBI regulations, but they must
                            comply with specific foreign investment guidelines.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-19" className="border-b border-blue-100">
                        <AccordionTrigger className="text-lg font-medium hover:text-blue-700 transition-colors duration-200">
                          What are the responsibilities of an AIF trustee?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700">
                          <p>
                            The trustee of an AIF ensures that the fund is managed in compliance with SEBI regulations,
                            protects the interests of investors, and oversees the fund's operations and governance.
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="mx-auto text-center max-w-2xl mb-20">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Still have questions about AIFs?</h3>
            <p className="text-gray-600 mb-6">
              Our team of investment experts can help you understand if Alternative Investment Funds are right for your
              portfolio.
            </p>
            <CalendlyButton
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700"
              showArrow
            >
              Schedule a Consultation
            </CalendlyButton>
          </div>
        </div>
      </div>
    </div>
  )
}
