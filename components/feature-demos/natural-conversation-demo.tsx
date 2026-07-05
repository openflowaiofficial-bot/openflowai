"use client"

import { useState, useEffect } from "react"

export function NaturalConversationDemo() {
  const [messageIndex, setMessageIndex] = useState(0)

  const messages = [
    { speaker: "customer", text: "Hi, I'm looking for a loan officer.", time: "2:34 PM" },
    {
      speaker: "ai",
      text: "I'd be happy to help! Are you looking for a mortgage or personal loan?",
      time: "2:34 PM",
      intent: "Clarifying Intent",
    },
    { speaker: "customer", text: "A mortgage for a new home purchase.", time: "2:35 PM" },
    {
      speaker: "ai",
      text: "Perfect! Let me connect you with Sarah Chen, our mortgage specialist. She's available now.",
      time: "2:35 PM",
      intent: "Smart Routing",
      emotion: "Positive",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % (messages.length + 1))
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const visibleMessages = messages.slice(0, messageIndex)

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 h-[400px] flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <div className="font-semibold">OpenFlow AI Agent</div>
              <div className="text-xs text-blue-100 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Active
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 h-[280px] overflow-y-auto space-y-4">
          {visibleMessages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.speaker === "ai" ? "justify-start" : "justify-end"} animate-in fade-in slide-in-from-bottom-4 duration-500`}
            >
              <div className="max-w-[80%]">
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    msg.speaker === "ai"
                      ? "bg-gray-100 text-gray-900"
                      : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                  }`}
                >
                  {msg.text}
                </div>
                <div className="flex items-center gap-2 mt-1 px-2">
                  <span className="text-xs text-gray-500">{msg.time}</span>
                  {msg.intent && (
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{msg.intent}</span>
                  )}
                  {msg.emotion && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{msg.emotion}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
