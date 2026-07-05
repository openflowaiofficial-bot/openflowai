import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "AI Phone Agents for Medical & Dental Offices",
  description:
    "AI phone agents for medical and dental offices that answer patient calls, schedule and confirm visits, and handle overflow so front desks stay clear.",
  alternates: { canonical: "/solutions/medical-offices" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
