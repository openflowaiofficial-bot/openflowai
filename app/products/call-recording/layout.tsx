import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "AI Call Recording & Transcription",
  description:
    "Record and transcribe every call automatically, with searchable transcripts and summaries so nothing a customer says ever slips through the cracks.",
  alternates: { canonical: "/products/call-recording" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
