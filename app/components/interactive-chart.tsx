"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ChartProps {
  title: string
  data: number[]
  color: string
  hoverColor: string
  fillColor: string
  hoverFillColor: string
  value: string
  change?: string
  changeType?: "positive" | "negative"
  icon?: React.ReactNode
}

export function InteractiveChart({
  title,
  data,
  color,
  hoverColor,
  fillColor,
  hoverFillColor,
  value,
  change,
  changeType,
  icon,
}: ChartProps) {
  const chartRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const chart = chartRef.current
    if (!chart) return

    // Simple animation for chart on load
    const paths = chart.querySelectorAll("path")
    paths.forEach((path) => {
      path.style.opacity = "0"
      setTimeout(() => {
        path.style.opacity = "1"
        path.style.transition = "opacity 0.5s ease-in-out"
      }, 300)
    })
  }, [])

  // Normalize data to fit in the chart
  const normalizedData = data.map((value) => {
    const min = Math.min(...data)
    const max = Math.max(...data)
    return ((value - min) / (max - min || 1)) * 80 + 10
  })

  // Create SVG path
  const width = 100
  const height = 100
  const step = width / (normalizedData.length - 1)

  let pathD = `M0,${height - normalizedData[0]}`
  let fillPathD = `M0,${height - normalizedData[0]}`

  normalizedData.forEach((value, index) => {
    if (index === 0) return
    pathD += ` L${index * step},${height - value}`
    fillPathD += ` L${index * step},${height - value}`
  })

  // Complete the fill path by adding bottom line and closing it
  fillPathD += ` L${width},${height} L0,${height} Z`

  return (
    <Card className="bg-white border-gray-200 hover:shadow-md transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-navy-900">{title}</CardTitle>
        {icon && <div className="text-blue-600">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-navy-900 flex items-center">
          {value}
          {change && (
            <span className={`ml-2 text-sm ${changeType === "positive" ? "text-green-600" : "text-red-600"}`}>
              {changeType === "positive" ? "+" : "-"}
              {change}
            </span>
          )}
        </div>
        <div
          ref={chartRef}
          className="h-[60px] mt-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <svg
            viewBox={`0 0 ${width} ${height}`}
            width="100%"
            height="60"
            preserveAspectRatio="none"
            className="overflow-visible"
          >
            <path
              d={fillPathD}
              fill={isHovered ? hoverFillColor : fillColor}
              stroke="none"
              className="transition-colors duration-300"
            />
            <path
              d={pathD}
              fill="none"
              stroke={isHovered ? hoverColor : color}
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-colors duration-300"
            />
          </svg>
        </div>
      </CardContent>
    </Card>
  )
}
