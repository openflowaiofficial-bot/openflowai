import Header from "@/components/header"
import Footer from "@/components/footer"
import StackedAnalyticsCards from "@/components/stacked-analytics-cards"

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative bg-gradient-to-br from-[#1a2332] to-[#2a3f5f] pt-20 md:pt-24 lg:pt-28 pb-16 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 mb-6 backdrop-blur-sm border border-white/20">
              <svg className="h-5 w-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <span className="text-sm font-medium text-white">Analytics & Insights</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Real-Time Performance Data
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get actionable insights from every customer interaction with comprehensive analytics dashboards.
            </p>
            <button className="rounded-full bg-cyan-500 px-8 py-4 text-base md:text-lg font-medium text-white shadow-lg hover:bg-cyan-600 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <StackedAnalyticsCards />

      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">Track What Matters</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Monitor key performance indicators across all your AI agents and customer interactions
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: "Call Volume", desc: "Total calls handled by AI agents", icon: "📞" },
                { metric: "Response Time", desc: "Average time to answer", icon: "⚡" },
                { metric: "Conversion Rate", desc: "Calls to appointments booked", icon: "📈" },
                { metric: "Customer Satisfaction", desc: "CSAT scores from conversations", icon: "⭐" },
                { metric: "Peak Hours", desc: "Busiest times for your business", icon: "🕐" },
                { metric: "Call Duration", desc: "Average length of interactions", icon: "⏱️" },
                { metric: "Intent Analysis", desc: "Why customers are calling", icon: "🎯" },
                { metric: "ROI Tracking", desc: "Revenue generated per agent", icon: "💰" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-gray-200 p-4 sm:p-6 hover:border-cyan-300 hover:shadow-lg transition-all group"
                >
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{item.icon}</div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-gray-900 group-hover:text-cyan-600 transition-colors">
                    {item.metric}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
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
