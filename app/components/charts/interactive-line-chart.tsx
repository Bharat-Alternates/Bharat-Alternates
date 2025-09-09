"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

interface DataPoint {
  label: string
  value: number
}

interface LineChartProps {
  data: DataPoint[]
  height?: number
  color?: string
  hoverColor?: string
  title?: string
  yAxisLabel?: string
  xAxisLabel?: string
}

export default function InteractiveLineChart({
  data,
  height = 300,
  color = "#3b82f6",
  hoverColor = "#2563eb",
  title,
  yAxisLabel,
  xAxisLabel,
}: LineChartProps) {
  const chartRef = useRef<HTMLDivElement>(null)
  const [activePoint, setActivePoint] = useState<number | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!chartRef.current) return

    const chart = chartRef.current

    // Animate the chart on load
    gsap.from(chart.querySelectorAll(".chart-line"), {
      strokeDashoffset: (i, el) => el.getTotalLength(),
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: chart,
        start: "top bottom-=100",
      },
    })

    gsap.from(chart.querySelectorAll(".chart-point"), {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "back.out(1.7)",
      delay: 1,
      scrollTrigger: {
        trigger: chart,
        start: "top bottom-=100",
      },
    })

    gsap.from(chart.querySelectorAll(".chart-label"), {
      y: 10,
      opacity: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "power3.out",
      delay: 1.2,
      scrollTrigger: {
        trigger: chart,
        start: "top bottom-=100",
      },
    })
  }, [data])

  // Get min and max values for scaling
  const values = data.map((d) => d.value)
  const minValue = Math.min(...values)
  const maxValue = Math.max(...values)
  const range = maxValue - minValue
  const padding = range * 0.1 // Add 10% padding

  const normalizedValues = values.map(
    (value) => ((value - (minValue - padding)) / (maxValue + padding - (minValue - padding))) * 0.8 + 0.1,
  )

  // Create SVG path
  const chartWidth = 100
  const chartHeight = 100
  const pointSpacing = chartWidth / (data.length - 1)

  let pathD = `M0,${chartHeight - normalizedValues[0] * chartHeight}`

  normalizedValues.forEach((value, index) => {
    if (index === 0) return
    pathD += ` L${index * pointSpacing},${chartHeight - value * chartHeight}`
  })

  const handlePointHover = (index: number, e: React.MouseEvent) => {
    setActivePoint(index)
    const rect = e.currentTarget.getBoundingClientRect()
    setTooltipPosition({
      x: rect.left + window.scrollX,
      y: rect.top + window.scrollY,
    })
  }

  const handlePointLeave = () => {
    setActivePoint(null)
  }

  return (
    <div className="w-full">
      {title && <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>}
      <div ref={chartRef} className="relative w-full" style={{ height: `${height}px` }}>
        {/* Y-axis label */}
        {yAxisLabel && (
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-90 text-sm text-gray-500">
            {yAxisLabel}
          </div>
        )}

        {/* Chart */}
        <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} width="100%" height="100%" className="overflow-visible">
          {/* Grid lines */}
          {[0.2, 0.4, 0.6, 0.8].map((pos, i) => (
            <line
              key={i}
              x1="0"
              y1={chartHeight * pos}
              x2={chartWidth}
              y2={chartHeight * pos}
              stroke="#e5e7eb"
              strokeWidth="0.5"
              strokeDasharray="2,2"
              className="chart-grid"
            />
          ))}

          {/* X-axis */}
          <line x1="0" y1={chartHeight} x2={chartWidth} y2={chartHeight} stroke="#9ca3af" strokeWidth="1" />

          {/* Y-axis */}
          <line x1="0" y1="0" x2="0" y2={chartHeight} stroke="#9ca3af" strokeWidth="1" />

          {/* Line chart */}
          <path
            d={pathD}
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="chart-line"
          />

          {/* Data points */}
          {normalizedValues.map((value, index) => (
            <g key={index}>
              <circle
                cx={index * pointSpacing}
                cy={chartHeight - value * chartHeight}
                r={activePoint === index ? 6 : 4}
                fill={activePoint === index ? hoverColor : "white"}
                stroke={activePoint === index ? hoverColor : color}
                strokeWidth="2"
                className="chart-point cursor-pointer transition-all duration-200"
                onMouseEnter={(e) => handlePointHover(index, e)}
                onMouseLeave={handlePointLeave}
              />
            </g>
          ))}

          {/* X-axis labels */}
          {data.map((point, index) => (
            <text
              key={index}
              x={index * pointSpacing}
              y={chartHeight + 15}
              textAnchor="middle"
              fontSize="8"
              fill="#6b7280"
              className="chart-label"
            >
              {point.label}
            </text>
          ))}
        </svg>

        {/* Tooltip */}
        {activePoint !== null && (
          <div
            className="absolute z-10 bg-white px-2 py-1 text-sm rounded shadow-lg pointer-events-none"
            style={{
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y - 40}px`,
              transform: "translate(-50%, -100%)",
            }}
          >
            <div className="font-bold">{data[activePoint].label}</div>
            <div>{data[activePoint].value}</div>
          </div>
        )}
      </div>

      {/* X-axis label */}
      {xAxisLabel && <div className="text-center text-sm text-gray-500 mt-4">{xAxisLabel}</div>}
    </div>
  )
}
