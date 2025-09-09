"use client"

import type React from "react"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

declare global {
  interface Window {
    Calendly?: any
  }
}

interface CalendlyButtonProps {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  children: React.ReactNode
  showArrow?: boolean
}

export function CalendlyButton({
  variant = "default",
  size = "default",
  className = "",
  children,
  showArrow = false,
}: CalendlyButtonProps) {
  useEffect(() => {
    // Load Calendly widget script
    const head = document.querySelector("head")
    if (head && !document.querySelector('script[src*="calendly"]')) {
      const style = document.createElement("link")
      style.rel = "stylesheet"
      style.href = "https://assets.calendly.com/assets/external/widget.css"
      head.appendChild(style)

      const script = document.createElement("script")
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      head.appendChild(script)
    }
  }, [])

  const openCalendly = () => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.showPopupWidget(
        "https://calendly.com/bharatalternates?hide_landing_page_details=1&hide_gdpr_banner=1&text_color=3730a3&primary_color=3730a3",
      )
    }
  }

  return (
    <Button variant={variant} size={size} className={className} onClick={openCalendly}>
      {children}
      {showArrow && <ArrowRight className="ml-2 h-4 w-4" />}
    </Button>
  )
}
