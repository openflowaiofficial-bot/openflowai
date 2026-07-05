"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { AICallSimulation } from "@/components/ai-call-simulation"
// Import feature demo components
import { SMSAutoResponseDemo } from "@/components/feature-demos/sms-auto-response-demo"
import { SMSReminderDemo } from "@/components/feature-demos/sms-reminder-demo"
import { SMSSequenceDemo } from "@/components/feature-demos/sms-sequence-demo"
import { SMSTwoWayDemo } from "@/components/feature-demos/sms-twoway-demo"
import { useState, useEffect } from "react"
import React from "react"
import { DemoModal } from "@/components/demo-modal"

function AnimatedSMSIcon() {
  const [shape, setShape] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setShape((prev) => (prev + 1) % 3)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex justify-center mb-8">
      <div className="relative w-24 h-24">
        <div
          className={`absolute inset-0 transition-all duration-700 ${
            shape === 0 ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-xl">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              />
            </svg>
          </div>
        </div>
        <div
          className={`absolute inset-0 transition-all duration-700 ${
            shape === 1 ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-xl">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
        <div
          className={`absolute inset-0 transition-all duration-700 ${
            shape === 2 ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="w-full h-full rotate-45 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-xl">
            <svg className="w-12 h-12 text-white -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

function RotatingText() {
  const words = ["Personalize", "Automate", "Scale"]
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="relative inline-flex">
      {words.map((word, index) => (
        <span
          key={word}
          className={`transition-all duration-500 ${
            index === currentIndex
              ? "opacity-100 translate-y-0"
              : index === (currentIndex - 1 + words.length) % words.length
                ? "opacity-0 -translate-y-8"
                : "opacity-0 translate-y-8"
          } ${index !== currentIndex ? "absolute left-0 top-0" : ""}`}
        >
          {word}
        </span>
      ))}
    </span>
  )
}

export default function SMSAutomationPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#1a2332] to-[#2a3f5f] px-4 sm:px-6 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSMSIcon />

              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4 sm:mb-6 px-2">
                <span className="text-cyan-400">
                  <RotatingText />
                </span>{" "}
                <span className="text-white">Customer Engagement with SMS</span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
                Send intelligent, personalized SMS messages that drive engagement, automate workflows, and convert
                leads—all without lifting a finger.
              </p>

              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="rounded-full bg-cyan-600 px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-white shadow-lg hover:bg-cyan-700 transition-all hover:shadow-xl hover:scale-105 w-full sm:w-auto"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Call Simulation Section */}
      <AICallSimulation />

      {/* Key Features Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16 px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
                SMS Features That Convert
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Powerful automation and personalization tools built for modern businesses
              </p>
            </div>

            <div className="mb-16 md:mb-24 lg:mb-32">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="order-2 lg:order-1 px-4">
                  <SMSAutoResponseDemo />
                </div>
                <div className="order-1 lg:order-2 space-y-4 sm:space-y-6 px-4">
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium">
                    Instant Response
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Automated Responses</h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    Never miss a customer inquiry. Our AI responds instantly to common questions, provides information,
                    and guides customers to the next step—24/7.
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      "Instant replies to FAQs",
                      "Business hours information",
                      "Product availability checks",
                      "Pricing inquiries",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3 sm:gap-4 pt-4">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-3 sm:p-4 flex-1">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">99.8%</div>
                      <div className="text-xs sm:text-sm text-gray-600">Uptime</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-3 sm:p-4 flex-1">
                      <div className="text-xl sm:text-2xl font-bold text-green-600">{"<"}1s</div>
                      <div className="text-xs sm:text-sm text-gray-600">Response</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16 md:mb-24 lg:mb-32">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="space-y-4 sm:space-y-6 px-4">
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs sm:text-sm font-medium">
                    Smart Scheduling
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Appointment Reminders</h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    Reduce no-shows by up to 80% with automated appointment reminders sent at optimal times before the
                    scheduled appointment.
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      "48h, 24h, and 2h reminders",
                      "Confirmation requests",
                      "Rescheduling options",
                      "Calendar integration",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3 sm:gap-4 pt-4">
                    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-3 sm:p-4 flex-1">
                      <div className="text-xl sm:text-2xl font-bold text-indigo-600">80%</div>
                      <div className="text-xs sm:text-sm text-gray-600">Fewer No-Shows</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-3 sm:p-4 flex-1">
                      <div className="text-xl sm:text-2xl font-bold text-purple-600">3x</div>
                      <div className="text-xs sm:text-sm text-gray-600">More Confirmations</div>
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <SMSReminderDemo />
                </div>
              </div>
            </div>

            <div className="mb-16 md:mb-24 lg:mb-32">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="order-2 lg:order-1 px-4">
                  <SMSSequenceDemo />
                </div>
                <div className="order-1 lg:order-2 space-y-4 sm:space-y-6 px-4">
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs sm:text-sm font-medium">
                    Lead Nurturing
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Follow-Up Sequences</h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    Create sophisticated drip campaigns that nurture leads over time with perfectly timed messages that
                    convert.
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      "Timed message sequences",
                      "Behavior-triggered messages",
                      "A/B testing support",
                      "Conversion tracking",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3 sm:gap-4 pt-4">
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-3 sm:p-4 flex-1">
                      <div className="text-xl sm:text-2xl font-bold text-orange-600">45%</div>
                      <div className="text-xs sm:text-sm text-gray-600">Higher Conversion</div>
                    </div>
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-3 sm:p-4 flex-1">
                      <div className="text-xl sm:text-2xl font-bold text-yellow-600">4.2x</div>
                      <div className="text-xs sm:text-sm text-gray-600">Better ROI</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16 md:mb-24 lg:mb-32">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="space-y-4 sm:space-y-6 px-4">
                  <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-teal-100 text-teal-700 text-xs sm:text-sm font-medium">
                    Intelligent Chat
                  </div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Two-Way Conversations</h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    Engage in natural back-and-forth conversations with customers. Our AI understands context and
                    responds appropriately to complex inquiries.
                  </p>
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      "Natural language processing",
                      "Context-aware responses",
                      "Intent detection",
                      "Seamless handoff to humans",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3">
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3 sm:gap-4 pt-4">
                    <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-3 sm:p-4 flex-1">
                      <div className="text-xl sm:text-2xl font-bold text-teal-600">92%</div>
                      <div className="text-xs sm:text-sm text-gray-600">Satisfaction Rate</div>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-3 sm:p-4 flex-1">
                      <div className="text-xl sm:text-2xl font-bold text-cyan-600">5.8x</div>
                      <div className="text-xs sm:text-sm text-gray-600">Faster Resolution</div>
                    </div>
                  </div>
                </div>
                <div className="px-4">
                  <SMSTwoWayDemo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  )
}
