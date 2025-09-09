"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { gsap } from "gsap"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/components/ui/sidebar"

export function GlassmorphicHeader() {
  const [scrolled, setScrolled] = useState(false)
  const { toggleSidebar, state } = useSidebar()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Animation for header elements
    gsap.fromTo(
      ".header-content",
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 },
    )

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Sidebar Toggle Button - now shows X when sidebar is open */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="transition-all duration-300 hover:bg-blue-50 z-50"
          >
            {state === "expanded" ? (
              <X className="h-6 w-6 text-blue-600" />
            ) : (
              <Menu className="h-6 w-6 text-blue-600" />
            )}
            <span className="sr-only">Toggle Menu</span>
          </Button>

          <Link href="/" className="header-content flex items-center space-x-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bharat-zC2hPgOFzzzRjedBBBJtAJS2teHkGF.png"
              alt="Bharat Alternates Logo"
              width={48}
              height={48}
              className="h-12 w-12"
            />
            <span className="text-2xl font-bold text-blue-600">Bharat Alternates</span>
          </Link>

          <div>
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
