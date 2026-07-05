import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "AI Voice Agents",
  description:
    "AI voice agents that answer every call in a natural voice, qualify callers, book appointments, and route or escalate to your team when it matters.",
  alternates: { canonical: "/products/ai-voice" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
