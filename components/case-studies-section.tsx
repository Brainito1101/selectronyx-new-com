import Image from "next/image"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    tag: "IT HARDWARE",
    tagColor: "#1BABA1",
    image: "https://storage.googleapis.com/msgsndr/jNVneWAhhTNAGSr6GqmX/media/697b37d0f7a877fff01de21e.png",
    imageAlt: "Enterprise IT Hardware evaluation dashboard",
    title: "Enterprise IT Hardware Evaluation",
    stats: [
      { value: "32%", label: "FASTER CYCLE" },
      { value: "100%", label: "COMPLIANCE" },
    ],
    description:
      "Reduced procurement overhead for a Fortune 500 company while ensuring strict adherence to ethical sourcing guidelines across 12 countries.",
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
  {
    tag: "ESG TRANSFORMATION",
    tagColor: "#1BABA1",
    image: "https://storage.googleapis.com/msgsndr/jNVneWAhhTNAGSr6GqmX/media/697b37cf1fd82785b78fcf8d.png",
    imageAlt: "ESG Analytics dashboard showing sustainability metrics",
    title: "ESG-Driven Procurement Transformation",
    stats: [
      { value: "2.4M", label: "CO2 SAVED (T)" },
      { value: "15%", label: "ROI INCREASE" },
    ],
    description:
      "Implemented FairSpec scoring to automate sustainability auditing for global hardware acquisitions, leading to significant carbon reduction.",
    challenge:
      "A sustainability-focused organization needed defensible documentation for hardware sourcing.",
    solution:
      "FairSpec scoring aligned vendor evaluation with ESG governance standards.",
    outcomes: [
      "Improved sustainability reporting",
      "Stronger board-level procurement transparency",
    ],
  },
]

export function CaseStudiesSection() {
  return (
    <section className="bg-secondary py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Proven Procurement Impact
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
              See how leading organizations are leveraging Selectronyx to meet
              their ESG and performance targets.
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary">
            View all case studies
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>

        {/* Case Study Cards */}
        <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background transition-all hover:shadow-lg"
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
