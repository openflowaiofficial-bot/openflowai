"use client"

import { useState } from "react"
import { Play, Clock } from "lucide-react"
import { track } from "@/lib/tracking"
import { loomEmbedUrl, type UseCase } from "@/lib/use-cases"

const CAL_URL = "https://cal.com/openflowai-meeting/30min"

export function UseCaseCard({ useCase, index }: { useCase: UseCase; index: number }) {
  const [playing, setPlaying] = useState(false)
  const embed = loomEmbedUrl(useCase.loomUrl)
  const ready = embed !== ""

  const play = () => {
    if (!ready) return
    track("video_watched", { video: useCase.slug, title: useCase.title })
    setPlaying(true)
  }

  return (
    <article
      id={useCase.slug}
      className="grid scroll-mt-24 gap-8 border-t border-gray-200 py-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:gap-12 md:py-16"
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-blue-600">
          <span className="font-mono text-gray-400">{String(index + 1).padStart(2, "0")}</span>
          {useCase.kind}
        </div>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl text-balance">{useCase.title}</h2>
        <p className="mt-2 text-lg font-medium text-gray-900">{useCase.hook}</p>
        <p className="mt-4 leading-relaxed text-gray-600">{useCase.what}</p>
        <p className="mt-4 text-sm text-gray-500">
          Shown on: <span className="text-gray-700">{useCase.business}</span>
        </p>
        <div className="mt-auto pt-6">
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("book_call_clicked", { placement: `use_case_${useCase.slug}` })}
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md"
          >
            Book 30 minutes — we&apos;ll show you yours
          </a>
        </div>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#070b18] shadow-xl ring-1 ring-gray-900/10">
        {playing && ready ? (
          <iframe
            src={`${embed}&autoplay=1`}
            title={useCase.title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={play}
            disabled={!ready}
            aria-label={ready ? `Play: ${useCase.title}` : `${useCase.title} — video coming soon`}
            className="group absolute inset-0 flex h-full w-full flex-col items-center justify-center text-white disabled:cursor-default"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-1/2 h-[260px] w-[420px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/25 blur-[90px]" />
            </div>
            {ready ? (
              <>
                <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-sm transition-transform group-hover:scale-105">
                  <Play className="ml-1 h-7 w-7 fill-current" />
                </span>
                <span className="relative mt-4 text-sm font-medium text-slate-200">Watch · about 2 min</span>
              </>
            ) : (
              <>
                <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
                  <Clock className="h-6 w-6 text-slate-300" />
                </span>
                <span className="relative mt-4 text-sm font-medium text-slate-300">Video coming soon</span>
              </>
            )}
          </button>
        )}
      </div>
    </article>
  )
}
