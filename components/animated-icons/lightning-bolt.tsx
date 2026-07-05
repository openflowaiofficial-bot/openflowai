"use client"

import { useEffect, useState } from "react"

export function LightningBolt() {
  const [flash, setFlash] = useState(false)
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([])

  useEffect(() => {
    const flashInterval = setInterval(() => {
      setFlash(true)
      // Create particles on flash
      setParticles([
        { id: Date.now(), x: Math.random() * 100, y: Math.random() * 100 },
        { id: Date.now() + 1, x: Math.random() * 100, y: Math.random() * 100 },
        { id: Date.now() + 2, x: Math.random() * 100, y: Math.random() * 100 },
      ])

      setTimeout(() => setFlash(false), 300)
      setTimeout(() => setParticles([]), 1000)
    }, 2000)

    return () => clearInterval(flashInterval)
  }, [])

  return (
    <div className="relative w-48 h-32 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg border border-green-200 flex items-center justify-center overflow-hidden">
      {/* Electric field background */}
      <div className={`absolute inset-0 transition-opacity duration-300 ${flash ? "opacity-30" : "opacity-0"}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-emerald-200" />
      </div>

      {/* Animated lightning bolts */}
      <div className="relative z-10">
        {/* Main bolt */}
        <svg
          className={`h-20 w-20 transition-all duration-300 ${flash ? "text-green-500 scale-110" : "text-green-400 scale-100"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
        </svg>

        {/* Side bolts that appear on flash */}
        {flash && (
          <>
            <svg
              className="h-10 w-10 text-emerald-400 absolute -left-8 top-2 animate-pulse"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
            </svg>
            <svg
              className="h-8 w-8 text-green-300 absolute -right-6 bottom-2 animate-pulse"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
            </svg>
          </>
        )}
      </div>

      {/* Animated energy particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full bg-green-400 animate-ping"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
        />
      ))}

      {/* Energy waves */}
      {flash && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-16 h-16 rounded-full border-2 border-green-400 animate-ping" />
          <div
            className="absolute w-24 h-24 rounded-full border-2 border-emerald-400 animate-ping"
            style={{ animationDelay: "0.1s" }}
          />
        </div>
      )}
    </div>
  )
}
