import type { Metadata } from "next"
import Link from "next/link"
import { Check } from "lucide-react"
import Header from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Custom pricing for OpenFlow AI voice agents, tailored to your call volume and workflows. Book a demo for a quote.",
  alternates: { canonical: "/pricing" },
}

const tiers = [
  {
    name: "Launch",
    tagline: "For single-location businesses getting started with AI.",
    features: [
      "AI voice agent for inbound calls",
      "Appointment booking & reminders",
      "SMS follow-up",
      "Calendar & CRM integration",
      "Call transcripts & summaries",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Scale",
    tagline: "For growing teams that need more volume and automation.",
    features: [
      "Everything in Launch",
      "Outbound calling & lead follow-up",
      "Multiple numbers & call routing",
      "Custom workflows & automations",
      "Conversation analytics dashboard",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    tagline: "For multi-location operators and regulated industries.",
    features: [
      "Everything in Scale",
      "Multi-location management",
      "Custom integrations & API access",
      "Dedicated onboarding & success manager",
      "Security review support",
      "Compliance discussion (e.g. healthcare)",
    ],
    highlighted: false,
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <Header />

      <section className="px-4 sm:px-6 pt-28 md:pt-36 pb-10 md:pb-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">Pricing</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-balance">
            Pricing that scales with your call volume
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base md:text-lg leading-relaxed text-gray-600">
            Every plan is tailored to your business, your call volume, and the workflows you want to automate. Book a
            quick demo and we&apos;ll put together a quote that fits.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-16 md:pb-24">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-2xl border p-7 md:p-8 ${
                tier.highlighted
                  ? "border-blue-600 bg-white shadow-xl ring-1 ring-blue-600"
                  : "border-gray-200 bg-white shadow-sm"
              }`}
            >
              {tier.highlighted && (
                <span className="mb-4 inline-block w-fit rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                  Most popular
                </span>
              )}
              <h2 className="text-xl font-bold text-gray-900">{tier.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{tier.tagline}</p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-3xl font-bold tracking-tight text-gray-900">Custom</span>
                <span className="text-sm text-gray-500">pricing</span>
              </div>

              <Link
                href="/partner-intake"
                className={`mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                  tier.highlighted
                    ? "bg-blue-600 text-white shadow-sm hover:bg-blue-700"
                    : "border border-gray-300 text-gray-900 hover:bg-gray-50"
                }`}
              >
                Book a demo
              </Link>

              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-gray-500">
          Not sure which plan fits? Tell us about your business and we&apos;ll recommend the right setup — no pressure,
          no long-term contracts.
        </p>
      </section>

      <Footer />
    </div>
  )
}
