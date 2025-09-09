"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

interface DropdownProps {
  title: string
  items: {
    name: string
    href: string
  }[]
}

export function ImprovedDropdown({ title, items }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 200) // Small delay to make the interaction smoother
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="relative" ref={dropdownRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        className={`text-sm font-medium transition-colors flex items-center ${
          isOpen ? "text-primary" : "hover:text-primary"
        }`}
      >
        {title} <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg py-2 z-10 transition-all duration-200 ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
        }`}
      >
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="block px-5 py-3 text-sm hover:bg-blue-50 transition-colors">
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
