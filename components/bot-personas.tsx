"use client"

import { useState, useEffect } from "react"
import { Phone, CalendarClock, UserCircle, AlertCircle } from "lucide-react"

const useCases = [
  {
    id: "sales",
    title: "Inbound Sales",
    icon: Phone,
    persona: "Alex — Sales Specialist",
    conversation: [
      { speaker: "Customer", text: "Hi, I'd like to learn more about what you offer." },
      { speaker: "AI", action: "Detecting intent: Sales inquiry" },
      { speaker: "AI", action: "Pulling up offerings & pricing..." },
      {
        speaker: "Alex",
        text: "Happy to help! We have a few options depending on your needs. Roughly how large is your team, and what are you hoping to solve?",
        insights: ["Qualifying the lead", "Engaged with intent"],
      },
      { speaker: "Customer", text: "We're around 20 people and keep missing inbound calls." },
      { speaker: "AI", action: "Intent: Qualifying use case" },
      {
        speaker: "Alex",
        text: "That's exactly what we handle. The best next step is a short walkthrough tailored to your setup — I have tomorrow at 10 AM or 2 PM open. Which works?",
        insights: ["Matched use case", "Proposing a demo"],
      },
      { speaker: "Customer", text: "Tomorrow at 2 works." },
      { speaker: "AI", action: "Intent: Schedule demo" },
      { speaker: "AI", action: "Booking on the calendar..." },
      {
        speaker: "Alex",
        text: "Booked for tomorrow at 2 PM — I'll send a confirmation and a short prep note so we make the most of it. Talk soon!",
        insights: ["Booked appointment", "Sent confirmation"],
      },
    ],
  },
  {
    id: "scheduling",
    title: "Appointment Booking",
    icon: CalendarClock,
    persona: "Maria — Scheduling Specialist",
    conversation: [
      { speaker: "Customer", text: "I need to book an appointment." },
      { speaker: "AI", action: "Detecting intent: Scheduling request" },
      {
        speaker: "Maria",
        text: "Absolutely, I can take care of that. Is this a new consultation or a follow-up on an existing account?",
        insights: ["Gathering context"],
      },
      { speaker: "Customer", text: "A new consultation." },
      { speaker: "AI", action: "Checking calendar availability..." },
      { speaker: "AI", action: "Filtering to open 30-minute slots" },
      {
        speaker: "Maria",
        text: "Great. I have openings today at 2:00 PM or 4:30 PM, both 30 minutes. Which time works better for you?",
        insights: ["Real-time availability", "Clear options"],
      },
      { speaker: "Customer", text: "2 PM works." },
      { speaker: "AI", action: "Booking appointment..." },
      {
        speaker: "Maria",
        text: "Done — you're set for 2:00 PM today. I'm texting you a confirmation now and a reminder an hour before. Anything else I can help with?",
        insights: ["Booked appointment", "Sent SMS confirmation"],
      },
    ],
  },
  {
    id: "account",
    title: "Account Management",
    icon: UserCircle,
    persona: "Jordan - Account Manager",
    conversation: [
      { speaker: "Customer", text: "Can you tell me about my recent usage?" },
      { speaker: "AI", action: "Pulling account analytics..." },
      { speaker: "AI", action: "Analyzing usage trends..." },
      {
        speaker: "Jordan",
        text: "I pulled up your account. Over the past 30 days, you've processed 1,247 calls with a 94% satisfaction rate. That's a 12% increase from last month!",
        insights: ["Retrieved real-time data", "Identified growth trend"],
      },
      { speaker: "Customer", text: "Are there ways to optimize our setup?" },
      { speaker: "AI", action: "Intent: Optimization request" },
      { speaker: "AI", action: "Analyzing usage patterns for recommendations..." },
      {
        speaker: "Jordan",
        text: "Great question! Based on your call volume patterns, I recommend enabling our SMS follow-up feature. Similar businesses see 23% better engagement with it.",
        insights: ["Proactive suggestion", "Data-driven recommendation"],
      },
      { speaker: "Customer", text: "Sounds interesting. How do we set that up?" },
      { speaker: "AI", action: "Preparing trial activation..." },
      {
        speaker: "Jordan",
        text: "I can activate a 14-day free trial for you right now. You'll get SMS templates, automated scheduling, and analytics. Should I go ahead and enable it?",
        insights: ["Frictionless trial offer", "Clear value proposition"],
      },
    ],
  },
  {
    id: "troubleshooting",
    title: "Tech Support",
    icon: AlertCircle,
    persona: "Casey - Tech Support",
    conversation: [
      { speaker: "Customer", text: "My app isn't syncing with my CRM." },
      { speaker: "AI", action: "Detecting issue: Integration sync failure" },
      { speaker: "AI", action: "Checking system status..." },
      {
        speaker: "Casey",
        text: "I understand how frustrating sync issues can be. Let me help you resolve this quickly. Which CRM are you using - Salesforce, HubSpot, or another platform?",
        insights: ["Acknowledged frustration", "Systematic diagnosis"],
      },
      { speaker: "Customer", text: "It's Salesforce." },
      { speaker: "AI", action: "Accessing integration logs..." },
      { speaker: "AI", action: "Identified: Auth token expired 6 hours ago" },
      {
        speaker: "Casey",
        text: "Found it! Your Salesforce connection token expired this morning at 6 AM. This is a quick fix - I'm sending you a secure re-authentication link right now.",
        insights: ["Root cause identified", "Providing immediate solution"],
      },
      { speaker: "Customer", text: "Got it. What do I click?" },
      { speaker: "AI", action: "Generating secure auth link..." },
      {
        speaker: "Casey",
        text: "Click the blue 'Reconnect Salesforce' button in the text I just sent. Once you authorize, the sync will resume automatically within 2 minutes. I'll monitor it and confirm once it's working.",
        insights: ["Clear instructions", "Proactive monitoring"],
      },
    ],
  },
]

