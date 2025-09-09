import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetTitle className="text-lg font-semibold mb-4">Menu</SheetTitle>
        <nav className="flex flex-col gap-4">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          
          {/* PMS Dropdown */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">PMS</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="pl-4 flex flex-col gap-2">
              <Link href="/pms/what-is-pms" className="text-sm hover:text-primary transition-colors">
                What is PMS?
              </Link>
              <Link href="/pms/do-you-need-pms" className="text-sm hover:text-primary transition-colors">
                Do you need PMS?
              </Link>
              <Link href="/pms/who-should-invest" className="text-sm hover:text-primary transition-colors">
                Who Should Invest in PMS?
              </Link>
              <Link href="/pms/top-pms-in-india" className="text-sm hover:text-primary transition-colors">
                Top PMSs in India
              </Link>
            </div>
          </div>

          {/* AIF Dropdown */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">AIF</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="pl-4 flex flex-col gap-2">
              <Link href="/aif/what-is-aif" className="text-sm hover:text-primary transition-colors">
                What is AIF?
              </Link>
              <Link href="/aif/do-you-need-aif" className="text-sm hover:text-primary transition-colors">
                Do you need AIF?
              </Link>
              <Link href="/aif/who-should-invest" className="text-sm hover:text-primary transition-colors">
                Who Should Invest in AIF?
              </Link>
            </div>
          </div>

          {/* Resources Dropdown */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Resources</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="pl-4 flex flex-col gap-2">
              <Link href="/resources/pms-newsletter" className="text-sm hover:text-primary transition-colors">
                PMS Newsletter
              </Link>
              <Link href="/resources/aif-newsletter" className="text-sm hover:text-primary transition-colors">
                AIF Newsletter
              </Link>
              <Link href="/resources/blog" className="text-sm hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/resources/nifty-pe-ratio" className="text-sm hover:text-primary transition-colors">
                Nifty PE Ratio Chart
              </Link>
            </div>
          </div>

          <Link href="/our-clients" className="text-sm font-medium hover:text-primary transition-colors">
            Our Clients
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact Us
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
