"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface AnimatedCounterProps {
  end: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
}

export function AnimatedCounter({
  end,
  duration = 2,
  delay = 0,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
}: AnimatedCounterProps) {
  const counterRef = useRef<HTMLSpanElement>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      const counter = counterRef.current
      if (!counter) return

      let startValue = 0
      const endValue = end

      const updateCount = () => {
        const formattedValue = decimals > 0 ? startValue.toFixed(decimals) : Math.floor(startValue).toString()
        setCount(Number.parseFloat(formattedValue))
      }

      // Create animation
      ScrollTrigger.create({
        trigger: counter,
        start: "top bottom-=100",
        onEnter: () => {
          gsap.to(
            {},
            {
              duration: duration,
              delay: delay,
              onUpdate: () => {
                startValue = gsap.utils.interpolate(0, endValue, gsap.getProperty(counter, "_gsap")?.progress || 0)
                updateCount()
              },
            },
          )
        },
      })

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }
  }, [end, duration, delay, decimals])

  return (
    <span ref={counterRef} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
