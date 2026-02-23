import { ClipboardList, BarChart3, FileCheck } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    step: "1. Define the Scope",
    description:
      "Submit hardware categories or upload your Bill of Materials (BOM) for immediate evaluation against global benchmarks.",
  },
  {
    icon: BarChart3,
    step: "2. FairSpec Evaluation",
    description:
      "Comprehensive assessment across our four core pillars of ethical hardware evaluation.",
    pillars: ["Integrity", "Sustainability", "Performance", "Lifecycle Transparency"],
  },
  {
    icon: FileCheck,
    step: "3. Decision-Ready Output",
    description:
      "Receive a unified hardware score and audit-ready documentation to simplify internal stakeholder approvals.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="bg-secondary py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Ethical Hardware Intelligence in 3 Simple Steps
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Our proprietary FairSpec engine does the heavy lifting, providing you
            with audit-ready documentation in minutes.
          </p>
        </div>

        {/* Step Cards */}
        <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-xl border border-border bg-background p-6 transition-all hover:shadow-md"
            >
              <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #1BABA1 0%, #0E7490 100%)",
                }}
              >
                <item.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {item.step}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              {item.pillars && (
                <ul className="mt-3 flex flex-col gap-1.5">
                  {item.pillars.map((pillar) => (
                    <li
                      key={pillar}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {pillar}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
