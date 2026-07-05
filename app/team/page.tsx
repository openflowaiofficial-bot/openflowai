"use client"

import Header from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

const team = [
  {
    name: "Daniel Kimes",
    role: "Founder",
    image: "/team/daniel-kimes.jpg",
    bio: "Daniel founded OpenFlow AI with a mission to transform how businesses communicate with their customers. With a deep passion for AI-driven automation, he leads the company's vision of making enterprise-grade conversational agents accessible to businesses of all sizes.",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#3FBBD0] mb-4">
            Our Team
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight text-balance mb-6">
            The people behind OpenFlow AI
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed text-pretty">
            A small, focused team building enterprise-grade AI agents that transform how businesses connect with their customers.
          </p>
        </div>
      </section>

      {/* Team Cards */}
      <section className="pb-20 md:pb-28 lg:pb-32 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {team.map((member) => (
              <div
                key={member.name}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>

                {/* Info */}
                <div className="p-6 sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#3FBBD0] mb-1">
                    {member.role}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                    {member.name}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 md:pb-28 lg:pb-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#0a1628] to-[#1a2d4e] rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Want to work with our team?
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
              Book a demo and see how OpenFlow AI can automate your customer experience.
            </p>
            <a
              href="/partner-intake"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#3FBBD0] text-white font-semibold rounded-full hover:bg-[#35a5b8] transition-colors duration-200 text-base sm:text-lg"
            >
              Get a Demo
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
