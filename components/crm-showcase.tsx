import Link from "next/link"
import { Sparkles, ArrowRight, Check } from "lucide-react"

const points = [
  "Calls & texts become leads — no manual entry",
  "Ora books, texts, and launches campaigns on command",
  "Pipelines, conversations, and calendar in one place",
]

export function CrmShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#070b18] text-white px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/2 h-[420px] w-[640px] max-w-[90vw] -translate-y-1/2 rounded-full bg-blue-600/15 blur-[130px]" />
      </div>

      <div className="relative mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-2 lg:items-center">
        {/* Copy */}
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-blue-100 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            OpenFlow CRM + Ora
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-balance">
            One CRM for every lead — and an assistant you just talk to
          </h2>
          <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed text-slate-300">
            Every call and text your AI handles becomes a lead automatically. Then Ora, your built-in assistant, books
            appointments, texts customers, and runs campaigns — just by asking.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm md:text-base text-slate-200">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              href="/products/crm"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-base font-medium shadow-lg shadow-blue-600/30 transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Explore the CRM
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Ora mini chat */}
        <div className="mx-auto w-full max-w-md">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl">
            <div className="flex items-center gap-2 border-b border-gray-200 px-5 py-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <Sparkles className="h-4 w-4" />
              </div>
              <div className="text-sm font-semibold text-gray-900">Ora · Your assistant</div>
            </div>
            <div className="space-y-3 p-5">
              <Bubble out>Book Mike a walkthrough Thursday at 10</Bubble>
              <Bubble>
                Thursday 10:00 AM is open — booked it and synced it to your calendar. Want me to text Mike a
                confirmation?
              </Bubble>
              <Bubble out>yes</Bubble>
              <Bubble>Sent. He&apos;s on the calendar and moved to &ldquo;Showing Scheduled.&rdquo;</Bubble>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Bubble({ out, children }: { out?: boolean; children: React.ReactNode }) {
  return (
    <div className={`flex ${out ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-snug ${
          out ? "rounded-br-md bg-blue-600 text-white" : "rounded-bl-md border border-gray-200 bg-gray-50 text-gray-800"
        }`}
      >
        {children}
      </div>
    </div>
  )
}
