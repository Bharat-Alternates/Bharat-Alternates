"use client"

import React, { useEffect, useRef, useState } from "react"
import {
  ArrowRight,
  Shield,
  Users,
  Briefcase,
  BarChart2,
  Search,
  Award,
  ThumbsUp,
  Zap,
  Layers,
  Heart,
  Star,
  CheckCircle,
  Bookmark,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Import components from the main app
import AnimationWrapper from "@/components/animation-wrapper"
import TextReveal from "@/components/text-reveal"

// Counter Animation Component
const CounterAnimation = ({
  end,
  duration = 2,
  prefix = "",
  suffix = "",
}: {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}) => {
  const [count, setCount] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const nodeRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTime: number
          let animationFrame: number

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
            const currentCount = Math.floor(progress * end)
            setCount(currentCount)

            if (progress < 1) {
              animationFrame = requestAnimationFrame(animate)
            }
          }

          animationFrame = requestAnimationFrame(animate)

          return () => {
            cancelAnimationFrame(animationFrame)
          }
        }
      },
      { threshold: 0.1 },
    )

    if (nodeRef.current) {
      observer.observe(nodeRef.current)
    }

    return () => {
      if (nodeRef.current) {
        observer.unobserve(nodeRef.current)
      }
    }
  }, [end, duration, isClient])

  return (
    <span ref={nodeRef}>
      {prefix}
      {isClient ? count.toLocaleString() : "0"}
      {suffix}
    </span>
  )
}

// Types for the AnimatedButton component
interface AnimatedButtonProps {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "default" | "lg"
  className?: string
  showArrow?: boolean
}

// Memoized AnimatedButton component for better performance
const AnimatedButton = React.memo(function AnimatedButton({
  href,
  children,
  variant = "primary",
  size = "default",
  className = "",
  showArrow = true,
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = React.useState(false)

  const baseStyles =
    "relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 overflow-hidden"

  const sizeStyles = {
    default: "px-6 py-2 text-sm",
    lg: "px-8 py-3 text-base",
  }

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25",
    secondary: "bg-white text-blue-600 hover:bg-blue-50",
    outline: "border-2 border-white text-white hover:bg-white/10",
  }

  return (
    <Link
      href={href}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], "group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Button content */}
      <span className="relative z-10 flex items-center">
        {children}
        {showArrow && (
          <ArrowRight
            className={cn("ml-2 h-4 w-4 transition-transform duration-300", isHovered ? "translate-x-1" : "")}
          />
        )}
      </span>

      {/* Animated background */}
      <span
        className={cn(
          "absolute inset-0 z-0 rounded-full transition-all duration-300",
          variant === "primary" && "bg-blue-700 opacity-0 group-hover:opacity-100",
          variant === "secondary" && "bg-blue-50 opacity-0 group-hover:opacity-100",
          variant === "outline" && "bg-white opacity-0 group-hover:opacity-10",
        )}
      />

      {/* Glow effect */}
      <span
        className={cn(
          "absolute inset-0 -z-10 rounded-full opacity-0 blur transition-opacity duration-300 group-hover:opacity-50",
          variant === "primary" && "bg-blue-600",
          variant === "secondary" && "bg-blue-200",
          variant === "outline" && "bg-white",
        )}
      />

      {/* Ripple effect - only render when hovered for better performance */}
      {isHovered && (
        <span className="absolute inset-0 z-0">
          <span className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-10 animate-ripple"></span>
        </span>
      )}
    </Link>
  )
})

