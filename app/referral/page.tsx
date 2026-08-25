"use client"

import { useState } from "react"
import Header from "@/components/header"
import { Footer } from "@/components/footer"
import {
  Phone,
  CalendarCheck,
  Repeat,
  Handshake,
  Check,
  ArrowRight,
  ShieldCheck,
} from "lucide-react"

const goodFits = [
  "Dental & medical practices",
  "Veterinary clinics",
  "Salons & hair studios",
  "Med spas",
  "Home services",
  "Car dealerships",
  "Real estate investors",
]

const steps = [
  {
    icon: Handshake,
    title: "You make the intro",
    body: "Send us their name. An email, a text, a quick call — however's easy. You can even just tell us who to reach out to.",
  },
  {
    icon: Phone,
    title: "We do the work",
    body: "The demo, the build, the onboarding, the support, and the billing. All of it is on us. You never pitch or quote a price.",
  },
  {
    icon: Repeat,
    title: "You get paid, every month",
    body: "When they become a paying client, you get 15% of their bill. Every month after that, too — for as long as they stay.",
  },
]

const proofStats = [
  { stat: "1,000,000+", label: "minutes of inbound calls answered every month" },
  { stat: "$50M+/yr", label: "some clients that big — others run a single location" },
  { stat: "24/7", label: "every call answered — nights, weekends, the lunch rush" },
]

const namedClients = [
  "O'Daniel Mazda",
  "VetComm",
  "The Red Theory Studio",
  "The Salon Center",
  "Vibrant Health Care",
]

type Status = "idle" | "submitting" | "success" | "error"

