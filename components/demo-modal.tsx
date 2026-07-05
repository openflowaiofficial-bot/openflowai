"use client"

import { useEffect } from "react"
import { X } from "lucide-react"

interface DemoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm">
      <div className="h-full w-full overflow-y-auto py-8 px-4">
        <div className="min-h-full flex items-center justify-center">
          <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 text-gray-400 hover:text-gray-600 transition-colors bg-white rounded-full p-1.5 shadow-lg"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="border-b border-gray-200 px-8 py-6 bg-gradient-to-br from-blue-50 to-cyan-50">
              <h2 className="text-2xl font-semibold text-gray-900">Schedule Your Demo</h2>
              <p className="mt-2 text-sm text-gray-600">
                Choose a time that works best for you to see OpenFlow AI in action.
              </p>
            </div>

            <div className="p-6 bg-gray-50">
              <iframe
                src="https://cal.com/openflowai-meeting/30min?embed=true&theme=light"
                width="100%"
                height="750"
                frameBorder="0"
                className="rounded-lg bg-white"
                title="Schedule a demo with OpenFlow AI"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
