"use client"

import { useEffect, useState } from "react"

export function SMSTwoWayDemo() {
  const [messageIndex, setMessageIndex] = useState(0)

  const conversation = [
    { from: "customer", text: "Do you have the iPhone 15 in stock?", time: "3:24 PM" },
    {
      from: "ai",
      text: "Yes! We have all colors available. Which color are you interested in?",
      time: "3:24 PM",
      intent: "Product inquiry",
    },
    { from: "customer", text: "Blue", time: "3:25 PM" },
    {
      from: "ai",
      text: "Great choice! The blue iPhone 15 is $799. Would you like to reserve one?",
      time: "3:25 PM",
      intent: "Product available",
    },
    { from: "customer", text: "Yes please", time: "3:26 PM" },
    {
      from: "ai",
      text: "Reserved! When can you pick it up? We're open until 9 PM today.",
      time: "3:26 PM",
      intent: "Reservation confirmed",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % conversation.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-full min-h-[400px] bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6">
      <div className="max-w-sm mx-auto bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
        {/* Phone Header */}
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <div className="font-semibold text-white text-sm">Tech Store Bot</div>
              <div className="text-xs text-teal-100">Online</div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="bg-gray-800 p-4 space-y-3 h-80 overflow-y-auto">
          {conversation.slice(0, messageIndex + 1).map((msg, i) => (
            <div key={i} className="space-y-1 animate-fade-in">
              <div className={`flex ${msg.from === "ai" ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-[80%] ${
                    msg.from === "ai"
                      ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                      : "bg-gray-700 text-gray-100"
                  } rounded-2xl px-4 py-2 shadow-lg`}
                >
                  <p className="text-sm">{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.from === "ai" ? "text-teal-100" : "text-gray-400"}`}>{msg.time}</p>
                </div>
              </div>
              {msg.intent && msg.from === "ai" && (
                <div className="flex justify-start">
                  <span className="text-xs px-2 py-1 bg-cyan-900/50 text-cyan-300 rounded-full">🎯 {msg.intent}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Stat */}
      <div className="absolute top-6 right-6 bg-white/90 backdrop-blur rounded-lg px-4 py-2 shadow-lg">
        <div className="text-2xl font-bold text-teal-600">{"<"}2s</div>
        <div className="text-xs text-gray-600">Response Time</div>
      </div>
    </div>
  )
}
