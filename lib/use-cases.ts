/**
 * The Use Cases video library — one entry per kind of agent OpenFlow deploys.
 *
 * To publish a video: paste its Loom share link into `loomUrl`
 * (e.g. "https://www.loom.com/share/abc123..."). Entries with an empty
 * loomUrl render as "coming soon" and are kept in order.
 */

export type UseCase = {
  slug: string
  kind: string
  title: string
  hook: string
  what: string
  business: string
  loomUrl: string
}

export const USE_CASES: UseCase[] = [
  {
    slug: "receptionist",
    kind: "Inbound",
    title: "The receptionist",
    hook: "One call, two departments, zero transfers.",
    what: "Answers every line for a five-department dealership. Books the service visit, takes the finance question, and nothing gets lost on the way.",
    business: "Car dealership",
    loomUrl: "",
  },
  {
    slug: "setter",
    kind: "Outbound · Sales",
    title: "The setter",
    hook: "Form comes in. Lead's phone rings within the minute.",
    what: "Calls every new lead the moment the form lands, asks the qualifying questions, routes them to the right team, and books the strategy call — or hands them live to a free rep.",
    business: "Sales team running on inbound leads",
    loomUrl: "",
  },
  {
    slug: "recapture",
    kind: "Outbound · Old leads",
    title: "Client-list recapture",
    hook: "Two thousand people who asked and never booked.",
    what: "Works the dormant list nobody was ever going to call. Texts first, calls the ones who don't answer, books the yeses, and stops the moment someone says stop.",
    business: "Regenerative medicine clinic",
    loomUrl: "",
  },
  {
    slug: "retention",
    kind: "Outbound · Current clients",
    title: "Client retention",
    hook: "The rebook at six weeks. The no-show called back in a minute.",
    what: "Keeps the clients you already have coming back — one text at the right time, and a real call when someone misses an appointment.",
    business: "Hair studio",
    loomUrl: "",
  },
  {
    slug: "at-scale",
    kind: "Contact center",
    title: "Inbound at scale",
    hook: "Thousands of calls a month. No queue.",
    what: "Three teams, three calendars, one agent. Verifies who's calling, works out what they need, answers it or books the right person — a hundred times an hour.",
    business: "High-volume claims line",
    loomUrl: "",
  },
  {
    slug: "ora",
    kind: "Ora",
    title: "Ask your CRM",
    hook: "An owner's Monday morning in ninety seconds.",
    what: "Every agent writes into one place. Ora is how you read it: ask a question out loud, get the answer, tell it what to do next.",
    business: "Any",
    loomUrl: "",
  },
]

/** Turn a Loom share link into its embed URL. Returns "" for anything else. */
export function loomEmbedUrl(shareUrl: string): string {
  const m = shareUrl.match(/loom\.com\/(?:share|embed)\/([a-zA-Z0-9]+)/)
  return m ? `https://www.loom.com/embed/${m[1]}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true` : ""
}
