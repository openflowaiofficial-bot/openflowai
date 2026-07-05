import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the team behind OpenFlow AI and the mission to help small businesses answer every call, text, and lead with dependable AI voice agents.",
  alternates: { canonical: "/team" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
