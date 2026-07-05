"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsMenuOpen, setProductsMenuOpen] = useState(false)
  const [solutionsMenuOpen, setSolutionsMenuOpen] = useState(false)

  const handleNavigation = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setProductsMenuOpen(false)
    setSolutionsMenuOpen(false)
    setMobileMenuOpen(false)
  }

  const handleProductsEnter = () => setProductsMenuOpen(true)
  const handleProductsLeave = () => setProductsMenuOpen(false)
  const handleSolutionsEnter = () => setSolutionsMenuOpen(true)
  const handleSolutionsLeave = () => setSolutionsMenuOpen(false)

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Link href="/" onClick={handleNavigation}>
              <Image src="/openflow-icon-only.png" alt="OpenFlow AI" width={32} height={32} className="h-8 w-8" />
            </Link>
            <Link href="/" className="text-xl font-semibold text-gray-900" onClick={handleNavigation}>
              OpenFlow AI
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleProductsEnter}
              onMouseLeave={handleProductsLeave}
              onFocus={handleProductsEnter}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) handleProductsLeave()
              }}
            >
              <button
                aria-expanded={productsMenuOpen}
                aria-haspopup="true"
                className="flex items-center text-sm md:text-[15px] text-gray-600 transition-colors hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-100"
              >
                Products
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${productsMenuOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {productsMenuOpen && (
                <div className="absolute left-0 top-full pt-4 z-50 animate-dropdown">
                  <div className="w-[800px] rounded-2xl border border-gray-200 bg-white p-8 shadow-2xl">
                    <div className="grid grid-cols-[300px_1fr] gap-8">
                      {/* Platform Column with Visual */}
                      <div>
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Platform</h3>
                        <div className="space-y-3">
                          <div className="mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
                            {/* Dashboard Mockup */}
                            <div className="relative aspect-[4/3] w-full rounded-lg bg-white shadow-lg">
                              {/* Mock Header */}
                              <div className="flex items-center gap-2 border-b border-gray-200 px-4 py-3">
                                <Image
                                  src="/openflow-icon-only.png"
                                  alt="OpenFlow"
                                  width={20}
                                  height={20}
                                  className="h-5 w-5"
                                />
                                <div className="text-xs font-semibold text-gray-700">OpenFlow Dashboard</div>
                              </div>

                              {/* Mock Content */}
                              <div className="p-4 space-y-3">
                                {/* Stats Cards */}
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="rounded-lg bg-blue-50 p-2.5">
                                    <div className="text-[10px] text-gray-600 mb-1">Active Calls</div>
                                    <div className="text-lg font-bold text-blue-600">247</div>
                                  </div>
                                  <div className="rounded-lg bg-green-50 p-2.5">
                                    <div className="text-[10px] text-gray-600 mb-1">Response Rate</div>
                                    <div className="text-lg font-bold text-green-600">98%</div>
                                  </div>
                                </div>

                                {/* Mini Chart */}
                                <div className="rounded-lg bg-gray-50 p-3 h-20 flex items-end gap-1">
                                  <div className="w-full h-4 bg-blue-200 rounded-t"></div>
                                  <div className="w-full h-8 bg-blue-300 rounded-t"></div>
                                  <div className="w-full h-12 bg-blue-400 rounded-t"></div>
                                  <div className="w-full h-16 bg-blue-500 rounded-t"></div>
                                  <div className="w-full h-10 bg-blue-300 rounded-t"></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <Link
                            href="#platform"
                            className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50"
                            onClick={handleNavigation}
                          >
                            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Platform Overview</div>
                              <div className="text-sm text-gray-500">Enterprise AI voice platform</div>
                            </div>
                          </Link>
                          <Link
                            href="/integrations"
                            className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50"
                            onClick={handleNavigation}
                          >
                            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                              </svg>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Integrations</div>
                              <div className="text-sm text-gray-500">Connect with your CRM</div>
                            </div>
                          </Link>
                          <Link
                            href="#security"
                            className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50"
                            onClick={handleNavigation}
                          >
                            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm-5 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                              </svg>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Security</div>
                              <div className="text-sm text-gray-500">Enterprise-grade protection</div>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Expanded Products Column */}
                      <div>
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Products</h3>
                        <div className="space-y-3">
                          <Link
                            href="/products/ai-voice"
                            className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50"
                            onClick={handleNavigation}
                          >
                            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 016 0v6a3 3 0 01-3 3z"
                                />
                              </svg>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">AI Voice Agents</div>
                              <div className="text-sm text-gray-500">24/7 intelligent call handling</div>
                            </div>
                          </Link>
                          <Link
                            href="/products/sms-automation"
                            className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50"
                            onClick={handleNavigation}
                          >
                            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">SMS Automation</div>
                              <div className="text-sm text-gray-500">Text-based customer engagement</div>
                            </div>
                          </Link>
                          <Link
                            href="/products/appointment"
                            className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50"
                            onClick={handleNavigation}
                          >
                            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Appointment Scheduler</div>
                              <div className="text-sm text-gray-500">Automated booking system</div>
                            </div>
                          </Link>
                          <Link
                            href="/products/analytics"
                            className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50"
                            onClick={handleNavigation}
                          >
                            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                />
                              </svg>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Analytics & Insights</div>
                              <div className="text-sm text-gray-500">Real-time performance data</div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleSolutionsEnter}
              onMouseLeave={handleSolutionsLeave}
              onFocus={handleSolutionsEnter}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) handleSolutionsLeave()
              }}
            >
              <button
                aria-expanded={solutionsMenuOpen}
                aria-haspopup="true"
                className="flex items-center text-sm md:text-[15px] text-gray-600 transition-colors hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-100"
              >
                Solutions
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${solutionsMenuOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {solutionsMenuOpen && (
                <div className="absolute left-0 top-full pt-4 z-50 animate-dropdown">
                  <div className="w-[900px] rounded-2xl border border-gray-200 bg-white p-8 shadow-2xl">
                    <div className="grid grid-cols-[1fr_1fr_280px] gap-8">
                      {/* Use Cases Column */}
                      <div>
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">Use Cases</h3>
                        <div className="space-y-2">
                          <Link
                            href="#inbound-calls"
                            className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50"
                            onClick={handleNavigation}
                          >
                            <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600 transition-colors group-hover:bg-cyan-100">
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 00-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                                />
                              </svg>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Inbound Call Handling</div>
                              <div className="text-sm text-gray-500">Answer every call, 24/7 with AI</div>
                            </div>
                          </Link>
                          <Link
                            href="#appointment-booking"
                            className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50"
                            onClick={handleNavigation}
                          >
                            <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Appointment Booking</div>
                              <div className="text-sm text-gray-500">Automated scheduling & reminders</div>
                            </div>
                          </Link>
                          <Link
                            href="#lead-follow-up"
                            className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50"
                            onClick={handleNavigation}
                          >
                            <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600 transition-colors group-hover:bg-green-100">
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                              </svg>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Lead Follow-up</div>
                              <div className="text-sm text-gray-500">Never miss a sales opportunity</div>
                            </div>
                          </Link>
                          <Link
                            href="#customer-support"
                            className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50"
                            onClick={handleNavigation}
                          >
                            <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50 text-purple-600 transition-colors group-hover:bg-purple-100">
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                                />
                              </svg>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">Customer Support</div>
                              <div className="text-sm text-gray-500">Resolve issues faster with AI</div>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Industries Column */}
                      <div>
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                          Industries
                        </h3>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                          <Link
                            href="/solutions/car-dealerships"
                            className="group flex items-center gap-2.5 rounded-lg p-2 transition-colors hover:bg-gray-50"
                            onClick={handleNavigation}
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors group-hover:bg-slate-200">
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                />
                              </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-700">Car Dealerships</span>
                          </Link>
                          <Link
                            href="/solutions/medical-offices"
                            className="group flex items-center gap-2.5 rounded-lg p-2 transition-colors hover:bg-gray-50"
                            onClick={handleNavigation}
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-600 transition-colors group-hover:bg-red-100">
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 6h16M4 12h16M4 18h16"
                                />
                              </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-700">Medical Offices</span>
                          </Link>
                          <Link
                            href="/solutions/spas"
                            className="group flex items-center gap-2.5 rounded-lg p-2 transition-colors hover:bg-gray-50"
                            onClick={handleNavigation}
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-50 text-pink-600 transition-colors group-hover:bg-pink-100">
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-700">Spas & Wellness</span>
                          </Link>
                          <Link
                            href="/solutions/salons"
                            className="group flex items-center gap-2.5 rounded-lg p-2 transition-colors hover:bg-gray-50"
                            onClick={handleNavigation}
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-purple-600 transition-colors group-hover:bg-purple-100">
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
                                />
                              </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-700">Salons & Beauty</span>
                          </Link>
                          <Link
                            href="/solutions/handyman"
                            className="group flex items-center gap-2.5 rounded-lg p-2 transition-colors hover:bg-gray-50"
                            onClick={handleNavigation}
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-100">
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 00-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                                />
                              </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-700">Home Services</span>
                          </Link>
                          <Link
                            href="/solutions/plumbers"
                            className="group flex items-center gap-2.5 rounded-lg p-2 transition-colors hover:bg-gray-50"
                            onClick={handleNavigation}
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                />
                              </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-700">Plumbers</span>
                          </Link>
                          <Link
                            href="/solutions/hvac"
                            className="group flex items-center gap-2.5 rounded-lg p-2 transition-colors hover:bg-gray-50"
                            onClick={handleNavigation}
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-50 text-sky-600 transition-colors group-hover:bg-sky-100">
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                              </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-700">HVAC</span>
                          </Link>
                          <Link
                            href="/solutions/insurance"
                            className="group flex items-center gap-2.5 rounded-lg p-2 transition-colors hover:bg-gray-50"
                            onClick={handleNavigation}
                          >
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-100">
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                              </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-700">Insurance</span>
                          </Link>
                        </div>
                      </div>

                      {/* Featured Column */}
                      <div className="rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 p-5">
                        <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Featured</h3>
                        <div className="overflow-hidden rounded-lg bg-white shadow-md">
                          <div className="aspect-[16/10] bg-gradient-to-br from-cyan-500 to-blue-600 p-4 flex items-center justify-center">
                            <div className="text-center text-white">
                              <div className="mb-2 flex justify-center">
                                <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div className="text-sm font-semibold">AI Voice Demo</div>
                            </div>
                          </div>
                          <div className="p-4">
                            <p className="text-sm text-gray-600 leading-relaxed">
                              See how OpenFlow AI handles real customer calls for automotive dealerships with natural
                              conversation.
                            </p>
                            <Link
                              href="/how-it-works"
                              className="mt-3 inline-flex items-center text-sm font-medium text-cyan-600 hover:text-cyan-700"
                              onClick={handleNavigation}
                            >
                              See how it works
                              <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/automations"
              className="text-sm md:text-[15px] text-gray-600 transition-colors hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-100"
              onClick={handleNavigation}
            >
              Automations
            </Link>
            <Link
              href="/pricing"
              className="text-sm md:text-[15px] text-gray-600 transition-colors hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-100"
              onClick={handleNavigation}
            >
              Pricing
            </Link>
            <Link
              href="/partner-intake"
              className="text-sm md:text-[15px] text-gray-600 transition-colors hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-100"
              onClick={handleNavigation}
            >
              Let&apos;s Talk
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <Link
            href="/partner-intake"
            onClick={handleNavigation}
            className="hidden sm:flex rounded-full bg-[#2563eb] px-4 md:px-6 py-2 text-sm md:text-[15px] font-medium text-white shadow-sm transition-all hover:bg-[#1d4ed8] hover:shadow-md items-center"
          >
            Get a demo
            <svg className="ml-2 h-3 w-3 md:h-4 md:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed left-0 right-0 top-16 z-50 lg:hidden border-t border-gray-200 bg-white shadow-lg">
          <div className="max-h-[calc(100vh-4rem)] overflow-y-auto px-4 py-6 space-y-6">
            {/* Products Section - Mobile */}
            <div>
              <button
                onClick={() => setProductsMenuOpen(!productsMenuOpen)}
                className="flex w-full items-center justify-between py-2 text-base font-medium text-gray-900"
              >
                Products
                <svg
                  className={`h-5 w-5 transition-transform ${productsMenuOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {productsMenuOpen && (
                <div className="mt-2 space-y-1 pl-4">
                  <Link
                    href="/products/ai-voice"
                    className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    onClick={handleNavigation}
                  >
                    AI Voice Agents
                  </Link>
                  <Link
                    href="/products/sms-automation"
                    className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    onClick={handleNavigation}
                  >
                    SMS Automation
                  </Link>
                  <Link
                    href="/products/appointment"
                    className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    onClick={handleNavigation}
                  >
                    Appointment Scheduler
                  </Link>
                  <Link
                    href="/products/analytics"
                    className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    onClick={handleNavigation}
                  >
                    Analytics & Insights
                  </Link>
                </div>
              )}
            </div>

            {/* Solutions Section - Mobile */}
            <div>
              <button
                onClick={() => setSolutionsMenuOpen(!solutionsMenuOpen)}
                className="flex w-full items-center justify-between py-2 text-base font-medium text-gray-900"
              >
                Solutions
                <svg
                  className={`h-5 w-5 transition-transform ${solutionsMenuOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {solutionsMenuOpen && (
                <div className="mt-2 space-y-3 pl-4">
                  <div>
                    <div className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Industries
                    </div>
                    <div className="mt-1 space-y-1">
                      <Link
                        href="/solutions/car-dealerships"
                        className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        onClick={handleNavigation}
                      >
                        Car Dealerships
                      </Link>
                      <Link
                        href="/solutions/medical-offices"
                        className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        onClick={handleNavigation}
                      >
                        Medical Offices
                      </Link>
                      <Link
                        href="/solutions/spas"
                        className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        onClick={handleNavigation}
                      >
                        Spas & Wellness
                      </Link>
                      <Link
                        href="/solutions/salons"
                        className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        onClick={handleNavigation}
                      >
                        Salons & Beauty
                      </Link>
                      <Link
                        href="/solutions/handyman"
                        className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        onClick={handleNavigation}
                      >
                        Home Services
                      </Link>
                      <Link
                        href="/solutions/plumbers"
                        className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        onClick={handleNavigation}
                      >
                        Plumbers
                      </Link>
                      <Link
                        href="/solutions/hvac"
                        className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        onClick={handleNavigation}
                      >
                        HVAC
                      </Link>
                      <Link
                        href="/solutions/insurance"
                        className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        onClick={handleNavigation}
                      >
                        Insurance
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Automations Link - Mobile */}
            <Link
              href="/automations"
              className="block py-2 text-base font-medium text-gray-900 hover:text-gray-600"
              onClick={handleNavigation}
            >
              Automations
            </Link>

            {/* Integrations Link - Mobile */}
            <Link
              href="/integrations"
              className="block py-2 text-base font-medium text-gray-900 hover:text-gray-600"
              onClick={handleNavigation}
            >
              Integrations
            </Link>

            {/* How It Works Link - Mobile */}
            <Link
              href="/how-it-works"
              className="block py-2 text-base font-medium text-gray-900 hover:text-gray-600"
              onClick={handleNavigation}
            >
              How It Works
            </Link>

            {/* Pricing Link - Mobile */}
            <Link
              href="/pricing"
              className="block py-2 text-base font-medium text-gray-900 hover:text-gray-600"
              onClick={handleNavigation}
            >
              Pricing
            </Link>

            {/* Clients Link - Mobile */}
            <Link
              href="/partner-intake"
              className="block py-2 text-base font-medium text-gray-900 hover:text-gray-600"
              onClick={handleNavigation}
            >
              Let&apos;s Talk
            </Link>

            {/* CTA Button - Mobile */}
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="/partner-intake"
                onClick={handleNavigation}
                className="w-full flex items-center justify-center rounded-full bg-[#2563eb] px-6 py-3 text-base font-medium text-white shadow-sm transition-all hover:bg-[#1d4ed8] hover:shadow-md"
              >
                Get a demo
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
