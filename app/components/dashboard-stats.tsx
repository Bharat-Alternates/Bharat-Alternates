"use client"

import { useEffect, useRef } from "react"
import { LineChart, PieChart, TrendingUp, Users } from "lucide-react"
import { InteractiveChart } from "@/components/interactive-chart"
import { stats } from "@/lib/stats"

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

  // Icon mapping for each stat
  const getIconForStat = (statId: string) => {
    switch (statId) {
      case "industryAUM":
        return <TrendingUp className="h-4 w-4" />
      case "clientLoyalty":
        return <LineChart className="h-4 w-4" />
      case "clientGrowth":
        return <Users className="h-4 w-4" />
      case "strategies":
        return <PieChart className="h-4 w-4" />
      default:
        return <TrendingUp className="h-4 w-4" />
    }
  }

  return (
    <div ref={statsRef} className={`grid gap-6 md:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {stats.map((stat) => (
        <div key={stat.id} className="stat-card transition-all duration-500">
          <InteractiveChart
            title={stat.title}
            data={stat.data}
            color={stat.color}
            hoverColor={stat.color === "#3b82f6" ? "#60a5fa" : stat.color === "#10b981" ? "#34d399" : stat.color === "#8b5cf6" ? "#c4b5fd" : "#fb923c"}
            fillColor={stat.fillColor || `${stat.color}33`}
            hoverFillColor={stat.fillColor ? stat.fillColor.replace('0.1', '0.2') : `${stat.color}55`}
            value={stat.value}
            change={stat.change?.replace('+', '')}
            changeType={stat.change?.startsWith('+') ? "positive" : undefined}
            icon={getIconForStat(stat.id)}
          />
        </div>
      ))}
    </div>
  )
}
