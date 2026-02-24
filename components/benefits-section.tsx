import { CheckCircle2, Factory, Users, Globe } from "lucide-react"

const benefits = [
  "Reduce compliance risks by up to 90%",
  "Save 40+ hours per month on manual checks",
  "Optimize BOM costs with intelligent recommendations",
  "Stay ahead of regulatory changes",
  "Improve product sustainability scores",
  "Streamline supply chain decisions",
]

const audiences = [
  {
    icon: Factory,
    title: "For Manufacturers",
    description:
      "Ensure every component meets regulatory standards and optimize your supply chain for maximum efficiency.",
    iconBg: "#EDE5F5",
    iconColor: "#7C3AED",
  },
  {
    icon: Users,
    title: "For Consultancies",
    description:
      "Deliver faster, more accurate compliance reports to your clients with automated analysis tools.",
    iconBg: "#FCE7F3",
    iconColor: "#DB2777",
  },
  {
    icon: Globe,
    title: "For Enterprises",
    description:
      "Scale your compliance operations globally with API access and advanced monitoring capabilities.",
    iconBg: "#D1FAE5",
    iconColor: "#059669",
  },
]

export function BenefitsSection() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              Benefits
            </span>
            <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
              Why Leading Companies Choose Selectronyx
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Join hundreds of manufacturers, consultancies, and enterprises who
              trust FairSpec for their BOM analysis needs.
            </p>
            <ul className="mt-6 flex flex-col gap-2.5">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-primary" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Cards */}
          <div className="flex flex-col gap-5">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="flex items-start gap-4 rounded-xl border border-border bg-background p-5 transition-all hover:shadow-md"
              >
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: audience.iconBg }}
                >
                  <audience.icon className="h-5 w-5" style={{ color: audience.iconColor }} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {audience.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {audience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
