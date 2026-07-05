"use client"

import { useState, useEffect } from "react"

export function CRMIntegrationDemo() {
  const [syncing, setSyncing] = useState(false)
  const [syncStep, setSyncStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSyncing(true)
      setSyncStep(0)

      const stepInterval = setInterval(() => {
        setSyncStep((prev) => {
          if (prev >= 3) {
            clearInterval(stepInterval)
            setTimeout(() => setSyncing(false), 500)
            return 0
          }
          return prev + 1
        })
      }, 800)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-3xl p-4 sm:p-6 md:p-8 min-h-[400px] md:h-[400px] flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 w-full max-w-2xl">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 w-full max-w-xs md:w-48 flex-shrink-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg sm:rounded-xl mb-2 sm:mb-3 flex items-center justify-center">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <div className="text-sm font-semibold text-gray-900 mb-1">Call Data</div>
          <div className="space-y-2">
            {["Duration: 3:42", "Intent: Support", "Outcome: Resolved"].map((item, i) => {
              const isVisible = syncStep > i
              return (
                <div
                  key={i}
                  className={`text-xs text-gray-600 transition-all ${isVisible ? "opacity-100" : "opacity-30"}`}
                >
                  {item}
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 sm:gap-3 flex-shrink-0">
          <svg
            className={`w-10 h-10 sm:w-12 sm:h-12 text-teal-600 transition-transform ${syncing ? "animate-spin" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <span className="text-xs sm:text-sm font-semibold text-teal-700">
            {syncing ? "Syncing..." : "Real-time Sync"}
          </span>
        </div>

        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 w-full max-w-xs md:w-48 flex-shrink-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg sm:rounded-xl mb-2 sm:mb-3 flex items-center justify-center">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
              />
            </svg>
          </div>
          <div className="text-sm font-semibold text-gray-900 mb-1">Your CRM</div>
          <div className="space-y-2">
            {["Contact Updated", "Note Added", "Task Created"].map((item, i) => {
              const isVisible = syncStep > i
              return (
                <div
                  key={i}
                  className={`flex items-center gap-2 text-xs transition-all ${isVisible ? "opacity-100" : "opacity-30"}`}
                >
                  <span className={`w-2 h-2 rounded-full ${isVisible ? "bg-green-500" : "bg-gray-300"}`}></span>
                  <span className="text-gray-600">{item}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
