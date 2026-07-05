"use client"

import Header from "@/components/header"
import { Phone, MessageSquare, Calendar, TrendingUp, Clock, Users, Star, Sparkles, Heart } from "lucide-react"
import { useEffect, useState } from "react"
import { SpaDemo } from "@/components/industry-demos/spa-demo"
import { DemoModal } from "@/components/demo-modal"

export default function SpasPage() {
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
            <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 px-5 py-2.5 mb-8 border border-pink-500/30 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <Sparkles className="w-4 h-4 text-pink-400" />
                <span className="text-sm font-medium text-pink-300">Spas & Wellness Centers</span>
              </div>

              <h1
                className={`text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                Elevate Your Spa Experience with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  AI-Powered Booking
                </span>
              </h1>

              <p
                className={`text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                Let your clients book treatments, ask about services, and get personalized recommendations 24/7 while
                your team focuses on delivering exceptional wellness experiences.
              </p>

              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 transition-all duration-300 hover:scale-105"
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
                { value: "45%", label: "Increase in Bookings", icon: Calendar },
                { value: "24/7", label: "Client Support", icon: Clock },
                { value: "60%", label: "Less No-Shows", icon: Users },
                { value: "4.9", label: "Client Satisfaction", icon: Star },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-pink-100 to-purple-100 mb-4">
                    <stat.icon className="w-6 h-6 text-pink-600" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">See How It Works</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Watch our AI handle a spa booking from start to finish
              </p>
            </div>
            <SpaDemo />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Built for Wellness Businesses</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our AI understands spa terminology, treatment durations, and client preferences to deliver a seamless
                booking experience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Calendar,
                  title: "Smart Treatment Booking",
                  description:
                    "AI handles complex bookings with multiple services, therapist preferences, and room availability.",
                  color: "pink",
                },
                {
                  icon: MessageSquare,
                  title: "Service Recommendations",
                  description: "Intelligently suggest treatments based on client history and stated needs.",
                  color: "purple",
                },
                {
                  icon: Phone,
                  title: "24/7 Availability",
                  description: "Never miss a booking opportunity, even after hours or during busy treatment times.",
                  color: "pink",
                },
                {
                  icon: Heart,
                  title: "Personalized Experience",
                  description: "Remember client preferences, allergies, and favorite therapists for every interaction.",
                  color: "purple",
                },
                {
                  icon: TrendingUp,
                  title: "Upsell Opportunities",
                  description: "Naturally suggest add-on services and packages to increase average booking value.",
                  color: "pink",
                },
                {
                  icon: Users,
                  title: "Group Bookings",
                  description: "Handle spa parties, couples treatments, and group wellness events with ease.",
                  color: "purple",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-pink-200 hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-300"
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color === "pink" ? "from-pink-100 to-pink-50" : "from-purple-100 to-purple-50"} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon
                      className={`w-7 h-7 ${feature.color === "pink" ? "text-pink-600" : "text-purple-600"}`}
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
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Ready to Transform Your Spa?</h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
              Join leading spas and wellness centers using OpenFlow AI to deliver exceptional client experiences.
            </p>
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105"
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
