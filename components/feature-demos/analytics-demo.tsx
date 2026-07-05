"use client"

import { useState, useEffect } from "react"

export function AnalyticsDemo() {
  const [activeMetric, setActiveMetric] = useState(0)

  const metrics = [
    {
      label: "Call Volume",
      value: "1,247",
      change: "+23%",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-300",
      textColor: "text-orange-600",
    },
    {
      label: "Avg Duration",
      value: "3:42",
      change: "-8%",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-300",
      textColor: "text-blue-600",
    },
    {
      label: "Resolution Rate",
      value: "92%",
      change: "+5%",
      bgColor: "bg-green-50",
      borderColor: "border-green-300",
      textColor: "text-green-600",
    },
    {
      label: "Satisfaction",
      value: "4.8/5",
      change: "+0.3",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-300",
      textColor: "text-purple-600",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [metrics.length])

  return (
    <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 min-h-[350px] sm:h-[400px] flex items-center justify-center">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 w-full max-w-lg">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">Live Analytics</h3>
          <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-green-600">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="hidden xs:inline">Real-time</span>
            <span className="xs:hidden">Live</span>
          </div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className={`p-4 sm:p-5 rounded-xl transition-all duration-500 ${
                i === activeMetric
                  ? `${metric.bgColor} border-2 ${metric.borderColor} scale-105 shadow-md`
                  : "bg-gray-50 border border-gray-200"
              }`}
            >
              <div className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2 font-medium">{metric.label}</div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div
                className={`text-xs sm:text-sm font-semibold ${metric.change.startsWith("+") ? "text-green-600" : "text-blue-600"}`}
              >
                {metric.change} <span className="hidden sm:inline">this week</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between text-xs sm:text-sm">
            <span className="text-gray-600">Data refreshed</span>
            <span className="text-gray-900 font-semibold">Just now</span>
          </div>
        </div>
      </div>
    </div>
  )
}
