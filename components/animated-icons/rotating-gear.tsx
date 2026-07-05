"use client"

import { useEffect, useState } from "react"

export function RotatingGear() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 2) % 360)
    }, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-48 h-32 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 shadow-lg border border-cyan-200 flex items-center justify-center overflow-hidden">
      {/* Background circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-24 h-24 rounded-full border-2 border-cyan-200 animate-pulse" />
        <div
          className="absolute w-16 h-16 rounded-full border-2 border-cyan-300 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      {/* Main rotating gear */}
      <svg
        className="h-20 w-20 text-cyan-500 relative z-10"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ transform: `rotate(${rotation}deg)`, transition: "transform 0.03s linear" }}
      >
        <path d="M12 2L13.09 5.26L16.59 4.23L15.77 7.77L19 9L16.77 11.5L19 14L15.77 15.23L16.59 18.77L13.09 17.74L12 21L10.91 17.74L7.41 18.77L8.23 15.23L5 14L7.23 11.5L5 9L8.23 7.77L7.41 4.23L10.91 5.26L12 2Z" />
        <circle cx="12" cy="12" r="3" fill="white" />
      </svg>

      {/* Smaller counter-rotating gear */}
      <svg
        className="h-10 w-10 text-blue-400 absolute bottom-4 right-6 z-10"
        fill="currentColor"
        viewBox="0 0 24 24"
        style={{ transform: `rotate(${-rotation * 1.5}deg)`, transition: "transform 0.03s linear" }}
      >
        <path d="M12 2L13.09 5.26L16.59 4.23L15.77 7.77L19 9L16.77 11.5L19 14L15.77 15.23L16.59 18.77L13.09 17.74L12 21L10.91 17.74L7.41 18.77L8.23 15.23L5 14L7.23 11.5L5 9L8.23 7.77L7.41 4.23L10.91 5.26L12 2Z" />
        <circle cx="12" cy="12" r="2" fill="white" />
      </svg>
    </div>
  )
}
