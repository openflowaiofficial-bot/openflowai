import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "AI Voice Agents for Car Dealerships",
  description:
    "AI voice agents for car dealerships that answer sales and service calls, qualify buyers, and book test drives and appointments around the clock.",
  alternates: { canonical: "/solutions/car-dealerships" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
