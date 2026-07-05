import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "Connect OpenFlow AI to the CRMs, calendars, and scheduling tools you already use, so your voice agent works inside your existing workflow.",
  alternates: { canonical: "/integrations" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
