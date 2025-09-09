"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface ParallaxSectionProps {
  children: ReactNode
  speed?: number
  className?: string
  direction?: "up" | "down" | "left" | "right"
}

export function ParallaxSection({ children, speed = 0.5, className = "", direction = "up" }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      const section = sectionRef.current
      const content = contentRef.current

      if (!section || !content) return

      // Determine the transform property based on direction
      let transformProperty = "y"
      if (direction === "left" || direction === "right") {
        transformProperty = "x"
      }

      // Determine the movement value
      let moveValue = direction === "down" || direction === "right" ? "-" : ""
      moveValue += `${speed * 100}px`

      // Create the parallax effect with scrub for smooth scrolling in both directions
      gsap.fromTo(
        content,
        {
          [transformProperty]: direction === "down" || direction === "right" ? "0" : moveValue,
        },
        {
          [transformProperty]: direction === "down" || direction === "right" ? moveValue : "0",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5, // Smooth animation that follows scroll position
          },
        },
      )

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }
  }, [speed, direction])

  return (
    <section ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      <div ref={contentRef} className="w-full h-full">
        {children}
      </div>
    </section>
  )
}

export default ParallaxSection
