"use client"

import { useEffect, useState } from "react"

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const words = ["Automate", "Analyze", "Transform"]

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#070b18] text-white">
      {/* ===== Background ===== */}
      <div className="pointer-events-none absolute inset-0">
        {/* Soft radial glow behind the headline */}
        <div className="absolute left-1/2 top-[36%] h-[520px] w-[820px] max-w-[95vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[130px]" />
        {/* Fine grid, faded toward the edges */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.07) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 38%, #000 30%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 38%, #000 30%, transparent 100%)",
          }}
        />
        {/* Subtle aurora rising from the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-blue-700/15 via-blue-800/5 to-transparent" />
        {/* Fade the section into whatever follows */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#070b18] to-transparent" />
      </div>

      {/* ===== Content ===== */}
      <div className="relative mx-auto max-w-4xl px-6 py-28 md:py-40 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-blue-100 backdrop-blur-sm animate-fadeInUp">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
          AI voice, SMS &amp; email agents
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08]">
          <span
            key={wordIndex}
            className="inline-block bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent animate-fadeInUp"
          >
            {words[wordIndex]}
          </span>{" "}
          every customer
          <br className="hidden sm:block" /> experience with AI agents
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-300">
          OpenFlow AI answers, qualifies, schedules, and follows up across every channel — so your business never misses
          a call, a lead, or a booking.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="/partner-intake"
            className="rounded-full bg-blue-600 px-7 py-3.5 text-base font-medium shadow-lg shadow-blue-600/30 transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/40"
          >
            Get a Demo
          </a>
          <a
            href="/how-it-works"
            className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
          >
            How It Works
          </a>
        </div>
      </div>
    </section>
  )
}
