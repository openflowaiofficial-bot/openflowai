import Link from "next/link"
import { Phone, MessageSquare, RefreshCw, ArrowRight } from "lucide-react"

const features = [
  {
    icon: Phone,
    title: "AI Voice Agents",
    body: "Answer, qualify, and book on every inbound and outbound call, 24/7 — in natural conversation your callers trust.",
    href: "/products/ai-voice",
  },
  {
    icon: MessageSquare,
    title: "SMS & Messaging",
    body: "Reply across text, email, and web the moment a lead reaches out, with full context carried between every channel.",
    href: "/products/sms-automation",
  },
  {
    icon: RefreshCw,
    title: "Built-in CRM + Ora",
    body: "Every call and text lands as a lead — then Ora, your AI assistant, books, texts, and runs campaigns on command.",
    href: "/products/crm",
  },
]

export function Features() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">The platform</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-balance">
            Everything you need to never miss a customer
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600">
            One system to answer, qualify, schedule, and follow up — across voice, text, and email.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-7 md:p-8 transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-sm">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-gray-600">{feature.body}</p>
                <Link
                  href={feature.href}
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
