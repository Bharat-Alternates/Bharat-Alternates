"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card } from "@/components/ui/card"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function PMSTaxTable() {
  const tableRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!tableRef.current) return

    const rows = tableRef.current.querySelectorAll("tr")

    gsap.fromTo(
      rows,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: tableRef.current,
          start: "top bottom-=100",
        },
      },
    )
  }, [])

  return (
    <Card className="w-full bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="p-6">
        <h3 className="text-xl font-bold text-center mb-4">Taxation of PMS in India</h3>

        <div className="overflow-x-auto">
          <table ref={tableRef} className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Tax Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  PMS Tax Rule
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Short-Term Gains</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Taxed @20%</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Long-Term Gains</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Taxed @12% above ₹1.25L exemption</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Dividends</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Taxed as per investor's slab</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  )
}
