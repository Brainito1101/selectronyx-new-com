"use client"

import { ArrowRight } from "lucide-react"
import { LeadFormEmbed } from "@/components/lead-form-embed"

interface HeroSectionProps {
  onGetStartedClick?: () => void
  formSubmitted?: boolean
  onFormSubmit?: () => void
}

export function HeroSection({ onGetStartedClick, formSubmitted, onFormSubmit }: HeroSectionProps) {
  const handleClick = () => {
    if (formSubmitted) {
      window.open("https://app.selectronyx.com/", "_blank", "noopener,noreferrer")
    } else {
      onGetStartedClick?.()
    }
  }
  return (
    <section className="bg-accent">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-10">
          {/* Left Content */}
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
                Transform Your BOM
                <br className="hidden sm:block" />
                {" "}Analysis with{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #1BABA1 0%, #0E7490 100%)",
                  }}
                >
                  AI Powered Intelligence
                </span>
              </h1>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                Ensure compliance, optimize costs, and improve sustainability
                across your entire bill of materials with our comprehensive
                FairSpec rating system.
              </p>
            </div>

            <div>
              <button
                onClick={handleClick}
                className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-lg sm:gap-2 sm:px-6 sm:py-2.5 sm:text-sm"
                style={{
                  backgroundImage: "linear-gradient(135deg, #1BABA1 0%, #0E7490 100%)",
                }}
              >
                Get Started Free
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-start gap-6 pt-2 sm:gap-8 sm:pt-4 lg:gap-12">
              <div>
                <p className="text-lg font-bold text-primary sm:text-xl lg:text-2xl">10,000+</p>
                <p className="mt-0.5 text-[10px] text-muted-foreground sm:text-xs">Components<br />Analyzed</p>
              </div>
              <div>
                <p className="text-lg font-bold text-primary sm:text-xl lg:text-2xl">500+</p>
                <p className="mt-0.5 text-[10px] text-muted-foreground sm:text-xs">BOMs Processed</p>
              </div>
              <div>
                <p className="text-lg font-bold text-primary sm:text-xl lg:text-2xl">99.9%</p>
                <p className="mt-0.5 text-[10px] text-muted-foreground sm:text-xs">Accuracy Rate</p>
              </div>
              <div>
                <p className="text-lg font-bold text-primary sm:text-xl lg:text-2xl">24/7</p>
                <p className="mt-0.5 text-[10px] text-muted-foreground sm:text-xs">Monitoring</p>
              </div>
            </div>
          </div>

          {/* Right Form - Embedded */}
          <div className="w-full max-w-sm lg:w-[380px]">
            <div className="overflow-hidden rounded-xl border border-border bg-background shadow-lg">
              <LeadFormEmbed className="h-[500px] w-full" id="hero" onFormSubmit={onFormSubmit} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
