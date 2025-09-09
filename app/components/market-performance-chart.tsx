"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card } from "@/components/ui/card"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface MarketData {
  index: string
  value: number
  pe: number
}

export default function MarketPerformanceChart() {
  const chartRef = useRef<HTMLDivElement>(null)

  const marketData: MarketData[] = [
    { index: "NIFTY 50", value: 23165.7, pe: 20.0 },
    { index: "NIFTY 500", value: 21070.75, pe: 22.5 },
    { index: "Nifty Midcap 100", value: 51229.6, pe: 33.1 },
    { index: "Nifty Smallcap 100", value: 16410.2, pe: 29.5 },
  ]

  useEffect(() => {
    if (!chartRef.current) return

    // Animate bars on scroll
    const bars = chartRef.current.querySelectorAll(".pe-bar")
    const valueBars = chartRef.current.querySelectorAll(".value-bar")

    gsap.fromTo(
      valueBars,
      { width: 0 },
      {
        width: "100%",
        duration: 1.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: chartRef.current,
          start: "top bottom-=100",
        },
      },
    )

    gsap.fromTo(
      bars,
      { width: 0 },
      {
        width: "100%",
        duration: 1.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: chartRef.current,
          start: "top bottom-=100",
        },
      },
    )

    // Animate labels and values
    const labels = chartRef.current.querySelectorAll(".chart-label")
    const values = chartRef.current.querySelectorAll(".chart-value")

    gsap.fromTo(
      labels,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: chartRef.current,
          start: "top bottom-=100",
        },
      },
    )

    gsap.fromTo(
      values,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        delay: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: chartRef.current,
          start: "top bottom-=100",
        },
      },
    )
  }, [])

  // Calculate max values for scaling
  const maxValue = Math.max(...marketData.map((item) => item.value))
  const maxPE = Math.max(...marketData.map((item) => item.pe))

  const getValueBarWidth = (value: number) => {
    return `${(value / maxValue) * 100}%`
  }

  const getPEBarWidth = (pe: number) => {
    return `${(pe / maxPE) * 100}%`
  }

  return (
    <Card className="w-full bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold text-center mb-6">Indian Stock Market Performance – As of March 31, 2025</h3>

      <div className="space-y-8">
        {marketData.map((item, index) => (
          <div key={index} className="space-y-4">
            <div className="chart-label font-semibold text-blue-800">{item.index}</div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Closing Value</span>
                <span className="chart-value font-medium">{item.value.toLocaleString()}</span>
              </div>
              <div className="w-full h-4 bg-gray-100 rounded-lg overflow-hidden">
                <div
                  className={`value-bar h-full bg-gradient-to-r from-blue-500 to-blue-600`}
                  style={{ width: getValueBarWidth(item.value) }}
                ></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>PE Ratio</span>
                <span className="chart-value font-medium">{item.pe.toFixed(1)}</span>
              </div>
              <div className="w-full h-4 bg-gray-100 rounded-lg overflow-hidden">
                <div
                  className={`pe-bar h-full bg-gradient-to-r from-indigo-500 to-indigo-600`}
                  style={{ width: getPEBarWidth(item.pe) }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center text-xs text-gray-500">
        Data as on 31/03/2025. Past performance is not indicative of future returns.
      </div>
    </Card>
  )
}
