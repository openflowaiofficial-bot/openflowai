import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Use Cases — Watch Our AI Agents Work",
  description:
    "Short videos of OpenFlow AI agents doing the job: answering the front desk, calling new leads in under a minute, reviving old lead lists, keeping clients coming back, and handling thousands of calls a month.",
  alternates: { canonical: "/use-cases" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
