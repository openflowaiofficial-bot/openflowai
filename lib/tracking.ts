/**
 * Site tracking — one place that loads every tracker and fires every event.
 *
 * Nothing loads until the visitor accepts the cookie banner (see
 * components/cookie-consent.tsx). Trackers whose IDs are not configured are
 * simply skipped, so the site works with none, some, or all of them set.
 *
 * Configure in Vercel → Project → Settings → Environment Variables:
 *   NEXT_PUBLIC_GA_MEASUREMENT_ID   e.g. G-XXXXXXXXXX   (Google Analytics 4)
 *   NEXT_PUBLIC_META_PIXEL_ID       Meta / Facebook pixel (defaults to the openflowai.io pixel)
 *   NEXT_PUBLIC_APOLLO_APP_ID       Apollo website-visitor tracker
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? ""
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "1769334424374974"
export const APOLLO_APP_ID = process.env.NEXT_PUBLIC_APOLLO_APP_ID ?? "68b904169a09db00191c0e14"

export const CONSENT_STORAGE_KEY = "openflow-cookie-consent"

/** The events the business cares about. Add here, not inline in pages. */
export type TrackedEvent =
  | "referrer_signed_up" // someone submitted the /referral sign-up form
  | "demo_booked" // someone submitted the demo intake form (then went to cal.com)
  | "book_call_clicked" // any "book a call" / cal.com link
  | "video_watched" // a Use Cases video was opened
  | "pricing_viewed" // the pricing page loaded
  | "web_call_started" // the "talk to our agent" widget was used

type EventParams = Record<string, string | number | boolean | undefined>

/** Meta's standard event names, where one fits. Everything else goes out as a custom event. */
const META_STANDARD: Partial<Record<TrackedEvent, string>> = {
  referrer_signed_up: "Lead",
  demo_booked: "Schedule",
  book_call_clicked: "Contact",
  pricing_viewed: "ViewContent",
}

type Win = Window & {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
  fbq?: ((...args: unknown[]) => void) & { queue?: unknown[]; loaded?: boolean; version?: string; callMethod?: unknown }
  _fbq?: unknown
  trackingFunctions?: { onLoad: (a: { appId: string }) => void }
  __openflowTrackersLoaded?: boolean
}

const win = () => (typeof window === "undefined" ? undefined : (window as Win))

export function hasConsent(): boolean {
  try {
    return localStorage.getItem(CONSENT_STORAGE_KEY) === "accepted"
  } catch {
    return false
  }
}

function addScript(src: string, onload?: () => void) {
  const s = document.createElement("script")
  s.src = src
  s.async = true
  if (onload) s.onload = onload
  document.head.appendChild(s)
}

function loadGoogleAnalytics(w: Win) {
  if (!GA_MEASUREMENT_ID) return
  w.dataLayer = w.dataLayer || []
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments)
  }
  w.gtag("js", new Date())
  w.gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true })
  addScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`)
}

function loadMetaPixel(w: Win) {
  if (!META_PIXEL_ID) return
  if (w.fbq) return
  // The standard pixel bootstrap, written out rather than minified so it can be read.
  type Fbq = NonNullable<Win["fbq"]>
  const fbq: Fbq = Object.assign(
    function pixel(...args: unknown[]) {
      if (fbq.callMethod) {
        ;(fbq.callMethod as (...a: unknown[]) => void)(...args)
      } else {
        fbq.queue!.push(args)
      }
    },
    { queue: [] as unknown[] },
  )
  fbq.loaded = true
  fbq.version = "2.0"
  w.fbq = fbq
  w._fbq = fbq
  addScript("https://connect.facebook.net/en_US/fbevents.js")
  w.fbq("init", META_PIXEL_ID)
  w.fbq("track", "PageView")
}

function loadApollo(w: Win) {
  if (!APOLLO_APP_ID) return
  const nocache = Math.random().toString(36).substring(7)
  addScript(`https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=${nocache}`, () => {
    w.trackingFunctions?.onLoad({ appId: APOLLO_APP_ID })
  })
}

/** Load every configured tracker. Safe to call more than once. */
export function loadTrackers() {
  const w = win()
  if (!w || w.__openflowTrackersLoaded) return
  w.__openflowTrackersLoaded = true
  loadGoogleAnalytics(w)
  loadMetaPixel(w)
  loadApollo(w)
}

/**
 * Fire a business event to every loaded tracker.
 * Silently does nothing before consent or when no tracker is configured.
 */
export function track(event: TrackedEvent, params: EventParams = {}) {
  const w = win()
  if (!w || !w.__openflowTrackersLoaded) return

  w.gtag?.("event", event, params)

  if (w.fbq) {
    const standard = META_STANDARD[event]
    if (standard) w.fbq("track", standard, { ...params, event_name: event })
    else w.fbq("trackCustom", event, params)
  }
}

/** Report a client-side route change to GA4 (the App Router doesn't reload the page). */
export function trackPageView(path: string) {
  const w = win()
  if (!w || !w.__openflowTrackersLoaded) return
  if (GA_MEASUREMENT_ID) w.gtag?.("event", "page_view", { page_path: path })
  w.fbq?.("track", "PageView")
}
