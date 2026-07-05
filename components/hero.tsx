"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const Hero3DBackground = dynamic(
  () => import("./hero-3d-background").then((mod) => mod.Hero3DBackground),
  { ssr: false }
)

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  const words = [
    { text: "Analyze", icon: "chart" },
    { text: "Transform", icon: "sparkles" },
    { text: "Automate", icon: "robot" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#0A1026] text-white py-20 md:py-40 min-h-[600px] md:min-h-[700px]">
      {/* ====================================================== */}
      {/* 3D BACKGROUND */}
      {/* ====================================================== */}
      <Hero3DBackground />

      {/* ====================================================== */}
      {/* HERO CONTENT */}
      {/* ====================================================== */}
      <div className="relative container mx-auto px-4 md:px-6 text-center max-w-4xl">
        <div className="mb-8 flex justify-center">
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            {/* Chart Icon */}
            <div
              className={`absolute inset-0 transition-all duration-700 ${
                currentWordIndex === 0 ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-45"
              }`}
            >
              <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="url(#gradient1)" strokeWidth="1.5" />
                <path d="M7 16L10 13L13 15L17 9" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" />
                <circle cx="7" cy="16" r="2" fill="#60A5FA" />
                <circle cx="10" cy="13" r="2" fill="#60A5FA" />
                <circle cx="13" cy="15" r="2" fill="#60A5FA" />
                <circle cx="17" cy="9" r="2" fill="#60A5FA" />
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Sparkles Icon */}
            <div
              className={`absolute inset-0 transition-all duration-700 ${
                currentWordIndex === 1 ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 rotate-45"
              }`}
            >
              <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
                <path
                  d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
                  fill="url(#gradient2)"
                  stroke="#60A5FA"
                  strokeWidth="1"
                />
                <path d="M18 4L18.5 6L20.5 6.5L18.5 7L18 9L17.5 7L15.5 6.5L17.5 6L18 4Z" fill="#60A5FA" />
                <path d="M6 15L6.5 17L8.5 17.5L6.5 18L6 20L5.5 18L3.5 17.5L5.5 17L6 15Z" fill="#60A5FA" />
                <defs>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#818CF8" />
                    <stop offset="100%" stopColor="#60A5FA" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Robot Icon */}
            <div
              className={`absolute inset-0 transition-all duration-700 ${
                currentWordIndex === 2 ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-90"
              }`}
            >
              <svg className="w-full h-full" fill="none" viewBox="0 0 24 24">
                <rect
                  x="6"
                  y="8"
                  width="12"
                  height="10"
                  rx="2"
                  stroke="url(#gradient3)"
                  strokeWidth="1.5"
                  fill="rgba(96,165,250,0.1)"
                />
                <circle cx="9" cy="12" r="1.5" fill="#60A5FA" />
                <circle cx="15" cy="12" r="1.5" fill="#60A5FA" />
                <path d="M9 15H15" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12 8V5M12 5L10 7M12 5L14 7" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M6 11H4M20 11H18" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M8 18V20M16 18V20" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
                <defs>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Pulsing glow effect */}
            <div className="absolute inset-0 bg-blue-500/30 blur-3xl animate-pulse" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight drop-shadow-[0_0_18px_rgba(0,0,0,0.6)] px-2">
          <span
            key={currentWordIndex}
            className="inline-block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-fadeInUp"
          >
            {words[currentWordIndex].text}
          </span>{" "}
          every customer experience with AI agent
        </h1>

        <p className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto px-6">
          OpenFlow AI builds enterprise-grade conversational agents that answer, qualify, schedule, and resolve — across
          every communication channel.
        </p>

        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row justify-center gap-3 md:gap-6 px-6">
          <a
            href="/partner-intake"
            className="px-8 md:px-8 py-3 md:py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-base font-medium shadow-lg shadow-blue-600/30 transition-all hover:scale-105 w-full sm:w-auto text-center"
          >
            Get a Demo →
          </a>
          <a
            href="/how-it-works"
            className="px-8 md:px-8 py-3 md:py-4 border border-gray-400/40 rounded-full text-base font-medium hover:bg-white/10 transition-all hover:scale-105 w-full sm:w-auto text-center"
          >
            How It Works →
          </a>
        </div>
      </div>
    </section>
  )
}