export function BotPersonas() {
  const [activeTab, setActiveTab] = useState("sales")
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  const activeCase = useCases.find((uc) => uc.id === activeTab) || useCases[0]

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentMessageIndex < activeCase.conversation.length) {
        setCurrentMessageIndex((prev) => prev + 1)
      }
    }, 1500)

    return () => clearTimeout(timer)
  }, [currentMessageIndex, activeCase.conversation.length])

  useEffect(() => {
    setCurrentMessageIndex(0)
  }, [activeTab])

  return (
    <div className="px-6 md:px-12 lg:px-16 pb-16 md:pb-20">
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {useCases.map((useCase) => {
          const TabIcon = useCase.icon
          return (
            <button
              key={useCase.id}
              onClick={() => setActiveTab(useCase.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === useCase.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              <TabIcon className="w-3.5 h-3.5" />
              {useCase.title}
            </button>
          )
        })}
      </div>

      <div className="grid md:grid-cols-[280px_1fr] gap-6 max-w-6xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <activeCase.icon className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Active Agent</h3>
              <p className="text-xs text-gray-400">{activeCase.persona}</p>
            </div>
          </div>

          <div className="space-y-2 mt-6">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400">Status</span>
              <span className="flex items-center gap-1.5 text-green-400">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Active
              </span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400">Response Time</span>
              <span className="text-white">~0.8s</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-400">Confidence</span>
              <span className="text-white">98%</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 shadow-2xl border border-white/10">
          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
            {activeCase.conversation.slice(0, currentMessageIndex).map((msg, idx) => (
              <div key={idx} className="animate-fadeIn">
                {msg.speaker === "AI" ? (
                  <div className="flex items-center gap-2 text-xs text-blue-400 italic py-2 px-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce" />
                      <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                    {msg.action}
                  </div>
                ) : (
                  <>
                    <div
                      className={`rounded-xl p-3.5 ${
                        msg.speaker === "Customer" ? "bg-white/10 text-white ml-12" : "bg-white text-gray-900 mr-12"
                      }`}
                    >
                      <div className="text-xs font-medium mb-1 opacity-60">{msg.speaker}</div>
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                    </div>
                    {msg.insights && (
                      <div className="flex flex-wrap gap-1.5 mt-1.5 mr-12 justify-end">
                        {msg.insights.map((insight, insightIdx) => (
                          <span
                            key={insightIdx}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                          >
                            ✓ {insight}
                          </span>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
