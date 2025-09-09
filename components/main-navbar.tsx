"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { MobileMenu } from "./mobile-menu"

export function MainNavbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex w-full items-center justify-between md:justify-start">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Bharat Alternates</span>
          </Link>
          <div className="hidden md:flex md:flex-1">
            <NavigationMenu className="max-w-none w-full justify-start">
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>PMS</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-rose-500 to-indigo-700 p-6 no-underline outline-none focus:shadow-md"
                            href="/pms/what-is-pms"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium text-white">Portfolio Management Services</div>
                            <p className="text-sm leading-tight text-white/90">
                              Discover how professional portfolio managers can help you achieve your financial goals with
                              customized investment strategies.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/pms/what-is-pms"
                          >
                            <div className="text-sm font-medium leading-none">What is PMS?</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Learn about Portfolio Management Services and how they work.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/pms/who-should-invest"
                          >
                            <div className="text-sm font-medium leading-none">Who Should Invest in PMS?</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Find out if PMS is the right investment option for you.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/pms/top-pms-in-india"
                          >
                            <div className="text-sm font-medium leading-none">Top PMS in India</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Explore the best performing PMS providers in India.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/pms/pms-faq"
                          >
                            <div className="text-sm font-medium leading-none">PMS FAQ</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Get answers to frequently asked questions about PMS.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/resources/blog" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>NRI</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-indigo-700 p-6 no-underline outline-none focus:shadow-md"
                            href="/nri/investment-guide"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium text-white">NRI Investment Services</div>
                            <p className="text-sm leading-tight text-white/90">
                              Comprehensive investment solutions for Non-Resident Indians looking to invest in India's growing market opportunities.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/nri/pms-for-nri"
                          >
                            <div className="text-sm font-medium leading-none">PMS for NRI</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Learn about PMS investment options for Non-Resident Indians.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/nri/gift-city-aif"
                          >
                            <div className="text-sm font-medium leading-none">Gift City AIF</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Explore Alternative Investment Fund options in Gift City.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>More</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/others/mutual-funds"
                          >
                            <div className="text-sm font-medium leading-none">Mutual Funds</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Explore mutual fund investment options and strategies.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/others/unlisted-investments"
                          >
                            <div className="text-sm font-medium leading-none">Unlisted Investments</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Discover opportunities in unlisted securities and private investments.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
