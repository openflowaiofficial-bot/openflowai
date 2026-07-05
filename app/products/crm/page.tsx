import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/header"
import { Footer } from "@/components/footer"
import {
  KanbanSquare,
  MessagesSquare,
  PhoneOutgoing,
  CalendarCheck,
  Workflow,
  BarChart3,
  KeyRound,
  ShieldCheck,
  Users,
  Tag,
  ListChecks,
  Phone,
  Check,
  ArrowRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "CRM — The Command Center Behind Your AI",
  description:
    "OpenFlow CRM turns every AI call, text, and appointment into a lead in one place: pipelines, transcripts, two-way SMS, calendar booking, workflow automation, and analytics.",
  alternates: { canonical: "/products/crm" },
}

const pillars = [
  {
    icon: KanbanSquare,
    title: "Leads & pipeline",
    body: "A visual kanban board with stages tailored to your industry. Every lead carries its full history — custom fields, tags, lists, and a complete activity timeline.",
    points: ["Industry-specific pipelines", "Custom fields, tags & lists", "Full activity timeline per lead"],
  },
  {
    icon: MessagesSquare,
    title: "Every conversation, one place",
    body: "Calls, transcripts, recordings, and sentiment sit alongside a two-way text thread from your own number — in one unified inbox, per contact.",
    points: ["Call transcripts, recordings & sentiment", "Two-way SMS from your own number", "Unified conversations inbox"],
  },
  {
    icon: PhoneOutgoing,
    title: "Power dialer",
    body: "Work through call lists fast with a built-in outbound dialer — every call logged, transcribed, and attached to the right lead automatically.",
    points: ["Outbound call lists", "Auto-logging & transcription", "Live call status"],
  },
  {
    icon: CalendarCheck,
    title: "Appointments & calendar",
    body: "Your AI books appointments straight into the CRM and syncs them to Google or Outlook. Availability respects both CRM and calendar busy times.",
    points: ["Google & Outlook sync", "Real-time availability", "AI books during the call"],
  },
  {
    icon: Workflow,
    title: "Automation & campaigns",
    body: "Trigger multi-step workflows on any event, run SMS blast campaigns and drip sequences, and keep the team on track with tasks and reminders.",
    points: ["Multi-step workflow builder", "SMS blasts & drip sequences", "Tasks, reminders & notifications"],
  },
  {
    icon: BarChart3,
    title: "Analytics & dashboard",
    body: "A live dashboard of the numbers that matter — calls handled, leads created, appointments booked, and pipeline value — at a glance.",
    points: ["KPI dashboard", "Pipeline reporting", "Per-agent attribution"],
  },
]

const everything = [
  "Multi-tenant workspaces",
  "Kanban lead pipeline",
  "Contacts with import & export",
  "Custom fields & tags",
  "Contact lists & segments",
  "Call transcripts & recordings",
  "Call sentiment analysis",
  "Unified conversations inbox",
  "Two-way SMS (your own number)",
  "SMS blast campaigns",
  "SMS drip sequences",
  "Outbound power dialer",
  "Workflow automation",
  "Tasks & reminders",
  "Appointments & booking",
  "Google & Outlook calendar sync",
  "Live availability lookup",
  "Analytics dashboard",
  "AI agent management",
  "Public REST API",
  "Team invites & roles",
  "In-app notifications",
]

export default function CrmPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#070b18] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[36%] h-[480px] w-[760px] max-w-[95vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[130px]" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(148,163,184,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.07) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#070b18] to-transparent" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 pt-28 md:pt-36 pb-16 md:pb-24 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-blue-100 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            OpenFlow CRM
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08]">
            The command center behind your AI
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
            Every call, lead, text, and appointment your AI handles flows into one CRM — built for how modern service
            businesses actually run. No spreadsheets, no manual entry, nothing slipping through.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/partner-intake"
              className="rounded-full bg-blue-600 px-7 py-3.5 text-base font-medium shadow-lg shadow-blue-600/30 transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/40"
            >
              Book a demo
            </Link>
            <Link
              href="/how-it-works"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
            >
              How it works
            </Link>
          </div>
        </div>
      </section>

      {/* Auto-capture band */}
      <section className="border-b border-gray-100 bg-white px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <Phone className="h-6 w-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-balance">
            Every call becomes a lead — automatically
          </h2>
          <p className="mx-auto mt-4 text-base md:text-lg leading-relaxed text-gray-600">
            The moment your AI agent finishes a call, the caller becomes a lead in the right pipeline — with the
            transcript, summary, sentiment, and any details captured (job type, address, budget) already attached. Your
            team opens the CRM to work leads, not to type them in.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-[#f8f9fb] px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Inside the CRM</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-balance">
              A full platform, not just a call log
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{pillar.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-gray-600">{pillar.body}</p>
                  <ul className="mt-5 space-y-2">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* AI-native + security row */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="mx-auto grid max-w-[1100px] gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-50 to-white p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <KeyRound className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Built to work with your AI, live</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
              A secure REST API lets your voice agent act on the CRM mid-conversation — look up a returning caller, check
              what&apos;s actually open on the calendar, and book the appointment before hanging up.
            </p>
            <ul className="mt-5 space-y-2">
              {["Look up & upsert contacts by phone", "Book appointments during the call", "Real-time availability lookup"].map(
                (p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                    <span>{p}</span>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-slate-50 to-white p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Secure &amp; isolated by design</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
              Each business is a fully isolated workspace. Credentials are encrypted at rest, API keys are hashed, and
              inbound webhooks are signature-verified — so one account can never see another&apos;s data.
            </p>
            <ul className="mt-5 space-y-2">
              {["Per-business data isolation", "Encrypted credentials (AES-256)", "Signature-verified webhooks"].map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Everything included */}
      <section className="bg-[#f8f9fb] px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Everything included</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-balance">
              One platform, every capability
            </h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600">
              No add-ons, no piecing together five tools. It&apos;s all in the CRM your AI already feeds.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {everything.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800"
              >
                <Check className="h-4 w-4 shrink-0 text-blue-600" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-b from-[#1a2332] to-[#0f1419] px-4 md:px-8 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white text-balance">
            See the CRM your AI runs on
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base md:text-lg leading-relaxed text-gray-300">
            Book a demo and we&apos;ll walk you through a live workspace with your industry&apos;s pipeline already set
            up.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/partner-intake"
              className="rounded-full bg-blue-600 px-8 py-3.5 text-base font-medium text-white shadow-lg transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              Book a demo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
