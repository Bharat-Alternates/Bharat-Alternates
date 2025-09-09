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
  Award,
  CheckCircle,
  LineChart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedCounter } from "@/components/animated-counter"
import { InteractiveChart } from "@/components/interactive-chart"

export default function WhyChooseUsPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animate the hero section
    gsap.from(".hero-content", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    })

    // Animate the features section
    gsap.from(featuresRef.current?.querySelectorAll(".feature-card"), {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: featuresRef.current,
        start: "top 80%",
      },
    })

    // Animate the stats section
    gsap.from(statsRef.current?.querySelectorAll(".stat-card"), {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top 80%",
      },
    })
  }, [])

  // Sample data for charts
  const performanceData = [30, 45, 35, 50, 40, 60, 55, 70, 65, 80, 75, 90]
  const marketData = [30, 40, 35, 45, 40, 50, 45, 55, 60, 65, 70, 75]

  return (
    <div ref={pageRef}>
      <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 py-20 text-white md:py-28 lg:py-36">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="hero-content text-4xl font-bold md:text-5xl lg:text-6xl">Why Choose Our PMS Services</h1>
            <p className="hero-content mt-6 text-lg text-slate-300 md:text-xl">
              We combine deep market expertise with personalized strategies to deliver exceptional value to our clients.
            </p>
            <div className="hero-content mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900"
                asChild
              >
                <Link href="/guidance-selection-process">Our Process</Link>
              </Button>
            </div>
          </div>
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
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
                Superior Performance Track Record
              </h2>
              <div className="mt-6 space-y-4 text-navy-900">
                <p>
                  Our Portfolio Management Services have consistently outperformed market benchmarks over the long term,
                  delivering superior risk-adjusted returns to our clients.
                </p>
                <p>
                  Our investment strategies are backed by rigorous research, deep market insights, and a disciplined
                  approach to portfolio construction and risk management.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="rounded-lg bg-slate-50 p-4 text-center">
                  <AnimatedCounter end={18.5} suffix="%" decimals={1} className="text-3xl font-bold text-primary" />
                  <p className="mt-2 text-sm text-navy-900">Average Annual Return</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-4 text-center">
                  <AnimatedCounter end={4.2} suffix="x" decimals={1} className="text-3xl font-bold text-primary" />
                  <p className="mt-2 text-sm text-navy-900">Outperformance Ratio</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-medium text-navy-900">Performance vs. Market</h3>
              <div className="relative h-[300px]">
                <InteractiveChart
                  title="Client Loyalty"
                  data={performanceData}
                  color="#3b82f6"
                  hoverColor="#60a5fa"
                  fillColor="rgba(59, 130, 246, 0.1)"
                  hoverFillColor="rgba(59, 130, 246, 0.2)"
                  value="96% Retention Rate"
                  changeType="positive"
                  icon={<LineChart className="h-4 w-4" />}
                />
              </div>
              <div className="mt-4 flex items-center justify-center space-x-6">
                <div className="flex items-center">
                  <div className="mr-2 h-3 w-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-navy-900">Our PMS</span>
                </div>
                <div className="flex items-center">
                  <div className="mr-2 h-3 w-3 rounded-full bg-slate-400"></div>
                  <span className="text-sm text-navy-900">Market Index</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={featuresRef} className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">Our Competitive Advantages</h2>
            <p className="mt-4 text-lg text-navy-900">
              What sets us apart from other portfolio management service providers
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: TrendingUp,
                title: "Data-Driven Approach",
                description:
                  "Our investment decisions are backed by comprehensive data analysis and proprietary research methodologies.",
              },
              {
                icon: Shield,
                title: "Risk Management",
                description:
                  "Sophisticated risk management techniques to protect and grow your wealth in all market conditions.",
              },
              {
                icon: Users,
                title: "Expert Team",
                description:
                  "Seasoned investment professionals with decades of combined experience across various market cycles.",
              },
              {
                icon: Briefcase,
                title: "Customized Solutions",
                description:
                  "Tailored investment strategies aligned with your financial goals, risk appetite, and time horizon.",
              },
              {
                icon: BarChart3,
                title: "Transparent Reporting",
                description:
                  "Comprehensive performance reports and complete transparency on fees and investment decisions.",
              },
              {
                icon: Award,
                title: "Industry Recognition",
                description:
                  "Multiple awards and recognitions for our performance, innovation, and client service excellence.",
              },
            ].map((advantage, index) => (
              <Card
                key={index}
                className="feature-card h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <CardHeader className="pb-2">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <advantage.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-navy-900">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy-900">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Client-Centric Approach"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">Client-Centric Approach</h2>
              <div className="mt-6 space-y-4">
                <p className="text-navy-900">
                  We believe in building long-term relationships with our clients based on trust, transparency, and
                  exceptional service. Our client-centric approach ensures that your investment journey is smooth and
                  rewarding.
                </p>

                <ul className="mt-6 space-y-4">
                  {[
                    "Personalized investment strategies tailored to your unique financial goals",
                    "Regular portfolio reviews and performance updates",
                    "Dedicated relationship manager for seamless communication",
                    "Educational resources to help you make informed investment decisions",
                    "Proactive risk management to protect your wealth",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-navy-900">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact">
                    Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={statsRef} className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Impressive Numbers</h2>
            <p className="mt-4 text-lg opacity-90">The results speak for themselves</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: 1250,
                suffix: "+",
                label: "Satisfied Clients",
              },
              {
                value: 2800,
                suffix: "Cr",
                label: "Assets Under Management",
              },
              {
                value: 12,
                suffix: "+",
                label: "Years of Excellence",
              },
              {
                value: 18,
                suffix: "%",
                label: "Average Annual Return",
              },
            ].map((stat, index) => (
              <div key={index} className="stat-card rounded-lg bg-white/10 p-6 text-center backdrop-blur-sm">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  className="text-4xl font-bold"
                  duration={2.5}
                  delay={0.2}
                />
                <p className="mt-2 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="mt-4 text-lg text-navy-900">
              Take the first step towards achieving your financial goals with our expert guidance
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Schedule a Consultation",
                description:
                  "Book a free consultation with our investment experts to discuss your financial goals and requirements.",
                link: "/contact",
                linkText: "Contact Us",
              },
              {
                number: "02",
                title: "Get a Customized Strategy",
                description:
                  "Receive a personalized investment strategy tailored to your specific needs and risk appetite.",
                link: "/guidance-selection-process",
                linkText: "Learn More",
              },
              {
                number: "03",
                title: "Start Your Investment",
                description:
                  "Begin your investment journey with our expert portfolio management services and watch your wealth grow.",
                link: "/pms/what-is-pms",
                linkText: "Explore PMS",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mb-2 text-xl font-bold text-navy-900">{step.title}</h3>
                <p className="mb-4 text-navy-900">{step.description}</p>
                <Button variant="outline" asChild>
                  <Link href={step.link}>
                    {step.linkText} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 gradient-bg text-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Maximize Your Investment Potential?
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Schedule a consultation with our investment experts to discuss how our PMS solutions can help you achieve
              your financial goals.
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
    </div>
  )
}
