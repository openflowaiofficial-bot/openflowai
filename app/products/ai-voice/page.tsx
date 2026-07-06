"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { BotPersonas } from "@/components/bot-personas"
import { NaturalConversationDemo } from "@/components/feature-demos/natural-conversation-demo"
import { SchedulingDemo } from "@/components/feature-demos/scheduling-demo"
import { CRMIntegrationDemo } from "@/components/feature-demos/crm-integration-demo"
import { AnalyticsDemo } from "@/components/feature-demos/analytics-demo"
import { StackedAnalyticsCards } from "@/components/stacked-analytics-cards"
import { useState } from "react"

export default function AIVoicePage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <Header />

      <section className="py-8 md:py-12 px-4 md:px-8">
        <div className="max-w-[1400px] mx-auto bg-gradient-to-br from-[#1a2332] to-[#2a3f5f] rounded-3xl overflow-hidden">
          {/* Hero Content */}
          <div className="px-4 sm:px-6 md:px-12 lg:px-16 pt-12 sm:pt-16 md:pt-20 pb-10 sm:pb-12 md:pb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-tight px-2">
                AI voice agents that answer every call, qualify every lead, and book more jobs
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
                OpenFlow AI's voice agents handle inbound and outbound calls around the clock — answering questions,
                qualifying leads, and scheduling appointments in natural conversation, then syncing every detail
                straight to your CRM.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4">
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-lg text-sm sm:text-base"
                >
                  Get a demo
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <a
                  href="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5 border border-white/20 text-sm sm:text-base"
                >
                  See how it works
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bot Personas Section - integrated into same container */}
          <BotPersonas />
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-12 lg:mb-16 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">Key Features</h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Everything you need to deliver exceptional customer experiences with AI voice agents
              </p>
            </div>

            {/* Feature 1 - Natural Conversations - Demo Left */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-24 lg:mb-32">
              <div className="order-2 md:order-1 px-4">
                <NaturalConversationDemo />
              </div>
              <div className="order-1 md:order-2 px-4">
                <div className="inline-block bg-blue-100 text-blue-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                  Natural Conversations
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                  Human-like dialogue that understands context
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                  Our AI agents engage in natural, flowing conversations that understand context, intent, and nuance. No
                  more robotic responses—just authentic interactions that feel genuinely human.
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "Context-aware responses",
                    "Emotion detection",
                    "Natural speech patterns",
                    "Intent recognition",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 2 - Smart Scheduling - Demo Right */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-24 lg:mb-32">
              <div className="px-4">
                <div className="inline-block bg-blue-100 text-blue-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                  Smart Scheduling
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                  Automated appointment booking
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                  Let your AI agent handle scheduling automatically. It checks availability, books appointments, sends
                  confirmations, and handles rescheduling—all without human intervention.
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "Real-time calendar sync",
                    "Automatic confirmations",
                    "Smart rescheduling",
                    "Timezone handling",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-4">
                <SchedulingDemo />
              </div>
            </div>

            {/* Feature 3 - CRM Integration - Demo Left */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-24 lg:mb-32">
              <div className="order-2 md:order-1 px-4">
                <CRMIntegrationDemo />
              </div>
              <div className="order-1 md:order-2 px-4">
                <div className="inline-block bg-blue-100 text-blue-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                  Seamless Integration
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Sync with your existing CRM</h3>
                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                  Connect with your favorite CRM platforms and sync call data in real-time. Every conversation is
                  automatically logged with detailed insights and action items.
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {["Salesforce integration", "HubSpot sync", "Custom API support", "Real-time data updates"].map(
                    (item, i) => (
                      <li key={i} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>

            {/* Feature 4 - Analytics - Demo Right */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-24 lg:mb-32">
              <div className="px-4">
                <div className="inline-block bg-blue-100 text-blue-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                  Insights & Analytics
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                  Track every conversation metric
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                  Get actionable insights from every customer interaction. Monitor performance, identify trends, and
                  continuously improve your customer experience with detailed analytics.
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {["Call performance metrics", "Sentiment analysis", "Conversion tracking", "Custom reporting"].map(
                    (item, i) => (
                      <li key={i} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div className="px-4">
                <AnalyticsDemo />
              </div>
            </div>

            {/* Feature 5 - Call Recording */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-24 lg:mb-32">
              <div className="order-2 md:order-1 px-4">
                <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 shadow-2xl">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Recording Active</div>
                        <div className="text-slate-400 text-sm">00:02:47</div>
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                      <div className="text-slate-300 text-sm mb-3">Live Transcription</div>
                      <div className="space-y-2 text-sm">
                        <p className="text-slate-400">
                          <span className="text-blue-400">Customer:</span> I need to reschedule my appointment for next
                          week.
                        </p>
                        <p className="text-slate-400">
                          <span className="text-blue-400">Agent:</span> I can help you with that. What day works best
                          for you?
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                        <div className="text-green-400 text-xs">Sentiment</div>
                        <div className="text-white font-semibold">Positive</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                        <div className="text-blue-400 text-xs">Quality</div>
                        <div className="text-white font-semibold">96%</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                        <div className="text-blue-400 text-xs">Tags</div>
                        <div className="text-white font-semibold">3</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 px-4">
                <div className="inline-block bg-red-100 text-red-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                  Quality Assurance
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                  Call Recording & Transcription
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                  Every conversation is automatically recorded and transcribed in real-time. Review calls, analyze
                  sentiment, and ensure quality standards are met with comprehensive call recording features.
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    "Automatic call recording",
                    "Real-time transcription",
                    "Sentiment analysis",
                    "Searchable call archive",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 6 - Lead Qualification */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-24 lg:mb-32">
              <div className="px-4">
                <div className="inline-block bg-blue-100 text-blue-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                  Smart Routing
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                  AI-Powered Lead Qualification
                </h3>
                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                  Automatically score and qualify leads based on conversation data. The AI identifies high-intent
                  prospects and routes them to the right team member for maximum conversion.
                </p>
                <ul className="space-y-2 sm:space-y-3">
                  {["Automatic lead scoring", "Intent detection", "Smart routing rules", "Priority flagging"].map(
                    (item, i) => (
                      <li key={i} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div className="px-4">
                <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 shadow-2xl">
                  <div className="space-y-4">
                    <div className="text-white font-semibold mb-6">Lead Scoring Dashboard</div>
                    <div className="space-y-3">
                      <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-medium">Sarah Mitchell</span>
                          <span className="px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold">
                            Hot Lead
                          </span>
                        </div>
                        <div className="flex gap-2 text-xs text-slate-300">
                          <span className="px-2 py-1 rounded bg-white/10">Enterprise</span>
                          <span className="px-2 py-1 rounded bg-white/10">High Budget</span>
                        </div>
                        <div className="mt-3">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-slate-300">Lead Score</span>
                            <span className="text-green-400 font-semibold">92/100</span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-2">
                            <div className="bg-gradient-to-r from-green-500 to-emerald-400 h-2 rounded-full w-[92%]" />
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-white font-medium">John Davis</span>
                          <span className="px-3 py-1 rounded-full bg-yellow-500 text-white text-xs font-semibold">
                            Warm Lead
                          </span>
                        </div>
                        <div className="flex gap-2 text-xs text-slate-300">
                          <span className="px-2 py-1 rounded bg-white/10">SMB</span>
                          <span className="px-2 py-1 rounded bg-white/10">Researching</span>
                        </div>
                        <div className="mt-3">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-slate-300">Lead Score</span>
                            <span className="text-yellow-400 font-semibold">67/100</span>
                          </div>
                          <div className="w-full bg-white/10 rounded-full h-2">
                            <div className="bg-gradient-to-r from-yellow-500 to-orange-400 h-2 rounded-full w-[67%]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stacked Analytics Cards Section */}
      <StackedAnalyticsCards />

      {/* Footer Section */}
      <Footer />
    </div>
  )
}
