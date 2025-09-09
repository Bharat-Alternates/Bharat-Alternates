"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: "fade-in" | "slide-up" | "slide-in-right" | "slide-in-left" | "scale-in"
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  animation = "fade-in",
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    let animationConfig = {}

    switch (animation) {
      case "slide-up":
        animationConfig = {
          y: 50,
          opacity: 0,
        }
        break
      case "slide-in-right":
        animationConfig = {
          x: 50,
          opacity: 0,
        }
        break
      case "slide-in-left":
        animationConfig = {
          x: -50,
          opacity: 0,
        }
        break
      case "scale-in":
        animationConfig = {
          scale: 0.95,
          opacity: 0,
        }
        break
      case "fade-in":
      default:
        animationConfig = {
          opacity: 0,
        }
    }

    gsap.fromTo(sectionRef.current, animationConfig, {
      y: 0,
      x: 0,
      scale: 1,
      opacity: 1,
      duration: 0.8,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom-=100",
      },
    })
  }, [animation, delay])

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  )
}
