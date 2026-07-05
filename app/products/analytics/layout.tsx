import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Conversation Analytics",
  description:
    "See every call and text at a glance with conversation analytics that track outcomes, intent, and trends so you know what your customers are asking for.",
  alternates: { canonical: "/products/analytics" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
