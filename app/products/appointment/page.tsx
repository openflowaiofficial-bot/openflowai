"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { CalendarSyncDemo } from "@/components/feature-demos/calendar-sync-demo"
import { SmartSchedulingDemo } from "@/components/feature-demos/smart-scheduling-demo"
import { ReminderSystemDemo } from "@/components/feature-demos/reminder-system-demo"
import { BookingFlowDemo } from "@/components/feature-demos/booking-flow-demo"
import { Check, Calendar, MessageSquare } from "lucide-react"
import { useState, useEffect } from "react"

function AnimatedMessageIcon() {
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
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-xl">
            <MessageSquare className="w-12 h-12 text-white" strokeWidth={2} />
          </div>
        </div>
        <div
          className={`absolute inset-0 transition-all duration-700 ${
            shape === 1 ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-xl">
            <Calendar className="w-12 h-12 text-white" strokeWidth={2} />
          </div>
        </div>
        <div
          className={`absolute inset-0 transition-all duration-700 ${
            shape === 2 ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="w-full h-full rotate-45 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-xl">
            <Check className="w-12 h-12 text-white -rotate-45" strokeWidth={3} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AppointmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-20 md:pt-24 lg:pt-28 pb-8 md:pb-12 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#1a2332] to-[#2a3f5f] px-6 sm:px-10 md:px-14 lg:px-20 py-16 sm:py-20 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedMessageIcon />

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
                Automated Booking System That Never Sleeps
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let customers book appointments via phone or SMS while AI syncs with your calendar in real-time.
              </p>
              <button className="rounded-full bg-blue-600 px-8 py-4 text-base font-medium text-white shadow-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="rounded-3xl bg-gray-50 px-6 sm:px-10 md:px-14 lg:px-20 py-16 md:py-20 lg:py-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 text-gray-900">Key Features</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Powerful automation tools that handle scheduling from start to finish
              </p>
            </div>

            <div>
              {/* Feature 1: Real-time Calendar Sync */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20 md:mb-24 lg:mb-28">
                <div className="order-2 md:order-1">
                  <CalendarSyncDemo />
                </div>
                <div className="order-1 md:order-2">
                  <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                    Integration
                  </span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-900">
                    Real-time Calendar Sync
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                    Seamlessly connect with Google Calendar, Outlook, Apple Calendar, and more. Every booking instantly
                    updates across all platforms.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Two-way sync with all major calendar platforms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Automatic conflict detection and prevention</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Instant updates across all devices</span>
                    </li>
                  </ul>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 bg-white rounded-xl shadow-sm border border-blue-100">
                      <p className="text-2xl font-semibold text-blue-700">100%</p>
                      <p className="text-sm text-blue-600 mt-1">Sync accuracy</p>
                    </div>
                    <div className="p-5 bg-white rounded-xl shadow-sm border border-blue-100">
                      <p className="text-2xl font-semibold text-blue-700">&lt;1s</p>
                      <p className="text-sm text-blue-600 mt-1">Sync speed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2: Smart Scheduling */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20 md:mb-24 lg:mb-28">
                <div>
                  <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                    AI-Powered
                  </span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-900">
                    Smart Availability Detection
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                    AI analyzes your schedule patterns, preferences, and availability to suggest optimal booking times
                    for both you and your customers.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Learns your scheduling preferences over time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Considers buffer times and travel between appointments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Optimizes for customer convenience and business efficiency</span>
                    </li>
                  </ul>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 bg-white rounded-xl shadow-sm border border-blue-100">
                      <p className="text-2xl font-semibold text-blue-700">40%</p>
                      <p className="text-sm text-blue-600 mt-1">More bookings</p>
                    </div>
                    <div className="p-5 bg-white rounded-xl shadow-sm border border-blue-100">
                      <p className="text-2xl font-semibold text-blue-700">95%</p>
                      <p className="text-sm text-blue-600 mt-1">Customer satisfaction</p>
                    </div>
                  </div>
                </div>
                <div>
                  <SmartSchedulingDemo />
                </div>
              </div>

              {/* Feature 3: Automated Reminders */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-20 md:mb-24 lg:mb-28">
                <div className="order-2 md:order-1">
                  <ReminderSystemDemo />
                </div>
                <div className="order-1 md:order-2">
                  <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                    Automation
                  </span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-900">
                    Automatic Reminder System
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                    Reduce no-shows with intelligent, multi-channel reminders sent at optimal times via SMS, email, and
                    push notifications.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Customizable reminder schedules (24h, 2h, 30min before)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Multi-channel delivery for maximum reach</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Easy one-click reschedule and cancel options</span>
                    </li>
                  </ul>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 bg-white rounded-xl shadow-sm border border-green-100">
                      <p className="text-2xl font-semibold text-green-700">68%</p>
                      <p className="text-sm text-green-600 mt-1">Fewer no-shows</p>
                    </div>
                    <div className="p-5 bg-white rounded-xl shadow-sm border border-green-100">
                      <p className="text-2xl font-semibold text-green-700">97%</p>
                      <p className="text-sm text-green-600 mt-1">Show-up rate</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 4: End-to-End Booking Flow */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                    Complete Solution
                  </span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gray-900">
                    End-to-End Booking Flow
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                    From first contact to confirmed appointment, every step is automated. Your customers get a seamless
                    experience while you save hours of admin work.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Handles initial inquiry to final confirmation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Automatic follow-ups and rescheduling requests</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Integration with payment processing if needed</span>
                    </li>
                  </ul>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 bg-white rounded-xl shadow-sm border border-blue-100">
                      <p className="text-2xl font-semibold text-blue-700">45s</p>
                      <p className="text-sm text-blue-600 mt-1">Avg. booking time</p>
                    </div>
                    <div className="p-5 bg-white rounded-xl shadow-sm border border-blue-100">
                      <p className="text-2xl font-semibold text-blue-700">24/7</p>
                      <p className="text-sm text-blue-600 mt-1">Available</p>
                    </div>
                  </div>
                </div>
                <div>
                  <BookingFlowDemo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
