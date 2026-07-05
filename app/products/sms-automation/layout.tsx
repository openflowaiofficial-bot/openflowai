import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "AI SMS Automation",
  description:
    "Automate two-way text conversations that reply to leads instantly, answer questions, send reminders, and follow up until every prospect gets a response.",
  alternates: { canonical: "/products/sms-automation" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
