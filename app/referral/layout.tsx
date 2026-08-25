import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Refer a Business, Get Paid Every Month",
  description:
    "Know a local business that keeps missing calls? Introduce them to OpenFlow AI. When they become a client, you get 15% of what they pay us — every month, for as long as they stay. You never sell.",
  alternates: { canonical: "/referral" },
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}
