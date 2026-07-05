"use client"

import { useState, useEffect } from "react"

export function SchedulingDemo() {
  const [step, setStep] = useState(0)

  const steps = [
    { title: "Incoming Request", subtitle: "Customer wants appointment" },
    { title: "Checking Calendar", subtitle: "Scanning availability..." },
    { title: "Proposing Times", subtitle: "3 slots available this week" },
    { title: "Booking Confirmed", subtitle: "Confirmation sent ✓" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % steps.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-3xl p-4 sm:p-6 md:p-8 min-h-[400px] md:h-[400px] flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-4 sm:p-6 md:p-8">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Smart Scheduler</h3>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>

          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            {steps.map((s, i) => {
              const isActive = i === step
              const isComplete = i < step
              const isFuture = i > step

              let bgClass = "bg-white border border-gray-200 opacity-40"
              let borderClass = ""
              let scaleClass = ""

              if (isActive) {
                bgClass = "bg-gradient-to-r from-purple-100 to-pink-100"
                borderClass = "border-2 border-purple-300"
                scaleClass = "scale-105"
              } else if (isComplete) {
                bgClass = "bg-gray-50"
                borderClass = "border border-gray-200"
              }

              return (
                <div
                  key={i}
                  className={`p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-500 ${bgClass} ${borderClass} ${scaleClass}`}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isComplete ? "bg-green-500" : isActive ? "bg-purple-500 animate-pulse" : "bg-gray-300"
                      }`}
                    >
                      {isComplete ? (
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <span className="text-white font-semibold text-sm sm:text-base">{i + 1}</span>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-gray-900 text-sm sm:text-base truncate">{s.title}</div>
                      <div className="text-xs sm:text-sm text-gray-600 truncate">{s.subtitle}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
