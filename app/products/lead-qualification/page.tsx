import Header from "@/components/header"
import Footer from "@/components/footer"

export default function LeadQualificationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative bg-gradient-to-br from-[#1a2332] to-[#2a3f5f] py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 backdrop-blur-sm">
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <span className="text-xs sm:text-sm font-medium text-white">Lead Qualification</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Smart Lead Scoring & Routing
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Automatically qualify leads during conversations and route high-value prospects to your sales team
              instantly.
            </p>
            <button className="rounded-full bg-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-medium text-white shadow-lg hover:bg-blue-700 transition-all w-full sm:w-auto">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
              Intelligent Lead Management
            </h2>
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  title: "Automatic Scoring",
                  desc: "AI evaluates lead quality based on conversation signals and intent",
                  icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
                },
                {
                  title: "Priority Routing",
                  desc: "Hot leads automatically escalated to your best sales reps",
                  icon: "M13 10V3L4 14h7v7l9-11h-7z",
                },
                {
                  title: "CRM Integration",
                  desc: "Lead scores and notes synced directly to your CRM",
                  icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start rounded-2xl border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                    <svg
                      className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
