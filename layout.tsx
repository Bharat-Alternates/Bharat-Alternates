import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { MobileMenu } from "@/components/mobile-menu"
import { CalendlyButton } from "@/components/calendly-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bharat Alternates | Leading PMS & AIF Investment Platform in India",
  description:
    "India's most trusted platform for Portfolio Management Services (PMS) and Alternative Investment Funds (AIF). Our vision is to empower investors with data-driven insights, expert analysis, and seamless investment solutions that maximize wealth creation.",
  keywords: [
    "PMS India",
    "AIF Investment",
    "Portfolio Management Services",
    "Alternative Investment Funds",
    "Wealth Management India",
    "HNI Investment",
    "Investment Management",
    "Best PMS in India",
    "Top AIF Funds",
    "Investment Advisory",
    "Bharat Alternates",
    "Financial Services",
  ].join(", "),
  authors: [{ name: "Bharat Alternates" }],
  creator: "Bharat Alternates",
  publisher: "Bharat Alternates",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bharatalternates.com",
    title: "Bharat Alternates | Leading PMS & AIF Investment Platform in India",
    description:
      "India's most trusted platform for Portfolio Management Services (PMS) and Alternative Investment Funds (AIF).",
    siteName: "Bharat Alternates",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharat Alternates | Leading PMS & AIF Investment Platform in India",
    description:
      "India's most trusted platform for Portfolio Management Services (PMS) and Alternative Investment Funds (AIF).",
    creator: "@bharatalternates",
  },
  generator: "v0.dev",
}

// Replace the entire layout component with this new version that uses a header instead of sidebar
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen w-full">
          <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/Bharat.png"
                    alt="Bharat Alternates Logo"
                    width={100}
                    height={100}
                    className="h-8 w-8 sm:h-12 sm:w-12"
                  />
                  <span className="text-xl sm:text-2xl font-bold text-primary ml-2 sm:ml-3">Bharat Alternates</span>
                </Link>
              </div>

              <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                  About
                </Link>
                <div className="relative group">
                  <button className="text-sm font-medium hover:text-primary transition-colors flex items-center">
                    PMS <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                    <Link href="/pms/what-is-pms" className="block px-4 py-2 text-sm hover:bg-blue-50">
                      What is PMS?
                    </Link>
                    <Link href="/pms/do-you-need-pms" className="block px-4 py-2 text-sm hover:bg-blue-50">
                      Do you need PMS?
                    </Link>
                    <Link href="/pms/who-should-invest" className="block px-4 py-2 text-sm hover:bg-blue-50">
                      Who Should Invest in PMS?
                    </Link>
                    <Link href="/pms/top-pms-in-india" className="block px-4 py-2 text-sm hover:bg-blue-50">
                      Top PMSs in India
                    </Link>
                  </div>
                </div>
                <div className="relative group">
                  <button className="text-sm font-medium hover:text-primary transition-colors flex items-center">
                    AIF <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                    <Link href="/aif/what-is-aif" className="block px-4 py-2 text-sm hover:bg-blue-50">
                      What is AIF?
                    </Link>
                    <Link href="/aif/do-you-need-aif" className="block px-4 py-2 text-sm hover:bg-blue-50">
                      Do you need AIF?
                    </Link>
                    <Link href="/aif/who-should-invest" className="block px-4 py-2 text-sm hover:bg-blue-50">
                      Who Should Invest in AIF?
                    </Link>
                  </div>
                </div>
                <div className="relative group">
                  <button className="text-sm font-medium hover:text-primary transition-colors flex items-center">
                    Resources <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                    <Link href="/resources/pms-newsletter" className="block px-4 py-2 text-sm hover:bg-blue-50">
                      PMS Newsletter
                    </Link>
                    <Link href="/resources/aif-newsletter" className="block px-4 py-2 text-sm hover:bg-blue-50">
                      AIF Newsletter
                    </Link>
                    <Link href="/resources/blog" className="block px-4 py-2 text-sm hover:bg-blue-50">
                      Blog
                    </Link>
                    <Link href="/resources/nifty-pe-ratio" className="block px-4 py-2 text-sm hover:bg-blue-50">
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

              <div className="flex items-center gap-4">
                <CalendlyButton variant="default" className="hidden md:inline-flex">
                  Book a Call
                </CalendlyButton>
                <MobileMenu />
              </div>
            </div>
          </header>
          <main className="flex-1 w-full">{children}</main>
          <Footer />

          {/* WhatsApp Floating Button */}
          <div className="fixed bottom-20 left-4 md:bottom-8 md:left-8" style={{ zIndex: 999999, position: 'fixed', maxWidth: '100vw', pointerEvents: 'auto' }}>
            <a
              href="https://wa.me/918527512552"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:bg-[#20ba59] hover:scale-110 relative"
              style={{ isolation: 'isolate', transform: 'translateX(0)' }}
              aria-label="Chat on WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 md:h-8 md:w-8">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="absolute -top-2 -right-2 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-red-500 text-[8px] md:text-[10px] font-bold shadow-lg">
                1
              </span>
            </a>
          </div>
        </div>
        <Toaster />

        {/* GSAP Scripts */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" strategy="beforeInteractive" />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  )
}
