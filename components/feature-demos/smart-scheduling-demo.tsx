"use client"

import { useEffect, useState } from "react"

export function SmartSchedulingDemo() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 5)
    }, 2500)
    return () => clearInterval(timer)
  }, [])

  const timeSlots = [
    { time: "9:00 AM", available: true, optimal: false },
    { time: "10:30 AM", available: true, optimal: true },
    { time: "12:00 PM", available: false, optimal: false },
    { time: "2:00 PM", available: true, optimal: true },
    { time: "4:00 PM", available: true, optimal: false },
  ]

  return (
    <div className="relative w-full h-[400px] bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Finding optimal time slots...</h3>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-3">
        {timeSlots.map((slot, i) => (
          <div
            key={i}
            className={`flex items-center justify-between p-4 rounded-xl transition-all duration-500 ${
              step > i && slot.available
                ? slot.optimal
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105"
                  : "bg-white border-2 border-gray-200"
                : step > i && !slot.available
                  ? "bg-gray-100 opacity-50"
                  : "bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-3 h-3 rounded-full ${
                  step > i
                    ? slot.available
                      ? slot.optimal
                        ? "bg-white"
                        : "bg-green-500"
                      : "bg-red-500"
                    : "bg-gray-300"
                }`}
              />
              <span className={`font-medium ${slot.optimal && step > i ? "text-white" : ""}`}>{slot.time}</span>
            </div>
            {step > i && slot.optimal && (
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full animate-fade-in">Best match</span>
            )}
            {step > i && !slot.available && <span className="text-xs text-gray-500 animate-fade-in">Unavailable</span>}
          </div>
        ))}
      </div>

      {step >= 4 && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl animate-fade-in">
          <p className="text-sm text-green-800 font-medium">2 optimal time slots found based on preferences</p>
        </div>
      )}
    </div>
  )
}
