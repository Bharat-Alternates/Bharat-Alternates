"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedChart } from "@/components/animated-chart"

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const hero = heroRef.current
    if (!hero) return

    // Create timeline for hero animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    // Animate the grid background
    tl.fromTo(".hero-grid", { opacity: 0 }, { opacity: 0.1, duration: 1.5 })

    // Animate the heading
    tl.fromTo(".hero-title", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, "-=1")

    // Animate the subtitle
    tl.fromTo(".hero-subtitle", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")

    // Animate the buttons
    tl.fromTo(".hero-buttons", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")

    // Animate the stats cards
    tl.fromTo(
      ".stat-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
      },
      "-=0.2",
    )

    // Floating animation for grid lines
    gsap.to(".grid-line", {
      y: "random(-10, 10)",
      x: "random(-10, 10)",
      duration: "random(3, 6)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.1,
    })

    // Parallax effect for background elements with consistent behavior
    ScrollTrigger.create({
      trigger: hero,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        gsap.to(".parallax-bg", {
          y: self.progress * 150,
          ease: "none",
          overwrite: "auto",
        })
      },
    })

    return () => {
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div ref={heroRef} className="relative min-h-screen overflow-hidden bg-[#020b1c] pt-16 text-white">
      {/* Grid background */}
      <div className="hero-grid absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(66, 99, 235, 0.2)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Animated grid lines */}
        <div className="grid-line absolute left-1/4 top-1/4 h-40 w-40 rounded-full bg-blue-500/5" />
        <div className="grid-line absolute right-1/4 top-1/3 h-60 w-60 rounded-full bg-blue-500/5" />
        <div className="grid-line absolute bottom-1/4 left-1/3 h-80 w-80 rounded-full bg-blue-500/5" />
      </div>

      {/* Parallax background elements */}

      {/* Content */}
      <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 text-center">
        <h1 className="hero-title max-w-5xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-blue-50">
          India's Most Trusted Platform for PMS & AIF Investments
        </h1>

        <p className="hero-subtitle mx-auto mt-6 max-w-2xl text-lg text-blue-100 md:text-xl">
          Expert guidance, transparent insights, and a seamless investment experience tailored for you.
        </p>

        <div className="hero-buttons mt-10 flex flex-wrap justify-center gap-4">
          <AnimatedButton href="/contact" variant="primary" size="lg">
            Get Started
          </AnimatedButton>
          <AnimatedButton href="/about" variant="outline" size="lg">
            Learn More
          </AnimatedButton>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid w-full gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Assets Under Management"
            value="₹5000 Cr+"
            change="+15%"
            data={[30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85]}
            color="#3b82f6"
          />
          <StatCard
            title="Portfolio Performance"
            value="18.5% CAGR"
            change="+2.3%"
            data={[40, 45, 42, 50, 48, 53, 51, 58, 56, 62, 60, 65]}
            color="#10b981"
          />
          <StatCard
            title="Client Growth"
            value="500+"
            change="+9%"
            data={[100, 150, 200, 250, 300, 350, 400, 450, 480, 490, 495, 500]}
            color="#8b5cf6"
          />
          <StatCard
            title="Investment Strategies"
            value="12+"
            data={[4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 12, 12]}
            color="#f97316"
          />
        </div>
      </div>
    </div>
  )
}

function StatCard({
  title,
  value,
  change,
  data,
  color,
}: {
  title: string
  value: string
  change?: string
  data: number[]
  color: string
}) {
  return (
    <div className="stat-card overflow-hidden rounded-lg border border-blue-800/30 bg-[#051230]/80 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4">
        <h3 className="text-sm font-medium text-blue-100">{title}</h3>
      </div>
      <div className="mb-2">
        <div className="text-2xl font-bold tracking-tight">{value}</div>
        {change && (
          <div className="mt-1 text-sm text-green-400">
            {change}
            <span className="ml-2 text-blue-200">from last year</span>
          </div>
        )}
      </div>
      <div className="h-20">
        <AnimatedChart data={data} color={color} fillColor={`${color}33`} height={80} />
      </div>
    </div>
  )
}
