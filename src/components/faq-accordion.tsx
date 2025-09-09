"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Plus, Minus } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  items: FaqItem[]
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const accordionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      const accordion = accordionRef.current
      if (!accordion) return

      // Animate accordion items when they come into view
      gsap.from(accordion.querySelectorAll(".faq-item"), {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: accordion,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse", // Play when scrolling down, reverse when scrolling up
        },
      })

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }
  }, [])

  return (
    <div ref={accordionRef} className="w-full">
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="faq-item mb-4 overflow-hidden rounded-lg border border-gray-200 px-1 transition-all duration-300 hover:shadow-md"
          >
            <AccordionTrigger className="group flex w-full items-center justify-between py-4 text-left font-medium transition-all hover:text-blue-600 data-[state=open]:text-blue-600 [&[data-state=open]>svg]:rotate-180">
              <span className="text-lg text-blue-800">{item.question}</span>
              <div className="ml-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gray-300 transition-colors group-data-[state=open]:border-blue-600">
                {/* Custom plus/minus icons with animation */}
                <Plus className="h-3 w-3 transition-all duration-300 group-data-[state=open]:opacity-0 text-blue-600" />
                <Minus className="absolute h-3 w-3 opacity-0 transition-all duration-300 group-data-[state=open]:opacity-100 text-blue-600" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="overflow-hidden text-blue-900 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
              <div className="pb-4 pt-0">{item.answer}</div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
