"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsMenuOpen, setProductsMenuOpen] = useState(false)

  const handleNavigation = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setProductsMenuOpen(false)
    setMobileMenuOpen(false)
  }

  const handleProductsEnter = () => setProductsMenuOpen(true)
  const handleProductsLeave = () => setProductsMenuOpen(false)

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
                          <div className="mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6">
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
                          <Link
                            href="/products/crm"
                            className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50"
                            onClick={handleNavigation}
                          >
                            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm5 4h6M9 14h6"
                                />
                              </svg>
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">OpenFlow CRM</div>
                              <div className="text-sm text-gray-500">Leads, calls &amp; pipeline in one place</div>
                            </div>
                          </Link>
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

          {/* Desktop actions */}
          <div className="hidden sm:flex items-center gap-1 md:gap-2">
            <a
              href="https://login.openflowai.io"
              className="rounded-md px-3 py-2 text-sm md:text-[15px] font-medium text-gray-600 transition-colors hover:text-gray-900 hover:bg-gray-100"
            >
              Log in
            </a>
            <Link
              href="/partner-intake"
              onClick={handleNavigation}
              className="flex items-center rounded-full bg-[#2563eb] px-4 md:px-6 py-2 text-sm md:text-[15px] font-medium text-white shadow-sm transition-all hover:bg-[#1d4ed8] hover:shadow-md"
            >
              Get a demo
              <svg className="ml-2 h-3 w-3 md:h-4 md:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

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
                  <Link
                    href="/products/crm"
                    className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    onClick={handleNavigation}
                  >
                    OpenFlow CRM
                  </Link>
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

            {/* CTA Buttons - Mobile */}
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <a
                href="https://login.openflowai.io"
                className="w-full flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-base font-medium text-gray-900 transition-colors hover:bg-gray-50"
              >
                Log in
              </a>
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
