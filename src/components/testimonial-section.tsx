"use client"

import { useEffect, useRef } from "react"
import { Star } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
  imageUrl?: string
}

interface TestimonialSectionProps {
  title: string
  subtitle: string
  testimonials: Testimonial[]
}

export default function TestimonialSection({ title, subtitle, testimonials }: TestimonialSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      const section = sectionRef.current
      if (!section) return

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

      gsap.from(section.querySelector("p"), {
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

      // Animate testimonial cards
      gsap.from(section.querySelectorAll(".testimonial-card"), {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: section.querySelector(".testimonial-grid"),
          start: "top bottom-=50",
          end: "bottom top+=50",
          toggleActions: "play reverse play reverse",
        },
      })
    }
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
        </div>
        <div className="testimonial-grid mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card rounded-lg border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="mb-4 text-muted-foreground">{testimonial.content}</p>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <img
                    src={testimonial.imageUrl || `/placeholder.svg?height=48&width=48`}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
