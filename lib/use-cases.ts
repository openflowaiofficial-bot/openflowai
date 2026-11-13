/**
 * The Use Cases video library — one entry per kind of agent OpenFlow deploys.
 *
 * To publish a video: put the file in public/videos/use-cases/<slug>.mp4 (+ <slug>.jpg cover) and set
 * `video`, or paste a Loom share link into `loomUrl` (e.g. "https://www.loom.com/share/abc123...").
 * Entries with neither render as "coming soon" and are kept in order.
 *
 * `video.source` says what viewers are watching: "real" = real calls, re-voiced with names removed;
 * "demo" = a scripted demo with a fictional business. The card labels it either way.
 * The videos are built in openflowai-videos (src/usecases); re-render there and copy the files here.
 */

export type UseCase = {
  slug: string
  kind: string
  title: string
  hook: string
  what: string
  business: string
  loomUrl: string
  video?: { src: string; poster: string; length: string; source: "real" | "demo" }
}

const v = (slug: string, length: string, source: "real" | "demo") => ({
  src: `/videos/use-cases/${slug}.mp4`,
  poster: `/videos/use-cases/${slug}.jpg`,
  length,
  source,
})

export const USE_CASES: UseCase[] = [
  {
    slug: "receptionist",
    kind: "Inbound",
    title: "The receptionist",
    hook: "One call, two departments, zero transfers.",
    what: "Answers every line for a five-department dealership. Books the service visit, takes the finance question, and nothing gets lost on the way.",
    business: "Car dealership",
    loomUrl: "",
    video: v("receptionist", "1:53", "real"),
  },
  {
    slug: "setter",
    kind: "Outbound · Sales",
    title: "The setter",
    hook: "Form comes in. Lead's phone rings within the minute.",
    what: "Calls every new lead the moment the form lands, asks the qualifying questions, routes them to the right team, and books the strategy call — or hands them live to a free rep.",
    business: "Sales team running on inbound leads",
    loomUrl: "",
    video: v("setter", "1:06", "real"),
  },
  {
    slug: "recapture",
    kind: "Outbound · Old leads",
    title: "Client-list recapture",
    hook: "Two thousand people who asked and never booked.",
    what: "Works the dormant list nobody was ever going to call. Texts first, calls the ones who don't answer, books the yeses, and stops the moment someone says stop.",
    business: "Regenerative medicine clinic",
    loomUrl: "",
    video: v("recapture", "1:27", "demo"),
  },
  {
    slug: "retention",
    kind: "Outbound · Current clients",
    title: "Client retention",
    hook: "The rebook at six weeks. The no-show called back in a minute.",
    what: "Keeps the clients you already have coming back — one text at the right time, and a real call when someone misses an appointment.",
    business: "Hair studio",
    loomUrl: "",
    video: v("retention", "1:07", "demo"),
  },
  {
    slug: "at-scale",
    kind: "Contact center",
    title: "Inbound at scale",
    hook: "Thousands of calls a month. No queue.",
    what: "Three teams, three calendars, one agent. Verifies who's calling, works out what they need, answers it or books the right person — a hundred times an hour.",
    business: "High-volume claims line",
    loomUrl: "",
    video: v("at-scale", "1:04", "demo"),
  },
  {
    slug: "ora",
    kind: "Ora",
    title: "Ask your CRM",
    hook: "An owner's Monday morning in ninety seconds.",
    what: "Every agent writes into one place. Ora is how you read it: ask a question out loud, get the answer, tell it what to do next.",
    business: "Any",
    loomUrl: "",
    video: v("ora", "0:53", "demo"),
  },
]

/** Turn a Loom share link into its embed URL. Returns "" for anything else. */
export function loomEmbedUrl(shareUrl: string): string {
  const m = shareUrl.match(/loom\.com\/(?:share|embed)\/([a-zA-Z0-9]+)/)
  return m ? `https://www.loom.com/embed/${m[1]}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true` : ""
}
