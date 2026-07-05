"use client"

import { useState, useEffect } from "react"

export function HandymanDemo() {
  const [currentStep, setCurrentStep] = useState(0)

  const conversation = [
    { type: "customer", message: "I have a leaky faucet in my kitchen that needs fixing", timestamp: "9:32 AM" },
    { type: "processing", message: "Identifying service type" },
    {
      type: "ai",
      message: "I can help with that! Is the leak coming from the faucet handle, the base, or underneath the sink?",
      timestamp: "9:32 AM",
      insight: "Plumbing repair detected",
    },
    { type: "customer", message: "From the base where it connects to the counter", timestamp: "9:33 AM" },
    { type: "processing", message: "Assessing repair complexity" },
    {
      type: "ai",
      message:
        "That's likely a worn O-ring or loose connection - a straightforward repair. I can schedule a technician for as soon as today at 2:00 PM or tomorrow morning at 9:00 AM. What's your address?",
      timestamp: "9:33 AM",
      insight: "Service estimated: $125",
    },
    { type: "customer", message: "Today at 2 would be great. 456 Oak Street", timestamp: "9:34 AM" },
    { type: "processing", message: "Checking technician availability" },
    {
      type: "ai",
      message:
        "Perfect! Mike will be there today at 2:00 PM. The service call is $125 which includes the first hour of labor. If parts are needed, he'll quote you before proceeding. I'm texting you his ETA and photo ID.",
      timestamp: "9:34 PM",
      insight: "Technician assigned",
    },
    { type: "customer", message: "Sounds good, thank you!", timestamp: "9:35 AM" },
    {
      type: "ai",
      message: "You're welcome! You'll get a text when Mike is 15 minutes away. Have a great day!",
      timestamp: "9:35 AM",
      insight: "Job scheduled",
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
                      <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-lg">
                        <p className="text-white text-sm leading-relaxed">{step.message}</p>
                      </div>
                      <div className="flex items-center justify-end gap-2 mt-1 mr-3">
                        <span className="text-[10px] text-slate-600">{step.timestamp}</span>
                        {step.insight && (
                          <span className="text-[9px] text-amber-400 font-medium px-2 py-0.5 bg-amber-500/10 rounded-full border border-amber-500/20">
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
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                        <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce" />
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
