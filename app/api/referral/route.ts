import { NextResponse } from "next/server"

// Referral signups. Forwarded to whatever destination is configured via env:
//  - REFERRAL_WEBHOOK_URL: an n8n/Zapier/webhook URL that emails or files the lead
//  - (optional) REFERRAL_CRM_API_URL + REFERRAL_CRM_API_KEY: post straight into
//    the OpenFlow CRM as a contact tagged "referral-partner"
// If nothing is configured the route returns ok:false so the page can show the
// "email us directly" fallback — no signup is silently lost.

type Payload = {
  name?: string
  email?: string
  phone?: string
  referring?: string
  company?: string // honeypot — real users never fill this
}

export async function POST(request: Request) {
  let body: Payload
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 })
  }

  // Honeypot: bots fill hidden fields. Pretend success, drop the submission.
  if (body.company) return NextResponse.json({ ok: true })

  const name = (body.name ?? "").trim()
  const email = (body.email ?? "").trim()
  const phone = (body.phone ?? "").trim()
  const referring = (body.referring ?? "").trim()

  if (!name || !email || !phone) {
    return NextResponse.json({ ok: false, error: "Name, email, and phone are required." }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 })
  }

  const record = {
    type: "referral",
    name,
    email,
    phone,
    referring: referring || null,
    submittedAt: new Date().toISOString(),
    source: "openflowai.io/referral",
  }

  const webhookUrl = process.env.REFERRAL_WEBHOOK_URL
  const crmApiUrl = process.env.REFERRAL_CRM_API_URL
  const crmApiKey = process.env.REFERRAL_CRM_API_KEY

  try {
    // Preferred: drop straight into the CRM as a contact, if configured.
    if (crmApiUrl && crmApiKey) {
      const [firstName, ...rest] = name.split(/\s+/)
      const res = await fetch(crmApiUrl, {
        method: "POST",
        headers: { Authorization: `Bearer ${crmApiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          last_name: rest.join(" ") || undefined,
          email,
          phone,
          source: "referral-partner",
          notes: referring ? `Referral partner. Thinking of introducing: ${referring}` : "Referral partner signup",
        }),
      })
      if (res.ok) return NextResponse.json({ ok: true })
      console.error("Referral CRM post failed:", res.status)
    }

    // Otherwise forward to the configured webhook.
    if (webhookUrl) {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      })
      if (res.ok) return NextResponse.json({ ok: true })
      console.error("Referral webhook failed:", res.status)
      return NextResponse.json({ ok: false, error: "Could not save your info." }, { status: 502 })
    }

    // Nothing configured yet — log it and tell the client to use the email fallback.
    console.warn("Referral submission received but no destination configured:", record)
    return NextResponse.json(
      { ok: false, error: "Not configured", fallbackEmail: "openflowaiofficial@gmail.com" },
      { status: 503 }
    )
  } catch (e) {
    console.error("Referral submission error:", e)
    return NextResponse.json({ ok: false, error: "Something went wrong." }, { status: 500 })
  }
}
