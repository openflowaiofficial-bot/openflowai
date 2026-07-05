"use client"

import { useState, useEffect } from "react"

export function MedicalOfficeDemo() {
  const [currentStep, setCurrentStep] = useState(0)

  const conversation = [
    {
      type: "customer",
      message: "Hi, I need to see Dr. Martinez as soon as possible. I've been having chest discomfort.",
      timestamp: "10:23 AM",
    },
    { type: "processing", message: "Analyzing symptoms + checking provider availability" },
    {
      type: "ai",
      message:
        "I understand your concern. Based on your symptoms, I'm prioritizing this as urgent care. Dr. Martinez has an opening today at 2:30 PM, but I also see you're due for a cardiology follow-up from your visit 6 months ago. Would you like me to coordinate with Dr. Chen, your cardiologist, as well?",
      timestamp: "10:23 AM",
      insight: "Medical history analyzed + dual provider coordination",
    },
    {
      type: "customer",
      message: "Yes, that would be great. Do I need to bring anything?",
      timestamp: "10:24 AM",
    },
    { type: "processing", message: "Verifying insurance + EMR records + pharmacy data" },
    {
      type: "ai",
      message:
        "I've confirmed everything: Your Aetna PPO is active with $30 copay, your previous EKG results from March are in the system, and I see you're taking Lisinopril 10mg. Dr. Martinez has reviewed your file already. Please arrive 10 minutes early. I'm also sending you digital intake forms to complete now - saves 15 minutes in the office.",
      timestamp: "10:24 AM",
      insight: "Insurance verified + medical records accessed + pre-check sent",
    },
    { type: "customer", message: "Wow, this is so thorough. What if I need to reschedule?", timestamp: "10:25 AM" },
    {
      type: "ai",
      message:
        "You can text or call me anytime, 24/7. I'll automatically handle cancellations and offer alternative times. I've also added Dr. Chen's office to today's visit notes - if Dr. Martinez recommends a cardiac workup, I can book that immediately. You're confirmed for today at 2:30 PM. I'll text you a reminder at 1:30 PM with parking instructions.",
      timestamp: "10:25 AM",
      insight: "Appointment confirmed + smart scheduling enabled",
    },
    { type: "customer", message: "This is incredible service. Thank you!", timestamp: "10:26 AM" },
    {
      type: "ai",
      message:
        "You're very welcome! One more thing - I noticed your flu shot is due next month. Would you like me to automatically schedule that after today's visit? I can also schedule your annual physical now for June when Dr. Martinez typically books them. Your health is our priority!",
      timestamp: "10:26 AM",
      insight: "Proactive care management + future scheduling",
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
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl rounded-tr-sm px-4 py-2.5 shadow-lg">
                        <p className="text-white text-sm leading-relaxed">{step.message}</p>
                      </div>
                      <div className="flex items-center justify-end gap-2 mt-1 mr-3">
                        <span className="text-[10px] text-slate-600">{step.timestamp}</span>
                        {step.insight && (
                          <span className="text-[9px] text-blue-400 font-medium px-2 py-0.5 bg-blue-500/10 rounded-full border border-blue-500/20">
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
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" />
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
