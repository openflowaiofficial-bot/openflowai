"use client"

import { useState, useEffect } from "react"

export function CarDealershipDemo() {
  const [currentStep, setCurrentStep] = useState(0)

  const conversation = [
    {
      type: "customer",
      message: "Hi, I'm interested in the 2024 Toyota Camry you have listed online.",
      timestamp: "2:14 PM",
    },
    { type: "processing", message: "Analyzing 3 inventory systems simultaneously" },
    {
      type: "ai",
      message:
        "Great choice! I just checked our inventory across all 3 locations. We have the 2024 Camry XSE in Celestial Silver at our Main Street location - it arrived yesterday and has exactly 12 miles on it. I also see you viewed this listing 3 times this week. Would you like to discuss pricing, compare it to similar models in your budget, or schedule a test drive?",
      timestamp: "2:14 PM",
      insight: "Multi-location inventory + behavior analysis in 0.8s",
    },
    {
      type: "customer",
      message: "Wow, that's impressive. What's the out-the-door price? I'm also looking at the Accord.",
      timestamp: "2:15 PM",
    },
    { type: "processing", message: "Running real-time price calculations + competitive analysis" },
    {
      type: "ai",
      message:
        "I've calculated the full out-the-door price including taxes, fees, and current incentives: $32,450. I also pulled up the Honda Accord you mentioned - it's $1,200 more but the Camry has better resale value (64% vs 61% after 3 years) and lower insurance costs. With your 720 credit score, you qualify for 3.9% APR. Monthly payment: $485/72mo or $612/60mo. Which interests you?",
      timestamp: "2:15 PM",
      insight: "Price calculated + credit pre-check + competitor analysis",
    },
    {
      type: "customer",
      message: "You already know my credit score? And how did you know I was looking at Accords?",
      timestamp: "2:16 PM",
    },
    {
      type: "ai",
      message:
        "I accessed your soft credit inquiry from when you started our pre-approval process 4 days ago, and I can see you've compared vehicles on our site. All secure and GDPR compliant. The best part: I'm checking our finance partners right now and found you're actually approved for 3.4% through our credit union - that saves you $23/month. Would you like Thursday or Friday for your test drive?",
      timestamp: "2:16 PM",
      insight: "Real-time finance approval from 4 lenders",
    },
    {
      type: "customer",
      message: "This is so much better than calling dealerships. Thursday afternoon works.",
      timestamp: "2:17 PM",
    },
    { type: "processing", message: "Cross-checking sales team calendars + customer preferences" },
    {
      type: "ai",
      message:
        "I've booked you with Mike Chen, our senior consultant (4.9/5 stars, 247 reviews) for Thursday at 2:30 PM. I'm sending you: his photo, the exact car's VIN, a 360° interior/exterior video, Carfax report, and directions. I've also blocked this vehicle from our website so no one else can claim it. Need anything else before Thursday?",
      timestamp: "2:17 PM",
      insight: "Appointment set + vehicle reserved + documents sent",
    },
    { type: "customer", message: "No, this was incredibly efficient. Thanks!", timestamp: "2:18 PM" },
    {
      type: "ai",
      message:
        "My pleasure! I'll text you Wednesday night with weather updates and a reminder. I'm available 24/7 if you have questions before then. By the way, I've already added the Camry's specs to your comparison tool with the Accord - check your email. See you Thursday!",
      timestamp: "2:18 PM",
      insight: "Smart reminders + proactive follow-up scheduled",
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
      {/* Phone mockup */}
      <div className="relative rounded-[3rem] bg-slate-900 p-3 shadow-2xl border border-slate-700">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-900 rounded-b-3xl z-10" />

        {/* Screen */}
        <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-[2.5rem] overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-2">
            <span className="text-white text-xs font-semibold">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-[10px] font-medium">AI Active</span>
            </div>
          </div>

          {/* Conversation */}
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
                      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-lg">
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
                    <div className="flex items-center gap-2 bg-slate-800/60 backdrop-blur-sm px-4 py-2 rounded-full">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
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
