"use client"

import Image from "next/image"
import { useState, useRef, useCallback } from "react"
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
  },
  {
    quote:
      "In mechatronic development, selecting a component that goes obsolete two years into a product's lifecycle is a costly architectural failure. Selectronyx shifts lifecycle risk analysis from a reactive procurement task into an automated, instant check during the initial design phase. The predictive data is incredibly valuable.",
    name: "Declan O'Donoghue",
    title: "Senior Mechatronics Designer, Philips Healthcare",
    subtitle: "",
    imageSrc: null,
  },
  {
    quote:
      "A brilliant tool for hardware architects. It forces design teams to quantify supply chain and compliance risk before the HW hits the shopfloor.",
    name: "Dafni Efstratiou",
    title: "System Architect",
    subtitle: "Philips Personal Health",
    imageSrc: null,
  },
  {
    quote:
      "Selectronyx bridges the gap between hardware engineering and strategic procurement. It brings predictive, enterprise-grade supply chain intelligence directly to the engineer's desk.",
    name: "Simon Malone",
    title: "Industrialization Engineer",
    subtitle: "ASML",
    imageSrc: null,
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

export function TestimonialsSection() {
  const maxOffset = testimonials.length - CARDS_PER_PAGE
  const [offset, setOffset] = useState(0)

  const canPrev = offset > 0
  const canNext = offset < maxOffset

  const visibleTestimonials = testimonials.slice(offset, offset + CARDS_PER_PAGE)

  // ── Drag-to-scroll state ──
  const scrollRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  // Track if a real drag happened so we can suppress click events
  const didDrag = useRef(false)

  const onMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollRef.current
    if (!el) return
    isDragging.current = true
    didDrag.current = false
    startX.current = e.pageX - el.offsetLeft
    scrollLeft.current = el.scrollLeft
    el.style.cursor = "grabbing"
    el.style.userSelect = "none"
  }, [])

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return
    const el = scrollRef.current
    if (!el) return
    e.preventDefault()
    const x = e.pageX - el.offsetLeft
    const walk = (x - startX.current) * 1.2
    if (Math.abs(walk) > 4) didDrag.current = true
    el.scrollLeft = scrollLeft.current - walk
  }, [])

  const onMouseUp = useCallback(() => {
    isDragging.current = false
    const el = scrollRef.current
    if (el) {
      el.style.cursor = "grab"
      el.style.userSelect = ""
    }
  }, [])

  const onMouseLeave = useCallback(() => {
    if (isDragging.current) {
      isDragging.current = false
      const el = scrollRef.current
      if (el) {
        el.style.cursor = "grab"
        el.style.userSelect = ""
      }
    }
  }, [])

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[92%] px-4 sm:px-6 2xl:max-w-[1600px]">

        {/* Section heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by Hardware Teams
          </h2>
        </div>

        {/*
          Drag-scrollable wrapper on mobile / if content overflows.
          On md+ it stays as a 3-col grid — the overflow is hidden by the
          grid so no scrollbar appears on desktop.
        */}
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          className="grid gap-6 md:grid-cols-3 select-none cursor-grab overflow-x-auto"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {visibleTestimonials.map((t, idx) => (
            <div
              key={offset + idx}
              className="flex flex-col rounded-2xl border border-primary/10 bg-background p-6 shadow-[0_8px_30px_rgba(27,171,161,0.07)] transition-shadow hover:shadow-[0_12px_40px_rgba(27,171,161,0.14)] min-w-[280px]"
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

              {/* Quote */}
              <p className="text-[14px] leading-[1.6] text-foreground/80">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Prev / dots / Next navigation */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            onClick={() => setOffset((o) => Math.max(0, o - 1))}
            disabled={!canPrev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-background text-primary transition-all hover:bg-primary hover:text-white disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* One dot per offset position */}
          <div className="flex gap-2">
            {Array.from({ length: maxOffset + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setOffset(i)}
                aria-label={`Go to position ${i + 1}`}
                className={`h-2 rounded-full transition-all ${i === offset
                    ? "w-6 bg-primary"
                    : "w-2 bg-primary/20 hover:bg-primary/40"
                  }`}
              />
            ))}
          </div>

          <button
            onClick={() => setOffset((o) => Math.min(maxOffset, o + 1))}
            disabled={!canNext}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-background text-primary transition-all hover:bg-primary hover:text-white disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

      </div>
    </section>
  )
}
