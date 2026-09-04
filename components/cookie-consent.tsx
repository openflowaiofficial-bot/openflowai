"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CONSENT_STORAGE_KEY, hasConsent, loadTrackers, trackPageView } from "@/lib/tracking"

export function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()

  // On first load: honor a saved choice, or show the banner.
  useEffect(() => {
    let choice: string | null = null
    try {
      choice = localStorage.getItem(CONSENT_STORAGE_KEY)
    } catch {
      /* storage blocked — treat as no choice */
    }
    if (choice === "accepted") {
      loadTrackers()
    } else if (choice !== "declined") {
      setVisible(true)
    }
  }, [])

  // Report client-side navigations as page views once trackers are running.
  useEffect(() => {
    if (hasConsent()) trackPageView(pathname)
  }, [pathname])

  const accept = () => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, "accepted")
    } catch {
      /* ignore */
    }
    setVisible(false)
    loadTrackers()
  }

  const decline = () => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, "declined")
    } catch {
      /* ignore */
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-xl sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-gray-600">
          We use cookies for analytics and advertising to understand how the site is used. See our{" "}
          <Link href="/cookies" className="font-medium text-blue-600 hover:text-blue-700">
            Cookie Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={decline}
            className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
