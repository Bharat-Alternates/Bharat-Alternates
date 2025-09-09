"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface TextRevealProps {
  children: ReactNode
  stagger?: number
  duration?: number
  delay?: number
  threshold?: number
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
}

export default function TextReveal({
  children,
  stagger = 0.1,
  duration = 0.8,
  delay = 0,
  threshold = 0.2,
  className = "",
  as: Component = "div",
}: TextRevealProps) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      const text = textRef.current
      if (!text) return

      // Split text into words
      const words = text.querySelectorAll(".word")

      // Create animation
      gsap.fromTo(
        words,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: stagger,
          duration: duration,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text,
            start: `top bottom-=${threshold * 100}%`,
            toggleActions: "play none none none",
          },
        },
      )

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }
  }, [stagger, duration, delay, threshold])

  // Split the text into words
  const renderSplitText = () => {
    if (typeof children !== "string") {
      return children
    }

    return children.split(" ").map((word, index) => (
      <span key={index} className="word inline-block">
        {word}
        {index !== children.split(" ").length - 1 && " "}
      </span>
    ))
  }

  return (
    <Component ref={textRef} className={className}>
      {renderSplitText()}
    </Component>
  )
}
