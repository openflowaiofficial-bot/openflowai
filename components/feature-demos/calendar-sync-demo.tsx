"use client"

import { useEffect, useState } from "react"

export function CalendarSyncDemo() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-[400px] bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 overflow-hidden">
      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        <div className="text-xs font-medium text-gray-500 text-center">Sun</div>
        <div className="text-xs font-medium text-gray-500 text-center">Mon</div>
        <div className="text-xs font-medium text-gray-500 text-center">Tue</div>
        <div className="text-xs font-medium text-gray-500 text-center">Wed</div>
        <div className="text-xs font-medium text-gray-500 text-center">Thu</div>
        <div className="text-xs font-medium text-gray-500 text-center">Fri</div>
        <div className="text-xs font-medium text-gray-500 text-center">Sat</div>

        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className={`aspect-square rounded-lg flex items-center justify-center text-sm ${
              i === 15 && step >= 1
                ? "bg-purple-600 text-white animate-pulse"
                : i === 15
                  ? "bg-purple-200 text-purple-700"
                  : "bg-white text-gray-700"
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>

      {/* Sync Status */}
      <div className="mt-6 space-y-3">
        <div
          className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
            step >= 0 ? "bg-white shadow-md" : "bg-gray-100"
          }`}
        >
          <div className={`w-2 h-2 rounded-full ${step >= 1 ? "bg-green-500" : "bg-gray-300"}`} />
          <span className="text-sm font-medium">Google Calendar</span>
          {step >= 1 && <span className="ml-auto text-xs text-green-600">Synced</span>}
        </div>
        <div
          className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
            step >= 2 ? "bg-white shadow-md" : "bg-gray-100"
          }`}
        >
          <div className={`w-2 h-2 rounded-full ${step >= 2 ? "bg-green-500" : "bg-gray-300"}`} />
          <span className="text-sm font-medium">Outlook Calendar</span>
          {step >= 2 && <span className="ml-auto text-xs text-green-600">Synced</span>}
        </div>
        <div
          className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
            step >= 3 ? "bg-white shadow-md" : "bg-gray-100"
          }`}
        >
          <div className={`w-2 h-2 rounded-full ${step >= 3 ? "bg-green-500" : "bg-gray-300"}`} />
          <span className="text-sm font-medium">Apple Calendar</span>
          {step >= 3 && <span className="ml-auto text-xs text-green-600">Synced</span>}
        </div>
      </div>

      {/* Real-time indicator */}
      {step >= 1 && (
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-medium animate-fade-in">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Real-time sync active
        </div>
      )}
    </div>
  )
}
