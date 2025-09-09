"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  {
    name: "Large Cap",
    PMS: 16.8,
    MutualFund: 12.5,
  },
  {
    name: "Mid Cap",
    PMS: 21.4,
    MutualFund: 15.7,
  },
  {
    name: "Small Cap",
    PMS: 24.9,
    MutualFund: 18.2,
  },
  {
    name: "Multi Cap",
    PMS: 19.6,
    MutualFund: 14.3,
  },
  {
    name: "Focused",
    PMS: 22.8,
    MutualFund: 16.1,
  },
]

export default function PerformanceComparisonChart() {
  const chartRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (chartRef.current) {
      observer.observe(chartRef.current)
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current)
      }
    }
  }, [])

  return (
    <Card className="p-6 bg-white shadow-xl rounded-xl overflow-hidden" ref={chartRef}>
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">5-Year Performance Comparison</h3>
        <p className="text-slate-600">
          PMS strategies have consistently outperformed mutual funds across different market segments
        </p>
      </div>
      <div
        className="h-[400px] w-full opacity-0 animate-fade-in"
        style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: "CAGR (%)", angle: -90, position: "insideLeft" }} />
            <Tooltip
              formatter={(value) => [`${value}%`, ""]}
              contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
            />
            <Legend />
            <Bar dataKey="PMS" name="PMS Strategies" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="MutualFund" name="Mutual Funds" fill="#93c5fd" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-6 text-sm text-slate-500 text-center">
        Note: Data represents average returns across top-performing strategies in each category. Past performance is not
        indicative of future results.
      </div>
    </Card>
  )
}
