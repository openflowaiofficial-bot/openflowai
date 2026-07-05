"use client"

import Header from "@/components/header"
import { Phone, MessageSquare, Calendar, TrendingUp, Clock, Users, Star, Scissors, Palette } from "lucide-react"
import { useEffect, useState } from "react"
import { SalonDemo } from "@/components/industry-demos/salon-demo"
import { DemoModal } from "@/components/demo-modal"

export default function SalonsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#1a2332] via-[#2a3f5f] to-[#1a2332] py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-72 h-72 bg-rose-500 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500/20 to-amber-500/20 px-5 py-2.5 mb-8 border border-rose-500/30 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <Scissors className="w-4 h-4 text-rose-400" />
                <span className="text-sm font-medium text-rose-300">Salons & Beauty</span>
              </div>

              <h1
                className={`text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                Keep Your Chairs Full with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400">
                  Intelligent Booking
                </span>
              </h1>

              <p
                className={`text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                AI that understands hair, nails, and beauty services. Book appointments, manage stylists, and reduce
                no-shows automatically.
              </p>

              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 transition-all duration-300 hover:scale-105"
                >
                  Start Free Trial
                </button>
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 text-sm font-semibold text-white hover:bg-white/20 transition-all duration-300"
                >
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "50%", label: "More Bookings", icon: Calendar },
                { value: "24/7", label: "Booking Available", icon: Clock },
                { value: "70%", label: "Fewer No-Shows", icon: Users },
                { value: "5 min", label: "Avg Response Time", icon: Star },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-rose-100 to-amber-100 mb-4">
                    <stat.icon className="w-6 h-6 text-rose-600" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Animated Conversation Demo Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">See How It Works</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Watch our AI handle a salon booking from start to finish
              </p>
            </div>
            <SalonDemo />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
                Designed for Beauty Professionals
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From cuts to color, our AI understands salon services and helps you maximize every appointment slot.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Calendar,
                  title: "Stylist-Specific Booking",
                  description: "Clients can request their favorite stylist or get matched with available talent.",
                  color: "rose",
                },
                {
                  icon: Palette,
                  title: "Service Combinations",
                  description: "Handle complex appointments with multiple services and accurate time estimates.",
                  color: "amber",
                },
                {
                  icon: Phone,
                  title: "Instant Confirmations",
                  description: "Automatic booking confirmations via call or text with all appointment details.",
                  color: "rose",
                },
                {
                  icon: MessageSquare,
                  title: "Smart Reminders",
                  description: "Reduce no-shows with personalized reminders and easy rescheduling options.",
                  color: "amber",
                },
                {
                  icon: TrendingUp,
                  title: "Retail Recommendations",
                  description: "Suggest products based on services booked and client hair/skin type.",
                  color: "rose",
                },
                {
                  icon: Users,
                  title: "Waitlist Management",
                  description: "Automatically fill cancellations by notifying waitlisted clients.",
                  color: "amber",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300"
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color === "rose" ? "from-rose-100 to-rose-50" : "from-amber-100 to-amber-50"} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon
                      className={`w-7 h-7 ${feature.color === "rose" ? "text-rose-600" : "text-amber-600"}`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#1a2332] to-[#2a3f5f]">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Ready to Fill Every Chair?</h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
              Join salons across the country using OpenFlow AI to streamline bookings and grow revenue.
            </p>
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:shadow-rose-500/25 transition-all duration-300 hover:scale-105"
            >
              Get a Demo
            </button>
          </div>
        </section>
      </div>

      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </>
  )
}
