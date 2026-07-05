"use client"

import { useEffect, useState } from "react"

export function Features() {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-scroll-section]")
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(index)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="bg-gradient-to-b from-slate-700 to-slate-800 px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-6 sm:gap-8 md:gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:sticky lg:top-32 h-fit lg:space-y-16">
            {/* AI Agent Section */}
            <div
              className={`transition-opacity duration-500 ${activeSection === 0 ? "opacity-100" : "lg:opacity-40 opacity-100"}`}
            >
              <h3 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-semibold leading-tight tracking-tight text-white">
                AI Agent
              </h3>
              <p className="mb-4 sm:mb-5 text-sm sm:text-base leading-relaxed text-white/90">
                Deliver exceptional CX for less, with human-centric AI Agents you can trust
              </p>
              <button className="rounded-full bg-cyan-500 px-5 sm:px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-cyan-600 shadow-lg">
                Explore AI Agent
              </button>
            </div>

            {/* Agent Assist Section */}
            <div
              className={`transition-opacity duration-500 ${activeSection === 1 ? "opacity-100" : "lg:opacity-40 opacity-100"}`}
            >
              <h3 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-semibold leading-tight tracking-tight text-white">
                Agent Assist
              </h3>
              <p className="mb-4 sm:mb-5 text-sm sm:text-base leading-relaxed text-white/90">
                Turn every agent into a top performer with real-time guidance, knowledge and workflow automation
              </p>
              <button className="rounded-full bg-cyan-500 px-5 sm:px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-cyan-600 shadow-lg">
                Explore Agent Assist
              </button>
            </div>

            {/* CRM Integration Section */}
            <div
              className={`transition-opacity duration-500 ${activeSection === 2 ? "opacity-100" : "lg:opacity-40 opacity-100"}`}
            >
              <h3 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-semibold leading-tight tracking-tight text-white">
                CRM Integration
              </h3>
              <p className="mb-4 sm:mb-5 text-sm sm:text-base leading-relaxed text-white/90">
                Automatically capture call data and customer information directly into your CRM with zero manual entry
              </p>
              <button className="rounded-full bg-cyan-500 px-5 sm:px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-cyan-600 shadow-lg">
                Explore CRM Integration
              </button>
            </div>
          </div>

          <div className="space-y-24 sm:space-y-80 md:space-y-96 lg:space-y-[500px]">
            {/* Section 1: Phone with live call interface */}
            <div
              data-scroll-section
              className="rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white/95 p-4 sm:p-6 md:p-10 lg:p-16 shadow-[0_4px_20px_rgb(0,0,0,0.06)] backdrop-blur-sm"
            >
              <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[340px]">
                <div className="rounded-[40px] sm:rounded-[48px] border-[8px] sm:border-[10px] md:border-[12px] lg:border-[14px] border-black bg-black p-1 sm:p-1.5 lg:p-2 shadow-2xl">
                  {/* Phone screen */}
                  <div className="relative h-[500px] sm:h-[540px] md:h-[600px] lg:h-[660px] overflow-hidden rounded-[32px] sm:rounded-[38px] md:rounded-[40px] lg:rounded-[42px] bg-gradient-to-b from-gray-900 to-gray-800">
                    {/* Status bar */}
                    <div className="flex items-center justify-between px-6 sm:px-8 py-3 sm:py-4">
                      <span className="text-xs sm:text-sm font-semibold text-white">9:41</span>
                      <div className="flex items-center gap-1">
                        <svg className="h-2.5 w-3.5 sm:h-3 sm:w-4" fill="white" viewBox="0 0 24 24">
                          <rect width="4" height="12" x="2" y="6" rx="1" />
                          <rect width="4" height="16" x="8" y="4" rx="1" />
                          <rect width="4" height="20" x="14" y="2" rx="1" />
                          <rect width="4" height="10" x="20" y="8" rx="1" />
                        </svg>
                      </div>
                    </div>

                    {/* Active call interface */}
                    <div className="flex h-full flex-col items-center justify-between px-8 pb-24 pt-12">
                      {/* Caller info */}
                      <div className="text-center">
                        <div className="mb-5 sm:mb-6 flex justify-center">
                          <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-600 text-2xl sm:text-3xl font-bold text-white shadow-lg">
                            MR
                          </div>
                        </div>
                        <h3 className="mb-1.5 sm:mb-2 text-xl sm:text-2xl font-semibold text-white">
                          Michael Rodriguez
                        </h3>
                        <p className="mb-0.5 sm:mb-1 text-sm sm:text-base text-gray-400">Auto Service Center</p>
                        <p className="text-xs sm:text-sm text-gray-500">+1 (260) 555-8942</p>

                        {/* Call timer */}
                        <div className="mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-green-500/20 px-3 sm:px-4 py-1.5 sm:py-2">
                          <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 animate-pulse rounded-full bg-green-400" />
                          <span className="text-xs sm:text-sm font-medium text-green-300">02:34</span>
                        </div>
                      </div>

                      {/* Live waveform animation */}
                      <div className="my-6 sm:my-8">
                        <div className="mb-2 sm:mb-3 text-center text-xs sm:text-sm text-gray-400">Speaking...</div>
                        <div className="flex h-12 sm:h-16 items-center justify-center gap-0.5 sm:gap-1">
                          {[...Array(16)].map((_, i) => (
                            <div
                              key={i}
                              className="w-0.5 sm:w-1 rounded-full bg-blue-400"
                              style={{
                                height: `${Math.random() * 60 + 10}px`,
                                animation: "pulse 1.5s ease-in-out infinite",
                                animationDelay: `${i * 0.05}s`,
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Call controls */}
                      <div className="grid w-full grid-cols-3 gap-4 sm:gap-6">
                        <button className="flex flex-col items-center gap-1.5 sm:gap-2">
                          <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gray-700/50">
                            <svg
                              className="h-5 w-5 sm:h-6 sm:w-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                              />
                            </svg>
                          </div>
                          <span className="text-[10px] sm:text-xs text-gray-400">mute</span>
                        </button>

                        <button className="flex flex-col items-center gap-1.5 sm:gap-2">
                          <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gray-700/50">
                            <svg
                              className="h-5 w-5 sm:h-6 sm:w-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <span className="text-[10px] sm:text-xs text-gray-400">keypad</span>
                        </button>

                        <button className="flex flex-col items-center gap-1.5 sm:gap-2">
                          <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gray-700/50">
                            <svg
                              className="h-5 w-5 sm:h-6 sm:w-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </div>
                          <span className="text-[10px] sm:text-xs text-gray-400">speaker</span>
                        </button>

                        <button className="flex flex-col items-center gap-1.5 sm:gap-2">
                          <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gray-700/50">
                            <svg
                              className="h-5 w-5 sm:h-6 sm:w-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                              />
                            </svg>
                          </div>
                          <span className="text-[10px] sm:text-xs text-gray-400">add call</span>
                        </button>

                        <button className="flex flex-col items-center gap-1.5 sm:gap-2">
                          <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-red-500">
                            <svg
                              className="h-5 w-5 sm:h-6 sm:w-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                              />
                            </svg>
                          </div>
                          <span className="text-[10px] sm:text-xs text-gray-400">end</span>
                        </button>

                        <button className="flex flex-col items-center gap-1.5 sm:gap-2">
                          <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gray-700/50">
                            <svg
                              className="h-5 w-5 sm:h-6 sm:w-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <span className="text-[10px] sm:text-xs text-gray-400">video</span>
                        </button>
                      </div>
                    </div>

                    {/* Phone notch */}
                    <div className="absolute left-1/2 top-0 h-6 w-32 sm:h-7 sm:w-40 -translate-x-1/2 rounded-b-2xl sm:rounded-b-3xl bg-black" />
                  </div>
                </div>
              </div>

              {/* Control buttons */}
              <div className="mt-4 sm:mt-6 md:mt-8 flex items-center justify-between gap-2 sm:gap-3">
                <div className="flex gap-1.5 sm:gap-2 md:gap-3">
                  <button className="flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-lg md:rounded-xl bg-gray-300 transition-colors hover:bg-gray-400">
                    <svg
                      className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 9v6m4-6v6m7-3a9 9 0 01-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                  <button className="flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-lg md:rounded-xl bg-gray-300 transition-colors hover:bg-gray-400">
                    <svg
                      className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </button>
                </div>
                <button className="flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-lg md:rounded-xl bg-gray-300 transition-colors hover:bg-gray-400">
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Section 2: Real-time transcription */}
            <div
              data-scroll-section
              className="rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white/95 p-4 sm:p-6 md:p-10 lg:p-16 shadow-[0_4px_20px_rgb(0,0,0,0.06)] backdrop-blur-sm"
            >
              <h3 className="mb-3 sm:mb-4 md:mb-6 text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                Live Call Transcription
              </h3>

              <div className="space-y-3 sm:space-y-4">
                {/* Call header */}
                <div className="rounded-xl sm:rounded-2xl bg-gray-800 p-4 sm:p-5">
                  <div className="mb-2 sm:mb-3 flex items-center gap-2">
                    <div className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 animate-pulse rounded-full bg-red-500" />
                    <h4 className="text-sm sm:text-base font-semibold text-white">Active Call</h4>
                  </div>
                  <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 sm:gap-4 text-xs text-gray-300">
                    <div>
                      <div className="mb-0.5 sm:mb-1 text-gray-400">Customer</div>
                      <div className="font-medium">Michael Rodriguez</div>
                    </div>
                    <div>
                      <div className="mb-0.5 sm:mb-1 text-gray-400">Phone</div>
                      <div className="font-medium">260-555-8942</div>
                    </div>
                    <div>
                      <div className="mb-0.5 sm:mb-1 text-gray-400">Vehicle</div>
                      <div className="font-medium">2021 Honda Accord</div>
                    </div>
                  </div>
                </div>

                {/* Transcript messages */}
                <div className="space-y-2.5 sm:space-y-3">
                  {/* Agent message */}
                  <div className="rounded-lg sm:rounded-xl border border-blue-200 bg-blue-50 p-3 sm:p-4">
                    <div className="mb-1.5 sm:mb-2 flex items-center gap-2">
                      <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
                        S
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-gray-900">Sarah (Agent)</div>
                        <div className="text-[10px] sm:text-xs text-gray-500">9:41:23 AM</div>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-gray-800">
                      "Good morning! Thank you for calling Auto Service Center. This is Sarah. How can I help you
                      today?"
                    </p>
                  </div>

                  {/* Customer message */}
                  <div className="rounded-lg sm:rounded-xl border border-gray-200 bg-white p-3 sm:p-4">
                    <div className="mb-1.5 sm:mb-2 flex items-center gap-2">
                      <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-gray-500 text-xs font-bold text-white">
                        M
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-gray-900">Michael (Customer)</div>
                        <div className="text-[10px] sm:text-xs text-gray-500">9:41:45 AM</div>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-gray-800">
                      "Hi Sarah! I'd like to schedule an oil change for my Honda Accord. I'm due for one and wanted to
                      see what times you have available this week."
                    </p>
                  </div>

                  {/* Agent message */}
                  <div className="rounded-lg sm:rounded-xl border border-blue-200 bg-blue-50 p-3 sm:p-4">
                    <div className="mb-1.5 sm:mb-2 flex items-center gap-2">
                      <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
                        S
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-gray-900">Sarah (Agent)</div>
                        <div className="text-[10px] sm:text-xs text-gray-500">9:42:02 AM</div>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-gray-800">
                      "Perfect! I can definitely help with that. Let me pull up your service history... I see you're
                      driving a 2021 Accord. We have openings on Wednesday afternoon or Thursday morning. Which would
                      work better for you?"
                    </p>
                  </div>

                  {/* AI Insight badge */}
                  <div className="rounded-lg sm:rounded-xl border-2 border-green-200 bg-green-50 p-3 sm:p-4">
                    <div className="mb-1.5 sm:mb-2 flex items-center gap-2">
                      <svg
                        className="h-4 w-4 sm:h-5 sm:w-5 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <h4 className="text-xs sm:text-sm font-semibold text-green-900">
                        AI Detected: Service Appointment
                      </h4>
                    </div>
                    <p className="text-[10px] sm:text-xs text-green-700">
                      Customer intent: Oil change service | Vehicle: 2021 Honda Accord | Timeline: This week
                    </p>
                  </div>
                </div>
              </div>

              {/* Control buttons */}
              <div className="mt-4 sm:mt-6 md:mt-8 flex items-center justify-between gap-2 sm:gap-3">
                <div className="flex gap-1.5 sm:gap-2 md:gap-3">
                  <button className="flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-lg md:rounded-xl bg-gray-300 transition-colors hover:bg-gray-400">
                    <svg
                      className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 9v6m4-6v6m7-3a9 9 0 01-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                  <button className="flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-lg md:rounded-xl bg-gray-300 transition-colors hover:bg-gray-400">
                    <svg
                      className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </button>
                </div>
                <button className="flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-lg md:rounded-xl bg-gray-300 transition-colors hover:bg-gray-400">
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Section 3: CRM Integration */}
            <div
              data-scroll-section
              className="rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white/95 p-4 sm:p-6 md:p-10 lg:p-16 shadow-[0_4px_20px_rgb(0,0,0,0.06)] backdrop-blur-sm"
            >
              <h3 className="mb-3 sm:mb-4 md:mb-6 text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                Automatic CRM Integration
              </h3>

              <div className="space-y-4 sm:space-y-6">
                {/* Data flow visualization */}
                <div className="flex flex-col sm:flex-row items-center justify-between rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 p-5 sm:p-6 md:p-8 gap-4 sm:gap-0">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-blue-500 shadow-lg">
                      <svg
                        className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-medium text-gray-600">Call Data</div>
                      <div className="text-[10px] sm:text-xs text-gray-500">Real-time capture</div>
                    </div>
                  </div>

                  <div className="flex gap-1.5 sm:gap-2">
                    <div
                      className="h-1.5 w-1.5 sm:h-2 sm:w-2 animate-pulse rounded-full bg-blue-500"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="h-1.5 w-1.5 sm:h-2 sm:w-2 animate-pulse rounded-full bg-blue-500"
                      style={{ animationDelay: "200ms" }}
                    />
                    <div
                      className="h-1.5 w-1.5 sm:h-2 sm:w-2 animate-pulse rounded-full bg-blue-500"
                      style={{ animationDelay: "400ms" }}
                    />
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="block sm:hidden order-2">
                      <div className="text-xs font-medium text-gray-600">CRM System</div>
                      <div className="text-[10px] text-gray-500">Automatic sync</div>
                    </div>
                    <div className="hidden sm:block">
                      <div className="text-right text-xs sm:text-sm font-medium text-gray-600">CRM System</div>
                      <div className="text-right text-[10px] sm:text-xs text-gray-500">Automatic sync</div>
                    </div>
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-purple-500 shadow-lg order-1 sm:order-none">
                      <svg
                        className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* CRM Record Card */}
                <div className="rounded-xl sm:rounded-2xl border border-gray-200 sm:border-2 bg-white p-4 sm:p-5 md:p-6 shadow-lg">
                  <div className="mb-3 sm:mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">New Service Record Created</h4>
                    <span className="rounded-full bg-green-100 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold text-green-700 w-fit">
                      Auto-Synced
                    </span>
                  </div>

                  <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                    {/* Customer Info */}
                    <div className="rounded-lg sm:rounded-xl bg-gray-50 p-3 sm:p-4">
                      <div className="mb-2 sm:mb-3 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Customer Information
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span className="text-gray-600">Name:</span>
                          <span className="font-medium text-gray-900">Michael Rodriguez</span>
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span className="text-gray-600">Phone:</span>
                          <span className="font-medium text-gray-900">260-555-8942</span>
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span className="text-gray-600">Email:</span>
                          <span className="font-medium text-gray-900 truncate ml-2">m.rodriguez@email.com</span>
                        </div>
                      </div>
                    </div>

                    {/* Vehicle Info */}
                    <div className="rounded-lg sm:rounded-xl bg-gray-50 p-3 sm:p-4">
                      <div className="mb-2 sm:mb-3 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Vehicle Information
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span className="text-gray-600">Make/Model:</span>
                          <span className="font-medium text-gray-900">2021 Honda Accord</span>
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span className="text-gray-600">VIN:</span>
                          <span className="font-medium text-gray-900">1HGCV1F16LA...</span>
                        </div>
                        <div className="flex justify-between text-xs sm:text-sm">
                          <span className="text-gray-600">Mileage:</span>
                          <span className="font-medium text-gray-900">32,450 mi</span>
                        </div>
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="rounded-lg sm:rounded-xl bg-blue-50 p-3 sm:p-4 md:col-span-2">
                      <div className="mb-2 sm:mb-3 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-blue-700">
                        Service Appointment
                      </div>
                      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                        <div>
                          <span className="text-xs sm:text-sm text-gray-600">Service Type:</span>
                          <div className="text-xs sm:text-sm font-medium text-gray-900">Oil Change</div>
                        </div>
                        <div>
                          <span className="text-xs sm:text-sm text-gray-600">Scheduled:</span>
                          <div className="text-xs sm:text-sm font-medium text-gray-900">Wed, Dec 13 - 2:00 PM</div>
                        </div>
                        <div>
                          <span className="text-xs sm:text-sm text-gray-600">Advisor:</span>
                          <div className="text-xs sm:text-sm font-medium text-gray-900">Sarah M.</div>
                        </div>
                      </div>
                    </div>

                    {/* Call Notes */}
                    <div className="rounded-lg sm:rounded-xl bg-gray-50 p-3 sm:p-4 md:col-span-2">
                      <div className="mb-1.5 sm:mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-gray-500">
                        AI-Generated Notes
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed text-gray-700">
                        Customer called to schedule routine oil change. Vehicle is 2021 Honda Accord with 32,450 miles.
                        Customer preferred Wednesday afternoon appointment. Service reminder set for tire rotation in
                        2,000 miles.
                      </p>
                    </div>
                  </div>

                  {/* Timestamp */}
                  <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-t border-gray-200 pt-3 sm:pt-4">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-500">
                      <svg className="h-3 w-3 sm:h-4 sm:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Synced 2 seconds ago
                    </div>
                    <button className="text-[10px] sm:text-xs font-semibold text-blue-600 hover:text-blue-700 text-left sm:text-right">
                      View in CRM →
                    </button>
                  </div>
                </div>
              </div>

              {/* Control buttons */}
              <div className="mt-4 sm:mt-6 md:mt-8 flex items-center justify-between gap-2 sm:gap-3">
                <div className="flex gap-1.5 sm:gap-2 md:gap-3">
                  <button className="flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-lg md:rounded-xl bg-gray-300 transition-colors hover:bg-gray-400">
                    <svg
                      className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 9v6m4-6v6m7-3a9 9 0 01-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                  <button className="flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-lg md:rounded-xl bg-gray-300 transition-colors hover:bg-gray-400">
                    <svg
                      className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  </button>
                </div>
                <button className="flex h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-lg md:rounded-xl bg-gray-300 transition-colors hover:bg-gray-400">
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
