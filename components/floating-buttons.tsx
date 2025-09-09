"use client"

import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingButtons() {
  return (
    <div className="fixed right-6 bottom-6 flex flex-col gap-4 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+919167729245"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:-translate-y-1"
      >
        <Button size="icon" className="h-12 w-12 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg">
          <MessageCircle className="h-6 w-6" />
        </Button>
      </a>

      {/* Phone Button */}
      <a href="tel:+919167729245" className="transition-transform hover:-translate-y-1">
        <Button size="icon" className="h-12 w-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg">
          <Phone className="h-6 w-6" />
        </Button>
      </a>
    </div>
  )
}
