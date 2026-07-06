"use client"

import { useState, useEffect } from "react"

const analyticsViews = [
  {
    title: "Call Performance",
    color: "from-blue-500 to-blue-600",
    metrics: [
      { label: "Total Calls", value: "12,547", change: "+23%" },
      { label: "Avg Duration", value: "4:32", change: "+12%" },
      { label: "Success Rate", value: "94.2%", change: "+5.3%" },
    ],
    chart: "calls",
  },
  {
    title: "Customer Sentiment",
    color: "from-blue-500 to-blue-600",
    metrics: [
      { label: "Positive", value: "87%", change: "+8%" },
      { label: "Neutral", value: "10%", change: "-3%" },
      { label: "Negative", value: "3%", change: "-5%" },
    ],
    chart: "sentiment",
  },
  {
    title: "Revenue Impact",
    color: "from-blue-500 to-blue-600",
    metrics: [
      { label: "Revenue", value: "$847K", change: "+34%" },
      { label: "Conversions", value: "3,241", change: "+28%" },
      { label: "AOV", value: "$261", change: "+11%" },
    ],
    chart: "revenue",
  },
  {
    title: "AI Performance",
    color: "from-blue-500 to-blue-600",
    metrics: [
      { label: "Response Time", value: "1.2s", change: "-18%" },
      { label: "Accuracy", value: "96.8%", change: "+3.2%" },
      { label: "Uptime", value: "99.9%", change: "+0.1%" },
    ],
    chart: "ai",
  },
]

export function StackedAnalyticsCards() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % analyticsViews.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2 leading-tight">
            Powerful Analytics & Insights
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4 leading-relaxed">
            Get complete visibility into your AI agent performance with real-time analytics and actionable insights
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative h-[480px] sm:h-[520px] md:h-[560px] lg:h-[600px] perspective-1000">
            {analyticsViews.map((view, index) => {
              const position = (index - activeIndex + analyticsViews.length) % analyticsViews.length
              const isActive = position === 0
              const isNext = position === 1
              const isNextNext = position === 2
              const isFarBack = position === 3

              return (
                <div
                  key={index}
                  className={`absolute inset-x-0 transition-all duration-700 ease-out ${
                    isActive
                      ? "top-0 scale-100 opacity-100 z-40"
                      : isNext
                        ? "top-3 sm:top-4 md:top-5 scale-[0.95] sm:scale-[0.94] opacity-70 z-30"
                        : isNextNext
                          ? "top-6 sm:top-8 md:top-10 scale-[0.90] sm:scale-[0.88] opacity-40 z-20"
                          : isFarBack
                            ? "top-9 sm:top-12 md:top-15 scale-[0.85] sm:scale-[0.82] opacity-15 z-10"
                            : "top-12 sm:top-16 md:top-20 scale-[0.80] sm:scale-[0.76] opacity-0 z-0"
                  }`}
                  style={{
                    transformOrigin: "center top",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  <div
                    className={`relative bg-gradient-to-br ${view.color} rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl overflow-hidden`}
                  >
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_50%)] animate-pulse" />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-5 sm:mb-6 md:mb-8 gap-2">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight">
                          {view.title}
                        </h3>
                        <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold whitespace-nowrap">
                          Live Data
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mb-5 sm:mb-6 md:mb-8">
                        {view.metrics.map((metric, i) => (
                          <div
                            key={i}
                            className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-4 md:p-5 border border-white/20 transform hover:scale-105 transition-transform"
                          >
                            <div className="text-white/80 text-xs sm:text-sm mb-1.5 sm:mb-2">{metric.label}</div>
                            <div className="text-white text-2xl sm:text-2xl md:text-3xl font-bold mb-1">
                              {metric.value}
                            </div>
                            <div
                              className={`text-xs sm:text-sm font-semibold ${
                                metric.change.startsWith("+") ? "text-green-300" : "text-red-300"
                              }`}
                            >
                              {metric.change} vs last month
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20">
                        {view.chart === "calls" && <CallsChart />}
                        {view.chart === "sentiment" && <SentimentChart />}
                        {view.chart === "revenue" && <RevenueChart />}
                        {view.chart === "ai" && <AIPerformanceChart />}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="flex justify-center gap-2 sm:gap-3 mt-10 sm:mt-12 md:mt-14">
            {analyticsViews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? "w-10 sm:w-12 bg-blue-600" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`View ${analyticsViews[index].title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CallsChart() {
  const bars = [65, 78, 82, 88, 75, 92, 85]
  return (
    <div className="space-y-4">
      <div className="text-white/80 text-sm font-semibold">Weekly Call Volume</div>
      <div className="flex items-end justify-between gap-2 h-32">
        {bars.map((height, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end">
            <div
              className="bg-white/80 rounded-t-lg transition-all duration-1000 hover:bg-white"
              style={{ height: `${height}%`, animationDelay: `${i * 100}ms` }}
            />
            <div className="text-white/60 text-xs text-center mt-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SentimentChart() {
  return (
    <div className="space-y-4">
      <div className="text-white/80 text-sm font-semibold">Sentiment Distribution</div>
      <div className="flex gap-2 h-12">
        <div className="bg-green-400/80 rounded-lg flex-[87] flex items-center justify-center text-white font-semibold">
          87%
        </div>
        <div className="bg-yellow-400/80 rounded-lg flex-[10] flex items-center justify-center text-white font-semibold text-sm">
          10%
        </div>
        <div className="bg-red-400/80 rounded-lg flex-[3] flex items-center justify-center text-white font-semibold text-xs">
          3%
        </div>
      </div>
      <div className="flex justify-between text-xs text-white/60">
        <span>Positive</span>
        <span>Neutral</span>
        <span>Negative</span>
      </div>
    </div>
  )
}

function RevenueChart() {
  const data = [45, 52, 48, 65, 70, 78, 85]
  return (
    <div className="space-y-4">
      <div className="text-white/80 text-sm font-semibold">Revenue Trend</div>
      <div className="relative h-32">
        <svg className="w-full h-full" viewBox="0 0 280 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
            </linearGradient>
          </defs>
          <path
            d={`M 0 ${120 - data[0]} ${data.map((d, i) => `L ${(i * 280) / (data.length - 1)} ${120 - d}`).join(" ")} L 280 120 L 0 120 Z`}
            fill="url(#revenueGradient)"
          />
          <path
            d={`M 0 ${120 - data[0]} ${data.map((d, i) => `L ${(i * 280) / (data.length - 1)} ${120 - d}`).join(" ")}`}
            fill="none"
            stroke="white"
            strokeWidth="3"
          />
        </svg>
      </div>
    </div>
  )
}

function AIPerformanceChart() {
  return (
    <div className="space-y-4">
      <div className="text-white/80 text-sm font-semibold">Response Time Distribution</div>
      <div className="space-y-3">
        {[
          { label: "< 1s", value: 68 },
          { label: "1-2s", value: 24 },
          { label: "2-3s", value: 6 },
          { label: "> 3s", value: 2 },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="text-white/60 text-sm w-12">{item.label}</div>
            <div className="flex-1 bg-white/20 rounded-full h-3">
              <div
                className="bg-white/80 h-3 rounded-full transition-all duration-1000"
                style={{ width: `${item.value}%` }}
              />
            </div>
            <div className="text-white/80 text-sm font-semibold w-12 text-right">{item.value}%</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StackedAnalyticsCards
