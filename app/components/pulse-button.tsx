"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"

interface PulseButtonProps {
  children: React.ReactNode
  href: string
  variant?: "primary" | "white"
}

export function PulseButton({ children, href, variant = "primary" }: PulseButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPulsing, setIsPulsing] = useState(true)

  useEffect(() => {
    // Start pulsing animation when component mounts
    const interval = setInterval(() => {
      setIsPulsing(true)
      setTimeout(() => setIsPulsing(false), 1500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const baseClasses =
    "relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full transition-all duration-300 overflow-hidden"

  const variantClasses =
    variant === "primary" ? "bg-primary text-white hover:bg-primary/90" : "bg-white text-primary hover:bg-white/90"

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Pulse effect */}
      <span
        className={`absolute inset-0 rounded-full ${variant === "primary" ? "bg-primary" : "bg-white"} transition-transform duration-700 ${
          isPulsing && !isHovered ? "animate-pulse-ring" : ""
        }`}
      />

      {/* Hover effect */}
      <span
        className={`absolute inset-0 rounded-full ${variant === "primary" ? "bg-primary-dark" : "bg-white/80"} transform scale-0 transition-transform duration-300 ${
          isHovered ? "scale-100" : ""
        }`}
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
