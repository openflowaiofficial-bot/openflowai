import { Lock, Server, ShieldCheck, Activity, FileCheck, HeartHandshake } from "lucide-react"

const practices = [
  {
    icon: Lock,
    title: "Encrypted in transit",
    body: "Every request is served over TLS. Calls, messages, and customer data are protected on the wire.",
  },
  {
    icon: Server,
    title: "Keys stay server-side",
    body: "API credentials live on the server and are never exposed to the browser or shipped to the client.",
  },
  {
    icon: ShieldCheck,
    title: "SOC 2-grade infrastructure",
    body: "Built on Vercel and Retell — providers that maintain SOC 2 Type II compliance for the underlying platform.",
  },
  {
    icon: Activity,
    title: "Rate-limited & monitored",
    body: "Every endpoint is rate-limited and watched for abuse, so your account and callers stay protected.",
  },
  {
    icon: FileCheck,
    title: "Your data, your control",
    body: "Your conversations and customer data belong to you. Export it or have it deleted whenever you ask.",
  },
  {
    icon: HeartHandshake,
    title: "Built for regulated industries",
    body: "Working in healthcare or finance? Talk to us about your specific compliance requirements before you launch.",
  },
]

export function Security() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 px-4 md:px-8 py-24 md:py-40">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 md:mb-20 text-center px-4">
          <div className="mb-4 md:mb-6 inline-block rounded-full bg-blue-50 px-4 md:px-6 py-1.5 md:py-2">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-blue-600">
              Security &amp; Privacy
            </span>
          </div>
          <h2 className="mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Security and privacy, built in
          </h2>
          <p className="mx-auto max-w-2xl text-base md:text-lg leading-relaxed text-gray-600">
            We treat your data and your customers&apos; conversations with care — from encrypted transport to
            least-privilege access and full data ownership.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {practices.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 md:p-7 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-200"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{p.body}</p>
              </div>
            )
          })}
        </div>

        <p className="mt-10 text-center text-xs md:text-sm text-gray-500">
          Pursuing formal certifications as we grow. Need documentation for a security review?{" "}
          <a href="/partner-intake" className="font-medium text-blue-600 hover:text-blue-700">
            Get in touch
          </a>
          .
        </p>
      </div>
    </section>
  )
}
