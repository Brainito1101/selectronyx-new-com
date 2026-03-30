import { ShieldCheck, Globe2 } from "lucide-react"

const regulations = {
  eu: [
    { name: "RoHS", label: "EU Directive" },
    { name: "REACH", label: "EU Regulation" },
    { name: "SCIP", label: "Waste Framework Directive" }
  ],
  na: [
    { name: "TSCA Section 6(h)", label: "North America" },
    { name: "Prop 65", label: "California Regulation" },
    { name: "UFLPA", label: "Trade Compliance" }
  ]
}

export function RegulatoryCoverageSection() {
  return (
    <section className="bg-accent py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-14">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Global Compliance
          </span>
          <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
            Global Regulatory Coverage
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Integrated intelligence for the world&apos;s most stringent regulatory markets.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* EU Column */}
          <div className="flex flex-col gap-5 rounded-2xl border border-border bg-background p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <span className="text-xl">🇪🇺</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">EU Regulations</h3>
            </div>
            
            <div className="flex flex-col gap-4">
              {regulations.eu.map((reg) => (
                <div key={reg.name} className="group flex items-center justify-between rounded-xl border border-transparent bg-secondary/50 p-4 transition-all hover:border-primary/20 hover:bg-background hover:shadow-sm">
                  <div>
                    <p className="text-base font-bold text-foreground">{reg.name}</p>
                    <p className="text-xs font-medium text-muted-foreground">{reg.label}</p>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    <ShieldCheck className="h-3.5 w-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* North America Column */}
          <div className="flex flex-col gap-5 rounded-2xl border border-border bg-background p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
                <span className="text-xl">🇺🇸</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">North American Regulations</h3>
            </div>

            <div className="flex flex-col gap-4">
              {regulations.na.map((reg) => (
                <div key={reg.name} className="group flex items-center justify-between rounded-xl border border-transparent bg-secondary/50 p-4 transition-all hover:border-primary/20 hover:bg-background hover:shadow-sm">
                  <div>
                    <p className="text-base font-bold text-foreground">{reg.name}</p>
                    <p className="text-xs font-medium text-muted-foreground">{reg.label}</p>
                  </div>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    <ShieldCheck className="h-3.5 w-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
