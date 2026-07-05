"use client"

import { useState, useEffect } from "react"

export function SalonDemo() {
  const [currentStep, setCurrentStep] = useState(0)

  const conversation = [
    { type: "customer", message: "I need a haircut and color for next week", timestamp: "1:15 PM" },
    { type: "processing", message: "Analyzing service request" },
    {
      type: "ai",
      message:
        "Great! I can help you with that. Do you have a preferred stylist, or would you like me to recommend someone based on your service needs?",
      timestamp: "1:15 PM",
      insight: "Service identified",
    },
    { type: "customer", message: "I usually see Jessica, is she available Wednesday?", timestamp: "1:16 PM" },
    { type: "processing", message: "Checking Jessica's schedule" },
    {
      type: "ai",
      message:
        "Jessica has Wednesday at 10:00 AM or 3:00 PM available. A cut and full color service takes about 2.5 hours. Which time works better?",
      timestamp: "1:16 PM",
      insight: "Stylist schedule accessed",
    },
    { type: "customer", message: "10 AM works. What's the total cost?", timestamp: "1:17 PM" },
    {
      type: "ai",
      message:
        "Perfect! Jessica's cut is $65 and full color starts at $120, so your total will be $185 plus. I'll book you for Wednesday at 10:00 AM. Can I get your name and phone number?",
      timestamp: "1:17 PM",
      insight: "Pricing calculated",
    },
    { type: "customer", message: "Emma Rodriguez, 555-0198", timestamp: "1:18 PM" },
    {
      type: "ai",
      message:
        "All set, Emma! You're booked with Jessica on Wednesday at 10:00 AM. We'll send you a confirmation text and a reminder the day before. See you then!",
      timestamp: "1:18 PM",
      insight: "Appointment booked",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= conversation.length - 1) return 0
        return prev + 1
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const visibleMessages = conversation.slice(0, currentStep + 1)

  return (
    <div className="relative mx-auto max-w-md">
      <div className="relative rounded-[3rem] bg-slate-900 p-3 shadow-2xl border border-slate-700">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-900 rounded-b-3xl z-10" />
        <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2.5rem] overflow-hidden">
          <div className="flex items-center justify-between px-6 pt-3 pb-2">
            <span className="text-white text-xs font-semibold">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-[10px] font-medium">AI Active</span>
            </div>
          </div>

          <div className="px-4 py-4 space-y-3 min-h-[400px] max-h-[400px] overflow-y-auto">
            {visibleMessages.map((step, i) => (
              <div key={i} className="animate-fade-in">
                {step.type === "customer" && (
                  <div className="flex justify-start">
                    <div className="max-w-[75%]">
                      <div className="bg-slate-800 rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-md">
                        <p className="text-white text-sm leading-relaxed">{step.message}</p>
                      </div>
                      <span className="text-[10px] text-slate-600 mt-1 ml-3 block">{step.timestamp}</span>
                    </div>
                  </div>
                )}

                {step.type === "ai" && (
                  <div className="flex justify-end">
                    <div className="max-w-[75%]">
                      <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-lg">
                        <p className="text-white text-sm leading-relaxed">{step.message}</p>
                      </div>
                      <div className="flex items-center justify-end gap-2 mt-1 mr-3">
                        <span className="text-[10px] text-slate-600">{step.timestamp}</span>
                        {step.insight && (
                          <span className="text-[9px] text-pink-400 font-medium px-2 py-0.5 bg-pink-500/10 rounded-full border border-pink-500/20">
                            {step.insight}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {step.type === "processing" && (
                  <div className="flex justify-center my-2">
                    <div className="flex items-center gap-2 bg-slate-800/60 backdrop-blur-sm px-4 py-2 rounded-full">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                        <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" />
                      </div>
                      <span className="text-xs text-slate-400 font-medium">{step.message}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
