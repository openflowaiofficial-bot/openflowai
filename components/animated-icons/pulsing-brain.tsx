"use client"

import { useEffect, useState } from "react"

export function PulsingBrain() {
  const [pulseIndex, setPulseIndex] = useState(0)
  const nodes = [
    { x: 30, y: 40, delay: 0 },
    { x: 70, y: 40, delay: 200 },
    { x: 50, y: 60, delay: 400 },
    { x: 30, y: 80, delay: 600 },
    { x: 70, y: 80, delay: 800 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % nodes.length)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-48 h-32 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg border border-purple-200 flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"
              style={{ top: `${25 * (i + 1)}%`, animation: "pulse 2s infinite", animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Brain network visualization */}
      <svg className="h-24 w-24 relative z-10" viewBox="0 0 100 120">
        {/* Connection lines */}
        <line x1="30" y1="40" x2="70" y2="40" stroke="#a855f7" strokeWidth="2" opacity="0.3" />
        <line x1="30" y1="40" x2="50" y2="60" stroke="#a855f7" strokeWidth="2" opacity="0.3" />
        <line x1="70" y1="40" x2="50" y2="60" stroke="#a855f7" strokeWidth="2" opacity="0.3" />
        <line x1="50" y1="60" x2="30" y2="80" stroke="#a855f7" strokeWidth="2" opacity="0.3" />
        <line x1="50" y1="60" x2="70" y2="80" stroke="#a855f7" strokeWidth="2" opacity="0.3" />
        <line x1="30" y1="80" x2="70" y2="80" stroke="#a855f7" strokeWidth="2" opacity="0.3" />

        {/* Animated nodes */}
        {nodes.map((node, i) => (
          <g key={i}>
            <circle
              cx={node.x}
              cy={node.y}
              r={pulseIndex === i ? 8 : 5}
              fill={pulseIndex === i ? "#a855f7" : "#e879f9"}
              className="transition-all duration-300"
            />
            {pulseIndex === i && (
              <circle cx={node.x} cy={node.y} r="8" fill="none" stroke="#a855f7" strokeWidth="2" opacity="0">
                <animate attributeName="r" from="8" to="15" dur="1s" />
                <animate attributeName="opacity" from="0.8" to="0" dur="1s" />
              </circle>
            )}
          </g>
        ))}
      </svg>

      {/* Floating particles */}
      <div
        className="absolute top-2 right-4 w-2 h-2 rounded-full bg-purple-400 animate-bounce"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute bottom-3 left-6 w-1.5 h-1.5 rounded-full bg-pink-400 animate-bounce"
        style={{ animationDelay: "0.3s" }}
      />
    </div>
  )
}
