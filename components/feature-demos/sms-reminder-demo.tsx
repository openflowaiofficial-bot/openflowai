"use client"

import { useEffect, useState } from "react"

export function SMSReminderDemo() {
  const [step, setStep] = useState(0)

  const reminders = [
    { time: "48h before", status: "sent", message: "Hi John! Reminder: your appointment is on Thursday at 2 PM" },
    { time: "24h before", status: "sent", message: "Tomorrow at 2 PM - Your appointment. Reply C to confirm" },
    { time: "2h before", status: "sending", message: "Your appointment starts in 2 hours. We look forward to seeing you" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % reminders.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-full min-h-[400px] bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
      <div className="max-w-md mx-auto">
        {/* Timeline */}
        <div className="space-y-4 sm:space-y-6">
          {reminders.map((reminder, i) => {
            const isVisible = i <= step
            const isComplete = i < step
            const isCurrent = i === step

            return (
              <div
                key={i}
                className={`flex gap-3 sm:gap-4 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-30"}`}
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${
                      isComplete ? "bg-green-500" : isCurrent ? "bg-purple-500 animate-pulse" : "bg-gray-300"
                    }`}
                  >
                    {isComplete ? (
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                  </div>
                  {i < reminders.length - 1 && <div className="w-0.5 h-12 sm:h-16 bg-gray-300 mt-2"></div>}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">{reminder.time}</div>
                  <div className="mt-2 bg-white rounded-lg p-2 sm:p-3 shadow-md">
                    <p className="text-xs sm:text-sm text-gray-700">{reminder.message}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          isComplete
                            ? "bg-green-100 text-green-700"
                            : isCurrent
                              ? "bg-purple-100 text-purple-700"
                              : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {isComplete ? "Delivered" : isCurrent ? "Sending..." : "Scheduled"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
