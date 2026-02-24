import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

export function HowItWorksSection() {
  return (
    <section className="bg-secondary py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary mb-5">
            How It Works
          </div>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl leading-tight">
            Ethical Hardware Intelligence{" "}
            <span className="text-primary">in 3 Simple Steps</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Our proprietary FairSpec engine does the heavy lifting — providing
            audit-ready documentation in minutes.
          </p>
        </div>

        {/* ── Step 1 ── */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center mb-16 lg:mb-24">
          {/* Content */}
          <div>
            <div
              className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full text-base font-extrabold text-white shadow-lg"
              style={{ background: "linear-gradient(135deg, #1BABA1 0%, #0E7490 100%)" }}
            >
              1
            </div>
            <h3 className="text-xl font-bold text-foreground sm:text-2xl mb-3">
              Define the Scope
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base mb-6">
              Submit hardware categories or upload your Bill of Materials (BOM)
              for immediate evaluation against global regulatory benchmarks.
            </p>
            <ul className="space-y-3">
              {[
                "Upload CSV or Excel BOM files in seconds",
                "Select your target market region (NA, EU, APAC)",
                "Supports multi-country compliance frameworks",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Screenshot */}
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl ring-1 ring-black/5 bg-muted/30">
            <Image
              src="/image-3.png"
              alt="Upload Your BOM interface"
              width={960}
              height={640}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* ── Step 2 ── Full-width highlight card */}
        <div className="mb-16 lg:mb-24">
          <div className="relative rounded-2xl border border-primary/20 overflow-hidden">
            {/* Gradient background */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                background:
                  "radial-gradient(ellipse at 60% 50%, #1BABA1 0%, transparent 70%)",
              }}
            />
            <div className="relative p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                {/* Badge */}
                <div className="shrink-0">
                  <div
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full text-base font-extrabold text-white shadow-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, #1BABA1 0%, #0E7490 100%)",
                    }}
                  >
                    2
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground sm:text-2xl mb-2">
                    FairSpec Evaluation
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground sm:text-base mb-8">
                    Comprehensive assessment across our four core pillars of
                    ethical hardware evaluation — scored, weighted, and benchmarked
                    against global ESG standards.
                  </p>

                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {[
                      { emoji: "⚖️", label: "Integrity" },
                      { emoji: "🌿", label: "Sustainability" },
                      { emoji: "⚡", label: "Performance" },
                      { emoji: "🔍", label: "Lifecycle Transparency" },
                    ].map((pillar) => (
                      <div
                        key={pillar.label}
                        className="rounded-xl border border-primary/20 bg-background/80 backdrop-blur p-4 text-center transition-all hover:shadow-md hover:border-primary/40"
                      >
                        <div className="text-2xl mb-2">{pillar.emoji}</div>
                        <p className="text-xs font-semibold text-foreground leading-snug">
                          {pillar.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Step 3 ── Image on left, content on right */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Screenshot (left on lg) */}
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl ring-1 ring-black/5 bg-muted/30 order-2 lg:order-1">
            <Image
              src="/image-4.png"
              alt="Analysis history and audit-ready documentation"
              width={960}
              height={640}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Content (right on lg) */}
          <div className="order-1 lg:order-2">
            <div
              className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full text-base font-extrabold text-white shadow-lg"
              style={{ background: "linear-gradient(135deg, #1BABA1 0%, #0E7490 100%)" }}
            >
              3
            </div>
            <h3 className="text-xl font-bold text-foreground sm:text-2xl mb-3">
              Decision-Ready Output
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base mb-6">
              Receive a unified hardware score and audit-ready documentation to
              simplify internal stakeholder approvals — with full historical
              tracking for every BOM analysis.
            </p>
            <ul className="space-y-3">
              {[
                "FairSpec score per component, clearly explained",
                "Audit-ready documentation — exportable as PDF",
                "Historical BOM analysis stored and searchable",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
