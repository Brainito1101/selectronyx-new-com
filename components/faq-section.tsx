"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is FairSpec?",
    answer:
      "FairSpec is Selectronyx's structured hardware intelligence framework that evaluates vendors using measurable, ethical scoring pillars.",
  },
  {
    question: "Is this only for large enterprises?",
    answer:
      "No. While built for enterprise-grade procurement, mid-sized organizations with structured sourcing needs also benefit significantly.",
  },
  {
    question: "Does FairSpec replace our existing RFP process?",
    answer:
      "No. It enhances it by adding standardized intelligence scoring and documentation.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Initial demo access is immediate. Full integration timelines depend on scope and hardware category.",
  },
  {
    question: "How is the score calculated?",
    answer:
      "Scores are generated using structured evaluation models across integrity, sustainability, performance, and lifecycle transparency criteria.",
  },
  {
    question: "Is the data audit-ready?",
    answer:
      "Yes. FairSpec produces documentation aligned with governance and compliance expectations.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section className="bg-secondary py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="mt-10 flex flex-col gap-3 sm:mt-12">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-border bg-background transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-foreground sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
