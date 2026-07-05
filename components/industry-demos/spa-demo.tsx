"use client"

import { useState, useEffect } from "react"

export function SpaDemo() {
  const [currentStep, setCurrentStep] = useState(0)

  const conversation = [
    { type: "customer", message: "Hi! I'd like to book a massage for this weekend.", timestamp: "3:42 PM" },
    { type: "processing", message: "Detecting service request" },
    {
      type: "ai",
      message:
        "Wonderful! We have several massage options available. Are you interested in Swedish, Deep Tissue, Hot Stone, or Aromatherapy?",
      timestamp: "3:42 PM",
      insight: "Service catalog accessed",
    },
    { type: "customer", message: "Deep tissue sounds good. How much is a 90-minute session?", timestamp: "3:43 PM" },
    { type: "processing", message: "Checking pricing & availability" },
    {
      type: "ai",
      message:
        "A 90-minute deep tissue massage is $145. We have openings on Saturday at 11:00 AM, 2:00 PM, or Sunday at 10:00 AM. Which time works best for you?",
      timestamp: "3:43 PM",
      insight: "Availability confirmed",
    },
    { type: "customer", message: "Saturday at 2 PM please. First time visitor.", timestamp: "3:44 PM" },
    { type: "processing", message: "Creating new client profile" },
    {
      type: "ai",
      message:
        "Perfect! Since you're a first-time guest, you'll receive 20% off today's service. Your total will be $116. May I have your name and phone number to complete the booking?",
      timestamp: "3:44 PM",
      insight: "Discount applied",
    },
    { type: "customer", message: "Sarah Mitchell, 555-0123", timestamp: "3:45 PM" },
    {
      type: "ai",
      message:
        "Thank you, Sarah! You're all set for Saturday at 2:00 PM. Please arrive 10 minutes early to complete your intake form. We'll send you a confirmation text with our policies. Looking forward to seeing you!",
      timestamp: "3:45 PM",
      insight: "Booking confirmed",
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
                      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-lg">
                        <p className="text-white text-sm leading-relaxed">{step.message}</p>
                      </div>
                      <div className="flex items-center justify-end gap-2 mt-1 mr-3">
                        <span className="text-[10px] text-slate-600">{step.timestamp}</span>
                        {step.insight && (
                          <span className="text-[9px] text-emerald-400 font-medium px-2 py-0.5 bg-emerald-500/10 rounded-full border border-emerald-500/20">
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
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                        <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" />
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
