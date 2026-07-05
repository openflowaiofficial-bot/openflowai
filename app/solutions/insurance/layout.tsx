import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "AI Voice Agents for Insurance Agencies",
  description:
    "AI voice agents for insurance agencies that answer calls, qualify prospects, and route quote requests to producers so no policy inquiry goes cold.",
  alternates: { canonical: "/solutions/insurance" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
