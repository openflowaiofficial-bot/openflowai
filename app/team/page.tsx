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
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center gap-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-500 hover:bg-[#0A66C2] hover:text-white transition-colors duration-200"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-900 hover:text-white transition-colors duration-200"
                      aria-label={`${member.name} X / Twitter`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
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
