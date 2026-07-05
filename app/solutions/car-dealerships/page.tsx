"use client"

import Header from "@/components/header"
import Link from "next/link"
import { CarDealershipDemo } from "@/components/industry-demos/car-dealership-demo"

export default function CarDealershipsPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-32 md:pb-28">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
          <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="container relative mx-auto px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 border border-cyan-500/20">
                <svg className="h-4 w-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                  />
                </svg>
                <span className="text-sm font-medium text-cyan-400">Automotive Solutions</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 sm:mb-6 leading-tight px-2">
                Never Miss a Lead at Your <span className="text-cyan-400">Dealership</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
                AI-powered voice agents that handle sales inquiries, schedule test drives, and qualify leads 24/7, so
                your team can focus on closing deals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/partner-intake"
                  className="rounded-full bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg font-medium shadow-lg shadow-cyan-500/25 transition-all hover:shadow-xl hover:shadow-cyan-500/30 text-center"
                >
                  Schedule Demo
                </Link>
                <Link
                  href="/partner-intake"
                  className="rounded-full border border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg font-medium bg-transparent text-center"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              <div className="text-center px-2">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-1 sm:mb-2">85%</div>
                <div className="text-xs sm:text-sm text-gray-600">More Calls Answered</div>
              </div>
              <div className="text-center px-2">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-1 sm:mb-2">3x</div>
                <div className="text-xs sm:text-sm text-gray-600">Lead Conversion Rate</div>
              </div>
              <div className="text-center px-2">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-1 sm:mb-2">24/7</div>
                <div className="text-xs sm:text-sm text-gray-600">Availability</div>
              </div>
              <div className="text-center px-2">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-1 sm:mb-2">$50k+</div>
                <div className="text-xs sm:text-sm text-gray-600">Monthly Revenue Recovered</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">See How It Works</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Watch our AI handle a real customer inquiry from start to finish
              </p>
            </div>
            <CarDealershipDemo />
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 md:py-20 lg:py-28">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 mb-3 md:mb-4 px-2">
                Built for Every Dealership Need
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                From sales inquiries to service appointments, our AI handles it all with natural conversation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Sales Inquiries */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:shadow-xl hover:border-cyan-200">
                <div className="w-14 h-14 rounded-xl bg-cyan-50 flex items-center justify-center mb-6 group-hover:bg-cyan-100 transition-colors">
                  <svg className="h-7 w-7 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Sales Inquiries</h3>
                <p className="text-gray-600 mb-4">
                  Answer questions about inventory, pricing, financing options, and trade-in values instantly.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Real-time inventory lookup
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Financing pre-qualification
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Trade-in value estimates
                  </li>
                </ul>
              </div>

              {/* Test Drive Scheduling */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:shadow-xl hover:border-cyan-200">
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                  <svg className="h-7 w-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Test Drive Scheduling</h3>
                <p className="text-gray-600 mb-4">
                  Book test drives automatically with smart calendar integration and confirmation follow-ups.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Calendar sync with sales team
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Automated SMS reminders
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Vehicle preparation alerts
                  </li>
                </ul>
              </div>

              {/* Service Department */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:shadow-xl hover:border-cyan-200">
                <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                  <svg className="h-7 w-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Service Appointments</h3>
                <p className="text-gray-600 mb-4">
                  Schedule oil changes, repairs, and maintenance with intelligent service bay management.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Service history lookup
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Parts availability check
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Loaner car coordination
                  </li>
                </ul>
              </div>

              {/* Lead Qualification */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:shadow-xl hover:border-cyan-200">
                <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
                  <svg className="h-7 w-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Lead Qualification</h3>
                <p className="text-gray-600 mb-4">
                  Score and prioritize leads automatically based on buying signals and timeline.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Budget assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Timeline detection
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Hot lead alerts
                  </li>
                </ul>
              </div>

              {/* After-Hours Support */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:shadow-xl hover:border-cyan-200">
                <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                  <svg className="h-7 w-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">After-Hours Coverage</h3>
                <p className="text-gray-600 mb-4">
                  Capture every lead even when your team is off the clock with 24/7 AI support.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Weekend & holiday coverage
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Emergency service routing
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Next-day callback scheduling
                  </li>
                </ul>
              </div>

              {/* Follow-Up Automation */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:shadow-xl hover:border-cyan-200">
                <div className="w-14 h-14 rounded-xl bg-rose-50 flex items-center justify-center mb-6 group-hover:bg-rose-100 transition-colors">
                  <svg className="h-7 w-7 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Follow-Up Automation</h3>
                <p className="text-gray-600 mb-4">
                  Automated follow-up calls and texts to nurture leads until they're ready to buy.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Drip campaign sequences
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Price drop notifications
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Service reminder campaigns
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                  Integrates with Your Existing Systems
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  OpenFlow AI connects seamlessly with your DMS, CRM, and inventory management systems for a unified
                  workflow.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                      <span className="text-cyan-400 font-semibold text-sm">DMS</span>
                    </div>
                    <span className="text-white font-medium">Dealer Management</span>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 font-semibold text-sm">CRM</span>
                    </div>
                    <span className="text-white font-medium">Customer Data</span>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-400 font-semibold text-sm">INV</span>
                    </div>
                    <span className="text-white font-medium">Inventory Sync</span>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <span className="text-purple-400 font-semibold text-sm">CAL</span>
                    </div>
                    <span className="text-white font-medium">Calendar Systems</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-8 border border-white/10">
                  <div className="h-full rounded-xl bg-slate-800/50 backdrop-blur-sm p-6 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-sm text-gray-400">Connected to Reynolds & Reynolds</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-sm text-gray-400">Syncing with Salesforce CRM</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-sm text-gray-400">Inventory updated 2 min ago</span>
                      </div>
                    </div>
                    <div className="rounded-lg bg-slate-700/50 p-4">
                      <div className="text-xs text-gray-400 mb-2">Last synced activity</div>
                      <div className="text-white font-medium">New lead: John D. - 2024 Toyota Camry inquiry</div>
                      <div className="text-cyan-400 text-sm mt-1">Auto-assigned to Sarah M.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-12 md:p-16">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                Ready to Transform Your Dealership?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of dealerships using OpenFlow AI to capture more leads and close more deals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/partner-intake"
                  className="rounded-full bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg font-medium text-center"
                >
                  Get Started Free
                </Link>
                <Link
                  href="/partner-intake"
                  className="rounded-full border border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg font-medium bg-transparent text-center"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-gray-500">© 2025 OpenFlow AI. All rights reserved.</div>
              <div className="flex gap-6">
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                  Privacy
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                  Terms
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
