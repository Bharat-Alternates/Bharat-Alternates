"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  BarChart2,
  PieChart,
  Users,
  FileText,
  HelpCircle,
  Info,
  Phone,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
  children?: NavItem[]
}

const navItems: NavItem[] = [
  { title: "Home", href: "/", icon: <Home className="h-5 w-5" /> },
  {
    title: "PMS",
    href: "#",
    icon: <BarChart2 className="h-5 w-5" />,
    children: [
      { title: "What is PMS?", href: "/pms/what-is-pms", icon: <ChevronRight className="h-4 w-4" /> },
      { title: "Who should invest?", href: "/pms/who-should-invest", icon: <ChevronRight className="h-4 w-4" /> },
      { title: "Do you need PMS?", href: "/pms/do-you-need-pms", icon: <ChevronRight className="h-4 w-4" /> },
      { title: "Top PMS in India", href: "/pms/top-pms-in-india", icon: <ChevronRight className="h-4 w-4" /> },
      { title: "PMS FAQ", href: "/pms/pms-faq", icon: <ChevronRight className="h-4 w-4" /> },
    ],
  },
  {
    title: "AIF",
    href: "#",
    icon: <PieChart className="h-5 w-5" />,
    children: [
      { title: "What is AIF?", href: "/aif/what-is-aif", icon: <ChevronRight className="h-4 w-4" /> },
      { title: "Do you need AIF?", href: "/aif/do-you-need-aif", icon: <ChevronRight className="h-4 w-4" /> },
    ],
  },
  { title: "Why Choose Us", href: "/why-choose-us", icon: <Users className="h-5 w-5" /> },
  { title: "Our Clients", href: "/our-clients", icon: <Users className="h-5 w-5" /> },
  {
    title: "Resources",
    href: "#",
    icon: <FileText className="h-5 w-5" />,
    children: [
      { title: "Blog", href: "/resources/blog", icon: <ChevronRight className="h-4 w-4" /> },
      { title: "Newsletters", href: "/resources/newsletters", icon: <ChevronRight className="h-4 w-4" /> },
      { title: "Nifty PE Ratio", href: "/resources/nifty-pe-ratio", icon: <ChevronRight className="h-4 w-4" /> },
    ],
  },
  { title: "About", href: "/about", icon: <Info className="h-5 w-5" /> },
  { title: "Contact", href: "/contact", icon: <Phone className="h-5 w-5" /> },
  { title: "FAQ", href: "/faq", icon: <HelpCircle className="h-5 w-5" /> },
]

export default function MainSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const pathname = usePathname()

  // Close sidebar when route changes
  useEffect(() => {
    setSidebarOpen(false)
  }, [pathname])

  const toggleExpand = (title: string) => {
    setExpandedItems((prev) => (prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]))
  }

  const handleLinkClick = () => {
    // Close the sidebar when a link is clicked (especially important for mobile)
    setSidebarOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Button
          variant="outline"
          size="icon"
          aria-label="Toggle Sidebar"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-background shadow-md"
        >
          {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-background border-r transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex h-16 items-center border-b px-4">
          <Link href="/" className="flex items-center space-x-2" onClick={handleLinkClick}>
            <span className="text-xl font-bold">Bharat Alternates</span>
          </Link>
        </div>
        <nav className="flex flex-col p-4 space-y-1 overflow-y-auto h-[calc(100vh-4rem)]">
          {navItems.map((item) => (
            <div key={item.title} className="relative">
              {item.children ? (
                <>
                  <button
                    className={`flex items-center justify-between w-full rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                      pathname.startsWith(item.href) ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                    }`}
                    onClick={() => toggleExpand(item.title)}
                  >
                    <div className="flex items-center space-x-2">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        expandedItems.includes(item.title) ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedItems.includes(item.title) && (
                    <div className="mt-1 ml-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          href={child.href}
                          className={`flex items-center space-x-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground ${
                            pathname === child.href ? "bg-accent/50 text-accent-foreground" : "text-muted-foreground"
                          }`}
                          onClick={handleLinkClick}
                        >
                          {child.icon}
                          <span>{child.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`flex items-center space-x-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                    pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                  }`}
                  onClick={handleLinkClick}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}
