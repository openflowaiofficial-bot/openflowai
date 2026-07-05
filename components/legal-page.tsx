import type React from "react"
import Header from "@/components/header"
import { Footer } from "@/components/footer"

export function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string
  updated: string
  intro: string
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 pt-28 md:pt-36 pb-20 md:pb-28">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">{title}</h1>
        <p className="mt-3 text-sm text-gray-500">Last updated: {updated}</p>
        <p className="mt-6 text-[15px] leading-relaxed text-gray-600">{intro}</p>
        <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-gray-600 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-gray-900 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_a]:font-medium [&_a]:text-blue-600 hover:[&_a]:text-blue-700 [&_section]:space-y-3">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
