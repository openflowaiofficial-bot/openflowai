"use client"

import { useState, useEffect } from "react"

export function HVACDemo() {
  const [currentStep, setCurrentStep] = useState(0)

  const conversation = [
    { type: "customer", message: "My AC stopped working and it's 95 degrees outside", timestamp: "2:18 PM" },
    { type: "processing", message: "Prioritizing urgent service request" },
    {
      type: "ai",
      message:
        "I'm sorry to hear that! Let me get someone out to you quickly. When did it stop working, and is the unit making any unusual noises?",
      timestamp: "2:18 PM",
      insight: "HVAC emergency identified",
    },
    { type: "customer", message: "This morning. It's completely silent, no power at all.", timestamp: "2:19 PM" },
    { type: "processing", message: "Diagnosing issue remotely" },
    {
      type: "ai",
      message:
        "Sounds like it could be electrical. Have you checked your breaker box? Sometimes the AC breaker trips. I can walk you through checking it, or I can send a technician right away.",
      timestamp: "2:19 PM",
      insight: "Troubleshooting initiated",
    },
    { type: "customer", message: "Breaker is on. Please send someone.", timestamp: "2:20 PM" },
    { type: "processing", message: "Finding available technician" },
    {
      type: "ai",
      message:
        "I have a technician available at 4:00 PM today. Priority service is $150 for the diagnostic. If it needs repair, he'll provide a quote before starting work. What's your address?",
      timestamp: "2:20 PM",
      insight: "Same-day service available",
    },
    { type: "customer", message: "321 Pine Street. That works.", timestamp: "2:21 PM" },
    {
      type: "ai",
      message:
        "Perfect! David will be there at 4:00 PM. I'm sending you his credentials and our service guarantee info. He'll call 15 minutes before arrival. Hang in there!",
      timestamp: "2:21 PM",
      insight: "Appointment confirmed",
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
                      <div className="bg-gradient-to-r from-sky-600 to-blue-600 rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-lg">
                        <p className="text-white text-sm leading-relaxed">{step.message}</p>
                      </div>
                      <div className="flex items-center justify-end gap-2 mt-1 mr-3">
                        <span className="text-[10px] text-slate-600">{step.timestamp}</span>
                        {step.insight && (
                          <span className="text-[9px] text-sky-400 font-medium px-2 py-0.5 bg-sky-500/10 rounded-full border border-sky-500/20">
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
                        <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                        <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                        <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce" />
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
