"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Search, LineChart, BarChart, PieChart, TrendingUp, Shield, CheckCircle } from "lucide-react"

export function StrategyTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      const timeline = timelineRef.current
      if (!timeline) return

      // Animate the timeline line
      gsap.fromTo(
        ".timeline-line",
        { height: 0 },
        {
          height: "100%",
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: timeline,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 0.5, // Smooth animation that follows scroll position
            toggleActions: "play reverse play reverse", // Play when scrolling down, reverse when scrolling up
          },
        },
      )

      // Animate timeline items
      gsap.fromTo(
        ".timeline-item",
        {
          opacity: 0,
          x: (i) => (i % 2 === 0 ? -50 : 50),
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: timeline,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse", // Play when scrolling down, reverse when scrolling up
          },
        },
      )

      // Animate timeline icons
      gsap.fromTo(
        ".timeline-icon",
        {
          scale: 0,
          rotation: -30,
        },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.3,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: timeline,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse", // Play when scrolling down, reverse when scrolling up
          },
        },
      )

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }
  }, [])

  const timelineSteps = [
    {
      title: "Research & Analysis",
      description: "Comprehensive market research and analysis of investment opportunities",
      icon: Search,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Risk Assessment",
      description: "Thorough evaluation of risk factors and market conditions",
      icon: Shield,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      title: "Strategy Formulation",
      description: "Development of tailored investment strategies based on client goals",
      icon: LineChart,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Portfolio Construction",
      description: "Building diversified portfolios with optimal asset allocation",
      icon: PieChart,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Implementation",
      description: "Executing investment decisions with precision and timing",
      icon: BarChart,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Performance Monitoring",
      description: "Continuous tracking and analysis of portfolio performance",
      icon: TrendingUp,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Regular Review & Optimization",
      description: "Periodic assessment and refinement of investment strategies",
      icon: CheckCircle,
      color: "bg-teal-100 text-teal-600",
    },
  ]

  return (
    <div ref={timelineRef} className="relative mx-auto max-w-4xl py-8">
      {/* Timeline center line */}
      <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gray-200">
        <div className="timeline-line absolute left-0 top-0 h-0 w-full bg-blue-500"></div>
      </div>

      {/* Timeline items */}
      {timelineSteps.map((step, index) => (
        <div
          key={index}
          className={`timeline-item relative mb-12 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
        >
          {/* Content */}
          <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
            <h3 className="mb-2 text-xl font-bold text-blue-800">{step.title}</h3>
            <p className="text-gray-700">{step.description}</p>
          </div>

          {/* Center icon */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2">
            <div
              className={`timeline-icon flex h-12 w-12 items-center justify-center rounded-full ${step.color} shadow-lg`}
            >
              <step.icon className="h-6 w-6" />
            </div>
          </div>

          {/* Empty space for the other side */}
          <div className="w-5/12"></div>
        </div>
      ))}
    </div>
  )
}
