"use client"

import { LeadFormEmbed } from "@/components/lead-form-embed"

interface CtaSectionProps {
  onFormSubmit?: () => void
}

export function CtaSection({ onFormSubmit }: CtaSectionProps) {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Get Started
          </span>
          <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
            Ready to Transform Your BOM Analysis?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Fill out the form below and our team will get back to you within 24
            hours
          </p>
        </div>

        {/* Form - layered card with embedded form */}
        <div className="mx-auto mt-10 max-w-lg sm:mt-12">
          <div className="rounded-2xl border border-border bg-secondary/50 p-4 shadow-sm sm:p-6">
            <div className="overflow-hidden rounded-xl border border-border bg-background">
              <LeadFormEmbed className="h-[500px] w-full" id="cta" onFormSubmit={onFormSubmit} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
