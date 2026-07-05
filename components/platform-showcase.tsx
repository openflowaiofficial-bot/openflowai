"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function PlatformShowcase() {
  const topLeftBadges = ["ENTERPRISE SECURITY", "ISO 27001", "VOICE SDK"]
  const middleLeftBadges = ["AI TRAINING", "CHAT SDK"]
  const bottomLeftBadges = ["HUMAN-IN-LOOP", "OPENAI"]

  const topRightBadges = ["CHAIN-OF-THOUGHT", "HIPAA COMPLIANT", "AI WORKFLOWS"]
  const middleRightBadges = ["GUARDRAILS", "CUSTOM INTEGRATION"]
  const bottomRightBadges = ["CRM SYNC", "BEHAVIORAL MODELING"]

  return (
    <section className="relative overflow-hidden bg-white px-4 md:px-8 py-20 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="relative">
          <div className="hidden lg:block absolute left-0 top-1/2 w-[300px] -translate-y-1/2 overflow-hidden">
            <div
              className="flex flex-col gap-3"
              style={{
                maskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
              }}
            >
              <div className="flex animate-scroll-left gap-3">
                {[...topLeftBadges, ...topLeftBadges].map((badge, index) => (
                  <div
                    key={index}
                    className="whitespace-nowrap rounded border border-gray-200 bg-gray-50/70 px-4 py-2.5 shadow-sm"
                  >
                    <span className="text-xs font-medium text-gray-700">{badge}</span>
                  </div>
                ))}
              </div>
              <div className="flex animate-scroll-right gap-3">
                {[...middleLeftBadges, ...middleLeftBadges, ...middleLeftBadges].map((badge, index) => (
                  <div
                    key={index}
                    className="whitespace-nowrap rounded border border-gray-200 bg-gray-50/70 px-4 py-2.5 shadow-sm"
                  >
                    <span className="text-xs font-medium text-gray-700">{badge}</span>
                  </div>
                ))}
              </div>
              <div className="flex animate-scroll-left-slow gap-3">
                {[...bottomLeftBadges, ...bottomLeftBadges].map((badge, index) => (
                  <div
                    key={index}
                    className="whitespace-nowrap rounded border border-gray-200 bg-gray-50/70 px-4 py-2.5 shadow-sm"
                  >
                    <span className="text-xs font-medium text-gray-700">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-2xl text-center px-4">
            <h2 className="mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              AI Voice Platform
            </h2>
            <p className="mx-auto mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-gray-600">
              Deploy industry-leading, multilingual AI across the entire customer journey—on one secure, scalable platform.
            </p>
            <Button
              size="lg"
              className="rounded-full bg-[#2563eb] px-6 md:px-8 py-4 md:py-6 text-sm md:text-base font-semibold text-white shadow-lg transition-all hover:bg-[#1e40af] hover:shadow-xl"
            >
              Explore the platform
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>

          <div className="hidden lg:block absolute right-0 top-1/2 w-[360px] -translate-y-1/2 overflow-hidden">
            <div
              className="flex flex-col gap-3"
              style={{
                maskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
              }}
            >
              <div className="flex animate-scroll-right gap-3">
                {[...topRightBadges, ...topRightBadges].map((badge, index) => (
                  <div
                    key={index}
                    className="whitespace-nowrap rounded border border-gray-200 bg-gray-50/70 px-4 py-2.5 shadow-sm"
                  >
                    <span className="text-xs font-medium text-gray-700">{badge}</span>
                  </div>
                ))}
              </div>
              <div className="flex animate-scroll-left gap-3">
                {[...middleRightBadges, ...middleRightBadges, ...middleRightBadges].map((badge, index) => (
                  <div
                    key={index}
                    className="whitespace-nowrap rounded border border-gray-200 bg-gray-50/70 px-4 py-2.5 shadow-sm"
                  >
                    <span className="text-xs font-medium text-gray-700">{badge}</span>
                  </div>
                ))}
              </div>
              <div className="flex animate-scroll-right-slow gap-3">
                {[...bottomRightBadges, ...bottomRightBadges].map((badge, index) => (
                  <div
                    key={index}
                    className="whitespace-nowrap rounded border border-gray-200 bg-gray-50/70 px-4 py-2.5 shadow-sm"
                  >
                    <span className="text-xs font-medium text-gray-700">{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
