import dynamic from "next/dynamic"
import { HeroButton } from "@/components/hero-button"

// Defer the form island until hero is visible
const HeroFormIsland = dynamic(
  () => import("@/components/hero-form-island").then(mod => mod.HeroFormIsland),
  { 
    ssr: true,
    loading: () => (
      <div className="h-[500px] w-full max-w-sm animate-pulse rounded-xl border border-border bg-muted/20 lg:w-[380px]" />
    )
  }
)

export function HeroSection() {
  return (
    <section className="bg-accent">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-10">
          {/* Left Content - Server Rendered */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="text-primary">
                   <path d="M7 1L9 5L13 5.5L10 8.5L11 13L7 11L3 13L4 8.5L1 5.5L5 5L7 1Z" fill="currentColor" />
                </svg>
                FairSpec Engine by Selectronyx
              </span>
            </div>

            <div>
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl lg:text-[2.75rem] lg:leading-[1.15]">
                Automate Global BOM Risk,
                <br className="hidden sm:block" />
                {" "}Compliance, and{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #1BABA1 0%, #0E7490 100%)",
                  }}
                >
                  Lifecycle Scoring
                </span>
              </h1>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                Stop negotiating blindly. Selectronyx instantly flags RoHS, REACH, SCIP (EU) and TSCA, Prop 65, UFLPA (North America) failures before they hit production. Get automated, audit-ready global intelligence in seconds.
              </p>
            </div>

            {/* Interactive Button island */}
            <div className="pt-2">
              <HeroButton />
            </div>

            {/* Stats - Server Side Rendering */}
            <div className="flex flex-wrap items-start gap-6 pt-2 sm:gap-8 sm:pt-4 lg:gap-12">
              <div>
                <p className="text-lg font-bold text-primary sm:text-xl lg:text-2xl">10,000+</p>
                <p className="mt-0.5 text-[10px] text-muted-foreground sm:text-xs">Components<br />Analyzed</p>
              </div>
              <div>
                <p className="text-lg font-bold text-primary sm:text-xl lg:text-2xl">15M+</p>
                <p className="mt-0.5 text-[10px] text-muted-foreground sm:text-xs">Monitoring Live<br />Component Lifecycles</p>
              </div>
              <div>
                <p className="text-lg font-bold text-primary sm:text-xl lg:text-2xl">230+</p>
                <p className="mt-0.5 text-[10px] text-muted-foreground sm:text-xs">REACH SVHC<br />Updates Tracked</p>
              </div>
              <div>
                <p className="text-lg font-bold text-primary sm:text-xl lg:text-2xl">24/7</p>
                <p className="mt-0.5 text-[10px] text-muted-foreground sm:text-xs">Monitoring</p>
              </div>
            </div>
          </div>

          {/* Right Form - Interactive Island with delayed load */}
          <div className="flex w-full flex-col">
             <HeroFormIsland />
          </div>
        </div>
      </div>
    </section>
  )
}
