import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CallRecordingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative bg-gradient-to-br from-[#1a2332] to-[#2a3f5f] pt-20 md:pt-24 lg:pt-28 pb-16 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 mb-6 backdrop-blur-sm">
              <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm font-medium text-white">Call Recording</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transcription & Analysis
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Record, transcribe, and analyze every conversation with AI-powered insights and searchable transcripts.
            </p>
            <button className="rounded-full bg-blue-600 px-8 py-4 text-base md:text-lg font-medium text-white shadow-lg hover:bg-blue-700 transition-all w-full sm:w-auto">
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
              Powerful Recording Features
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                {
                  title: "Automatic Transcription",
                  desc: "Every call converted to searchable text in real-time",
                  icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
                },
                {
                  title: "Sentiment Analysis",
                  desc: "Understand customer emotions and satisfaction levels",
                  icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                },
                {
                  title: "Keyword Tagging",
                  desc: "Automatically tag and categorize conversations",
                  icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z",
                },
                {
                  title: "Compliance & Security",
                  desc: "Encrypted storage with role-based access controls",
                  icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-blue-50">
                    <svg
                      className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
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
