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
  Check,
  ArrowRight,
  CalendarClock,
  UserCheck,
  Flame,
  PhoneForwarded,
} from "lucide-react"

export const metadata: Metadata = {
  title: "CRM — The Command Center Behind Your AI",
  description:
    "OpenFlow CRM turns every AI call and text into a lead, then the AI qualifies, checks your real calendar, books appointments, and hands off hot leads — tailored to your industry.",
  alternates: { canonical: "/products/crm" },
}

// The concrete actions the AI text assistant takes (from the product).
const actions = [
  {
    icon: UserCheck,
    title: "Qualifies & scores every lead",
    body: "Reads each conversation, asks the right questions for your trade, and tags the lead hot, warm, or cold — automatically moving them into your pipeline.",
  },
  {
    icon: CalendarClock,
    title: "Checks your real calendar",
    body: "Before offering a time, it looks up genuine open slots across the CRM and your connected Google/Outlook calendar — so it only proposes times you can actually keep.",
  },
  {
    icon: CalendarCheck,
    title: "Books the appointment",
    body: "Once the lead confirms a time, it books it, syncs it to your calendar, drops them into the right pipeline stage, and texts you that it happened.",
  },
  {
    icon: PhoneForwarded,
    title: "Hands off to a human",
    body: "If a lead is hot, upset, or asks something it shouldn't answer (a firm price, legal), it flags them, notifies you, and steps back so your team can take over.",
  },
]

// Real per-industry conversation goals + pipelines (from the CRM's industry config).
const industries = [
  {
    name: "Roofing",
    asks: "Roof age, leak or storm damage, whether insurance is involved, and timeline.",
    books: "A free inspection",
    pipeline: ["New Lead", "Inspection Scheduled", "Estimate Sent", "Job Won"],
  },
  {
    name: "Automotive",
    asks: "Which vehicle, service or purchase, and how soon they need it.",
    books: "A service or sales appointment",
    pipeline: ["New Lead", "Appointment Booked", "In Service", "Closed Won"],
  },
  {
    name: "Real Estate",
    asks: "Property condition, timeline, motivation, and rough price expectations.",
    books: "A walkthrough or consult",
    pipeline: ["New Lead", "Qualified", "Showing Scheduled", "Under Contract", "Closed"],
  },
  {
    name: "HVAC",
    asks: "Repair vs. replace, system age, and how urgent it is.",
    books: "A diagnostic / service visit",
    pipeline: ["New Lead", "Diagnostic Booked", "Quote Sent", "Won"],
  },
  {
    name: "Handyman",
    asks: "What needs doing, the timeline, and a rough budget.",
    books: "An estimate visit",
    pipeline: ["New Request", "Quoted", "Scheduled", "Completed"],
  },
]

