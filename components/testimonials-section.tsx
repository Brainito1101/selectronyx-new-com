"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "Selectronyx was born during my time at ASML. Whilst dealing with high BOM complexity I realized that to truly force transparency in the electronics supply chain, we needed to make ethical, risk-averse choices quantifiable. We built the FairSpec engine to give hardware teams the automated, audit-ready intelligence I wish I'd had. We will set a new Gold Standard for sustainable, compliant, and cost-effective procurement.",
    name: "Ian Levoi",
    title: "Founder of Selectronyx",
    subtitle: "",
    imageSrc:
      "https://res.cloudinary.com/dspez5cnn/image/upload/q_auto/f_auto/v1775128401/Frame_416_rm4cbb.png",
    linkedIn: "https://www.linkedin.com/company/selectronyx/",
  },
  {
    quote:
      "In mechatronic development, selecting a component that goes obsolete two years into a product's lifecycle is a costly architectural failure. Selectronyx shifts lifecycle risk analysis from a reactive procurement task into an automated, instant check during the initial design phase. The predictive data is incredibly valuable.",
    name: "Declan O'Donoghue",
    title: "Senior Mechatronics Designer",
    subtitle: "",
    imageSrc: null,
    linkedIn: "https://www.linkedin.com/",
  },
  {
    quote:
      "A brilliant tool for hardware architects. It forces design teams to quantify supply chain and compliance risk before the HW hits the shopfloor.",
    name: "Dafni Efstratiou",
    title: "System Architect",
    subtitle: "Philips Personal Health",
    imageSrc: null,
    linkedIn: "https://www.linkedin.com/",
  },
]

const CARDS_PER_PAGE = 3

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}

// Avatar background uses theme primary color

export function TestimonialsSection() {
  const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE)
  const [page, setPage] = useState(0)

  const visibleStart = page * CARDS_PER_PAGE
  const visibleTestimonials = testimonials.slice(
    visibleStart,
    visibleStart + CARDS_PER_PAGE
  )

  const canPrev = page > 0
  const canNext = page < totalPages - 1

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      {/* Increased container width to reduce left/right space */}
      <div className="mx-auto max-w-[92%] px-4 sm:px-6 2xl:max-w-[1600px]">

        {/* Section heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by Hardware Teams
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {visibleTestimonials.map((t, idx) => (
            <div
              key={visibleStart + idx}
              className="flex flex-col rounded-2xl border border-primary/10 bg-background p-6 shadow-[0_8px_30px_rgba(27,171,161,0.07)] transition-shadow hover:shadow-[0_12px_40px_rgba(27,171,161,0.14)]"
            >
              {/* Top row: Avatar + Name/Title */}
              <div className="mb-4 flex items-center gap-3">
                {/* Avatar */}
                {t.imageSrc ? (
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-primary/20 shadow-sm">
                    <Image
                      src={t.imageSrc}
                      alt={t.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-12 w-12 shrink-0 rounded-full bg-primary/80 flex items-center justify-center shadow-sm">
                    <span className="text-lg font-bold text-white">
                      {getInitials(t.name)}
                    </span>
                  </div>
                )}

                {/* Name + title */}
                <div className="min-w-0 flex-1">
                  <p className="text-[15px] font-semibold text-foreground">{t.name}</p>
                  <p className="text-[13px] text-foreground/60">
                    {t.title}{t.subtitle ? `, ${t.subtitle}` : ""}
                  </p>
                </div>
              </div>

              {/* Quote text */}
              <p className="text-[14px] leading-[1.6] text-foreground/80">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>

        {/* Navigation arrows — only shown when there are multiple pages */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={!canPrev}
              aria-label="Previous testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-background text-primary transition-all hover:bg-primary hover:text-white disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Page dots */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  aria-label={`Go to page ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === page
                      ? "w-6 bg-primary"
                      : "w-2 bg-primary/20 hover:bg-primary/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={!canNext}
              aria-label="Next testimonials"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-background text-primary transition-all hover:bg-primary hover:text-white disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}

      </div>
    </section>
  )
}
