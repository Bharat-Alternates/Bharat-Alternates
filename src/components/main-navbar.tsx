"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { gsap } from "gsap"

export function MainNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Animation for navbar elements
    gsap.fromTo(".nav-content", { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between lg:justify-center">
          {/* Mobile menu button - only visible on mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => document.dispatchEvent(new CustomEvent("toggle-sidebar"))}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>

          {/* Logo and company name - centered on desktop */}
          <div className="nav-content flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bharat-HcRpIeAelZSFHOounDAB0Q4texIk69.png"
                alt="Bharat Alternates Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold text-primary">Bharat Alternates</span>
            </Link>
          </div>

          {/* Empty div to maintain centering on mobile */}
          <div className="w-10 lg:hidden"></div>
        </div>
      </div>
    </header>
  )
}
