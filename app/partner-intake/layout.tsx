import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Book a demo of OpenFlow AI to see how an AI voice agent can answer calls, qualify leads, and book appointments for your business.",
  alternates: { canonical: "/partner-intake" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
