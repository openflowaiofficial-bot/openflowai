import Header from "@/components/header"
import { Footer } from "@/components/footer"
import { UseCaseCard } from "@/components/use-case-card"
import { TrackedLink } from "@/components/track"
import { USE_CASES } from "@/lib/use-cases"

const CAL_URL = "https://cal.com/openflowai-meeting/30min"

export default function UseCasesPage() {
  const published = USE_CASES.filter((u) => u.loomUrl).length

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-[#070b18] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[40%] h-[420px] w-[720px] max-w-[95vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[130px]" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(148,163,184,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.07) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#070b18] to-transparent" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 pt-28 pb-16 md:pt-36 md:pb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-blue-100 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            Use cases
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] text-balance">
            Watch the agents <span className="text-blue-400">do the job.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-300">
            Real calls, real texts, real bookings landing in the CRM. One short video for each kind of agent we run
            — from the front desk to a sales floor to a contact center.
          </p>

          <nav aria-label="Jump to a use case" className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
            {USE_CASES.map((u, i) => (
              <a
                key={u.slug}
                href={`#${u.slug}`}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-200 transition-colors hover:bg-white/10"
              >
                <span className="mr-2 font-mono text-xs text-slate-500">{String(i + 1).padStart(2, "0")}</span>
                {u.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ===== Library ===== */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {published === 0 && (
            <p className="mt-10 rounded-xl border border-blue-100 bg-blue-50 px-5 py-4 text-center text-sm text-blue-900">
              The videos are being recorded now. Everything below is what each one will show.
            </p>
          )}
          {USE_CASES.map((u, i) => (
            <UseCaseCard key={u.slug} useCase={u} index={i} />
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-balance">
            Any of this sound like your business?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Thirty minutes. We&apos;ll walk through your calls and show you what your agent would do with them.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <TrackedLink
              event="book_call_clicked"
              params={{ placement: "use_cases_footer" }}
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-600 px-7 py-3.5 text-base font-medium text-white shadow-lg shadow-blue-600/30 transition-all duration-200 hover:bg-blue-700 hover:-translate-y-0.5"
            >
              Book 30 minutes
            </TrackedLink>
            <a
              href="/referral"
              className="rounded-full border border-gray-300 bg-white px-7 py-3.5 text-base font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:-translate-y-0.5"
            >
              Know a business that needs this? Get paid
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
