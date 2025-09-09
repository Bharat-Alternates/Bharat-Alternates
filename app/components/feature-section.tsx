"use client"

import { useEffect, useRef } from "react"
import type { LucideIcon } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface Feature {
  icon: LucideIcon
  title: string
  description: string
}

interface FeatureSectionProps {
  title: string
  subtitle: string
  description?: string
  features: Feature[]
  columns?: 2 | 3 | 4
}

export default function FeatureSection({ title, subtitle, description, features, columns = 3 }: FeatureSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      const section = sectionRef.current
      const featuresContainer = featuresRef.current

      if (!section || !featuresContainer) return

      // Animate heading
      gsap.from(section.querySelector("h2"), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: "top bottom-=100",
          end: "bottom top+=100",
          toggleActions: "play reverse play reverse",
        },
      })

      gsap.from(section.querySelector("p.subtitle"), {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top bottom-=100",
          end: "bottom top+=100",
          toggleActions: "play reverse play reverse",
        },
      })

      if (description) {
        gsap.from(section.querySelector("p.description"), {
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: 0.3,
          scrollTrigger: {
            trigger: section,
            start: "top bottom-=100",
            end: "bottom top+=100",
            toggleActions: "play reverse play reverse",
          },
        })
      }

      // Animate feature cards
      gsap.from(featuresContainer.querySelectorAll(".feature-card"), {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: featuresContainer,
          start: "top bottom-=50",
          end: "bottom top+=50",
          toggleActions: "play reverse play reverse",
        },
      })
    }
  }, [description])

  const getGridCols = () => {
    switch (columns) {
      case 2:
        return "md:grid-cols-2"
      case 3:
        return "md:grid-cols-2 lg:grid-cols-3"
      case 4:
        return "md:grid-cols-2 lg:grid-cols-4"
      default:
        return "md:grid-cols-2 lg:grid-cols-3"
    }
  }

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          <p className="mt-4 text-lg font-medium text-primary subtitle">{subtitle}</p>
          {description && <p className="mt-4 text-muted-foreground description">{description}</p>}
        </div>
        <div ref={featuresRef} className={`mt-12 grid gap-8 ${getGridCols()}`}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                {<feature.icon className="h-6 w-6" />}
              </div>
              <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
