"use client"

interface CaseStudy {
  company: string
  industry: string
  timeframe: string
  description: string
  results: {
    metric: string
    value: string
    description: string
  }[]
  secondaryStats: {
    metric: string
    description: string
  }[]
  image: string
}

const caseStudy: CaseStudy = {
  company: "O'Daniel Mazda",
  industry: "Car Dealership",
  timeframe: "October 2025 – May 2026",
  description:
    "OpenFlow AI deployed Stacy, our intelligent voice agent, to handle every inbound call at O'Daniel Mazda. Stacy turned missed calls into revenue opportunities — qualifying sales leads, booking service appointments, and routing callers to the right department instantly.",
  results: [
    { metric: "837", value: "driven", description: "Appointment scheduling conversations" },
    { metric: "108", value: "confirmed", description: "Appointments booked end-to-end" },
    { metric: "935", value: "captured", description: "Sales conversations qualified" },
    { metric: "1,832", value: "routed", description: "Service opportunities handled" },
  ],
  secondaryStats: [
    { metric: "176", description: "CX-5 inquiries" },
    { metric: "65", description: "CX-90 inquiries" },
    { metric: "49", description: "Mazda3 inquiries" },
    { metric: "27", description: "Trade-in opportunities" },
    { metric: "551", description: "Successful transfers" },
    { metric: "622", description: "Repeat callers" },
    { metric: "17.8%", description: "Positive sentiment" },
    { metric: "1.4%", description: "Negative sentiment" },
  ],
  image: "/professional-car-dealership-navy-lighting.jpg",
}

export function CaseStudies() {
  return (
    <section className="relative bg-[#e8e5f0] py-12 sm:py-16 md:py-20 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-8">
        <div className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-center px-2 sm:px-4">
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-gray-900 leading-tight">
            Real Results from Real Clients
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-gray-600 px-2">
            See how businesses are transforming customer communication with OpenFlow AI
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-24">
          {/* Left Column - Case Study Card */}
          <div>
            <div className="overflow-hidden rounded-xl sm:rounded-2xl bg-white shadow-xl">
              <img
                src={caseStudy.image}
                alt={caseStudy.company}
                className="h-52 sm:h-60 md:h-72 lg:h-80 w-full object-cover"
              />
              <div className="p-5 sm:p-6 md:p-7 lg:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-[#2563eb]">
                    {caseStudy.industry}
                  </span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs sm:text-sm text-gray-500">{caseStudy.timeframe}</span>
                </div>
                <h3 className="mb-3 sm:mb-4 md:mb-5 lg:mb-6 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
                  {caseStudy.company}
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 mb-6">
                  {caseStudy.description}
                </p>
                
                {/* Secondary Stats Grid */}
                <div className="grid grid-cols-4 gap-3 pt-5 border-t border-gray-100">
                  {caseStudy.secondaryStats.slice(0, 4).map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <p className="text-lg sm:text-xl font-bold text-gray-900">{stat.metric}</p>
                      <p className="text-xs text-gray-500 leading-tight">{stat.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Results Panel */}
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <div className="rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#1a2332] to-[#2a3f5f] p-6 sm:p-7 md:p-8 shadow-2xl">
              <h3 className="mb-5 sm:mb-6 text-xl sm:text-2xl md:text-2xl font-light text-white">
                Opportunities Created
              </h3>
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {caseStudy.results.map((result, idx) => (
                  <div key={idx} className="border-l-4 border-cyan-400/60 pl-4">
                    <div className="mb-1.5 flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl md:text-4xl font-bold text-white">{result.metric}</span>
                      <span className="text-base md:text-lg text-cyan-300">{result.value}</span>
                    </div>
                    <p className="text-sm md:text-base leading-relaxed text-white/90">{result.description}</p>
                  </div>
                ))}
              </div>
              
              {/* Caller Experience Quality */}
              <div className="mt-6 sm:mt-7 md:mt-8 border-t border-white/20 pt-5 sm:pt-6">
                <p className="text-sm font-medium text-white/80 mb-4">Caller Experience Quality</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-emerald-400">17.8%</p>
                    <p className="text-xs text-white/70">Positive sentiment</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-emerald-400">1.4%</p>
                    <p className="text-xs text-white/70">Negative sentiment</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-white">551</p>
                    <p className="text-xs text-white/70">Successful transfers</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <p className="text-2xl font-bold text-white">622</p>
                    <p className="text-xs text-white/70">Repeat callers</p>
                  </div>
                </div>
              </div>

              {/* Service Revenue Impact */}
              <div className="mt-6 sm:mt-7 md:mt-8 border-t border-white/20 pt-5 sm:pt-6">
                <p className="text-sm font-medium text-white/80 mb-4">Service Department Impact</p>
                <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white/90 text-sm">Service Calls Handled</span>
                    <span className="text-2xl font-bold text-white">1,832</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white/90 text-sm">Confirmed Appointments</span>
                    <span className="text-2xl font-bold text-white">108</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/90 text-sm">Additional Appointment Activity</span>
                    <span className="text-2xl font-bold text-white">~729</span>
                  </div>
                </div>
                
                <p className="text-xs text-white/60 mb-3">Estimated Gross Profit (30% conversion on activity calls)</p>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-emerald-400">$49K</p>
                  <p className="text-xs text-white/50 mt-1">~325 ROs × $300 × 50%</p>
                </div>
              </div>

              {/* Sales Revenue Impact */}
              <div className="mt-6 sm:mt-7 md:mt-8 border-t border-white/20 pt-5 sm:pt-6">
                <p className="text-sm font-medium text-white/80 mb-4">Sales Department Impact</p>
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white/90 text-sm">Sales Calls Qualified</span>
                    <span className="text-2xl font-bold text-white">935</span>
                  </div>
                </div>
                
                <p className="text-xs text-white/60 mb-3">Estimated Vehicles Sold (8% phone lead conversion)</p>
                <div className="bg-white/10 rounded-lg p-4 text-center mb-4">
                  <p className="text-3xl font-bold text-cyan-400">~75</p>
                  <p className="text-xs text-white/50 mt-1">vehicles sold</p>
                </div>

                <p className="text-xs text-white/60 mb-3">Estimated Gross Profit</p>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <p className="text-3xl font-bold text-cyan-400">$187K</p>
                  <p className="text-xs text-white/50 mt-1">75 × $2,500</p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/20">
                <p className="text-xs text-white/70 mb-1">Case Study</p>
                <p className="text-base sm:text-lg md:text-xl font-medium text-white">
                  {caseStudy.company}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
