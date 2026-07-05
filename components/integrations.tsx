"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const integrations = [
  {
    name: "Salesforce",
    logo: "/salesforce-logo.png",
    position: { top: "4%", left: "5%" },
  },
  {
    name: "HubSpot",
    logo: "/hubspot-logo.png",
    position: { top: "2%", left: "25%" },
  },
  { name: "Zoho", logo: "/zoho-crm-logo.png", position: { top: "3%", left: "45%" } },
  {
    name: "Twilio",
    logo: "/twilio-logo.jpg",
    position: { top: "4%", right: "25%" },
  },
  {
    name: "VinSolutions",
    logo: "/vinsolutions-logo.jpg",
    position: { top: "18%", left: "2%" },
  },
  {
    name: "ServiceTitan",
    logo: "/servicetitan-logo.png",
    position: { top: "20%", right: "2%" },
  },
  {
    name: "Jobber",
    logo: "/jobber-crm-logo.jpg",
    position: { top: "36%", left: "0%" },
  },
  {
    name: "Vagaro",
    logo: "/vagaro-logo.jpg",
    position: { top: "38%", right: "0%" },
  },
  {
    name: "MindBody",
    logo: "/mindbody-inspired-logo.png",
    position: { top: "54%", left: "2%" },
  },
  {
    name: "Booker",
    logo: "/booker-business-software-logo.jpg",
    position: { top: "56%", right: "2%" },
  },
  {
    name: "Follow Up Boss",
    logo: "/follow-up-boss-logo.png",
    position: { top: "72%", left: "5%" },
  },
  {
    name: "Close CRM",
    logo: "/close-crm-logo.jpg",
    position: { top: "74%", right: "5%" },
  },
  {
    name: "Intercom",
    logo: "/intercom-logo.jpg",
    position: { bottom: "12%", left: "15%" },
  },
  {
    name: "Google Workspace",
    logo: "/google-workspace-logo.png",
    position: { bottom: "14%", right: "15%" },
  },
  {
    name: "Zapier",
    logo: "/zapier-logo.jpg",
    position: { top: "10%", left: "14%" },
  },
  {
    name: "Pipedrive",
    logo: "/pipedrive-logo.jpg",
    position: { top: "12%", right: "14%" },
  },
  {
    name: "Microsoft Dynamics",
    logo: "/microsoft-dynamics-logo.jpg",
    position: { top: "27%", left: "8%" },
  },
  {
    name: "Zendesk",
    logo: "/zendesk-logo.jpg",
    position: { top: "29%", right: "8%" },
  },
  {
    name: "Slack",
    logo: "/slack-logo.jpg",
    position: { top: "45%", left: "6%" },
  },
  {
    name: "Monday.com",
    logo: "/monday-logo.jpg",
    position: { top: "47%", right: "6%" },
  },
  {
    name: "ActiveCampaign",
    logo: "/activecampaign-logo.jpg",
    position: { top: "63%", left: "8%" },
  },
  {
    name: "Calendly",
    logo: "/calendly-logo.jpg",
    position: { top: "65%", right: "8%" },
  },
  {
    name: "Custom API",
    logo: "/custom-api-logo.jpg",
    position: { bottom: "6%", left: "28%" },
  },
  {
    name: "Make",
    logo: "/make-logo.jpg",
    position: { bottom: "8%", right: "28%" },
  },
  {
    name: "vAuto",
    logo: "/vauto-logo.jpg",
    position: { top: "16%", left: "35%" },
  },
  {
    name: "Cox Automotive",
    logo: "/cox-automotive-logo.jpg",
    position: { top: "18%", right: "35%" },
  },
]

