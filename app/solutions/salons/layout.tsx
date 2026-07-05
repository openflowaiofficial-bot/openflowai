import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "AI Booking Agents for Salons",
  description:
    "AI booking agents for salons that answer calls and texts, fill the appointment book, and send reminders so your chairs stay busy all day.",
  alternates: { canonical: "/solutions/salons" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
