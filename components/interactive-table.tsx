"use client"

import React from "react"

import { useState, useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronDown, ChevronUp, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Column {
  header: string
  accessor: string
}

interface InteractiveTableProps {
  data: Record<string, string>[]
  columns: Column[]
}

export function InteractiveTable({ data, columns }: InteractiveTableProps) {
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: "ascending" | "descending" } | null>(null)
  const [filteredData, setFilteredData] = useState(data)
  const [searchTerm, setSearchTerm] = useState("")
  const tableRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      const table = tableRef.current
      if (!table) return

      // Animate table
      gsap.fromTo(
        table,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: table,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse", // Play when scrolling down, reverse when scrolling up
          },
        },
      )

      // Animate rows
      gsap.fromTo(
        table.querySelectorAll("tbody tr"),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: table,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse", // Play when scrolling down, reverse when scrolling up
          },
        },
      )

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }
  }, [])

  // Sort function
  const requestSort = (key: string) => {
    let direction: "ascending" | "descending" = "ascending"

    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending"
    }

    setSortConfig({ key, direction })
  }

  // Filter function
  useEffect(() => {
    const filtered = data.filter((item) =>
      Object.values(item).some((val) => val.toLowerCase().includes(searchTerm.toLowerCase())),
    )

    setFilteredData(filtered)
  }, [searchTerm, data])

  // Apply sorting
  const sortedData = React.useMemo(() => {
    const sortableItems = [...filteredData]
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1
        }
        return 0
      })
    }
    return sortableItems
  }, [filteredData, sortConfig])

  return (
    <div ref={tableRef} className="w-full">
      <div className="mb-4">
        <Input
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm border-blue-200 focus-visible:ring-blue-400"
        />
      </div>

      <div className="overflow-hidden rounded-lg border shadow-md transition-all duration-300 hover:shadow-lg">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-50">
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.accessor}
                    className="whitespace-nowrap px-4 py-3 text-left text-sm font-medium text-blue-800"
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="-ml-3 h-8 hover:bg-blue-100 text-blue-700"
                      onClick={() => requestSort(column.accessor)}
                    >
                      {column.header}
                      {sortConfig?.key === column.accessor ? (
                        sortConfig.direction === "ascending" ? (
                          <ChevronUp className="ml-1 h-4 w-4 text-blue-600" />
                        ) : (
                          <ChevronDown className="ml-1 h-4 w-4 text-blue-600" />
                        )
                      ) : (
                        <ArrowUpDown className="ml-1 h-4 w-4 opacity-50 text-blue-600" />
                      )}
                    </Button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y">
              {sortedData.map((row, rowIndex) => (
                <tr key={rowIndex} className="bg-white transition-colors hover:bg-blue-50">
                  {columns.map((column) => (
                    <td key={column.accessor} className="whitespace-nowrap px-4 py-3 text-sm text-gray-800">
                      {row[column.accessor]}
                    </td>
                  ))}
                </tr>
              ))}
              {sortedData.length === 0 && (
                <tr>
                  <td colSpan={columns.length} className="px-4 py-6 text-center text-sm text-gray-500">
                    No results found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
