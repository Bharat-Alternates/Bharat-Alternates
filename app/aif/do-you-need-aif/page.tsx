"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, CheckCircle, XCircle, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnimationWrapper from "@/components/animation-wrapper"
import TextReveal from "@/components/text-reveal"
import { ParallaxSection } from "@/components/parallax-section"

export default function DoYouNeedAIFPage() {
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
      scrollTrigger: {
        trigger: pageRef.current,
        start: "top 80%",
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div ref={pageRef}>
      <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 py-20 text-white md:py-28 lg:py-36">
        <div className="container-custom">
          <AnimationWrapper animation="slide-up">
            <div className="mx-auto max-w-3xl text-center">
              <TextReveal as="h1" className="text-4xl font-bold md:text-5xl lg:text-6xl" stagger={0.05}>
                Do You Need Alternative Investment Funds?
              </TextReveal>
              <p className="mt-6 text-lg text-slate-300 md:text-xl">
                Evaluate if AIFs are the right addition to your investment portfolio based on your financial profile
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Expert Advice</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900"
                  asChild
                >
                  <Link href="/aif/what-is-aif">Learn About AIF</Link>
                </Button>
              </div>
            </div>
          </AnimationWrapper>
        </div>
        <div className="absolute inset-0 z-0 opacity-20">
          <svg
            className="h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 100V0l100 100H0z" fill="url(#paint0_linear)" />
            <defs>
              <linearGradient id="paint0_linear" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4F46E5" />
                <stop offset="1" stopColor="#0F172A" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      <ParallaxSection className="py-16 bg-white" speed={0.1} direction="up">
        <div className="container-custom">
          <div className="grid gap-12 md:grid-cols-2">
            <AnimationWrapper animation="slide-in-left">
              <div>
                <TextReveal as="h2" className="text-3xl font-bold tracking-tight md:text-4xl">
                  Is AIF Right For You?
                </TextReveal>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p>
                    Alternative Investment Funds (AIFs) are sophisticated investment vehicles designed for
                    ultra-high-net-worth individuals and institutional investors seeking diversification beyond
                    traditional asset classes. With a minimum investment requirement of ₹1 crore, AIFs cater to a
                    specific segment of investors.
                  </p>
                  <p>
                    Before considering AIFs, it's essential to evaluate if they align with your financial situation,
                    investment goals, risk appetite, and liquidity needs. AIFs offer unique opportunities but also come
                    with specific considerations that may not suit every investor.
                  </p>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Key Considerations</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Investment Capacity</span> – Do you have at least ₹1 crore
                        available for investment?
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Lock-in Period</span> – Can you commit your capital for 3-5 years
                        or longer?
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Risk Tolerance</span> – Are you comfortable with higher risk for
                        potentially higher returns?
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Portfolio Diversification</span> – Do you already have a
                        well-established core portfolio?
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimationWrapper>
            <AnimationWrapper animation="slide-in-right" delay={0.3}>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://img.freepik.com/free-vector/investment-data-concept-illustration_114360-7438.jpg"
                  alt="Alternative Investments"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </ParallaxSection>

      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <AnimationWrapper animation="fade-in">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <TextReveal as="h2" className="text-3xl font-bold tracking-tight md:text-4xl">
                AIF Suitability Assessment
              </TextReveal>
              <p className="mt-4 text-lg text-muted-foreground">
                Evaluate if Alternative Investment Funds align with your investment profile
              </p>
            </div>
          </AnimationWrapper>

          <Tabs defaultValue="investor-profile" className="animate-card">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="investor-profile">Investor Profile</TabsTrigger>
              <TabsTrigger value="financial-goals">Financial Goals</TabsTrigger>
              <TabsTrigger value="investment-style">Investment Style</TabsTrigger>
            </TabsList>
            <TabsContent value="investor-profile">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600 flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5" /> Ideal for AIF
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>Ultra-high-net-worth individuals with ₹1 crore+ to invest</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>Sophisticated investors with market knowledge</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>Investors seeking portfolio diversification</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>Those comfortable with illiquid investments</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>Investors with high risk tolerance</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-600 flex items-center">
                      <XCircle className="mr-2 h-5 w-5" /> May Not Be Suitable
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                        <span>Investors with less than ₹1 crore available for investment</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                        <span>Novice investors with limited market knowledge</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                        <span>Individuals seeking guaranteed returns</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                        <span>Those with low risk tolerance</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                        <span>Investors needing immediate liquidity</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="financial-goals">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600 flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5" /> Aligned Goals
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>Long-term wealth creation (5+ years horizon)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>Portfolio diversification beyond traditional assets</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>Access to unique investment opportunities</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>Potential for higher returns than traditional investments</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>Sophisticated wealth management strategies</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-600 flex items-center">
                      <XCircle className="mr-2 h-5 w-5" /> Misaligned Goals
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                        <span>Short-term investment needs (less than 3 years)</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                        <span>Regular income generation</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                        <span>Emergency fund creation</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                        <span>Capital preservation as primary objective</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                        <span>Predictable, fixed returns</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="investment-style">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600 flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5" /> Compatible Style
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>Comfort with sophisticated investment structures</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>Willingness to explore non-traditional asset classes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>Patience with longer investment horizons</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>Comfort with performance-based fee structures</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>Appreciation for exclusive investment opportunities</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-600 flex items-center">
                      <XCircle className="mr-2 h-5 w-5" /> Incompatible Style
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                        <span>Preference for simple, easy-to-understand investments</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                        <span>Need for high liquidity and quick access to funds</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                        <span>Discomfort with complex fee structures</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                        <span>Preference for daily valuation and transparency</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                        <span>Aversion to lock-in periods</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <ParallaxSection className="py-16 bg-white" speed={0.1} direction="up">
        <div className="container-custom">
          <AnimationWrapper animation="fade-in">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <TextReveal as="h2" className="text-3xl font-bold tracking-tight md:text-4xl">
                Types of AIFs to Consider
              </TextReveal>
              <p className="mt-4 text-lg text-muted-foreground">
                Different AIF categories serve different investment objectives
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid gap-8 md:grid-cols-3">
            <AnimationWrapper animation="scale-in" delay={0.1}>
              <Card className="overflow-hidden hover-lift h-full">
                <div className="h-48 overflow-hidden bg-blue-50">
                  <img
                    src="https://img.freepik.com/free-vector/startup-life-concept-illustration_114360-1068.jpg"
                    alt="Category I AIF"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Category I AIF</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Funds that invest in startups, early-stage ventures, social ventures, SMEs, infrastructure, or other
                    sectors considered socially or economically desirable.
                  </p>
                  <p className="font-medium">Suitable for investors who:</p>
                  <ul className="mt-2 space-y-1 list-disc pl-5 text-muted-foreground">
                    <li>Want to support early-stage businesses</li>
                    <li>Seek venture capital-type investments</li>
                    <li>Are interested in social impact alongside returns</li>
                    <li>Have a high risk tolerance</li>
                  </ul>
                </CardContent>
              </Card>
            </AnimationWrapper>

            <AnimationWrapper animation="scale-in" delay={0.2}>
              <Card className="overflow-hidden hover-lift h-full">
                <div className="h-48 overflow-hidden bg-blue-50">
                  <img
                    src="https://img.freepik.com/free-vector/private-equity-concept-illustration_114360-8022.jpg"
                    alt="Category II AIF"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Category II AIF</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Funds that don't fall under Category I or III, including private equity funds, debt funds, real
                    estate funds, and fund of funds.
                  </p>
                  <p className="font-medium">Suitable for investors who:</p>
                  <ul className="mt-2 space-y-1 list-disc pl-5 text-muted-foreground">
                    <li>Seek exposure to private equity</li>
                    <li>Are interested in real estate investments</li>
                    <li>Want diversified alternative investments</li>
                    <li>Have a medium to high risk tolerance</li>
                  </ul>
                </CardContent>
              </Card>
            </AnimationWrapper>

            <AnimationWrapper animation="scale-in" delay={0.3}>
              <Card className="overflow-hidden hover-lift h-full">
                <div className="h-48 overflow-hidden bg-blue-50">
                  <img
                    src="https://img.freepik.com/free-vector/stock-market-concept-illustration_114360-7788.jpg"
                    alt="Category III AIF"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Category III AIF</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Funds that employ diverse or complex trading strategies, including hedge funds, PIPE funds, and
                    funds that use leverage.
                  </p>
                  <p className="font-medium">Suitable for investors who:</p>
                  <ul className="mt-2 space-y-1 list-disc pl-5 text-muted-foreground">
                    <li>Seek absolute returns regardless of market conditions</li>
                    <li>Are comfortable with sophisticated strategies</li>
                    <li>Want exposure to derivatives and structured products</li>
                    <li>Have a high risk tolerance</li>
                  </ul>
                </CardContent>
              </Card>
            </AnimationWrapper>
          </div>
        </div>
      </ParallaxSection>

      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <AnimationWrapper animation="fade-in">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <TextReveal as="h2" className="text-3xl font-bold tracking-tight md:text-4xl">
                Important Considerations
              </TextReveal>
              <p className="mt-4 text-lg text-muted-foreground">Key factors to evaluate before investing in AIFs</p>
            </div>
          </AnimationWrapper>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Lock-in Period",
                description:
                  "Most AIFs have lock-in periods ranging from 3-10 years. Ensure you can commit capital for this duration.",
                icon: AlertTriangle,
              },
              {
                title: "Fee Structure",
                description:
                  "AIFs typically charge management fees (1-2%) and performance fees (10-20% of profits). Understand the impact on returns.",
                icon: AlertTriangle,
              },
              {
                title: "Tax Implications",
                description:
                  "Different AIF categories have different tax treatments. Consult a tax advisor to understand implications.",
                icon: AlertTriangle,
              },
              {
                title: "Risk Profile",
                description:
                  "AIFs often involve higher risk than traditional investments. Assess if this aligns with your risk tolerance.",
                icon: AlertTriangle,
              },
              {
                title: "Regulatory Framework",
                description:
                  "AIFs are regulated by SEBI but offer less standardization than mutual funds. Understand the regulatory protections.",
                icon: AlertTriangle,
              },
              {
                title: "Portfolio Allocation",
                description:
                  "AIFs should typically represent only a portion of your overall portfolio, not your entire investment strategy.",
                icon: AlertTriangle,
              },
            ].map((consideration, index) => (
              <AnimationWrapper key={index} animation="scale-in" delay={index * 0.1}>
                <Card className="hover-lift">
                  <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                    <consideration.icon className="h-6 w-6 text-amber-500 mt-1" />
                    <CardTitle>{consideration.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{consideration.description}</p>
                  </CardContent>
                </Card>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 gradient-bg text-white">
        <div className="container-custom">
          <AnimationWrapper animation="fade-in">
            <div className="mx-auto max-w-3xl text-center">
              <TextReveal as="h2" className="text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Explore if AIF is Right for You?
              </TextReveal>
              <p className="mt-4 text-lg opacity-90">
                Schedule a consultation with our investment experts to discuss your financial goals and determine if
                AIFs align with your investment strategy.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link href="/aif/who-should-invest">Who Should Invest in AIF?</Link>
                </Button>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </div>
  )
}
