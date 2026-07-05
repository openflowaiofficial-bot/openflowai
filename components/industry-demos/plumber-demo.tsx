"use client"

import { useState, useEffect } from "react"

export function PlumberDemo() {
  const [currentStep, setCurrentStep] = useState(0)

  const conversation = [
    { type: "customer", message: "EMERGENCY! My basement is flooding from a burst pipe!", timestamp: "11:47 PM" },
    { type: "processing", message: "Emergency detected - activating priority protocol" },
    {
      type: "ai",
      message:
        "I've activated emergency mode. First, turn off your main water valve if possible - usually near your water meter. I'm tracking 3 available plumbers near you right now via GPS. What's your address?",
      timestamp: "11:47 PM",
      insight: "Emergency protocol + real-time technician tracking",
    },
    { type: "customer", message: "789 Maple Drive. Valve is off! Water everywhere!", timestamp: "11:48 PM" },
    { type: "processing", message: "Dispatching + calculating damage severity + checking equipment" },
    {
      type: "ai",
      message:
        "Carlos is 8 minutes away (I'm tracking his truck live). I've analyzed your home's plumbing blueprint from city records - you have copper pipes installed in 2015. He's bringing a pipe cutter, SharkBite fittings, and a water pump. Emergency rate: $299 first hour, then $150/hr. His truck has everything needed - no delays.",
      timestamp: "11:48 PM",
      insight: "Plumber dispatched + property records accessed + equipment confirmed",
    },
    {
      type: "customer",
      message: "How did you get my plumbing info? And can I see where he is?",
      timestamp: "11:49 PM",
    },
    {
      type: "ai",
      message:
        "I accessed public property records and your past service history with us (you had a water heater installed 2 years ago). I'm sending you Carlos's live GPS location, ETA countdown, photo, truck number, and license verification. He's 6 minutes away now. I've also alerted your homeowner's insurance (Allstate) about the claim - they're expecting your call tomorrow.",
      timestamp: "11:49 PM",
      insight: "Live tracking link sent + insurance notified proactively",
    },
    { type: "customer", message: "This is amazing! Way better than calling around at midnight", timestamp: "11:50 PM" },
    { type: "processing", message: "Preparing follow-up services + damage assessment" },
    {
      type: "ai",
      message:
        "Carlos just confirmed he's 4 minutes out. After he fixes the pipe, you'll likely need water damage restoration - I've already contacted SafeDry (4.8 stars) to assess tomorrow at 9 AM, pending your approval. They'll bill insurance directly. I'm available 24/7 if you need anything after Carlos arrives. You're in good hands!",
      timestamp: "11:50 PM",
      insight: "Restoration scheduled + insurance coordination complete",
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
              <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse" />
              <span className="text-red-400 text-[10px] font-medium">Emergency Mode</span>
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
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-lg">
                        <p className="text-white text-sm leading-relaxed">{step.message}</p>
                      </div>
                      <div className="flex items-center justify-end gap-2 mt-1 mr-3">
                        <span className="text-[10px] text-slate-600">{step.timestamp}</span>
                        {step.insight && (
                          <span className="text-[9px] text-cyan-400 font-medium px-2 py-0.5 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                            {step.insight}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {step.type === "processing" && (
                  <div className="flex justify-center my-2">
                    <div className="flex items-center gap-2 bg-red-800/40 backdrop-blur-sm px-4 py-2 rounded-full border border-red-500/20">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                        <div className="w-1.5 h-1.5 bg-red-400 rounded-full animate-bounce" />
                      </div>
                      <span className="text-xs text-red-300 font-medium">{step.message}</span>
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
