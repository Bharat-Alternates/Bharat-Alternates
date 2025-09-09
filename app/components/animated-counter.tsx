"use client"

import { useEffect, useState, useRef } from "react"

interface AnimatedCounterProps {
  end: number
  duration?: number
  className?: string
  suffix?: string
}

export const AnimatedCounter = ({ end, duration = 2000, className = "", suffix = "+" }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    countRef.current = 0
    const startTime = Date.now()

    const interval = setInterval(() => {
      const timePassed = Date.now() - startTime
      const progress = Math.min(timePassed / duration, 1)

      countRef.current = Math.floor(progress * end)
      setCount(countRef.current)

      if (progress === 1) {
        clearInterval(interval)
        setCount(end)
      }
    }, 16) // ~60fps

    return () => clearInterval(interval)
  }, [isVisible, end, duration])

  return (
    <span ref={elementRef} className={className}>
      {count}
      {suffix}
    </span>
  )
}
