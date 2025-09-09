"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface AnimationWrapperProps {
  children: ReactNode
  animation?: "fade-in" | "slide-up" | "slide-in-right" | "slide-in-left" | "scale-in"
  delay?: number
  duration?: number
  threshold?: number
  className?: string
}

export default function AnimationWrapper({
  children,
  animation = "fade-in",
  delay = 0,
  duration = 0.6,
  threshold = 0.2,
  className = "",
}: AnimationWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Register ScrollTrigger plugin
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)
    }

    const element = ref.current
    if (!element) return

    let initialProps = {}
    let animateProps = {}

    // Set initial and animation properties based on animation type
    switch (animation) {
      case "fade-in":
        initialProps = { opacity: 0 }
        animateProps = { opacity: 1 }
        break
      case "slide-up":
        initialProps = { opacity: 0, y: 50 }
        animateProps = { opacity: 1, y: 0 }
        break
      case "slide-in-right":
        initialProps = { opacity: 0, x: 50 }
        animateProps = { opacity: 1, x: 0 }
        break
      case "slide-in-left":
        initialProps = { opacity: 0, x: -50 }
        animateProps = { opacity: 1, x: 0 }
        break
      case "scale-in":
        initialProps = { opacity: 0, scale: 0.95 }
        animateProps = { opacity: 1, scale: 1 }
        break
      default:
        initialProps = { opacity: 0 }
        animateProps = { opacity: 1 }
    }

    // Set initial state
    gsap.set(element, initialProps)

    // Create animation with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: `top bottom-=${threshold * 100}%`,
        toggleActions: "play none none none",
      },
    })

    tl.to(element, {
      ...animateProps,
      duration,
      delay,
      ease: "power2.out",
    })

    return () => {
      // Clean up ScrollTrigger
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill()
      }
    }
  }, [animation, delay, duration, threshold])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
