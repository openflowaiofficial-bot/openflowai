import Image from "next/image"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="bg-gradient-to-b from-[#1a2332] to-[#0f1419] px-4 md:px-8 py-20 md:py-32">
      <div className="mx-auto max-w-[1000px]">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6 md:mb-8 flex justify-center">
            <div className="relative h-16 w-16 md:h-20 md:w-20 opacity-90">
              <Image
                src="/openflow-icon-only.png"
                alt="OpenFlow AI"
                width={80}
                height={80}
                className="drop-shadow-sm"
              />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.15] tracking-tight text-white px-4">
            Ready to transform your business?
          </h2>

          {/* Subtext */}
          <p className="mx-auto mt-4 md:mt-6 max-w-[620px] text-base md:text-lg lg:text-[20px] leading-relaxed text-gray-300 px-4">
            Book a personalized demo and see how OpenFlow AI handles your calls — or tap the phone button in the corner
            to talk to a live AI agent right now.
          </p>

          {/* CTA */}
          <div className="mx-auto mt-8 md:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 px-4">
            <Link
              href="/partner-intake"
              className="h-12 md:h-14 rounded-full bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] px-8 text-sm md:text-[16px] font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 inline-flex items-center justify-center"
            >
              Book a demo
              <svg className="ml-2 h-4 w-4 md:h-5 md:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/how-it-works"
              className="h-12 md:h-14 rounded-full border border-white/25 bg-white/5 px-8 text-sm md:text-[16px] font-semibold text-white transition-all hover:bg-white/10 inline-flex items-center justify-center"
            >
              See how it works
            </Link>
          </div>

          {/* Honest reassurance */}
          <p className="mt-6 md:mt-8 text-xs md:text-[14px] text-gray-400 px-4">
            No long-term contracts — see it work on your own calls first.
          </p>
        </div>
      </div>
    </section>
  )
}
