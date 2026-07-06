"use client"

import Header from "@/components/header"
import { MessageSquare, Calendar, TrendingUp, Clock, Users, Star, Shield, FileText } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { InsuranceDemo } from "@/components/industry-demos/insurance-demo"

export default function InsurancePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a2332] via-[#2a3f5f] to-[#1a2332] py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-500/20 px-5 py-2.5 mb-8 border border-blue-500/30 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Insurance Agencies</span>
            </div>

            <h1
              className={`text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Convert More Leads with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-400">
                AI-Powered Engagement
              </span>
            </h1>

            <p
              className={`text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Qualify leads, answer policy questions, and schedule consultations 24/7. Never lose a prospect to
              voicemail again.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                Start Free Trial
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 text-sm font-semibold text-white hover:bg-white/20 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "65%", label: "Lead Conversion", icon: TrendingUp },
              { value: "24/7", label: "Quote Availability", icon: Clock },
              { value: "40%", label: "More Appointments", icon: Calendar },
              { value: "4.9", label: "Client Satisfaction", icon: Star },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-blue-100 mb-4">
                  <stat.icon className="w-6 h-6 text-blue-600" />
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
              Watch our AI handle an insurance inquiry from start to finish
            </p>
          </div>
          <InsuranceDemo />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">Built for Insurance Professionals</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              AI that understands insurance products and helps qualify leads while you focus on closing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Lead Qualification",
                description: "Gather coverage needs, budget, and timeline before scheduling consultations.",
                color: "indigo",
              },
              {
                icon: FileText,
                title: "Quote Information",
                description: "Collect all necessary details for accurate quotes before the call.",
                color: "violet",
              },
              {
                icon: Calendar,
                title: "Consultation Booking",
                description: "Schedule appointments based on agent availability and lead priority.",
                color: "indigo",
              },
              {
                icon: MessageSquare,
                title: "Policy Questions",
                description: "Answer common questions about coverage, claims, and renewals.",
                color: "violet",
              },
              {
                icon: TrendingUp,
                title: "Cross-Sell Opportunities",
                description: "Identify opportunities to bundle policies and increase coverage.",
                color: "indigo",
              },
              {
                icon: Users,
                title: "Renewal Reminders",
                description: "Proactive outreach for policy renewals and coverage reviews.",
                color: "violet",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color === "indigo" ? "from-blue-100 to-blue-50" : "from-blue-100 to-blue-50"} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon
                    className={`w-7 h-7 ${feature.color === "indigo" ? "text-blue-600" : "text-blue-600"}`}
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
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Ready to Convert More Leads?</h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            Join insurance agencies using OpenFlow AI to capture and qualify every prospect.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-500 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}
