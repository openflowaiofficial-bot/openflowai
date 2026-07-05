"use client"

import { useEffect } from "react"

import { useState } from "react"

import Header from "@/components/header"
import { Phone, MessageSquare, Calendar, TrendingUp, Users, Star, Wrench, Hammer } from "lucide-react"
import { HandymanDemo } from "@/components/industry-demos/handyman-demo"
import { DemoModal } from "@/components/demo-modal"

export default function HandymanPage() {
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
            <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500/20 to-yellow-500/20 px-5 py-2.5 mb-8 border border-orange-500/30 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <Wrench className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-medium text-orange-300">Handyman Services</span>
              </div>

              <h1
                className={`text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                Never Miss a Job with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                  AI-Powered Dispatch
                </span>
              </h1>

              <p
                className={`text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                Answer calls, book jobs, and manage your schedule while you&apos;re on site. Our AI handles customer
                inquiries so you can focus on the work.
              </p>

              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 hover:scale-105"
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
                { value: "40%", label: "More Jobs Booked", icon: Calendar },
                { value: "100%", label: "Calls Answered", icon: Phone },
                { value: "$2K+", label: "Avg Monthly Gain", icon: TrendingUp },
                { value: "4.8", label: "Customer Rating", icon: Star },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-orange-100 to-yellow-100 mb-4">
                    <stat.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray-500 text-center">Illustrative example — actual results vary by business.</p>
          </div>
        </section>

        {/* Animated Conversation Demo Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">See How It Works</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Watch our AI handle a service request from start to finish
              </p>
            </div>
            <HandymanDemo />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Your Virtual Office Manager</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Professional call handling that understands home repair services and books jobs while you work.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Phone,
                  title: "Professional Call Handling",
                  description: "Every call answered with your business name and professional service.",
                  color: "orange",
                },
                {
                  icon: Calendar,
                  title: "Smart Scheduling",
                  description: "Books appointments based on job type, location, and your availability.",
                  color: "yellow",
                },
                {
                  icon: MessageSquare,
                  title: "Job Details Capture",
                  description: "Gathers all necessary information about the repair needed before you arrive.",
                  color: "orange",
                },
                {
                  icon: Hammer,
                  title: "Service Estimation",
                  description: "Provides accurate time and cost estimates based on job descriptions.",
                  color: "yellow",
                },
                {
                  icon: TrendingUp,
                  title: "Follow-Up Automation",
                  description: "Automatic follow-ups for quotes and completed job satisfaction.",
                  color: "orange",
                },
                {
                  icon: Users,
                  title: "Emergency Routing",
                  description: "Priority handling for urgent repairs with immediate notifications.",
                  color: "yellow",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300"
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color === "orange" ? "from-orange-100 to-orange-50" : "from-yellow-100 to-yellow-50"} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon
                      className={`w-7 h-7 ${feature.color === "orange" ? "text-orange-600" : "text-yellow-600"}`}
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
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Ready to Book More Jobs?</h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
              Join handyman professionals using OpenFlow AI to grow their business without missing calls.
            </p>
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105"
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
