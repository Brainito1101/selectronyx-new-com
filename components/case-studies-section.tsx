"use client"

import { useState } from "react"
import Image from "next/image"
import { X, CheckCircle2, Lightbulb, Target, TrendingUp } from "lucide-react"

const caseStudies = [
  {
    tag: "IT HARDWARE",
    tagColor: "#1BABA1",
    image: "/image-5.png",
    imageAlt: "Enterprise IT Hardware evaluation dashboard",
    title: "Enterprise IT Hardware Evaluation",
    stats: [
      { value: "32%", label: "FASTER CYCLE" },
      { value: "100%", label: "COMPLIANCE" },
    ],
    description:
      "Reduced procurement overhead for a Fortune 500 company while ensuring strict adherence to ethical sourcing guidelines across 12 countries.",
    detail: {
      challenge:
        "An enterprise IT team struggled to justify vendor selection beyond price and performance benchmarks.",
      solution:
        "FairSpec standardized evaluation across ESG metrics and lifecycle transparency.",
      outcomes: [
        "32% faster vendor decision cycle",
        "Improved internal audit confidence",
        "Clear ESG reporting alignment",
      ],
    },
  },
  {
    tag: "ESG TRANSFORMATION",
    tagColor: "#1BABA1",
    image: "/image-6.png",
    imageAlt: "ESG Analytics dashboard showing sustainability metrics",
    title: "ESG-Driven Procurement Transformation",
    stats: [
      { value: "2.4M", label: "CO2 SAVED (T)" },
      { value: "15%", label: "ROI INCREASE" },
    ],
    description:
      "Implemented FairSpec scoring to automate sustainability auditing for global hardware acquisitions, leading to significant carbon reduction.",
    detail: {
      challenge:
        "A sustainability-focused organization needed defensible documentation for hardware sourcing.",
      solution:
        "FairSpec scoring aligned vendor evaluation with ESG governance standards.",
      outcomes: [
        "Improved sustainability reporting",
        "Stronger board-level procurement transparency",
        "Reduced compliance risk exposure",
      ],
    },
  },
]

type CaseStudy = (typeof caseStudies)[number]

export function CaseStudiesSection() {
  const [selected, setSelected] = useState<CaseStudy | null>(null)

  return (
    <>
      <section className="bg-secondary py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-10 sm:mb-12">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Case Studies
            </h2>

          </div>

          {/* Case Study Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {caseStudies.map((study) => (
              <article
                key={study.title}
                onClick={() => setSelected(study)}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-border bg-background transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <span
                    className="absolute left-4 top-4 z-10 rounded px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
                    style={{ backgroundColor: study.tagColor }}
                  >
                    {study.tag}
                  </span>
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-base font-bold text-foreground sm:text-lg">
                    {study.title}
                  </h3>

                  {/* Stats */}
                  <div className="mt-3 flex items-center gap-6">
                    {study.stats.map((stat) => (
                      <div key={stat.label}>
                        <p className="text-xl font-bold text-foreground sm:text-2xl">
                          {stat.value}
                        </p>
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {study.description}
                  </p>

                  {/* CTA hint */}
                  <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                    View case study →
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Detail Modal ── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          style={{ backdropFilter: "blur(6px)", backgroundColor: "rgba(0,0,0,0.55)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-background shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: "modalIn 0.22s cubic-bezier(0.22,1,0.36,1) both",
            }}
          >
            {/* Modal Image Header */}
            <div className="relative aspect-[16/7] overflow-hidden rounded-t-2xl">
              <span
                className="absolute left-4 top-4 z-10 rounded px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
                style={{ backgroundColor: selected.tagColor }}
              >
                {selected.tag}
              </span>
              <Image
                src={selected.image}
                alt={selected.imageAlt}
                fill
                className="object-cover"
              />
              {/* Dark gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>

            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Body */}
            <div className="p-6 sm:p-8">
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                {selected.title}
              </h2>

              {/* Stats row */}
              <div className="mt-4 flex flex-wrap gap-6">
                {selected.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-extrabold text-primary">
                      {stat.value}
                    </p>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-5">
                {/* Challenge */}
                <div className="rounded-xl border border-border bg-secondary/50 p-5">
                  <div className="mb-2 flex items-center gap-2 text-sm font-bold text-foreground">
                    <Target className="h-4 w-4 text-primary" />
                    Challenge
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {selected.detail.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="rounded-xl border border-border bg-secondary/50 p-5">
                  <div className="mb-2 flex items-center gap-2 text-sm font-bold text-foreground">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    Solution
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {selected.detail.solution}
                  </p>
                </div>

                {/* Outcomes */}
                <div className="rounded-xl border border-border bg-secondary/50 p-5">
                  <div className="mb-3 flex items-center gap-2 text-sm font-bold text-foreground">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    Outcome
                  </div>
                  <ul className="space-y-2.5">
                    {selected.detail.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal animation keyframe */}
      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(12px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </>
  )
}
