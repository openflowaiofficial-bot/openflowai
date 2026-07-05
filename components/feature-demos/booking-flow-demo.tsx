"use client"

import { useEffect, useState } from "react"

export function BookingFlowDemo() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 6)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  const steps = [
    { label: "Customer requests appointment", icon: "📞" },
    { label: "AI checks availability", icon: "📅" },
    { label: "Suggests optimal times", icon: "⏰" },
    { label: "Customer confirms time", icon: "✓" },
    { label: "Sends confirmation", icon: "📧" },
    { label: "Adds to calendar", icon: "📆" },
  ]

  return (
    <div className="relative w-full min-h-[400px] bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-6">Automated Booking Flow</h3>

      <div className="space-y-3 sm:space-y-4">
        {steps.map((item, i) => {
          const isActive = step >= i
          const isCurrent = step === i

          return (
            <div key={i} className="flex items-center gap-2 sm:gap-4">
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-base sm:text-xl transition-all flex-shrink-0 ${
                  isActive ? "bg-gradient-to-r from-orange-500 to-amber-600 scale-110 shadow-lg" : "bg-gray-200"
                }`}
              >
                {isActive ? "✓" : i + 1}
              </div>
              <div
                className={`flex-1 p-3 sm:p-4 rounded-lg transition-all ${
                  isActive ? "bg-white shadow-md" : "bg-gray-50"
                }`}
              >
                <p className={`text-xs sm:text-sm font-medium ${isActive ? "text-gray-800" : "text-gray-400"}`}>
                  {item.label}
                </p>
              </div>
              {isCurrent && (
                <div className="animate-pulse flex-shrink-0">
                  <div className="flex gap-1">
                    <div
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {step >= 5 && (
        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg sm:rounded-xl animate-fade-in">
          <p className="text-xs sm:text-sm font-medium text-orange-800 text-center">
            Appointment booked in 45 seconds • 100% automated
          </p>
        </div>
      )}
    </div>
  )
}
