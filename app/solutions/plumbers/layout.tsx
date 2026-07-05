import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "AI Answering Service for Plumbers",
  description:
    "An AI answering service for plumbers that answers every call, prioritizes emergencies, and books jobs so you never lose work while on a site.",
  alternates: { canonical: "/solutions/plumbers" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
