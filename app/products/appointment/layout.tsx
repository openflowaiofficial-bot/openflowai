import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "AI Appointment Booking",
  description:
    "Let AI book, reschedule, and confirm appointments directly on your calendar over calls and texts, cutting no-shows with automatic reminders.",
  alternates: { canonical: "/products/appointment" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
