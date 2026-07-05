import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "AI Lead Qualification",
  description:
    "Qualify every inbound lead automatically by asking the right questions, scoring intent, and passing hot prospects straight to your sales team.",
  alternates: { canonical: "/products/lead-qualification" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
