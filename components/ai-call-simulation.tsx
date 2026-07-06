"use client"

import { useEffect, useState } from "react"

type Industry = "appointments" | "sales" | "support"

export function AICallSimulation() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>("appointments")

  const industries = [
    { id: "appointments" as Industry, label: "Appointment Booking" },
    { id: "sales" as Industry, label: "Sales Call" },
    { id: "support" as Industry, label: "Customer Support" },
  ]

  const conversations: Record<Industry, any[]> = {
    appointments: [
      {
        type: "customer",
        message: "Hi, I need to reschedule my appointment for tomorrow.",
        timestamp: "10:23 AM",
      },
      { type: "processing", message: "AI analyzing request..." },
      {
        type: "ai",
        message: "Of course! I can help you reschedule. What day works best for you?",
        timestamp: "10:23 AM",
        insight: "Detected: Appointment Rescheduling",
      },
      { type: "customer", message: "How about Thursday afternoon?", timestamp: "10:24 AM" },
      { type: "processing", message: "Checking availability..." },
      {
        type: "ai",
        message: "Perfect! I have a 2:00 PM slot available on Thursday. Would that work for you?",
        timestamp: "10:24 AM",
        insight: "Checked calendar • Found optimal time",
      },
      { type: "customer", message: "That's perfect, thanks!", timestamp: "10:24 AM" },
      { type: "processing", message: "Updating appointment..." },
      {
        type: "ai",
        message:
          "Great! I've moved your appointment to Thursday at 2:00 PM. You'll receive a confirmation text shortly. Is there anything else I can help you with?",
        timestamp: "10:25 AM",
        insight: "Appointment confirmed • SMS sent",
      },
      { type: "customer", message: "No, that's all. Thank you!", timestamp: "10:25 AM" },
      {
        type: "ai",
        message: "You're welcome! Have a wonderful day, and we'll see you Thursday!",
        timestamp: "10:25 AM",
        insight: "Customer satisfied • Call completed",
      },
    ],
    sales: [
      {
        type: "customer",
        message: "I saw your website. I'm interested in learning more about what you offer.",
        timestamp: "2:15 PM",
      },
      { type: "processing", message: "AI analyzing inquiry..." },
      {
        type: "ai",
        message:
          "Happy to help! I'd love to understand your needs better. Roughly how large is your team, and what are you hoping to improve?",
        timestamp: "2:15 PM",
        insight: "Detected: New lead • Qualifying",
      },
      {
        type: "customer",
        message: "We're a team of about 40 and we're trying to cut down on manual follow-up work.",
        timestamp: "2:16 PM",
      },
      { type: "processing", message: "Analyzing customer needs..." },
      {
        type: "ai",
        message:
          "That's a great fit. For teams your size, our automation typically saves several hours per person each week. The best next step is a quick demo with one of our specialists. Would you like to book one?",
        timestamp: "2:16 PM",
        insight: "Matched needs • Solution identified",
      },
      { type: "customer", message: "Yes, that sounds perfect. What times are available?", timestamp: "2:17 PM" },
      { type: "processing", message: "Checking team calendar..." },
      {
        type: "ai",
        message:
          "I have availability tomorrow at 11 AM or 3 PM, or Saturday at 10 AM. Which works best for your schedule?",
        timestamp: "2:17 PM",
        insight: "Calendar synced • Lead qualified",
      },
    ],
    support: [
      {
        type: "customer",
        message: "Hi, I'm having trouble accessing my account and I'm not sure what's wrong.",
        timestamp: "9:42 AM",
      },
      { type: "processing", message: "AI analyzing support request..." },
      {
        type: "ai",
        message:
          "I'm sorry for the trouble! I can help you get back in. Are you seeing an error message when you try to sign in, or does the page not load at all?",
        timestamp: "9:42 AM",
        insight: "Detected: Account access issue",
      },
      {
        type: "customer",
        message: "It says my password is incorrect, but I'm sure I'm typing it right.",
        timestamp: "9:43 AM",
      },
      { type: "processing", message: "Verifying account details..." },
      {
        type: "ai",
        message:
          "Thanks for confirming. I've verified your account, and it looks like a recent security update reset your password. I can send you a secure reset link right now. Would you like me to do that?",
        timestamp: "9:43 AM",
        insight: "Account verified • Root cause found",
      },
      { type: "customer", message: "Yes please, that would be great.", timestamp: "9:44 AM" },
      { type: "processing", message: "Sending secure reset link..." },
      {
        type: "ai",
        message:
          "Done! I've texted a secure reset link to the number on file. It'll expire in 15 minutes for your safety. Once you're back in, is there anything else I can help you with?",
        timestamp: "9:44 AM",
        insight: "Issue resolved • Reset link sent",
      },
    ],
  }

  const conversationSteps = conversations[selectedIndustry]

  useEffect(() => {
    setCurrentStep(0)
  }, [selectedIndustry])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= conversationSteps.length - 1) {
          return 0
        }
        return prev + 1
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [conversationSteps.length, selectedIndustry])

  const visibleMessages = conversationSteps.slice(0, currentStep + 1)

  return (
    <div className="relative">
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setSelectedIndustry(industry.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                selectedIndustry === industry.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30"
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700/50 hover:border-slate-600"
              }`}
            >
              {industry.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full max-w-md">
          {/* Phone device frame with tighter spacing */}
          <div className="relative bg-slate-950 rounded-[2.5rem] p-2.5 shadow-2xl border border-slate-800/50">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-b-3xl z-10" />

            {/* Screen */}
            <div className="relative bg-slate-900 rounded-[2.25rem] overflow-hidden">
              {/* Status bar */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-slate-950/90 to-transparent z-10 flex items-center justify-between px-8 pt-1.5">
                <span className="text-white text-xs font-medium">9:41</span>
                <div className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  <span className="text-white text-xs font-semibold ml-0.5">100%</span>
                </div>
              </div>

              {/* Call header */}
              <div className="pt-10 pb-3 px-5 bg-gradient-to-b from-slate-800/50 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-9 h-9 rounded-full bg-cyan-500 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-slate-900" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-semibold">Sarah Johnson</p>
                    <p className="text-slate-400 text-xs">Customer</p>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-500/20 px-2 py-1 rounded-full">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-emerald-400 text-[10px] font-medium">AI Active</span>
                  </div>
                </div>
              </div>

              {/* Conversation area - reduced height */}
              <div className="px-3 py-3 space-y-2.5 min-h-[380px] max-h-[380px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                {visibleMessages.map((step, i) => (
                  <div key={i} className="animate-fade-in">
                    {step.type === "customer" && (
                      <div className="flex justify-start mb-2">
                        <div className="max-w-[80%]">
                          <div className="bg-slate-800 rounded-2xl rounded-tl-sm px-3 py-2 shadow-md">
                            <p className="text-white text-xs leading-relaxed">{step.message}</p>
                          </div>
                          <span className="text-[9px] text-slate-600 mt-0.5 ml-2 block">{step.timestamp}</span>
                        </div>
                      </div>
                    )}

                    {step.type === "ai" && (
                      <div className="flex justify-end mb-2">
                        <div className="max-w-[80%]">
                          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl rounded-tr-sm px-3 py-2 shadow-lg">
                            <p className="text-white text-xs leading-relaxed">{step.message}</p>
                          </div>
                          <div className="flex items-center justify-end gap-1.5 mt-0.5 mr-2">
                            <span className="text-[9px] text-slate-600">{step.timestamp}</span>
                            {step.insight && (
                              <span className="text-[8px] text-cyan-400 font-medium px-1.5 py-0.5 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                                {step.insight}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {step.type === "processing" && (
                      <div className="flex justify-center my-1.5">
                        <div className="flex items-center gap-2 bg-slate-800/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                          <div className="flex gap-1">
                            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-bounce" />
                          </div>
                          <span className="text-[10px] text-slate-400 font-medium">{step.message}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Input area - reduced padding */}
              <div className="p-3 border-t border-slate-800/50">
                <div className="flex items-center gap-2 bg-slate-800/50 rounded-full px-3 py-1.5">
                  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                  <span className="text-xs text-slate-500 flex-1">Type a message...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-6 text-center">
        <div className="flex items-center gap-2.5 text-sm">
          <div className="w-9 h-9 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="font-medium text-slate-300">Instant Response</span>
        </div>
        <div className="flex items-center gap-2.5 text-sm">
          <div className="w-9 h-9 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
            <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <span className="font-medium text-slate-300">Context Aware</span>
        </div>
        <div className="flex items-center gap-2.5 text-sm">
          <div className="w-9 h-9 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center">
            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span className="font-medium text-slate-300">Always Learning</span>
        </div>
      </div>
    </div>
  )
}
