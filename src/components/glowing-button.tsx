"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

interface GlowingButtonProps {
  children: React.ReactNode
  href: string
}

export function GlowingButton({ children, href }: GlowingButtonProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <Link
      href={href}
      className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-transparent border-2 border-white rounded-full overflow-hidden transition-all duration-300 hover:text-primary hover:border-primary"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Glow effect */}
      <span
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isHovered
            ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%)`
            : "",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Button content */}
      <span className="relative flex items-center">
        {children}
        <svg
          className={`ml-2 h-5 w-5 transform transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>
    </Link>
  )
}