export function Integrations() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % integrations.length)
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden bg-white px-4 md:px-8 py-20 md:py-32">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 md:mb-20 text-center px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Easily integrate into
            <br />
            any environment
          </h2>
        </div>

        <div className="relative mx-auto h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-[900px]">
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute left-1/2 top-1/2 h-24 w-24 md:h-32 md:w-32 -translate-x-1/2 -translate-y-1/2 animate-[pulse_3s_ease-in-out_infinite] rounded-full border-2 border-blue-500/40 shadow-[0_0_30px_rgba(59,130,246,0.3)]" />
            <div className="absolute left-1/2 top-1/2 h-32 w-32 md:h-48 md:w-48 -translate-x-1/2 -translate-y-1/2 animate-[pulse_3s_ease-in-out_infinite_0.5s] rounded-full border-2 border-blue-400/30 shadow-[0_0_40px_rgba(59,130,246,0.2)]" />
            <div className="absolute left-1/2 top-1/2 h-40 w-40 md:h-64 md:w-64 -translate-x-1/2 -translate-y-1/2 animate-[pulse_3s_ease-in-out_infinite_1s] rounded-full border-2 border-blue-300/20 shadow-[0_0_50px_rgba(59,130,246,0.1)]" />

            <div className="relative flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-2xl md:rounded-3xl border border-gray-100 md:border-2 bg-white p-2 md:p-3 transition-all duration-500">
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-blue-500/10 to-transparent opacity-50" />
              <Image
                src="/openflow-icon-only.png"
                alt="OpenFlow AI"
                width={90}
                height={90}
                className="relative z-10 object-contain w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
              />
            </div>
          </div>

          {integrations.map((integration, index) => (
            <div
              key={integration.name}
              className={`absolute flex items-center justify-center rounded-xl md:rounded-2xl border border-gray-100 md:border-2 bg-white p-2 md:p-3 transition-all duration-700 ease-out hover:scale-110 ${
                index > 11 ? "hidden sm:flex" : ""
              }`}
              style={{
                ...integration.position,
                width: "56px",
                height: "56px",
                transform: activeIndex === index ? "scale(1.2) translateY(-8px)" : "scale(1) translateY(0)",
                boxShadow:
                  activeIndex === index
                    ? "0 25px 50px rgba(59, 130, 246, 0.25), 0 10px 20px rgba(0, 0, 0, 0.15), 0 0 40px rgba(59, 130, 246, 0.3)"
                    : "0 4px 12px rgba(0, 0, 0, 0.08)",
                zIndex: activeIndex === index ? 5 : 1,
                opacity: activeIndex === index ? 1 : 0.75,
                background: activeIndex === index ? "linear-gradient(135deg, #ffffff 0%, #eff6ff 100%)" : "#ffffff",
                borderColor: activeIndex === index ? "#93c5fd" : "#f3f4f6",
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-blue-400/0 to-blue-500/0 transition-opacity duration-700"
                style={{
                  opacity: activeIndex === index ? 0.1 : 0,
                }}
              />
              <Image
                src={integration.logo || "/placeholder.svg"}
                alt={integration.name}
                width={60}
                height={60}
                className="relative z-10 h-full w-full object-contain transition-all duration-700"
                style={{
                  filter: activeIndex === index ? "brightness(1.05) saturate(1.1)" : "brightness(0.95) saturate(0.9)",
                }}
              />
            </div>
          ))}

          <svg className="pointer-events-none absolute inset-0 h-full w-full" style={{ zIndex: 0 }}>
            <defs>
              <radialGradient id="lineGradient">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#93c5fd" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="activeLineGradient">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.2" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {integrations.map((integration, index) => {
              const centerX = 450
              const centerY = 300
              const integrationX =
                integration.position.left !== undefined
                  ? (Number.parseFloat(integration.position.left) / 100) * 900 + 48
                  : 900 - (Number.parseFloat(integration.position.right || "0") / 100) * 900 - 48
              const integrationY =
                integration.position.top !== undefined
                  ? (Number.parseFloat(integration.position.top) / 100) * 600 + 48
                  : 600 - (Number.parseFloat(integration.position.bottom || "0") / 100) * 600 - 48

              return (
                <line
                  key={`line-${index}`}
                  x1={centerX}
                  y1={centerY}
                  x2={integrationX}
                  y2={integrationY}
                  stroke={activeIndex === index ? "url(#activeLineGradient)" : "url(#lineGradient)"}
                  strokeWidth={activeIndex === index ? "4" : "1.5"}
                  strokeDasharray={activeIndex === index ? "0" : "8,8"}
                  strokeLinecap="round"
                  filter={activeIndex === index ? "url(#glow)" : "none"}
                  className="transition-all duration-700 ease-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0.25,
                  }}
                />
              )
            })}
          </svg>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <a
            href="/integrations"
            className="rounded-full bg-blue-600 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:scale-105"
          >
            See Integrations
          </a>
        </div>
      </div>
    </section>
  )
}
