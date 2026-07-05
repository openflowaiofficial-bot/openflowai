"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const STORAGE_KEY = "openflow-cookie-consent"
const APOLLO_APP_ID = "68b904169a09db00191c0e14"

function loadApollo() {
  if (typeof window === "undefined") return
  if ((window as unknown as { __apolloLoaded?: boolean }).__apolloLoaded) return
  ;(window as unknown as { __apolloLoaded?: boolean }).__apolloLoaded = true
  const n = Math.random().toString(36).substring(7)
  const o = document.createElement("script")
  o.src = `https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=${n}`
  o.async = true
  o.defer = true
  o.onload = () => {
    const w = window as unknown as { trackingFunctions?: { onLoad: (a: { appId: string }) => void } }
    w.trackingFunctions?.onLoad({ appId: APOLLO_APP_ID })
  }
  document.head.appendChild(o)
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const choice = localStorage.getItem(STORAGE_KEY)
    if (choice === "accepted") {
      loadApollo()
    } else if (choice !== "declined") {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted")
    setVisible(false)
    loadApollo()
  }

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-xl sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-gray-600">
          We use cookies for analytics to understand how the site is used. See our{" "}
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
