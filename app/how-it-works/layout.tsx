import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how OpenFlow AI sets up your voice agent, connects to your tools, and starts answering calls, texts, and emails for your business in days.",
  alternates: { canonical: "/how-it-works" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
