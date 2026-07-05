import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Workflow Automations",
  description:
    "Build workflow automations that connect your calls and texts to your CRM, calendar, and tools, so every lead and follow-up happens without manual work.",
  alternates: { canonical: "/automations" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
