"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card } from "@/components/ui/card"
import { X, Check, CheckCircle, ExternalLink } from "lucide-react"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface Myth {
  myth: string
  reality: string
}

export default function PMSMythsTable() {
  const tableRef = useRef<HTMLTableElement>(null)

  const myths: Myth[] = [
    {
      myth: "PMS is only for ultra-rich investors",
      reality: "Not true — SEBI has made PMS accessible to investors with ₹50 lakhs+",
    },
    {
      myth: "PMS strategies are high-risk and inconsistent",
      reality: "Depends on the fund — many PMS consistently outperform indices like Nifty 50",
    },
    {
      myth: "PMS lacks transparency compared to mutual funds",
      reality: "PMS offers complete visibility — direct stock ownership + real-time reports",
    },
    {
      myth: "Mutual funds are always cheaper than PMS",
      reality: "PMS may have higher costs, but offers alpha, flexibility, and lower churn",
    },
    {
      myth: "You can't exit PMS investments easily",
      reality: "PMS offers better liquidity than most alternatives — usually T+3 settlement",
    },
  ]

  useEffect(() => {
    if (!tableRef.current) return

    const rows = tableRef.current.querySelectorAll("tr")

    gsap.fromTo(
      rows,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: tableRef.current,
          start: "top bottom-=100",
        },
      },
    )
  }, [])

  return (
    <Card className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
        <h3 className="text-2xl font-bold text-center">Debunking Common Myths About PMS</h3>
        <p className="text-center mt-2 opacity-90">
          Despite growing awareness, several misconceptions surround PMS in India. At Bharat Alternates, we believe in
          empowering investors with clarity and facts.
        </p>
      </div>

      <div className="p-6">
        <div className="overflow-x-auto">
          <table ref={tableRef} className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  💬 Myth
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  ✅ Reality
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {myths.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-start">
                      <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900">{item.myth}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item.reality}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl shadow-lg">
          <h4 className="text-2xl font-bold text-center mb-6 text-navy-900">Our PMS Evaluation Framework</h4>
          <p className="text-center text-gray-700 mb-8 text-lg">
            We evaluate PMS providers through our comprehensive 8-factor analysis:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Manager Track Record",
                icon: "📊",
                description: "Historical performance & expertise",
              },
              {
                title: "Stock Selection Process",
                icon: "🎯",
                description: "Research methodology & strategy",
              },
              {
                title: "Sector Allocation",
                icon: "📈",
                description: "Diversification & focus areas",
              },
              {
                title: "Portfolio Churn",
                icon: "🔄",
                description: "Trading frequency & costs",
              },
              {
                title: "Historical Drawdowns",
                icon: "📉",
                description: "Risk management track record",
              },
              {
                title: "Return Consistency",
                icon: "⚖️",
                description: "Performance stability",
              },
              {
                title: "Volatility Index",
                icon: "📊",
                description: "Risk measurement metrics",
              },
              {
                title: "Fee Structure",
                icon: "💰",
                description: "Cost-effectiveness analysis",
              },
            ].map((factor, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-2xl mb-3">{factor.icon}</div>
                <h5 className="font-semibold text-navy-900 mb-2">{factor.title}</h5>
                <p className="text-sm text-gray-600">{factor.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-xl shadow-sm">
            <h4 className="text-xl font-bold mb-4 text-navy-900">Need Help Choosing the Right PMS?</h4>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Every investor's journey is unique. We use our proven 8-point framework to help you make an informed
              decision that aligns with your financial goals — transparent, objective, and pressure-free.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>Receive a customized PMS Scorecard</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>Get a detailed walkthrough of our analysis</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span>Ask questions and get expert insights</span>
              </div>
            </div>
            <button className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
              Schedule a Free Consultation
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  )
}