// Enhanced Core Values data with SEO-optimized content
const coreValuesData = [
  {
    title: "Excellence in Wealth Management",
    description:
      "We strive for excellence in portfolio management, investment research, and client service. Our team continuously enhances their expertise to deliver market-beating returns and exceptional wealth growth strategies.",
    icon: Award,
    color: "from-blue-500 to-blue-700",
    image: "https://img.freepik.com/free-vector/business-people-analyzing-growth-graph_23-2148866843.jpg",
    profile: "/images/excellence-icon.svg",
  },
  {
    title: "Transparency & Trust",
    description:
      "We operate with complete transparency in fee structures, investment decisions, and performance reporting. Our fiduciary responsibility means your financial interests always come first in our wealth advisory services.",
    icon: Shield,
    color: "from-indigo-500 to-indigo-700",
    image: "https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg",
    profile: "/images/trust-icon.svg",
  },
  {
    title: "Innovation in Investment",
    description:
      "We pioneer cutting-edge investment strategies and leverage advanced financial technology to identify emerging opportunities in alternative investments, equity markets, and structured products.",
    icon: Zap,
    color: "from-purple-500 to-purple-700",
    image: "https://img.freepik.com/free-vector/finance-financial-performance-concept-illustration_114360-1100.jpg",
    profile: "/images/innovation-icon.svg",
  },
  {
    title: "Client-Centric Approach",
    description:
      "Every investment recommendation and portfolio strategy is tailored to individual financial goals, risk tolerance, and time horizons. We believe personalized wealth management delivers superior long-term results.",
    icon: Heart,
    color: "from-red-500 to-red-700",
    image: "https://img.freepik.com/free-vector/customer-support-flat-illustration_23-2148892786.jpg",
    profile: "/images/client-icon.svg",
  },
  {
    title: "Data-Driven Decision Making",
    description:
      "Our investment methodology combines quantitative analysis with fundamental research to identify high-potential PMS and AIF opportunities that offer optimal risk-adjusted returns across market cycles.",
    icon: BarChart2,
    color: "from-green-500 to-green-700",
    image: "https://img.freepik.com/free-vector/data-analytics-concept-illustration_114360-8036.jpg",
    profile: "/images/data-icon.svg",
  },
  {
    title: "Continuous Education",
    description:
      "We empower investors with knowledge through comprehensive resources, webinars, and personalized consultations on portfolio management services, alternative investments, and wealth creation strategies.",
    icon: Layers,
    color: "from-yellow-500 to-yellow-700",
    image: "https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg",
    profile: "/images/education-icon.svg",
  },
]

// Team data with updated information
const teamData = [
  {
    name: "Geetanash Malik",
    position: "Founder & Chief Executive Officer",
    bio: "A visionary leader transforming India's investment landscape through innovative strategies and exceptional returns, revolutionizing wealth management for investors nationwide.",
    image: "/images/team/geetanash_malik.jpg",
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/geetansh-malik-820052175/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter: "https://x.com/geetansh6?t=JQlNL5TrK-l8cnTRKO9RRw&s=08",
      email: "mailto:Geetansh@bharatalternates.com"
    },
  },
  {
    name: "Priyansh Malik",
    position: "CFA Level 2 Candidate",
    bio: "Research Analyst with expertise in financial analysis, market research, and investment evaluation. Specializes in conducting comprehensive research on investment opportunities, analyzing market trends, and providing data-driven insights to support strategic investment decisions.",
    image: "/images/team/priyansh_malik.jpg",
    socialLinks: {},
  },
]

// Why Choose Us data with SEO-optimized content
const whyChooseUsData = [
  {
    icon: Search,
    title: "Curated PMS & AIF Selection",
    description:
      "Access our expertly vetted collection of 500+ Portfolio Management Services and 300+ Alternative Investment Funds, spanning diverse investment strategies and asset classes.",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Users,
    title: "Personalized Investment Advisory",
    description:
      "Receive tailored wealth management guidance from certified financial experts who analyze your goals, risk profile, and time horizon to recommend optimal investment solutions.",
    color: "from-indigo-500 to-indigo-700",
  },
  {
    icon: CheckCircle,
    title: "Research-Backed Recommendations",
    description:
      "Make informed investment decisions with our comprehensive research reports, performance analytics, and transparent fee comparisons for all PMS and AIF options.",
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: Star,
    title: "Performance-Focused Approach",
    description:
      "We prioritize high-performing investment products with proven track records of delivering alpha and consistent returns across various market conditions.",
    color: "from-teal-500 to-teal-700",
  },
  {
    icon: ThumbsUp,
    title: "Seamless Digital Experience",
    description:
      "Our intuitive platform simplifies comparing, selecting, and monitoring your PMS and AIF investments with real-time portfolio tracking and performance metrics.",
    color: "from-cyan-500 to-cyan-700",
  },
  {
    icon: Briefcase,
    title: "Holistic Wealth Solutions",
    description:
      "Beyond investment selection, we provide comprehensive financial planning, tax optimization strategies, and estate planning services for complete wealth management.",
    color: "from-sky-500 to-sky-700",
  },
]

