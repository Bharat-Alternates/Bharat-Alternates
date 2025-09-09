"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Toggle dropdown menu
  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null)
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative flex items-center">
              <div className="mr-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
                <span className="text-xl font-bold text-white">BA</span>
              </div>
              <div className={`text-xl font-bold ${isScrolled ? "text-blue-900" : "text-white"}`}>
                Bharat Alternates
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            <NavLink href="/" label="Home" isScrolled={isScrolled} />
            <NavLink href="/about" label="About" isScrolled={isScrolled} />

            {/* PMS Dropdown */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                className={`group flex items-center space-x-1 px-1 py-2 font-medium transition-colors ${
                  isScrolled ? "text-gray-800 hover:text-blue-700" : "text-white/90 hover:text-white"
                }`}
                onClick={() => toggleDropdown("pms")}
              >
                <span>PMS</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${activeDropdown === "pms" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "pms" && (
                <div className="absolute left-0 mt-2 w-64 rounded-md bg-white py-2 shadow-xl">
                  <DropdownLink href="/pms/what-is-pms" label="What is PMS?" />
                  <DropdownLink href="/pms/do-you-need-pms" label="Do You Need PMS?" />
                  <DropdownLink href="/pms/who-should-invest" label="Who Should Invest?" />
                  <DropdownLink href="/pms/top-pms-in-india" label="Top PMS in India" />
                </div>
              )}
            </div>

            {/* AIF Dropdown */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                className={`group flex items-center space-x-1 px-1 py-2 font-medium transition-colors ${
                  isScrolled ? "text-gray-800 hover:text-blue-700" : "text-white/90 hover:text-white"
                }`}
                onClick={() => toggleDropdown("aif")}
              >
                <span>AIF</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${activeDropdown === "aif" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "aif" && (
                <div className="absolute left-0 mt-2 w-64 rounded-md bg-white py-2 shadow-xl">
                  <DropdownLink href="/aif/what-is-aif" label="What is AIF?" />
                  <DropdownLink href="/aif/do-you-need-aif" label="Do You Need AIF?" />
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                className={`group flex items-center space-x-1 px-1 py-2 font-medium transition-colors ${
                  isScrolled ? "text-gray-800 hover:text-blue-700" : "text-white/90 hover:text-white"
                }`}
                onClick={() => toggleDropdown("resources")}
              >
                <span>Resources</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${activeDropdown === "resources" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "resources" && (
                <div className="absolute left-0 mt-2 w-64 rounded-md bg-white py-2 shadow-xl">
                  <DropdownLink href="/resources/nifty-pe-ratio" label="Nifty PE Ratio" />
                </div>
              )}
            </div>

            <NavLink href="/our-clients" label="Our Clients" isScrolled={isScrolled} />
            <NavLink href="/contact" label="Contact Us" isScrolled={isScrolled} />
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <AnimatedButton href="/contact" variant={isScrolled ? "primary" : "secondary"} size="default">
              Book a Call
            </AnimatedButton>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden rounded-md p-2 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="container mx-auto px-4 pb-6">
            <nav className="flex flex-col space-y-4">
              <MobileNavLink href="/" label="Home" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="/about" label="About" onClick={() => setIsMenuOpen(false)} />

              {/* Mobile PMS Dropdown */}
              <div className="border-b border-gray-200 pb-2">
                <button
                  className="flex w-full items-center justify-between py-2 font-medium text-gray-800"
                  onClick={() => toggleDropdown("mobile-pms")}
                >
                  <span>PMS</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${activeDropdown === "mobile-pms" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "mobile-pms" && (
                  <div className="mt-2 ml-4 flex flex-col space-y-2">
                    <MobileDropdownLink
                      href="/pms/what-is-pms"
                      label="What is PMS?"
                      onClick={() => setIsMenuOpen(false)}
                    />
                    <MobileDropdownLink
                      href="/pms/do-you-need-pms"
                      label="Do You Need PMS?"
                      onClick={() => setIsMenuOpen(false)}
                    />
                    <MobileDropdownLink
                      href="/pms/who-should-invest"
                      label="Who Should Invest?"
                      onClick={() => setIsMenuOpen(false)}
                    />
                    <MobileDropdownLink
                      href="/pms/top-pms-in-india"
                      label="Top PMS in India"
                      onClick={() => setIsMenuOpen(false)}
                    />
                  </div>
                )}
              </div>

              {/* Mobile AIF Dropdown */}
              <div className="border-b border-gray-200 pb-2">
                <button
                  className="flex w-full items-center justify-between py-2 font-medium text-gray-800"
                  onClick={() => toggleDropdown("mobile-aif")}
                >
                  <span>AIF</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${activeDropdown === "mobile-aif" ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === "mobile-aif" && (
                  <div className="mt-2 ml-4 flex flex-col space-y-2">
                    <MobileDropdownLink
                      href="/aif/what-is-aif"
                      label="What is AIF?"
                      onClick={() => setIsMenuOpen(false)}
                    />
                    <MobileDropdownLink
                      href="/aif/do-you-need-aif"
                      label="Do You Need AIF?"
                      onClick={() => setIsMenuOpen(false)}
                    />
                  </div>
                )}
              </div>

              {/* Mobile Resources Dropdown */}
              <div className="border-b border-gray-200 pb-2">
                <button
                  className="flex w-full items-center justify-between py-2 font-medium text-gray-800"
                  onClick={() => toggleDropdown("mobile-resources")}
                >
                  <span>Resources</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      activeDropdown === "mobile-resources" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {activeDropdown === "mobile-resources" && (
                  <div className="mt-2 ml-4 flex flex-col space-y-2">
                    <MobileDropdownLink
                      href="/resources/nifty-pe-ratio"
                      label="Nifty PE Ratio"
                      onClick={() => setIsMenuOpen(false)}
                    />
                  </div>
                )}
              </div>

              <MobileNavLink href="/our-clients" label="Our Clients" onClick={() => setIsMenuOpen(false)} />
              <MobileNavLink href="/contact" label="Contact Us" onClick={() => setIsMenuOpen(false)} />

              <div className="pt-4">
                <AnimatedButton href="/contact" variant="primary" size="lg" className="w-full">
                  Book a Call
                </AnimatedButton>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

// Desktop Navigation Link
function NavLink({ href, label, isScrolled }: { href: string; label: string; isScrolled: boolean }) {
  return (
    <Link
      href={href}
      className={`px-1 py-2 font-medium transition-colors ${
        isScrolled ? "text-gray-800 hover:text-blue-700" : "text-white/90 hover:text-white"
      }`}
    >
      {label}
    </Link>
  )
}

// Desktop Dropdown Link
function DropdownLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-700">
      {label}
    </Link>
  )
}

// Mobile Navigation Link
function MobileNavLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link href={href} className="border-b border-gray-200 py-2 font-medium text-gray-800" onClick={onClick}>
      {label}
    </Link>
  )
}

// Mobile Dropdown Link
function MobileDropdownLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link href={href} className="py-1 text-sm text-gray-700 hover:text-blue-700" onClick={onClick}>
      {label}
    </Link>
  )
}
