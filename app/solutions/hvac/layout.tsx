import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "AI Answering Service for HVAC Companies",
  description:
    "An AI answering service for HVAC companies that captures every service call, dispatches urgent jobs, and books appointments even after hours.",
  alternates: { canonical: "/solutions/hvac" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
