"use client"

import { useEffect, useState } from "react"

export function SMSAutoResponseDemo() {
  const [activeMessage, setActiveMessage] = useState(0)

  const conversation = [
    { from: "customer", text: "Are you open today?", time: "2:15 PM" },
    {
      from: "ai",
      text: "Yes! We're open until 8 PM today. Would you like to schedule an appointment?",
      time: "2:15 PM",
    },
    { from: "customer", text: "What services do you offer?", time: "2:16 PM" },
    {
      from: "ai",
      text: "We offer oil changes, tire rotation, brake service, and general maintenance. What can we help you with?",
      time: "2:16 PM",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMessage((prev) => (prev + 1) % conversation.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-full min-h-[400px] bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-6 overflow-hidden">
      {/* Phone Frame */}
      <div className="max-w-sm mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-800">
        {/* Status Bar */}
        <div className="bg-gray-800 px-6 py-2 flex justify-between items-center text-white text-xs">
          <span>9:41</span>
          <div className="flex gap-1">
            <div className="w-4 h-3 border border-white rounded-sm"></div>
            <div className="w-4 h-3 border border-white rounded-sm"></div>
            <div className="w-4 h-3 border border-white rounded-sm"></div>
          </div>
        </div>

        {/* Messages Header */}
        <div className="bg-gray-100 border-b px-4 py-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
            AI
          </div>
          <div>
            <div className="font-semibold text-sm">Auto Service Center</div>
            <div className="text-xs text-green-600">● Active</div>
          </div>
        </div>

        {/* Messages */}
        <div className="bg-white p-4 space-y-3 h-72 overflow-y-auto">
          {conversation.slice(0, activeMessage + 1).map((msg, i) => (
            <div key={i} className={`flex ${msg.from === "ai" ? "justify-start" : "justify-end"} animate-fade-in`}>
              <div
                className={`max-w-[75%] ${msg.from === "ai" ? "bg-gray-200 text-gray-900" : "bg-blue-500 text-white"} rounded-2xl px-4 py-2`}
              >
                <p className="text-sm">{msg.text}</p>
                <p className={`text-xs mt-1 ${msg.from === "ai" ? "text-gray-500" : "text-blue-100"}`}>{msg.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
