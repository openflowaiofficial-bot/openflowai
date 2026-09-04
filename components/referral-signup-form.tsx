"use client"

import { useState } from "react"
import { CheckCircle2, Loader2 } from "lucide-react"
import { track } from "@/lib/tracking"

// Same n8n webhook the demo intake form uses. Every payload carries formType: "referral"
// so the workflow can route it separately. Override with NEXT_PUBLIC_REFERRAL_WEBHOOK_URL.
const WEBHOOK_URL =
  process.env.NEXT_PUBLIC_REFERRAL_WEBHOOK_URL ??
  "https://keebler-automations.app.n8n.cloud/webhook/2183c551-7a08-4ca9-a9f5-00cc38292818"

const CAL_URL = "https://cal.com/openflowai-meeting/30min"

type Fields = { name: string; email: string; phone: string; knows: string }

const EMPTY: Fields = { name: "", email: "", phone: "", knows: "" }

export function ReferralSignupForm() {
  const [fields, setFields] = useState<Fields>(EMPTY)
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle")

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields((f) => ({ ...f, [key]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === "sending") return
    setStatus("sending")

    const params = new URLSearchParams(typeof window === "undefined" ? "" : window.location.search)
    const payload = {
      formType: "referral",
      ...fields,
      source: params.get("utm_source") ?? params.get("ref") ?? "direct",
      campaign: params.get("utm_campaign") ?? "",
      page: typeof window === "undefined" ? "/referral" : window.location.pathname,
      submittedAt: new Date().toISOString(),
    }

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        mode: "no-cors",
      })
      track("referrer_signed_up", { source: payload.source, campaign: payload.campaign })
      setStatus("done")
    } catch {
      setStatus("error")
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
        <CheckCircle2 className="mx-auto h-10 w-10 text-blue-400" />
        <h3 className="mt-4 text-xl font-semibold text-white">You&apos;re in.</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">
          We&apos;ll email you within a day with how it works and something easy to forward. Want to talk it through
          first?
        </p>
        <a
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("book_call_clicked", { placement: "referral_form_done" })}
          className="mt-5 inline-block rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
        >
          Book a quick call
        </a>
      </div>
    )
  }

  const input =
    "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"

  return (
    <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-sm sm:p-8">
      <h3 className="text-lg font-semibold text-white">Start earning. Takes 30 seconds.</h3>
      <p className="mt-1 text-sm text-slate-400">No cost, no selling. We&apos;ll send you how it works.</p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <input
          className={input}
          placeholder="Your name"
          autoComplete="name"
          required
          value={fields.name}
          onChange={set("name")}
        />
        <input
          className={input}
          type="email"
          placeholder="Email"
          autoComplete="email"
          required
          value={fields.email}
          onChange={set("email")}
        />
        <input
          className={`${input} sm:col-span-2`}
          type="tel"
          placeholder="Phone (optional)"
          autoComplete="tel"
          value={fields.phone}
          onChange={set("phone")}
        />
        <textarea
          className={`${input} sm:col-span-2`}
          rows={2}
          placeholder="Who do you know? A business type is enough — “my dentist”, “a plumber”, “a friend with a salon”."
          value={fields.knows}
          onChange={set("knows")}
        />
      </div>

      {status === "error" && (
        <p className="mt-3 text-sm text-red-300">That didn&apos;t send. Check your connection and try once more.</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-base font-medium text-white shadow-lg shadow-blue-600/30 transition-all duration-200 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          "Sign me up"
        )}
      </button>
      <p className="mt-3 text-center text-xs text-slate-500">
        Rather talk first?{" "}
        <a
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("book_call_clicked", { placement: "referral_form" })}
          className="text-slate-300 underline-offset-2 hover:underline"
        >
          Book a time
        </a>
        .
      </p>
    </form>
  )
}
