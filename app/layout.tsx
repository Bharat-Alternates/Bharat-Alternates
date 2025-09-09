import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import Script from "next/script"
import Link from "next/link"
import { ImprovedDropdown } from "@/components/improved-dropdown"
import { MobileMenu } from "@/components/mobile-menu"
import { ContactFloat } from "@/components/contact-float"
import { PageLoader } from "@/components/page-loader"
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
      <body className={`${inter.className} antialiased`}>
        <PageLoader />
        <div className="flex flex-col min-h-screen w-full">
          <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <span className="text-xl sm:text-2xl font-bold">
                    <span className="text-primary">Bharat </span>
                    <span style={{ color: "#020b1c" }}> Alternates</span>
                  </span>
                </Link>
              </div>

              <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
                <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                  About
                </Link>

                <ImprovedDropdown
                  title="PMS"
                  items={[
                    { name: "What is PMS?", href: "/pms/what-is-pms" },
                    { name: "Who Should Invest in PMS?", href: "/pms/who-should-invest" },
                    { name: "Top PMSs in India", href: "/pms/top-pms-in-india" },
                    { name: "PMS FAQ", href: "/pms/pms-faq" },
                  ]}
                />

                <ImprovedDropdown
                  title="AIF"
                  items={[
                    { name: "What is AIF?", href: "/aif/what-is-aif" },
                    { name: "Who Should Invest in AIF?", href: "/aif/who-should-invest" },
                    { name: "Top AIF in India", href: "/aif/top-aif-in-india" },
                    { name: "AIF FAQ", href: "/aif/faqs" },
                  ]}
                />

                <ImprovedDropdown
                  title="NRI"
                  items={[
                    { name: "PMS for NRI", href: "/nri/pms-for-nri" },
                    { name: "Gift City AIF", href: "/nri/gift-city-aif" },
                    
                  ]}
                />

                <ImprovedDropdown title="Library" items={[{ name: "Video Library", href: "/library" }]} />
                
                <ImprovedDropdown
                  title="More"
                  items={[
                    { name: "Mutual Funds", href: "/others/mutual-funds" },
                    { name: "Unlisted Investments", href: "/others/unlisted-investments" },
                  ]}
                />

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
          <ContactFloat />
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

import "./globals.css"
