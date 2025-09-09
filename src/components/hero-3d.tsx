"use client"

// Replace the entire 3D hero component with a more professional finance-themed hero
import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"
import { ArrowRight, BarChart2, PieChart, TrendingUp } from "lucide-react"

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current) return

    const hero = heroRef.current

    // Create a GSAP timeline for the hero animations
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    // Animate the background gradient
    tl.fromTo(hero.querySelector(".bg-gradient"), { opacity: 0 }, { opacity: 1, duration: 1.5 })

    // Animate the heading with a split text effect
    tl.fromTo(
      hero.querySelectorAll(".hero-title .word"),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.8 },
      "-=1",
    )

    // Animate the description
    tl.fromTo(
      hero.querySelector(".hero-description"),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.4",
    )

    // Animate the buttons
    tl.fromTo(
      hero.querySelectorAll(".hero-button"),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.6 },
      "-=0.4",
    )

    // Animate the chart icons
    tl.fromTo(
      hero.querySelectorAll(".chart-icon"),
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, stagger: 0.15, duration: 0.7 },
      "-=0.6",
    )

    // Animate the floating numbers
    tl.fromTo(
      hero.querySelectorAll(".floating-number"),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.6 },
      "-=0.8",
    )

    // Set up floating animations for the chart icons
    gsap.to(hero.querySelectorAll(".chart-icon"), {
      y: "random(-10, 10)",
      x: "random(-10, 10)",
      rotation: "random(-5, 5)",
      duration: "random(2, 4)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2,
    })

    // Set up floating animations for the numbers
    gsap.to(hero.querySelectorAll(".floating-number"), {
      y: "random(-15, 15)",
      duration: "random(3, 5)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.3,
    })

    return () => {
      // Clean up animations
      tl.kill()
    }
  }, [])

  return (
    <div ref={heroRef} className="relative min-h-[90vh] overflow-hidden bg-slate-900 text-white">
      {/* Background gradient */}
      <div className="bg-gradient absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 opacity-0"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Chart icons */}
        <div className="chart-icon absolute left-[10%] top-[20%] opacity-0">
          <TrendingUp className="h-16 w-16 text-blue-500/30" />
        </div>
        <div className="chart-icon absolute right-[15%] top-[30%] opacity-0">
          <BarChart2 className="h-20 w-20 text-blue-400/20" />
        </div>
        <div className="chart-icon absolute bottom-[25%] left-[20%] opacity-0">
          <PieChart className="h-24 w-24 text-blue-300/20" />
        </div>

        {/* Floating numbers */}
        <div className="floating-number absolute right-[25%] top-[15%] font-mono text-3xl font-bold text-blue-500/20 opacity-0">
          +24.6%
        </div>
        <div className="floating-number absolute bottom-[30%] left-[10%] font-mono text-2xl font-bold text-green-500/20 opacity-0">
          +12.8%
        </div>
        <div className="floating-number absolute bottom-[20%] right-[20%] font-mono text-4xl font-bold text-blue-400/20 opacity-0">
          1.45x
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 flex min-h-[90vh] flex-col items-center justify-center py-20 text-center">
        <h1 className="hero-title max-w-4xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          {/* Split text for animation */}
          <span className="word">Expert</span> <span className="word">Portfolio</span>{" "}
          <span className="word">Management</span> <span className="word">Services</span>
        </h1>

        <p className="hero-description mx-auto mt-6 max-w-2xl text-lg text-slate-300 md:text-xl">
          Professional Portfolio Management Services (PMS) and Alternative Investment Funds (AIF) designed to help
          high-net-worth individuals achieve their financial goals.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" className="hero-button transition-transform duration-300 hover:scale-105" asChild>
            <Link href="/contact">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="hero-button border-white text-white transition-transform duration-300 hover:scale-105 hover:bg-white hover:text-slate-900"
            asChild
          >
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L48 105C96 90 192 60 288 55C384 50 480 70 576 75C672 80 768 70 864 65C960 60 1056 60 1152 65C1248 70 1344 80 1392 85L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  )
}
