"use client"

import { useState } from "react"

interface PieChartData {
  label: string
  value: number
  color: string
}

interface SimplePieChartProps {
  data: PieChartData[]
  title?: string
  height?: number
  width?: number
  enableAnimation?: boolean
}

export default function SimplePieChart({
  data,
  title,
  height = 300,
  width = 300,
  enableAnimation = true
}: SimplePieChartProps) {
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null)
  const [isExploded, setIsExploded] = useState(false)

  // Calculate total value
  const total = data.reduce((sum, item) => sum + item.value, 0)

  // Calculate the SVG center point
  const center = {
    x: width / 2,
    y: height / 2
  }

  // Calculate the radius (slightly smaller than half the minimum dimension)
  const radius = Math.min(width, height) * 0.4
  const explodeRadius = radius * 0.08 // Distance to move exploded segments

  // Animate properties
  const transitionStyle = enableAnimation 
    ? "transition-all duration-300 ease-in-out" 
    : ""

  // Generate pie segments
  let startAngle = 0
  const segments = data.map((item, index) => {
    const percentage = (item.value / total) * 100
    const angle = (percentage / 100) * Math.PI * 2
    const endAngle = startAngle + angle
    
    // Calculate the mid angle for the text label
    const midAngle = startAngle + angle / 2
    
    // Calculate path parameters
    const x1 = center.x + Math.sin(startAngle) * radius
    const y1 = center.y - Math.cos(startAngle) * radius
    const x2 = center.x + Math.sin(endAngle) * radius
    const y2 = center.y - Math.cos(endAngle) * radius
    
    // Determine if this segment should take the long arc (> 180 degrees)
    const largeArcFlag = angle > Math.PI ? 1 : 0
    
    // Calculate offset for exploded view
    let offsetX = 0
    let offsetY = 0
    
    if (isExploded || hoveredSegment === index) {
      offsetX = Math.sin(midAngle) * explodeRadius
      offsetY = -Math.cos(midAngle) * explodeRadius
    }
    
    // Create the SVG path
    const path = `
      M ${center.x + offsetX} ${center.y + offsetY}
      L ${x1 + offsetX} ${y1 + offsetY}
      A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2 + offsetX} ${y2 + offsetY}
      Z
    `
    
    // Prepare the result for this segment
    const segmentData = {
      path,
      fill: item.color,
      percentage,
      label: item.label,
      value: item.value,
      startAngle,
      endAngle
    }
    
    // Update the start angle for the next segment
    startAngle = endAngle
    
    return segmentData
  })

  // Toggle exploded view
  const toggleExploded = () => {
    setIsExploded(!isExploded)
  }

  return (
    <div className="w-full flex flex-col items-center">
      {title && <h3 className="text-lg font-semibold mb-4 text-center">{title}</h3>}
      
      <div className="relative" style={{ width: `${width}px`, height: `${height}px` }}>
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          {/* Render pie segments */}
          {segments.map((segment, index) => (
            <path
              key={index}
              d={segment.path}
              fill={segment.fill}
              stroke="white"
              strokeWidth={2}
              className={`${transitionStyle} cursor-pointer hover:opacity-90`}
              onMouseEnter={() => setHoveredSegment(index)}
              onMouseLeave={() => setHoveredSegment(null)}
            >
              <title>{`${segment.label}: ${segment.value} (${segment.percentage.toFixed(1)}%)`}</title>
            </path>
          ))}
        </svg>
        
        {/* Simple controls */}
        {enableAnimation && (
          <div className="absolute -top-1 right-0">
            <button 
              onClick={toggleExploded}
              className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded transition-colors duration-300"
            >
              {isExploded ? "Reset View" : "Explode View"}
            </button>
          </div>
        )}
      </div>
      
      {/* Legend */}
      <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2">
        {data.map((item, index) => (
          <div 
            key={index} 
            className={`flex items-center cursor-pointer px-2 py-1 rounded transition-colors duration-300 ${
              hoveredSegment === index ? 'bg-gray-100' : ''
            }`}
            onMouseEnter={() => setHoveredSegment(index)}
            onMouseLeave={() => setHoveredSegment(null)}
          >
            <div 
              className="w-3 h-3 rounded-full mr-1.5" 
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-sm">
              {item.label}: {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
