"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedChartProps {
  data: number[]
  color: string
  fillColor?: string
  height?: number
}

export function AnimatedChart({
  data,
  color,
  fillColor = "rgba(59, 130, 246, 0.1)",
  height = 100,
}: AnimatedChartProps) {
  const chartRef = useRef<SVGSVGElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const chart = chartRef.current
    if (!chart) return

    // Create animation
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(chart)

    return () => {
      observer.disconnect()
    }
  }, [])

  // Create SVG path
  const width = 100
  const maxValue = Math.max(...data)
  const minValue = Math.min(...data)
  const range = maxValue - minValue
  const normalizedData = data.map((value) => ((value - minValue) / (range || 1)) * 0.8 * height + 0.1 * height)

  const step = width / (data.length - 1)

  let pathD = `M0,${height - normalizedData[0]}`
  let fillPathD = `M0,${height - normalizedData[0]}`

  normalizedData.forEach((value, index) => {
    if (index === 0) return
    pathD += ` L${index * step},${height - value}`
    fillPathD += ` L${index * step},${height - value}`
  })

  // Complete the fill path
  fillPathD += ` L${width},${height} L0,${height} Z`

  return (
    <svg
      ref={chartRef}
      viewBox={`0 0 ${width} ${height}`}
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      className="overflow-visible"
    >
      <path d={fillPathD} fill={fillColor} opacity={isVisible ? 1 : 0} style={{ transition: "opacity 1s ease-out" }} />
      <path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={isVisible ? 1 : 0}
        style={{ transition: "opacity 1s ease-out" }}
      />
    </svg>
  )
}
