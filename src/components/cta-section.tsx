"use client"

import { useEffect, useRef } from "react"
import { AnimatedButton } from "@/components/animated-button"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface CTASectionProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  backgroundClass?: string
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundClass = "bg-primary",
}: CTASectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      const section = sectionRef.current
      if (!section) return

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
      })

      tl.fromTo(
        section.querySelector("h2"),
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
        },
      )
        .fromTo(
          section.querySelector("p"),
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          "-=0.4",
        )
        .fromTo(
          section.querySelector(".cta-button"),
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          "-=0.2",
        )
    }
  }, [])

  return (
    <section ref={sectionRef} className={`py-16 ${backgroundClass} text-white`}>
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          <p className="mt-4 text-lg opacity-90">{description}</p>
          <div className="mt-8 cta-button">
            <AnimatedButton href={buttonLink} className="bg-white hover:bg-white">
              {buttonText}
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  )
}
