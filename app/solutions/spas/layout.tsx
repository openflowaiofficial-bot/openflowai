import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "AI Booking for Spas & Wellness",
  description:
    "AI booking for spas and wellness studios that handles reservations, answers service questions, and reduces no-shows with automatic confirmations.",
  alternates: { canonical: "/solutions/spas" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
