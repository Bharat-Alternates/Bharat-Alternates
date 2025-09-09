"use client"

import { useEffect, useRef } from "react"
import { LineChart, PieChart, TrendingUp, Users } from "lucide-react"
import { InteractiveChart } from "@/components/interactive-chart"

interface DashboardStatsProps {
  className?: string
}

export default function DashboardStats({ className = "" }: DashboardStatsProps) {
  const statsRef = useRef<HTMLDivElement>(null)

  // Sample data for charts
  const performanceData = [30, 45, 35, 50, 40, 60, 55, 70, 65, 80, 75, 90]
  const clientGrowthData = [100, 120, 150, 180, 200, 250, 280, 320, 350, 400, 450, 500]
  const aumData = [1000, 1200, 1500, 1800, 2000, 2500, 2800, 3200, 3500, 4000, 4500, 5000]
  const revenueData = [50, 60, 45, 70, 65, 80, 75, 90, 85, 100, 95, 110]

  useEffect(() => {
    const stats = statsRef.current
    if (!stats) return

    // Add entrance animation for cards
    const cards = stats.querySelectorAll(".stat-card")
    cards.forEach((card, index) => {
      card.classList.add("opacity-0", "translate-y-4")
      setTimeout(() => {
        card.classList.remove("opacity-0", "translate-y-4")
        card.classList.add("transition-all", "duration-500", "ease-out")
      }, 100 * index)
    })
  }, [])

  return (
    <div ref={statsRef} className={`grid gap-6 md:grid-cols-2 lg:grid-cols-4 ${className}`}>
      <div className="stat-card transition-all duration-500">
        <InteractiveChart
          title="Assets Under Management"
          data={aumData}
          color="#3b82f6"
          hoverColor="#60a5fa"
          fillColor="rgba(59, 130, 246, 0.1)"
          hoverFillColor="rgba(59, 130, 246, 0.2)"
          value="₹5000 Cr+"
          change="15%"
          changeType="positive"
          icon={<TrendingUp className="h-4 w-4" />}
        />
      </div>

      <div className="stat-card transition-all duration-500">
        <InteractiveChart
          title="Portfolio Performance"
          data={performanceData}
          color="#4ade80"
          hoverColor="#86efac"
          fillColor="rgba(74, 222, 128, 0.1)"
          hoverFillColor="rgba(74, 222, 128, 0.2)"
          value="18.5% CAGR"
          change="2.3%"
          changeType="positive"
          icon={<LineChart className="h-4 w-4" />}
        />
      </div>

      <div className="stat-card transition-all duration-500">
        <InteractiveChart
          title="Client Growth"
          data={clientGrowthData}
          color="#a78bfa"
          hoverColor="#c4b5fd"
          fillColor="rgba(167, 139, 250, 0.1)"
          hoverFillColor="rgba(167, 139, 250, 0.2)"
          value="500+"
          change="9%"
          changeType="positive"
          icon={<Users className="h-4 w-4" />}
        />
      </div>

      <div className="stat-card transition-all duration-500">
        <InteractiveChart
          title="Investment Strategies"
          data={revenueData}
          color="#f97316"
          hoverColor="#fb923c"
          fillColor="rgba(249, 115, 22, 0.1)"
          hoverFillColor="rgba(249, 115, 22, 0.2)"
          value="12+"
          icon={<PieChart className="h-4 w-4" />}
        />
      </div>
    </div>
  )
}
