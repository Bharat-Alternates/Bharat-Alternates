"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavItem {
  title: string
  href: string
  children?: NavItem[]
}

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  {
    title: "PMS",
    href: "#",
    children: [
      { title: "What is PMS?", href: "/pms/what-is-pms" },
      { title: "Who Should Invest in PMS?", href: "/pms/who-should-invest" },
      { title: "Top PMSs in India", href: "/pms/top-pms-in-india" },
      { title: "PMS FAQ", href: "/pms/pms-faq" },
    ],
  },
  {
    title: "AIF",
    href: "#",
    children: [
      { title: "What is AIF?", href: "/aif/what-is-aif" },
      { title: "Do you need AIF?", href: "/aif/do-you-need-aif" },
    ],
  },
  {
    title: "NRI",
    href: "#",
    children: [
      { title: "PMS for NRI", href: "/nri/pms-for-nri" },
      { title: "Gift City AIF", href: "/nri/gift-city-aif" },
    ],
  },
  {
    title: "Library",
    href: "#",
    children: [
      { title: "Blog", href: "/resources/blog" },
      { title: "Newsletters", href: "/resources/newsletters" },
      { title: "Nifty PE Ratio", href: "/resources/nifty-pe-ratio" },
    ],
  },
  {
    title: "More",
    href: "#",
    children: [
      { title: "Mutual Funds", href: "/others/mutual-funds" },
      { title: "Unlisted Shares", href: "/others/unlisted-shares" },
    ],
  },
  { title: "About", href: "/about" },
  { title: "Contact Us", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const handleDropdownEnter = (title: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
      dropdownTimeoutRef.current = null
    }
    setActiveDropdown(title)
  }

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 800)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-none px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 min-w-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-lg lg:text-xl font-bold whitespace-nowrap">
                <span className="text-blue-600">Bharat</span> <span className="text-gray-900">Alternates</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-4 min-w-0">
            <div className="flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => item.children && handleDropdownEnter(item.title)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {item.children ? (
                    <>
                      <button
                        className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-blue-600 whitespace-nowrap py-2 ${
                          pathname.startsWith(item.href.replace("#", "")) ? "text-blue-600" : "text-gray-700"
                        }`}
                        onClick={(e) => {
                          e.preventDefault()
                          setActiveDropdown(activeDropdown === item.title ? null : item.title)
                        }}
                      >
                        <span>{item.title}</span>
                        <ChevronDown className="h-3 w-3 flex-shrink-0" />
                      </button>
                      {activeDropdown === item.title && (
                        <div className="absolute left-0 top-full mt-1 w-56 rounded-md border bg-white shadow-lg z-50">
                          <div className="p-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.title}
                                href={child.href}
                                className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 whitespace-nowrap"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {child.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-sm font-medium transition-colors hover:text-blue-600 whitespace-nowrap py-2 ${
                        pathname === item.href ? "text-blue-600" : "text-gray-700"
                      }`}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Book a Call Button - Desktop */}
          <div className="hidden lg:flex flex-shrink-0">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium whitespace-nowrap text-sm"
            >
              <Link href="/contact">Book a Call</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex-shrink-0">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="px-4">
            <nav className="flex flex-col space-y-4 py-4">
              {navItems.map((item) => (
                <div key={item.title} className="relative">
                  {item.children ? (
                    <>
                      <button
                        className={`flex items-center justify-between w-full text-sm font-medium transition-colors hover:text-blue-600 ${
                          pathname.startsWith(item.href.replace("#", "")) ? "text-blue-600" : "text-gray-700"
                        }`}
                        onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                      >
                        <span>{item.title}</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      {activeDropdown === item.title && (
                        <div className="mt-2 ml-4 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.title}
                              href={child.href}
                              className="block py-1 text-sm text-gray-600 hover:text-blue-600"
                              onClick={() => {
                                setActiveDropdown(null)
                                setMobileMenuOpen(false)
                              }}
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                        pathname === item.href ? "text-blue-600" : "text-gray-700"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              {/* Mobile Book a Call Button */}
              <div className="pt-4 border-t">
                <Button
                  asChild
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href="/contact">Book a Call</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
