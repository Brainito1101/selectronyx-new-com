import { Shield, TrendingUp, Zap, BarChart3, Globe, FileText } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Compliance Assurance",
    description:
      "Ensure RoHS, REACH, TSCA, and Prop65 compliance across all components",
  },
  {
    icon: TrendingUp,
    title: "FairSpec Rating",
    description:
      "Get comprehensive R-R-S-TCO scores for every component in your BOM",
  },
  {
    icon: Zap,
    title: "Real-time Monitoring",
    description:
      "Track lifecycle status and receive alerts for component changes",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description:
      "Deep insights into sustainability, reliability, and cost optimization",
  },
  {
    icon: Globe,
    title: "Multi-Market Support",
    description:
      "Analyze compliance for EU, US, UK, and other global markets",
  },
  {
    icon: FileText,
    title: "Export Reports",
    description:
      "Generate professional PDF and CSV reports for stakeholders",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Features
          </span>
          <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
            Everything You Need for BOM Excellence
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Comprehensive tools to analyze, monitor, and optimize your bill of
            materials
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:mt-14">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group cursor-pointer rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg"
                style={{ backgroundImage: "linear-gradient(135deg, #1BABA1 0%, #0E7490 100%)" }}
              >
                <feature.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