const pillars = [
  {
    icon: KanbanSquare,
    title: "Leads & pipeline",
    body: "A visual kanban with stages tailored to your industry, plus custom fields, tags, lists, and a full activity timeline on every lead.",
  },
  {
    icon: MessagesSquare,
    title: "Every conversation, one place",
    body: "Calls, transcripts, recordings, and sentiment sit next to a two-way text thread from your own number — in one unified inbox.",
  },
  {
    icon: PhoneOutgoing,
    title: "Power dialer",
    body: "Work call lists fast with a built-in outbound dialer; every call is logged, transcribed, and attached to the right lead.",
  },
  {
    icon: Workflow,
    title: "Automation & campaigns",
    body: "Trigger multi-step workflows on any event, run SMS blast campaigns and drip sequences, and keep the team moving with tasks.",
  },
  {
    icon: CalendarCheck,
    title: "Appointments & calendar",
    body: "Two-way Google and Outlook sync, real-time availability, and appointments the AI can book during the conversation.",
  },
  {
    icon: BarChart3,
    title: "Analytics & dashboard",
    body: "A live view of calls handled, leads created, appointments booked, and pipeline value — with per-agent attribution.",
  },
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
            A CRM that doesn&apos;t just store leads — it works them
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
            Every call and text your AI handles flows in as a lead — then the AI qualifies it, checks your real
            calendar, books the appointment, and hands off the hot ones. All in one place, tuned to your industry.
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

      {/* Conversations that take action */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Conversations that take action</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-balance">
              The AI doesn&apos;t just reply — it does the work
            </h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600">
              When a lead texts in, the AI holds a real conversation, checks your calendar, and books the job — grounded
              in your actual availability, never making up a time or a price.
            </p>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Chat mockup */}
            <div className="mx-auto w-full max-w-md">
              <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 shadow-xl">
                <div className="flex items-center gap-2 border-b border-gray-200 bg-white px-5 py-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    AI
                  </div>
                  <div className="text-sm font-semibold text-gray-900">Summit Roofing · Text</div>
                </div>
                <div className="space-y-3 p-5">
                  <ChatBubble side="in">Hey, my roof started leaking after the storm last night</ChatBubble>
                  <ChatBubble side="out">
                    Sorry to hear that! Is water still coming in right now, and roughly how old is the roof?
                  </ChatBubble>
                  <ChatBubble side="in">Maybe 15 years. Yeah it&apos;s dripping into the attic</ChatBubble>
                  <ChatBubble side="out">
                    Got it — let&apos;s get someone out fast. I have tomorrow at 9:00 AM or 1:00 PM open for a free
                    inspection. Which works better?
                  </ChatBubble>
                  <ChatBubble side="in">1pm works</ChatBubble>
                  <ChatBubble side="out">
                    Perfect — you&apos;re booked for tomorrow at 1:00 PM. You&apos;ll get a confirmation text shortly.
                  </ChatBubble>
                </div>
                <div className="flex flex-wrap gap-2 border-t border-gray-200 bg-white px-5 py-4">
                  <ActionChip icon={UserCheck}>Qualified: roof age, storm damage</ActionChip>
                  <ActionChip icon={CalendarClock}>Checked calendar</ActionChip>
                  <ActionChip icon={CalendarCheck}>Booked inspection</ActionChip>
                  <ActionChip icon={Flame}>Marked hot → pipeline</ActionChip>
                </div>
              </div>
            </div>

            {/* Actions list */}
            <div className="grid gap-5 sm:grid-cols-2">
              {actions.map((action) => {
                const Icon = action.icon
                return (
                  <div key={action.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900">{action.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{action.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Trained for your trade */}
      <section className="bg-[#f8f9fb] px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Trained for your trade</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-balance">
              It talks like your business — and your pipeline matches
            </h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-600">
              Set up a workspace for your industry and the AI already knows what to ask and what to book, with a
              pipeline seeded for how you actually run.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <div key={ind.name} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 md:p-7">
                <h3 className="text-lg font-semibold text-gray-900">{ind.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  <span className="font-medium text-gray-800">Asks about:</span> {ind.asks}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  <span className="font-medium text-gray-800">Books:</span> {ind.books}.
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-1.5">
                  {ind.pipeline.map((stage, i) => (
                    <span key={stage} className="flex items-center gap-1.5">
                      <span className="rounded-md bg-blue-50 px-2 py-1 text-[11px] font-medium text-blue-700">
                        {stage}
                      </span>
                      {i < ind.pipeline.length - 1 && <ArrowRight className="h-3 w-3 text-gray-300" />}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex flex-col justify-center rounded-2xl border border-dashed border-gray-300 bg-white/60 p-6 md:p-7 text-center">
              <p className="text-sm font-medium text-gray-700">Not on the list?</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Any service business can set a custom persona and pipeline — the AI adapts to your questions and stages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform pillars */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">The full platform</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-balance">
              Everything a modern team runs on
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
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* AI-native + security */}
      <section className="bg-[#f8f9fb] px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="mx-auto grid max-w-[1100px] gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <KeyRound className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Your voice AI can act on it, live</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
              A secure REST API lets your phone agent use the same tools mid-call — look up a returning caller, check
              real availability, and book before hanging up.
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

          <div className="rounded-2xl border border-gray-200 bg-white p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Secure &amp; isolated by design</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
              Each business is a fully isolated workspace. Credentials are encrypted at rest, API keys are hashed, and
              inbound webhooks are signature-verified.
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

      {/* CTA */}
      <section className="bg-gradient-to-b from-[#1a2332] to-[#0f1419] px-4 md:px-8 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white text-balance">
            See it work a real conversation
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base md:text-lg leading-relaxed text-gray-300">
            Book a demo and we&apos;ll show the AI qualify a lead, check the calendar, and book an appointment — live, in
            your industry&apos;s workspace.
          </p>
          <div className="mt-8 flex justify-center">
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

function ChatBubble({ side, children }: { side: "in" | "out"; children: React.ReactNode }) {
  const isOut = side === "out"
  return (
    <div className={`flex ${isOut ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-snug ${
          isOut ? "rounded-br-md bg-blue-600 text-white" : "rounded-bl-md border border-gray-200 bg-white text-gray-800"
        }`}
      >
        {children}
      </div>
    </div>
  )
}

function ActionChip({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-medium text-blue-700">
      <Icon className="h-3 w-3" />
      {children}
    </span>
  )
}
