"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, ChevronRight, Home, BarChart3, FileText, Users, HelpCircle, Mail, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "About",
    href: "/about",
    icon: Users,
  },
  {
    name: "Why Choose Us",
    href: "/why-choose-us",
    icon: HelpCircle,
  },
  {
    name: "Guidance & Selection",
    href: "/guidance-selection-process",
    icon: FileText,
  },
  {
    name: "PMS",
    icon: BarChart3,
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
    icon: BarChart3,
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
    name: "Our Clients",
    href: "/our-clients",
    icon: Users,
  },
  {
    name: "Contact Us",
    href: "/contact",
    icon: Mail,
  },
]

export function SidebarNavigation() {
  const pathname = usePathname()
  const [openCollapsibles, setOpenCollapsibles] = useState<Record<string, boolean>>({})

  // Initialize open state for dropdown items based on current path
  useEffect(() => {
    const newOpenState: Record<string, boolean> = {}

    navItems.forEach((item) => {
      if (item.dropdown) {
        const isActive = item.dropdown.some((subItem) => pathname.startsWith(subItem.href))
        if (isActive) {
          newOpenState[item.name] = true
        }
      }
    })

    setOpenCollapsibles((prev) => ({ ...prev, ...newOpenState }))
  }, [pathname])

  const toggleCollapsible = (name: string) => {
    setOpenCollapsibles((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  return (
    <Sidebar>
      <SidebarHeader className="border-b py-4">
        <div className="flex items-center justify-center px-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">PMS Expert</span>
          </Link>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-2 py-4">
        <SidebarMenu>
          {navItems.map((item) => {
            if (item.dropdown) {
              return (
                <Collapsible
                  key={item.name}
                  open={openCollapsibles[item.name]}
                  onOpenChange={() => toggleCollapsible(item.name)}
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        {item.icon && <item.icon className="h-4 w-4" />}
                        <span>{item.name}</span>
                        <ChevronDown className="ml-auto h-4 w-4 transition-transform duration-200 ease-in-out group-data-[state=open]:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                  </SidebarMenuItem>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.dropdown.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.href}>
                          <SidebarMenuSubButton asChild isActive={pathname === subItem.href}>
                            <Link href={subItem.href}>
                              <ChevronRight className="h-3 w-3" />
                              <span>{subItem.name}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              )
            }

            return (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild isActive={pathname === item.href}>
                  <Link href={item.href || "#"}>
                    {item.icon && <item.icon className="h-4 w-4" />}
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <Button asChild className="w-full">
          <Link href="/contact">Get Started</Link>
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}

export function MobileMenuTrigger() {
  const { toggleSidebar } = useSidebar()

  return (
    <Button variant="ghost" size="icon" onClick={toggleSidebar} className="lg:hidden">
      <Menu className="h-6 w-6" />
      <span className="sr-only">Toggle Menu</span>
    </Button>
  )
}
