"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card } from "@/components/ui/card"
import { FileText, Search, UserCheck, FileSignature, Wallet, BarChart3, Users } from "lucide-react"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface TimelineStep {
  id: number
  title: string
  description: string
  icon: React.ElementType
  color: string
}

export default function PMSTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null)

  const steps: TimelineStep[] = [
    {
      id: 1,
      title: "Eligibility Check",
      description:
        "Minimum investment required: ₹50 Lakhs (as per SEBI guidelines). You can invest as an individual, joint holder, NRI, or through a company/family trust.",
      icon: UserCheck,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      title: "Choose the Right PMS",
      description:
        "Based on your financial goals, risk appetite, and investment horizon. We help you shortlist the Best PMS in India tailored to your profile.",
      icon: Search,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      id: 3,
      title: "Documentation",
      description:
        "Just like opening a bank or Demat account: PAN Card, Aadhar/Passport, Canceled cheque, KYC compliance, FATCA declaration.",
      icon: FileText,
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 4,
      title: "Account Opening & Agreement",
      description:
        "A PMS account is opened with the selected provider. You sign an agreement that details the strategy, fees, and responsibilities.",
      icon: FileSignature,
      color: "bg-green-100 text-green-600",
    },
    {
      id: 5,
      title: "Fund Transfer",
      description:
        "You transfer ₹50 lakhs (or more) to the PMS custodian account. Once the funds are received, portfolio construction begins.",
      icon: Wallet,
      color: "bg-amber-100 text-amber-600",
    },
    {
      id: 6,
      title: "Go Live & Track Performance",
      description:
        "Your portfolio is now custom-managed by experts. You'll receive monthly reports, access to a dashboard, and regular updates.",
      icon: BarChart3,
      color: "bg-red-100 text-red-600",
    },
    {
      id: 7,
      title: "Stay Engaged",
      description:
        "You can review, interact, and make informed decisions anytime. The PMS team makes changes based on market trends and your evolving goals.",
      icon: Users,
      color: "bg-cyan-100 text-cyan-600",
    },
  ]

  useEffect(() => {
    if (!timelineRef.current) return

    const timelineItems = timelineRef.current.querySelectorAll(".timeline-item")

    gsap.fromTo(
      timelineItems,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top bottom-=100",
        },
      },
    )
  }, [])

  return (
    <Card className="w-full bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-2xl font-bold text-center mb-8">How to Start Investing in PMS</h3>
      <p className="text-center text-gray-600 mb-10">The Onboarding Process Simplified</p>

      <div ref={timelineRef} className="relative">
        {/* Timeline line */}
        <div className="absolute left-[22px] top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 hidden md:block"></div>

        {steps.map((step, index) => (
          <div key={step.id} className="timeline-item mb-8 md:mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-start">
                <div
                  className={`flex-shrink-0 w-11 h-11 rounded-full ${step.color} flex items-center justify-center z-10`}
                >
                  <step.icon className="w-5 h-5" />
                </div>
                <div className="hidden md:block w-8"></div>
              </div>

              <div className="flex-1 bg-gray-50 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                    Step {step.id}
                  </span>
                  <h4 className="text-lg font-semibold text-gray-900">{step.title}</h4>
                </div>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-lg font-medium mb-4">Want to explore the Top PMS in India and start your journey?</p>
        <p className="text-gray-600 mb-6">Let Bharat Alternates help you make the smart move. 💼</p>
      </div>
    </Card>
  )
}
