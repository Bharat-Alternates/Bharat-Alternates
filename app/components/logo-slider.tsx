"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

const logos = [
  { name: "Motilal Oswal", logo: "/logo/Motilal_Oswal.png" },
  { name: "IIFL", logo: "/logo/IIFL_Logo.png" },
  { name: "Alchemy PMS", logo: "/logo/Alchemy_PMS.png" },
  { name: "ASK", logo: "/logo/ASK.png" },
  { name: "2Point2", logo: "/logo/2point2_logo.png" },
  { name: "Prabhudas Lilladher", logo: "/logo/img1.jpg" },
  { name: "SBI Funds", logo: "/logo/img2.png" },
  { name: "Joindre Portfolio", logo: "/logo/img3.png" },
  { name: "IIFL Investment", logo: "/logo/img4.jpg" },
  { name: "CARE Portfolio", logo: "/logo/img5.jpg" },
  { name: "Nippon India", logo: "/logo/img6.jpg" },
  { name: "Alchemy Capital", logo: "/logo/img7.png" },
  { name: "Kotak Asset", logo: "/logo/img8.jpg" },
  { name: "Marcellus", logo: "/logo/marcellus.jpg" },
]

export default function LogoSlider({
  className,
  title = "Elite Portfolio Managers In India",
  subtitle = "Partnering with India's premier SEBI-registered portfolio managers and alternative investment funds to deliver exceptional investment opportunities and wealth creation strategies.",
}: {
  className?: string
  title?: string
  subtitle?: string
}) {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Use CSS animation instead of JavaScript for better performance
    const slider = sliderRef.current
    if (!slider) return

    // Only apply JavaScript animation on desktop
    const isMobile = window.innerWidth < 768
    if (isMobile) return

    // Simple animation with requestAnimationFrame for desktop
    let animationId: number
    let lastTimestamp = 0
    const speed = 0.5 // pixels per millisecond

    const animate = (timestamp: number) => {
      if (!slider) return
      if (!lastTimestamp) lastTimestamp = timestamp
      const elapsed = timestamp - lastTimestamp
      lastTimestamp = timestamp

      slider.scrollLeft += speed * elapsed
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className={cn("w-full overflow-hidden bg-white py-8", className)}>
      <div className="w-full px-4 md:px-8 lg:px-16">
        <h3 className="text-center text-2xl font-bold mb-8">{title}</h3>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">{subtitle}</p>
      </div>

      {/* Mobile view - static grid */}
      <div className="md:hidden grid grid-cols-2 gap-6 px-4">
        {logos.slice(0, 6).map((logo, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="h-16 w-full relative flex items-center justify-center">
              <img
                src={logo.logo || "/placeholder.svg"}
                alt={logo.name}
                className="object-contain max-h-16 max-w-full"
              />
            </div>
            <p className="text-xs text-center mt-2 text-gray-600">{logo.name}</p>
          </div>
        ))}
      </div>

      {/* Desktop view - animated slider */}
      <div ref={sliderRef} className="hidden md:block overflow-x-hidden whitespace-nowrap w-full">
        <div className="logo-slider-content inline-flex items-center space-x-12 px-4 animate-marquee">
          {logos.map((logo, index) => (
            <div key={index} className="inline-block">
              <div className="h-16 w-32 relative flex items-center justify-center">
                <img
                  src={logo.logo || "/placeholder.svg"}
                  alt={logo.name}
                  className="object-contain max-h-16 max-w-full"
                />
              </div>
              <p className="text-xs text-center mt-2 text-gray-600 whitespace-normal w-32">{logo.name}</p>
            </div>
          ))}
          {/* Duplicate logos for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`dup-${index}`} className="inline-block">
              <div className="h-16 w-32 relative flex items-center justify-center">
                <img
                  src={logo.logo || "/placeholder.svg"}
                  alt={logo.name}
                  className="object-contain max-h-16 max-w-full"
                />
              </div>
              <p className="text-xs text-center mt-2 text-gray-600 whitespace-normal w-32">{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
