"use client"

import { useEffect } from "react"
import type { AnchorHTMLAttributes, ReactNode } from "react"
import { track, type TrackedEvent } from "@/lib/tracking"

type Params = Record<string, string | number | boolean | undefined>

/** Fires an event once when the page mounts. Drop it into any server page. */
export function TrackPageEvent({ event, params }: { event: TrackedEvent; params?: Params }) {
  useEffect(() => {
    track(event, params)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event])
  return null
}

/** A plain <a> that reports a click before navigating. Use for cal.com / booking links. */
export function TrackedLink({
  event,
  params,
  children,
  onClick,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { event: TrackedEvent; params?: Params; children: ReactNode }) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        track(event, { ...params, href: rest.href })
        onClick?.(e)
      }}
    >
      {children}
    </a>
  )
}
