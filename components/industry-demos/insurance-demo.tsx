"use client"

import { useState, useEffect } from "react"

export function InsuranceDemo() {
  const [currentStep, setCurrentStep] = useState(0)

  const conversation = [
    { type: "customer", message: "I'd like to get a quote for auto insurance", timestamp: "11:05 AM" },
    { type: "processing", message: "Initiating quote process" },
    {
      type: "ai",
      message:
        "I'd be happy to help you with that! To provide an accurate quote, I'll need some information. What year, make, and model is your vehicle?",
      timestamp: "11:05 AM",
      insight: "Quote request detected",
    },
    { type: "customer", message: "2022 Honda Accord EX", timestamp: "11:06 AM" },
    { type: "processing", message: "Looking up vehicle details" },
    {
      type: "ai",
      message: "Great choice! And what's your zip code? Also, are you currently insured, or is this a new policy?",
      timestamp: "11:06 AM",
      insight: "Vehicle verified",
    },
    { type: "customer", message: "90210, and I'm switching from my current provider", timestamp: "11:07 AM" },
    { type: "processing", message: "Analyzing coverage options" },
    {
      type: "ai",
      message:
        "Perfect! Based on your location and vehicle, I'm seeing rates starting at $127/month for full coverage. This includes collision, comprehensive, and $100k/$300k liability. Would you like me to email you a detailed quote?",
      timestamp: "11:07 AM",
      insight: "Quote calculated",
    },
    { type: "customer", message: "Yes please. How soon can coverage start?", timestamp: "11:08 AM" },
    {
      type: "ai",
      message:
        "Coverage can start as soon as today! I'll send the detailed quote to your email with all policy options. You can review and purchase online in minutes. What email should I use?",
      timestamp: "11:08 AM",
      insight: "Quote ready to send",
    },
    { type: "customer", message: "[email protected]", timestamp: "11:09 AM" },
    {
      type: "ai",
      message:
        "Done! Check your email for your personalized quote. You'll also receive a call from one of our licensed agents within 30 minutes to answer any questions. Thanks for considering us!",
      timestamp: "11:09 AM",
      insight: "Lead qualified & routed",
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
                      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-lg">
                        <p className="text-white text-sm leading-relaxed">{step.message}</p>
                      </div>
                      <div className="flex items-center justify-end gap-2 mt-1 mr-3">
                        <span className="text-[10px] text-slate-600">{step.timestamp}</span>
                        {step.insight && (
                          <span className="text-[9px] text-indigo-400 font-medium px-2 py-0.5 bg-indigo-500/10 rounded-full border border-indigo-500/20">
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
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce" />
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
