"use client"

import { useEffect, useState } from "react"

export function ReminderSystemDemo() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4)
    }, 2200)
    return () => clearInterval(timer)
  }, [])

  const reminders = [
    { time: "24 hours before", type: "SMS", sent: false },
    { time: "2 hours before", type: "Email", sent: false },
    { time: "30 minutes before", type: "SMS", sent: false },
  ]

  return (
    <div className="relative w-full h-[400px] bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 sm:p-6 md:p-8">
      {/* Appointment Card */}
      <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-sm sm:text-base">
            15
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-gray-800 text-sm sm:text-base">Hair Salon Appointment</h4>
            <p className="text-xs sm:text-sm text-gray-600">Sarah Johnson • June 15, 2024</p>
            <p className="text-xs sm:text-sm text-gray-600">3:00 PM - 4:00 PM</p>
          </div>
        </div>
      </div>

      {/* Reminder Timeline */}
      <div className="flex flex-col gap-3">
        {reminders.map((reminder, i) => (
          <div key={i} className="flex items-start gap-3 sm:gap-4">
            <div className="relative flex items-start justify-center w-8 pt-1.5">
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${step > i ? "bg-green-500 scale-125" : "bg-gray-300"}`}
              />
              {i < reminders.length - 1 && (
                <div
                  className={`absolute top-5 left-1/2 -translate-x-1/2 w-0.5 h-[52px] transition-all duration-300 ${step > i ? "bg-green-500" : "bg-gray-200"}`}
                />
              )}
            </div>
            <div
              className={`flex-1 p-3 sm:p-4 rounded-lg transition-all duration-300 ${step > i ? "bg-white shadow-md" : "bg-gray-50"}`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-xs sm:text-sm font-medium text-gray-800">{reminder.time}</p>
                  <p className="text-xs text-gray-600">{reminder.type} reminder</p>
                </div>
                {step > i && (
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full whitespace-nowrap animate-fade-in">
                    Sent
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      {step >= 3 && (
        <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-3 animate-fade-in">
          <div className="bg-green-100 rounded-lg p-2 sm:p-3 text-center">
            <p className="text-xl sm:text-2xl font-bold text-green-700">97%</p>
            <p className="text-xs text-green-600">Show-up rate</p>
          </div>
          <div className="bg-emerald-100 rounded-lg p-2 sm:p-3 text-center">
            <p className="text-xl sm:text-2xl font-bold text-emerald-700">-68%</p>
            <p className="text-xs text-emerald-600">No-shows reduced</p>
          </div>
        </div>
      )}
    </div>
  )
}
