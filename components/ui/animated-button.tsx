"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface AnimatedButtonProps {
  href: string
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "default" | "lg"
  className?: string
  showArrow?: boolean
}

export function AnimatedButton({
  href,
  children,
  variant = "primary",
  size = "default",
  className,
  showArrow = true,
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const baseStyles =
    "relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 overflow-hidden"

  const sizeStyles = {
    default: "px-6 py-2 text-sm",
    lg: "px-8 py-3 text-base",
  }

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25",
    secondary: "bg-white text-blue-600 hover:bg-blue-50",
    outline: "border-2 border-white text-white hover:bg-white/10",
  }

  return (
    <Link
      href={href}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], "group", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Button content */}
      <span className="relative z-10 flex items-center">
        {children}
        {showArrow && (
          <ArrowRight
            className={cn("ml-2 h-4 w-4 transition-transform duration-300", isHovered ? "translate-x-1" : "")}
          />
        )}
      </span>

      {/* Animated background */}
      <span
        className={cn(
          "absolute inset-0 z-0 rounded-full transition-all duration-300",
          variant === "primary" && "bg-blue-700 opacity-0 group-hover:opacity-100",
          variant === "secondary" && "bg-blue-50 opacity-0 group-hover:opacity-100",
          variant === "outline" && "bg-white opacity-0 group-hover:opacity-10",
        )}
      />

      {/* Glow effect */}
      <span
        className={cn(
          "absolute inset-0 -z-10 rounded-full opacity-0 blur transition-opacity duration-300 group-hover:opacity-50",
          variant === "primary" && "bg-blue-600",
          variant === "secondary" && "bg-blue-200",
          variant === "outline" && "bg-white",
        )}
      />

      {/* Ripple effect */}
      {isHovered && (
        <span className="absolute inset-0 z-0">
          <span className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-10 animate-ripple"></span>
        </span>
      )}
    </Link>
  )
}
