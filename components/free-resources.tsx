"use client"

import { Download } from "lucide-react"

const ebooks = [
  {
    title: "The Prodigal AI",
    subtitle: "A Modern Parable for Small Business Owners",
    description: "Discover how two business owners made different choices about AI automation — and how it transformed their results.",
    href: "/ebooks/the-prodigal-ai.pdf",
    downloadName: "The-Prodigal-AI-OpenFlow.pdf",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "The Wholesaler's Edge",
    subtitle: "AI Automation for Wholesale & Distribution",
    description: "Learn how AI voice agents are revolutionizing lead capture and customer service in wholesale businesses.",
    href: "/ebooks/the-wholesalers-edge.pdf",
    downloadName: "The-Wholesalers-Edge-OpenFlow.pdf",
    color: "from-emerald-500 to-teal-600",
  },
]

export function FreeResources() {
  return (
    <section className="bg-[#f8f9fb] px-4 md:px-8 py-16 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-sm font-medium text-blue-600 mb-2">Free Resources</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
            Learn How AI Can Transform Your Business
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Download our free guides packed with real data and actionable insights.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {ebooks.map((ebook) => (
            <a
              key={ebook.title}
              href={ebook.href}
              download={ebook.downloadName}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ebook.color} flex items-center justify-center mb-4`}>
                <Download className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {ebook.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{ebook.subtitle}</p>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                {ebook.description}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                Download PDF
                <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