export default function ReferralPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", referring: "", company: "" })
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("submitting")
    setErrorMsg("")
    try {
      const res = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.ok) {
        setStatus("success")
      } else {
        setStatus("error")
        setErrorMsg(
          "We couldn't save that just now. Email us at openflowaiofficial@gmail.com and we'll take it from there."
        )
      }
    } catch {
      setStatus("error")
      setErrorMsg(
        "We couldn't save that just now. Email us at openflowaiofficial@gmail.com and we'll take it from there."
      )
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ===== Hero ===== */}
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

        <div className="relative mx-auto max-w-4xl px-6 pt-28 pb-20 md:pt-36 md:pb-28 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-blue-100 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            OpenFlow AI Referral Program
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08]">
            Know a business that keeps
            <br className="hidden sm:block" /> missing calls? <span className="text-blue-400">Get paid.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
            You make one introduction. We handle the demo, the build, the onboarding, the support, and the billing.
            When they become a client, you get <strong className="text-white">15% of what they pay us — every month,
            for as long as they stay.</strong>
          </p>

          <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="#refer"
              className="rounded-full bg-blue-600 px-7 py-3.5 text-base font-medium shadow-lg shadow-blue-600/30 transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5"
            >
              Refer a business
            </a>
            <a
              href="#how"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-base font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
            >
              How it works
            </a>
          </div>

          <div className="mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-blue-400" /> No cost to you
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-blue-400" /> You never sell
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-blue-400" /> Paid every month
            </span>
          </div>
        </div>
      </section>

      {/* ===== You already know someone ===== */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Start here</p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-balance">
            You already know someone.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Your dentist. Your vet. Your barber. Your mechanic. The guy who did your roof. Almost everyone knows two or
            three local business owners. One of them is missing calls right now.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-gray-900 font-medium">
            The tell: if they answer their own phone, and it rings while they're busy with a customer, they're a fit.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-2.5">
          {goodFits.map((fit) => (
            <span
              key={fit}
              className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700"
            >
              {fit}
            </span>
          ))}
        </div>
      </section>

      {/* ===== How it works ===== */}
      <section id="how" className="scroll-mt-20 bg-[#f8f9fb] px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">How it works</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-balance">
              You make the intro. We do the work.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              You never pitch, quote a price, or handle a problem. That part is our job.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="relative rounded-2xl border border-gray-200 bg-white p-7">
                  <span className="absolute right-6 top-6 text-sm font-bold text-gray-300">0{i + 1}</span>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-gray-600">{step.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== Is there a catch ===== */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="mx-auto max-w-[1000px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">The honest part</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-balance">
              Is there a catch? No.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {[
              {
                q: "Is this one of those MLM things?",
                a: "No. There's no downline, nobody to recruit under you, and nothing to buy in. You make one introduction. That's the whole job.",
              },
              {
                q: "What does it cost me?",
                a: "Nothing. No signup fee, no monthly cost, and you don't have to be a client. Anyone can do it.",
              },
              {
                q: "Am I on the hook for anything?",
                a: "No. You don't sell, support, or manage anything. You make the intro and we take it from there.",
              },
              {
                q: "Why pay so much for a referral?",
                a: "Because a warm introduction beats any ad we could run. We'd rather pay you than a platform. Simple as that.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-base font-semibold text-gray-900">{item.q}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Proof ===== */}
      <section className="bg-[#070b18] px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-white">
        <div className="mx-auto max-w-[1100px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">This is already running</p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
              Real businesses. Real phones. Answered.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              You're not introducing people to a science project. This is live, every day, across the country.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {proofStats.map((p) => (
              <div key={p.stat} className="rounded-2xl border border-white/10 bg-white/5 p-7 text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">{p.stat}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Answering phones for</p>
            <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-300">
              {namedClients.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== What OpenFlow does + the math ===== */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="mx-auto max-w-[1000px] grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">What they get</p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              A phone agent built for their business
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
              We build a custom AI phone agent on our own voice infrastructure. It answers every call, 24/7 — nights,
              weekends, the Saturday rush. It talks like their business, checks the real calendar, and books or
              reschedules right on the call. Every call lands in their system with a recording, a transcript, a summary,
              and whether the caller was hot, warm, or cold.
            </p>
            <ul className="mt-5 space-y-2.5">
              {[
                "Answers every call, day or night",
                "Books and reschedules live on the calendar",
                "Built for their business — not a menu tree",
              ].map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[15px] text-gray-700">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
              <CalendarCheck className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">How much can you make?</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
              Honest answer: it depends who you introduce. 15% of a single-location shop is real money every month. 15%
              of a company doing tens of millions a year is a lot more.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-gray-900 font-medium">
              One big introduction can be worth more than a dozen small ones. And it all pays monthly, for as long as
              they stay a client.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Form ===== */}
      <section id="refer" className="scroll-mt-20 bg-[#f8f9fb] px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="mx-auto max-w-[560px]">
          {status === "success" ? (
            <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                <Check className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Got it. Thank you.</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
                We'll reach out within a day to line up the introduction. You make it however's easiest — an email, a
                text, a quick call. Then we take it from there, and the month they start paying, you start getting paid.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">Know someone?</p>
                <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-balance">
                  Start the introduction
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
                  Drop your info below. No cost, no commitment. We'll reach out and handle the rest.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4 rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
                {/* Honeypot — hidden from real users */}
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={update}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={update}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-[15px] text-gray-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Jordan Smith"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-[15px] text-gray-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={update}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-[15px] text-gray-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="referring" className="mb-1.5 block text-sm font-medium text-gray-700">
                    Who are you thinking of introducing? <span className="text-gray-400">(optional)</span>
                  </label>
                  <textarea
                    id="referring"
                    name="referring"
                    rows={3}
                    value={form.referring}
                    onChange={update}
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-[15px] text-gray-900 outline-none transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="The business or person — even a rough idea. My dentist, the shop that did my brakes, etc."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {status === "submitting" ? "Sending..." : "Send it over"}
                  {status !== "submitting" && <ArrowRight className="h-4 w-4" />}
                </button>

                {status === "error" && (
                  <p className="text-center text-sm text-red-600">{errorMsg}</p>
                )}

                <p className="flex items-center justify-center gap-1.5 text-center text-xs text-gray-500">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  We only use this to reach out about the introduction. Nothing else.
                </p>
              </form>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
