"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, useSidebar } from "@/components/ui/sidebar"

// Navigation items
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
      { name: "Who should invest in AIF?", href: "/aif/who-should-invest" },
      { name: "AIF FAQ", href: "/aif/faqs" },
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

export function MainSidebar() {
  const pathname = usePathname()
  const sidebarRef = useRef<HTMLDivElement>(null)
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({})
  const { state, toggleSidebar } = useSidebar()

  useEffect(() => {
    // Initialize open dropdowns based on current path
    const newOpenState: Record<string, boolean> = {}
    navItems.forEach((item) => {
      if (item.dropdown) {
        const isActive = item.dropdown.some((subItem) => pathname === subItem.href)
        if (isActive) {
          newOpenState[item.name] = true
        }
      }
    })
    setOpenDropdowns(newOpenState)
  }, [pathname])

  const toggleDropdown = (name: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  return (
    <Sidebar
      collapsible="offcanvas"
      className="border-r border-gray-200 bg-white shadow-md fixed h-screen z-[100] transition-all duration-500"
    >
      <SidebarHeader className="border-b py-6">
        <div className="flex items-center justify-between px-4">
          {/* Close button for sidebar */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="absolute right-4 top-4 transition-all duration-300 hover:bg-blue-50"
          >
            <X className="h-6 w-6 text-blue-600" />
            <span className="sr-only">Close Sidebar</span>
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-4 py-6 overflow-y-auto h-[calc(100vh-140px)]" ref={sidebarRef}>
        <nav>
          <ul className="space-y-4">
            {navItems.map((item, index) => (
              <li key={item.name} className="sidebar-item">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-md py-2 px-3 text-left font-medium transition-colors",
                        openDropdowns[item.name] ? "bg-blue-50 text-blue-600" : "hover:bg-blue-50 hover:text-blue-600",
                      )}
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${openDropdowns[item.name] ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={cn(
                        "mt-1 overflow-hidden transition-all duration-500",
                        openDropdowns[item.name] ? "max-h-96" : "max-h-0",
                      )}
                    >
                      <ul className="ml-4 space-y-1 border-l border-gray-200 pl-4">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.href}>
                            <Link
                              href={subItem.href}
                              className={cn(
                                "flex items-center rounded-md py-1.5 px-3 text-sm transition-all duration-300 hover:bg-blue-50 hover:text-blue-600",
                                pathname === subItem.href ? "bg-blue-50 font-medium text-blue-600" : "text-gray-600",
                              )}
                              onClick={toggleSidebar} // Close sidebar when clicking a link
                            >
                              <ChevronRight className="mr-1 h-3 w-3 transition-transform duration-300" />
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-md py-2 px-3 font-medium transition-all duration-300 hover:bg-blue-50 hover:text-blue-600",
                      pathname === item.href ? "bg-blue-50 text-blue-600" : "text-gray-900",
                    )}
                    onClick={toggleSidebar} // Close sidebar when clicking a link
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300">
          <Link href="/contact" onClick={toggleSidebar}>
            Get Started
          </Link>
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}
