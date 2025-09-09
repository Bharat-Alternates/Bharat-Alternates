"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      const footer = footerRef.current
      if (!footer) return

      // Animate footer elements when they come into view
      gsap.from(footer.querySelectorAll(".footer-column"), {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footer,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
      })
    }
  }, [])

  return (
    <footer ref={footerRef} className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="footer-column space-y-4">
            <Link href="/" className="flex items-center">
              <span className="text-xl sm:text-2xl font-bold">
                <span className="text-primary">Bharat </span>
                <span style={{ color: '#020b1c' }}> Alternates</span>
              </span>
            </Link>
            <div className="space-y-3">
              <p className="text-gray-600 font-medium text-base leading-relaxed">
                Your trusted partner in Portfolio Management Services and Alternative Investment Funds.
              </p>
              <p className="text-sm text-gray-500">
                Empowering investors with data-driven insights and expert analysis for maximum wealth creation.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/our-clients" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Our Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* PMS Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">PMS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pms/what-is-pms" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  What is PMS?
                </Link>
              </li>
              <li>
                <Link
                  href="/pms/do-you-need-pms"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Do you need PMS?
                </Link>
              </li>
              <li>
                <Link
                  href="/pms/who-should-invest"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Who Should Invest?
                </Link>
              </li>
              <li>
                <Link
                  href="/pms/top-pms-in-india"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Top PMSs in India
                </Link>
              </li>
            </ul>
          </div>

          {/* AIF Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">AIF</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/aif/what-is-aif" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  What is AIF?
                </Link>
              </li>
              <li>
                <Link
                  href="/aif/do-you-need-aif"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Do you need AIF?
                </Link>
              </li>
              <li>
                <Link
                  href="/aif/who-should-invest"
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  Who Should Invest?
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Risk Disclaimer */}
        <div className="mt-8 pt-8 border-t">
          <div className="text-sm text-gray-600 mb-8">
            <h4 className="font-semibold mb-2">RISK DISCLAIMER:</h4>
            <p className="leading-relaxed">
              Investments in Bharat Alternates are subject to market-related risks. The content provided on this platform is for general informational purposes only and should not be construed as a recommendation or investment advice. Investors must perform their own analysis and make decisions based on their risk appetite. Only those investors with a suitable aptitude and attitude towards risk should consider investment options in Alternates (PMS & AIFs).
            </p>
            <p className="leading-relaxed mt-2">
              Past performance may or may not be indicative of future results and should not be used for comparison with other investments. We strongly recommend reading the disclosure documents thoroughly before making any investment decisions. PMS & AIF products are market-linked and do not offer any guaranteed or assured returns. These are higher-risk investments and come with the possibility of losing the principal amount. As such, investors must make informed and prudent decisions.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Bharat Alternates. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
