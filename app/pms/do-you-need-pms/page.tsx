"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnimationWrapper from "@/components/animation-wrapper"
import TextReveal from "@/components/text-reveal"
import { ParallaxSection } from "@/components/parallax-section"

export default function DoYouNeedPMSPage() {
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
                Do You Need Portfolio Management Services?
              </TextReveal>
              <p className="mt-6 text-lg text-slate-300 md:text-xl">
                Discover if PMS is the right investment solution for your financial goals and circumstances
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
                  <Link href="/pms/what-is-pms">Learn About PMS</Link>
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
                  Is PMS Right For You?
                </TextReveal>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p>
                    Portfolio Management Services (PMS) is a specialized investment solution designed for high-net-worth
                    individuals who seek personalized investment strategies and professional management of their wealth.
                  </p>
                  <p>
                    While PMS offers numerous advantages, it's important to determine if it aligns with your financial
                    situation, investment goals, and risk tolerance before making a commitment.
                  </p>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Key Considerations</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Investment Amount</span> – Do you have at least ₹50 lakhs
                        available for investment?
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Investment Horizon</span> – Are you looking for medium to
                        long-term wealth creation?
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Customization Needs</span> – Do you require a tailored investment
                        strategy?
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">Risk Tolerance</span> – Are you comfortable with market volatility
                        for potentially higher returns?
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimationWrapper>
            <AnimationWrapper animation="slide-in-right" delay={0.3}>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="https://img.freepik.com/free-vector/financial-advisor-giving-consultation-client_74855-4810.jpg"
                  alt="Financial Advisor Consultation"
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
                PMS Suitability Assessment
              </TextReveal>
              <p className="mt-4 text-lg text-muted-foreground">
                Evaluate if Portfolio Management Services align with your investment profile
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
                      <CheckCircle className="mr-2 h-5 w-5" /> Ideal for PMS
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>High-net-worth individuals with ₹50 lakhs+ to invest</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>Experienced investors familiar with market dynamics</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>Investors seeking personalized portfolio management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>Those who value professional expertise and active management</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>Investors with moderate to high risk tolerance</span>
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
                        <span>Investors with less than ₹50 lakhs available for investment</span>
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
                        <span>Those with very low risk tolerance</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                        <span>Investors needing immediate liquidity or short-term returns</span>
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
                        <span>Long-term wealth creation (3+ years horizon)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>Portfolio diversification beyond traditional investments</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>Beating inflation and market benchmarks</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>Building a retirement corpus</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>Creating a legacy or wealth transfer</span>
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
                        <span>Short-term trading or quick profits</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                        <span>Emergency fund creation</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                        <span>Immediate liquidity needs</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                        <span>Fixed income with guaranteed returns</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                        <span>Very short-term financial goals (less than 1 year)</span>
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
                        <span>Preference for professional management of investments</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>Desire for customized investment strategies</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>Comfort with delegating investment decisions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>Appreciation for research-driven investment approach</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                        <span>Value for transparency and detailed reporting</span>
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
                        <span>Preference for complete control over all investment decisions</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                        <span>Discomfort with market-linked returns</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                        <span>Reluctance to pay management and performance fees</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                        <span>Preference for passive, low-cost index investing only</span>
                      </li>
                      <li className="flex items-start">
                        <XCircle className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                        <span>Desire for daily trading and market timing</span>
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
                Benefits of Choosing PMS
              </TextReveal>
              <p className="mt-4 text-lg text-muted-foreground">
                For those who meet the criteria, PMS offers several advantages over other investment options
              </p>
            </div>
          </AnimationWrapper>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Personalized Strategy",
                description:
                  "Tailored investment approach based on your specific financial goals, risk tolerance, and time horizon.",
                image: "https://img.freepik.com/free-vector/financial-strategy-concept-illustration_114360-8860.jpg",
              },
              {
                title: "Professional Management",
                description:
                  "Access to experienced portfolio managers with deep market knowledge and research capabilities.",
                image: "https://img.freepik.com/free-vector/financial-advisor-concept-illustration_114360-8861.jpg",
              },
              {
                title: "Direct Ownership",
                description:
                  "Unlike mutual funds, you directly own the securities in your portfolio, providing greater transparency.",
                image: "https://img.freepik.com/free-vector/stock-market-analysis-concept-illustration_114360-8076.jpg",
              },
              {
                title: "Higher Flexibility",
                description: "Ability to customize your portfolio and make specific investment choices or exclusions.",
                image: "https://img.freepik.com/free-vector/investment-data-concept-illustration_114360-5159.jpg",
              },
              {
                title: "Performance-Based Fee Structure",
                description:
                  "Alignment of interests with portfolio managers who earn more when your investments perform well.",
                image: "https://img.freepik.com/free-vector/financial-growth-concept-illustration_114360-4885.jpg",
              },
              {
                title: "Detailed Reporting",
                description:
                  "Comprehensive performance reports and portfolio analytics for better investment insights.",
                image: "https://img.freepik.com/free-vector/data-report-illustration-concept_114360-883.jpg",
              },
            ].map((benefit, index) => (
              <AnimationWrapper key={index} animation="scale-in" delay={index * 0.1}>
                <Card className="overflow-hidden hover-lift h-full">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={benefit.image || "/placeholder.svg"}
                      alt={benefit.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </ParallaxSection>

      <section className="py-16 gradient-bg text-white">
        <div className="container-custom">
          <AnimationWrapper animation="fade-in">
            <div className="mx-auto max-w-3xl text-center">
              <TextReveal as="h2" className="text-3xl font-bold tracking-tight md:text-4xl">
                Ready to Explore if PMS is Right for You?
              </TextReveal>
              <p className="mt-4 text-lg opacity-90">
                Schedule a consultation with our investment experts to discuss your financial goals and determine if PMS
                aligns with your needs.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link href="/pms/who-should-invest">Who Should Invest in PMS?</Link>
                </Button>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </div>
  )
}
