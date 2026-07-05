"use client"

import Header from "@/components/header"
import { Phone, Calendar, TrendingUp, Clock, Users, Star, Thermometer, Fan } from "lucide-react"
import { useEffect, useState } from "react"
import { HVACDemo } from "@/components/industry-demos/hvac-demo"
import { DemoModal } from "@/components/demo-modal"

export default function HVACPage() {
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
            <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 px-5 py-2.5 mb-8 border border-emerald-500/30 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <Thermometer className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-300">HVAC Services</span>
              </div>

              <h1
                className={`text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                Keep Customers Cool with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  AI-Powered Service
                </span>
              </h1>

              <p
                className={`text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                When the AC breaks on the hottest day, your AI answers. Handle seasonal rushes, emergency calls, and
                maintenance scheduling effortlessly.
              </p>

              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <button
                  onClick={() => setIsDemoModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105"
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
                { value: "3x", label: "Peak Season Capacity", icon: TrendingUp },
                { value: "24/7", label: "Emergency Coverage", icon: Clock },
                { value: "55%", label: "More Maintenance Plans", icon: Calendar },
                { value: "4.9", label: "Customer Rating", icon: Star },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 mb-4">
                    <stat.icon className="w-6 h-6 text-emerald-600" />
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
                Watch our AI handle an HVAC service call from start to finish
              </p>
            </div>
            <HVACDemo />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Built for HVAC Companies</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                AI that handles the summer rush and winter emergencies while you focus on keeping homes comfortable.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Fan,
                  title: "Seasonal Rush Handling",
                  description: "Scale instantly when heatwaves or cold snaps spike call volume 10x.",
                  color: "emerald",
                },
                {
                  icon: Calendar,
                  title: "Maintenance Scheduling",
                  description: "Book tune-ups and filter changes with optimal routing for technicians.",
                  color: "teal",
                },
                {
                  icon: Thermometer,
                  title: "System Diagnostics",
                  description: "Gather symptoms and system info to prepare techs before arrival.",
                  color: "emerald",
                },
                {
                  icon: TrendingUp,
                  title: "Service Plan Upsells",
                  description: "Convert one-time calls into recurring maintenance agreements.",
                  color: "teal",
                },
                {
                  icon: Phone,
                  title: "Emergency Prioritization",
                  description: "Identify no-heat and no-cool emergencies for immediate dispatch.",
                  color: "emerald",
                },
                {
                  icon: Users,
                  title: "Warranty Verification",
                  description: "Check warranty status and schedule covered repairs automatically.",
                  color: "teal",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300"
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color === "emerald" ? "from-emerald-100 to-emerald-50" : "from-teal-100 to-teal-50"} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon
                      className={`w-7 h-7 ${feature.color === "emerald" ? "text-emerald-600" : "text-teal-600"}`}
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
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Ready for Peak Season?</h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
              Join HVAC companies using OpenFlow AI to handle any call volume with ease.
            </p>
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
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
