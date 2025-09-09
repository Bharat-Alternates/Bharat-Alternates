import {
  ArrowRight,
  CheckCircle,
  FileText,
  Search,
  Users,
  MessageSquare,
  BarChart3,
  ClipboardCheck,
} from "lucide-react"
import Link from "next/link"
import AnimationWrapper from "@/components/animation-wrapper"
import TextReveal from "@/components/text-reveal"
import ParallaxSection from "@/components/parallax-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function GuidanceSelectionProcessPage() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 py-20 text-white md:py-28 lg:py-36">
        <div className="container-custom">
          <AnimationWrapper animation="slide-up">
            <div className="mx-auto max-w-3xl text-center">
              <TextReveal as="h1" className="text-4xl font-bold md:text-5xl lg:text-6xl" stagger={0.05}>
                Our Guidance & Selection Process
              </TextReveal>
              <p className="mt-6 text-lg text-slate-300 md:text-xl">
                A systematic approach to help you select the right investment solutions for your financial goals
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900"
                  asChild
                >
                  <Link href="/why-choose-us">Why Choose Us</Link>
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

      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimationWrapper animation="fade-in">
            <div className="mx-auto max-w-3xl text-center">
              <TextReveal as="h2" className="text-3xl font-bold tracking-tight md:text-4xl">
                Our Comprehensive Process
              </TextReveal>
              <p className="mt-4 text-lg text-muted-foreground">
                We follow a structured approach to understand your needs and provide tailored investment solutions
              </p>
            </div>
          </AnimationWrapper>

          <div className="mt-16">
            <div className="relative">
              <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-primary/20 md:block"></div>
              <div className="space-y-16">
                {[
                  {
                    icon: FileText,
                    title: "Initial Assessment",
                    description:
                      "We begin by understanding your financial goals, risk tolerance, investment horizon, and other relevant factors through a detailed questionnaire and personal discussion.",
                    points: [
                      "Comprehensive financial goal assessment",
                      "Risk tolerance evaluation",
                      "Time horizon analysis",
                      "Current portfolio review",
                    ],
                  },
                  {
                    icon: Search,
                    title: "Research & Analysis",
                    description:
                      "Our team conducts thorough research and analysis to identify suitable investment opportunities that align with your financial objectives.",
                    points: [
                      "Market trend analysis",
                      "Investment opportunity screening",
                      "Risk-return profile assessment",
                      "Portfolio diversification planning",
                    ],
                  },
                  {
                    icon: Users,
                    title: "Strategy Development",
                    description:
                      "Based on our research and your requirements, we develop a customized investment strategy that aims to achieve your financial goals.",
                    points: [
                      "Personalized asset allocation",
                      "Investment product selection",
                      "Tax efficiency optimization",
                      "Liquidity management planning",
                    ],
                  },
                  {
                    icon: MessageSquare,
                    title: "Presentation & Discussion",
                    description:
                      "We present the proposed investment strategy to you, explaining the rationale, expected outcomes, and potential risks, and address any questions or concerns you may have.",
                    points: [
                      "Detailed strategy presentation",
                      "Expected returns discussion",
                      "Risk management explanation",
                      "Fee structure transparency",
                    ],
                  },
                  {
                    icon: ClipboardCheck,
                    title: "Implementation",
                    description:
                      "Once you approve the strategy, we handle all the paperwork and administrative tasks to set up your portfolio and implement the investment plan.",
                    points: [
                      "Documentation assistance",
                      "Account setup support",
                      "Systematic investment planning",
                      "Seamless onboarding process",
                    ],
                  },
                  {
                    icon: BarChart3,
                    title: "Monitoring & Review",
                    description:
                      "We continuously monitor your portfolio's performance and conduct regular reviews to ensure it remains aligned with your financial goals and market conditions.",
                    points: [
                      "Regular performance reporting",
                      "Periodic portfolio rebalancing",
                      "Market update communications",
                      "Annual strategy review meetings",
                    ],
                  },
                ].map((step, index) => (
                  <AnimationWrapper
                    key={index}
                    animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
                    delay={0.2}
                  >
                    <div className="relative">
                      <div className="flex flex-col items-center md:flex-row">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white md:absolute md:left-1/2 md:-translate-x-1/2">
                          <step.icon className="h-8 w-8" />
                        </div>
                        <div
                          className={`mt-6 md:mt-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}
                        >
                          <h3 className="text-2xl font-bold">{step.title}</h3>
                          <p className="mt-2 text-muted-foreground">{step.description}</p>
                          <ul className={`mt-4 space-y-2 ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
                            {step.points.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex items-start">
                                <CheckCircle
                                  className={`mr-2 h-5 w-5 text-primary shrink-0 ${index % 2 === 0 ? "md:order-last md:ml-2 md:mr-0" : ""}`}
                                />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </AnimationWrapper>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ParallaxSection className="py-16 bg-slate-50" speed={0.2}>
        <div className="container-custom">
          <AnimationWrapper animation="fade-in">
            <div className="mx-auto max-w-3xl text-center">
              <TextReveal as="h2" className="text-3xl font-bold tracking-tight md:text-4xl">
                Our Selection Criteria
              </TextReveal>
              <p className="mt-4 text-lg text-muted-foreground">
                How we evaluate and select investment opportunities for our clients
              </p>
            </div>
          </AnimationWrapper>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Performance Track Record",
                description:
                  "We analyze historical performance across different market cycles to identify consistent performers.",
              },
              {
                title: "Investment Philosophy",
                description:
                  "We evaluate the investment philosophy to ensure it is sound, consistent, and aligned with your goals.",
              },
              {
                title: "Risk Management",
                description:
                  "We assess the risk management framework to ensure it can protect capital during market downturns.",
              },
              {
                title: "Fund Manager Experience",
                description:
                  "We consider the experience and expertise of the fund management team in their respective domains.",
              },
              {
                title: "Transparency & Reporting",
                description:
                  "We prioritize investment options that provide transparent reporting and clear communication.",
              },
              {
                title: "Fee Structure",
                description:
                  "We analyze fee structures to ensure they are reasonable and aligned with investor interests.",
              },
            ].map((criteria, index) => (
              <AnimationWrapper key={index} animation="scale-in" delay={index * 0.1}>
                <Card className="h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">{criteria.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{criteria.description}</p>
                  </CardContent>
                </Card>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </ParallaxSection>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 md:grid-cols-2">
            <AnimationWrapper animation="slide-in-left">
              <div>
                <TextReveal as="h2" className="text-3xl font-bold tracking-tight md:text-4xl">
                  Personalized Approach
                </TextReveal>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p>
                    We understand that every investor is unique, with different financial goals, risk tolerance, and
                    investment preferences. That's why we take a personalized approach to our guidance and selection
                    process.
                  </p>
                  <p>
                    Our team works closely with you to understand your specific requirements and tailor our
                    recommendations accordingly. We don't believe in one-size-fits-all solutions.
                  </p>
                </div>
                <div className="mt-8">
                  <ul className="space-y-4">
                    {[
                      "Customized investment strategies based on your unique financial situation",
                      "Regular reviews to adapt to changing market conditions and personal circumstances",
                      "Flexible approach to accommodate your preferences and constraints",
                      "Transparent communication throughout the investment journey",
                    ].map((point, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimationWrapper>
            <AnimationWrapper animation="slide-in-right" delay={0.3}>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=500&width=600"
                  alt="Personalized Investment Approach"
                  className="h-full w-full object-cover"
                />
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-bg text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <TextReveal as="h2" className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Start Your Investment Journey?
            </TextReveal>
            <p className="mt-4 text-lg opacity-90">
              Schedule a consultation with our investment experts to discuss how our guidance and selection process can
              help you achieve your financial goals.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                variant="secondary"
                className="transition-transform duration-300 hover:scale-105"
                asChild
              >
                <Link href="/contact">
                  Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
