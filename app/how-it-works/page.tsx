"use client"

import Header from "@/components/header"
import { Phone, Brain, Zap, CheckCircle, ArrowRight } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0A1026] via-[#1a2742] to-[#0A1026] py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 md:mb-6 leading-tight px-4">
                How{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  OpenFlow AI
                </span>{" "}
                Works
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
                Transform your customer experience in three simple steps. No coding required, seamless integration,
                instant results.
              </p>
            </div>
          </div>
        </section>

        {/* Main Process Steps */}
        <section className="py-16 md:py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              {/* Step 1 */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-24">
                <div className="order-2 md:order-1 px-2">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 px-3 sm:px-4 py-1.5 sm:py-2 mb-4 md:mb-6">
                    <span className="text-xs sm:text-sm font-semibold text-cyan-700">Step 1</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4 md:mb-6">
                    Configure Your AI Agent
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed">
                    Tell us about your business, your services, and how you want to handle customer interactions. Our AI
                    learns your brand voice, pricing, availability, and business rules.
                  </p>
                  <ul className="space-y-3 md:space-y-4">
                    {[
                      "Define your business hours and availability",
                      "Set up service offerings and pricing",
                      "Customize conversation flows and responses",
                      "Connect your calendar and CRM",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2 md:gap-3">
                        <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-1 md:order-2 px-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl blur-3xl opacity-20" />
                    <div className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-200 shadow-2xl">
                      <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 mx-auto mb-6">
                        <Phone className="w-10 h-10 text-white" />
                      </div>
                      <div className="space-y-4">
                        <div className="h-3 bg-gray-200 rounded-full w-3/4 mx-auto" />
                        <div className="h-3 bg-gray-200 rounded-full w-full" />
                        <div className="h-3 bg-cyan-200 rounded-full w-5/6 mx-auto" />
                        <div className="h-3 bg-gray-200 rounded-full w-2/3 mx-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mb-16 md:mb-24">
                <div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl blur-3xl opacity-20" />
                    <div className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-200 shadow-2xl">
                      <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 mx-auto mb-6">
                        <Brain className="w-10 h-10 text-white" />
                      </div>
                      <div className="space-y-3">
                        {[
                          "Analyzing intent...",
                          "Checking availability...",
                          "Accessing CRM data...",
                          "Processing request...",
                        ].map((text, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 animate-pulse" />
                            <span className="text-sm text-gray-600">{text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 mb-6">
                    <span className="text-sm font-semibold text-purple-700">Step 2</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                    AI Handles Every Interaction
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    When a customer calls, texts, or messages, our AI instantly understands their needs, accesses your
                    systems, and provides intelligent responses 24/7.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Natural conversation understanding (NLU)",
                      "Real-time access to your business data",
                      "Instant appointment scheduling",
                      "Seamless CRM integration and logging",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                <div className="order-2 md:order-1 px-2">
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 mb-6">
                    <span className="text-sm font-semibold text-green-700">Step 3</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
                    Automated Actions & Follow-Ups
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    After every interaction, OpenFlow AI automatically updates your systems, sends confirmations,
                    schedules follow-ups, and ensures nothing falls through the cracks.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Automatic CRM updates and lead logging",
                      "Calendar sync and appointment confirmations",
                      "Smart follow-up sequences",
                      "Team notifications and task assignments",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-1 md:order-2 px-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl blur-3xl opacity-20" />
                    <div className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-200 shadow-2xl">
                      <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 mx-auto mb-6">
                        <Zap className="w-10 h-10 text-white" />
                      </div>
                      <div className="space-y-4">
                        {["Appointment booked", "CRM updated", "Email sent", "Follow-up scheduled"].map(
                          (text, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 p-3 rounded-xl bg-green-50 border border-green-200"
                            >
                              <CheckCircle className="w-5 h-5 text-green-600" />
                              <span className="text-sm font-medium text-gray-700">{text}</span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">The Result? A Better Business</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                OpenFlow AI doesn&apos;t just answer calls—it transforms your entire customer experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { value: "100%", label: "Call Answer Rate", description: "Never miss a potential customer again" },
                { value: "45%", label: "More Bookings", description: "Convert inquiries into appointments instantly" },
                {
                  value: "24/7",
                  label: "Availability",
                  description: "Work while you sleep, capture every opportunity",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-white border border-gray-200 hover:border-cyan-400 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xl font-semibold text-gray-900 mb-3">{stat.label}</div>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#0A1026] to-[#1a2742]">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
              See OpenFlow AI in action. Book a personalized demo and discover how we can transform your customer
              experience.
            </p>
            <a
              href="/partner-intake"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105"
            >
              Get a Demo <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