// Card component for Core Values
const ValueCard = ({ value, effect, index }: { value: any; effect: string; index: number }) => {
  const [isSaved, setIsSaved] = useState(false)

  return (
    <div className={`value-card ${effect}`} data-effect={effect}>
      <button
        className={`value-card__save ${isSaved ? "active" : ""}`}
        type="button"
        onClick={() => setIsSaved(!isSaved)}
        aria-label={isSaved ? "Remove from saved" : "Save this value"}
      >
        <Bookmark className={isSaved ? "fill-white" : ""} />
      </button>

      <figure className="value-card__image">
        <img src={value.image || "/placeholder.svg"} alt={`${value.title} - Core Value`} />
      </figure>

      <div className="value-card__header">
        <figure className="value-card__profile">
          <img src={value.profile || "/placeholder.svg"} alt={value.title} />
        </figure>
      </div>

      <div className="value-card__body">
        <h3 className="value-card__name">{value.title}</h3>
        <p className="value-card__job">Bharat Alternates</p>
        <p className="value-card__bio">{value.description}</p>
      </div>

      <div className="value-card__footer">
        <p className="value-card__date">Core Value {index + 1}</p>
      </div>
    </div>
  )
}

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null)
  const [cardEffect, setCardEffect] = useState("zoom")

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      // Add scroll-triggered animations
      if (pageRef.current) {
        // Animate sections on scroll
        const sections = pageRef.current.querySelectorAll("section")
        sections.forEach((section) => {
          gsap.fromTo(
            section,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            },
          )
        })
      }
    }
  }, [])

  return (
    <div ref={pageRef} className="overflow-hidden">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[rgb(2_11_28)] opacity-90"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/hero-bg.svg')] bg-cover bg-center"></div>
        </div>

        {/* Animated shapes */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-400 opacity-10 animate-pulse"></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-96 h-96 rounded-full bg-blue-600 opacity-10 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-blue-300 opacity-10 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimationWrapper animation="fade-in">
            <div className="mx-auto max-w-4xl text-center">
              <TextReveal
                as="h1"
                className="text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl mb-6"
                stagger={0.03}
              >
                <span style={{ letterSpacing: "0.1em" }}>About Bharat Alternates</span>
              </TextReveal>
              <p className="mt-6 text-xl md:text-2xl text-blue-100 italic font-light max-w-3xl mx-auto leading-relaxed">
                Revolutionizing wealth management through innovative Portfolio Management Services and Alternative
                Investment Funds
              </p>

              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <AnimatedButton href="/contact" variant="outline" size="lg" className="backdrop-blur-sm">
                  Connect With Us
                </AnimatedButton>
                <AnimatedButton href="#our-journey" variant="secondary" size="lg">
                  Book a Call
                </AnimatedButton>
              </div>
            </div>
          </AnimationWrapper>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white">
          <p className="text-sm mb-2 opacity-80">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section id="our-journey" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <TextReveal as="h2" className="text-4xl font-bold text-blue-800 mb-4" stagger={0.03}>
              <span style={{ letterSpacing: "0.1em" }}>Our Journey</span>
            </TextReveal>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimationWrapper animation="slide-in-right" delay={0.1}>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-40"></div>
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-blue-700"></div>
                  <div className="p-8">
                    <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Journey: Innovating Wealth Management</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      At Bharat Alternates, we are a team of young and passionate professionals committed to
                      revolutionizing the wealth management landscape. Our journey began with a shared vision to
                      simplify and enhance how Portfolio Management Services (PMSs) and Alternative Investment Funds
                      (AIFs) operate, making these services more accessible, transparent, and efficient for investors.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Bharat Alternates is a new-age investment platform for Portfolio Management Services (PMS) and Alternative Investment Funds (AIFs) in India. 
                      As a fast-growing startup, we connect investors with the best PMS in India and carefully curated AIFs across equity, debt, and alternative strategies. 
                      Our mission is to simplify wealth creation through research-driven, transparent, and client-focused solutions. Whether you are an HNI, NRI, family office, or business owner, Bharat Alternates is your trusted partner to explore PMS and AIF opportunities in India.
                    </p>
                  </div>
                </div>
              </div>
            </AnimationWrapper>

            <AnimationWrapper animation="slide-in-left" delay={0.1}>
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-6 transform hover:translate-y-[-8px] transition-all duration-500 border-l-4 border-blue-600">
                  <h2 className="text-xl font-bold text-blue-800 mb-3">Our Vision</h2>
                  <p className="text-gray-700 italic leading-relaxed">
                    "To be India's most trusted and comprehensive platform for Portfolio Management Services (PMS) and
                    Alternative Investment Funds (AIF), empowering investors with data-driven insights, expert analysis,
                    and seamless investment solutions that maximize wealth creation."
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 transform hover:translate-y-[-8px] transition-all duration-500 border-l-4 border-blue-600">
                  <h2 className="text-xl font-bold text-blue-800 mb-3">Our Mission</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our mission is to empower high-net-worth individuals to achieve their financial goals through expert
                    portfolio management and personalized investment strategies.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    We are committed to delivering superior risk-adjusted returns while maintaining the highest
                    standards of integrity, transparency, and client service.
                  </p>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="py-24 bg-[#020b1c] text-white core-values-section">
        {/* Floating glass elements */}
        <div className="glass-element glass-1" style={{ left: "5%", top: "20%" }}></div>
        <div className="glass-element glass-2" style={{ left: "10%", top: "50%" }}></div>
        <div className="glass-element glass-3" style={{ left: "15%", top: "80%" }}></div>
        <div className="glass-element glass-4" style={{ left: "20%", top: "30%" }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimationWrapper animation="fade-in" delay={0.1}>
            <div className="text-center mb-16">
              <TextReveal as="h2" className="text-4xl font-bold text-white mb-4" stagger={0.03}>
                <span style={{ letterSpacing: "0.1em" }}>Our Core Values</span>
              </TextReveal>
              <p className="text-blue-100 max-w-3xl mx-auto text-lg">
                At Bharat Alternates, our values guide every investment decision, client interaction, and business
                strategy. These principles form the foundation of our approach to wealth management and investment
                advisory.
              </p>
              <div className="w-24 h-1 bg-blue-300 mx-auto mt-8 rounded-full"></div>
            </div>
          </AnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValuesData.map((value, index) => (
              <AnimationWrapper key={index} animation="scale-in" delay={0.1 + index * 0.1}>
                <div className="core-value-card">
                  <img src={value.image} alt={value.title} className="core-value-card-img" loading="eager" />
                  <div className="core-value-card-overlay"></div>
                  <div className="core-value-card-content">
                    <h2>{value.title}</h2>
                    <p>{value.description}</p>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section with Card Animation */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-in" delay={0.1}>
            <div className="text-center mb-16">
              <TextReveal as="h2" className="text-4xl font-bold text-blue-800 mb-4" stagger={0.03}>
                <span style={{ letterSpacing: "0.1em" }}>Leadership Team</span>
              </TextReveal>
              <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                Our team brings together decades of experience from India's premier financial institutions, combining
                deep market knowledge with innovative thinking.
              </p>
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-8 rounded-full"></div>
            </div>
          </AnimationWrapper>

          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {teamData.map((member, index) => (
              <AnimationWrapper key={index} animation="fade-in" delay={0.2 + index * 0.1}>
                <div className="team-card relative w-[300px] h-[400px] rounded-xl overflow-hidden shadow-xl group">
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out group-hover:scale-110"
                    style={{ backgroundImage: `url(${member.image})` }}
                  ></div>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-70"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 transition-transform duration-500 ease-in-out group-hover:translate-y-0">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-blue-300 font-medium mb-4">{member.position}</p>

                    <p className="text-gray-300 text-sm mb-6 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                      {member.bio}
                    </p>

                    <div className="flex space-x-4 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                      <a
                        href={member.socialLinks.linkedin}
                        className="text-white hover:text-blue-300 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-linkedin"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </a>
                      <a href={member.socialLinks.twitter} className="text-white hover:text-blue-300 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-twitter"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                      </a>
                      <a href={member.socialLinks.email} className="text-white hover:text-blue-300 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-mail"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Are The Best Choice Section */}
      <section className="py-24 bg-[#2a2a72]">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-in" delay={0.1}>
            <div className="mx-auto max-w-4xl text-center text-white">
              <TextReveal as="h2" className="text-3xl font-bold md:text-4xl" stagger={0.05}>
                <span style={{ wordSpacing: "0.1em" }} className="best-choice-title">
                  Why We Are The Best Choice
                </span>
              </TextReveal>
              <TextReveal as="span" className="text-3xl font-bold md:text-4xl" stagger={0.05}>
                <span style={{ wordSpacing: "0.1em" }}>For PMSs and AIFs</span>
              </TextReveal>
              <p className="mt-4 text-base md:text-lg text-white/90 max-w-3xl mx-auto">
                Bharat Alternates stands out as the premier platform for Portfolio Management Services and Alternative
                Investment Funds in India. Here's why investors trust us for their wealth management needs.
              </p>
            </div>
          </AnimationWrapper>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUsData.map((feature, index) => (
              <AnimationWrapper key={index} animation="scale-in" delay={0.1 + index * 0.1}>
                <div className="bg-[#343483]/50 rounded-lg p-8 text-white text-center h-full">
                  <div className="bg-[#4747a1] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              </AnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <AnimationWrapper animation="fade-in" delay={0.1}>
              <div className="text-center p-6">
                <div className="text-5xl font-bold mb-2">
                  <CounterAnimation end={500} duration={2} suffix="+" />
                </div>
                <div className="text-xl font-medium text-blue-100">PMS Options</div>
              </div>
            </AnimationWrapper>
            <AnimationWrapper animation="fade-in" delay={0.2}>
              <div className="text-center p-6">
                <div className="text-5xl font-bold mb-2">
                  <CounterAnimation end={300} duration={2} suffix="+" />
                </div>
                <div className="text-xl font-medium text-blue-100">AIFs Available</div>
              </div>
            </AnimationWrapper>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-in" delay={0.1}>
            <div className="mx-auto max-w-4xl text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-12 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Ready to Transform Your Investment Journey?</h2>
              <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-lg">
                Schedule a consultation with our investment experts to discuss how we can help you achieve your
                financial goals through our curated PMS and AIF solutions.
              </p>
              <AnimatedButton href="/contact" variant="primary" size="lg" className="shadow-xl">
                Schedule a Consultation
              </AnimatedButton>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* Add custom styles for value cards */}
      <style jsx global>{`
        /* Value Menu Styles */
        .value-menu__list {
          text-align: center;
        }

        .value-menu__item {
          position: relative;
          display: inline-block;
          padding: 10px 20px;
          font-size: 0.875em;
          font-weight: 400;
          text-transform: uppercase;
          color: #a9a9a9;
          cursor: pointer;
          transition: all 0.65s ease;
        }

        .value-menu__item::after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          margin-top: 6px;
          background: rgba(59, 130, 246, 1);
          transition: all 0.65s ease;
        }

        .value-menu__item:hover {
          color: rgba(59, 130, 246, 0.8);
        }
        
        .value-menu__item.active {
          color: rgba(59, 130, 246, 1);
        }

        .value-menu__item.active::after {
          width: 100%;
        }

        /* Value Card Styles */
        .value-card {
          position: relative;
          overflow: hidden;
          display: block;
          width: 100%;
          height: 400px;
          font-size: 1rem;
          border-radius: 8px;
          box-shadow: 0 16px 60px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          transition: all 0.65s ease;
        }

        .value-card:hover {
          box-shadow: 0 40px 130px rgba(0, 0, 0, 0.6);
          transform: scale(1.1, 1.1);
        }

        .value-card__save {
          position: absolute;
          top: 10px;
          right: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 35px;
          height: 35px;
          background: transparent;
          border: 0;
          opacity: 0;
          border-radius: 3px;
          z-index: 10;
          transition: all 0.65s ease;
        }

        .value-card__save:focus {
          outline: 0;
          background-color: rgba(255, 255, 255, 0);
        }

        .value-card:hover .value-card__save {
          opacity: 0.6;
        }

        .value-card__save svg {
          width: 18px;
          height: 18px;
          color: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          transition: all 0.65s ease;
        }

        .value-card__save:hover svg {
          color: rgba(255, 255, 255, 0.8);
        }

        .value-card__save:active,
        .value-card__save.active {
          opacity: 1 !important;
        }

        .value-card__save:active svg,
        .value-card__save.active svg {
          color: white;
        }

        .value-card__image {
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          overflow: hidden;
          display: block;
          width: 100%;
          height: 100%;
          pointer-events: none;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5));
        }

        .value-card__image img {
          transform: scale(1.3, 1.3);
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 1;
          transition: all 0.65s ease;
          animation-name: zoom;
          animation-duration: 30s;
          animation-direction: alternate;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .value-card:hover .value-card__image img {
          transform: scale(1, 1);
          opacity: 0.5;
        }

        .value-card__header {
          display: grid;
          width: 100%;
          height: 200px;
        }

        .value-card__profile {
          align-self: center;
          justify-self: center;
          display: block;
          overflow: hidden;
          width: 10vmax;
          height: 10vmax;
          max-width: 100px;
          max-height: 100px;
          border-radius: 50%;
        }

        .value-card__profile img {
          transform: scale(1.5, 1.5) translateZ(0);
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
          filter: grayscale(50%) contrast(75%) brightness(1.3);
          transition: all 0.65s ease;
          mix-blend-mode: normal;
          backface-visibility: hidden;
        }

        .value-card:hover .value-card__profile img {
          transform: scale(1, 1) translateZ(0);
        }

        .value-card__body {
          display: grid;
          padding: 0 20px;
        }

        .value-card__name {
          align-self: center;
          justify-self: center;
          margin-bottom: 2px;
          color: white;
          font-size: 1.375em;
          font-weight: 100;
          letter-spacing: 0.1rem;
          text-align: center;
          text-transform: uppercase;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35);
          background: -webkit-linear-gradient(white, #a1a1a1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: all 0.65s ease;
        }

        .value-card:hover .value-card__name {
          background: -webkit-linear-gradient(white, #c1c1c1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .value-card__job {
          align-self: center;
          justify-self: center;
          display: inline-block;
          font-size: 0.625em;
          font-weight: 100;
          text-align: center;
          letter-spacing: 0.35rem;
          color: rgba(100, 130, 200, 0.45);
          transition: all 0.65s ease;
        }

        .value-card:hover .value-card__job {
          color: rgba(100, 130, 200, 1);
        }

        .value-card__bio {
          position: relative;
          transform: translateY(30%);
          display: block;
          margin: 22px 0 16px 0;
          font-size: 0.875em;
          font-weight: 100;
          color: rgba(255, 255, 255, 0.65);
          opacity: 0;
          transition: all 0.65s ease;
        }

        .value-card:hover .value-card__bio {
          transform: translateY(0);
          opacity: 1;
        }

        .value-card__footer {
          position: relative;
          transform: translateY(60%);
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-areas: "date category";
          padding: 10px 20px;
          opacity: 0;
          transition: all 0.65s ease;
        }

        .value-card:hover .value-card__footer {
          transform: translateY(0);
          opacity: 1;
        }

        .value-card__date {
          grid-area: date;
          display: inline-block;
          align-self: left;
          justify-self: left;
          font-size: 0.625em;
          font-weight: 100;
          text-transform: uppercase;
          text-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.45);
          color: rgba(250, 250, 250, 0.4);
        }

        /* Card Effect Modifiers */
        .value-card[data-effect="blur"]:hover .value-card__image img {
          filter: blur(3px);
        }

        .value-card[data-effect="blur"] .value-card__image img {
          animation-name: blur;
        }

        .value-card[data-effect="color"]:hover {
          transform: scale(1, 1);
          box-shadow: 0 40px 260px rgba(255, 0, 0, 0.1), 0 40px 130px rgba(250, 100, 100, 0.2), -80px -40px 230px rgba(0, 200, 250, 0.15), 80px 40px 230px rgba(120, 120, 255, 0.15);
        }

        .value-card[data-effect="color"] .value-card__image {
          background: linear-gradient(to bottom, rgba(20, 20, 100, 1), rgba(255, 100, 100, 0.5))
        }

        .value-card[data-effect="color"]:hover .value-card__image img {
          opacity: 0.8;
        }

        .value-card[data-effect="color"]:hover .value-card__profile img {
          filter: grayscale(50%) contrast(80%) brightness(1.6);
          mix-blend-mode: normal;
        }

        /* Animations */
        @keyframes zoom {
          from {
            object-position: 0 50%;
          }
          to {
            object-position: 100% 50%;
          }
        }

        @keyframes blur {
          from {
            transform: scale(1, 1);
          }
          to {
            transform: scale(2, 2);
          }
        }

        /* Team card styles */
        .team-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%);
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }
        
        .team-card:hover::before {
          opacity: 0.9;
        }

        /* Core Values Card Styles */
        .core-value-card {
          width: 100%;
          height: 28rem;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          color: rgb(240, 240, 240);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          font-family: 'Roboto', sans-serif;
          transition: all 0.3s ease;
          background-color: rgba(5, 15, 35, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .core-value-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          z-index: 3;
          transition: all 0.6s ease;
        }
        
        .core-value-card:hover::before {
          left: 100%;
        }

        .core-value-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
          background-color: rgba(10, 20, 40, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .core-value-card-img {
          position: absolute;
          object-fit: cover;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          opacity: 1;
          transition: all .3s ease-out;
          filter: blur(1px);
        }

        .core-value-card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, 
                     rgba(2, 11, 28, 0.5), 
                     rgba(5, 15, 40, 0.8));
          z-index: 1;
        }
        
        .core-value-card:hover .core-value-card-img {
          opacity: 1;
          transform: scale(1.05);
        }

        .core-value-card-content {
          position: relative;
          z-index: 2;
          padding: 30px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          background: transparent;
          border-radius: 10px;
        }

        .core-value-card h2 {
          margin: 0;
          transition: transform .3s ease-out;
          font-family: 'Roboto Condensed', sans-serif;
          font-weight: 600;
          text-transform: uppercase;
          font-size: 1.75rem;
          margin-bottom: 1rem;
          opacity: 1;
          color: white;
          text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
        }

        .core-value-card:hover h2 {
          transform: translateY(-10px);
        }

        .core-value-card p {
          opacity: 1;
          max-width: 100%;
          transition: opacity .3s ease-out;
          margin-bottom: 1.5rem;
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.6;
          font-weight: 400;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
          background-color: rgba(0, 0, 0, 0.4);
          padding: 10px;
          border-radius: 5px;
        }

        .core-value-card:hover p {
          opacity: 1;
        }

        /* Remove the old core-values-section styles */
        .core-values-section {
          background-color: #020b1c !important;
          background-image: none;
          position: relative;
          overflow: hidden;
        }
        
        .core-values-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('https://img.freepik.com/free-vector/abstract-background-with-squares_23-2148995948.jpg');
          background-size: cover;
          background-position: center;
          opacity: 0.1;
          z-index: 0;
        }
        
        .core-values-section::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 30% 30%, rgba(20, 30, 60, 0.5) 0%, rgba(2, 11, 28, 0.8) 70%);
          z-index: 1;
        }

        /* Founder section styles for consistent layout */
        .founder-section {
          display: grid !important;
          grid-template-columns: repeat(2, 1fr) !important;
        }
        
        @media (max-width: 1023px) {
          .founder-section {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          .founder-section > div {
            width: 100%;
          }
          
          .founder-section img {
            width: 100%;
            height: auto;
            min-height: 300px;
            object-fit: cover;
          }
        }
        
        /* Best choice title responsive adjustment */
        .best-choice-title {
          display: inline-block;
          max-width: 100%;
          overflow-wrap: break-word;
          word-wrap: break-word;
        }
        
        @media (max-width: 768px) {
          .best-choice-title {
            font-size: 0.8em;
          }
        }

        /* Glassmorphism floating elements */
        .glass-element {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          z-index: 1;
          transition: all 0.5s ease;
        }

        .glass-1 {
          width: 200px;
          height: 200px;
          animation: float 6s ease-in-out infinite;
        }

        .glass-2 {
          width: 150px;
          height: 150px;
          animation: float 8s ease-in-out infinite;
          animation-delay: 1s;
        }

        .glass-3 {
          width: 100px;
          height: 100px;
          animation: float 7s ease-in-out infinite;
          animation-delay: 2s;
        }

        .glass-4 {
          width: 120px;
          height: 120px;
          animation: float 9s ease-in-out infinite;
          animation-delay: 3s;
        }

        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }
      `}</style>
    </div>
  )
}
