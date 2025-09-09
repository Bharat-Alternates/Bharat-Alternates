"use client"

import { useState } from "react"
import Link from "next/link"
import { X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CalendlyButton } from "@/components/calendly-button"

interface OpenSections {
  pms: boolean
  aif: boolean
}

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSections, setOpenSections] = useState<OpenSections>({
    pms: false,
    aif: false,
  })

  const toggleSection = (section: keyof OpenSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="lg:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <line x1="4" x2="20" y1="12" y2="12" />
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
        <span className="sr-only">Open Menu</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 top-0 z-[100] bg-white overflow-y-auto">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                <span className="text-xl sm:text-2xl font-bold">
                  <span className="text-primary">Bharat </span>
                  <span style={{ color: "#020b1c" }}> Alternates</span>
                </span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close Menu</span>
              </Button>
            </div>

            <div className="text-gray-500 mb-6">Platform For PMS, AIF and Mutual Funds</div>

            <nav className="space-y-6 pb-20">
              <Link href="/" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>
                About
              </Link>

              {/* PMS Section */}
              <div className="space-y-2">
                <button
                  onClick={() => toggleSection("pms")}
                  className="flex w-full items-center justify-between text-lg font-medium"
                >
                  PMS
                  <ChevronDown
                    className={`h-5 w-5 transform transition-transform ${openSections.pms ? "rotate-180" : ""}`}
                  />
                </button>
                {openSections.pms && (
                  <div className="ml-4 space-y-2">
                    <Link href="/pms/what-is-pms" className="block text-gray-600" onClick={() => setIsOpen(false)}>
                      What is PMS?
                    </Link>
                    <Link href="/pms/do-you-need-pms" className="block text-gray-600" onClick={() => setIsOpen(false)}>
                      Do you need PMS?
                    </Link>
                    <Link
                      href="/pms/who-should-invest"
                      className="block text-gray-600"
                      onClick={() => setIsOpen(false)}
                    >
                      Who Should Invest in PMS?
                    </Link>
                    <Link href="/pms/top-pms-in-india" className="block text-gray-600" onClick={() => setIsOpen(false)}>
                      Top PMS in India
                    </Link>
                    <Link href="/pms/pms-faq" className="block text-gray-600" onClick={() => setIsOpen(false)}>
                      PMS FAQ
                    </Link>
                  </div>
                )}
              </div>

              {/* AIF Section */}
              <div className="space-y-2">
                <button
                  onClick={() => toggleSection("aif")}
                  className="flex w-full items-center justify-between text-lg font-medium"
                >
                  AIF
                  <ChevronDown
                    className={`h-5 w-5 transform transition-transform ${openSections.aif ? "rotate-180" : ""}`}
                  />
                </button>
                {openSections.aif && (
                  <div className="ml-4 space-y-2">
                    <Link href="/aif/what-is-aif" className="block text-gray-600" onClick={() => setIsOpen(false)}>
                      What is AIF?
                    </Link>
                    <Link href="/aif/do-you-need-aif" className="block text-gray-600" onClick={() => setIsOpen(false)}>
                      Do you need AIF?
                    </Link>
                    <Link
                      href="/aif/who-should-invest"
                      className="block text-gray-600"
                      onClick={() => setIsOpen(false)}
                    >
                      Who Should Invest in AIF?
                    </Link>
                    <Link href="/aif/faqs" className="block text-gray-600" onClick={() => setIsOpen(false)}>
                      AIF FAQ
                    </Link>
                    <Link href="/aif/top-cat-1-aifs" className="block text-gray-600" onClick={() => setIsOpen(false)}>
                      Top CAT 1 AIFs in India
                    </Link>
                    <Link href="/aif/top-cat-2-aifs" className="block text-gray-600" onClick={() => setIsOpen(false)}>
                      Top CAT 2 AIFs in India
                    </Link>
                    <Link href="/aif/top-cat-3-aifs" className="block text-gray-600" onClick={() => setIsOpen(false)}>
                      Top CAT 3 AIFs in India
                    </Link>
                    
                  </div>
                )}
              </div>

              <Link href="/nri" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>
                NRI
              </Link>
              <Link href="/our-clients" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>
                Our Clients
              </Link>
              <Link href="/contact" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>
                Contact
              </Link>

              <div className="pt-6 space-y-4">
                <CalendlyButton variant="default" size="lg" className="w-full">
                  Book a Call
                </CalendlyButton>
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
