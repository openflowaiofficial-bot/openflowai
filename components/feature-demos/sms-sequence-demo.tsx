"use client"

import { useEffect, useState } from "react"

export function SMSSequenceDemo() {
  const [activeDay, setActiveDay] = useState(0)

  const sequence = [
    { day: "Day 1", message: "Thanks for signing up! Here's 10% off your first purchase", opens: 78 },
    { day: "Day 3", message: "Still thinking? Check out our best sellers 👇", opens: 62 },
    { day: "Day 7", message: "Your discount expires in 24h! Don't miss out", opens: 84 },
    { day: "Day 14", message: "Welcome back! New arrivals just for you", opens: 71 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDay((prev) => (prev + 1) % sequence.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-full min-h-[400px] bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Lead Nurture Campaign</h3>
          <p className="text-sm text-gray-600">Automated follow-up sequence</p>
        </div>

        <div className="space-y-4">
          {sequence.map((item, i) => (
            <div
              key={i}
              className={`relative transition-all duration-500 ${
                i === activeDay ? "scale-105" : i < activeDay ? "opacity-60" : "opacity-40"
              }`}
            >
              <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-transparent hover:border-orange-300">
                <div className="flex items-start justify-between mb-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700">
                    {item.day}
                  </span>
                  {i === activeDay && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 animate-pulse">
                      Sending now
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-700 mb-3">{item.message}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item.opens}% open rate
                  </div>
                  {i <= activeDay && (
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </div>
              {i < sequence.length - 1 && (
                <div className="flex justify-center py-2">
                  <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
