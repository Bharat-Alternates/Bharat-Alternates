"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Why Choose Us",
    href: "/why-choose-us",
  },
  {
    name: "Guidance & Selection",
    href: "/guidance-selection-process",
  },
  {
    name: "PMS",
    href: "#",
    dropdown: [
      { name: "What is PMS?", href: "/pms/what-is-pms" },
      { name: "Do you need PMS?", href: "/pms/do-you-need-pms" },
      { name: "Who Should Invest in PMS?", href: "/pms/who-should-invest" },
      { name: "Top PMSs in India", href: "/pms/top-pms-in-india" },
      { name: "Top Debt PMSs in India", href: "/pms/top-debt-pms-in-india" },
      { name: "PMS FAQs", href: "/pms/faqs" },
    ],
  },
  {
    name: "AIF",
    href: "#",
    dropdown: [
      { name: "What is AIF?", href: "/aif/what-is-aif" },
      { name: "Do you need AIF?", href: "/aif/do-you-need-aif" },
      { name: "Who should invest in AIF?", href: "/aif/who-should-invest" },
      { name: "Top CAT 1 AIFs in India", href: "/aif/top-cat-1-aifs" },
      { name: "Top CAT 2 AIFs in India", href: "/aif/top-cat-2-aifs" },
      { name: "Top CAT 3 AIFs in India", href: "/aif/top-cat-3-aifs" },
      { name: "What are Gift City Funds for NRIs?", href: "/aif/gift-city-funds" },
      { name: "Top Gift City Funds for NRIs", href: "/aif/top-gift-city-funds" },
      { name: "AIF FAQs", href: "/aif/faqs" },
    ],
  },
  {
    name: "Resources",
    href: "#",
    dropdown: [
      { name: "PMS Newsletter", href: "/resources/pms-newsletter" },
      { name: "AIF Newsletter", href: "/resources/aif-newsletter" },
      { name: "Blog", href: "/resources/blog" },
      { name: "Nifty PE Ratio Chart", href: "/resources/nifty-pe-ratio" },
    ],
  },
  {
    name: "Our Clients",
    href: "/our-clients",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">PMS Expert</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-4">
          {navItems.map((item) => {
            if (item.dropdown) {
              return (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-1">
                      {item.name} <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    {item.dropdown.map((dropdownItem) => (
                      <DropdownMenuItem key={dropdownItem.name} asChild>
                        <Link href={dropdownItem.href}>{dropdownItem.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <Button asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <Button variant="ghost" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="container-custom lg:hidden">
          <div className="flex flex-col space-y-4 pb-4">
            {navItems.map((item) => {
              if (item.dropdown) {
                return (
                  <div key={item.name} className="space-y-2">
                    <div className="font-medium">{item.name}</div>
                    <div className="ml-4 flex flex-col space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="text-sm text-muted-foreground hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href ? "text-primary" : "text-muted-foreground",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
            <Button asChild className="mt-2 w-full">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
