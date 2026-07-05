import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "AI Answering for Home Services",
  description:
    "AI answering for home services and handyman businesses that fields inquiries, quotes common jobs, and schedules work while you are on the tools.",
  alternates: { canonical: "/solutions/handyman" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
